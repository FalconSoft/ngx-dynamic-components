# ngx-dynamic-components properties

This section about descriptors for dynamic component properties.

## Common properties.

File `./descriptor.ts` contains maps `ContainerControlProperties` and `ControlProperties` with common properties (`fxFlex`, `width`, `height`, ...) that are often used in different components.

## Custom properties.

Also custom components registered outside @ngx-dynamic-components package can have it's own specific properties that are automatically are  registered in map `ControlProperties`. Details file `../services/core.service.ts`.

For that purpose use property `propertiesDescriptor` of class `ComponentDescriptor`. Details file `../models.ts`.

## Example of property descriptor.

Type of `[string, ComponentProperty]`
```
  ['labelPosition', {
    name: 'labelPosition', label: 'Label Position', category: PropertyCategories.Main,
    combo: [['left', 'top', 'right', 'bottom']]
  }]
```
