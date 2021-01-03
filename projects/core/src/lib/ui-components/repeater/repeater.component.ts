import { Component, HostBinding, OnInit } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { CoreService } from '../../services/core.service';
import { StyleProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { queryValue, toXMLResult } from '../../utils';

@Component({
  selector: 'dc-repeater',
  templateUrl: './repeater.component.html',
  styles: [`
      :host:not(.row):not(.input-group) {
        display: block;
      }
    `]
})
export class RepeaterComponent extends BaseUIComponent<RepeaterProperties> implements OnInit {
  @HostBinding('style.display') display = undefined;

  childUIModel: UIModel;

  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.childUIModel = CoreService.getUIModel(toXMLResult(this.properties.childUIModel))
  }

  get dataList(): any[] {
    const src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      return queryValue(this.dataModel, src);
    }
    return [];
  }
}

export class RepeaterProperties extends StyleProperties {
  @propDescription({
    description: 'Select options or binding to dataModel.',
    example: '$.dataList',
  })
  itemsSource: string;

  @propDescription({
    description: 'Child UI Model.',
    example: '$.dataList',
  })
  childUIModel: any;
}

const example: ComponentExample<UIModel<RepeaterProperties>> = {
  title: 'Repeater example',
  uiModel: `
  <div class="p-2">
    <h1>Todo List</h1>
    <div class="row w-100 align-items-center">
      <input class="form-control col" placeholder="Enter todo" binding="$.item"/>
      <button class="btn btn-secondary col-auto mx-2" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto" onClick="removeLast()" type="button">Remove Last</button>
    </div>
    <repeater itemsSource="$.dataList">
      <text class="d-block" text-style="h3">$.item</text>
    </repeater>
  </div>
  `,
  dataModel: {
    dataList: [{
      item: 'learn JS'
    }, {
      item: 'learn TS'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    "item": dataModel.item
  })

def removeLast():
  dataModel.dataList.pop()
  `
};

type RepeaterComponentConstrutor = new() => RepeaterComponent;

type RepeaterPropertiesConstrutor = new() => RepeaterProperties;

function repeaterParser(xmlRes: XMLResult): UIModel<RepeaterProperties> {
  const uiModel = {
    type: 'repeater',
    itemProperties: {
      itemsSource: xmlRes.attrs.itemsSource,
      childUIModel: xmlRes.childNodes[0]
    }
  }

  return uiModel;
}

export const repeaterDescriptor: ComponentDescriptor<RepeaterComponentConstrutor, RepeaterPropertiesConstrutor> = {
  name: 'repeater',
  packageName: 'core',
  label: 'Repeater',
  category: Categories.Containers,
  description: 'Repeater component',
  itemProperties: RepeaterProperties,
  component: RepeaterComponent,
  example,
  parseUIModel: repeaterParser,
  defaultModel: `<repeater class="d-flex" itemsSource="$.dataList"></repeater>`,
};
