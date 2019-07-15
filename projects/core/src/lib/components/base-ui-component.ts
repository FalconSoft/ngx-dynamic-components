import { OnInit, Input, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { UIModel, AttributesMap, DataModelProperties, StylePropertiesList, StyleProperties } from '../models';
import { JSONUtils } from '../workflow/json.utils';
import { WorkflowEngine } from '../workflow/workflow.processor';

export class BaseUIComponent<T = StyleProperties> implements OnInit, OnDestroy {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<T>;
    @Input() workflowEngine: WorkflowEngine;
    @HostBinding('style.width') width: string;
    @HostBinding('style.height') height: string;
    @HostBinding('style.padding') padding: string;
    @HostBinding('style.margin') margin: string;
    @HostBinding('style.display') display = 'inherit';

    @Output()
    changedDataModel = new EventEmitter();

    async ngOnInit(): Promise<void> {
      this.setHostStyles();
      await this.triggerAction('_OnInit');
    }

    async ngOnDestroy(): Promise<void> {
      await this.triggerAction('_OnDestroy');
    }

    get componentDataModel() {
      if (this.properties.hasOwnProperty('dataSource')) {
        const value = (this.properties as DataModelProperties).dataSource;
        if (typeof value === 'object') { // Value already resolved with variableresolvber.
          return value;
        } else if (typeof value === 'string') { // Value not resolved. Resolve value with workflow variables.
          if (this.workflowEngine.variableResolver) {
            const resolved = this.workflowEngine.variableResolver.resolveString(value, this.workflowEngine.configuration.vars);
            if (typeof resolved === 'object') {
              return resolved;
            }
          }
          return [];
        }
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

    getStyles(properties: AttributesMap = {}): {[key: string]: string} {
      const styleProperties = StylePropertiesList;
      return styleProperties.reduce((styles, prop) => {
        if (properties.hasOwnProperty(prop)) {
          styles[prop] = properties[prop];
        }
        return styles;
      }, {});
    }

    private setHostStyles() {
      const props = this.properties as StyleProperties;
      if (props.width) {
        this.width = props.width;
      }

      if (props.height) {
        this.height = props.height;
      }

      if (props.padding) {
        this.padding = props.padding;
      }

      if (props.margin) {
        this.margin = props.margin;
      }
    }
}
