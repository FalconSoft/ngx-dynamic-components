import { WorkflowConfig, WorkflowEngine } from './workflow.processor';
import { JSONUtils } from './json.utils';

export const TEST_OBJECT = {
    parent: {
        name: 'name1',
        someProp: 0,
        children: [{
            name: 'name1',
            someProp: 1,
            children: [{
                name: 'name11',
                someProp: 11
            },
            {
                name: 'name12',
                someProp: 12,
                itemProperties: {
                    width: '100px',
                    options: [
                        { value: 1, lable: 'op1' },
                        { value: 2, lable: 'op2' }
                    ]
                }
            }]
        }]
    }
};

describe('JSON Utils', async () => {
    let testObject: any = null;

    beforeEach(() => {
        // clone test object
        testObject = JSON.parse(JSON.stringify(TEST_OBJECT));
    });

    it('find: $ ', async () => {
        const result = JSONUtils.find(testObject, '$');
        expect(!!result.parent).toBeTruthy();
    });

    it('find: $.parent ', async () => {
        const result = JSONUtils.find(testObject, '$.parent');
    });

    it('find: $.parent/children ', async () => {
        const result = JSONUtils.find(testObject, '$.parent/children');
        // expect(Array.isArray(children)).toBeTruthy();
        // expect(children.length).toBeTruthy(TEST_OBJECT.parent.children.length);
    });

    it('find: $(children) ', async () => {
        const result = JSONUtils.find(testObject, '$(children)');
        // should flattern the tree
    });

    it('find: $(children:name=name11) ', async () => {
        const result = JSONUtils.find(testObject, '$(children:name=name11)');
    });

    it('find: $(children:name=name11)/someProp ', async () => {
        const result = JSONUtils.find(testObject, '$(children:name=name11)/someProp');
    });

    it('find: $(children:name=name12)/itemProperties/options ', async () => {
        const result = JSONUtils.find(testObject, '$(children:name=name11)/itemProperties/options');
    });

});
