import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-combo-property',
  templateUrl: './combo-property.component.html',
  styleUrls: ['./combo-property.component.css']
})
export class ComboPropertyComponent implements OnInit {

  constructor() { }

  @Input() properties: Array<string[]>;
  @Input() value: string;
  @Output() change = new EventEmitter();

  result: string[];

  ngOnInit() {
    const values = (this.value || '').split(/\s{1,}/);
    this.result = this.properties.map((v, i) => values[i] || '');
  }

  onSelect(value: string, index: number) {
    this.result[index] = value;
    this.change.emit(this.result.join(' '));
  }

}
