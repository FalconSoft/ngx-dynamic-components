import { Component } from '@angular/core';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styles: [`
    .app-content {
      height: 100%;
    }
  `]
})
export class AppComponent {
  title = 'ngx-dynamic-components';
}
