export enum PropertyCategories {
  Layout = 'Layout',
  ContainerLayout = 'Container Layout',
  Common = 'Common',
  Appearance = 'Appearance'
}

export interface ComponentProperty {
  name: string;
  label: string;
  category: PropertyCategories;
  isContainerProperty?: boolean;
}

export interface ComponentPropertyValue extends ComponentProperty {
  value: any;
}

/**
 * Container properties related to each component.
 */
export const ContainerControlProperties = new Map<string, ComponentProperty>([
  ['fxFlex', {name: 'fxFlex', label: 'Flex', category: PropertyCategories.ContainerLayout}],
  ['fxFlexOrder', {name: 'fxFlexOrder', label: 'Order', category: PropertyCategories.ContainerLayout}],
  ['fxFlexOffset', {name: 'fxFlexOffset', label: 'Flex Offset', category: PropertyCategories.ContainerLayout}],
  ['fxFlexAlign', {name: 'fxFlexAlign', label: 'Flex Align', category: PropertyCategories.ContainerLayout}],
  ['fxFlexFill', {name: 'fxFlexFill', label: 'Flex Fill', category: PropertyCategories.ContainerLayout}]
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
  ['fxLayout', {name: 'fxLayout', label: 'Layout', category: PropertyCategories.Common}],
  ['fxLayoutAlign', {name: 'fxLayoutAlign', label: 'Align', category: PropertyCategories.Common}],
  ['fxLayoutGap', {name: 'fxLayoutGap', label: 'Gap', category: PropertyCategories.Common}],

  // Field Input
  ['type', {name: 'type', label: 'Data Type', category: PropertyCategories.Common}],
  ['labelOrientation', {name: 'labelOrientation', label: 'Label Orientation', category: PropertyCategories.Common}],
  ['label', {name: 'label', label: 'Label', category: PropertyCategories.Common}],
  ['dataModelPath', {name: 'dataModelPath', label: 'Binding', category: PropertyCategories.Common}],
  ['enabled', {name: 'enabled', label: 'Enabled', category: PropertyCategories.Common}],
  ['visible', {name: 'visible', label: 'Visible', category: PropertyCategories.Common}],
  ['inputWidth', {name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout}],
  ['labelWidth', {name: 'labelWidth', label: 'Label Width', category: PropertyCategories.Layout}],
]);
