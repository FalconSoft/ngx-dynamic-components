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
      const actionKey = this.uiModel.id + action;
      if (this.actions && this.uiModel.id && this.actions.hasAction(actionKey)) {
          this.actions.onRunAction(this.uiModel, actionKey, this.dataModel);
      }
    }

    get itemStyles() {
      return this.getStyles(this.uiModel.itemProperties);
    }

    get containerStyles() {
      return this.getStyles(this.uiModel.containerProperties);
    }

    getStyles(properties: AttributesMap = {}): {[key: string]: string} {
      const styleProperties = ['width', 'height', 'padding', 'margin', 'background'];
      return styleProperties.reduce((styles, prop) => {
        if (properties.hasOwnProperty(prop)) {
          styles[prop] = properties[prop];
        }
        return styles;
      }, {});
    }
}

export function propDescription(description: PropDescriptor) {
  function decorate(target: any, key: string) {
    let properties = target.hasOwnProperty('properties') ? target.properties : [];
    properties.push({
      name: key,
      ...description
    });

    let proto = Object.getPrototypeOf(target);

    while (proto.hasOwnProperty('properties')) {
      properties = properties.concat(proto.properties);
      proto = Object.getPrototypeOf(proto);
    }
    target.properties = Array.from(new Set(properties)).sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  return decorate;
}

export interface BaseUIComponentConstrutor {
  new (): BaseUIComponent;
}
