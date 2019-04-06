import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatDividerModule, MatCardModule, MatIconModule,
  MatTooltipModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { DragulaModule } from 'ng2-dragula';

import { CoreModule } from '@ngx-dynamic-components/core';
import { MaterialModule } from '@ngx-dynamic-components/material';
import { BootstrapModule } from '@ngx-dynamic-components/bootstrap';
// import { BootstrapModule } from 'projects/bootstrap/src/public-api';

import { PreviewEditorComponent } from './components/preview-editor/preview-editor.component';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { PropertiesEditorComponent } from './components/properties-editor/properties-editor.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    PreviewEditorComponent, ControlEditorComponent, PropertiesEditorComponent, AddDialogComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    BootstrapModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
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
  entryComponents: [ControlEditorComponent, AddDialogComponent],
})
export class ToolsModule { }
