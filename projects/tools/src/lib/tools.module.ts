import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';
import { DynamicComponentsBootstrapModule } from '@ngx-dynamic-components/bootstrap';

import { PreviewEditorComponent } from './components/preview-editor/preview-editor.component';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { PropertiesEditorComponent } from './components/properties-editor/properties-editor.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

export const angularSplitModuleForRoot: ModuleWithProviders<AngularSplitModule> = AngularSplitModule.forRoot();

@NgModule({
  declarations: [
    PreviewEditorComponent, ControlEditorComponent, PropertiesEditorComponent, AddDialogComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentsCoreModule,
    DynamicComponentsBootstrapModule,
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
    angularSplitModuleForRoot
  ],
  exports: [ PreviewEditorComponent ]
})
export class ToolsModule { }
