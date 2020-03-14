import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { COMPONENTS_LIST } from '../utils';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'dc-example',
  template: `
    <div *ngIf="component" class="static-padding">
      <h1 class="mat-h1">{{component.name}}</h1>
      <h3 class="mat-h3">{{component.description}}</h3>
      <ng-container *ngIf="!loading && component.example as ex">
        <dc-preview-editor
          [title]="ex.title"
          [scripts]="ex.scripts"
          [initUiModel]="ex.uiModel"
          [initDataModel]="ex.dataModel"></dc-preview-editor>
      </ng-container>
      <dc-item-properties *ngIf="!loading" [component]="component"></dc-item-properties>
    </div>
  `,
  styles: [`
    dc-item-properties {
      margin-top: 1em;
      display: block;
    }
  `]
})
export class ComponentPageComponent implements OnInit, OnDestroy {

  component: ComponentDescriptor;
  private destroy = new Subject();
  loading = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy),
    tap(() => {
      if (this.component) {
        this.loading = true;
      }
    }), debounceTime(1)).subscribe(p => {
      this.component = COMPONENTS_LIST.find(c => c.name === p.component && c.packageName === p.packageName);
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
