import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, AttributesMap} from '@ngx-dynamic-components/core';
import { addToComponentsList } from './register';
import { Categories, packageName } from '../constants';

@Component({
    selector: 'dc-ui-button',
    template: `
    <button mat-flat-button color="primary"
        (click)="actions.onRunAction(uiModel, uiModel.itemProperties?.clickActionKey, dataModel)">
    {{uiModel.itemProperties?.label}}
    </button>
    `
})
export class ButtonUIComponent extends BaseUIComponent<ButtonProperties> {

}

export class ButtonProperties implements AttributesMap {
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

export const buttonDescriptor = {
  name: 'button',
  package: packageName,
  category: Categories.Buttons,
  description: 'Button component',
  itemProperties: ButtonProperties,
  component: ButtonUIComponent
};

addToComponentsList(buttonDescriptor);
