import { Component } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
  selector: 'dc-button',
  template: `
    <a *ngIf="properties.type == 'link' else btn"
      [ngClass]="btnClass" [ngStyle]="itemStyles" [href]="properties.href">{{properties.label}}</a>
    <ng-template #btn>
      <button [ngClass]="btnClass"
        [type]="properties.type" [ngStyle]="itemStyles"
        (click)="onClick()">{{properties.label}}</button>
    </ng-template>
  `
})
export class ButtonComponent extends BaseUIComponent<ButtonProperties> {
  async onClick() {
    const clickKey = this.properties['on-click'];
    if (clickKey) {
      this.evaluate.emit(true);
      try {
        await this.interpreter.evaluate(this.scripts, {dataModel: this.dataModel, uiModel: this.uiModel}, clickKey);
        this.changedDataModel.emit(this.dataModel);
      } finally {
        this.evaluate.emit(false);
      }
    }
  }

  get btnClass() {
    return {
      [`btn ${this.properties.btnClass}`]: this.properties.btnClass
    };
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
  'on-click'?: string;

  @propDescription({
    description: 'Bootstrap predefined button class',
    example: 'btn-secondary',
  })
  btnClass?: string;

  @propDescription({
    description: 'Button type: button|submit|reset|link. Default: button',
    example: 'submit',
  })
  type?: string;

  @propDescription({
    description: 'Link href used in case of type=link.',
    example: 'submit',
  })
  href?: string;
}

export const example: ComponentExample<UIModel<ButtonProperties>> = {
  title: 'Basic button example',
  uiModel: `
  <button width="50%" margin="15px" padding="10px 5px 10px 0px" on-click="consoleLog" type="button">Click</button>
  `,
  scripts: `
  def consoleLog():
    print("test")
  `,
  dataModel: {}
};

interface ButtonComponentConstrutor {
  new (): ButtonComponent;
}

interface ButtonPropertiesConstrutor {
  new (): ButtonProperties;
}

export const buttonDescriptor: ComponentDescriptor<ButtonComponentConstrutor, ButtonPropertiesConstrutor> = {
  name: 'button',
  label: 'Button',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Button component',
  itemProperties: ButtonProperties,
  component: ButtonComponent,
  example,
  defaultModel: {
    type: `core:button`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      'on-click': 'consoleLog',
      btnClass: 'btn-primary',
      type: 'button'
    }
  },
  propertiesDescriptor: [
    ['type', {name: 'type', label: 'Type', category: PropertyCategories.Main,
      combo: [['button', 'submit', 'reset']]
    }],
    ['btnClass', {name: 'btnClass', label: 'CSS Class', category: PropertyCategories.Main,
      combo: [['btn-primary', 'btn-secondary', 'btn-light', 'btn-success', 'btn-danger',
        'btn-warning', 'btn-info', 'btn-dark', 'btn-link']]
    }],
  ]
};
