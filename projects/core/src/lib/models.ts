import { BaseUIComponentConstructor } from './utils';
import { ComponentProperty } from './properties';

type UIAction = (sender: UIModel, dataModel: any, uiModel: UIModel) => void;

export interface AttributesMap {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    label?: string;
    [key: string]: any;
}

export interface ComponentExample<T = UIModel> {
  uiModel: T|string;
  dataModel: any;
  title: string;
  scripts?: string;
}

interface AttributesMapConstructor {
  new (): AttributesMap;
}

export interface ComponentDescriptor<ComponentType = BaseUIComponentConstructor, PropertiesType = AttributesMapConstructor> {
  packageName: string;
  label: string;
  category: string;
  name: string;
  description: string;
  itemProperties: PropertiesType;
  component: ComponentType;
  example?: ComponentExample;
  defaultModel?: UIModel;
  propertiesDescriptor?: Array<[string, ComponentProperty]>;
  parseUIModel?: (xmlData: XMLResult) => UIModel;
}

export abstract class UIModel<T = AttributesMap> {
  id?: string;
  type: string;
  itemProperties?: T;
  containerProperties?: AttributesMap;
  children?: UIModel[];
}

export interface IVariableResolver {
  resolve: (obj: object, vars?: object) => object;
  resolveString: (str: string, vars?: object) => object|string;
}

export interface SelectedComponent {
  uiModel: UIModel;
  cssPath: string;
}

export interface OptionValue {
  label: string;
  value: any;
}

export const enum Categories {
  Basic = 'Basic',
  Containers = 'Containers',
  Data = 'Data',
  CustomControls = 'Custom Controls',
  DataTable = 'Data table'
}

export enum DesignerVisibility {
  UIModel = 1,
  Scripts = 2,
  All = 3
}

export interface XMLResult {
  type: string;
  attrs: AttributesMap;
  content: string;
  childNodes: any[];
}

export interface ComponentEvent {
  eventName: string;
  parameters?: any;
  rootUIModel?: UIModel;
}
