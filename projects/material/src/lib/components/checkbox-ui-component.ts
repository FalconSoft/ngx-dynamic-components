import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample, Categories,
  propDescription, ComponentDescriptor, UIModel } from '@ngx-dynamic-components/core';

import { packageName } from '../constants';

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
      dataModelPath: '$.accept'
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
  label: 'Multi-choice boxes (Material)',
  packageName,
  category: Categories.Basic,
  description: 'Checkbox component',
  itemProperties: CheckboxProperties,
  component: CheckboxUIComponent,
  example
};
