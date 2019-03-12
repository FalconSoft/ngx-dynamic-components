import { WorkflowConfig, WorkflowEngine } from './workflow.processor';

export const TEST_WORKFLOW = {
    failOnError: true,
    include: ['@common' ],
    vars: { },
    workflowsMap: {
        wf1_init: [{
            actionType: 'setValue',
            object: '$dataModel',
            propertyName: 'testProp1',
            propertyValue: 'new property value'
        }
        ]
    }
} as WorkflowConfig;

describe('Workflow processor', async () => {
    beforeEach(() => { });

    it('should be created', async () => {
        const wf = JSON.parse(JSON.stringify(TEST_WORKFLOW));;
        const dataModel = { testProp1: 'test' };
        wf.vars.dataModel = dataModel;
        await new WorkflowEngine().run(wf, 'wf1_init');
        expect(dataModel.testProp1).toBe('new property value');
    });
});
