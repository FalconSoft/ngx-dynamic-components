import { UIModel, AttributesMap, WorkflowConfig } from '@ngx-dynamic-components/core';

const itemsTableUIModel: UIModel = {
  type: 'bootstrap:container',
  itemProperties: {} as AttributesMap,
  children: [{
      type: 'bootstrap:bs-row',
      id: 'itemsList',
      containerProperties: {
        width: '100%'
      },
      children: [{
        type: 'material:datable',
        containerProperties: {},
        itemProperties: {
            margin: '15px auto',
            displayedProperties: [
              {title: 'Todo', dataProperty: 'todo'},
            ],
            dataModelPath: '$.todoList'
        }
      }]
    },
    {
      type: 'bootstrap:bs-row',
      containerProperties: {
        width: '100%'
      },
      children: [{
        type: `bootstrap:text-input`,
        containerProperties: {},
        itemProperties: {
          placeholder: 'Enter new task',
          dataModelPath: '$.todoInput'
        }
      }, {
        type: 'bootstrap:button',
        itemProperties: {
          label: 'Add item',
          clickActionKey: 'addTodoItem'
        }
      }, {
        type: 'bootstrap:button',
        itemProperties: {
          label: 'Remove last item',
          clickActionKey: 'removeTodoItem'
        }
      }]
    }
  ]
};

export const dataModel = {todoList: [{todo: 'first item'}]};

export const workflowsMap = {
  failOnError: true,
  include: ['@common'],
  vars: {
    todoItem: {
      todo: 'ToDo new'
    }
  },
  workflowsMap: {
    addTodoItem: [{
      id: 'add-item',
      actionType: 'addItemToArray',
      object: '$dataModel',
      itemPropertyName: '$.todoInput',
      propertyName: '$.todoList',
      wrapName: 'todo'
    }],
    removeTodoItem: [{
      id: 'remove-item',
      actionType: 'popArray',
      object: '$dataModel',
      propertyName: '$.todoList',
    }]
  }
} as WorkflowConfig;

export const itemsTableConfig = {
  type: 'Items list',
  name: 'table-example',
  uiModel: itemsTableUIModel,
  dataModel,
  workflowConfig: workflowsMap,
};
