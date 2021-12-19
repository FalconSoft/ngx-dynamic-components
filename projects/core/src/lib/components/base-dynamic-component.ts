import { OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, Directive, Injector, Output } from '@angular/core';
import { UIModel, ComponentEvent } from '../models';
import { parseArgFunction, queryValue } from '../utils';
import { StyleProperties, StylePropertiesList, BaseProperties } from '../properties';

@Directive()
export abstract class BaseDynamicComponent<T = StyleProperties> implements OnInit, OnChanges, OnDestroy { // eslint-disable-line
    dataModel: any;
    uiModel: UIModel<T>;
    abstract eventHandlers: EventEmitter<ComponentEvent>;
    @Output() render = new EventEmitter();
    changedDataModel = new EventEmitter();
    element: HTMLElement;

    constructor(public injector?: Injector) { }

    async ngOnInit(): Promise<void> {
      this.setHostStyles();
      this.emitEvent((this.properties as BaseProperties).onInit);
    }

    abstract ngOnChanges(changes: SimpleChanges): Promise<void>;

    abstract ngOnDestroy(): Promise<void>;

    abstract create(element: HTMLElement): void;

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

    protected emitEvent(funcSign: string, parameters: any = null): void {
      if (funcSign) {
        const fParsed = parseArgFunction(funcSign);
        const eventName = fParsed[0];
        let parameter = fParsed[1];
        if (parameter?.startsWith('$') && parameters === null) {
          parameters = queryValue(this.dataModel, parameter);
          parameter = parameter.replace('\$.', '').replace(/\.\w/g, (matched) => matched.replace('.', '').toUpperCase());
        }
        this.eventHandlers.emit({
          eventName,
          parameters: {
            uiModel: this.uiModel,
            [parameter]: parameters
          }
        });
      }
    }

    protected setHostStyles(): void {
      const props = this.properties as StyleProperties;
      if (props.class) {
        this.element.className = props.class;
      }
      if (props) {
        StylePropertiesList.forEach(b => {
          if (props && props.hasOwnProperty(b)) {
            this.element.style[b] = props[b];
          }
        });
      }
    }
}
