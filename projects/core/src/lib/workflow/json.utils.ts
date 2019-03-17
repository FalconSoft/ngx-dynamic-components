/**
 * Provides utility classes to traverse JSON objects.
 *
 */
export class JSONUtils {

    /** RegExp /\$\.(?<dataPath>\w+(\/\w+)*)/ */
    public static parentPathReg = '\\$\\.(?<dataPath>\\w+(\\/\\w+)*)';
    /** RegExp /\$\(((?<flattern>\w+)(\:(?<filter>\w+=\w+))?)\)\/?(?<dataPath>(\w+\/?\w+)*)?/ */
    public static flatternPathReg = `\\$\\(((?<flattern>\\w+)(\\:(?<filter>\\w+=\\w+))?)\\)\\/?(?<dataPath>(\\w+\\/?\\w+)*)?`;

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
    public static find(objectValue: object, path: string, defaultValue: any = null): any {
      if (path === '$') {
        return objectValue;
      }

      // Parent path match
      const pMatch = path.match(new RegExp(JSONUtils.parentPathReg));
      if (pMatch) {
        return JSONUtils.getDataPathProps(objectValue, pMatch.groups.dataPath, defaultValue);
      }

      // Flattern path match
      const fMatch = path.match(new RegExp(JSONUtils.flatternPathReg));

      if (fMatch) {
        return JSONUtils.getFlatternMatch(objectValue, fMatch.groups as any, defaultValue);
      }
      return null;
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

      // Parent path match
      const pMatch = path.match(JSONUtils.parentPathReg);
      if (pMatch) {
        JSONUtils.setDataPathProp(objectValue, pMatch.groups.dataPath, value);
      }

      // Flattern path match
      const fMatch = path.match(JSONUtils.flatternPathReg);
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
            props.push(val);
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
      const { groups: {key, val} } = (new RegExp('(?<key>\\w+)=(?<val>\\w+)')).exec(str);
//      const { groups: {key, val} } = /(?<key>\w+)=(?<val>\w+)/.exec(str);
      return { [key]: val };
    }

    /**
     * Checks if object has property that matches filter.
     * @param obj - Javascript object.
     * @param filter - flattern path filter string.
     */
    private static filterObj(obj, filter: string) {
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
      function reducer(o, prop, index) {
        if  (index === props.length - 1 && !o.hasOwnProperty(prop)) {
          o[prop] = defaultValue;
        } else if (!o.hasOwnProperty(prop)) {
          o[prop] = {};
        }
        return o[prop];
      }
      return props.reduce(reducer, obj);
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

      entries.forEach(o => {
        Object.entries(o).forEach(([key, val]) => {
          if (key === flattern) {
            if (Array.isArray(val)) {
              val.forEach(prop => {
                if (JSONUtils.filterObj(prop, filter)) {
                  JSONUtils.setDataPathProp(prop, dataPath, value);
                }
              });
              JSONUtils.setDataPathProp(val, dataPath, value);
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
