
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
        return objectValue;
    }

    public static setValue(objectValue: object, path: string, value: any): void {

    }

}
