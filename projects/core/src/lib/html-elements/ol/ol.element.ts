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
    uiModel: `

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb px-0">
      <li class="breadcrumb-item"><a routerLink="app/{$.appInfo/ownerName}/{$.appInfo/appName}">Home</a></li>
      <li class="breadcrumb-item"><a routerLink="app/{$.appInfo/ownerName}/{$.appInfo/appName}/orders-list">Orders</a></li>
      <li class="breadcrumb-item active" aria-current="page">Details</li>
    </ol>
  </nav>

    `,
    dataModel: {
      appInfo: {
        ownerName: 'TestUser',
        appName: 'LongAppName'
      }
    }
  },
  parseUIModel: parseHTMLUIModel,
  defaultModel: '<ol></ol>'
};
