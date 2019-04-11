import { UIModel, AttributesMap, WorkflowConfig } from '@ngx-dynamic-components/core';

export const ProfileFormUIModel = {
  type: 'bootstrap:container',
  itemProperties: {} as AttributesMap,
  children: [{
      type: 'bootstrap:bs-row',
      containerProperties: {
        width: '100%'
      },
      children: [{
        type: 'bootstrap:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          label: 'Username',
          placeholder: 'Enter your nickname',
          dataModelPath: '$.user/userName',
        } as AttributesMap
      }]
    },
    {
      type: 'bootstrap:bs-row',
      containerProperties: {
        width: '100%'
      },
      children: [{
        type: 'bootstrap:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          isNumeric: false,
          isDate: false,
          format: '',
          label: 'First Name',
          placeholder: 'Enter your first Name',
          dataModelPath: '$.user/firstName'
        }
      },
      {
        type: 'bootstrap:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          label: 'Last Name',
          placeholder: 'Enter your last Name',
          dataModelPath: '$.user/lastName'
        }
      }]
    },
    {
      type: 'bootstrap:bs-row',
      children: [{
        type: 'bootstrap:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          placeholder: 'Line 1',
          dataModelPath: '$.address/details/line1'
        }
      },
      {
        type: 'bootstrap:text-input',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          placeholder: 'Line 2',
          dataModelPath: '$.address/details/line2'
        }
      }]
    },
    {
      type: 'bootstrap:bs-row',
      children: [{
        type: 'bootstrap:select',
        id: 'stateSelection',
        itemProperties: {
          options: [
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Ukraine', value: 'ua' }
          ],
          label: 'Select country',
          dataModelPath: '$.address/country'
        }
      }]
    },
    {
      type: 'bootstrap:bs-row',
      itemProperties: {
        fxLayout: 'row',
        fxLayoutGap: '1rem',
        width: '100%',
      },
      children: [{
        id: 'citySelection',
        type: 'bootstrap:select',
        containerProperties: {
          width: '100%',
        },
        itemProperties: {
          label: 'Select city',
          dataModelPath: '$.address/city'
        }
      },
      {
        type: 'bootstrap:text-input',
        containerProperties: {
          fxFlex: '1 1 auto',
          width: '100%',
        },
        itemProperties: {
          label: 'Zip',
          placeholder: 'Enter zip',
          dataModelPath: '$.address/zip'
        }
      }]
    },
    {
      type: 'bootstrap:bs-row',
      itemProperties: {
        fxLayoutAlign: 'flex-end stretch'
      },
      children: [
        {
          type: 'bootstrap:button',
          itemProperties: {
            label: 'SUBMIT',
            clickActionKey: 'consoleLog'
          }
        },
      ]
    }]
} as UIModel;

export const ProfileDataModel = {
  user: {
    firstName: 'John'
  }
};

export const ProfileWorkflowsMap = {
  failOnError: true,
  include: ['@common'],
  vars: {
    countryCityMap: {
      uk: [
        { label: 'London', value: 'london' },
        { label: 'Liverpool', value: 'liverpool' }
      ],
      ua: [
        { label: 'Lviv', value: 'lviv' },
        { label: 'Kyiv', value: 'kyiv' }
      ]
    }
  },
  workflowsMap: {
    stateSelection_selectionChanged: [
      {
        id: 'findCities',
        actionType: 'getValue',
        object: '$countryCityMap',
        propertyName: '$.{{ $dataModel/address/country }}',
        actionName: 'findCities'
      },
      {
        actionType: 'setValue',
        object: '$uiModel',
        propertyName: '$(children:id=citySelection)/itemProperties/options',
        propertyValue: '$findCities-returnValue'
      }
    ]
  }
} as WorkflowConfig;

export const bsFormConfig = {
  type: 'Form Controls',
  name: 'profile-bs-example',
  uiModel: ProfileFormUIModel,
  dataModel: ProfileDataModel,
  workflowConfig: ProfileWorkflowsMap,
};
