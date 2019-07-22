import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UIModel } from '../../models';
import { WorkflowConfig } from '../../workflow/workflow.processor';
import { DragDropService } from '../../services/drag-drop.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ControlsPanelComponent } from '../controls-panel/controls-panel.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-designer-component', // tslint:disable-line
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit, AfterViewInit, OnDestroy {

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

  private destroy = new Subject();

  constructor(private container: ElementRef, private dragDropService: DragDropService) { }

  ngOnInit() {
    this.uiModelVal = this.uiModel;
    this.dragDropService.uiModelUpdates$.pipe(takeUntil(this.destroy)).subscribe(uiModel => {
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

    this.dragDropService.selectedComponent$.pipe(takeUntil(this.destroy)).subscribe(({uiModel}) => {
      this.uiModelToEdit = uiModel;
      this.tabSelect(1);
    });

    this.dragDropService.componentRemoved$.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.tabSelect(0);
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
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
    const model = this.uiModelVal;
    this.uiModelVal = null;
    window.requestAnimationFrame(() => {
      this.uiModelVal = model;
      setTimeout(() => {
        this.dragDropService.init(this.container, this.uiModelVal);
      });
    });
  }

  onParentSelect() {
    this.dragDropService.selectParent();
  }

  onClone() {
    this.dragDropService.cloneSelected();
  }

  private tabSelect(i: number) {
    window.requestAnimationFrame(() => {
      try {
        this.tabset.tabs[i].active = true;
      } catch (e) {
        console.error(e);
      }
    });
  }
}
