import { Component, Injector } from '@angular/core';
import { RendererService } from '../../services/renderer.service';
import { FormComponent, FormProperties, formDescriptor } from '../../ui-components/form/form.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ComponentDescriptor } from '../../models';

@Component({
  selector: 'dc-form',
  template: `
    <form novalidate [ngStyle]="itemStyles">
      <ng-container #vc></ng-container>
    </form>
  `,
  hostDirectives: [CdkDropList, CdkDrag],
})
export class DesignerFormComponent extends FormComponent {
  constructor(protected rendererService?: RendererService, public injector?: Injector) {
    super(rendererService, injector);
    if (injector) {
      injector.get(CdkDropList, null, {
        self: true,
      }).disabled = true;
    }
  }
}

type FormComponentConstrutor = new () => DesignerFormComponent;

type FormPropertiesConstrutor = new () => FormProperties;

export const designerFormDescriptor: ComponentDescriptor<FormComponentConstrutor, FormPropertiesConstrutor> = {
  ...formDescriptor,
  component: DesignerFormComponent
};
