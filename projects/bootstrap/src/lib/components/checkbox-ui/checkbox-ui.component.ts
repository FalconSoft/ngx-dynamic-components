import { Component } from '@angular/core';
import { BaseUIComponent, ComponentExample,
  ComponentDescriptor, UIModel, Categories, LabelProperties } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-checkbox-ui',
  template: `
    <div [fxLayout]="layout" [fxLayoutAlign]="align" [ngStyle]="itemStyles">
      <label *ngIf="hasLabel" [for]="id"  class="{{properties.labelPosition}} my-0"
      [fxFlex]="layout === 'row' ? properties.labelWidth : false">{{properties.label}}</label>
      <input type="checkbox" class="mx-0" [attr.id]="id"
        (change)="changedDataModel.emit(this.dataModel)"
        [(ngModel)]="componentDataModel">
    </div>
  `,
  styles: [`
    label.right, label.bottom {
      order: 1;
    }

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
export class CheckboxUIComponent extends BaseUIComponent<CheckboxProperties> {
  get id() {
    if (this.hasLabel) {
      return 'check-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
    }
  }

  get hasLabel() {
    return this.properties.labelPosition && this.properties.labelPosition !== 'none';
  }

  get layout() {
    return ['left', 'right', 'none'].includes(this.properties.labelPosition) ? 'row' : 'column';
  }

  get align() {
    return this.layout === 'row' ? 'start center' : 'center start';
  }
}

export class CheckboxProperties extends LabelProperties {

}

export const example: ComponentExample<UIModel<CheckboxProperties>> = {
  title: 'Checkbox example',
  uiModel: {
    type: `${packageName}:checkbox`,
    containerProperties: {},
    itemProperties: {
      label: 'Accept conditions',
      dataModelPath: '$.accept',
      labelPosition: 'right'
    }
  },
  dataModel: {}
};

interface CheckboxUIComponentConstrutor {
  new (): CheckboxUIComponent;
}

interface CheckboxPropertiesConstrutor {
  new (): CheckboxProperties;
}

export const checkboxDescriptor: ComponentDescriptor<CheckboxUIComponentConstrutor, CheckboxPropertiesConstrutor> = {
  name: 'checkbox',
  packageName,
  label: 'Checkbox',
  category: Categories.Basic,
  description: 'Checkbox component',
  itemProperties: CheckboxProperties,
  component: CheckboxUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:checkbox`,
    containerProperties: {},
    itemProperties: {
      label: 'Accept conditions',
      width: "200px",
      dataModelPath: '$.accept',
      labelPosition: 'left'
    }
  }
};

