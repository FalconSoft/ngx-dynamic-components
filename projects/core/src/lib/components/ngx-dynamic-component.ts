import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { UIModel } from '../models';
import { Interpreter } from '../interpreter/interpreter';

@Component({
    selector: 'ngx-dynamic-component', // tslint:disable-line
    template: `
    <dc-ui-selector
        [uiModel]='uiModel'
        [dataModel]='dataModel'
        [interpreter]='interpreter'
        (changedDataModel)="changedDataModel.emit($event)"
        (render)="render.emit($event)">
    </dc-ui-selector>
      `
})
export class NGXDynamicComponent implements OnInit, OnChanges {
    @Input() script: string;
    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>;
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();

    interpreter: Interpreter;

    async ngOnInit(): Promise<void> {
      this.initInterpreter();
    }

    ngOnChanges({script, dataModel}: SimpleChanges) {
      if (script && !script.firstChange && script.currentValue !== script.previousValue) {
        this.initInterpreter(script.currentValue);
      }
    }

    private initInterpreter(script = this.script) {
      this.interpreter = Interpreter.create();
    }
}
