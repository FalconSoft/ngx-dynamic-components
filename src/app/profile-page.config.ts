import { UIModel, AttributesMap, WorkflowConfig } from '@ngx-dynamic-components/core';

export const ProfileFormUIModel = {
  type: 'material:flex-container',
  itemProperties: {
    fxLayout: 'column',
    width: '100%',
    height: '100%',
  } as AttributesMap,
  children: [
    {
      type: 'material:text-input',
      containerProperties: {
        width: '100%'
      },
      itemProperties: {
        isNumeric: false,
        isDate: false,
        format: '',
        placeholder: 'Username',
        dataModelPath: '$.user/userName',
      } as AttributesMap
    },
    {
      type: 'material:flex-container',
      containerProperties: {
        width: '100%'
      },
      itemProperties: {
        fxLayout: 'row',
        fxLayoutGap: '1rem',
        width: '100%'
      },
      children: [{
        type: 'material:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          isNumeric: false,
          isDate: false,
          format: '',
          placeholder: 'First Name',
          dataModelPath: '$.user/firstName'
        }
      },
      {
        type: 'material:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          isNumeric: false,
          isDate: false,
          format: '',
          placeholder: 'Last Name',
          dataModelPath: '$.user/lastName'
        }
      }
      ]
    },
    {
      type: 'material:text',
      containerProperties: {},
      itemProperties: {
        text: 'Address',
        width: '100%'
      }
    },
    {
      type: 'material:text-input',
      containerProperties: {
        width: '100%'
      },
      itemProperties: {
        isNumeric: false,
        isDate: false,
        format: '',
        placeholder: 'Line 1',
        dataModelPath: '$.address/details/line1'
      }
    },
    {
      type: 'material:text-input',
      containerProperties: {
        width: '100%'
      },
      itemProperties: {
        isNumeric: false,
        isDate: false,
        format: '',
        placeholder: 'Line 2',
        dataModelPath: '$.address/details/line2'
      }
    },
    {
      type: 'material:select',
      containerProperties: {
        width: '100%'
      },
      id: 'stateSelection',
      itemProperties: {
        width: '100%',
        options: [
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Ukraine', value: 'ua' }
        ],
        placeholder: 'Country',
        dataModelPath: '$.address/country'
      }
    },
    {
      type: 'material:flex-container',
      containerProperties: {
        width: '100%'
      },
      itemProperties: {
        fxLayout: 'row',
        fxLayoutGap: '1rem',
        width: '100%',
      },
      children: [{
        id: 'citySelection',
        type: 'material:select',
        containerProperties: {
          fxFlex: '1 1 auto',
          width: '100%',
        },
        itemProperties: {
          placeholder: 'City',
          dataModelPath: '$.address/city'
        }
      },
      {
        type: 'material:text-input',
        containerProperties: {
          fxFlex: '1 1 auto',
          width: '100%',
        },
        itemProperties: {
          isNumeric: false,
          isDate: false,
          format: '',
          placeholder: 'Zip',
          dataModelPath: '$.address/zip'
        }
      }]
    },
    {
      type: 'material:flex-container',
      itemProperties: {
        fxLayoutAlign: 'flex-end stretch'
      },
      children: [
        {
          type: 'material:button',
          containerProperties: {
            fxLayout: 'row'
          },
          itemProperties: {
            label: 'SUBMIT',
            clickActionKey: 'consoleLog'
          }
        },
      ]
    }]
} as UIModel;

export const ProfileCardUIModel = {
  type: 'material:card',
  containerProperties: {
    width: '100%'
  },
  itemProperties: {
    header: {
      title: 'Profile form'
    },
    content: ProfileFormUIModel
  } as AttributesMap
};

export const ProfileDataModel = {
  user: {
    firstName: 'John'
  }
};

export const ProfileWorkflowsMap = {
  failOnError: true,
  include: ['@common'],
  vars: {},
  workflowsMap: {
    stateSelection_selectionChanged: [
      {
        actionType: 'setValue',
        object: '$uiModel',
        propertyName: '$(children:id=citySelection)/itemProperties/options',
        propertyValue: [
          { label: 'Lviv', value: 'lviv' },
          { label: 'Kyiv', value: 'kyiv' }
        ]
      }
    ]
  }
} as WorkflowConfig;
