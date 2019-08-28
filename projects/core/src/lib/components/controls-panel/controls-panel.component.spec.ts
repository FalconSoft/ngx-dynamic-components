import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { ControlsPanelComponent } from './controls-panel.component';

describe('ControlsPanelComponent', () => {
  let component: ControlsPanelComponent;
  let fixture: ComponentFixture<ControlsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule.forRoot()],
      declarations: [ ControlsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
