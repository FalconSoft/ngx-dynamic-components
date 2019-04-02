import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesEditorComponent } from './properties-editor.component';

xdescribe('PropertiesEditorComponent', () => {
  let component: PropertiesEditorComponent;
  let fixture: ComponentFixture<PropertiesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
