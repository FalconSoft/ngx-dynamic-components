import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor, UIModel, ComponentExample,
  propDescription, Categories, XMLResult, AttributesMap, OptionValue, JSONUtils } from '@ngx-dynamic-components/core';
import { packageName } from '../constants';

@Component({
  selector: 'dc-ui-select',
  template: `
    <mat-form-field>
      <mat-select [ngStyle]="itemStyles"
        [placeholder]="uiModel.itemProperties?.placeholder"
        (selectionChange)="onSelect()"
        [(ngModel)]="componentDataModel">
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{option.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class SelectUIComponent extends BaseUIComponent<SelectProperties> {
  onSelect(): void {
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.onSelect);
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

export class SelectProperties extends DataModelProperties {
  @propDescription({
    description: 'Select options or binding to dataModel.',
    example: '[{label: "One", value: 1}]',
  })
  itemsSource: string|OptionValue[];

  @propDescription({
    description: 'Label shown when no option is selected.',
    example: 'Please select an option',
  })
  placeholder: string;

  @propDescription({
    description: 'On Select handler name.',
    example: 'onCountrySelect',
  })
  onSelect?: string;
}

interface SelectUIComponentConstrutor {
  new (): SelectUIComponent;
}

interface SelectPropertiesConstrutor {
  new (): SelectProperties;
}

const example: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: `
    <mat-select placeholder="Country" binding="$.country">
      <option value="uk">United Kingdom</option>
      <option value="ua">Ukraine</option>
    </mat-select>
  `,
  dataModel: {},
  title: 'Basic select example'
};

export const selectDescriptor: ComponentDescriptor<SelectUIComponentConstrutor, SelectPropertiesConstrutor> = {
  name: 'mat-select',
  packageName,
  label: 'Dropdown (Material)',
  category: Categories.Basic,
  description: 'Select component',
  itemProperties: SelectProperties,
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
  component: SelectUIComponent,
  example
};
