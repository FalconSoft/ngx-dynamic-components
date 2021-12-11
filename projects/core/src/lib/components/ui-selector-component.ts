import { Component, OnInit, SimpleChanges, OnChanges, EventEmitter, Output, OnDestroy, ViewContainerRef, Injector } from '@angular/core';
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
  constructor(private containerRef: ViewContainerRef, private injector: Injector) {
    super();
  }

  @Output() render = new EventEmitter();

  public component: BaseDynamicComponent;

  async ngOnInit(): Promise<void> {
    await this.createComponent();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (!changes.uiModel || changes.uiModel.firstChange) { return; }
    if (!this.component || this.component.uiModel.type !== this.uiModel.type) {
        const shouldInit = !this.component || this.component.uiModel.id !== this.uiModel.id;
        // Recreate component with new type.
        await this.createComponent();
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
          await this.component.ngOnChanges(changes);
        }
      }
  }

  async ngOnDestroy(): Promise<void> {
    this.component.ngOnDestroy();
  }

  private async createComponent(): Promise<void> {
    try {
      const descriptor = CoreService.getComponentDescriptor(this.uiModel.type);
      const componentClass = descriptor.component;
      this.containerRef.clear();
      if (descriptor.category === Categories.HTML) {
        const baseHtml = componentClass as any;
        this.component = new baseHtml(this.containerRef, this.injector);
        this.component.dataModel = this.dataModel;
        this.component.uiModel = this.uiModel;
        this.component.create(this.containerRef.element.nativeElement);
      } else if (componentClass.prototype instanceof BaseUIComponent) {
        const componentRef = this.containerRef.createComponent(componentClass as BaseUIComponentConstructor);
        this.component = componentRef.instance as BaseUIComponent;
        this.component.dataModel = this.dataModel;
        this.component.uiModel = this.uiModel;
        this.component.create(componentRef.location.nativeElement);
      }

      this.component.element.classList.add('dc-element');
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
