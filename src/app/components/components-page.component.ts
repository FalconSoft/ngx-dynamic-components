import { Component, OnInit } from '@angular/core';
import { getCategories } from '@ngx-dynamic-components/material';
import { GroupItem } from './side-bar/side-bar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dc-components-page',
  template: `
    <dc-sidenav-layout title="Components" fxLayout="column" fxFlex="1 1 auto">
      <dc-side-bar sidenav [groups]="categories"></dc-side-bar>
      <router-outlet content></router-outlet>
    </dc-sidenav-layout>
  `
})
export class ComponentsPageComponent implements OnInit {
  categories: GroupItem[];

  isHandSet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(r => r.matches));

  mode: Observable<string> = this.isHandSet$.pipe(map(r => r ? 'over' : 'side'));

  opened = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.categories = getCategories().map(({name, components}) => {
      return { name, list: components };
    });
  }
}
