import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample,
  propDescription, ComponentDescriptor, UIModel } from '@ngx-dynamic-components/core';

import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-checkbox',
  template: `
    <mat-checkbox [ngStyle]="itemStyles"
      (input)="changedDataModel.emit(this.dataModel)"
      [(ngModel)]="componentDataModel">{{uiModel.itemProperties.label}}
    </mat-checkbox>`,
})
export class CheckboxUIComponent extends BaseUIComponent<CheckboxProperties> {

}

export class CheckboxProperties extends DataModelProperties {
  @propDescription({
    description: 'Label',
    example: 'Accept conditions.',
  })
  label: string;
}

const example: ComponentExample<UIModel<CheckboxProperties>> = {
  title: 'Checkbox example',
  uiModel: {
    type: 'material:checkbox',
    containerProperties: {},
    itemProperties: {
      label: 'Accept conditions',
      padding: '20px',
      margin: '40px',
      dataModelPath: '$.accept'
    }
  },
  dataModel: {},
  actionsMap: {}
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
