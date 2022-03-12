import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ComponentDescriptor, PropTypes } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-item-properties',
  templateUrl: './item-properties.component.html',
  styleUrls: ['./item-properties.component.scss']
})
export class ItemPropertiesComponent implements OnInit, OnChanges {

  @Input() component?: ComponentDescriptor;
  displayedColumns = ['name', 'example', 'description'];

  properties?: [];
  events?: [];

  constructor() { }

  ngOnInit(): void {
    this.setProperties();
  }

  ngOnChanges({component}: SimpleChanges): void {
    if (component.firstChange === false) {
      this.setProperties();
    }
  }

  private setProperties(): void {
    const properties = this.component.itemProperties.prototype.properties;
    this.properties = properties.filter(p => p.type !== PropTypes.EVENT);
    this.events = properties.filter(p => p.type === PropTypes.EVENT);
  }
}
