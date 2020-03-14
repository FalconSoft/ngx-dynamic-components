import { BaseUIComponent } from '../components/base-ui-component';

export interface BaseUIComponentConstructor {
  new (): BaseUIComponent;
}

export function actionDescriptor(descriptor) {
  return (target) => {
    target.descriptor = descriptor;
  };
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

export function getCssPath(el: Node, parent: Element) {
  if (el instanceof Element) {
    const path = [];
    while (el !== parent) {
      let selector = el.nodeName.toLowerCase();
      let sib: Node = el;
      let nth = 1;
      while (sib && sib !== parent) {
        sib = sib.previousSibling;
        if (sib instanceof Element) {
          nth++;
        }
      }
      selector += `:nth-child(${nth})`;
      path.unshift(selector);
      el = el.parentNode;
    }
    return path.join(' > ');
  }
}

export const kebabStrToCamel = (s: string) => {
  return s.replace(/([-][a-z])/ig, ($1) => {
    return $1.toUpperCase().replace('-', '');
  });
};

export function setFields(fields: Array<string|string[]>, data: object[]) {
  if (!fields) {
    return data;
  }
  return fields.reduce((res: any, field) => {
    if (Array.isArray(field)) {
      res[field[1]] = data[field[0]];
    } else {
      res[field] = data[field];
    }
    return res;
  }, {});
}

export function formatObjToJsonStr(obj: any): string {
  if (obj === null || obj === undefined) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }
  return JSON.stringify(obj, null, '\t');
}
