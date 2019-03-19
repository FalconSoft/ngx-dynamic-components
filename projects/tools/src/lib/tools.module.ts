import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatDividerModule, MatCardModule, MatIconModule,
  MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { CoreModule } from '@ngx-dynamic-components/core';
import { MaterialModule } from '@ngx-dynamic-components/material';

import { ToolbarComponent } from './components/toolbar.component';
import { PreviewEditorComponent } from './components/preview-editor/preview-editor.component';

@NgModule({
  declarations: [
    ToolbarComponent, PreviewEditorComponent
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
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularSplitModule.forRoot(),
    MonacoEditorModule.forRoot({
      baseUrl: './assets'
    })
  ],
  exports: [ PreviewEditorComponent ],
})
export class ToolsModule { }
