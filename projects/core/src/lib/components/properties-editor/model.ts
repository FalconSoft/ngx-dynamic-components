import { ComponentProperty, PropertyCategories } from '../../models';

/**
 * Container properties related to each component.
 */
export const ContainerControlProperties = new Map<string, ComponentProperty>([
  ['fxFlex', { name: 'fxFlex', label: 'Flex Resizing', category: PropertyCategories.Container }],
  ['fxFlexOrder', { name: 'fxFlexOrder', label: 'Flex Order', category: PropertyCategories.Container }],
  ['fxFlexOffset', { name: 'fxFlexOffset', label: 'Flex Offset', category: PropertyCategories.Container }],
  ['fxFlexAlign', {
    name: 'fxFlexAlign', label: 'Flex Align', category: PropertyCategories.Container,
    combo: [['start', 'baseline', 'center', 'end']]
  }],
  ['fxFlexFill', { name: 'fxFlexFill', label: 'Flex Fill', category: PropertyCategories.Container }]
]);
// background, color, font
/**
 * Item properties can be used in any component.
 */
export const ControlProperties = new Map<string, ComponentProperty>([
  // General Component properties
  ['width', { name: 'width', label: 'Width', category: PropertyCategories.Layout }],
  ['height', { name: 'height', label: 'Height', category: PropertyCategories.Layout }],
  ['min-width', { name: 'min-width', label: 'Min width', category: PropertyCategories.Layout }],
  ['min-height', { name: 'min-height', label: 'Min height', category: PropertyCategories.Layout }],
  ['margin', { name: 'margin', label: 'Margin', category: PropertyCategories.Layout }],
  ['padding', { name: 'padding', label: 'Padding', category: PropertyCategories.Layout }],

  // Flex Container properties
  ['fxLayout', {
    name: 'fxLayout', label: 'Flex Direction', category: PropertyCategories.Main,
    options: [{ label: 'Row', value: 'row' }, { label: 'Column', value: 'column' }]
  }],
  ['fxLayoutAlign', {
    name: 'fxLayoutAlign', label: 'Children Align', category: PropertyCategories.Main,
    combo: [['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
    ['start', 'center', 'end', 'space-around', 'space-between', 'stretch', 'baseline']]
  }],
  ['fxLayoutGap', { name: 'fxLayoutGap', label: 'Children Gap', category: PropertyCategories.Main }],

  // Field properties
  ['label', { name: 'label', label: 'Label', category: PropertyCategories.Main }],
  ['labelPosition', {
    name: 'labelPosition', label: 'Label Position', category: PropertyCategories.Main,
    combo: [['left', 'top', 'right', 'bottom', 'none']]
  }],
  ['labelWidth', { name: 'labelWidth', label: 'Label Width', category: PropertyCategories.Layout }],
  ['dataModelPath', { name: 'dataModelPath', label: 'Binding', category: PropertyCategories.Main }],
  ['enabled', { name: 'enabled', label: 'Enabled', category: PropertyCategories.Main }],
  ['visible', { name: 'visible', label: 'Visible', category: PropertyCategories.Main }],

  // Appearence
  ['background', { name: 'background', label: 'Background', category: PropertyCategories.Appearance }],
  ['color', { name: 'color', label: 'Color', category: PropertyCategories.Appearance }],
  ['font-weight', {
    name: 'font-weight', label: 'Font weight', category: PropertyCategories.Appearance,
    combo: [['bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'none']]
  }],
  ['font-size', {
    name: 'font-size', label: 'Font size', category: PropertyCategories.Appearance,
    combo: [['large', 'larger', 'medium', 'small', 'smaller', 'x-large', 'xx-large', 'x-small', 'xx-small']]
  }],
  ['font-style', {
    name: 'font-style', label: 'Font style', category: PropertyCategories.Appearance,
    combo: [['italic', 'oblique', 'normal', 'none']]
  }],
  ['border', {
    name: 'border', label: 'Border', category: PropertyCategories.Appearance,
    combo: [[{ label: 'all', value: 'border' }, { label: 'top', value: 'border-top' }, { label: 'left', value: 'border-left' },
    { label: 'right', value: 'border-right' }, { label: 'bottom', value: 'border-bottom' }, { label: 'none', value: '' }], 'border-value']
  }],
]);