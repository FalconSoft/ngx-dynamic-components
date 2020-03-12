import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
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
import { WorkflowEditorComponent } from './components/workflow-editor/workflow-editor.component';
import { FlexContainerComponent } from './ui-components/flex-container/flex-container-component';
import { registerComponents } from './ui-components/register';
import { TextComponent } from './ui-components/text/text.component';
import { ButtonComponent } from './ui-components/button/button.component';

@NgModule({
  declarations: [
    FlexContainerComponent,
    TextComponent,
    ButtonComponent,
    UISelectorComponent, NGXDynamicComponent, DesignerComponent, ControlEditorComponent, PropertiesEditorComponent,
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
    BsDropdownModule.forRoot(),
    AngularSplitModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [UISelectorComponent, NGXDynamicComponent, DesignerComponent, WorkflowEditorComponent, AngularSplitModule]
})
export class CoreModule {
  constructor() {
    registerComponents();
  }
}
