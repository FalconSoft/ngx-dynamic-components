import { Component, OnInit } from '@angular/core';
import { EXAMPLES_LIST } from '../examples.config';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WorkflowEngine } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-example',
  template: `
    <ng-container *ngIf="example | async as ex">
      <dc-preview-editor
          #editor
          [title]="ex.name"
          [initUiModel]="ex.uiModel"
          [initDataModel]="ex.dataModel"
          [workflowEngine]="ex.workflowEngine"></dc-preview-editor>
      <h3 class="">Data Model: </h3>
      <div dcJsonFormatter [json]="editor.dataModel$ | async"></div>
    </ng-container>
  `,
  styles: [`
    :host {
      padding: 25px;
      flex-grow: 1;
      display: flex;
      min-height: 1200px;
    }
    dc-preview-editor ::ng-deep .mat-tab-body-wrapper {
      min-height: 400px;
    }
  `]
})
export class ExampleViewComponent implements OnInit {
  example: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.example = this.route.params
      .pipe(
        filter(p => p.example),
        map(p => {
          const config = EXAMPLES_LIST.find(({name}) => p.example === name);
          const wfConfig = config.workflowConfig;
          wfConfig.vars.uiModel = config.uiModel;
          wfConfig.vars.dataModel = config.dataModel;
          (config as any).workflowEngine = new WorkflowEngine(wfConfig);
          return config;
        }));

    this.route.params.subscribe(({example}) => {
      if (!example) {
        // Redirect to first example if it is not selected.
        this.router.navigate(['examples', EXAMPLES_LIST[0].name]);
      }
    });
  }
}
