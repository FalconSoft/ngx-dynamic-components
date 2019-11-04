import { Tokenizer } from './tokenizer';

describe('TokensIterator', () => {

  it('53 + 23', () => {
    const r = Tokenizer.splitAll('53 + 23');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('53|+|23');
  });

  it('print("Hello, World!")', () => {
    const r = Tokenizer.splitAll('print("Hello, World!")');
    expect(r.length).toBe(1);
    expect(r.join('|')).toBe('print("Hello, World!")');
  });

  it('print("Hello ""),)"" World!")', () => {
    const r = Tokenizer.splitAll('print("Hello, World!")');
    expect(r.length).toBe(1);
    expect(r.join('|')).toBe('print("Hello, World!")');
  });

  it('y = x + 23', () => {
    const r = Tokenizer.splitAll('y = x + 23');
    expect(r.length).toBe(5);
    expect(r.join('|')).toBe('y|=|x|+|23');
  });

  it('"this is test" + " another string"', () => {
    const r = Tokenizer.splitAll('"this is test" + " another string"');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('"this is test"|+|" another string"');
  });

  it('x = ""', () => {
    const r = Tokenizer.splitAll('x = ""');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('x|=|""');
  });

  it('func(x, y) + x', () => {
    const r = Tokenizer.splitAll('func(x, y) + x');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('func(x, y)|+|x');
  });

  it('func(x, y, anotherFunc(x, y)) + x', () => {
    const r = Tokenizer.splitAll('func(x, y, anotherFunc(x, y)) + x');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('func(x, y, anotherFunc(x, y))|+|x');
  });

  it('func(x, y, "1 1)") + x', () => {
    const r = Tokenizer.splitAll('func(x, y, "1 1)") + x');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('func(x, y, "1 1)")|+|x');
  });


  it('json = {"f1" : 33}', () => {
    const r = Tokenizer.splitAll('json = {"f1" : 33}');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('json|=|{"f1" : 33}');
  });

  it('json = ["f1", "33"]', () => {
    const r = Tokenizer.splitAll('json = ["f1", "33"]');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('json|=|["f1", "33"]');
  });

  it('json = ["f1", "((33"]', () => {
    const r = Tokenizer.splitAll('json = ["f1", "((33"]');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('json|=|["f1", "((33"]');
  });

  it('{"x":88, "y" : "test"}, {"x":99,"y":"test 99"}', () => {
    const r = Tokenizer
      .splitAll('{"x":88, "y" : "test"}, {"x":99,"y":"test 99"}', [' ', ',']);
    expect(r.length).toBe(2);
    expect(r.join('|')).toBe('{"x":88, "y" : "test"}|{"x":99,"y":"test 99"}');
  });

  it('"this \"is\" test" + " another string"', () => {
    const r = Tokenizer.splitAll('"this \"is\" test" + " another string"');
    expect(r.length).toBe(3);
    expect(r.join('|')).toBe('"this \"is\" test"|+|" another string"');
  });

});

describe('Lines counter', () => {
  it('Empty lines', () => {
    let lines = Tokenizer.splitCodeLines([
      '',
      'x = 5',
      '',
      'x + x'
    ].join('\n'));

    expect(lines.length).toBe(2);
    expect(lines[0].line).toBe('x = 5');
    expect(lines[0].start).toBe(2);
    expect(lines[0].end).toBe(2);
    expect(lines[1].line).toBe('x + x');
    expect(lines[1].start).toBe(4);
    expect(lines[1].end).toBe(4);

    lines = Tokenizer.splitCodeLines([
      '',
      'x = {',
      '  "s": 5',
      '}',
      '',
      'x + x'
    ].join('\n'));

    expect(lines.length).toBe(2);
    expect(lines[1].line).toBe('x + x');
    expect(lines[1].start).toBe(6);
    expect(lines[1].end).toBe(6);

    lines = Tokenizer.splitCodeLines([
      '',
      'x = " this is',
      '  a valid multiline',
      'string"',
      '',
      'x + x'
    ].join('\n'));

    expect(lines.length).toBe(2);
    expect(lines[1].line).toBe('x + x');
    expect(lines[1].start).toBe(6);
    expect(lines[1].end).toBe(6);

    lines = Tokenizer.splitCodeLines([
      '',
      '# comment!',
      'x = " this is',
      '  a valid multiline',
      'string"',
      '',
      'x + x'
    ].join('\n'));

    expect(lines.length).toBe(3);
    expect(lines[2].line).toBe('x + x');
    expect(lines[2].start).toBe(7);
    expect(lines[2].end).toBe(7);
  });

});


  // there is no escape symbol for \"

  // it('"this ""is test" + " another string"', () => {
  //   const r = Tokenizer.splitAll('"this ""is test" + " another string"');
  //   expect(r.length).toBe(3);
  //   expect(r.join('|')).toBe('"this ""is test"|+|" another string"');
  // });

