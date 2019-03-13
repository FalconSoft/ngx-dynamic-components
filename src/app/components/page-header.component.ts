import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-page-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
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
export class PageHeaderComponent implements OnInit {

  @Input()
  title: string;
  constructor() { }

  ngOnInit() {
  }

}
