import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { BaseUIComponentConstructor, Categories, ComponentEvent, UIModel } from '../models';
import { CoreService } from '../services/core.service';
import { NGXDynamicComponent } from '../components/ngx-dynamic-component';
import { BaseDynamicComponent } from '../components/base-dynamic-component';
import { DraggableComponent } from '../designer/components/draggable-component';

type UIComponent = BaseDynamicComponent | NGXDynamicComponent;

// Create as service to be able to inject it into the component

export function renderChildren(parentComponent: BaseDynamicComponent): BaseDynamicComponent[] {
  if (!parentComponent.containerRef || !parentComponent.uiModel) {
    return;
  }
  parentComponent.containerRef.clear();
  return parentComponent.uiModel?.children?.map(m => createComponent(parentComponent, m));
}

export function createComponent(
  parentComponent: UIComponent,
  uiModel: UIModel,
  containerRef = parentComponent.containerRef,
  dataModel = parentComponent.dataModel,
  index?: number): BaseDynamicComponent  {
  try {
    const descriptor = CoreService.getComponentDescriptor(uiModel.type);
    const componentClass = descriptor.component;
    let component: BaseDynamicComponent;
    if (descriptor.category === Categories.HTML) {
      const baseHtml = componentClass as any;
      component = new baseHtml(parentComponent.injector);
      component.dataModel = dataModel;
      component.uiModel = uiModel;

      const draggableWrapper = containerRef.createComponent(DraggableComponent, {
        index
      });
      component.create(draggableWrapper.instance.container.element.nativeElement);

      try {
        draggableWrapper.injector.get(CdkDrag).data = component.uiModel;
      } catch (e) {
        console.error(e);
      }
    } else if (componentClass.prototype instanceof BaseDynamicComponent) {
      const componentRef = containerRef.createComponent(
        componentClass as BaseUIComponentConstructor,
        { index }
      );
      component = componentRef.instance as BaseDynamicComponent;
      component.dataModel = dataModel;
      component.uiModel = uiModel;
      component.create(componentRef.location.nativeElement);
      if (component.injector.get(CdkDrag)) {
        component.injector.get(CdkDrag).data = component.uiModel;
      } else {
        console.log('no drag!!!', component);
      }

      if (descriptor.category === Categories.Containers) {

        component.injector.get(CdkDropList).dropped.subscribe((event: CdkDragDrop<Array<any>>) => {
          console.log('dropped-evt000', event.container.element.nativeElement, event.item.element.nativeElement);

          if (event.previousContainer === event.container && event.previousIndex === event.currentIndex) {
            return;
          }

          const container = event.container.data as unknown as UIComponent;
          const item = event.item.data;
          try {
            const previousContainer = event.previousContainer.data as unknown as UIComponent;
            // console.log('previousContainer', event.previousIndex, item.type, event);
            // console.log('el', (previousContainer.containerRef.get(event.previousIndex) as any).rootNodes);
            if (event.previousContainer.id !== 'ngx-components-list') {
              previousContainer.containerRef.remove(event.previousIndex);
            }
            createComponent(container, item as UIModel, container.containerRef, container.dataModel, event.currentIndex);
            // event.previousContainer.removeItem(event.item);
            // event.previousContainer.element.nativeElement.removeChild();
            // event.item.ngOnDestroy();
          } catch (e) {
            console.log('failed to remove child', e);
          }
        });
      }
    }

    if (component) {
      component.element.classList.add('dc-element');
      uiModel.getComponent = () => component;
      component.changedDataModel.subscribe((evt) => {
        parentComponent.changedDataModel.emit(evt);
      });
      component.eventHandlers.subscribe((evt: ComponentEvent) => {
        if (parentComponent instanceof NGXDynamicComponent) {
          evt.rootUIModel = parentComponent.uiModel;
        }
        parentComponent.eventHandlers.emit(evt);
      });
      return component;
    } else {
      throw new Error('Not able to create component');
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create component ${uiModel.type}`);
  }
}
