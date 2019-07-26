import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActionDescriptor } from '../../models';
import { commonActionsMap } from '../../workflow/actions-store';
import { Ace, edit } from 'ace-builds';
import { formatObjToJsonStr } from '../../utils';

@Component({
  selector: 'dc-workflow-editor',
  templateUrl: './workflow-editor.component.html',
  styleUrls: ['./workflow-editor.component.scss']
})
export class WorkflowEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', {static: true}) public modal: ModalDirective;

  selectedAction: ActionDescriptor;
  @ViewChild('configEl', {static: false}) configEl: ElementRef;
  configEditor: Ace.Editor;

  actions: ActionDescriptor[];
  constructor() { }

  ngOnInit() {
    this.actions = Array.from(commonActionsMap).filter(([name, action]) => {
      return typeof action !== 'function';
    }).map(([name, action]) => {
      return action as ActionDescriptor;
    });
    this.selectedAction = this.actions[0];
  }

  ngAfterViewInit() {
    this.configEditor = edit(this.configEl.nativeElement, {
      mode: 'ace/mode/json',
      autoScrollEditorIntoView: true,
      value: formatObjToJsonStr(this.selectedAction.config)
    });
  }

  onSelect(action: ActionDescriptor) {
    this.selectedAction = action;
    this.configEditor.setValue(formatObjToJsonStr(action.config));
  }

  openModal() {
    this.modal.show();
  }
}
