import { Component } from '@angular/core';
import { BaseUIComponent } from '@ngx-dynamic-components/core';

@Component({
    selector: 'dc-ui-textarea',
    template: `
        <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
            <textarea matInput [placeholder]="uiModel?.itemProperties?.placeholder"
                [rows]="uiModel?.itemProperties?.rows"
                [style.width]="uiModel?.itemProperties?.width"
                [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]"></textarea>
        </mat-form-field>
    `
})
export class TextareaUIComponent extends BaseUIComponent {
}
