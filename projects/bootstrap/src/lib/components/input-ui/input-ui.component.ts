import { Component } from '@angular/core';
import { BaseUIComponent, ComponentDescriptor, propDescription,
  ComponentExample, UIModel, Categories, BindingProperties, PropertyCategories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-input-ui',
  template: `
  <div class="form-group align-items-baseline" [fxLayout]="layout" [ngClass]="cssClasses" [ngStyle]="itemStyles">
    <ng-container *ngIf="properties.labelOrientation !== 'none'; else noLabel">
      <label class="mr-1 {{properties.labelOrientation}}" [for]="id"
        [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
      <input [id]="id" [type]="properties.type" class="form-control" [ngStyle]="inputStyles"
        [fxFlex]="properties.inputWidth"
        [placeholder]="properties.placeholder"
        [disabled]="!properties.enabled"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </ng-container>
    <ng-template #noLabel>
      <input [type]="properties.type" class="form-control" [ngStyle]="inputStyles"
        [fxFlex]="properties.inputWidth"
        [placeholder]="properties.placeholder"
        [disabled]="!properties.enabled"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </ng-template>
  </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    label.right, label.down {
      order: 1;
    }
  `]
})
export class InputUIComponent extends BaseUIComponent<InputProperties> {

  get id() {
    return 'input-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
  }

  get layout() {
    return ['left', 'right', 'none'].includes(this.properties.labelOrientation) ? 'row' : 'column';
  }

  get cssClasses() {
    return {
      invisible: !this.properties.visible
    };
  }

  get inputStyles() {
    return this.getStyles(this.uiModel.itemProperties, ['background', 'color']);
  }
}

export class InputProperties extends BindingProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;
  @propDescription({
    description: 'Label orientation',
    example: 'Username',
  })
  labelOrientation?: string;
  @propDescription({
    description: 'Label',
    example: 'Username',
  })
  label?: string;
  @propDescription({
    description: 'Input type',
    example: 'text',
  })
  type?: string;
  @propDescription({
    description: 'Is enabled',
    example: 'true',
  })
  enabled?: boolean;
  @propDescription({
    description: 'Is visible',
    example: 'true',
  })
  visible?: string;
  @propDescription({
    description: 'Input width',
    example: '200px',
  })
  inputWidth?: string;
  @propDescription({
    description: 'Label width',
    example: '80px',
  })
  labelWidth?: string;
}

export const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: {
    type: `${packageName}:text-input`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      placeholder: 'Enter your name',
      dataModelPath: '$.name'
    }
  },
  dataModel: {}
};

interface InputUIComponentConstrutor {
  new (): InputUIComponent;
}

interface InputPropertiesConstrutor {
  new (): InputProperties;
}

export const inputDescriptor: ComponentDescriptor<InputUIComponentConstrutor, InputPropertiesConstrutor> = {
  name: 'text-input',
  label: 'Text Input',
  packageName,
  category: Categories.Basic,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:text-input`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      placeholder: 'Enter your text',
      dataModelPath: '$.path',
      visible: true,
      enabled: true,
      inputWidth: '100%',
      labelWidth: '80px',
      width: '200px',
      margin: '0',
      type: 'text',
      labelOrientation: 'none'
    }
  },
  propertiesDescriptor: [
    ['type', {name: 'type', label: 'Data Type', category: PropertyCategories.Main,
      combo: [['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']]
    }],
    ['labelOrientation', {name: 'labelOrientation', label: 'Label Orientation', category: PropertyCategories.Main,
      combo: [['left', 'top', 'right', 'down', 'none']]
    }],
    ['inputWidth', {name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout}],
    ['labelWidth', {name: 'labelWidth', label: 'Label Width', category: PropertyCategories.Layout}]
  ]
};
