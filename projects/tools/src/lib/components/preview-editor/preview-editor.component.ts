import { Component, OnInit, Input, HostBinding, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UIModel, NGXDynamicComponent, formatObjToJsonStr, ComponentEvent, JSONUtils } from '@ngx-dynamic-components/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { Ace, edit } from 'ace-builds';
import { jsPython, Interpreter } from 'jspython-interpreter';

import { DragDropService } from '../../services/drag-drop.service';

enum Layout {
  horizontal = 'column',
  vertical = 'row'
}

@Component({
  selector: 'dc-preview-editor',
  templateUrl: './preview-editor.component.html',
  styleUrls: ['./preview-editor.component.scss']
})
export class PreviewEditorComponent implements OnInit, AfterViewInit {

  @Input() scripts: string;
  @Input() initUiModel: UIModel;
  @Input() initDataModel: any;
  @Input() title: string;
  @ViewChild('uiModel') uiModelEl: ElementRef<HTMLElement>;
  @ViewChild('scripts') scriptsEl: ElementRef<HTMLElement>;
  @ViewChild('dataModel') dataModelEl: ElementRef<HTMLElement>;
  @ViewChild('dynamicComponent') dynamicComponent: NGXDynamicComponent;
  @HostBinding('style.flex') flex = 'initial';

  uiModel: UIModel;
  dataModel: any;
  uiModelEditor: Ace.Editor;
  dataModelEditor: Ace.Editor;
  scriptsEditor: Ace.Editor;
  uiModelControl: FormControl;
  dataModelControl: FormControl;
  scriptControl: FormControl;
  interpreter: Interpreter;
  layout: Layout = Layout.vertical;
  sourceCode = false;
  editMode$ = new BehaviorSubject<boolean>(false);
  editorOptions = {
    language: 'json',
    automaticLayout: true
  };

  get editorTooltip$(): Observable<string> {
    return this.editMode$.pipe(map(mode => mode ? 'Disable preview edit' : 'Enable preview edit'));
  }

  constructor(private container: ElementRef, private dragService: DragDropService) { }

  eventHandlers({eventName, rootUIModel, parameters = null}: ComponentEvent): void {
    if (!this.interpreter) { return; }

    if (this.interpreter.hasFunction(this.scripts, eventName)) {
      try {
        this.interpreter.evaluate(this.scripts, {
          rootUIModel,
          dataModel: this.dataModel,
          ...parameters
        }, eventName);
      } catch (e) {
        this.interpreter.evaluate(`alert("${e.message}")`);
      }
    }
  }

  ngOnInit(): void {
    this.interpreter = jsPython();
    this.interpreter.addFunction('getComponentById', (uiModel: UIModel, id: string): UIModel => {
      return JSONUtils.find(uiModel, `$(children:id=${id})`) as UIModel;
    });
    this.interpreter.assignGlobalContext({JSONUtils});
    this.uiModel = this.initUiModel;
    this.dataModel = this.initDataModel;
    this.editMode$.subscribe(editMode => {
      if (editMode) {
        this.dragService.init(this.container, this.uiModel);
      } else {
        this.dragService.cleanUpEditor();
      }
    });
  }

  ngAfterViewInit(): void {
    this.onDataModelChange(this.dynamicComponent.dataModel);
    this.initUIPreview();
  }

  get isHorizontal(): boolean {
    return this.layout === Layout.horizontal;
  }

  toggleSourceCode(): void {
    this.sourceCode = !this.sourceCode;
    this.flex = this.sourceCode ? '1 1 auto' : 'initial';
    if (!this.sourceCode) {
      this.layout = Layout.horizontal;
    }
    setTimeout(() => {
      this.initUIPreview();
    });
  }

  toggleLayout(): void {
    this.layout = this.layout === Layout.horizontal ? Layout.vertical : Layout.horizontal;
  }

  addRow(): void {
    this.uiModel.children.unshift({
      type: 'bootstrap:bs-row',
      itemProperties: {},
      children: []
    });
    this.refreshPreview(this.uiModel, this.dataModel);
    this.onDataModelChange(null);
  }

  onDataModelChange(data: any): void {
    if (data && this.dataModelEditor) {
      this.dataModelEditor.setValue(formatObjToJsonStr(data));
    } else if (this.uiModelEditor) {
      this.uiModelEditor.setValue(formatObjToJsonStr(this.uiModel));
    }
  }

  private initUIPreview(): void {
    if (this.uiModelEl) {
      this.initEditor('uiModel', this.uiModelEl, this.initUiModel, 'ace/mode/xml')
        .subscribe(uiModel => this.refreshPreview(uiModel, this.dataModel));

      this.initEditor('dataModel', this.dataModelEl, this.initDataModel)
        .subscribe(dataModel => this.refreshPreview(this.uiModel, dataModel ? JSON.parse(dataModel) : dataModel));

      this.initEditor('scripts', this.scriptsEl, this.scripts, 'ace/mode/python')
        .subscribe(sc => this.scripts = sc);
    }

    this.dragService.uiModelUpdates$.subscribe(() => this.onDataModelChange(null));
  }

  private refreshPreview(uiModel: UIModel, dataModel: any): void {
    this.uiModel = uiModel;
    this.dataModel = dataModel;
    if (this.scriptControl) {
      this.scriptControl.setValue(this.scripts);
    }

    if (this.editMode$.value) {
      setTimeout(() => {
        this.dragService.init(this.container, uiModel);
      }, 1e1);
    }
  }

  private initEditor(name: string, element: ElementRef, value: object|string, mode = 'ace/mode/json'): Observable<any> {
    const editor = edit(element.nativeElement, {
      mode,
      autoScrollEditorIntoView: true,
      value: typeof value === 'string' ? value : formatObjToJsonStr(value),
      tabSize: 2,
      useSoftTabs: true,
      indentedSoftWrap: true
    });

    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    });

    this[`${name}Editor`] = editor;

    return fromEvent(editor, 'change').pipe(map(() => {
      return editor.getValue();
    }));
  }
}
