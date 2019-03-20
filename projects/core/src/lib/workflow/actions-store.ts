import { ExecutionContext } from './workflow.processor';
import { JSONUtils } from './json.utils';

interface HttpCallConfig {
    method: string;
    url: string;
    queryParams: string;
}

interface SetValueConfig {
    object: any;
    propertyName: string;
    propertyValue: any;
}

interface SetValuesConfig {
    object: object;
    valuesList: object;
}

interface GetValueConfig {
    object: object;
    propertyName: string;
}

interface SwitchActionConfig {
    object: object;
}

/**
 * Resolves expression({{ expression }}) in key if contains.
 * @param context - Execution context.
 * @param key - string with posible expression
 */
function resolveExpression(context: ExecutionContext, key: string): string {
  const re = /.*\{\{\s(.*)\s\}\}/;
  const match = key.match(re);
  if (match) {
    const expressionKey = match[1];
    const value = resolveValue(context, expressionKey);
    const propertyPath = expressionKey.substring(expressionKey.indexOf('/') + 1);
    return key.replace(/\{\{\s(.*)\s\}\}/, JSONUtils.find(value, `$.${propertyPath}`));
  }
  return key;
}


/**
 * this has to be more advanced method and has to resolve more complex grammar.
 *  - $ prefix means it takes values from variable
 *  - {{ expression }} like format in a string
 * @param context - Execution context.
 * @param object - payload object.
 */
function resolveValue(context: ExecutionContext, object: any) {
    if (!object) { return null; }
    if (typeof object === 'object') { return object; }

    if (typeof object === 'string') {
        let key = String(object);
        key = resolveExpression(context, key);

        // if starts with $property but not if $.property.
        if (/^\$\w/.test(key)) {
            // get root property path.
            key = key.substring(1).replace(/\/.*/, '');
        } else {
            return key;
        }

        if (context.variables.has(key)) {
            return context.variables.get(key);
        } else {
            throw new Error(`Can't resolve Object by string ${key}`);
        }

        return;
    }

    throw new Error(`Can't resolve Object ${object}`);
}

const setValueAction = (context: ExecutionContext, config: SetValueConfig) => {
    const objValue = resolveValue(context, config.object);
    const value = resolveValue(context, config.propertyValue);
    JSONUtils.setValue(objValue, config.propertyName, value);
};

const setValuesAction = (context: ExecutionContext, config: SetValuesConfig) => {
    const propertyNames = Object.keys(config.valuesList).filter(f => !f.startsWith('_'));
    const objValue = resolveValue(context, config.object);
    for (const propertyName of propertyNames) {
        const value = resolveValue(context, config.valuesList[propertyName]);
        JSONUtils.setValue(objValue, propertyName, value);
    }
};

const switchAction = (context: ExecutionContext, config: SetValuesConfig) => {

};

const getValueAction = (context: ExecutionContext, config: GetValueConfig) => {
    const objValue = resolveValue(context, config.object);
    const propertyName = resolveValue(context, config.propertyName);
    return JSONUtils.find(objValue, propertyName);
};

export const commonActionsMap = new Map<string, (...args: any[]) => any>([
    ['httpCall', (config: HttpCallConfig) => {}],
    ['switch', () => {}],
    ['getValue', getValueAction],
    ['setValue', setValueAction],
    ['setValues', setValuesAction],
]);
