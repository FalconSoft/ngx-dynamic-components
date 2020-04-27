import { Component } from '@angular/core';
import { LabeledComponent } from '../../components/labeled.component';
import { LabelProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
  selector: 'dc-checkbox',
  template: `
    <div [fxLayout]="layout" [fxLayoutAlign]="align" [ngStyle]="itemStyles">
      <label *ngIf="hasLabel" [for]="id" class="{{properties.labelPosition}} my-0"
      [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
      <input type="checkbox" class="mx-0" [attr.id]="id"
        (change)="onChange()"
        [(ngModel)]="componentDataModel">
    </div>
  `,
  styleUrls: ['../../styles/label.scss'],
  styles: [`
    label.bottom, label.top {
      margin: 0;
    }

    label.right {
      margin-left: 5px;
    }

    label.left {
      margin-right: 5px;
    }
  `]
})
export class CheckboxComponent extends LabeledComponent<CheckboxProperties> {
  onChange(): void {
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.onChange);
  }
}

export class CheckboxProperties extends LabelProperties {
  @propDescription({
    description: 'On change event handler name.',
    example: 'onCheck',
  })
  'onChange'?: string;
}

export const example: ComponentExample<UIModel<CheckboxProperties>> = {
  title: 'Checkbox example',
  uiModel: `
  <checkbox label="Subscribe" labelPosition="right" binding="$.subscribed"></checkbox>
  `,
  dataModel: {}
};

interface CheckboxComponentConstrutor {
  new (): CheckboxComponent;
}

interface CheckboxPropertiesConstrutor {
  new (): CheckboxProperties;
}

export const checkboxDescriptor: ComponentDescriptor<CheckboxComponentConstrutor, CheckboxPropertiesConstrutor> = {
  name: 'checkbox',
  packageName: 'core',
  label: 'Checkbox',
  category: Categories.Basic,
  description: 'Checkbox component',
  itemProperties: CheckboxProperties,
  component: CheckboxComponent,
  example,
  defaultModel: `<checkbox label="Check me" labelPosition="left" binding="$.checked"></checkbox>`,
  children: false
};
