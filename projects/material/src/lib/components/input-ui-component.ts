import { Component } from '@angular/core';
import { BaseUIComponent } from '@ngx-dynamic-components/core';

@Component({
    selector: 'dc-ui-input',
    template: `
        <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
            <input matInput [placeholder]="uiModel?.itemProperties?.placeholder"
                [style.width]="uiModel?.itemProperties?.width"
                (input)="changedDataModel.emit(this.dataModel)"
                [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]"/>
        </mat-form-field>
    `
})
export class InputUIComponent extends BaseUIComponent {

}
