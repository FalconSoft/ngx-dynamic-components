import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { commonActionsMap } from '../workflow/actions-store';
import { resolveValue } from '../workflow/actions-core';
import { ExecutionContext } from '../workflow/workflow.processor';
import { JSONUtils } from '../workflow/json.utils';
import { setFields } from '../utils';
import { HttpCallConfig, MapConfig, JoinConfig } from '../workflow/models';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(private http: HttpClient) {
    async function httpCall(context: ExecutionContext, config: HttpCallConfig) {
      const body = config.body ? resolveValue(context, config.body) : undefined;
      const url = config.url.replace(/\/+/g, '/').replace(':/', '://') + (config.queryParams ? `?${config.queryParams}` : '');
      const req = new HttpRequest(config.method, url, body, {
        responseType: (config.responseType || 'json') as 'json',
      });
      try {
        const value = await http.request(req).toPromise();
        return {
          type: 'success',
          message: 'Request send',
          ...value
        };
      } catch (e) {
        console.error(e);
        return {
          type: 'danger',
          message: e.message || 'Failed to send request'
        };
      }
    }
    commonActionsMap.set('httpCall', {
      name: 'httpCall',
      method: httpCall,
      category: 'Common',
      config: {
        actionType: 'httpCall',
        actionName: 'xhr-1',
        url: 'request/url',
        method: 'GET'
      },
      description: 'Create http request',
      getMessage(config: HttpCallConfig) {
        return `Send request ${config.method} ${config.url}`;
      }
    });

    function mapAction(context: ExecutionContext, config: MapConfig) {
      const propertyName = config.propertyName || '$';
      const obj = resolveValue(context, config.object);
      const list = JSONUtils.find(obj, propertyName);
      if (Array.isArray(list)) {
        return list.map(item => setFields(config.fields, item));
      }

      if (typeof list === 'object') {
        return Object.entries(list).reduce((prev, entry) => {
          const [field, val] = entry;
          const mapField = config.fields.find(f => f[0] === field);
          if (mapField) {
            prev[mapField[1]] = val;
          } else {
            prev[field] = val;
          }
          return prev;
        }, {});
      }
      return list;
    }

    commonActionsMap.set('map', {
      name: 'map',
      method: mapAction,
      category: 'Common',
      config: {
        actionType: 'map',
        actionName: 'map-1',
        object: '$step0-returnValue',
        propertyName: '$.body',
        fields: [[
          'field1',
          'label'
        ], [
          'field2',
          'value'
        ]]
      },
      description: 'Map array item properties',
      getMessage(config: MapConfig) {
        return `Map array ${config.object} prop: ${config.propertyName}, fields: ${config.fields}`;
      }
    });

    function joinAction(context: ExecutionContext, config: JoinConfig) {
      const primaryPropertyName = config.primaryPropertyName || '$';
      const primaryObj = resolveValue(context, config.primaryTable);
      const primaryTable = JSONUtils.find(primaryObj, primaryPropertyName);

      const foreignObj = resolveValue(context, config.foreignTable);
      const foreignTable = JSONUtils.find(foreignObj, config.foreignPropertyName || '$');

      const foreignKey = config.foreignKey || config.primaryKey;

      try {
        const joinTable = foreignTable.map(row => {
          let primaryData = primaryTable.find(d => d[config.primaryKey] === row[foreignKey]);
          row = setFields(config.foreignFields, row);

          primaryData = setFields(config.primaryFields, primaryData);
          return {...row, ...primaryData};
        });
        return joinTable;
      } catch (e) {
        throw e;
      }
    }

    commonActionsMap.set('join', {
      name: 'join',
      method: joinAction,
      category: 'Common',
      config: {
        actionType: 'join',
        primaryKey: 'table1ID',
        primaryTable: '$tableData1',
        primaryFields: [['field1', 'Fild Title'], 'ID'],
        foreignKey: 'table2ID',
        foreignTable: '$tableData2',
        foreignFields: ['ID', ['fieldTable2', 'Title']],
        returnValue: 'resultTableData'
      },
      description: 'Joins data from two sources',
      getMessage(config: JoinConfig) {
        return `Join table ${config.primaryTable} (primary key ${config.primaryKey})
          with ${config.foreignTable} (foreign key ${config.foreignKey})`;
      }
    });
  }
}
