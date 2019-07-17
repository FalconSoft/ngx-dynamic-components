import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPropertyComponent } from './combo-property.component';

describe('ComboPropertyComponent', () => {
  let component: ComboPropertyComponent;
  let fixture: ComponentFixture<ComboPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
