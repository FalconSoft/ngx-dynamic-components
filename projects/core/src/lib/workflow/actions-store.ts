import { ExecutionContext } from './workflow.processor';
import { JSONUtils } from './json.utils';
import { SetValueConfig, SetValuesConfig, GetValueConfig, AddItemConfig, PushItemConfig,
  TransferDataConfig, MergeInDataModelConfig, SetVariableConfig, ActionDescriptor,
  IfStatementConfig, ActionResult, ActionStatus, JoinConfig, MapConfig, CreateObjectConfig } from './models';
import { UIModel } from '../models';
import { resolveValue, resolveVariable } from './actions-core';
import { setFields } from '../utils';

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

const getValueDescriptor = {
  name: 'getValueAction',
  method: getValueAction,
  category: 'Common',
  config: {
    actionType: 'getValueAction',
    actionName: 'get-value-1',
    object: '$data',
    propertyName: 'propName'
  },
  description: 'Gets value from object by propertyName path',
  getMessage(config: GetValueConfig) {
    return `Get value from var:${config.object} prop: ${config.propertyName}`;
  }
};

const setValueDescriptor = {
  name: 'setValueAction',
  method: setValueAction,
  category: 'Common',
  config: {
    actionType: 'setValueAction',
    actionName: 'set-value-1',
    object: '$data',
    propertyName: 'propName',
    propertyValue: 'value-1'
  } as SetValueConfig,
  description: 'Sets value to propertyName in objet',
  getMessage(config: SetValueConfig) {
    return `Set value to ${config.object} prop ${config.propertyName}`;
  }
};

const setValuesDescriptor = {
  name: 'setValuesAction',
  method: setValuesAction,
  category: 'Common',
  config: {
    actionType: 'setValuesAction',
    actionName: 'set-values-1',
    object: '$data',
    valuesList: {prop: 'value-1'}
  } as SetValuesConfig,
  description: 'Sets properties values in object',
  getMessage(config: SetValuesConfig) {
    return `Set value list to ${config.object}`;
  }
};

const addItemToArrayDescriptor = {
  name: 'addItemToArrayAction',
  method: addItemToArrayAction,
  category: 'Common',
  config: {
    actionType: 'addItemToArrayAction',
    actionName: 'add-item-1',
    object: '$data',
    propertyName: 'arrayProp',
    itemPropertyName: 'dataProp',
    wrapName: 'item'
  } as AddItemConfig,
  description: 'Push item from current object into array property',
  getMessage(config: AddItemConfig) {
    return `Pushed item to array: ${config.object} prop: ${config.propertyName}`;
  }
};

const pushItemToArrayDescriptor = {
  name: 'pushItemToArrayAction',
  method: pushItemToArrayAction,
  category: 'Common',
  config: {
    actionType: 'pushItemToArrayAction',
    actionName: 'push-item-1',
    object: '$fromVar',
    target: '$toVar',
    propertyName: 'prop1',
    targetPropertyName: 'prop2',
    wrapName: 'item'
  } as PushItemConfig,
  description: 'Push item from custom object into array property',
  getMessage(config: PushItemConfig) {
    return `Pushed item from: ${config.object} prop: ${config.propertyName} to ${config.target} prop: ${config.targetPropertyName}`;
  }
};

const popArrayDescriptor = {
  name: 'popArrayAction',
  method: popArrayAction,
  category: 'Common',
  config: {
    actionType: 'popArrayAction',
    actionName: 'pop-item-1',
    object: '$dataVar',
    propertyName: 'prop1',
  },
  description: 'Pop item from object array property',
  getMessage(config: AddItemConfig) {
    return `Pop item from array ${config.object} prop ${config.propertyName}`;
  }
};

const transferDataDescriptor = {
  name: 'transferDataAction',
  method: transferDataAction,
  category: 'Common',
  config: {
    actionType: 'transferDataAction',
    actionName: 'data-transfer-1',
    from: 'object1',
    fromPropertyName: 'prop1',
    to: 'object2',
    toPropertyName: 'prop2'
  } as TransferDataConfig,
  description: 'Transfer data from object1 to object2',
  getMessage(config: TransferDataConfig) {
    return `Transfer data from ${config.from} prop: ${config.fromPropertyName} to ${config.to} prop ${config.toPropertyName}`;
  }
};

const setLocalVariableDescriptor = {
  name: 'setLocalVariable',
  method: setLocalVariableAction,
  category: 'Common',
  config: {
    actionType: 'setLocalVariable',
    actionName: 'set-local-1',
    sourceValue: '{{responseContent}}/user/userName',
    variableName: 'userName',
  } as SetVariableConfig,
  description: 'Set value to local context',
  getMessage(config: SetVariableConfig) {
    return `Set value to local variable ${config.variableName}`;
  }
};

const mergeInDataModelDescriptor = {
  name: 'mergeInDataModel',
  method: mergeInDataModelAction,
  category: 'Common',
  config: {
    actionType: 'mergeInDataModel',
    actionName: 'merge-data-1',
    data: '{prop: 2}',
  } as MergeInDataModelConfig,
  description: 'Merge data into DataModel',
  getMessage(config: MergeInDataModelConfig) {
    return `Merged data in data model`;
  }
};

const clearDataModelDescriptor = {
  name: 'clearDataModel',
  method(context: ExecutionContext) {
    const dataModel = resolveValue(context, '$dataModel');
    Object.keys(dataModel).forEach(key => {
      dataModel[key] = null;
    });
  },
  category: 'Common',
  config: {
    actionType: 'clearDataModel'
  },
  description: 'Clears all data model properties'
};

function dataModelValidationAction(context: ExecutionContext): ActionResult {
  try {
    let valid = true;
    const uiModel = resolveValue(context, '$uiModel') as UIModel;
    const fields = JSONUtils.find(uiModel, '$(children)/itemProperties');
    const requiredFields = fields.filter(f => f.required);
    if (requiredFields.length) {
      const dataModel = resolveValue(context, '$dataModel');
      requiredFields.forEach(f => {
        const value = JSONUtils.find(dataModel, f.dataModelPath);
        valid = !(value === undefined || value === null);
      });
    }

    return {
      result: valid,
      status: ActionStatus.SUCCESS
    };
  } catch (e) {
    throw e;
  }
}

const dataModelValidationDescriptor = {
  name: 'dataModelValidation',
  method: dataModelValidationAction,
  category: 'Common',
  config: {
    actionType: 'dataModelValidation'
  },
  description: 'Validates dataModel based on uiModel'
};

const ifSttatementAction = (context: ExecutionContext, config: IfStatementConfig): ActionResult => {
  try {
    const resolved = resolveVariable(context, config.value);
    if (!resolved) {
      throw new Error(`Variable ${config.value} is not resolved`);
    }
    const value = JSONUtils.find(resolved.value as object, resolved.name);
    const state = config.compareTo ? value === config.compareTo : Boolean(value);

    return {
      result: state,
      steps: state ? config.trueActions : config.falseActions,
      status: ActionStatus.SUCCESS
    };
  } catch (e) {
    console.error(e);
    return {
      result: null,
      status: ActionStatus.STOP_EXECUTION
    };
  }
 };


const ifSttatementDescriptor = {
  name: 'if',
  method: ifSttatementAction,
  category: 'Conditional',
  config: {
    value: true,
    trueActions: []
  } as IfStatementConfig,
  description: 'Executes actions based on value'
};

function mapAction(context: ExecutionContext, config: MapConfig) {
  const propertyName = config.propertyName || '$';
  const obj = resolveValue(context, config.object);
  const list = JSONUtils.find(obj, propertyName);
  if (Array.isArray(list)) {
    return list.map(item => setFields(config.fields, item));
  }

  if (typeof list === 'object') {
    return Object.entries(list).reduce((prev, entry) => {
      const [field, val] = entry;
      const mapField = config.fields.find(f => f[0] === field);
      if (mapField) {
        prev[mapField[1]] = val;
      } else {
        prev[field] = val;
      }
      return prev;
    }, {});
  }
  return list;
}

const mapDescriptor = {
  name: 'map',
  method: mapAction,
  category: 'Common',
  config: {
    actionType: 'map',
    actionName: 'map-1',
    object: '$step0-returnValue',
    propertyName: '$.body',
    fields: [[
      'field1',
      'label'
    ], [
      'field2',
      'value'
    ]]
  },
  description: 'Map array item properties',
  getMessage(config: MapConfig) {
    return `Map array ${config.object} prop: ${config.propertyName}, fields: ${config.fields}`;
  }
};

function joinAction(context: ExecutionContext, config: JoinConfig) {
  const primaryPropertyName = config.primaryPropertyName || '$';
  const primaryObj = resolveValue(context, config.primaryTable);
  const primaryTable = JSONUtils.find(primaryObj, primaryPropertyName);

  const foreignObj = resolveValue(context, config.foreignTable);
  const foreignTable = JSONUtils.find(foreignObj, config.foreignPropertyName || '$');

  const foreignKey = config.foreignKey || config.primaryKey;

  try {
    const joinTable = foreignTable.map(row => {
      let primaryData = primaryTable.find(d => d[config.primaryKey] === row[foreignKey]);
      row = setFields(config.foreignFields, row);

      primaryData = setFields(config.primaryFields, primaryData);
      return {...row, ...primaryData};
    });
    return joinTable;
  } catch (e) {
    throw e;
  }
}

const joinDescriptor = {
  name: 'join',
  method: joinAction,
  category: 'Common',
  config: {
    actionType: 'join',
    primaryKey: 'table1ID',
    primaryTable: '$tableData1',
    primaryFields: [['field1', 'Fild Title'], 'ID'],
    foreignKey: 'table2ID',
    foreignTable: '$tableData2',
    foreignFields: ['ID', ['fieldTable2', 'Title']],
    returnValue: 'resultTableData'
  },
  description: 'Joins data from two sources',
  getMessage(config: JoinConfig) {
    return `Join table ${config.primaryTable} (primary key ${config.primaryKey})
      with ${config.foreignTable} (foreign key ${config.foreignKey})`;
  }
};

const createObjectAction = (context: ExecutionContext, config: CreateObjectConfig) => {
  let obj = config.object;

  if (typeof obj === 'object') {
    obj = JSON.stringify(obj);
  }

  let res = obj.match(/\$([\w-]+)*/);

  while (res) {
    const variable = `$${res[1]}`;
    let value = resolveValue(context, variable);
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    } else if (typeof value === 'string') {
      value = `"${value}"`;
    }
    obj = obj.replace(`"${variable}"`, value);
    res = obj.match(/\$([\w-]+)*/);
  }
  return JSON.parse(obj);
};

const createObjectDescriptor = {
  name: 'createObject',
  method: createObjectAction,
  category: 'Data Formatter',
  config: {
    actionType: 'createObject',
    actionName: 'result',
    object: {
      items: [ '$sendData-returnValue' ]
    }
  },
  description: 'Creates custom object'
};

export const commonActionsMap = new Map<string, ((...args: any[]) => any) | ActionDescriptor>([
    ['switch', () => {}],
    ['getValue', getValueDescriptor],
    ['setValue', setValueDescriptor],
    ['setValues', setValuesDescriptor],
    ['addItemToArray', addItemToArrayDescriptor],
    ['popArray', popArrayDescriptor],
    ['pushItemToArray', pushItemToArrayDescriptor],
    ['transferData', transferDataDescriptor],
    ['setLocalVariable', setLocalVariableDescriptor],
    ['mergeInDataModel', mergeInDataModelDescriptor],
    ['clearDataModel', clearDataModelDescriptor],
    ['dataModelValidation', dataModelValidationDescriptor],
    ['if', ifSttatementDescriptor],
    ['join', joinDescriptor],
    ['map', mapDescriptor],
    ['createObject', createObjectDescriptor]
]);
