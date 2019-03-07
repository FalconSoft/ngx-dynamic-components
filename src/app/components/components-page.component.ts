import { Component, OnInit } from '@angular/core';
import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';

@Component({
  selector: 'dc-components-page',
  template: `
    <dc-page-header title="Components"></dc-page-header>
    <mat-drawer-container fxFlex="1 1 auto">
      <mat-drawer mode="side" opened>
        <mat-list role="list">
          <mat-list-item role="listitem" *ngFor="let component of components">
            <a mat-button [routerLink]="[component.name]" routerLinkActive="active">{{component.name}}</a>
          </mat-list-item>
        </mat-list>
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

  components = COMPONENTS_LIST.map(({desc}) => desc);
  constructor() { }

  ngOnInit() {
  }

}
