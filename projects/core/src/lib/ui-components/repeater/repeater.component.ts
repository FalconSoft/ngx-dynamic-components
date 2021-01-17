import { Component, HostBinding, OnInit } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { CoreService } from '../../services/core.service';
import { StyleProperties, propDescription } from '../../properties';
import { UIModel, ComponentDescriptor, Categories, XMLResult } from '../../models';
import { queryValue, toXMLResult } from '../../utils';
import example from './repeater.examples';

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
    this.childUIModel = CoreService.getUIModel(toXMLResult(this.properties.childUIModel));
  }

  get dataList(): any[] {
    const src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      return queryValue(this.dataModel, src);
    }
    return [];
  }

  getDataModel(item: Record<string, unknown>, index: number): Record<string, unknown> {
    return { ...this.dataModel, _item: item, _index: index};
  }

  onDataModelChanged(evt: Record<string, unknown>, item: Record<string, unknown>): void {
    const src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      const list = this.dataList;
      // eslint-disable-next-line no-underscore-dangle
      list.splice(list.indexOf(item), 1, evt._item);
    }
    this.changedDataModel.emit(this.dataModel);
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

type RepeaterComponentConstrutor = new() => RepeaterComponent;

type RepeaterPropertiesConstrutor = new() => RepeaterProperties;

function repeaterParser(xmlRes: XMLResult): UIModel<RepeaterProperties> {
  const uiModel = {
    type: 'repeater',
    itemProperties: {
      itemsSource: xmlRes.attrs.itemsSource,
      childUIModel: xmlRes.childNodes[0]
    }
  };

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
