import { HostBinding, HostListener, OnInit, OnDestroy, SimpleChanges, OnChanges, Directive } from '@angular/core';
import { propDescription, BindingProperties } from '../properties';
import { BaseUIComponent } from '../components/base-ui-component';

@Directive()
export class FormElementComponent<T = FormElementProperties> extends BaseUIComponent<T> implements OnInit, OnDestroy, OnChanges { // tslint:disable-line
  @HostBinding('attr.value') value = null;
  @HostBinding('attr.name') attrName: string;
  @HostBinding('attr.readonly') readonly: boolean;
  @HostBinding('attr.disabled') disabled: boolean;
  @HostBinding('attr.placeholder') placeholder: string;
  @HostBinding('attr.id') id: string;
  @HostBinding('attr.autocomplete') autocomplete: string;
  @HostBinding('attr.required') required: boolean;
  @HostBinding('attr.pattern') pattern: string;
  @HostBinding('attr.maxlength') maxlength: number;
  @HostBinding('attr.minlength') minlength: number;
  @HostBinding('attr.max') max: number;
  @HostBinding('attr.min') min: number;

  private error: HTMLDivElement;

  @HostListener('blur', ['$event.target'])
  onBlur(input: HTMLInputElement): void {
    this.validate(input);
  }

  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    const properties = this.properties as FormElementProperties;
    this.attrName = properties.name || this.name;
    this.id = properties.id || undefined;
    this.readonly = properties.readonly || undefined;
    this.placeholder = properties.placeholder || '';
    this.disabled = properties.disabled || undefined;
    this.autocomplete = properties.autocomplete || undefined;
    this.required = properties.required || undefined;
    this.pattern = properties.pattern || undefined;
    this.max = properties.max || undefined;
    this.min = properties.min || undefined;
    this.maxlength = properties.maxlength || undefined;
    this.minlength = properties.minlength || undefined;
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
  }

  get name(): string {
    return (this.properties as FormElementProperties).binding?.replace(/[^A-Z]+/gi, '');
  }

  private validate(input: HTMLInputElement|HTMLTextAreaElement): void {
    if (!input.validity.valid) {
      this.error = this.error || document.createElement('DIV') as HTMLDivElement;
      this.error.className = 'alert alert-danger py-0 px-1 m-0';
      this.error.textContent = input.validationMessage;
      input.parentNode.insertBefore(this.error, input.nextSibling);
    } else if (this.error) {
      input.parentNode.removeChild(this.error);
      this.error = null;
    }
  }
}

export class FormElementProperties extends BindingProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;

  @propDescription({
    description: 'It specifies that the input value.',
    example: 'option1',
  })
  value?: string;

  @propDescription({
    description: 'Form element name.',
    example: 'username',
  })
  name?: string;

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
    description: 'Min input number value',
    example: '5'
  })
  min?: number;
  @propDescription({
    description: 'Max input number value',
    example: '10'
  })
  max?: number;
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
    description: 'Specifies permission to provide automated form field values.',
    example: 'name',
  })
  autocomplete?: string;
}
