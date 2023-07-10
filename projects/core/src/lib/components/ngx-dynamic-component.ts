import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef,
  ViewChild, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { UIModel, ComponentEvent } from '../models';
import { CoreService } from '../services/core.service';
import { RendererService } from '../services/renderer.service';

@Component({
    selector: 'ngx-dynamic-component', // eslint-disable-line
    template: '<ng-container #vc></ng-container>',
    providers: [RendererService],
})
export class NGXDynamicComponent implements OnInit, OnChanges {

    root = true;
    @Input() dataModel: any;
    @Input() xmlUIModel: string;
    @Output() render = new EventEmitter<UIModel>();
    @Output() changedDataModel = new EventEmitter();
    @Output() eventHandlers = new EventEmitter<ComponentEvent>();
    @ViewChild('vc', {read: ViewContainerRef, static: true}) containerRef: ViewContainerRef;

    uiModel: UIModel;

    constructor(protected rendererService: RendererService, public injector?: Injector) { }

    ngOnInit() {
      this.initParsedModel(this.xmlUIModel);
    }

    ngOnChanges({xmlUIModel, dataModel}: SimpleChanges): void {
      if (xmlUIModel && !xmlUIModel.firstChange && xmlUIModel.currentValue !== xmlUIModel.previousValue) {
        this.initParsedModel(this.xmlUIModel);
      }
    }

    protected initParsedModel(uiModel: string): void {
      try {
        this.uiModel = CoreService.parseXMLModel(uiModel);
        if (this.uiModel) {
          this.rendererService.createComponent(this, this.uiModel);
          animationFrameScheduler.schedule(() => this.render.emit(this.uiModel));
        }
      } catch (e) {
        this.uiModel = null;
        this.eventHandlers.emit({
          eventHandler: 'parseError',
          eventName: 'error',
          parameters: {
            uiModel: this.uiModel,
            error: e,
          }});
      }
    }
}
