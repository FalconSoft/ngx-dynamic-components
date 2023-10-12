import { OnDestroy, HostBinding, SimpleChanges, OnChanges, Directive, Input, Output, EventEmitter,
  ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AttributesMap, UIModel, ComponentEvent } from '../models';
import { kebabStrToCamel, queryValue, setValue, ComponentDataContext, DataChanges } from '../utils';
import { StyleProperties, DataModelProperties, StylePropertiesList, BaseProperties } from '../properties';
import { InputProperties } from '../ui-components/input/input.component';
import { BaseDynamicComponent } from './base-dynamic-component';

@Directive()
// eslint-disable-next-line
export class BaseUIComponent<T extends object = StyleProperties> extends BaseDynamicComponent<T> implements OnDestroy, OnChanges, OnInit {
    @HostBinding('style.width') width?: string;
    @HostBinding('style.min-width') minWidth?: string;
    @HostBinding('style.max-width') maxWidth?: string;
    @HostBinding('style.height') height?: string;
    @HostBinding('style.min-height') minHeight?: string;
    @HostBinding('style.max-height') maxHeight?: string;
    @HostBinding('style.padding') padding?: string;
    @HostBinding('style.margin') margin?: string;
    @HostBinding('style.display') display?: string;
    @HostBinding('style.border-left') borderLeft?: string;
    @HostBinding('style.border-top') borderTop?: string;
    @HostBinding('style.border-right') borderRight?: string;
    @HostBinding('style.border-bottom') borderBottom?: string;
    @HostBinding('style.background') background?: string;
    @HostBinding('class') classAttr?: string;

    @Input() declare dataModel: any;
    @Input() uiModel: UIModel<T> = {
      type: undefined,
      itemProperties: {} as T
    };
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();
    @Output() changedDataModel = new EventEmitter();
    @ViewChild('vc', {read: ViewContainerRef, static: true}) declare containerRef?: ViewContainerRef;

    private dataModelHandlers = new Map<string, (val: unknown) => void>();

    protected readonly hostBindings = ['width', 'height', 'padding', 'margin', 'background', 'display',
    'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'visible'];
    private readonly borders = ['border-left', 'border-top', 'border-right', 'border-bottom'];
    protected destroy$ = new Subject();

    public declare children?: BaseDynamicComponent[];

    async ngOnInit(): Promise<void> {
      this.children = this.rendererService.renderChildren(this);
      await super.ngOnInit();
      this.subscribeOnDataModel();
    }

    async ngOnDestroy(): Promise<void> {
      this.emitEvent((this.properties as BaseProperties).onDestroy);
      this.destroy$.next(null);
      this.destroy$.complete();
    }

    async ngOnChanges({dataModel, uiModel}: SimpleChanges): Promise<void> {
      if (dataModel && !dataModel.firstChange && this.dataModel !== dataModel.currentValue) {
        this.dataModel = dataModel.currentValue;
      }

      if (uiModel && !uiModel.firstChange) {
        this.uiModel = uiModel.currentValue;
        this.setHostStyles();
      }
    }

    create(locationElement: HTMLElement): void {
      this.element = locationElement;
    }

    get componentDataModel(): any {
      if (Object.hasOwn(this.properties, 'dataSource')) {
        const value = (this.properties as DataModelProperties).dataSource;
        if (typeof value === 'object') {
          return value;
        } else if (typeof value === 'string' && Object.hasOwn(this.dataModel, value)) {
          return this.dataModel[value];
        }
      }

      if (Object.hasOwn(this.properties, 'binding')) {
        const path = (this.properties as DataModelProperties).binding;
        // TODO: Handle case for Array type.
        if (!Array.isArray(this.dataModel)) {
          return queryValue(this.dataModel, path);
        }
      }

      if (Object.hasOwn(this.properties, 'value')) {
        return (this.properties as InputProperties).value;
      }
    }

    set componentDataModel(val) {
      if (Object.hasOwn(this.properties, 'binding')) {
        const path = (this.properties as DataModelProperties).binding;
        setValue(this.dataModel, path, val);
      }
    }

    get itemStyles(): {[key: string]: string} {
      return this.getStyles(this.properties);
    }

    getStyles(properties: StyleProperties = {}, stylesList = StylePropertiesList): {[key: string]: string} {
      return stylesList.reduce((styles, prop) => {
        if (Object.hasOwn(properties, prop)) {
          styles[prop] = this.getPropValue(properties, prop);
        }
        return styles;
      }, {});
    }

    public addDataPropertyHandler(property: string | undefined, handler: (val: unknown) => void): void {
      if (!property || !handler) {
        return;
      }
      this.dataModelHandlers.set(property, handler);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected onDataChanged(properties: DataChanges): void {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected afterComponentDataModelChanged(): void {}

    protected setHostStyles(): void {
      super.setHostStyles();
      if (this.properties) {
        this.setBorder(this.properties);
      }
    }

    private getPropValue(properties: AttributesMap, prop: string): any {
      const val = properties[prop];
      if (prop === 'font-size') {
        if (!isNaN(properties[prop])) {
          return `${val}px`;
        }
      }
      return val;
    }

    private setBorder(properties: StyleProperties): void {
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

      this.hostBindings.forEach(prop => {
        if (Object.hasOwn(properties, prop) && properties[prop]) {
          this[prop] = properties[prop];
        }
      });
    }

    private subscribeOnDataModel(): void {
      (this.dataModel as ComponentDataContext)?.uiValueChanged$
      ?.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.onDataChanged(data);

        let hasComponentDataChanged = false;
        data.forEach(({ propertyName, propertyValue }) => {
          const dataModelProp = `$.${propertyName}`;
          if (this.dataModelHandlers.has(dataModelProp)) {
            hasComponentDataChanged = true;
            this.dataModelHandlers.get(dataModelProp)(propertyValue);
          }
        });
        if (hasComponentDataChanged) {
          this.afterComponentDataModelChanged();
        }
      });
    }
}
