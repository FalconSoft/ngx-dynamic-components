import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEditorComponent } from './preview-editor.component';

describe('PreviewEditorComponent', () => {
  let component: PreviewEditorComponent;
  let fixture: ComponentFixture<PreviewEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
