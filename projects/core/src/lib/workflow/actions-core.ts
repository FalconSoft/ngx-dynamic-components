import { ExecutionContext } from './workflow.processor';
import { JSONUtils } from './json.utils';

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
    const { name, key } = object.startsWith('{{') ? resolvePath(object) : resolveWorkflowPath(object);
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

export function resolveWorkflowPath(key: string) {
  const res = key.match(/^\$([\w-]+)*/);

  if (res && res[1]) {
    const prop = res[1];
    if (key.indexOf('/') !== -1) {
      return {
        name: key.replace(`$${prop}/`, '$.'),
        key: prop
      };
    } else {
      return {
        name: '$',
        key: prop
      };
    }
  }
}
