import { Component, HostBinding } from '@angular/core';
import { BaseUIComponent, propDescription, ComponentDescriptor, StyleProperties,
  ComponentExample, UIModel, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../constants';

@Component({
    selector: 'dc-ui-text',
    template: `
    <span [ngStyle]="txtBoxStyles">{{uiModel.itemProperties?.text}}</span>
    `
})
export class TextUIComponent extends BaseUIComponent<TextProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get txtBoxStyles() {
    return {
      ...this.itemStyles,
      'border-bottom': this.properties.border ? '2px solid black' : 'none'
    };
  }
}

export class TextProperties extends StyleProperties {
  @propDescription({
    description: 'Displays text data.',
    example: 'Text information',
  })
  text: string;
}

interface TextUIComponentConstrutor {
  new (): TextUIComponent;
}

interface TextPropertiesConstrutor {
  new (): TextProperties;
}

const example: ComponentExample<UIModel<TextProperties>> = {
  title: 'Text compoent example',
  uiModel: {
    type: 'material:text',
    containerProperties: {},
    itemProperties: {
      text: ``,
      width: '50%',
      padding: '20px'
    }
  },
  dataModel: {}
};

export const textDescriptor: ComponentDescriptor<TextUIComponentConstrutor, TextPropertiesConstrutor>  = {
  name: 'text',
  packageName,
  label: 'Text',
  category: Categories.Basic,
  description: 'Text component',
  itemProperties: TextProperties,
  component: TextUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:text`,
    itemProperties: {
      text: 'Enter text here',
      width: '100%'
    },
    containerProperties: {}
  }
};
