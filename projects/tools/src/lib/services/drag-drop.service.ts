import { Injectable } from '@angular/core';

import { dragula } from 'ng2-dragula';
import { UIModel } from '@ngx-dynamic-components/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor() { }

  private dragIndex = 0;
  private dropIndex = 0;

  uiModel: UIModel;

  drake;

  drop$ = new Subject<UIModel>();

  public init(elements, uiModel: UIModel) {
    const arrElements = Array.from(elements);
    this.uiModel = uiModel;

    if (!this.drake) {
      this.initDrake(arrElements);
    } else {
      this.drake.containers = arrElements;
    }
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

      setTimeout(() => this.drop$.next(item));
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
