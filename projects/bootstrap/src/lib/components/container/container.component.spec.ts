import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { UISelectorComponent } from '@ngx-dynamic-components/core';
import { ContainerComponent, example } from './container.component';
import { ContainerRowComponent } from '../container-row/container-row.component';
import { InputUIComponent } from '../input-ui/input-ui.component';
import { registerComponents } from '../register';
import { FormsModule } from '@angular/forms';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent, ContainerRowComponent, UISelectorComponent, InputUIComponent ],
      imports: [ FormsModule ]
    });

    TestBed.compileComponents();
    registerComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    component.uiModel = example.uiModel;
    component.dataModel = example.dataModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
