import { Component, OnInit, Input } from '@angular/core';
import { WorkflowConfig, WorkflowEngine } from '../workflow/workflow.processor';
import { UIModel } from '../models';

@Component({
    selector: 'ngx-dynamic-component', // tslint:disable-line
    template: `
    <dc-ui-selector
        [uiModel]='uiModel'
        [dataModel]='dataModel'
        [workflowEngine]='workflowEngine'>
    </dc-ui-selector>
      `
})
export class NGXDynamicComponent implements OnInit {
    @Input() workflow: WorkflowConfig;
    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>;

    workflowEngine: WorkflowEngine = null;

    async ngOnInit(): Promise<void> {
        this.workflow.vars.uiModel = this.uiModel;
        this.workflow.vars.dataModel = this.dataModel;
        this.workflowEngine = new WorkflowEngine(this.workflow);
    }
}
