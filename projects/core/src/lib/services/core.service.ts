import { Injectable } from '@angular/core';
import { ComponentDescriptor, UIModel, XMLResult, BaseUIComponentConstructor, BaseHTMLElementConstructor } from '../models';
import { toXMLResult, parseXmlString } from '../utils';
import { controlProperties, UIModelProperty } from '../properties';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private static readonly COMPONENTS_REGISTER = new Map<string, ComponentDescriptor>();

  public static registerComponent(desc: ComponentDescriptor, version?: string): void {
    const { name, propertiesDescriptor } = desc;
    // @deprecated
    if (propertiesDescriptor) {
      propertiesDescriptor.forEach(prop => {
        controlProperties.set(`${name}:${prop[0]}`, prop[1]);
      });
    }
    const key = version ? `${name}:${version}` : name;
    CoreService.COMPONENTS_REGISTER.set(key, desc);
  }

  public static getComponent(type: string): BaseUIComponentConstructor | BaseHTMLElementConstructor {
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      return CoreService.COMPONENTS_REGISTER.get(type).component;
    }

    throw new Error(`Component ${type} is not registered`);
  }

  public static getComponentDescriptor(type: string, version?: string): ComponentDescriptor {
    if (version && CoreService.COMPONENTS_REGISTER.has(`${type}:${version}`)) {
      return CoreService.COMPONENTS_REGISTER.get(`${type}:${version}`);
    }

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
      console.warn(`Not able to get properties for ${type}`)
      throw e;
    }
  }

  public static getListOfComponents2(): Array<ComponentDescriptor> {
    return Array.from(CoreService.COMPONENTS_REGISTER.values());
  }

  public static getComponentsRegistryList(): [string, ComponentDescriptor][] {
    return Array.from(CoreService.COMPONENTS_REGISTER.entries());
  }

  // skips versions
  public static getListOfComponents(): Array<ComponentDescriptor> {
    return Array.from(CoreService.COMPONENTS_REGISTER.entries())
      .filter((entry) => !entry[0].includes(':'))
      .map(entry => entry[1]);
  }

  public static parseXMLModel(uiModelXml: string, version?: string): UIModel {
    if (!uiModelXml) {
      return null;
    }
    const res = parseXmlString(uiModelXml);

    if (res) {
      const type = Object.keys(res)[0];
      let xmlObj = res[type];
      if(typeof xmlObj === 'string' && xmlObj) {
        throw Error(`Invalid XML, please make sure file can't start with comment <!-- -->`);
      }
      if (!xmlObj) {
        xmlObj = { type };
      }
      if (typeof xmlObj === 'object') {
        xmlObj['#name'] = type;
        return CoreService.getUIModel(toXMLResult(xmlObj), version);
      }
    }
  }

  public static getUIModel(xmlRes: XMLResult, version?: string): UIModel {
    const itemProperties = xmlRes.attrs;
    const type = xmlRes.type;

      if (itemProperties.disabled === 'true') {
        itemProperties.disabled = true;
        // eslint-disable-next-line no-prototype-builtins
      } else if (Object.hasOwn(itemProperties, 'disabled')) {
        itemProperties.disabled = null;
      }

      if (CoreService.COMPONENTS_REGISTER.has(type)) {
        const uiModel: UIModel = {
          type,
          itemProperties
        };

        if (itemProperties.id) {
          uiModel.id = itemProperties.id;
        }
        try {
          const descr = CoreService.getComponentDescriptor(type, version); // CoreService.COMPONENTS_REGISTER.get(type);
          if (typeof descr.parseUIModel === 'function') {
            const typeUIModel = descr.parseUIModel(xmlRes);
            uiModel.itemProperties = { ...itemProperties, ...typeUIModel.itemProperties };
            if (typeUIModel.children) {
              uiModel.children = typeUIModel.children;
            }
          }
        } catch(e) {
          console.error(e);
          throw new Error(`Error parsing <${type} ..> : ${e}`);
        }
        if (xmlRes.childNodes && !uiModel.children) {
          uiModel.children = xmlRes.childNodes
            .filter(n => n['#name'] !== '#comment')
            .map((r: any) => CoreService.getUIModel(toXMLResult(r), 'designer'));
        }
        return uiModel;
      } else {
        throw Error(`No component for tag ${type}`);
      }

  }
}
