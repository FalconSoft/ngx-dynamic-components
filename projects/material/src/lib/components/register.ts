import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';
import { inputDescriptor } from './input-ui-component';
import { selectDescriptor } from './select-ui-component';
import { buttonDescriptor } from './button-ui-component';
import { cardDescriptor } from './card-ui-component';
import { checkboxDescriptor } from './checkbox-ui-component';
import { textareaDescriptor } from './textarea-ui-component';
import { radioGroupDescriptor } from './radio-group-ui/radio-group-ui.component';
import { tabsDescriptor } from './tabs-ui/tabs-ui.component';
import { datableDescriptor } from './datable-ui/datable-ui.component';
import { packageName } from '../constants';

export const COMPONENTS_LIST: ComponentDescriptor[] = [
  selectDescriptor,
  inputDescriptor,
  buttonDescriptor,
  cardDescriptor,
  checkboxDescriptor,
  textareaDescriptor,
  radioGroupDescriptor,
  tabsDescriptor,
  datableDescriptor
];

// Register components.
export function registerComponents() {
  COMPONENTS_LIST.forEach(component => CoreService.registerComponent(component));
}

export function getCategories(): {name: string, packageName: string, components: ComponentDescriptor[]}[] {
  const categories = COMPONENTS_LIST.reduce((map, desc) => {
    map[desc.category] = map[desc.category] || [];
    map[desc.category].push(desc);
    return map;
  }, {});

  return Object.entries(categories).map(([key, val]: [string, ComponentDescriptor[]]) => {
    return {
      name: key,
      components: val,
      packageName
    };
  });
}
