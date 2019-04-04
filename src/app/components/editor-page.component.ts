import { Component, OnInit } from '@angular/core';
import { ProfileFormUIModel,  ProfileDataModel, ProfileWorkflowsMap } from '../examples/profile-page.config';
import { WorkflowEngine, WorkflowConfig } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-editor-page',
  template: `
    <dc-page-header title="Editor"></dc-page-header>
    <dc-preview-editor fxLayout fxFlex="auto"
      title="Profile form example"
      [initUiModel]="defaultModel"
      [initDataModel]="defaultDataModel"
      [workflowEngine]="workflowEngine"></dc-preview-editor>
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
  workflowEngine: WorkflowEngine;

  constructor() { }

  ngOnInit() {
    const wfConfig = JSON.parse(JSON.stringify(ProfileWorkflowsMap)) as WorkflowConfig;
    wfConfig.vars.uiModel = this.defaultModel;
    wfConfig.vars.dataModel = this.defaultDataModel;

    this.workflowEngine = new WorkflowEngine(wfConfig);
  }
}
