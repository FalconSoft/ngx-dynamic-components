import { Component, OnInit, Input } from '@angular/core';
import { ComponentDescriptor, UIModel, ActionsContainer } from '@ngx-dynamic-components/core';

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
    this.uiModel = JSON.parse(this.component.example);
    this.actions = new ActionsContainer({}, this.uiModel);

    console.log('this.component.example', this.component.example);
  }

  toggleSourceCode() {
    this.sourceCode = ! this.sourceCode;
  }

}
