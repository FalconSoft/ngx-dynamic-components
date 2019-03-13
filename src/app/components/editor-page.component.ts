import { Component, OnInit } from '@angular/core';
import { ProfileFormUIModel, ProfileActionsMap } from '../profile-page.config';

@Component({
  selector: 'dc-editor-page',
  template: `
    <dc-page-header title="Editor"></dc-page-header>
    <dc-preview-editor fxLayout fxFlex="auto"
      title="Profile form example"
      [initUiModel]="defaultModel"
      [initDataModel]="{}"
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
  defaultActionsMap = ProfileActionsMap;

  constructor() { }

  ngOnInit() {
  }
}
