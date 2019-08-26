import { WorkflowLog, StepLog } from './models';

export class WorkflowLogger {
  private logsMap: Map<string, WorkflowLog> = new Map();

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
