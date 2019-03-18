import { Component, OnInit } from '@angular/core';
import { EXAMPLES_LIST } from '../examples.config';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WorkflowEngine } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-static-example',
  template: `
    <ng-container *ngIf="ex">
    <dc-ui-selector #dynamicComponent
      [uiModel]='ex.uiModel'
      [dataModel]='ex.dataModel'
      [workflowEngine]='ex.workflowEngine'></dc-ui-selector>
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
export class StaticExampleViewComponent implements OnInit {
  example: Observable<any>;

  ex;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

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

    this.example.subscribe(e => this.ex = e);

    this.route.params.subscribe(({example}) => {
      if (!example) {
        // Redirect to first example if it is not selected.
        this.router.navigate(['static/examples', EXAMPLES_LIST[0].name]);
      }
    });
  }
}
