import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, propDescription,
  ComponentDescriptor, ComponentExample, UIModel } from '@ngx-dynamic-components/core';
import { packageName, Categories } from '../../constants';

@Component({
  selector: 'dc-textarea-ui',
  template: `
    <div class="form-group" [ngStyle]="itemStyles">
      <label *ngIf="properties.label">{{properties.label}}</label>
      <textarea class="form-control"
        [rows]="properties.rows"
        [placeholder]="properties.placeholder"
        [ngStyle]="itemStyles"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel"></textarea>
    </div>
  `,
  styles: []
})
export class TextareaUIComponent extends BaseUIComponent<TextareaProperties> {
}

export class TextareaProperties extends DataModelProperties {
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
    description: 'Text area label',
    example: 'Type about yourself',
  })
  label?: string;
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
  packageName,
  category: Categories.FormControl,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaUIComponent,
  example
};
