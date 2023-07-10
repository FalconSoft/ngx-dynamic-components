import { Component, HostBinding, OnInit } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';
import { TextProperties } from '../text/text.component';

@Component({
  // eslint-disable-next-line
  selector: 'label',
  template: `{{text}}`,
  styles: [`
    :host.form-check-label > label {
      margin-bottom: 0;
    }
  `]
})
export class LabelComponent extends BaseUIComponent<LabelProperties> implements OnInit {
  @HostBinding('style.display') display = 'inline-block';
  @HostBinding('attr.for') for: string;

  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.for = this.properties.for || undefined;
  }

  get text(): string {
    return this.componentDataModel || this.properties.text;
  }
}

export class LabelProperties extends TextProperties {
  @propDescription({
    description: 'The id of a labelable form-related element',
    example: 'checkboxId'
  })
  for?: string;
}

type LabelComponentConstrutor = new() => LabelComponent;

type LabelPropertiesConstrutor = new() => LabelProperties;

const example: ComponentExample<UIModel<LabelProperties>> = {
  title: 'Label compoent example',
  uiModel: `<label>Hello world</label>`,
  dataModel: {}
};

export const labelDescriptor: ComponentDescriptor<LabelComponentConstrutor, LabelPropertiesConstrutor> = {
  name: 'label',
  packageName: 'core',
  label: 'Label',
  category: Categories.Basic,
  description: 'Label component',
  itemProperties: LabelProperties,
  component: LabelComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const content = xmlRes.content;
    const itemProperties: AttributesMap = {};
    if (typeof content === 'string') {
      if (content.startsWith('$.')) {
        itemProperties.binding = content;
      } else {
        itemProperties.text = content;
      }
    }
    return {type: 'label', itemProperties};
  },
  defaultModel: '<label class="label">Label</label>',
  children: false
};
