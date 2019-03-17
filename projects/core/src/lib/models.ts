import { propDescription, BaseUIComponent } from './components/base-ui-component';

type UIAction = (sender: UIModel, dataModel: any, uiModel: UIModel) => void;

export interface AttributesMap {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    label?: string;
    [key: string]: any;
}

export abstract class StyleProperties implements AttributesMap {
  @propDescription({
    description: 'Element\'s width.',
    example: '100%'
  })
  width?: string;

  @propDescription({
    description: 'Element\'s width.',
    example: '100%'
  })
  height?: string;

  @propDescription({
    description: 'Element\'s padding.',
    example: '10px 5px'
  })
  padding?: string;

  @propDescription({
    description: 'Element\'s margin.',
    example: '5px 3px 5px 10px'
  })
  margin?: string;
}

export abstract class DataModelProperties extends StyleProperties {
  @propDescription({
    description: 'Path to id in data model.',
    example: 'name'
  })
  dataModelPath?: string;
}

export interface PropDescriptor {
  description: string;
  example: string;
}

export interface ComponentExample<T = UIModel> {
  uiModel: T;
  dataModel;
  title: string;
}

interface BaseUIComponentConstructor {
  new (): BaseUIComponent;
}

interface AttributesMapConstructor {
  new (): AttributesMap;
}

export interface ComponentDescriptor<ComponentType = BaseUIComponentConstructor, PropertiesType = AttributesMapConstructor> {
  packageName: string;
  category: string;
  name: string;
  description: string;
  itemProperties: PropertiesType;
  component: ComponentType;
  example?: ComponentExample;
}

export abstract class UIModel<T = AttributesMap> {
  id?: string;
  type: string;
  itemProperties: T;
  containerProperties: AttributesMap;
  children?: UIModel[];
}
