import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[dc-draggable]',
  hostDirectives: [CdkDrag],
  styles: [ ':host { display: block; }' ],
  template: '<ng-container #container></ng-container>'
})
export class DraggableComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
}
