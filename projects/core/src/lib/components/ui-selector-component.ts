import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, SimpleChanges, OnChanges } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';
import { CoreService } from '../core.service';

@Component({
    selector: 'dc-ui-selector',
    template: ''
})
export class UISelectorComponent extends BaseUIComponent implements OnInit, OnChanges {
  constructor(private containerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  private component: BaseUIComponent;

  async ngOnInit(): Promise<void> {
    this.createComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.component && this.component.uiModel.type !== this.uiModel.type) {
      // Recreate component with new type.
      this.createComponent();
    } else {
      // Update component properties.
      for (const prop in changes) {
        if (changes.hasOwnProperty(prop)) {
          const change = changes[prop];
          if (!change.firstChange && change.currentValue !== change.previousValue) {
            this.component[prop] = change.currentValue;
          }
        }
      }
    }
  }

  private createComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CoreService.getComponent(this.uiModel.type));
    this.containerRef.clear();
    const componentRef = this.containerRef.createComponent(componentFactory);
    this.component = componentRef.instance as BaseUIComponent;
    this.component.workflowEngine = this.workflowEngine;
    this.component.dataModel = this.dataModel;
    this.component.uiModel = this.uiModel;
    this.component.changedDataModel.subscribe(() => {
      this.changedDataModel.emit(this.dataModel);
    });
  }
}
