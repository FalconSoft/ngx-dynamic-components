import { Component } from '@angular/core';
import { LabeledComponent } from '../../components/labeled.component';
import { LabelProperties, propDescription } from '../../properties';
import { OptionValue, ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult, AttributesMap } from '../../models';
import { JSONUtils } from '../../utils/json.utils';

@Component({
  selector: 'dc-radio-group',
  template: `
    <div class="form-check my-1" *ngFor="let option of options"
      [fxLayout]="layout" [fxLayoutAlign]="align" [ngStyle]="itemStyles">
      <label class="my-0 {{properties.labelPosition}}" [for]="getId(option.value)" *ngIf="hasLabel"
        [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{option.label}}</label>
      <input type="radio" (change)="onChange(option)" [attr.id]="getId(option.value)" [name]="properties.binding" [value]="option.value">
    </div>
  `,
  styleUrls: ['../../styles/label.scss']
})
export class RadioGroupComponent extends LabeledComponent<RadioGroupProperties> {
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

export class RadioGroupProperties extends LabelProperties {
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
    <radio-group labelPosition="right" binding="$.color">
      <option value="white">White</option>
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </radio-group>
    <radio-group itemsSource="$.genderOptions" labelPosition="right" binding="$.gender"></radio-group>
  </section>
  `,
  dataModel: {
    genderOptions: [{label: 'Man', value: 'm'}, {label: 'Woman', value: 'w'}]
  }
};

interface RadioGroupComponentConstrutor {
  new (): RadioGroupComponent;
}

interface RadioGroupPropertiesConstrutor {
  new (): RadioGroupProperties;
}

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
  defaultModel: '<radio-group itemsSource="$.options" labelPosition="right" binding="$.radioValue"></radio-group>',
  children: {
    tag: 'option',
    properties: [{
      name: 'value',
      description: 'Radio option value'
    }]
  }
};
