import { Component, OnInit, HostBinding } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-container',
  template: `
    <dc-container-row *ngFor="let item of uiModel.children" [ngStyle]="getStyles(item.itemProperties)"
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
export class ContainerComponent extends BaseUIComponent<BSContainerProperties> implements OnInit {
  @HostBinding('class.container') isContainer = true;
  @HostBinding('class.container-fluid') isFluidContainer = false;
  @HostBinding('style.height') height = 'auto';
  @HostBinding('attr.drop-container') dropContainer = true;

  async ngOnInit() {
    await super.ngOnInit();
    if (this.properties.fullWidth) {
      this.isFluidContainer = true;
      this.isContainer = false;
    }

    if (this.properties.height) {
      this.height = this.properties.height;
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

export const example: ComponentExample<UIModel<BSContainerProperties>> = {
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
          label: 'Input-2',
          placeholder: 'Name second section',
          dataModelPath: '$.second'
        }
      }]
    }, {
      type: 'bootstrap:bs-row',
      children: [{
        type: 'bootstrap:text-input',
        containerProperties: {},
        itemProperties: {
          label: 'Input-11',
          placeholder: 'Name third section',
          dataModelPath: '$.third'
        }
      }, {
        type: 'bootstrap:text-input',
        containerProperties: {},
        itemProperties: {
          label: 'Input-22',
          placeholder: 'Name fourth section',
          dataModelPath: '$.forth'
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
  label: 'Container',
  packageName,
  category: Categories.Containers,
  description: 'Bootstrap container',
  itemProperties: BSContainerProperties,
  component: ContainerComponent,
  example,
  defaultModel: {
    type: 'bootstrap:container',
    containerProperties: {
      height: '100%',
      width: '100%'
    },
    itemProperties: {
      height: '100%',
      width: '100%'
    },
    children: []
  }
};
