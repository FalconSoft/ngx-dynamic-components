import { OnInit, Input, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { UIModel, AttributesMap, DataModelProperties, StylePropertiesList, StyleProperties } from '../models';
import { JSONUtils } from '../workflow/json.utils';
import { WorkflowEngine } from '../workflow/workflow.processor';
import { kebabStrToCamel } from '../utils';

export class BaseUIComponent<T = StyleProperties> implements OnInit, OnDestroy {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<T>;
    @Input() workflowEngine: WorkflowEngine;
    @HostBinding('style.width') width: string;
    @HostBinding('style.height') height: string;
    @HostBinding('style.padding') padding: string;
    @HostBinding('style.margin') margin: string;
    @HostBinding('style.display') display = 'inherit';
    @HostBinding('style.border-left') borderLeft: string;
    @HostBinding('style.border-top') borderTop: string;
    @HostBinding('style.border-right') borderRight: string;
    @HostBinding('style.border-bottom') borderBottom: string;

    @Output() changedDataModel = new EventEmitter();

    private readonly hostBindings = ['width', 'height', 'padding', 'margin'];
    private readonly borders = ['border-left', 'border-top', 'border-right', 'border-bottom'];

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

    getStyles(properties: AttributesMap = {}, stylesList = StylePropertiesList): {[key: string]: string} {
      return stylesList.reduce((styles, prop) => {
        if (properties.hasOwnProperty(prop)) {
          styles[prop] = this.getPropValue(properties, prop);
        }
        return styles;
      }, {});
    }

    private setHostStyles() {
      const props = this.properties as StyleProperties;
      this.hostBindings.forEach(b => {
        this[b] = props[b];
      });
      this.setBorder();
    }

    private getPropValue(properties: AttributesMap, prop: string) {
      const val = properties[prop];
      if (prop === 'font-size') {
        if (!isNaN(properties[prop])) {
          return `${val}px`;
        }
      }
      return val;
    }

    private setBorder() {
      const border = (this.properties as StyleProperties).border;
      if (typeof border === 'string') {
        const [prop, value] = border.split('|');
        if (prop === 'border') {
          this.borders.forEach(b => {
            this[kebabStrToCamel(b)] = value;
          });
        } else {
          this[kebabStrToCamel(prop)] = value;
        }
      }
    }
}
