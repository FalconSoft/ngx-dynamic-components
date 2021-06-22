import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { StyleProperties, propDescription, PropTypes } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { BaseHTMLElement, parseHTMLUIModel } from '../../components/base-html-element';
import { queryValue } from '../../utils';
import { getTokenLoc } from 'jspython-interpreter/dist/common';

@Directive()
export class AComponent extends BaseHTMLElement<LinkProperties> { // eslint-disable-line
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

        const navigationExtras = {};
        const queryParams = this.getQueryParams();

        if (queryParams) {
          (navigationExtras as any).queryParams = queryParams;
        }
        router.navigate([this.getPath()], navigationExtras);
        evt.preventDefault();
      }
    };
  }

  private getQueryParams(): any {
    let queryParams = this.properties.queryString;
    if (!queryParams) {
      return null;
    }

    const matches = queryParams.match(/{\$\.[\w/]+}/g);
    if (matches) {
      matches.forEach(m => {
        const path = m.replace(/[{}]+/, '');
        const res = queryValue(this.dataModel, path);
        queryParams = queryParams.replace(m, res);
      });
    }

    function parseQuery(queryString) {
      const query = {};
      const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
      for (const pairText of pairs) {
        const pair = pairText.split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    }


    return parseQuery(queryParams);
  }

  private getPath(): string {
    let routerLink = this.properties.routerLink;
    const matches = routerLink.match(/{\$\.[\w/]+}/g);
    if (matches) {
      matches.forEach(m => {
        const path = m.replace(/[{}]+/, '');
        const res = queryValue(this.dataModel, path);
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

  @propDescription({
    description: 'Query String',
    example: 'id=12&another={$.dataModelProperty}',
  })
  queryString?: string;

}

export const example: ComponentExample<UIModel<LinkProperties>> = {
  title: 'Basic link example',
  uiModel: `
  <section class="row align-items-center m-1">
    <a title="Link to Google" class="btn btn-primary mr-2"
    href="https://falconsoft.github.io/ngx-dynamic-components/components/core/button">Button</a>
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
    if (xmlRes.attrs.queryParams) {
      uiModel.itemProperties.queryParams = xmlRes.attrs.queryParams;
    }
    return uiModel;
  },
  defaultModel: '<a target="_blank" href="https://www.google.com/">Google</a>'
};
