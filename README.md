# ngx-dynamic-components

NGX Dynamic Components is a configuration based dynamic components library for Angular. That allows you to rapidly create dynamic forms or any other mobile-friendly web layouts.

Any web content can be dynamically rendered from JSON or XML based configuration with a full support of lifecycle hook methods.

We have three libraries to offer
  - [**@ngx-dynamic-components/core**](https://github.com/FalconSoft/ngx-dynamic-components/tree/master/projects/core) - a core dynamic rendering engine with no dependencies to any external library. And contains all basic HTML components.
  - [**@ngx-dynamic-components/bootstrap**](https://github.com/FalconSoft/ngx-dynamic-components/tree/master/projects/bootstrap) - a set of bootstrap based components. This project has dependencies to the [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)
  - [**@ngx-dynamic-components/material**](https://github.com/FalconSoft/ngx-dynamic-components/tree/master/projects/material) - a set of [Angular Material Components](https://material.angular.io/)

## Getting started

### 1. Create Angular project with [Angular CLI](https://cli.angular.io/)
### 2. Add **@ngx-dynamic-components/core** 

`npm install @ngx-dynamic-components/core --save`

### 3. Import module

```ts
import { DynamicComponentsCoreModule } from '@ngx-dynamic-components/core';
// ...
@NgModule({
  // ...
  imports: [
    // ...
    DynamicComponentsCoreModule
  ],
  ...
})
export class AppModule { }
```
### 4. Create a simple component. Same as [Contact Form here ...](https://www.w3schools.com/howto/howto_css_contact_form.asp)

```ts
import { Component } from '@angular/core';
import { ComponentEvent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'app-root',
  template: `
  <ngx-dynamic-component
    [uiModel]='uiModel'
    [dataModel]='dataModel'
    (eventHandlers)="eventHandlers($event)">
  </ngx-dynamic-component>
  `,

  styles: [`
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
  }`,
    `input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }`,
    `input[type=submit]:hover {
    background-color: #45a049;
  }`,
    `.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    max-width: 960px;
    margin: auto;
  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  uiModel = `
  <div class="container">
    <form onSubmit="save(data)">
      <label>First Name</label>
      <input type="text" id="fname" binding="$.fname" placeholder="Your name.."/>

      <label>Last Name</label>
      <input type="text" id="lname" placeholder="Your last name.."/>

      <label>Country</label>
      <select id="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <label>Subject</label>
      <textarea id="subject" placeholder="Write something.." style="height:200px"></textarea>

      <input type="submit" value="Submit"/>
    </form>
  </div>
  `;

  dataModel = {};

  eventHandlers(ev: ComponentEvent) {
    if (ev.eventName === 'save') {
      console.log('save event', ev, this.dataModel);
    }
  }
}

```

From the example above you see that have four main properties:
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
 - Custom CSS and styling and responsive design very easy to achieve. Just the same as you would do it in [HTML](https://www.scaler.com/topics/html/introduction-to-html/). For instance, if you know Bootstrap or any other CSS framework, you can easily leverage this for dynamic rendering.
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
