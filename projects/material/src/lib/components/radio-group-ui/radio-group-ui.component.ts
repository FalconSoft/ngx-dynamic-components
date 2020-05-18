import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample, propDescription, ComponentDescriptor,
  UIModel, AttributesMap, Categories, XMLResult, OptionValue, JSONUtils } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-radio-group-ui',
  template: `
    <label *ngIf="properties.label">{{properties.label}}</label>
    <mat-radio-group [ngStyle]="itemStyles"
      [fxLayout]="orientation"
      (change)="changedDataModel.emit(this.dataModel)"
      [(ngModel)]="componentDataModel">
      <mat-radio-button *ngFor="let option of options" [value]="option.value"
        [ngStyle]="getStyles(properties.optionStyles)">
        {{option.label}}
      </mat-radio-button>
    </mat-radio-group>
  `,
  styles: []
})
export class RadioGroupUIComponent extends BaseUIComponent<RadioGroupProperties> {
  get orientation(): string {
    return this.properties.orientation === 'vertical' ? 'column' : 'row';
  }

  get options(): OptionValue[] {
    const src = this.properties.itemsSource;
    if (Array.isArray(src)) {
      return src;
    }

    if (typeof src === 'string' && src.startsWith('$.')) {
      return JSONUtils.find(this.dataModel, src);
    }
  }
}

export class RadioGroupProperties extends DataModelProperties {
  @propDescription({
    description: 'Label',
    example: 'Select color',
  })
  label: string;

  @propDescription({
    description: 'Radio group options or binding to dataModel.',
    example: '[{label: "One", value: 1}]',
  })
  itemsSource: string|OptionValue[];

  @propDescription({
    description: 'On change event handler name.',
    example: 'onSelect',
  })
  onChange?: string;

  @propDescription({
    description: 'Radio option styles',
    example: '{ padding: \'10px\' }',
  })
  optionStyles?: AttributesMap;

  @propDescription({
    description: 'Radio options orientation (horizontal|vertical). Default - horizontal',
    example: 'verical',
  })
  orientation?: string;
}

export const example: ComponentExample<UIModel<RadioGroupProperties>> = {
  title: 'Radio group example',
  uiModel: `
  <flex-container>
    <mat-radio-group orientation="vertical" labelPosition="right" binding="$.color">
      <option value="white">White</option>
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </mat-radio-group>
    <mat-radio-group margin="0 1rem" itemsSource="$.genderOptions" labelPosition="right" binding="$.gender"></mat-radio-group>
  </flex-container>
  `,
  dataModel: {
    genderOptions: [{label: 'Man', value: 'm'}, {label: 'Woman', value: 'w'}]
  }
};

type RadioGroupUIComponentConstrutor = new () => RadioGroupUIComponent;

type RadioGroupPropertiesConstrutor = new () => RadioGroupProperties;

export const radioGroupDescriptor: ComponentDescriptor<RadioGroupUIComponentConstrutor, RadioGroupPropertiesConstrutor> = {
  name: 'mat-radio-group',
  label: 'Single choice boxes',
  packageName,
  category: Categories.Basic,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => ({ label: r._, value: r.$.value }));
      xmlRes.childNodes = null;
    }
    return {
      type: 'mat-radio-group',
      itemProperties
    };
  },
  description: 'Radio group component',
  itemProperties: RadioGroupProperties,
  component: RadioGroupUIComponent,
  example
};
