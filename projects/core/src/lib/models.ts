import { BaseUIComponentConstructor } from './utils';
import { WorkflowEngine } from './workflow/workflow.processor';
import { ComponentProperty } from './properties';
import { ActionResult } from './workflow/models';

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
  uiModel: T;
  dataModel;
  title: string;
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
}

export interface ActionDescriptor {
  name: string;
  category: string;
  config: string | object;
  description?: string;
  getMessage?: (config?: any) => string;
  method: (...args: any[]) => ActionResult|any;
}

export abstract class UIModel<T = AttributesMap> {
  id?: string;
  type: string;
  itemProperties?: T;
  containerProperties?: AttributesMap;
  children?: UIModel[];
}

export interface ComponentConfiguration {
  uiModel: UIModel;
  dataModel: any;
  workflowEngine?: WorkflowEngine;
}

export interface IVariableResolver {
  resolve: (obj: object) => object;
  resolveString: (str: string, vars?: object) => object|string;
}

export const StylePropertiesList = ['width', 'height', 'padding', 'margin', 'min-height', 'min-width', 'background', 'color',
  'font-size', 'font-weight', 'font-style'];

export interface SelectedComponent {
  uiModel: UIModel;
  cssPath: string;
}

export interface OptionValue {
  label: string;
  value: any;
}
