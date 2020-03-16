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
        [interpreter]='interpreter'
        [scripts]='scripts'
        (changedDataModel)="changedDataModel.emit($event)"
        (eventHandlers)="eventHandlers.emit($event)"
        (render)="render.emit($event)"
        (evaluate)="evaluate.emit($event)">
    </dc-ui-selector>`
})
export class NGXDynamicComponent implements OnInit, OnChanges {
    /** @deprecated */ @Input() scripts: string;
    /** @deprecated */ @Input() interpreter: Interpreter;
    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>|string;
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();
    /** @deprecated */ @Output() evaluate = new EventEmitter<boolean>();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();

    parsedUIModel: UIModel;

    async ngOnInit(): Promise<void> {
      this.initInterpreter();
      this.initParsedModel();
    }

    ngOnChanges({scripts, uiModel}: SimpleChanges): void {
      if (scripts && !scripts.firstChange && scripts.currentValue !== scripts.previousValue) {
        this.initInterpreter();
      }

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

    /** @deprecated */
    private initInterpreter() {
      if (!this.interpreter) {
        this.interpreter = Interpreter.create();
      }
    }
}
