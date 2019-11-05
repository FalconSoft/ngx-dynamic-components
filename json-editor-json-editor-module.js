(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["json-editor-json-editor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout [config]=\"layoutConfig\">\n  <h2 title class=\"mb-0 ml-0 top-sub-header w-md-down-50\">WORKSHEET <span>SYSTEMS</span> - JSON Editor</h2>\n  <div header class=\"ml-auto d-flex\"></div>\n  <app-content-explorer content [data]=\"{}\"></app-content-explorer>\n</app-layout>\n"

/***/ }),

/***/ "./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: JsonEditorLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditorLayoutComponent", function() { return JsonEditorLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JsonEditorLayoutComponent = /** @class */ (function () {
    function JsonEditorLayoutComponent() {
        this.layoutConfig = {
            icon: 'assets/img/je-logo-64x64.png',
            smIcon: 'assets/img/je-logo-36x36.png',
            appName: 'json-editor',
            collapsed: true
        };
    }
    JsonEditorLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-json-editor-layout',
            template: __webpack_require__(/*! raw-loader!./json-editor-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.html")
        })
    ], JsonEditorLayoutComponent);
    return JsonEditorLayoutComponent;
}());



/***/ }),

/***/ "./src/app/json-editor/json-editor-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/json-editor/json-editor-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: JsonEditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditorRoutingModule", function() { return JsonEditorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_json_editor_layout_json_editor_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/json-editor-layout/json-editor-layout.component */ "./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.ts");




var routes = [{
        path: '',
        component: _components_json_editor_layout_json_editor_layout_component__WEBPACK_IMPORTED_MODULE_3__["JsonEditorLayoutComponent"]
    }];
var JsonEditorRoutingModule = /** @class */ (function () {
    function JsonEditorRoutingModule() {
    }
    JsonEditorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], JsonEditorRoutingModule);
    return JsonEditorRoutingModule;
}());



/***/ }),

/***/ "./src/app/json-editor/json-editor.module.ts":
/*!***************************************************!*\
  !*** ./src/app/json-editor/json-editor.module.ts ***!
  \***************************************************/
/*! exports provided: JsonEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditorModule", function() { return JsonEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/wijmo/wijmo.module */ "./src/app/wijmo/wijmo.module.ts");
/* harmony import */ var src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _json_editor_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./json-editor-routing.module */ "./src/app/json-editor/json-editor-routing.module.ts");
/* harmony import */ var _components_json_editor_layout_json_editor_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/json-editor-layout/json-editor-layout.component */ "./src/app/json-editor/components/json-editor-layout/json-editor-layout.component.ts");










var JsonEditorModule = /** @class */ (function () {
    function JsonEditorModule() {
    }
    JsonEditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_json_editor_layout_json_editor_layout_component__WEBPACK_IMPORTED_MODULE_9__["JsonEditorLayoutComponent"]],
            providers: [src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _json_editor_routing_module__WEBPACK_IMPORTED_MODULE_8__["JsonEditorRoutingModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_6__["WijmoModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot()
            ]
        })
    ], JsonEditorModule);
    return JsonEditorModule;
}());



/***/ })

}]);
//# sourceMappingURL=json-editor-json-editor-module.js.map