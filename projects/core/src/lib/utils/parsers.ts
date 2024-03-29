import * as iXml from 'isomorphic-xml2js';
import { BaseDynamicComponent } from '../components/base-dynamic-component';
import { UIModel } from '../models';

/**
 * Gets component from uiModel by id
 * @param uiModel UIModel.
 * @param id Component identifier.
 */
export function getComponentById(
  uiModel: UIModel,
  id: string
): BaseDynamicComponent | undefined {
  function traverseUiModel(
    uModel: UIModel,
    predicate: (u) => boolean
  ): UIModel {
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
  const componentUIModel = traverseUiModel(uiModel, (uim) => uim.id === id);
  return componentUIModel?.getComponent();
}

/**
 * A helper method that sets value based on path.
 * e.g. setValue({}, 'obj.prop1.value', 22) will create a corresponding object and assign value = 22
 */
export function setValue(
  objectValue: Record<string, unknown>,
  path: string,
  value: any
): void {
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
    if (typeof res[props[i]] !== 'object') {
      res[props[i]] = {};
    }
    res = res[props[i]];
  }

  res[props[props.length - 1]] = value;
}

/**
 * a helper methods that query JS Object for a value based on path. obj.subObject.value
 */
export function queryValue(
  obj: any,
  path: string,
  defaultValue: any = null
): any {
  if (!path) {
    return defaultValue;
  }

  if (path === '$') {
    return obj;
  }

  if (path.startsWith('$.')) {
    path = path.substring(2);
  }
  path = path.replace('}', '');
  path = path.replace('{', '');

  const props = path.indexOf('/') > 0 ? path.split('/') : path.split('.');

  let res = obj;
  for (const p of props) {
    res = res[p];
    if (!res && res !== 0) {
      return res || defaultValue;
    }
  }

  return res;
}

export function parseXmlString(xmlString: string): any {
  let result = null;

  const ops = {
    explicitChildren: true,
    preserveChildrenOrder: true,
  };

  iXml.parseString(xmlString, ops, (err, res) => {
    if (res) {
      // need to clone result as it would mutate instance
      result = JSON.parse(JSON.stringify(res));
    }
    if (err) {
      // quite dirty way to get meaningful error message
      let msg = err.message.substring(err.message.indexOf('12px">') + 6);
      msg = msg.substring(0, msg.indexOf('</div>'));
      throw new Error(msg);
    }
  });

  return result;
}


export function parseXmlStringPromise(xmlString: string): Promise<any> {

  return new Promise((s, e) => {
    const ops = {
      explicitChildren: true,
      preserveChildrenOrder: true,
    };

    iXml.parseString(xmlString, ops, (err, res) => {
      if (res) {
        // need to clone result as it would mutate instance
        const xmlObject = JSON.parse(JSON.stringify(res));
        return s(xmlObject);
      }
      if (err) {
        // quite dirty way to get meaningful error message
        let msg = err.message.substring(err.message.indexOf('12px">') + 6);
        msg = msg.substring(0, msg.indexOf('</div>'));
        return e(msg);
      }
      return null;
    });
  });
}
