import { Component, OnInit } from '@angular/core';
import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-components-page',
  template: `
    <dc-page-header title="Components"></dc-page-header>
    <mat-drawer-container fxFlex="1 1 auto">
      <mat-drawer mode="side" opened>
        <dc-side-bar [components]="components"></dc-side-bar>
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

    mat-drawer {
      background: #fafafa;
    }
  `]
})
export class ComponentsPageComponent implements OnInit {

  components: ComponentDescriptor[] = COMPONENTS_LIST;

  constructor() {}

  ngOnInit() {
  }

}
