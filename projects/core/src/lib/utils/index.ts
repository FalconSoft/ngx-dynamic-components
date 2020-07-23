import { BaseUIComponent } from '../components/base-ui-component';
import { BaseHTMLElement } from '../components/base-html-element';
import { BaseDynamicComponent } from '../components/base-dynamic-component';
import { UIModel } from '../models';
import { JSONUtils } from './json.utils';

export * from './helpers';
export type BaseUIComponentConstructor = new () => BaseUIComponent;
export type BaseHTMLElementConstructor = new () => BaseHTMLElement;

/**
 * Gets component from uiModel by id
 * @param uiModel UIModel.
 * @param id Component identifier.
 */
export function getComponentById(uiModel: UIModel, id: string): BaseDynamicComponent {
  const componentUIModel = JSONUtils.find(uiModel, `$(children:id=${id})`) as UIModel;
  return componentUIModel?.getComponent();
}
