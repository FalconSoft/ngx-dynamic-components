import { UIModel, AttributesMap, WorkflowConfig } from '@ngx-dynamic-components/core';

const itemsListUIModel: UIModel = {
  type: 'bootstrap:container',
  itemProperties: {} as AttributesMap,
  children: [{
      type: 'bootstrap:bs-row',
      id: 'itemsList',
      containerProperties: {
        width: '100%'
      },
      children: [{
        type: 'bootstrap:bs-row',
        children: [{
          type: 'material:text',
          containerProperties: {},
          itemProperties: {
            text: 'Item - 1',
            width: '100%'
          }
        }]
      }]
    },
    {
      type: 'bootstrap:bs-row',
      containerProperties: {
        width: '100%'
      },
      children: [{
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

export const dataModel = {};

export const workflowsMap = {
  failOnError: true,
  include: ['@common'],
  vars: {
    todoItem: {
      type: 'material:text',
      containerProperties: {},
      itemProperties: {
        text: 'New Item',
        width: '100%'
      }
    }
  },
  workflowsMap: {
    addTodoItem: [{
      id: 'add-item',
      actionType: 'addItemToArray',
      object: '$uiModel',
      itemName: 'todoItem',
      propertyName: '$(children:id=itemsList)/children',
    }],
    removeTodoItem: [{
      id: 'remove-item',
      actionType: 'popArray',
      object: '$uiModel',
      propertyName: '$(children:id=itemsList)/children',
    }]
  }
} as WorkflowConfig;

export const itemsListConfig = {
  type: 'Items list',
  name: 'items-example',
  uiModel: itemsListUIModel,
  dataModel,
  workflowConfig: workflowsMap,
};
