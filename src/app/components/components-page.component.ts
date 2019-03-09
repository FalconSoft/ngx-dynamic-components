import { Component, OnInit } from '@angular/core';
import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-components-page',
  template: `
    <dc-page-header title="Components"></dc-page-header>
    <mat-drawer-container fxFlex="1 1 auto">
      <mat-drawer mode="side" opened>
        <mat-accordion multi="true">
          <mat-expansion-panel expanded="true" *ngFor="let category of categories">
            <mat-expansion-panel-header>
              <mat-panel-title>
                {{category.name}}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <mat-list role="list">
              <mat-list-item role="listitem" *ngFor="let component of category.components">
                <a mat-button [routerLink]="[component.name]" routerLinkActive="active">{{component.name}}</a>
              </mat-list-item>
            </mat-list>
          </mat-expansion-panel>
        </mat-accordion>
      </mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
    :host {
      flex: 1 1 auto;
      flex-direction: column;
    }
    .active {
      text-decoration: underline;
    }
  `]
})
export class ComponentsPageComponent implements OnInit {

  components: ComponentDescriptor[] = COMPONENTS_LIST;
  categories: {name: string, components: ComponentDescriptor[]}[];
  constructor() {
    const categories = this.components.reduce((map, desc) => {
      map[desc.category] = map[desc.category] || [];
      map[desc.category].push(desc);
      return map;
    }, {});

    this.categories = Object.entries(categories).map(([key, val]: [string, ComponentDescriptor[]]) => {
      return {
        name: key,
        components: val
      };
    });
  }

  ngOnInit() {
  }

}
