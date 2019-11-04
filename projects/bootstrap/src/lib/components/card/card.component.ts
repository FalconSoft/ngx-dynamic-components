import { Component } from '@angular/core';
import { BaseUIComponent, UIModel, ComponentDescriptor,
  propDescription, ContainerProperties, ComponentExample, getItemByIndex, AttributesMap, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-card',
  template: `
  <div class="card">
    <div class="card-header" *ngIf="header">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(this.dataModel)"
        [uiModel]='header'
        [dataModel]='dataModel'
        [interpreter]='interpreter'
        [scripts]='scripts'></dc-ui-selector>
    </div>
    <div class="card-body" *ngIf="content">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(this.dataModel)"
        [uiModel]='content'
        [dataModel]='dataModel'
        [interpreter]='interpreter'
        [scripts]='scripts'></dc-ui-selector>
    </div>
    <div class="card-footer" *ngIf="footer">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(this.dataModel)"
        [uiModel]='footer'
        [dataModel]='dataModel'
        [interpreter]='interpreter'
        [scripts]='scripts'></dc-ui-selector>
    </div>
  </div>`,
})

export class CardComponent extends BaseUIComponent<CardProperties> {
  get header() {
    return this.getChildByIndex(0);
  }

  get content() {
    return this.getChildByIndex(1);
  }

  get footer() {
    return this.getChildByIndex(2);
  }

  private getChildByIndex(index: number): UIModel<AttributesMap> {
    return getItemByIndex(this.uiModel.children, index);
  }
}

export class CardProperties extends ContainerProperties {
  @propDescription({
    description: 'Card can have 3 children, 1 - header, 2 - content, 3 - footer.',
    example: `[null, {
      type: 'material:text',
      containerProperties: {},
      itemProperties: {
        text: 'Card content text',
      }
    }, null]`,
  })
  children?: [];
}

const example: ComponentExample<UIModel<CardProperties>> = {
  title: 'Card panel example',
  uiModel: {
    type: 'bootstrap:card',
    containerProperties: {},
    itemProperties: {
      padding: '10px',
      margin: '10px auto',
      width: '80%'
    },
    children: [{
      type: 'material:text',
      containerProperties: {},
      itemProperties: {
        text: 'Card header text',
        width: '100%'
      }
    }, {
      type: 'material:textarea',
      containerProperties: {
        width: '100%',
      },
      itemProperties: {
        rows: 4,
        placeholder: 'Type card information',
        dataModelPath: '$.card/info'
      }
    }, {
      type: 'bootstrap:button',
      containerProperties: {},
      itemProperties: {
        label: 'Submit',
        margin: '16px',
        width: '50%',
        clickActionKey: 'consoleLog'
      }
    }]
  },
  dataModel: {}
};

interface CardComponentConstrutor {
  new (): CardComponent;
}

interface CardPropertiesConstrutor {
  new (): CardProperties;
}

export const cardDescriptor: ComponentDescriptor<CardComponentConstrutor, CardPropertiesConstrutor> = {
  name: 'card',
  label: 'Card',
  packageName,
  category: Categories.Containers,
  description: 'Card layout component',
  itemProperties: CardProperties,
  component: CardComponent,
  example
};
