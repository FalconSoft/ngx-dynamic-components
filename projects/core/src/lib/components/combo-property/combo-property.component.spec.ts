import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ComboPropertyComponent } from './combo-property.component';

describe('ComboPropertyComponent', () => {
  let component: ComboPropertyComponent;
  let fixture: ComponentFixture<ComboPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgSelectModule ],
      declarations: [ ComboPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPropertyComponent);
    component = fixture.componentInstance;
    component.properties = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
