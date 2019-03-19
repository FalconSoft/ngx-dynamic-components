import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample,
  propDescription, ComponentDescriptor, UIModel, AttributesMap } from '@ngx-dynamic-components/core';

import { Categories, packageName } from '../../constants';

@Component({
  selector: 'dc-radio-group-ui',
  template: `
    <label *ngIf="uiModel.itemProperties.label">{{uiModel.itemProperties.label}}</label>
    <mat-radio-group [ngStyle]="itemStyles"
      (input)="changedDataModel.emit(dataModel)"
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

}

export class RadioGroupProperties extends DataModelProperties {
  @propDescription({
    description: 'Label',
    example: 'Accept conditions.',
  })
  label: string;

  @propDescription({
    description: 'Radio group options',
    example: '[{label: "One", value: 1}]',
  })
  options: { label: string, value: string | number }[];

  @propDescription({
    description: 'Radio option styles',
    example: '{ padding: \'10px\' }',
  })
  optionStyles?: AttributesMap;
}

const example: ComponentExample<UIModel<RadioGroupProperties>> = {
  title: 'Radio group example',
  uiModel: {
    type: 'material:radio-group',
    containerProperties: {},
    itemProperties: {
      label: 'Select color',
      padding: '20px',
      margin: '40px',
      dataModelPath: '$.color',
      options: [{label: 'White', value: 0}, {label: 'Black', value: 1}],
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
  packageName,
  category: Categories.FormControl,
  description: 'Radio group component',
  itemProperties: RadioGroupProperties,
  component: RadioGroupUIComponent,
  example
};
