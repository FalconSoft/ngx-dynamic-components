import { Component } from '@angular/core';
import {
  BindingProperties, propDescription, PropertyCategories, OptionValue,
  UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult, BaseUIComponent,
  PropTypes,
  queryValue
} from '@ngx-dynamic-components/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { packageName } from '../../constants';
import example from './input-typeahead.examples';

@Component({
  selector: 'dc-input-typeahead', // eslint-disable-line
  template: `
  <input
      [(ngModel)]="componentDataModel"
      [typeahead]="isAsync ? suggestions$ : suggestions"
      [typeaheadAsync]="isAsync"
      [placeholder]="properties.placeholder ?? ''"
      [typeaheadOptionField]="properties.typeaheadOptionField ?? 'label'"
      [typeaheadMultipleSearch]="properties.multiple"
      (input)="onInput($event)"
      (change)="onSelect($event)"/>
    `,
  styles: [`
    :host ::ng-deep .input-typeahead.input-typeahead-single .input-typeahead-container {
      height: inherit;
      min-height: 30px;
    }
  `]
})
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
export class InputTypeaheadComponent extends BaseUIComponent<InputTypeaheadProperties> {
  searchText$ = new Subject<string | null>();
  loading = false;
  suggestions$ = new Subject<OptionValue[]>();
  suggestions: OptionValue[];
  isAsync: boolean;

  private get debounceTime(): number {
    return this.properties.debounceTime ? parseInt(this.properties.debounceTime, 10) : 500;
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit(): Promise<void> {
    this.isAsync = !!this.properties.typeahead;
    await super.ngOnInit();
    this.searchText$
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
      )
      .subscribe(data => this.emitEvent(this.properties.typeahead, data, 'typeahead'));

    this.eventResults$
      .pipe(
        filter(event => event === 'typeahead')
      )
      .subscribe(() => this.suggestions$.next(this.eventResults.get('typeahead')));
    this.suggestions$.subscribe(val => this.suggestions = val);
    this.initSugesstions();
  }

  private initSugesstions(): void {
    let src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      src = queryValue(this.dataModel, src);
    }
    if (Array.isArray(src)) {
      this.suggestions$.next(src as OptionValue[]);
    }
  }

  onSelect(evt: Event): void {
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.change, this.componentDataModel);
  }

  onInput(evt: InputEvent): void {
    this.searchText$.next(this.componentDataModel);
  }
}

export class InputTypeaheadProperties extends BindingProperties {
  @propDescription({
    description: 'Select suggestions or binding to dataModel.',
    example: '[{label: "One", value: 1}]',
  })
  itemsSource: string | OptionValue[];

  @propDescription({
    description: 'Option field',
    defaultValue: 'label',
    example: '30px',
  })
  typeaheadOptionField?: string;

  @propDescription({
    description: 'Placeholder',
    example: 'Name',
  })
  placeholder?: string;

  @propDescription({
    description: 'Allows to select multiple items.',
    example: 'true'
  })
  multiple: boolean;

  @propDescription({
    description: 'Output change event handler.',
    example: 'onChange()',
    type: PropTypes.EVENT
  })
  change?: string;

  @propDescription({
    description: 'debounceTime in miliseconds. Used only with `typeahead` event handler. Default is 500 (miliseconds)',
    example: '500',
    type: PropTypes.PROPERTY
  })
  debounceTime?: string;


  @propDescription({
    description: 'Typeahead event handler.',
    example: 'onTypeahead()',
    type: PropTypes.EVENT
  })
  typeahead?: string;
}

type InputTypeaheadComponentConstrutor = new () => InputTypeaheadComponent;

type InputTypeaheadPropertiesConstrutor = new () => InputTypeaheadProperties;

export const inputTypeaheadDescriptor: ComponentDescriptor<InputTypeaheadComponentConstrutor, InputTypeaheadPropertiesConstrutor> = {
  name: 'input-typeahead',
  label: 'Input typeahead',
  packageName,
  category: Categories.Basic,
  description: 'Input typeahead component',
  itemProperties: InputTypeaheadProperties,
  component: InputTypeaheadComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => (
        { label: r._, value: r.$ && r.$.hasOwnProperty('value') ? r.$.value : r._ }
      ));
      xmlRes.childNodes = null;
    }

    itemProperties.multiple = xmlRes.attrs.multiple === 'true';

    return {
      type: 'input-typeahead',
      itemProperties
    };
  },
  defaultModel: `<input-typeahead width="100px" itemsSource="$.list" binding="$.value"></input-typeahead>`,
  propertiesDescriptor: [
    ['selectHeight', { name: 'selectHeight', label: 'Select Height', category: PropertyCategories.Layout }],
  ],
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Option value'
    }]
  }]
};
