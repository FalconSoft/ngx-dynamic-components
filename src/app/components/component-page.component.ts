import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor, WorkflowEngine } from '@ngx-dynamic-components/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'dc-example',
  template: `
    <div *ngIf="component$ | async as component" class="static-padding">
      <h1 class="mat-h1">{{component.name}}</h1>
      <h3 class="mat-h3">{{component.description}}</h3>
      <ng-container *ngIf="component.example as ex">
        <dc-preview-editor
          [title]="ex.title"
          [workflowEngine]="ex.workflowEngine"
          [initUiModel]="ex.uiModel"
          [initDataModel]="ex.dataModel"></dc-preview-editor>
      </ng-container>
      <dc-item-properties [component$]="component$"></dc-item-properties>
    </div>
  `,
  styles: [`
    dc-item-properties {
      margin-top: 1em;
      display: block;
    }
  `]
})
export class ComponentPageComponent implements OnInit {

  component$: Observable<ComponentDescriptor>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.component$ = this.route.params.pipe(map(p => {
      const component = COMPONENTS_LIST.find((c: ComponentDescriptor) => c.name === p.component);
      const config = component.example;
      const wfConfig: any = {include: ['@common'], vars: {}};
      wfConfig.vars.uiModel = config.uiModel;
      wfConfig.vars.dataModel = config.dataModel;
      (config as any).workflowEngine = new WorkflowEngine(wfConfig);
      return component;
     }));
  }
}
