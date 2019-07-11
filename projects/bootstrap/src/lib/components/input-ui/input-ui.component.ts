import { Component, HostBinding, OnInit } from '@angular/core';
import { BaseUIComponent, DataModelProperties, ComponentDescriptor, propDescription,
  ComponentExample, UIModel, Categories } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

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
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class InputUIComponent extends BaseUIComponent<InputProperties> implements OnInit {
  @HostBinding('style.width') width: string;

  async ngOnInit() {
    if (this.properties.width) {
      this.width = this.properties.width;
    }
  }

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
  @propDescription({
    description: 'Label',
    example: 'Username',
  })
  label?: string;
  type?: string;
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
  example
};
