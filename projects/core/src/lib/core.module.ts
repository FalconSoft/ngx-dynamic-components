import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UISelectorComponent } from './components/ui-selector-component';
import { NGXDynamicComponent } from './components/ngx-dynamic-component';

import { FlexContainerComponent } from './ui-components/flex-container/flex-container-component';
import { TextComponent } from './ui-components/text/text.component';
import { ButtonComponent } from './ui-components/button/button.component';
import { InputComponent } from './ui-components/input/input.component';
import { IconComponent } from './ui-components/icon/icon.component';
import { CheckboxComponent } from './ui-components/checkbox/checkbox.component';
import { RadioGroupComponent } from './ui-components/radio-group/radio-group.component';
import { TextareaComponent } from './ui-components/textarea/textarea.component';
import { registerComponents } from './ui-components/register';

@NgModule({
  declarations: [
    FlexContainerComponent,
    TextComponent,
    ButtonComponent,
    InputComponent,
    IconComponent,
    CheckboxComponent,
    RadioGroupComponent,
    TextareaComponent,
    UISelectorComponent,
    NGXDynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [UISelectorComponent, NGXDynamicComponent]
})
export class CoreModule {
  constructor() {
    registerComponents();
  }
}
