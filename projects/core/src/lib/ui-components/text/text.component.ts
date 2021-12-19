import { Component, HostBinding } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { BindingProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';

@Component({
  selector: 'dc-text',
  template: `
    <ng-container [ngSwitch]="txtStyle">
      <h1 *ngSwitchCase="'h1'" [class]="txtClass" [ngStyle]="itemStyles">{{text}}</h1>
      <h2 *ngSwitchCase="'h2'" [class]="txtClass" [ngStyle]="itemStyles">{{text}}</h2>
      <h3 *ngSwitchCase="'h3'" [class]="txtClass" [ngStyle]="itemStyles">{{text}}</h3>
      <h4 *ngSwitchCase="'h4'" [class]="txtClass" [ngStyle]="itemStyles">{{text}}</h4>
      <h5 *ngSwitchCase="'h5'" [class]="txtClass" [ngStyle]="itemStyles">{{text}}</h5>
      <h6 *ngSwitchCase="'h6'" [class]="txtClass" [ngStyle]="itemStyles">{{text}}</h6>
      <p *ngSwitchCase="''" [ngStyle]="itemStyles">{{text}}</p>
      <ng-container *ngSwitchCase="'text'" [ngStyle]="itemStyles">{{text}}</ng-container>
      <span *ngSwitchDefault [class]="txtClass" [ngStyle]="itemStyles">{{text}}</span>
    </ng-container>
    `
})
export class TextComponent extends BaseUIComponent<TextProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get txtStyle(): string {
    return this.properties['text-style'];
  }

  get txtClass(): string {
    return this.properties['text-style'] + ' ' + (this.properties.class || '');
  }

  get text(): string {
    const val = this.componentDataModel;
    return typeof val === 'undefined' ? this.properties.text : val;
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

type TextComponentConstrutor = new() => TextComponent;

type TextPropertiesConstrutor = new() => TextProperties;

const example: ComponentExample<UIModel<TextProperties>> = {
  title: 'Text compoent example',
  uiModel: `<div>
  <text text-style="h1">Hello world</text>
  <text text-style="h1">$.title</text>
  <text text-style="h1" binding="$.title2"></text>
</div>`,
  dataModel: {
    title: 'Binded title',
    title2: 'Binded title2'
  }
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
