import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-container-row',
  template: `
    <div *ngFor="let item of uiModel.children" class="col-sm p-4">
      <dc-ui-selector
          (changedDataModel)="changedDataModel.emit($event)"
          [uiModel]='item'
          [dataModel]='dataModel'
          [workflowEngine]='workflowEngine'
      ></dc-ui-selector>
    </div>
  `,
  styles: []
})
export class ContainerRowComponent extends BaseUIComponent<BSContainerRowProperties> {
  @HostBinding('class.row') readonly isRow = true;
}

export class BSContainerRowProperties extends ContainerProperties {

}

const example: ComponentExample<UIModel<BSContainerRowProperties>> = {
  title: 'Bootstrap container row example',
  uiModel: {
    type: 'bootstrap:bs-row',
    containerProperties: {
      width: '100%'
    },
    itemProperties: {
      width: '20%',
      padding: '10px'
    },
    children: [{
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 1',
      }
    }, {
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 2',
      }
    }]
  },
  dataModel: {}
};

interface ContainerRowComponentConstrutor {
  new (): ContainerRowComponent;
}

interface ContainerPropertiesConstrutor {
  new (): BSContainerRowProperties;
}

export const containerRowDescriptor: ComponentDescriptor<ContainerRowComponentConstrutor, ContainerPropertiesConstrutor> = {
  name: 'bs-row',
  packageName: 'bootstrap',
  category: 'Layout',
  description: 'Bootstrap row container',
  itemProperties: BSContainerRowProperties,
  component: ContainerRowComponent,
  example
};
