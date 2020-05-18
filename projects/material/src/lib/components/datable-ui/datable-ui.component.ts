import { Component } from '@angular/core';
import { BaseUIComponent, ComponentExample, DataModelProperties,
  propDescription, ComponentDescriptor, UIModel, Categories } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-datable-ui',
  template: `
    <mat-table [dataSource]="componentDataModel" [ngStyle]="itemStyles">
      <!-- Column -->
      <ng-container *ngFor="let item of uiModel.itemProperties.displayedProperties" [matColumnDef]="item.dataProperty">
        <mat-header-cell *matHeaderCellDef> {{item.title}} </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element[item.dataProperty]}} </mat-cell>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
  `,
  styles: []
})
export class DatableUIComponent extends BaseUIComponent<DatableProperties> {
  get displayedColumns(): string[] {
    return this.uiModel.itemProperties.displayedProperties.map(({dataProperty}) => dataProperty);
  }
}

export class DatableProperties extends DataModelProperties {
  @propDescription({
    description: 'Displayed properties',
    example: `[{title: 'No.', dataProperty: 'position'}, {title: 'Name', dataProperty: 'name'}]`,
  })
  displayedProperties: DisplayedProperty[];
}

interface DisplayedProperty {
  title: string;
  dataProperty: string;
}

export const example: ComponentExample<UIModel<DatableProperties>> = {
  title: 'Datable example',
  uiModel: {
    type: 'material:datable',
    itemProperties: {
        displayedProperties: [
          {title: 'No.', dataProperty: 'position'},
          {title: 'Name', dataProperty: 'name'},
          {title: 'Weight', dataProperty: 'weight'},
          {title: 'Symbol', dataProperty: 'symbol'},
        ],
        binding: '$.tableData',
        width: '90%',
        margin: '15px auto',
        padding: '20px 5px',
    }
  },
  dataModel: {
    tableData: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]
  }
};

type DatableUIComponentConstrutor = new () => DatableUIComponent;

type DatablePropertiesConstrutor = new () => DatableProperties;

export const datableDescriptor: ComponentDescriptor<DatableUIComponentConstrutor, DatablePropertiesConstrutor> = {
  name: 'datable',
  label: 'Material Table',
  packageName,
  category: Categories.Data,
  description: 'Datable component',
  itemProperties: DatableProperties,
  component: DatableUIComponent,
  example
};
