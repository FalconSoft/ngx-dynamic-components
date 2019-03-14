import { UIModel, AttributesMap, ActionsMap } from '@ngx-dynamic-components/core';

export const ProfileFormUIModel = {
    type: 'material:flex-container',
    itemProperties: <AttributesMap>{
        fxLayout: 'column',
        width: '100%',
        height: '100%',
    },
    children: [
        {
            type: 'material:text-input',
            containerProperties: {
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
                    dataModelPath: 'firstName'
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
                    dataModelPath: 'lastName'
                }
            },
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
                dataModelPath: 'line1'
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
                dataModelPath: 'line2'
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
                  {label: 'United Kingdom', value: 'uk'},
                  {label: 'Ukraine', value: 'ua'}
                ],
                placeholder: 'Country',
                dataModelPath: 'country'
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
                    dataModelPath: 'city'
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
                    dataModelPath: 'zip'
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
  itemProperties: <AttributesMap>{
    header: {
      title: 'Profile form'
    },
    content: ProfileFormUIModel
  }
};

export const TestPageDataModel = {

};

export const ProfileActionsMap = {
    consoleLog: (uiModel, dm) => console.log('consoleLog ->', dm, uiModel),
    stateSelection_selectionChanged: (uiModel: UIModel, {country}, fullUIModel: UIModel) => {
      const targetModel = getUIModelById(fullUIModel, 'citySelection');
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
} as ActionsMap;

// TODO make function reusable, move it to class UIModel or ActionsContainer.
function getUIModelById(model: UIModel, id: string): UIModel {
  if (model.id === id) {
    return model;
  }

  if (model.children && model.children.length) {
    for (const child of model.children) {
      const uiModel = getUIModelById(child, id);
      if (uiModel) {
        return uiModel;
      }
    }
  }
}
