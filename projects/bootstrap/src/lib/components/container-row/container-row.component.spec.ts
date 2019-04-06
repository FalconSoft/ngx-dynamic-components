import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRowComponent } from './container-row.component';

describe('ContainerRowComponent', () => {
  let component: ContainerRowComponent;
  let fixture: ComponentFixture<ContainerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
