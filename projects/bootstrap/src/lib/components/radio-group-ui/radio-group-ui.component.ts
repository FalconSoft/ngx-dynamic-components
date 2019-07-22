import { Component } from '@angular/core';
import { LabeledComponent, LabelProperties, ComponentExample,
  propDescription, ComponentDescriptor, UIModel, Categories, OptionValue } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-radio-group-ui',
  template: `
    <div class="form-check" *ngFor="let option of properties.options"
      [fxLayout]="layout" [fxLayoutAlign]="align" [ngStyle]="itemStyles">
      <label class="mb-0 {{properties.labelPosition}}" [for]="id" *ngIf="hasLabel"
        [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{option.label}}</label>
      <input type="radio"
        (change)="onChange(option)"
        [name]="properties.dataModelPath" [value]="option.value">
    </div>
  `,
  styleUrls: ['../../styles/label.scss']
})
export class RadioGroupUIComponent extends LabeledComponent<RadioGroupProperties> {
  get align() {
    return this.layout === 'row' ? 'start center' : 'center start';
  }
  onChange(option) {
    this.componentDataModel = option.value;
    this.changedDataModel.emit(this.dataModel);
  }
}

export class RadioGroupProperties extends LabelProperties {
  @propDescription({
    description: 'Radio group options',
    example: '[{label: "One", value: 1}]',
  })
  options: OptionValue[];
}

export const example: ComponentExample<UIModel<RadioGroupProperties>> = {
  title: 'Radio group example',
  uiModel: {
    type: `${packageName}:radio-group`,
    containerProperties: {},
    itemProperties: {
      label: 'Select color',
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
  example,
  defaultModel: {
    type: `${packageName}:radio-group`,
    containerProperties: {},
    itemProperties: {
      label: 'Select option',
      dataModelPath: '$.radioGroup',
      options: [{label: 'Option 1', value: '1'}, {label: 'Option 2', value: 'black'}],
    }
  }
};
