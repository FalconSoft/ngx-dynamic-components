import { Component, OnInit } from '@angular/core';
import { EXAMPLES_LIST } from '../examples.config';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
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
      min-height: 1000px;
    }
  `]
})
export class ExampleViewComponent implements OnInit {
  example: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.example = this.route.params
      .pipe(
        map(p => {
          const config = EXAMPLES_LIST.find(({name}) => p.example === name);
          const wfConfig = config.workflowConfig;
          wfConfig.vars.uiModel = config.uiModel;
          wfConfig.vars.dataModel = config.dataModel;
          (config as any).workflowEngine = new WorkflowEngine(wfConfig);
          return config;
        } ) );

    this.example.subscribe(ex => {
      if (!ex) {
        // Redirect to first example if it is not selected.
        this.router.navigate(['examples', EXAMPLES_LIST[0].name]);
      }
    });
  }
}
