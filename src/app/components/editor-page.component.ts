import { Component, OnInit } from '@angular/core';
import { ProfileFormUIModel, ProfileActionsMap, ProfileDataModel } from '../profile-page.config';

@Component({
  selector: 'dc-editor-page',
  template: `
    <dc-page-header title="Editor"></dc-page-header>
    <dc-preview-editor fxLayout fxFlex="auto"
      title="Profile form example"
      [initUiModel]="defaultModel"
      [initDataModel]="defaultDataModel"
      [actionsMap]="defaultActionsMap"></dc-preview-editor>
  `,
  styles: [`
    dc-preview-editor {
      margin: 25px;
    }
  `]
})
export class EditorPageComponent implements OnInit {

  defaultModel = ProfileFormUIModel;
  defaultDataModel = ProfileDataModel;
  defaultActionsMap = ProfileActionsMap;

  constructor() { }

  ngOnInit() {
  }
}
