export interface WorkflowLog {
  workflowName: string;
  steps: StepLog[];
}

export interface StepLog {
  message: string;
  actionType: string;
  success: boolean;
}
