import { ComponentDescriptor, Categories } from '../models';
import { BaseHTMLElement, HTMLProperties, HTMLPropertiesConstrutor, parseHTMLUIModel } from '../components/base-html-element';
import { BaseHTMLElementConstructor } from '../utils';

const tags = ['span', 'p', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'small'];

const htmlElementDescriptor: ComponentDescriptor<BaseHTMLElementConstructor, HTMLPropertiesConstrutor> = {
  name: 'HTML_ELEMENT_TAG',
  label: 'HTML_ELEMENT_TAG Element',
  packageName: 'core',
  category: Categories.HTML,
  description: 'HTML HTML_ELEMENT_TAG element',
  itemProperties: HTMLProperties,
  component: BaseHTMLElement,
  example: {
    title: 'HTML <HTML_ELEMENT_TAG> example',
    uiModel: `
    <div>
    <HTML_ELEMENT_TAG>Text</HTML_ELEMENT_TAG>
    <HTML_ELEMENT_TAG><i class="fa fa-play"/></HTML_ELEMENT_TAG>
  </div>
    `,
    dataModel: {}
  },
  parseUIModel: parseHTMLUIModel,
  defaultModel: '<HTML_ELEMENT_TAG></HTML_ELEMENT_TAG>'
};

export const htmlDescriptors: ComponentDescriptor<BaseHTMLElementConstructor, HTMLPropertiesConstrutor>[] = tags.map(tag => {
  return replaceStringValues<ComponentDescriptor<BaseHTMLElementConstructor, HTMLPropertiesConstrutor>>(htmlElementDescriptor, tag);
});

function replaceStringValues<T = object>(target: T, tag: string): T {
  const res = {} as T;
  return Object.entries(target).reduce((obj, [key, value]) => {
    obj[key] = value;
    if (typeof value === 'string') {
      obj[key] = value.replace(/HTML_ELEMENT_TAG/g, tag);
    }

    if (key === 'example') {
      obj[key] = replaceStringValues(obj[key], tag);
    }

    return obj;
  }, res);
}
