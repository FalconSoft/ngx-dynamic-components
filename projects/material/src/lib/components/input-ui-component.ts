import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor, propDescription } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

console.log('test - input component - module - load');

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

interface InputUIComponentConstrutor {
  new (): InputUIComponent;
}

interface InputPropertiesConstrutor {
  new (): InputProperties;
}

export const inputDescriptor: ComponentDescriptor<InputUIComponentConstrutor, InputPropertiesConstrutor> = {
  name: 'text-input',
  package: packageName,
  category: Categories.FormControl,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputUIComponent
};
