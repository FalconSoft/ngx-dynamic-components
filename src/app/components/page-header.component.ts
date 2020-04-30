import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-page-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <button mat-icon-button (click)="open.emit(true)">
          <mat-icon *ngIf="toggle">menu</mat-icon>
        </button>
        <h1>{{title}}</h1>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar-row {
      height: 80px;
    }

    h1 {
      font-weight: 300;
      margin: 0;
      padding: 28px 8px;
      font-size: 20px;
    }
  `]
})
export class PageHeaderComponent {

  @Input()
  title: string;

  @Input()
  toggle: boolean;

  opened = false;

  @Output()
  open = new EventEmitter<boolean>();

}
