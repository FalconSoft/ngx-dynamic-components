import { Component, OnInit } from '@angular/core';
import { ProfileFormUIModel,  ProfileDataModel, ProfileScripts } from '../examples/profile-page.config';

@Component({
  selector: 'dc-editor-page',
  template: `
    <dc-page-header title="Editor"></dc-page-header>
    <dc-preview-editor fxLayout fxFlex="auto"
      title="Profile form example"
      [initUiModel]="defaultModel"
      [initDataModel]="defaultDataModel"
      [scripts]="scripts"></dc-preview-editor>
  `,
  styles: [`
    dc-preview-editor {
      margin: 25px;
    }
    :host ::ng-deep .mat-tab-body-wrapper {
      min-height: 400px;
    }
  `]
})
export class EditorPageComponent implements OnInit {

  defaultModel = ProfileFormUIModel;
  defaultDataModel = ProfileDataModel;
  scripts: string;

  constructor() { }

  ngOnInit() {
    this.scripts = ProfileScripts;
  }
}
