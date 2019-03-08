import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-ui-select',
  template: `
    <mat-form-field [style.width]="uiModel?.containerProperties?.width || '100%'">
      <mat-select (selectionChange)="onSelect()"
        [placeholder]="uiModel.itemProperties?.placeholder"
        [(ngModel)]="dataModel[uiModel.itemProperties?.dataModelPath]">
        <mat-option *ngFor="let option of uiModel.itemProperties?.options" [value]="option.value">
          {{option.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class SelectUIComponent extends BaseUIComponent<SelectProperties> {
  onSelect() {
    this.changedDataModel.emit(this.dataModel);
    this.triggerAction('_selectionChanged');
  }
}

export class SelectProperties extends DataModelProperties {
  @propDescription({
    description: 'Select options.',
    example: '[{label: "One", value: 1}]',
  })
  options: { label: string, value: string | number }[];

  @propDescription({
    description: 'Label shown when no option is selected.',
    example: 'Please select an option',
  })
  placeholder: string;
}
