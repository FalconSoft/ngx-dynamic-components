import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesEditorComponent } from './properties-editor.component';

xdescribe('PropertiesEditorComponent', () => {
  let component: PropertiesEditorComponent;
  let fixture: ComponentFixture<PropertiesEditorComponent>;

  beforeEach(waitForAsync(() => {
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
