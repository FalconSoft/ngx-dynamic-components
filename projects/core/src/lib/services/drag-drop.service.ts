import { Injectable, ApplicationRef, Injector, EmbeddedViewRef, ComponentFactoryResolver, ComponentRef, ElementRef } from '@angular/core';
import { dragula } from 'ng2-dragula';
import { UIModel, AttributesMap } from '../models';
import { Subject } from 'rxjs';
import { ControlEditorComponent } from '../components/control-editor/control-editor.component';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  private dragIndex = 0;
  private dropIndex = 0;

  uiModel: UIModel<AttributesMap>;

  drake;

  container: ElementRef;

  uiModelUpdates$ = new Subject<UIModel>();
  selectedComponent$ =  new Subject<UIModel>();

  controls: ComponentRef<ControlEditorComponent>[] = [];

  containerUIModelMap = new Map();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    const components = CoreService.getListOfComponents();
    components.forEach(c => {
      this.containerUIModelMap.set(`${c.packageName}:${c.name}`, c.defaultModel || c.example.uiModel);
    });
  }

  public init(container, uiModel: UIModel) {
    this.container = container;
    this.uiModel = uiModel;

    if (!this.drake) {
      this.initDrake(this.elements);
    } else {
      this.drake.containers = this.elements;
    }
    this.initEditor();
  }

  public cleanUpEditor() {
    this.controls.forEach(componentRef => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
    this.controls = [];
  }

  /**
   * Gets containers for drag&drop functionality.
   */
  get elements(): HTMLElement[] {
    // this.containerUIModelMap.clear();
    const elements = this.container.nativeElement.querySelectorAll(`
      .preview dc-container,
      .preview dc-container>dc-container-row.row,
      .preview dc-ui-flex-container .container
    `);
    let arrElements = Array.from(elements);

    arrElements.forEach(((container: HTMLElement, index: number) => {
      const childrenUIModel = this.getChildrenByIndex(this.uiModel.children, index);
      this.containerUIModelMap.set(container, childrenUIModel);
      arrElements = arrElements.concat(this.mapChildren(container, childrenUIModel));
    }));
    const controlPanelGroups = this.container.nativeElement.querySelectorAll('.preview .components-list');
    arrElements = [...arrElements, ...Array.from(controlPanelGroups)];
    return arrElements as HTMLElement[];
  }

  private mapChildren(container, childrenUIModel) {
    let children = Array.from(container.querySelectorAll(`
        :scope>div>dc-container,
        :scope>div>dc-container>dc-container-row.row,
        :scope>div>dc-ui-flex-container .container
    `));
    children.forEach((childContainer, i) => {
      const uiModelChildren = this.getChildrenByIndex(childrenUIModel, i + 1);
      this.containerUIModelMap.set(childContainer, uiModelChildren);
      children = children.concat(this.mapChildren(childContainer, uiModelChildren));
    });
    return children;
  }

  private initEditor() {
    this.cleanUpEditor();
    this.drake.containers.forEach((container, index) => {
      this.getContainerItems(container).forEach((element, i) => {
        const childrenUIModels = this.containerUIModelMap.get(container);
        if (childrenUIModels) {
          this.appendControlEditor(element as HTMLElement, childrenUIModels, i);
        }
      });
    });
  }

  private getContainerItems(container: HTMLElement): Element[] {
    return Array.from(container.children).filter(item => item.tagName !== 'DC-CONTROL-EDITOR');
  }

  appendControlEditor(element: HTMLElement, children: UIModel[], i: number) {
    const uiModel = children[i];
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ControlEditorComponent)
      .create(this.injector);

    componentRef.instance.uiModel = uiModel;
    componentRef.instance.uiModelChanged.subscribe(() => {
      this.uiModelUpdates$.next(this.uiModel);
    });

    componentRef.instance.uiModelRemoved.subscribe(() => {
      children.splice(i, 1);
      this.uiModelUpdates$.next(this.uiModel);
    });

    const el = element.tagName === 'DC-CONTAINER-ROW' ? element : element.querySelector('dc-ui-selector + *');
    el.addEventListener('click', evt => {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      this.deselect();
      el.classList.add('active-component');
      this.selectedComponent$.next(uiModel);
    });

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    element.appendChild(domElem);
    this.controls.push(componentRef);
  }

  deselect() {
    const active = this.container.nativeElement.querySelector('.active-component');
    if (active) {
      active.classList.remove('active-component');
    }
  }

  private initDrake(elements) {
    this.drake = dragula(elements, {
      moves: (el, container, handle: HTMLElement): boolean => {
        return this.isMoveElement(handle);
      },
      direction: 'horizontal',
    });

    this.drake.on('drop', (el: Element, target: Element, source: Element) => {
      let item: UIModel;
      const targetModel = this.containerUIModelMap.get(target);
      if (!targetModel) {
        return null;
      }
      this.dropIndex = this.domIndexOf(el, target);
      if (el.id) {
        item = this.containerUIModelMap.get(el.id);
        targetModel.splice(this.dropIndex, 0, item);
      } else {
        const sourceModel = this.containerUIModelMap.get(source);
        if (target === source) {
          // Same containers. Replace item position.
          item = sourceModel.splice(this.dragIndex, 1)[0];
          sourceModel.splice(this.dropIndex, 0, item);
        } else {
          // Different containers.
          // Remove item from previous container.
          item = sourceModel.splice(this.dragIndex, 1)[0];
          // Add item into next container.
          targetModel.splice(this.dropIndex, 0, item);
        }
      }
      setTimeout(() => this.uiModelUpdates$.next(this.uiModel));
    });
    this.drake.on('drag', (el: any, source: any) => {
      this.dragIndex = this.domIndexOf(el, source);
    });

    this.drake.on('over', (el, container: HTMLElement) => {
      container.classList.add('active');
    });

    this.drake.on('out', (el, container: HTMLElement) => {
      container.classList.remove('active');
    });
  }

  /**
   * Get UIModel children by drag&drop index.
   * @param children UI Model children.
   * @param index index to find.
   * @param currentIndex current loop index.
   */
  private getChildrenByIndex(children: UIModel[] = [], index = 0, currentIndex = 0): UIModel[] {
    if (index === 0 || currentIndex === index) {
      return children;
    }

    for (const m of children) {
      if (m.children && this.isDraggableContainer(m)) {
        if (index === ++currentIndex) {
          return m.children;
        }
      }
    }

    for (const m of children) {
      if (m.children && m.children.length) {
        return this.getChildrenByIndex(m.children, index, currentIndex);
      }
    }
  }

  private domIndexOf(child: any, parent: any): any {
    return Array.from(parent.children).indexOf(child);
  }

  /**
   * TODO: implement logic to define draggable containers,
   * or make all containers (components with children property) draggable.
   * @param m UIModel
   */
  private isDraggableContainer(m: UIModel): boolean {
    return m.type !== 'material:card';
  }

  private isMoveElement(el: HTMLElement): boolean {
    let dragEl = el;
    let isMoveEl = dragEl.classList && dragEl.classList.contains('handle');

    while (!isMoveEl && dragEl.parentNode) {
      dragEl = dragEl.parentNode as HTMLElement;
      isMoveEl = dragEl.classList && dragEl.classList.contains('handle');
    }
    return isMoveEl;
  }
}