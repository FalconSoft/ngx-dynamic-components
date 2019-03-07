import { Component, OnInit } from '@angular/core';
import { ProfileFormUIModel, ProfileActionsMap } from '../profile-page.config';

@Component({
  selector: 'dc-editor-page',
  template: `
    <dc-page-header title="Editor"></dc-page-header>
    <dc-editor-container [defaultModel]="defaultModel" [defaultActionsMap]="defaultActionsMap"></dc-editor-container>
  `,
  styles: [`
    :host {
      flex: 1 1 auto;
      flex-direction: column;
    }
  `]
})
export class EditorPageComponent implements OnInit {

  defaultModel = JSON.stringify(ProfileFormUIModel, null, 4);
  defaultActionsMap = ProfileActionsMap;

  constructor() { }

  ngOnInit() {
  }
}
