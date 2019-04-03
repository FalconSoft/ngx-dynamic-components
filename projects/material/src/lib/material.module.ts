import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatCardModule ,
  MatRadioModule, MatTabsModule, MatTableModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CoreModule } from '@ngx-dynamic-components/core';

import { InputUIComponent } from './components/input-ui-component';
import { TextUIComponent } from './components/text-ui-component';
import { ButtonUIComponent } from './components/button-ui-component';
import { FlexContainerUIComponent } from './components/flex-container-ui/flex-container-ui-component';
import { SelectUIComponent } from './components/select-ui-component';
import { CheckboxUIComponent } from './components/checkbox-ui-component';
import { TextareaUIComponent } from './components/textarea-ui-component';
import { CardUIComponent } from './components/card-ui-component';

import { registerComponents } from './components/register';
import { RadioGroupUIComponent } from './components/radio-group-ui/radio-group-ui.component';
import { TabsUIComponent } from './components/tabs-ui/tabs-ui.component';
import { DatableUIComponent } from './components/datable-ui/datable-ui.component';

@NgModule({
    declarations: [
      ButtonUIComponent,
      FlexContainerUIComponent,
      CardUIComponent,
      CheckboxUIComponent,
      InputUIComponent,
      SelectUIComponent,
      TextUIComponent,
      TextareaUIComponent,
      RadioGroupUIComponent,
      TabsUIComponent,
      DatableUIComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        MatTabsModule,
        MatTableModule,
        MatTooltipModule,
        MatIconModule,
        CoreModule,
        DragDropModule
    ],
    exports: [
        ButtonUIComponent,
        CardUIComponent,
        CheckboxUIComponent,
        FlexContainerUIComponent,
        InputUIComponent,
        SelectUIComponent,
        TextareaUIComponent,
        TextUIComponent
    ],
    entryComponents: [
      InputUIComponent,
      TextUIComponent,
      ButtonUIComponent,
      FlexContainerUIComponent,
      CheckboxUIComponent,
      SelectUIComponent,
      TextareaUIComponent,
      CardUIComponent,
      RadioGroupUIComponent,
      TabsUIComponent,
      DatableUIComponent
    ],
})
export class MaterialModule {
  constructor() {
    registerComponents();
  }
}
