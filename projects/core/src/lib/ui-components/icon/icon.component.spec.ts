import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsUIComponent } from './icon-ui.component';

describe('IconsUIComponent', () => {
  let component: IconsUIComponent;
  let fixture: ComponentFixture<IconsUIComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
