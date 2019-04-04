import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-container',
  template: `
    <dc-container-row *ngFor="let item of uiModel.children"
      (changedDataModel)="changedDataModel.emit($event)"
      [uiModel]='item'
      [dataModel]='dataModel'
      [workflowEngine]='workflowEngine'
    ></dc-container-row>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ContainerComponent extends BaseUIComponent<BSContainerProperties> {
  @HostBinding('class.container') isContainer = true;
  @HostBinding('class.container-fluid') isFluidContainer = false;

  async ngOnInit() {
    if (this.uiModel.itemProperties.fullWidth) {
      this.isFluidContainer = true;
      this.isContainer = false;
    }
  }
}

export class BSContainerProperties extends ContainerProperties {
  @propDescription({
    description: 'Is full width container, default false',
    example: 'true',
  })
  fullWidth?: boolean;
}

const example: ComponentExample<UIModel<BSContainerProperties>> = {
  title: 'Bootstrap container example',
  uiModel: {
    type: 'bootstrap:container',
    containerProperties: {
      width: '100%'
    },
    itemProperties: {
      width: '20%',
      padding: '10px'
    },
    children: [{
      type: 'bootstrap:bs-row',
      containerProperties: {
      },
      children: [{
        type: 'material:text',
        containerProperties: {
          fxFlex: '1 1 auto'
        },
        itemProperties: {
          text: 'Row 1 / Item 1',
        }
      }, {
        type: 'material:text',
        containerProperties: {
          fxFlex: '1 1 auto'
        },
        itemProperties: {
          text: 'Row 1 / Item 2',
        }
      }]
    }, {
      type: 'bootstrap:bs-row',
      containerProperties: {
      },
      children: [{
        type: 'material:text',
        containerProperties: {
          fxFlex: '1 1 auto'
        },
        itemProperties: {
          text: 'Row 2 / Item 1',
        }
      }, {
        type: 'material:text',
        containerProperties: {
          fxFlex: '1 1 auto'
        },
        itemProperties: {
          text: 'Row 2 / Item 2',
        }
      }]
    }]
  },
  dataModel: {}
};

interface ContainerComponentConstrutor {
  new (): ContainerComponent;
}

interface ContainerPropertiesConstrutor {
  new (): BSContainerProperties;
}

export const containerDescriptor: ComponentDescriptor<ContainerComponentConstrutor, ContainerPropertiesConstrutor> = {
  name: 'container',
  packageName: 'bootstrap',
  category: 'Layout',
  description: 'Bootstrap container',
  itemProperties: BSContainerProperties,
  component: ContainerComponent,
  example
};
