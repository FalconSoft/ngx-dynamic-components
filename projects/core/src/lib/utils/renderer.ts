import { BaseUIComponentConstructor, Categories, ComponentEvent, UIModel } from '../models';
import { CoreService } from '../services/core.service';
import { NGXDynamicComponent } from '../components/ngx-dynamic-component';
import { BaseDynamicComponent } from '../components/base-dynamic-component';

type UIComponent = BaseDynamicComponent | NGXDynamicComponent;

export function renderChildren(parentComponent: BaseDynamicComponent): void {
  if (!parentComponent.containerRef || !parentComponent.uiModel) {
    return;
  }
  parentComponent.containerRef.clear();
  parentComponent.uiModel?.children?.forEach(m => {
    createComponent(parentComponent, m);
  });
}

export function createComponent(
  parentComponent: UIComponent,
  uiModel: UIModel,
  containerRef = parentComponent.containerRef,
  dataModel = parentComponent.dataModel): void {
  try {
    const descriptor = CoreService.getComponentDescriptor(uiModel.type);
    const componentClass = descriptor.component;
    let component: BaseDynamicComponent;
    if (descriptor.category === Categories.HTML) {
      const baseHtml = componentClass as any;
      component = new baseHtml(containerRef, parentComponent.injector);
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

    component.element.classList.add('dc-element');
    uiModel.getComponent = () => component;
    component.changedDataModel.subscribe((evt) => {
      parentComponent.changedDataModel.emit(evt);
    });
    component.eventHandlers.subscribe((evt: ComponentEvent) => {
      parentComponent.eventHandlers.emit(evt);
    });
    parentComponent.render.emit({ success: true });
  } catch (error) {
    parentComponent.render.emit({ error });
    console.error(error);
  }
}
