import { Component, HostListener, HostBinding, DoCheck } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { AttributesMap, OptionValue, ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { JSONUtils } from '../../utils/json.utils';
import { BindingProperties, propDescription, PropertyCategories } from '../../properties';

@Component({
  selector: 'select', // tslint:disable-line
  template: `
      <ng-container>
        <option [selected]="option.value === value" *ngFor="let option of options" [value]="option.value">{{option.label}}</option>
      </ng-container>
    `
})

export class SelectComponent extends BaseUIComponent<SelectProperties> implements DoCheck {

  @HostBinding('attr.value') value: string;
  private optionsList: OptionValue[];
  private src: string|OptionValue[];

  @HostListener('change', ['$event.target'])
  onSelect(select: HTMLSelectElement): void {
    this.componentDataModel = select.value;
    this.emitEvent(this.properties.onSelect, this.optionsList.find(o => o.value === select.value));
    this.changedDataModel.emit(this.dataModel);
  }

  ngDoCheck(): void {
    if (this.componentDataModel !== this.value) {
      this.value = this.componentDataModel;
    }
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

    if (this.optionsList && typeof src === 'object' && src === this.src) {
      return this.optionsList;
    }
    let list: any[];
    if (Array.isArray(src)) {
      list = src;
    }

    if (typeof src === 'string' && src.startsWith('$.')) {
      list = JSONUtils.find(this.dataModel, src);
    }

    if (list && (this.properties.labelProp || this.properties.valueProp)) {
      const labelProp = this.properties.labelProp || 'label';
      const valueProp = this.properties.valueProp || 'value';
      list = list.map(o => ({
        label: o[labelProp],
        value: o[valueProp],
        data: o
      }));
    } else {
      list = list || [];
    }
    this.src = src;

    if (JSON.stringify(list) !== JSON.stringify(this.optionsList)) {
      this.optionsList = list;
    }

    return this.optionsList;
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

  @propDescription({
    description: 'On Select handler name.',
    example: 'onCountrySelect',
  })
  onSelect?: string;

  labelProp?: string;
  valueProp?: string;
}

type SelectComponentConstrutor = new () => SelectComponent;

type SelectPropertiesConstrutor = new () => SelectProperties;

export const example: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: `
    <section class="flex-column">
      <section class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <select class="form-control" onSelect="countryChanged()" width="300px" binding="$.country">
          <option>Select country</option>
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </select>
      </section>
      <section class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <select class="form-control" width="300px" itemsSource="$.cities" binding="$.city"></select>
      </section>
    </section>
  `,
  dataModel: {},
  scripts: `
  def countryChanged():
    dataModel.city = null
    print(dataModel.country)
    if dataModel.country == null:
      dataModel.cities = []
    if dataModel.country == "uk":
      dataModel.cities = [{label: "Select city", value: null}, {label: "London", value: "lon"}, {label: "Liverpool", value: "liv"}]
    if dataModel.country == "ua":
      dataModel.cities = [{label: "Select city", value: null}, {label: "Kyiv", value: "kyiv"}, {label: "Lviv", value: "lviv"}]
  `,
  title: 'Basic select example'
};

export const selectDescriptor: ComponentDescriptor<SelectComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'select',
  label: 'UI Select Input',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Select component',
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

    return {
      type: 'select',
      itemProperties
    };
  },
  defaultModel: `<select width="100px" itemsSource="$.list" binding="$.value"></select>`,
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
