# ngx-dynamic-components

NGX Dynamic Components is a dynamic configuration driven web page builder. It is designed to build anything from a single one form web page to more complex web app. 

## Quick start

1. Create new project and install packages

```
ng new my-dynamic-project
cd my-dynamic-project
npm install @angular/flex-layout @ngx-dynamic-components/core @ngx-dynamic-components/material
```

2. Install Angular Material [More details](https://material.angular.io/guide/getting-started).
- Install packages:

```
npm install --save @angular/material @angular/cdk @angular/animations
```
or using `ng add` for Angular Devkit 6+
```
ng add @angular/material
```
- Include theme. Add to file `styles.css`:
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

## Usage

In html template add tag
```
<ngx-dynamic-component (render)="onRender($event)" [uiModel]='uiModel'
    [dataModel]='dataModel' [workflow]='workflowConfig'></ngx-dynamic-component>
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
    workflowsMap: Chart.workflowsMap,
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
