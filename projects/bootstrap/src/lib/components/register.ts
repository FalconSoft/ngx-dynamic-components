import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';

import { selectDescriptor } from './select/select.component';
import { tabsDescriptor } from './tabs/tabs.component';
import { packageName } from '../constants';
import { inputTypeaheadDescriptor } from './input-typeahead/input-typeahead.component';

export const COMPONENTS_LIST: ComponentDescriptor[] = [
  tabsDescriptor,
  selectDescriptor,
  inputTypeaheadDescriptor
];

// Register components.
export function registerComponents(): void {
  COMPONENTS_LIST.forEach(component => CoreService.registerComponent(component));
}

export function getCategories(): { name: string; packageName: string; components: ComponentDescriptor[] }[] {
  const categories = COMPONENTS_LIST.reduce((map, desc) => {
    map[desc.category] = map[desc.category] || [];
    map[desc.category].push(desc);
    return map;
  }, {});

  return Object.entries(categories).map(([key, val]: [string, ComponentDescriptor[]]) => ({
      name: key,
      components: val,
      packageName
    }));
}
