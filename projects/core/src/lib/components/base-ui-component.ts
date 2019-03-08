import { OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { UIModel, IActionsContainer, PropDescriptor, AttributesMap } from '../models';

export class BaseUIComponent<T = AttributesMap> implements OnInit, OnDestroy {
    @Input() dataModel: any;
    @Input() uiModel: UIModel<T>;
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
  function decorate(target: any, key: string) {
    const properties = target.hasOwnProperty('properties') ? target.properties : [];
    properties.push({
      name: key,
      ...description
    });
    target.properties = properties;
  }
  return decorate;
}
