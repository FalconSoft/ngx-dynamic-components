import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription,
  ComponentDescriptor, ComponentExample, UIModel } from '@ngx-dynamic-components/core';
import { packageName, Categories } from '../constants';

@Component({
    selector: 'dc-ui-textarea',
    template: `
        <mat-form-field [ngStyle]="containerStyles">
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
    type: 'material:textarea',
    containerProperties: {
      fxFlex: '1 1 auto'
    },
    itemProperties: {
      rows: 10,
      placeholder: 'Type information about yourself',
      dataModelPath: '$.info'
    }
  },
  dataModel: {}
};

interface TextareaUIComponentConstrutor {
  new (): TextareaUIComponent;
}

interface TextareaPropertiesConstrutor {
  new (): TextareaProperties;
}

export const textareaDescriptor: ComponentDescriptor<TextareaUIComponentConstrutor, TextareaPropertiesConstrutor> = {
  name: 'textarea',
  packageName,
  category: Categories.FormControl,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaUIComponent,
  example
};
