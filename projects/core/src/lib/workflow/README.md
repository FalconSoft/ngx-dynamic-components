# ngx-dynamic-components workflow

## Actions
Actions are registered in `./actions-store.ts` map `commonActionsMap`.

Action is type of `./models/action.ts` interface `ActionDescriptor`.

`./actions-core.ts` contains helper functions used in action to resolve values from execution context etc.

## Processor

Provides main classes `WorkflowEngine`, `ExecutionContext` and interface `WorkflowConfig` to create and process workflow.
