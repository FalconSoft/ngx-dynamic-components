import { Component, HostBinding } from '@angular/core';
import {
  BaseUIComponent, propDescription, ComponentDescriptor,
  ComponentExample, UIModel, Categories, PropertyCategories, BindingProperties
} from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-ui-text',
  template: `
    <div [ngSwitch]="txtStyle">
      <h1 *ngSwitchCase="'h1'" [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</h1>
      <h2 *ngSwitchCase="'h2'" [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</h2>
      <h3 *ngSwitchCase="'h3'" [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</h3>
      <h4 *ngSwitchCase="'h4'" [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</h4>
      <h5 *ngSwitchCase="'h5'" [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</h5>
      <h6 *ngSwitchCase="'h6'" [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</h6>
      <p *ngSwitchCase="''" [ngStyle]="itemStyles">{{text}}</p>
      <p *ngSwitchCase="undefined" [ngStyle]="itemStyles">{{text}}</p>
      <span *ngSwitchDefault [class]="txtStyle" [ngStyle]="itemStyles">{{text}}</span>
    </div>
    `
})
export class TextUIComponent extends BaseUIComponent<TextProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get txtStyle() {
    return this.properties['text-style'];
  }

  get text() {
    return this.componentDataModel || this.properties.text;
  }
}

export class TextProperties extends BindingProperties {
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
  new(): TextUIComponent;
}

interface TextPropertiesConstrutor {
  new(): TextProperties;
}

const example: ComponentExample<UIModel<TextProperties>> = {
  title: 'Text compoent example',
  uiModel: {
    type: `${packageName}:text`,
    containerProperties: {},
    itemProperties: {
      text: ``,
      width: '50%',
      padding: '20px'
    }
  },
  dataModel: {}
};

export const textDescriptor: ComponentDescriptor<TextUIComponentConstrutor, TextPropertiesConstrutor> = {
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
      text: 'Text',
      width: '100%'
    },
    containerProperties: {}
  },
  propertiesDescriptor: [
    ['text-style', {
      name: 'text-style', label: 'Text style', category: PropertyCategories.Main,
      combo: [['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4']]
    }]
  ]
};
