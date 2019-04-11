import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupUIComponent, example } from './radio-group-ui.component';

describe('RadioGroupUIComponent', () => {
  let component: RadioGroupUIComponent;
  let fixture: ComponentFixture<RadioGroupUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupUIComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
