declare const monaco: any;

export const defaultOptions = {
  language: 'json',
  automaticLayout: true
};

export function registerMonacoCompletion() {
  if (!window.hasOwnProperty('monaco')) {
    return setTimeout(registerMonacoCompletion, 1e2);
  }
  monaco.languages.registerCompletionItemProvider('json', {
    provideCompletionItems(model, position) {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      });

      const matchItemProperties = textUntilPosition.replace(/(\n|\s)/g, '').match(/"*"itemProperties":\{/);
      let suggestions = getBasicProposals();
      if (matchItemProperties) {
        suggestions = suggestions.concat(getItemProposals());
      }
      return {
        suggestions
      };
    }
});
}

function getItemProposals() {
  return [{
    label: '"fxLayout"',
    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'fxLayout',
    insertText: '"fxLayout": "row"'
  }];
}

function getBasicProposals() {
  return [{
    label: '"type"',
    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Type of UI component.',
    insertText: '"type": ""'
  }, {
    label: '"itemProperties"',
    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Item properties.',
    insertText: '"itemProperties": {\n\n}'
  }, {
    label: '"containerProperties"',
    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Container properties.',
    insertText: '"containerProperties": {\n\n}'
  }, {
    label: '"children"',
    kind: monaco.languages.CompletionItemKind.Function,
    documentation: 'Children components list',
    insertText: '"children": [\n\n]'
  }];
}
