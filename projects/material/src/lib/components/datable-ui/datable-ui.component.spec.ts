import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '@ngx-dynamic-components/core';

import { DatableUIComponent, example } from './datable-ui.component';

describe('DatableUiComponent', () => {
  let component: DatableUIComponent;
  let fixture: ComponentFixture<DatableUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatableUIComponent],
      imports: [MatTableModule, FormsModule, CoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatableUIComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows & columns', () => {
    const tableDE: DebugElement = fixture.debugElement;
    const tableEl: HTMLElement = tableDE.nativeElement;
    const rows = tableEl.querySelectorAll('mat-row');
    const headerCells = tableEl.querySelectorAll('mat-header-cell');
    const cells = tableEl.querySelectorAll('mat-cell');

    const expectedRows = example.dataModel.tableData;
    const expectedColumns = example.uiModel.itemProperties.displayedProperties;

    expect(rows.length).toEqual(expectedRows.length);
    expect(headerCells.length).toEqual(expectedColumns.length);
    expect(cells.length).toEqual(expectedRows.length * expectedColumns.length);

    expectedColumns.forEach(({title}, i) => {
      expect(headerCells[i].textContent.trim()).toEqual(title);
    });
  });
});
