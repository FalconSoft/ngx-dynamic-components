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
    @Input() xmlUIModel: string;
    @Output() render = new EventEmitter<UIModel>();
    @Output() changedDataModel = new EventEmitter();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();
    @ViewChild('vc', {read: ViewContainerRef, static: true}) containerRef: ViewContainerRef;

    uiModel: UIModel;

    constructor(public injector?: Injector) { }

    onEventHandler(evt: ComponentEvent): void {
      this.eventHandlers.emit({...evt, rootUIModel: this.uiModel});
    }

    ngOnInit() {
      this.initParsedModel(this.xmlUIModel);
    }

    ngOnChanges({xmlUIModel, dataModel}: SimpleChanges): void {
      if (xmlUIModel && !xmlUIModel.firstChange && xmlUIModel.currentValue !== xmlUIModel.previousValue) {
        this.initParsedModel(this.xmlUIModel);
      }
    }

    private initParsedModel(uiModel: string): void {
      try {
        this.uiModel = CoreService.parseXMLModel(uiModel);
        if (this.uiModel) {
          createComponent(this, this.uiModel);
          this.render.emit(this.uiModel);
        }
      } catch (e) {
        this.uiModel = null;
        this.eventHandlers.emit({eventName: 'parseError', parameters: {
          uiModel: this.uiModel,
          error: e
        }});
      }
    }
}
