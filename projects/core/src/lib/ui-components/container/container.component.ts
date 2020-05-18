import { Component, HostBinding } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';

@Component({
  selector: 'dc-container',
  templateUrl: './container.component.html',
  styles: [`
      :host:not(.row):not(.input-group) {
        display: block;
      }
    `]
})
export class ContainerComponent extends BaseUIComponent<ContainerProperties> {
  @HostBinding('style.display') display = undefined;
}

export class ContainerProperties extends StyleProperties {
  @propDescription({
    description: 'Text value',
    example: 'Information'
  })
  text?: string;
}

const example: ComponentExample<UIModel<ContainerProperties>> = {
  title: 'Section example',
  uiModel: `
  <section>
    <section class="row align-items-center justify-content-between m-0" width="100%" height="100%" padding="8px">
      <text class="m-0" text-style="h1">Header 1</text>
      <text class="m-0" text-style="h2">Header 2</text>
      <button class="btn btn-secondary" onСlick="consoleLog" type="button">Click</button>
      <text class="m-0" background="red" text-style="h3">Header 3</text>
    </section>
    <section>Text</section>
  </section>
  `,
  dataModel: {}
};

type ContainerComponentConstrutor = new() => ContainerComponent;

type ContainerPropertiesConstrutor = new() => ContainerProperties;

function getParseFunction(tag: string): (xmlRes: XMLResult) => UIModel {
  return (xmlRes: XMLResult) => ({
    type: tag,
    itemProperties: {
      text: xmlRes.content
    }
  });
}

export const containerDescriptor: ComponentDescriptor<ContainerComponentConstrutor, ContainerPropertiesConstrutor> = {
  name: 'section',
  packageName: 'core',
  label: 'Container',
  category: Categories.Containers,
  description: 'layout component',
  itemProperties: ContainerProperties,
  component: ContainerComponent,
  example,
  parseUIModel: getParseFunction('section'),
  defaultModel: `<section class="d-flex"></section>`,
};

export const divDescriptor: ComponentDescriptor<ContainerComponentConstrutor, ContainerPropertiesConstrutor> = {
  name: 'div',
  packageName: 'core',
  label: 'Container',
  category: Categories.Containers,
  description: 'layout component',
  itemProperties: ContainerProperties,
  component: ContainerComponent,
  parseUIModel: getParseFunction('div'),
  example: {
    title: 'Div container',
    uiModel: (example.uiModel as string).replace(/<section/g, '<div').replace(/<\/section>/g, '</div>'),
    dataModel: {}
  },
  defaultModel: `<div class="col"></div>`,
};
