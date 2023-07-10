import { Injectable } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BehaviorSubject, filter, map } from 'rxjs';
import { BaseDynamicComponent } from '../components/base-dynamic-component';
import { Categories, UIModel } from '../models';
import { NGXDynamicComponent } from '../components/ngx-dynamic-component';
import { CoreService } from '../services/core.service';
import { HTMLCreator } from './creators/html-creator';
import { DcCreator } from './creators/dc-creator';
import { DcContainerCreator } from './creators/dc-container-creator';
import { ComponentCreator } from './creators/component-creator';
import { NGXDynamicDesignerComponent } from './components/ngx-dynamic-designer-component';

export type UIComponent = BaseDynamicComponent | NGXDynamicComponent;

@Injectable()
export class DesignerRendererService {

  selectedCreator$ = new BehaviorSubject<ComponentCreator>(null);

  selectedContainer$ = this.selectedCreator$.pipe(
    filter(creator => !creator || creator instanceof DcContainerCreator),
    map(creator => creator?.component)
  );
  selectedComponent$ = this.selectedCreator$.pipe(
    filter(creator => !creator || (creator instanceof DcCreator || creator instanceof HTMLCreator)),
    map(creator => creator?.component)
  );

  selectedElement$ = this.selectedCreator$.pipe(
    filter(creator => !creator || creator instanceof HTMLCreator),
    map(creator => creator?.component)
  );

  private componentCreatorMap = new Map<BaseDynamicComponent, ComponentCreator>();

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
    dataModel = parentComponent.dataModel,
    index?: number): BaseDynamicComponent  {
    try {
      const descriptor = CoreService.getComponentDescriptor(uiModel.type, 'designer');
      const componentClass = descriptor.component;
      let componentCreator: ComponentCreator;
      if (descriptor.category === Categories.HTML) {
        componentCreator = new HTMLCreator(
          parentComponent,
          uiModel,
          containerRef,
          dataModel,
          index
        );
      } else if (descriptor.category === Categories.Containers) {
        componentCreator = new DcContainerCreator(
          parentComponent,
          uiModel,
          containerRef,
          dataModel,
          index
        );
        componentCreator.drag.disabled = true;
        setTimeout(() => {
          if (componentCreator.drag.disabled === null) {
            componentCreator.drag.disabled = true;
          }
        });
        (componentCreator as DcContainerCreator).dropped$.subscribe((evt: CdkDragDrop<Array<any>>) => {
          this.onDrop(evt);
        });
      } else if (componentClass.prototype instanceof BaseDynamicComponent) {
        componentCreator = new DcCreator(
          parentComponent,
          uiModel,
          containerRef,
          dataModel,
          index
        );
      }
      const component = componentCreator.component;
      if (component) {
        this.componentCreatorMap.set(component, componentCreator);
        componentCreator.selected$.subscribe(() => {;
          this.selectedCreator?.deselectComponent();
          this.selectedCreator$.next(componentCreator);
        });
        componentCreator.drag.disabled = false;
        return component;
      } else {
        throw new Error('Not able to create component');
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to create component ${uiModel.type}`);
    }
  }

  async updateComponent(component: BaseDynamicComponent, properties: Record<string, string>): Promise<void> {
    const index = component.parent?.children?.indexOf(component) ?? 0;
    this.deleteComponent(component);
    const newComponent = await this.insertComponent(component.parent, {
      ...component.uiModel,
      itemProperties: {
        ...component.uiModel.itemProperties,
        ...properties
      }
    }, index);
    this.componentCreatorMap.get(newComponent)?.selectComponent();
  }

  deselectComponent(): void {
    if (this.selectedCreator) {
      this.selectedCreator.deselectComponent();
      this.selectedCreator$.next(null);
    }
  }

  selectComponent(component: BaseDynamicComponent): void {
    const creator = this.componentCreatorMap.get(component);
    creator?.selectComponent();
  }

  private get selectedContainer(): BaseDynamicComponent {
    if (this.selectedCreator instanceof DcContainerCreator) {
      return this.selectedCreator.component;
    }
  }

  private get selectedCreator(): ComponentCreator {
    return this.selectedCreator$.value;
  }

  private async onDrop(event: CdkDragDrop<Array<any>>): Promise<void> {
    const container = this.selectedContainer;
    const item = event.item.data as UIModel;
    try {
      if (event.previousContainer.id !== 'ngx-components-list') {
        this.selectedContainer?.containerRef.remove(event.previousIndex);
        this.selectedContainer?.children.splice(event.previousIndex, 1);
      }

      await this.insertComponent(container, item, event.currentIndex);
      } catch (e) {
        console.log('failed to remove child', e);
      }
  }

  private insertComponent(container: UIComponent, uiModel: UIModel, index: number): Promise<BaseDynamicComponent> {
    const newComponent = this.createComponent(container, uiModel, container.containerRef, container.dataModel, index);
    if (container instanceof BaseDynamicComponent) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!container.children) {
            container.children = [];
          }
          container.children.splice(index, 0, newComponent);
          this.syncUIModel(container);
          resolve(newComponent);
        });
      });
    }
    return Promise.resolve(newComponent);
  }

  private syncUIModel(component: BaseDynamicComponent): void {
    let prevComponentUIModel: UIModel;
    while (component) {
      if (component instanceof NGXDynamicDesignerComponent && prevComponentUIModel) {
        component.uiModel = prevComponentUIModel;
        return;
      } else {
        component.uiModel = component.generateUIModel();
        prevComponentUIModel = component.uiModel;
      }
      component = component.parent;
    }
  }

  deleteComponent(component: BaseDynamicComponent): void {
    if (component.parent as unknown instanceof NGXDynamicDesignerComponent) {
      this.clearDesigner(component.parent as unknown as NGXDynamicDesignerComponent);
    } else {
      const index = component.parent.children.indexOf(component);
      if (index > -1) {
        component.parent.containerRef.remove(index);
        component.parent?.children.splice(index, 1);
        this.selectedCreator$.next(null);
      }
    }
  }

  clearDesigner(dcDesigner: NGXDynamicDesignerComponent): void {
    dcDesigner.containerRef.clear();
    const newComponent = this.createComponent(dcDesigner, {
      type: 'div',
      itemProperties: {
        class: 'container h-100'
      }
    }, dcDesigner.containerRef, dcDesigner.dataModel);
    this.componentCreatorMap.get(newComponent)?.selectComponent();
  }
}
