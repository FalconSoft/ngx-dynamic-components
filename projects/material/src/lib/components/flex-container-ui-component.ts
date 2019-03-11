import { Component } from '@angular/core';
import { BaseUIComponent, AttributesMap, propDescription } from '@ngx-dynamic-components/core';
import { addToComponentsList } from './register';
import { Categories, packageName } from '../constants';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div
        [fxLayout]="uiModel.itemProperties?.fxLayout || 'row'"
        [fxLayoutGap]="uiModel.itemProperties?.fxLayoutGap || '0'"
        [fxLayoutAlign]="uiModel.itemProperties?.fxLayoutAlign"
        [fxFlex]="uiModel.itemProperties?.fxFlex || '1 1 auto'"
        [style.height]="uiModel.itemProperties?.height || '100%'"
        [style.width]="uiModel.itemProperties?.width || '100%'"
    >
        <div *ngFor="let item of uiModel.children"
            [fxFlex]="item.containerProperties?.fxFlex"
            [style.background] ="item.containerProperties?.backgroundColor">

            <dc-ui-selector
                (changedDataModel)="changedDataModel.emit(this.dataModel)"
                [uiModel]='item'
                [dataModel]='dataModel'
                [actions]='actions'
            ></dc-ui-selector>

        </div>
    </div>
    `
})
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> {

}

export class FlexContainerProperties implements AttributesMap {
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
    example: '10px',
  })
  fxLayoutAlign?: string;

  @propDescription({
    description: 'fxFlex (Angular Flex-Layout property)',
    example: '10px',
  })
  fxFlex?: string;

  @propDescription({
    description: 'Container width',
    example: '100%',
  })
  width?: string;

  @propDescription({
    description: 'Container height',
    example: '100px',
  })
  height?: string;
}

export const flexContainerDescriptor = {
  name: 'flex-container',
  package: packageName,
  category: Categories.Layout,
  description: 'Flex layout component',
  itemProperties: FlexContainerProperties,
  component: FlexContainerUIComponent
};

addToComponentsList(flexContainerDescriptor);
