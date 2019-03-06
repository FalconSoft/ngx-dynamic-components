import { Component, OnInit } from '@angular/core';
import { BaseUIComponent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-ui-card',
  template: `<mat-card>
    <ng-container *ngIf="uiModel.itemProperties.header as header">
      <ng-container [ngSwitch]="getContentType(header)">
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

export class CardUIComponent extends BaseUIComponent implements OnInit {
  getContentType(content) {
    if (content.item) {
      return 'component';
    }

    if (content.html) {
      return 'html';
    }

    if (typeof content === 'string') {
      return 'string';
    }
  }
}
