import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { UIModel, ComponentDescriptor } from '../../models';
import { WorkflowConfig } from '../../workflow/workflow.processor';
import { CoreService } from '../../services/core.service';
import { DragDropService } from '../../services/drag-drop.service';

@Component({
  selector: 'ngx-designer-component', // tslint:disable-line
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit, AfterViewInit {

  @Input() uiModel: UIModel;
  @Input() workflow: WorkflowConfig;
  workflowConfig: WorkflowConfig = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: [],
    consts: {}
  };
  uiModelVal: UIModel;
  components: Array<ComponentDescriptor> = [];
  constructor(private container: ElementRef, private dragDropService: DragDropService) { }

  ngOnInit() {
    this.uiModelVal = this.uiModel;
    this.components = CoreService.getListOfComponents();
    this.dragDropService.uiModelUpdates$.subscribe(uiModel => {
      setTimeout(() => {
        this.uiModelVal = uiModel;
        setTimeout(() => {
          this.dragDropService.init(this.container, this.uiModelVal);
        });
      });
      this.uiModelVal = null;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dragDropService.init(this.container, this.uiModelVal);
    });
  }
}
