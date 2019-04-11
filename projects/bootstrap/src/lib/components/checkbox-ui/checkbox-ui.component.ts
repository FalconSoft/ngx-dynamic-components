import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample,
  propDescription, ComponentDescriptor, UIModel } from '@ngx-dynamic-components/core';

import { Categories, packageName } from '../../constants';

@Component({
  selector: 'dc-checkbox-ui',
  template: `
    <div class="form-check" [ngClass]="{'form-check-inline': properties.inline}" [ngStyle]="containerStyles">
      <input class="form-check-input" type="checkbox"
      [ngStyle]="itemStyles"
      (change)="changedDataModel.emit(this.dataModel)"
      [(ngModel)]="componentDataModel">
      <label *ngIf="properties.label" class="form-check-label">{{properties.label}}</label>
    </div>
  `,
  styles: []
})
export class CheckboxUIComponent extends BaseUIComponent<CheckboxProperties> {

}

export class CheckboxProperties extends DataModelProperties {
  @propDescription({
    description: 'Label',
    example: 'Accept conditions.',
  })
  label: string;

  @propDescription({
    description: 'Inline',
    example: 'true',
  })
  inline?: boolean;
}

export const example: ComponentExample<UIModel<CheckboxProperties>> = {
  title: 'Checkbox example',
  uiModel: {
    type: `${packageName}:checkbox`,
    containerProperties: {},
    itemProperties: {
      label: 'Accept conditions',
      padding: '10px',
      margin: '20px',
      dataModelPath: '$.accept',
      inline: true
    }
  },
  dataModel: {}
};

interface CheckboxUIComponentConstrutor {
  new (): CheckboxUIComponent;
}

interface CheckboxPropertiesConstrutor {
  new (): CheckboxProperties;
}

export const checkboxDescriptor: ComponentDescriptor<CheckboxUIComponentConstrutor, CheckboxPropertiesConstrutor> = {
  name: 'checkbox',
  packageName,
  category: Categories.FormControl,
  description: 'Checkbox component',
  itemProperties: CheckboxProperties,
  component: CheckboxUIComponent,
  example
};

