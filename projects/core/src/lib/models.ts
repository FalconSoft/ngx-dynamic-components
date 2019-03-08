import { propDescription } from './components/base-ui-component';

type UIAction = (sender: UIModel, dataModel: any, uiModel: UIModel) => void;

export interface AttributesMap {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    label?: string;
    [key: string]: any;
}

export abstract class DataModelProperties implements AttributesMap {
  @propDescription({
    description: 'Path to key in data model.',
    example: 'name'
  })
  dataModelPath?: string;
}

export interface ActionsMap {
    [key: string]: UIAction;
}


export interface PropDescriptor {
  description: string;
  example: string;
}

export interface IActionsContainer {
    actions: ActionsMap;
    hasAction(actionName: string): boolean;
    onRunAction(sender: UIModel, actionName: string, dataModel: any): void;
}

export interface ComponentDescriptor {
  package: string;
  category: string;
  name: string;
  description: string;
}

export abstract class UIModel<T = AttributesMap> {
  key?: string;
  type: string;
  itemProperties: T;
  containerProperties: AttributesMap;
  children: UIModel[];
}
