import { getItemByIndex } from '../utils';

/**
 * Provides utility classes to traverse JSON objects.
 *
 */
export class JSONUtils {

    /** RegExp /\$\.(?<dataPath>\w+(\/\w+)*)/ */
    public static parentPathReg = '\\$\\.([\\w\\-]+(\\/[\\w\\-]+)*)';
    /** RegExp /\$\(((?<flattern>\w+)(\:(?<filter>\w+=\w+))?)\)\/?(?<dataPath>(\w+\/?\w+)*)?/ */
    public static flatternPathReg = `\\$\\((([\\w\\-]+)(\\:([\\w\\-]+=[\\w\\-]+))?)\\)\\/?(([\\w\\-]+\\/?[\\w\\-]+)*)?`;
    /**
     * A utility method to find values in the JSON tree.
     * It is similar as JSONPath (or XML Path). But it
     *  - supports recursive search
     *  - can create object structure if missing.
     * @param value - a simple Javascript object
     * @param path  - path (check out json.utils.spec.ts for syntax)
     * @param defaultValue - if present and @param path is syntactically correct. It will create an object structure accordignly.
     *  If NULL, then it will return null.
     * @example
     * const newObject = { someObject: 11 };
     * const result = JSONUtils.find(testObject, '$.parent/newProperty', newObject);
     */
    public static find(objectValue: object, path: string, defaultValue?: any): any {
      if (path === '$') {
        return objectValue;
      }

      const pMatch = JSONUtils.getParentPathMatch(path);
      if (pMatch) {
        return JSONUtils.getDataPathProps(objectValue, pMatch.groups.dataPath, defaultValue);
      }

      const fMatch = JSONUtils.getFlatternPathMatch(path);
      if (fMatch) {
        return JSONUtils.getFlatternMatch(objectValue, fMatch.groups as any, defaultValue);
      }
      return null;
    }

    /**
     * Get patern path match.
     * @param path - property path.
     */
    private static getParentPathMatch(path: string): RegExpMatchArray {
      const pMatch = path.match(new RegExp(JSONUtils.parentPathReg));
      if (pMatch) {
        pMatch.groups = {dataPath: pMatch[1]};
      }
      return pMatch;
    }

    /**
     * Gets flattern path match.
     * @param path - property path.
     */
    private static getFlatternPathMatch(path: string): RegExpMatchArray {
      const fMatch = path.match(new RegExp(JSONUtils.flatternPathReg));
      if (fMatch) {
        fMatch.groups = {
          flattern: getItemByIndex(fMatch, 2),
          filter: getItemByIndex(fMatch, 4),
          dataPath: getItemByIndex(fMatch, 6)
        };
      }
      return fMatch;
    }

    /**
     * An utility method to set value in JSON tree.
     * @param objectValue - Javascript object.
     * @param path - path.
     * @param value - value to be set.
     * @example
     * const inObject: any = {};
     * JSONUtils.setValue(inObject, '$.parent/someValue', 55);
     */
    public static setValue(objectValue: object, path: string, value: any): void {
      const pMatch = JSONUtils.getParentPathMatch(path);
      if (pMatch) {
        return JSONUtils.setDataPathProp(objectValue, pMatch.groups.dataPath, value);
      }

      const fMatch = JSONUtils.getFlatternPathMatch(path);
      if (fMatch) {
        return JSONUtils.setFlatternProps(objectValue, fMatch.groups as any, value);
      }
    }

    /**
     * Gets properties that matches flattern path and filter.
     * @param objectValue - Javascript object.
     * @param groups - matched flattern reqexp groups.
     * @param groups.flattern - flattern property name.
     * @param groups.filter - flattern filter string.
     * @param groups.dataPath - property path.
     * @param defaultValue - default value if property does not exist.
     */
    private static getFlatternMatch(objectValue, {flattern, filter, dataPath}, defaultValue): any {
      let flatternProps = JSONUtils.getFlatternProps(objectValue, flattern);

      flatternProps = flatternProps.filter(prop => JSONUtils.filterObj(prop, filter));
      if (dataPath) {
        flatternProps = JSONUtils.getDataPathProps(flatternProps, dataPath, defaultValue);
      }

      if (flatternProps.length === 1) {
        return flatternProps[0];
      }
      return flatternProps;
    }

    /**
     * Gets properties satisfying flattern path.
     * @param obj - Javascript object or array.
     * @param flattern - flattern property name.
     */
    private static getFlatternProps(obj, flattern: string): any[] {
      let props = [];
      const entries = Array.isArray(obj) ? obj : [obj];
      entries.forEach(o => {
        Object.entries(o).forEach(([key, val]) => {
          if (key === flattern) {
            if (Array.isArray(val)) {
              props = props.concat(...val);
            } else {
              props.push(val);
            }
          }
          if (typeof val === 'object') {
            props = props.concat(...JSONUtils.getFlatternProps(val, flattern));
          }
        });
      });
      return props;
    }

    /**
     * Creates Javascript object from path filter.
     * @param str - path filter string.
     */
    private static filterToMap(str: string): {[key: string]: string} {
      if (!str) {
        return null;
      }
      const match = str.match(/(\w+)=(\w+)/);
      if (match) {
        return { [match[1]]: match[2] };
      }
    }

    /**
     * Checks if object has property that matches filter.
     * @param obj - Javascript object.
     * @param filter - flattern path filter string.
     */
    private static filterObj(obj, filter: string) {
      if (!obj) {
        return false;
      }
      if (!filter) {
        return true;
      }
      const filterObj = JSONUtils.filterToMap(filter);
      return Object.entries(obj).some(([k, v]) => filterObj.hasOwnProperty(k) && v === filterObj[k]);
    }

    /**
     * Get obj properties satisfying data path.
     * @param obj - Javascript object or array.
     * @param dataPath - data path.
     * @param defaultValue - default value for property.
     */
    private static getDataPathProps(obj, dataPath: string, defaultValue) {
      const props = dataPath.split('/');
      if (Array.isArray(obj)) {
        return obj.map(o => JSONUtils.getPropsValue(o, props, defaultValue));
      } else {
        return JSONUtils.getPropsValue(obj, props, defaultValue);
      }
    }

    /**
     * Gets property value of obj
     * @param obj - Javascript object.
     * @param props - path string array to requested property.
     * @param defaultValue - default value for requested property.
     */
    private static getPropsValue(obj, props: string[], defaultValue) {
      if (defaultValue !== undefined) {
        return createObjProperties(obj, props, defaultValue);
      }
      return getObjPropertyVal(obj, props);
    }

    /**
     * Set vaue to data path property.
     * @param obj - Javascript object or array.
     * @param dataPath - data path string.
     * @param val - value to set.
     */
    private static setDataPathProp(obj, dataPath: string, val) {
      if (!dataPath) {
        obj = val;
      } else {
        const props = dataPath.split('/');
        if (Array.isArray(obj)) {
          obj.forEach(o => JSONUtils.setPropsValue(o, props, val));
        } else {
          JSONUtils.setPropsValue(obj, props, val);
        }
      }
    }

    /**
     * Set value to property in obj.
     * @param obj - Javascript object.
     * @param props - path string array to requested property.
     * @param val - value to set.
     */
    private static setPropsValue(obj, props: string[], val) {
      function reducer(o, prop: string, index: number) {
        if  (index === props.length - 1) {
          o[prop] = val;
        } else if (!o.hasOwnProperty(prop)) {
          o[prop] = {};
        }
        return o[prop];
      }
      return props.reduce(reducer, obj);
    }

    /**
     * Set value to flattern properties in obj.
     * @param obj - Javascript object or array.
     * @param groups - flattern match groups.
     * @param value - value to set.
     */
    private static setFlatternProps(obj, groups, value) {
      const entries = Array.isArray(obj) ? obj : [obj];
      const {flattern, filter, dataPath} = groups;

      entries.filter(o => o !== null).forEach(o => {
        Object.entries(o).forEach(([key, val]) => {
          if (key === flattern) {
            if (Array.isArray(val)) {
              val.forEach(prop => {
                if (JSONUtils.filterObj(prop, filter)) {
                  JSONUtils.setDataPathProp(prop, dataPath, value);
                }
              });
            } else if (JSONUtils.filterObj(o, filter)) {
              JSONUtils.setDataPathProp(val, dataPath, value);
            }
          }
          if (typeof val === 'object') {
            JSONUtils.setFlatternProps(val, groups, value);
          }
        });
      });
    }
}

/**
 * Creates Javascript object properties tree.
 * @param obj - Javascript object.
 * @param props - list of tree properties to be created.
 * @param val - value for last property.
 */
function createObjProperties(obj, props: string[], val = null) {
  function reducer(o, prop, index) {
    if  (index === props.length - 1 && !o.hasOwnProperty(prop)) {
      o[prop] = val;
    } else if (!o.hasOwnProperty(prop)) {
      o[prop] = {};
    }
    return o[prop];
  }
  return props.reduce(reducer, obj);
}

/**
 * Get Javascript object property value.
 * @param obj - Javascript object.
 * @param props - list of tree properties to be created.
 */
function getObjPropertyVal(obj, props: string[]) {
  let value = obj;
  for (const prop of props) {
    if (value && value.hasOwnProperty(prop)) {
      value = value[prop];
    } else {
      return null;
    }
  }
  return value;
}
