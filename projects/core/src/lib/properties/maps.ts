import { ComponentProperty, PropertyCategories } from './models';

// background, color, font
/**
 * Item properties can be used in any component.
 */
export const controlProperties = new Map<string, ComponentProperty>([
  // General Component properties
  ['width', { name: 'width', label: 'Width', category: PropertyCategories.Layout }],
  ['height', { name: 'height', label: 'Height', category: PropertyCategories.Layout }],
  ['min-width', { name: 'min-width', label: 'Min width', category: PropertyCategories.Layout }],
  ['min-height', { name: 'min-height', label: 'Min height', category: PropertyCategories.Layout }],
  ['margin', { name: 'margin', label: 'Margin', category: PropertyCategories.Layout }],
  ['padding', { name: 'padding', label: 'Padding', category: PropertyCategories.Layout }],

  // Field properties
  ['label', { name: 'label', label: 'Label', category: PropertyCategories.Main }],
  ['labelPosition', {
    name: 'labelPosition', label: 'Label Position', category: PropertyCategories.Main,
    values: ['left', 'top', 'right', 'bottom']
  }],
  ['labelWidth', { name: 'labelWidth', label: 'Label Width', category: PropertyCategories.Layout }],

  // Appearence
  ['background', { name: 'background', label: 'Background', category: PropertyCategories.Appearance }],
  ['color', { name: 'color', label: 'Color', category: PropertyCategories.Appearance }],
  ['font-weight', {
    name: 'font-weight', label: 'Font weight', category: PropertyCategories.Appearance,
    values: ['bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900]
  }],
  ['font-size', {
    name: 'font-size', label: 'Font size', category: PropertyCategories.Appearance,
    values: ['large', 'larger', 'medium', 'small', 'smaller', 'x-large', 'xx-large', 'x-small', 'xx-small']
  }],
  ['font-style', {
    name: 'font-style', label: 'Font style', category: PropertyCategories.Appearance,
    values: ['italic', 'oblique', 'normal']
  }],
  ['border', {
    name: 'border', label: 'Border', category: PropertyCategories.Appearance,
    combo: [[{ label: 'all', value: 'border' }, { label: 'top', value: 'border-top' }, { label: 'left', value: 'border-left' },
    { label: 'right', value: 'border-right' }, { label: 'bottom', value: 'border-bottom' }], 'border-value']
  }],

  // Validation properties
  ['required', {name: 'required', label: 'Required', category: PropertyCategories.Validation,
    values: ['true', 'false']}],
  ['minlength', {name: 'minlength', label: 'Min length', category: PropertyCategories.Validation}],
  ['maxlength', {name: 'maxlength', label: 'Max length', category: PropertyCategories.Validation}],
  ['pattern', {name: 'pattern', label: 'Pattern', category: PropertyCategories.Validation}]
]);
