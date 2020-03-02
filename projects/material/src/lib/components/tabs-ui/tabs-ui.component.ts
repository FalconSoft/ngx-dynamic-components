import { Component } from '@angular/core';
import { BaseUIComponent, ComponentExample, ComponentDescriptor, UIModel, ContainerProperties,
  Categories } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-tabs-ui',
  template: `
    <mat-tab-group >
      <mat-tab *ngFor="let item of uiModel.children; let i = index" [label]="item.containerProperties.label || 'Tab ' + (i + 1)">
        <dc-ui-selector
          (changedDataModel)="changedDataModel.emit(dataModel)"
          [uiModel]='item'
          [rootUIModel]='rootUIModel'
          [dataModel]='dataModel'
          [interpreter]='interpreter'
          [scripts]='scripts'></dc-ui-selector>
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
    type: 'material:tabs-group',
    containerProperties: {},
    itemProperties: {},
    children: [{
      type: 'material:text-input',
      containerProperties: {
        width: '100%',
        label: 'Input tab',
      },
      itemProperties: {
        isNumeric: false,
        isDate: false,
        format: '',
        placeholder: 'Inout text component',
        dataModelPath: '$.tabOne/inputValue'
      }
    }, {
      type: 'material:text',
      containerProperties: {
        label: 'Text tab',
      },
      itemProperties: {
        text: 'Text information',
      }
    }, {
      type: 'material:select',
      containerProperties: {
        label: 'Country select',
      },
      itemProperties: {
        options: [
          {label: 'United Kingdom', value: 'uk'},
          {label: 'Ukraine', value: 'ua'}
        ],
        placeholder: 'Country',
        dataModelPath: '$.country'
      }
    }]
  },
  dataModel: {}
};

interface TabsUIComponentConstrutor {
  new (): TabsUIComponent;
}

interface TabsPropertiesConstrutor {
  new (): TabsProperties;
}

export const tabsDescriptor: ComponentDescriptor<TabsUIComponentConstrutor, TabsPropertiesConstrutor> = {
  name: 'tabs-group',
  label: 'Tabs container (Material)',
  packageName,
  category: Categories.Containers,
  description: 'Tabs group component',
  itemProperties: TabsProperties,
  component: TabsUIComponent,
  example
};
