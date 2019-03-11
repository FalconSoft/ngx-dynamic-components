import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';

export const COMPONENTS_LIST: ComponentDescriptor[] = [];

// Register components.
export function registerComponents() {
  COMPONENTS_LIST.forEach(component => CoreService.registerComponent(component));
}

export function addToComponentsList(componentDescriptor: ComponentDescriptor) {
  COMPONENTS_LIST.push(componentDescriptor);
}

export function getCategories(): {name: string, components: ComponentDescriptor[]}[] {
  const categories = COMPONENTS_LIST.reduce((map, desc) => {
    map[desc.category] = map[desc.category] || [];
    map[desc.category].push(desc);
    return map;
  }, {});

  return Object.entries(categories).map(([key, val]: [string, ComponentDescriptor[]]) => {
    return {
      name: key,
      components: val
    };
  });
}
