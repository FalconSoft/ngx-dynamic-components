import { ComponentDescriptor, Categories, BaseHTMLElementConstructor } from '../../models';
import { BaseHTMLElement, HTMLProperties, HTMLPropertiesConstrutor, parseHTMLUIModel } from '../../components/base-html-element';

export const ulDescriptor: ComponentDescriptor<BaseHTMLElementConstructor, HTMLPropertiesConstrutor> = {
  name: 'ul',
  label: 'UL Element',
  packageName: 'core',
  category: Categories.HTML,
  description: 'HTML UL element',
  itemProperties: HTMLProperties,
  component: BaseHTMLElement,
  example: {
    title: 'HTML <ul> example',
    uiModel: `<div>
    <ul>
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
    </ul>
    </div>`,
    dataModel: {}
  },
  parseUIModel: parseHTMLUIModel,
  defaultModel: '<ul></ul>'
};
