import { Component } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor, propDescription,
  ComponentExample, UIModel } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../../constants';

@Component({
  selector: 'dc-input-ui',
  template: `
  <div class="form-group" [ngStyle]="containerStyles">
    <ng-container *ngIf="properties.label; else noLabel">
      <label [for]="id">{{properties.label}}</label>
      <input [id]="id" [type]="properties.type || 'text'" class="form-control"
        [placeholder]="properties.placeholder"
        [ngStyle]="itemStyles"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </ng-container>
    <ng-template #noLabel>
      <input [type]="properties.type || 'text'" class="form-control"
        [placeholder]="properties.placeholder"
        [ngStyle]="itemStyles"
        (input)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </ng-template>
  </div>
  `,
  styles: []
})
export class InputUIComponent extends BaseUIComponent<InputProperties> {
  get id() {
    return 'input-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
  }
}

export class InputProperties extends DataModelProperties {
  @propDescription({
    description: 'Text shown when field is empty',
    example: 'Type your name',
  })
  placeholder?: string;
  label?: string;
  type?: string;
}

export const example: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: {
    type: `${packageName}:text-input`,
    containerProperties: {},
    itemProperties: {
      label: 'Name',
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
  packageName,
  category: Categories.FormControl,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputUIComponent,
  example
};
