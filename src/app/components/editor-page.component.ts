import { Component, OnInit } from '@angular/core';
import * as contactUs from '../examples/contact-us.form.config';

@Component({
  selector: 'dc-editor-page',
  template: `
    <dc-page-header title="Editor"></dc-page-header>
    <dc-preview-editor class="d-flex"
      title="Profile form example"
      [initUiModel]="defaultModel"
      [initDataModel]="defaultDataModel"
      [scripts]="scripts"></dc-preview-editor>
  `,
  styles: [`
    dc-preview-editor {
      margin: 25px;
    }
    :host {
      flex-direction: column;
    }
    :host ::ng-deep .mat-tab-body-wrapper {
      min-height: 400px;
    }
  `]
})
export class EditorPageComponent implements OnInit {

  defaultModel = contactUs.uIModel;
  defaultDataModel = contactUs.dataModel;
  scripts: string;

  constructor() { }

  ngOnInit(): void {
    this.scripts = contactUs.scripts;
  }
}
