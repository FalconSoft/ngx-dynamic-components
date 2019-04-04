import { Component, Input } from '@angular/core';

@Component({
  selector: 'dc-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input()
  groups: GroupItem[];
}

export interface GroupItem {
  name: string;
  list: {name: string}[];
}
