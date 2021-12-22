import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef,
  ViewChild, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { UIModel, ComponentEvent } from '../models';
import { CoreService } from '../services/core.service';
import { createComponent } from '../utils/renderer';

@Component({
    selector: 'ngx-dynamic-component', // eslint-disable-line
    template: '<ng-container #vc></ng-container>'
})
export class NGXDynamicComponent implements OnInit, OnChanges {

    @Input() dataModel: any;
    @Input() uiModel: UIModel<any>|string;
    @Output() render = new EventEmitter();
    @Output() changedDataModel = new EventEmitter();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();
    @ViewChild('vc', {read: ViewContainerRef, static: true}) containerRef: ViewContainerRef;

    parsedUIModel: UIModel;

    constructor(public injector?: Injector) { }

    onEventHandler(evt: ComponentEvent): void {
      this.eventHandlers.emit({...evt, rootUIModel: this.parsedUIModel});
    }

    ngOnInit() {
      this.initParsedModel(this.uiModel);
    }

    ngOnChanges({uiModel, dataModel}: SimpleChanges): void {
      if (uiModel && !uiModel.firstChange && uiModel.currentValue !== uiModel.previousValue) {
        this.initParsedModel(this.uiModel);
      }
    }

    private initParsedModel(uiModel: UIModel<any> | string): void {
      if (typeof uiModel === 'string') {
        try {
          this.parsedUIModel = CoreService.parseXMLModel(uiModel);
          if (this.parsedUIModel) {
            createComponent(this, this.parsedUIModel);
          }
        } catch (e) {
          this.parsedUIModel = null;
          this.eventHandlers.emit({eventName: 'parseError', parameters: {
            uiModel: this.parsedUIModel,
            error: e
          }});
        }
      } else {
        this.parsedUIModel = uiModel;
      }
    }
}
