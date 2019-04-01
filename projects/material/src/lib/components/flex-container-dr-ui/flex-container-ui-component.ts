import { Component, OnInit, Optional } from '@angular/core';
import { BaseUIComponent, ContainerProperties, UIModel, ComponentDescriptor,
  propDescription, ComponentExample } from '@ngx-dynamic-components/core';
import { DragulaService } from 'ng2-dragula';
import { Categories, packageName } from '../../constants';
import { merge, Observable } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';

@Component({
    selector: 'dc-ui-flex-container',
    template: `
    <div #container class="container" [ngClass]="{dragging: isDragging$ | async, active: active}"
        [dragula]="DRAGULA_ID" [(dragulaModel)]="uiModel.children"
        (mouseover)="onHoverContainer($event)"
        (mouseleave)="onLeaveContainer($event)"
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

            <div class="edit-controls">
              <dc-properties-editor [uiModel]="item"
                (updatedProperty)="changedDataModel.emit(null)"></dc-properties-editor>
              <button mat-icon-button [matTooltip]="getDragTooltip(item)" cdkDragHandle>
                <svg width="24px" class="handle" (mouseover)="onHover($event)" (mouseleave)="onMouseLeave($event)"
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
export class FlexContainerUIComponent extends BaseUIComponent<FlexContainerProperties> implements OnInit {

  active = false;

  isDragging$: Observable<boolean>;

  DRAGULA_ID = 'DRAGULA_CONTAINERS';

  get dragOrientation() {
    return this.uiModel.itemProperties.fxLayout === 'row' ? 'horizontal' : 'vertical';
  }

  constructor(@Optional() private dragulaService: DragulaService) {
    super();
    if (this.dragulaService && !this.dragulaService.find(this.DRAGULA_ID)) {
      this.dragulaService.createGroup(this.DRAGULA_ID, {
        moves: (el, container, handle) => {
          return handle.classList.contains('handle');
        }
      });

      const dragStart$ = this.dragulaService.drag(this.DRAGULA_ID).pipe(mapTo(true));
      const dragEnd$ = this.dragulaService.dragend(this.DRAGULA_ID).pipe(mapTo(false));
      this.isDragging$ = merge(dragStart$, dragEnd$).pipe(startWith(false));
      this.dragulaService.drop(this.DRAGULA_ID).subscribe((e) => {
        setTimeout(() => this.changedDataModel.emit());
      });
    }
  }

  onHoverContainer(evt: Event) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    this.active = true;
  }

  onLeaveContainer(evt: Event) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    this.active = false;
  }

  onUIModelUpdate() {}

  onHover(evt) {
    const dragEl = this.getParentDrag(evt.target as HTMLElement);
    dragEl.classList.add('drag-selected');
  }

  onMouseLeave(evt: Event) {
    const dragEl = this.getParentDrag(evt.target as HTMLElement);
    dragEl.classList.remove('drag-selected');
  }

  getDragTooltip(item: UIModel) {
    return item.type === 'material:flex-container' ? 'Drag container' : 'Drag component';
  }

  private getParentDrag(el: HTMLElement): HTMLElement {
    let dragEl = el;

    while (!Array.from(dragEl.classList).includes('item')) {
      dragEl = dragEl.parentNode as HTMLElement;
    }
    return dragEl;
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
  new (dragulaService?: DragulaService): FlexContainerUIComponent;
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
