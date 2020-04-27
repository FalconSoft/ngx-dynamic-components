import { Component, HostBinding } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { BindingProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';

@Component({
  selector: 'dc-text',
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
export class TextComponent extends BaseUIComponent<TextProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get txtStyle(): string {
    return this.properties['text-style'] + ' ' + (this.properties.class || '');
  }

  get text(): string {
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

interface TextComponentConstrutor {
  new(): TextComponent;
}

interface TextPropertiesConstrutor {
  new(): TextProperties;
}

const example: ComponentExample<UIModel<TextProperties>> = {
  title: 'Text compoent example',
  uiModel: `<text text-style="h1">Hello world</text>`,
  dataModel: {}
};

export const textDescriptor: ComponentDescriptor<TextComponentConstrutor, TextPropertiesConstrutor> = {
  name: 'text',
  packageName: 'core',
  label: 'Text',
  category: Categories.Basic,
  description: 'Text component',
  itemProperties: TextProperties,
  component: TextComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const content = xmlRes.content;
    const itemProperties: AttributesMap = {};
    if (typeof content === 'string') {
      if (content.startsWith('$.')) {
        itemProperties.binding = content;
      } else {
        itemProperties.text = content;
      }
    }
    return {type: 'text', itemProperties};
  },
  children: false,
  propertiesDescriptor: [
    ['text-style', {
      name: 'text-style', label: 'Text style', category: PropertyCategories.Main,
      values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4']
    }]
  ]
};
