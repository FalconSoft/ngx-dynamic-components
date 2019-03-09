import { Component, OnInit } from '@angular/core';
import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';
import { ComponentDescriptor } from '@ngx-dynamic-components/core';

@Component({
  selector: 'dc-cards',
  template: `
    <h1 class="mat-h1">Available components:</h1>
    <div class="cards-wrapper" fxLayout fxLayoutGap="50px">
      <mat-card *ngFor="let comp of components">
        <mat-card-header>
          <h3 class="mat-h2">{{comp.name}}</h3>
        </mat-card-header>
        <mat-card-content>
          {{comp.description}}
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    :host {
      padding: 50px;
      display: flex;
      flex-direction: column;
    }
    .cards-wrapper {
      flex-wrap: wrap;
    }

    mat-card {
      width: 160px;
      margin: 25px 0;
    }
  `]
})
export class CardsComponent implements OnInit {

  components: ComponentDescriptor[] = COMPONENTS_LIST;

  constructor() { }

  ngOnInit() {
  }

}
