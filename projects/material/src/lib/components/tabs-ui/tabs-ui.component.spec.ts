import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';
import { TabsUIComponent, example } from './tabs-ui.component';
import { registerComponents } from '../register';
import { InputUIComponent } from '../input-ui-component';
import { TextUIComponent } from '../text-ui-component';
import { SelectUIComponent } from '../select-ui-component';

describe('TabsUiComponent', () => {
  let component: TabsUIComponent;
  let fixture: ComponentFixture<TabsUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsUIComponent, InputUIComponent, TextUIComponent, SelectUIComponent],
      imports: [MatTabsModule, MatInputModule, MatSelectModule, DynamicComponentsCoreModule, NoopAnimationsModule, FormsModule],
    });

    TestBed.compileComponents();
    registerComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsUIComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tabs', () => {
    const tabsDE: DebugElement = fixture.debugElement;
    const tabsEl: HTMLElement = tabsDE.nativeElement;
    const labels = tabsEl.querySelectorAll('.mat-tab-label-content');

    const tabs = example.uiModel.children;

    expect(tabs.length).toEqual(labels.length);

    for (let i = 0; i < tabs.length; i++) {
      expect(labels[i].textContent).toEqual(tabs[i].containerProperties.label);
    }
  });

  it('should change data on input', () => {
    const tabsDE: DebugElement = fixture.debugElement;
    const tabsEl: HTMLElement = tabsDE.nativeElement;
    const input = tabsEl.querySelector('input.mat-input-element') as HTMLInputElement;
    const testText = 'Some test text';
    spyOn(component.changedDataModel, 'emit');

    input.value = testText;
    input.dispatchEvent(new Event('input'));

    const expectedData = {tabOne: {inputValue: testText}};

    fixture.detectChanges();

    expect(component.changedDataModel.emit).toHaveBeenCalledWith(jasmine.objectContaining(expectedData));
    expect(component.dataModel).toEqual(jasmine.objectContaining(expectedData));
  });
});
