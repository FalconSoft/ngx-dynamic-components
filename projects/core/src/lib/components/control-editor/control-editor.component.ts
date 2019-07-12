import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-control-editor',
  template: `
    <button class="btn btn-light btn-sm handle px-1 py-0 mr-1">
      <svg width="14px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z">
        </path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </button>
    <button class="btn btn-light btn-sm px-1 py-0" tooltip="Remove" (click)="onRemove($event)">
      <i class="fa fa-remove"></i>
    </button>
  `,
  styleUrls: ['./control-editor.component.scss']
})
export class ControlEditorComponent {
  @Output() uiModelChanged = new EventEmitter();
  @Output() uiModelRemoved = new EventEmitter();

  onRemove(evt) {
    evt.stopPropagation();
    this.uiModelRemoved.emit();
  }
}
