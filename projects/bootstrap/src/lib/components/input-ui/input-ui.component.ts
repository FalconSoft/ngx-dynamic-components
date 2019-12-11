import { Component } from '@angular/core';
import { LabeledComponent, ComponentDescriptor, propDescription,
  ComponentExample, UIModel, Categories, LabelProperties, PropertyCategories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-input-ui',
  template: `
  <div class="form-group align-items-baseline" [fxLayout]="layout" [ngClass]="cssClasses" [ngStyle]="itemStyles">
    <label class="mr-1 {{properties.labelPosition}}" [for]="id" *ngIf="hasLabel"
      [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
    <div class="w-100 flex-column" [ngStyle]="wrapperStyles">
      <input [attr.id]="id" #inputField="ngModel" [type]="properties.type" class="form-control" [ngStyle]="inputStyles"
        [fxFlex]="properties.inputWidth"
        [placeholder]="properties.placeholder"
        [disabled]="properties.enabled === false"
        [required]="properties.required"
        [minlength]="properties.minlength"
        [maxlength]="properties.maxlength"
        [email]="properties.type === 'email'"
        [pattern]="properties.pattern"
        (input)="changedDataModel.emit(this.dataModel)"
        [attr.name]="name"
        [(ngModel)]="componentDataModel">
      <div *ngIf="inputField.invalid && (inputField.dirty || inputField.touched)" class="alert alert-danger py-0 px-1 m-0">
        <div *ngIf="inputField.errors.required">Field is required.</div>
        <div *ngIf="inputField.errors.minlength">Min length {{properties.minlength}} characters.</div>
        <div *ngIf="inputField.errors.maxlength">Max length {{properties.minlength}} characters.</div>
        <div *ngIf="inputField.errors.email">Email is invalid.</div>
        <div *ngIf="inputField.errors.pattern">Field should match required pattern.</div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['../../styles/label.scss'],
  styles: [`
    :host {
      display: inline-block;
    }

    .required label:after {
      content: '*';
    }
  `]
})
export class InputUIComponent extends LabeledComponent<InputProperties> {
  get cssClasses() {
    return {
      invisible: this.properties.visible === false,
      required: this.properties.required
    };
  }

  get inputStyles() {
    return this.getStyles(this.uiModel.itemProperties, ['background', 'color']);
  }

  get wrapperStyles() {
    if (this.properties.inputHeight) {
      return {
        height: this.properties.inputHeight
      };
    }
    return null;
  }

  get name() {
    return this.properties.dataModelPath.replace(/[^A-Z]+/gi, '');
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
  visible?: boolean;
  @propDescription({
    description: 'Input width',
    example: '200px',
  })
  inputWidth?: string;
  @propDescription({
    description: 'Is field required',
    example: 'true'
  })
  inputHeight?: string;
  @propDescription({
    description: 'Is field required',
    example: 'true'
  })
  required?: boolean;
  @propDescription({
    description: 'Min field value length',
    example: '5'
  })
  minlength?: number;
  @propDescription({
    description: 'Max field value length',
    example: '10'
  })
  maxlength?: number;
  @propDescription({
    description: 'RegExp pattern',
    example: '[a-zA-Z ]*'
  })
  pattern?: string;
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
  label: 'Input field',
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
      labelPosition: ''
    }
  },
  propertiesDescriptor: [
    ['type', {name: 'type', label: 'Data Type', category: PropertyCategories.Main,
      combo: [['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']]
    }],
    ['inputWidth', {name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout}],
    ['inputHeight', {name: 'inputHeight', label: 'Input Height', category: PropertyCategories.Layout}],
    ['enabled', { name: 'enabled', label: 'Enabled', category: PropertyCategories.Main,
      combo: [[{label: 'Enable', value: true}, {label: 'Disable', value: false}]]
    }],
    ['visible', { name: 'visible', label: 'Visible', category: PropertyCategories.Main,
      combo: [[{label: 'Visible', value: true}, {label: 'Hidden', value: false}]]
    }]
  ]
};
