import { Component, Input, EventEmitter, Output, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { UIModel } from '../../models';
import { ControlProperties, ContainerControlProperties,
  ComponentProperty, ComponentPropertyValue, PropertyCategories } from '../../properties';
import { CoreService } from '../../services/core.service';

/**
 * @classdesc Widget displayes editable, grouped by category list of component properties based on UIModel.
 */
@Component({
  selector: 'dc-properties-editor',
  templateUrl: './properties-editor.component.html',
  styleUrls: ['./properties-editor.component.scss', '../../styles/accordion.scss']
})
export class PropertiesEditorComponent implements OnInit, OnChanges {
  @Input() uiModel: UIModel;
  @Output() updatedProperty = new EventEmitter();
  @Output() selectParent = new EventEmitter();
  @Output() clone = new EventEmitter();
  label: string;
  groups: {list: ComponentPropertyValue[], value: string}[] = [];
  private containerProperties = {};
  private itemProperties = {};

  ngOnInit() {
    this.updateProperties();
  }

  ngOnChanges({uiModel}: SimpleChanges) {
    if (!uiModel.firstChange) {
      this.updateProperties();
    }
  }

  updateProperty(value, item: ComponentProperty) {
    const {name, isContainerProperty} = item;
    const updatedProperties = isContainerProperty ? this.containerProperties : this.itemProperties;
    if (value === 'none') {
      value = undefined;
    }
    try {
      // If property value is an object or an array.
      updatedProperties[name] = JSON.parse(value);
    } catch {
      updatedProperties[name] = value;
    }
  }

  onSelect(value, item: ComponentProperty) {
    this.updateProperty(value, item);
    this.onSave();
  }

  private initPropertyGroups(properties: ComponentPropertyValue[]) {
    const groups = {};
    properties.forEach((item) => {
      const groupValue = item.category;
      if (groupValue) {
        groups[groupValue] = groups[groupValue] || {value: groupValue, list: []};
        groups[groupValue].list.push(item);
      }
    });
    this.groups =  Object.values(groups);
  }

  onSave() {
    Object.entries(this.itemProperties).forEach(([key, val]) => {
      this.uiModel.itemProperties[key] = val;
    });
    Object.entries(this.containerProperties).forEach(([key, val]) => {
      this.uiModel.containerProperties[key] = val;
    });
    this.updatedProperty.emit();
  }

  strToKebabCase(str: string) {
    return str.toLowerCase().replace(/\s{1,}/g, '-');
  }

  private updateProperties() {
    this.containerProperties = {};
    this.itemProperties = {};
    this.label = CoreService.getListOfComponents().find(c => `${c.packageName}:${c.name}` === this.uiModel.type).label;
    const props = CoreService.getComponentProperties(this.uiModel.type);
    const itemProps = this.uiModel.itemProperties || {};
    const iProps = props.map((prop) => {
      const name = prop.name;
      const controlProp = this.getProperty(name);
      controlProp.descriptor = prop;
      let value = itemProps[name];
      if (value === undefined) {
        value = '';
      } else if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      return {...controlProp, value};
    });

    const containerProps = this.uiModel.containerProperties || {};
    const cProps = Array.from(ContainerControlProperties.values()).map(prop => {
      const val = containerProps[prop.name];
      const value = val === undefined ? '' : val;
      return {...prop, value, isContainerProperty: true};
    });
    this.initPropertyGroups([...cProps, ...iProps]);
  }

  private getProperty(name: string) {
    return ControlProperties.get(`${this.uiModel.type}:${name}`) || ControlProperties.get(name) ||
      {name, label: name, category: PropertyCategories.Main};
  }
}
