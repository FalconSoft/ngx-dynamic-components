import { Component } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';
import { Categories, packageName } from '../../constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListOrientation]="dragOrientation"
        [fxLayout]="uiModel.itemProperties?.fxLayout || 'row'"
        [fxLayoutGap]="uiModel.itemProperties?.fxLayoutGap || '0'"
        [fxLayoutAlign]="uiModel.itemProperties?.fxLayoutAlign || 'flex-start'"
        [fxFlex]="uiModel.itemProperties?.fxFlex || 'initial'"
        [ngStyle]="itemStyles">
        <div *ngFor="let item of uiModel.children" cdkDrag
            [fxFlex]="item.containerProperties?.fxFlex || 'initial'"
            [ngStyle]="getStyles(item.containerProperties)">

            <dc-ui-selector
                (changedDataModel)="changedDataModel.emit($event)"
                [uiModel]='item'
                [dataModel]='dataModel'
                [workflowEngine]='workflowEngine'
            ></dc-ui-selector>

            <div class="edit-controls">
              <dc-properties-editor [itemProperties]="item.itemProperties" [uiModel]="item"
                (updatedProperty)="changedDataModel.emit(null)"></dc-properties-editor>
              <button mat-icon-button [matTooltip]="getDragTooltip(item)" cdkDragHandle>
                <svg width="24px" (mouseover)="onHover($event)" (mouseleave)="onMouseLeave($event)"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z">
                  </path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
              </button>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./edit-mode.scss'],
})
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> {

  get dragOrientation() {
    return this.uiModel.itemProperties.fxLayout === 'row' ? 'horizontal' : 'vertical';
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.uiModel.children, event.previousIndex, event.currentIndex);
    this.changedDataModel.emit();
  }

  onHover(evt) {
    const cdkDrag = this.getParentCdkDrag(evt.target);
    cdkDrag.classList.add('drag-selected');
  }

  onMouseLeave(evt) {
    const cdkDrag = this.getParentCdkDrag(evt.target);
    cdkDrag.classList.remove('drag-selected');
  }

  getDragTooltip(item: UIModel) {
    return item.type === 'material:flex-container' ? 'Drag container' : 'Drag component';
  }

  private getParentCdkDrag(el: HTMLElement) {
    let cdkDrag = el;

    while (!Array.from(cdkDrag.classList).includes('cdk-drag')) {
      cdkDrag = cdkDrag.parentNode as HTMLElement;
    }
    return cdkDrag;
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
