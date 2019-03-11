import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription } from '@ngx-dynamic-components/core';
import { addToComponentsList } from './register';
import { Categories, packageName } from '../constants';

@Component({
    selector: 'dc-ui-input',
    template: `
        <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
            <input matInput [placeholder]="uiModel?.itemProperties?.placeholder"
                [style.width]="uiModel?.itemProperties?.width"
                (input)="changedDataModel.emit(this.dataModel)"
                [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]"/>
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
  placeholder: string;

  @propDescription({
    description: 'Control width',
    example: '100%',
  })
  width: string;
}

export const inputDescriptor = {
  name: 'text-input',
  package: packageName,
  category: Categories.FormControl,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputUIComponent
};

addToComponentsList(inputDescriptor);
