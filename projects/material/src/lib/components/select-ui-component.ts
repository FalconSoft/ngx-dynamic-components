import { Component } from '@angular/core';
import { BaseUIComponent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-ui-select',
  template: `
    <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
      <mat-select (selectionChange)="OnSelect()"
        [placeholder]="uiModel.itemProperties?.placeholder"
        [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]">
        <mat-option *ngFor="let option of uiModel.itemProperties?.options" [value]="option.value">
          {{option.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})

export class SelectUIComponent extends BaseUIComponent {
  OnSelect() {
    this.changedDataModel.emit(this.dataModel);
    this.triggerAction('_selectionChanged');
  }
}
