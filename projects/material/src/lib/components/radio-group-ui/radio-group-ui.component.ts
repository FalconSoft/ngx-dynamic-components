import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample,
  propDescription, ComponentDescriptor, UIModel, AttributesMap, Categories } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-radio-group-ui',
  template: `
    <label *ngIf="uiModel.itemProperties.label">{{uiModel.itemProperties.label}}</label>
    <mat-radio-group [ngStyle]="itemStyles"
      [fxLayout]="orientation"
      (change)="changedDataModel.emit(this.dataModel)"
      [(ngModel)]="componentDataModel">
      <mat-radio-button *ngFor="let option of uiModel.itemProperties.options" [value]="option.value"
        [ngStyle]="getStyles(uiModel.itemProperties.optionStyles)">
        {{option.label}}
      </mat-radio-button>
    </mat-radio-group>
  `,
  styles: []
})
export class RadioGroupUIComponent extends BaseUIComponent<RadioGroupProperties> {
  get orientation() {
    return this.properties.orientation === 'vertical' ? 'column' : 'row';
  }
}

export class RadioGroupProperties extends DataModelProperties {
  @propDescription({
    description: 'Label',
    example: 'Select color',
  })
  label: string;

  @propDescription({
    description: 'Radio group options',
    example: '[{label: "One", value: 1}]',
  })
  options: { label: string, value: string }[];

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
  uiModel: {
    type: 'material:radio-group',
    containerProperties: {},
    itemProperties: {
      label: 'Select color',
      padding: '5px 0',
      margin: '10px 0',
      dataModelPath: '$.color',
      orientation: 'vertical',
      options: [{label: 'White', value: 'white'}, {label: 'Black', value: 'black'}],
      optionStyles: {
        padding: '10px'
      }
    }
  },
  dataModel: {}
};

interface RadioGroupUIComponentConstrutor {
  new (): RadioGroupUIComponent;
}

interface RadioGroupPropertiesConstrutor {
  new (): RadioGroupProperties;
}

export const radioGroupDescriptor: ComponentDescriptor<RadioGroupUIComponentConstrutor, RadioGroupPropertiesConstrutor> = {
  name: 'radio-group',
  label: 'Single choice boxes',
  packageName,
  category: Categories.Basic,
  description: 'Radio group component',
  itemProperties: RadioGroupProperties,
  component: RadioGroupUIComponent,
  example
};
