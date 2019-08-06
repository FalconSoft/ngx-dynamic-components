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
import { CoreModule } from '@ngx-dynamic-components/core';

...
@NgModule({
  ...
  imports: [
    ...
    CoreModule
  ],
  ...
})
export class AppModule { }
```

In html template add tag
```
<ngx-dynamic-component (render)="onRender($event)" [uiModel]='uiModel'
    [dataModel]='dataModel' [workflow]='workflowConfig'></ngx-dynamic-component>
```
For designer mode use tag
```
<ngx-designer-component (uiModelUpdated)="onUIModelUpdateHandler($event)"
  [uiModel]='page.uiModel' [workflow]='page.workflowConfig'></ngx-designer-component>
```
In ts code add `uiModel`, `workflowConfig` and `dataModel`

```
uiModel = {
    id: 'container',
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
      fxLayout: 'row',
      fxLayoutGap: '10px',
      width: '100%',
      padding: '10px'
    },
    children: [{
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 1',
      }
    }, {
      type: 'material:text',
      containerProperties: {
        fxFlex: '1 1 auto'
      },
      itemProperties: {
        text: 'Text line 2',
      }
    }]
  };

  dataModel = {};

  workflowConfig = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: {},
    consts: {}
  };

  workflow: WorkflowConfig = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: {
      'container-OnInit': []
    },
    consts: {}
  };
  ```
