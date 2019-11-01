import { TokensIterator } from './tokens-iterator';

describe('TokensIterator', () => {

  it('53 + 23', () => {
    const r = TokensIterator.create().splitAll('53 + 23');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('53|+|23');
  });

  it('print("Hello, World!")', () => {
    const r = TokensIterator.create().splitAll('print("Hello, World!")');
    expect(r.length).toBe(1);
    expect(r.join('|')).toBe('print("Hello, World!")');
  });

  it('print("Hello ""),)"" World!")', () => {
    const r = TokensIterator.create().splitAll('print("Hello, World!")');
    expect(r.length).toBe(1);
    expect(r.join('|')).toBe('print("Hello, World!")');
  });


  it('y = x + 23', () => {
    const r = TokensIterator.create().splitAll('y = x + 23');
    expect(r.length).toBe(5);
    expect(r.join('|')).toBe('y|=|x|+|23');
  });

  it('"this is test" + " another string"', () => {
    const r = TokensIterator.create().splitAll('"this is test" + " another string"');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('"this is test"|+|" another string"');
  });

  it('x = ""', () => {
    const r = TokensIterator.create().splitAll('x = ""');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('x|=|""');
  });


  it('"this ""is"" test" + " another string"', () => {
    const r = TokensIterator.create().splitAll('"this ""is"" test" + " another string"');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('"this ""is"" test"|+|" another string"');
  });

  it('func(x, y) + x', () => {
    const r = TokensIterator.create().splitAll('func(x, y) + x');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('func(x, y)|+|x');
  });

  it('func(x, y, anotherFunc(x, y)) + x', () => {
    const r = TokensIterator.create().splitAll('func(x, y, anotherFunc(x, y)) + x');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('func(x, y, anotherFunc(x, y))|+|x');
  });

  it('func(x, y, "1 1)") + x', () => {
    const r = TokensIterator.create().splitAll('func(x, y, "1 1)") + x');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('func(x, y, "1 1)")|+|x');
  });


  it('json = {"f1" : 33}', () => {
    const r = TokensIterator.create().splitAll('json = {"f1" : 33}');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('json|=|{"f1" : 33}');
  });

  it('json = ["f1", "33"]', () => {
    const r = TokensIterator.create().splitAll('json = ["f1", "33"]');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('json|=|["f1", "33"]');
  });

  it('json = ["f1", "((33"]', () => {
    const r = TokensIterator.create().splitAll('json = ["f1", "((33"]');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('json|=|["f1", "((33"]');
  });

  it('{"x":88, "y" : "test"}, {"x":99,"y":"test 99"}', () => {
    const r = TokensIterator.create()
      .setSeparator([' ', ','])
      .splitAll('{"x":88, "y" : "test"}, {"x":99,"y":"test 99"}');
    expect(r.length).toBe(2);
    expect(r.join('|')).toBe('{"x":88, "y" : "test"}|{"x":99,"y":"test 99"}');
  });

  it('"|" + x.trim() + "|"', () => {
    const r = TokensIterator.create()
      .setSeparator(['\n'])
      .splitAll('"|" + x.trim() + "|"');
    // ToDo: needs to be fixed
    // expect(r.length).toBe(1);
  });

  //    const x = await e.evaluate('print({"x":88, "y" : "test"}, {"x": "99", "y":"test 99"})');


});
