## Description

Implements dynamic components based on [Angular Material](https://material.angular.io).

1. Install package
```
npm install @ngx-dynamic-components/material
```

2. Install Angular Material [More details](https://material.angular.io/guide/getting-started).
Install packages:

Use `ng add` for Angular Devkit 6+
```
ng add @angular/material
```

For older versions
```
npm install --save @angular/material @angular/cdk @angular/animations
```
Include theme. Add to file `styles.css`:
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

3. Import module
```
import { MaterialModule } from '@ngx-dynamic-components/material';

...
@NgModule({
  ...
  imports: [
    ...
    MaterialModule
  ],
  ...
})
export class AppModule { }
```
