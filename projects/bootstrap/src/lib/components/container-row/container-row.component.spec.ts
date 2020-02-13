import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { UISelectorComponent } from '@ngx-dynamic-components/core';
import { ContainerRowComponent, example } from './container-row.component';
import { InputUIComponent } from '../input-ui/input-ui.component';
import { registerComponents } from '../register';

describe('ContainerRowComponent', () => {
  let component: ContainerRowComponent;
  let fixture: ComponentFixture<ContainerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerRowComponent, UISelectorComponent, InputUIComponent ],
      imports: [ FormsModule ]
    });

    TestBed.compileComponents();
    registerComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRowComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
