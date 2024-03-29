import { Component, HostBinding, OnInit } from '@angular/core';
import { BaseUIComponent } from '../../components/base-ui-component';
import { BindingProperties, propDescription } from '../../properties';
import { ComponentExample, UIModel, ComponentDescriptor, Categories } from '../../models';

@Component({
  selector: 'dc-icon-ui',
  template: ''
})
export class IconComponent extends BaseUIComponent<IconProperties> implements OnInit {
  @HostBinding('style.display') display = 'inline-block';
  @HostBinding('style.font-size') fontSize: string;
  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.fontSize = this.properties.size || '1rem';
  }
  get iconClass(): string {
    return this.componentDataModel || this.properties.iconClass;
  }
}

export class IconProperties extends BindingProperties {
  @propDescription({
    description: 'Icon size',
    example: '2rem',
  })
  size?: string;

  @propDescription({
    description: 'Icon class',
    example: 'fa fa-play',
  })
  iconClass: string;
}

type IconComponentConstrutor = new() => IconComponent;

type IconPropertiesConstrutor = new() => IconProperties;

const example: ComponentExample<UIModel<IconProperties>> = {
  title: 'Icon compoent example',
  uiModel: `
  <icon class="fa fa-play" padding="20px" size="2rem"/>
  `,
  dataModel: {}
};

const ICONS = ['fa fa-send', 'fa fa-play', 'fa fa-picture-o', 'fa fa-area-chart' , 'fa fa-bank', 'fa fa-beer',
'fa fa-automobile', 'fa fa-bag', 'fa fa-book', 'fa fa-bell', 'fa fa-camera', 'fa fa-calendar', 'fa fa-user',
'fa fa-globe', 'fa fa-gift', 'fa fa-group', 'fa fa-gear', 'fa fa-info', 'fa fa-money', 'fa fa-print', 'fa fa-registered',
'fa fa-share', 'fa fa-shopping-card', 'fa fa-tags', 'fa fa-tasks', 'fa fa-star', 'fa fa-univarsity', 'fa fa-file', 'fa fa-ticket',
'fa fa-television', 'fa fa-suitcase', 'fa fa-server', 'fa fa-map', 'fa fa-leptop', 'fa fa-home', 'fa fa-hashtag', 'fa fa-clock-o'];

export const iconDescriptor: ComponentDescriptor<IconComponentConstrutor, IconPropertiesConstrutor> = {
  name: 'icon',
  packageName: 'core',
  label: 'Icon',
  category: Categories.Basic,
  description: 'Icon component',
  itemProperties: IconProperties,
  component: IconComponent,
  example,
  defaultModel: '<icon class="fa fa-play"/>',
  children: false
};

