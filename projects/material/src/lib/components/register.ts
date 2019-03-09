import { CoreService, ComponentDescriptor } from '@ngx-dynamic-components/core';

// Option 1.
import { selectDescriptor} from './select-ui-component';

export const COMPONENTS_LIST: ComponentDescriptor[] = [
  // Option 1,
  selectDescriptor
];

// Register components.
export function registerComponents() {
  COMPONENTS_LIST.forEach(component => CoreService.registerComponent(component));
}

// Option 2.
export function addToComponentsList(componentDescriptor: ComponentDescriptor) {
  COMPONENTS_LIST.push(componentDescriptor);
}
