import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver,
  SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { BaseUIComponent } from './base-ui-component';
import { CoreService } from '../services/core.service';

@Component({
    selector: 'dc-ui-selector',
    template: ''
})
export class UISelectorComponent extends BaseUIComponent implements OnInit, OnChanges {
  constructor(private containerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  @Output() render = new EventEmitter();

  public component: BaseUIComponent;

  async ngOnInit(): Promise<void> {
    this.createComponent();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.firstChange) { return; }
    if (!this.component || this.component.uiModel.type !== this.uiModel.type) {
        const shouldInit = !this.component || this.component.uiModel.id !== this.uiModel.id;
        // Recreate component with new type.
        this.createComponent();
        if (shouldInit && Object.values(changes).some(c => c.firstChange === false)) {
          await this.triggerAction('_OnInit');
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

  private createComponent() {
    try {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CoreService.getComponent(this.uiModel.type));
      this.containerRef.clear();
      const componentRef = this.containerRef.createComponent(componentFactory);
      this.component = componentRef.instance as BaseUIComponent;
      this.component.interpreter = this.interpreter;
      this.component.dataModel = this.dataModel;
      this.component.uiModel = this.uiModel;
      this.component.rootUIModel = this.rootUIModel || this.uiModel;
      this.component.scripts = this.scripts;
      this.component.changedDataModel.subscribe((evt) => {
        this.changedDataModel.emit(evt);
      });
      this.component.evaluate.subscribe((evt) => {
        this.evaluate.emit(evt);
      });
      this.render.emit({success: true});
    } catch (error) {
      this.render.emit({error});
      console.error(error);
    }
  }
}
