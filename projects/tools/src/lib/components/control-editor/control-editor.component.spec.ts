import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEditorComponent } from './control-editor.component';

xdescribe('ControlEditorComponent', () => {
  let component: ControlEditorComponent;
  let fixture: ComponentFixture<ControlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
