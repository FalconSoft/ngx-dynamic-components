import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor, propDescription } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-select',
  template: `
    <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
      <mat-select (selectionChange)="onSelect()"
        [placeholder]="uiModel.itemProperties?.placeholder"
        [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]">
        <mat-option *ngFor="let option of uiModel.itemProperties?.options" [value]="option.value">
          {{option.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class SelectUIComponent extends BaseUIComponent<SelectProperties> {
  onSelect() {
    this.changedDataModel.emit(this.dataModel);
    this.triggerAction('_selectionChanged');
  }
}

export class SelectProperties extends DataModelProperties {
  @propDescription({
    description: 'Select options.',
    example: '[{label: "One", value: 1}]',
  })
  options: { label: string, value: string | number }[];

  @propDescription({
    description: 'Label shown when no option is selected.',
    example: 'Please select an option',
  })
  placeholder: string;
}

interface SelectUIComponentConstrutor {
  new (): SelectUIComponent;
}

interface SelectPropertiesConstrutor {
  new (): SelectProperties;
}

export const selectDescriptor: ComponentDescriptor<SelectUIComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'select',
  package: packageName,
  category: Categories.FormControl,
  description: 'Select component',
  itemProperties: SelectProperties,
  component: SelectUIComponent,
  example: JSON.stringify({
    type: 'select',
    containerProperties: {},
    key: 'stateSelection',
    itemProperties: {
      options: [
        {label: 'United Kindom', value: 'uk'},
        {label: 'Ukraine', value: 'ua'}
      ],
      placeholder: 'Country',
      dataModelPath: 'country'
    }
  }, null, 4)
};
