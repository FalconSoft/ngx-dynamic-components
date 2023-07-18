import { Component, Input } from '@angular/core';
import { GroupItem } from './side-bar/side-bar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dc-sidenav-layout',
  template: `
  <ng-template #sidenav>
    <ng-content select="[sidenav]"></ng-content>
  </ng-template>

  <ng-template #content>
    <ng-content select="[content]"></ng-content>
  </ng-template>

  <!-- Mobile layout -->
  <mat-sidenav-container *ngIf="(isHandSet$ | async); else desktopLayout" fxFlex="1 1 auto">
    <mat-sidenav #drawer mode="over" opened="false">
      <ng-container [ngTemplateOutlet]="sidenav"></ng-container>
    </mat-sidenav>
    <mat-sidenav-content>
      <dc-page-header [title]="title" (openPage)="drawer.open()" toggle="true"></dc-page-header>
      <ng-container [ngTemplateOutlet]="content"></ng-container>
    </mat-sidenav-content>
  </mat-sidenav-container>

  <!-- Desktop layout -->
  <ng-template #desktopLayout>
    <dc-page-header title="Components"></dc-page-header>
    <mat-drawer-container class="page-drawer d-flex flex-fill">
      <mat-drawer mode="side" opened="true">
        <ng-container [ngTemplateOutlet]="sidenav"></ng-container>
      </mat-drawer>
      <mat-drawer-content class="flex-fill">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </mat-drawer-content>
    </mat-drawer-container>
  </ng-template>
  `
})
export class SidenavLayoutComponent {

  @Input() title?: string;
  categories?: GroupItem[];
  isHandSet$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandSet$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(r => r.matches));
  }
}
