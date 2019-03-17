import { Component, OnInit, Input, SimpleChanges, OnChanges, HostBinding, ViewChild } from '@angular/core';
import { UIModel, UISelectorComponent, WorkflowEngine } from '@ngx-dynamic-components/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

enum Layout {
  horizontal = 'column',
  vertical = 'row'
}

@Component({
  selector: 'dc-preview-editor',
  templateUrl: './preview-editor.component.html',
  styleUrls: ['./preview-editor.component.scss']
})
export class PreviewEditorComponent implements OnInit, OnChanges {

  @Input() workflowEngine: WorkflowEngine;
  @Input() initUiModel: UIModel;
  @Input() initDataModel: any;
  @Input() title: string;
  @HostBinding('style.flex') flex = 'initial';

  uiModel$: Observable<UIModel>;
  dataModel$: Observable<any>;

  uiModelControl: FormControl;
  dataModelControl: FormControl;

  @ViewChild('dynamicComponent') dynamicComponent: UISelectorComponent;

  layout: Layout = Layout.horizontal;

  sourceCode = false;
  editorOptions = {
    language: 'json',
    automaticLayout: true
  };

  constructor() { }

  ngOnInit() {
    this.initUIPreview();
  }

  ngOnChanges({initUiModel}: SimpleChanges) {
    if (!initUiModel.firstChange) {
      this.initUIPreview();
    }
  }

  ngAfterViewInit() {
    this.onDataModelChange(this.dynamicComponent.dataModel);
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
  }

  toggleLayout() {
    this.layout = this.layout === Layout.horizontal ? Layout.vertical : Layout.horizontal;
  }

  onDataModelChange(data: any) {
    this.dataModelControl.setValue(JSON.stringify(data, null, 4));
  }

  private jsonValidFilter(jsonStr: string): boolean {
    try {
      JSON.parse(jsonStr);
      return true;
    } catch {
      return false;
    }
  }

  private initUIPreview() {
    const strUiModel = JSON.stringify(this.initUiModel, null, 4);
    const strDataModel = JSON.stringify(this.initDataModel, null, 4);

    this.uiModelControl = new FormControl(strUiModel);
    this.uiModel$ = this.uiModelControl.valueChanges.pipe(
      filter(this.jsonValidFilter),
      startWith(strUiModel),
      map(str => JSON.parse(str)));

    this.dataModelControl = new FormControl(strDataModel);
    this.dataModel$ = this.dataModelControl.valueChanges.pipe(
      filter(this.jsonValidFilter),
      startWith(strDataModel),
      map(str => JSON.parse(str)));
  }

}
