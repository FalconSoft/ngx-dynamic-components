import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription } from '@ngx-dynamic-components/core';

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
export class InputUIComponent extends BaseUIComponent<InputProperties> {

}

export class InputProperties extends DataModelProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder: string;

  @propDescription({
    description: 'Control width',
    example: '100%',
  })
  width: string;
}
