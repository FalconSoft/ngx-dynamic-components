import { Injectable, ApplicationRef, Injector, EmbeddedViewRef, ComponentFactoryResolver, ComponentRef, ElementRef } from '@angular/core';
import { dragula } from 'ng2-dragula';
import { UIModel, AttributesMap, SelectedComponent } from '../models';
import { Subject } from 'rxjs';
import { ControlEditorComponent } from '../components/control-editor/control-editor.component';
import { CoreService } from './core.service';
import { getCssPath } from '../utils';

const ACTIVE_CLASS = 'active-component';

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
  selectedComponent$ =  new Subject<SelectedComponent>();
  componentRemoved$ = new Subject<UIModel>();
  controls: ComponentRef<ControlEditorComponent>[] = [];
  containerUIModelMap = new Map();
  private selectedComponent: SelectedComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public init(container, uiModel: UIModel) {
    this.cleanUpEditor();
    this.container = container;
    this.uiModel = uiModel;

    if (!this.drake) {
      this.initDrake(this.elements);
    } else {
      this.drake.containers = this.elements;
      this.selectCurrentComponent();
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
    this.containerUIModelMap.clear();
    CoreService.getListOfComponents().forEach(c => {
      this.containerUIModelMap.set(`${c.packageName}:${c.name}`, c.defaultModel || c.example.uiModel);
    });
    const elements = this.container.nativeElement.querySelectorAll(`
      #empty-container,
      ngx-dynamic-component>[drop-container],
      ngx-dynamic-component>dc-ui-flex-container>[drop-container]
    `);
    let arrElements = Array.from(elements) as HTMLElement[];

    // .filter(e => !e.id)
    arrElements.forEach(((container: HTMLElement, index: number) => {
      const childrenUIModel = this.getChildrenByIndex(this.uiModel.children, index);
      container.id = `container-${index}`;
      this.containerUIModelMap.set(container.id, childrenUIModel);
      this.appendControlEditor(container, [this.uiModel], index, true);
      arrElements = arrElements.concat(this.mapChildren(container, childrenUIModel));
    }));
    const controlPanelGroups = Array.from(this.container.nativeElement.querySelectorAll('.preview .components-list')) as HTMLElement[];
    arrElements = [...arrElements, ...controlPanelGroups];
    return arrElements as HTMLElement[];
  }

  private mapChildren(container, childrenUIModel) {
    let children = Array.from(container.querySelectorAll(`
        :scope>div>[drop-container],
        :scope>[drop-container],
        :scope>div>dc-ui-flex-container>[drop-container]
    `)) as HTMLElement[];
    children.forEach((childContainer, i) => {
      const uiModelChildren = this.getChildrenByIndex(childrenUIModel, i + 1);
      childContainer.id = `${container.id}-child-${i}`;
      this.containerUIModelMap.set(childContainer.id, uiModelChildren);
      children = children.concat(this.mapChildren(childContainer, uiModelChildren));
    });
    return children;
  }

  private initEditor() {
    this.drake.containers.forEach((container, index) => {
      this.getContainerItems(container).forEach((element, i) => {
        const childrenUIModels = this.containerUIModelMap.get(container.id);
        if (childrenUIModels) {
          this.appendControlEditor(element as HTMLElement, childrenUIModels, i);
        }
      });
    });
    this.selectedComponent$.subscribe(c => this.selectedComponent = c);
  }

  private getContainerItems(container: HTMLElement): Element[] {
    return Array.from(container.children).filter(item => item.tagName !== 'DC-CONTROL-EDITOR');
  }

  selectParent() {
    if (this.selectCurrentComponent) {
      this.container.nativeElement.querySelector(this.selectedComponent.cssPath).parentNode.click();
    }
  }

  cloneSelected() {
    if (this.selectedComponent) {
      let el = this.container.nativeElement.querySelector(this.selectedComponent.cssPath) as HTMLElement;
      el = el.parentElement;
      while (!el.hasAttribute('drop-container')) {
        if ( el.tagName.toLowerCase() === 'ngx-dynamic-component') {
          return;
        }
        el = el.parentElement;
      }
      const targetModel = this.containerUIModelMap.get(el.id);
      const item = JSON.parse(JSON.stringify(this.selectedComponent.uiModel));
      targetModel.push(item);
      setTimeout(() => this.uiModelUpdates$.next(this.uiModel));
    }
  }

  appendControlEditor(element: HTMLElement, children: UIModel[], i: number, isRoot = false) {
    const uiModel = children[i];
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ControlEditorComponent)
      .create(this.injector);

    componentRef.instance.uiModelChanged.subscribe(() => {
      this.uiModelUpdates$.next(this.uiModel);
    });

    componentRef.instance.uiModelRemoved.subscribe(() => {
      if (isRoot) {
        this.componentRemoved$.next(null);
        this.uiModel = null;
      } else {
        this.componentRemoved$.next(children[i]);
        children.splice(i, 1);
      }
      this.uiModelUpdates$.next(this.uiModel);
    });

    const el = element.attributes.hasOwnProperty('drop-container') ? element : element.querySelector('dc-ui-selector + *');
    el.addEventListener('click', evt => {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      this.selectedComponent$.next({uiModel, cssPath: getCssPath(el, this.container.nativeElement)});
      this.selectCurrentComponent();
    });
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    el.appendChild(domElem);
    this.controls.push(componentRef);
  }

  deselect() {
    const active = this.container.nativeElement.querySelector(`.${ACTIVE_CLASS}`);
    if (active) {
      active.classList.remove(ACTIVE_CLASS);
    }
  }

  /**
   * Adds selected active class to current component.
   * setTimout is used to handle component rerender case. after uiModel update.
   */
  selectCurrentComponent(i = 0): Promise<HTMLElement> {
    return new Promise((resolve) => {
      if (this.selectedComponent) {
        this.deselect();
        const el = this.container.nativeElement.querySelector(this.selectedComponent.cssPath);
        if (el) {
          el.classList.add(ACTIVE_CLASS);
          resolve(el);
        } else if (i < 20) {
          setTimeout(() => {
            return this.selectCurrentComponent(i + 1);
          }, 2e1);
        }
      }
    });
  }

  private initDrake(elements) {
    this.selectedComponent = null;
    this.drake = dragula(elements, {
      moves: (el, container, handle: HTMLElement): boolean => {
        return this.isMoveElement(handle);
      },
      direction: 'horizontal',
    });

    // TODO: Clean up callback.
    this.drake.on('drop', (el: Element, target: Element, source: Element) => {
      let item: UIModel;

      if (target.id === 'empty-container') {
        this.uiModel = JSON.parse(JSON.stringify(this.containerUIModelMap.get(el.id)));
      } else {
        const targetModel = this.containerUIModelMap.get(target.id);
        if (!targetModel) {
          return null;
        }
        this.dropIndex = this.domIndexOf(el, target);
        if (el.id) {
          item = JSON.parse(JSON.stringify(this.containerUIModelMap.get(el.id)));
          targetModel.splice(this.dropIndex, 0, item);
          const targetPath = getCssPath(target, this.container.nativeElement);
          const itemPath = `${targetPath}>*:nth-child(${this.dropIndex + 1}) > dc-ui-selector + *`;
          this.selectedComponent$.next({uiModel: item, cssPath: itemPath});
          // Select component after being rerendered.
          this.selectCurrentComponent();
        } else {
          const sourceModel = this.containerUIModelMap.get(source.id);
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

  private domIndexOf(child: any, parent: Element): any {
    return Array.from(parent.children).filter(c => c.tagName !== 'DC-CONTROL-EDITOR').indexOf(child);
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
