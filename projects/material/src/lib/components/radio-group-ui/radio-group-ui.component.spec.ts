import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupUiComponent } from './radio-group-ui.component';

describe('RadioGroupUiComponent', () => {
  let component: RadioGroupUiComponent;
  let fixture: ComponentFixture<RadioGroupUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
