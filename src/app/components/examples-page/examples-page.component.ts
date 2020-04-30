import { Component, OnInit } from '@angular/core';
import { getGroupedExamples } from '../../examples/examples.config';
import { GroupItem } from '../side-bar/side-bar.component';

@Component({
  selector: 'dc-examples-page',
  templateUrl: './examples-page.component.html',
  styleUrls: ['./examples-page.component.scss']
})
export class ExamplesPageComponent implements OnInit {

  examples: GroupItem[];

  constructor() { }

  ngOnInit(): void {
    this.examples = getGroupedExamples().map(({name, examples}) => ({name, list: examples}));
  }
}
