import { Interpreter } from './interpreter';

describe('Interpreter', async () => {
  let e: Interpreter;

  beforeEach(() => {
    e = Interpreter.create()
      .addFunction('add', (a, b, c, d) => { let r = a + b; if (c) { r += c; } if (d) { r += d; } return r; });
  });

  it('print("Hello")', async () => {
    const r = await Interpreter.create().evaluate('print("Hello")');
    expect(r).toBe('Hello');
  });

  it('print(x)', async () => {
    const r = await Interpreter.create().evaluate('print(x)', { x: 88 });
    expect(r).toBe(88);
  });

  it('print(add(33, 2))', async () => {
    expect(await e.evaluate('print(add(33, 2, 45))'))
      .toBe(80);

    expect(await e.evaluate('add("Hello ", "World")'))
      .toBe('Hello World');

    expect(await e.evaluate('print(add("Hello ", "World", "!"))'))
      .toBe('Hello World!');

    expect(await e.evaluate('print(add(s, "World"))', { s: 'Hello ' }))
      .toBe('Hello World');

    expect(await e.evaluate('print(add(s, "World", 1))', { s: 'Hello ' }))
      .toBe('Hello World1');

  });

  it('Expressions like: 35 + 45 or 35 + add(20, add(10, 15)) + 20', async () => {

    expect(await e.evaluate('35 + 45'))
      .toBe(80);

    expect(await e.evaluate('35 + 45 + 20'))
      .toBe(100);

    expect(await e.evaluate('35 + add(20, 25) + 20'))
      .toBe(100);

    expect(await e.evaluate('35 + add(20, add(10, 15)) + 20'))
      .toBe(100);

  });

  it('Multiline instructions', async () => {
    const script = [
      'x = add(55, 45)',
      'x + 45 + add(2, 3)'
    ].join('\n');

    expect(await e.evaluate(script))
      .toBe(150);

  });

  it('Complex objects instructions', async () => {
    expect(await e.evaluate('x.prop1', { x: { prop1: 100 } }))
      .toBe(100);

    expect(await e.evaluate([
      'x = {"prop1": 55}',
      '45 + x.prop1'
    ].join('\n')))
      .toBe(100);
  });

  it('Complex objects instructions => accessing array', async () => {
    expect(await e.evaluate([
      'x = {"prop1": [55, 65]}',
      '45 + x.prop1[1]'
    ].join('\n')))
      .toBe(110);
  });


  it('if statement TRUE', async () => {
    expect(await e.evaluate([
      'x = 5',
      'if x == 5:',
      '  x = 10',
      '  x = x + 5',
      'print(x)'].join('\n')))
      .toBe(15);
  });

  it('if statement FALSE', async () => {
    expect(await e.evaluate([
      'x = 5',
      'if x == 3:',
      '  x = 10',
      '  x = x + 5',
      'print(x)'
    ].join('\n')))
      .toBe(5);
  });

  it('with Entry function', async () => {
    let localResult = 0;

    await Interpreter
      .create()
      .addFunction('setResult', r => localResult = r)
      .evaluate([
        'x = 5', // this will be ignored
        'def func1():',
        '  x = 10',
        '  x = x + 5',
        '  setResult(x)',
        'setResult(8888)' // this should be ignored as well
      ].join('\n'), null, 'func1');
    expect(localResult)
      .toBe(15);
  });

  it('with Entry function and if', async () => {
    let localResult = 0;

    await Interpreter
      .create()
      .addFunction('setResult', r => localResult = r)
      .evaluate([
        'x = 5', // this will be ignored
        'def func1():',
        '  x = 10',
        '  if x == 10:',
        '    x = x + 5',
        '  setResult(x)',
        'setResult(8888)' // this should be ignored as well
      ].join('\n'), null, 'func1');
    expect(localResult)
      .toBe(15);

    await Interpreter
      .create()
      .addFunction('setResult', r => localResult = r)
      .evaluate([
        'x = 5', // this will be ignored
        'def func1():',
        '  x = 10',
        '  if x != 10:',
        '    x = x + 5',
        '  setResult(x)',
        'setResult(8888)' // this should be ignored as well
      ].join('\n'), null, 'func1');
    expect(localResult)
      .toBe(10);
  });

  it('with Entry function with double if', async () => {
    let localResult = 0;

    await Interpreter
      .create()
      .addFunction('setResult', r => localResult = r)
      .evaluate([
        'def func1():',
        '  x = 10',
        '  if x == 10:',
        '    x = x + 5',
        '    if x == 15:',
        '      x = x + 15',
        '  setResult(x)',
      ].join('\n'), null, 'func1');
    expect(localResult)
      .toBe(30);

    await Interpreter
      .create()
      .addFunction('setResult', r => localResult = r)
      .evaluate([
        'def func1():',
        '  x = 10',
        '  if x != 10:',
        '    x = x + 5',
        '    if x == 15:',
        '      x = x + 15',
        '  setResult(x)'
      ].join('\n'), null, 'func1');
    expect(localResult)
      .toBe(10);

    await Interpreter
      .create()
      .addFunction('setResult', r => localResult = r)
      .evaluate([
        'def func1():',
        '  x = 10',
        '  if x == 10:',
        '    x = x + 5',
        '    if x != 15:',
        '      x = x + 15',
        '  setResult(x)'
      ].join('\n'), null, 'func1');
    expect(localResult)
      .toBe(15);
  });


  it('set context variable (both ways)', async () => {
    const cxt = {
      obj: {
        value1: 0
      }
    };

    await Interpreter.create()
      .evaluate([
        'def func1():',
        '  obj.value1 = 15',
        '  obj.value2 = 25',
        '  obj.newObject.value3 = 35',
      ].join('\n'), cxt, 'func1');

    expect(cxt.obj.value1).toBe(15);
    expect((cxt.obj as any).value2).toBe(25);
    expect((cxt.obj as any).newObject.value3).toBe(35);

    // this is to make sure we can read back a complex context values inside a script
    expect(
      await Interpreter.create()
        .evaluate('obj.newObject.value3 + obj.value2 + obj.value1', cxt)
    ).toBe(75);

    expect(
      await e.evaluate('add(obj.newObject.value3, obj.value2, obj.value1)', cxt)
    ).toBe(75);
  });

  it('call a function from context', async () => {
    expect(
      await Interpreter.create()
        .evaluate('obj.addNums(2, 3)', {
          obj: {
            addNums: (a, b) => a + b
          }
        })
    ).toBe(5);
  });

  it('assign global context', async () => {
    const inter = Interpreter.create().assignGlobalContext({ value1: 5, addNums2: (a, b) => a + b });
    expect(await inter.evaluate('addNums2(value1, 10)'))
      .toBe(15);
  });

  it('Function with parameters', async () => {
    let res = 0;
    await Interpreter.create()
      .addFunction('setResult', r => res = r)
      .evaluate([
        'def func1(p1, p2):',
        '  x = p1 + p2',
        '  setResult(x)'
      ].join('\n'), { p1: 5, p2: 10 }, 'func1');

    expect(res).toBe(15);
  });

  it('expression as a function parameter', async () => {
    expect(await e.evaluate('add(2 + 2, 3)'))
      .toBe(7);
  });

  it('expression as a function parameter (2)', async () => {
    expect(await e.evaluate('add(2 + add(10, 5), 3)'))
      .toBe(20);
  });

  it('Assert boolean', async () => {
    expect(await e.evaluate('2 == 5'))
      .toBe(false);

    expect(await e.evaluate('5 == 5'))
      .toBe(true);

    expect(await e.evaluate(['x = 5', 'x == 5'].join('\n')))
      .toBe(true);

    expect(await e.evaluate(['x = 6', 'x != 5'].join('\n')))
      .toBe(true);

    expect(await e.evaluate(['x = 6', 'add(x, 4) == add(6, 4)'].join('\n')))
      .toBe(true);

    expect(await e.evaluate(['x = 6', 'add(x, 4) == add(6, 4)'].join('\n')))
      .toBe(true);
  });

  it('print two objects', async () => {
    // same problem as code below
    // const x = await e.evaluate('print({"x":"88", "y":"test"}, {"x": "99", "y": "test 99"})');
    // expect(x.x)
    //   .toBe(88);

    // const x2 = await e.evaluate('print([{"x":"88", "y" : "test"}, {},{}], {"x": "99", "y": "test 99"})');
    // expect(x2[0].x)
    //   .toBe(88);
  });

  it('MultiLine JSON objects', async () => {
    // const x = await e.evaluate(
    //   [
    //     'x = [{',
    //     '  "x" : 88,',
    //     '  "y" : "test"',
    //     '  },',
    //     '  {"x":99,"y":"test 99"}',
    //     ']',
    //     'x[0].x + 2'
    //   ].join('\n'));

    // const x = await e.evaluate(
    //   [
    //     'x = {',
    //     '  "x" : 88,',
    //     '  "y" : "test"',
    //     '  }',
    //     'x.x + 2'
    //   ].join('\n'));

    // expect(x)
    //   .toBe(90);

  });

  it('return ', async () => {
    expect(await e.evaluate(['x = 5', 'if 2 == 2:', 'return x', 'x + 10'].join('\n')))
      .toBe(5);

    let res = 0;
    const i = await Interpreter.create()
      .addFunction('setResult', r => res = r)
      .evaluate(['x = 5', 'return x + 5', 'setResult(x + 100)'].join('\n'));
    expect(i).toBe(10);
    expect(res).toBe(0);
  });

  it('return value', async () => {
    const i = await Interpreter.create()
      .evaluate([
        'x = "  1234567890  "',
        'return x.trim()'
      ].join('\n'));

    expect(i).toBe('1234567890');
  });

  it('line comments ', async () => {
    expect(await e.evaluate(['5 + 5', '# 2 + 3 and some comment'].join('\n')))
      .toBe(10);

    expect(await e.evaluate(['5 + 5', '     # 2 + 3 and some comment'].join('\n')))
      .toBe(10);

    expect(await e.evaluate('# 2 + 3 and some comment'))
      .toBe(null);
  });

  it('inline comments ', async () => {
    expect(await e.evaluate('2 + 3   # and some comment'))
      .toBe(5);
  });

  it('Calling a standard string functions', async () => {
    expect(await e.evaluate(['x = "test"', 'x.indexOf("s")'].join('\n')))
      .toBe(2);

    expect(await e.evaluate(['x = "test"', 'x.replace("es", "tt")'].join('\n')))
      .toBe('tttt');

    expect(await e.evaluate([
      'str = "Apple, Banana, Kiwi"',
      'str.slice(str.indexOf("Ba"), str.lastIndexOf(","))'
    ].join('\n')))
      .toBe('Banana');
  });

  it('Calling chaining methods', async () => {
    expect(await e.evaluate([
      'str = "Kiwi  "',
      'str.replace("Kiwi", "Banana").trim()'
    ].join('\n')))
      .toBe('Banana');

    expect(await e.evaluate([
      'str = "Kiwi  "',
      'str.replace("Kiwi", "Banana").trim().length'
    ].join('\n')))
      .toBe('Banana'.length);
  });

  it('function parameter as an expressions', async () => {
    let res = 0;
    const i = Interpreter.create().addFunction('setResult', a => res = a);
    expect(await i.evaluate([
      'setResult(5 + 5)'
    ].join('\n')))
      .toBe(10);
  });


  it('Boolean operation', async () => {
    expect(await e.evaluate([
      '5 == 5'
    ].join('\n')))
      .toBe(true);

    expect(await e.evaluate([
      'x = true',
      'print(x)'
    ].join('\n')))
      .toBe(true);

    expect(await e.evaluate([
      'x = false',
      'x'
    ].join('\n')))
      .toBe(false);

    expect(await e.evaluate([
      'print(5 == 5)'
    ].join('\n')))
      .toBe(true);

    expect(await e.evaluate([
      'print(5 != 5)'
    ].join('\n')))
      .toBe(false);
  });


  it('datetime', async () => {
    const i = Interpreter.create();

    expect(
      await i.evaluate('dateTime().getDate()')
    ).toBe(new Date().getDate());

    expect(
      await i.evaluate('dateTime("2019-10-29").getDate() == 29')
    ).toBe(true);
  });

  it('null value', async () => {
    expect(await e.evaluate([
      'null'
    ].join('\n')))
      .toBe(null);

    expect(await e.evaluate([
      'x = null',
      'x'
    ].join('\n')))
      .toBe(null);

    expect(await e.evaluate([
      'x = null',
      'x == null'
    ].join('\n')))
      .toBe(true);

    expect(await e.evaluate([
      'x = null',
      'x != null'
    ].join('\n')))
      .toBe(false);
  });

  it('isNull function', async () => {
    expect(await e.evaluate([
      'isNull(5)'
    ].join('\n')))
      .toBe(false);

    expect(await e.evaluate([
      'x = null',
      'isNull(x, "some value")'
    ].join('\n')))
      .toBe('some value');

    expect(await e.evaluate([
      'x = 5',
      'isNull(x, "some value")'
    ].join('\n')))
      .toBe(5);
  });

  it('Numerics', async () => {
    expect(await e.evaluate([
      'x = 3.14',
      'x'
    ].join('\n')))
      .toBe(3.14);

    expect(await e.evaluate([
      'x = 3.14',
      'x * 2'
    ].join('\n')))
      .toBe(3.14 * 2);

    expect(await e.evaluate([
      'x = 3.14',
      'x / 2'
    ].join('\n')))
      .toBe(3.14 / 2);

    expect(await e.evaluate([
      'x = 3.14',
      'math.floor(x / 2)'
    ].join('\n')))
      .toBe(Math.floor(3.14 / 2));

  });


});
