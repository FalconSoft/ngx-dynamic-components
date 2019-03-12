import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPropertiesComponent } from './item-properties.component';

describe('ItemPropertiesComponent', () => {
  let component: ItemPropertiesComponent;
  let fixture: ComponentFixture<ItemPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
