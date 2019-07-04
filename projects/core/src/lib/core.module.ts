import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { UISelectorComponent } from './components/ui-selector-component';
import { NGXDynamicComponent } from './components/ngx-dynamic-component';
import { DesignerComponent } from './components/designer/designer.component';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { PropertiesEditorComponent } from './components/properties-editor/properties-editor.component';

@NgModule({
  declarations: [UISelectorComponent, NGXDynamicComponent, DesignerComponent, ControlEditorComponent, PropertiesEditorComponent],
  imports: [
    CommonModule,
    DragulaModule.forRoot()
  ],
  exports: [UISelectorComponent, NGXDynamicComponent, DesignerComponent],
  entryComponents: [ControlEditorComponent]
})
export class CoreModule { }
