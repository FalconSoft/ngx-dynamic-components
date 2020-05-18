import { Component } from '@angular/core';
import { propDescription, BindingProperties } from '../../properties';
import { OptionValue, ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult, AttributesMap } from '../../models';
import { JSONUtils } from '../../utils/json.utils';
import { BaseUIComponent } from '../../components/base-ui-component';

@Component({
  selector: 'dc-radio-group',
  template: `
    <ng-container *ngFor="let option of options">
      <div class="d-flex align-items-center justify-content-between">
        <label class="my-0 mr-2" [for]="getId(option.value)" *ngIf="option.label">{{option.label}}</label>
        <input type="radio" (change)="onChange(option)" [attr.id]="getId(option.value)" [name]="properties.binding" [value]="option.value">
      </div>
    </ng-container>
  `,
  styleUrls: ['../../styles/label.scss']
})
export class RadioGroupComponent extends BaseUIComponent<RadioGroupProperties> {
  onChange(option: OptionValue): void {
    this.componentDataModel = option.value;
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.onChange);
  }

  getId(val: any): string {
    const selectKey = this.uiModel.id || this.properties.binding;
    return `select-${selectKey || ''}-option-${val}`;
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

export class RadioGroupProperties extends BindingProperties {
  @propDescription({
    description: 'Radio group options or binding to dataModel.',
    example: '[{label: "One", value: 1}]',
  })
  itemsSource: string|OptionValue[];

  @propDescription({
    description: 'On change event handler name.',
    example: 'onSelect',
  })
  onChange?: string;
}

export const example: ComponentExample<UIModel<RadioGroupProperties>> = {
  title: 'Radio group example',
  uiModel: `
  <section>
    <radio-group class="d-flex flex-column mr-4" binding="$.color">
      <option value="white">White</option>
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </radio-group>
    <radio-group itemsSource="$.genderOptions" binding="$.gender"></radio-group>
  </section>
  `,
  dataModel: {
    genderOptions: [{label: 'Man', value: 'm'}, {label: 'Woman', value: 'w'}]
  }
};

type RadioGroupComponentConstrutor = new () => RadioGroupComponent;

type RadioGroupPropertiesConstrutor = new () => RadioGroupProperties;

export const radioGroupDescriptor: ComponentDescriptor<RadioGroupComponentConstrutor, RadioGroupPropertiesConstrutor> = {
  name: 'radio-group',
  label: 'Single choice boxes',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Radio group component',
  itemProperties: RadioGroupProperties,
  component: RadioGroupComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => ({ label: r._, value: r.$.value }));
      xmlRes.childNodes = null;
    }
    return {
      type: 'radio-group',
      itemProperties
    };
  },
  defaultModel: '<radio-group itemsSource="$.options" binding="$.radioValue"></radio-group>',
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Radio option value'
    }]
  }]
};
