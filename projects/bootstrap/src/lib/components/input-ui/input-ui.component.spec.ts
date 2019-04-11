import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputUIComponent, example } from './input-ui.component';

describe('InputUIComponent', () => {
  let component: InputUIComponent;
  let fixture: ComponentFixture<InputUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputUIComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputUIComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
