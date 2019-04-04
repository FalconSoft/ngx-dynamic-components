import { Injectable, ApplicationRef, Injector, EmbeddedViewRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { dragula } from 'ng2-dragula';
import { UIModel } from '@ngx-dynamic-components/core';
import { Subject } from 'rxjs';
import { ControlEditorComponent } from '../components/control-editor/control-editor.component';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  private dragIndex = 0;
  private dropIndex = 0;

  uiModel: UIModel;

  drake;

  uiModelUpdates$ = new Subject<UIModel>();

  controls: ComponentRef<ControlEditorComponent>[] = [];

  public init(elements, uiModel: UIModel) {
    const arrElements = Array.from(elements);
    this.uiModel = uiModel;

    if (!this.drake) {
      this.initDrake(arrElements);
    } else {
      this.drake.containers = arrElements;
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

  private initEditor() {
    this.cleanUpEditor();
    this.drake.containers.forEach((container, index) => {
      this.getContainerItems(container).forEach((element, i) => {
        const uiModel = this.getChildrenByIndex(this.uiModel.children, index)[i];
        this.appendControlEditor(element as HTMLElement, uiModel);
      });
    });
  }

  private getContainerItems(container: HTMLElement): Element[] {
    return Array.from(container.children).filter(item => item.tagName !== 'DC-CONTROL-EDITOR');
  }

  appendControlEditor(element: HTMLElement, uiModel: UIModel) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ControlEditorComponent)
      .create(this.injector);

    componentRef.instance.uiModel = uiModel;
    componentRef.instance.uiModelChanged.subscribe(() => {
      this.uiModelUpdates$.next(uiModel);
    });

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    element.appendChild(domElem);
    this.controls.push(componentRef);
  }

  private initDrake(elements) {
    this.drake = dragula(elements, {
      moves: (el, container, handle: HTMLElement): boolean => {
        return this.isMoveElement(handle);
      }
    });

    this.drake.on('drop', (el: Element, target: Element, source: Element) => {
      const sourceModel = this.getChildrenByIndex(this.uiModel.children, this.drake.containers.indexOf(source));
      const targetModel = this.getChildrenByIndex(this.uiModel.children, this.drake.containers.indexOf(target));

      this.dropIndex = this.domIndexOf(el, target);

      let item: UIModel;
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

      setTimeout(() => this.uiModelUpdates$.next(item));
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
  private getChildrenByIndex(children: UIModel[], index = 0, currentIndex = 0): UIModel[] {
    if (index === 0) {
      return children;
    }

    for (const m of children) {
      if (m.children) {
        if (index === ++currentIndex) {
          return m.children;
        }
      }
    }

    for (const m of children) {
      if (m.children) {
        return this.getChildrenByIndex(children, index, currentIndex);
      }
    }
  }

  private domIndexOf(child: any, parent: any): any {
    return Array.from(parent.children).indexOf(child);
  }

  private isMoveElement(el: HTMLElement): boolean {
    let isMoveEl = false;
    let dragEl = el;

    while (!isMoveEl && dragEl.parentNode) {
      dragEl = dragEl.parentNode as HTMLElement;
      isMoveEl = dragEl.classList && dragEl.classList.contains('handle');
    }
    return isMoveEl;
  }
}
