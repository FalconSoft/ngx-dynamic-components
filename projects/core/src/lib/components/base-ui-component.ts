import { OnInit, Input, OnDestroy, Output, EventEmitter, HostBinding, SimpleChanges, OnChanges } from '@angular/core';
import { UIModel, AttributesMap } from '../models';
import { JSONUtils } from '../workflow/json.utils';
import { kebabStrToCamel } from '../utils';
import { StyleProperties, DataModelProperties, StylePropertiesList } from '../properties';
import { Interpreter } from '@jspython-dev/jspython';

export class BaseUIComponent<T = StyleProperties> implements OnInit, OnDestroy, OnChanges {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<T>;
    @Input() interpreter: Interpreter;
    @Input() scripts: string;
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

    async ngOnChanges(changes: SimpleChanges) {
      if (changes.dataModel && !changes.dataModel.firstChange && this.dataModel !== changes.dataModel.currentValue) {
        this.dataModel = changes.dataModel.currentValue;
      }
    }

    get componentDataModel() {
      if (this.properties.hasOwnProperty('dataSource')) {
        const value = (this.properties as DataModelProperties).dataSource;
        if (typeof value === 'object') {
          return value;
        } else if (typeof value === 'string' &&  this.dataModel.hasOwnProperty(value)) {
          return this.dataModel[value];
        }
      }

      if (!this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
        return null;
      }
      const dataModelPath = (this.uiModel.itemProperties as DataModelProperties).dataModelPath;
      // TODO: Handle case for Array type.
      if (!Array.isArray(this.dataModel)) {
        return JSONUtils.find(this.dataModel, dataModelPath);
      }
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
      if (!this.interpreter || !this.uiModel.id) { return; }

      const functionName = this.uiModel.id + action;
      if (this.interpreter.hasFunction(this.scripts, functionName)) {
        try {
          await this.interpreter.evaluate(this.scripts, {
            uiModel: this.uiModel,
            dataModel: this.dataModel
          }, functionName);
        } catch (e) {
          this.interpreter.evaluate(`alert("${e.message}")`);
        }
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
      if (props) {
        this.hostBindings.forEach(b => {
          if (props && props.hasOwnProperty(b)) {
            this[b] = props[b];
          }
        });
        this.setBorder(props);
      }
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

    private setBorder(properties: StyleProperties) {
      const border = properties.border;
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
