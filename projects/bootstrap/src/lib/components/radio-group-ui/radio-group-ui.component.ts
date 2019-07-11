import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample,
  propDescription, ComponentDescriptor, UIModel, Categories } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-radio-group-ui',
  template: `
    <div class="form-check" *ngFor="let option of properties.options"
      [ngClass]="{'form-check-inline': properties.inline}" [ngStyle]="itemStyles">
      <input class="form-check-input" type="radio"
      (change)="onChange(option)"
      [name]="properties.dataModelPath" [value]="option.value">
      <label class="form-check-label">{{option.label}}</label>
    </div>
  `,
  styles: []
})
export class RadioGroupUIComponent extends BaseUIComponent<RadioGroupProperties> {

  onChange(option) {
    this.componentDataModel = option.value;
    this.changedDataModel.emit(this.dataModel);
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
    description: 'Radio options inline',
    example: 'true',
  })
  inline?: string;
}

export const example: ComponentExample<UIModel<RadioGroupProperties>> = {
  title: 'Radio group example',
  uiModel: {
    type: `${packageName}:radio-group`,
    containerProperties: {},
    itemProperties: {
      label: 'Select color',
      padding: '5px 20px',
      margin: '10px 0',
      dataModelPath: '$.color',
      options: [{label: 'White', value: 'white'}, {label: 'Black', value: 'black'}],
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
