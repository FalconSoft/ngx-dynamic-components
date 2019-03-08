import { CoreService } from '@ngx-dynamic-components/core';

import { ButtonUIComponent } from './button-ui-component';
import { FlexContainerUIComponent } from './flex-container-ui-component';
import { CardUIComponent } from './card-ui-component';
import { CheckboxUIComponent } from './checkbox-ui-component';
import { InputUIComponent } from './input-ui-component';
import { SelectUIComponent, SelectProperties} from './select-ui-component';
import { TextUIComponent } from './text-ui-component';
import { TextareaUIComponent } from './textarea-ui-component';

export const COMPONENTS_LIST = [{
  desc: {
    name: 'card',
    package: 'material',
    category: 'Layout',
    description: 'Card layout component'
  },
  component: CardUIComponent
}, {
  desc: {
    name: 'flex-container',
    package: 'material',
    category: 'Layout',
    description: 'Flex layout component'
  },
  component: FlexContainerUIComponent
}, {
  desc: {
    name: 'text-input',
    package: 'material',
    category: 'Form control',
    description: 'Input component'
  },
  component: InputUIComponent
}, {
  desc: {
    name: 'checkbox',
    package: 'material',
    category: 'Form control',
    description: 'Checkbox component'
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
    description: 'Text area component'
  },
  component: TextareaUIComponent
}, {
  desc: {
    name: 'button',
    package: 'material',
    category: 'Button',
    description: 'Button component'
  },
  component: ButtonUIComponent
}, {
  desc: {
    name: 'text',
    package: 'material',
    category: 'Text',
    description: 'Text component'
  },
  component: TextUIComponent
}];

// Register components.
export function registerComponents() {
  COMPONENTS_LIST.forEach(({desc, component}) => CoreService.registerComponent(desc, component));
}
