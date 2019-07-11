import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { UISelectorComponent } from './components/ui-selector-component';
import { NGXDynamicComponent } from './components/ngx-dynamic-component';
import { DesignerComponent } from './components/designer/designer.component';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { PropertiesEditorComponent } from './components/properties-editor/properties-editor.component';
import { ControlsPanelComponent } from './components/controls-panel/controls-panel.component';

@NgModule({
  declarations: [UISelectorComponent, NGXDynamicComponent, DesignerComponent, ControlEditorComponent, PropertiesEditorComponent,
    ControlsPanelComponent],
  imports: [
    CommonModule,
    DragulaModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [UISelectorComponent, NGXDynamicComponent, DesignerComponent],
  entryComponents: [ControlEditorComponent]
})
export class CoreModule { }
