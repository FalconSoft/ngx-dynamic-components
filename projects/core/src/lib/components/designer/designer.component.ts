import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild,
  Output, EventEmitter, OnDestroy, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef, Inject } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime, filter, map } from 'rxjs/operators';
import { Ace, edit } from 'ace-builds';
import { UIModel } from '../../models';
import { WorkflowConfig } from '../../workflow/workflow.processor';
import { DragDropService } from '../../services/drag-drop.service';
import { ControlsPanelComponent } from '../controls-panel/controls-panel.component';
import { formatObjToJsonStr } from '../../utils';
import { WorkflowEditorComponent } from '../workflow-editor/workflow-editor.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ngx-designer-component', // tslint:disable-line
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() uiModel: UIModel;
  @Input() workflow: WorkflowConfig;
  @Output() uiModelUpdated = new EventEmitter<UIModel>();
  @Output() workflowsMapUpdate = new EventEmitter<UIModel>();
  @ViewChild('tabset', {static: false}) tabset: TabsetComponent;
  @ViewChild('controlsPanel', {static: false}) controlsPanel: ControlsPanelComponent;
  @ViewChild('uiModelEl', {static: false}) uiModelEl: ElementRef;
  @ViewChild('workflowEl', {static: false}) workflowEl: ElementRef;

  /** Selected component UI Model */
  uiModelToEdit: UIModel;
  /** Designer UI Model */
  uiModelVal: UIModel;
  uiModelEditor: Ace.Editor;
  workflowEditor: Ace.Editor;
  error: string;
  formatted = true;
  modeState = {
    json: false,
    designer: true
  };
  jsonConfigSize = 0;

  private destroy = new Subject();
  private workflowsMapEdit: WorkflowEditorComponent;

  get fullMode() {
    return this.jsonConfigSize === 0 || this.jsonConfigSize === 100;
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private container: ElementRef,
    private dragDropService: DragDropService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  ngOnInit() {
    this.uiModelVal = this.uiModel;
    this.dragDropService.uiModelUpdates$.pipe(takeUntil(this.destroy)).subscribe(uiModel => {
      this.updateUIModel(uiModel);
    });

    this.dragDropService.selectedComponent$.pipe(takeUntil(this.destroy)).subscribe(({uiModel}) => {
      this.uiModelToEdit = uiModel;
      this.tabSelect(1);
    });

    this.dragDropService.componentRemoved$.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.tabSelect(0);
    });
  }

  ngAfterViewInit() {
    this.uiModelEditor = edit(this.uiModelEl.nativeElement, {
      mode: 'ace/mode/json',
      autoScrollEditorIntoView: true,
      value: formatObjToJsonStr(this.uiModelVal)
    });

    this.workflowEditor = edit(this.workflowEl.nativeElement, {
      mode: 'ace/mode/json',
      autoScrollEditorIntoView: true,
      value: formatObjToJsonStr(this.workflow.workflowsMap)
    });

    fromEvent(this.uiModelEditor, 'change').pipe(
      debounceTime(500),
      map(() => {
        return this.getUIModelObject();
      }),
      filter(v => Boolean(v))).subscribe(async uiModel => {
        this.uiModelVal = uiModel;
        await this.initDrag();
        if (this.uiModelToEdit) {
          const el = await this.dragDropService.selectCurrentComponent();
          el.click();
        }
        this.uiModelUpdated.emit(uiModel);
      });

    fromEvent(this.workflowEditor, 'change').pipe(
      debounceTime(500),
      map(() => {
        try {
          return JSON.parse(this.workflowEditor.getValue());
        } catch (e) {
          return false;
        }
      }),
      filter(v => Boolean(v))).subscribe(
        wMap => {
          this.workflow.workflowsMap = wMap;
          this.workflowsMapUpdate.emit(wMap);
        });

    this.initDrag();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  onSizeChange() {
    this.uiModelEditor.resize();
    this.workflowEditor.resize();
  }

  onWorkflowEdit() {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(WorkflowEditorComponent).create(this.injector);
    this.workflowsMapEdit = componentRef.instance;
    this.workflowsMapEdit.config = this.workflow.workflowsMap;
    this.workflowsMapEdit.modal.onHide.subscribe(() => {
      componentRef.destroy();
    });
    this.workflowsMapEdit.change.subscribe(() => {
      this.workflowEditor.setValue(formatObjToJsonStr(this.workflow.workflowsMap));
    });

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.document.body.appendChild(domElem);
    setTimeout(() => {
      this.workflowsMapEdit.openModal();
    });
  }

  onModeState(prop: string) {
    this.modeState[prop] = !this.modeState[prop];
    if (this.modeState.json && !this.modeState.designer) {
      this.jsonConfigSize = 100;
    } else if (this.modeState.json && this.modeState.designer) {
      this.jsonConfigSize = 50;
    } else {
      this.jsonConfigSize = 0;
    }
  }

  private getUIModelObject() {
    try {
      return JSON.parse(this.uiModelEditor.getValue());
    } catch (e) {
      return false;
    }
  }

  private initDrag() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.dragDropService.init(this.container, this.uiModelVal);
        resolve();
      });
    });
  }

  private updateUIModel(uiModel: UIModel) {
    this.uiModelVal = null;
    setTimeout(() => {
      this.uiModelVal = uiModel;
      this.uiModelEditor.setValue(formatObjToJsonStr(this.uiModelVal), -1);
      this.uiModelUpdated.emit(uiModel);
      this.controlsPanel.initGroups();
      this.initDrag();
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
      this.uiModelUpdated.emit(model);
      this.uiModelEditor.setValue(formatObjToJsonStr(this.uiModelVal), -1);
      this.initDrag();
    });
  }

  onParentSelect() {
    this.dragDropService.selectParent();
  }

  onClone() {
    this.dragDropService.cloneSelected();
  }

  formatJSON(format = true) {
    try {
      const uiModel = JSON.parse(this.uiModelEditor.getValue());
      const workflowsMap = JSON.parse(this.workflowEditor.getValue());
      if (format) {
        this.uiModelEditor.setValue(formatObjToJsonStr(uiModel), -1);
        this.workflowEditor.setValue(formatObjToJsonStr(workflowsMap), -1);
      } else {
        this.uiModelEditor.setValue(JSON.stringify(uiModel), -1);
        this.workflowEditor.setValue(JSON.stringify(workflowsMap), -1);
      }
      this.formatted = format;
      this.error = null;
    } catch (e) {
      console.error(e);
      this.error = e;
      this.formatted = false;
    }
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
