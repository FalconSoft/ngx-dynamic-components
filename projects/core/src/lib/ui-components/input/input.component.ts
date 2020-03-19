import { Component } from '@angular/core';
import { LabeledComponent } from '../../components/labeled.component';
import { LabelProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
  selector: 'dc-input',
  template: `
  <div class="form-group align-items-baseline" [fxLayout]="layout" [ngClass]="cssClasses">
    <label class="mr-1 {{properties.labelPosition}}" [for]="id" *ngIf="hasLabel"
      [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
    <div class="w-100 flex-column" [ngStyle]="wrapperStyles">
      <input [attr.id]="id" #inputField="ngModel" [type]="properties.type" class="form-control" [ngStyle]="inputStyles"
        [fxFlex]="properties.inputWidth"
        [placeholder]="properties.placeholder"
        [disabled]="properties.disabled === true"
        [required]="properties.required"
        [minlength]="properties.minlength"
        [maxlength]="properties.maxlength"
        [email]="properties.type === 'email'"
        [pattern]="properties.pattern"
        (input)="onInput($event)"
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
export class InputComponent extends LabeledComponent<InputProperties> {
  get cssClasses() {
    return {
      invisible: this.properties.visible === false,
      required: this.properties.required,
      [this.properties.class]: Boolean(this.properties.class)
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
    return this.properties.binding?.replace(/[^A-Z]+/gi, '');
  }

  onInput(event) {
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.onInput, event.target.value);
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
    description: 'It specifies that the input should be disabled.',
    example: 'true',
  })
  disabled?: boolean;
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

  @propDescription({
    description: 'Key for action that fires on input',
    example: 'onInput()',
  })
  onInput?: string;
}

export const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: `
  <section class="d-flex flex-column align-items-start">
    <input label="Name" labelWidth="80px" onInput="onNameInput(name)" labelPosition="left" placeholder="Enter your name" binding="$.name"/>
    <input label="Last name" id="lastName" labelWidth="80px" disabled="true"
    labelPosition="left" placeholder="Enter your last name" binding="$.lastName"/>
  </section>
  `,
  scripts: `
  def onNameInput(name):
    disabled = name == ""
    JSONUtils.setValue(rootUIModel, "$(children:id=lastName)/itemProperties/disabled", disabled)
  `,
  dataModel: {}
};

interface InputComponentConstrutor {
  new (): InputComponent;
}

interface InputPropertiesConstrutor {
  new (): InputProperties;
}

export const inputDescriptor: ComponentDescriptor<InputComponentConstrutor, InputPropertiesConstrutor> = {
  name: 'input',
  label: 'Input field',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputComponent,
  example,
  defaultModel: {
    type: `input`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      placeholder: 'Enter your text',
      binding: '$.path',
      visible: true,
      disabled: true,
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
