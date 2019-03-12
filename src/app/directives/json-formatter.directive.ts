import { Directive, ElementRef, OnChanges, Input } from '@angular/core';
import JSONFormatter from 'json-formatter-js';

@Directive({
  selector: '[dcJsonFormatter]'
})
export class JsonFormatterDirective implements OnChanges {
  @Input() json: any;

  constructor(private elRef: ElementRef) { }

  ngOnChanges() {
    if (this.json) {
      const formatter = new JSONFormatter(this.json);
      this.elRef.nativeElement.innerHTML = '';
      this.elRef.nativeElement.appendChild(formatter.render());
    }
  }
}
