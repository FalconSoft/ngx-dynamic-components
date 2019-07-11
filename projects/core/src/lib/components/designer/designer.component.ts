import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UIModel } from '../../models';
import { WorkflowConfig } from '../../workflow/workflow.processor';
import { DragDropService } from '../../services/drag-drop.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ControlsPanelComponent } from '../controls-panel/controls-panel.component';

@Component({
  selector: 'ngx-designer-component', // tslint:disable-line
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit, AfterViewInit {

  @Input() uiModel: UIModel;
  @Input() workflow: WorkflowConfig;
  @Output() uiModelUpdated = new EventEmitter<UIModel>();
  @ViewChild('tabset', {static: false}) tabset: TabsetComponent;
  @ViewChild('controlsPanel', {static: false}) controlsPanel: ControlsPanelComponent;

  uiModelToEdit: UIModel;
  workflowConfig: WorkflowConfig = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: [],
    consts: {}
  };
  uiModelVal: UIModel;

  constructor(private container: ElementRef, private dragDropService: DragDropService) { }

  ngOnInit() {
    this.uiModelVal = this.uiModel;
    this.dragDropService.uiModelUpdates$.subscribe(uiModel => {
      setTimeout(() => {
        this.uiModelVal = uiModel;
        this.uiModelUpdated.emit(uiModel);
        this.controlsPanel.initGroups();
        setTimeout(() => {
          this.dragDropService.init(this.container, this.uiModelVal);
        });
      });
      this.uiModelVal = null;
    });

    this.dragDropService.selectedComponent$.subscribe(uiModel => {
      this.uiModelToEdit = uiModel;
      window.requestAnimationFrame(() => {
        try {
          this.tabset.tabs[1].active = true;
        } catch (e) {
          console.error(e);
        }
      });
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dragDropService.init(this.container, this.uiModelVal);
    });
  }

  onComponentsTabSelect() {
    this.uiModelToEdit = null;
    this.dragDropService.deselect();
  }

  onPropertyChange() {
    this.uiModelVal = null;
    window.requestAnimationFrame(() => {
      this.uiModelVal = this.uiModel;
      setTimeout(() => {
        this.dragDropService.init(this.container, this.uiModelVal);
      });
    });
  }
}
