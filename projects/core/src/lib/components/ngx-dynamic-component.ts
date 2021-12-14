import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { UIModel, ComponentEvent } from '../models';
import { CoreService } from '../services/core.service';

@Component({
    selector: 'ngx-dynamic-component', // eslint-disable-line
    template: `
    <dc-ui-selector *ngIf="parsedUIModel"
        [uiModel]='parsedUIModel'
        [dataModel]='dataModel'
        (changedDataModel)="changedDataModel.emit($event)"
        (eventHandlers)="onEventHandler($event)"
        (render)="render.emit($event)"
      >
    </dc-ui-selector>`
})
export class NGXDynamicComponent {

    @Input() dataModel: any;
    @Input() set uiModel(value: UIModel<any> | string){
      this.initParsedModel(value);
    }
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();

    parsedUIModel: UIModel;

    onEventHandler(evt: ComponentEvent): void {
      this.eventHandlers.emit({...evt, rootUIModel: this.parsedUIModel});
    }

    private initParsedModel(uiModel: UIModel<any> | string): void {
      if (typeof uiModel === 'string') {
        try {
          this.parsedUIModel = CoreService.parseXMLModel(uiModel);
        } catch (e) {
          this.parsedUIModel = null;
          this.eventHandlers.emit({eventName: 'parseError', parameters: {
            error: e
          }});
        }
      } else {
        this.parsedUIModel = uiModel;
      }
    }
}
