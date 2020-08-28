import { Component, OnInit, Input, HostBinding, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {
  UIModel, NGXDynamicComponent, formatObjToJsonStr, ComponentEvent,
  getComponentById, BaseDynamicComponent, CoreService
} from '@ngx-dynamic-components/core';
import { map } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';
import { Ace, edit } from 'ace-builds';
import { jsPython, Interpreter } from 'jspython-interpreter';

enum Layout {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

@Component({
  selector: 'dc-preview-editor',
  templateUrl: './preview-editor.component.html',
  styleUrls: ['./preview-editor.component.scss']
})
export class PreviewEditorComponent implements OnInit, AfterViewInit {

  @Input() scripts: string;
  @Input() initUiModel: UIModel | string;
  @Input() initDataModel: any;
  @Input() title: string;
  @ViewChild('uiModelEl') uiModelEl: ElementRef<HTMLElement>;
  @ViewChild('uiModelJSONEl') uiModelJSONEl: ElementRef<HTMLElement>;
  @ViewChild('scriptsEl') scriptsEl: ElementRef<HTMLElement>;
  @ViewChild('dataModelEl') dataModelEl: ElementRef<HTMLElement>;
  @ViewChild('dynamicComponent') dynamicComponent: NGXDynamicComponent;
  @HostBinding('style.flex') flex = 'initial';

  dataModel: any;
  dataModelCopy: any;
  uiModel: UIModel | string;

  uiModelEditor: Ace.Editor;
  uiModelJSONEditor: Ace.Editor;
  dataModelEditor: Ace.Editor;
  scriptsEditor: Ace.Editor;
  interpreter: Interpreter;
  editorOptions = {
    language: 'json',
    automaticLayout: true
  };
  direction: Layout = Layout.horizontal;
  codeSize = 50;

  constructor() { }

  async eventHandlers({ eventName, rootUIModel, parameters = null }: ComponentEvent): Promise<void> {
    if (!this.interpreter) { return; }

    if (this.interpreter.hasFunction(this.scripts, eventName)) {
      const inDataModel = this.dataModel;
      try {
        await this.interpreter.evaluate(this.scripts, {
          rootUIModel,
          dataModel: this.dataModel,
          ...parameters
        }, eventName);
      } catch (e) {
        alert(`${e.message}`)
      }
    }
  }

  ngOnInit(): void {
    this.interpreter = jsPython();
    this.interpreter.addFunction('getComponentById',
      (uiModel: UIModel, id: string): BaseDynamicComponent => getComponentById(uiModel, id)
    );

    this.interpreter.addFunction('alert', (msg: string): void => alert(msg));

    this.interpreter.assignGlobalContext({});
    this.uiModel = this.initUiModel;
    this.dataModel = this.initDataModel;
  }

  ngAfterViewInit(): void {
    this.onDataModelChange(this.dynamicComponent.dataModel);
    this.initUIPreview();
  }

  toggleSourceCode(): void {
    this.codeSize = !this.codeSize ? 50 : 0;
  }

  toggleLayout(): void {
    this.direction = this.direction === Layout.horizontal ? Layout.vertical : Layout.horizontal;
  }

  get isHorizontal(): boolean {
    return this.direction === Layout.horizontal;
  }

  onDataModelChange(data: any): void {
    if (data && this.dataModelEditor) {
      this.dataModelEditor.setValue(formatObjToJsonStr(data));
    } else if (this.uiModelEditor) {
      this.uiModelEditor.setValue(formatObjToJsonStr(this.uiModel));
    }
  }

  resize(): void {
    this.scriptsEditor.resize();
    this.uiModelEditor.resize();
    this.uiModelJSONEditor.resize();
    this.dataModelEditor.resize();
  }

  private initUIPreview(): void {
    if (this.uiModelEl) {
      this.uiModelJSONEditor = edit(this.uiModelJSONEl.nativeElement, {
        mode: 'ace/mode/json',
        autoScrollEditorIntoView: true,
        tabSize: 2,
        useSoftTabs: true,
        readOnly: true
      });

      this.setJSONEditor(this.initUiModel as string);

      this.initEditor('uiModel', this.uiModelEl, this.initUiModel, 'ace/mode/xml')
        .subscribe(uiModel => {
          this.setJSONEditor(uiModel);
          this.refreshPreview(uiModel, this.dataModel);
        });

      this.initEditor('dataModel', this.dataModelEl, this.initDataModel)
        .subscribe(dataModel => this.refreshPreview(this.uiModel, dataModel ? JSON.parse(dataModel) : dataModel));

      this.initEditor('scripts', this.scriptsEl, this.scripts, 'ace/mode/python')
        .subscribe(sc => this.scripts = sc);
    }
  }

  private setJSONEditor(uiModel: string): void {
    CoreService.parseXMLModel(uiModel).then(res => {
      this.uiModelJSONEditor.setValue(formatObjToJsonStr(res), -1);
      this.uiModelJSONEditor.resize();
    });
  }

  private refreshPreview(uiModel: UIModel | string, dataModel: any): void {
    this.uiModel = uiModel;
    this.dataModelCopy = JSON.parse(JSON.stringify(dataModel));
  }

  private initEditor(name: string, element: ElementRef, value: object | string, mode = 'ace/mode/json'): Observable<any> {
    const editor = edit(element.nativeElement, {
      mode,
      autoScrollEditorIntoView: true,
      value: formatObjToJsonStr(value),
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
