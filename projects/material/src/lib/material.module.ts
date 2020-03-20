import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { CoreModule } from '@ngx-dynamic-components/core';

import { InputUIComponent } from './components/input-ui-component';
import { ButtonUIComponent } from './components/button-ui-component';
import { SelectUIComponent } from './components/select-ui-component';
import { CheckboxUIComponent } from './components/checkbox-ui-component';
import { TextareaUIComponent } from './components/textarea-ui-component';
import { CardUIComponent } from './components/card-ui-component';

import { registerComponents } from './components/register';
import { RadioGroupUIComponent } from './components/radio-group-ui/radio-group-ui.component';
import { TabsUIComponent } from './components/tabs-ui/tabs-ui.component';
import { DatableUIComponent } from './components/datable-ui/datable-ui.component';
import { FlexContainerComponent } from './components/flex-container/flex-container-component';

@NgModule({
    declarations: [
      FlexContainerComponent,
      ButtonUIComponent,
      CardUIComponent,
      CheckboxUIComponent,
      InputUIComponent,
      SelectUIComponent,
      TextareaUIComponent,
      RadioGroupUIComponent,
      TabsUIComponent,
      DatableUIComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
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
        CoreModule
    ],
    exports: [
        ButtonUIComponent,
        CardUIComponent,
        CheckboxUIComponent,
        InputUIComponent,
        SelectUIComponent,
        TextareaUIComponent
    ]
})
export class MaterialModule {
  constructor() {
    registerComponents();
  }
}
