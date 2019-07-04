import { Component, Input, HostListener, ViewChild, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';
import { UIModel } from '../../models';
import { ComponentProperty } from '../../utils';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'dc-properties-editor',
  template: `
    <button class="btn btn-light btn-sm px-1 py-0" tooltip="Edit properties" (click)="showEditor = true" #editBtn>
      <i class="fa fa-edit"></i>
    </button>
    <div class="editor-container" #editorContainer fxLayout="column" *ngIf="showEditor" [ngClass]="positionClass">
      <div *ngFor="let property of properties">
        <input matInput [placeholder]="property.name" [value]="property.value" (input)="updateProperty($event, property.name)">
      </div>
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
  @Input() uiModel: UIModel;
  @ViewChild('editorContainer', {static: false}) editorContainer: ElementRef;
  @ViewChild('editBtn', {static: false}) editBtn: ElementRef;
  @Output() updatedProperty = new EventEmitter();

  itemProperties: ComponentProperty[] = [];
  properties = [];

  showEditor = false;

  get positionClass() {
    const btnPos = this.editBtn.nativeElement.getBoundingClientRect().right;
    const docWidth = document.body.offsetWidth;
    return docWidth - btnPos < 200 ? 'left' : '';
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    if (this.editorContainer) {
      const clickedInside = this.editorContainer.nativeElement.contains(targetElement);
      if (!clickedInside && this.editBtn.nativeElement.contains(targetElement)) {
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

  ngOnInit() {
    this.itemProperties = CoreService.getComponentProperties(this.uiModel.type);
  }

  updateProperty(evt, prop) {
    try {
      // If property value is an object or an array.
      this.uiModel.itemProperties[prop] = JSON.parse(evt.target.value);
    } catch {
      this.uiModel.itemProperties[prop] = evt.target.value;
    }
  }
}
