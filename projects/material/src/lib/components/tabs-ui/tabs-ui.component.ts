import { Component } from '@angular/core';
import {
  BaseUIComponent, ComponentExample, ComponentDescriptor, UIModel, ContainerProperties,
  Categories
} from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-tabs',
  template: `
    <mat-tab-group >
      <mat-tab *ngFor="let item of uiModel.children; let i = index" [label]="'Tab ' + (i + 1)">
        <dc-ui-selector
          (changedDataModel)="changedDataModel.emit(dataModel)"
          [uiModel]='item'
          [dataModel]='dataModel'
          ></dc-ui-selector>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: []
})
export class TabsUIComponent extends BaseUIComponent<TabsProperties> {

}

export class TabsProperties extends ContainerProperties {
}

export const example: ComponentExample<UIModel<TabsProperties>> = {
  title: 'Tabs group example',
  uiModel: {
    type: 'mat-tab-group',
    itemProperties: {},
    children: [{
      type: 'mat-input',
      itemProperties: {
        isNumeric: false,
        isDate: false,
        format: '',
        placeholder: 'Inout text component',
        binding: '$.tabOne/inputValue'
      }
    }, {
      type: 'text',
      itemProperties: {
        text: 'Text information',
      }
    }, {
      type: 'mat-select',
      itemProperties: {
        options: [
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Ukraine', value: 'ua' }
        ],
        placeholder: 'Country',
        binding: '$.country'
      }
    }]
  },
  dataModel: {}
};

type TabsUIComponentConstrutor = new() => TabsUIComponent;

type TabsPropertiesConstrutor = new() => TabsProperties;

export const tabsDescriptor: ComponentDescriptor<TabsUIComponentConstrutor, TabsPropertiesConstrutor> = {
  name: 'mat-tab-group',
  label: 'Tabs container (Material)',
  packageName,
  category: Categories.Containers,
  description: 'Tabs group component',
  itemProperties: TabsProperties,
  component: TabsUIComponent,
  example
};
