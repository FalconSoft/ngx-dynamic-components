import { Component, OnInit, HostBinding, HostListener, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { FormElementComponent, FormElementProperties } from '../../components/form-element-component';

@Component({
  selector: 'textarea', // eslint-disable-line
  template: '{{value}}'
})
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
export class TextareaComponent extends FormElementComponent<TextareaProperties> implements OnInit, OnChanges, DoCheck {
  @HostBinding('attr.cols') cols: number;
  @HostBinding('attr.rows') rows: number;

  @HostListener('input', ['$event.target'])
  onInput(txtArea: HTMLTextAreaElement): void {
    this.componentDataModel = txtArea.value;
    this.emitEvent(this.properties.onInput, txtArea.value);
    this.changedDataModel.emit(this.dataModel);
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.cols = this.properties.cols || undefined;
    this.rows = this.properties.rows || undefined;
    this.value = this.componentDataModel;
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    await super.ngOnChanges(changes);
    if (changes.dataModel) {
      this.value = this.componentDataModel;
    }
  }

  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngDoCheck(): void {
    this.value = this.componentDataModel;
  }
}

export class TextareaProperties extends FormElementProperties {
  @propDescription({
    description: 'Number of rows in textarea',
    example: '5',
  })
  rows?: number;

  @propDescription({
    description: 'The visible width of the text control',
    example: '20',
  })
  cols?: number;
}

export const example: ComponentExample<UIModel<TextareaProperties>> = {
  title: 'Text area example',
  uiModel: `
  <textarea binding="$.info" placeholder="Type information about yourself" rows="10"></textarea>
  `,
  dataModel: {
    info: 'Data model textarea value'
  }
};

type TextareaComponentConstrutor = new() => TextareaComponent;

type TextareaPropertiesConstrutor = new() => TextareaProperties;

export const textareaDescriptor: ComponentDescriptor<TextareaComponentConstrutor, TextareaPropertiesConstrutor> = {
  name: 'textarea',
  label: 'Text Area',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: TextareaProperties = {
      readonly: xmlRes.attrs.readonly === 'true'
    };
    return {
      type: 'textarea',
      itemProperties
    };
  },
  defaultModel: '<textarea binding="$.info" rows="5"></textarea>',
  children: false
};
