import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor,
  UIModel, ComponentExample, propDescription, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-select-ui',
  template: `
    <div class="form-group">
      <label *ngIf="properties.label" selected>{{properties.label}}</label>
      <select class="form-control" [ngStyle]="itemStyles"
        (change)="onSelect()"
        [(ngModel)]="componentDataModel" [attr.disabled]="disabled">
        <option *ngFor="let option of properties.options" [value]="option.value">{{option.label}}</option>
      </select>
    </div>
  `,
  styles: []
})

export class SelectUIComponent extends BaseUIComponent<SelectProperties> {
  onSelect() {
    this.changedDataModel.emit(this.dataModel);
    this.triggerAction('_selectionChanged');
  }

  get disabled() {
    const options = this.properties.options;
    return options && options.length ? null : 'disabled';
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
  label: string;
}

interface SelectUIComponentConstrutor {
  new (): SelectUIComponent;
}

interface SelectPropertiesConstrutor {
  new (): SelectProperties;
}

export const example: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: {
    type: `${packageName}:select`,
    containerProperties: {},
    id: 'stateSelection',
    itemProperties: {
      options: [
        {label: 'United Kingdom', value: 'uk'},
        {label: 'Ukraine', value: 'ua'}
      ],
      label: 'Country',
      dataModelPath: '$.country'
    }
  },
  dataModel: {},
  title: 'Basic select example'
};

export const selectDescriptor: ComponentDescriptor<SelectUIComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'select',
  label: 'Dropdown',
  packageName,
  category: Categories.Basic,
  description: 'Select component',
  itemProperties: SelectProperties,
  component: SelectUIComponent,
  example
};
