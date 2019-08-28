import { ExecutionContext } from './workflow.processor';
import { commonActionsMap } from './actions-store';
import { ActionDescriptor, CreateObjectConfig } from './models';

describe('Actions', () => {
  const executionContext = new ExecutionContext();
  beforeAll(() => {
    executionContext.variables.set('testObjVar', {
      test: 'TestValue'
    });
    executionContext.variables.set('testArrayVar', [1, 2, {
      test: 'TestValue'
    }]);
    executionContext.variables.set('testStrVar', 'TestValue');
  });
  it('createObject 1', () => {
    const config = {
      object: {
        items: [
          '$testObjVar',
          '$testArrayVar',
          '$testStrVar'
        ],
        prop: {
          ['$testStrVar']: '$testObjVar'
        }
      }
    } as CreateObjectConfig;
    const createObjectDescriptor = commonActionsMap.get('createObject') as ActionDescriptor;
    const res = createObjectDescriptor.method(executionContext, config);
    expect(res.items[0].test).toEqual('TestValue');
    expect(res.items[1][1]).toEqual(2);
    expect(res.items[1][2].test).toEqual('TestValue');
    expect(res.prop.TestValue.test).toEqual('TestValue');
  });
});
