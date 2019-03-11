import { Component } from '@angular/core';
import { BaseUIComponent, AttributesMap, propDescription, ComponentDescriptor } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';

@Component({
    selector: 'dc-ui-text',
    template: `
    <span [style.width]="uiModel.itemProperties?.width">{{uiModel.itemProperties?.text}}
    </span>
    `,
    styles: [
      `   span {
              border-bottom: 2px solid black;
              display: inline-block;
              margin-bottom: 1.25rem;
              margin-top: 1rem;
              padding: .5rem 0;
          }
      `
    ]
})
export class TextUIComponent extends BaseUIComponent<TextProperties> {

}

export class TextProperties implements AttributesMap {
  @propDescription({
    description: 'Displays text data.',
    example: 'Text information',
  })
  text: string;

  @propDescription({
    description: 'Element width',
    example: '100%',
  })
  width: string;
}

interface TextUIComponentConstrutor {
  new (): TextUIComponent;
}

interface TextPropertiesConstrutor {
  new (): TextProperties;
}

export const textDescriptor: ComponentDescriptor<TextUIComponentConstrutor, TextPropertiesConstrutor>  = {
  name: 'text',
  package: packageName,
  category: Categories.Text,
  description: 'Text component',
  itemProperties: TextProperties,
  component: TextUIComponent
};
