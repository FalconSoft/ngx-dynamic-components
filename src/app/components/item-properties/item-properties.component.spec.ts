import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { ItemPropertiesComponent } from './item-properties.component';
import { Observable } from 'rxjs';

describe('ItemPropertiesComponent', () => {
  let component: ItemPropertiesComponent;
  let fixture: ComponentFixture<ItemPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatTableModule ],
      declarations: [ ItemPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPropertiesComponent);
    component = fixture.componentInstance;
    component.component$ = new Observable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
