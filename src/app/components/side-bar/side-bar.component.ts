import { Component, Input } from '@angular/core';

@Component({
  selector: 'dc-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input()
  groups: GroupItem[];

  getUrl(group, item) {
    if (group.url) {
      return [...group.url, item.name];
    }
    return [item.name];
  }
}

export interface GroupItem {
  name: string;
  list: {name: string}[];
  url?: string;
}
