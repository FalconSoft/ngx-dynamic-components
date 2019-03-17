import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, ComponentDescriptor, StyleProperties,
  ComponentExample, UIModel } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
    selector: 'dc-ui-text',
    template: `
    <span [ngStyle]="itemStyles">{{uiModel.itemProperties?.text}}
    </span>
    `,
    styles: [
      `   span {
              border-bottom: 2px solid black;
              display: inline-block;
              margin-bottom: 1.25rem;
              margin-top: 1rem;
              padding: .5rem 0;
          }
      `
    ]
})
export class TextUIComponent extends BaseUIComponent<TextProperties> {
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
  category: Categories.Text,
  description: 'Text component',
  itemProperties: TextProperties,
  component: TextUIComponent,
  example
};
