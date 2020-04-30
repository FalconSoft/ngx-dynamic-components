import { Component, HostBinding } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { BindingProperties } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';

@Component({
  // tslint:disable-next-line
  selector: 'label',
  template: `{{text}}`,
  styles: [`
    :host.form-check-label > label {
      margin-bottom: 0;
    }
  `]
})
export class LabelComponent extends BaseUIComponent<LabelProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get text(): string {
    return this.componentDataModel || this.properties.text;
  }
}

export class LabelProperties extends BindingProperties { }

interface LabelComponentConstrutor {
  new(): LabelComponent;
}

interface LabelPropertiesConstrutor {
  new(): LabelProperties;
}

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
  children: false
};
