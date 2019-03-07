import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-page-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <h1 class="mat-h1">{{title}}</h1>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: []
})
export class PageHeaderComponent implements OnInit {

  @Input()
  title: string;
  constructor() { }

  ngOnInit() {
  }

}
