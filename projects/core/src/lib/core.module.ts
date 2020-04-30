import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UISelectorComponent } from './components/ui-selector-component';
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

@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    LabelComponent,
    ButtonComponent,
    InputComponent,
    IconComponent,
    RadioGroupComponent,
    TextareaComponent,
    LinkComponent,
    UISelectorComponent,
    NGXDynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [UISelectorComponent, NGXDynamicComponent]
})
export class DynamicComponentsCoreModule {
  constructor() {
    registerComponents();
  }
}
