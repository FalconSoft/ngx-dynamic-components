import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { MaterialModule } from '@ngx-dynamic-components/material';

import { EditorContainerComponent } from './components/editor-container.component';
import { ToolbarComponent } from './components/toolbar.component';
import { PreviewComponent } from './components/preview.component';
import { EditorComponent } from './components/editor.component';

@NgModule({
  declarations: [
    EditorContainerComponent, ToolbarComponent, PreviewComponent, EditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    FormsModule,
    FlexLayoutModule,
    AngularSplitModule.forRoot(),
    MonacoEditorModule.forRoot({
      // Use baseUrl if needed for deployment purpose.
      // TODO: set it in runtime programaticly or in build time based on params.
      // baseUrl: '/ngx-dynamic-components/assets'
    })
  ],
  exports: [ EditorContainerComponent ],
})
export class ToolsModule { }
