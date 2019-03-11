import { Injectable } from '@angular/core';

import { ComponentDescriptor } from './models';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private static COMPONENTS_REGISTER = new Map();

  public static registerComponent({name, component}: ComponentDescriptor) {
    // TODO add package to map key.
    CoreService.COMPONENTS_REGISTER.set(`${name}`, component);
  }

  public static getComponent(type: string) {
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      return CoreService.COMPONENTS_REGISTER.get(type);
    }

    throw new Error(`Component ${type} is not registered`);
  }
}
