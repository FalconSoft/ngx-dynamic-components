import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatListModule, MatSidenavModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { SidenavLayoutComponent } from '../sidenav-layout.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ExamplesPageComponent } from './examples-page.component';
import { PageHeaderComponent } from '../page-header.component';

describe('ExamplesPageComponent', () => {
  let component: ExamplesPageComponent;
  let fixture: ComponentFixture<ExamplesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatExpansionModule, MatListModule, MatSidenavModule, MatIconModule, MatToolbarModule,
        NoopAnimationsModule],
      declarations: [ ExamplesPageComponent, SideBarComponent, SidenavLayoutComponent, PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
