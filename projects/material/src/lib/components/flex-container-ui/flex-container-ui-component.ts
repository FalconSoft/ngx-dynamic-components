import { Component } from '@angular/core';
import { BaseUIComponent, UIModel, ComponentDescriptor, propDescription, ComponentExample,
  Categories, StyleProperties } from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div class="container" drop-container
        [fxLayout]="uiModel.itemProperties?.fxLayout || 'row'"
        [fxLayoutGap]="uiModel.itemProperties?.fxLayoutGap || '0'"
        [fxLayoutAlign]="uiModel.itemProperties?.fxLayoutAlign || 'flex-start'"
        [fxFlex]="uiModel.itemProperties?.fxFlex || 'initial'"
        [ngStyle]="itemStyles">

        <div *ngFor="let item of uiModel.children" class="item"
            [fxFlex]="item.containerProperties?.fxFlex || 'initial'"
            [ngStyle]="getStyles(item.containerProperties)">

            <dc-ui-selector
                (changedDataModel)="changedDataModel.emit($event)"
                [uiModel]='item'
                [dataModel]='dataModel'
                [workflowEngine]='workflowEngine'
            ></dc-ui-selector>
        </div>
    </div>`,
    styles: [`
      :host {
        height: 100%;
      }
    `]
})
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> {

}

export class FlexContainerProperties extends StyleProperties {
  @propDescription({
    description: 'fxLayout (Angular Flex-Layout property)',
    example: 'column',
  })
  fxLayout?: string;

  @propDescription({
    description: 'fxLayoutGap (Angular Flex-Layout property)',
    example: '10px',
  })
  fxLayoutGap?: string;

  @propDescription({
    description: 'fxLayoutAlign (Angular Flex-Layout property)',
    example: 'stretch center',
  })
  fxLayoutAlign?: string;

  @propDescription({
    description: 'fxFlex (Angular Flex-Layout property)',
    example: '10px',
  })
  fxFlex?: string;

  mode?: string;
}

const example: ComponentExample<UIModel<FlexContainerProperties>> = {
  title: 'Flex example',
  uiModel: {
    type: 'material:flex-container',
    containerProperties: {
      width: '100%'
    },
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '1rem',
      fxFlex: '0 1 auto',
      width: '50%',
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
  label: 'Panel',
  category: Categories.Containers,
  description: 'Flex layout component',
  itemProperties: FlexContainerProperties,
  component: FlexContainerUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:flex-container`,
    containerProperties: {
      width: '100%',
      height: '100px'
    },
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '1rem',
      fxFlex: '0 1 auto',
      width: '100%',
      padding: '0',
      height: '100px'
    },
    children: []
  }
};
