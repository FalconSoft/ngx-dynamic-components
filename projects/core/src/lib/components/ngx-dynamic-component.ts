import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Interpreter } from 'jspython-interpreter';
import { UIModel, ComponentEvent } from '../models';
import { CoreService } from '../services/core.service';

@Component({
    selector: 'ngx-dynamic-component', // tslint:disable-line
    template: `
    <dc-ui-selector *ngIf="parsedUIModel"
        [uiModel]='parsedUIModel'
        [dataModel]='dataModel'
        (changedDataModel)="changedDataModel.emit($event)"
        (eventHandlers)="eventHandlers.emit($event)"
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

    ngOnChanges({scripts, uiModel}: SimpleChanges): void {
      if (uiModel && !uiModel.firstChange && uiModel.currentValue !== uiModel.previousValue) {
        this.initParsedModel();
      }
    }

    private async initParsedModel(): Promise<void> {
      if (typeof this.uiModel === 'string') {
        this.parsedUIModel = await CoreService.parseXMLModel(this.uiModel);
      } else {
        this.parsedUIModel = this.uiModel;
      }
    }
}
