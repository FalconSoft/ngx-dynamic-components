import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, AttributesMap} from '@ngx-dynamic-components/core';

@Component({
    selector: 'dc-ui-button',
    template: `
    <button mat-flat-button color="primary"
        (click)="actions.onRunAction(uiModel, uiModel.itemProperties?.clickActionKey, dataModel)">
    {{uiModel.itemProperties?.label}}
    </button>
    `
})
export class ButtonUIComponent extends BaseUIComponent<ButtonProperties> {

}

export class ButtonProperties implements AttributesMap {
  @propDescription({
    description: 'Button label',
    example: 'Click me!',
  })
  label: string;

  @propDescription({
    description: 'Key for action that fires onclick',
    example: 'submit',
  })
  clickActionKey: string;
}
