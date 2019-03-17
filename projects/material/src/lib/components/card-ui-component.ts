import { Component } from '@angular/core';
import { BaseUIComponent, AttributesMap, UIModel, ComponentDescriptor,
  propDescription, StyleProperties, ComponentExample } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-card',
  template: `<mat-card [ngStyle]="itemStyles">
    <ng-container *ngIf="uiModel.itemProperties.header as header">
      <ng-container [ngSwitch]="getHeaderType(header)">
        <mat-card-header *ngSwitchCase="'component'">
          <dc-ui-selector
            [uiModel]='header.item'
            [dataModel]='header.dataModel'
            [workflowEngine]='header.workflowEngine'></dc-ui-selector>
            <ng-container *ngTemplateOutlet="headerTitle"></ng-container>
        </mat-card-header>

        <mat-card-header *ngSwitchCase="'html'">
          <div *ngIf="header.html" [innerHTML]="header.html"></div>
          <ng-container *ngTemplateOutlet="headerTitle"></ng-container>
        </mat-card-header>

        <mat-card-header *ngSwitchDefault>
          <ng-container *ngTemplateOutlet="headerTitle"></ng-container>
        </mat-card-header>

        <ng-template #headerTitle>
          <mat-card-title *ngIf="header.title">{{header.title}}</mat-card-title>
          <mat-card-subtitle *ngIf="header.subTitle">{{header.subTitle}}</mat-card-subtitle>
        </ng-template>
      </ng-container>
    </ng-container>

    <img *ngIf="uiModel.itemProperties.img as img" [src]="img" mat-card-image/>
    <ng-container *ngIf="uiModel.itemProperties.content as contentUIModel">
      <mat-card-content>
        <dc-ui-selector
            (changedDataModel)="changedDataModel.emit(this.dataModel)"
            [uiModel]='contentUIModel'
            [dataModel]='dataModel'
            [workflowEngine]='workflowEngine'></dc-ui-selector>
      </mat-card-content>
    </ng-container>
  </mat-card>`,
  styles: [`
      mat-card-header ::ng-deep .mat-card-header-text {
        margin: 0;
      }
  `]
})

export class CardUIComponent extends BaseUIComponent<CardProperties> {
  getHeaderType(content: HeaderConfig) {
    if (content.item) {
      return 'component';
    }

    if (content.html) {
      return 'html';
    }
  }
}

interface HeaderConfig {
  item?: UIModel;
  dataModel?: any;
  html?: string;
  title?: string;
}

export class CardProperties extends StyleProperties {
  @propDescription({
    description: 'Card header component',
    example: '<h1>Header title</h1>',
  })
  header: HeaderConfig;

  @propDescription({
    description: 'Card content component.',
    example: `{
      type: 'text',
      containerProperties: {},
      itemProperties: {
          text: 'Card content text',
          width: '50%'
      }
    },`,
  })
  content: AttributesMap;

  @propDescription({
    description: 'Card image url',
    example: 'logo.png',
  })
  img?: string;
}

const example: ComponentExample<UIModel<CardProperties>> = {
  title: 'Card panel example',
  uiModel: {
    type: 'material:card',
    containerProperties: {},
    itemProperties: {
      padding: '20px',
      height: '200px',
      width: '50%',
      header: {
        title: 'Profile form'
      },
      content: {
        type: 'material:text',
        containerProperties: {},
        itemProperties: {
          text: 'Card content text',
          width: '50%'
        }
      }
    }
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
