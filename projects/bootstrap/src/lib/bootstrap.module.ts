import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { setTheme } from 'ngx-bootstrap/utils';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { SelectComponent } from './components/select/select.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { registerComponents } from './components/register';
import { InputTypeaheadComponent } from './components/input-typeahead/input-typeahead.component';

export const tabsModuleForRoot: ModuleWithProviders<TabsModule> = TabsModule.forRoot();

@NgModule({
  declarations: [SelectComponent, TabsComponent, InputTypeaheadComponent],
  imports: [
    DynamicComponentsCoreModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    TypeaheadModule,
    tabsModuleForRoot
  ]
})
export class DynamicComponentsBootstrapModule {
  constructor() {
    setTheme('bs4');
    registerComponents();
  }
}
