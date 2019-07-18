import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OptionValue } from '../../models';

@Component({
  selector: 'dc-combo-property',
  templateUrl: './combo-property.component.html',
  styleUrls: ['./combo-property.component.css']
})
export class ComboPropertyComponent implements OnInit {

  constructor() { }

  @Input() properties: Array<(string|OptionValue)[]>;
  @Input() value: string;
  @Output() change = new EventEmitter();

  result: string[];
  props: Array<OptionValue[]>;

  ngOnInit() {
    const values = (this.value || '').split('|');
    this.result = this.properties.map((v, i) => values[i] || '');
    this.props = this.properties.map(options => {
      return Array.isArray(options) ? options.map(o => {
        if (typeof o === 'object') {
          return o;
        }
        return {label: o, value: o};
      }) : options;
    });
  }

  onSelect(value: string, index: number) {
    this.result[index] = value;
    this.emitChange();
  }

  onEnter(e: Event) {
    e.stopPropagation();
    this.emitChange();
  }

  emitChange() {
    this.change.emit(this.result.join('|'));
  }

  isInput(prop: string) {
    return typeof prop === 'string';
  }

  isSelect(prop: string) {
    return Array.isArray(prop);
  }
}
