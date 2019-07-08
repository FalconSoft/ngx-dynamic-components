import { Component, OnInit } from '@angular/core';
import { ComponentDescriptor } from '../../models';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'dc-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss']
})
export class ControlsPanelComponent implements OnInit {


  groups = [];
  components: Array<ComponentDescriptor> = [];

  constructor() { }

  ngOnInit() {
    this.components = CoreService.getListOfComponents();
    this.groups = this.getGroups();
  }

  private getGroups(): {list: [], value: string}[] {
    const groups = {};
    this.components.forEach((item) => {
      const groupValue = item.category;
      if (groupValue) {
        groups[groupValue] = groups[groupValue] || {value: groupValue, list: []};
        groups[groupValue].list.push(item);
      }
    });
    return Object.values(groups);
  }
}
