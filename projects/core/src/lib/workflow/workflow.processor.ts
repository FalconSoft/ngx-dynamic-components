import { commonActionsMap } from './actions-store';

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
    public readonly actions = new Map<string, Function>();
    public readonly workflows = new Map<string, any[]>();
    public readonly constants = new Map<string, any>();
}

export class WorkflowEngine {

    private async loadContext(context: ExecutionContext, config: WorkflowConfig): Promise<void> {
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
        for(const include of includes) {
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
                if (context.failOnError){
                    throw new Error(`Can't find action ${step.actionType}`);
                } else {
                    console.warn(`Can't find action ${step.actionType}. Step ${step.actionType} ${step.actionName} skipped.`);
                    continue;
                }
            }

            const payload = this.resolveProperties(context, step);

            const returnValue = await context.actions.get(step.actionType)(context, payload);

            // set return value if step has a name
            if (step.actionName) {
                context.variables.set(`${step.actionName}-returnValue`, returnValue);
            }

        }
    }

    async run(config: WorkflowConfig, workflowName: string, payload: any = null): Promise<any> {
        config.vars = config.vars || {};
        config.consts = config.consts || {};
        const context = new ExecutionContext();
        await this.loadExternals(context, config.include);
        await this.loadContext(context, config);
        if (context.workflows.has(workflowName)) {
            await this.executeFlow(context, context.workflows.get(workflowName));
        } else {
            if (context.failOnError) {
                throw new Error(`Can't find workflow ${workflowName}`);
            } else {
                console.warn(`Can't find workflow ${workflowName}`);
            }
        }
        //
    }
}
