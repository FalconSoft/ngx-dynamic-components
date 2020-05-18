import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor, propDescription,
  ComponentExample, UIModel, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../constants';

@Component({
    selector: 'dc-ui-input',
    template: `
      <mat-form-field>
        <input matInput
          [ngStyle]="itemStyles"
          [placeholder]="properties.placeholder"
          (input)="changedDataModel.emit(dataModel)"
          [(ngModel)]="componentDataModel"
        />
      </mat-form-field>
    `
})
export class InputUIComponent extends BaseUIComponent<InputProperties> {

}

export class InputProperties extends DataModelProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;

  // TODO: Implement input properties.
  isNumeric: boolean;
  isDate: boolean;
  format: string;
}

const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: `
  <mat-input binding="$.name" placeholder="Enter your name"/>
  `,
  dataModel: {}
};

type InputUIComponentConstrutor = new () => InputUIComponent;

type InputPropertiesConstrutor = new () => InputProperties;

export const inputDescriptor: ComponentDescriptor<InputUIComponentConstrutor, InputPropertiesConstrutor> = {
  name: 'mat-input',
  label: 'Text Input (Material)',
  packageName,
  category: Categories.Basic,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputUIComponent,
  example
};
