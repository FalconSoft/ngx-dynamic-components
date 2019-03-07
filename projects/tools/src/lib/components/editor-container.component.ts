import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EditorComponent } from './editor.component';
import { ActionsContainer, ActionsMap, UIModel } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-editor-container',
  template: `
    <div fxLayout="column" fxFlex="1 1 auto">
      <dc-editor-toolbar (action)="OnToolbarAction($event)"></dc-editor-toolbar>
      <as-split direction="horizontal">
          <as-split-area size="50" fxLayout="column" fxFlex="1 1 auto">
            <dc-editor #editor fxLayout fxFlex="1 1 auto"></dc-editor>
          </as-split-area>
          <as-split-area size="50" fxLayout="column" fxFlex="1 1 auto">
            <dc-editor-preview [uiModel]="uiModel" [actions]="actions" fxLayout="column" fxFlex="1 1 auto"></dc-editor-preview>
          </as-split-area>
      </as-split>
    </div>`,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    app-editor-preview {
      overflow: hidden;
    }
    app-editor {
      max-width: 100%;
    }
  `]
})
export class EditorContainerComponent implements OnInit {

  constructor() { }

  @ViewChild('editor')
  editor: EditorComponent;

  @Input()
  defaultModel: string;

  @Input()
  defaultActionsMap: ActionsMap;

  uiModel: UIModel;
  actions: ActionsContainer;

  ngOnInit() {
    this.editor.uiModel = this.defaultModel;
    this.updatePreviewModel();
  }

  OnToolbarAction(evt: string) {
    switch (evt) {
      case 'refresh': this.updatePreviewModel(); break;
    }
  }

  private updatePreviewModel(): void {
    try {
      this.uiModel = JSON.parse(this.editor.uiModel);
      this.actions = new ActionsContainer(this.defaultActionsMap, this.uiModel);
    } catch (e) {
      alert('UI Model is incorrect');
    }
  }

}
