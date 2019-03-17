import { OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { UIModel, PropDescriptor, AttributesMap, DataModelProperties } from '../models';
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

    async triggerAction(action: string): Promise<void> {
      if (!this.workflowEngine || !this.uiModel.id) { return; }

      const workflowName = this.uiModel.id + action;

      if (await this.workflowEngine.hasWorkflow(workflowName)) {
        this.workflowEngine.run(workflowName);
      }
    }

    get itemStyles() {
      return this.getStyles(this.uiModel.itemProperties);
    }

    get containerStyles() {
      return this.getStyles(this.uiModel.containerProperties);
    }

    getStyles(properties: AttributesMap = {}): {[key: string]: string} {
      const styleProperties = ['width', 'height', 'padding', 'margin', 'background'];
      return styleProperties.reduce((styles, prop) => {
        if (properties.hasOwnProperty(prop)) {
          styles[prop] = properties[prop];
        }
        return styles;
      }, {});
    }
}

export function propDescription(description: PropDescriptor) {
  function decorate(target: any, key: string) {
    let properties = target.hasOwnProperty('properties') ? target.properties : [];
    properties.push({
      name: key,
      ...description
    });

    let proto = Object.getPrototypeOf(target);

    while (proto.hasOwnProperty('properties')) {
      properties = properties.concat(proto.properties);
      proto = Object.getPrototypeOf(proto);
    }
    target.properties = Array.from(new Set(properties)).sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  return decorate;
}

export interface BaseUIComponentConstrutor {
  new (): BaseUIComponent;
}
