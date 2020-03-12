import { CoreService } from '../services/core.service';
import { flexContainerDescriptor } from './flex-container/flex-container-component';
import { ComponentDescriptor } from '../models';
import { textDescriptor } from './text/text.component';
import { buttonDescriptor } from './button/button.component';

export const COMPONENTS_LIST: ComponentDescriptor[] = [
  flexContainerDescriptor,
  textDescriptor,
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
      packageName: 'core'
    };
  });
}
