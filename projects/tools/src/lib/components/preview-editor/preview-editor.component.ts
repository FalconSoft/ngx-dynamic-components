import { Component, OnInit, Input, SimpleChanges, OnChanges, HostBinding, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UIModel, NGXDynamicComponent, formatObjToJsonStr } from '@ngx-dynamic-components/core';
import { FormControl } from '@angular/forms';
import { filter, map, startWith, debounceTime } from 'rxjs/operators';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { Ace, edit } from 'ace-builds';
import { Interpreter } from 'pscript-interpreter';

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
export class PreviewEditorComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() scripts: string;
  @Input() initUiModel: UIModel;
  @Input() initDataModel: any;
  @Input() title: string;
  @ViewChild('uiModel', {static: false}) uiModelEl: ElementRef<HTMLElement>;
  @ViewChild('scripts', {static: false}) scriptsEl: ElementRef<HTMLElement>;
  @ViewChild('dataModel', {static: false}) dataModelEl: ElementRef<HTMLElement>;
  @ViewChild('dynamicComponent', {static: false}) dynamicComponent: NGXDynamicComponent;
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

  get editorTooltip$() {
    return this.editMode$.pipe(map(mode => mode ? 'Disable preview edit' : 'Enable preview edit'));
  }

  constructor(private container: ElementRef, private dragService: DragDropService) { }

  ngOnInit() {
    this.interpreter = Interpreter.create();
    this.uiModel = this.initUiModel;
    this.editMode$.subscribe(editMode => {
      if (editMode) {
        this.dragService.init(this.container, this.uiModel);
      } else {
        this.dragService.cleanUpEditor();
      }
    });
  }

  ngOnChanges({initUiModel}: SimpleChanges) {
    if (initUiModel && !initUiModel.firstChange) {
      // this.initUIPreview();
    }
  }

  ngAfterViewInit() {
    this.onDataModelChange(this.dynamicComponent.dataModel);
    this.initUIPreview();
  }

  get isHorizontal() {
    return this.layout === Layout.horizontal;
  }

  toggleSourceCode() {
    this.sourceCode = !this.sourceCode;
    this.flex = this.sourceCode ? '1 1 auto' : 'initial';
    if (!this.sourceCode) {
      this.layout = Layout.horizontal;
    }
    setTimeout(() => {
      this.initUIPreview();
    });
  }

  toggleLayout() {
    this.layout = this.layout === Layout.horizontal ? Layout.vertical : Layout.horizontal;
  }

  addRow() {
    this.uiModel.children.unshift({
      type: 'bootstrap:bs-row',
      containerProperties: {},
      itemProperties: {},
      children: []
    });
    this.refreshPreview(this.uiModel, this.dataModel);
    this.onDataModelChange(null);
  }

  onDataModelChange(data: any) {
    if (data) {
      this.dataModelEditor.setValue(formatObjToJsonStr(data));
    } else if (this.uiModelEditor) {
      this.uiModelEditor.setValue(formatObjToJsonStr(this.uiModel));
    }
  }

  private initUIPreview() {
    if (this.uiModelEl) {
      this.initEditor('uiModel', this.uiModelEl, this.initUiModel)
        .subscribe(uiModel => this.refreshPreview(uiModel, this.dataModel));

      this.initEditor('dataModel', this.dataModelEl, this.initDataModel)
        .subscribe(dataModel => this.refreshPreview(this.uiModel, dataModel));

      this.initEditor('scripts', this.scriptsEl, this.scripts, 'ace/mode/python')
        .subscribe(sc => this.scripts = sc);
    }

    this.dragService.uiModelUpdates$.subscribe(() => this.onDataModelChange(null));
  }

  private refreshPreview(uiModel: UIModel, dataModel: any) {
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

  private initUIModelControl(): Observable<any> {
    this.uiModelEditor = edit(this.uiModelEl.nativeElement, {
      mode: 'ace/mode/python',
      autoScrollEditorIntoView: true,
      value: this.scripts,
      tabSize: 2,
      useSoftTabs: true,
      indentedSoftWrap: true
    });

    this.uiModelEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    });

    return fromEvent(this.uiModelEditor, 'change');
  }

  private initDataModelControl(): Observable<any> {
    const strDataModel = JSON.stringify(this.initDataModel, null, 4);
    this.dataModelControl = new FormControl(strDataModel);
    return this.dataModelControl.valueChanges
      .pipe(
        debounceTime(5e2),
        filter(this.jsonValidFilter),
        startWith(strDataModel),
        map(str => JSON.parse(str)));
  }

  private initScriptsControl() {
    this.scriptControl = new FormControl(this.scripts);
    this.scriptControl.valueChanges.subscribe(sc => {
      this.scripts = sc;
    });
  }

  private jsonValidFilter(jsonStr: string): boolean {
    try {
      JSON.parse(jsonStr);
      return true;
    } catch {
      return false;
    }
  }
}
