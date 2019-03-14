import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, StyleProperties, ComponentExample, ComponentDescriptor} from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';
import { UIModel } from '@ngx-dynamic-components/core/lib/models';

@Component({
    selector: 'dc-ui-button',
    template: `
    <button mat-flat-button color="primary"
      [ngStyle]="itemStyles"
      (click)="actions.onRunAction(uiModel, uiModel.itemProperties?.clickActionKey, dataModel)">
    {{uiModel.itemProperties?.label}}
    </button>
    `
})
export class ButtonUIComponent extends BaseUIComponent<ButtonProperties> {

}

export class ButtonProperties extends StyleProperties {
  @propDescription({
    description: 'Button label',
    example: 'Click me!',
  })
  label: string;

  @propDescription({
    description: 'Key for action that fires onclick',
    example: 'submit',
  })
  clickActionKey: string;
}

const example: ComponentExample<UIModel<ButtonProperties>> = {
  title: 'Basic button example',
  uiModel: {
    type: 'material:button',
    containerProperties: {},
    itemProperties: {
        label: 'SUBMIT',
        width: '50%',
        margin: '15px',
        padding: '10px 5px 10px 0px',
        clickActionKey: 'consoleLog'
    }
  },
  dataModel: {},
  actionsMap: {
    consoleLog() { console.log('button clicked'); }
  }
};

interface ButtonUIComponentConstrutor {
  new (): ButtonUIComponent;
}

interface ButtonPropertiesConstrutor {
  new (): ButtonProperties;
}

export const buttonDescriptor: ComponentDescriptor<ButtonUIComponentConstrutor, ButtonPropertiesConstrutor> = {
  name: 'button',
  packageName,
  category: Categories.Buttons,
  description: 'Button component',
  itemProperties: ButtonProperties,
  component: ButtonUIComponent,
  example
};


