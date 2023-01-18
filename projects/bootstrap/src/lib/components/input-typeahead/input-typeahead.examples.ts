import { UIModel, ComponentExample } from '@ngx-dynamic-components/core';
import { InputTypeaheadProperties } from './input-typeahead.component';

export const example2: ComponentExample<UIModel<InputTypeaheadProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Type text</label>
        <input-typeahead width="300px" itemsSource="$.list" binding="$.selected"></input-typeahead>
      </div>
    </div>
  `,
  dataModel: {
    list: [{ label: 'Data 1', value: 'd1' }, { label: 'Data 2', value: 'd2' }]
  },
  title: 'Dropdown options binded to dataModel',
};

export const example3: ComponentExample<UIModel<InputTypeaheadProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Type text</label>
        <input-typeahead width="300px" binding="$.selectedOption">
          <option value="o1">Option 1</option>
          <option value="o2">Option 2</option>
        </input-typeahead>
      </div>
    </div>
  `,
  dataModel: {},
  title: 'Static dropdown declaration',
};

export const example1: ComponentExample<UIModel<InputTypeaheadProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <input-typeahead onSelect="countryChanged" width="300px" binding="$.country">
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </input-typeahead>
      </div>
      <div class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <input-typeahead width="300px" itemsSource="$.cities" binding="$.city"></input-typeahead>
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

export const example4: ComponentExample<UIModel<InputTypeaheadProperties>> = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Type text</label>
        <input-typeahead width="300px"
          typeahead="onTypeahead(searchTerm)"
          debounceTime="1000"
          binding="$.selected"
          change="onChange()">
        </input-typeahead>
      </div>

      <text binding="$.selected"></text>
    </div>
  `,
  dataModel: {},
  scripts: `
  async def onTypeahead():
    if searchTerm != null:
      # can be server-side call
      return [
        {label: searchTerm + ' 1', value: searchTerm + ' 1'},
        {label: searchTerm + ' 2', value: searchTerm + ' 2'}
      ]

  async def onChange():
    print('Selected value: ', dataModel.selected)
  `,
  title: 'drop-down with typeahead and debounceTime',
};

export default [example4, example1, example2];
