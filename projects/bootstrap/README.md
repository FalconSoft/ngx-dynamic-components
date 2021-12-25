# @ngx-dynamic-components/bootstrap

NGX Dynamic Components is a configuration based dynamic components library for Angular. That allows you to rapidly create dynamic forms or any other mobile-friendly web layouts.

Any web content can be dynamically rendered from JSON or XML based configuration with a full support of lifecycle hook methods.

**@ngx-dynamic-components/bootstrap** - a set of bootstrap based components. This project has dependencies to the [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)

## Getting started

### 1. Create Angular project with [Angular CLI](https://cli.angular.io/)
### 2. Follow [installation instruction for ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started)
### 3. Add **@ngx-dynamic-components/bootstrap** and **@ngx-dynamic-components/core**

`npm install @ngx-dynamic-components/core @ngx-dynamic-components/bootstrap --save`

### 4. Import module

```ts
import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';
import { DynamicComponentsBootstrapModule } from '@ngx-dynamic-components/bootstrap';

// ...
@NgModule({
  // ...
  imports: [
    // ...
    DynamicComponentsCoreModule,
    DynamicComponentsBootstrapModule
  ],
  ...
})
export class AppModule { }
```
### 4. Create a simple component.

```ts
import { Component } from '@angular/core';
import { ComponentEvent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'app-root',
  template: `
  <ngx-dynamic-component
    [xmlUIModel]='xmlUIModel'
    (eventHandlers)="eventHandlers($event)"
    [dataModel]="data">
  </ngx-dynamic-component>
  `
})
export class AppComponent {
  xmlUIModel = `
  <form onSubmit="contactUs(data)">
    <h3>Contact us</h3>
    <div class="row">
      <div class="col-12 col-md-4 mb-2">
        <label>Full Name*</label>
        <input class="form-control" binding="$.fullName" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>E-mail Address*</label>
        <input class="form-control" binding="$.email" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>Phone</label>
        <input type="tel" class="form-control" binding="$.phone" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Message</label>
        <textarea class="form-control" rows="5" onInput="onChange()" binding="$.message" required="true" />
      </div>
    </div>
    <div class="row">
      <div class="col ml-auto">
        <button class="btn btn-primary" id="submitBtn" disabled="true" type="submit">SEND MESSAGE</button>
      </div>
    </div>
  </form>  `;

  dataModel = {};

  eventHandlers(evt: ComponentEvent) {
    switch (evt.eventName) {
      case 'onChange': {
        const btn = this.getComponentById(evt.rootUIModel, 'submitBtn') as any;
        btn.disabled = this.data.fullName && this.data.email && this.data.message ? undefined : true;
        break;
      }
      case 'contactUs': {
        this.sendData(evt.parameters?.data);
        break;
      }
    }

  }
}

```

From the example above you see that you can use most of bootstrap functionality and have the following properties:
 - **uiModel** - is you XML based configuration or JS Object
 - **dataModel** - data object what you can bind to
 - **eventHandlers** - event handlers function where you can subscribe to any events

## FAQ

### Why would you use it.

Composing and maintaining web forms and responsive web layouts can be tedious job. You will always have similar components with similar design patterns and requirements are usually changing frequently. While ngx-dynamic-components will allow you to:
 - define your forms layout and logic at run-time
 - load your web pages from the server
 - support full web page lifecycle events

### How this library is different from other dynamic content library

There are quite a few other dynamic components library for Angular. e.g. Formly (https://formly.dev), But with our library you can build anything from a very simple contact form to much more complex workflow-driven business web page. Core advantages:
 - XML based configuration as well as JSON. When a form gets bigger maintaining JSON configuration becomes very difficult (from our experience). While XML is much more readable human readable and looks very similar to HTML5
 - Custom CSS and styling and responsive design very easy to achieve. Just the same as you would do it in HTML. For instance, if you know Bootstrap or any other CSS framework, you can easily leverage this for dynamic rendering.
 - a true dynamic nature. You can change UI dynamically with a code-behind scripting logic
 - full event life cycle

### Why?

ngx-dynamic-components was build to power a [Worksheet Systems](https://worksheet.systems) - a low code data management platform. As none of the existing dynamic library served the purpose


## Resources
 - [**Home page**](https://falconsoft.github.io/ngx-dynamic-components/)
 - [**Source Code**](https://github.com/FalconSoft/ngx-dynamic-components)
 - [**Examples**](https://github.com/FalconSoft/ngx-dynamic-components-examples)

## License

A permissive MIT (c) - [FalconSoft Ltd](https://falconsoft-ltd.com)
