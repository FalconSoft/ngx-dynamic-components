import { Component, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { StyleProperties, propDescription, PropertyCategories } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
    selector: 'dc-form',
    templateUrl: './form.component.html'
})
export class FormComponent extends BaseUIComponent<FormProperties> {
  @HostBinding('style.display') display = 'flex';
  @ViewChild('form', { static: true }) form: ElementRef<HTMLFormElement>;

  onFormSubmit(evt): void {
    console.log('evt', evt, this.form);
    this.emitEvent(this.properties.onSubmit, { form: this.form });
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

interface FormComponentConstrutor {
  new (): FormComponent;
}

interface FormPropertiesConstrutor {
  new (): FormProperties;
}

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
