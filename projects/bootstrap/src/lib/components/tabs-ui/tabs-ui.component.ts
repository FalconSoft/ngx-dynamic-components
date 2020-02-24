import { Component } from '@angular/core';
import { BaseUIComponent, ComponentExample, ComponentDescriptor, UIModel, StyleProperties,
  Categories } from '@ngx-dynamic-components/core';

import { packageName } from '../../constants';

@Component({
  selector: 'dc-tabs-ui',
  template: `
    <tabset drop-container class="tabset-fx">
      <tab *ngFor="let item of uiModel.children; let i = index" [heading]="item.containerProperties.label || 'Tab ' + (i + 1)">
      <dc-ui-selector
          (changedDataModel)="changedDataModel.emit(dataModel)"
          [uiModel]='item'
          [dataModel]='dataModel'
          [interpreter]='interpreter'
          [scripts]='scripts'></dc-ui-selector>
      </tab>
    </tabset>
  `
})
export class TabsUIComponent extends BaseUIComponent<TabsProperties> {

}

export class TabsProperties extends StyleProperties {
}

export const example: ComponentExample<UIModel<TabsProperties>> = {
  title: 'Tabs group example',
  uiModel: {
    type: 'bootstrap:tabs',
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
  name: 'tabs',
  label: 'Tabs container (Bootstrap)',
  packageName,
  category: Categories.Containers,
  description: 'Tabs component',
  itemProperties: TabsProperties,
  component: TabsUIComponent,
  example,
  defaultModel: {
    type: 'bootstrap:tabs',
    containerProperties: {},
    itemProperties: {},
    children: [{
      type: 'material:flex-container',
      containerProperties: {
        width: '100%',
        height: '100%',
        label: 'Tab 1',
      },
      itemProperties: {
        children: [],
        width: '100%',
        height: '100%',
      }
    }, {
      type: 'material:flex-container',
      containerProperties: {
        width: '100%',
        height: '100%',
        label: 'Tab 2',
      },
      itemProperties: {
        children: [],
        width: '100%',
        height: '100%',
      }
    }]
  }
};
