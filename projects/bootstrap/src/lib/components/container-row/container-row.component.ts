import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-container-row',
  template: `
    <div *ngFor="let item of uiModel.children" class="col" [ngStyle]="getStyles(item.containerProperties)" [ngClass]="bsClasses">
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
export class ContainerRowComponent extends BaseUIComponent<BSContainerRowProperties> implements OnInit {
  @HostBinding('class.row') readonly isRow = true;
  @HostBinding('class.flex-column') isColumn = false;
  get bsClasses() {
    if (this.properties) {
      return this.properties.bsClasses;
    }
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.isColumn = this.properties && this.properties.direction === 'column';
  }
}

export class BSContainerRowProperties extends ContainerProperties {
  @propDescription({
    description: 'Bootstrap row child classes',
    example: 'col-9'
  })
  bsClasses?: string[];

  @propDescription({
    description: 'Flex direction',
    example: 'column'
  })
  direction?: 'column' | 'row';
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
