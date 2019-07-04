import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIModel } from '../../models';

@Component({
  selector: 'dc-control-editor',
  template: `
    <dc-properties-editor [uiModel]="uiModel" (updatedProperty)="uiModelChanged.emit()" class="mr-1"></dc-properties-editor>
    <button class="btn btn-light btn-sm handle px-1 py-0 mr-1"
     (mouseover)="onHover($event)" (mouseleave)="onMouseLeave($event)">
      <svg width="14px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z">
        </path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </button>
    <button class="btn btn-light btn-sm px-1 py-0" tooltip="Remove" (click)="uiModelRemoved.emit()">
      <i class="fa fa-remove"></i>
    </button>
  `,
  styleUrls: ['./control-editor.component.scss']
})
export class ControlEditorComponent {

  @Input() uiModel: UIModel;
  @Output() uiModelChanged = new EventEmitter();
  @Output() uiModelRemoved = new EventEmitter();

  constructor() {}

  onHover(evt) {
    const dragEl = this.getParentDrag(evt.target as HTMLElement);
    dragEl.classList.add('drag-selected');
  }

  onMouseLeave(evt: Event) {
    const dragEl = this.getParentDrag(evt.target as HTMLElement);
    dragEl.classList.remove('drag-selected');
  }

  getDragTooltip() {
    return this.uiModel.type === 'material:flex-container' ? 'Drag container' : 'Drag component';
  }

  private getParentDrag(el: HTMLElement): HTMLElement {
    let dragEl = el;

    while (!['item', 'row', 'col-sm'].some(c => Array.from(dragEl.classList).includes(c))) {
      dragEl = dragEl.parentNode as HTMLElement;
    }

    return dragEl;
  }
}
