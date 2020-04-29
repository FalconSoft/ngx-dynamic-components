import { Component } from '@angular/core';
import { propDescription, PropertyCategories, BindingProperties } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, AttributesMap, XMLResult } from '../../models';
import { BaseUIComponent } from '../../components/base-ui-component';

@Component({
  selector: 'dc-input',
  templateUrl: './input.component.html',
  styles: [`
    :host {
      display: inline-block;
    }

    :host.form-check-input > input {
      width: auto;
      height: auto;
    }

    .required label:after {
      content: '*';
    }
  `]
})
export class InputComponent extends BaseUIComponent<InputProperties> {
  get cssClasses(): {[key: string]: boolean} {
    return {
      invisible: this.properties.visible === false,
      required: this.properties.required,
      [this.properties.class]: Boolean(this.properties.class)
    };
  }

  get inputCssClasses(): string {
    return this.properties.readonly ? 'form-control-plaintext' : 'form-control';
  }

  get inputStyles(): {[key: string]: string} {
    return this.getStyles(this.uiModel.itemProperties, ['background', 'color']);
  }

  get wrapperStyles(): AttributesMap {
    if (this.properties.inputHeight) {
      return {
        height: this.properties.inputHeight
      };
    }
    return null;
  }

  get name(): string {
    return this.properties.binding?.replace(/[^A-Z]+/gi, '');
  }

  onInput(event: any): void {
    this.setValue(event, this.properties.onInput);
  }

  onChange(event?: any): void {
     this.setValue(event, this.properties.onChange);
  }

  private setValue(event: any, prop: string): void {
    this.changedDataModel.emit(this.dataModel);
    if (this.properties.type === 'checkbox') {
      this.emitEvent(prop, event.target.checked);
    } else {
      this.emitEvent(prop, event.target.value);
    }
  }
}

export class InputProperties extends BindingProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;
  @propDescription({
    description: 'Input type',
    example: 'text',
  })
  type?: string;
  @propDescription({
    description: 'It specifies that the input value.',
    example: 'option1',
  })
  value?: string;
  @propDescription({
    description: 'It specifies that the input should be disabled.',
    example: 'true',
  })
  disabled?: boolean;
  @propDescription({
    description: 'It specifies that the input should be read only.',
    example: 'true',
  })
  readonly?: boolean;
  @propDescription({
    description: 'Is visible',
    example: 'true',
  })
  visible?: boolean;
  @propDescription({
    description: 'Input width',
    example: '200px',
  })
  inputWidth?: string;
  @propDescription({
    description: 'Field input height',
    example: '20px'
  })
  inputHeight?: string;
  @propDescription({
    description: 'Is field required',
    example: 'true'
  })
  required?: boolean;
  @propDescription({
    description: 'Min field value length',
    example: '5'
  })
  minlength?: number;
  @propDescription({
    description: 'Max field value length',
    example: '10'
  })
  maxlength?: number;
  @propDescription({
    description: 'RegExp pattern',
    example: '[a-zA-Z ]*'
  })
  pattern?: string;

  @propDescription({
    description: 'Key for action that fires on input',
    example: 'onInput()',
  })
  onInput?: string;

  @propDescription({
    description: 'On change event handler name.',
    example: 'onChange',
  })
  'onChange'?: string;
}

export const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: `
  <section class="flex-column">
    <section class="form-group">
      <label class="col-form-label" width="80px">Name</label>
      <input onInput="onNameInput(name)" placeholder="Enter your name" binding="$.name"/>
    </section>
    <section class="form-group">
      <label class="col-form-label" width="80px">Last name</label>
      <input disabled="true" placeholder="Enter your last name" binding="$.lastName"/>
    </section>
    <section class="form-group form-check">
      <input type="checkbox" class="form-check-input" binding="$.subscribed"/>
      <label class="form-check-label" width="80px">Subscribe</label>
    </section>
    <section class="form-group form-check mt-5">
      <input type="radio" class="form-check-input" value="option-1" binding="$.option"/>
      <label class="form-check-label" width="80px">Option 1</label>
    </section>
    <section class="form-group form-check">
      <input type="radio" class="form-check-input" value="option-2" binding="$.option"/>
      <label class="form-check-label" width="80px">Option 2</label>
    </section>
    <section class="form-group form-check">
      <input type="radio" class="form-check-input" value="option-3" binding="$.option"/>
      <label class="form-check-label" width="80px">Option 3</label>
    </section>
  </section>
  `,
  scripts: `
  def onNameInput(name):
    disabled = name == ""
    JSONUtils.setValue(rootUIModel, "$(children:id=lastName)/itemProperties/disabled", disabled)
  `,
  dataModel: {}
};

interface InputComponentConstrutor {
  new (): InputComponent;
}

interface InputPropertiesConstrutor {
  new (): InputProperties;
}

export const inputDescriptor: ComponentDescriptor<InputComponentConstrutor, InputPropertiesConstrutor> = {
  name: 'input',
  label: 'Input field',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: AttributesMap = {
      readonly: xmlRes.attrs.readonly === 'true'
    };

    return {
      type: 'input',
      itemProperties
    };
  },
  defaultModel: `<input onInput="onInputHandler(name)" placeholder="Enter your name" binding="$.name"/>`,
  propertiesDescriptor: [
    ['type', {name: 'type', label: 'Data Type', category: PropertyCategories.Main,
      values: ['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']
    }],
    ['inputWidth', {name: 'inputWidth', label: 'Input Width', category: PropertyCategories.Layout}],
    ['inputHeight', {name: 'inputHeight', label: 'Input Height', category: PropertyCategories.Layout}],
    ['visible', { name: 'visible', label: 'Visible', category: PropertyCategories.Main,
      values: [true, false]
    }]
  ],
  children: false
};
