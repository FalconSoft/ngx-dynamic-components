import { Component } from '@angular/core';
import { ProfileFormUIModel, ProfileActionsMap } from './profile-page.config';
import { ActionsContainer } from 'projects/core/src/public_api';

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

  defaultModel2 = ProfileFormUIModel;
  defaultModel = JSON.stringify(ProfileFormUIModel, null, 4);
  defaultActionsMap = ProfileActionsMap;

  actions = new ActionsContainer(ProfileActionsMap, ProfileFormUIModel);
}
