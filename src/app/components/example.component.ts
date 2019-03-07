import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-example',
  template: `
    <div *ngIf="component$ | async as component">
      <h1 class="mat-h1">{{component.name}}</h1>
      <h2 class="mat-h2">{{component.description}}</h2>
    </div>
  `,
  styles: [`
    div {
      padding: 50px;
    }
  `]
})
export class ExampleComponent implements OnInit {
  component$: Observable<ComponentDescriptor>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.component$ = this.route.params.pipe(map(p => COMPONENTS_LIST.find(c => c.desc.name === p.component).desc));
  }

}
