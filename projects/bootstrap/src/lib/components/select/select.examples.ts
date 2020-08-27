import { UIModel, ComponentExample } from '@ngx-dynamic-components/core';
import { SelectProperties } from './select.component';

export const example1: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Select Option</label>
        <ng-select width="300px" binding="$.selectedOption">
          <option value="o1">Option 1</option>
          <option value="o2">Option 2</option>
        </ng-select>
      </div>
    </div>
  `,
  dataModel: {},
  title: 'Static dropdown declaration',
};

export const example2: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Select</label>
        <ng-select width="300px" itemsSource="$.list" binding="$.selected"></ng-select>
      </div>
    </div>
  `,
  dataModel: {
    list: [{label: 'Data 1', value: 'd1'}, {label: 'Data 2', value: 'd2'}]
  },
  title: 'Dropdown options binded to dataModel',
};

export const example3: ComponentExample<UIModel<SelectProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <ng-select onSelect="countryChanged" width="300px" binding="$.country">
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </ng-select>
      </div>
      <div class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <ng-select width="300px" itemsSource="$.cities" binding="$.city"></ng-select>
      </div>
    </div>
  `,
  dataModel: {},
  scripts: `
  # Evaluated with JSPython https://jspython.dev/

  def countryChanged():
    dataModel.city = null
    if dataModel.country == null:
      dataModel.cities = []
    if dataModel.country == "uk":
      dataModel.cities = [{label: "London", value: "lon"}, {label: "Liverpool", value: "liv"}]
    if dataModel.country == "ua":
      dataModel.cities = [{label: "Kyiv", value: "kyiv"}, {label: "Lviv", value: "lvi"}]
  `,
  title: 'Dependency between dropdowns',
  description: 'Handles change event from first dropdown and changes values in second.'
};

export default [example1, example1, example2];
