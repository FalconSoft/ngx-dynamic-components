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


function getValueOrVariable(context: ExecutionContext, object: any) {
    if (!object) { return null; }
    if (typeof object === 'object') { return object; }

    if (typeof object === 'string') {
        let key = String(object);
        if (key.startsWith('$')) {
            key = key.substring(1);
        } else {
            return key;
        }

        if (context.variables.has(key)) {
            return context.variables.get(key)
        } else {
            throw new Error(`Can't resolve Object by string ${key}`);
        }

        return;
    }

    throw new Error(`Can't resolve Object ${object}`);
}

const setValueAction = (context: ExecutionContext, config: SetValueConfig) => {
    const objValue = getValueOrVariable(context, config.object);
    const value = getValueOrVariable(context, config.propertyValue);
    JSONUtils.setValue(objValue, config.propertyName, value);
};

const setValuesAction = (context: ExecutionContext, config: SetValuesConfig) => {
    const propertyNames = Object.keys(config.valuesList).filter(f => !f.startsWith('_'));
    const objValue = getValueOrVariable(context, config.object);
    for (const propertyName of propertyNames) {
        const value = getValueOrVariable(context, config.valuesList[propertyName]);
        JSONUtils.setValue(objValue, propertyName, value);
    }
};

const switchAction = (context: ExecutionContext, config: SetValuesConfig) => {

};

const getValueAction = (context: ExecutionContext, config: GetValueConfig) => {
    const objValue = getValueOrVariable(context, config.object);
    const propertyName = getValueOrVariable(context, config.propertyName);

    return JSONUtils.find(objValue,propertyName);
};

export const commonActionsMap = new Map<string, Function>([
    ['httpCall', (config: HttpCallConfig) => {}],
    ['switch', () => {}],
    ['getValue', getValueAction],
    ['setValue', setValueAction],
    ['setValues', setValuesAction],
]);
