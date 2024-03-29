import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import {
  BaseUIComponent, CoreService, StyleProperties, UIModel,
  ComponentExample, ComponentDescriptor, Categories, XMLResult, toXMLResult, createComponent
} from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-tabs-ui',
  template: `
    <tabset class="tabset-fx w-100 h-100 nav-tabs-boxed">
      <tab *ngFor="let item of uiModel.children; let i = index" [heading]="item.itemProperties.header || 'Tab ' + (i + 1)">
        <ng-container #vc></ng-container>
      </tab>
    </tabset>
  `
})
export class TabsComponent extends BaseUIComponent<TabsProperties> implements OnInit, AfterViewInit {
  @ViewChildren('vc', { read:ViewContainerRef }) vContainers: QueryList<ViewContainerRef>;

  async ngOnInit(): Promise<void> { }

  async ngAfterViewInit() {
    this.vContainers.forEach((vc, i) => createComponent(this, this.uiModel.children[i], vc));
    this.setHostStyles();
    this.emitEvent(this.properties.onInit);
  }
}

export class TabsProperties extends StyleProperties {
  header: string;
}

export const example: ComponentExample<UIModel<TabsProperties>> = {
  title: 'Tabs group example',
  uiModel: `
  <tab-container width="100%" height="100%" margin="8px">
		<tab header="Test tab" padding="0.5rem">
			<text text-style="h1">Tab 1 static text content</text>
		</tab>
    <tab header="Btn tab" class="align-items-start p-2 flex-column">
      <text text-style="h1">Button content</text>
      <button class="btn btn-primary mr-2" onClick="button1_Click">Click</button>
      <div>
        <h4>ClickCount:</h4>
        <text text-style="h4">$.clickCount</text>
      </div>
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
  dataModel: {
    clickCount: 2
  }
};

type TabsComponentConstrutor = new() => TabsComponent;

type TabsPropertiesConstrutor = new() => TabsProperties;

export const tabsDescriptor: ComponentDescriptor<TabsComponentConstrutor, TabsPropertiesConstrutor> = {
  name: 'tab-container',
  label: 'Tabs container (Bootstrap)',
  packageName,
  category: Categories.Containers,
  description: 'Tabs component',
  itemProperties: TabsProperties,
  component: TabsComponent,
  example,
  parseUIModel(xmlData: XMLResult): UIModel {
    const children = xmlData.childNodes?.map(child => {
      if (child.$$?.length === 1) {
        return CoreService.getUIModel(toXMLResult(child.$$[0]));
      }
      const itemProperties = child.$;
      itemProperties.height = '100%';
      itemProperties.width = '100%';
      return {
        type: 'div',
        children: child.$$.map((r: any) => CoreService.getUIModel(toXMLResult(r))),
        itemProperties
      };
    });
    return {
      type: 'tab-container',
      children
    };
  },
  children: [{
    tag: 'tab',
    hasChildren: true,
    properties: [{
      name: 'header',
      label: 'Tab title'
    }]
  }],
  defaultModel: `<tab-container width="100%" height="100%" margin="8px">
  <tab header="Tab 1" padding="0.5rem">
    <text text-style="h1">Tab 1 static text content</text>
  </tab>
  <tab header="Tab 2" padding="0.5rem">
    <text text-style="h1">Tab 2 static text content</text>
  </tab>
</tab-container>`
};
