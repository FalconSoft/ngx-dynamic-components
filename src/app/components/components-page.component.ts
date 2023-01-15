import { Component, OnInit } from '@angular/core';
import { getPackageCategories } from '../utils';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dc-components-page',
  template: `
    <dc-sidenav-layout title="Components" class="d-flex flex-column h-100">
      <ng-container sidenav *ngFor="let section of sections">
        <h3 class="mat-h3">{{section.packageName}}</h3>
        <dc-side-bar [groups]="section.categories"></dc-side-bar>
      </ng-container>
      <router-outlet content></router-outlet>
    </dc-sidenav-layout>
  `,
  styles: [`
    h3 {
      margin-left: 25px;
      margin-bottom: -25px;
    }
  `]
})
export class ComponentsPageComponent implements OnInit {

  sections = [];
  isHandSet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(r => r.matches));
  mode: Observable<string> = this.isHandSet$.pipe(map(r => r ? 'over' : 'side'));
  opened = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const mapToGroup = ({name, components, packageName}) => ({name, list: components, url: [packageName]});
    this.sections = getPackageCategories().map(({packageName, categories}) => ({
        packageName,
        categories: categories.map(mapToGroup)
      }));
  }
}
