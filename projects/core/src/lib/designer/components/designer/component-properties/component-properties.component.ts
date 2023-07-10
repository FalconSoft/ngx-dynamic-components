import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreService } from '../../../../services/core.service';
import { BaseDynamicComponent } from '../../../../components/base-dynamic-component';
import { UIModelProperty } from '../../../../properties';
import { NGXDynamicDesignerComponent } from '../../ngx-dynamic-designer-component';

@Component({
  selector: 'dc-component-properties',
  templateUrl: './component-properties.component.html'
})
export class ComponentPropertiesComponent implements OnChanges {
  @HostListener('window:keyup.enter', ['$event'])
  onEnterKeyPress(): void {
    this.saveComponent();
  }
  @Input() component: BaseDynamicComponent | undefined;
  @Output() delete = new EventEmitter<BaseDynamicComponent>();
  @Output() save = new EventEmitter<{
    component: BaseDynamicComponent;
    properties: Record<string, string>;
  }>();
  @Output() cancel = new EventEmitter<void>();
  @Output() selectComponent = new EventEmitter<BaseDynamicComponent>();

  form: FormGroup;
  properties: UIModelProperty[] = [];

  get hasParent(): boolean {
    return !this.component?.parent || !(this.component.parent instanceof NGXDynamicDesignerComponent);
  }

  ngOnChanges({ component }: SimpleChanges): void {
    if (component && component.currentValue) {
      const properties = CoreService.getComponentDescriptor(this.component.componentType).itemProperties.prototype.properties;
      this.properties = properties;
      const form = new FormGroup({});
      this.properties.forEach(p => form.addControl(p.name, new FormControl(this.component.properties[p.name])));
      this.form = form;
    }
  }

  deleteComponent(component: BaseDynamicComponent): void {
    this.delete.emit(component);
  }

  saveComponent(): void {
    this.save.emit({
      component: this.component,
      properties: this.form.value
    });
  }

  selectParent(): void {
    this.selectComponent.emit(this.component.parent);
  }
}
