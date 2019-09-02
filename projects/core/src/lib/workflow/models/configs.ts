export interface ActionConfig {
  actionType: string;
  actionName?: string;
  returnValue?: string;
}

export interface SetVariableConfig {
  sourceValue: string;
  variableName: string;
}

export interface SetValueConfig {
    object: any;
    propertyName: string;
    propertyValue: any;
}

export interface SetValuesConfig {
    object: string;
    valuesList: object;
}

export interface GetValueConfig {
    object: object;
    propertyName: string;
}

export interface SwitchActionConfig {
    object: object;
}

export interface AddItemConfig {
  object: object|string;
  propertyName: string;
  itemPropertyName: string;
  wrapName: string;
}

export interface PushItemConfig {
  object: object|string;
  target: object|string;
  propertyName: string;
  targetPropertyName: string;
  wrapName: string;
}

export interface TransferDataConfig {
  from: string;
  fromPropertyName: string;
  to: object|string;
  toPropertyName: string;
}

export interface MergeInDataModelConfig {
  data: string;
}

export interface JoinConfig {
  primaryKey: string;
  primaryTable: string;
  primaryPropertyName: string; // default '$'
  foreignKey?: string; // default 'primaryKey'
  foreignTable: string;
  foreignPropertyName: string; // default '$'
  returnValue: string;
  foreignFields?: [];
  primaryFields?: [];
}

export interface MapConfig {
  object: string;
  propertyName?: string; // default '$'
  fields: Array<[string, string]>;
  returnValue: string;
}

export interface HttpCallConfig {
  method: string;
  url: string;
  queryParams?: string;
  responseType?: string; // default 'json'
  body?: any;
  headers?: any;
}

export interface TransposeDataConfig {
  object: string;
  propertyName: string;
}

export interface IfStatementConfig extends ActionConfig {
  value: any;
  compareTo?: any;
  trueActions?: ActionConfig[];
  falseActions?: ActionConfig[];
}

export interface CreateObjectConfig extends ActionConfig {
  object: any;
}
