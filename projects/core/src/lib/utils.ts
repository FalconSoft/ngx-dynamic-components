import { BaseUIComponent } from './components/base-ui-component';

export interface BaseUIComponentConstructor {
  new (): BaseUIComponent;
}

export interface PropDescriptor {
  description: string;
  example: string;
}

export function propDescription(description: PropDescriptor) {
  function decorate(target: any, key: string) {
    let properties = target.hasOwnProperty('properties') ? target.properties : [];
    properties.push({
      name: key,
      ...description
    });

    let proto = Object.getPrototypeOf(target);

    while (proto.hasOwnProperty('properties')) {
      properties = properties.concat(proto.properties);
      proto = Object.getPrototypeOf(proto);
    }
    target.properties = Array.from(new Set(properties)).sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  return decorate;
}
