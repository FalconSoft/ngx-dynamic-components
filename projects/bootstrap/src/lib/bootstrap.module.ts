import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { setTheme } from 'ngx-bootstrap/utils';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { SelectComponent } from './components/select/select.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { registerComponents } from './components/register';

export const tabsModuleForRoot: ModuleWithProviders<TabsModule> = TabsModule.forRoot();

@NgModule({
  declarations: [SelectComponent, TabsComponent],
  imports: [
    DynamicComponentsCoreModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    tabsModuleForRoot
  ]
})
export class DynamicComponentsBootstrapModule {
  constructor() {
    setTheme('bs4');
    registerComponents();
  }
}
