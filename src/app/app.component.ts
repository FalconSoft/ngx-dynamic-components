import { Component } from '@angular/core';
import { ProfileFormUIModel, ProfileActionsMap } from './profile-page.config';

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

  defaultModel = JSON.stringify(ProfileFormUIModel, null, 4);
  defaultActionsMap = ProfileActionsMap;
}
