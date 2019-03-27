import { BaseUIComponent } from './components/base-ui-component';

export interface BaseUIComponentConstructor {
  new (): BaseUIComponent;
}

export interface PropDescriptor {
  description: string;
  example: string;
}

export interface ComponentProperty extends PropDescriptor {
  name: string;
}

export function propDescription(description: PropDescriptor) {
  function decorate(target: any, key: string) {
    let properties = target.hasOwnProperty('properties') ? target.properties : [];

    const newProp = {name: key, ...description};
    const existIndex = properties.findIndex(p => p.name === key);

    if (existIndex === -1) {
      properties.push(newProp);
    } else {
      properties.splice(existIndex, 1, newProp);
    }

    let proto = Object.getPrototypeOf(target);

    while (proto.hasOwnProperty('properties')) {
      // Filter overridden properties.
      const protoProps = proto.properties.filter(protoP => !properties.map(p => p.name).includes(protoP.name));
      properties = properties.concat(protoProps);
      proto = Object.getPrototypeOf(proto);
    }

    target.properties = properties.sort((a: any, b: any) => {
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

/**
 * Safe get item by index from array.
 * @param arr - array.
 * @param idx - index.
 */
export function getItemByIndex(arr: any, idx: number): any {
  if (arr && arr.length > idx) {
    return arr[idx];
  }
}
/**
 * Convering Javascript string Map to object
 * @param map - map to convert.
 * @param excludeKeys - array of keys to exclude from result.
 */
export function mapToObj(map: Map<string, any>, excludeKeys: string[] = []): {[key: string]: any} {
  const obj = {};
  map.forEach((value, key) => {
    if (!excludeKeys.includes(key)) {
      obj[key] = value;
    }
  });
  return obj;
}

