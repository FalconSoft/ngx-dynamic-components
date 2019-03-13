import { Component, OnInit, Input } from '@angular/core';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { getCategories } from '@ngx-dynamic-components/material';

@Component({
  selector: 'dc-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  groups: GroupItem[];

  categories: {name: string, components: ComponentDescriptor[]}[];

  constructor() { }

  ngOnInit() {
    this.categories = getCategories();
  }

}

export interface GroupItem {
  name: string;
  list: {name: string}[];
}
