import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Interpreter } from 'jspython-interpreter';
import { UIModel } from '../models';

@Component({
    selector: 'ngx-dynamic-component', // tslint:disable-line
    template: `
    <dc-ui-selector
        [uiModel]='uiModel'
        [dataModel]='dataModel'
        [interpreter]='interpreter'
        [scripts]='scripts'
        (changedDataModel)="changedDataModel.emit($event)"
        (render)="render.emit($event)">
    </dc-ui-selector>`
})
export class NGXDynamicComponent implements OnInit, OnChanges {
    @Input() scripts: string;
    @Input() interpreter: Interpreter;
    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>;
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();

    async ngOnInit(): Promise<void> {
      this.initInterpreter();
    }

    ngOnChanges({scripts, dataModel}: SimpleChanges) {
      if (scripts && !scripts.firstChange && scripts.currentValue !== scripts.previousValue) {
        this.initInterpreter();
      }
    }

    private initInterpreter() {
      if (!this.interpreter) {
        this.interpreter = Interpreter.create();
      }
    }
}
