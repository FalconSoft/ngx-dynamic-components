import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription,
  ComponentDescriptor, ComponentExample, UIModel, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../constants';

@Component({
    selector: 'dc-ui-textarea',
    template: `
        <mat-form-field>
            <textarea matInput [placeholder]="uiModel?.itemProperties?.placeholder"
                [rows]="uiModel?.itemProperties?.rows"
                [ngStyle]="itemStyles"
                (input)="changedDataModel.emit(this.dataModel)"
                [(ngModel)]="componentDataModel"></textarea>
        </mat-form-field>
    `
})
export class TextareaUIComponent extends BaseUIComponent<TextareaProperties> {
}

export class TextareaProperties extends DataModelProperties {
  @propDescription({
    description: 'Number of rows in textarea',
    example: '5',
  })
  rows: number;

  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type about yourself',
  })
  placeholder: string;
}

const example: ComponentExample<UIModel<TextareaProperties>> = {
  title: 'Text area example',
  uiModel: {
    type: 'mat-textarea',
    itemProperties: {
      rows: 10,
      placeholder: 'Type information about yourself',
      binding: '$.info'
    }
  },
  dataModel: {}
};

type TextareaUIComponentConstrutor = new () => TextareaUIComponent;

type TextareaPropertiesConstrutor = new () => TextareaProperties;

export const textareaDescriptor: ComponentDescriptor<TextareaUIComponentConstrutor, TextareaPropertiesConstrutor> = {
  name: 'mat-textarea',
  label: 'Text Area',
  packageName,
  category: Categories.Basic,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaUIComponent,
  example
};
