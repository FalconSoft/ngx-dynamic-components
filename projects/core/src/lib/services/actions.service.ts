import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';

import { commonActionsMap, resolveValue } from '../workflow/actions-store';
import { ExecutionContext } from '../workflow/workflow.processor';
import { JSONUtils } from '../workflow/json.utils';
import { setFields } from '../utils';
import { HttpCallConfig, MapConfig, JoinConfig } from '../workflow/models';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(private http: HttpClient) {
    commonActionsMap.set('httpCall', async (context: ExecutionContext, config: HttpCallConfig) => {
      const url = config.url.replace(/\/+/g, '/').replace(':/', '://') + (config.queryParams ? `?${config.queryParams}` : '')
      const req = new HttpRequest(config.method, url, {
        responseType: config.responseType || 'json',
      });
      const value = await this.http.request(req).toPromise();
      return value;
    });

    commonActionsMap.set('map', (context: ExecutionContext, config: MapConfig) => {
      const propertyName = config.propertyName || '$';
      const obj = resolveValue(context, config.object);
      const list = JSONUtils.find(obj, propertyName);
      const res = list.map(item => setFields(config.fields, item));
      return res;
    });

    commonActionsMap.set('join', (context: ExecutionContext, config: JoinConfig) => {
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
    });
  }
}
