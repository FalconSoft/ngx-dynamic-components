import { BaseUIComponent } from './base-ui-component';
import { LabelProperties } from '../properties';

export abstract class LabeledComponent<T = LabelProperties> extends BaseUIComponent<T> {
  get id() {
    const label = (this.properties as LabelProperties).label;
    if (this.hasLabel && label) {
      return 'component-id-' + label.replace(/ /g, '-').toLowerCase();
    }
  }

  get hasLabel(): boolean {
    return Boolean((this.properties as LabelProperties).labelPosition);
  }

  get layout(): 'row'|'column' {
    return ['left', 'right'].includes((this.properties as LabelProperties).labelPosition) ? 'row' : 'column';
  }

  get align(): string {
    return this.layout === 'row' ? 'start center' : 'center start';
  }
}
