import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePanelComponent } from './example-panel.component';

describe('ExamplePanelComponent', () => {
  let component: ExamplePanelComponent;
  let fixture: ComponentFixture<ExamplePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
