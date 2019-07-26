export interface SetVariableConfig {
  object: string;
  sourceValue: string;
  variableName: string;
}

export interface SetValueConfig {
    object: any;
    propertyName: string;
    propertyValue: any;
}

export interface SetValuesConfig {
    object: object;
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
  object: object;
  propertyName: string;
  itemPropertyName: string;
  wrapName: string;
}

export interface PushItemConfig {
  object: object;
  target: object;
  propertyName: string;
  targetPropertyName: string;
  wrapName: string;
}

export interface TransferDataConfig {
  from: string;
  fromPropertyName: string;
  to: object;
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
  fields: [];
  returnValue: string;
}

export interface HttpCallConfig {
  method: string;
  url: string;
  queryParams: string;
  responseType?: string; // default 'json'
}

export interface TransposeDataConfig {
  object: string;
  propertyName: string;
}
