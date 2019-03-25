import { NgModule } from '@angular/core';
import { UISelectorComponent } from './components/ui-selector-component';
import { NGXDynamicComponent } from './components/ngx-dynamic-component';

@NgModule({
  declarations: [UISelectorComponent, NGXDynamicComponent],
  imports: [
  ],
  exports: [UISelectorComponent, NGXDynamicComponent]
})
export class CoreModule { }
