import { UIModel, AttributesMap } from '@ngx-dynamic-components/core';

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
      itemProperties: {
        fxLayout: 'row',
        fxLayoutGap: '1rem',
        width: '100%'
      },
      children: [{
        type: 'material:text-input',
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
      itemProperties: {
        fxLayout: 'row',
        fxLayoutGap: '1rem',
        width: '100%',
      },
      children: [{
        id: 'citySelection',
        type: 'material:select',
        itemProperties: {
          placeholder: 'City',
          dataModelPath: '$.address/city'
        }
      },
      {
        type: 'material:text-input',
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
          itemProperties: {
            label: 'SUBMIT',
            clickActionKey: 'SubmitForm'
          }
        },
      ]
    }]
} as UIModel;

export const ProfileCardUIModel = {
  type: 'material:card',
  itemProperties: {
    title: 'Profile form',
  } as AttributesMap,
  children: [null, ProfileFormUIModel]
};

export const ProfileDataModel = {
  user: {
    firstName: 'John'
  }
};

export const ProfileScripts = `def SubmitForm():
  print("SubmitForm")`;
