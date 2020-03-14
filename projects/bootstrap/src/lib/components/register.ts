import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';

import { selectDescriptor } from './select/select.component';
import { tabsDescriptor } from './tabs/tabs.component';
import { packageName } from '../constants';

export const COMPONENTS_LIST: ComponentDescriptor[] = [
  tabsDescriptor,
  selectDescriptor
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
