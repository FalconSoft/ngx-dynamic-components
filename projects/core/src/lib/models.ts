import { BaseUIComponentConstructor, propDescription, PropDescriptor } from './utils';
import { WorkflowEngine } from './workflow/workflow.processor';

type UIAction = (sender: UIModel, dataModel: any, uiModel: UIModel) => void;

export interface AttributesMap {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    label?: string;
    [key: string]: any;
}

export abstract class StyleProperties implements AttributesMap {
  @propDescription({
    description: 'Element\'s width.',
    example: '100%'
  })
  width?: string;

  @propDescription({
    description: 'Element\'s height.',
    example: '100%'
  })
  height?: string;

  @propDescription({
    description: 'Element\'s padding.',
    example: '10px 5px'
  })
  padding?: string;

  @propDescription({
    description: 'Element\'s margin.',
    example: '5px 3px 5px 10px'
  })
  margin?: string;

  @propDescription({
    description: 'Element\'s min width.',
    example: '10px'
  })
  'min-width'?: string;

  @propDescription({
    description: 'Element\'s min height.',
    example: '10px'
  })
  'min-height'?: string;

  @propDescription({
    description: 'Element\'s background.',
    example: '100%'
  })
  background?: string;

  @propDescription({
    description: 'Element\'s color.',
    example: '100%'
  })
  color?: string;

  @propDescription({
    description: 'Element\'s font weight.',
    example: '100%'
  })
  'font-weight'?: string;

  @propDescription({
    description: 'Element\'s font size.',
    example: '100%'
  })
  'font-size'?: string;

  @propDescription({
    description: 'Element\'s font style.',
    example: '100%'
  })
  'font-style'?: string;

  @propDescription({
    description: 'Element\'s border.',
    example: '100%'
  })
  border?: string;
}

export abstract class BindingProperties extends StyleProperties {
  @propDescription({
    description: 'Path to id in data model.',
    example: 'name'
  })
  dataModelPath?: string;
}

export abstract class DataModelProperties extends BindingProperties {
  @propDescription({
    description: 'Component Data Source.',
    example: '{{responseContext}}/dataset'
  })
  dataSource?: string;
}

export abstract class LabelProperties extends BindingProperties {
  @propDescription({
    description: 'Label orientation',
    example: 'bottom',
  })
  labelPosition?: string;
  @propDescription({
    description: 'Label',
    example: 'Username',
  })
  label?: string;
  @propDescription({
    description: 'Label width',
    example: '80px',
  })
  labelWidth?: string;
}

export abstract class ContainerProperties extends StyleProperties {
  @propDescription({
    description: 'Array of children ui Models',
    example: '[{type: \'text\', itemProperties: {}, containerProperties: {}}]',
  })
  children?: UIModel[];
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
  propertiesDescriptor?: any[];
}

export interface ActionDescriptor {
  name: string;
  category: string;
  config: string | object;
  description?: string;
  method: (...args: any[]) => any;
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

export enum PropertyCategories {
  Layout = 'Layout Properties',
  Container = 'Container Properties',
  Main = 'Main Properties',
  Appearance = 'Appearance Properties'
}

export interface ComponentProperty {
  name: string;
  label: string;
  category: PropertyCategories;
  isContainerProperty?: boolean;
  combo?: Array<(string|number|OptionValue)[]|string>;
  descriptor?: PropDescriptor;
}

export interface ComponentPropertyValue extends ComponentProperty {
  value: any;
}
