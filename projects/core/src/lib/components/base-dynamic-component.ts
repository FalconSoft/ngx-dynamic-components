import { OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, Directive, Injector, Output, ViewContainerRef } from '@angular/core';
import { UIModel, ComponentEvent } from '../models';
import { getStringEventArgs, kebabToCamelCase, parseArgFunction, queryValue } from '../utils';
import { StyleProperties, StylePropertiesList, BaseProperties } from '../properties';
import { Observable, Subject } from 'rxjs';

@Directive()
export abstract class BaseDynamicComponent<T = StyleProperties> implements OnInit, OnChanges, OnDestroy { // eslint-disable-line
    dataModel: any;
    uiModel: UIModel<T> = {
      type: undefined,
      itemProperties: ({} as T)
    };
    containerRef?: ViewContainerRef;
    abstract eventHandlers: EventEmitter<ComponentEvent>;
    @Output() render = new EventEmitter();
    changedDataModel = new EventEmitter();
    element?: HTMLElement;
    protected eventResults = new Map<string, any>();
    protected eventResults$ = new Subject<string>();

    constructor(public injector?: Injector) { }

    async ngOnInit(): Promise<void> {
      this.setHostStyles();
      this.emitEvent((this.properties as BaseProperties)?.onInit);
    }

    abstract ngOnChanges(changes: SimpleChanges): Promise<void>;

    abstract ngOnDestroy(): Promise<void>;

    abstract create(element: HTMLElement): void;

    setEventHandlerResult(event: string, result: any): void {
      if (event) {
        this.eventResults.set(event, result);
        this.eventResults$.next(event);
      }
    };

    get properties(): T {
      return this.uiModel.itemProperties;
    }

    get attrs(): T {
      return this.uiModel.itemProperties;
    }

    show(): void {
      if (this.element) {
        this.element.classList.remove('hidden');
      }
    }
    hide(): void {
      if (this.element) {
        this.element.classList.add('hidden');
      }
    }

    protected emitEvent(funcSign?: string, parameters: any = null, eventName?: string): void {
      if (funcSign) {
        const fParsed = parseArgFunction(funcSign);
        const eventHandler = fParsed[0];
        let parameter = fParsed[1];
        if (parameter?.startsWith('$') && parameters === null) {
          parameters = queryValue(this.dataModel, parameter);
          parameter = parameter.replace('\$.', '').replace(/\.\w/g, (matched) => matched.replace('.', '').toUpperCase());
        }

        const eventParameters = {
          uiModel: this.uiModel,
          argsKey: parameter,
          argsValue: getStringEventArgs(funcSign) ?? parameters
        };

        if (parameter) {
          eventParameters[parameter] = eventParameters.argsValue;
        }

        this.eventHandlers.emit({
          eventHandler,
          eventName,
          parameters: eventParameters,
          sender: this
        });
      }
    }

    protected setHostStyles(): void {
      if (this.element && this.properties) {

        const props = this.properties as StyleProperties;
        if (props.class) {
          this.element.className += ' ' + props.class;
        }

        props.style?.split(';').forEach(s => {
          if (this.element) {
              const [key, val] = s.split(':').map(v => v.trim());
              this.element.style[kebabToCamelCase(key) as any] = val;
          }
        });

        StylePropertiesList.forEach(b => {
          if (props && props.hasOwnProperty(b) && this.element) {
            const val = (props as any)[b];
            this.element.style[b as any] = val;
          }
        });
      }
    }
}
