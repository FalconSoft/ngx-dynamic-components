import { Component } from '@angular/core';
import { BaseUIComponent, ComponentDescriptor, propDescription,
  ComponentExample, UIModel, Categories, BindingProperties } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-input-ui',
  template: `
  <div class="form-group" [ngClass]="cssClasses" [ngStyle]="itemStyles">
    <ng-container *ngIf="properties.label; else noLabel">
      <label class="mr-1" [for]="id" [style.width]="properties.labelWidth || '80px'">{{properties.label}}</label>
      <input [id]="id" [type]="properties.type || 'text'" class="form-control"
        [style.width]="properties.inputWidth || '100%'"
        [placeholder]="properties.placeholder"
        [disabled]="!properties.enabled"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </ng-container>
    <ng-template #noLabel>
      <input [type]="properties.type || 'text'" class="form-control"
        [style.width]="properties.inputWidth || '100%'"
        [placeholder]="properties.placeholder"
        [disabled]="!properties.enabled"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </ng-template>
  </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class InputUIComponent extends BaseUIComponent<InputProperties> {

  get id() {
    return 'input-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
  }

  get cssClasses() {
    return {
      'd-flex align-items-baseline': (this.properties.labelOrientation || '').toLowerCase() === 'horizontal',
      'invisible': !this.properties.visible
    };
  }
}

export class InputProperties extends BindingProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;
  @propDescription({
    description: 'Label orientation',
    example: 'Username',
  })
  labelOrientation?: string;
  @propDescription({
    description: 'Label',
    example: 'Username',
  })
  label?: string;
  @propDescription({
    description: 'Input type',
    example: 'text',
  })
  type?: string;
  @propDescription({
    description: 'Is enabled',
    example: 'true',
  })
  enabled?: boolean;
  @propDescription({
    description: 'Is visible',
    example: 'true',
  })
  visible?: string;
  @propDescription({
    description: 'Input width',
    example: '200px',
  })
  inputWidth?: string;
  @propDescription({
    description: 'Label width',
    example: '80px',
  })
  labelWidth?: string;
}

export const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: {
    type: `${packageName}:text-input`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      placeholder: 'Enter your name',
      dataModelPath: '$.name'
    }
  },
  dataModel: {}
};

interface InputUIComponentConstrutor {
  new (): InputUIComponent;
}

interface InputPropertiesConstrutor {
  new (): InputProperties;
}

export const inputDescriptor: ComponentDescriptor<InputUIComponentConstrutor, InputPropertiesConstrutor> = {
  name: 'text-input',
  label: 'Text Input',
  packageName,
  category: Categories.Basic,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:text-input`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      placeholder: 'Enter your text',
      dataModelPath: '$.path',
      visible: true,
      enabled: true,
      inputWidth: '100%',
      labelWidth: '80px',
      width: '200px',
      margin: '0',
      labelOrientation: 'horizontal'
    }
  }
};
