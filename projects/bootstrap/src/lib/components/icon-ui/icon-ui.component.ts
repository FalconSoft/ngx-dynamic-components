import { Component, HostBinding } from '@angular/core';
import {
  BaseUIComponent, propDescription, ComponentDescriptor,
  ComponentExample, UIModel, Categories, PropertyCategories, BindingProperties
} from '@ngx-dynamic-components/core';
import { packageName } from '../../constants';

@Component({
  selector: 'dc-icon-ui',
  template: `
    <div [ngSwitch]="itemStyles">
      <i [class]="iconClass" [ngStyle]="{fontSize: properties.size || '1rem'}"></i>
    </div>
    `,
  styles: ['./icon-ui.component.sass']
})
export class IconUIComponent extends BaseUIComponent<IconProperties> {
  @HostBinding('style.display') display = 'inline-block';
  get iconClass() {
    return this.componentDataModel || this.properties.iconClass;
  }
}

export class IconProperties extends BindingProperties {
  @propDescription({
    description: 'Icon font awesome class',
    example: 'Text information',
  })
  iconClass: string;

  @propDescription({
    description: 'Icon size',
    example: '2rem',
  })
  size?: string;
}

interface IconUIComponentConstrutor {
  new(): IconUIComponent;
}

interface IconPropertiesConstrutor {
  new(): IconProperties;
}

const example: ComponentExample<UIModel<IconProperties>> = {
  title: 'Icon compoent example',
  uiModel: {
    type: `${packageName}:icon`,
    containerProperties: {},
    itemProperties: {
      iconClass: 'fa fa-play',
      width: '50%',
      padding: '20px'
    }
  },
  dataModel: {}
};

const ICONS = ['fa fa-send', 'fa fa-play', 'fa fa-picture-o', 'fa fa-area-chart' , 'fa fa-bank', 'fa fa-beer',
'fa fa-automobile', 'fa fa-bag', 'fa fa-book', 'fa fa-bell', 'fa fa-camera', 'fa fa-calendar', 'fa fa-user',
'fa fa-globe', 'fa fa-gift', 'fa fa-group', 'fa fa-gear', 'fa fa-info', 'fa fa-money', 'fa fa-print', 'fa fa-registered',
'fa fa-share', 'fa fa-shopping-card', 'fa fa-tags', 'fa fa-tasks', 'fa fa-star', 'fa fa-univarsity', 'fa fa-file', 'fa fa-ticket',
'fa fa-television', 'fa fa-suitcase', 'fa fa-server', 'fa fa-map', 'fa fa-leptop', 'fa fa-home', 'fa fa-hashtag', 'fa fa-clock-o'];

export const iconDescriptor: ComponentDescriptor<IconUIComponentConstrutor, IconPropertiesConstrutor> = {
  name: 'icon',
  packageName,
  label: 'Icon',
  category: Categories.Basic,
  description: 'Icon component',
  itemProperties: IconProperties,
  component: IconUIComponent,
  example,
  defaultModel: {
    type: `${packageName}:icon`,
    itemProperties: {
      iconClass: 'fa fa-play',
      width: '100%'
    },
    containerProperties: {}
  },
  propertiesDescriptor: [
    ['iconClass', {
      name: 'iconClass', label: 'Icon Class', category: PropertyCategories.Main,
      combo: [ICONS]
    }]
  ]
};

