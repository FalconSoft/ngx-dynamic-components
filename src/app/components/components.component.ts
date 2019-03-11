import { Component, OnInit } from '@angular/core';
import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getSlugFromStr } from '../utils';

@Component({
  selector: 'dc-components',
  template: `
    <h1 class="mat-h1">Available components for {{category$ | async}}</h1>
    <dc-cards [cards]="components$ | async"></dc-cards>
  `,
  styles: [`
    :host {
      padding: 2em;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class ComponentsComponent implements OnInit {

  components$: Observable<any>;
  category$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.components$ = this.route.params.pipe(
      map(p => COMPONENTS_LIST.filter((c: ComponentDescriptor) => !p.category || getSlugFromStr(c.category) === p.category)
                              .map(c => ({header: c.name, content: c.description, link: ['/components', c.name]}))));

    this.category$ = this.route.params.pipe(
      map(p => p.category ? p.category.replace(/-/g, ' ') : 'all categories'));
  }

  ngOnInit() {
  }

}
