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
  @Input() value: string|boolean;
  @Output() change = new EventEmitter();

  result: (string|boolean)[];
  props: Array<OptionValue[]>;

  ngOnInit() {
    let values = [this.value];
    if (typeof this.value === 'string' || this.value === undefined) {
      values = ((this.value as string) || '').split('|');
    }
    this.result = this.properties.map((v, i) => values[i] === undefined ? '' : values[i]);
    this.props = this.properties.map(options => {
      return Array.isArray(options) ? options.map(o => {
        if (typeof o === 'object') {
          return o;
        }
        return {label: o, value: o};
      }) : options;
    });
  }

  onSelect(option: OptionValue, index: number) {
    this.setValue(option ? option.value : '', index);
  }

  selectedOption(i: number): OptionValue {
    return this.props[i].find(o => o.value === this.result[i]);
  }

  setValue(value: string, index: number) {
    this.result[index] = value;
    this.emitChange();
  }

  onEnter(e: Event) {
    e.stopPropagation();
    this.emitChange();
  }

  emitChange() {
    const res = this.result.length > 1 ? this.result.join('|') : this.result[0];
    this.change.emit(res);
  }

  isInput(prop: string) {
    return typeof prop === 'string';
  }

  isSelect(prop: string) {
    return Array.isArray(prop);
  }
}
