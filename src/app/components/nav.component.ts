import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-nav',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <a mat-button routerLink="/">NGX Dynamic Components</a>
        <a mat-button routerLink="/components/categories">Components</a>
        <a mat-button routerLink="/editor">Editor</a>
        <a mat-button routerLink="/examples">Examples</a>
        <a mat-button style="margin-left: 100px" href="https://github.com/FalconSoft/ngx-dynamic-components">Github</a>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }
    mat-toolbar {
      min-height: 56px;
    }
    mat-toolbar-row {
      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
      min-height: 56px;
      position: relative;
      flex-wrap: wrap;
      height: auto;
      z-index: 2;
    }
  `]
})
export class NavComponent { }
