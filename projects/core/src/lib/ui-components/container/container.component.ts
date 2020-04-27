import { Component, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
    selector: 'dc-container',
    templateUrl: './container.component.html'
})
export class ContainerComponent extends BaseUIComponent<ContainerProperties> {
  @HostBinding('style.display') display = 'flex';
  @ViewChild('form') form: ElementRef<HTMLFormElement>;

  onFormSubmit(evt: any): void {
    this.emitEvent(this.properties.onSubmit);
    // Trigger ui validation messages.
    this.form.nativeElement.querySelectorAll('input,textarea,select').forEach((el: HTMLFormElement, i, list) => {
      el.focus();
      if (list.length - 1 === i) {
        el.blur();
      }
    });
  }
}

export class ContainerProperties extends StyleProperties {
  @propDescription({
    description: 'If panel is form',
    example: 'true'
  })
  isForm?: string;

  @propDescription({
    description: 'Submit handler',
    example: 'onFormSubmit',
  })
  onSubmit?: string;
}

const example: ComponentExample<UIModel<ContainerProperties>> = {
  title: 'Flex example',
  uiModel: `
  <section class="row align-items-center justify-content-between m-0" width="100%" height="100%" padding="8px">
    <text class="m-0" text-style="h1">Header 1</text>
    <text class="m-0" text-style="h2">Header 2</text>
    <button class="btn btn-secondary" onСlick="consoleLog" type="button">Click</button>
    <text class="m-0" background="red" text-style="h3">Header 3</text>
  </section>
  `,
  dataModel: {}
};

interface ContainerComponentConstrutor {
  new (): ContainerComponent;
}

interface ContainerPropertiesConstrutor {
  new (): ContainerProperties;
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
  defaultModel: `<section class="d-flex"></section>`,
  propertiesDescriptor: [['isForm', {
    name: 'isForm', label: 'Form', category: PropertyCategories.Main,
    values: ['true', 'false']
  }]]
};
