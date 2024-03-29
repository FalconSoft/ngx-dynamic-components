import { Component } from '@angular/core';
const packageJson = require('../../../package.json');

@Component({
  selector: 'dc-home-page',
  template: `
    <header>
      <h1 class="mat-h1">NGX Dynamic Components</h1>
      <h3 class="mat-h3">Configuration based dynamic components library for Angular.</h3>
      <span class="version">Current version {{version}}.</span>
    </header>
    <main class="container pt-5">
      <markdown src="README.md" lineNumbers [start]="5"></markdown>
    </main>
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
export class HomePageComponent {
  version = packageJson.version;
}
