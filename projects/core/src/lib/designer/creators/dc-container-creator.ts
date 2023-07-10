import { ViewContainerRef } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import { UIModel } from '../../models';
import { UIComponent } from '../designer-renderer.service';
import { BaseDynamicComponent } from '../../components/base-dynamic-component';
import { DcCreator } from './dc-creator';

export class DcContainerCreator extends DcCreator {

  dropped$ = new Subject<CdkDragDrop<Array<any>>>();

  constructor(
    parentComponent: UIComponent,
    uiModel: UIModel,
    containerRef: ViewContainerRef,
    dataModel: any,
    index: number
  ) {
    super(parentComponent, uiModel, containerRef, dataModel, index);
    this.initDrop(this.component);
  }

  deselectComponent(): void {
    super.deselectComponent();
    this.drop.element.nativeElement.classList.remove('selected-container');
    this.drop.disabled = true;
  }

  selectComponent(): void {
    this.selected$.next(this.component);
    this.drop.disabled = false;
    this.drop.element.nativeElement.classList.add('selected-container');
    this.component.children?.filter(child => child.injector).forEach((child) => {
      child.injector.get(CdkDrag).disabled = false;
    });
  }

  get drop(): CdkDropList {
    return this.component.injector.get(CdkDropList, null, {
      self: true
    });
  }

  private initDrop(component: BaseDynamicComponent): void {
    try {
      this.drop.element.nativeElement.onclick = (evt) => {
        evt.stopPropagation();
        this.selectComponent();
      };

      this.drop.orientation = this.isHorizontal(component) ? 'horizontal' : 'vertical';

      this.drop.dropped.subscribe((event: CdkDragDrop<Array<any>>) => {
        if (event.previousContainer === event.container && event.previousIndex === event.currentIndex) {
          return;
        }
        this.dropped$.next(event);
      });
    } catch (e) {
      console.log(component.uiModel.type, e.message);
    }
  }

  private isHorizontal(component: BaseDynamicComponent): boolean {
    const cssClass = component.properties.class;
    return cssClass?.includes('row') && !cssClass?.includes('flex-column');
  }
}
