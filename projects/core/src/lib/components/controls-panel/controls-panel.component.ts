import { Component, OnInit } from '@angular/core';
import { ComponentDescriptor } from '../../models';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'dc-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss', '../../styles/accordion.scss']
})
export class ControlsPanelComponent implements OnInit {
  groups: {list: [], value: string}[] = [];
  components: Array<ComponentDescriptor> = [];
  private readonly COMPONENTS_LIST = [
    'bootstrap:button', 'bootstrap:text-input', 'bootstrap:textarea', 'bootstrap:radio-group',
    'material:flex-container', 'bootstrap:text', 'bootstrap:checkbox', 'bootstrap:select', 'bootstrap:icon',
    'wijmo:grid', 'rest-client:grid-object-explorer', 'wijmo:chart'
  ];

  ngOnInit() {
    this.components = CoreService.getListOfComponents().filter(c => this.COMPONENTS_LIST.includes(`${c.packageName}:${c.name}`));
    this.initGroups();
  }

  initGroups() {
    const groups = {};
    this.components.forEach((item) => {
      const groupValue = item.category;
      if (groupValue) {
        groups[groupValue] = groups[groupValue] || {value: groupValue, list: []};
        groups[groupValue].list.push(item);
      }
    });
    this.groups =  Object.values(groups);
  }
}
