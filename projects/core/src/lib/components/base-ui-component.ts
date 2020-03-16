import { OnInit, Input, OnDestroy, Output, EventEmitter, HostBinding, SimpleChanges, OnChanges, Directive } from '@angular/core';
import { Interpreter } from 'jspython-interpreter';
import { UIModel, AttributesMap, ComponentEvent } from '../models';
import { JSONUtils } from '../utils/json.utils';
import { kebabStrToCamel } from '../utils';
import { StyleProperties, DataModelProperties, StylePropertiesList, BaseProperties } from '../properties';

@Directive()
export class BaseUIComponent<T = StyleProperties> implements OnInit, OnDestroy, OnChanges {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<T>;
    /** @deprecated */ @Input() interpreter: Interpreter;
    /** @deprecated */ @Input() scripts: string;
    /** @deprecated */ @Input() rootUIModel: UIModel<T>;
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();
    @Output() evaluate = new EventEmitter<boolean>();
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
      this.emitEvent((this.properties as BaseProperties).onInit);
      await this.triggerAction('_OnInit');
    }

    async ngOnDestroy(): Promise<void> {
      this.emitEvent((this.properties as BaseProperties).onDestroy);
      await this.triggerAction('_OnDestroy');
    }

    async ngOnChanges(changes: SimpleChanges): Promise<void> {
      if (changes.dataModel && !changes.dataModel.firstChange && this.dataModel !== changes.dataModel.currentValue) {
        this.dataModel = changes.dataModel.currentValue;
      }
    }

    get componentDataModel(): any {
      if (this.properties.hasOwnProperty('dataSource')) {
        const value = (this.properties as DataModelProperties).dataSource;
        if (typeof value === 'object') {
          return value;
        } else if (typeof value === 'string' &&  this.dataModel.hasOwnProperty(value)) {
          return this.dataModel[value];
        }
      }

      if (!this.properties.hasOwnProperty('dataModelPath') && !this.properties.hasOwnProperty('binding')) {
        return null;
      }
      const path = (this.properties as DataModelProperties).dataModelPath || (this.properties as DataModelProperties).binding;
      // TODO: Handle case for Array type.
      if (!Array.isArray(this.dataModel)) {
        return JSONUtils.find(this.dataModel, path);
      }
    }

    set componentDataModel(val) {
      if (this.properties.hasOwnProperty('dataModelPath') || this.properties.hasOwnProperty('binding')) {
        const path = (this.properties as DataModelProperties).dataModelPath || (this.properties as DataModelProperties).binding;
        JSONUtils.setValue(this.dataModel, path, val);
      }
    }

    get properties(): AttributesMap {
      return this.uiModel.itemProperties;
    }

    protected emitEvent(eventName: string, parameters: any = null) {
      if (eventName) {
        this.eventHandlers.emit({
          eventName,
          parameters: {
            uiModel: this.uiModel,
            ...parameters
          }
        });
      }
    }

    /**
     * @todo Remove after integration v0.1.0
     * @deprecated
     */
    async triggerAction(action: string): Promise<void> {
      if (!this.interpreter || !this.uiModel.id) { return; }

      const functionName = this.uiModel.id + action;
      if (this.interpreter.hasFunction(this.scripts, functionName)) {
        this.evaluate.emit(true);
        try {
          await this.interpreter.evaluate(this.scripts, {
            rootUIModel: this.rootUIModel,
            uiModel: this.uiModel,
            dataModel: this.dataModel
          }, functionName);
        } catch (e) {
          this.interpreter.evaluate(`alert("${e.message}")`);
        } finally {
          this.evaluate.emit(false);
        }
      }
    }

    get itemStyles() {
      return this.getStyles(this.properties);
    }

    getStyles(properties: StyleProperties = {}, stylesList = StylePropertiesList): {[key: string]: string} {
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
