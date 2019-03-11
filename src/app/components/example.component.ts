import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'dc-example',
  template: `
    <div *ngIf="component$ | async as component">
      <h1 class="mat-h1">{{component.name}}</h1>
      <h3 class="mat-h3">{{component.description}}</h3>
      <mat-divider></mat-divider>
      <ng-container *ngIf="itemProperties$ | async as properties">
        <h3 class="mat-h3">Item properties</h3>
        <mat-table [dataSource]="properties">
          <ng-container matColumnDef="name">
            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
          </ng-container>
          <ng-container matColumnDef="example">
            <mat-header-cell *matHeaderCellDef> Example </mat-header-cell>
            <mat-cell *matCellDef="let element"> '{{element.example}}' </mat-cell>
          </ng-container>

          <ng-container matColumnDef="description">
            <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{element.description}}</mat-cell>
          </ng-container>
          <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
          <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
        </mat-table>

      </ng-container>
    </div>
  `,
  styles: [`
    div {
      padding: 50px;
    }
    table {
      width: 100%;
    }
  `]
})
export class ExampleComponent implements OnInit {
  component$: Observable<ComponentDescriptor>;
  itemProperties$: Observable<[]>;
  displayedColumns = ['name', 'example', 'description'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.component$ = this.route.params.pipe(map(p => COMPONENTS_LIST.find((c: ComponentDescriptor) => c.name === p.component)));
    this.itemProperties$ = this.component$.pipe(pluck('itemProperties', 'prototype', 'properties'));
  }

}
