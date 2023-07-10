import { ComponentDescriptor, Categories, BaseHTMLElementConstructor } from '../../models';
import { BaseHTMLElement, HTMLProperties, HTMLPropertiesConstrutor, parseHTMLUIModel } from '../../components/base-html-element';

export const liDescriptor: ComponentDescriptor<BaseHTMLElementConstructor, HTMLPropertiesConstrutor> = {
  name: 'li',
  label: 'LI Element',
  packageName: 'core',
  category: Categories.HTML,
  description: 'HTML LI element',
  itemProperties: HTMLProperties,
  component: BaseHTMLElement,
  example: {
    title: 'HTML <li> example',
    uiModel: `<section>
    <li background="gray" color="red">Text</li>
    <li background="green" color="white"><span>Text in Span</span></li>
    <li background="blue" color="yellow"><a href="https://www.google.com">Google</a></li>
    <li><i class="fa fa-play"/></li>
  </section>`,
    dataModel: {}
  },
  parseUIModel: parseHTMLUIModel,
  defaultModel: '<li><i class="fa fa-play"/></li>'
};
