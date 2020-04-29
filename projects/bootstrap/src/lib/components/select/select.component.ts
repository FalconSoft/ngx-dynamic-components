import { Component } from '@angular/core';
import { JSONUtils, BindingProperties, propDescription, PropertyCategories,  OptionValue,  ComponentExample,
  UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult, BaseUIComponent } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-select',
  template: `
  <ng-select [items]="options" (change)="onSelect()" [ngStyle]="selectStyles"
      [(ngModel)]="componentDataModel" bindValue="value"></ng-select>
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
    this.emitEvent(this.properties.onSelect);
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
      return JSONUtils.find(this.dataModel, src);
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

  @propDescription({
    description: 'On Select handler name.',
    example: 'onCountrySelect',
  })
  onSelect?: string;
}

interface SelectComponentConstrutor {
  new (): SelectComponent;
}

interface SelectPropertiesConstrutor {
  new (): SelectProperties;
}

export const example: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: `
    <section class="flex-column">
      <section class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <select onSelect="countryChanged" width="300px" binding="$.country">
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </select>
      </section>
      <section class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <select width="300px" itemsSource="$.cities" binding="$.city"></select>
      </section>
    </section>
  `,
  dataModel: {},
  scripts: `
  def countryChanged():
    dataModel.city = null
    if dataModel.country == null:
      dataModel.cities = []
    if dataModel.country == "uk":
      dataModel.cities = [{label: "London", value: "lon"}, {label: "Liverpool", value: "liv"}]
    if dataModel.country == "ua":
      dataModel.cities = [{label: "Kyiv", value: "kyiv"}, {label: "Lviv", value: "lvi"}]
  `,
  title: 'Basic select example'
};

export const selectDescriptor: ComponentDescriptor<SelectComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'select',
  label: 'UI Select Input',
  packageName,
  category: Categories.Basic,
  description: 'Select component',
  itemProperties: SelectProperties,
  component: SelectComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => {
        return { label: r._, value: r.$.value };
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
  children: {
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Option value'
    }]
  }
};
