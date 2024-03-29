import { Component, Input, HostListener, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { UIModelProperty, CoreService } from '@ngx-dynamic-components/core';
import type { ElementRef } from '@angular/core';
import type { MatButton } from '@angular/material/button';
import type { UIModel } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-properties-editor',
  template: `
    <button mat-icon-button matTooltip="Edit properties" (click)="showEditor = true" #editBtn>
      <mat-icon>edit</mat-icon>
    </button>
    <div class="editor-container" #editorContainer fxLayout="column" *ngIf="showEditor" [ngClass]="positionClass">
      <mat-form-field *ngFor="let property of properties">
        <input matInput [placeholder]="property.name" [value]="property.value" (input)="updateProperty($event, property.name)">
      </mat-form-field>
    </div>
  `,
  styles: [`
    .editor-container {
      position: absolute;
      background: white;
      top: 0;
      left: 40px;
      z-index: 3;
      padding: 10px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
              0 8px 10px 1px rgba(0, 0, 0, 0.14),
              0 3px 14px 2px rgba(0, 0, 0, 0.12);

    }
    .editor-container.left {
      left: -200px;
    }
  `]
})
export class PropertiesEditorComponent implements OnInit {
  @Input()
  uiModel: UIModel;

  @ViewChild('editorContainer')
  editorContainer: ElementRef;

  @ViewChild('editBtn')
  editBtn: MatButton;

  @Output()
  updatedProperty = new EventEmitter();

  itemProperties: UIModelProperty[] = [];
  properties = [];

  showEditor = false;

  get positionClass(): string {
    // eslint-disable-next-line no-underscore-dangle
    const btnPos = this.editBtn._elementRef.nativeElement.getBoundingClientRect().right;
    const docWidth = document.body.offsetWidth;
    return docWidth - btnPos < 200 ? 'left' : '';
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement): void {
    if (this.editorContainer) {
      const clickedInside = this.editorContainer.nativeElement.contains(targetElement);
      // eslint-disable-next-line no-underscore-dangle
      if (!clickedInside && this.editBtn._elementRef.nativeElement.contains(targetElement)) {
        // Clicked on button.
        const itemProps = this.uiModel.itemProperties || {};
        this.properties = this.itemProperties.map(({name}) => {
          let value = itemProps[name];
          if (value === undefined) {
            value = '';
          } else if (typeof value === 'object') {
            value = JSON.stringify(value);
          }
          return {name, value};
        });
        this.showEditor = true;
      } else if (!clickedInside) {
        // Clicked outside.
        this.showEditor = false;
        this.updatedProperty.emit();
      }
    }
  }

  ngOnInit(): void {
    this.itemProperties = CoreService.getComponentProperties(this.uiModel.type);
  }

  updateProperty(evt, prop): void {
    try {
      // If property value is an object or an array.
      this.uiModel.itemProperties[prop] = JSON.parse(evt.target.value);
    } catch {
      this.uiModel.itemProperties[prop] = evt.target.value;
    }
  }
}
