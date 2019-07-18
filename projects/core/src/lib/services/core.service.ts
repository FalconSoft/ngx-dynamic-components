import { Injectable } from '@angular/core';

import { ComponentDescriptor } from '../models';
import { BaseUIComponentConstructor, UIModelProperty } from '../utils';
import { ControlProperties } from '../components/properties-editor/model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private static COMPONENTS_REGISTER = new Map<string, ComponentDescriptor>();

  public static registerComponent(desc: ComponentDescriptor) {
    const {name, packageName, propertiesDescriptor} = desc;
    if (propertiesDescriptor) {
      propertiesDescriptor.forEach(prop => {
        ControlProperties.set(`${packageName}:${name}:${prop[0]}`, prop[1]);
      });
    }
    CoreService.COMPONENTS_REGISTER.set(`${packageName}:${name}`, desc);
  }

  public static getComponent(type: string): BaseUIComponentConstructor {
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      return CoreService.COMPONENTS_REGISTER.get(type).component;
    }

    throw new Error(`Component ${type} is not registered`);
  }

  public static getComponentDescriptor(type: string): ComponentDescriptor {
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      return CoreService.COMPONENTS_REGISTER.get(type);
    }

    throw new Error(`ComponentDescriptor ${type} is not registered`);
  }

  public static getComponentProperties(type: string): UIModelProperty[] {
    try {
      const desc = CoreService.getComponentDescriptor(type);
      return desc.itemProperties.prototype.properties;
    } catch (e) {
      throw e;
    }
  }

  public static getListOfComponents(): Array<ComponentDescriptor> {
    return Array.from(CoreService.COMPONENTS_REGISTER.values());
  }
}
