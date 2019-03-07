import { OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { UIModel, IActionsContainer } from '../models';

export class BaseUIComponent implements OnInit, OnDestroy {
    @Input() public dataModel: any;
    @Input() public uiModel: UIModel;
    @Input() public actions: IActionsContainer;

    @Output()
    public changedDataModel = new EventEmitter();

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
