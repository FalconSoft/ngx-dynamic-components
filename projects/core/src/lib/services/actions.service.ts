import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { commonActionsMap } from '../workflow/actions-store';
import { resolveValue } from '../workflow/actions-core';
import { ExecutionContext } from '../workflow/workflow.processor';
import { HttpCallConfig, ActionResult, ActionStatus } from '../workflow/models';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(private http: HttpClient) {
    async function httpCall(context: ExecutionContext, config: HttpCallConfig): Promise<ActionResult> {
      const body = config.body ? resolveValue(context, config.body) : undefined;
      const url = config.url.replace(/\/+/g, '/').replace(':/', '://') + (config.queryParams ? `?${config.queryParams}` : '');
      const init: any = {
        responseType: (config.responseType || 'json') as 'json',
      };

      if (config.headers) {
        let httpHeader = new HttpHeaders();
        Object.entries(config.headers).forEach(([key, value]) => {
          httpHeader = httpHeader.set(key, value as string);
        });
        init.headers = httpHeader;
      }
      const req = new HttpRequest(config.method, url, body, init);
      try {
        const value = await http.request(req).toPromise();
        return {
          result: {...value},
          status: ActionStatus.SUCCESS
        };
      } catch (e) {
        console.error(e);
        return {
          result: e,
          status: ActionStatus.FAILED
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
  }
}
