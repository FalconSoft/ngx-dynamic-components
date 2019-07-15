import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample, Categories } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-container-row',
  template: `
    <div *ngFor="let item of uiModel.children" class="col" [ngStyle]="getStyles(item.containerProperties)"
      [ngClass]="item.containerProperties?.bsClasses">
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
  @HostBinding('attr.drop-container') dropContainer = true;

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
    containerProperties: {},
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
  label: 'Row',
  packageName: 'bootstrap',
  category: Categories.Containers,
  description: 'Bootstrap row container',
  itemProperties: BSContainerRowProperties,
  component: ContainerRowComponent,
  example,
  defaultModel: {
    type: 'bootstrap:bs-row',
    containerProperties: {},
    itemProperties: {
      height: '100px',
      width: '100%'
    },
    children: []
  }
};
