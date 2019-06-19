import { commonActionsMap } from './actions-store';
import { mapToObj } from '../utils';
import { UIModel } from '../models';

export interface WorkflowConfig {
    failOnError?: boolean;
    include: string[];
    vars: any;
    consts: any;
    workflowsMap: any;
}

export class ExecutionContext {
    public failOnError = false;
    public readonly variables = new Map<string, any>();
    public readonly actions = new Map<string, (...args: any[]) => any>();
    public readonly workflows = new Map<string, any[]>();
    public readonly constants = new Map<string, any>();
}

export class WorkflowEngine {

    private readonly context: ExecutionContext = null;
    private isInitialized = false;

    constructor(private readonly workflowConfig: WorkflowConfig) {
        this.context = new ExecutionContext();
        workflowConfig.vars = workflowConfig.vars || {};
        workflowConfig.consts = workflowConfig.consts || {};
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

    private async executeFlow(context: ExecutionContext, steps: any[]) {
        steps = steps || [];
        for (const step of steps) {
            if (!context.actions.has(step.actionType)) {
                if (context.failOnError) {
                    throw new Error(`Can't find action ${step.actionType}`);
                } else {
                    console.warn(`Can't find action ${step.actionType}. Step ${step.actionType} ${step.actionName} skipped.`);
                    continue;
                }
            }

            const payload = this.resolveProperties(context, step);
            console.log(`Execute ${step.actionType}`);
            const returnValue = await context.actions.get(step.actionType)(context, payload);

            // set return value if step has a name
            if (step.actionName) {
                context.variables.set(`${step.actionName}-returnValue`, returnValue);
            }
            this.resolveDataModel(context, payload.target || `${step.actionName}-returnValue`, returnValue);
        }
    }

    private resolveDataModel(context, prop, value) {
      const uiModel = context.variables.get('uiModel') as UIModel;
      const dataSource = uiModel.itemProperties.dataSource;
      const res = /^{{(.*)}}/.exec(dataSource);
      if (res && res[1]) {
        const name = res[1];
        if (name === prop) {
          const dataModel = context.variables.get('dataModel');
          dataModel[prop] = value;
          context.variables.set('dataModel', dataModel);
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
            await this.executeFlow(this.context, this.context.workflows.get(workflowName));
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

