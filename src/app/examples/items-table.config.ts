import { UIModel, AttributesMap } from '@ngx-dynamic-components/core';

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
            binding: '$.todoList'
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
          binding: '$.todoInput'
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

export const itemsTableConfig = {
  type: 'Items list',
  name: 'table-example',
  uiModel: itemsTableUIModel,
  dataModel
};
