import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';

export const COMPONENTS_LIST: ComponentDescriptor[] = [];

// Register components.
export function registerComponents() {
  COMPONENTS_LIST.forEach(component => CoreService.registerComponent(component));
}

export function addToComponentsList(componentDescriptor: ComponentDescriptor) {
  COMPONENTS_LIST.push(componentDescriptor);
}
