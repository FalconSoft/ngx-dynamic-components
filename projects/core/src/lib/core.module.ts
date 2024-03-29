import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NGXDynamicComponent } from './components/ngx-dynamic-component';

import { ContainerComponent } from './ui-components/container/container.component';
import { TextComponent } from './ui-components/text/text.component';
import { ButtonComponent } from './ui-components/button/button.component';
import { InputComponent } from './ui-components/input/input.component';
import { IconComponent } from './ui-components/icon/icon.component';
import { RadioGroupComponent } from './ui-components/radio-group/radio-group.component';
import { TextareaComponent } from './ui-components/textarea/textarea.component';
import { registerComponents } from './ui-components/register';
import { LinkComponent } from './ui-components/link/link.component';
import { LabelComponent } from './ui-components/label/label.component';
import { FormComponent } from './ui-components/form/form.component';
import { SelectComponent } from './ui-components/select/select.component';
import { RepeaterComponent } from './ui-components/repeater/repeater.component';

@NgModule({
  declarations: [
    ContainerComponent,
    FormComponent,
    RepeaterComponent,
    TextComponent,
    LabelComponent,
    ButtonComponent,
    InputComponent,
    IconComponent,
    RadioGroupComponent,
    TextareaComponent,
    LinkComponent,
    SelectComponent,
    NGXDynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [NGXDynamicComponent, TextComponent]
})
export class DynamicComponentsCoreModule {
  constructor() {
    registerComponents();
  }
}
