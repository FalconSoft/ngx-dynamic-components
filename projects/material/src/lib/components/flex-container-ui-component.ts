import { Component } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div #container
        (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListOrientation]="dragOrientation"
        [fxLayout]="uiModel.itemProperties?.fxLayout || 'row'"
        [fxLayoutGap]="uiModel.itemProperties?.fxLayoutGap || '0'"
        [fxLayoutAlign]="uiModel.itemProperties?.fxLayoutAlign || 'flex-start'"
        [fxFlex]="uiModel.itemProperties?.fxFlex || 'initial'"
        [ngStyle]="itemStyles">
        <div *ngFor="let item of uiModel.children" #items cdkDrag
            [fxFlex]="item.containerProperties?.fxFlex || 'initial'"
            [ngStyle]="getStyles(item.containerProperties)">

            <dc-ui-selector
                (changedDataModel)="changedDataModel.emit(this.dataModel)"
                [uiModel]='item'
                [dataModel]='dataModel'
                [workflowEngine]='workflowEngine'
            ></dc-ui-selector>

            <svg width="24px" cdkDragHandle fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>

        </div>
    </div>
    `,
    styles: [`
      div[cdkDrag] {
        position: relative;
      }

      [cdkDragHandle] {
        position: absolute;
        top: 0;
        right: 10px;
        z-index: 1;
        color: rgba(0, 0, 0, .5);
        display: none;
      }

      ::ng-deep div.cdk-drag:hover > .cdk-drag-handle {
        display: block;
      }

      .cdk-drag-handle:hover {
          cursor: move;
      }

      ::ng-deep dc-ui-flex-container + [cdkDragHandle] {
        left: -20px;
      }

      ::ng-deep dc-ui-flex-container:hover + [cdkDragHandle] {
        color: rgba(0, 0, 0, .8);
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        background: rgba(0, 0, 0, .5);
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                    0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12);
        background: #eeeeee;
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }
    `]
})
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> {

  get dragOrientation() {
    return this.uiModel.itemProperties.fxLayout === 'row' ? 'horizontal' : 'vertical';
  }

  // TODO: implement to be able to toggle state.
  get isEditMode() {
    return true; // this.uiModel.itemProperties.mode === 'edit';
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.uiModel.children, event.previousIndex, event.currentIndex);
    this.changedDataModel.emit();
  }
}

export class FlexContainerProperties extends ContainerProperties {
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
      width: '20%',
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
  category: Categories.Layout,
  description: 'Flex layout component',
  itemProperties: FlexContainerProperties,
  component: FlexContainerUIComponent,
  example
};
