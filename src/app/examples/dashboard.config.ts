import { UIModel, ComponentExample } from '@ngx-dynamic-components/core';
import { COMPONENTS_LIST } from '@ngx-dynamic-components/material';

const table = COMPONENTS_LIST.find(item => item.name === 'datable');

const tableExample = table.example as ComponentExample;

export const dashboardUIModel = {
  type: 'bootstrap:container',
  itemProperties: {
    fullWidth: true
  },
  children: [{
    type: 'bootstrap:bs-row',
    itemProperties: {},
    children: [
      ['Widget 1', '#187da0'], ['Widget 2', '#2eadd3'], ['Widget 3', '#c69500'], ['Widget 4', '#f5302e']
    ].map(([t, c]) => getCardWidget(null, t, c))
  }, {
      type: 'bootstrap:bs-row',
      itemProperties: {},
      children: [{
        type: 'material:card',
        itemProperties: {
          margin: '10px auto',
          width: '100%',
          background: 'gray',
          img: 'https://fakeimg.pl/600x200/'
        },
        children: [{
          type: 'material:text',
          itemProperties: {
            text: 'Chart',
            width: '100%',
          }
        }]
      }]
  }, {
    type: 'bootstrap:bs-row',
    itemProperties: {},
    children: [
      ['First', 'Second Widget 1', 'lightblue'],
      ['Second', 'Second Widget 2', 'aliceblue'],
      ['Third', 'Second Widget 3', 'lightblue'],
      ['Forth', 'Second Widget 4', 'aliceblue']].map(([h, c, col]) => getCardWidget(h, c, col))
  }, {
    type: 'bootstrap:bs-row',
    itemProperties: {},
    children: [{
      type: 'material:card',
      itemProperties: {
        padding: '10px',
        margin: '10px auto',
        width: '100%',
        background: 'ghostwhite'
      },
      children: [{
        type: 'material:text',
        itemProperties: {
          text: 'Table data',
          width: '100%'
        }
      }, tableExample.uiModel

      // Inner container.
      /*{
        type: 'bootstrap:container',
        containerProperties: {
          width: '100%'
        },
        itemProperties: {
          fullWidth: true
        },
        children: [{
          type: 'bootstrap:bs-row',
          containerProperties: {},
          itemProperties: {},
          children: [{
            type: 'material:card',
            containerProperties: {},
            itemProperties: {
              margin: '10px auto',
              width: '100%',
              background: 'lightblue',
              img: 'https://cdn.pixabay.com/photo/2017/05/14/03/45/internet-page-2311262_960_720.png'
            },
            children: [{
              type: 'material:text',
              containerProperties: {},
              itemProperties: {
                text: 'Sub chart 1',
                width: '100%'
              }
            }, null, null]
          }, {
            type: 'material:card',
            containerProperties: {},
            itemProperties: {
              margin: '10px auto',
              width: '100%',
              background: 'aliceblue',
              img: 'https://cdn.pixabay.com/photo/2017/05/14/03/45/internet-page-2311262_960_720.png'
            },
            children: [{
              type: 'material:text',
              containerProperties: {},
              itemProperties: {
                text: 'Sub chart 2',
                width: '100%'
              }
            }, null, null]
          }]
        }, {
          type: 'bootstrap:bs-row',
          containerProperties: {},
          itemProperties: {},
          children: [table.example.uiModel]
        }]
      }*/

      , null]
    }]
  }]
};
export const dashboardConfig = {
  type: 'Dashboard',
  name: 'dashboard-example',
  uiModel: dashboardUIModel,
  dataModel: {...tableExample.dataModel}
};

function getCardWidget(header: string, content: string, background = 'white'): UIModel {

  const headerComponent = header ? {
    type: 'material:text',
    itemProperties: {
      text: header,
      width: '100%'
    }
  } : null;

  return {
    type: 'material:card',
    itemProperties: {
      padding: '10px',
      margin: '10px auto',
      width: '100%',
      background
    },
    children: [headerComponent, {
      type: 'material:text',
      itemProperties: {
        text: content,
        width: '100%'
      }
    }, null]
  };
}
