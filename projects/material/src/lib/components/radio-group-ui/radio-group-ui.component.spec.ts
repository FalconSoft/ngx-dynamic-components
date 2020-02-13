import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';
import { CoreModule } from '@ngx-dynamic-components/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RadioGroupUIComponent, example } from './radio-group-ui.component';

describe('RadioGroupUIComponent', () => {
  let component: RadioGroupUIComponent;
  let fixture: ComponentFixture<RadioGroupUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupUIComponent ],
      imports: [CoreModule, NoopAnimationsModule, MatRadioModule, FormsModule, FlexLayoutModule],
    });
    TestBed.compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RadioGroupUIComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have radio buttons', () => {
    const groupDE: DebugElement = fixture.debugElement;
    const gropuEl: HTMLElement = groupDE.nativeElement;
    const labels = gropuEl.querySelectorAll('.mat-radio-label-content');

    const options = example.uiModel.itemProperties.options;

    expect(options.length).toEqual(options.length);

    for (let i = 0; i < options.length; i++) {
      expect(labels[i].textContent.trim()).toEqual(options[i].label);
    }
  });

  it('should change data on select', () => {
    const groupDE: DebugElement = fixture.debugElement;
    const gropuEl: HTMLElement = groupDE.nativeElement;
    const labels = gropuEl.querySelectorAll('.mat-radio-label');
    const options = example.uiModel.itemProperties.options;
    spyOn(component.changedDataModel, 'emit');

    for (let i = 0; i < options.length; i++) {
      (labels[i] as HTMLElement).click();
      fixture.detectChanges();
      const expectedData = {color: options[i].value};
      expect(component.changedDataModel.emit).toHaveBeenCalledWith(expectedData);
      expect(component.dataModel).toEqual(expectedData);
    }
  });
});
