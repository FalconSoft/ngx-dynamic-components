import { Component, OnInit } from '@angular/core';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getSlugFromStr, COMPONENTS_LIST } from '../utils';

@Component({
  selector: 'dc-components',
  template: `
    <h1 class="mat-h1">Available components for {{category$ | async}}</h1>
    <dc-cards [cards]="components$ | async"></dc-cards>
  `,
  styles: [`
    :host {
      padding: 25px;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class ComponentsComponent implements OnInit {

  components$: Observable<any>;
  category$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const filterComponents = (p) => {
      return (c: ComponentDescriptor) => (!p.category || getSlugFromStr(c.category) === p.category) && c.packageName === p.packageName;
    };
    this.components$ = this.route.params
      .pipe(
        map(p => COMPONENTS_LIST.filter(filterComponents(p))
          .map(c => ({
            header: `${c.packageName} ${c.name}`,
            content: c.description,
            link: ['/components', c.packageName, c.name]
          }))));

    this.category$ = this.route.params
      .pipe(
        map(p => p.category ? p.category.replace(/-/g, ' ') : 'all categories'));
  }

}
