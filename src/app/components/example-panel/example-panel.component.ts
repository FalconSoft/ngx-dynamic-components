import { Component, OnInit, Input } from '@angular/core';
import { ComponentDescriptor, UIModel, ActionsContainer } from '@ngx-dynamic-components/core';

/**
 * @depracated
 */
@Component({
  selector: 'dc-example-panel',
  templateUrl: './example-panel.component.html',
  styleUrls: ['./example-panel.component.scss']
})
export class ExamplePanelComponent implements OnInit {

  @Input()
  component: ComponentDescriptor;

  actions: ActionsContainer;
  uiModel: UIModel;

  sourceCode = false;
  editorOptions = {
    language: 'json',
    automaticLayout: true,
    readOnly: true
  };

  constructor() { }

  ngOnInit() {
    this.uiModel = this.component.example.uiModel;
    this.actions = new ActionsContainer({}, this.uiModel);
  }

  toggleSourceCode() {
    this.sourceCode = ! this.sourceCode;
  }

}
