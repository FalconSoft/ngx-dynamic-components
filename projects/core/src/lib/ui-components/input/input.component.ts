import { Component, HostBinding, HostListener, OnInit, OnDestroy, SimpleChanges, OnChanges, ElementRef } from '@angular/core';
import { propDescription, PropertyCategories, BindingProperties } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';
import { BaseUIComponent } from '../../components/base-ui-component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'input', // tslint:disable-line
  template: '',
  // templateUrl: './input.component.html',
  styles: [`
    :host {
      display: inline-block;
    }

    :host.form-check-input > input {
      width: auto;
      height: auto;
    }

    .required label:after {
      content: '*';
    }
  `],
  providers: [NgModel]
})
export class InputComponent extends BaseUIComponent<InputProperties> implements OnInit, OnDestroy, OnChanges {
  @HostBinding('attr.type') type = 'text';
  @HostBinding('attr.value') value = null;
  @HostBinding('attr.checked') checked: boolean;
  @HostBinding('attr.name') attrName: string;
  @HostBinding('attr.readonly') readonly: string;
  @HostBinding('attr.disabled') disabled: string;
  @HostBinding('attr.placeholder') placeholder: string;

  @HostBinding('attr.required') required: string;
  @HostBinding('attr.pattern') pattern: string;
  @HostBinding('attr.maxlength') maxlength: number;
  @HostBinding('attr.minlength') minlength: number;
  @HostBinding('attr.max') max: number;
  @HostBinding('attr.min') min: number;
  @HostBinding('attr.step') step: number;

  private error: HTMLDivElement;

  constructor(private element?: ElementRef<HTMLInputElement>) {
    super();
  }

  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement): void {
    if (!['radio', 'checkbox'].includes(this.type)) {
      this.setValue(input, this.properties.onInput);
    }
  }

  @HostListener('change', ['$event.target'])
  onChange(input: HTMLInputElement): void {
    this.setValue(input, this.properties.onChange);
  }

  @HostListener('blur', ['$event.target'])
  onBlur(input: HTMLInputElement): void {
    this.validate(input);
  }

  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.type = this.properties.type || 'text';
    this.attrName = this.properties.name || this.name;
    this.readonly = this.properties.readonly || undefined;
    this.placeholder = this.properties.placeholder || '';

    this.required = this.properties.required || undefined;
    this.pattern = this.properties.pattern || undefined;
    this.max = this.properties.max || undefined;
    this.min = this.properties.min || undefined;
    this.maxlength = this.properties.maxlength || undefined;
    this.minlength = this.properties.minlength || undefined;
    this.step = this.properties.step || undefined;
    this.disabled = this.properties.disabled || undefined;

    if (this.type !== 'radio') {
      this.value = this.componentDataModel;
    } else {
      this.value = this.properties.value;
    }
  }

  async ngOnDestroy(): Promise<void> {
    if (this.error) {
      this.error.parentNode.removeChild(this.error);
      this.error = null;
    }
    return super.ngOnDestroy();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    await super.ngOnChanges(changes);
    if (changes.dataModel) {
      const val = this.componentDataModel;
      if (this.type === 'checkbox') {
        this.checked = val === true;
      } else if (this.type === 'radio') {
        this.checked = val === this.value ? true : undefined;
      } else if (this.element.nativeElement.value !== val) {
        this.value = val;
        this.element.nativeElement.value = val;
      }
    }
  }

  get cssClasses(): { [key: string]: boolean } {
    return {
      invisible: this.properties.visible === false,
      required: this.properties.required,
      [this.properties.class]: Boolean(this.properties.class)
    };
  }

  get inputCssClasses(): string {
    return this.properties.readonly ? 'form-control-plaintext' : 'form-control';
  }

  get inputStyles(): { [key: string]: string } {
    return this.getStyles(this.uiModel.itemProperties, ['background', 'color']);
  }

  get wrapperStyles(): AttributesMap {
    if (this.properties.inputHeight) {
      return {
        height: this.properties.inputHeight
      };
    }
    return null;
  }

  get name(): string {
    return this.properties.binding?.replace(/[^A-Z]+/gi, '');
  }

  private validate(input: HTMLInputElement): void {
    if (!input.validity.valid) {
      this.error = this.error || document.createElement('DIV') as HTMLDivElement;
      this.error.className = 'alert alert-danger py-0 px-1 m-0';
      this.error.textContent = this.getError(input.validity);
      input.parentNode.insertBefore(this.error, input.nextSibling);
    } else if (this.error) {
      input.parentNode.removeChild(this.error);
      this.error = null;
    }
  }

  private getError(validity: ValidityState): string {
    if (validity.typeMismatch && this.type === 'email') {
      return 'Email not valid';
    } else if (this.type !== 'email') {
      return `Incorrect value for input type ${this.properties.type}`;
    }
    if (validity.patternMismatch) {
      return `Does not match the specified pattern ${this.pattern}`;
    }
    if (validity.valueMissing) {
      return 'Field is required';
    }
    return 'Input value is not valid';
  }

  private setValue(input: HTMLInputElement, prop: string): void {
    if (this.properties.type === 'checkbox') {
      this.componentDataModel = input.checked;
      this.emitEvent(prop, input.checked);
    } else if (this.properties.type === 'radio') {
      if (input.checked) {
        this.componentDataModel = input.value;
        this.emitEvent(prop, input.value);
      }
    } else {
      this.componentDataModel = input.value;
      this.emitEvent(prop, input.value);
    }
    this.changedDataModel.emit(this.dataModel);
  }
}

export class InputProperties extends BindingProperties {
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
    description: 'It specifies that the input value.',
    example: 'option1',
  })
  value?: string;
  @propDescription({
    description: 'It specifies that the input should be disabled.',
    example: 'true',
  })
  disabled?: boolean;
  @propDescription({
    description: 'It specifies that the input should be read only.',
    example: 'true',
  })
  readonly?: boolean;
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
    description: 'Field input height',
    example: '20px'
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

  @propDescription({
    description: 'On change event handler name.',
    example: 'onChange',
  })
  onChange?: string;
}

export const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: `
  <section class="flex-column">
    <section class="form-group">
      <label class="col-form-label" width="80px">Name</label>
      <input onInput="onNameInput(name)" placeholder="Enter your name" binding="$.name"/>
    </section>
    <section class="form-group">
      <label class="col-form-label" width="80px">Last name</label>
      <input disabled="true" id="lastName" placeholder="Enter your last name" binding="$.lastName"/>
    </section>
    <section class="form-group form-check">
      <input type="checkbox" class="form-check-input" binding="$.subscribed"/>
      <label class="form-check-label" width="80px">Subscribe</label>
    </section>
    <section class="form-group form-check mt-5">
      <input type="radio" class="form-check-input" name="option" value="option-1" binding="$.option"/>
      <label class="form-check-label" width="80px">Option 1</label>
    </section>
    <section class="form-group form-check">
      <input type="radio" class="form-check-input" name="option" value="option-2" binding="$.option"/>
      <label class="form-check-label" width="80px">Option 2</label>
    </section>
    <section class="form-group form-check">
      <input type="radio" class="form-check-input" name="option" value="option-3" binding="$.option"/>
      <label class="form-check-label" width="80px">Option 3</label>
    </section>
  </section>
  `,
  scripts: `
  def onNameInput(name):
    disabled = name == ""
    comp = getComponentById(rootUIModel, "lastName")
    comp.itemProperties.disabled = disabled # should set undefined not false
  `,
  dataModel: {}
};

interface InputComponentConstrutor {
  new(): InputComponent;
}

interface InputPropertiesConstrutor {
  new(): InputProperties;
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
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {
      readonly: xmlRes.attrs.readonly === 'true'
    };

    return {
      type: 'input',
      itemProperties
    };
  },
  defaultModel: `<input onInput="onInputHandler(name)" placeholder="Enter your name" binding="$.name"/>`,
  propertiesDescriptor: [
    ['type', {
      name: 'type', label: 'Data Type', category: PropertyCategories.Main,
      values: ['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']
    }],
    ['required', {
      name: 'required', label: 'Required field',
      values: ['true']
    }]
    // ['inputWidth', { name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout }],
    // ['inputHeight', { name: 'inputHeight', label: 'Input Height', category: PropertyCategories.Layout }],
    // ['visible', {
    //   name: 'visible', label: 'Visible', category: PropertyCategories.Main,
    //   values: [true, false]
    // }]
  ],
  children: false
};
