import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularSplitModule } from 'angular-split';
import { NgSelectModule } from '@ng-select/ng-select';
import { UISelectorComponent } from './components/ui-selector-component';
import { NGXDynamicComponent } from './components/ngx-dynamic-component';
import { DesignerComponent } from './components/designer/designer.component';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { PropertiesEditorComponent } from './components/properties-editor/properties-editor.component';
import { ControlsPanelComponent } from './components/controls-panel/controls-panel.component';
import { ComboPropertyComponent } from './components/combo-property/combo-property.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionsService } from './services/actions.service';
import { WorkflowEditorComponent } from './components/workflow-editor/workflow-editor.component';

@NgModule({
  declarations: [UISelectorComponent, NGXDynamicComponent, DesignerComponent, ControlEditorComponent, PropertiesEditorComponent,
    ControlsPanelComponent,
    ComboPropertyComponent,
    WorkflowEditorComponent],
  imports: [
    CommonModule,
    DragulaModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    AngularSplitModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [UISelectorComponent, NGXDynamicComponent, DesignerComponent],
  entryComponents: [ControlEditorComponent, WorkflowEditorComponent]
})
export class CoreModule {
  constructor(private actionsService: ActionsService) { }
}
