import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DesignerComponent } from './designer.component';
import { NGXDynamicComponent } from '../ngx-dynamic-component';
import { ControlsPanelComponent } from '../controls-panel/controls-panel.component';
import { PropertiesEditorComponent } from '../properties-editor/properties-editor.component';
import { UISelectorComponent } from '../ui-selector-component';
import { ComboPropertyComponent } from '../combo-property/combo-property.component';

describe('DesignerComponent', () => {
  let component: DesignerComponent;
  let fixture: ComponentFixture<DesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularSplitModule, TabsModule.forRoot(), FormsModule, AccordionModule.forRoot(), PopoverModule.forRoot(),
        NgSelectModule],
      declarations: [ DesignerComponent, NGXDynamicComponent, ControlsPanelComponent, PropertiesEditorComponent,
        UISelectorComponent, ComboPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerComponent);
    component = fixture.componentInstance;
    component.workflow = {
      failOnError: true,
      include: ['@common'],
      vars: {},
      workflowsMap: {},
      consts: {}
    };;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
