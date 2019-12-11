import { Component } from '@angular/core';
import { BaseUIComponent, propDescription, StyleProperties, ComponentExample,
  ComponentDescriptor, UIModel, Categories, PropertyCategories} from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-button-ui',
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
export class ButtonUIComponent extends BaseUIComponent<ButtonProperties> {
  async onClick() {
    if (this.properties.clickActionKey) {
      this.evaluate.emit(true);
      try {
        await this.interpreter.evaluate(this.scripts, {dataModel: this.dataModel, uiModel: this.uiModel}, this.properties.clickActionKey);
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
  clickActionKey?: string;

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
  uiModel: {
    type: `${packageName}:button`,
    containerProperties: {},
    itemProperties: {
      label: 'SUBMIT',
      width: '50%',
      margin: '15px',
      padding: '10px 5px 10px 0px',
      clickActionKey: 'consoleLog',
      type: 'button'
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
  label: 'Button',
  packageName,
  category: Categories.Basic,
  description: 'Button component',
  itemProperties: ButtonProperties,
  component: ButtonUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:button`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      clickActionKey: 'consoleLog',
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
