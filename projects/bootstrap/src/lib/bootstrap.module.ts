import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CoreModule } from '@ngx-dynamic-components/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgSelectModule } from '@ng-select/ng-select';

import { ContainerComponent } from './components/container/container.component';
import { registerComponents } from './components/register';
import { ContainerRowComponent } from './components/container-row/container-row.component';
import { InputUIComponent } from './components/input-ui/input-ui.component';
import { SelectUIComponent } from './components/select-ui/select-ui.component';
import { CheckboxUIComponent } from './components/checkbox-ui/checkbox-ui.component';
import { RadioGroupUIComponent } from './components/radio-group-ui/radio-group-ui.component';
import { TextareaUIComponent } from './components/textarea-ui/textarea-ui.component';
import { ButtonUIComponent } from './components/button-ui/button-ui.component';
import { CardComponent } from './components/card/card.component';
import { TextUIComponent } from './components/text-ui/text-ui.component';
import { IconUIComponent } from './components/icon-ui/icon-ui.component';

@NgModule({
  declarations: [ContainerComponent, ContainerRowComponent, InputUIComponent, SelectUIComponent,
    CheckboxUIComponent, RadioGroupUIComponent, TextareaUIComponent, ButtonUIComponent, CardComponent, TextUIComponent, IconUIComponent],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgSelectModule
  ],
  exports: [ContainerComponent, ContainerRowComponent, InputUIComponent]
})
export class BootstrapModule {
  constructor() {
    setTheme('bs4');
    registerComponents();
  }
}
