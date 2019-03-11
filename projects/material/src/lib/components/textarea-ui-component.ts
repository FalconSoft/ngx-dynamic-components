import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription } from '@ngx-dynamic-components/core';
import { addToComponentsList } from './register';
import { packageName, Categories } from '../constants';

@Component({
    selector: 'dc-ui-textarea',
    template: `
        <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
            <textarea matInput [placeholder]="uiModel?.itemProperties?.placeholder"
                [rows]="uiModel?.itemProperties?.rows"
                [style.width]="uiModel?.itemProperties?.width"
                [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]"></textarea>
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
    description: 'Control width',
    example: '100%',
  })
  width: string;

  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type about yourself',
  })
  placeholder: string;
}

export const textareaDescriptor = {
  name: 'textarea',
  package: packageName,
  category: Categories.FormControl,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaUIComponent
};

addToComponentsList(textareaDescriptor);
