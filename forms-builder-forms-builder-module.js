(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-builder-forms-builder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/form-info/form-info.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-builder/components/form-info/form-info.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{config.title || config.formName}} configuration</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body px-4 d-flex flex-column\">\n    <div class=\"position-relative h-100\">\n      <form #formInfoForm=\"ngForm\">\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n          <label for=\"form-title\" class=\"col-form-label px-0\">Form title</label>\n          <div class=\"flex-fill ml-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.title\" placeholder=\"Enter form-title title\"\n              name=\"title\" #title=\"ngModel\" required id=\"form-title\">\n            <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n              <div *ngIf=\"title.errors.required\">Form title is required.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n          <label for=\"form-name\" class=\"col-form-label px-0\">Form name</label>\n          <div class=\"flex-fill ml-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.formName\" placeholder=\"Enter form name\"\n              name=\"name\" #formName=\"ngModel\" required id=\"form-name\">\n            <div *ngIf=\"formName.invalid && (formName.dirty || formName.touched)\"\n              class=\"alert alert-danger py-1 px-2 m-0\">\n              <div *ngIf=\"formName.errors.required\">From name is required.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n            <label for=\"form-folder\" class=\"col-form-label px-0\">Form folder</label>\n            <div class=\"flex-fill ml-2\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.folder\" placeholder=\"Enter form folder\"\n                name=\"folder\" #formFolder=\"ngModel\" required id=\"form-folder\">\n              <div *ngIf=\"formFolder.invalid && (formFolder.dirty || formFolder.touched)\"\n                class=\"alert alert-danger py-1 px-2 m-0\">\n                <div *ngIf=\"formFolder.errors.required\">From folder is required.</div>\n              </div>\n            </div>\n          </div>\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n          <label for=\"form-description\" class=\"col-form-label px-0\">Description</label>\n          <div class=\"flex-fill ml-2\">\n            <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"formInfo.description\"\n              placeholder=\"Enter form description\" id=\"form-description\" name=\"description\"></textarea>\n          </div>\n        </div>\n        <div class=\"form-group row mx-0 mb-1 flex-nowrap\">\n          <label for=\"form-is-public\" class=\"col-form-label px-0\">Is Public</label>\n          <div class=\"flex-fill ml-2\">\n            <input class=\"mt-0 h-100\" type=\"checkbox\" name=\"is-public\" id=\"form-is-public\"\n            [(ngModel)]=\"formInfo.isPublic\">\n          </div>\n        </div>\n        <h4 class=\"mt-3\">_var_import_overrides</h4>\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap var-import\">\n          <label for=\"form-object-owner\" class=\"col-form-label px-0\">ownerName</label>\n          <div class=\"flex-fill ml-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.workflowsMap._var_import_overrides.ownerName\" placeholder=\"Enter objectOwner\"\n              name=\"object-owner\" #ownerName=\"ngModel\" required id=\"form-object-owner\">\n            <div *ngIf=\"ownerName.invalid && (ownerName.dirty || ownerName.touched)\"\n              class=\"alert alert-danger py-1 px-2 m-0\">\n              <div *ngIf=\"ownerName.errors.required\">ownerName is required.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap var-import\">\n          <label for=\"form-object-name\" class=\"col-form-label px-0\">tableName</label>\n          <div class=\"flex-fill ml-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.workflowsMap._var_import_overrides.tableName\" placeholder=\"Enter tableName\"\n              name=\"object-name\" #tableName=\"ngModel\" required id=\"form-object-name\">\n            <div *ngIf=\"tableName.invalid && (tableName.dirty || tableName.touched)\"\n              class=\"alert alert-danger py-1 px-2 m-0\">\n              <div *ngIf=\"tableName.errors.required\">tableName is required.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mx-0 mb-2 flex-nowrap var-import\">\n          <label for=\"form-base-api-url\" class=\"col-form-label px-0\">base_api_url</label>\n          <div class=\"flex-fill ml-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.workflowsMap._var_import_overrides.base_api_url\" placeholder=\"Enter base_api_url\"\n              name=\"base_api_url\" #baseUrl=\"ngModel\" required id=\"form-base-api-url\">\n            <div *ngIf=\"baseUrl.invalid && (baseUrl.dirty || baseUrl.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n              <div *ngIf=\"baseUrl.errors.required\">base_api_url is required.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mx-0 mb-1 flex-nowrap var-import\">\n          <label for=\"form-public-code\" class=\"col-form-label px-0\">userPublicAccessCode</label>\n          <div class=\"flex-fill ml-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formInfo.workflowsMap._var_import_overrides.userPublicAccessCode\"\n              placeholder=\"Enter userPublicAccessCode\" name=\"public-code\" #userPublicAccessCode=\"ngModel\" required\n              id=\"form-public-code\">\n            <div *ngIf=\"userPublicAccessCode.invalid && (userPublicAccessCode.dirty || userPublicAccessCode.touched)\"\n              class=\"alert alert-danger py-1 px-2 m-0\">\n              <div *ngIf=\"userPublicAccessCode.errors.required\">userPublicAccessCode is required.</div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"modal-footer flex-column\">\n    <div class=\"row w-100 mx-0 px-0\">\n      <button type=\"button\" (click)=\"saveForm()\" [disabled]=\"!formInfoForm.valid\"\n        class=\"btn btn-primary ml-auto mr-2\">Save</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/form-preview/form-preview.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-builder/components/form-preview/form-preview.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-dynamic-component *ngIf=\"formInfo && formInfo.uiModel\" class=\"w-100 h-100\" [uiModel]=\"formInfo.uiModel\"\n      [dataModel]=\"{}\" [interpreter]=\"interpreter\" [scripts]=\"scripts\"></ngx-dynamic-component>\n<div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white\"\n  *ngIf=\"loading$ | async\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"hasForm === false\" class=\"d-flex h-100 w-100 justify-content-center align-items-center\">\n  <h4 class=\"text-center\">Form <i class=\"lead\">{{formParams}}</i> not found</h4>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout [config]=\"layoutConfig\">\n  <h2 title class=\"mb-0 ml-0 top-sub-header w-md-down-50\">WORKSHEET <span>SYSTEMS</span> - Forms Builder</h2>\n  <div header class=\"ml-auto d-flex\"></div>\n  <app-saved-forms sidebar class=\"h-100 w-100 py-2\"></app-saved-forms>\n  <app-forms-builder content></app-forms-builder>\n</app-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/forms-builder/forms-builder.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-builder/components/forms-builder/forms-builder.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card overflow-hidden mb-0 w-100 h-100\">\n  <div class=\"card-header p-2 d-flex align-items-center\">\n    <h5 class=\"mb-0 ml-2\">{{formInfo.title}}</h5>\n    <div class=\"ml-auto\">\n      <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"openConfig()\"><i\n          class=\"fa fa-save\"></i>&nbsp;Save</button>\n      <button type=\"button\" class=\"btn btn-secondary\" [disabled]=\"isPreviewDisabled\"\n        (click)=\"toggleMode()\">{{modeTitle}}</button>\n      <span dropdown class=\"position-relative px-2\" placement=\"bottom left\" container=\"body\">\n        <button dropdownToggle type=\"button\" class=\"btn\">\n          <i class=\"fa fa-ellipsis-v\"></i>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu left-bottom-menu\" role=\"menu\">\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"onNewForm()\">New Form</a>\n          </li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"onFileExport()\">Export to File</a>\n          </li>\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"onFileImport()\">Import from File</a>\n          </li>\n          <li role=\"menuitem\" *ngIf=\"isFormSelected\">\n            <a class=\"dropdown-item cursor-pointer\" (click)=\"onDeleteForm()\">Delete form</a>\n          </li>\n        </ul>\n      </span>\n    </div>\n  </div>\n  <div class=\"card-body p-2 flex-fill overflow-auto\">\n    <ngx-dynamic-component *ngIf=\"!designerMode && formInfo.uiModel\" class=\"w-100 h-100 d-block\" [uiModel]=\"formInfo.uiModel\"\n      [dataModel]=\"{}\" [interpreter]=\"interpreter\" [scripts]=\"scripts\"></ngx-dynamic-component>\n    <ngx-designer-component *ngIf=\"designerMode\" [interpreter]=\"interpreter\" [scripts]=\"scripts\" class=\"d-flex flex-fill h-100\"\n      (scriptUpdate)=\"onScriptUpdate($event)\" (uiModelUpdated)=\"onUIModelUpdate($event)\" [uiModel]=\"formInfo.uiModel\">\n    </ngx-designer-component>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white\"\n  *ngIf=\"loading$ | async\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/import-layout/import-layout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-builder/components/import-layout/import-layout.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/saved-forms/saved-forms.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-builder/components/saved-forms/saved-forms.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert type=\"danger\" *ngIf=\"error\">\n  <strong>Error:</strong> {{error}}\n</alert>\n<alert type=\"info\" *ngIf=\"!isAuthenticated\">\n  Please <a class=\"link cursor-pointer\" (click)=\"loginService.openDialog()\">Login</a> to be able to save & load forms.\n</alert>\n<app-list-view [comparator]=\"dataService.areFormsEqual\" *ngIf=\"isAuthenticated && !error;\" #listView class=\"d-flex h-100 overflow-auto\" [list]=\"forms\"\n  group=\"folder\" orderBy=\"id\" (select)=\"onSelect($event)\">\n  <ng-template let-item>\n    <div class=\"m-1 pl-3\" title=\"{{item.description}}\">\n      {{item.title || item.formName}}\n    </div>\n  </ng-template>\n</app-list-view>\n"

/***/ }),

/***/ "./src/app/forms-builder/components/form-info/form-info.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/forms-builder/components/form-info/form-info.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group > label {\n  -webkit-box-flex: 0;\n          flex: 0 0 100px;\n}\n\n.form-group > label {\n  -webkit-box-flex: 0;\n          flex: 0 0 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvZm9ybS1pbmZvL2Zvcm0taW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXMtYnVpbGRlci9jb21wb25lbnRzL2Zvcm0taW5mby9mb3JtLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtVQUFBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMtYnVpbGRlci9jb21wb25lbnRzL2Zvcm0taW5mby9mb3JtLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgZmxleDogMCAwIDEwMHB4O1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgZmxleDogMCAwIDE1MHB4O1xufVxuIiwiLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZsZXg6IDAgMCAxMDBweDtcbn1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZsZXg6IDAgMCAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forms-builder/components/form-info/form-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/forms-builder/components/form-info/form-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInfoComponent", function() { return FormInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");




var FormInfoComponent = /** @class */ (function () {
    function FormInfoComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormInfoComponent.prototype.ngOnInit = function () {
        this.formInfo = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(this.config);
    };
    FormInfoComponent.prototype.saveForm = function () {
        this.save.emit(this.formInfo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormInfoComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], FormInfoComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormInfoComponent.prototype, "save", void 0);
    FormInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-info',
            template: __webpack_require__(/*! raw-loader!./form-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/form-info/form-info.component.html"),
            styles: [__webpack_require__(/*! ./form-info.component.scss */ "./src/app/forms-builder/components/form-info/form-info.component.scss")]
        })
    ], FormInfoComponent);
    return FormInfoComponent;
}());



/***/ }),

/***/ "./src/app/forms-builder/components/form-preview/form-preview.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/forms-builder/components/form-preview/form-preview.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep > ngx-dynamic-component {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvZm9ybS1wcmV2aWV3L2Zvcm0tcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXMtYnVpbGRlci9jb21wb25lbnRzL2Zvcm0tcHJldmlldy9mb3JtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvZm9ybS1wcmV2aWV3L2Zvcm0tcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCA+IG5neC1keW5hbWljLWNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3QgOjpuZy1kZWVwID4gbmd4LWR5bmFtaWMtY29tcG9uZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/forms-builder/components/form-preview/form-preview.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/forms-builder/components/form-preview/form-preview.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPreviewComponent", function() { return FormPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/interpreter */ "./src/app/shared/interpreter.ts");






var FormPreviewComponent = /** @class */ (function () {
    function FormPreviewComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    FormPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interpreter = Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_5__["getInterpreter"])();
        this.loading$ = this.dataService.isLoading$;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (params) { return _this.formOwner = params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.dataService.getForm(params); }))
            .subscribe(function (form) {
            _this.hasForm = Boolean(form);
            if (_this.hasForm) {
                _this.scripts = form.scripts;
                _this.formInfo = form;
            }
            else {
                _this.formInfo = null;
            }
        });
    };
    Object.defineProperty(FormPreviewComponent.prototype, "formParams", {
        get: function () {
            if (this.formOwner) {
                return this.formOwner.ownerName + "/" + this.formOwner.formName;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    FormPreviewComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FormPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-preview',
            template: __webpack_require__(/*! raw-loader!./form-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/form-preview/form-preview.component.html"),
            styles: [__webpack_require__(/*! ./form-preview.component.scss */ "./src/app/forms-builder/components/form-preview/form-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FormPreviewComponent);
    return FormPreviewComponent;
}());



/***/ }),

/***/ "./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormsBuilderLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsBuilderLayoutComponent", function() { return FormsBuilderLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/forms-builder/constants.ts");








var FormsBuilderLayoutComponent = /** @class */ (function () {
    function FormsBuilderLayoutComponent(router, titleService, dataService) {
        this.router = router;
        this.titleService = titleService;
        this.dataService = dataService;
        this.layoutConfig = {
            icon: 'assets/img/je-logo-64x64.png',
            smIcon: 'assets/img/je-logo-36x36.png',
            appName: 'forms-builder',
            collapsed: true
        };
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    FormsBuilderLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Worksheets Forms builder');
        this.handleRouterState(this.router.routerState.root.firstChild);
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (route) {
            if (!_this.router.routerState.snapshot.url.startsWith(_constants__WEBPACK_IMPORTED_MODULE_7__["FORM_BUILDER_PATH"])) {
                return;
            }
            _this.handleRouterState(_this.router.routerState.root.firstChild);
        });
    };
    FormsBuilderLayoutComponent.prototype.handleRouterState = function (route) {
        var params;
        while (route) {
            params = route.snapshot.params;
            route = route.firstChild;
        }
        this.dataService.selectForm(params);
    };
    FormsBuilderLayoutComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
    };
    FormsBuilderLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
    ]; };
    FormsBuilderLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms-builder-layout',
            template: __webpack_require__(/*! raw-loader!./forms-builder-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], FormsBuilderLayoutComponent);
    return FormsBuilderLayoutComponent;
}());



/***/ }),

/***/ "./src/app/forms-builder/components/forms-builder/forms-builder.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/forms-builder/components/forms-builder/forms-builder.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngx-dynamic-component,\nngx-designer-component ::ng-deep ngx-dynamic-component,\nngx-designer-component ::ng-deep #empty-container {\n  background: white;\n}\n\n.toolbar.btn-group > * {\n  -webkit-box-flex: initial;\n          flex: initial;\n}\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n}\n\n.spinner {\n  z-index: 11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvZm9ybXMtYnVpbGRlci9mb3Jtcy1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvZm9ybXMtYnVpbGRlci9mb3Jtcy1idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7RUFHRSxpQkFBQTtBQ0RGOztBRElFO0VBQ0UseUJBQUE7VUFBQSxhQUFBO0FDREo7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvZm9ybXMtYnVpbGRlci9mb3Jtcy1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvY29yZXVpL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3NcIjtcblxubmd4LWR5bmFtaWMtY29tcG9uZW50LFxubmd4LWRlc2lnbmVyLWNvbXBvbmVudCA6Om5nLWRlZXAgbmd4LWR5bmFtaWMtY29tcG9uZW50LFxubmd4LWRlc2lnbmVyLWNvbXBvbmVudCA6Om5nLWRlZXAgI2VtcHR5LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnRvb2xiYXIuYnRuLWdyb3VwIHtcbiAgPiAqIHtcbiAgICBmbGV4OiBpbml0aWFsO1xuICB9XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNwaW5uZXIge1xuICB6LWluZGV4OiAxMTtcbn1cbiIsIm5neC1keW5hbWljLWNvbXBvbmVudCxcbm5neC1kZXNpZ25lci1jb21wb25lbnQgOjpuZy1kZWVwIG5neC1keW5hbWljLWNvbXBvbmVudCxcbm5neC1kZXNpZ25lci1jb21wb25lbnQgOjpuZy1kZWVwICNlbXB0eS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXIuYnRuLWdyb3VwID4gKiB7XG4gIGZsZXg6IGluaXRpYWw7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3Bpbm5lciB7XG4gIHotaW5kZXg6IDExO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forms-builder/components/forms-builder/forms-builder.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/forms-builder/components/forms-builder/forms-builder.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FormsBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsBuilderComponent", function() { return FormsBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/app/forms-builder/constants.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/interpreter */ "./src/app/shared/interpreter.ts");













var FormsBuilderComponent = /** @class */ (function () {
    function FormsBuilderComponent(fileManager, dataService, router, authService, loginService, notification) {
        this.fileManager = fileManager;
        this.dataService = dataService;
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
        this.notification = notification;
        this.designerMode = true;
        this.isAuthenticated = false;
        this.scripts = '';
        this.defaultFormInfo = {
            formId: 0,
            formName: 'newForm',
            title: 'New From',
            folder: 'forms-folder',
            description: '',
            ownerName: null,
            uiModel: src_app_shared__WEBPACK_IMPORTED_MODULE_7__["Form"].uiModel,
            workflowsMap: src_app_shared__WEBPACK_IMPORTED_MODULE_7__["Form"].workflowsMap,
            tags: [],
            attributes: {},
            isPublic: false,
            scripts: ''
        };
    }
    FormsBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interpreter = Object(src_app_shared_interpreter__WEBPACK_IMPORTED_MODULE_12__["getInterpreter"])();
        this.formInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.defaultFormInfo);
        this.loading$ = this.dataService.isLoading$;
        this.authService.isAuthenticated$.subscribe(function (isAuth) {
            _this.isAuthenticated = isAuth;
            _this.defaultFormInfo.ownerName = isAuth ? _this.authService.user.userName : null;
            _this.formInfo.ownerName = _this.defaultFormInfo.ownerName;
            _this.formInfo.workflowsMap._var_import_overrides.ownerName = _this.formInfo.ownerName;
        });
        this.dataService.selectedForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (form) {
            _this.isFormSelected = Boolean(form);
            if (form) {
                return _this.dataService.getForm(form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
                    _this.notification.open({
                        type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_11__["NotificationType"].DANGER,
                        message: e.message
                    });
                    _this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_9__["FORM_BUILDER_PATH"]]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.defaultFormInfo));
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.defaultFormInfo));
        })).subscribe(function (form) {
            _this.scripts = form.scripts || '';
            _this.renderForm(form);
        });
    };
    FormsBuilderComponent.prototype.onUIModelUpdate = function (uiModel) {
        this.formInfo.uiModel = uiModel;
    };
    FormsBuilderComponent.prototype.onScriptUpdate = function (scripts) {
        this.formInfo.scripts = scripts;
    };
    FormsBuilderComponent.prototype.onFileExport = function () {
        this.fileManager.exportToFile(this.formInfo, {
            fileName: "rc-" + this.formInfo.formName
        });
    };
    FormsBuilderComponent.prototype.onFileImport = function () {
        var _this = this;
        this.fileManager.importFromFile().subscribe(function (_a) {
            var result = _a.result;
            _this.renderForm(result);
        });
    };
    FormsBuilderComponent.prototype.onDeleteForm = function () {
        var _this = this;
        this.dataService.deleteForm(this.formInfo.formId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            var _a = _this.getObjectProperties(), sqlConnectionUrl = _a.sqlConnectionUrl, ownerName = _a.ownerName, tableName = _a.tableName;
            return _this.dataService.deleteObject(sqlConnectionUrl, ownerName, tableName);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            _this.notification.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_11__["NotificationType"].DANGER,
                message: e.error || e.message
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(e);
        })).subscribe(function (res) {
            _this.onNewForm();
        });
    };
    FormsBuilderComponent.prototype.toggleMode = function () {
        this.designerMode = !this.designerMode;
    };
    FormsBuilderComponent.prototype.getObjectProperties = function () {
        var importVars = this.formInfo.workflowsMap._var_import_overrides;
        var vars = this.formInfo.workflowsMap._var;
        var resolvedVars = src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_10__["Variables"].resolve(vars, importVars);
        return {
            tableName: resolvedVars.tableName,
            ownerName: resolvedVars.ownerName,
            sqlConnectionUrl: resolvedVars.sql_api_url
        };
    };
    Object.defineProperty(FormsBuilderComponent.prototype, "modeTitle", {
        get: function () {
            return this.designerMode ? 'Preview' : 'Designer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormsBuilderComponent.prototype, "isPreviewDisabled", {
        get: function () {
            return this.designerMode && !this.formInfo;
        },
        enumerable: true,
        configurable: true
    });
    FormsBuilderComponent.prototype.openConfig = function () {
        var _this = this;
        if (this.isAuthenticated) {
            this.dataService.saveFormDialog(this.formInfo).subscribe(function (formInfo) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scripts = formInfo.scripts;
                            return [4 /*yield*/, this.interpreter.evaluate(this.scripts, null, 'design_time')];
                        case 1:
                            _a.sent();
                            this.renderForm(formInfo);
                            this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_9__["FORM_BUILDER_PATH"], formInfo.ownerName, formInfo.formName]);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.loginService.openDialog();
        }
    };
    FormsBuilderComponent.prototype.onNewForm = function () {
        this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_9__["FORM_BUILDER_PATH"]]);
    };
    FormsBuilderComponent.prototype.renderForm = function (form) {
        var _this = this;
        this.toggleMode();
        this.formInfo.uiModel = null;
        setTimeout(function () {
            _this.formInfo = form;
            _this.toggleMode();
        });
    };
    FormsBuilderComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["FileManagerService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    FormsBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms-builder',
            template: __webpack_require__(/*! raw-loader!./forms-builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/forms-builder/forms-builder.component.html"),
            styles: [__webpack_require__(/*! ./forms-builder.component.scss */ "./src/app/forms-builder/components/forms-builder/forms-builder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["FileManagerService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], FormsBuilderComponent);
    return FormsBuilderComponent;
}());



/***/ }),

/***/ "./src/app/forms-builder/components/import-layout/import-layout.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/forms-builder/components/import-layout/import-layout.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zLWJ1aWxkZXIvY29tcG9uZW50cy9pbXBvcnQtbGF5b3V0L2ltcG9ydC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/forms-builder/components/import-layout/import-layout.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/forms-builder/components/import-layout/import-layout.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ImportLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportLayoutComponent", function() { return ImportLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/app/forms-builder/constants.ts");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");









var ImportLayoutComponent = /** @class */ (function () {
    function ImportLayoutComponent(route, dataService, router, authService) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.authService = authService;
        this.workflowConfig = {
            failOnError: true,
            include: ['@common'],
            vars: {},
            workflowsMap: {},
            consts: {},
            variableResolver: src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_7__["Variables"]
        };
    }
    ImportLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.dataService.getForm(params); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (formInfo) {
            formInfo.formId = 0;
            formInfo.ownerName = _this.authService.user.userName;
            formInfo.workflowsMap._var_import_overrides.objectOwner = formInfo.ownerName;
            return _this.dataService.saveFormDialog(formInfo);
        })).subscribe(function (form) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var workflowEngine;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.workflowConfig.workflowsMap = form.workflowsMap;
                        this.workflowConfig.vars.uiModel = form.uiModel;
                        workflowEngine = new _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_6__["WorkflowEngine"](this.workflowConfig);
                        return [4 /*yield*/, workflowEngine.run('design_time')];
                    case 1:
                        _a.sent();
                        this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_5__["FORM_BUILDER_PATH"], form.ownerName, form.formName]);
                        return [2 /*return*/];
                }
            });
        }); }, function () {
            // Handle error
            // this.router.navigate([FORM_BUILDER_PATH]);
        });
    };
    ImportLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
    ]; };
    ImportLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-layout',
            template: __webpack_require__(/*! raw-loader!./import-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/import-layout/import-layout.component.html"),
            styles: [__webpack_require__(/*! ./import-layout.component.scss */ "./src/app/forms-builder/components/import-layout/import-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_security__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ImportLayoutComponent);
    return ImportLayoutComponent;
}());



/***/ }),

/***/ "./src/app/forms-builder/components/saved-forms/saved-forms.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/forms-builder/components/saved-forms/saved-forms.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-list-view {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvc2F2ZWQtZm9ybXMvc2F2ZWQtZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1zLWJ1aWxkZXIvY29tcG9uZW50cy9zYXZlZC1mb3Jtcy9zYXZlZC1mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy1idWlsZGVyL2NvbXBvbmVudHMvc2F2ZWQtZm9ybXMvc2F2ZWQtZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbGlzdC12aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iLCJhcHAtbGlzdC12aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/forms-builder/components/saved-forms/saved-forms.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/forms-builder/components/saved-forms/saved-forms.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SavedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedFormsComponent", function() { return SavedFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var SavedFormsComponent = /** @class */ (function () {
    function SavedFormsComponent(dataService, router, route, authService, loginService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.loginService = loginService;
        this.isAuthenticated = false;
    }
    SavedFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (isAuth) { return _this.isAuthenticated = isAuth; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (isAuth) { return isAuth; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.dataService.getForms(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (forms) { return _this.forms = forms; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.dataService.selectedForm$; })).subscribe(function (form) {
            if (_this.listView) {
                _this.listView.selectItem(form);
            }
        });
    };
    SavedFormsComponent.prototype.onSelect = function (item) {
        if (item) {
            var ownerName = item.ownerName, formName = item.formName;
            if (ownerName && formName) {
                this.router.navigate([ownerName, formName], { relativeTo: this.route });
            }
        }
        else {
            this.router.navigate([], { relativeTo: this.route });
        }
    };
    SavedFormsComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listView', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_3__["ListViewComponent"])
    ], SavedFormsComponent.prototype, "listView", void 0);
    SavedFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved-forms',
            template: __webpack_require__(/*! raw-loader!./saved-forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-builder/components/saved-forms/saved-forms.component.html"),
            styles: [__webpack_require__(/*! ./saved-forms.component.scss */ "./src/app/forms-builder/components/saved-forms/saved-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], SavedFormsComponent);
    return SavedFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms-builder/constants.ts":
/*!********************************************!*\
  !*** ./src/app/forms-builder/constants.ts ***!
  \********************************************/
/*! exports provided: FORM_BUILDER_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_BUILDER_PATH", function() { return FORM_BUILDER_PATH; });
var FORM_BUILDER_PATH = '/forms/builder';


/***/ }),

/***/ "./src/app/forms-builder/forms-builder-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/forms-builder/forms-builder-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormsBuilderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsBuilderRoutingModule", function() { return FormsBuilderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_forms_builder_layout_forms_builder_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms-builder-layout/forms-builder-layout.component */ "./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.ts");
/* harmony import */ var _components_import_layout_import_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/import-layout/import-layout.component */ "./src/app/forms-builder/components/import-layout/import-layout.component.ts");
/* harmony import */ var _components_form_preview_form_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-preview/form-preview.component */ "./src/app/forms-builder/components/form-preview/form-preview.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards */ "./src/app/forms-builder/guards/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/forms-builder/services/data.service.ts");









var routes = [{
        path: 'builder',
        component: _components_forms_builder_layout_forms_builder_layout_component__WEBPACK_IMPORTED_MODULE_3__["FormsBuilderLayoutComponent"],
        children: [{
                path: ':ownerName/:formName'
            }]
    }, {
        path: ':ownerName/:formName',
        component: _components_form_preview_form_preview_component__WEBPACK_IMPORTED_MODULE_5__["FormPreviewComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["PreviewGuard"]]
    }, {
        path: 'import/:ownerName/:formName',
        component: _components_import_layout_import_layout_component__WEBPACK_IMPORTED_MODULE_4__["ImportLayoutComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];
var FormsBuilderRoutingModule = /** @class */ (function () {
    function FormsBuilderRoutingModule() {
    }
    FormsBuilderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_7__["DialogService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]]
        })
    ], FormsBuilderRoutingModule);
    return FormsBuilderRoutingModule;
}());



/***/ }),

/***/ "./src/app/forms-builder/forms-builder.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/forms-builder/forms-builder.module.ts ***!
  \*******************************************************/
/*! exports provided: FormsBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsBuilderModule", function() { return FormsBuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ "../ngx-dynamic-components/projects/bootstrap/src/public-api.ts");
/* harmony import */ var _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-dynamic-components/material */ "../ngx-dynamic-components/projects/material/src/public_api.ts");
/* harmony import */ var src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/wijmo/wijmo.module */ "./src/app/wijmo/wijmo.module.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _forms_builder_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms-builder-routing.module */ "./src/app/forms-builder/forms-builder-routing.module.ts");
/* harmony import */ var _components_forms_builder_layout_forms_builder_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forms-builder-layout/forms-builder-layout.component */ "./src/app/forms-builder/components/forms-builder-layout/forms-builder-layout.component.ts");
/* harmony import */ var _components_forms_builder_forms_builder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/forms-builder/forms-builder.component */ "./src/app/forms-builder/components/forms-builder/forms-builder.component.ts");
/* harmony import */ var _components_saved_forms_saved_forms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/saved-forms/saved-forms.component */ "./src/app/forms-builder/components/saved-forms/saved-forms.component.ts");
/* harmony import */ var _components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form-info/form-info.component */ "./src/app/forms-builder/components/form-info/form-info.component.ts");
/* harmony import */ var _components_form_preview_form_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/form-preview/form-preview.component */ "./src/app/forms-builder/components/form-preview/form-preview.component.ts");
/* harmony import */ var _components_import_layout_import_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/import-layout/import-layout.component */ "./src/app/forms-builder/components/import-layout/import-layout.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var _forms_interpreter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forms-interpreter */ "./src/app/forms-builder/forms-interpreter.ts");





















var FormsBuilderModule = /** @class */ (function () {
    function FormsBuilderModule(actions) {
        this.actions = actions;
    }
    FormsBuilderModule.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["ActionsService"] }
    ]; };
    FormsBuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_forms_builder_layout_forms_builder_layout_component__WEBPACK_IMPORTED_MODULE_13__["FormsBuilderLayoutComponent"], _components_forms_builder_forms_builder_component__WEBPACK_IMPORTED_MODULE_14__["FormsBuilderComponent"], _components_saved_forms_saved_forms_component__WEBPACK_IMPORTED_MODULE_15__["SavedFormsComponent"], _components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_16__["FormInfoComponent"],
                _components_form_preview_form_preview_component__WEBPACK_IMPORTED_MODULE_17__["FormPreviewComponent"], _components_import_layout_import_layout_component__WEBPACK_IMPORTED_MODULE_18__["ImportLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _forms_builder_routing_module__WEBPACK_IMPORTED_MODULE_12__["FormsBuilderRoutingModule"],
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BootstrapModule"],
                _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_9__["WijmoModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["DialogService"], _services_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"]],
            entryComponents: [_components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_16__["FormInfoComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["ActionsService"]])
    ], FormsBuilderModule);
    return FormsBuilderModule;
}());



/***/ }),

/***/ "./src/app/forms-builder/forms-interpreter.ts":
/*!****************************************************!*\
  !*** ./src/app/forms-builder/forms-interpreter.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _shared_interpreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/interpreter */ "./src/app/shared/interpreter.ts");


Object(_shared_interpreter__WEBPACK_IMPORTED_MODULE_1__["registerFunction"])('validateModel', validateModel);
function validateModel(uiModel, dataModel) {
    var valid = true;
    var fields = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["JSONUtils"].find(uiModel, '$(children)/itemProperties');
    var requiredFields = fields.filter(function (f) { return f.required; });
    if (requiredFields.length) {
        requiredFields.forEach(function (f) {
            var value = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["JSONUtils"].find(dataModel, f.dataModelPath);
            valid = ![undefined, null, ''].includes(value);
        });
    }
    return valid;
}


/***/ }),

/***/ "./src/app/forms-builder/guards/auth.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/forms-builder/guards/auth.guard.ts ***!
  \****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, loginService) {
        this.authService = authService;
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (next) {
        var _this = this;
        return this.authService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
            if (user.userName === 'Public') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Authorized as public');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            return _this.login();
        }));
    };
    AuthGuard.prototype.login = function () {
        var _this = this;
        this.loginService.openDialog();
        return this.authService.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (isAuth) { return isAuth && _this.authService.user.userName !== 'Public'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return true; }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/forms-builder/guards/index.ts":
/*!***********************************************!*\
  !*** ./src/app/forms-builder/guards/index.ts ***!
  \***********************************************/
/*! exports provided: PreviewGuard, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.guard */ "./src/app/forms-builder/guards/preview.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewGuard", function() { return _preview_guard__WEBPACK_IMPORTED_MODULE_0__["PreviewGuard"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/forms-builder/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/forms-builder/guards/preview.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/forms-builder/guards/preview.guard.ts ***!
  \*******************************************************/
/*! exports provided: PreviewGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewGuard", function() { return PreviewGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/forms-builder/services/data.service.ts");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");








var PreviewGuard = /** @class */ (function () {
    function PreviewGuard(dataService, loginService, authService, notification) {
        this.dataService = dataService;
        this.loginService = loginService;
        this.authService = authService;
        this.notification = notification;
    }
    PreviewGuard.prototype.canActivate = function (next) {
        var _this = this;
        return this.dataService.getForm(next.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            if (!_this.authService.user) {
                _this.loginService.openDialog();
                return _this.authService.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (isAuth) { return isAuth; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.dataService.getForm(next.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.notAvailableForm(error); })); }));
            }
            return _this.notAvailableForm(e);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return true; }));
    };
    PreviewGuard.prototype.notAvailableForm = function (e) {
        this.notification.open({
            type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].DANGER,
            message: e.message + ". Used account " + this.authService.user.userName + "."
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    };
    PreviewGuard.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    PreviewGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            src_app_security_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], PreviewGuard);
    return PreviewGuard;
}());



/***/ }),

/***/ "./src/app/forms-builder/services/data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/forms-builder/services/data.service.ts ***!
  \********************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/form-info/form-info.component */ "./src/app/forms-builder/components/form-info/form-info.component.ts");










var DataService = /** @class */ (function () {
    function DataService(httpClient, authService, notificationService, sqlDb, dialogService) {
        var _this = this;
        this.httpClient = httpClient;
        this.authService = authService;
        this.notificationService = notificationService;
        this.sqlDb = sqlDb;
        this.dialogService = dialogService;
        this.formInfoList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.forms$ = this.formInfoList.asObservable();
        this.selectedForm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.selectedForm$ = this.selectedForm.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(function (x, y) { return _this.areFormsEqual(x, y); }));
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isLoading$ = this.isLoading.asObservable();
    }
    DataService.prototype.getForms = function () {
        var _this = this;
        return this.loadForms().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.forms$; }));
    };
    DataService.prototype.getForm = function (form) {
        var _this = this;
        this.isLoading.next(true);
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/forms/form/" + form.ownerName + "/" + form.formName;
        return this.httpClient.get(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (formInfo) {
            if (!formInfo) {
                throw Error("No form or no access to form " + form.ownerName + "/" + form.formName);
            }
            var selected = _this.selectedForm.value;
            if (_this.areFormsEqual(formInfo, selected) && !selected.hasOwnProperty('formId')) {
                _this.selectedForm.next(formInfo);
            }
            _this.stopLoading();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.stopLoading();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    DataService.prototype.saveForm = function (form) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/forms/form";
        this.isLoading.next(true);
        return this.httpClient.post(url, form, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (id) { return _this.loadForms().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return id; })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_8__["NotificationType"].DANGER,
                message: e.error
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    DataService.prototype.deleteForm = function (id) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/forms/form/" + id;
        return this.httpClient.delete(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.loadForms(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_8__["NotificationType"].DANGER,
                message: e.error
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    DataService.prototype.deleteObject = function (sqlConnectionUrl, ownerName, objectName) {
        var _this = this;
        return this.sqlDb.getObject(sqlConnectionUrl, ownerName, objectName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (obj) {
            if (!obj) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Table not found for " + ownerName + ", " + objectName);
            }
            return _this.sqlDb.deleteObject(sqlConnectionUrl, obj);
        }));
    };
    DataService.prototype.selectForm = function (form) {
        var _this = this;
        if (!this.areFormsEqual(form, this.selectedForm.value)) {
            this.selectedFormOwner = form;
            var selected = this.formInfoList.value && this.formInfoList.value.find(function (f) { return _this.areFormsEqual(form, f); });
            if (selected) {
                this.selectedForm.next(selected);
            }
            else if (form.formName && form.ownerName) {
                this.selectedForm.next(form);
            }
            else {
                this.selectedForm.next(null);
            }
        }
    };
    DataService.prototype.loadForms = function () {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/forms/my-forms";
        this.isLoading.next(true);
        return this.httpClient.get(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (forms) {
            _this.formInfoList.next(forms);
            if (_this.selectedFormOwner) {
                _this.selectForm(_this.selectedFormOwner);
            }
            _this.stopLoading();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.isLoading.next(false);
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_8__["NotificationType"].DANGER,
                message: e.message
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    DataService.prototype.areFormsEqual = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length > 1) {
            var first_1 = args[0];
            return !args.slice(1).some(function (f) {
                return !(first_1 && f && first_1.ownerName === f.ownerName && first_1.formName === f.formName);
            });
        }
        return true;
    };
    DataService.prototype.saveFormDialog = function (formInfo, formEditDialog) {
        var _this = this;
        if (!formEditDialog) {
            formEditDialog = this.dialogService.open(_components_form_info_form_info_component__WEBPACK_IMPORTED_MODULE_9__["FormInfoComponent"], { class: 'modal-lg' });
            formEditDialog.config = formInfo;
            formEditDialog.modal.onHide.subscribe(function () {
                formEditDialog.component.save.next();
                formEditDialog.component.save.complete();
            });
        }
        return formEditDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return formEditDialog.component.save; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (form) {
            if (!form) {
                return _this.saveFormDialog(formInfo, formEditDialog);
            }
            var shortForm = form;
            var ownerName = _this.authService.user.userName;
            var formId = ownerName === formInfo.ownerName ? formInfo.formId : 0;
            var newFormInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, formInfo, shortForm, { ownerName: ownerName, formId: formId });
            return _this.saveForm(newFormInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (id) {
                setTimeout(function () {
                    formEditDialog.modal.hide();
                });
                newFormInfo.formId = id;
                return newFormInfo;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                return _this.saveFormDialog(newFormInfo, formEditDialog);
            }));
        }));
    };
    DataService.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.isLoading.next(false);
        }, 1e1);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["SqlDbService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_security__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["SqlDbService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["DialogService"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=forms-builder-forms-builder-module.js.map