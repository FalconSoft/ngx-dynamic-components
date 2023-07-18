import { Component, OnInit } from '@angular/core';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { getSlugFromStr, getCategories } from '../utils';

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

  ngOnInit(): void {
    this.categories = getCategories()
      .map(c => ({
        header: `${c.packageName} ${c.name}`,
        content: this.getComponentsNames(c.components),
        link: [c.packageName, getSlugFromStr(c.name)]
      }));
  }

  getComponentsNames(components: ComponentDescriptor[]): string {
    return components.map(c => c.name).join(', ');
  }
}
