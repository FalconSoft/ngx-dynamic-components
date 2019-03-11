import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription, ComponentDescriptor } from '@ngx-dynamic-components/core';

import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-checkbox',
  template: `<mat-checkbox
      [(ngModel)]="dataModel[uiModel.itemProperties.dataModelPath]">{{uiModel.itemProperties.label}}
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

interface CheckboxUIComponentConstrutor {
  new (): CheckboxUIComponent;
}

interface CheckboxPropertiesConstrutor {
  new (): CheckboxProperties;
}

export const checkboxDescriptor: ComponentDescriptor<CheckboxUIComponentConstrutor, CheckboxPropertiesConstrutor> = {
  name: 'checkbox',
  package: packageName,
  category: Categories.FormControl,
  description: 'Checkbox component',
  itemProperties: CheckboxProperties,
  component: CheckboxUIComponent
};
