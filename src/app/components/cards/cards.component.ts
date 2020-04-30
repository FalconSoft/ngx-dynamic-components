import { Component, Input } from '@angular/core';

@Component({
  selector: 'dc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() cards;

}
