import { ComponentExample, UIModel } from '../../models';
import { RepeaterProperties } from './repeater.component';

const example: ComponentExample<UIModel<RepeaterProperties>> = {
  title: 'Repeater example',
  uiModel: `
  <div class="p-2">
    <h3 class="row">Todo List</h3>
    <div class="row w-100 align-items-center mb-3">
      <input class="form-control col" placeholder="Enter todo" binding="$.item"/>
      <button class="btn btn-secondary col-auto mx-2" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto" onClick="removeLast()" type="button">Remove Last</button>
    </div>
    <repeater class="row" itemsSource="$.dataList">
      <text class="col-12" text-style="h4">$.item</text>
    </repeater>
  </div>
  `,
  dataModel: {
    dataList: [{
      item: 'learn JS'
    }, {
      item: 'learn TS'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    "item": dataModel.item
  })

def removeLast():
  dataModel.dataList.pop()
  `
};


const inputExample: ComponentExample<UIModel<RepeaterProperties>> = {
  title: 'Repeater input example',
  uiModel: `
  <div class="p-2">
    <h3 class="row">Names</h3>
    <div class="row w-100 align-items-center mb-3">
      <button class="btn btn-success col-auto" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto mx-2" onClick="removeLast()" type="button">Remove Last</button>
      <button class="btn btn-secondary col-auto" onClick="printDataModel()" type="button">Print DataModel</button>
    </div>
    <repeater class="row" itemsSource="$.dataList">
      <input class="form-control" binding="$.name"/>
    </repeater>
  </div>
  `,
  dataModel: {
    dataList: [{
      name: 'John'
    }, {
      name: 'Jane'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    name: ''
  })

def removeLast():
  dataModel.dataList.pop()

def printDataModel():
  print(dataModel)
  `
};

const selectExample: ComponentExample<UIModel<RepeaterProperties>> = {
  title: 'Repeater select example',
  uiModel: `
  <div class="p-2">
    <h3 class="row">Countries</h3>
    <div class="row w-100 align-items-center mb-3">
      <button class="btn btn-success col-auto" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto mx-2" onClick="removeLast()" type="button">Remove Last</button>
      <button class="btn btn-secondary col-auto" onClick="printDataModel()" type="button">Print DataModel</button>
    </div>
    <repeater class="row" itemsSource="$.dataList">
      <select class="form-control" width="300px" itemsSource="$.countries" binding="$._item.country"></select>
    </repeater>
  </div>
  `,
  dataModel: {
    countries: ['US', 'UK', 'France', 'Ukraine', 'Germany'],
    dataList: [{
      country: 'US'
    }, {
      country: 'UK'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    country: ''
  })

def removeLast():
  dataModel.dataList.pop()

def printDataModel():
  print(dataModel)
  `
};

export default [ example, inputExample, selectExample ];
