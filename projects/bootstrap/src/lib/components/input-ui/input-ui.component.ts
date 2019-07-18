import { Component } from '@angular/core';
import { BaseUIComponent, ComponentDescriptor, propDescription,
  ComponentExample, UIModel, Categories, LabelProperties, PropertyCategories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-input-ui',
  template: `
  <div class="form-group align-items-baseline" [fxLayout]="layout" [ngClass]="cssClasses" [ngStyle]="itemStyles">
  <label class="mr-1 {{properties.labelPosition}}" [for]="id" *ngIf="hasLabel"
    [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
    <input [attr.id]="id" [type]="properties.type" class="form-control" [ngStyle]="inputStyles"
      [fxFlex]="properties.inputWidth"
      [placeholder]="properties.placeholder"
      [disabled]="!properties.enabled"
      (input)="changedDataModel.emit(this.dataModel)"
      [(ngModel)]="componentDataModel">
  </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    label.right, label.bottom {
      order: 1;
    }
  `]
})
export class InputUIComponent extends BaseUIComponent<InputProperties> {

  get id() {
    if (this.hasLabel) {
      return 'input-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
    }
  }

  get hasLabel() {
    return this.properties.labelPosition && this.properties.labelPosition !== 'none';
  }

  get layout() {
    return ['left', 'right', 'none'].includes(this.properties.labelPosition) ? 'row' : 'column';
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

export class InputProperties extends LabelProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;
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
      labelPosition: 'none'
    }
  },
  propertiesDescriptor: [
    ['type', {name: 'type', label: 'Data Type', category: PropertyCategories.Main,
      combo: [['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']]
    }],
    ['inputWidth', {name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout}]
  ]
};
