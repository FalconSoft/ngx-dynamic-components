import { Component, OnInit } from '@angular/core';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { getCategories } from '@ngx-dynamic-components/material';
import { getSlugFromStr } from '../utils';

@Component({
  selector: 'dc-categories',
  template: `
    <h1 class="mat-h1">Categories</h1>
    <div class="cards-wrapper" fxLayout fxLayoutGap="50px">
      <dc-cards [cards]="categories"></dc-cards>
    </div>
  `,
  styles: [`
    :host {
      padding: 25px;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class CategoriesComponent implements OnInit {

  categories = [];

  constructor() { }

  ngOnInit() {
    this.categories = getCategories()
      .map(c => ({
        header: c.name,
        content: this.getComponentsNames(c.components),
        link: [getSlugFromStr(c.name)]
      }));
  }

  getComponentsNames(components: ComponentDescriptor[]) {
    return components.map(c => c.name).join(', ');
  }
}
