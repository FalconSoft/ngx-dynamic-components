import { WorkflowLog, StepLog } from './models';
import { Subject } from 'rxjs';

export class WorkflowLogger {
  private logsMap: Map<string, WorkflowLog> = new Map();
  status$ = new Subject<string>();
  error$ = new Subject<string>();

  log(workflowName: string, step?: StepLog) {
    if (this.logsMap.has(workflowName) && step) {
      const workflowLog = this.logsMap.get(workflowName);
      workflowLog.steps.push(step);
    } else {
      this.logsMap.set(workflowName, {
        workflowName, steps: step ? [step] : []
      });
    }
  }

  get logs() {
    return Array.from(this.logsMap.values());
  }
}
