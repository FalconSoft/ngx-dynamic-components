import { OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { UIModel, AttributesMap, DataModelProperties } from '../models';
import { JSONUtils } from '../workflow/json.utils';
import { WorkflowEngine } from '../workflow/workflow.processor';

export class BaseUIComponent<T = AttributesMap> implements OnInit, OnDestroy {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<T>;
    @Input() workflowEngine: WorkflowEngine;

    @Output()
    changedDataModel = new EventEmitter();

    async ngOnInit(): Promise<void> {
      await this.triggerAction('_OnInit');
    }

    async ngOnDestroy(): Promise<void> {
      await this.triggerAction('_OnDestroy');
    }

    get componentDataModel() {
      if (this.uiModel.itemProperties.hasOwnProperty('dataSource')) {
        const dataSourcePath = (this.uiModel.itemProperties as DataModelProperties).dataSource.replace('{{', '').replace('}}', '');
        return JSONUtils.find(this.dataModel, `$.${dataSourcePath}`);
      }

      if (!this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
        return null;
      }
      const dataModelPath = (this.uiModel.itemProperties as DataModelProperties).dataModelPath;
      return JSONUtils.find(this.dataModel, dataModelPath);
    }

    set componentDataModel(val) {
      if (this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
        const dataModelPath = (this.uiModel.itemProperties as DataModelProperties).dataModelPath;
        JSONUtils.setValue(this.dataModel, dataModelPath, val);
      }
    }

    get properties() {
      return this.uiModel.itemProperties;
    }

    async triggerAction(action: string): Promise<void> {
      if (!this.workflowEngine || !this.uiModel.id) { return; }

      const workflowName = this.uiModel.id + action;
      if (await this.workflowEngine.hasWorkflow(workflowName)) {
        console.log(`Executes Workflow: ${workflowName}`);
        this.workflowEngine.run(workflowName);
      } else {
        console.warn(`WorkflowName ${workflowName} not found`);
      }
    }

    get itemStyles() {
      return this.getStyles(this.uiModel.itemProperties);
    }

    get containerStyles() {
      return this.getStyles(this.uiModel.containerProperties);
    }

    getStyles(properties: AttributesMap = {}): {[key: string]: string} {
      const styleProperties = ['width', 'height', 'padding', 'margin', 'background', 'max-height'];
      return styleProperties.reduce((styles, prop) => {
        if (properties.hasOwnProperty(prop)) {
          styles[prop] = properties[prop];
        }
        return styles;
      }, {});
    }
}
