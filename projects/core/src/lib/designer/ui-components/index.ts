/* eslint-disable @angular-eslint/component-selector */
import { Component, HostBinding } from '@angular/core';

import { InputComponent, InputProperties, inputDescriptor } from '../../ui-components/input/input.component';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ComponentDescriptor, UIModel, XMLResult } from '../../models';
import { LabelComponent, LabelProperties, labelDescriptor } from '../../ui-components/label/label.component';
import { TextareaComponent, textareaDescriptor } from '../../ui-components/textarea/textarea.component';
import { ButtonComponent, buttonDescriptor } from '../../ui-components/button/button.component';
import { SelectComponent, selectDescriptor } from '../../ui-components/select/select.component';
import { LinkComponent, linkDescriptor } from '../../ui-components/link/link.component';

export * from './designer-container.component';
export * from './designer-form.component';

@Component({
  selector: 'input',
  template: '',
  hostDirectives: [CdkDrag]
})
export class DesignerInputComponent extends InputComponent {
  @HostBinding('attr.novalidate') novalidate = true;
}

type DesignerInputComponentConstrutor = new () => DesignerInputComponent;
type InputPropertiesConstrutor = new () => InputProperties;

export const designerInputDescriptor: ComponentDescriptor<DesignerInputComponentConstrutor, InputPropertiesConstrutor> = {
  ...inputDescriptor,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const res = inputDescriptor.parseUIModel(xmlRes);
    res.itemProperties.required = false;
    return res;
  },
  component: DesignerInputComponent
};


@Component({
  selector: 'label',
  template: `{{text}}`,
  styles: [`
    :host.form-check-label > label {
      margin-bottom: 0;
    }
  `],
  hostDirectives: [CdkDrag]
})
export class DesignerLabelComponent extends LabelComponent { }

type DesignerLabelComponentConstrutor = new () => DesignerLabelComponent;
type LabelPropertiesConstrutor = new () => LabelProperties;

export const designerLabelDescriptor: ComponentDescriptor<DesignerLabelComponentConstrutor, LabelPropertiesConstrutor> = {
  ...labelDescriptor,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const res = labelDescriptor.parseUIModel(xmlRes);
    res.itemProperties.for = null;
    return res;
  },
  component: DesignerLabelComponent
};


@Component({
  selector: 'textarea', // eslint-disable-line
  template: '{{value}}',
  hostDirectives: [CdkDrag]
})
export class DesignerTextareaComponent extends TextareaComponent { }

export const designerTextAreaDescriptor: ComponentDescriptor = {
  ...textareaDescriptor,
  parseUIModel(xmlRes: XMLResult): UIModel {
    const res = textareaDescriptor.parseUIModel(xmlRes);
    res.itemProperties.required = false;
    return res;
  },
  component: DesignerTextareaComponent
};

@Component({
  selector: 'button',
  template: `
  <ng-container #vc></ng-container>
  {{properties.label}}
  `,
  hostDirectives: [CdkDrag],
})
export class DesignerButtonComponent extends ButtonComponent { }

export const designerButtonDescriptor: ComponentDescriptor = {
  ...buttonDescriptor,
  component: DesignerButtonComponent
};

@Component({
  selector: 'select',
  template: `
      <ng-container>
        <option [selected]="option.value === value" *ngFor="let option of options" [value]="option.value">{{option.label}}</option>
      </ng-container>
    `,
  hostDirectives: [CdkDrag],
})
export class DesignerSelectComponent extends SelectComponent { }

export const designerSelectDescriptor: ComponentDescriptor = {
  ...selectDescriptor,
  component: DesignerSelectComponent
};

@Component({
  selector: 'dc-link',
  template: `
    <a (click)="prevent($event)" [ngStyle]="itemStyles" [attr.target]="properties.target || null"
      [href]="properties.href">{{properties.label}}</a>
  `,
  styles: [`
    a {
      color: inherit;
    }
  `],
  hostDirectives: [CdkDrag],
})
export class DesignerLinkComponent extends LinkComponent {
  prevent(event: Event): void {
    event.preventDefault();
  }
}

export const designerLinkDescriptor: ComponentDescriptor = {
  ...linkDescriptor,
  component: DesignerLinkComponent
};
