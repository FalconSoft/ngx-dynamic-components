import { Component, OnInit } from '@angular/core';
import { getCategories } from '@ngx-dynamic-components/material';
import { GroupItem } from './side-bar/side-bar.component';

@Component({
  selector: 'dc-components-page',
  template: `
    <dc-page-header title="Components"></dc-page-header>
    <mat-drawer-container fxFlex="1 1 auto" class="page-drawer">
      <mat-drawer mode="side" opened>
        <dc-side-bar [groups]="categories"></dc-side-bar>
      </mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `
})
export class ComponentsPageComponent implements OnInit {
  categories: GroupItem[];

  constructor() {}

  ngOnInit() {
    this.categories = getCategories().map(({name, components}) => {
      return { name, list: components };
    });
  }

}
