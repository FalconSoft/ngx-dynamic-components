import { Component } from '@angular/core';
import { BaseUIComponent, ComponentExample, ComponentConfiguration,
  propDescription, ComponentDescriptor, UIModel, StyleProperties } from '@ngx-dynamic-components/core';

import { Categories, packageName } from '../../constants';

@Component({
  selector: 'dc-tabs-ui',
  template: `
    <mat-tab-group>
      <mat-tab *ngFor="let tab of uiModel.itemProperties.tabs" [label]="tab.label">
        {{tab.text}}
        <div *ngIf="tab.html" [innerHTML]="tab.html"></div>
        <ng-container *ngIf="tab.component as component">
        <dc-ui-selector
            (changedDataModel)="onComponentChange(component)"
            [uiModel]='component.uiModel'
            [dataModel]='dataModel'
            [workflowEngine]='component.workflowEngine'></dc-ui-selector>
        </ng-container>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: []
})
export class TabsUIComponent extends BaseUIComponent<TabsProperties> {
  onComponentChange(component: BaseUIComponent) {
    Object.assign(this.dataModel, component.dataModel);
    this.changedDataModel.emit(this.dataModel);
  }
}

export class TabsProperties extends StyleProperties {
  @propDescription({
    description: 'Tabs configurations',
    example: `[{
      label: 'Tab one',
      component: {
        type: 'text',
        containerProperties: {},
        itemProperties: {
            text: 'Card content text',
            width: '50%'
        }
      }
    }],`,
  })
  tabs: TabContent[];
}

interface TabContent {
  label: string;
  component?: ComponentConfiguration;
  text?: string;
  html?: string;
}

export const example: ComponentExample<UIModel<TabsProperties>> = {
  title: 'Tabs group example',
  uiModel: {
    type: 'material:tabs-group',
    containerProperties: {},
    itemProperties: {
      tabs: [{
        label: 'Component tab',
        component: {
          uiModel: {
            type: 'material:text-input',
            containerProperties: {
              width: '100%'
            },
            itemProperties: {
              isNumeric: false,
              isDate: false,
              format: '',
              placeholder: 'Inout text component',
              dataModelPath: '$.tabOne/inputValue'
            }
          },
          dataModel: {}
        }
      }, {
        label: 'HTML content tab',
        html: '<h1>HTML tab content</h1>'
      }, {
        label: 'HTML content tab',
        text: 'Text tab content'
      }]
    }
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
