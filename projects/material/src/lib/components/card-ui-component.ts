import { Component } from '@angular/core';
import { BaseUIComponent, UIModel, ComponentDescriptor,
  propDescription, ContainerProperties, ComponentExample, getItemByIndex } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-card',
  template: `
  <mat-card [ngStyle]="itemStyles">
    <mat-card-header *ngIf="header">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(this.dataModel)"
        [uiModel]='header'
        [dataModel]='dataModel'
        [workflowEngine]='workflowEngine'></dc-ui-selector>
        <ng-container *ngTemplateOutlet="headerTitle"></ng-container>
    </mat-card-header>
    <ng-template #headerTitle>
      <mat-card-title *ngIf="properties.title">{{properties.title}}</mat-card-title>
      <mat-card-subtitle *ngIf="properties.subTitle">{{properties.subTitle}}</mat-card-subtitle>
    </ng-template>

    <img *ngIf="properties.img as img" [src]="img" mat-card-image/>
    <mat-card-content *ngIf="content">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(this.dataModel)"
        [uiModel]='content'
        [dataModel]='dataModel'
        [workflowEngine]='workflowEngine'></dc-ui-selector>
    </mat-card-content>
    <mat-card-footer *ngIf="footer">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(this.dataModel)"
        [uiModel]='footer'
        [dataModel]='dataModel'
        [workflowEngine]='workflowEngine'></dc-ui-selector>
    </mat-card-footer>
  </mat-card>`,
  styles: [`
      mat-card-header ::ng-deep .mat-card-header-text {
        margin: 0;
      }
  `]
})

export class CardUIComponent extends BaseUIComponent<CardProperties> {
  get header() {
    return this.getChildByIndex(0);
  }

  get content() {
    return this.getChildByIndex(1);
  }

  get footer() {
    return this.getChildByIndex(2);
  }

  private getChildByIndex(index: number): UIModel {
    return getItemByIndex(this.uiModel.children, index);
  }
}

export class CardProperties extends ContainerProperties {
  @propDescription({
    description: 'Card image url',
    example: 'logo.png',
  })
  img?: string;

  title?: string;
  subTitle?: string;

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
    type: 'material:card',
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
      type: 'material:button',
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

interface CardUIComponentConstrutor {
  new (): CardUIComponent;
}

interface CardPropertiesConstrutor {
  new (): CardProperties;
}

export const cardDescriptor: ComponentDescriptor<CardUIComponentConstrutor, CardPropertiesConstrutor> = {
  name: 'card',
  packageName,
  category: Categories.Layout,
  description: 'Card layout component',
  itemProperties: CardProperties,
  component: CardUIComponent,
  example
};
