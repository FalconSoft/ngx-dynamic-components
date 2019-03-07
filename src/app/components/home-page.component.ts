import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-home-page',
  template: `
    <header>
      <h1 class="mat-h1">Dynamic Content Editor</h1>
      <h3 class="mat-h3">Dynamic components for Angular</h3>
    </header>
  `,
  styles: [`
    header {
      padding: 60px 0;
      background: #3f51b5;
      text-align: center;
      color: white;
    }
    h1 {
      line-height: 60px;
      font-size: 60px;
    }
  `]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
