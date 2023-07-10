import { ViewContainerRef } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { BaseUIComponentConstructor, UIModel } from '../../models';
import { UIComponent } from '../designer-renderer.service';
import { ComponentCreator } from './component-creator';
import { BaseDynamicComponent } from '../../components/base-dynamic-component';

export class DcCreator extends ComponentCreator {
  constructor(
    parentComponent: UIComponent,
    uiModel: UIModel,
    containerRef: ViewContainerRef,
    dataModel: any,
    index: number
  ) {
    super(parentComponent, uiModel);

    const componentRef = containerRef.createComponent(
      this.descriptor.component as BaseUIComponentConstructor,
      { index }
    );
    const component = componentRef.instance as BaseDynamicComponent;
    component.dataModel = dataModel;
    component.uiModel = uiModel;
    component.create(componentRef.location.nativeElement);
    this.component = component;
    this.initComponentProps();
    this.initDrag(component);
  }

  deselectComponent(): void {
    this.drag.element.nativeElement.classList.remove('selected-component');
  }

  selectComponent(): void {
    this.selected$.next(this.component);
    this.drag.element.nativeElement.classList.add('selected-component');
  }

  get drag(): CdkDrag {
    return this.component.injector.get(CdkDrag);
  }

  protected initDrag(component: BaseDynamicComponent): void {
    if (!this.drag) {
      console.warn(`${component.uiModel.type} is not draggable`);
      return;
    }
    this.drag.disabled = true;
    this.drag.data = component.uiModel;
    this.drag.started.subscribe(() => {
      this.drag.data = component.generateUIModel();
    });
    component.element.onclick = (evt: Event) => {
      evt.stopImmediatePropagation();
    };
    this.drag.element.nativeElement.onclick = (evt) => {
      evt.stopPropagation();
      this.selectComponent();
    };
  }
}
