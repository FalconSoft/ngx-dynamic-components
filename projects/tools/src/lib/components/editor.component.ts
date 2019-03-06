import { Component, OnInit } from '@angular/core';
import { registerMonacoCompletion, defaultOptions } from '../monaco.config';

@Component({
  selector: 'dc-editor',
  template: `
  <mat-tab-group fxFlex="1 1 auto">
    <mat-tab label="UI Model">
      <ngx-monaco-editor [options]="editorOptions" [(ngModel)]="uiModel"></ngx-monaco-editor>
    </mat-tab>
    <mat-tab label="Action" disabled></mat-tab>
  </mat-tab-group>
  `,
  styles: [`
    ::ng-deep .mat-tab-body-wrapper {
      flex: 1 1 auto;
    }

    ngx-monaco-editor {
      height: calc(100% - 7px);
    }

    mat-tab-group {
      width: 100%;
    }
  `]
})
export class EditorComponent implements OnInit {

  constructor() { }

  editorOptions = defaultOptions;
  uiModel: string;

  ngOnInit() {
    registerMonacoCompletion();
  }
}
