export enum PropertyCategories {
  Layout = 'Layout',
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
  ['width', {name: 'width', label: 'Width', category: PropertyCategories.Layout}],
  ['height', {name: 'height', label: 'Height', category: PropertyCategories.Layout}],
  ['fxFlex', {name: 'fxFlex', label: 'Flex', category: PropertyCategories.Layout}],
  ['fxFlexOrder', {name: 'fxFlexOrder', label: 'Order', category: PropertyCategories.Layout}],
  ['fxFlexOffset', {name: 'fxFlexOffset', label: 'Flex Offset', category: PropertyCategories.Layout}],
  ['fxFlexAlign', {name: 'fxFlexAlign', label: 'Flex Align', category: PropertyCategories.Layout}],
  ['fxFlexFill', {name: 'fxFlexFill', label: 'Flex Fill', category: PropertyCategories.Layout}]
]);

/**
 * Item properties can be used in any component.
 */
export const ControlProperties = new Map<string, ComponentProperty>([
  ['width', {name: 'width', label: 'Width', category: PropertyCategories.Common}],
  ['height', {name: 'height', label: 'Height', category: PropertyCategories.Common}]
]);
