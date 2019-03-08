import { OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { UIModel, IActionsContainer, PropDescriptor } from '../models';

export class BaseUIComponent implements OnInit, OnDestroy {
    @Input() dataModel: any;
    @Input() uiModel: UIModel;
    @Input() actions: IActionsContainer;

    @Output()
    changedDataModel = new EventEmitter();

    ngOnInit(): void {
      this.triggerAction('_OnInit');
    }

    ngOnDestroy(): void {
      this.triggerAction('_OnDestroy');
    }

    triggerAction(action: string): void {
      const actionKey = this.uiModel.key + action;
      if (this.actions && this.uiModel.key && this.actions.hasAction(actionKey)) {
          this.actions.onRunAction(this.uiModel, actionKey, this.dataModel);
      }
    }
}

export function propDescription(description: PropDescriptor) {
  function decor(target: any, key: string) {
    target.properties = target.properties || [];
    target.properties.push({
      name: key,
      ...description
    });
  }
  return decor;
}
