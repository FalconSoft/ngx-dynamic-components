# ngx-dynamic-components

NGX Dynamic Components is a dynamic configuration driven web page builder. It is designed to build anything from a single one form web page to more complex web app. 

Add to angular.json `"scripts": [`:
```
  { "input": "node_modules/ace-builds/src-noconflict/ace.js", "bundleName": "ace-editor" },
  { "input": "node_modules/ace-builds/src-noconflict/mode-json.js", "lazy": false },
  { "input": "node_modules/JSPython/dist/assets/mode-interpreter.js", "lazy": false },
  { "input": "node_modules/ace-builds/src-noconflict/ext-language_tools.js", "lazy": false }
```
