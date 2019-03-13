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
        // expect(result).toBe(testObject.parent);
        // expect(result.children).toBe(testObject.parent.children);
    });

    it('find: $.parent/children ', async () => {
        const result = JSONUtils.find(testObject, '$.parent/children');
        // expect(Array.isArray(result)).toBeTruthy();
        // expect(result.length).toBeTruthy(TEST_OBJECT.parent.children.length);
    });

    it('find: $.parent/invalidProp ', async () => {
        const result = JSONUtils.find(testObject, '$.parent/invalidProp');
        // expect(result).toBe(null);
    });

    it('find: $.parent/newProperty (it should create newProperty object)', async () => {
        const newObject = { someObject: 11 };
        // const result = JSONUtils.find(testObject, '$.parent/newProperty', newObject);
        // expect(result).toBe(newObject);
    });


    it('find: $(children) ', async () => {
        const result = JSONUtils.find(testObject, '$(children)');
        // should flattern the tree
        // expect(Array.isArray(result)).toBeTruthy();
        // expect(result.length).toBeTruthy(3);
        // expect(result.map(r=>r.name).join(',')).toBe('name1,name11,name12');
    });

    it('find: $(children:name=name12) ', async () => {
        const result = JSONUtils.find(testObject, '$(children:name=name12)');
        // expect(result).toBe(testObject.parent.children[0].children[1]);
    });

    it('find: $(children:name=name12)/someProp ', async () => {
        const result = JSONUtils.find(testObject, '$(children:name=name12)/someProp');
        // expect(result).toBe(testObject.parent.children[0].children[1].someProp);
    });

    it('find: $(children:name=name12)/itemProperties/options ', async () => {
        const result = JSONUtils.find(testObject, '$(children:name=name12)/itemProperties/options');
        // expect(result).toBe(testObject.parent.children[0].children[1].itemProperties.options);
    });

    it('setValue: $.parent ', async () => {
        const inObject = {};
        JSONUtils.setValue(inObject, '$.parent', 55);
        // expect(inObject.parent).toBe(55);
    });

    it('setValue: $.parent/someValue ', async () => {
        const inObject = {};
        JSONUtils.setValue(inObject, '$.parent/someValue', 55);
        // expect(inObject.parent.someValue).toBe(55);

        JSONUtils.setValue(inObject, '$.parent/someValue', 88);
        // expect(inObject.parent.someValue).toBe((88);

    });

    it('setValue: $(children:name=name12)/itemProperties/options ', async () => {
        JSONUtils.setValue(testObject, '$(children:name=name12)/itemProperties/options', ['1', '2']);
        // expect(testObject.parent.children[0].children[1].itemProperties.options.join(',')).toBe('1,2');
    });

    it('setValue: $(children:name=name12)/someProp', async () => {
        // expect(JSONUtils.find(testObject, '$(children:name=name12)/someProp')).toBe(12);
        JSONUtils.setValue(testObject, '$(children:name=name12)/someProp', 80);
        // expect(testObject.parent.children[0].children[1].someProp).toBe(80);
    });


});
