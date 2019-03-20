import { Component } from '@angular/core';
import { BaseUIComponent, ComponentExample, ComponentDescriptor, UIModel, ContainerProperties } from '@ngx-dynamic-components/core';

import { Categories, packageName } from '../../constants';

@Component({
  selector: 'dc-tabs-ui',
  template: `
    <mat-tab-group >
      <mat-tab *ngFor="let item of uiModel.children" [label]="item.itemProperties.label">
      <dc-ui-selector
        (changedDataModel)="changedDataModel.emit(dataModel)"
        [uiModel]='item'
        [dataModel]='dataModel'
        [workflowEngine]='workflowEngine'></dc-ui-selector>
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
        width: '100%'
      },
      itemProperties: {
        label: 'Input tab',
        isNumeric: false,
        isDate: false,
        format: '',
        placeholder: 'Inout text component',
        dataModelPath: '$.tabOne/inputValue'
      }
    }, {
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        label: 'Text tab',
        text: 'Text information',
      }
    }, {
      type: 'material:select',
      containerProperties: {},
      itemProperties: {
        label: 'Country select',
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
  packageName,
  category: Categories.Layout,
  description: 'Tabs group component',
  itemProperties: TabsProperties,
  component: TabsUIComponent,
  example
};
