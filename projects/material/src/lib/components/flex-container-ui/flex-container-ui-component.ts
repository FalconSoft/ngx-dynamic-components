import { Component } from '@angular/core';
import { BaseUIComponent, UIModel, ComponentDescriptor, propDescription, ComponentExample,
  Categories, StyleProperties } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div drop-container
        [fxLayout]="properties.fxLayout || 'row'"
        [fxLayoutGap]="properties.fxLayoutGap || '0'"
        [fxLayoutAlign]="getStrValue(properties.fxLayoutAlign)"
        [ngStyle]="itemStyles">

        <div *ngFor="let item of uiModel.children" class="item"
            [fxFlex]="item.containerProperties?.fxFlex || 'initial'"
            [fxFlexOrder]="item.containerProperties?.fxFlexOrder || 0"
            [fxFlexOffset]="item.containerProperties?.fxFlexOffset || '0%'"
            [fxFlexAlign]="item.containerProperties?.fxFlexAlign || 'unset'"
            [attr.fxFlexFill]="item.containerProperties?.fxFill || false">

            <dc-ui-selector
                (changedDataModel)="changedDataModel.emit($event)"
                [uiModel]='item'
                [dataModel]='dataModel'
                [workflowEngine]='workflowEngine'
            ></dc-ui-selector>
        </div>
    </div>`
})
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> {
  getStrValue(value: string) {
    if (value) {
      return value.split('|').join(' ');
    }
    return '';
  }
}

export class FlexContainerProperties extends StyleProperties {
  @propDescription({
    description: 'fxLayout (Angular Flex-Layout property)',
    example: 'column',
    link: 'https://github.com/angular/flex-layout/wiki/fxLayout-API'
  })
  fxLayout?: string;

  @propDescription({
    description: 'fxLayoutGap (Angular Flex-Layout property)',
    example: '10px',
    link: 'https://github.com/angular/flex-layout/wiki/fxLayoutGap-API'
  })
  fxLayoutGap?: string;

  @propDescription({
    description: 'fxLayoutAlign (Angular Flex-Layout property)',
    example: 'stretch center',
    link: 'https://github.com/angular/flex-layout/wiki/fxLayoutAlign-API0'
  })
  fxLayoutAlign?: string;
}

const example: ComponentExample<UIModel<FlexContainerProperties>> = {
  title: 'Flex example',
  uiModel: {
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '10px',
      width: '100%',
      padding: '10px'
    },
    children: [{
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 1',
      }
    }, {
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 2',
      }
    }]
  },
  dataModel: {}
};

interface FlexContainerUIComponentConstrutor {
  new (): FlexContainerUIComponent;
}

interface FlexContainerPropertiesConstrutor {
  new (): FlexContainerProperties;
}

export const flexContainerDescriptor: ComponentDescriptor<FlexContainerUIComponentConstrutor, FlexContainerPropertiesConstrutor> = {
  name: 'flex-container',
  packageName,
  label: 'Flex Panel',
  category: Categories.Containers,
  description: 'Flex layout component',
  itemProperties: FlexContainerProperties,
  component: FlexContainerUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:flex-container`,
    containerProperties: {},
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '8px',
      width: '100%',
      height: '100%',
      'min-height': '50px',
      'min-width': '50px'
    },
    children: []
  }
};
