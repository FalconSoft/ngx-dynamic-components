import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';

import { commonActionsMap } from '../workflow/actions-store';
import { ExecutionContext } from '../workflow/workflow.processor';

interface HttpCallConfig {
  method: string;
  url: string;
  queryParams: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(private http: HttpClient) {
    commonActionsMap.set('httpCall', async (context: ExecutionContext, config: HttpCallConfig) => {
      const url = config.url.replace(/\/+/g, '/').replace(':/', '://') + (config.queryParams ? `?${config.queryParams}` : '')
      const req = new HttpRequest(config.method, url, {
        responseType: 'text',
      });
      const value = await this.http.request(req).toPromise();
      return value;
    });
  }
}
