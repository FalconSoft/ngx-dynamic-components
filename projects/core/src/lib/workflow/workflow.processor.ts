import { commonActionsMap } from './actions-store';
import { mapToObj } from '../utils';
import { IVariableResolver } from '../models';
import { WorkflowLogger } from './logger';
import { ActionConfig, ActionDescriptor } from './models';

export interface WorkflowConfig {
    failOnError?: boolean;
    include: string[];
    vars: any;
    consts: any;
    workflowsMap: any;
    variableResolver?: IVariableResolver;
}

export class ExecutionContext {
    public failOnError = false;
    public readonly variables = new Map<string, any>();
    public readonly actions = new Map<string, ((...args: any[]) => any) | ActionDescriptor>();
    public readonly workflows = new Map<string, ActionConfig[]>();
    public readonly constants = new Map<string, any>();
}

export class WorkflowEngine {

    public variableResolver: IVariableResolver;
    private readonly context: ExecutionContext = null;
    private isInitialized = false;
    public readonly logger = new WorkflowLogger();

    constructor(private readonly workflowConfig: WorkflowConfig) {
        this.context = new ExecutionContext();
        workflowConfig.vars = workflowConfig.vars || {};
        workflowConfig.consts = workflowConfig.consts || {};
        workflowConfig.workflowsMap = workflowConfig.workflowsMap || {};
        this.variableResolver = workflowConfig.variableResolver;
    }

    get configuration() {
      if (this.isInitialized) {
        return {
          vars: mapToObj(this.context.variables, ['uiModel', 'dataModel']),
          consts: mapToObj(this.context.constants),
          workflowsMap: mapToObj(this.context.workflows)
        };
      }
      const {vars, consts, workflowsMap} = this.workflowConfig;
      return {vars, consts, workflowsMap};
    }

    public async loadContext(config: WorkflowConfig): Promise<void> {
        const context = this.context;
        context.failOnError = !!config.failOnError;
        for (const name of Object.keys(config.vars).filter(p => !p.startsWith('_'))) {
            context.variables.set(name, config.vars[name]);
        }
        for (const name of Object.keys(config.consts).filter(p => !p.startsWith('_'))) {
            context.constants.set(name, config.consts[name]);
        }
        for (const name of Object.keys(config.workflowsMap).filter(p => !p.startsWith('_'))) {
            context.workflows.set(name, config.workflowsMap[name]);
        }
        for (const name of Object.keys(config.workflowsMap).filter(p => p.startsWith('_var'))) {
            context.variables.set(name, config.workflowsMap[name]);
      }
    }

    private async loadExternals(context: ExecutionContext, includes: string[]): Promise<void> {
        for (const include of includes) {
            if (include === '@common') {
                commonActionsMap.forEach((func, key) => context.actions.set(key, func));
            }
        }
    }

    private resolveProperties(context: ExecutionContext, step: any): any {
        const payload = Object.assign({}, step);
        delete payload.actionType;

        return payload;
    }

    private async executeFlow(steps: ActionConfig[] = [], workflowName: string) {
        const context = this.context;
        if (this.variableResolver) {
          const importVars = context.variables.get('_var_import_overrides') || {};
          const vars = this.variableResolver.resolve(context.variables.get('_var') || {}, importVars);
          steps = this.variableResolver.resolve(steps, vars) as [];
        }
        for (const step of steps) {
          try {
            if (!context.actions.has(step.actionType)) {
                if (context.failOnError) {
                    throw new Error(`Can't find action ${step.actionType}`);
                } else {
                    console.warn(`Can't find action ${step.actionType}. Step ${step.actionType} ${step.actionName} skipped.`);
                    continue;
                }
            }

            const payload = this.resolveProperties(context, step);
            console.log(`Execute ${step.actionType} with config:`, payload);
            const action = context.actions.get(step.actionType);
            let returnValue;
            let message = 'Action finished';
            if (typeof action === 'function') {
              returnValue = await action(context, payload);
            } else {
              returnValue = await action.method(context, payload);
              if (action.getMessage) {
                message = action.getMessage(payload);
              }
            }

            // set return value if step has a name
            if (step.actionName) {
                const name = `${step.actionName}-returnValue`;
                context.variables.set(name, returnValue);
            }
            if (step.returnValue) {
              context.variables.set(step.returnValue, returnValue);
            }

            this.logger.log(workflowName, {
              actionType: step.actionType,
              message,
              success: true,
            });

            if (returnValue.steps) {
              await this.executeFlow(returnValue.steps, workflowName);
            }
          } catch (e) {
            this.logger.log(workflowName, {
              actionType: step.actionType,
              message: e.message,
              success: false,
            });
          }

        }
    }

    public getVariable(variableName: string): any {
        return this.context.variables.get(variableName);
    }

    public setVariable(variableName: string, value: any): void {
        this.context.variables.set(variableName, value);
    }

    public async initialize() {
        if (this.isInitialized) { return; }

        await this.loadExternals(this.context, this.workflowConfig.include);
        await this.loadContext(this.workflowConfig);

        this.isInitialized = true;
    }

    public async hasWorkflow(workflowName: string): Promise<boolean> {
        if (!this.isInitialized) {
            await this.initialize();
            this.isInitialized = true;
        }

        return this.context.workflows.has(workflowName);
    }

    public async run(workflowName: string, payload: any = null): Promise<any> {
        if (!this.isInitialized) {
            await this.initialize();
            this.isInitialized = true;
        }
        if (this.context.workflows.has(workflowName)) {
          await this.executeFlow(this.context.workflows.get(workflowName), workflowName);
        } else {
            if (this.context.failOnError) {
                throw new Error(`Can't find workflow ${workflowName}`);
            } else {
                console.warn(`Can't find workflow ${workflowName}`);
            }
        }
        //
    }
}
