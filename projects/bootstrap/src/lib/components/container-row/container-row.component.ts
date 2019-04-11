import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-container-row',
  template: `
    <div *ngFor="let item of uiModel.children" class="col-sm" [ngStyle]="getStyles(item.containerProperties)">
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

export const example: ComponentExample<UIModel<BSContainerRowProperties>> = {
  title: 'Bootstrap container row example',
  uiModel: {
    type: 'bootstrap:bs-row',
    containerProperties: {
      width: '100%'
    },
    itemProperties: {
      width: '50%',
      padding: '10px'
    },
    children: [{
      type: 'bootstrap:text-input',
      containerProperties: {},
      itemProperties: {
        label: 'Input-1',
        placeholder: 'Name first section',
        dataModelPath: '$.first'
      }
    }, {
      type: 'bootstrap:text-input',
      containerProperties: {},
      itemProperties: {
        label: 'Input2',
        placeholder: 'Name second section',
        dataModelPath: '$.second'
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
