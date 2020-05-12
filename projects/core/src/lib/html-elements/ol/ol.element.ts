import { ComponentDescriptor, Categories, XMLResult, UIModel } from '../../models';
import { BaseHTMLElement, HTMLProperties, HTMLPropertiesConstrutor, parseHTMLUIModel } from '../../components/base-html-element';
import { BaseHTMLElementConstructor } from '../../utils';

export const olDescriptor: ComponentDescriptor<BaseHTMLElementConstructor, HTMLPropertiesConstrutor> = {
  name: 'ol',
  label: 'OL Element',
  packageName: 'core',
  category: Categories.HTML,
  description: 'HTML OL element',
  itemProperties: HTMLProperties,
  component: BaseHTMLElement,
  example: {
    title: 'HTML <ol> example',
    uiModel: `<div>
    <ol>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    </ol>
    </div>`,
    dataModel: {}
  },
  parseUIModel: parseHTMLUIModel,
  defaultModel: '<ol></ol>'
};
