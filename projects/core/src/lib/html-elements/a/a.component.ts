import { StyleProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';
import { BaseHTMLElement, parseHTMLUIModel } from '../../components/base-html-element';

export class AComponent extends BaseHTMLElement<LinkProperties> {
  create(selectorElement: HTMLElement): void {
    super.create(selectorElement);
    this.element.setAttribute('href', this.properties.href);
    if (this.properties.target) {
      this.element.setAttribute('target', this.properties.target);
    }
  }
}

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
  <section class="row align-items-center m-1">
    <a class="btn btn-primary mr-2" href="https://falconsoft.github.io/ngx-dynamic-components/components/core/button">Button</a>
    <a target="_blank" href="https://www.google.com/">Google</a>
  </section>
  `,
  dataModel: {}
};

interface AComponentConstrutor {
  new (): AComponent;
}

interface LinkPropertiesConstrutor {
  new (): LinkProperties;
}

export const aDescriptor: ComponentDescriptor<AComponentConstrutor, LinkPropertiesConstrutor> = {
  name: 'a',
  label: 'Link',
  packageName: 'core',
  category: Categories.HTML,
  description: 'A component',
  itemProperties: LinkProperties,
  component: AComponent,
  example,
  parseUIModel: parseHTMLUIModel,
  defaultModel: '<a target="_blank" href="https://www.google.com/">Google</a>'
};
