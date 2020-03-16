import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, StyleProperties, ComponentExample,
  ComponentDescriptor, UIModel, Categories, XMLResult, AttributesMap} from '@ngx-dynamic-components/core';
import { packageName } from '../constants';

@Component({
    selector: 'dc-button',
    template: `
    <button mat-flat-button color="primary"
      [ngStyle]="itemStyles"
      (click)="onClick()">
    {{uiModel.itemProperties?.label}}
    </button>
    `
})
export class ButtonUIComponent extends BaseUIComponent<ButtonProperties> {
  onClick() {
    this.emitEvent(this.properties.onClick);
  }
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
  onClick: string;
}

const example: ComponentExample<UIModel<ButtonProperties>> = {
  title: 'Basic button example',
  uiModel: `
  <mat-button onClick="consloeLog">Log</mat-button>
  `,
  scripts: `
  def consloeLog():
    print("Log click")
  `,
  dataModel: {}
};

interface ButtonUIComponentConstrutor {
  new (): ButtonUIComponent;
}

interface ButtonPropertiesConstrutor {
  new (): ButtonProperties;
}

export const buttonDescriptor: ComponentDescriptor<ButtonUIComponentConstrutor, ButtonPropertiesConstrutor> = {
  name: 'mat-button',
  label: 'Button (Material)',
  packageName,
  category: Categories.Basic,
  description: 'Button component',
  itemProperties: ButtonProperties,
  component: ButtonUIComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const content = xmlRes.content;
    const itemProperties: AttributesMap = {};
    if (typeof content === 'string') {
      itemProperties.label = content;
    }

    return {
      type: 'button',
      itemProperties: { label: content }
    };
  },
  defaultModel: {
    type: 'mat-button',
    itemProperties: {
      label: 'Button'
    },
    containerProperties: {}
  }
};


