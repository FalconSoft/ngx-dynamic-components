import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatCardModule ,
  MatRadioModule } from '@angular/material';

import { CoreModule } from '@ngx-dynamic-components/core';

import { InputUIComponent } from './components/input-ui-component';
import { TextUIComponent } from './components/text-ui-component';
import { ButtonUIComponent } from './components/button-ui-component';
import { FlexContainerUIComponent } from './components/flex-container-ui-component';
import { SelectUIComponent } from './components/select-ui-component';
import { CheckboxUIComponent } from './components/checkbox-ui-component';
import { TextareaUIComponent } from './components/textarea-ui-component';
import { CardUIComponent } from './components/card-ui-component';

import { registerComponents } from './components/register';
import { RadioGroupUIComponent } from './components/radio-group-ui/radio-group-ui.component';

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
        CoreModule
    ],
    exports: [
        ButtonUIComponent,
        CardUIComponent,
        CheckboxUIComponent,
        FlexContainerUIComponent,
        InputUIComponent,
        SelectUIComponent,
        TextareaUIComponent,
        TextUIComponent,
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
      RadioGroupUIComponent
    ],
})
export class MaterialModule {
  constructor() {
    registerComponents();
  }
}
