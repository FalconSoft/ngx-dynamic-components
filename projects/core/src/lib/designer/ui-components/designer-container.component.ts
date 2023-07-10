import { Component, Injector } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { RendererService } from '../../services/renderer.service';
import { ComponentDescriptor } from '../../models';
import { ContainerComponent, containerDescriptor, divDescriptor } from '../../ui-components/container/container.component';
import { ContainerProperties } from '../../properties';

@Component({
  selector: 'dc-container',
  template: `
    <ng-container #vc></ng-container>
    {{properties.text}}
  `,
  styles: [
    `
      :host:not(.row):not(.input-group) {
        display: block;
      }
    `,
  ],
  hostDirectives: [CdkDropList, CdkDrag],
})
export class DesignerContainerComponent extends ContainerComponent {
  constructor(protected rendererService?: RendererService, public injector?: Injector) {
    super(rendererService, injector);
    if (injector) {
      injector.get(CdkDropList, null, {
        self: true,
      }).disabled = true;
    }
  }
}

type ContainerComponentConstrutor = new () => DesignerContainerComponent;

type ContainerPropertiesConstrutor = new () => ContainerProperties;

export const designerContainerDescriptor: ComponentDescriptor<ContainerComponentConstrutor, ContainerPropertiesConstrutor> = {
  ...containerDescriptor,
  component: DesignerContainerComponent
};

export const designerDivDescriptor: ComponentDescriptor<ContainerComponentConstrutor, ContainerPropertiesConstrutor> = {
  ...divDescriptor,
  component: DesignerContainerComponent
};
