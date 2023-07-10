import { Component, Input, EventEmitter, Output, ViewContainerRef,
  ViewChild, Injector } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { RendererService } from '../../services/renderer.service';
import { DesignerRendererService } from '../designer-renderer.service';
import { NGXDynamicComponent } from '../../components/ngx-dynamic-component';
import { ComponentEvent, UIModel } from '../../models';
import { CoreService } from '../../services/core.service';
import { DcContainerCreator } from '../creators/dc-container-creator';

@Component({
    selector: 'ngx-dynamic-designer-component', // eslint-disable-line
    template: '<ng-container #vc></ng-container>',
    providers: [{
      provide: RendererService,
      useClass: DesignerRendererService
    }],
})
export class NGXDynamicDesignerComponent extends NGXDynamicComponent {

    @Input() dataModel: any;
    @Input() xmlUIModel: string;
    @Output() render = new EventEmitter<UIModel>();
    @Output() changedDataModel = new EventEmitter();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();
    @ViewChild('vc', {read: ViewContainerRef, static: true}) containerRef: ViewContainerRef;

    dropList$: Observable<CdkDropList[]>;
    uiModel: UIModel;

    constructor(public rendererService: RendererService, public injector?: Injector) {
      super(rendererService, injector);

      this.dropList$ = (this.rendererService as DesignerRendererService).selectedCreator$.pipe(
        map(creator => {
          if (creator instanceof DcContainerCreator) {
            return [creator.drop];
          }
        })
      );
    }

    clear(): void {
      this.containerRef.clear();
      this.xmlUIModel = '<div class="container h-100"></div>';
      this.initParsedModel(this.xmlUIModel);
    }

    protected initParsedModel(uiModel: string): void {
      try {
        this.uiModel = CoreService.parseXMLModel(uiModel, 'designer');
        if (this.uiModel) {
          this.rendererService.createComponent(this as unknown as NGXDynamicComponent, this.uiModel);
        }
      } catch (e) {
        this.uiModel = null;
        this.eventHandlers.emit({
          eventHandler: 'parseError',
          eventName: 'error',
          parameters: {
            uiModel: this.uiModel,
            error: e,
          }});
      }
    }

    // private getDropLists(component: BaseDynamicComponent): CdkDropList[] {
    //   let dropList = [component.injector?.get(CdkDropList)];
    //   component.children?.forEach((childItem) => { dropList = dropList.concat(this.getDropLists(childItem)); });
    //   return dropList.sort((a, b) => b.id.localeCompare(a.id));
    // }

    // private getIdsRecursive(component: BaseDynamicComponent): string[] {
    //   let ids = [component.injector?.get(CdkDropList).id];
    //   component.children?.forEach((childItem) => { ids = ids.concat(this.getIdsRecursive(childItem)); });
    //   return ids.filter(id => !!id);
    // }

    // private getComponentsList(component: BaseDynamicComponent): BaseDynamicComponent[] {
    //   let components = [component];
    //   component.children?.forEach((childItem) => { components = components.concat(this.getComponentsList(childItem)); });
    //   return components;
    // }
}
