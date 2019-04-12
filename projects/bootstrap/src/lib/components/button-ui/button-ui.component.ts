import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, StyleProperties, ComponentExample,
  ComponentDescriptor, UIModel} from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../../constants';

@Component({
  selector: 'dc-button-ui',
  template: `
    <button class="btn " [ngClass]="properties.btnClass || 'btn-primary'"
      [type]="properties.type"
      (click)="workflowEngine.run(properties.clickActionKey)">{{properties.label}}</button>
  `,
  styles: []
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

  @propDescription({
    description: 'Bootstrap predefined button class',
    example: 'btn-secondary',
  })
  btnClass?: string;

  @propDescription({
    description: 'Button type: button|submit|reset. Default: button',
    example: 'submit',
  })
  type?: string;
}

export const example: ComponentExample<UIModel<ButtonProperties>> = {
  title: 'Basic button example',
  uiModel: {
    type: `${packageName}:button`,
    containerProperties: {},
    itemProperties: {
        label: 'SUBMIT',
        width: '50%',
        margin: '15px',
        padding: '10px 5px 10px 0px',
        clickActionKey: 'consoleLog'
    }
  },
  dataModel: {}
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
