import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver,
  SimpleChanges, OnChanges, EventEmitter, Output, Injector, ApplicationRef, OnDestroy } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';
import { CoreService } from '../services/core.service';
import { ComponentEvent, Categories } from '../models';
import { BaseUIComponentConstructor } from '../utils';
import { BaseDynamicComponent } from './base-dynamic-component';

@Component({
    selector: 'dc-ui-selector',
    template: ''
})
export class UISelectorComponent extends BaseUIComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private containerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef) {
    super();
  }

  @Output() render = new EventEmitter();

  public component: BaseDynamicComponent;

  async ngOnInit(): Promise<void> {
    this.createComponent();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (!changes.uiModel || changes.uiModel.firstChange) { return; }
    if (!this.component || this.component.uiModel.type !== this.uiModel.type) {
        const shouldInit = !this.component || this.component.uiModel.id !== this.uiModel.id;
        // Recreate component with new type.
        this.createComponent();
        if (shouldInit && Object.values(changes).some(c => c.firstChange === false)) {
          this.emitEvent(this.properties.onInit);
        }
      } else {
        // Update component properties.
        let changed = false;
        for (const prop in changes) {
          if (changes.hasOwnProperty(prop)) {
            const change = changes[prop];
            if (!change.firstChange && change.currentValue !== change.previousValue) {
              this.component[prop] = change.currentValue;
              changed = true;
            }
          }
        }
        if (changed) {
          this.component.ngOnChanges(changes);
        }
      }
  }

  async ngOnDestroy(): Promise<void> {
    this.component.ngOnDestroy();
  }

  private createComponent(): void {
    try {
      const descriptor = CoreService.getComponentDescriptor(this.uiModel.type);
      const ComponentClass = descriptor.component;
      this.containerRef.clear();
      if (descriptor.category === Categories.HTML) {
        const BaseHtml = ComponentClass as any;
        this.component = new BaseHtml(this.appRef, this.componentFactoryResolver, this.injector);
        this.component.dataModel = this.dataModel;
        this.component.uiModel = this.uiModel;
        this.component.create(this.containerRef.element.nativeElement);
      } else if (ComponentClass.prototype instanceof BaseUIComponent) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass as BaseUIComponentConstructor);
        const componentRef = this.containerRef.createComponent(componentFactory);
        this.component = componentRef.instance as BaseUIComponent;
        this.component.dataModel = this.dataModel;
        this.component.uiModel = this.uiModel;
        this.component.create(componentRef.location.nativeElement);
      }

      this.component.element.classList.add('dc-element');
      // this.uiModel.show = () => this.component.element.classList.remove('hidden');
      // this.uiModel.hide = () => this.component.element.classList.add('hidden');
      // this.uiModel.getElement = () => this.component.element;
      this.uiModel.getComponent = () => this.component;
      this.component.changedDataModel.subscribe((evt) => {
        this.changedDataModel.emit(evt);
      });
      this.component.eventHandlers.subscribe((evt: ComponentEvent) => {
        this.eventHandlers.emit(evt);
      });
      this.render.emit({success: true});
    } catch (error) {
      this.render.emit({error});
      console.error(error);
    }
  }
}
