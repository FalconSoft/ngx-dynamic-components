# ngx-dynamic-components

NGX Dynamic Components is a dynamic configuration driven web page builder. It is designed to build anything from a single one form web page to more complex web app. 

## Quick start

1. Create new project and install packages

```
ng new my-dynamic-project
cd my-dynamic-project
npm install @angular/flex-layout @ngx-dynamic-components/core
```

Add to file src/polyfills.ts
```
(window as any).global = window;
```

## Usage

Import module
```
import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';

...
@NgModule({
  ...
  imports: [
    ...
    DynamicComponentsCoreModule
  ],
  ...
})
export class AppModule { }
```

In html template add tag
```
<ngx-dynamic-component (render)="onRender($event)" [uiModel]='uiModel'
    [dataModel]='dataModel' (eventHandlers)="eventHandlers($event)"></ngx-dynamic-component>
```

In ts code add `uiModel`, `eventHandlers($event)` and `dataModel`

```js
uiModel = `
  <section class="row align-items-center justify-content-between" width="100%" height="100%" margin="8px" background="white">
    <text class="m-0" text-style="h1">Header 1</text>
    <text class="m-0" text-style="h2">Header 2</text>
    <button class="btn btn-secondary" onСlick="consoleLog" type="button">Click</button>
    <text class="m-0" background="red" text-style="h3">Header 3</text>
  </section>`;

  dataModel = {};

  eventHandlers({eventName, parameters}) {
    // Handle events.
  }
  ```

## Properties

Properties provides meta information for component properties.
[Properties](src/lib/properties/README.md)
