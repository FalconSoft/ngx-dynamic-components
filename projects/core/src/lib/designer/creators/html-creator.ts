import { ViewContainerRef, ComponentRef } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { UIModel } from '../../models';
import { DraggableComponent } from '../components/draggable-component';
import { UIComponent } from '../designer-renderer.service';
import { ComponentCreator } from './component-creator';

export class HTMLCreator extends ComponentCreator {

  private draggableWrapper: ComponentRef<DraggableComponent>;

  constructor(
    parentComponent: UIComponent,
    uiModel: UIModel,
    containerRef: ViewContainerRef,
    dataModel: any,
    index: number
  ) {
    super(parentComponent, uiModel);
    const baseHtml = this.descriptor.component as any;
    const component = new baseHtml(parentComponent.injector);
    component.dataModel = dataModel;
    component.uiModel = uiModel;
    this.draggableWrapper = containerRef.createComponent(DraggableComponent, {
      index
    });
    component.create(this.draggableWrapper.instance.container.element.nativeElement);

    this.drag.data = component.uiModel;
    component.element.onclick = (evt: Event) => {
      evt.stopImmediatePropagation();
      this.selectComponent();
    };

    this.component = component;

    this.initComponentProps();
  }

  deselectComponent(): void {
    this.component.element.classList.remove('selected-component');
  }

  selectComponent(): void {
    this.component.element.classList.add('selected-component');
    this.selected$.next(this.component);
  }

  get drag(): CdkDrag {
    return this.draggableWrapper.injector.get(CdkDrag);
  }
}
