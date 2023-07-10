import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DesignerComponent } from './components/designer/designer.component';
import { NGXDynamicDesignerComponent } from './components/ngx-dynamic-designer-component';
import { DesignerRendererService } from './designer-renderer.service';
import { DynamicComponentsCoreModule } from '../core.module';
import { CommonModule } from '@angular/common';
import { DraggableComponent } from './components/draggable-component';
import { ComponentPropertiesComponent } from './components/designer/component-properties/component-properties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreService } from '../services/core.service';
import { DesignerFormComponent, designerFormDescriptor } from './ui-components/designer-form.component';
import {
  DesignerContainerComponent,
  designerContainerDescriptor,
  designerDivDescriptor
} from './ui-components/designer-container.component';
import {
  DesignerLinkComponent,
  designerButtonDescriptor,
  designerInputDescriptor,
  designerLabelDescriptor,
  designerLinkDescriptor,
  designerSelectDescriptor,
  designerTextAreaDescriptor
} from './ui-components';

@NgModule({
  declarations: [
    DesignerComponent,
    NGXDynamicDesignerComponent,
    DraggableComponent,
    ComponentPropertiesComponent,
    DesignerFormComponent,
    DesignerContainerComponent,
    DesignerLinkComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DragDropModule, AccordionModule, DynamicComponentsCoreModule],
  exports: [NGXDynamicDesignerComponent, DesignerComponent],
  providers: [DesignerRendererService],
})
export class DesignerModule {
  constructor() {
    [
      designerFormDescriptor,
      designerContainerDescriptor,
      designerDivDescriptor,
      designerButtonDescriptor,
      designerInputDescriptor,
      designerLabelDescriptor,
      designerTextAreaDescriptor,
      designerSelectDescriptor,
      designerLinkDescriptor
    ].forEach(descriptor => CoreService.registerComponent(descriptor, 'designer'));
  }
}
