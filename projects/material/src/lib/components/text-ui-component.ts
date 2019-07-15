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

  border?: boolean;
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
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      width: '50%',
      padding: '20px'
    }
  },
  dataModel: {}
};

export const textDescriptor: ComponentDescriptor<TextUIComponentConstrutor, TextPropertiesConstrutor>  = {
  name: 'text',
  packageName,
  label: 'Paragraph',
  category: Categories.Basic,
  description: 'Text component',
  itemProperties: TextProperties,
  component: TextUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:text`,
    itemProperties: {
      text: 'Text example',
      padding: '.5rem'
    },
    containerProperties: {}
  }
};
