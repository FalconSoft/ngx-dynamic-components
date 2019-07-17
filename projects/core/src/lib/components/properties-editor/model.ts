import { OptionValue } from '../../models';

export enum PropertyCategories {
  Layout = 'Layout Properties',
  Container = 'Container Properties',
  Main = 'Main Properties',
  Appearance = 'Appearance'
}

export interface ComponentProperty {
  name: string;
  label: string;
  category: PropertyCategories;
  isContainerProperty?: boolean;
  options?: OptionValue[];
  combo?: Array<string[]>;
}

export interface ComponentPropertyValue extends ComponentProperty {
  value: any;
}

/**
 * Container properties related to each component.
 */
export const ContainerControlProperties = new Map<string, ComponentProperty>([
  ['fxFlex', {name: 'fxFlex', label: 'Flex', category: PropertyCategories.Container}],
  ['fxFlexOrder', {name: 'fxFlexOrder', label: 'Order', category: PropertyCategories.Container}],
  ['fxFlexOffset', {name: 'fxFlexOffset', label: 'Flex Offset', category: PropertyCategories.Container}],
  ['fxFlexAlign', {name: 'fxFlexAlign', label: 'Flex Align', category: PropertyCategories.Container,
    combo: [['start', 'baseline', 'center', 'end']]
  }],
  ['fxFlexFill', {name: 'fxFlexFill', label: 'Flex Fill', category: PropertyCategories.Container}]
]);

/**
 * Item properties can be used in any component.
 */
export const ControlProperties = new Map<string, ComponentProperty>([
  // General Component properties
  ['width', {name: 'width', label: 'Width', category: PropertyCategories.Layout}],
  ['height', {name: 'height', label: 'Height', category: PropertyCategories.Layout}],
  ['min-width', {name: 'min-width', label: 'Min width', category: PropertyCategories.Layout}],
  ['min-height', {name: 'min-height', label: 'Min height', category: PropertyCategories.Layout}],
  ['margin', {name: 'margin', label: 'Margin', category: PropertyCategories.Layout}],
  ['padding', {name: 'padding', label: 'Padding', category: PropertyCategories.Layout}],

  // Flex Container properties
  ['fxLayout', {name: 'fxLayout', label: 'Layout', category: PropertyCategories.Main,
    options: [{label: 'Row', value: 'row'}, {label: 'Column', value: 'column'}]
  }],
  ['fxLayoutAlign', {name: 'fxLayoutAlign', label: 'Layout Align', category: PropertyCategories.Main,
    combo: [['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
    ['start', 'center', 'end', 'space-around', 'space-between', 'stretch', 'baseline']]
  }],
  ['fxLayoutGap', {name: 'fxLayoutGap', label: 'Gap', category: PropertyCategories.Main}],

  // Field Input
  ['type', {name: 'type', label: 'Data Type', category: PropertyCategories.Main}],
  ['labelOrientation', {name: 'labelOrientation', label: 'Label Orientation', category: PropertyCategories.Main,
    combo: [['horizontal', 'vertical']]
  }],
  ['label', {name: 'label', label: 'Label', category: PropertyCategories.Main}],
  ['dataModelPath', {name: 'dataModelPath', label: 'Binding', category: PropertyCategories.Main}],
  ['enabled', {name: 'enabled', label: 'Enabled', category: PropertyCategories.Main}],
  ['visible', {name: 'visible', label: 'Visible', category: PropertyCategories.Main}],
  ['inputWidth', {name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout}],
  ['labelWidth', {name: 'labelWidth', label: 'Label Width', category: PropertyCategories.Layout}],
]);
