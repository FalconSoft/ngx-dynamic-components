import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription } from '@ngx-dynamic-components/core';

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
