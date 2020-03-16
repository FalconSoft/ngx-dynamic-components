import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentExample, Categories,
  propDescription, ComponentDescriptor, UIModel } from '@ngx-dynamic-components/core';

import { packageName } from '../constants';

@Component({
  selector: 'dc-checkbox',
  template: `
    <mat-checkbox [ngStyle]="itemStyles"
      (input)="changedDataModel.emit(this.dataModel)"
      [(ngModel)]="componentDataModel">{{properties.label}}
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
  uiModel: `
  <mat-checkbox label="Accept conditions" binding="$.accept"/>
  `,
  dataModel: {}
};

interface CheckboxUIComponentConstrutor {
  new (): CheckboxUIComponent;
}

interface CheckboxPropertiesConstrutor {
  new (): CheckboxProperties;
}

export const checkboxDescriptor: ComponentDescriptor<CheckboxUIComponentConstrutor, CheckboxPropertiesConstrutor> = {
  name: 'mat-checkbox',
  label: 'Multi-choice boxes (Material)',
  packageName,
  category: Categories.Basic,
  description: 'Checkbox component',
  itemProperties: CheckboxProperties,
  component: CheckboxUIComponent,
  example
};
