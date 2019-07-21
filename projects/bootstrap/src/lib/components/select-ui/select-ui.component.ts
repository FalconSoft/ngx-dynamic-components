import { Component } from '@angular/core';
import { BaseUIComponent, LabelProperties, ComponentDescriptor,
  UIModel, ComponentExample, propDescription, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-select-ui',
  template: `
    <div class="form-group mb-0" [fxLayout]="layout" [ngStyle]="itemStyles">
      <label selected *ngIf="hasLabel" [class]="properties.labelPosition"
      [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
      <select class="form-control" [ngStyle]="itemStyles"
        (change)="onSelect()"
        [(ngModel)]="componentDataModel" [attr.disabled]="disabled">
        <option *ngFor="let option of properties.options" [value]="option.value">{{option.label}}</option>
      </select>
    </div>
  `,
  styles: [`
    label.right, label.bottom {
      order: 1;
    }
  `]
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

  get id() {
    if (this.hasLabel) {
      return 'input-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
    }
  }

  get hasLabel() {
    return this.properties.labelPosition && this.properties.labelPosition !== 'none';
  }

  get layout() {
    return ['left', 'right', 'none'].includes(this.properties.labelPosition) ? 'row' : 'column';
  }
}

export class SelectProperties extends LabelProperties {
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
  label: 'UI Select Input',
  packageName,
  category: Categories.Basic,
  description: 'Select component',
  itemProperties: SelectProperties,
  component: SelectUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:select`,
    containerProperties: {},
    itemProperties: {
      options: [
        {label: 'First option', value: '1'},
        {label: 'second option', value: '2'}
      ],
      width: '200px',
      label: 'Select option',
      dataModelPath: '$.option'
    }
  }
};
