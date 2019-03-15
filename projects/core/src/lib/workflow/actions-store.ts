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

interface switchActionConfig {
    object: object;
    valuesList: object;
}


function getValueOrVariable(context: ExecutionContext, object: any) {
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
    const objValue = getValueOrVariable(context, payload.object);
    const value = getValueOrVariable(context, payload.propertyValue);
    JSONUtils.setValue(objValue, payload.propertyName, value);
};

const setValuesAction = (context: ExecutionContext, payload: SetValuesConfig) => {
    const propertyNames = Object.keys(payload.valuesList).filter(f => !f.startsWith('_'));
    const objValue = getValueOrVariable(context, payload.object);
    for (const propertyName of propertyNames) {
        const value = getValueOrVariable(context, payload.valuesList[propertyName]);
        JSONUtils.setValue(objValue, propertyName, value);
    }
};

const switchAction = (context: ExecutionContext, payload: SetValuesConfig) => {

};

export const commonActionsMap = new Map<string, Function>([
    ['httpCall', (config: HttpCallConfig) => {}],
    ['switch', () => {}],
    ['setValue', setValueAction],
    ['setValues', setValuesAction],
]);
