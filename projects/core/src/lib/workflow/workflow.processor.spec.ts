import { WorkflowConfig, WorkflowEngine } from './workflow.processor';


export const WORKFLOW_SPEC = {
    failOnError: false,
    include: [
        '@common'
    ],
    vars: [
        {
            uiModel: {},
            dataModel: {}
        }
    ],
    consts: [{
        GET_DATA_URL: ''
    }],
    workflowsMap: [{
        cleanUpForm: [
            {
                actionType: 'setValues',
                object: '$dataModel',
                valuesList: {
                    firstName: '',
                    lastName: '',
                    address: '',
                }
            }
        ],
        mainPage_init: [{
            actionType: 'httpClient',
            actionName: 'getData',
            method: 'get',
            url: '$getUrl',
            queryString: ''
        },
        {
            actionType: 'switch',
            switchValue: '$getData.result',
            success: [
                {
                    actionType: 'setValue',
                    object: '$uiModel',
                    propertyName: '$(id=countries_combo)/itemProperties/options',
                    propertyValue: '$getData-returnValue/data'
                }
            ],
            error: [
                {
                    actionType: 'showErrorToast',
                    message: '$getData.result.error'
                },
                {
                    actionType: 'actionCall',
                    actionName: 'cleanUpForm'
                }
            ]
        },
        ]
    }]

};



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
