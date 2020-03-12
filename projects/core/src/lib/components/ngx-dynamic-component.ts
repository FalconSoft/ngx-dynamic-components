import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import * as xml from 'xml2js';
import { Interpreter } from 'jspython-interpreter';
import { UIModel } from '../models';

/**
 * Child Elements directives within Containers
 * @link https://github.com/angular/flex-layout/wiki/API-Documentation
 */
const CONTAINER_DIRECTIVES = ['fxFlex', 'fxFlexOrder', 'fxFlexOffset', 'fxFlexAlign', 'fxflexfill'];

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
        this.parsedUIModel = await this.parseXMLModel(this.uiModel);
      } else {
        this.parsedUIModel = this.uiModel;
      }
    }

    private initInterpreter() {
      if (!this.interpreter) {
        this.interpreter = Interpreter.create();
      }
    }

    private async parseXMLModel(uiModelXml: string): Promise<UIModel> {
      try {
        const res = await xml.parseStringPromise(uiModelXml, {
          explicitChildren: true,
          preserveChildrenOrder: true
        });
        const type = Object.keys(res)[0];
        return this.getUIModel(res[type]);
      } catch (e) {
        console.log(e);
        return null;
      }
    }

    private getUIModel(xmlRes: any) {
      const props = xmlRes.$;
      const content = xmlRes._;
      const type = xmlRes['#name'];
      const itemProperties = {};
      const containerProperties = {};
      Object.entries(props).forEach(([prop, val]) => {
        if (CONTAINER_DIRECTIVES.includes(prop)) {
          containerProperties[prop] = val;
        } else {
          itemProperties[prop] = val;
        }
      });
      const uiModel: UIModel = {
        type,
        itemProperties,
        containerProperties
      };

      if (type === 'text' && typeof content === 'string') {
        if (content.startsWith('$.')) {
          uiModel.itemProperties.binding = content;
        } else {
          uiModel.itemProperties.text = content;
        }
      }

      if (type === 'button') {
        uiModel.itemProperties.label = content;
      }

      if (props.id) {
        uiModel.id = props.id;
      }

      if (xmlRes.$$) {
        uiModel.children = xmlRes.$$.map(this.getUIModel);
      }
      return uiModel;
    }
}
