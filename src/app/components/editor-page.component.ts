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
      [actions]="defaultActionsMap"></dc-preview-editor>
  `,
  styles: [`
    :host {
      flex: 1 1 auto;
      flex-direction: column;
    }
    dc-preview-editor {
      margin: 1em;
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
