import { Component, HostBinding, HostListener, OnInit, OnDestroy, SimpleChanges, OnChanges, DoCheck, ElementRef,
  Injector } from '@angular/core';
import { propDescription, PropertyCategories, PropTypes } from '../../properties';
import { UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';
import { FormElementComponent, FormElementProperties } from '../../components/form-element-component';
import example from './input.examples';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RendererService } from '../../services/renderer.service';

@Component({
  selector: 'input', // eslint-disable-line
  template: ''
})
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
export class InputComponent extends FormElementComponent<InputProperties> implements OnInit, OnDestroy, OnChanges, DoCheck {
  @HostBinding('attr.type') type = 'text';
  @HostBinding('attr.step') step: number;
  @HostBinding('attr.checked') checked: boolean;
  @HostBinding('attr.multiple') multiple: boolean;

  private modelValue: any;
  private dataList: HTMLDataListElement;
  searchText$ = new Subject<string | null>();


  constructor(
    protected rendererService?: RendererService,
    public injector?: Injector,
    private inputElement?: ElementRef<HTMLInputElement>) {
    super(rendererService, injector);
  }

  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement): void {
    if (!['radio', 'checkbox'].includes(this.type)) {
      this.setValue(input, this.properties.onInput);
      this.searchText$.next(input.value);
    }
  }

  @HostListener('change', ['$event.target'])
  onChange(input: HTMLInputElement): void {
    this.setValue(input, this.properties.onChange);
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.type = this.properties.type || 'text';
    this.multiple = this.properties.multiple || undefined;
    this.step = this.properties.step || undefined;
    this.updateValue();
    if (this.properties.autocomplete) {
      const input = this.inputElement.nativeElement;
      input.setAttribute('autocomplete', 'on');
      this.dataList = document.createElement('DATALIST') as HTMLDataListElement;
      this.dataList.id = `list-${this.name}`;
      input.setAttribute('list', this.dataList.id);
      input.parentNode.insertBefore(this.dataList, input);
      this.setList(this.properties.list);
    }

    this.searchText$
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
      )
      .subscribe(data => this.emitEvent(this.properties.debouncedInput, data));
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngDoCheck(): void {
    this.updateValue();
  }

  setList(list: string[]): void {
    if (this.properties.autocomplete) {
      if (!list) {
        this.dataList.innerHTML = '';
      } else {
        this.dataList.innerHTML = list.map(v => `<option value="${v}">`).join('');
      }
      this.properties.list = list;
    }
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  async ngOnDestroy(): Promise<void> {
    return super.ngOnDestroy();
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    await super.ngOnChanges(changes);
    if (changes.dataModel) {
      this.updateValue();
    }
  }
  private get debounceTime(): number {
    return this.properties.debounceTime ? parseInt(this.properties.debounceTime, 10) : 500;
  }

  private updateValue(): void {
    const val = this.componentDataModel;
    if (val !== this.modelValue) {
      this.modelValue = val;
      if (this.type === 'date' && val instanceof Date) {
        this.value = val.toISOString().slice(0, 10);
        this.inputElement.nativeElement.value = this.value;
      } else if (this.type === 'radio') {
        this.value = this.properties.value;
        this.checked = (val && val.toString()) === this.value ? true : undefined;
      } else if (this.type === 'checkbox') {
        this.value = this.properties.value;
        this.checked = val ? true : undefined;
      } else {
        this.value = val;
        this.inputElement.nativeElement.value = val;
      }
    }
  }

  private setValue(input: HTMLInputElement, prop: string): void {
    if (this.properties.type === 'checkbox') {
      this.componentDataModel = input.checked;
      this.emitEvent(prop, input.checked);
    } else if (this.properties.type === 'radio') {
      if (input.checked) {
        this.componentDataModel = input.value;
        this.emitEvent(prop, this.properties.value);
      }
    } else {
      this.componentDataModel = input.value;
      this.emitEvent(prop, input.value);
    }
    this.changedDataModel.emit(this.dataModel);
  }
}

export class InputProperties extends FormElementProperties {
  @propDescription({
    description: 'Input type',
    example: 'text',
  })
  type?: string;

  @propDescription({
    description: 'Whether to allow multiple values.',
    example: 'true',
  })
  multiple?: boolean;

  @propDescription({
    description: 'Specifies the granularity that the value must adhere to',
    example: '2'
  })
  step?: number;

  @propDescription({
    description: 'On change event handler name.',
    example: 'onChange',
    type: PropTypes.EVENT
  })
  onChange?: string;

  @propDescription({
    description: 'Datalist array',
    example: '["option1" ,"option2"]'
  })
  list?: string[];

  @propDescription({
    description: 'debounceTime in miliseconds. Used only with `typeahead` event handler. Default is 500 (miliseconds)',
    example: '500',
    type: PropTypes.PROPERTY
  })
  debounceTime?: string;


  @propDescription({
    description: 'debouncedInput event handler.',
    example: 'onDebouncedInput()',
    type: PropTypes.EVENT
  })
  debouncedInput?: string;

  @propDescription({
    description: 'Input initial value.',
    example: 'option-1',
    type: PropTypes.PROPERTY
  })
  value?: string;
}

type InputComponentConstrutor = new () => InputComponent;

type InputPropertiesConstrutor = new () => InputProperties;

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
      readonly: xmlRes.attrs.readonly === 'true',
      list: xmlRes.attrs.list?.split(',').map(o => o.trim()),
      ...xmlRes.attrs
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
  ],
  children: false
};
