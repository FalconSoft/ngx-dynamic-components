import { Component } from '@angular/core';
import { LabeledComponent, propDescription,
  ComponentDescriptor, ComponentExample, UIModel, Categories, LabelProperties } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-textarea-ui',
  template: `
    <div class="form-group" [ngStyle]="itemStyles"  [fxLayout]="layout">
      <label *ngIf="hasLabel" [class]="properties.labelPosition" [for]="id"
        [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
      <div class="w-100 flex-column">
        <textarea #txtAreaField="ngModel" [attr.id]="id" class="form-control"
          [rows]="properties.rows"
          [placeholder]="properties.placeholder"
          [ngStyle]="itemStyles"
          [required]="properties.required"
          [minlength]="properties.minlength"
          [maxlength]="properties.maxlength"
          (input)="changedDataModel.emit(this.dataModel)"
          [(ngModel)]="componentDataModel"></textarea>
        <div *ngIf="txtAreaField.invalid && (txtAreaField.dirty || txtAreaField.touched)" class="alert alert-danger py-0 px-1 m-0">
          <div *ngIf="txtAreaField.errors.required">Field is required.</div>
          <div *ngIf="txtAreaField.errors.minlength">Min length {{properties.minlength}} characters.</div>
          <div *ngIf="txtAreaField.errors.maxlength">Max length {{properties.minlength}} characters.</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../../styles/label.scss']
})
export class TextareaUIComponent extends LabeledComponent<TextareaProperties> {
}

export class TextareaProperties extends LabelProperties {
  @propDescription({
    description: 'Number of rows in textarea',
    example: '5',
  })
  rows: number;

  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type about yourself',
  })
  placeholder: string;

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
}

export const example: ComponentExample<UIModel<TextareaProperties>> = {
  title: 'Text area example',
  uiModel: {
    type: `${packageName}:textarea`,
    containerProperties: {},
    itemProperties: {
      rows: 10,
      placeholder: 'Type information about yourself',
      dataModelPath: '$.info'
    }
  },
  dataModel: {}
};

interface TextareaUIComponentConstrutor {
  new (): TextareaUIComponent;
}

interface TextareaPropertiesConstrutor {
  new (): TextareaProperties;
}

export const textareaDescriptor: ComponentDescriptor<TextareaUIComponentConstrutor, TextareaPropertiesConstrutor> = {
  name: 'textarea',
  label: 'Text Area',
  packageName,
  category: Categories.Basic,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:textarea`,
    containerProperties: {},
    itemProperties: {
      label: 'Label',
      rows: 5,
      placeholder: 'Placeholder text',
      dataModelPath: '$.textarea'
    }
  }
};
