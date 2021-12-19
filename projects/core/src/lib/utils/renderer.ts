import { BaseUIComponent } from '../components/base-ui-component';
import { BaseUIComponentConstructor, Categories, ComponentEvent, UIModel } from '../models';
import { CoreService } from '../services/core.service';
import { BaseHTMLElement } from '../components/base-html-element';
import { NGXDynamicComponent } from '../components/ngx-dynamic-component';

type UIComponent = BaseUIComponent | BaseHTMLElement | NGXDynamicComponent;

export function renderChildren(parentComponent: BaseUIComponent): void {
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
    let component: BaseUIComponent | BaseHTMLElement;
    if (descriptor.category === Categories.HTML) {
      const baseHtml = componentClass as any;
      component = new baseHtml(containerRef, parentComponent.injector);
      component.dataModel = dataModel;
      component.uiModel = uiModel;
      component.create(containerRef.element.nativeElement);
    } else if (componentClass.prototype instanceof BaseUIComponent) {
      const componentRef = containerRef.createComponent(
        componentClass as BaseUIComponentConstructor
      );
      component = componentRef.instance as BaseUIComponent;
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
