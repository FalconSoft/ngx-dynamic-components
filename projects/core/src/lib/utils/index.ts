import { BaseUIComponent } from '../components/base-ui-component';
import { BaseHTMLElement } from '../components/base-html-element';
import { BaseDynamicComponent } from '../components/base-dynamic-component';
import { UIModel } from '../models';

export * from './helpers';
export type BaseUIComponentConstructor = new () => BaseUIComponent;
export type BaseHTMLElementConstructor = new () => BaseHTMLElement;

/**
 * Gets component from uiModel by id
 * @param uiModel UIModel.
 * @param id Component identifier.
 */
export function getComponentById(uiModel: UIModel, id: string): BaseDynamicComponent {

  function traverseUiModel(uModel: UIModel, predicate: (uModel) => boolean): UIModel {
    if (predicate(uModel)) {
      return uModel;
    }

    if (uModel.children?.length) {
      for (const chileModel of uModel.children) {
        const res = traverseUiModel(chileModel, predicate);
        if (res) {
          return res;
        }
      }
    }

    return null;
  }

  const componentUIModel = traverseUiModel(uiModel, uim => uim.id === id);
  return componentUIModel?.getComponent();
}

/**
 * A helper method that sets value based on path.
 * e.g. setValue({}, 'obj.prop1.value', 22) will create a corresponding object and assign value = 22
 */
export function setValue(objectValue: object, path: string, value: any): void {
  if (!objectValue) {
    objectValue = {};
  }

  if (path === '$' || path === '') {
    Object.assign(objectValue, value);
    return;
  }

  if (path.startsWith('$.')) {
    path = path.substring(2);
  }

  const props = path.indexOf('/') > 0 ? path.split('/') : path.split('.');
  let res: any = objectValue;

  for (let i = 0; i < props.length - 1; i++) {
    res = objectValue[props[i]];
    if (typeof res !== 'object') {
      objectValue[props[i]] = {};
      res = objectValue[props[i]];
    }
  }

  res[props[props.length - 1]] = value;
}

/**
 * a helper methods that query JS Object for a value based on path. obj.subObject.value
 */
export function queryValue(obj: any, path: string, defaultValue: any = null): any {
  if (path === '$' || path === '') {
    return defaultValue;
  }

  if (path.startsWith('$.')) {
    path = path.substring(2);
  }

  const props = path.indexOf('/') > 0 ? path.split('/') : path.split('.');

  let res = obj;
  for (const p of props) {
    res = obj[p];
    if (!res && res !== 0) {
      return res || defaultValue;
    }
  }

  return res;
}