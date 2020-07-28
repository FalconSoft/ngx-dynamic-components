import { Component } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';

@Component({
  selector: 'dc-link',
  template: `
    <a [ngStyle]="itemStyles" [attr.target]="properties.target || null"
      [href]="properties.href">{{properties.label}}</a>
  `,
  styles: [`
    a {
      color: inherit;
    }
  `]
})
export class LinkComponent extends BaseUIComponent<LinkProperties> { }

export class LinkProperties extends StyleProperties {
  @propDescription({
    description: 'Link label',
    example: 'Click me!',
  })
  label: string;

  @propDescription({
    description: 'Link href used in case of type=link.',
    example: 'url/to/site',
  })
  href?: string;

  @propDescription({
    description: 'The target attribute specifies where to open the linked document.',
    example: '_blank',
  })
  target?: string;
}

export const example: ComponentExample<UIModel<LinkProperties>> = {
  title: 'Basic link example',
  uiModel: `
  <div class="row align-items-center">
    <link class="btn btn-primary mr-2" href="https://falconsoft.github.io/ngx-dynamic-components/components/core/button">Button</link>
    <link target="_blank" disabled="true" href="https://www.google.com/">Google</link>
  </div>
  `,
  dataModel: {}
};

type LinkComponentConstrutor = new () => LinkComponent;

type LinkPropertiesConstrutor = new () => LinkProperties;

export const linkDescriptor: ComponentDescriptor<LinkComponentConstrutor, LinkPropertiesConstrutor> = {
  name: 'link',
  label: 'Link',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Link component',
  itemProperties: LinkProperties,
  component: LinkComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const content = xmlRes.content;
    const itemProperties: AttributesMap = {};
    if (typeof content === 'string') {
      itemProperties.label = content;
    }

    return {
      type: 'link',
      itemProperties: { label: content }
    };
  },
  defaultModel: '<link target="_blank" href="https://www.google.com/">Google</link>'
};
