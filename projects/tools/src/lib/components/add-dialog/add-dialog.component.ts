import { Component, OnInit } from '@angular/core';
import { getCategories } from '@ngx-dynamic-components/material';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dc-add-dialog',
  template: `
  <mat-list role="list" class="components" *ngFor="let cat of categories">
    <h3 class="mat-h3">{{cat.name}}</h3>
    <mat-list-item role="listitem"
      (click)="selectComponent(item)" *ngFor="let item of cat.components">
      {{item.name}} - {{item.description}}
    </mat-list-item>
  </mat-list>
  `,
  styles: [`
    :host {
      min-width: 300px;
      display: block;
    }

    mat-list h3 {
      margin: 0;
      text-decoration: underline;
    }

    .components mat-list-item {
      height: auto;
      cursor: pointer;
    }
  `]
})
export class AddDialogComponent implements OnInit {

  categories = [];

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) { }

  ngOnInit() {
    this.categories = getCategories();
  }

  selectComponent(item) {
    this.dialogRef.close(item.defaultModel || item.example.uiModel || {
      type: `${item.packageName}:${item.name}`,
      itemProperties: {},
      containerProperties: {}
    });
  }
}
