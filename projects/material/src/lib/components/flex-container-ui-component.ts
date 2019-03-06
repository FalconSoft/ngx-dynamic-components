import { Component } from '@angular/core';
import { BaseUIComponent } from '@ngx-dynamic-components/core';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div
        [fxLayout]="uiModel.itemProperties?.fxLayout || 'row'"
        [fxLayoutGap]="uiModel.itemProperties?.fxLayoutGap || '0'"
        [fxLayoutAlign]="uiModel.itemProperties?.fxLayoutAlign"
        [fxFlex]="uiModel.itemProperties?.fxFlex || '1 1 auto'"
        [style.height]="uiModel.itemProperties?.height || '100%'"
        [style.width]="uiModel.itemProperties?.width || '100%'"
    >
        <div *ngFor="let item of uiModel.children"
            [fxFlex]="item.containerProperties?.fxFlex"
            [style.background] ="item.containerProperties?.backgroundColor">

            <dc-ui-selector
                (changedDataModel)="changedDataModel.emit(this.dataModel)"
                [uiModel]='item'
                [dataModel]='dataModel'
                [actions]='actions'
            ></dc-ui-selector>

        </div>
    </div>
    `
})
export class FlexContainerUIComponent extends BaseUIComponent {

}
