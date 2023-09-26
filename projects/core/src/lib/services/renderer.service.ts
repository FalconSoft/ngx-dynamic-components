import { Injectable } from '@angular/core';
import { BaseUIComponentConstructor, Categories, ComponentEvent, UIModel } from '../models';
import { NGXDynamicComponent } from '../components/ngx-dynamic-component';
import { BaseDynamicComponent } from '../components/base-dynamic-component';
import { CoreService } from './core.service';

export type UIComponent = BaseDynamicComponent | NGXDynamicComponent;

@Injectable({
  providedIn: 'root'
})
export class RendererService {
  renderChildren(parentComponent: BaseDynamicComponent): BaseDynamicComponent[] {
    if (!parentComponent.containerRef || !parentComponent.uiModel) {
      return;
    }
    parentComponent.containerRef.clear();
    return parentComponent.uiModel?.children?.map(m => this.createComponent(parentComponent, m));
  }

  createComponent(
    parentComponent: UIComponent,
    uiModel: UIModel,
    containerRef = parentComponent.containerRef,
    dataModel = parentComponent.dataModel): BaseDynamicComponent  {
    try {
      const descriptor = CoreService.getComponentDescriptor(uiModel.type);
      const componentClass = descriptor.component;
      let component: BaseDynamicComponent;
      if (descriptor.category === Categories.HTML) {
        const baseHtml = componentClass as any;
        component = new baseHtml(this, parentComponent.injector);
        component.dataModel = dataModel;
        component.uiModel = uiModel;
        component.create(containerRef.element.nativeElement);
      } else if (componentClass.prototype instanceof BaseDynamicComponent) {
        const componentRef = containerRef.createComponent(
          componentClass as BaseUIComponentConstructor
        );
        component = componentRef.instance as BaseDynamicComponent;
        component.dataModel = dataModel;
        component.uiModel = uiModel;
        component.create(componentRef.location.nativeElement);
      }

      if (component) {
        component.element.classList.add('dc-element');
        uiModel.getComponent = () => component;
        component.changedDataModel.subscribe((evt) => {
          parentComponent.changedDataModel.emit(evt);
        });
        component.eventHandlers.subscribe((evt: ComponentEvent) => {
          if (parentComponent as any['root']) {
            evt.rootUIModel = parentComponent.uiModel;
          }
          parentComponent.eventHandlers.emit(evt);
        });
        component.parent = parentComponent as BaseDynamicComponent;
        return component;
      } else {
        throw new Error('Not able to create component');
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to create component ${uiModel.type}`);
    }
  }
}
