import { Subject } from 'rxjs';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { BaseDynamicComponent } from '../../components/base-dynamic-component';
import { UIComponent } from '../designer-renderer.service';
import { ComponentDescriptor, ComponentEvent, UIModel } from '../../models';
import { NGXDynamicDesignerComponent } from '../components/ngx-dynamic-designer-component';
import { CoreService } from '../../services/core.service';

export abstract class ComponentCreator {
  component: BaseDynamicComponent;
  selected$ = new Subject<BaseDynamicComponent>();

  protected descriptor: ComponentDescriptor;

  constructor(
    private parentComponent: UIComponent,
    private uiModel: UIModel
  ) {
      this.descriptor = CoreService.getComponentDescriptor(this.uiModel.type, 'designer');
  }

  abstract deselectComponent(): void;

  abstract selectComponent(): void;

  abstract get drag(): CdkDrag;

  protected initComponentProps(): void {
    const component = this.component;
    component.parent = this.parentComponent as BaseDynamicComponent;
    component.element.classList.add('dc-element');
    component.uiModel.getComponent = () => component;
    component.changedDataModel.subscribe((evt) => {
      this.parentComponent.changedDataModel.emit(evt);
    });
    component.eventHandlers.subscribe((evt: ComponentEvent) => {
      if (this.parentComponent instanceof NGXDynamicDesignerComponent) {
        evt.rootUIModel = this.parentComponent.uiModel;
      }
      this.parentComponent.eventHandlers.emit(evt);
    });
  }
}
