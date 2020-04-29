# Bootstrap

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project bootstrap` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project bootstrap`.
> Note: Don't forget to add `--project bootstrap` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build bootstrap` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build bootstrap`, go to the dist folder `cd dist/bootstrap` and run `npm publish`.

## Running unit tests

Run `ng test bootstrap` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Description

Implements dynamic components based on [bootstrap](https://getbootstrap.com/) and it's Angular wrapper [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)

1. Install package
```
npm install @ngx-dynamic-components/bootstrap
```

2. Import module
```
import { DynamicComponentsBootstrapModule } from '@ngx-dynamic-components/bootstrap';

...
@NgModule({
  ...
  imports: [
    ...
    DynamicComponentsBootstrapModule
  ],
  ...
})
export class AppModule { }
```


