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
      <ul *ngIf="itemProperties$ | async as properties">
        <h2 class="mat-h2">Item properties: </h2>
        <li *ngFor="let prop of properties">{{prop.name}} - {{prop.description}} - Example: {{prop.example}}</li>
      </ul>
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
  itemProperties$: Observable<[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.component$ = this.route.params.pipe(map(p => COMPONENTS_LIST.find(c => c.desc.name === p.component).desc));
    this.itemProperties$ = this.component$.pipe(map((c: any) => {
      if (c.itemProperties) {
        return c.itemProperties.prototype.properties;
      }
      return null;
    }));
  }

}
