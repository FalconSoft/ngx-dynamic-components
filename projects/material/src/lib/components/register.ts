import { CoreService } from '@ngx-dynamic-components/core';

import { ButtonUIComponent, ButtonProperties } from './button-ui-component';
import { FlexContainerUIComponent, FlexContainerProperties } from './flex-container-ui-component';
import { CardUIComponent, CardProperties } from './card-ui-component';
import { CheckboxUIComponent, CheckboxProperties } from './checkbox-ui-component';
import { InputUIComponent, InputProperties } from './input-ui-component';
import { SelectUIComponent, SelectProperties} from './select-ui-component';
import { TextUIComponent, TextProperties } from './text-ui-component';
import { TextareaUIComponent, TextareaProperties } from './textarea-ui-component';

export const COMPONENTS_LIST = [{
  desc: {
    name: 'card',
    package: 'material',
    category: 'Layout',
    description: 'Card layout component',
    itemProperties: CardProperties
  },
  component: CardUIComponent
}, {
  desc: {
    name: 'flex-container',
    package: 'material',
    category: 'Layout',
    description: 'Flex layout component',
    itemProperties: FlexContainerProperties
  },
  component: FlexContainerUIComponent
}, {
  desc: {
    name: 'text-input',
    package: 'material',
    category: 'Form control',
    description: 'Input component',
    itemProperties: InputProperties
  },
  component: InputUIComponent
}, {
  desc: {
    name: 'checkbox',
    package: 'material',
    category: 'Form control',
    description: 'Checkbox component',
    itemProperties: CheckboxProperties
  },
  component: CheckboxUIComponent
}, {
  desc: {
    name: 'select',
    package: 'material',
    category: 'Form control',
    description: 'Select component',
    itemProperties: SelectProperties
  },
  component: SelectUIComponent
}, {
  desc: {
    name: 'textarea',
    package: 'material',
    category: 'Form control',
    description: 'Text area component',
    itemProperties: TextareaProperties
  },
  component: TextareaUIComponent
}, {
  desc: {
    name: 'button',
    package: 'material',
    category: 'Button',
    description: 'Button component',
    itemProperties: ButtonProperties
  },
  component: ButtonUIComponent
}, {
  desc: {
    name: 'text',
    package: 'material',
    category: 'Text',
    description: 'Text component',
    itemProperties: TextProperties
  },
  component: TextUIComponent
}];

// Register components.
export function registerComponents() {
  COMPONENTS_LIST.forEach(({desc, component}) => CoreService.registerComponent(desc, component));
}
