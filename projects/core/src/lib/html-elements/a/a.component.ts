import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { StyleProperties, propDescription, PropTypes } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { BaseHTMLElement, parseHTMLUIModel } from '../../components/base-html-element';
import { JSONUtils } from '../../utils/json.utils';

@Directive()
export class AComponent extends BaseHTMLElement<LinkProperties> { // tslint:disable-line
  create(selectorElement: HTMLElement): void {
    super.create(selectorElement);

    if (this.properties.href) {
      this.element.setAttribute('href', this.properties.href);
    }

    if (this.properties.target) {
      this.element.setAttribute('target', this.properties.target);
    }

    if (this.properties.routerLink) {
      this.element.style.cursor = 'pointer';
      this.element.setAttribute('href', 'javascript:void(0);');
    }

    this.element.onclick = (evt) => {
      this.emitEvent(this.properties.onClick);

      if (this.properties.routerLink) {
        const router = this.injector.get(Router);
        router.navigate([this.getPath()]);
        evt.preventDefault();
      }
    }
  }

  private getPath(): string {
    let routerLink = this.properties.routerLink;
    const matches = routerLink.match(/{\$\.[\w/]+}/g);
    if (matches) {
      matches.forEach(m => {
        const path = m.replace(/[{}]+/, '');
        const res = JSONUtils.find(this.dataModel, path);
        routerLink = routerLink.replace(m, res);
      });
    }
    return routerLink;
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

  @propDescription({
    description: 'Key for action that fires onclick',
    example: 'onLinkClick()',
    type: PropTypes.EVENT
  })
  onClick?: string;

  @propDescription({
    description: 'Router link',
    example: 'path/page',
  })
  routerLink?: string;
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

type AComponentConstrutor = new () => AComponent;

type LinkPropertiesConstrutor = new () => LinkProperties;

export const aDescriptor: ComponentDescriptor<AComponentConstrutor, LinkPropertiesConstrutor> = {
  name: 'a',
  label: 'Link',
  packageName: 'core',
  category: Categories.HTML,
  description: 'A component',
  itemProperties: LinkProperties,
  component: AComponent,
  example,
  parseUIModel: (xmlRes: XMLResult) => {
    const uiModel = parseHTMLUIModel(xmlRes);
    if (xmlRes.attrs.routerLink) {
      uiModel.itemProperties.routerLink = xmlRes.attrs.routerLink;
    }
    return uiModel;
  },
  defaultModel: '<a target="_blank" href="https://www.google.com/">Google</a>'
};
