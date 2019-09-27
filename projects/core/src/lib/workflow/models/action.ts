import { ActionConfig } from './configs';

export enum ActionStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  STOP_EXECUTION = 'stop execution'
}

export interface ActionResult {
  status: ActionStatus;
  result: any;
  steps?: ActionConfig[];
  message?: string;
}

export interface ActionDescriptor {
  name: string;
  category: string;
  config: string | object;
  description?: string;
  getMessage?: (config?: any) => string;
  method: (...args: any[]) => ActionResult|any;
}
