import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { setTheme } from 'ngx-bootstrap/utils';
import { CoreModule } from '@ngx-dynamic-components/core';
import { ContainerComponent } from './components/container/container.component';
import { registerComponents } from './components/register';
import { ContainerRowComponent } from './components/container-row/container-row.component';

@NgModule({
  declarations: [ContainerComponent, ContainerRowComponent],
  imports: [
    CoreModule,
    CommonModule
  ],
  exports: [ContainerComponent, ContainerRowComponent],
  entryComponents: [ContainerComponent, ContainerRowComponent]
})
export class BootstrapModule {
  constructor() {
    setTheme('bs4');
    registerComponents();
  }
}
