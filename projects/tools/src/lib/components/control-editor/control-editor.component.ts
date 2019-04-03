import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIModel } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-control-editor',
  template: `
    <dc-properties-editor [uiModel]="uiModel"(updatedProperty)="uiModelChanged.emit()"></dc-properties-editor>
    <button mat-icon-button [matTooltip]="getDragTooltip()"
     (mouseover)="onHover($event)" (mouseleave)="onMouseLeave($event)" class="handle">
      <svg width="24px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z">
        </path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </button>
  `,
  styleUrls: ['./control-editor.component.scss']
})
export class ControlEditorComponent {

  @Input()
  uiModel: UIModel;

  @Output()
  uiModelChanged = new EventEmitter();

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

    while (!Array.from(dragEl.classList).includes('item')) {
      dragEl = dragEl.parentNode as HTMLElement;
    }
    return dragEl;
  }

}
