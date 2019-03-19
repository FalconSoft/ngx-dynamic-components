import { WorkflowConfig, WorkflowEngine } from './workflow.processor';


export const WORKFLOW_SPEC = {
    failOnError: false,
    include: [
        '@common'
    ],
    vars: [
        {
            $uiModel: {},
            $dataModel: {}
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
                    '$.firstName': '',
                    '$.lastName': '',
                    '$.address': '',
                }
            }
        ],
        mainPage_init: [{
            actionType: 'httpClient',
            actionName: 'getData',
            method: 'get',
            url: '$GET_DATA_URL',
            queryString: ''
        },
        {
            actionType: 'switch',
            switchValue: '$getData-returnValue',
            200: [
                {
                    actionType: 'setValue',
                    object: '$uiModel',
                    propertyName: '$(id=countries_combo)/itemProperties/options',
                    propertyValue: '$getData-returnValue/data'
                }
            ],
            else: [
                {
                    actionType: 'showErrorToast',
                    message: '$getData.returnValue'
                },
                {
                    actionType: 'runWorkflow',
                    actionName: 'cleanUpForm'
                }
            ]
        },
        ]
    }]
};

export const TEST_WORKFLOW = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: {
        testWf: [],
        wf1_init: [{
            actionType: 'setValue',
            object: '$dataModel',
            propertyName: '$.testProp1',
            propertyValue: 'new property value1'
        },
        {
            actionType: 'setValues',
            object: '$dataModel',
            valuesList: {
                '$.testProp2': 'new property value2',
                '$.testProp3': 'new property value3',
                '$.testProp4': 'new property value4',
                '$.testProp5/sub1': 'sub1',
            }
        }
        ]
    }
} as WorkflowConfig;

describe('Workflow processor', async () => {
    let testWorkflow: WorkflowConfig;

    beforeEach(() => {
        testWorkflow = JSON.parse(JSON.stringify(TEST_WORKFLOW));
     });

    it('wf1_init: init values', async () => {
        const dataModel = { testProp1: 'test' } as any;
        testWorkflow.vars.dataModel = dataModel;
        const wfEngine = new WorkflowEngine(testWorkflow);
        await wfEngine.run('wf1_init');
        expect(dataModel.testProp1).toBe('new property value1');
        expect(dataModel.testProp2).toBe('new property value2');
        expect(dataModel.testProp3).toBe('new property value3');
        expect(dataModel.testProp4).toBe('new property value4');
        expect(dataModel.testProp5.sub1).toBe('sub1');
    });
});
