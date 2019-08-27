import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AttributesMap } from '../../models';
import { commonActionsMap } from '../../workflow/actions-store';
import { Ace, edit } from 'ace-builds';
import { formatObjToJsonStr } from '../../utils';
import { ActionDescriptor } from '../../workflow/models';

@Component({
  selector: 'dc-workflow-editor',
  templateUrl: './workflow-editor.component.html',
  styleUrls: ['./workflow-editor.component.scss']
})
export class WorkflowEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', {static: true}) public modal: ModalDirective;
  @ViewChild('configEl', {static: false}) configEl: ElementRef;
  @Input() config: AttributesMap;
  @Output() change = new EventEmitter();
  search = '';
  mapArray: string[];
  selectedAction: ActionDescriptor;
  configEditor: Ace.Editor;
  actions: ActionDescriptor[];
  filteredActions: ActionDescriptor[];

  constructor() { }

  ngOnInit() {
    this.actions = Array.from(commonActionsMap).filter(([name, action]) => {
      return typeof action !== 'function';
    }).map(([name, action]) => {
      return action as ActionDescriptor;
    });
    this.setFilteredActions();
    this.mapArray = Object.keys(this.config);
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

  appendTo(key: string) {
    try {
      this.config[key].push(JSON.parse(this.configEditor.getValue()));
      this.change.emit();
      this.modal.hide();
    } catch (e) {
      console.error(e);
    }
  }

  setFilteredActions() {
    if (!this.search) {
      this.filteredActions = this.actions;
    } else {
      this.filteredActions = this.actions.filter(a => {
        return a.name.includes(this.search);
      });
    }
  }

  openModal() {
    this.modal.show();
  }
}
