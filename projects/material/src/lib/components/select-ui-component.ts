import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor,
  UIModel, ComponentExample, propDescription } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-select',
  template: `
    <mat-form-field [ngStyle]="containerStyles">
      <mat-select [ngStyle]="itemStyles"
        [placeholder]="uiModel.itemProperties?.placeholder"
        (selectionChange)="onSelect()"
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

const example: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: {
    type: 'material:select',
    containerProperties: {},
    id: 'stateSelection',
    itemProperties: {
      options: [
        {label: 'United Kingdom', value: 'uk'},
        {label: 'Ukraine', value: 'ua'}
      ],
      placeholder: 'Country',
      dataModelPath: 'country'
    }
  },
  dataModel: {},
  actionsMap: {},
  title: 'Basic select example'
};

export const selectDescriptor: ComponentDescriptor<SelectUIComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'select',
  packageName,
  category: Categories.FormControl,
  description: 'Select component',
  itemProperties: SelectProperties,
  component: SelectUIComponent,
  example
};
