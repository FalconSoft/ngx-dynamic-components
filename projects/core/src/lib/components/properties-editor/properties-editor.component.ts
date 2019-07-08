import { Component, Input, ViewChild, ElementRef, EventEmitter, Output, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { UIModel } from '../../models';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'dc-properties-editor',
  template: `
    <div class="editor-container" #editorContainer fxLayout="column">
      <div class="form-group mb-2" *ngFor="let property of properties">
        <label for="prop-{{property.name}}" class="col-form-label px-0 py-1">{{property.name}}</label>
        <div class="flex-fill">
          <input type="text" class="form-control" placeholder="Enter value" [value]="property.value"
            [name]="property.name" required id="prop-{{property.name}}" (input)="updateProperty($event, property.name)">
          </div>
        </div>
      <button class="btn btn-light" (click)="onSave()">Save</button>
    </div>
  `
})
export class PropertiesEditorComponent implements OnInit, OnChanges {
  @Input() uiModel: UIModel;
  @ViewChild('editorContainer', {static: false}) editorContainer: ElementRef;
  @ViewChild('editBtn', {static: false}) editBtn: ElementRef;
  @Output() updatedProperty = new EventEmitter();

  properties = [];
  private updatedProperties = {};

  ngOnInit() {
    this.updateProperties();
  }

  ngOnChanges({uiModel}: SimpleChanges) {
    if (!uiModel.firstChange) {
      this.updateProperties();
    }
  }

  updateProperty(evt, prop) {
    try {
      // If property value is an object or an array.
      this.updatedProperties[prop] = JSON.parse(evt.target.value);
    } catch {
      this.updatedProperties[prop] = evt.target.value;
    }
  }

  onSave() {
    Object.entries(this.updatedProperties).forEach(([key, val]) => {
      this.uiModel.itemProperties[key] = val;
    });
    this.updatedProperty.emit();
  }

  private updateProperties() {
    const props = CoreService.getComponentProperties(this.uiModel.type);
    const itemProps = this.uiModel.itemProperties || {};
    this.properties = props.map(({name}) => {
      let value = itemProps[name];
      if (value === undefined) {
        value = '';
      } else if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      return {name, value};
    });
  }
}
