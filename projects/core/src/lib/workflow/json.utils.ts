
/**
 * Provides utility classes to traverse JSON objects.
 *
 */
export class JSONUtils {

    /**
     * A utility method to find values in the JSON tree.
     * It is similar as JSONPath (or XML Path). But it
     *  - supports recursive search
     *  - can create object structure if missing.
     * @param value - a simple Javascript object
     * @param path  - path (check out json.utils.spec.ts for syntax)
     * @param defaultValue - if present and @param path is syntactically correct. It will create an object structure accordignly.
     *  If NULL, then it will return null.
     */
    public static find(objectValue: object, path: string, defaultValue: any = null): any {
      // Parent path match
      const pMatch = path.match(/\$\.(?<dataPath>\w+(\/\w+)*)/);
      if (pMatch) {
        return JSONUtils.getProp(objectValue, pMatch.groups.dataPath, defaultValue);
      }

      // Flattern path match
      const fMatch = path.match(/\$\(((?<flattern>\w+)(\:(?<filter>\w+=\w+))?)\)(?<dataPath>(\/\w+){1,})?/);
      if (fMatch) {
        let flatternProps = JSONUtils.getFlatternProps(objectValue, fMatch.groups.flattern);

        const filter = JSONUtils.filterToMap(fMatch.groups.filter);
        if (filter) {
          flatternProps = flatternProps.find(prop => Object.entries(prop).some(([k, v]) => filter.hasOwnProperty(k) && v === filter[k]));
        }
        if (fMatch.groups.dataPath) {
          return JSONUtils.getProp(flatternProps, fMatch.groups.dataPath, defaultValue);
        }
        return flatternProps;
      }
      return objectValue;
    }

    public static setValue(objectValue: object, path: string, value: any): void {

    }

    private static filterToMap(str: string): {[key: string]: string} {
      if (!str) {
        return null;
      }
      const { groups: {key, val} } = /(?<key>\w+)=(?<val>\w+)/.exec(str);
      return { [key]: val };
    }

    private static getFlatternProps(obj, prop) {
      let props = [];
      const entries = Array.isArray(obj) ? obj : [obj];

      entries.forEach(o => {
        Object.entries(o).forEach(([key, val]) => {
          if (key === prop) {
            props.push(val);
          }
          if (typeof val === 'object') {
            props = props.concat(...JSONUtils.getFlatternProps(val, prop));
          }
        });
      });
      return props;
    }

    private static getProp(obj, dataPath: string, defaultValue) {
      const props = dataPath.split('/').filter(p => p);
      return props.reduce((o, prop, index) => {
        if  (index === props.length - 1 && !o.hasOwnProperty(prop)) {
          o[prop] = defaultValue;
        }
        return o[prop];
      }, obj);
    }

}
