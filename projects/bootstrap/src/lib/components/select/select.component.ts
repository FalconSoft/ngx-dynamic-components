import { Component } from '@angular/core';
import { BindingProperties, propDescription, PropertyCategories,  OptionValue,
  UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult, BaseUIComponent, PropTypes, queryValue } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';
import example from './select.examples';

@Component({
  selector: 'dc-select',
  template: `
  <ng-select [items]="options" [ngStyle]="selectStyles"
      [(ngModel)]="componentDataModel" [bindLabel]="properties.bindLabel"
      [bindValue]="properties.bindValue || 'value'" [placeholder]="properties.placeholder"
      (add)="emitEvent(properties.add, $event)"
      (blur)="emitEvent(properties.blur, $event)"
      (change)="onSelect()"
      (close)="emitEvent(properties.close, $event)"
      (clear)="emitEvent(properties.clear, $event)"
      (focus)="emitEvent(properties.focus, $event)"
      (search)="emitEvent(properties.search, $event)"
      (open)="emitEvent(properties.open, $event)"
      (remove)="emitEvent(properties.remove, $event)"
      (scroll)="emitEvent(properties.scroll, $event)"
      (scrollToEnd)="emitEvent(properties.scrollToEnd, $event)"></ng-select>
    `,
  styles: [`
    :host ::ng-deep .ng-select.ng-select-single .ng-select-container {
      height: inherit;
      min-height: 30px;
    }
  `]
})

export class SelectComponent extends BaseUIComponent<SelectProperties> {
  onSelect(): void {
    this.changedDataModel.emit(this.dataModel);
    // onSelect - deprecated.
    this.emitEvent(this.properties.onSelect);
    this.emitEvent(this.properties.change);
  }

  emitEvent(prop: string, param?: any): void {
    super.emitEvent(prop, param);
  }

  get selectStyles(): AttributesMap {
    if (this.properties.selectHeight) {
      return {
        height: this.properties.selectHeight
      };
    }
    return null;
  }

  get options(): OptionValue[] {
    const src = this.properties.itemsSource;
    if (Array.isArray(src)) {
      return src;
    }

    if (typeof src === 'string' && src.startsWith('$.')) {
      return queryValue(this.dataModel, src);
    }
  }
}

export class SelectProperties extends BindingProperties {
  @propDescription({
    description: 'Select options or binding to dataModel.',
    example: '[{label: "One", value: 1}]',
  })
  itemsSource: string|OptionValue[];

  @propDescription({
    description: 'Select height.',
    example: '30px',
  })
  selectHeight?: string;

  /** @deprecated */
  onSelect?: string;

  @propDescription({
    description: 'Placeholder',
    example: 'Select name',
  })
  placeholder?: string;

  @propDescription({
    description: 'Label property.',
    example: 'name',
  })
  bindLabel?: string;

  @propDescription({
    description: 'Value property.',
    example: 'id',
  })
  bindValue?: string;

  @propDescription({
    description: 'Allows to select multiple items.',
    example: 'true'
  })
  multiple: boolean;

  @propDescription({
    description: 'Output add event handler.',
    example: 'onAdd()',
    type: PropTypes.EVENT
  })
  add?: string;

  @propDescription({
    description: 'Output blur event handler.',
    example: 'onBlur()',
    type: PropTypes.EVENT
  })
  blur?: string;

  @propDescription({
    description: 'Output change event handler.',
    example: 'onChange()',
    type: PropTypes.EVENT
  })
  change?: string;

  @propDescription({
    description: 'Output close event handler.',
    example: 'onClose()',
    type: PropTypes.EVENT
  })
  close?: string;

  @propDescription({
    description: 'Output clear event handler.',
    example: 'onClear()',
    type: PropTypes.EVENT
  })
  clear?: string;

  @propDescription({
    description: 'Output focus event handler.',
    example: 'onFocus()',
    type: PropTypes.EVENT
  })
  focus?: string;

  @propDescription({
    description: 'Output search event handler.',
    example: 'onSearch()',
    type: PropTypes.EVENT
  })
  search?: string;

  @propDescription({
    description: 'Output open event handler.',
    example: 'onOpen()',
    type: PropTypes.EVENT
  })
  open?: string;

  @propDescription({
    description: 'Output remove event handler.',
    example: 'onRemove()',
    type: PropTypes.EVENT
  })
  remove?: string;

  @propDescription({
    description: 'Output scroll event handler.',
    example: 'onScroll()',
    type: PropTypes.EVENT
  })
  scroll?: string;

  @propDescription({
    description: 'Output scrollToEnd event handler.',
    example: 'onScrollToEnd()',
    type: PropTypes.EVENT
  })
  scrollToEnd?: string;
}

type SelectComponentConstrutor = new () => SelectComponent;

type SelectPropertiesConstrutor = new () => SelectProperties;

export const selectDescriptor: ComponentDescriptor<SelectComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'ng-select',
  label: 'UI Select Input',
  packageName,
  category: Categories.Basic,
  description: 'NG Select component',
  itemProperties: SelectProperties,
  component: SelectComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => {
        return { label: r._, value: r.$ && r.$.hasOwnProperty('value') ? r.$.value : r._ };
      });
      xmlRes.childNodes = null;
    }

    itemProperties.multiple = xmlRes.attrs.multiple === 'true';

    return {
      type: 'ng-select',
      itemProperties
    };
  },
  defaultModel: `<ng-select width="100px" itemsSource="$.list" binding="$.value"></ng-select>`,
  propertiesDescriptor: [
    ['selectHeight', {name: 'selectHeight', label: 'Select Height', category: PropertyCategories.Layout}],
  ],
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Option value'
    }]
  }]
};
