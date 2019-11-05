(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rest-client-rest-client-module"],{

/***/ "./node_modules/parse-curl/index.js":
/*!******************************************!*\
  !*** ./node_modules/parse-curl/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var words = __webpack_require__(/*! shellwords */ "./node_modules/shellwords/lib/shellwords.js")

// TODO -F, --form
// TODO --data-binary
// TODO --data-urlencode
// TODO -r, --range

/**
 * Attempt to parse the given curl string.
 */

module.exports = exports.default = function(s) {
  if (0 != s.indexOf('curl ')) return
  var args = rewrite(words.split(s))
  var out = { method: 'GET', header: {} }
  var state = ''

  args.forEach(function(arg){
    switch (true) {
      case isURL(arg):
        out.url = arg
        break;

      case arg == '-A' || arg == '--user-agent':
        state = 'user-agent'
        break;

      case arg == '-H' || arg == '--header':
        state = 'header'
        break;

      case arg == '-d' || arg == '--data' || arg == '--data-ascii':
        state = 'data'
        break;

      case arg == '-u' || arg == '--user':
        state = 'user'
        break;

      case arg == '-I' || arg == '--head':
        out.method = 'HEAD'
        break;

      case arg == '-X' || arg == '--request':
        state = 'method'
        break;

      case arg == '-b' || arg =='--cookie':
        state = 'cookie'
        break;

      case arg == '--compressed':
        out.header['Accept-Encoding'] = out.header['Accept-Encoding'] || 'deflate, gzip'
        break;

      case !!arg:
        switch (state) {
          case 'header':
            var field = parseField(arg)
            out.header[field[0]] = field[1]
            state = ''
            break;
          case 'user-agent':
            out.header['User-Agent'] = arg
            state = ''
            break;
          case 'data':
            if (out.method == 'GET' || out.method == 'HEAD') out.method = 'POST'
            out.header['Content-Type'] = out.header['Content-Type'] || 'application/x-www-form-urlencoded'
            out.body = out.body
              ? out.body + '&' + arg
              : arg
            state = ''
            break;
          case 'user':
            out.header['Authorization'] = 'Basic ' + btoa(arg)
            state = ''
            break;
          case 'method':
            out.method = arg
            state = ''
            break;
          case 'cookie':
            out.header['Set-Cookie'] = arg
            state = ''
            break;
        }
        break;
    }
  })

  return out
}

/**
 * Rewrite args for special cases such as -XPUT.
 */

function rewrite(args) {
  return args.reduce(function(args, a){
    if (0 == a.indexOf('-X')) {
      args.push('-X')
      args.push(a.slice(2))
    } else {
      args.push(a)
    }

    return args
  }, [])
}

/**
 * Parse header field.
 */

function parseField(s) {
  return s.split(/: (.+)/)
}

/**
 * Check if `s` looks like a url.
 */

function isURL(s) {
  // TODO: others at some point
  return /^https?:\/\//.test(s)
}


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/assertion-logs/assertion-logs.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/assertion-logs/assertion-logs.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #logsTemplate>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let log of assertions\" class=\"list-group-item d-flex py-1 px-0\">\n        <div class=\"px-1 status\">\n          <span class=\"badge p-1 w-100\" [ngClass]=\"{'badge-success': log.condition, 'badge-danger': !log.condition}\">\n            {{log.condition ? 'Success' : 'Failed'}}</span>\n        </div>\n        <div class=\"col-4 px-1\">{{log.name}}</div>\n        <div class=\"px-1\">{{log.description}}</div>\n      </li>\n    </ul>\n</ng-template>\n<span *ngIf=\"stepsCount\" class=\"badge cursor-pointer mr-2 p-1\"\n  [ngClass]=\"{'badge-success': success, 'badge-danger': !success}\" [adaptivePosition]=\"false\" placement=\"left\"\n  container=\"body\" [popover]=\"logsTemplate\" containerClass=\"assertion-logs-container\" popoverTitle=\"Assertion logs\"\n  [outsideClick]=\"true\">\n  {{stepsCount}}\n</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/curl-form/curl-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/curl-form/curl-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column\">\n  <div class=\"form-group row mx-0 mb-1\">\n    <label for=\"curl\" class=\"col-form-label px-0 col-sm-1\">Curl</label>\n    <div class=\"flex-fill ml-2\">\n      <textarea class=\"form-control\" rows=\"5\" #txtArea [(ngModel)]=\"cUrl\" #envName=\"ngModel\" required (input)=\"error = null\"\n        placeholder=\"Enter cUrl\" id=\"curl\" name=\"curl\"></textarea>\n      <div *ngIf=\"error && (envName.dirty || envName.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n        <div *ngIf=\"error\">{{error}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" *ngIf=\"!isExport\" [disabled]=\"!cUrl || error\" (click)=\"importCurl()\" class=\"btn btn-primary ml-auto mr-2\">Create request</button>\n    <button type=\"button\" *ngIf=\"isExport\" (click)=\"copy()\" class=\"btn btn-primary ml-auto mr-2\">\n      <i class=\"fa fa-copy\"></i>&nbsp;Copy</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/data-editor/data-editor.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/data-editor/data-editor.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card overflow-hidden mb-0 w-100 h-100\">\n  <div class=\"card-header d-flex pl-0 py-2 px-2\" #header>\n    <div class=\"row w-100 ml-0 align-items-center\">\n      Data Editor\n      <button (click)=\"saveJson()\" class=\"btn btn-primary mr-2 ml-auto\"><i class=\"fa fa-save\"></i>&nbsp;Save</button>\n      <span dropdown class=\"position-relative px-2\" placement=\"bottom left\" container=\"body\">\n        <button dropdownToggle type=\"button\" class=\"btn\">\n          <i class=\"fa fa-ellipsis-v\"></i>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu left-bottom-menu\" role=\"menu\">\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"onNewDataEditor()\">New</a>\n          </li>\n          <li role=\"menuitem\" *ngIf=\"selectedSavedRequestLink\">\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"onDeleteRequest()\">Delete</a>\n          </li>\n        </ul>\n      </span>\n    </div>\n  </div>\n  <div class=\"card-body d-flex p-0 flex-column\">\n    <app-content-explorer #dataEditor class=\"h-100\" content [data]=\"data\" [formatter]=\"true\"></app-content-explorer>\n  </div>\n  <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n    *ngIf=\"loading$ | async\">\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/dynamic-page/dynamic-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/dynamic-page/dynamic-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert type=\"danger\" *ngIf=\"error\">\n  <strong>Error:</strong> {{error}}\n</alert>\n<ng-container *ngIf=\"page && data && !designerMode\">\n  <ngx-dynamic-component class=\"w-100 h-100 d-block\" (render)=\"onRender($event)\" [uiModel]='page.uiModel'\n    [dataModel]='data'>\n  </ngx-dynamic-component>\n</ng-container>\n<ngx-designer-component class=\"w-100 h-100 d-block\" (uiModelUpdated)=\"onUIModelUpdate($event)\" *ngIf=\"designerMode && page\" [uiModel]='page.uiModel'></ngx-designer-component>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/environments/environments.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/environments/environments.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group align-self-center\" id=\"env-btn-group\" dropdown placement=\"right\">\n  <button *ngIf=\"!isAuthenticated\" class=\"btn btn-primary dropdown-toggle btn-sm m-0\" disabled=\"disabled\"\n    title=\"Login to use environment\" aria-controls=\"dropdown-basic\" tabindex=\"0\" role=\"button\">Environments<span\n      class=\"caret\"></span>\n  </button>\n  <button *ngIf=\"isAuthenticated\" class=\"btn btn-light dropdown-toggle btn-sm m-0\" title=\"Select environment\"\n    dropdownToggle aria-controls=\"dropdown-basic\" tabindex=\"0\" role=\"button\">{{ selectedEnvironment || 'Environments' }}\n    <span class=\"caret\"></span>\n  </button>\n\n  <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n    <li role=\"menuitem\" *ngFor=\"let env of environments\"><a class=\"dropdown-item\" (click)=\"onEnvSelect(env)\">{{env}}</a>\n    </li>\n    <li class=\"divider dropdown-divider\" *ngIf=\"environments.length\"></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"editEnv()\">Manage Environment</a></li>\n  </ul>\n</div>\n<a class=\"btn mr-2 d-inline-block\" (click)=\"editAppVar()\">\n  <img class=\"h-100 var-img\" src=\"assets/img/var.png\" />\n</a>\n\n<ng-template #envTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Enviroment</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body px-4\">\n    <form #envForm=\"ngForm\">\n          <div class=\"row mx-0 mb-3\" *ngIf=\"newEnv || !environments.length\">\n            <label for=\"env-name\" class=\"col-form-label\">Environment name</label>\n            <div class=\"flex-fill mx-2\">\n              <input type=\"text\" id=\"env-name\" #envName=\"ngModel\" [appForbiddenValues]=\"environments\"\n                class=\"form-control\" placeholder=\"Enter name\" required [(ngModel)]=\"environment.name\" name=\"name\">\n              <div *ngIf=\"envName.invalid && (envName.dirty || envName.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n                <div *ngIf=\"envName.errors.required\">Environment name is required.</div>\n                <div *ngIf=\"envName.errors.forbiddenValues\">Name already exist.</div>\n              </div>\n            </div>\n            <button class=\"btn btn-light align-self-baseline\" role=\"button\"\n              (click)=\"formSelectedEnv = selectedEnvironment; setSelectEnv()\">Cancel</button>\n          </div>\n          <div class=\"row mx-0 mb-3\" *ngIf=\"!newEnv && environments.length\">\n            <label for=\"env-selection\" class=\"col-form-label pr-2\">Select environment</label>\n            <div class=\"flex-fill\">\n              <select class=\"form-control\" id=\"env-selection\" [(ngModel)]=\"formSelectedEnv\" (change)=\"onEnvFormChange()\"\n                [ngModelOptions]=\"{standalone: true}\">\n                <option *ngFor=\"let env of environments\" [value]=\"env\">{{env}}</option>\n              </select>\n            </div>\n            <button class=\"btn btn-light mx-2\" (click)=\"deleteEnv()\" type=\"button\" [disabled]=\"!formSelectedEnv\">\n              <i class=\"fa fa-remove\"></i>&nbsp;Delete\n            </button>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"setNewEnv()\">\n              <i class=\"fa fa-plus\"></i>&nbsp;Add\n            </button>\n          </div>\n      <div class=\"row my-1 mx-0\" *ngFor=\"let param of environment.variables; let i = index\">\n        <div class=\"col-sm-4 pl-0 pr-2\">\n          <input type=\"text\" class=\"form-control\" required placeholder=\"name\"\n            (ngModelChange)=\"onEnvVarNameChanged($event, param.name)\" [(ngModel)]=\"param.name\" name=\"env-name-param-{{i}}\">\n        </div>\n        <div class=\"flex-fill px-0\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"value\" name=\"env-value-param-{{i}}\" [(ngModel)]=\"param.value\"\n            (ngModelChange)=\"onEnvVarValueChanged($event, param.name)\">\n        </div>\n        <div class=\"pl-2 d-flex align-items-end\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteVariable(i, param.name)\"><i\n              class=\"fa fa-remove fa-lg\"></i></button>\n        </div>\n      </div>\n    </form>\n    <ng-template [ngTemplateOutlet]=\"envInfo\"></ng-template>\n  </div>\n  <div class=\"modal-footer flex-column\">\n    <div class=\"row w-100 mx-0\">\n      <button type=\"button\" class=\"btn btn-sm btn-light\" (click)=\"addVariable()\">\n        <i class=\"fa fa-plus fa-xl\"></i>&nbsp;Add variable</button>\n      <button type=\"button\" (click)=\"onEnvSubmit()\" [disabled]=\"!envForm.valid\" class=\"btn btn-primary ml-auto mr-2\">Save</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #appVarTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Application variables</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body px-4\">\n    <form #appVarForm=\"ngForm\">\n      <div class=\"row mx-0 mb-3\" *ngIf=\"environments.length\">\n        <label for=\"env-selection\" class=\"col-form-label pr-2\">Select environment</label>\n        <div class=\"flex-fill\">\n          <select class=\"form-control\" id=\"env-selection\" [(ngModel)]=\"selectedEnvironment\" (change)=\"onAppVarEnvChange($event)\"\n            [ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let env of environments\" [value]=\"env\">{{env}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row my-1 mx-0\" *ngFor=\"let param of envVariables; let i = index\">\n        <div class=\"col-sm-4 pr-2 pl-0\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"name\" disabled=\"disabled\" [value]=\"param.name\" name=\"loc-env-name-param-{{i}}\">\n        </div>\n        <div class=\"flex-fill\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"value\" name=\"loc-env-value-param-{{i}}\"\n            [(ngModel)]=\"param.value\">\n        </div>\n      </div>\n      <div class=\"row line my-3 mx-0\" *ngIf=\"environments.length\"></div>\n      <div class=\"row my-1 mx-0\" *ngFor=\"let param of localVariables; let i = index\">\n          <div class=\"col-sm-4 pr-2 pl-0\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"param.name\" name=\"loc-name-param-{{i}}\">\n          </div>\n          <div class=\"flex-fill px-0\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"value\" name=\"loc-value-param-{{i}}\"\n              [(ngModel)]=\"param.value\">\n          </div>\n          <div class=\"pl-2 d-flex align-items-end\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteAppVariable(i)\"><i\n                class=\"fa fa-remove fa-lg\"></i></button>\n          </div>\n      </div>\n    </form>\n    <ng-template [ngTemplateOutlet]=\"envInfo\"></ng-template>\n  </div>\n  <div class=\"modal-footer flex-column\">\n    <div class=\"row w-100 mx-0 px-0\">\n        <button type=\"button\" class=\"btn btn-info active\" (click)=\"addAppVariable()\"><i\n          class=\"fa fa-plus fa-xl\"></i>&nbsp;Add variable</button>\n        <button type=\"button\" (click)=\"onAppVarSubmit()\" [disabled]=\"!appVarForm.valid\" class=\"btn btn-primary ml-auto mr-2\">Save</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #envInfo>\n    <alert type=\"info\" class=\"row flex-column w-100 mx-0 mt-4\">\n        You can use a variable in your requests and all other configurations, by referencing it.\n        <br>\n        For example, use {{'{'}}{{'{'}}base_url{{'}'}}{{'}'}} to reference the value of variable base_url.\n    </alert>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/history/history.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/history/history.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n    <label class=\"btn btn-light cursor-pointer\" [(ngModel)]=\"groupBy.groupDate\" [class.active]=\"groupBy.groupDate\"\n      btnCheckbox tabindex=\"0\" role=\"button\" (click)=\"onDateGroupClick()\" title=\"Group by Day\">\n      <i class=\"fa fa-calendar fa-lg\"></i>\n    </label>\n    <label class=\"btn btn-light cursor-pointer\" [(ngModel)]=\"groupBy.url\" [class.active]=\"groupBy.url\"\n      btnCheckbox tabindex=\"0\" role=\"button\" (click)=\"onDomainGroupClick()\" title=\"Group by Domain\">\n      <i class=\"fa fa-bookmark-o fa-lg\"></i>\n    </label>\n    <label class=\"btn btn-light cursor-pointer\" [(ngModel)]=\"showFullUrl\" [class.active]=\"showFullUrl\" btnCheckbox tabindex=\"0\"\n      role=\"button\" title=\"Show Full URL\">\n      <i class=\"fa fa-expand fa-lg\"></i>\n    </label>\n    <label class=\"btn btn-light cursor-pointer\" [(ngModel)]=\"showTime\" [class.active]=\"showTime\" btnCheckbox tabindex=\"0\"\n      role=\"button\" title=\"Show Time\">\n      <i class=\"fa fa-clock-o fa-lg\"></i>\n    </label>\n  </div>\n<app-list-view #list class=\"d-flex h-100 overflow-auto\" [list]=\"requests\" [searchFn]=\"searchHitoryItem\" [group]=\"grouping\" [orderBy]=\"{key: 'responseInfo.date', type: 'date'}\"\n  (select)=\"onSelect($event)\">\n  <ng-template let-item>\n    <ng-container *ngIf=\"item.request else scripted;\">\n      <div class=\"badge m-1\" [ngClass]=\"{'badge-success': item.responseInfo.status === 200, 'badge-danger': item.responseInfo.status !== 200}\">\n        {{item.responseInfo.status}}\n      </div>\n      <div class=\"m-1\">\n        {{item.request.method}}\n      </div>\n      <div class=\"m-1\" *ngIf=\"showTime\">\n        {{item.responseInfo.time}}\n      </div>\n      <div class=\"m-1 text-break\">\n        {{getDisplayUrl(item.request.url)}}\n      </div>\n    </ng-container>\n    <ng-template #scripted>\n      <div class=\"m-1 px-2\">\n        <i class=\"fa fa-play\"></i>\n      </div>\n      <div class=\"m-1\">\n        Script\n      </div>\n      <div class=\"m-1\" *ngIf=\"showTime\">\n        {{item.responseInfo.time}}\n      </div>\n      <div class=\"m-1\">\n        {{getScriptName(item.scripts)}}\n      </div>\n    </ng-template>\n\n  </ng-template>\n</app-list-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/request/request.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/request/request.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card overflow-hidden mb-0 w-100\">\n  <div class=\"card-header d-flex pl-0 py-2 pr-2\" #header>\n    <!-- Request URL actions -->\n    <div class=\"row w-100 ml-0 align-items-center\">\n      <a (click)=\"toggleCard()\" class=\"p-2\">\n        <i class=\"fa text-center\" [ngClass]=\"{'fa-chevron-right': isCollapsed, 'fa-chevron-down': !isCollapsed}\"></i>\n      </a>\n      <div class=\"form-group mb-0 method-group pr-2\">\n        <div class=\"btn-group form-control p-0\" dropdown container=\"body\">\n          <button dropdownToggle type=\"button\" class=\"btn btn-light dropdown-toggle\">\n            {{requestModel.method}} <span class=\"caret\"></span>\n          </button>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"menuitem\" *ngFor=\"let method of methods\">\n              <a class=\"dropdown-item\" (click)=\"selectMethod(method)\">{{method}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"form-group flex-fill mb-0 p-0\">\n        <input type=\"text\" class=\"form-control\" id=\"url\" [(ngModel)]=\"requestModel.url\" (input)=\"onUrlInput()\"\n          placeholder=\"Enter request URL\" name=\"url\">\n      </div>\n      <div class=\"form-group mb-0 pl-2 actions-group\">\n        <div class=\"d-flex flex-fill\">\n          <button (click)=\"sendRequest()\" class=\"btn flex-fill btn-primary mr-2\"><i\n              class=\"fa fa-send\"></i>&nbsp;Send</button>\n          <button class=\"btn flex-fill btn-primary mr-2\" (click)=\"onSave()\"><i\n              class=\"fa fa-save\"></i></button>\n          <button class=\"btn flex-fill btn-primary disabled\"><i class=\"fa fa-share-alt\"></i></button>\n          <span dropdown class=\"position-relative px-2\" placement=\"bottom left\" container=\"body\">\n            <button dropdownToggle type=\"button\" class=\"btn\">\n              <i class=\"fa fa-ellipsis-v\"></i>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu left-bottom-menu\" role=\"menu\">\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"onNewRequest()\">New request</a>\n              </li>\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"onFileImport()\">Import file</a>\n              </li>\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"onCurlImport()\">Import cUrl</a>\n              </li>\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"onCurlExport()\">Export cUrl</a>\n              </li>\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"onFileExport()\">Export file</a>\n              </li>\n              <li role=\"menuitem\" *ngIf=\"selectedSavedRequestLink\">\n                <a class=\"dropdown-item\" (click)=\"onDeleteRequest()\">Delete request</a>\n              </li>\n            </ul>\n          </span>\n        </div>\n      </div>\n    </div>\n    <!-- end of request url row-->\n  </div>\n  <!-- Error Request -->\n  <div class=\"card-body d-flex p-0 flex-column\" [ngStyle]=\"{'min-height': minCardBodyHeight + 'px'}\">\n    <alert type=\"danger\" *ngIf=\"error\">\n      <strong>Error:</strong> {{error}}\n    </alert>\n    <form class=\"row flex-fill flex-column p-2 h-100\" #form>\n      <div class=\"col-12 d-flex flex-column h-100\">\n\n        <div class=\"row flex-fill position-relative h-100\">\n          <div class=\"tabs-actions position-absolute mr-3\" *ngIf=\"isFormatActionActive\">\n            <button type=\"button\" class=\"btn btn-light btn-sm px-1 py-0\" (click)=\"formatJSON()\" [ngClass]=\"{active: formatted}\"\n              title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n              <i class=\"fa fa-indent\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\"\n              [ngClass]=\"{active: !formatted}\" title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n              <i class=\"fa fa-align-justify\"></i>\n            </button>\n          </div>\n          <tabset class=\"col-12 tabset-fx\" #requestTabs>\n            <!-- Body Tab -->\n            <tab heading=\"Body\" class=\"h-100\" (selectTab)=\"onBodyTabSelect()\">\n              <!-- <div class=\"h-100 body-editor\" #requestBody></div> -->\n              <app-content-explorer [isTextAvailable]=\"true\" [data]=\"bodyData\" #bodyEditor [uiModel]=\"explorerUIModel\" [formatter]=\"false\" class=\"h-100\"></app-content-explorer>\n            </tab>\n            <!-- Query Parameters Tab -->\n            <tab heading=\"Query Params\">\n              <div class=\"row flex-fill overflow-auto\">\n                <div class=\"col-12\">\n                  <div class=\"row my-1 mx-0 flex-nowrap\" *ngFor=\"let param of requestModel.queryParameters; let i = index\">\n                    <div>\n                      <input class=\"mx-2 mt-0 h-100\" type=\"checkbox\" name=\"active-param-{{i}}\"\n                        [(ngModel)]=\"param.active\" (change)=\"syncQueryParams(); updateModel()\">\n                    </div>\n                    <div class=\"col-4 col-sm-4 px-2\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"param.name\"\n                        name=\"name-param-{{i}}\" (change)=\"updateModel()\" (input)=\"syncQueryParams()\">\n                    </div>\n                    <div class=\"flex-fill px-2\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"value\" name=\"value-param-{{i}}\"\n                        [(ngModel)]=\"param.value\" (change)=\"updateModel()\" (input)=\"syncQueryParams()\">\n                    </div>\n                    <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteQueryParam(i)\"><i\n                        class=\"fa fa-remove fa-lg\"></i></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mx-0\">\n                <button type=\"button\" class=\"btn btn-sm btn-light\" (click)=\"addQueryParam()\"><i\n                    class=\"fa fa-plus fa-xl\"></i>&nbsp;Add query parameter</button>\n              </div>\n            </tab>\n            <!-- Headers tab -->\n            <tab heading=\"Headers\">\n              <div class=\"row flex-fill overflow-auto\">\n                <div class=\"col-12\">\n                  <div class=\"row my-1 mx-0 flex-nowrap\" *ngFor=\"let header of requestModel.headers; let i = index\">\n                    <div>\n                      <input class=\"mx-2 mt-0 h-100\" type=\"checkbox\" name=\"active-header-{{i}}\"\n                        [(ngModel)]=\"header.active\" (change)=\"updateModel()\">\n                    </div>\n                    <div class=\"flex-fill px-2\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"name-header-{{i}}\"\n                        [(ngModel)]=\"header.name\" (change)=\"updateModel()\">\n                    </div>\n                    <div class=\"flex-fill px-2\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"value\" name=\"value-header-{{i}}\"\n                        [(ngModel)]=\"header.value\" (change)=\"updateModel()\">\n                    </div>\n                    <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteHeader(i)\"><i\n                        class=\"fa fa-remove fa-lg\"></i></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mx-0\">\n                <button type=\"button\" class=\"btn btn-sm btn-light\" (click)=\"addHeader()\"><i\n                    class=\"fa fa-plus\"></i>&nbsp;Add header</button>\n              </div>\n            </tab>\n            <tab heading=\"Script\">\n              <app-script class=\"w-100 h-100\" #script [defaultScript]=\"defaultScript\"></app-script>\n              <!-- <div #script class=\"h-100\"></div> -->\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/response/response.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/response/response.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card flex-fill overflow-hidden mb-0\">\n  <div class=\"card-header p-2 d-flex align-items-center\" #header>\n    Response\n    <ng-container *ngIf=\"responseStatus$ | async as responseStatus\">\n      <span class=\"badge ml-2 p-1\"\n        [ngClass]=\"{'badge-success': responseStatus.status === 200, 'badge-danger': responseStatus.status !== 200}\">\n        {{responseStatus.status}} {{responseStatus.statusText}}</span>\n      <span class=\"badge badge-info ml-2 p-1\">{{(responseStatus.time/1000).toFixed(2)}} s</span>\n    </ng-container>\n    <app-assertion-logs [assertions]=\"scriptContext && scriptContext.asserts\" class=\"ml-auto\"></app-assertion-logs>\n    <div class=\"btn-group p-0\" dropdown [insideClick]=\"true\">\n      <button dropdownToggle type=\"button\" class=\"btn btn-light btn-sm\" title=\"Options\">\n        <i class=\"fa fa-ellipsis-v\"></i>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu left-menu tabs-options\" role=\"menu\">\n        <li role=\"menuitem\" *ngFor=\"let option of tabsOptions; let i = index\">\n          <div class=\"form-check form-check-inline w-100 dropdown-option\">\n            <input class=\"form-check-input mr-2\" type=\"checkbox\" [checked]=\"uiSettings[option.value]\" id=\"tab-option-{{i}}\" [value]=\"option.value\" (change)=\"onTabsOptionsChanged($event)\">\n            <label class=\"form-check-label\" for=\"tab-option-{{i}}\">{{option.title}}</label>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-body overflow-hidden response-container p-0 d-flex flex-column\" #body>\n    <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner\"\n      *ngIf=\"loading$ | async\">\n      <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n    <ng-container *ngIf=\"(responseStatus$ | async) as status\">\n      <alert type=\"danger\" *ngIf=\"status.error\">\n        <strong>Response Error:</strong> {{status.error}}\n      </alert>\n    </ng-container>\n    <alert type=\"danger\" *ngIf=\"scriptContext && scriptContext.errors.length\">\n      <strong>Runtime Error:</strong>\n      <p *ngFor=\"let error of scriptContext.errors\" class=\"mb-0\">{{error}}</p>\n    </alert>\n    <div class=\"p-2 h-100\">\n      <div class=\"tabs-actions position-absolute pr-2\">\n        <div class=\"btn-group p-0\" dropdown placement=\"left\">\n          <button dropdownToggle type=\"button\" class=\"btn btn-sm dropdown-toggle\">\n            + Add <span class=\"caret\"></span>\n          </button>\n          <ul *dropdownMenu class=\"dropdown-menu left-menu\" role=\"menu\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"onAddDynamicPage()\">Dynamic Page</a></li>\n          </ul>\n        </div>\n        <button *ngIf=\"panelContentType === PanelContentType.PAGE\" type=\"button\"\n          class=\"btn btn-light btn-sm px-1 py-0 ml-1\" title=\"Show Page Configuration Dialog\"\n          (click)=\"editCurrentPage()\"><i class=\"fa fa-edit\"></i> Config\n        </button>\n        <button *ngIf=\"panelContentType === PanelContentType.PAGE\" type=\"button\"\n          class=\"btn btn-light btn-sm px-1 py-0 ml-1\" title=\"Disign Page\"\n          (click)=\"designCurrentPage()\"><i class=\"fa fa-edit\"></i> Designer\n        </button>\n        <ng-container *ngIf=\"[PanelContentType.CONTENT, PanelContentType.WORKFLOW].includes(panelContentType)\">\n          <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON()\"\n            [ngClass]=\"{active: formatted}\" title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n            <i class=\"fa fa-indent\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\"\n            [ngClass]=\"{active: !formatted}\" title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n            <i class=\"fa fa-align-justify\"></i>\n          </button>\n        </ng-container>\n      </div>\n      <app-show-in-presenter *ngIf=\"scriptContext\" [items]=\"scriptContext.showInItems\"></app-show-in-presenter>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/rest-content/rest-content.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/rest-content/rest-content.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split unit=\"pixel\" #split=\"asSplit\" direction=\"vertical\"\n  [useTransition]=\"true\"\n  [ngClass]=\"{collapsed: uiSettings.isRequestPanelCollapsed}\"\n  (dragEnd)=\"onDragEnd($event)\"\n  (transitionEnd)=\"onResize()\">\n  <as-split-area\n    [size]=\"requestTabSize.height\" #area1=\"asSplitArea\" class=\"d-flex\"\n    [maxSize]=\"requestTabSize.maxHeight\"\n    [minSize]=\"requestTabSize.minHeight\">\n    <app-request #requestCard (scriptResult)=\"onScriptChange($event)\" class=\"d-flex flex-fill\"></app-request>\n  </as-split-area>\n  <as-split-area #area2=\"asSplitArea\" class=\"d-flex mb-0\" size=\"*\">\n    <app-response #responseCard [scriptContext]=\"scriptContext\" class=\"d-flex flex-fill w-100\"></app-response>\n  </as-split-area>\n</as-split>\n\n<div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner\" *ngIf=\"loading$ | async\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/rest-layout/rest-layout.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/rest-layout/rest-layout.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout [config]=\"layoutConfig\">\n  <h2 title class=\"mb-0 ml-0 top-sub-header w-md-down-50\">WORKSHEET <span>SYSTEMS</span> - REST Client</h2>\n  <app-environments header class=\"ml-auto d-flex\"></app-environments>\n  <app-rest-sidebar sidebar class=\"h-100 w-100 py-2 d-flex flex-column\"></app-rest-sidebar>\n  <router-outlet content></router-outlet>\n</app-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/save-request/save-request.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/save-request/save-request.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{saveRequestLink.id ? 'Update request' : 'Save Request'}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body px-4\">\n    <form #saveRequestForm=\"ngForm\">\n      <div class=\"form-group row mx-0 mb-3\">\n        <label for=\"request-name\" class=\"col-form-label px-0 col-sm-3\">Request name</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"text\" required class=\"form-control\" [(ngModel)]=\"saveRequestLink.name\"\n            placeholder=\"Enter request name\" name=\"name\" #name=\"ngModel\" id=\"request-name\">\n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n            <div *ngIf=\"name.errors.required\">Request name is required.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-3\">\n        <label for=\"folder-name\" class=\"col-form-label px-0 col-sm-3\">Folder</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"text\" id=\"folder-name\" required class=\"form-control\" [(ngModel)]=\"saveRequestLink.folder\"\n            #folder=\"ngModel\" placeholder=\"Enter request folder\" name=\"folder\">\n          <div *ngIf=\"folder.invalid && (folder.dirty || folder.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n            <div *ngIf=\"folder.errors.required\">Folder is required.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-1\">\n        <label for=\"description-name\" class=\"col-form-label px-0 col-sm-3\">Description</label>\n        <div class=\"flex-fill ml-2\">\n          <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"saveRequestLink.description\"\n            placeholder=\"Enter request description\" id=\"description-name\" name=\"description\"></textarea>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer flex-column\">\n    <div class=\"row w-100 mx-0 px-0\">\n      <button type=\"button\" (click)=\"saveRequest()\" [disabled]=\"!saveRequestForm.valid\"\n        class=\"btn btn-primary ml-auto mr-2\">Save</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/saved-requests/saved-requests.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/saved-requests/saved-requests.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list-view #listView class=\"d-flex h-100 overflow-auto\" [list]=\"requests\" group=\"folder\" orderBy=\"id\"\n  (select)=\"onSelect($event)\">\n  <ng-template let-item>\n    <div class=\"m-1 pl-3\" title=\"{{item.description}}\">\n      <i class=\"fa mr-1\" [ngClass]=\"{\n        'fa-send': item.linkType === LinkType.RestRequest,\n        'fa-play': item.linkType === LinkType.ScriptedRequest,\n        'fa-edit': item.linkType === LinkType.DataEditor\n      }\"></i> {{item.name}}\n    </div>\n  </ng-template>\n</app-list-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/script/script.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/script/script.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split unit=\"percent\" #split=\"asSplit\" direction=\"horizontal\" [useTransition]=\"true\" (dragEnd)=\"resize()\"\n  (transitionEnd)=\"resize()\">\n  <as-split-area [size]=\"70\" #area1=\"asSplitArea\" class=\"d-flex\">\n    <div class=\"w-100 h-100\" #script></div>\n  </as-split-area>\n  <as-split-area [size]=\"30\" #area1=\"asSplitArea\" class=\"d-flex\">\n    <div class=\"content\">\n      <p>Use python-like scripting language to facilitate running multi-requests, data transformations, and testing\n        tasks.</p>\n      <h5>Code snippets</h5>\n      <ul>\n        <li *ngFor=\"let snippet of snippets\">\n          <a class=\"cursor-pointer\" (click)=\"addSnippet(snippet.script)\">{{snippet.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </as-split-area>\n</as-split>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/scripted-request/scripted-request.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/scripted-request/scripted-request.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split unit=\"percent\" #split=\"asSplit\" direction=\"vertical\" [useTransition]=\"true\" (dragEnd)=\"onResize()\"\n  (transitionEnd)=\"onResize()\">\n  <as-split-area [size]=\"70\" #area1=\"asSplitArea\" class=\"d-flex\">\n    <div class=\"card overflow-hidden mb-0 w-100\">\n      <div class=\"card-header d-flex py-2 px-2\" #header>\n        <!-- Request URL actions -->\n        <div class=\"row w-100 ml-0 align-items-center\">\n          Scripted Request\n          <button (click)=\"run()\" class=\"btn btn-primary ml-auto mr-2\"><i class=\"fa fa-play\"></i>&nbsp;Run</button>\n          <button class=\"btn btn-primary\" (click)=\"save()\"><i class=\"fa fa-save\"></i></button>\n          <span dropdown class=\"position-relative px-2\" placement=\"bottom left\" container=\"body\">\n            <button dropdownToggle type=\"button\" class=\"btn\">\n              <i class=\"fa fa-ellipsis-v\"></i>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu left-bottom-menu\" role=\"menu\">\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item cursor-pointer\" (click)=\"onNewScriptedRequest()\">New scripted request</a>\n              </li>\n              <li role=\"menuitem\" *ngIf=\"selectedSavedRequestLink\">\n                <a class=\"dropdown-item cursor-pointer\" (click)=\"onDeleteRequest()\">Delete request</a>\n              </li>\n            </ul>\n          </span>\n        </div>\n      </div>\n      <div class=\"card-body d-flex p-0\">\n        <!-- <div class=\"w-100\" #script></div> -->\n        <app-script class=\"w-100 h-100\" #script [defaultScript]=\"defaultScript\"></app-script>\n      </div>\n    </div>\n  </as-split-area>\n  <as-split-area #area2=\"asSplitArea\" class=\"d-flex mb-0\" size=\"30\">\n    <div class=\"card overflow-hidden mb-0 w-100\">\n      <div class=\"card-header d-flex py-2 px-2\" #header>\n        <!-- Request URL actions -->\n        <div class=\"row w-100 ml-0 align-items-center\">\n          Response\n          <span *ngIf=\"script.evaluationTime\" class=\"badge badge-info ml-2 p-1\">{{script.evaluationTime / 1000}} s</span>\n          <app-assertion-logs class=\"ml-auto\" *ngIf=\"script.context as sc\" [assertions]=\"sc.asserts\"></app-assertion-logs>\n        </div>\n      </div>\n      <div class=\"card-body d-flex p-0 flex-column h-100\">\n        <ng-container *ngIf=\"script.context as sc\">\n          <alert type=\"danger\" *ngIf=\"sc.errors && sc.errors.length\">\n            <strong>Runtime Error:</strong>\n            <p *ngFor=\"let error of sc.errors\" class=\"mb-0\">{{error}}</p>\n          </alert>\n          <app-show-in-presenter [items]=\"sc.showInItems\" #showIn class=\"h-100\"></app-show-in-presenter>\n        </ng-container>\n      </div>\n    </div>\n  </as-split-area>\n  <div\n    class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n    *ngIf=\"loading$ | async\">\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</as-split>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset class=\"tabset-fx\">\n  <tab [heading]=\"tab.title || ('Tab ' + i)\" *ngFor=\"let tab of tabs; let i = index\">\n    <ng-container [ngSwitch]=\"tab.type\" *ngIf=\"tab.data\">\n      <app-content-explorer class=\"d-block h-100\" [formatter]=\"false\" *ngSwitchCase=\"ShowInTypes.ObjectExplorer\"\n        [uiModel]='tab.uiModel' [data]=\"tab.data\"></app-content-explorer>\n      <app-json-preview class=\"w-100 h-100\" [data]=\"tab.data\" *ngSwitchCase=\"ShowInTypes.JSON\"></app-json-preview>\n      <dc-chart class=\"w-100 h-100\" [dataModel]=\"tab.data\" [uiModel]=\"tab.uiModel\" *ngSwitchCase=\"ShowInTypes.Chart\"></dc-chart>\n    </ng-container>\n    <div *ngIf=\"!tab.data\">[No data]</div>\n  </tab>\n</tabset>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rest-client/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group position-absolute new-dropdown mr-1\" dropdown placement=\"bottom left\" container=\"body\">\n  <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle btn-sm\"\n    aria-controls=\"dropdown-new-item\">New <span class=\"caret\"></span>\n  </button>\n  <ul id=\"dropdown-new-item\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n    <li role=\"menuitem\"><a class=\"dropdown-item cursor-pointer\" (click)=\"onNewRequest()\">Rest Request</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item cursor-pointer\" (click)=\"onNewScriptedRequest()\">Scripted Request</a></li>\n    <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/rest-client', 'data-editor']\">Data Editor</a></li>\n  </ul>\n</div>\n<tabset class=\"tabset-fx\" #sideTabs>\n  <tab heading=\"History\" class=\"h-100\">\n    <app-history class=\"d-flex flex-column h-100\"></app-history>\n  </tab>\n  <tab heading=\"Saved Requests\" class=\"h-100\">\n    <app-saved-requests class=\"d-flex flex-column overflow-auto\" *ngIf=\"isAuthenticated && !error;\"></app-saved-requests>\n    <alert type=\"danger\" *ngIf=\"error\">\n      <strong>Error:</strong> {{error}}\n    </alert>\n    <alert type=\"info\" *ngIf=\"!isAuthenticated\">\n     Please <a class=\"link cursor-pointer\" (click)=\"onLogin()\">Login</a> to be able to save requests.\n    </alert>\n  </tab>\n</tabset>\n"

/***/ }),

/***/ "./node_modules/shellwords/lib/shellwords.js":
/*!***************************************************!*\
  !*** ./node_modules/shellwords/lib/shellwords.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.3.3
(function() {
  var scan;

  scan = function(string, pattern, callback) {
    var match, result;
    result = "";
    while (string.length > 0) {
      match = string.match(pattern);
      if (match) {
        result += string.slice(0, match.index);
        result += callback(match);
        string = string.slice(match.index + match[0].length);
      } else {
        result += string;
        string = "";
      }
    }
    return result;
  };

  exports.split = function(line) {
    var field, words;
    if (line == null) {
      line = "";
    }
    words = [];
    field = "";
    scan(line, /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/, function(match) {
      var dq, escape, garbage, raw, seperator, sq, word;
      raw = match[0], word = match[1], sq = match[2], dq = match[3], escape = match[4], garbage = match[5], seperator = match[6];
      if (garbage != null) {
        throw new Error("Unmatched quote");
      }
      field += word || (sq || dq || escape).replace(/\\(?=.)/, "");
      if (seperator != null) {
        words.push(field);
        return field = "";
      }
    });
    if (field) {
      words.push(field);
    }
    return words;
  };

  exports.escape = function(str) {
    if (str == null) {
      str = "";
    }
    if (str == null) {
      return "''";
    }
    return str.replace(/([^A-Za-z0-9_\-.,:\/@\n])/g, "\\$1").replace(/\n/g, "'\n'");
  };

}).call(this);


/***/ }),

/***/ "./src/app/rest-client/components/assertion-logs/assertion-logs.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/rest-client/components/assertion-logs/assertion-logs.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n  -webkit-box-flex: 0;\n          flex: 0 0 50px;\n}\n\n::ng-deep .assertion-logs-container.popover {\n  max-width: 400px;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL2Fzc2VydGlvbi1sb2dzL2Fzc2VydGlvbi1sb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL2Fzc2VydGlvbi1sb2dzL2Fzc2VydGlvbi1sb2dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvYXNzZXJ0aW9uLWxvZ3MvYXNzZXJ0aW9uLWxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzIHtcbiAgZmxleDogMCAwIDUwcHg7XG59XG5cbjo6bmctZGVlcCAuYXNzZXJ0aW9uLWxvZ3MtY29udGFpbmVyLnBvcG92ZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG4iLCIuc3RhdHVzIHtcbiAgZmxleDogMCAwIDUwcHg7XG59XG5cbjo6bmctZGVlcCAuYXNzZXJ0aW9uLWxvZ3MtY29udGFpbmVyLnBvcG92ZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/rest-client/components/assertion-logs/assertion-logs.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/rest-client/components/assertion-logs/assertion-logs.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AssertionLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionLogsComponent", function() { return AssertionLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssertionLogsComponent = /** @class */ (function () {
    function AssertionLogsComponent() {
    }
    AssertionLogsComponent.prototype.ngOnInit = function () {
        this.setState();
    };
    AssertionLogsComponent.prototype.ngOnChanges = function () {
        this.setState();
    };
    AssertionLogsComponent.prototype.setState = function () {
        if (this.assertions) {
            this.success = this.assertions.every(function (a) { return a.condition; });
            this.stepsCount = this.assertions.length;
        }
        else {
            this.stepsCount = 0;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AssertionLogsComponent.prototype, "assertions", void 0);
    AssertionLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assertion-logs',
            template: __webpack_require__(/*! raw-loader!./assertion-logs.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/assertion-logs/assertion-logs.component.html"),
            styles: [__webpack_require__(/*! ./assertion-logs.component.scss */ "./src/app/rest-client/components/assertion-logs/assertion-logs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssertionLogsComponent);
    return AssertionLogsComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/curl-form/curl-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/rest-client/components/curl-form/curl-form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvY3VybC1mb3JtL2N1cmwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rest-client/components/curl-form/curl-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/rest-client/components/curl-form/curl-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurlFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurlFormComponent", function() { return CurlFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var parse_curl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse-curl */ "./node_modules/parse-curl/index.js");
/* harmony import */ var parse_curl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse_curl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");






var CurlFormComponent = /** @class */ (function () {
    function CurlFormComponent() {
        this.import = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isExport = false;
    }
    Object.defineProperty(CurlFormComponent.prototype, "title", {
        get: function () {
            return this.isExport ? 'Export to cUrl' : 'Import from cUrl';
        },
        enumerable: true,
        configurable: true
    });
    CurlFormComponent.prototype.ngOnInit = function () {
        if (this.isExport && this.exportData) {
            var resolved = src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__["Variables"].resolve(this.exportData);
            var _a = resolved, method = _a.method, url = _a.url, body = _a.body, headers = _a.headers;
            var bodyParam = '';
            var headersParam = '';
            if (method === 'POST' && body) {
                if (this.exportData.contentType !== _models__WEBPACK_IMPORTED_MODULE_4__["ContentTypes"].JSON) {
                    var params = Object.entries(JSON.parse(body)).reduce(function (prev, _a) {
                        var key = _a[0], val = _a[1];
                        prev.push(key + "=" + val);
                        return prev;
                    }, []).join('&');
                    bodyParam = "-d \"" + params + "\"";
                }
                else {
                    bodyParam = "-d '" + body + "'";
                }
            }
            if (headers) {
                headersParam = headers.filter(function (h) { return h.active; }).map(function (h) {
                    return "-H \"" + h.name + ": " + h.value + "\"";
                }).join(' ');
            }
            this.cUrl = ("curl -X " + method + " " + url + " " + bodyParam + " " + headersParam).replace(/[\n\t]/g, '');
        }
    };
    CurlFormComponent.prototype.importCurl = function () {
        var curlData = parse_curl__WEBPACK_IMPORTED_MODULE_3__(this.cUrl);
        if (curlData) {
            var headers = [];
            if (curlData.header) {
                headers = Object.entries(curlData.header).map(function (_a) {
                    var name = _a[0], value = _a[1];
                    return { name: name, value: value, active: true };
                });
            }
            var model = {
                request: {
                    method: curlData.method,
                    url: curlData.url,
                    headers: headers,
                    queryParameters: [],
                    contentType: null
                }
            };
            if (curlData.body) {
                if (headers.some(function (h) { return h.name === 'Content-Type' && h.value === _models__WEBPACK_IMPORTED_MODULE_4__["ContentTypes"].JSON; })) {
                    model.request.body = curlData.body.replace(/\t|\n/g, '');
                    model.request.contentType = _models__WEBPACK_IMPORTED_MODULE_4__["ContentTypes"].JSON;
                }
                else {
                    model.request.body = this.parseQueryStr(curlData.body);
                    model.request.contentType = _models__WEBPACK_IMPORTED_MODULE_4__["ContentTypes"].FORM;
                }
            }
            this.import.emit(model);
            this.modalRef.hide();
        }
        else {
            this.error = 'Not valid curl';
        }
    };
    CurlFormComponent.prototype.copy = function () {
        this.txtArea.nativeElement.select();
        document.execCommand('copy');
        this.modalRef.hide();
    };
    CurlFormComponent.prototype.parseQueryStr = function (str) {
        return JSON.stringify(str.split('&').reduce(function (prev, kv) {
            var _a = kv.split('='), key = _a[0], value = _a[1];
            prev[key] = value;
            return prev;
        }, {}));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CurlFormComponent.prototype, "import", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CurlFormComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CurlFormComponent.prototype, "exportData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('txtArea', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CurlFormComponent.prototype, "txtArea", void 0);
    CurlFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curl-form',
            template: __webpack_require__(/*! raw-loader!./curl-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/curl-form/curl-form.component.html"),
            styles: [__webpack_require__(/*! ./curl-form.component.scss */ "./src/app/rest-client/components/curl-form/curl-form.component.scss")]
        })
    ], CurlFormComponent);
    return CurlFormComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/data-editor/data-editor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/rest-client/components/data-editor/data-editor.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvZGF0YS1lZGl0b3IvZGF0YS1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/data-editor/data-editor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/rest-client/components/data-editor/data-editor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DataEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataEditorComponent", function() { return DataEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var _save_request_save_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../save-request/save-request.component */ "./src/app/rest-client/components/save-request/save-request.component.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/rest-client/store/selectors/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store */ "./src/app/rest-client/store/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");














var DataEditorComponent = /** @class */ (function () {
    function DataEditorComponent(store, dialogService, loginService, authService, router) {
        this.store = store;
        this.dialogService = dialogService;
        this.loginService = loginService;
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newRequestLink = {
            ownerName: null,
            name: null,
            folder: null,
            description: null,
            linkType: _models__WEBPACK_IMPORTED_MODULE_13__["LinkType"].DataEditor,
            id: 0
        };
    }
    DataEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateRequestModel"](null));
        this.authService.isAuthenticated$.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
            if (isAuth) {
                var userName = _this.authService.user.userName;
                _this.newRequestLink.ownerName = userName;
                if (_this.saveRequestLink && _this.saveRequestLink.id === 0) {
                    _this.saveRequestLink.ownerName = userName;
                }
            }
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_11__["selectActiveRequest"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (request) {
            _this.data = null;
            _this.selectedSavedRequestLink = request;
            _this.saveRequestLink = request || tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.newRequestLink);
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_12__["selectRequestModel"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (model) {
            if (_this.saveRequestLink.linkType === _models__WEBPACK_IMPORTED_MODULE_13__["LinkType"].DataEditor) {
                _this.data = model;
            }
        });
        this.loading$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_11__["selectRequestLoading"]);
    };
    DataEditorComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    DataEditorComponent.prototype.saveJson = function () {
        var _this = this;
        if (this.isAuthenticated) {
            var saveDialog_1 = this.dialogService.open(_save_request_save_request_component__WEBPACK_IMPORTED_MODULE_9__["SaveRequestComponent"]);
            saveDialog_1.config = this.saveRequestLink;
            saveDialog_1.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return saveDialog_1.component.save; })).subscribe(function (data) {
                _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_10__["SaveRequest"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { request: _this.dataEditor.dataModel })));
                saveDialog_1.component.modalRef.hide();
            });
        }
        else {
            this.loginService.openDialog();
        }
    };
    DataEditorComponent.prototype.onDeleteRequest = function () {
        if (this.selectedSavedRequestLink) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_10__["DeleteRequest"](this.selectedSavedRequestLink.id));
        }
        else {
            throw new Error('Saved request is not selected');
        }
    };
    DataEditorComponent.prototype.onNewDataEditor = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateRequestModel"](null));
        this.router.navigate(['/rest-client', 'data-editor']);
    };
    DataEditorComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_8__["LoginService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataEditor', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_7__["ContentExplorerComponent"])
    ], DataEditorComponent.prototype, "dataEditor", void 0);
    DataEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-editor',
            template: __webpack_require__(/*! raw-loader!./data-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/data-editor/data-editor.component.html"),
            styles: [__webpack_require__(/*! ./data-editor.component.scss */ "./src/app/rest-client/components/data-editor/data-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DataEditorComponent);
    return DataEditorComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/dynamic-page/dynamic-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/rest-client/components/dynamic-page/dynamic-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-pills a {\n  cursor: pointer;\n}\n\ntabset ::ng-deep .nav-tabs {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\ntabset ::ng-deep .nav-tabs .nav-items {\n  margin-top: -1px;\n  margin-bottom: 0;\n}\n\ntabset ::ng-deep .nav-tabs .nav-link.active {\n  border-bottom-color: #c8ced3;\n  border-top-color: #fff;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0.25em;\n  border-bottom-right-radius: 0.25em;\n}\n\ntabset ::ng-deep .nav-tabs .nav-item {\n  margin-top: -1px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvZHluYW1pYy1wYWdlL2R5bmFtaWMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURHQTtFQUNFLDRCQUFBO1VBQUEsUUFBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXBpbGxzIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIEBkZXByZWNhdGVkIHRhYnNldCBzdHlsZXMuXG50YWJzZXQgOjpuZy1kZWVwIC5uYXYtdGFicyB7XG4gIG9yZGVyOiAxO1xuXG4gIC5uYXYtaXRlbXMge1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjOGNlZDM7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcblxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNWVtO1xuICB9XG5cbiAgLm5hdi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbiIsIi5uYXYtcGlsbHMgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGFic2V0IDo6bmctZGVlcCAubmF2LXRhYnMge1xuICBvcmRlcjogMTtcbn1cbnRhYnNldCA6Om5nLWRlZXAgLm5hdi10YWJzIC5uYXYtaXRlbXMge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxudGFic2V0IDo6bmctZGVlcCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNjOGNlZDM7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1ZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1ZW07XG59XG50YWJzZXQgOjpuZy1kZWVwIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/dynamic-page/dynamic-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/rest-client/components/dynamic-page/dynamic-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DynamicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPageComponent", function() { return DynamicPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var src_app_shared_components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/page-info/page-info.component */ "./src/app/shared/components/page-info/page-info.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/app/rest-client/utils.ts");







var DynamicPageComponent = /** @class */ (function () {
    function DynamicPageComponent(dialogService) {
        this.dialogService = dialogService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.designerMode = false;
    }
    Object.defineProperty(DynamicPageComponent.prototype, "dataModel", {
        set: function (val) {
            var _this = this;
            if (val) {
                this.data = null;
                this.updatePage(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.config)).then(function () {
                    _this.data = typeof val === 'string' ? JSON.parse(val) : val;
                });
            }
            else {
                this.data = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicPageComponent.prototype.ngOnInit = function () {
        this.pageInfo = this.config;
        this.page = this.getPage();
    };
    DynamicPageComponent.prototype.updatePage = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.page = null;
                _this.error = null;
                window.requestAnimationFrame(function () {
                    _this.page = _this.getPage();
                    _this.pageInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.pageInfo, config);
                    resolve(_this.page);
                });
            }
            catch (e) {
                console.error(e);
                _this.error = e;
                reject(e);
            }
        });
    };
    DynamicPageComponent.prototype.onUIModelUpdate = function (uiModel) {
        this.pageInfo.uiModel = uiModel;
        this.changed.emit(this);
        this.page = this.getPage();
    };
    DynamicPageComponent.prototype.editPage = function () {
        var _this = this;
        var pageEditDialog = this.dialogService.open(src_app_shared_components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_5__["PageInfoComponent"], { class: 'modal-xl full-height' });
        pageEditDialog.config = this.pageInfo;
        pageEditDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return pageEditDialog.component.save; })).subscribe(function (page) {
            _this.updatePage(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, page)).then(function () {
                _this.changed.emit(_this);
            });
        });
    };
    DynamicPageComponent.prototype.designPage = function () {
        this.designerMode = !this.designerMode;
    };
    DynamicPageComponent.prototype.onRender = function (_a) {
        var _this = this;
        var error = _a.error;
        window.requestAnimationFrame(function () {
            _this.error = error;
        });
    };
    DynamicPageComponent.prototype.getData = function () {
        var vars = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.pageInfo.workflows.vars);
        delete vars.uiModel;
        delete vars.dataModel;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.pageInfo, { workflows: {
                failOnError: true,
                include: ['@common'],
                vars: vars,
                workflowsMap: this.pageInfo.workflows.workflowsMap,
                consts: {},
            } });
    };
    DynamicPageComponent.prototype.getPage = function () {
        return {
            uiModel: this.pageInfo.uiModel,
            workflowConfig: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getInitialWorkflowConfig"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ variableResolver: src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_4__["Variables"] }, this.pageInfo.workflows))
        };
    };
    DynamicPageComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicPageComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DynamicPageComponent.prototype, "dataModel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicPageComponent.prototype, "changed", void 0);
    DynamicPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-page',
            template: __webpack_require__(/*! raw-loader!./dynamic-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/dynamic-page/dynamic-page.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-page.component.scss */ "./src/app/rest-client/components/dynamic-page/dynamic-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], DynamicPageComponent);
    return DynamicPageComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/dynamic-workflow/dynamic-workflow.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/rest-client/components/dynamic-workflow/dynamic-workflow.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DynamicWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicWorkflowComponent", function() { return DynamicWorkflowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./src/app/rest-client/utils.ts");











var DynamicWorkflowComponent = /** @class */ (function () {
    function DynamicWorkflowComponent(document, componentFactoryResolver, appRef, injector) {
        this.document = document;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(DynamicWorkflowComponent.prototype, "dataModel", {
        set: function (val) {
            this.data = val;
            this.initializeWorkflow();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicWorkflowComponent.prototype, "defaultMap", {
        get: function () {
            var _a;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getInitialWorkflowConfig"])({
                workflowsMap: (_a = {},
                    _a[_models__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].PRE_REQUEST] = [],
                    _a[_models__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].POST_REQUEST_SUCCESS] = [],
                    _a[_models__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].POST_REQUEST_ERROR] = [],
                    _a)
            });
        },
        enumerable: true,
        configurable: true
    });
    DynamicWorkflowComponent.prototype.ngOnInit = function () {
        this.workflowConfig = this.config || this.defaultMap;
        this.initializeWorkflow();
    };
    DynamicWorkflowComponent.prototype.ngOnChanges = function (_a) {
        var config = _a.config;
        if (!config.firstChange && this.workflowConfig !== config.currentValue) {
            this.workflowConfig = config.currentValue || this.defaultMap;
            this.workflowEditor.setValue(Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["formatObjToJsonStr"])(this.workflowConfig), -1);
            this.initializeWorkflow();
        }
    };
    DynamicWorkflowComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.workflowEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_3__["edit"])(this.workflowEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["formatObjToJsonStr"])(this.workflowConfig)
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.workflowEditor, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () {
            try {
                _this.error = null;
                return JSON.parse(_this.workflowEditor.getValue());
            }
            catch (e) {
                _this.error = e.message;
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (v) { return Boolean(v); })).subscribe(function (v) {
            _this.workflowConfig = v;
            _this.changed.emit(_this);
        });
    };
    DynamicWorkflowComponent.prototype.initializeWorkflow = function () {
        var _this = this;
        var vars = { dataModel: this.data };
        var config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.workflowConfig, { failOnError: true, include: ['@common'], variableResolver: src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__["Variables"] });
        this.workflowEngine = new _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["WorkflowEngine"](config);
        this.workflowEngine.hasWorkflow('run').then(function (init) {
            if (init && _this.data) {
                _this.workflowEngine.run('run');
            }
        });
    };
    DynamicWorkflowComponent.prototype.onWorkflowEdit = function () {
        var _this = this;
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["WorkflowEditorComponent"]).create(this.injector);
        this.workflowsMapEdit = componentRef.instance;
        this.workflowsMapEdit.config = this.workflowConfig.workflowsMap;
        this.workflowsMapEdit.modal.onHide.subscribe(function () {
            componentRef.destroy();
        });
        this.workflowsMapEdit.change.subscribe(function () {
            _this.workflowEditor.setValue(Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["formatObjToJsonStr"])(_this.workflowConfig), -1);
        });
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        this.document.body.appendChild(domElem);
        setTimeout(function () {
            _this.workflowsMapEdit.openModal();
        });
    };
    DynamicWorkflowComponent.prototype.preRequestActions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workflowEngine.run(_models__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].PRE_REQUEST)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicWorkflowComponent.prototype.resize = function () {
        this.workflowEditor.resize();
    };
    DynamicWorkflowComponent.prototype.getData = function () {
        try {
            return JSON.parse(this.workflowEditor.getValue());
        }
        catch (e) {
            throw Error("Workflow error: " + e.message);
        }
    };
    DynamicWorkflowComponent.prototype.formatJSON = function (format) {
        if (format === void 0) { format = true; }
        try {
            this.error = null;
            var workflowsMap = JSON.parse(this.workflowEditor.getValue());
            if (format) {
                this.workflowEditor.setValue(Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["formatObjToJsonStr"])(workflowsMap), -1);
            }
            else {
                this.workflowEditor.setValue(JSON.stringify(workflowsMap), -1);
            }
        }
        catch (e) {
            this.error = e;
        }
    };
    DynamicWorkflowComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicWorkflowComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DynamicWorkflowComponent.prototype, "dataModel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicWorkflowComponent.prototype, "changed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('workflowEl', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DynamicWorkflowComponent.prototype, "workflowEl", void 0);
    DynamicWorkflowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-workflow',
            template: "\n    <alert type=\"danger\" *ngIf=\"error\">\n      <strong>Error:</strong> {{error}}\n    </alert>\n    <div #workflowEl class=\"h-100 ace-editor\"></div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DynamicWorkflowComponent);
    return DynamicWorkflowComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/environments/environments.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/rest-client/components/environments/environments.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > a {\n  cursor: pointer;\n  width: 70px;\n}\n\n.dropdown-item {\n  cursor: pointer;\n}\n\n#env-btn-group label:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n#env-btn-group > label:last-of-type {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.line {\n  border-bottom: 1px solid #c8ced3;\n}\n\nalert ::ng-deep .alert {\n  width: 100%;\n}\n\n.var-img {\n  max-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FDREY7O0FESUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDREY7O0FESUE7RUFDRSxnQ0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0ID4gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZW52LWJ0bi1ncm91cCBsYWJlbDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuI2Vudi1idG4tZ3JvdXAgPiBsYWJlbDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xufVxuXG4ubGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2Vjb25kYXJ5O1xufVxuXG5hbGVydCA6Om5nLWRlZXAgLmFsZXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52YXItaW1nIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbn1cbiIsIjpob3N0ID4gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZW52LWJ0bi1ncm91cCBsYWJlbDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuI2Vudi1idG4tZ3JvdXAgPiBsYWJlbDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGNlZDM7XG59XG5cbmFsZXJ0IDo6bmctZGVlcCAuYWxlcnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZhci1pbWcge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/environments/environments.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/rest-client/components/environments/environments.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EnvironmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentsComponent", function() { return EnvironmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _services_environment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/environment.service */ "./src/app/rest-client/services/environment.service.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");











var EnvironmentsComponent = /** @class */ (function () {
    function EnvironmentsComponent(modalService, envService, authService, store) {
        this.modalService = modalService;
        this.envService = envService;
        this.authService = authService;
        this.store = store;
        this.newEnvironment = {
            name: null,
            variables: [
                { name: '', value: null }
            ]
        };
        this.environments = [];
        this.variables = [{ name: '', value: null }];
        this.localVariables = [];
        this.envVariables = [];
        this.selectedEnvironment = null;
        this.isAuthenticated = false;
    }
    EnvironmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthenticated$.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
            if (isAuth) {
                _this.loadEnvVariables$().subscribe(function () {
                    if (_this.environments.length) {
                        if (_this.environments.includes(src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].currentEnv)) {
                            _this.onEnvSelect(src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].currentEnv);
                        }
                        else {
                            _this.onEnvSelect(_this.environments[0]);
                        }
                        _this.modalService.onHide.subscribe(function () { return _this.resetEnvForm(); });
                    }
                });
            }
            else {
                _this.envs = {};
                _this.environments = [];
            }
        });
    };
    EnvironmentsComponent.prototype.onEnvSelect = function (env) {
        this.selectedEnvironment = env;
        var variables = Object.entries(this.envs[this.selectedEnvironment]).map(function (_a) {
            var name = _a[0], value = _a[1];
            return ({ name: name, value: value });
        });
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].addVariables(variables);
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].currentEnv = this.selectedEnvironment;
    };
    EnvironmentsComponent.prototype.onAppVarEnvChange = function (evt) {
        this.onEnvSelect(evt.target.value);
        this.setAppVariables();
    };
    EnvironmentsComponent.prototype.editEnv = function () {
        if (!this.selectedEnvironment) {
            this.setNewEnv();
        }
        else {
            this.formSelectedEnv = this.selectedEnvironment;
            this.setSelectEnv();
        }
        this.modalRef = this.modalService.show(this.envTemplate, { class: 'modal-lg' });
    };
    EnvironmentsComponent.prototype.setNewEnv = function () {
        this.newEnv = true;
        this.formSelectedEnv = null;
        this.cleanUpEnvFormVars();
    };
    EnvironmentsComponent.prototype.setSelectEnv = function () {
        if (this.formSelectedEnv) {
            this.environment = {
                name: this.formSelectedEnv,
                variables: Object.entries(this.editableEnvs[this.formSelectedEnv]).map(function (_a) {
                    var name = _a[0], value = _a[1];
                    return ({ name: name, value: value });
                })
            };
        }
        else {
            this.cleanUpEnvFormVars();
        }
        this.newEnv = false;
    };
    EnvironmentsComponent.prototype.editAppVar = function () {
        this.setAppVariables();
        this.modalRef = this.modalService.show(this.appVarTemplate, { class: 'modal-lg' });
    };
    EnvironmentsComponent.prototype.deleteEnv = function () {
        var _this = this;
        this.editableEnvs = this.envs;
        var envToDelete = this.formSelectedEnv;
        delete this.editableEnvs[envToDelete];
        this.saveEnvs$().subscribe(function () {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_9__["AppInfoAction"]("Environment " + envToDelete + " successfully deleted"));
            if (_this.selectedEnvironment === envToDelete) {
                _this.selectedEnvironment = null;
                src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].currentEnv = null;
            }
        }, function () {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_9__["AppErrorAction"]('Failed to delete environment'));
        });
    };
    EnvironmentsComponent.prototype.onEnvSubmit = function () {
        var _this = this;
        if (this.newEnv) {
            this.editableEnvs[this.environment.name] = this.environment.variables.reduce(function (prev, val) {
                prev[val.name] = val.value;
                return prev;
            }, {});
            this.formSelectedEnv = this.environment.name;
        }
        var newProps = this.environment.variables.map(function (_a) {
            var name = _a.name;
            return name;
        });
        // Add new fields to all envs.
        Object.entries(this.editableEnvs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var keys = Object.keys(value);
            newProps.forEach(function (prop) {
                if (!keys.includes(prop)) {
                    value[prop] = null;
                }
            });
        });
        this.saveEnvs$(this.formSelectedEnv).subscribe(function () {
            if (_this.modalRef) {
                _this.modalRef.hide();
            }
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_9__["AppInfoAction"]('Environment changes successfully updated'));
            src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].currentEnv = _this.selectedEnvironment;
        }, function (e) {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_9__["AppErrorAction"]('Failed to save environment'));
        });
    };
    EnvironmentsComponent.prototype.onEnvVarNameChanged = function (evt, name) {
        Object.entries(this.editableEnvs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var val = value[name];
            value[evt] = val || null;
            delete value[name];
        });
    };
    EnvironmentsComponent.prototype.onEnvFormChange = function () {
        this.setSelectEnv();
    };
    EnvironmentsComponent.prototype.onEnvVarValueChanged = function (evt, name) {
        if (this.formSelectedEnv) {
            this.editableEnvs[this.formSelectedEnv][name] = evt;
        }
    };
    EnvironmentsComponent.prototype.onAppVarSubmit = function () {
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].setVariables([]);
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].addVariables(this.envVariables);
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].addVariables(this.localVariables);
        this.modalRef.hide();
    };
    EnvironmentsComponent.prototype.deleteAppVariable = function (index) {
        this.localVariables.splice(index, 1);
    };
    EnvironmentsComponent.prototype.addAppVariable = function () {
        this.localVariables.push({ name: '', value: '' });
    };
    EnvironmentsComponent.prototype.deleteVariable = function (index, name) {
        Object.entries(this.editableEnvs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            delete value[name];
        });
        this.environment.variables.splice(index, 1);
    };
    EnvironmentsComponent.prototype.addVariable = function () {
        this.environment.variables.push({ name: '', value: '' });
    };
    EnvironmentsComponent.prototype.resetEnvForm = function () {
        this.editableEnvs = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["deepClone"])(this.envs);
    };
    EnvironmentsComponent.prototype.loadEnvVariables$ = function () {
        var _this = this;
        return this.envService.getEnvVariables$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (envs) {
            _this.envs = envs;
            _this.resetEnvForm();
            _this.environments = envs ? Object.keys(envs) : [];
            _this.setNewEnv();
            if (!_this.environments.includes(_this.selectedEnvironment)) {
                _this.selectedEnvironment = null;
            }
            if (!_this.environments.includes(_this.formSelectedEnv)) {
                _this.formSelectedEnv = null;
            }
            return envs;
        }));
    };
    EnvironmentsComponent.prototype.saveEnvs$ = function (newEnv) {
        var _this = this;
        return this.envService.saveEnvVariables$({ EnvironmentVariables: this.editableEnvs }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.loadEnvVariables$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                if (newEnv) {
                    _this.onEnvSelect(newEnv);
                }
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Failed to save environment');
        }));
    };
    EnvironmentsComponent.prototype.cleanUpEnvFormVars = function () {
        if (this.environments.length) {
            this.newEnvironment.variables = Object.keys(this.editableEnvs[this.environments[0]]).map(function (name) { return ({ name: name, value: null }); });
        }
        this.environment = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.newEnvironment);
    };
    EnvironmentsComponent.prototype.getEnvKeys = function () {
        if (this.environments.length) {
            return Object.keys(Object.values(this.envs)[0]);
        }
        return [];
    };
    EnvironmentsComponent.prototype.setAppVariables = function () {
        var _this = this;
        this.variables = Object.entries(src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].variables).map(function (_a) {
            var name = _a[0], value = _a[1];
            return ({ name: name, value: value });
        });
        if (!this.variables.length) {
            this.variables = [{ name: '', value: null }];
        }
        this.localVariables = this.variables.filter(function (e) { return !_this.getEnvKeys().includes(e.name); });
        this.envVariables = this.variables.filter(function (e) { return _this.getEnvKeys().includes(e.name); });
    };
    EnvironmentsComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _services_environment_service__WEBPACK_IMPORTED_MODULE_8__["EnvironmentService"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('envTemplate', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], EnvironmentsComponent.prototype, "envTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appVarTemplate', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], EnvironmentsComponent.prototype, "appVarTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], EnvironmentsComponent.prototype, "modal", void 0);
    EnvironmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-environments',
            template: __webpack_require__(/*! raw-loader!./environments.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/environments/environments.component.html"),
            styles: [__webpack_require__(/*! ./environments.component.scss */ "./src/app/rest-client/components/environments/environments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _services_environment_service__WEBPACK_IMPORTED_MODULE_8__["EnvironmentService"],
            src_app_security__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], EnvironmentsComponent);
    return EnvironmentsComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/history/history.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/rest-client/components/history/history.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i.fa.fa-play {\n  color: #20a8d8;\n}\n\n.btn-group .btn {\n  -webkit-box-flex: 0;\n          flex: 0 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQzZCVztBQzlCYjs7QUZJQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBRURGIiwiZmlsZSI6InNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2Nzc1wiO1xuXG5pLmZhLmZhLXBsYXkge1xuICBjb2xvcjogJGJsdWU7XG59XG5cbi5idG4tZ3JvdXAgLmJ0biB7XG4gIGZsZXg6IDAgMCA1MHB4O1xufVxuIiwiLy8gQ29sb3Igc3lzdGVtXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcblxyXG4kd2hpdGU6ICAgICAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMTgxYjFlICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAjZjBmM2Y1ICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDg1JSk7XHJcbiRncmF5LTIwMDogICNlNGU3ZWEgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODAlKTtcclxuJGdyYXktMzAwOiAgI2M4Y2VkMyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA3MCUpO1xyXG4kZ3JheS00MDA6ICAjYWNiNGJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDYwJSk7XHJcbiRncmF5LTUwMDogICM4ZjliYTYgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNTAlKTtcclxuJGdyYXktNjAwOiAgIzczODE4ZiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA0MCUpO1xyXG4kZ3JheS03MDA6ICAjNWM2ODczICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDMwJSk7XHJcbiRncmF5LTgwMDogICMyZjM1M2EgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTAlKTtcclxuJGdyYXktOTAwOiAgIzIzMjgyYyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1JSk7XHJcbiRibGFjazogICAgICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICAgICAgICMyMGE4ZDggIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAgICAjNjYxMGYyICFkZWZhdWx0O1xyXG4kcHVycGxlOiAgICAgIzZmNDJjMSAhZGVmYXVsdDtcclxuJHBpbms6ICAgICAgICNlODNlOGMgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAjZjg2YzZiICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAgICAgI2Y4Y2IwMCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICNmZmMxMDcgIWRlZmF1bHQ7XHJcbiRncmVlbjogICAgICAjNGRiZDc0ICFkZWZhdWx0O1xyXG4kdGVhbDogICAgICAgIzIwYzk5NyAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICMxN2EyYjggIWRlZmF1bHQ7XHJcbiRsaWdodC1ibHVlOiAjNjNjMmRlICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXHJcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcclxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxyXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxyXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXHJcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcclxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcclxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcclxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcclxuICAgIFwibGlnaHQtYmx1ZVwiOiAkbGlnaHQtYmx1ZSxcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxyXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgJGxpZ2h0LWJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIEJyYW5kIENvbG9yc1xyXG5cclxuJGZhY2Vib29rOiAgICAgICAjM2I1OTk4ICFkZWZhdWx0O1xyXG4kdHdpdHRlcjogICAgICAgICMwMGFjZWQgIWRlZmF1bHQ7XHJcbiRsaW5rZWRpbjogICAgICAgIzQ4NzViNCAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjZDM0ODM2ICFkZWZhdWx0O1xyXG4kZmxpY2tyOiAgICAgICAgICNmZjAwODQgIWRlZmF1bHQ7XHJcbiR0dW1ibHI6ICAgICAgICAgIzMyNTA2ZCAhZGVmYXVsdDtcclxuJHhpbmc6ICAgICAgICAgICAjMDI2NDY2ICFkZWZhdWx0O1xyXG4kZ2l0aHViOiAgICAgICAgICM0MTgzYzQgIWRlZmF1bHQ7XHJcbiRodG1sNTogICAgICAgICAgI2UzNGYyNiAhZGVmYXVsdDtcclxuJG9wZW5pZDogICAgICAgICAjZjc4YzQwICFkZWZhdWx0O1xyXG4kc3RhY2stb3ZlcmZsb3c6ICNmZTdhMTUgIWRlZmF1bHQ7XHJcbiR5b3V0dWJlOiAgICAgICAgI2IwMCAhZGVmYXVsdDtcclxuJGNzczM6ICAgICAgICAgICAjMDE3MGJhICFkZWZhdWx0O1xyXG4kZHJpYmJibGU6ICAgICAgICNlYTRjODkgIWRlZmF1bHQ7XHJcbiRnb29nbGUtcGx1czogICAgI2JiNGIzOSAhZGVmYXVsdDtcclxuJGluc3RhZ3JhbTogICAgICAjNTE3ZmE0ICFkZWZhdWx0O1xyXG4kcGludGVyZXN0OiAgICAgICNjYjIwMjcgIWRlZmF1bHQ7XHJcbiR2azogICAgICAgICAgICAgIzQ1NjY4ZSAhZGVmYXVsdDtcclxuJHlhaG9vOiAgICAgICAgICAjNDAwMTkxICFkZWZhdWx0O1xyXG4kYmVoYW5jZTogICAgICAgICMxNzY5ZmYgIWRlZmF1bHQ7XHJcbiRkcm9wYm94OiAgICAgICAgIzAwN2VlNSAhZGVmYXVsdDtcclxuJHJlZGRpdDogICAgICAgICAjZmY0NTAwICFkZWZhdWx0O1xyXG4kc3BvdGlmeTogICAgICAgICM3YWI4MDAgIWRlZmF1bHQ7XHJcbiR2aW5lOiAgICAgICAgICAgIzAwYmY4ZiAhZGVmYXVsdDtcclxuJGZvdXJzcXVhcmU6ICAgICAjMTA3M2FmICFkZWZhdWx0O1xyXG4kdmltZW86ICAgICAgICAgICNhYWQ0NTAgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmRzLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRicmFuZHMtY29sb3JzOiBtYXAtbWVyZ2UoKFxyXG4gIFwiZmFjZWJvb2tcIjogICAgICAgJGZhY2Vib29rLFxyXG4gIFwidHdpdHRlclwiOiAgICAgICAgJHR3aXR0ZXIsXHJcbiAgXCJsaW5rZWRpblwiOiAgICAgICAkbGlua2VkaW4sXHJcbiAgXCJnb29nbGUtcGx1c1wiOiAgICAkZ29vZ2xlLXBsdXMsXHJcbiAgXCJmbGlja3JcIjogICAgICAgICAkZmxpY2tyLFxyXG4gIFwidHVtYmxyXCI6ICAgICAgICAgJHR1bWJscixcclxuICBcInhpbmdcIjogICAgICAgICAgICR4aW5nLFxyXG4gIFwiZ2l0aHViXCI6ICAgICAgICAgJGdpdGh1YixcclxuICBcImh0bWw1XCI6ICAgICAgICAgICRodG1sNSxcclxuICBcIm9wZW5pZFwiOiAgICAgICAgICRvcGVuaWQsXHJcbiAgXCJzdGFjay1vdmVyZmxvd1wiOiAkc3RhY2stb3ZlcmZsb3csXHJcbiAgXCJ5b3V0dWJlXCI6ICAgICAgICAkeW91dHViZSxcclxuICBcImNzczNcIjogICAgICAgICAgICRjc3MzLFxyXG4gIFwiZHJpYmJibGVcIjogICAgICAgJGRyaWJiYmxlLFxyXG4gIFwiaW5zdGFncmFtXCI6ICAgICAgJGluc3RhZ3JhbSxcclxuICBcInBpbnRlcmVzdFwiOiAgICAgICRwaW50ZXJlc3QsXHJcbiAgXCJ2a1wiOiAgICAgICAgICAgICAkdmssXHJcbiAgXCJ5YWhvb1wiOiAgICAgICAgICAkeWFob28sXHJcbiAgXCJiZWhhbmNlXCI6ICAgICAgICAkYmVoYW5jZSxcclxuICBcImRyb3Bib3hcIjogICAgICAgICRkcm9wYm94LFxyXG4gIFwicmVkZGl0XCI6ICAgICAgICAgJHJlZGRpdCxcclxuICBcInNwb3RpZnlcIjogICAgICAgICRzcG90aWZ5LFxyXG4gIFwidmluZVwiOiAgICAgICAgICAgJHZpbmUsXHJcbiAgXCJmb3Vyc3F1YXJlXCI6ICAgICAkZm91cnNxdWFyZSxcclxuICBcInZpbWVvXCI6ICAgICAgICAgICR2aW1lb1xyXG4pLCAkYnJhbmRzLWNvbG9ycyk7XHJcbiIsImkuZmEuZmEtcGxheSB7XG4gIGNvbG9yOiAjMjBhOGQ4O1xufVxuXG4uYnRuLWdyb3VwIC5idG4ge1xuICBmbGV4OiAwIDAgNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/rest-client/components/history/history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/rest-client/components/history/history.component.ts ***!
  \*********************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _requests_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../requests-history */ "./src/app/rest-client/requests-history.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/app/rest-client/utils.ts");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/utils */ "./src/app/rest-client/store/utils.ts");









var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(store, router) {
        this.store = store;
        this.router = router;
        this.requests = [];
        this.groupBy = {
            groupDate: true,
            url: false
        };
        this.grouping = this.dateGrouping;
        this.showTime = false;
        this.showFullUrl = false;
        this.getScriptName = _utils__WEBPACK_IMPORTED_MODULE_7__["getScriptName"];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        _requests_history__WEBPACK_IMPORTED_MODULE_5__["RequestsHistoryManager"].onRequestSave(function (req, isNew) {
            var newItem = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["deepClone"])(req);
            if (isNew) {
                _this.requests = _this.requests.concat([newItem]);
                _this.list.selectItem(newItem);
            }
            else {
                var index = _this.requests.findIndex(function (item) {
                    return _requests_history__WEBPACK_IMPORTED_MODULE_5__["RequestsHistoryManager"].equals(item, newItem);
                });
                _this.requests = _this.requests.slice(0, index).concat([newItem], _this.requests.slice(index + 1));
                _this.list.selectItem(newItem);
            }
        });
        this.requests = _requests_history__WEBPACK_IMPORTED_MODULE_5__["RequestsHistoryManager"].getSavedRequests() || [];
    };
    HistoryComponent.prototype.onDateGroupClick = function () {
        if (this.groupBy.groupDate) {
            this.groupBy.url = false;
            this.grouping = this.dateGrouping;
        }
        else {
            this.grouping = null;
        }
    };
    HistoryComponent.prototype.onDomainGroupClick = function () {
        if (this.groupBy.url) {
            this.groupBy.groupDate = false;
            this.grouping = this.domainGrouping;
        }
        else {
            this.grouping = null;
        }
    };
    HistoryComponent.prototype.onSelect = function (item) {
        if (!item) {
            return null;
        }
        if (item.hasOwnProperty('request')) {
            var content = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["deepClone"])(item);
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateUiSettings"](content.uiSettings));
            Object(_store_utils__WEBPACK_IMPORTED_MODULE_8__["updateStore"])(this.store, content, '/rest-client');
        }
        else if (item.scripts) {
            Object(_store_utils__WEBPACK_IMPORTED_MODULE_8__["updateStore"])(this.store, { scripts: item.scripts }, '/rest-client/scripted-request');
        }
    };
    HistoryComponent.prototype.searchHitoryItem = function (str, item) {
        return [item.request.method, item.request.url, item.responseInfo.status].join().toLowerCase().includes(str);
    };
    HistoryComponent.prototype.getDisplayUrl = function (url) {
        if (!url || url.length < 26) {
            return url;
        }
        return this.showFullUrl ? url : ('...' + url.slice(-25));
    };
    HistoryComponent.prototype.dateGrouping = function (item) {
        return new Date(item.responseInfo.date).toDateString();
    };
    HistoryComponent.prototype.domainGrouping = function (item) {
        return item.request ? Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["getDomain"])(item.request.url) : 'script';
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"])
    ], HistoryComponent.prototype, "list", void 0);
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/rest-client/components/history/history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/request/request.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/rest-client/components/request/request.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header a {\n  cursor: pointer;\n}\n.card-header a .fa-chevron-right {\n  width: 14px;\n}\n.dropdown-item {\n  cursor: pointer;\n}\n.dropdown-menu {\n  min-width: auto;\n}\n.method-group {\n  -webkit-box-flex: 0;\n          flex: 0 0 110px;\n}\n@media (max-width: 575.98px) {\n  .form-group {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: baseline;\n            align-items: baseline;\n  }\n\n  .method-group {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n  }\n\n  .actions-group {\n    width: 100%;\n    margin-top: 0.5rem;\n  }\n}\n.body-editor {\n  min-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92a3VrdXJiYS9EZXZlbG9wbWVudC9Qcm9qZWN0cy91cHdvcmsvd29ya3NoZWV0czItYXBwL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7QUNESjtBREtBO0VBQ0UsZUFBQTtBQ0ZGO0FES0E7RUFDRSxlQUFBO0FDRkY7QURLQTtFQUNFLG1CQUFBO1VBQUEsZUFBQTtBQ0ZGO0FDd0RJO0VGbERGO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLDJCQUFBO1lBQUEscUJBQUE7RUNGRjs7RURLQTtJQUNFLG1CQUFBO1lBQUEsY0FBQTtFQ0ZGOztFREtBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvcmVxdWVzdC9yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvbWVkaWFcIjtcblxuLmNhcmQtaGVhZGVyIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLmZhLWNoZXZyb24tcmlnaHQge1xuICAgIHdpZHRoOiAxNHB4O1xuICB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLm1ldGhvZC1ncm91cCB7XG4gIGZsZXg6IDAgMCAxMTBweDtcbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgfVxuXG4gIC5tZXRob2QtZ3JvdXAge1xuICAgIGZsZXg6IDAgMCA4MHB4O1xuICB9XG5cbiAgLmFjdGlvbnMtZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICB9XG59XG5cbi5ib2R5LWVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDI4cHg7XG59XG4iLCIuY2FyZC1oZWFkZXIgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLWhlYWRlciBhIC5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgd2lkdGg6IDE0cHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLm1ldGhvZC1ncm91cCB7XG4gIGZsZXg6IDAgMCAxMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgfVxuXG4gIC5tZXRob2QtZ3JvdXAge1xuICAgIGZsZXg6IDAgMCA4MHB4O1xuICB9XG5cbiAgLmFjdGlvbnMtZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxufVxuLmJvZHktZWRpdG9yIHtcbiAgbWluLWhlaWdodDogMjhweDtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/request/request.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/rest-client/components/request/request.component.ts ***!
  \*********************************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./src/app/rest-client/store/index.ts");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/utils */ "./src/app/rest-client/store/utils.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/rest-client/store/selectors/index.ts");
/* harmony import */ var _curl_form_curl_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../curl-form/curl-form.component */ "./src/app/rest-client/components/curl-form/curl-form.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils */ "./src/app/rest-client/utils.ts");
/* harmony import */ var _save_request_save_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../save-request/save-request.component */ "./src/app/rest-client/components/save-request/save-request.component.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/requests.service */ "./src/app/rest-client/services/requests.service.ts");
/* harmony import */ var _script_script_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../script/script.component */ "./src/app/rest-client/components/script/script.component.ts");



















var RequestComponent = /** @class */ (function () {
    function RequestComponent(authService, store, fileManager, loginService, dialogService, requestsService) {
        this.authService = authService;
        this.store = store;
        this.fileManager = fileManager;
        this.loginService = loginService;
        this.dialogService = dialogService;
        this.requestsService = requestsService;
        this.collapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scriptResult = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minCardBodyHeight = 90; // 230
        this.newRequestLink = {
            ownerName: null,
            name: null,
            folder: null,
            description: null,
            linkType: _models__WEBPACK_IMPORTED_MODULE_9__["LinkType"].RestRequest
        };
        this.explorerUIModel = {
            type: 'rest-client:grid-object-explorer',
            containerProperties: {},
            itemProperties: {
                dataSource: null,
                isReadOnly: false,
                allowDelete: true,
                allowAddNew: true,
                host: 'request-body-object-explorer',
                selectionMode: 4
            }
        };
        this.isCollapsed = true;
        this.saveRequestLink = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.newRequestLink);
        this.isAuthenticated = false;
        this.formatted = false;
        this.defaultScript = [
            'def preRequest(request):',
            '  request.cancelRequest = False\n',
            'def successResponse(response):',
            '  showInObjectExplorer(response.body, "Content")',
            '  showInJSON(response.headers, "Header")\n',
            'def errorResponse(response):',
            '  showInObjectExplorer(response.body, "Error")',
            '  showInJSON(response.headers, "Header")'
        ].join('\n');
        this.methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_10__["selectRequestModel"]));
        this.authService.isAuthenticated$.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
            if (isAuth) {
                var userName = _this.authService.user.userName;
                _this.saveRequestLink.ownerName = userName;
                _this.newRequestLink.ownerName = userName;
            }
        });
        this.request$.subscribe(function (requestModel) {
            _this.requestModel = requestModel;
            _this.bodyData = requestModel.body;
            if (_this.bodyEditor) {
                _this.bodyEditor.setReadOnly(_this.requestModel.method === 'GET');
            }
            _this.syncUrl();
        });
        this.isCollapsed$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])((function (state) { return state.requestModel.requestContentModel.uiSettings.isRequestPanelCollapsed; })));
        this.isCollapsed$.subscribe(function (v) { return _this.isCollapsed = v; });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_10__["selectRequest"])).subscribe(function (data) {
            _this.exportData = data;
        });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_10__["selectRequestScript"])).subscribe(function (script) {
            _this.script.setScript(script || _this.defaultScript);
        });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_13__["selectActiveRequest"])).subscribe(function (request) {
            _this.selectedSavedRequestLink = request;
            _this.saveRequestLink = request || tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.newRequestLink);
        });
    };
    RequestComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    Object.defineProperty(RequestComponent.prototype, "isFormatActionActive", {
        get: function () {
            return this.requestTabs.tabs[0].active && this.requestModel.method !== 'GET' || this.requestTabs.tabs[3].active;
        },
        enumerable: true,
        configurable: true
    });
    RequestComponent.prototype.onUrlInput = function () {
        this.syncUrl();
        this.updateModel();
    };
    RequestComponent.prototype.formatJSON = function (format) {
        if (format === void 0) { format = true; }
        try {
            if (this.requestTabs.tabs[0].active) {
                this.bodyEditor.formatJSON(format);
            }
            this.formatted = format;
            this.error = null;
        }
        catch (e) {
            console.error(e);
            this.error = e;
            this.formatted = false;
        }
    };
    RequestComponent.prototype.updateModel = function () {
        this.error = null;
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateRequestModel"](this.requestModel));
    };
    RequestComponent.prototype.isRequestValid = function () {
        if (!this.requestModel.body) {
            return true;
        }
        try {
            return this.bodyEditor.isValid();
        }
        catch (e) {
            this.error = e.message;
            return false;
        }
    };
    RequestComponent.prototype.selectMethod = function (method) {
        this.requestModel.method = method;
        this.updateModel();
        this.bodyEditor.setReadOnly(method === 'GET');
        this.bodyData = method === 'GET' ? undefined : {};
    };
    RequestComponent.prototype.sendRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var scripts, sendStatus;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isRequestValid()) return [3 /*break*/, 2];
                        if (this.requestModel.method !== 'GET' && this.bodyEditor.dataModel) {
                            this.requestModel.body = JSON.stringify(this.bodyEditor.dataModel);
                        }
                        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["ClearResponse"]());
                        scripts = this.script.getScript();
                        this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_12__["setScripts"])({ scripts: scripts }));
                        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["SendRequest"](this.requestModel));
                        this.script.restInterpreter.reset();
                        return [4 /*yield*/, this.requestsService.sendRequest(this.requestModel, scripts, this.script.restInterpreter)];
                    case 1:
                        sendStatus = _a.sent();
                        this.scriptResult.emit(this.script.context);
                        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["RecieveResponse"](sendStatus.response, sendStatus.status));
                        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["SaveRequestInHistory"](sendStatus.status));
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RequestComponent.prototype.getSize = function (isCollapsed) {
        if (isCollapsed === void 0) { isCollapsed = false; }
        var headerH = this.header.nativeElement.offsetHeight;
        var minHeight = this.minCardBodyHeight + headerH;
        var defaultHeight = minHeight + 200;
        return {
            height: isCollapsed ? headerH : defaultHeight,
            minHeight: minHeight
        };
    };
    RequestComponent.prototype.toggleCard = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateUiSettings"]({
            isRequestPanelCollapsed: !this.isCollapsed
        }));
    };
    RequestComponent.prototype.addQueryParam = function () {
        this.requestModel.queryParameters.push({ name: '', value: '', active: true });
        this.syncQueryParams();
        this.updateModel();
    };
    RequestComponent.prototype.deleteQueryParam = function (index) {
        this.requestModel.queryParameters.splice(index, 1);
        this.syncQueryParams();
        this.updateModel();
    };
    RequestComponent.prototype.addHeader = function () {
        this.requestModel.headers.push({ name: '', value: '', active: true });
        this.updateModel();
    };
    RequestComponent.prototype.deleteHeader = function (index) {
        this.requestModel.headers.splice(index, 1);
        this.updateModel();
    };
    RequestComponent.prototype.onBodyTabSelect = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.bodyEditor.setReadOnly(_this.requestModel.method === 'GET');
            _this.bodyEditor.resize();
        });
    };
    RequestComponent.prototype.onNewRequest = function () {
        Object(_store_utils__WEBPACK_IMPORTED_MODULE_11__["updateStore"])(this.store);
    };
    RequestComponent.prototype.onDeleteRequest = function () {
        if (this.selectedSavedRequestLink) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["DeleteRequest"](this.selectedSavedRequestLink.id));
        }
        else {
            throw new Error('Saved request is not selected');
        }
    };
    RequestComponent.prototype.onFileExport = function () {
        var domain = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_7__["getDomain"])(this.exportData.requestContentModel.request.url);
        this.fileManager.exportToFile({ requestContentModel: Object(_utils__WEBPACK_IMPORTED_MODULE_15__["filterDynamicPagesVars"])(this.exportData.requestContentModel) }, {
            fileName: "rc-" + domain
        });
    };
    RequestComponent.prototype.onFileImport = function () {
        var _this = this;
        this.fileManager.importFromFile().subscribe(function (_a) {
            var result = _a.result;
            var requestContentModel = result.requestContentModel;
            Object(_store_utils__WEBPACK_IMPORTED_MODULE_11__["updateStore"])(_this.store, requestContentModel);
        }, function (error) {
            _this.error = error.message;
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateUiSettings"]({ isRequestPanelCollapsed: false }));
        });
    };
    RequestComponent.prototype.onCurlImport = function () {
        var _this = this;
        var importCurlDialog = this.dialogService.open(_curl_form_curl_form_component__WEBPACK_IMPORTED_MODULE_14__["CurlFormComponent"]);
        importCurlDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return importCurlDialog.component.import; })).subscribe(function (data) {
            Object(_store_utils__WEBPACK_IMPORTED_MODULE_11__["updateStore"])(_this.store, data);
        });
    };
    RequestComponent.prototype.onCurlExport = function () {
        var _this = this;
        var exportCurlDialog = this.dialogService.open(_curl_form_curl_form_component__WEBPACK_IMPORTED_MODULE_14__["CurlFormComponent"]);
        exportCurlDialog.init.pipe().subscribe(function () {
            exportCurlDialog.component.isExport = true;
            exportCurlDialog.component.exportData = _this.exportData.requestContentModel.request;
        });
    };
    RequestComponent.prototype.onSave = function () {
        var _this = this;
        if (this.isAuthenticated) {
            var saveDialog_1 = this.dialogService.open(_save_request_save_request_component__WEBPACK_IMPORTED_MODULE_16__["SaveRequestComponent"]);
            saveDialog_1.config = this.saveRequestLink;
            saveDialog_1.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return saveDialog_1.component.save; })).subscribe(function (data) {
                _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["SaveRequest"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.exportData.requestContentModel, data, { scripts: _this.script.getScript() })));
                saveDialog_1.component.modalRef.hide();
            });
        }
        else {
            this.loginService.openDialog();
        }
    };
    RequestComponent.prototype.resize = function () {
        this.bodyEditor.resize();
        this.script.resize();
    };
    RequestComponent.prototype.syncUrl = function () {
        var _this = this;
        if (this.requestModel.url) {
            var urlQuery = this.requestModel.url.split('?')[1];
            this.requestModel.queryParameters = [];
            if (urlQuery) {
                urlQuery.split('&').forEach(function (qp) {
                    var _a = qp.split('='), name = _a[0], value = _a[1];
                    _this.requestModel.queryParameters.push({ active: true, name: name, value: value ? decodeURIComponent(value) : null });
                });
            }
        }
    };
    RequestComponent.prototype.syncQueryParams = function () {
        var url = this.requestModel.url.split('?')[0];
        var queryStr = this.requestModel.queryParameters.filter(function (qp) { return qp.active && qp.name; }).map(function (qp) {
            return qp.name + "=" + encodeURIComponent(qp.value);
        }).join('&');
        this.requestModel.url = url + (queryStr ? "?" + queryStr : '');
    };
    RequestComponent.ctorParameters = function () { return [
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["FileManagerService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["DialogService"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_17__["RequestsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequestComponent.prototype, "collapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequestComponent.prototype, "scriptResult", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyEditor', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_7__["ContentExplorerComponent"])
    ], RequestComponent.prototype, "bodyEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('header', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RequestComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('requestTabs', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsetComponent"])
    ], RequestComponent.prototype, "requestTabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _script_script_component__WEBPACK_IMPORTED_MODULE_18__["ScriptComponent"])
    ], RequestComponent.prototype, "script", void 0);
    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! raw-loader!./request.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/request/request.component.html"),
            providers: [src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["FileManagerService"]],
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/rest-client/components/request/request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_security_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["FileManagerService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_8__["DialogService"],
            _services_requests_service__WEBPACK_IMPORTED_MODULE_17__["RequestsService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/response/response.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/rest-client/components/response/response.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "wj-flex-grid,\n.response-json {\n  width: auto;\n  height: 100%;\n  border: 1px solid #e4e7ea;\n}\n\n.response-container {\n  padding: 8px;\n}\n\ntabset ::ng-deep .nav-link.active > .bs-remove-tab {\n  display: inline;\n}\n\ntabset ::ng-deep .nav.nav-tabs .nav-item.content {\n  display: none;\n}\n\ntabset.show-content ::ng-deep .nav.nav-tabs .nav-item.content {\n  display: block;\n}\n\ntabset ::ng-deep .nav.nav-tabs .nav-item.header {\n  display: none;\n}\n\ntabset.show-header ::ng-deep .nav.nav-tabs .nav-item.header {\n  display: block;\n}\n\ntabset ::ng-deep .nav.nav-tabs .nav-item.explorer {\n  display: none;\n}\n\ntabset.show-explorer ::ng-deep .nav.nav-tabs .nav-item.explorer {\n  display: block;\n}\n\ntabset ::ng-deep .nav.nav-tabs .nav-item.page {\n  display: none;\n}\n\ntabset.show-page ::ng-deep .nav.nav-tabs .nav-item.page {\n  display: block;\n}\n\ntabset ::ng-deep .nav.nav-tabs .nav-item.workflow {\n  display: none;\n}\n\ntabset.show-workflow ::ng-deep .nav.nav-tabs .nav-item.workflow {\n  display: block;\n}\n\n.bs-remove-tab {\n  display: none;\n}\n\n.bs-remove-tab:hover {\n  cursor: pointer;\n  color: #2f353a;\n}\n\n.dropdown-item {\n  cursor: pointer;\n}\n\n.dropdown-option {\n  white-space: nowrap;\n  padding: 10px 20px;\n}\n\n.dropdown-option:hover {\n  background: #e4e7ea;\n}\n\n.dropdown-option label,\n.dropdown-option input {\n  cursor: pointer;\n}\n\n.left-menu {\n  left: auto !important;\n  right: 0 !important;\n  min-width: 100px;\n}\n\n.tabs-actions {\n  z-index: 7;\n}\n\n.tabs-options input {\n  vertical-align: middle;\n  margin-bottom: 3px;\n}\n\n::ng-deep .workflow-logs-container.popover {\n  max-width: 400px;\n  width: 400px;\n}\n\nalert ::ng-deep > .alert {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3Jlc3BvbnNlL3Jlc3BvbnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3Jlc3BvbnNlL3Jlc3BvbnNlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9zcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURLRTtFQUNFLGVBQUE7QUNGSjs7QURTRTtFQUNFLGFBQUE7QUNOSjs7QURTRTtFQUNFLGNBQUE7QUNOSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURDRTtFQUNFLGNBQUE7QUNFSjs7QURQRTtFQUNFLGFBQUE7QUNVSjs7QURQRTtFQUNFLGNBQUE7QUNVSjs7QURmRTtFQUNFLGFBQUE7QUNrQko7O0FEZkU7RUFDRSxjQUFBO0FDa0JKOztBRHZCRTtFQUNFLGFBQUE7QUMwQko7O0FEdkJFO0VBQ0UsY0FBQTtBQzBCSjs7QUR0QkE7RUFDRSxhQUFBO0FDeUJGOztBRHRCQTtFQUNFLGVBQUE7RUFDQSxjRXpCVTtBRGtEWjs7QUR0QkE7RUFDRSxlQUFBO0FDeUJGOztBRHRCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUN5QkY7O0FEdkJFO0VBQ0UsbUJFM0NRO0FEb0VaOztBRHRCRTs7RUFFRSxlQUFBO0FDd0JKOztBRHBCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3VCRjs7QURwQkE7RUFDRSxVQUFBO0FDdUJGOztBRHBCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUN1QkY7O0FEcEJBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDdUJGOztBRHBCQTtFQUNFLGdCQUFBO0FDdUJGIiwiZmlsZSI6InNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9yZXNwb25zZS9yZXNwb25zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzXCI7XG5cbndqLWZsZXgtZ3JpZCxcbi5yZXNwb25zZS1qc29uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktMjAwO1xufVxuXG4ucmVzcG9uc2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG50YWJzZXQgOjpuZy1kZWVwIHtcbiAgLm5hdi1saW5rLmFjdGl2ZT4uYnMtcmVtb3ZlLXRhYntcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cblxuJHRhYi10eXBlczogY29udGVudCwgaGVhZGVyLCBleHBsb3JlciwgcGFnZSwgd29ya2Zsb3c7XG5cbkBlYWNoICR0YWItdHlwZSBpbiAkdGFiLXR5cGVzIHtcbiAgdGFic2V0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbS4jeyR0YWItdHlwZX0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB0YWJzZXQuc2hvdy0jeyR0YWItdHlwZX0gOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMgLm5hdi1pdGVtLiN7JHRhYi10eXBlfSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmJzLXJlbW92ZS10YWIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnMtcmVtb3ZlLXRhYjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICRncmF5LTgwMDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1vcHRpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGdyYXktMjAwO1xuICB9XG5cbiAgbGFiZWwsXG4gIGlucHV0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmxlZnQtbWVudSB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnRhYnMtYWN0aW9ucyB7XG4gIHotaW5kZXg6IDc7XG59XG5cbi50YWJzLW9wdGlvbnMgaW5wdXQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbjo6bmctZGVlcCAud29ya2Zsb3ctbG9ncy1jb250YWluZXIucG9wb3ZlciB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuYWxlcnQgOjpuZy1kZWVwID4gLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIndqLWZsZXgtZ3JpZCxcbi5yZXNwb25zZS1qc29uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlYTtcbn1cblxuLnJlc3BvbnNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudGFic2V0IDo6bmctZGVlcCAubmF2LWxpbmsuYWN0aXZlID4gLmJzLXJlbW92ZS10YWIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbnRhYnNldCA6Om5nLWRlZXAgLm5hdi5uYXYtdGFicyAubmF2LWl0ZW0uY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYnNldC5zaG93LWNvbnRlbnQgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMgLm5hdi1pdGVtLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudGFic2V0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbS5oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50YWJzZXQuc2hvdy1oZWFkZXIgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMgLm5hdi1pdGVtLmhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50YWJzZXQgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMgLm5hdi1pdGVtLmV4cGxvcmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFic2V0LnNob3ctZXhwbG9yZXIgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMgLm5hdi1pdGVtLmV4cGxvcmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRhYnNldCA6Om5nLWRlZXAgLm5hdi5uYXYtdGFicyAubmF2LWl0ZW0ucGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYnNldC5zaG93LXBhZ2UgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMgLm5hdi1pdGVtLnBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudGFic2V0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbS53b3JrZmxvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYnNldC5zaG93LXdvcmtmbG93IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbS53b3JrZmxvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnMtcmVtb3ZlLXRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5icy1yZW1vdmUtdGFiOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzJmMzUzYTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1vcHRpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uZHJvcGRvd24tb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U0ZTdlYTtcbn1cbi5kcm9wZG93bi1vcHRpb24gbGFiZWwsXG4uZHJvcGRvd24tb3B0aW9uIGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdC1tZW51IHtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4udGFicy1hY3Rpb25zIHtcbiAgei1pbmRleDogNztcbn1cblxuLnRhYnMtb3B0aW9ucyBpbnB1dCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuOjpuZy1kZWVwIC53b3JrZmxvdy1sb2dzLWNvbnRhaW5lci5wb3BvdmVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5hbGVydCA6Om5nLWRlZXAgPiAuYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSIsIi8vIENvbG9yIHN5c3RlbVxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxyXG5cclxuJHdoaXRlOiAgICAgI2ZmZiAhZGVmYXVsdDtcclxuJGdyYXktYmFzZTogIzE4MWIxZSAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgI2YwZjNmNSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA4NSUpO1xyXG4kZ3JheS0yMDA6ICAjZTRlN2VhICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDgwJSk7XHJcbiRncmF5LTMwMDogICNjOGNlZDMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNzAlKTtcclxuJGdyYXktNDAwOiAgI2FjYjRiYyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA2MCUpO1xyXG4kZ3JheS01MDA6ICAjOGY5YmE2ICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDUwJSk7XHJcbiRncmF5LTYwMDogICM3MzgxOGYgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDAlKTtcclxuJGdyYXktNzAwOiAgIzVjNjg3MyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCAzMCUpO1xyXG4kZ3JheS04MDA6ICAjMmYzNTNhICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDEwJSk7XHJcbiRncmF5LTkwMDogICMyMzI4MmMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNSUpO1xyXG4kYmxhY2s6ICAgICAjMDAwICFkZWZhdWx0O1xyXG5cclxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcclxuJGdyYXlzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxyXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxyXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxyXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxyXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxyXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxyXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxyXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxyXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXHJcbiAgKSxcclxuICAkZ3JheXNcclxuKTtcclxuXHJcbiRibHVlOiAgICAgICAjMjBhOGQ4ICFkZWZhdWx0O1xyXG4kaW5kaWdvOiAgICAgIzY2MTBmMiAhZGVmYXVsdDtcclxuJHB1cnBsZTogICAgICM2ZjQyYzEgIWRlZmF1bHQ7XHJcbiRwaW5rOiAgICAgICAjZTgzZThjICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgICAgI2Y4NmM2YiAhZGVmYXVsdDtcclxuJG9yYW5nZTogICAgICNmOGNiMDAgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAjZmZjMTA3ICFkZWZhdWx0O1xyXG4kZ3JlZW46ICAgICAgIzRkYmQ3NCAhZGVmYXVsdDtcclxuJHRlYWw6ICAgICAgICMyMGM5OTcgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAjMTdhMmI4ICFkZWZhdWx0O1xyXG4kbGlnaHQtYmx1ZTogIzYzYzJkZSAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxyXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXHJcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcclxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcclxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxyXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXHJcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcclxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXHJcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXHJcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXHJcbiAgICBcImxpZ2h0LWJsdWVcIjogJGxpZ2h0LWJsdWUsXHJcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxyXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcclxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcclxuICApLFxyXG4gICRjb2xvcnNcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICAgICRsaWdodC1ibHVlICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XHJcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxyXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxyXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxyXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxyXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXHJcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyBCcmFuZCBDb2xvcnNcclxuXHJcbiRmYWNlYm9vazogICAgICAgIzNiNTk5OCAhZGVmYXVsdDtcclxuJHR3aXR0ZXI6ICAgICAgICAjMDBhY2VkICFkZWZhdWx0O1xyXG4kbGlua2VkaW46ICAgICAgICM0ODc1YjQgIWRlZmF1bHQ7XHJcbiRnb29nbGUtcGx1czogICAgI2QzNDgzNiAhZGVmYXVsdDtcclxuJGZsaWNrcjogICAgICAgICAjZmYwMDg0ICFkZWZhdWx0O1xyXG4kdHVtYmxyOiAgICAgICAgICMzMjUwNmQgIWRlZmF1bHQ7XHJcbiR4aW5nOiAgICAgICAgICAgIzAyNjQ2NiAhZGVmYXVsdDtcclxuJGdpdGh1YjogICAgICAgICAjNDE4M2M0ICFkZWZhdWx0O1xyXG4kaHRtbDU6ICAgICAgICAgICNlMzRmMjYgIWRlZmF1bHQ7XHJcbiRvcGVuaWQ6ICAgICAgICAgI2Y3OGM0MCAhZGVmYXVsdDtcclxuJHN0YWNrLW92ZXJmbG93OiAjZmU3YTE1ICFkZWZhdWx0O1xyXG4keW91dHViZTogICAgICAgICNiMDAgIWRlZmF1bHQ7XHJcbiRjc3MzOiAgICAgICAgICAgIzAxNzBiYSAhZGVmYXVsdDtcclxuJGRyaWJiYmxlOiAgICAgICAjZWE0Yzg5ICFkZWZhdWx0O1xyXG4kZ29vZ2xlLXBsdXM6ICAgICNiYjRiMzkgIWRlZmF1bHQ7XHJcbiRpbnN0YWdyYW06ICAgICAgIzUxN2ZhNCAhZGVmYXVsdDtcclxuJHBpbnRlcmVzdDogICAgICAjY2IyMDI3ICFkZWZhdWx0O1xyXG4kdms6ICAgICAgICAgICAgICM0NTY2OGUgIWRlZmF1bHQ7XHJcbiR5YWhvbzogICAgICAgICAgIzQwMDE5MSAhZGVmYXVsdDtcclxuJGJlaGFuY2U6ICAgICAgICAjMTc2OWZmICFkZWZhdWx0O1xyXG4kZHJvcGJveDogICAgICAgICMwMDdlZTUgIWRlZmF1bHQ7XHJcbiRyZWRkaXQ6ICAgICAgICAgI2ZmNDUwMCAhZGVmYXVsdDtcclxuJHNwb3RpZnk6ICAgICAgICAjN2FiODAwICFkZWZhdWx0O1xyXG4kdmluZTogICAgICAgICAgICMwMGJmOGYgIWRlZmF1bHQ7XHJcbiRmb3Vyc3F1YXJlOiAgICAgIzEwNzNhZiAhZGVmYXVsdDtcclxuJHZpbWVvOiAgICAgICAgICAjYWFkNDUwICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kcy1jb2xvcnM6ICgpICFkZWZhdWx0O1xyXG4kYnJhbmRzLWNvbG9yczogbWFwLW1lcmdlKChcclxuICBcImZhY2Vib29rXCI6ICAgICAgICRmYWNlYm9vayxcclxuICBcInR3aXR0ZXJcIjogICAgICAgICR0d2l0dGVyLFxyXG4gIFwibGlua2VkaW5cIjogICAgICAgJGxpbmtlZGluLFxyXG4gIFwiZ29vZ2xlLXBsdXNcIjogICAgJGdvb2dsZS1wbHVzLFxyXG4gIFwiZmxpY2tyXCI6ICAgICAgICAgJGZsaWNrcixcclxuICBcInR1bWJsclwiOiAgICAgICAgICR0dW1ibHIsXHJcbiAgXCJ4aW5nXCI6ICAgICAgICAgICAkeGluZyxcclxuICBcImdpdGh1YlwiOiAgICAgICAgICRnaXRodWIsXHJcbiAgXCJodG1sNVwiOiAgICAgICAgICAkaHRtbDUsXHJcbiAgXCJvcGVuaWRcIjogICAgICAgICAkb3BlbmlkLFxyXG4gIFwic3RhY2stb3ZlcmZsb3dcIjogJHN0YWNrLW92ZXJmbG93LFxyXG4gIFwieW91dHViZVwiOiAgICAgICAgJHlvdXR1YmUsXHJcbiAgXCJjc3MzXCI6ICAgICAgICAgICAkY3NzMyxcclxuICBcImRyaWJiYmxlXCI6ICAgICAgICRkcmliYmJsZSxcclxuICBcImluc3RhZ3JhbVwiOiAgICAgICRpbnN0YWdyYW0sXHJcbiAgXCJwaW50ZXJlc3RcIjogICAgICAkcGludGVyZXN0LFxyXG4gIFwidmtcIjogICAgICAgICAgICAgJHZrLFxyXG4gIFwieWFob29cIjogICAgICAgICAgJHlhaG9vLFxyXG4gIFwiYmVoYW5jZVwiOiAgICAgICAgJGJlaGFuY2UsXHJcbiAgXCJkcm9wYm94XCI6ICAgICAgICAkZHJvcGJveCxcclxuICBcInJlZGRpdFwiOiAgICAgICAgICRyZWRkaXQsXHJcbiAgXCJzcG90aWZ5XCI6ICAgICAgICAkc3BvdGlmeSxcclxuICBcInZpbmVcIjogICAgICAgICAgICR2aW5lLFxyXG4gIFwiZm91cnNxdWFyZVwiOiAgICAgJGZvdXJzcXVhcmUsXHJcbiAgXCJ2aW1lb1wiOiAgICAgICAgICAkdmltZW9cclxuKSwgJGJyYW5kcy1jb2xvcnMpO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/rest-client/components/response/response.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/rest-client/components/response/response.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/app/rest-client/store/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./src/app/rest-client/utils.ts");










var PanelContentType;
(function (PanelContentType) {
    PanelContentType["WORKFLOW"] = "showWorkflow";
    PanelContentType["PAGE"] = "showPages";
    PanelContentType["CONTENT"] = "showContent";
    PanelContentType["HEADER"] = "showHeader";
    PanelContentType["OBJECT_EXPLORER"] = "showObjectExplorer";
})(PanelContentType || (PanelContentType = {}));
var ResponseComponent = /** @class */ (function () {
    function ResponseComponent(store) {
        this.store = store;
        this.PanelContentType = PanelContentType;
        this.panelContentType = PanelContentType.CONTENT;
        this.uiSettings = {};
        this.isRefreshDisabled = true;
        this.objectExplorerUIModel = {
            type: 'rest-client:grid-object-explorer',
            containerProperties: {},
            itemProperties: {
                dataSource: '{{responseContent}}',
                host: '{{requestMethod}}-{{requestUrl}}',
                isReadOnly: false,
                allowDelete: true,
                allowAddNew: true,
                selectionMode: 4
            }
        };
        this.pageUiModel = src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Page"].uiModel;
        this.tabsOptions = [];
    }
    ResponseComponent.prototype.updateTabsOptions = function () {
        var options = [
            { value: 'showContent', title: 'Show content tab' },
            { value: 'showHeader', title: 'Show header tab' },
            { value: 'showObjectExplorer', title: 'Show Object Explorer' },
        ];
        this.tabsOptions = options;
    };
    ResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.response$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store__WEBPACK_IMPORTED_MODULE_6__["selectResponseModel"]));
        this.dynamicPages$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store__WEBPACK_IMPORTED_MODULE_6__["selectDynamicPages"]));
        this.responseStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store__WEBPACK_IMPORTED_MODULE_6__["selectResponseStatus"]));
        this.loading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store__WEBPACK_IMPORTED_MODULE_6__["selectResponseLoading"]));
        this.response$.subscribe(function (responseModel) {
            _this.responseModel = responseModel;
            window.requestAnimationFrame(function () {
                _this.updateTabsOptions();
                _this.updateSelectedTab();
            });
            _this.setContentValue(responseModel);
        });
        this.uiSettings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])((function (state) { return state.requestModel.requestContentModel.uiSettings; })));
        this.uiSettings$.subscribe(function (v) {
            _this.uiSettings = v;
            _this.updateSelectedTab();
        });
        this.dynamicPages$.subscribe(function (dynamicPages) {
            _this.dynamicPages = dynamicPages || [];
            _this.updateTabsOptions();
        });
    };
    ResponseComponent.prototype.updateSelectedTab = function () {
        if (!this.uiSettings[this.panelContentType] ||
            this.panelContentType === PanelContentType.HEADER && !this.responseModel.headers) {
            this.panelContentType = null;
        }
    };
    Object.defineProperty(ResponseComponent.prototype, "tabsStateClasses", {
        get: function () {
            return {
                'show-content': this.uiSettings.showContent,
                'show-header': this.uiSettings.showHeader && this.responseModel.headers,
                'show-explorer': this.uiSettings.showObjectExplorer,
                'show-page': this.uiSettings.showPages,
                'show-workflow': this.uiSettings.showWorkflow,
            };
        },
        enumerable: true,
        configurable: true
    });
    ResponseComponent.prototype.onTabsOptionsChanged = function (e) {
        this.uiSettings[e.target.value] = e.target.checked;
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateUiSettings"](this.uiSettings));
    };
    ResponseComponent.prototype.onAddDynamicPage = function () {
        var _this = this;
        var _a;
        var length = 1;
        var workflowIndex = this.dynamicPages.length + 1;
        this.dynamicPages.push({
            title: 'Page ' + workflowIndex,
            description: 'Dynamic page ' + workflowIndex,
            pageName: "page" + workflowIndex,
            uiModel: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: "page" + workflowIndex }, this.pageUiModel),
            workflows: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getInitialWorkflowConfig"])({ workflowsMap: (_a = {}, _a["page" + workflowIndex + "_OnInit"] = [], _a) })
        });
        window.requestAnimationFrame(function () {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["SaveDynamicPages"](_this.dynamicPages));
            _this.updateTabsOptions();
            _this.editCurrentPage();
        });
    };
    ResponseComponent.prototype.onDynamicWorkfowChanged = function () {
        this.isRefreshDisabled = false;
    };
    ResponseComponent.prototype.onPageSelect = function (tabElementRef, i) {
        wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["Control"].invalidateAll(tabElementRef);
        this.selectedPage = null;
    };
    ResponseComponent.prototype.onObjectExplorerSelect = function () {
        this.panelContentType = PanelContentType.OBJECT_EXPLORER;
        this.selectedPage = null;
    };
    ResponseComponent.prototype.onContentSelect = function () {
        this.panelContentType = PanelContentType.CONTENT;
    };
    // TODO: implement show in presenter resize.
    ResponseComponent.prototype.resize = function () {
    };
    ResponseComponent.prototype.removePage = function (index) {
        var _this = this;
        this.dynamicPages.splice(index, 1);
        window.requestAnimationFrame(function () {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["SaveDynamicPages"](_this.dynamicPages));
            _this.updateTabsOptions();
        });
    };
    ResponseComponent.prototype.editCurrentPage = function () {
        this.selectedPage.editPage();
    };
    ResponseComponent.prototype.designCurrentPage = function () {
        this.selectedPage.designPage();
    };
    ResponseComponent.prototype.trackPageFn = function (page, index) {
        return "dynamic-component-" + index;
    };
    ResponseComponent.prototype.setContentValue = function (responseModel) {
        var value = src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__["Variables"].resolveString('{{responseContent}}');
        if (!value || value === '{{responseContent}}') {
            this.dataModel = null;
            this.responseType = null;
        }
        else {
            if (responseModel.contentType === _models__WEBPACK_IMPORTED_MODULE_4__["ContentTypes"].JSON && typeof value === 'object') {
                this.responseType = 'json';
            }
            else {
                if (value.toLowerCase().startsWith('<!doctype html')) {
                    this.responseType = 'html';
                }
                else {
                    this.responseType = 'text';
                }
            }
            this.dataModel = value;
        }
    };
    ResponseComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResponseComponent.prototype, "scriptContext", void 0);
    ResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response',
            template: __webpack_require__(/*! raw-loader!./response.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.scss */ "./src/app/rest-client/components/response/response.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/rest-content/rest-content.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/rest-client/components/rest-content/rest-content.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RestContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestContentComponent", function() { return RestContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request/request.component */ "./src/app/rest-client/components/request/request.component.ts");
/* harmony import */ var _response_response_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../response/response.component */ "./src/app/rest-client/components/response/response.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./src/app/rest-client/store/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/rest-client/store/selectors/index.ts");
/* harmony import */ var src_app_shared_services_local_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/local-settings.service */ "./src/app/shared/services/local-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var RestContentComponent = /** @class */ (function () {
    function RestContentComponent(store, localSettings) {
        this.store = store;
        this.localSettings = localSettings;
        this.requestTabSize = {
            height: 0
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    RestContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiSettings$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])((function (state) { return state.requestModel.requestContentModel.uiSettings; })));
        this.uiSettings$.subscribe(function (v) {
            _this.uiSettings = v;
            window.requestAnimationFrame(function () {
                _this.requestTabSize = _this.requestCard.getSize(v.isRequestPanelCollapsed);
            });
        });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store__WEBPACK_IMPORTED_MODULE_5__["selectRequestModel"])).subscribe(function (req) {
            _this.scriptContext = null;
            _this.currentRequest = req;
        });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store__WEBPACK_IMPORTED_MODULE_5__["selectResponseModel"])).subscribe(function () {
            window.requestAnimationFrame(function () {
                if (!_this.uiSettings.isRequestPanelCollapsed) {
                    var panelSizes = _this.localSettings.getRequestPanelSize(_this.currentRequest);
                    if (panelSizes) {
                        _this.requestTabSize = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.requestTabSize, { height: panelSizes[0] });
                    }
                    else if (_this.requestCard) {
                        _this.requestTabSize = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.requestCard.getSize());
                    }
                }
            });
        });
        this.loading$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_7__["selectRequestLoading"]));
    };
    RestContentComponent.prototype.onScriptChange = function (sc) {
        this.scriptContext = sc;
    };
    RestContentComponent.prototype.onResize = function () {
        this.requestCard.resize();
        this.responseCard.resize();
    };
    RestContentComponent.prototype.onDragEnd = function (evt) {
        this.localSettings.setRequestPanelSize(this.currentRequest, evt.sizes);
        this.onResize();
    };
    RestContentComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    RestContentComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_shared_services_local_settings_service__WEBPACK_IMPORTED_MODULE_8__["LocalSettingsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('requestCard', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _request_request_component__WEBPACK_IMPORTED_MODULE_2__["RequestComponent"])
    ], RestContentComponent.prototype, "requestCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('responseCard', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _response_response_component__WEBPACK_IMPORTED_MODULE_3__["ResponseComponent"])
    ], RestContentComponent.prototype, "responseCard", void 0);
    RestContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rest-content',
            template: __webpack_require__(/*! raw-loader!./rest-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/rest-content/rest-content.component.html"),
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n\n    as-split.collapsed > ::ng-deep .as-split-gutter {\n      display: none;\n    }\n\n    as-split.collapsed as-split-area:not(:last-child) {\n      margin-bottom: .5rem;\n    }\n\n    .spinner {\n      top: 0;\n      background: white;\n      z-index: 8;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_shared_services_local_settings_service__WEBPACK_IMPORTED_MODULE_8__["LocalSettingsService"]])
    ], RestContentComponent);
    return RestContentComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/rest-layout/rest-layout.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/rest-client/components/rest-layout/rest-layout.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-environment {\n  -webkit-box-flex: 0;\n          flex: 0;\n  width: 100%;\n}\n\napp-rest-sidebar {\n  min-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3Jlc3QtbGF5b3V0L3Jlc3QtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3Jlc3QtbGF5b3V0L3Jlc3QtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvcmVzdC1sYXlvdXQvcmVzdC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2Nzc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvbWVkaWFcIjtcblxuYXBwLWVudmlyb25tZW50IHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1yZXN0LXNpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuIiwiYXBwLWVudmlyb25tZW50IHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1yZXN0LXNpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/rest-layout/rest-layout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/rest-client/components/rest-layout/rest-layout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RestLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestLayoutComponent", function() { return RestLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _services_run_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/run-request.service */ "./src/app/rest-client/services/run-request.service.ts");










var RestLayoutComponent = /** @class */ (function () {
    function RestLayoutComponent(titleService, store, router, authService, actions) {
        var _this = this;
        this.titleService = titleService;
        this.store = store;
        this.router = router;
        this.authService = authService;
        this.actions = actions;
        this.layoutConfig = {
            icon: 'assets/img/rc-logo-64x64.png',
            smIcon: 'assets/img/rc-logo-36x36.png',
            appName: 'rest-client'
        };
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })),
            this.authService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
                if (user) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(user);
                }
                return _this.authService.isAuthenticated$;
            }))
        ]).subscribe(function (_a) {
            var route = _a[0], isAuth = _a[1];
            if (!_this.router.routerState.snapshot.url.startsWith('/rest-client') || !isAuth) {
                return;
            }
            var params;
            var firstChild = _this.router.routerState.root.firstChild;
            while (firstChild) {
                params = firstChild.snapshot.params;
                firstChild = firstChild.firstChild;
            }
            if (params.ownerName && params.requestName) {
                _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["LoadRequest"](params));
            }
            else {
                _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["DeselectRequest"]());
            }
        });
        this.authService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (isAuth) { return !isAuth; })).subscribe(function () {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["LoadedRequests"]([]));
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_7__["DeselectRequest"]());
        });
    }
    RestLayoutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Worksheets REST Client');
    };
    RestLayoutComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
    };
    RestLayoutComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _services_run_request_service__WEBPACK_IMPORTED_MODULE_9__["RunRequestService"] }
    ]; };
    RestLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rest-layout',
            template: __webpack_require__(/*! raw-loader!./rest-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/rest-layout/rest-layout.component.html"),
            styles: [__webpack_require__(/*! ./rest-layout.component.scss */ "./src/app/rest-client/components/rest-layout/rest-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_security__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _services_run_request_service__WEBPACK_IMPORTED_MODULE_9__["RunRequestService"]])
    ], RestLayoutComponent);
    return RestLayoutComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/save-request/save-request.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/rest-client/components/save-request/save-request.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvc2F2ZS1yZXF1ZXN0L3NhdmUtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rest-client/components/save-request/save-request.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/rest-client/components/save-request/save-request.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SaveRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveRequestComponent", function() { return SaveRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");




var SaveRequestComponent = /** @class */ (function () {
    function SaveRequestComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SaveRequestComponent.prototype.ngOnInit = function () {
        this.saveRequestLink = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(this.config);
    };
    SaveRequestComponent.prototype.saveRequest = function () {
        this.save.emit(this.saveRequestLink);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveRequestComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], SaveRequestComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveRequestComponent.prototype, "save", void 0);
    SaveRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-request',
            template: __webpack_require__(/*! raw-loader!./save-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/save-request/save-request.component.html"),
            styles: [__webpack_require__(/*! ./save-request.component.scss */ "./src/app/rest-client/components/save-request/save-request.component.scss")]
        })
    ], SaveRequestComponent);
    return SaveRequestComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/saved-requests/saved-requests.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/rest-client/components/saved-requests/saved-requests.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SavedRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRequestsComponent", function() { return SavedRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/rest-client/store/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");








var SavedRequestsComponent = /** @class */ (function () {
    function SavedRequestsComponent(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.LinkType = _models__WEBPACK_IMPORTED_MODULE_5__["LinkType"];
    }
    SavedRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["LoadRequests"]());
        this.store.select(function (state) { return state.savedRequests.requests; }).subscribe(function (requests) {
            _this.requests = requests;
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectActiveRequest"]).subscribe(function (request) {
            _this.selectedRequest = request;
            _this.listView.selectItem(request);
        });
    };
    SavedRequestsComponent.prototype.onSelect = function (item) {
        if (item) {
            var ownerName = item.ownerName, name_1 = item.name, linkType = item.linkType;
            if (ownerName && name_1) {
                if (this.selectedRequest && this.selectedRequest.ownerName === ownerName && this.selectedRequest.name === name_1) {
                    return;
                }
                switch (linkType) {
                    case _models__WEBPACK_IMPORTED_MODULE_5__["LinkType"].RestRequest:
                        this.router.navigate([ownerName, name_1], { relativeTo: this.route });
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_5__["LinkType"].ScriptedRequest:
                        this.router.navigate(['scripted-request', ownerName, name_1], { relativeTo: this.route });
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_5__["LinkType"].DataEditor:
                        this.router.navigate(['data-editor', ownerName, name_1], { relativeTo: this.route });
                        break;
                }
            }
        }
    };
    SavedRequestsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listView', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_7__["ListViewComponent"])
    ], SavedRequestsComponent.prototype, "listView", void 0);
    SavedRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved-requests',
            template: __webpack_require__(/*! raw-loader!./saved-requests.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/saved-requests/saved-requests.component.html"),
            styles: ["\n    i.fa {\n      color: #20a8d8\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], SavedRequestsComponent);
    return SavedRequestsComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/script/script.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/rest-client/components/script/script.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 1em;\n  overflow-y: scroll;\n}\n\nul {\n  -webkit-padding-start: 0.8em;\n          padding-inline-start: 0.8em;\n}\n\nul li {\n  list-style: none;\n}\n\nul li a {\n  color: #20a8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3NjcmlwdC9zY3JpcHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvc2NyaXB0L3NjcmlwdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsNEJBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURHRTtFQUNFLGNFaUJTO0FEbEJiIiwiZmlsZSI6InNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9zY3JpcHQvc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvY29yZXVpL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3NcIjtcblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDFlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG51bCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAuOGVtO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgYSB7XG4gICAgY29sb3I6ICRibHVlO1xuICB9XG59XG4iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuOGVtO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bCBsaSBhIHtcbiAgY29sb3I6ICMyMGE4ZDg7XG59IiwiLy8gQ29sb3Igc3lzdGVtXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcblxyXG4kd2hpdGU6ICAgICAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMTgxYjFlICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAjZjBmM2Y1ICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDg1JSk7XHJcbiRncmF5LTIwMDogICNlNGU3ZWEgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODAlKTtcclxuJGdyYXktMzAwOiAgI2M4Y2VkMyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA3MCUpO1xyXG4kZ3JheS00MDA6ICAjYWNiNGJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDYwJSk7XHJcbiRncmF5LTUwMDogICM4ZjliYTYgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNTAlKTtcclxuJGdyYXktNjAwOiAgIzczODE4ZiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA0MCUpO1xyXG4kZ3JheS03MDA6ICAjNWM2ODczICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDMwJSk7XHJcbiRncmF5LTgwMDogICMyZjM1M2EgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTAlKTtcclxuJGdyYXktOTAwOiAgIzIzMjgyYyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1JSk7XHJcbiRibGFjazogICAgICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICAgICAgICMyMGE4ZDggIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAgICAjNjYxMGYyICFkZWZhdWx0O1xyXG4kcHVycGxlOiAgICAgIzZmNDJjMSAhZGVmYXVsdDtcclxuJHBpbms6ICAgICAgICNlODNlOGMgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAjZjg2YzZiICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAgICAgI2Y4Y2IwMCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICNmZmMxMDcgIWRlZmF1bHQ7XHJcbiRncmVlbjogICAgICAjNGRiZDc0ICFkZWZhdWx0O1xyXG4kdGVhbDogICAgICAgIzIwYzk5NyAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICMxN2EyYjggIWRlZmF1bHQ7XHJcbiRsaWdodC1ibHVlOiAjNjNjMmRlICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXHJcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcclxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxyXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxyXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXHJcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcclxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcclxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcclxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcclxuICAgIFwibGlnaHQtYmx1ZVwiOiAkbGlnaHQtYmx1ZSxcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxyXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgJGxpZ2h0LWJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIEJyYW5kIENvbG9yc1xyXG5cclxuJGZhY2Vib29rOiAgICAgICAjM2I1OTk4ICFkZWZhdWx0O1xyXG4kdHdpdHRlcjogICAgICAgICMwMGFjZWQgIWRlZmF1bHQ7XHJcbiRsaW5rZWRpbjogICAgICAgIzQ4NzViNCAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjZDM0ODM2ICFkZWZhdWx0O1xyXG4kZmxpY2tyOiAgICAgICAgICNmZjAwODQgIWRlZmF1bHQ7XHJcbiR0dW1ibHI6ICAgICAgICAgIzMyNTA2ZCAhZGVmYXVsdDtcclxuJHhpbmc6ICAgICAgICAgICAjMDI2NDY2ICFkZWZhdWx0O1xyXG4kZ2l0aHViOiAgICAgICAgICM0MTgzYzQgIWRlZmF1bHQ7XHJcbiRodG1sNTogICAgICAgICAgI2UzNGYyNiAhZGVmYXVsdDtcclxuJG9wZW5pZDogICAgICAgICAjZjc4YzQwICFkZWZhdWx0O1xyXG4kc3RhY2stb3ZlcmZsb3c6ICNmZTdhMTUgIWRlZmF1bHQ7XHJcbiR5b3V0dWJlOiAgICAgICAgI2IwMCAhZGVmYXVsdDtcclxuJGNzczM6ICAgICAgICAgICAjMDE3MGJhICFkZWZhdWx0O1xyXG4kZHJpYmJibGU6ICAgICAgICNlYTRjODkgIWRlZmF1bHQ7XHJcbiRnb29nbGUtcGx1czogICAgI2JiNGIzOSAhZGVmYXVsdDtcclxuJGluc3RhZ3JhbTogICAgICAjNTE3ZmE0ICFkZWZhdWx0O1xyXG4kcGludGVyZXN0OiAgICAgICNjYjIwMjcgIWRlZmF1bHQ7XHJcbiR2azogICAgICAgICAgICAgIzQ1NjY4ZSAhZGVmYXVsdDtcclxuJHlhaG9vOiAgICAgICAgICAjNDAwMTkxICFkZWZhdWx0O1xyXG4kYmVoYW5jZTogICAgICAgICMxNzY5ZmYgIWRlZmF1bHQ7XHJcbiRkcm9wYm94OiAgICAgICAgIzAwN2VlNSAhZGVmYXVsdDtcclxuJHJlZGRpdDogICAgICAgICAjZmY0NTAwICFkZWZhdWx0O1xyXG4kc3BvdGlmeTogICAgICAgICM3YWI4MDAgIWRlZmF1bHQ7XHJcbiR2aW5lOiAgICAgICAgICAgIzAwYmY4ZiAhZGVmYXVsdDtcclxuJGZvdXJzcXVhcmU6ICAgICAjMTA3M2FmICFkZWZhdWx0O1xyXG4kdmltZW86ICAgICAgICAgICNhYWQ0NTAgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmRzLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRicmFuZHMtY29sb3JzOiBtYXAtbWVyZ2UoKFxyXG4gIFwiZmFjZWJvb2tcIjogICAgICAgJGZhY2Vib29rLFxyXG4gIFwidHdpdHRlclwiOiAgICAgICAgJHR3aXR0ZXIsXHJcbiAgXCJsaW5rZWRpblwiOiAgICAgICAkbGlua2VkaW4sXHJcbiAgXCJnb29nbGUtcGx1c1wiOiAgICAkZ29vZ2xlLXBsdXMsXHJcbiAgXCJmbGlja3JcIjogICAgICAgICAkZmxpY2tyLFxyXG4gIFwidHVtYmxyXCI6ICAgICAgICAgJHR1bWJscixcclxuICBcInhpbmdcIjogICAgICAgICAgICR4aW5nLFxyXG4gIFwiZ2l0aHViXCI6ICAgICAgICAgJGdpdGh1YixcclxuICBcImh0bWw1XCI6ICAgICAgICAgICRodG1sNSxcclxuICBcIm9wZW5pZFwiOiAgICAgICAgICRvcGVuaWQsXHJcbiAgXCJzdGFjay1vdmVyZmxvd1wiOiAkc3RhY2stb3ZlcmZsb3csXHJcbiAgXCJ5b3V0dWJlXCI6ICAgICAgICAkeW91dHViZSxcclxuICBcImNzczNcIjogICAgICAgICAgICRjc3MzLFxyXG4gIFwiZHJpYmJibGVcIjogICAgICAgJGRyaWJiYmxlLFxyXG4gIFwiaW5zdGFncmFtXCI6ICAgICAgJGluc3RhZ3JhbSxcclxuICBcInBpbnRlcmVzdFwiOiAgICAgICRwaW50ZXJlc3QsXHJcbiAgXCJ2a1wiOiAgICAgICAgICAgICAkdmssXHJcbiAgXCJ5YWhvb1wiOiAgICAgICAgICAkeWFob28sXHJcbiAgXCJiZWhhbmNlXCI6ICAgICAgICAkYmVoYW5jZSxcclxuICBcImRyb3Bib3hcIjogICAgICAgICRkcm9wYm94LFxyXG4gIFwicmVkZGl0XCI6ICAgICAgICAgJHJlZGRpdCxcclxuICBcInNwb3RpZnlcIjogICAgICAgICRzcG90aWZ5LFxyXG4gIFwidmluZVwiOiAgICAgICAgICAgJHZpbmUsXHJcbiAgXCJmb3Vyc3F1YXJlXCI6ICAgICAkZm91cnNxdWFyZSxcclxuICBcInZpbWVvXCI6ICAgICAgICAgICR2aW1lb1xyXG4pLCAkYnJhbmRzLWNvbG9ycyk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/script/script.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rest-client/components/script/script.component.ts ***!
  \*******************************************************************/
/*! exports provided: ScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptComponent", function() { return ScriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rest-interpreter */ "./src/app/rest-client/rest-interpreter/index.ts");
/* harmony import */ var _rest_interpreter_snippets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest-interpreter/snippets */ "./src/app/rest-client/rest-interpreter/snippets.ts");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_4__);





var ScriptComponent = /** @class */ (function () {
    function ScriptComponent() {
        this.snippets = _rest_interpreter_snippets__WEBPACK_IMPORTED_MODULE_3__["snippets"];
    }
    Object.defineProperty(ScriptComponent.prototype, "context", {
        get: function () {
            return this.restInterpreter.scriptContext;
        },
        enumerable: true,
        configurable: true
    });
    ScriptComponent.prototype.ngOnInit = function () {
        this.restInterpreter = new _rest_interpreter__WEBPACK_IMPORTED_MODULE_2__["RestInterpreter"]();
        this.editor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_4__["edit"])(this.scriptEl.nativeElement, {
            mode: 'ace/mode/python',
            autoScrollEditorIntoView: true,
            value: this.defaultScript,
            tabSize: 2,
            useSoftTabs: true,
            indentedSoftWrap: true
        });
        this.editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: false,
            enableLiveAutocompletion: true
        });
    };
    ScriptComponent.prototype.getScript = function () {
        return this.editor.getValue();
    };
    ScriptComponent.prototype.evaluate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var startTime, script, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.evaluationTime = null;
                        this.restInterpreter.reset();
                        startTime = new Date().getTime();
                        script = this.getScript();
                        return [4 /*yield*/, this.restInterpreter.evaluate(script)];
                    case 1:
                        res = _a.sent();
                        this.evaluationTime = +new Date() - startTime;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ScriptComponent.prototype.resize = function () {
        this.editor.resize();
    };
    ScriptComponent.prototype.setScript = function (script) {
        var _this = this;
        this.evaluationTime = null;
        if (this.editor) {
            this.setValue(script);
        }
        else {
            window.requestAnimationFrame(function () {
                _this.setValue(script);
            });
        }
    };
    ScriptComponent.prototype.addSnippet = function (snippet) {
        var row = this.editor.session.getLength() - 1;
        var column = this.editor.session.getLine(row).length;
        this.editor.moveCursorTo(row, column);
        this.editor.insert("\n" + snippet, true);
    };
    ScriptComponent.prototype.setValue = function (script) {
        this.editor.setValue(script, -1);
        this.restInterpreter.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ScriptComponent.prototype, "defaultScript", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ScriptComponent.prototype, "scriptEl", void 0);
    ScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-script',
            template: __webpack_require__(/*! raw-loader!./script.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/script/script.component.html"),
            styles: [__webpack_require__(/*! ./script.component.scss */ "./src/app/rest-client/components/script/script.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScriptComponent);
    return ScriptComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/scripted-request/scripted-request.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/rest-client/components/scripted-request/scripted-request.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .workflow-logs-container.popover {\n  max-width: 400px;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3NjcmlwdGVkLXJlcXVlc3Qvc2NyaXB0ZWQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9zY3JpcHRlZC1yZXF1ZXN0L3NjcmlwdGVkLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvc2NyaXB0ZWQtcmVxdWVzdC9zY3JpcHRlZC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC53b3JrZmxvdy1sb2dzLWNvbnRhaW5lci5wb3BvdmVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuIiwiOjpuZy1kZWVwIC53b3JrZmxvdy1sb2dzLWNvbnRhaW5lci5wb3BvdmVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/scripted-request/scripted-request.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/rest-client/components/scripted-request/scripted-request.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ScriptedRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptedRequestComponent", function() { return ScriptedRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/app/rest-client/store/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/rest-client/store/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _save_request_save_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../save-request/save-request.component */ "./src/app/rest-client/components/save-request/save-request.component.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/utils */ "./src/app/rest-client/store/utils.ts");
/* harmony import */ var _show_in_presenter_show_in_presenter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../show-in-presenter/show-in-presenter.component */ "./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.ts");
/* harmony import */ var _script_script_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../script/script.component */ "./src/app/rest-client/components/script/script.component.ts");
/* harmony import */ var _requests_history__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../requests-history */ "./src/app/rest-client/requests-history.ts");


















var ScriptedRequestComponent = /** @class */ (function () {
    function ScriptedRequestComponent(store, dialogService, authService, loginService, router) {
        this.store = store;
        this.dialogService = dialogService;
        this.authService = authService;
        this.loginService = loginService;
        this.router = router;
        this.defaultScript = [
            '# script 1'
        ].join('\n');
        this.runningScript$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.responseUIModel = {
            type: 'rest-client:grid-object-explorer',
            containerProperties: {},
            itemProperties: {
                dataSource: null,
                isReadOnly: false,
                allowDelete: true,
                allowAddNew: true,
                host: 'response-body-object-explorer',
                selectionMode: 4
            }
        };
        this.newRequestLink = {
            ownerName: null,
            name: null,
            folder: null,
            description: null,
            linkType: _models__WEBPACK_IMPORTED_MODULE_8__["LinkType"].ScriptedRequest,
            id: 0
        };
    }
    ScriptedRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.response$ = this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_6__["selectResponseModel"]));
        this.loading$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_7__["selectRequestLoading"]), this.runningScript$);
        this.response$.subscribe(function (r) {
            _this.responseData = r.body;
        });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_6__["selectRequest"])).subscribe(function (data) {
            _this.requestState = data;
            var script = data.requestContentModel.scripts || _this.defaultScript;
            _this.script.setScript(script);
        });
        this.authService.isAuthenticated$.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
            if (isAuth) {
                var userName = _this.authService.user.userName;
                _this.newRequestLink.ownerName = userName;
                if (_this.saveRequestLink && _this.saveRequestLink.id === 0) {
                    _this.saveRequestLink.ownerName = userName;
                }
            }
        });
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_7__["selectActiveRequest"])).subscribe(function (request) {
            _this.selectedSavedRequestLink = request;
            _this.saveRequestLink = request || tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.newRequestLink);
        });
    };
    ScriptedRequestComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
    };
    ScriptedRequestComponent.prototype.run = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.runningScript$.next(true);
                        return [4 /*yield*/, this.script.evaluate()];
                    case 1:
                        _a.sent();
                        this.runningScript$.next(false);
                        _requests_history__WEBPACK_IMPORTED_MODULE_17__["RequestsHistoryManager"].saveRequestConfig({
                            scripts: this.script.getScript(),
                            responseInfo: {
                                date: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_9__["dateToDtoString"])(new Date()),
                                time: this.script.evaluationTime,
                                status: null,
                                statusText: null
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ScriptedRequestComponent.prototype.save = function () {
        var _this = this;
        if (this.isAuthenticated) {
            var saveDialog_1 = this.dialogService.open(_save_request_save_request_component__WEBPACK_IMPORTED_MODULE_10__["SaveRequestComponent"]);
            saveDialog_1.config = this.saveRequestLink;
            saveDialog_1.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return saveDialog_1.component.save; })).subscribe(function (data) {
                _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["SaveRequest"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { scripts: _this.script.getScript() })));
                saveDialog_1.component.modalRef.hide();
            });
        }
        else {
            this.loginService.openDialog();
        }
    };
    ScriptedRequestComponent.prototype.onDeleteRequest = function () {
        if (this.selectedSavedRequestLink) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_12__["DeleteRequest"](this.selectedSavedRequestLink.id));
        }
        else {
            throw new Error('Saved request is not selected');
        }
    };
    ScriptedRequestComponent.prototype.onNewScriptedRequest = function () {
        Object(_store_utils__WEBPACK_IMPORTED_MODULE_14__["updateStore"])(this.store);
        this.router.navigate(['/rest-client', 'scripted-request']);
    };
    ScriptedRequestComponent.prototype.onResize = function () {
        this.script.resize();
        if (this.responseExplorer) {
            this.responseExplorer.resize();
        }
        if (this.showIn) {
            this.showIn.resize();
        }
    };
    ScriptedRequestComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["DialogService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_13__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('responseExplorer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_9__["ContentExplorerComponent"])
    ], ScriptedRequestComponent.prototype, "responseExplorer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _script_script_component__WEBPACK_IMPORTED_MODULE_16__["ScriptComponent"])
    ], ScriptedRequestComponent.prototype, "script", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showIn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _show_in_presenter_show_in_presenter_component__WEBPACK_IMPORTED_MODULE_15__["ShowInPresenterComponent"])
    ], ScriptedRequestComponent.prototype, "showIn", void 0);
    ScriptedRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scripted-request',
            template: __webpack_require__(/*! raw-loader!./scripted-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/scripted-request/scripted-request.component.html"),
            styles: [__webpack_require__(/*! ./scripted-request.component.scss */ "./src/app/rest-client/components/scripted-request/scripted-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["DialogService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_13__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ScriptedRequestComponent);
    return ScriptedRequestComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3QtY2xpZW50L2NvbXBvbmVudHMvc2hvdy1pbi1wcmVzZW50ZXIvc2hvdy1pbi1wcmVzZW50ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShowInPresenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInPresenterComponent", function() { return ShowInPresenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _rest_interpreter_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest-interpreter/models */ "./src/app/rest-client/rest-interpreter/models.ts");
/* harmony import */ var wijmo_wijmo_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.chart */ "./node_modules/wijmo/wijmo.chart.js");
/* harmony import */ var wijmo_wijmo_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_chart__WEBPACK_IMPORTED_MODULE_4__);





var ShowInPresenterComponent = /** @class */ (function () {
    function ShowInPresenterComponent() {
        this.objectExplorerUIModels = [];
        this.ShowInTypes = _rest_interpreter_models__WEBPACK_IMPORTED_MODULE_3__["ShowInTypes"];
    }
    ShowInPresenterComponent.prototype.ngOnInit = function () {
        this.tabs = this.getTabsList(this.items);
    };
    ShowInPresenterComponent.prototype.ngOnChanges = function (_a) {
        var items = _a.items;
        if (!items.firstChange && items.currentValue) {
            this.tabs = this.getTabsList(items.currentValue);
        }
    };
    ShowInPresenterComponent.prototype.getTabsList = function (items) {
        var _this = this;
        if (!items) {
            return null;
        }
        return items.map(function (item, i) {
            if (item.type === _rest_interpreter_models__WEBPACK_IMPORTED_MODULE_3__["ShowInTypes"].ObjectExplorer) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { uiModel: _this.getObjectExplorerUIModel(item.type + "-" + item.title + "-" + i) });
            }
            else if (item.type === _rest_interpreter_models__WEBPACK_IMPORTED_MODULE_3__["ShowInTypes"].Chart) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { uiModel: _this.getChartUIModel(item) });
            }
            return item;
        });
    };
    ShowInPresenterComponent.prototype.resize = function () {
        this.contentExplorers.toArray().forEach(function (ce) {
            ce.resize();
        });
    };
    ShowInPresenterComponent.prototype.getObjectExplorerUIModel = function (host) {
        return {
            type: 'rest-client:grid-object-explorer',
            containerProperties: {},
            itemProperties: {
                host: host,
                isReadOnly: true,
                allowDelete: false,
                allowAddNew: false,
                selectionMode: 4
            }
        };
    };
    ShowInPresenterComponent.prototype.getChartUIModel = function (item) {
        item.config = (item.config || {});
        var header = item.config.header;
        var bindingX = item.config.bindingX;
        var series = item.config.series || [];
        if (item.data && !Array.isArray(item.data)) {
            item.data = [item.data];
        }
        if (item.data.length) {
            var keys = Object.keys(item.data[0]);
            if (!header) {
                header = keys[0];
            }
            if (!bindingX) {
                bindingX = keys[0];
            }
            if (!series.length) {
                series = Object.entries(item.data[0]).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    if (typeof value === 'number') {
                        return { binding: key, name: key };
                    }
                }).filter(function (v) { return v; });
            }
        }
        return {
            type: 'wijmo:chart',
            containerProperties: {},
            itemProperties: {
                chartType: item.config.chartType || wijmo_wijmo_chart__WEBPACK_IMPORTED_MODULE_4__["ChartType"].Line,
                header: header,
                bindingX: bindingX,
                selectionMode: item.config.selectionMode || wijmo_wijmo_chart__WEBPACK_IMPORTED_MODULE_4__["SelectionMode"].Point,
                legendPosition: item.config.legendPosition || wijmo_wijmo_chart__WEBPACK_IMPORTED_MODULE_4__["Position"].Bottom,
                series: series,
                dataSource: item.data
            }
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ShowInPresenterComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(src_app_shared__WEBPACK_IMPORTED_MODULE_2__["ContentExplorerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ShowInPresenterComponent.prototype, "contentExplorers", void 0);
    ShowInPresenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-in-presenter',
            template: __webpack_require__(/*! raw-loader!./show-in-presenter.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.html"),
            styles: [__webpack_require__(/*! ./show-in-presenter.component.scss */ "./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowInPresenterComponent);
    return ShowInPresenterComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/components/sidebar/sidebar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/rest-client/components/sidebar/sidebar.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tabset ::ng-deep .nav-link {\n  padding-bottom: 0.5rem;\n}\n\napp-history-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell {\n  border: none;\n}\n\napp-history-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-alt,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-alt {\n  background: #fff;\n}\n\napp-history-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-state-selected, app-history-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-state-multi-selected,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-state-selected,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-state-multi-selected {\n  background: #c8ced3;\n  color: #23282c;\n}\n\napp-history-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-group,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell.wj-group {\n  background: #f0f3f5;\n  color: #2f353a;\n}\n\napp-history-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell .badge,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cells .wj-cell .badge {\n  vertical-align: text-bottom;\n}\n\napp-history-requests ::ng-deep wj-flex-grid .wj-cell:not(.wj-group):first-child,\napp-saved-requests ::ng-deep wj-flex-grid .wj-cell:not(.wj-group):first-child {\n  padding-left: 20px !important;\n}\n\n.new-dropdown {\n  z-index: 2;\n  right: 0;\n}\n\n::ng-deep #dropdown-new-item.dropdown-menu {\n  left: auto !important;\n  right: -30px !important;\n}\n\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9yZXN0LWNsaWVudC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92a3VrdXJiYS9EZXZlbG9wbWVudC9Qcm9qZWN0cy91cHdvcmsvd29ya3NoZWV0czItYXBwL3NyYy9zdHlsZXMvY29yZXVpL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxzQkFBQTtBQ0ZGOztBRE9FOztFQUNFLFlBQUE7QUNISjs7QURJSTs7RUFDRSxnQkVUTTtBRFFaOztBRElJOzs7RUFFRSxtQkVWTTtFRldOLGNFTE07QURJWjs7QURJSTs7RUFDRSxtQkVqQk07RUZrQk4sY0VYTTtBRFVaOztBRElJOztFQUNFLDJCQUFBO0FDRE47O0FES0U7O0VBQ0UsNkJBQUE7QUNGSjs7QURNQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcmVzdC1jbGllbnQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2Nzc1wiO1xuXG50YWJzZXQgOjpuZy1kZWVwIC5uYXYtbGluayB7XG4gIC8vIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbn1cblxuYXBwLWhpc3RvcnktcmVxdWVzdHMgOjpuZy1kZWVwIHdqLWZsZXgtZ3JpZCxcbmFwcC1zYXZlZC1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIHtcbiAgLndqLWNlbGxzIC53ai1jZWxsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJi53ai1hbHQge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIH1cblxuICAgICYud2otc3RhdGUtc2VsZWN0ZWQsXG4gICAgJi53ai1zdGF0ZS1tdWx0aS1zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0zMDA7XG4gICAgICBjb2xvcjogJGdyYXktOTAwO1xuICAgIH1cblxuICAgICYud2otZ3JvdXAge1xuICAgICAgYmFja2dyb3VuZDogJGdyYXktMTAwO1xuICAgICAgY29sb3I6ICRncmF5LTgwMDtcbiAgICB9XG5cbiAgICAuYmFkZ2Uge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIC53ai1jZWxsOm5vdCgud2otZ3JvdXApOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubmV3LWRyb3Bkb3duIHtcbiAgei1pbmRleDogMjtcbiAgcmlnaHQ6IDA7XG59XG5cbjo6bmctZGVlcCAjZHJvcGRvd24tbmV3LWl0ZW0uZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbiIsInRhYnNldCA6Om5nLWRlZXAgLm5hdi1saW5rIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuYXBwLWhpc3RvcnktcmVxdWVzdHMgOjpuZy1kZWVwIHdqLWZsZXgtZ3JpZCAud2otY2VsbHMgLndqLWNlbGwsXG5hcHAtc2F2ZWQtcmVxdWVzdHMgOjpuZy1kZWVwIHdqLWZsZXgtZ3JpZCAud2otY2VsbHMgLndqLWNlbGwge1xuICBib3JkZXI6IG5vbmU7XG59XG5hcHAtaGlzdG9yeS1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIC53ai1jZWxscyAud2otY2VsbC53ai1hbHQsXG5hcHAtc2F2ZWQtcmVxdWVzdHMgOjpuZy1kZWVwIHdqLWZsZXgtZ3JpZCAud2otY2VsbHMgLndqLWNlbGwud2otYWx0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmFwcC1oaXN0b3J5LXJlcXVlc3RzIDo6bmctZGVlcCB3ai1mbGV4LWdyaWQgLndqLWNlbGxzIC53ai1jZWxsLndqLXN0YXRlLXNlbGVjdGVkLCBhcHAtaGlzdG9yeS1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIC53ai1jZWxscyAud2otY2VsbC53ai1zdGF0ZS1tdWx0aS1zZWxlY3RlZCxcbmFwcC1zYXZlZC1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIC53ai1jZWxscyAud2otY2VsbC53ai1zdGF0ZS1zZWxlY3RlZCxcbmFwcC1zYXZlZC1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIC53ai1jZWxscyAud2otY2VsbC53ai1zdGF0ZS1tdWx0aS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNjOGNlZDM7XG4gIGNvbG9yOiAjMjMyODJjO1xufVxuYXBwLWhpc3RvcnktcmVxdWVzdHMgOjpuZy1kZWVwIHdqLWZsZXgtZ3JpZCAud2otY2VsbHMgLndqLWNlbGwud2otZ3JvdXAsXG5hcHAtc2F2ZWQtcmVxdWVzdHMgOjpuZy1kZWVwIHdqLWZsZXgtZ3JpZCAud2otY2VsbHMgLndqLWNlbGwud2otZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiAjZjBmM2Y1O1xuICBjb2xvcjogIzJmMzUzYTtcbn1cbmFwcC1oaXN0b3J5LXJlcXVlc3RzIDo6bmctZGVlcCB3ai1mbGV4LWdyaWQgLndqLWNlbGxzIC53ai1jZWxsIC5iYWRnZSxcbmFwcC1zYXZlZC1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIC53ai1jZWxscyAud2otY2VsbCAuYmFkZ2Uge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5hcHAtaGlzdG9yeS1yZXF1ZXN0cyA6Om5nLWRlZXAgd2otZmxleC1ncmlkIC53ai1jZWxsOm5vdCgud2otZ3JvdXApOmZpcnN0LWNoaWxkLFxuYXBwLXNhdmVkLXJlcXVlc3RzIDo6bmctZGVlcCB3ai1mbGV4LWdyaWQgLndqLWNlbGw6bm90KC53ai1ncm91cCk6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm5ldy1kcm9wZG93biB7XG4gIHotaW5kZXg6IDI7XG4gIHJpZ2h0OiAwO1xufVxuXG46Om5nLWRlZXAgI2Ryb3Bkb3duLW5ldy1pdGVtLmRyb3Bkb3duLW1lbnUge1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAtMzBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iLCIvLyBDb2xvciBzeXN0ZW1cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuXHJcbiR3aGl0ZTogICAgICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LWJhc2U6ICMxODFiMWUgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICNmMGYzZjUgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODUlKTtcclxuJGdyYXktMjAwOiAgI2U0ZTdlYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA4MCUpO1xyXG4kZ3JheS0zMDA6ICAjYzhjZWQzICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDcwJSk7XHJcbiRncmF5LTQwMDogICNhY2I0YmMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNjAlKTtcclxuJGdyYXktNTAwOiAgIzhmOWJhNiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1MCUpO1xyXG4kZ3JheS02MDA6ICAjNzM4MThmICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDQwJSk7XHJcbiRncmF5LTcwMDogICM1YzY4NzMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzAlKTtcclxuJGdyYXktODAwOiAgIzJmMzUzYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCAxMCUpO1xyXG4kZ3JheS05MDA6ICAjMjMyODJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDUlKTtcclxuJGJsYWNrOiAgICAgIzAwMCAhZGVmYXVsdDtcclxuXHJcbiRncmF5czogKCkgIWRlZmF1bHQ7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcclxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcclxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcclxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcclxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogICAgICAgIzIwYThkOCAhZGVmYXVsdDtcclxuJGluZGlnbzogICAgICM2NjEwZjIgIWRlZmF1bHQ7XHJcbiRwdXJwbGU6ICAgICAjNmY0MmMxICFkZWZhdWx0O1xyXG4kcGluazogICAgICAgI2U4M2U4YyAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICNmODZjNmIgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAgICAjZjhjYjAwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgI2ZmYzEwNyAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICAgICM0ZGJkNzQgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAgICAjMjBjOTk3ICFkZWZhdWx0O1xyXG4kY3lhbjogICAgICAgIzE3YTJiOCAhZGVmYXVsdDtcclxuJGxpZ2h0LWJsdWU6ICM2M2MyZGUgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcclxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxyXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXHJcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXHJcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcclxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxyXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXHJcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxyXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxyXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxyXG4gICAgXCJsaWdodC1ibHVlXCI6ICRsaWdodC1ibHVlLFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcclxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXHJcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAgICAkbGlnaHQtYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gQnJhbmQgQ29sb3JzXHJcblxyXG4kZmFjZWJvb2s6ICAgICAgICMzYjU5OTggIWRlZmF1bHQ7XHJcbiR0d2l0dGVyOiAgICAgICAgIzAwYWNlZCAhZGVmYXVsdDtcclxuJGxpbmtlZGluOiAgICAgICAjNDg3NWI0ICFkZWZhdWx0O1xyXG4kZ29vZ2xlLXBsdXM6ICAgICNkMzQ4MzYgIWRlZmF1bHQ7XHJcbiRmbGlja3I6ICAgICAgICAgI2ZmMDA4NCAhZGVmYXVsdDtcclxuJHR1bWJscjogICAgICAgICAjMzI1MDZkICFkZWZhdWx0O1xyXG4keGluZzogICAgICAgICAgICMwMjY0NjYgIWRlZmF1bHQ7XHJcbiRnaXRodWI6ICAgICAgICAgIzQxODNjNCAhZGVmYXVsdDtcclxuJGh0bWw1OiAgICAgICAgICAjZTM0ZjI2ICFkZWZhdWx0O1xyXG4kb3BlbmlkOiAgICAgICAgICNmNzhjNDAgIWRlZmF1bHQ7XHJcbiRzdGFjay1vdmVyZmxvdzogI2ZlN2ExNSAhZGVmYXVsdDtcclxuJHlvdXR1YmU6ICAgICAgICAjYjAwICFkZWZhdWx0O1xyXG4kY3NzMzogICAgICAgICAgICMwMTcwYmEgIWRlZmF1bHQ7XHJcbiRkcmliYmJsZTogICAgICAgI2VhNGM4OSAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjYmI0YjM5ICFkZWZhdWx0O1xyXG4kaW5zdGFncmFtOiAgICAgICM1MTdmYTQgIWRlZmF1bHQ7XHJcbiRwaW50ZXJlc3Q6ICAgICAgI2NiMjAyNyAhZGVmYXVsdDtcclxuJHZrOiAgICAgICAgICAgICAjNDU2NjhlICFkZWZhdWx0O1xyXG4keWFob286ICAgICAgICAgICM0MDAxOTEgIWRlZmF1bHQ7XHJcbiRiZWhhbmNlOiAgICAgICAgIzE3NjlmZiAhZGVmYXVsdDtcclxuJGRyb3Bib3g6ICAgICAgICAjMDA3ZWU1ICFkZWZhdWx0O1xyXG4kcmVkZGl0OiAgICAgICAgICNmZjQ1MDAgIWRlZmF1bHQ7XHJcbiRzcG90aWZ5OiAgICAgICAgIzdhYjgwMCAhZGVmYXVsdDtcclxuJHZpbmU6ICAgICAgICAgICAjMDBiZjhmICFkZWZhdWx0O1xyXG4kZm91cnNxdWFyZTogICAgICMxMDczYWYgIWRlZmF1bHQ7XHJcbiR2aW1lbzogICAgICAgICAgI2FhZDQ1MCAhZGVmYXVsdDtcclxuXHJcbiRicmFuZHMtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGJyYW5kcy1jb2xvcnM6IG1hcC1tZXJnZSgoXHJcbiAgXCJmYWNlYm9va1wiOiAgICAgICAkZmFjZWJvb2ssXHJcbiAgXCJ0d2l0dGVyXCI6ICAgICAgICAkdHdpdHRlcixcclxuICBcImxpbmtlZGluXCI6ICAgICAgICRsaW5rZWRpbixcclxuICBcImdvb2dsZS1wbHVzXCI6ICAgICRnb29nbGUtcGx1cyxcclxuICBcImZsaWNrclwiOiAgICAgICAgICRmbGlja3IsXHJcbiAgXCJ0dW1ibHJcIjogICAgICAgICAkdHVtYmxyLFxyXG4gIFwieGluZ1wiOiAgICAgICAgICAgJHhpbmcsXHJcbiAgXCJnaXRodWJcIjogICAgICAgICAkZ2l0aHViLFxyXG4gIFwiaHRtbDVcIjogICAgICAgICAgJGh0bWw1LFxyXG4gIFwib3BlbmlkXCI6ICAgICAgICAgJG9wZW5pZCxcclxuICBcInN0YWNrLW92ZXJmbG93XCI6ICRzdGFjay1vdmVyZmxvdyxcclxuICBcInlvdXR1YmVcIjogICAgICAgICR5b3V0dWJlLFxyXG4gIFwiY3NzM1wiOiAgICAgICAgICAgJGNzczMsXHJcbiAgXCJkcmliYmJsZVwiOiAgICAgICAkZHJpYmJibGUsXHJcbiAgXCJpbnN0YWdyYW1cIjogICAgICAkaW5zdGFncmFtLFxyXG4gIFwicGludGVyZXN0XCI6ICAgICAgJHBpbnRlcmVzdCxcclxuICBcInZrXCI6ICAgICAgICAgICAgICR2ayxcclxuICBcInlhaG9vXCI6ICAgICAgICAgICR5YWhvbyxcclxuICBcImJlaGFuY2VcIjogICAgICAgICRiZWhhbmNlLFxyXG4gIFwiZHJvcGJveFwiOiAgICAgICAgJGRyb3Bib3gsXHJcbiAgXCJyZWRkaXRcIjogICAgICAgICAkcmVkZGl0LFxyXG4gIFwic3BvdGlmeVwiOiAgICAgICAgJHNwb3RpZnksXHJcbiAgXCJ2aW5lXCI6ICAgICAgICAgICAkdmluZSxcclxuICBcImZvdXJzcXVhcmVcIjogICAgICRmb3Vyc3F1YXJlLFxyXG4gIFwidmltZW9cIjogICAgICAgICAgJHZpbWVvXHJcbiksICRicmFuZHMtY29sb3JzKTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/rest-client/components/sidebar/sidebar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/rest-client/components/sidebar/sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_saved_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors/saved-requests */ "./src/app/rest-client/store/selectors/saved-requests.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_security_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security/services/login.service */ "./src/app/security/services/login.service.ts");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/utils */ "./src/app/rest-client/store/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, store, loginService, router) {
        this.authService = authService;
        this.store = store;
        this.loginService = loginService;
        this.router = router;
        this.isAuthenticated = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthenticated$.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
        });
        this.store.select(_store_selectors_saved_requests__WEBPACK_IMPORTED_MODULE_4__["selectError"]).subscribe(function (error) {
            _this.error = error;
        });
        this.store.select(_store_selectors_saved_requests__WEBPACK_IMPORTED_MODULE_4__["selectActiveRequest"]).subscribe(function (request) {
            if (request && _this.sideTabs && _this.sideTabs.tabs.length) {
                _this.sideTabs.tabs[1].active = true;
            }
        });
    };
    SidebarComponent.prototype.onNewRequest = function () {
        Object(_store_utils__WEBPACK_IMPORTED_MODULE_7__["updateStore"])(this.store);
        this.router.navigate(['/rest-client']);
    };
    SidebarComponent.prototype.onNewScriptedRequest = function () {
        Object(_store_utils__WEBPACK_IMPORTED_MODULE_7__["updateStore"])(this.store);
        this.router.navigate(['/rest-client', 'scripted-request']);
    };
    SidebarComponent.prototype.onNewData = function () {
        Object(_store_utils__WEBPACK_IMPORTED_MODULE_7__["updateStore"])(this.store, { request: {} });
        this.router.navigate(['/rest-client', 'data-editor']);
    };
    SidebarComponent.prototype.onLogin = function () {
        this.loginService.openDialog();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_security_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sideTabs', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"])
    ], SidebarComponent.prototype, "sideTabs", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rest-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/rest-client/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/rest-client/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_security__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            src_app_security_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/rest-client/models/index.ts":
/*!*********************************************!*\
  !*** ./src/app/rest-client/models/index.ts ***!
  \*********************************************/
/*! exports provided: ACTIONS, INTERPRETER, ContentTypes, LinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERPRETER", function() { return INTERPRETER; });
/* harmony import */ var _rest_content_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-content-model */ "./src/app/rest-client/models/rest-content-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentTypes", function() { return _rest_content_model__WEBPACK_IMPORTED_MODULE_0__["ContentTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkType", function() { return _rest_content_model__WEBPACK_IMPORTED_MODULE_0__["LinkType"]; });


var ACTIONS;
(function (ACTIONS) {
    ACTIONS["PRE_REQUEST"] = "pre-request-actions";
    ACTIONS["POST_REQUEST"] = "post-request-actions";
    ACTIONS["POST_REQUEST_SUCCESS"] = "success-response-actions";
    ACTIONS["POST_REQUEST_ERROR"] = "error-response-actions";
})(ACTIONS || (ACTIONS = {}));
var INTERPRETER;
(function (INTERPRETER) {
    INTERPRETER["PRE_REQUEST"] = "preRequest";
    INTERPRETER["POST_REQUEST_SUCCESS"] = "successResponse";
    INTERPRETER["POST_REQUEST_ERROR"] = "errorResponse";
})(INTERPRETER || (INTERPRETER = {}));


/***/ }),

/***/ "./src/app/rest-client/models/rest-content-model.ts":
/*!**********************************************************!*\
  !*** ./src/app/rest-client/models/rest-content-model.ts ***!
  \**********************************************************/
/*! exports provided: ContentTypes, LinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypes", function() { return ContentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkType", function() { return LinkType; });
// export type ContentTypes = 'application/json' | 'application/xml' | 'text/plain';
var ContentTypes;
(function (ContentTypes) {
    ContentTypes["JSON"] = "application/json";
    ContentTypes["XML"] = "application/xml";
    ContentTypes["TEXT"] = "text/plain";
    ContentTypes["FORM"] = "application/x-www-form-urlencoded";
})(ContentTypes || (ContentTypes = {}));
var LinkType;
(function (LinkType) {
    LinkType["RestRequest"] = "RestRequest";
    LinkType["ScriptedRequest"] = "MultiRequest";
    LinkType["DataEditor"] = "JsonValue";
})(LinkType || (LinkType = {}));


/***/ }),

/***/ "./src/app/rest-client/requests-history.ts":
/*!*************************************************!*\
  !*** ./src/app/rest-client/requests-history.ts ***!
  \*************************************************/
/*! exports provided: RequestsHistoryManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsHistoryManager", function() { return RequestsHistoryManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/rest-client/utils.ts");


var RequestsHistoryManager = /** @class */ (function () {
    function RequestsHistoryManager() {
    }
    RequestsHistoryManager.getSavedRequests = function () {
        return Object.values(getRequestsMap())
            .reduce(function (prev, val) { return prev.concat([val]); }, []);
    };
    RequestsHistoryManager.saveRequestConfig = function (restContentModel) {
        try {
            var requests = getRequestsMap();
            if (!restContentModel.responseInfo) {
                restContentModel.responseInfo = RequestsHistoryManager.getInitResponseInfo();
            }
            var key = RequestsHistoryManager.getKey(restContentModel);
            if (key) {
                var isNew_1 = !requests.hasOwnProperty(key);
                requests[key] = restContentModel;
                localStorage.setItem('requests', JSON.stringify(requests));
                RequestsHistoryManager.callbacks.forEach(function (c) { return c(restContentModel, isNew_1); });
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    RequestsHistoryManager.updateRequestConfig = function (restContentModel) {
        var requests = getRequestsMap();
        var historyModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, restContentModel, { responseInfo: RequestsHistoryManager.getInitResponseInfo() });
        var requestToUpdate = requests[RequestsHistoryManager.getKey(historyModel)];
        if (requestToUpdate) {
            RequestsHistoryManager.saveRequestConfig(Object.assign(requestToUpdate, restContentModel));
        }
        else {
            // throw new Error('Request configuration changed and should be send before update');
        }
    };
    RequestsHistoryManager.getInitResponseInfo = function () {
        return {
            date: new Date().toDateString(),
            status: 0,
            statusText: null,
            time: null
        };
    };
    RequestsHistoryManager.onRequestSave = function (callback) {
        if (typeof callback === 'function') {
            RequestsHistoryManager.callbacks.push(callback);
        }
    };
    RequestsHistoryManager.equals = function (reqA, reqB) {
        return RequestsHistoryManager.getKey(reqA) === RequestsHistoryManager.getKey(reqB);
    };
    RequestsHistoryManager.getKey = function (value) {
        if (!value) {
            return null;
        }
        var date = new Date(value.responseInfo.date).toDateString();
        if (value.request) {
            var body = JSON.stringify(value.request.body);
            var headers = JSON.stringify(value.request.headers);
            var queryParams = JSON.stringify(value.request.queryParameters);
            return [date, value.request.method, value.request.url, body, headers, queryParams].
                map(function (v) { return v && v.replace(/ /g, ''); }).join('-');
        }
        else {
            var name_1 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getScriptName"])(value.scripts);
            if (name_1) {
                return [date, name_1].map(function (v) { return v && v.replace(/ /g, ''); }).join('-');
            }
        }
    };
    RequestsHistoryManager.callbacks = [];
    return RequestsHistoryManager;
}());

function getRequestsMap() {
    var requestsStr = localStorage.getItem('requests');
    var requests;
    if (requestsStr) {
        requests = JSON.parse(requestsStr);
    }
    else {
        requests = {};
    }
    return requests;
}


/***/ }),

/***/ "./src/app/rest-client/rest-client-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/rest-client/rest-client-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RestClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClientRoutingModule", function() { return RestClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_rest_layout_rest_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rest-layout/rest-layout.component */ "./src/app/rest-client/components/rest-layout/rest-layout.component.ts");
/* harmony import */ var _components_rest_content_rest_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rest-content/rest-content.component */ "./src/app/rest-client/components/rest-content/rest-content.component.ts");
/* harmony import */ var _components_scripted_request_scripted_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scripted-request/scripted-request.component */ "./src/app/rest-client/components/scripted-request/scripted-request.component.ts");
/* harmony import */ var _components_data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/data-editor/data-editor.component */ "./src/app/rest-client/components/data-editor/data-editor.component.ts");







var routes = [{
        path: '',
        component: _components_rest_layout_rest_layout_component__WEBPACK_IMPORTED_MODULE_3__["RestLayoutComponent"],
        children: [{
                path: '',
                component: _components_rest_content_rest_content_component__WEBPACK_IMPORTED_MODULE_4__["RestContentComponent"],
                children: [{
                        path: ':ownerName/:requestName'
                    }]
            }, {
                path: 'scripted-request',
                component: _components_scripted_request_scripted_request_component__WEBPACK_IMPORTED_MODULE_5__["ScriptedRequestComponent"],
                children: [{
                        path: ':ownerName/:requestName'
                    }]
            }, {
                path: 'data-editor',
                component: _components_data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_6__["DataEditorComponent"],
                children: [{
                        path: ':ownerName/:requestName'
                    }]
            }]
    }];
var RestClientRoutingModule = /** @class */ (function () {
    function RestClientRoutingModule() {
    }
    RestClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RestClientRoutingModule);
    return RestClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/rest-client/rest-client.module.ts":
/*!***************************************************!*\
  !*** ./src/app/rest-client/rest-client.module.ts ***!
  \***************************************************/
/*! exports provided: RestClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClientModule", function() { return RestClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ "../ngx-dynamic-components/projects/bootstrap/src/public-api.ts");
/* harmony import */ var _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-dynamic-components/material */ "../ngx-dynamic-components/projects/material/src/public_api.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/wijmo/wijmo.module */ "./src/app/wijmo/wijmo.module.ts");
/* harmony import */ var _rest_client_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rest-client-routing.module */ "./src/app/rest-client/rest-client-routing.module.ts");
/* harmony import */ var _components_rest_layout_rest_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/rest-layout/rest-layout.component */ "./src/app/rest-client/components/rest-layout/rest-layout.component.ts");
/* harmony import */ var _components_rest_content_rest_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/rest-content/rest-content.component */ "./src/app/rest-client/components/rest-content/rest-content.component.ts");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/request/request.component */ "./src/app/rest-client/components/request/request.component.ts");
/* harmony import */ var _components_response_response_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/response/response.component */ "./src/app/rest-client/components/response/response.component.ts");
/* harmony import */ var _components_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dynamic-page/dynamic-page.component */ "./src/app/rest-client/components/dynamic-page/dynamic-page.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/rest-client/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_dynamic_workflow_dynamic_workflow_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dynamic-workflow/dynamic-workflow.component */ "./src/app/rest-client/components/dynamic-workflow/dynamic-workflow.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store */ "./src/app/rest-client/store/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/effects */ "./src/app/rest-client/store/effects/index.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/requests.service */ "./src/app/rest-client/services/requests.service.ts");
/* harmony import */ var _services_environment_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/environment.service */ "./src/app/rest-client/services/environment.service.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _components_saved_requests_saved_requests_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/saved-requests/saved-requests.component */ "./src/app/rest-client/components/saved-requests/saved-requests.component.ts");
/* harmony import */ var _components_environments_environments_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/environments/environments.component */ "./src/app/rest-client/components/environments/environments.component.ts");
/* harmony import */ var _components_assertion_logs_assertion_logs_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/assertion-logs/assertion-logs.component */ "./src/app/rest-client/components/assertion-logs/assertion-logs.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/rest-client/components/history/history.component.ts");
/* harmony import */ var _components_curl_form_curl_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/curl-form/curl-form.component */ "./src/app/rest-client/components/curl-form/curl-form.component.ts");
/* harmony import */ var _components_scripted_request_scripted_request_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/scripted-request/scripted-request.component */ "./src/app/rest-client/components/scripted-request/scripted-request.component.ts");
/* harmony import */ var _components_data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/data-editor/data-editor.component */ "./src/app/rest-client/components/data-editor/data-editor.component.ts");
/* harmony import */ var _components_save_request_save_request_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/save-request/save-request.component */ "./src/app/rest-client/components/save-request/save-request.component.ts");
/* harmony import */ var _components_show_in_presenter_show_in_presenter_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/show-in-presenter/show-in-presenter.component */ "./src/app/rest-client/components/show-in-presenter/show-in-presenter.component.ts");
/* harmony import */ var _services_run_request_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/run-request.service */ "./src/app/rest-client/services/run-request.service.ts");
/* harmony import */ var _components_script_script_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/script/script.component */ "./src/app/rest-client/components/script/script.component.ts");




// import ngx-bootstrap modules









































var RestClientModule = /** @class */ (function () {
    function RestClientModule() {
        // RestActions.init();
    }
    RestClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_rest_layout_rest_layout_component__WEBPACK_IMPORTED_MODULE_18__["RestLayoutComponent"],
                _components_rest_content_rest_content_component__WEBPACK_IMPORTED_MODULE_19__["RestContentComponent"],
                _components_request_request_component__WEBPACK_IMPORTED_MODULE_20__["RequestComponent"],
                _components_response_response_component__WEBPACK_IMPORTED_MODULE_21__["ResponseComponent"],
                _components_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_22__["DynamicPageComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
                _components_dynamic_workflow_dynamic_workflow_component__WEBPACK_IMPORTED_MODULE_24__["DynamicWorkflowComponent"],
                _components_saved_requests_saved_requests_component__WEBPACK_IMPORTED_MODULE_33__["SavedRequestsComponent"],
                _components_environments_environments_component__WEBPACK_IMPORTED_MODULE_34__["EnvironmentsComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_37__["HistoryComponent"],
                _components_curl_form_curl_form_component__WEBPACK_IMPORTED_MODULE_38__["CurlFormComponent"],
                _components_scripted_request_scripted_request_component__WEBPACK_IMPORTED_MODULE_39__["ScriptedRequestComponent"],
                _components_data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_40__["DataEditorComponent"],
                _components_save_request_save_request_component__WEBPACK_IMPORTED_MODULE_41__["SaveRequestComponent"],
                _components_assertion_logs_assertion_logs_component__WEBPACK_IMPORTED_MODULE_35__["AssertionLogsComponent"],
                _components_show_in_presenter_show_in_presenter_component__WEBPACK_IMPORTED_MODULE_42__["ShowInPresenterComponent"],
                _components_script_script_component__WEBPACK_IMPORTED_MODULE_44__["ScriptComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _rest_client_routing_module__WEBPACK_IMPORTED_MODULE_17__["RestClientRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__["ButtonsModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"].forRoot(),
                src_app_shared__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_16__["WijmoModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_11__["AngularSplitModule"].forRoot(),
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BootstrapModule"],
                _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_25__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_26__["reducers"], { metaReducers: _store__WEBPACK_IMPORTED_MODULE_26__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_32__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_27__["RestClientEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_31__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_36__["environment"].production,
                })
            ],
            providers: [_services_requests_service__WEBPACK_IMPORTED_MODULE_28__["RequestsService"], _services_environment_service__WEBPACK_IMPORTED_MODULE_29__["EnvironmentService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_30__["DialogService"], _services_run_request_service__WEBPACK_IMPORTED_MODULE_43__["RunRequestService"]],
            entryComponents: [_components_curl_form_curl_form_component__WEBPACK_IMPORTED_MODULE_38__["CurlFormComponent"], _components_save_request_save_request_component__WEBPACK_IMPORTED_MODULE_41__["SaveRequestComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestClientModule);
    return RestClientModule;
}());



/***/ }),

/***/ "./src/app/rest-client/rest-interpreter/functions.ts":
/*!***********************************************************!*\
  !*** ./src/app/rest-client/rest-interpreter/functions.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/interpreter */ "./src/app/shared/interpreter.ts");


Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__["registerFunction"])('setAppVariable', function (name, value) {
    src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__["Variables"].setVariable(name, value);
});
Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__["registerFunction"])('getAppVariable', function (name) {
    return src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__["Variables"].variables[name] !== undefined ? src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__["Variables"].variables[name] : null;
});
Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__["registerFunction"])('setContextVariable', function (name, value) {
    src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__["Variables"].setContextVariable({ name: name, value: value });
});
Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__["registerFunction"])('getContextVariable', function (name) {
    return src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__["Variables"].getContextVar(name) !== undefined ? src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_0__["Variables"].getContextVar(name) : null;
});


/***/ }),

/***/ "./src/app/rest-client/rest-interpreter/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/rest-client/rest-interpreter/index.ts ***!
  \*******************************************************/
/*! exports provided: RestInterpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestInterpreter", function() { return RestInterpreter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/interpreter */ "./src/app/shared/interpreter.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./src/app/rest-client/rest-interpreter/models.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "./src/app/rest-client/rest-interpreter/functions.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");






var RestInterpreter = /** @class */ (function () {
    function RestInterpreter() {
        var _this = this;
        this.reset();
        this.interpreter = Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__["getInterpreter"])();
        this.interpreter.addFunction('assert', function (condition, name, description) {
            _this.scriptContext.asserts = _this.scriptContext.asserts.concat([{ condition: condition, name: name, description: description }]);
        });
        this.interpreter.addFunction('error', function (error) {
            _this.scriptContext.errors = _this.scriptContext.errors.concat([error]);
        });
        this.interpreter.addFunction('showInObjectExplorer', function (data, title) {
            _this.showIn(_models__WEBPACK_IMPORTED_MODULE_3__["ShowInTypes"].ObjectExplorer, data, title);
        });
        this.interpreter.addFunction('showInJSON', function (data, title) {
            _this.showIn(_models__WEBPACK_IMPORTED_MODULE_3__["ShowInTypes"].JSON, data, title);
        });
        this.interpreter.addFunction('plotChart', function (data, title, chartConfig) {
            _this.showIn(_models__WEBPACK_IMPORTED_MODULE_3__["ShowInTypes"].Chart, data, title, chartConfig);
        });
    }
    RestInterpreter.prototype.evaluate = function (script, context, entryFunctionName) {
        if (context === void 0) { context = null; }
        if (entryFunctionName === void 0) { entryFunctionName = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.interpreter.evaluate(script, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context), entryFunctionName)];
                    case 1:
                        res = _a.sent();
                        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__["Variables"].syncAppVariables();
                        return [2 /*return*/, res];
                    case 2:
                        e_1 = _a.sent();
                        this.scriptContext.errors = this.scriptContext.errors.concat([Object(src_app_shared__WEBPACK_IMPORTED_MODULE_2__["getErrorMessage"])(e_1)]);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RestInterpreter.prototype.reset = function () {
        this.scriptContext = {
            errors: [],
            asserts: [],
            showInItems: []
        };
    };
    RestInterpreter.prototype.showIn = function (type, data, title, config) {
        this.scriptContext.showInItems = this.scriptContext.showInItems.concat([{ type: type, data: data, title: title, config: config }]);
    };
    return RestInterpreter;
}());



/***/ }),

/***/ "./src/app/rest-client/rest-interpreter/models.ts":
/*!********************************************************!*\
  !*** ./src/app/rest-client/rest-interpreter/models.ts ***!
  \********************************************************/
/*! exports provided: ShowInTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInTypes", function() { return ShowInTypes; });
var ShowInTypes;
(function (ShowInTypes) {
    ShowInTypes["ObjectExplorer"] = "object-explorer";
    ShowInTypes["JSON"] = "JSON";
    ShowInTypes["Chart"] = "Chart";
})(ShowInTypes || (ShowInTypes = {}));


/***/ }),

/***/ "./src/app/rest-client/rest-interpreter/snippets.ts":
/*!**********************************************************!*\
  !*** ./src/app/rest-client/rest-interpreter/snippets.ts ***!
  \**********************************************************/
/*! exports provided: snippets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snippets", function() { return snippets; });
var DATA = [
    'data = [',
    '\t{color: "blue", value: 10},',
    '\t{color: "yellow", value: 20},',
    '\t{color: "red", value: 15},',
    '\t{color: "black", value: 25}',
    ']'
];
var snippets = [{
        title: 'Asserts',
        script: 'assert(5 == 10, "My Test", "Testing falsy assertion")'
    }, {
        title: 'Print to console',
        script: 'print("Hello World!") # Print to output console'
    }, {
        title: 'Show results in object explorer',
        script: DATA.concat([
            'showInObjectExplorer(data, "Tab title")'
        ]).join('\n')
    }, {
        title: 'Show results in JSON',
        script: DATA.concat([
            'showInJSON(data, "JSON")'
        ]).join('\n')
    }, {
        title: 'plot chart',
        script: DATA.concat([
            '',
            '# chartTypes: Column | Bar | Scatter | Line | LineSymbols | Area | Spline | SplineSymbols | SplineArea    ',
            '# you can also provide chartType for each series',
            'chartConfig = {',
            '\tchartType: "Column",',
            '\tbindingX: "color",',
            '\theader: "Chart title",',
            '\tseries: [{binding: "value", name: "value"}]',
            '}',
            'plotChart(data, "Chart Data", chartConfig)'
        ]).join('\n')
    }, {
        title: 'Get contex variable',
        script: 'variable = getContextVariable("variableName")'
    }, {
        title: 'Get app variable',
        script: 'userName = getAppVariable("user_name")'
    }, {
        title: 'Set context variable',
        script: 'getContextVariable("count", 1)'
    }, {
        title: 'Set app variable',
        script: 'setAppVariable("request", "new request")'
    }, {
        title: 'Run saved request',
        script: 'result = runRequest("owner.request", False, False)'
    }, {
        title: 'httpGet request',
        script: [
            'data = httpGet("https://restcountries.eu/rest/v2/regionalbloc/eu")',
            'showInObjectExplorer(data, "Response data")'
        ].join('\n')
    }, {
        title: 'Plot Chart and show data in Object Explorer',
        script: [
            'data = httpGet("https://restcountries.eu/rest/v2/regionalbloc/eu?fields=alpha3Code;population")',
            'chartConfig = {',
            '\tchartType: "Column",',
            '\tbindingX: "alpha3Code",',
            '\theader: "EU Populations"',
            '}',
            'showInObjectExplorer(data, "Data")',
            'plotChart(data, "EU Populations", chartConfig)'
        ].join('\n')
    }
];


/***/ }),

/***/ "./src/app/rest-client/services/environment.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/rest-client/services/environment.service.ts ***!
  \*************************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");





var EnvironmentService = /** @class */ (function () {
    function EnvironmentService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    EnvironmentService.prototype.getEnvVariables$ = function () {
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/environment/variables", this.authService.getHttpHeaders());
    };
    EnvironmentService.prototype.saveEnvVariables$ = function (vars) {
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/environment/variables", vars, this.authService.getHttpHeaders());
    };
    EnvironmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    EnvironmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_security__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], EnvironmentService);
    return EnvironmentService;
}());



/***/ }),

/***/ "./src/app/rest-client/services/requests.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/rest-client/services/requests.service.ts ***!
  \**********************************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/app/rest-client/utils.ts");
/* harmony import */ var _rest_interpreter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rest-interpreter */ "./src/app/rest-client/rest-interpreter/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");













var RequestsService = /** @class */ (function () {
    function RequestsService(httpClient, authService, store) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.store = store;
    }
    /*
    * TODO: Add return type
    */
    RequestsService.prototype.send = function (requestModel) {
        var _a = src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_5__["Variables"].resolve(requestModel), method = _a.method, url = _a.url, headers = _a.headers, queryParameters = _a.queryParameters, body = _a.body;
        var httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            httpHeader = httpHeader.set(name, value);
        });
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        queryParameters.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            httpParams = httpParams.append(name, value);
        });
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](method, url.replace(/\/+/g, '/').replace(':/', '://'), body, {
            headers: httpHeader,
            params: httpParams,
            responseType: 'text',
        });
        return this.httpClient.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])());
    };
    RequestsService.prototype.getSavedRequests$ = function () {
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/my/requests", this.authService.getHttpHeaders());
    };
    RequestsService.prototype.getSavedRequest$ = function (_a) {
        var ownerName = _a.ownerName, requestName = _a.requestName;
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/my/request/" + ownerName + "/" + requestName, this.authService.getHttpHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('Failed to load.'); }));
    };
    RequestsService.prototype.saveRequest$ = function (rrInfo) {
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/my/request", Object(_utils__WEBPACK_IMPORTED_MODULE_10__["filterDynamicPagesVars"])(rrInfo), this.authService.getHttpHeaders());
    };
    RequestsService.prototype.deleteRequest$ = function (requestId) {
        return this.httpClient
            .delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/my/request/" + requestId, this.authService.getHttpHeaders());
    };
    RequestsService.prototype.executeInterpreter = function (script, funcName, context, interpreter) {
        if (context === void 0) { context = {}; }
        if (interpreter === void 0) { interpreter = new _rest_interpreter__WEBPACK_IMPORTED_MODULE_11__["RestInterpreter"](); }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!script) return [3 /*break*/, 2];
                        return [4 /*yield*/, interpreter.evaluate(script, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, context), funcName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, interpreter];
                    case 2: return [2 /*return*/, Promise.resolve(null)];
                }
            });
        });
    };
    RequestsService.prototype.sendRequest = function (request, script, interpreter) {
        var _this = this;
        var startTime = new Date().getTime();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.executeInterpreter(script, _models__WEBPACK_IMPORTED_MODULE_4__["INTERPRETER"].PRE_REQUEST, { request: request }, interpreter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (eI) {
            if (request.cancelRequest) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ scriptContext: eI.scriptContext });
            }
            return _this.send(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) { return responseHandler(response, startTime, eI.scriptContext); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return responseHandler(error, startTime, eI.scriptContext); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
                var response = _a.response, status = _a.status;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this.executeInterpreter(script, status.status === 200 ? _models__WEBPACK_IMPORTED_MODULE_4__["INTERPRETER"].POST_REQUEST_SUCCESS : _models__WEBPACK_IMPORTED_MODULE_4__["INTERPRETER"].POST_REQUEST_ERROR, { response: response }, eI)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["setResponseContextVars"])(response);
                    return {
                        response: response,
                        status: status,
                        scriptContext: e.scriptContext
                    };
                }));
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ scriptContext: e.scriptContext }); })).toPromise();
    };
    RequestsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }
    ]; };
    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_security__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], RequestsService);
    return RequestsService;
}());

function responseHandler(response, startTime, scriptContext) {
    var time = +new Date() - startTime;
    var status = {
        status: response.status,
        statusText: response.statusText,
        time: time,
        date: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_12__["dateToDtoString"])(new Date())
    };
    if (response.status !== 200 && response.message) {
        status.error = response.message;
    }
    var res = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getResponse"])(response);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ response: res, status: status, scriptContext: scriptContext });
}


/***/ }),

/***/ "./src/app/rest-client/services/run-request.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/rest-client/services/run-request.service.ts ***!
  \*************************************************************/
/*! exports provided: RunRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunRequestService", function() { return RunRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requests.service */ "./src/app/rest-client/services/requests.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/app/rest-client/utils.ts");
/* harmony import */ var _rest_interpreter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest-interpreter */ "./src/app/rest-client/rest-interpreter/index.ts");
/* harmony import */ var src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/interpreter */ "./src/app/shared/interpreter.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models */ "./src/app/rest-client/models/index.ts");









var RunRequestService = /** @class */ (function () {
    function RunRequestService(requestService) {
        this.requestService = requestService;
        function executeRequest(requestName, ignorePreRequestScripts, ignorePostRequestScripts) {
            if (ignorePreRequestScripts === void 0) { ignorePreRequestScripts = true; }
            if (ignorePostRequestScripts === void 0) { ignorePostRequestScripts = true; }
            var _a = requestName.split('.'), ownerName = _a[0], objectName = _a[1];
            return requestService.getSavedRequest$({ ownerName: ownerName, requestName: objectName }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((function (requestInfo) {
                if (requestInfo) {
                    return requestService.send(requestInfo.request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(e); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return ({ response: response, requestInfo: requestInfo }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
                        var response = _a.response;
                        var res = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getResponse"])(response);
                        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["setResponseContextVars"])(res);
                        if (!ignorePostRequestScripts) {
                            var script = requestInfo.scripts;
                            if (response.status === 200) {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new _rest_interpreter__WEBPACK_IMPORTED_MODULE_6__["RestInterpreter"]().evaluate(script, { response: res }, _models__WEBPACK_IMPORTED_MODULE_8__["INTERPRETER"].POST_REQUEST_SUCCESS)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return res; }));
                            }
                            else {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new _rest_interpreter__WEBPACK_IMPORTED_MODULE_6__["RestInterpreter"]().evaluate(script, { error: res }, _models__WEBPACK_IMPORTED_MODULE_8__["INTERPRETER"].POST_REQUEST_ERROR)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return res; }));
                            }
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response);
                    }));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }))).toPromise();
        }
        Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_7__["registerFunction"])('runRequest', executeRequest);
    }
    RunRequestService.ctorParameters = function () { return [
        { type: _requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] }
    ]; };
    RunRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"]])
    ], RunRequestService);
    return RunRequestService;
}());



/***/ }),

/***/ "./src/app/rest-client/store/actions/index.ts":
/*!****************************************************!*\
  !*** ./src/app/rest-client/store/actions/index.ts ***!
  \****************************************************/
/*! exports provided: ActionTypes, setScripts, UpdateRequestModel, SendRequest, SaveRequestInHistory, RecieveResponse, SetDynamicPages, SaveDynamicPages, ClearResponse, UpdateUiSettings, SavedRequestsActionTypes, SaveRequest, SavedRequest, SaveRequestFailed, LoadRequests, LoadedRequests, LoadRequestsFailed, LoadRequest, LoadedRequest, LoadRequestFailed, DeselectRequest, DeleteRequest, DeletedRequest, AppActionTypes, AppErrorAction, AppInfoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActionTypes", function() { return AppActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorAction", function() { return AppErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoAction", function() { return AppInfoAction; });
/* harmony import */ var _rest_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-content */ "./src/app/rest-client/store/actions/rest-content.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScripts", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["setScripts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestModel", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["UpdateRequestModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendRequest", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["SendRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveRequestInHistory", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["SaveRequestInHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecieveResponse", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["RecieveResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetDynamicPages", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["SetDynamicPages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveDynamicPages", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["SaveDynamicPages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearResponse", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["ClearResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUiSettings", function() { return _rest_content__WEBPACK_IMPORTED_MODULE_0__["UpdateUiSettings"]; });

/* harmony import */ var _saved_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-requests */ "./src/app/rest-client/store/actions/saved-requests.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedRequestsActionTypes", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["SaveRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["SavedRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveRequestFailed", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["SaveRequestFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadRequests", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["LoadRequests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadedRequests", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["LoadedRequests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadRequestsFailed", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["LoadRequestsFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["LoadRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadedRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["LoadedRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadRequestFailed", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["LoadRequestFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeselectRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["DeselectRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["DeleteRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletedRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_1__["DeletedRequest"]; });



var AppActionTypes;
(function (AppActionTypes) {
    AppActionTypes["ERROR"] = "[Rest client] error appear";
    AppActionTypes["INFO"] = "[Rest client] info";
})(AppActionTypes || (AppActionTypes = {}));
var AppErrorAction = /** @class */ (function () {
    function AppErrorAction(payload) {
        this.payload = payload;
        this.type = AppActionTypes.ERROR;
    }
    AppErrorAction.ctorParameters = function () { return [
        null
    ]; };
    return AppErrorAction;
}());

var AppInfoAction = /** @class */ (function () {
    function AppInfoAction(payload) {
        this.payload = payload;
        this.type = AppActionTypes.INFO;
    }
    AppInfoAction.ctorParameters = function () { return [
        null
    ]; };
    return AppInfoAction;
}());



/***/ }),

/***/ "./src/app/rest-client/store/actions/rest-content.ts":
/*!***********************************************************!*\
  !*** ./src/app/rest-client/store/actions/rest-content.ts ***!
  \***********************************************************/
/*! exports provided: ActionTypes, setScripts, UpdateRequestModel, SendRequest, SaveRequestInHistory, RecieveResponse, SetDynamicPages, SaveDynamicPages, ClearResponse, UpdateUiSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScripts", function() { return setScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestModel", function() { return UpdateRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRequest", function() { return SendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveRequestInHistory", function() { return SaveRequestInHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieveResponse", function() { return RecieveResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDynamicPages", function() { return SetDynamicPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDynamicPages", function() { return SaveDynamicPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearResponse", function() { return ClearResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUiSettings", function() { return UpdateUiSettings; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["UPDATE_REQUEST_MODEL"] = "[Rest content] update model";
    ActionTypes["SEND_REQUEST"] = "[Rest content] send request";
    ActionTypes["RECEIVE_RESPONSE"] = "[Rest content] receive responce";
    ActionTypes["UPDATE_RESPONSE_WORKFLOWS"] = "[Rest content] update response workflows";
    ActionTypes["SAVE_REQUEST"] = "[Rest content] save request to history";
    ActionTypes["CLEAR_RESPONSE"] = "[Rest content] clear response";
    ActionTypes["SET_RESPONSE_WORKFLOWS"] = "[Rest content] set response workflows";
    ActionTypes["SAVE_RESPONSE_WORKFLOWS"] = "[Rest content] save response workflows";
    ActionTypes["UPDATE_UI_SETTINGS"] = "[Rest content] update ui settings";
    ActionTypes["SET_DYNAMIC_PAGES"] = "[Rest content] set dynamic pages";
    ActionTypes["SAVE_DYNAMIC_PAGES"] = "[Rest content] save dynamic pages";
})(ActionTypes || (ActionTypes = {}));
var setScripts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Rest content] set scripts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var UpdateRequestModel = /** @class */ (function () {
    function UpdateRequestModel(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_REQUEST_MODEL;
    }
    UpdateRequestModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateRequestModel;
}());

var SendRequest = /** @class */ (function () {
    function SendRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEND_REQUEST;
    }
    SendRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SendRequest;
}());

var SaveRequestInHistory = /** @class */ (function () {
    function SaveRequestInHistory(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_REQUEST;
    }
    SaveRequestInHistory.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SaveRequestInHistory;
}());

var RecieveResponse = /** @class */ (function () {
    function RecieveResponse(payload, status) {
        this.payload = payload;
        this.status = status;
        this.type = ActionTypes.RECEIVE_RESPONSE;
    }
    RecieveResponse.ctorParameters = function () { return [
        null,
        { type: undefined }
    ]; };
    return RecieveResponse;
}());

var SetDynamicPages = /** @class */ (function () {
    function SetDynamicPages(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_DYNAMIC_PAGES;
    }
    SetDynamicPages.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return SetDynamicPages;
}());

var SaveDynamicPages = /** @class */ (function () {
    function SaveDynamicPages(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_DYNAMIC_PAGES;
    }
    SaveDynamicPages.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return SaveDynamicPages;
}());

var ClearResponse = /** @class */ (function () {
    function ClearResponse() {
        this.type = ActionTypes.CLEAR_RESPONSE;
    }
    return ClearResponse;
}());

var UpdateUiSettings = /** @class */ (function () {
    function UpdateUiSettings(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_UI_SETTINGS;
    }
    UpdateUiSettings.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUiSettings;
}());



/***/ }),

/***/ "./src/app/rest-client/store/actions/saved-requests.ts":
/*!*************************************************************!*\
  !*** ./src/app/rest-client/store/actions/saved-requests.ts ***!
  \*************************************************************/
/*! exports provided: SavedRequestsActionTypes, SaveRequest, SavedRequest, SaveRequestFailed, LoadRequests, LoadedRequests, LoadRequestsFailed, LoadRequest, LoadedRequest, LoadRequestFailed, DeselectRequest, DeleteRequest, DeletedRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRequestsActionTypes", function() { return SavedRequestsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveRequest", function() { return SaveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRequest", function() { return SavedRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveRequestFailed", function() { return SaveRequestFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRequests", function() { return LoadRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedRequests", function() { return LoadedRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRequestsFailed", function() { return LoadRequestsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRequest", function() { return LoadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedRequest", function() { return LoadedRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRequestFailed", function() { return LoadRequestFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeselectRequest", function() { return DeselectRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRequest", function() { return DeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletedRequest", function() { return DeletedRequest; });
var SavedRequestsActionTypes;
(function (SavedRequestsActionTypes) {
    SavedRequestsActionTypes["SAVE_REQUEST"] = "[Saved requests] save request";
    SavedRequestsActionTypes["SAVED_REQUEST"] = "[Saved requests] saves request";
    SavedRequestsActionTypes["SAVE_REQUEST_FAILED"] = "[Saved requests] save request failed";
    SavedRequestsActionTypes["LOAD_REQUESTS"] = "[Saved requests] load requests";
    SavedRequestsActionTypes["LOADED_REQUESTS"] = "[Saved requests] loaded requests";
    SavedRequestsActionTypes["LOAD_REQUESTS_FAILED"] = "[Saved requests] load requests failed";
    SavedRequestsActionTypes["LOAD_REQUEST"] = "[Saved requests] load request";
    SavedRequestsActionTypes["LOADED_REQUEST"] = "[Saved requests] loaded request";
    SavedRequestsActionTypes["LOAD_REQUEST_FAILED"] = "[Saved requests] load request failed";
    SavedRequestsActionTypes["DESELECT_REQUEST"] = "[Saved requests] deselect request";
    SavedRequestsActionTypes["DELETE_REQUEST"] = "[Saved requests] delete request";
    SavedRequestsActionTypes["DELETED_REQUEST"] = "[Saved requests] deleted request";
})(SavedRequestsActionTypes || (SavedRequestsActionTypes = {}));
var SaveRequest = /** @class */ (function () {
    function SaveRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.SAVE_REQUEST;
    }
    SaveRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SaveRequest;
}());

var SavedRequest = /** @class */ (function () {
    function SavedRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.SAVED_REQUEST;
    }
    SavedRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SavedRequest;
}());

var SaveRequestFailed = /** @class */ (function () {
    function SaveRequestFailed(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.SAVE_REQUEST_FAILED;
    }
    SaveRequestFailed.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SaveRequestFailed;
}());

var LoadRequests = /** @class */ (function () {
    function LoadRequests() {
        this.type = SavedRequestsActionTypes.LOAD_REQUESTS;
    }
    return LoadRequests;
}());

var LoadedRequests = /** @class */ (function () {
    function LoadedRequests(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.LOADED_REQUESTS;
    }
    LoadedRequests.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadedRequests;
}());

var LoadRequestsFailed = /** @class */ (function () {
    function LoadRequestsFailed(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.LOAD_REQUESTS_FAILED;
    }
    LoadRequestsFailed.ctorParameters = function () { return [
        null
    ]; };
    return LoadRequestsFailed;
}());

var LoadRequest = /** @class */ (function () {
    function LoadRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.LOAD_REQUEST;
    }
    LoadRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadRequest;
}());

var LoadedRequest = /** @class */ (function () {
    function LoadedRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.LOADED_REQUEST;
    }
    LoadedRequest.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadedRequest;
}());

var LoadRequestFailed = /** @class */ (function () {
    function LoadRequestFailed(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.LOAD_REQUEST_FAILED;
    }
    LoadRequestFailed.ctorParameters = function () { return [
        null
    ]; };
    return LoadRequestFailed;
}());

var DeselectRequest = /** @class */ (function () {
    function DeselectRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.DESELECT_REQUEST;
    }
    DeselectRequest.ctorParameters = function () { return [
        { type: String }
    ]; };
    return DeselectRequest;
}());

var DeleteRequest = /** @class */ (function () {
    function DeleteRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.DELETE_REQUEST;
    }
    DeleteRequest.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return DeleteRequest;
}());

var DeletedRequest = /** @class */ (function () {
    function DeletedRequest(payload) {
        this.payload = payload;
        this.type = SavedRequestsActionTypes.DELETED_REQUEST;
    }
    DeletedRequest.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return DeletedRequest;
}());



/***/ }),

/***/ "./src/app/rest-client/store/effects/index.ts":
/*!****************************************************!*\
  !*** ./src/app/rest-client/store/effects/index.ts ***!
  \****************************************************/
/*! exports provided: RestClientEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClientEffects", function() { return RestClientEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/index */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/requests.service */ "./src/app/rest-client/services/requests.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/saved-requests */ "./src/app/rest-client/store/actions/saved-requests.ts");
/* harmony import */ var _actions_rest_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/rest-content */ "./src/app/rest-client/store/actions/rest-content.ts");














var RestClientEffects = /** @class */ (function () {
    function RestClientEffects(actions$, requestsService, router, notificationService) {
        var _this = this;
        this.actions$ = actions$;
        this.requestsService = requestsService;
        this.router = router;
        this.notificationService = notificationService;
        this.loadRequests = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["SavedRequestsActionTypes"].LOAD_REQUESTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.requestsService.getSavedRequests$(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (requests) { return new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["LoadedRequests"](requests); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["LoadRequestsFailed"](e.error || 'Failed to load saved requests.')); }));
        this.saveRequest = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["SavedRequestsActionTypes"].SAVE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return _this.requestsService.saveRequest$(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (id) {
                var link = payload;
                // TODO: remove hardcoded module path.
                switch (link.linkType) {
                    case _models__WEBPACK_IMPORTED_MODULE_11__["LinkType"].RestRequest:
                        _this.router.navigate(['/rest-client', link.ownerName, link.name]);
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_11__["LinkType"].ScriptedRequest:
                        _this.router.navigate(['/rest-client/scripted-request', link.ownerName, link.name]);
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_11__["LinkType"].DataEditor:
                        _this.router.navigate(['/rest-client/data-editor', link.ownerName, link.name]);
                        break;
                }
                return [
                    new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["SavedRequest"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, link)),
                    new _actions_index__WEBPACK_IMPORTED_MODULE_9__["AppInfoAction"]('Request saved successfully')
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_9__["AppErrorAction"](Object(src_app_shared__WEBPACK_IMPORTED_MODULE_8__["getErrorMessage"])(e, "Failed to save request " + payload['name']))); }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["SaveRequestFailed"](e.error)); }));
        this.loadRequest = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["SavedRequestsActionTypes"].LOAD_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            var _b = payload, ownerName = _b.ownerName, requestName = _b.requestName;
            if (!ownerName || !requestName) {
                return [new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["DeselectRequest"]()];
            }
            return _this.requestsService.getSavedRequest$(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (requestInfo) {
                if (!requestInfo) {
                    var error = "Request " + requestName + " of owner " + ownerName + " not found";
                    return [
                        new _actions_index__WEBPACK_IMPORTED_MODULE_9__["AppErrorAction"](error),
                        new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["DeselectRequest"](),
                        new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["LoadRequestFailed"](error),
                    ];
                }
                return [
                    new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["LoadedRequest"](requestInfo),
                    new _actions_rest_content__WEBPACK_IMPORTED_MODULE_13__["UpdateRequestModel"](requestInfo.request),
                    new _actions_rest_content__WEBPACK_IMPORTED_MODULE_13__["SetDynamicPages"](requestInfo.dynamicPages),
                    new _actions_rest_content__WEBPACK_IMPORTED_MODULE_13__["UpdateUiSettings"](requestInfo.uiSettings),
                    Object(_actions_rest_content__WEBPACK_IMPORTED_MODULE_13__["setScripts"])({ scripts: requestInfo.scripts }),
                    new _actions_rest_content__WEBPACK_IMPORTED_MODULE_13__["ClearResponse"]()
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["LoadRequestFailed"](e.error || "Failed to load " + requestName + " of owner " + ownerName), new _actions_index__WEBPACK_IMPORTED_MODULE_9__["AppErrorAction"](e.error || "Failed to load " + requestName + " of owner " + ownerName)); }));
        }));
        this.deleteRequest = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["SavedRequestsActionTypes"].DELETE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return _this.requestsService.deleteRequest$(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                return [
                    new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["DeletedRequest"](payload),
                    new _actions_saved_requests__WEBPACK_IMPORTED_MODULE_12__["DeselectRequest"](),
                    new _actions_index__WEBPACK_IMPORTED_MODULE_9__["AppInfoAction"]('Request deleted')
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_9__["AppErrorAction"](e.error || "Failed to delete request id: " + payload + ".")); }));
        }));
        this.appError = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["AppActionTypes"].ERROR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var payload = _a.payload;
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].DANGER,
                message: payload
            });
            return { type: '[Rest client] error shown' };
        }));
        this.appInfo = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["AppActionTypes"].INFO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var payload = _a.payload;
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].SUCCESS,
                message: payload
            });
            return { type: '[Rest client] info shown' };
        }));
        this.deselectRequest = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_9__["SavedRequestsActionTypes"].DESELECT_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var payload = _a.payload;
            if (payload) {
                _this.router.navigateByUrl(payload);
            }
            else if (_this.router.url.includes('/rest-client/scripted-request')) {
                _this.router.navigate(['/rest-client/scripted-request']);
            }
            else if (_this.router.url.includes('/rest-client/data-editor')) {
                _this.router.navigate(['/rest-client/data-editor']);
            }
            else {
                _this.router.navigate(['/rest-client']);
            }
            return { type: '[Saved requests] deselected' };
        }));
    }
    RestClientEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_10__["RequestsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "loadRequests", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "saveRequest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "loadRequest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "deleteRequest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "appError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "appInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestClientEffects.prototype, "deselectRequest", void 0);
    RestClientEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _services_requests_service__WEBPACK_IMPORTED_MODULE_10__["RequestsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], RestClientEffects);
    return RestClientEffects;
}());



/***/ }),

/***/ "./src/app/rest-client/store/index.ts":
/*!********************************************!*\
  !*** ./src/app/rest-client/store/index.ts ***!
  \********************************************/
/*! exports provided: reducers, metaReducers, selectResponseModel, selectResponseStatus, selectResponseLoading, selectDynamicPages, selectRequest, selectRequestModel, selectRequestScript, responseReducer, requestsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/rest-client/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["metaReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectResponseModel", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectResponseModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectResponseStatus", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectResponseStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectResponseLoading", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectResponseLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectDynamicPages", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectDynamicPages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRequest", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRequestModel", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRequestModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRequestScript", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRequestScript"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responseReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["responseReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestsReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["requestsReducer"]; });




/***/ }),

/***/ "./src/app/rest-client/store/reducers/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/rest-client/store/reducers/index.ts ***!
  \*****************************************************/
/*! exports provided: reducers, metaReducers, selectResponseModel, selectResponseStatus, selectResponseLoading, selectDynamicPages, selectRequest, selectRequestModel, selectRequestScript, responseReducer, requestsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResponseModel", function() { return selectResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResponseStatus", function() { return selectResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResponseLoading", function() { return selectResponseLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDynamicPages", function() { return selectDynamicPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRequest", function() { return selectRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRequestModel", function() { return selectRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRequestScript", function() { return selectRequestScript; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests */ "./src/app/rest-client/store/reducers/requests.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response */ "./src/app/rest-client/store/reducers/response.ts");
/* harmony import */ var _saved_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saved-requests */ "./src/app/rest-client/store/reducers/saved-requests.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responseReducer", function() { return _response__WEBPACK_IMPORTED_MODULE_3__["responseReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestsReducer", function() { return _requests__WEBPACK_IMPORTED_MODULE_2__["requestsReducer"]; });








var reducers = {
    requestModel: _requests__WEBPACK_IMPORTED_MODULE_2__["requestsReducer"],
    responseModel: _response__WEBPACK_IMPORTED_MODULE_3__["responseReducer"],
    savedRequests: _saved_requests__WEBPACK_IMPORTED_MODULE_4__["savedRequestsReducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
// Selectors.
var selectResponseModel = function (state) { return state.responseModel.response; };
var selectResponseStatus = function (state) { return state.responseModel.status; };
var selectResponseLoading = function (state) { return state.responseModel.loading; };
var selectDynamicPages = function (state) { return state.requestModel.requestContentModel.dynamicPages; };
var selectRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('requestModel');
var selectRequestModel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRequest, function (state) { return state.requestContentModel.request; });
var selectRequestScript = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRequest, function (state) { return state.requestContentModel.scripts; });


/***/ }),

/***/ "./src/app/rest-client/store/reducers/requests.ts":
/*!********************************************************!*\
  !*** ./src/app/rest-client/store/reducers/requests.ts ***!
  \********************************************************/
/*! exports provided: requestsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestsReducer", function() { return requestsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _requests_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../requests-history */ "./src/app/rest-client/requests-history.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");





var initRequest = {
    method: 'GET',
    url: '',
    headers: [{
            name: 'Content-Type',
            value: 'application/json',
            active: true
        }],
    queryParameters: [],
    contentType: _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].JSON,
    body: undefined,
};
var initialRestContentModel = {
    request: initRequest,
    uiSettings: {
        isRequestPanelCollapsed: true,
        showObjectExplorer: true,
        showContent: true,
        showHeader: true,
        showWorkflow: true,
        showPages: true
    }
};
var initialRestClient = {
    requestContentModel: initialRestContentModel
};
/** TODO use createReducer */
function requestsReducer(state, action) {
    if (state === void 0) { state = initialRestClient; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].UPDATE_REQUEST_MODEL: {
            var payload = action.payload;
            if (payload) {
                if (payload.headers) {
                    var contentType = payload.headers.find(function (h) { return h.name === 'Content-Type'; });
                    payload.contentType = contentType ? contentType.value : _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].JSON;
                }
                if (payload.body && typeof payload.body !== 'string') {
                    payload.body = JSON.stringify(payload.body);
                }
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestContentModel: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel, { request: payload === undefined ? initRequest : payload }) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["setScripts"].type: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestContentModel: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel, { scripts: action.scripts }) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].SAVE_REQUEST: {
            _requests_history__WEBPACK_IMPORTED_MODULE_3__["RequestsHistoryManager"].saveRequestConfig(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel, { responseInfo: action.payload }));
            return state;
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].UPDATE_UI_SETTINGS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestContentModel: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel, { uiSettings: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel.uiSettings, action.payload) }) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].SEND_REQUEST: {
            var _a = state.requestContentModel.request, url = _a.url, method = _a.method;
            src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_4__["Variables"].setContextVariable({ name: 'requestUrl', value: url });
            src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_4__["Variables"].setContextVariable({ name: 'requestMethod', value: method });
            return state;
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].SAVE_DYNAMIC_PAGES: {
            var requestContentModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel, { dynamicPages: action.payload });
            _requests_history__WEBPACK_IMPORTED_MODULE_3__["RequestsHistoryManager"].updateRequestConfig(requestContentModel);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestContentModel: requestContentModel });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].SET_DYNAMIC_PAGES: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestContentModel: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.requestContentModel, { dynamicPages: action.payload || [] }) });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/rest-client/store/reducers/response.ts":
/*!********************************************************!*\
  !*** ./src/app/rest-client/store/reducers/response.ts ***!
  \********************************************************/
/*! exports provided: responseReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseReducer", function() { return responseReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/rest-client/store/actions/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/rest-client/utils.ts");




var initResponse = {
    contentType: _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].JSON,
    body: '',
    headers: null
};
var initResponseState = {
    response: initResponse,
    status: null,
    loading: false
};
function responseReducer(state, action) {
    if (state === void 0) { state = initResponseState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].RECEIVE_RESPONSE: {
            if (!action.payload) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initResponseState);
            }
            var response = action.payload;
            return {
                response: response,
                status: action.status,
                loading: false
            };
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CLEAR_RESPONSE: {
            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setResponseContextVars"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initResponse));
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { response: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initResponse), status: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].SEND_REQUEST: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/rest-client/store/reducers/saved-requests.ts":
/*!**************************************************************!*\
  !*** ./src/app/rest-client/store/reducers/saved-requests.ts ***!
  \**************************************************************/
/*! exports provided: savedRequestsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savedRequestsReducer", function() { return savedRequestsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/rest-client/store/actions/index.ts");


var initialState = {
    requests: [],
    saving: false,
    activeRequest: null,
    error: null,
    requestLoading: false
};
function savedRequestsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].SAVE_REQUEST: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { saving: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].SAVED_REQUEST: {
            var index = state.requests.findIndex(function (r) { return r.id === action.payload.id; });
            if (index > -1) {
                state.requests[index] = action.payload;
            }
            else {
                var _a = action.payload, id = _a.id, folder = _a.folder, ownerName = _a.ownerName, name_1 = _a.name, description = _a.description, linkType = _a.linkType;
                state.activeRequest = { id: id, folder: folder, ownerName: ownerName, name: name_1, description: description, linkType: linkType };
                state.requests.push(action.payload);
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requests: state.requests.slice() });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].LOADED_REQUESTS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requests: action.payload, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].LOAD_REQUESTS_FAILED: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].LOADED_REQUEST: {
            var _b = action.payload, id = _b.id, folder = _b.folder, ownerName = _b.ownerName, name_2 = _b.name, description = _b.description, linkType = _b.linkType, scripts = _b.scripts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeRequest: { id: id, folder: folder, ownerName: ownerName, name: name_2, description: description, linkType: linkType }, requestLoading: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].DESELECT_REQUEST: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeRequest: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].LOAD_REQUEST: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestLoading: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].LOAD_REQUEST_FAILED: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requestLoading: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SavedRequestsActionTypes"].DELETED_REQUEST: {
            var index = state.requests.findIndex(function (r) { return r.id === action.payload; });
            if (index === -1) {
                return state;
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { requests: state.requests.slice(0, index).concat(state.requests.slice(index + 1)) });
        }
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/rest-client/store/selectors/index.ts":
/*!******************************************************!*\
  !*** ./src/app/rest-client/store/selectors/index.ts ***!
  \******************************************************/
/*! exports provided: selectFeature, selectActiveRequest, selectError, selectRequestLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-requests */ "./src/app/rest-client/store/selectors/saved-requests.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_0__["selectFeature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectActiveRequest", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_0__["selectActiveRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_0__["selectError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRequestLoading", function() { return _saved_requests__WEBPACK_IMPORTED_MODULE_0__["selectRequestLoading"]; });




/***/ }),

/***/ "./src/app/rest-client/store/selectors/saved-requests.ts":
/*!***************************************************************!*\
  !*** ./src/app/rest-client/store/selectors/saved-requests.ts ***!
  \***************************************************************/
/*! exports provided: selectFeature, selectActiveRequest, selectError, selectRequestLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return selectFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActiveRequest", function() { return selectActiveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRequestLoading", function() { return selectRequestLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectFeature = function (state) { return state.savedRequests; };
var selectActiveRequest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, function (state) { return state.activeRequest; });
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, function (state) { return state.error; });
var selectRequestLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, function (state) { return state.requestLoading; });


/***/ }),

/***/ "./src/app/rest-client/store/utils.ts":
/*!********************************************!*\
  !*** ./src/app/rest-client/store/utils.ts ***!
  \********************************************/
/*! exports provided: updateStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStore", function() { return updateStore; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/rest-client/store/actions/index.ts");

function updateStore(store, requestContentModel, url) {
    var model = requestContentModel || { request: undefined };
    store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateRequestModel"](model.request));
    store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_0__["SetDynamicPages"](model.dynamicPages));
    store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_0__["DeselectRequest"](url));
    store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["setScripts"])({ scripts: model.scripts }));
    store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_0__["ClearResponse"]());
}


/***/ }),

/***/ "./src/app/rest-client/utils.ts":
/*!**************************************!*\
  !*** ./src/app/rest-client/utils.ts ***!
  \**************************************/
/*! exports provided: setResponseContextVars, getResponse, getInitialWorkflowConfig, filterDynamicPagesVars, getScriptName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResponseContextVars", function() { return setResponseContextVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponse", function() { return getResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialWorkflowConfig", function() { return getInitialWorkflowConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDynamicPagesVars", function() { return filterDynamicPagesVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptName", function() { return getScriptName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/rest-client/models/index.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");



function setResponseContextVars(response) {
    src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_2__["Variables"].setContextVariable({ name: 'responseContent', value: response.body });
    src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_2__["Variables"].setContextVariable({ name: 'responseHeaders', value: response.headers });
}
function getResponse(response) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ headers: getHeaders(response) }, getFormattedResponse(response));
}
function getFormattedResponse(response) {
    var jsonChars = '{[';
    var body = response.body || response.error || '';
    if (typeof body !== 'string') {
        body = JSON.stringify(body);
    }
    if (!body) {
        return {
            contentType: _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].TEXT,
            body: body
        };
    }
    if (jsonChars.includes(body[0])) {
        try {
            body = JSON.parse(body);
            return {
                contentType: _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].JSON,
                body: body
            };
        }
        catch (_a) {
            return {
                contentType: _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].TEXT,
                body: body
            };
        }
    }
    return {
        contentType: _models__WEBPACK_IMPORTED_MODULE_1__["ContentTypes"].TEXT,
        body: body
    };
}
function getHeaders(res) {
    return Object.entries(res).filter(function (_a) {
        var key = _a[0];
        return key !== 'body';
    }).reduce(function (prev, _a) {
        var key = _a[0], val = _a[1];
        prev[key] = key === 'headers' ? getResponseHeaders(res) : val;
        return prev;
    }, {});
}
function getResponseHeaders(res) {
    if (res && res.headers) {
        var keys = res.headers.keys();
        var headers = keys.reduce(function (prev, key) {
            prev.push({
                active: true,
                name: key,
                value: res.headers.get(key)
            });
            return prev;
        }, []);
        return headers.map(function (v) {
            var _a;
            return _a = {}, _a[v.name] = v.value, _a;
        });
    }
    return [];
}
function getInitialWorkflowConfig(workflowProps) {
    if (workflowProps === void 0) { workflowProps = {}; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ failOnError: true, include: ['@common'], vars: {}, workflowsMap: {}, consts: {} }, workflowProps);
}
function filterDynamicPagesVars(content) {
    if (content.dynamicPages) {
        content.dynamicPages = content.dynamicPages.map(function (page) {
            var vars = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, page.workflows.vars);
            delete vars.uiModel;
            delete vars.dataModel;
            page.workflows.vars = vars;
            return page;
        });
    }
    return content;
}
function getScriptName(scripts) {
    if (!scripts) {
        return null;
    }
    var firstLine = scripts.split('\n')[0];
    var name = firstLine.match(/#([\w\s]+)/);
    if (name && name.length) {
        return name[1].trim();
    }
}


/***/ })

}]);
//# sourceMappingURL=rest-client-rest-client-module.js.map