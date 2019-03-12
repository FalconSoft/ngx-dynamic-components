import { ExecutionContext } from './workflow.processor';

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
    object: any;
    valuesList: any;
}

function getObject(context: ExecutionContext, object: any) {
    if (!object) { return null; }
    if (typeof object === 'object') { return object; }

    if (typeof object === 'string') {
        let key = String(object);
        if (key.startsWith('$')) { key = key.substring(1); }

        if (context.variables.has(key)) {
            return context.variables.get(key)
        } else {
            throw new Error(`Can't resolve Object by string ${key}`);
        }

        return;
    }

    throw new Error(`Can't resolve Object ${object}`);
}

const setValueAction = (context: ExecutionContext, payload: SetValueConfig) => {
    const objValue = getObject(context, payload.object);
    const propertyName = payload.propertyName;
    const value = payload.propertyValue;
    objValue[propertyName] = value;
};

export const commonActionsMap = new Map<string, Function>([
    ['httpCall', (config: HttpCallConfig) => {}],
    ['switch', () => {}],
    ['setValue', setValueAction],
    ['setValues', (config: SetValuesConfig) => {}],
]);
