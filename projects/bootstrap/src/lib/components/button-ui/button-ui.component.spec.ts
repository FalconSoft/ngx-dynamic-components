import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUIComponent, example } from './button-ui.component';

describe('ButtonUIComponent', () => {
  let component: ButtonUIComponent;
  let fixture: ComponentFixture<ButtonUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonUIComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
