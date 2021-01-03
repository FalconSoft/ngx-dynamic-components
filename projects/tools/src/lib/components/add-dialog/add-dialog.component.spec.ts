import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogComponent } from './add-dialog.component';

xdescribe('AddDialogComponent', () => {
  let component: AddDialogComponent;
  let fixture: ComponentFixture<AddDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
