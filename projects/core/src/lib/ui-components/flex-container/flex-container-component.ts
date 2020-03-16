import { Component, ViewChild, ElementRef } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
    selector: 'dc-flex-container',
    templateUrl: './flex-container-component.html'
})
export class FlexContainerComponent extends BaseUIComponent<FlexContainerProperties> {
  @ViewChild('form') form: ElementRef<HTMLFormElement>;
  getStrValue(value: string) {
    if (value) {
      return value.split('|').join(' ');
    }
    return '';
  }

  onFormSubmit(evt) {
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

export class FlexContainerProperties extends StyleProperties {
  @propDescription({
    description: 'fxLayout (Angular Flex-Layout property)',
    example: 'column',
    link: 'https://github.com/angular/flex-layout/wiki/fxLayout-API'
  })
  fxLayout?: string;

  @propDescription({
    description: 'fxLayoutGap (Angular Flex-Layout property)',
    example: '10px',
    link: 'https://github.com/angular/flex-layout/wiki/fxLayoutGap-API'
  })
  fxLayoutGap?: string;

  @propDescription({
    description: 'fxLayoutAlign (Angular Flex-Layout property)',
    example: 'stretch center',
    link: 'https://github.com/angular/flex-layout/wiki/fxLayoutAlign-API0'
  })
  fxLayoutAlign?: string;

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

const example: ComponentExample<UIModel<FlexContainerProperties>> = {
  title: 'Flex example',
  uiModel: `
  <flex-container
    fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="8px" id="continuous"
    width="100%" height="100%" margin="8px" background="white">
    <text class="m-0" fxFlex="1 2 500px" text-style="h1">Header 1</text>
    <text class="m-0" fxFlexOrder="2" text-style="h2">Header 2</text>
    <button class="btn btn-secondary" fxFlexOrder="1" on-click="consoleLog" type="button">Click</button>
    <text class="m-0" fxFlexFill="true" background="red" text-style="h3">Header 3</text>
  </flex-container>
  `,
  dataModel: {}
};

interface FlexContainerComponentConstrutor {
  new (): FlexContainerComponent;
}

interface FlexContainerPropertiesConstrutor {
  new (): FlexContainerProperties;
}

export const flexContainerDescriptor: ComponentDescriptor<FlexContainerComponentConstrutor, FlexContainerPropertiesConstrutor> = {
  name: 'flex-container',
  packageName: 'core',
  label: 'Flex Panel',
  category: Categories.Containers,
  description: 'Flex layout component',
  itemProperties: FlexContainerProperties,
  component: FlexContainerComponent,
  example,
  defaultModel: {
    type: 'flex-container',
    containerProperties: {},
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '8px',
      width: '100%',
      height: '100%',
      'min-height': '50px',
      'min-width': '50px',
      isForm: false,
      id: 'form'
    },
    children: []
  },
  propertiesDescriptor: [['isForm', {
    name: 'isForm', label: 'Form', category: PropertyCategories.Main,
    combo: [[{label: 'false', value: false}, {label: 'true', value: true}]]
  }]]
};
