import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';
import { containerDescriptor } from './container/container.component';
import { containerRowDescriptor } from './container-row/container-row.component';
import { inputDescriptor } from './input-ui/input-ui.component';
import { selectDescriptor } from './select-ui/select-ui.component';
import { packageName } from '../constants';
import { checkboxDescriptor } from './checkbox-ui/checkbox-ui.component';
import { radioGroupDescriptor } from './radio-group-ui/radio-group-ui.component';
import { textareaDescriptor } from './textarea-ui/textarea-ui.component';
import { buttonDescriptor } from './button-ui/button-ui.component';

export const COMPONENTS_LIST: ComponentDescriptor[] = [
  containerDescriptor,
  containerRowDescriptor,
  inputDescriptor,
  selectDescriptor,
  checkboxDescriptor,
  radioGroupDescriptor,
  textareaDescriptor,
  buttonDescriptor
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