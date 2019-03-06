import { IActionsContainer, UIModel, ActionsMap } from './models';

export class ActionsContainer implements IActionsContainer {
    constructor(am: ActionsMap, uiModel?: UIModel) {
      this.actions = am;
      this.uiModel = uiModel;
    }
    actions: ActionsMap;

    uiModel: UIModel;

    hasAction(actionName: string): boolean {
      return this.actions.hasOwnProperty(actionName) && typeof this.actions[actionName] === 'function';
    }

    onRunAction(sender: UIModel, actionName: string, dataModel: any): void {
      if (typeof this.actions[actionName] === 'function') {
          this.actions[actionName](sender, dataModel, this.uiModel);
      } else {
          throw new Error('Unkown action name ->' + actionName);
      }
    }
}
