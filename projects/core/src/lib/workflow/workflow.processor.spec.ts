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
    vars: {
        countryCityMap: {
            uk: [
                { label: 'London', value: 'london' },
                { label: 'Liverpool', value: 'liverpool' }
            ],
            ua: [
                { label: 'Lviv', value: 'lviv' },
                { label: 'Kyiv', value: 'kyiv' }
            ]
        }
    },
    workflowsMap: {
        testWf: [],
        setValueMultistep: [
            {
                actionType: 'getValue',
                actionName: 'findCities',
                object: '$countryCityMap',
                propertyName: '$.{{ $dataModel/address/country }}',
            },
            {
                actionType: 'setValue',
                object: '$uiModel',
                propertyName: '$.itemProperties/options',
                propertyValue: '$findCities-returnValue'
            }
        ],

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

    it('workflow step: getValue (from variable) -> returnValue. [actionName]-returnValue ', async () => {
        const dataModel = { address: { country: 'ua' } } as any;
        testWorkflow.vars.dataModel = dataModel;
        testWorkflow.workflowsMap.workflow1 = [{
            actionType: 'getValue',
            actionName: 'step1',
            object: '$dataModel',
            propertyName: '$.address/country',
        }];
        const wfEngine = new WorkflowEngine(testWorkflow);
        await wfEngine.run('workflow1');
        // get value sets value into [actionName]-returnValue
        expect(wfEngine.getVariable('step1-returnValue')).toBe('ua');
    });

    it('workflow step: getValue (from object) -> returnValue. [actionName]-returnValue ', async () => {
        testWorkflow.workflowsMap.workflow1 = [{
            actionType: 'getValue',
            actionName: 'step1',
            object: { address: { country: 'ua' } },
            propertyName: '$.address/country',
        }];
        const wfEngine = new WorkflowEngine(testWorkflow);
        await wfEngine.run('workflow1');
        // get value sets value into [actionName]-returnValue
        expect(wfEngine.getVariable('step1-returnValue')).toBe('ua');
    });

    it('workflow step: getValue based on property resolved run-time', async () => {
        testWorkflow.vars.addressType = 'residence';
        testWorkflow.workflowsMap.workflow1 = [{
            actionType: 'getValue',
            actionName: 'step1',
            object: { address: { home: { country: 'ua' }, residence: { country: 'uk' } } },
            propertyName: '$.address/{{$addressType}}',
        }];
        const wfEngine = new WorkflowEngine(testWorkflow);
        await wfEngine.run('workflow1');

        expect(wfEngine.getVariable('step1-returnValue').country).toBe('uk');
    });

    it('workflow step: getValue (country) based on property resolved run-time', async () => {
        testWorkflow.vars.addressType = 'residence';
        testWorkflow.workflowsMap.workflow1 = [{
            actionType: 'getValue',
            actionName: 'step1',
            object: { address: { home: { country: 'ua' }, residence: { country: 'uk' } } },
            propertyName: '$.address/{{$addressType}}/country',
        }];
        const wfEngine = new WorkflowEngine(testWorkflow);
        await wfEngine.run('workflow1');
        // get value sets value into [actionName]-returnValue
        expect(wfEngine.getVariable('step1-returnValue')).toBe('uk');
    });

    it('workflow step: getValue (country) based on two properties resolved run-time', async () => {
      testWorkflow.vars.addressType = 'residence';
      testWorkflow.vars.country = 'uk';
      testWorkflow.workflowsMap.workflow1 = [{
          actionType: 'getValue',
          actionName: 'step1',
          object: { address: { home: { country: 'ua' }, residence: { uk:  'United Kingdom'} } },
          propertyName: '$.address/{{$addressType}}/{{$country}}',
      }];
      const wfEngine = new WorkflowEngine(testWorkflow);
      await wfEngine.run('workflow1');
      // get value sets value into [actionName]-returnValue
      expect(wfEngine.getVariable('step1-returnValue')).toBe('United Kingdom');
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

    it('workflow: setValueMultistep', async () => {
        const uiModel = {} as any;
        const dataModel = { address: { country: 'ua' } } as any;
        testWorkflow.vars.uiModel = uiModel;
        testWorkflow.vars.dataModel = dataModel;
        const wfEngine = new WorkflowEngine(testWorkflow);
        await wfEngine.run('setValueMultistep');

        const step1ReturnValue = wfEngine.getVariable('findCities-returnValue');

        expect(step1ReturnValue).toBe(uiModel.itemProperties.options);
        expect(uiModel.itemProperties.options[0].label).toBe('Lviv');
    });
});
