import { Component } from '@angular/core';
import { BaseUIComponent } from '@ngx-dynamic-components/core';

@Component({
    selector: 'dc-ui-button',
    template: `
    <button mat-flat-button color="primary"
        (click)="actions.onRunAction(uiModel, uiModel.itemProperties?.clickActionKey, dataModel)">
    {{uiModel.itemProperties?.label}}
    </button>
    `
})
export class ButtonUIComponent extends BaseUIComponent {
}
