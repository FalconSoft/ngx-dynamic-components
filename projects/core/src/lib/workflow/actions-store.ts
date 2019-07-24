import { ExecutionContext } from './workflow.processor';
import { JSONUtils } from './json.utils';
import { SetValueConfig, SetValuesConfig, GetValueConfig, AddItemConfig, PushItemConfig,
  TransferDataConfig, MergeInDataModelConfig, SetVariableConfig } from './models';

/**
 * Resolves expression({{ expression }}) in key if contains.
 * @param context - Execution context.
 * @param key - string with posible expression
 */
function resolveExpression(context: ExecutionContext, key: string): string {
  // Remove spaces in expressions.
  key = key.replace(/\{\{\s*/g, '{{').replace(/\s*\}\}/g, '}}');
  const expressions = getExpressions(key);
  expressions.forEach(e => {
    let value = resolveValue(context, e);
    if (value && typeof value === 'object') {
      const propertyPath = e.substring(e.indexOf('/') + 1);
      value =  JSONUtils.find(value, `$.${propertyPath}`, null);
    }
    key = key.replace(`{{${e}}}`, value);
  });
  return key;
}

/**
 * Get expression keys in key string.
 * @param key - path with possibles expressions.
 */
function getExpressions(key: string): string[] {
  let expressions = [];
  const re = /.*\{\{(.*)\}\}/;
  const match = key.match(re);
  if (match) {
    const expression = match[1];
    if (expression) {
      expressions = [expression, ...getExpressions(key.replace(`{{${expression}}}`, ''))];
    }
  }
  return expressions;
}

// todo: this function should not be here. it has to be moved out to utils and then exported from there
/**
 * this has to be more advanced method and has to resolve more complex grammar.
 *  - $ prefix means it takes values from variable
 *  - {{ expression }} like format in a string
 * @param context - Execution context.
 * @param object - payload object.
 */
export function resolveValue(context: ExecutionContext, object: any) {
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

export function resolveVariable(context: ExecutionContext, object: any) {
  if (!object) { return null; }
  if (typeof object === 'object') { return object; }

  if (typeof object === 'string') {
    const { name, key } = resolvePath(object);
    if (context.variables.has(key)) {
        const value = context.variables.get(key);
        return {value, name};
    } else {
        throw new Error(`Can't resolve Object by string ${name}`);
    }

    return;
  }

  throw new Error(`Can't resolve Object ${object}`);
}

export function resolvePath(key: string) {
  const res = key.match(/^{{([\w-]+)}}.*/);

  if (res && res[1]) {
    const prop = res[1];
    if (key.indexOf('}}/') !== -1) {
      return {
        name: key.replace(`{{${prop}}}/`, '$.'),
        key: prop
      };
    } else {
      return {
        name: key.replace(`{{${prop}}}`, '$'),
        key: prop
      };
    }
  }
}

const setValueAction = (context: ExecutionContext, config: SetValueConfig) => {
    const objValue = resolveValue(context, config.object);
    const value = resolveValue(context, config.propertyValue);
    return JSONUtils.setValue(objValue, config.propertyName, value);
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

const getListFromContext = (context: ExecutionContext, config: AddItemConfig | PushItemConfig) => {
  const objValue = resolveValue(context, config.object);
  const propertyName = config.propertyName;
  const list = JSONUtils.find(objValue, propertyName);
  if (Array.isArray(list)) {
    return list;
  }

  if (list === null) {
    JSONUtils.setValue(objValue, propertyName, []);
    return JSONUtils.find(objValue, propertyName);
  }

  throw new Error(`Property ${propertyName} in ${config.object} is not an array.`);
};

const addItemToArrayAction = (context: ExecutionContext, config: AddItemConfig) => {
  const list = getListFromContext(context, config);
  const objValue = resolveValue(context, config.object);
  const item = JSONUtils.find(objValue, config.itemPropertyName);
  return JSONUtils.setValue(objValue, config.propertyName, [...list, {[config.wrapName]: item}]);
};

const pushItemToArrayAction = (context: ExecutionContext, config: PushItemConfig) => {
  const list = getListFromContext(context, config);
  const objValue = resolveValue(context, config.object);
  const targetValue = resolveValue(context, config.target);
  return JSONUtils.setValue(objValue, config.propertyName, [...list, {[config.wrapName]: targetValue}]);
};

const popArrayAction = (context: ExecutionContext, config: AddItemConfig) => {
  const list = getListFromContext(context, config);
  const objValue = resolveValue(context, config.object);
  return JSONUtils.setValue(objValue, config.propertyName, [...list.slice(0, list.length - 1)]);
};

const setLocalVariableAction = (context: ExecutionContext, config: SetVariableConfig) => {
  try {
    const resolved = resolveVariable(context, config.sourceValue);
    if (!resolved) {
      throw new Error(`Local variable ${config.sourceValue} is not resolved`);
    }
    const value = JSONUtils.find(resolved.value as object, resolved.name);
    context.variables.set(config.variableName, value);
    return value;
  } catch (e) {
    console.error(e);
    return null;
  }
 };

/**
 * @example
 * {
 *  "actionType": "transferData",
 *  "from": "$step1-returnValue",
 *  "fromPropertyName": "$",
 *  "to": "$dataModel",
 *  "toPropertyName": "$.transfered"
 * }
 */
const transferDataAction = (context: ExecutionContext, config: TransferDataConfig) => {
  const fromObj = resolveValue(context, config.from);
  const value = JSONUtils.find(fromObj, config.fromPropertyName || '$');
  const toObj = resolveValue(context, config.to);
  return JSONUtils.setValue(toObj, config.toPropertyName, value);
};

const mergeInDataModelAction = (context: ExecutionContext, config: MergeInDataModelConfig) => {
  const value = config.data;
  const dataModel = resolveValue(context, '$dataModel');
  Object.assign(dataModel, value);
  return dataModel;
};

export const commonActionsMap = new Map<string, (...args: any[]) => any>([
    ['switch', () => {}],
    ['getValue', getValueAction],
    ['setValue', setValueAction],
    ['setValues', setValuesAction],
    ['addItemToArray', addItemToArrayAction],
    ['popArray', popArrayAction],
    ['pushItemToArray', pushItemToArrayAction],
    ['transferData', transferDataAction],
    ['setLocalVariable', setLocalVariableAction],
    ['mergeInDataModel', mergeInDataModelAction]
]);
