import { UIModel, AttributesMap, ActionsMap } from '@ngx-dynamic-components/core';

export const ProfileFormUIModel = {
    type: 'flex-container',
    itemProperties: <AttributesMap>{
        fxLayout: 'column',
        width: '100%',
        height: '100%',
    },
    children: [
        {
            type: 'text-input',
            containerProperties: <AttributesMap>{
                width: '100%'
            },
            itemProperties: <AttributesMap>{
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Username',
                dataModelPath: 'userName',
            }
        },
        {
            type: 'flex-container',
            containerProperties: {
                width: '100%'
            },
            itemProperties: {
                fxLayout: 'row',
                fxLayoutGap: '1rem',
                width: '100%'
            },
            children: [{
                type: 'text-input',
                containerProperties: {
                  fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'First Name',
                    dataModelPath: 'firstName'
                }
            },
            {
                type: 'text-input',
                containerProperties: {
                  fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'Last Name',
                    dataModelPath: 'lastName'
                }
            },
            ]
        },
        {
            type: 'text',
            containerProperties: {},
            itemProperties: {
                text: 'Address',
                width: '100%'
            }
        },
        {
            type: 'text-input',
            containerProperties: {},
            itemProperties: {
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Line 1',
                dataModelPath: 'line1'
            }
        },
        {
            type: 'text-input',
            containerProperties: {},
            itemProperties: {
                isNumeric: false,
                isDate: false,
                format: '',
                placeholder: 'Line 2',
                dataModelPath: 'line2'
          }
        },
        {
            type: 'select',
            containerProperties: {},
            key: 'stateSelection',
            itemProperties: {
                options: [
                  {label: 'United Kindom', value: 'uk'},
                  {label: 'Ukraine', value: 'ua'}
                ],
                placeholder: 'Country',
                dataModelPath: 'country'
          }
        },
        {
            type: 'flex-container',
            containerProperties: {
                width: '100%'
            },
            itemProperties: {
                fxLayout: 'row',
                fxLayoutGap: '1rem',
                width: '100%',
            },
            children: [{
                key: 'citySelection',
                type: 'select',
                containerProperties: {
                    fxFlex: '1 1 auto'
                },
                itemProperties: {
                    placeholder: 'City',
                    dataModelPath: 'city'
                }
            },
            {
                type: 'text-input',
                containerProperties: {
                    fxFlex: '1 1 auto'
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'Zip',
                    dataModelPath: 'zip'
                }
            }]
        },
        {
            type: 'flex-container',
            itemProperties: {
              fxLayoutAlign: 'flex-end stretch'
            },
            children: [
              {
                type: 'button',
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
  type: 'card',
  containerProperties: {
    width: '100%'
  },
  itemProperties: <AttributesMap>{
    header: {
      title: 'Profile form'
    },
    content: ProfileFormUIModel
  }
};

export const TestPageDataModel = {

};

export const ProfileActionsMap = <ActionsMap>{
    consoleLog: (uiModel, dm) => console.log('consoleLog ->', dm, uiModel),
    stateSelection_selectionChanged: (uiModel, {country}, fullUIModel) => {
      const targetModel = getUIModelByKey(fullUIModel, 'citySelection');
      targetModel.itemProperties.options = {
        uk: [
          {label: 'London', value: 'london'},
          {label: 'Liverpool', value: 'liverpool'}
        ],
        ua: [
          {label: 'Lviv', value: 'lviv'},
          {label: 'Kyiv', value: 'kyiv'}
        ]
      }[country] || [];
    }
};

// TODO make function reusable, move it to class UIModel or ActionsContainer.
function getUIModelByKey(model: UIModel, key: string): UIModel {
  if (model.key === key) {
    return model;
  }

  if (model.children && model.children.length) {
    for (let i = 0; i < model.children.length; i++) {
      const uiModel = getUIModelByKey(model.children[i], key);
      if (uiModel) {
        return uiModel;
      }
    }
  }
}
