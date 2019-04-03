import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatDividerModule, MatCardModule, MatIconModule,
  MatTooltipModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { DragulaModule } from 'ng2-dragula';

import { CoreModule } from '@ngx-dynamic-components/core';
import { MaterialModule } from '@ngx-dynamic-components/material';

import { PreviewEditorComponent } from './components/preview-editor/preview-editor.component';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { PropertiesEditorComponent } from './components/properties-editor/properties-editor.component';

@NgModule({
  declarations: [
    PreviewEditorComponent, ControlEditorComponent, PropertiesEditorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularSplitModule.forRoot(),
    MonacoEditorModule.forRoot({
      baseUrl: './assets'
    }),
    DragulaModule.forRoot()
  ],
  exports: [ PreviewEditorComponent ],
  entryComponents: [ControlEditorComponent],
})
export class ToolsModule { }
