import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { UIModel, ComponentEvent } from '../models';
import { CoreService } from '../services/core.service';

@Component({
    selector: 'ngx-dynamic-component', // tslint:disable-line
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
export class NGXDynamicComponent implements OnInit, OnChanges {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>|string;
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();

    parsedUIModel: UIModel;

    async ngOnInit(): Promise<void> {
      this.initParsedModel();
    }

    ngOnChanges({uiModel}: SimpleChanges): void {
      if (uiModel && !uiModel.firstChange && uiModel.currentValue !== uiModel.previousValue) {
        this.initParsedModel();
      }
    }

    onEventHandler(evt: ComponentEvent): void {
      this.eventHandlers.emit({...evt, rootUIModel: this.parsedUIModel});
    }

    private async initParsedModel(): Promise<void> {
      if (typeof this.uiModel === 'string') {
        try {
          this.parsedUIModel = await CoreService.parseXMLModel(this.uiModel);
        } catch (e) {
          this.parsedUIModel = null;
          this.eventHandlers.emit({eventName: 'parseError', parameters: {
            error: e
          }});
        }
      } else {
        this.parsedUIModel = this.uiModel;
      }
    }
}
