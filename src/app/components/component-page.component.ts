import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { ResizeEvent } from 'angular-resizable-element';
import { ComponentDescriptor, ComponentExample } from '@ngx-dynamic-components/core';
import { COMPONENTS_LIST } from '../utils';
import { PreviewEditorComponent } from '@ngx-dynamic-components/tools';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'dc-example',
  template: `
    <div *ngIf="component" class="static-padding">
      <h1 class="mat-h1">{{component.name}}</h1>
      <h3 class="mat-h3">{{component.description}}</h3>
      <ng-container *ngIf="!loading">
        <div class="mb-4" *ngFor="let ex of examples">
          <div #exWraper mwlResizable [enableGhostResize]="true" [resizeEdges]="{ bottom: true }"
            (resizeEnd)="onResizeEnd($event, exWraper)" [validateResize]="validateSize">
            <dc-preview-editor
              [title]="ex.title"
              [scripts]="ex.scripts"
              [initUiModel]="ex.uiModel"
              [initDataModel]="ex.dataModel"></dc-preview-editor>
              <div mwlResizeHandle [resizeEdges]="{ bottom: true }" class="as-split-gutter">
                <div class="as-split-gutter-icon"></div>
              </div>
            </div>
            <div class="py-2" *ngIf="ex.description" [innerHTML]="ex.description"></div>
        </div>
      </ng-container>
      <dc-item-properties *ngIf="!loading" [component]="component"></dc-item-properties>
    </div>
  `,
  styles: [`
    dc-item-properties {
      margin-top: 1em;
      display: block;
    }
    mwlResizable {
      box-sizing: border-box; // required for the enableGhostResize option to work
    }
    .as-split-gutter {
      height: 11px;
      cursor: row-resize;
      width: 100%;
      background-color: var(--body-bg);
      bottom: 0;
    }

    .as-split-gutter-icon {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC);
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
    }

    dc-preview-editor {
      height: calc(100% - 11px);
    }
  `]
})
export class ComponentPageComponent implements OnInit, OnDestroy {

  @ViewChild(PreviewEditorComponent) editor: PreviewEditorComponent;
  component: ComponentDescriptor;
  loading = false;
  examples: ComponentExample[] = [];
  private destroy$ = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$),
      tap(() => {
        if (this.component) {
          this.loading = true;
        }
      }), debounceTime(1)).subscribe(p => {
        this.component = COMPONENTS_LIST.find(c => c.name === p.component && c.packageName === p.packageName);
        this.examples = [];
        if (this.component.example) {
          this.examples = Array.isArray(this.component.example) ? this.component.example : [this.component.example];
        }
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  validateSize(event: ResizeEvent): boolean {
    const height = event.rectangle.height;

    if (height < 345) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent, element: HTMLDivElement): void {
    const height = event.rectangle.height;
    element.style.height = `${height}px`;
    this.editor.resize();
  }
}
