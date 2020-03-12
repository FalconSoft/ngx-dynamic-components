import { Component, OnInit, Input } from '@angular/core';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'dc-item-properties',
  templateUrl: './item-properties.component.html',
  styleUrls: ['./item-properties.component.scss']
})
export class ItemPropertiesComponent implements OnInit {

  @Input()
  component: ComponentDescriptor;
  itemProperties: Observable<[]>;
  displayedColumns = ['name', 'example', 'description'];

  constructor() { }

  ngOnInit() {
    this.itemProperties = this.component.itemProperties.prototype.properties;
  }

}
