import type { ElementRef, ViewContainerRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription, PropertyCategories, PropTypes } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
    selector: 'dc-form',
    templateUrl: './form.component.html'
})
export class FormComponent extends BaseUIComponent<FormProperties> {
  @ViewChild('form', { static: true }) form: ElementRef<HTMLFormElement>;

  onFormSubmit(evt): void {
    const formData = new FormData(this.form.nativeElement);
    this.emitEvent(this.properties.onSubmit, { formData });
    // Trigger ui validation messages.
    this.form.nativeElement.querySelectorAll('input,textarea,select').forEach((el: HTMLFormElement, i, list) => {
      el.focus();
      if (list.length - 1 === i) {
        el.blur();
      }
    });
  }
}

export class FormProperties extends StyleProperties {
  @propDescription({
    description: 'Submit handler',
    example: 'onFormSubmit(form)',
    type: PropTypes.EVENT
  })
  onSubmit?: string;
}

const example: ComponentExample<UIModel<FormProperties>> = {
  title: 'Form example',
  uiModel: `
  <form class="flex-column w-50 mx-auto" onSubmit="onSave(form)">
    <label class="mb-0">User name</label><input name="username" class="form-control" required="true"/>
    <label class="mb-0">Email</label><input name="email" type="email" class="form-control" required="true"/>
    <button class="d-flex btn btn-secondary ml-auto my-1" type="submit">Save</button>
  </form>
  `,
  scripts: `
    def onSave(form):
      print(form)
  `,
  dataModel: {}
};

type FormComponentConstrutor = new () => FormComponent;

type FormPropertiesConstrutor = new () => FormProperties;

export const formDescriptor: ComponentDescriptor<FormComponentConstrutor, FormPropertiesConstrutor> = {
  name: 'form',
  packageName: 'core',
  label: 'Form',
  category: Categories.Containers,
  description: 'layout component',
  itemProperties: FormProperties,
  component: FormComponent,
  example,
  defaultModel: `<form class="d-flex"></form>`,
  propertiesDescriptor: [['method', {
    name: 'method', label: 'Method', category: PropertyCategories.Main,
    values: ['GET', 'POST', 'PUT', 'DELETE']
  }]]
};
