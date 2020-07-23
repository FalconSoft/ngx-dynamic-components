import { ComponentExample, UIModel } from '../../models';
import { InputProperties } from './input.component';

export const example1: ComponentExample<UIModel<InputProperties>> = {
  title: 'Text input example',
  uiModel: `
  <div class="d-flex flex-column">
    <div class="form-group">
      <label class="col-form-label" width="80px">Name</label>
      <input onInput="onNameInput(name)" placeholder="Enter your name" binding="$.name"/>
    </div>
    <div class="form-group">
      <label class="col-form-label" width="80px">Last name</label>
      <input disabled="true" id="lastName" placeholder="Enter your last name" binding="$.lastName"/>
    </div>
  </div>
  `,
  scripts: `
  def onNameInput(name):
    disabled = name == ""
    comp = getComponentById(rootUIModel, "lastName")
    comp.disabled = disabled or null # should set null not false
  `,
  dataModel: {},
  description: 'Input "Last name" is disabled while input "Name" is empty.'
};

export const example2: ComponentExample<UIModel<InputProperties>> = {
  title: 'Checkbox example',
  uiModel: `
  <div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" binding="$.subscribed"/>
      <label class="form-check-label" for="subscribed" width="80px">Subscribe</label>
    </div>
  </div>
  `,
  dataModel: {},
  description: 'Checkbox value is binded to dataModel\'s <i>subscribed</i> property.'
};

export const example3: ComponentExample<UIModel<InputProperties>> = {
  title: 'Radio group example',
  uiModel: `
  <div>
    <div class="form-group form-check mt-5">
      <input id="opt1" type="radio" class="form-check-input" name="option" value="option-1" binding="$.option"/>
      <label for="opt1" class="form-check-label" width="80px">Option 1</label>
    </div>
    <div class="form-group form-check">
      <input id="opt2" type="radio" class="form-check-input" name="option" value="option-2" binding="$.option"/>
      <label for="opt2" class="form-check-label" width="80px">Option 2</label>
    </div>
    <div class="form-group form-check">
      <input id="opt3" type="radio" class="form-check-input" name="option" value="option-3" binding="$.option"/>
      <label for="opt3" class="form-check-label" width="80px">Option 3</label>
    </div>
  </div>
  `,
  dataModel: {},
  description: 'You can choose one of 3 options.'
};

export default [example1, example2, example3];
