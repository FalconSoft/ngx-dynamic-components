import { Component } from '@angular/core';
import { LabeledComponent } from '../../components/labeled.component';
import { LabelProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';

@Component({
  selector: 'dc-textarea',
  template: `
    <div class="form-group" [ngStyle]="itemStyles"  [fxLayout]="layout">
      <label *ngIf="hasLabel" [class]="properties.labelPosition" [for]="id"
        [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
      <div class="w-100 flex-column">
        <textarea #txtAreaField="ngModel" [attr.id]="id" [class]="controlCssClasses"
          [rows]="properties.rows"
          [placeholder]="properties.placeholder"
          [ngStyle]="itemStyles"
          [required]="properties.required"
          [minlength]="properties.minlength"
          [maxlength]="properties.maxlength"
          (input)="changedDataModel.emit(this.dataModel)"
          [attr.readonly]="properties.readonly || null"
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
export class TextareaComponent extends LabeledComponent<TextareaProperties> {
  get controlCssClasses(): string {
    return this.properties.readonly ? 'form-control-plaintext' : 'form-control';
  }
}

export class TextareaProperties extends LabelProperties {
  @propDescription({
    description: 'Number of rows in textarea',
    example: '5',
  })
  rows?: number;

  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type about yourself',
  })
  placeholder?: string;

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
    description: 'It specifies that the textarea should be read only.',
    example: 'true',
  })
  readonly?: boolean;
}

export const example: ComponentExample<UIModel<TextareaProperties>> = {
  title: 'Text area example',
  uiModel: `
  <textarea binding="$.info" placeholder="Type information about yourself" rows="10"></textarea>
  `,
  dataModel: {}
};

interface TextareaComponentConstrutor {
  new (): TextareaComponent;
}

interface TextareaPropertiesConstrutor {
  new (): TextareaProperties;
}

export const textareaDescriptor: ComponentDescriptor<TextareaComponentConstrutor, TextareaPropertiesConstrutor> = {
  name: 'textarea',
  label: 'Text Area',
  packageName: 'core',
  category: Categories.Basic,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaComponent,
  example,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const itemProperties: TextareaProperties = {
      readonly: xmlRes.attrs.readonly === 'true'
    };
    return {
      type: 'textarea',
      itemProperties
    };
  },
  defaultModel: '<textarea binding="$.info" rows="5"></textarea>',
  children: false
};
