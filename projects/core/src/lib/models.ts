/* eslint-disable @typescript-eslint/naming-convention */
// import { BaseUIComponentConstructor, BaseHTMLElementConstructor } from './utils';
import { ComponentProperty } from './properties';
import { BaseDynamicComponent } from './components/base-dynamic-component';
import { BaseHTMLElement } from './components/base-html-element';
import { BaseUIComponent } from './components/base-ui-component';

type UIAction = (sender: UIModel, dataModel: any, uiModel: UIModel) => void;

export type BaseUIComponentConstructor = new () => BaseUIComponent;
export type BaseHTMLElementConstructor = new () => BaseHTMLElement;

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
  description?: string;
}

type AttributesMapConstructor = new () => AttributesMap;

export interface ChildComponent {
  tag: string;
  properties: ComponentProperty[];
  hasChildren?: boolean;
}

export interface ComponentDescriptor<ComponentType = BaseUIComponentConstructor|BaseHTMLElementConstructor,
  PropertiesType = AttributesMapConstructor> {
  packageName: string;
  label: string;
  category: string;
  name: string;
  description: string;
  itemProperties: PropertiesType;
  component: ComponentType;
  example?: ComponentExample | ComponentExample[];
  defaultModel?: UIModel | string;
  propertiesDescriptor?: Array<[string, ComponentProperty]>;
  parseUIModel?: (xmlData: XMLResult) => UIModel;
  children?: ChildComponent[] | false;
}

export abstract class UIModel<T = AttributesMap> {
  id?: string;
  type: string;
  itemProperties?: T;
  children?: UIModel[];
  getComponent?(): BaseDynamicComponent<T> {
    return null;
  }
}

export interface SelectedComponent {
  uiModel: UIModel;
  cssPath: string;
}

export interface OptionValue {
  label: string;
  value: any;
}

// eslint-disable-next-line no-shadow
export const enum Categories {
  Basic = 'Basic',
  HTML = 'HTML',
  Containers = 'Containers',
  Data = 'Data',
  CustomControls = 'Custom Controls',
  DataTable = 'Data table'
}

// eslint-disable-next-line no-shadow
export enum DesignerVisibility {
  // eslint-disable-next-line
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
  eventHandler: string;
  rootUIModel?: UIModel;
  parameters?: {
    uiModel?: UIModel;
    argsKey?: string;
    argsValue?: any;
    [key: string]: any;
  };
  sender?: BaseDynamicComponent;
}
