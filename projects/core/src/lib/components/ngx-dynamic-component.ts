import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Interpreter } from 'jspython-interpreter';
import { UIModel } from '../models';
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
        (render)="render.emit($event)"
        (evaluate)="evaluate.emit($event)">
    </dc-ui-selector>`
})
export class NGXDynamicComponent implements OnInit, OnChanges {
    @Input() scripts: string;
    @Input() interpreter: Interpreter;
    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>|string;
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();
    @Output() evaluate = new EventEmitter<boolean>();

    parsedUIModel: UIModel;

    async ngOnInit(): Promise<void> {
      this.initInterpreter();
      this.initParsedModel();
    }

    ngOnChanges({scripts, uiModel}: SimpleChanges) {
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

    private initInterpreter() {
      if (!this.interpreter) {
        this.interpreter = Interpreter.create();
      }
    }
}
