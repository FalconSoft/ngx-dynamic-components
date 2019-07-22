import { BaseUIComponent } from './base-ui-component';
import { LabelProperties } from '../models';

export abstract class LabeledComponent<T = LabelProperties> extends BaseUIComponent<T> {
  get id() {
    if (this.hasLabel) {
      return 'component-id-' + (this.properties as LabelProperties).label.replace(/ /g, '-').toLowerCase();
    }
  }

  get hasLabel(): boolean {
    return Boolean((this.properties as LabelProperties).labelPosition);
  }

  get layout() {
    return ['left', 'right'].includes((this.properties as LabelProperties).labelPosition) ? 'row' : 'column';
  }
}
