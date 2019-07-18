import { Component, HostBinding } from '@angular/core';
import { BaseUIComponent, propDescription, ComponentDescriptor, StyleProperties,
  ComponentExample, UIModel, Categories, PropertyCategories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
    selector: 'dc-ui-text',
    template: `
    <div [ngSwitch]="txtStyle">
      <h1 *ngSwitchCase="'h1'" [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</h1>
      <h2 *ngSwitchCase="'h2'" [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</h2>
      <h3 *ngSwitchCase="'h3'" [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</h3>
      <h4 *ngSwitchCase="'h4'" [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</h4>
      <h5 *ngSwitchCase="'h5'" [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</h5>
      <h6 *ngSwitchCase="'h6'" [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</h6>
      <p *ngSwitchCase="''" [ngStyle]="itemStyles">{{properties.text}}</p>
      <p *ngSwitchCase="undefined" [ngStyle]="itemStyles">{{properties.text}}</p>
      <span *ngSwitchDefault [class]="txtStyle" [ngStyle]="itemStyles">{{properties.text}}</span>
    </div>
    `
})
export class TextUIComponent extends BaseUIComponent<TextProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get txtStyle() {
    return this.properties['text-style'];
  }
}

export class TextProperties extends StyleProperties {
  @propDescription({
    description: 'Displays text data.',
    example: 'Text information',
  })
  text: string;

  @propDescription({
    description: 'Text style text data.',
    example: 'h2',
  })
  'text-style'?: string;
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
    type: `${packageName}:text`,
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
      padding: '.5rem 0'
    },
    containerProperties: {}
  },
  propertiesDescriptor: [
    ['text-style', {name: 'text-style', label: 'Text style', category: PropertyCategories.Main,
      combo: [['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4', {label: 'empty', value: ''}]]
    }]
  ]
};
