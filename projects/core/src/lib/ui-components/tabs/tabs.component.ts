import { Component } from '@angular/core';
import { StyleProperties } from '../../properties';
import { BaseUIComponent } from '../../components/base-ui-component';
import { UIModel, ComponentExample, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'dc-tabs-ui',
  template: `
    <tabset drop-container class="tabset-fx">
      <tab *ngFor="let item of uiModel.children; let i = index" [heading]="item.containerProperties.header || 'Tab ' + (i + 1)">
      <dc-ui-selector
          (changedDataModel)="changedDataModel.emit(dataModel)"
          [uiModel]='item'
          [rootUIModel]='rootUIModel'
          [dataModel]='dataModel'
          [interpreter]='interpreter'
          [scripts]='scripts'></dc-ui-selector>
      </tab>
    </tabset>
  `
})
export class TabsComponent extends BaseUIComponent<TabsProperties> {

}

export class TabsProperties extends StyleProperties {
}

export const example: ComponentExample<UIModel<TabsProperties>> = {
  title: 'Tabs group example',
  uiModel: `
  <tab-container width="100%" height="100%" margin="8px">
		<tab header="Test tab" padding="0.5rem">
			<text text-style="h1">Tab 1 static text content</text>
		</tab>
		<!--Tab should be a flex-container as well-->
    <tab header="Btn tab" padding="0.5rem" fxLayout="column" fxLayoutGap="8px">
      <text text-style="h1">Button content</text>
      <button class="btn btn-primary mr-2" on-click="button1_Click">Click</button>
      <flex-container>
        <text text-style="h4">ClickCount:</text>
        <text text-style="h4">$.clickCount</text>
      </flex-container>
		</tab>
	</tab-container>
  `,
  scripts: `
  def button1_Click():
    print("button1_Click")
    if dataModel.clickCount == null:
      dataModel.clickCount = 0
    dataModel.clickCount = dataModel.clickCount + 1
  `,
  dataModel: {}
};

interface TabsComponentConstrutor {
  new (): TabsComponent;
}

interface TabsPropertiesConstrutor {
  new (): TabsProperties;
}

export const tabsDescriptor: ComponentDescriptor<TabsComponentConstrutor, TabsPropertiesConstrutor> = {
  name: 'tab-container',
  label: 'Tabs container (Bootstrap)',
  packageName: 'core',
  category: Categories.Containers,
  description: 'Tabs component',
  itemProperties: TabsProperties,
  component: TabsComponent,
  example,
  parseUIModel(xmlData: XMLResult): UIModel {
    const children = xmlData.childNodes.map(child => {
      const { itemProperties, containerProperties } = CoreService.getPropertiesFromAttributes(child.$);
      return {
        type: 'flex-container',
        children: child.childNodes.map((r: any) => CoreService.getUIModel(r)),
        containerProperties,
        itemProperties
      };
    });
    return {
      type: 'tab-container',
      children
    };
  },
  defaultModel: {
    type: 'tab-container',
    containerProperties: {},
    itemProperties: {},
    children: [{
      type: 'flex-container',
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
      type: 'flex-container',
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
