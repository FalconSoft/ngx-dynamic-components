import { OnInit, OnDestroy, EventEmitter, SimpleChanges, OnChanges,
  ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { UIModel, ComponentEvent, XMLResult } from '../models';
import { parseArgFunction } from '../utils';
import { StyleProperties, StylePropertiesList, BaseProperties, propDescription } from '../properties';
import { UISelectorComponent } from './ui-selector-component';

export class BaseHTMLElement<T = HTMLProperties> implements OnInit, OnDestroy, OnChanges {
    dataModel: any;
    uiModel: UIModel<T>;
    eventHandlers = new EventEmitter<ComponentEvent>();
    changedDataModel = new EventEmitter();
    element: HTMLElement;
    private parentNode: Node;

    constructor(
      private appRef?: ApplicationRef,
      private componentFactoryResolver?: ComponentFactoryResolver,
      private injector?: Injector) {}

    async ngOnInit(): Promise<void> {
      this.setHostStyles();
      this.emitEvent((this.properties as BaseProperties).onInit);
    }

    async ngOnDestroy(): Promise<void> {
      this.emitEvent((this.properties as BaseProperties).onDestroy);
      if (this.element) {
        this.element.parentNode.removeChild(this.element);
      }
    }

    async ngOnChanges({dataModel, uiModel}: SimpleChanges): Promise<void> {
      if (dataModel && !dataModel.firstChange && this.dataModel !== dataModel.currentValue) {
        this.dataModel = dataModel.currentValue;
      }

      if (uiModel && !uiModel.firstChange) {
        this.uiModel = uiModel.currentValue;
        this.setProperties();
      }
    }

    create(selectorElement: HTMLElement): void {
      const created = Boolean(this.element);
      this.element = this.element || document.createElement(this.uiModel.type);
      this.element.innerHTML = '';
      this.parentNode = this.parentNode || selectorElement.parentNode;
      this.setProperties();
      if (!created && this.parentNode) {
        this.parentNode.insertBefore(this.element, selectorElement);
      }
      if (this.uiModel.children) {
        this.uiModel.children.forEach(uiModel => {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UISelectorComponent);
          const componentRef = componentFactory.create(this.injector);
          const component = componentRef.instance;
          component.dataModel = this.dataModel;
          component.uiModel = uiModel;
          this.appRef.attachView(componentRef.hostView);
          const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
          this.element.appendChild(domElem);
        });
      }
      if (this.parentNode && !created) {
        this.parentNode.removeChild(selectorElement);
      }
    }

    private setProperties(): void {
      const htmlProps = this.properties as HTMLProperties;
      if (htmlProps.content) {
        this.element.textContent = htmlProps.content;
      }
      this.setHostStyles();
    }

    get properties(): T {
      return this.uiModel.itemProperties;
    }

    protected emitEvent(funcSign: string, parameters: any = null): void {
      if (funcSign) {
        const [eventName, parameter] = parseArgFunction(funcSign);
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

export class HTMLProperties extends StyleProperties {
  @propDescription({
    description: 'HTML element text content',
    example: 'Text'
  })
  content?: string;

  @propDescription({
    description: 'HTML element html content',
    example: '<span>Text</span>'
  })
  htmlContent?: string;
}

export interface HTMLPropertiesConstrutor {
  new (): HTMLProperties;
}

export function parseHTMLUIModel(xmlRes: XMLResult): UIModel {
  const content = xmlRes.content;
  return {
    type: xmlRes.type,
    itemProperties: { content }
  };
}

