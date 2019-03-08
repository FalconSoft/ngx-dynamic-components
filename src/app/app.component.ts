import { Component } from '@angular/core';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styles: [`
    .app-content {
      height: 100%;
    }
    ::ng-deep router-outlet + * {
      overflow: auto;
    }
  `]
})
export class AppComponent {
  title = 'ngx-dynamic-components';
}
