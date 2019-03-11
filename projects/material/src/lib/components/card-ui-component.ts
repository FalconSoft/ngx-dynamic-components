import { Component } from '@angular/core';
import { BaseUIComponent, AttributesMap, UIModel, ActionsContainer, ComponentDescriptor,
  propDescription } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
  selector: 'dc-ui-card',
  template: `<mat-card>
    <ng-container *ngIf="uiModel.itemProperties.header as header">
      <ng-container [ngSwitch]="getHeaderType(header)">
        <mat-card-header *ngSwitchCase="'component'">
          <dc-ui-selector
            [uiModel]='header.item'
            [dataModel]='header.dataModel'
            [actions]='header.actions'></dc-ui-selector>
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
            [uiModel]='contentUIModel'
            [dataModel]='dataModel'
            [actions]='actions'></dc-ui-selector>
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
  getHeaderType(content: HeaderConfig | string) {
    if (typeof content === 'string') {
      return 'string';
    }

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
  actions?: ActionsContainer;
  html?: string;
}

export class CardProperties implements AttributesMap {
  @propDescription({
    description: 'Card header component',
    example: '<h1>Header title</h1>',
  })
  header: HeaderConfig | string;

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
  img: string;
}

interface CardUIComponentConstrutor {
  new (): CardUIComponent;
}

interface CardPropertiesConstrutor {
  new (): CardProperties;
}

export const cardDescriptor: ComponentDescriptor<CardUIComponentConstrutor, CardPropertiesConstrutor> = {
  name: 'card',
  package: packageName,
  category: Categories.Layout,
  description: 'Card layout component',
  itemProperties: CardProperties,
  component: CardUIComponent
};
