import { Component, ViewChild, ElementRef } from '@angular/core';
import { BaseUIComponent, UIModel, ComponentDescriptor, propDescription, ComponentExample,
  Categories, StyleProperties, PropertyCategories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
    selector: 'dc-ui-flex-container',
    templateUrl: './flex-container-ui-component.html'
})
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> {
  @ViewChild('form', {static: false}) form: ElementRef<HTMLFormElement>;
  getStrValue(value: string) {
    if (value) {
      return value.split('|').join(' ');
    }
    return '';
  }

  onFormSubmit(evt) {
    this.triggerAction('_OnSubmit');
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
}

const example: ComponentExample<UIModel<FlexContainerProperties>> = {
  title: 'Flex example',
  uiModel: {
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '10px',
      width: '100%',
      padding: '10px'
    },
    children: [{
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 1',
      }
    }, {
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 2',
      }
    }]
  },
  dataModel: {}
};

interface FlexContainerUIComponentConstrutor {
  new (): FlexContainerUIComponent;
}

interface FlexContainerPropertiesConstrutor {
  new (): FlexContainerProperties;
}

export const flexContainerDescriptor: ComponentDescriptor<FlexContainerUIComponentConstrutor, FlexContainerPropertiesConstrutor> = {
  name: 'flex-container',
  packageName,
  label: 'Flex Panel',
  category: Categories.Containers,
  description: 'Flex layout component',
  itemProperties: FlexContainerProperties,
  component: FlexContainerUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:flex-container`,
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
