import { OptionValue, AttributesMap, UIModel } from '../models';
import { propDescription } from './descriptor';

export interface PropDescriptor {
  description: string;
  example: string;
  link?: string;
}

export interface UIModelProperty extends PropDescriptor {
  name: string;
}

export enum PropertyCategories {
  Layout = 'Layout Properties',
  Container = 'Container Properties',
  Main = 'Main Properties',
  Appearance = 'Appearance Properties',
  Validation = 'Validation Properties'
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

export const StylePropertiesList = ['width', 'height', 'padding', 'margin', 'min-height', 'min-width', 'background', 'color',
  'font-size', 'font-weight', 'font-style', 'overflow'];
