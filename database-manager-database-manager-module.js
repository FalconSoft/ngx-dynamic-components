(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["database-manager-database-manager-module"],{

/***/ "./node_modules/@ngrx/router-store/fesm5/router-store.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ngrx/router-store/fesm5/router-store.js ***!
  \***************************************************************/
/*! exports provided: ɵngrx_modules_router_store_router_store_a, ɵngrx_modules_router_store_router_store_b, ROUTER_ERROR, ROUTER_CANCEL, ROUTER_NAVIGATION, ROUTER_NAVIGATED, ROUTER_REQUEST, routerReducer, StoreRouterConnectingModule, NavigationActionTiming, ROUTER_CONFIG, DEFAULT_ROUTER_FEATURENAME, RouterStateSerializer, DefaultRouterStateSerializer, MinimalRouterStateSerializer, getSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_router_store_router_store_a", function() { return _ROUTER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_router_store_router_store_b", function() { return _createRouterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_ERROR", function() { return ROUTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CANCEL", function() { return ROUTER_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_NAVIGATION", function() { return ROUTER_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_NAVIGATED", function() { return ROUTER_NAVIGATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_REQUEST", function() { return ROUTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerReducer", function() { return routerReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRouterConnectingModule", function() { return StoreRouterConnectingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationActionTiming", function() { return NavigationActionTiming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CONFIG", function() { return ROUTER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ROUTER_FEATURENAME", function() { return DEFAULT_ROUTER_FEATURENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateSerializer", function() { return RouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRouterStateSerializer", function() { return DefaultRouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalRouterStateSerializer", function() { return MinimalRouterStateSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectors", function() { return getSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license NgRx 8.3.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */






/**
 * An action dispatched when a router navigation request is fired.
 */
var ROUTER_REQUEST = '@ngrx/router-store/request';
/**
 * An action dispatched when the router navigates.
 */
var ROUTER_NAVIGATION = '@ngrx/router-store/navigation';
/**
 * An action dispatched when the router cancels navigation.
 */
var ROUTER_CANCEL = '@ngrx/router-store/cancel';
/**
 * An action dispatched when the router errors.
 */
var ROUTER_ERROR = '@ngrx/router-store/error';
/**
 * An action dispatched after navigation has ended and new route is active.
 */
var ROUTER_NAVIGATED = '@ngrx/router-store/navigated';

function routerReducer(state, action) {
    // Allow compilation with strictFunctionTypes - ref: #1344
    var routerAction = action;
    switch (routerAction.type) {
        case ROUTER_NAVIGATION:
        case ROUTER_ERROR:
        case ROUTER_CANCEL:
            return {
                state: routerAction.payload.routerState,
                navigationId: routerAction.payload.event.id,
            };
        default:
            return state;
    }
}

var RouterStateSerializer = /** @class */ (function () {
    function RouterStateSerializer() {
    }
    return RouterStateSerializer;
}());

var DefaultRouterStateSerializer = /** @class */ (function () {
    function DefaultRouterStateSerializer() {
    }
    DefaultRouterStateSerializer.prototype.serialize = function (routerState) {
        return {
            root: this.serializeRoute(routerState.root),
            url: routerState.url,
        };
    };
    DefaultRouterStateSerializer.prototype.serializeRoute = function (route) {
        var _this = this;
        var children = route.children.map(function (c) { return _this.serializeRoute(c); });
        return {
            params: route.params,
            paramMap: route.paramMap,
            data: route.data,
            url: route.url,
            outlet: route.outlet,
            routeConfig: route.routeConfig
                ? {
                    component: route.routeConfig.component,
                    path: route.routeConfig.path,
                    pathMatch: route.routeConfig.pathMatch,
                    redirectTo: route.routeConfig.redirectTo,
                    outlet: route.routeConfig.outlet,
                }
                : null,
            queryParams: route.queryParams,
            queryParamMap: route.queryParamMap,
            fragment: route.fragment,
            component: (route.routeConfig
                ? route.routeConfig.component
                : undefined),
            root: undefined,
            parent: undefined,
            firstChild: children[0],
            pathFromRoot: undefined,
            children: children,
        };
    };
    return DefaultRouterStateSerializer;
}());

var MinimalRouterStateSerializer = /** @class */ (function () {
    function MinimalRouterStateSerializer() {
    }
    MinimalRouterStateSerializer.prototype.serialize = function (routerState) {
        return {
            root: this.serializeRoute(routerState.root),
            url: routerState.url,
        };
    };
    MinimalRouterStateSerializer.prototype.serializeRoute = function (route) {
        var _this = this;
        var children = route.children.map(function (c) { return _this.serializeRoute(c); });
        return {
            params: route.params,
            data: route.data,
            url: route.url,
            outlet: route.outlet,
            routeConfig: route.routeConfig
                ? {
                    path: route.routeConfig.path,
                    pathMatch: route.routeConfig.pathMatch,
                    redirectTo: route.routeConfig.redirectTo,
                    outlet: route.routeConfig.outlet,
                }
                : null,
            queryParams: route.queryParams,
            fragment: route.fragment,
            firstChild: children[0],
            children: children,
        };
    };
    return MinimalRouterStateSerializer;
}());

var NavigationActionTiming;
(function (NavigationActionTiming) {
    NavigationActionTiming[NavigationActionTiming["PreActivation"] = 1] = "PreActivation";
    NavigationActionTiming[NavigationActionTiming["PostActivation"] = 2] = "PostActivation";
})(NavigationActionTiming || (NavigationActionTiming = {}));
var _ROUTER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/router-store Internal Configuration');
var ROUTER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/router-store Configuration');
var DEFAULT_ROUTER_FEATURENAME = 'router';
function _createRouterConfig(config) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ stateKey: DEFAULT_ROUTER_FEATURENAME, serializer: DefaultRouterStateSerializer, navigationActionTiming: NavigationActionTiming.PreActivation }, config);
}
var RouterTrigger;
(function (RouterTrigger) {
    RouterTrigger[RouterTrigger["NONE"] = 1] = "NONE";
    RouterTrigger[RouterTrigger["ROUTER"] = 2] = "ROUTER";
    RouterTrigger[RouterTrigger["STORE"] = 3] = "STORE";
})(RouterTrigger || (RouterTrigger = {}));
/**
 * Connects RouterModule with StoreModule.
 *
 * During the navigation, before any guards or resolvers run, the router will dispatch
 * a ROUTER_NAVIGATION action, which has the following signature:
 *
 * ```
 * export type RouterNavigationPayload = {
 *   routerState: SerializedRouterStateSnapshot,
 *   event: RoutesRecognized
 * }
 * ```
 *
 * Either a reducer or an effect can be invoked in response to this action.
 * If the invoked reducer throws, the navigation will be canceled.
 *
 * If navigation gets canceled because of a guard, a ROUTER_CANCEL action will be
 * dispatched. If navigation results in an error, a ROUTER_ERROR action will be dispatched.
 *
 * Both ROUTER_CANCEL and ROUTER_ERROR contain the store state before the navigation
 * which can be used to restore the consistency of the store.
 *
 * Usage:
 *
 * ```typescript
 * @NgModule({
 *   declarations: [AppCmp, SimpleCmp],
 *   imports: [
 *     BrowserModule,
 *     StoreModule.forRoot(mapOfReducers),
 *     RouterModule.forRoot([
 *       { path: '', component: SimpleCmp },
 *       { path: 'next', component: SimpleCmp }
 *     ]),
 *     StoreRouterConnectingModule.forRoot()
 *   ],
 *   bootstrap: [AppCmp]
 * })
 * export class AppModule {
 * }
 * ```
 */
var StoreRouterConnectingModule = /** @class */ (function () {
    function StoreRouterConnectingModule(store, router, serializer, errorHandler, config) {
        this.store = store;
        this.router = router;
        this.serializer = serializer;
        this.errorHandler = errorHandler;
        this.config = config;
        this.lastEvent = null;
        this.trigger = RouterTrigger.NONE;
        this.stateKey = this.config.stateKey;
        this.setUpStoreStateListener();
        this.setUpRouterEventsListener();
    }
    StoreRouterConnectingModule_1 = StoreRouterConnectingModule;
    StoreRouterConnectingModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRouterConnectingModule_1,
            providers: [
                { provide: _ROUTER_CONFIG, useValue: config },
                {
                    provide: ROUTER_CONFIG,
                    useFactory: _createRouterConfig,
                    deps: [_ROUTER_CONFIG],
                },
                {
                    provide: RouterStateSerializer,
                    useClass: config.serializer
                        ? config.serializer
                        : config.routerState === 1 /* Minimal */
                            ? MinimalRouterStateSerializer
                            : DefaultRouterStateSerializer,
                },
            ],
        };
    };
    StoreRouterConnectingModule.prototype.setUpStoreStateListener = function () {
        var _this = this;
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(this.stateKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store))
            .subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), routerStoreState = _b[0], storeState = _b[1];
            _this.navigateIfNeeded(routerStoreState, storeState);
        });
    };
    StoreRouterConnectingModule.prototype.navigateIfNeeded = function (routerStoreState, storeState) {
        var _this = this;
        if (!routerStoreState || !routerStoreState.state) {
            return;
        }
        if (this.trigger === RouterTrigger.ROUTER) {
            return;
        }
        if (this.lastEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            return;
        }
        var url = routerStoreState.state.url;
        if (this.router.url !== url) {
            this.storeState = storeState;
            this.trigger = RouterTrigger.STORE;
            this.router.navigateByUrl(url).catch(function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    StoreRouterConnectingModule.prototype.setUpRouterEventsListener = function () {
        var _this = this;
        var dispatchNavLate = this.config.navigationActionTiming ===
            NavigationActionTiming.PostActivation;
        var routesRecognized;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store))
            .subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), event = _b[0], storeState = _b[1];
            _this.lastEvent = event;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.routerState = _this.serializer.serialize(_this.router.routerState.snapshot);
                if (_this.trigger !== RouterTrigger.STORE) {
                    _this.storeState = storeState;
                    _this.dispatchRouterRequest(event);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                routesRecognized = event;
                if (!dispatchNavLate && _this.trigger !== RouterTrigger.STORE) {
                    _this.dispatchRouterNavigation(event);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                _this.dispatchRouterCancel(event);
                _this.reset();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.dispatchRouterError(event);
                _this.reset();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (_this.trigger !== RouterTrigger.STORE) {
                    if (dispatchNavLate) {
                        _this.dispatchRouterNavigation(routesRecognized);
                    }
                    _this.dispatchRouterNavigated(event);
                }
                _this.reset();
            }
        });
    };
    StoreRouterConnectingModule.prototype.dispatchRouterRequest = function (event) {
        this.dispatchRouterAction(ROUTER_REQUEST, { event: event });
    };
    StoreRouterConnectingModule.prototype.dispatchRouterNavigation = function (lastRoutesRecognized) {
        var nextRouterState = this.serializer.serialize(lastRoutesRecognized.state);
        this.dispatchRouterAction(ROUTER_NAVIGATION, {
            routerState: nextRouterState,
            event: new _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"](lastRoutesRecognized.id, lastRoutesRecognized.url, lastRoutesRecognized.urlAfterRedirects, nextRouterState),
        });
    };
    StoreRouterConnectingModule.prototype.dispatchRouterCancel = function (event) {
        this.dispatchRouterAction(ROUTER_CANCEL, {
            storeState: this.storeState,
            event: event,
        });
    };
    StoreRouterConnectingModule.prototype.dispatchRouterError = function (event) {
        this.dispatchRouterAction(ROUTER_ERROR, {
            storeState: this.storeState,
            event: new _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"](event.id, event.url, "" + event),
        });
    };
    StoreRouterConnectingModule.prototype.dispatchRouterNavigated = function (event) {
        var routerState = this.serializer.serialize(this.router.routerState.snapshot);
        this.dispatchRouterAction(ROUTER_NAVIGATED, { event: event, routerState: routerState });
    };
    StoreRouterConnectingModule.prototype.dispatchRouterAction = function (type, payload) {
        this.trigger = RouterTrigger.ROUTER;
        try {
            this.store.dispatch({
                type: type,
                payload: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ routerState: this.routerState }, payload, { event: this.config.routerState === 1 /* Minimal */
                        ? { id: payload.event.id, url: payload.event.url }
                        : payload.event }),
            });
        }
        finally {
            this.trigger = RouterTrigger.NONE;
        }
    };
    StoreRouterConnectingModule.prototype.reset = function () {
        this.trigger = RouterTrigger.NONE;
        this.storeState = null;
        this.routerState = null;
    };
    var StoreRouterConnectingModule_1;
    StoreRouterConnectingModule = StoreRouterConnectingModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ROUTER_CONFIG)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            RouterStateSerializer,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], Object])
    ], StoreRouterConnectingModule);
    return StoreRouterConnectingModule;
}());

function getSelectors(selectState) {
    var selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectState, function (router) { return router && router.state; });
    var selectCurrentRoute = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectRouterState, function (routerState) {
        if (!routerState) {
            return undefined;
        }
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    });
    var selectQueryParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectCurrentRoute, function (route) { return route && route.queryParams; });
    var selectQueryParam = function (param) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectQueryParams, function (params) { return params && params[param]; });
    };
    var selectRouteParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectCurrentRoute, function (route) { return route && route.params; });
    var selectRouteParam = function (param) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectRouteParams, function (params) { return params && params[param]; });
    };
    var selectRouteData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectCurrentRoute, function (route) { return route && route.data; });
    var selectUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectRouterState, function (routerState) { return routerState && routerState.url; });
    return {
        selectCurrentRoute: selectCurrentRoute,
        selectQueryParams: selectQueryParams,
        selectQueryParam: selectQueryParam,
        selectRouteParams: selectRouteParams,
        selectRouteParam: selectRouteParam,
        selectRouteData: selectRouteData,
        selectUrl: selectUrl,
    };
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=router-store.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/db-connections/db-connections.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/db-connections/db-connections.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group align-self-center\" dropdown placement=\"bottom right\">\n  <button id=\"connections-btn-group\" dropdownToggle class=\"btn btn-light dropdown-toggle btn-sm m-0\" type=\"button\"\n    title=\"Select connection\" aria-controls=\"dropdown-menu-connections\" tabindex=\"0\" role=\"button\">\n    {{ selectedConnection$ | async }}\n    <span class=\"caret\"></span>\n  </button>\n\n  <ul id=\"dropdown-menu-connections\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"connections-btn-group\">\n    <li role=\"menuitem\" *ngFor=\"let con of connections$ | async\">\n      <a class=\"dropdown-item cursor-pointer\" (click)=\"onConnectionSelect(con.connectorName)\">{{con.connectorName}}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/import-csv/import-csv.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/import-csv/import-csv.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Import CSV data</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column h-100\">\n  <div class=\"row m-0\">\n    <button type=\"button\" (click)=\"loadCSV()\" class=\"btn btn-primary mr-2\">Browse...</button>\n    <div class=\"d-flex w-75\">\n      <ng-container *ngIf=\"createTable$ | async\">\n        <div class=\"form-group row m-0 w-50\">\n          <label for=\"owner-name\" class=\"col-sm-4 col-form-label\">Owner name</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" [(ngModel)]=\"metaData.objectOwner\" class=\"form-control\" id=\"owner-name\"\n              placeholder=\"Owner\">\n          </div>\n        </div>\n        <div class=\"form-group row m-0 w-50\">\n          <label for=\"object-name\" class=\"col-sm-4 col-form-label\">Object name</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" [(ngModel)]=\"metaData.objectName\" class=\"form-control\" id=\"object-name\"\n              placeholder=\"Name\">\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"!(createTable$ | async)\">\n        <label for=\"object-name\" class=\"col-sm-2 col-form-label\">Import data into</label>\n        <div class=\"btn-group\" dropdown>\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-light dropdown-toggle\"\n            aria-controls=\"dropdown-basic\">\n            {{getSelectedTableTitle()}}<span class=\"caret\"></span>\n          </button>\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n            <li role=\"menuitem\" *ngFor=\"let t of tables$ | async\">\n              <a class=\"dropdown-item cursor-pointer\" (click)=\"onTableSelect(t)\">{{t.objectOwner}}.{{t.objectName}}</a>\n            </li>\n          </ul>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input mr-2\" type=\"checkbox\" id=\"create-tabel\" [checked]=\"(createTable$ | async)\"\n        [value]=\"(createTable$ | async)\" (change)=\"createTable$.next($event.target.checked)\">\n      <label class=\"form-check-label\" for=\"create-tabel\">Create New Table</label>\n    </div>\n  </div>\n  <div class=\"row flex-fill mx-0 flex-column my-2 h-100 position-relative\">\n    <div fxLayout=\"row\">\n      <h5 fxFlex class=\"table-title\">Fields Mappings</h5>\n      <span *ngIf=\"rowsLoaded\">{{rowsLoaded | number}} rows loaded</span>\n    </div>\n    <div class=\"fields-container d-flex flex-fill\">\n      <wj-menu #ctxMenu [isButton]=\"true\" (itemClicked)=\"onCtxMenuClicked()\" style=\"display:none;\">\n        <wj-menu-item [value]=\"'edit'\">Insert Field above</wj-menu-item>\n      </wj-menu>\n      <wj-flex-grid #grid class=\"h-100\" [itemsSource]=\"tableColumns\" [allowDelete]=\"createTable$ | async\"\n        [allowAddNew]=\"createTable$ | async\" [wjContextMenu]=\"ctxMenu\">\n        <wj-flex-grid-column header=\"IsKey\" [isReadOnly]=\"!(createTable$ | async)\" binding=\"isKey\" [width]=\"50\"\n          dataType=\"Boolean\" [allowSorting]=\"false\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Table Field\" [isReadOnly]=\"!(createTable$ | async)\" binding=\"fieldName\"\n          dataType=\"String\" [minWidth]=\"50\" [width]=\"'*'\" [allowSorting]=\"false\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Source Field\" [isReadOnly]=\"false\" binding=\"sourceField\" [dataMap]=\"sourceFields\"\n          [minWidth]=\"50\" [width]=\"'*'\" [allowSorting]=\"false\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Field Data Type\" [isReadOnly]=\"!(createTable$ | async)\" [dataMap]=\"dataTypes\"\n          binding=\"dataType\" [allowSorting]=\"false\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Size\" [isRequired]=\"false\" [isReadOnly]=\"!(createTable$ | async)\" binding=\"size\"\n          dataType=\"Number\" [allowSorting]=\"false\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Preprocess Function\" [isRequired]=\"false\" [isReadOnly]=\"false\"\n          [dataMap]=\"preprocessors\" binding=\"preprocessFunc\" [allowSorting]=\"false\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Parameters\" [isRequired]=\"false\" [isReadOnly]=\"false\" binding=\"preprocessParams\"\n          [allowSorting]=\"false\">\n        </wj-flex-grid-column>\n      </wj-flex-grid>\n    </div>\n    <div\n      class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n      *ngIf=\"loading\">\n      <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <h5>{{progressMessage}}</h5>\n    </div>\n    <div class=\"d-flex position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\" *ngIf=\"error\">\n      <alert type=\"danger\">\n        <strong>Error:</strong> Verify file format ({{error}}).\n      </alert>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" class=\"btn btn-light\" [disabled]=\"!data || !data.length\" (click)=\"previewData()\">Preview\n      Data</button>\n    <button type=\"button\" (click)=\"import()\" [disabled]=\"!isValid\" class=\"btn btn-primary ml-auto mr-2\">Import</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/manager-layout/manager-layout.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/manager-layout/manager-layout.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout [config]=\"layoutConfig\">\n  <h2 title class=\"mb-0 ml-0 top-sub-header w-md-down-50\">WORKSHEET <span>SYSTEMS</span> - Database</h2>\n  <app-db-connections header class=\"ml-auto d-flex mr-2\"></app-db-connections>\n  <app-sql-objects sidebar class=\"h-100 w-100 py-2 d-flex flex-column\"></app-sql-objects>\n  <router-outlet content></router-outlet>\n</app-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/preview-data/preview-data.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/preview-data/preview-data.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Preview result table</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column h-100\">\n    <wj-flex-grid #grid class=\"h-100\"\n    [itemsSource]=\"data\"\n    [allowDelete]=\"false\"\n    [allowAddNew]=\"false\"\n    [isReadOnly]=\"true\">\n    <wj-flex-grid-column *ngFor=\"let field of config.fields\"\n      [header]=\"field.fieldName\"\n      [binding]=\"field.fieldName\"\n      [dataType]=\"getColumnType(field.dataType)\"\n      [format]=\"'dd/MM/yyyy HH:mm:ss'\">\n      </wj-flex-grid-column>\n  </wj-flex-grid>\n</div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/rows-count/rows-count.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/rows-count/rows-count.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rows-count position-absolute pr-2\">Show max\n  <select class=\"form-control py-0\" (change)=\"onRowsCountSelect($event)\" [value]=\"perPage$ | async\">\n    <option>1000</option>\n    <option>10000</option>\n    <option>50000</option>\n    <option value=\"\">ALL</option>\n  </select>\n  rows. &nbsp;&nbsp;&nbsp;&nbsp; Total {{rowsCount$ | async | number}} rows.</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-object-content/sql-object-content.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/sql-object-content/sql-object-content.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset class=\"tabset-fx sql-object-tab\">\n  <tab [heading]=\"dataObject ? dataObject.objectName : 'Create table'\" class=\"h-100 position-relative\">\n    <app-rows-count></app-rows-count>\n    <tabset class=\"tabset-fx\">\n      <tab class=\"position-relative\">\n        <ng-template tabHeading>\n          <i class=\"fa fa-cogs fa-lg\"></i> Structure <span [ngClass]=\"{changed: isStructureChanged$ | async }\"></span>\n        </ng-template>\n        <app-table-editor #editor left class=\"w-100 h-100\"></app-table-editor>\n        <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n          *ngIf=\"(loading$ | async) as loading\">1\n          <div class=\"spinner-border\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n          <h5 *ngFor=\"let message of loading.messages\">{{message}}</h5>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading>\n          <i class=\"fa fa-table fa-lg\"></i> Data <span [ngClass]=\"{changed: isDataChanged$ | async }\"></span>\n        </ng-template>\n        <app-table-data #data right class=\"h-100 d-flex\"></app-table-data>\n      </tab>\n    </tabset>\n  </tab>\n</tabset>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-objects/sql-objects.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/sql-objects/sql-objects.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar mb-2\">\n  <div class=\"btn-group mr-2\" dropdown>\n    <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n      aria-controls=\"dropdown-basic\">New <span class=\"caret\"></span>\n    </button>\n    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n      <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/database', connectionName, 'sql-query']\">SQL Query</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/database', connectionName]\">Table</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/database', connectionName, 'view']\">View</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\">Stored Procedure</a></li>\n      <li role=\"menuitem\"><a class=\"dropdown-item\">Function</a></li>\n    </ul>\n  </div>\n  <button type=\"button\" (click)=\"refresh()\" class=\"btn btn-secondary mr-2\">\n    Refresh\n  </button>\n  <button type=\"button\" (click)=\"import()\" class=\"btn btn-secondary\">\n    Import\n  </button>\n</div>\n<app-list-view #listView [comparator]=\"areObjectsEqual\" class=\"d-flex h-100 overflow-auto\" [list]=\"list$ | async\"\n  group=\"objectType\" orderBy=\"id\" (select)=\"onSelect($event)\">\n  <ng-template let-item>\n    <a (click)=\"onSelect(item)\" *ngIf=\"item.objectType === 'Table'\"  [routerLink]=\"['/database', connectionName, item.objectOwner, item.objectName]\" class=\"p-1 pl-4 btn-link w-100\" title=\"{{item.objectOwner}}\">\n      <i class=\"fa fa-table\"></i>\n      {{item.objectOwner}}.{{item.objectName}}\n    </a>\n    <a (click)=\"onSelect(item)\" *ngIf=\"item.objectType === 'View'\"  [routerLink]=\"['/database', connectionName, 'view', item.objectOwner, item.objectName]\" class=\"p-1 pl-4 btn-link w-100\" title=\"{{item.objectOwner}}\">\n      <i class=\"fa fa-cubes\"></i>\n      {{item.objectOwner}}.{{item.objectName}}\n    </a>\n  </ng-template>\n  <ng-template let-item #icon>\n    <i class=\"fa mx-1\" [ngClass]=\"{'fa-table': item.value === 'Table', 'fa-cubes': item.value === 'View'}\"></i>\n  </ng-template>\n</app-list-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-query/sql-query.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/sql-query/sql-query.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset class=\"tabset-fx\">\n    <tab heading=\"SQL query\" class=\"h-100\">\n      <app-split-content class=\"h-100\">\n        <ng-container actions>\n          <button type=\"button\" (click)=\"onRun()\" class=\"btn btn-primary ml-auto mr-1\">Run</button>\n        </ng-container>\n        <div #sqlElement left class=\"w-100\"></div>\n        <ng-container right>\n          <alert type=\"danger\" *ngIf=\"error\">\n            <strong>Error:</strong> {{error}}\n          </alert>\n          <wj-flex-grid #flex class=\"h-100\" *ngIf=\"fields && data\"\n            [(itemsSource)]=\"data\"\n            [isReadOnly]=\"true\">\n            <wj-flex-grid-column *ngFor=\"let field of fields\"\n              [header]=\"field.headerText\"\n              [binding]=\"field.bindingName\"\n              [dataType]=\"field.dataType\">\n            </wj-flex-grid-column>\n          </wj-flex-grid>\n        </ng-container>\n        <ng-container left-label>\n          <i class=\"fa fa-cogs fa-lg\"></i> SQL\n        </ng-container>\n        <ng-container right-label>\n          <i class=\"fa fa-table fa-lg\"></i> Data\n        </ng-container>\n      </app-split-content>\n    </tab>\n  </tabset>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-view-object/sql-view-object.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/sql-view-object/sql-view-object.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tabset class=\"tabset-fx sql-object-tab\">\n    <tab [heading]=\"(dataObject$ | async) ? (dataObject$ | async).objectName : 'Create view'\" class=\"h-100 position-relative\">\n      <app-rows-count></app-rows-count>\n      <tabset class=\"tabset-fx\">\n        <tab class=\"position-relative\">\n          <ng-template tabHeading>\n            <i class=\"fa fa-cogs fa-lg\"></i> Structure <span [ngClass]=\"{changed: isSQLChanged$ | async }\"></span>\n          </ng-template>\n          <app-view-editor left class=\"w-100 h-100\"></app-view-editor>\n          <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n            *ngIf=\"(loading$ | async) as loading\">1\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n            <h5 *ngFor=\"let message of loading.messages\">{{message}}</h5>\n          </div>\n        </tab>\n        <tab>\n          <ng-template tabHeading>\n            <i class=\"fa fa-table fa-lg\"></i> Data\n          </ng-template>\n          <app-table-data [isReadOnly]=\"true\" #data right class=\"h-100 d-flex\"></app-table-data>\n        </tab>\n      </tabset>\n    </tab>\n  </tabset>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/table-data/table-data.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/table-data/table-data.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-0\">\n  <app-filters [fields]=\"fields\" (changed)=\"onFiltersChange($event)\"\n    [currentFilters]=\"filters\" [dataObject]=\"dataObject\" [connection]=\"connection\"></app-filters>\n  <button *ngIf=\"!isReadOnly\" type=\"button\" (click)=\"saveData()\" [disabled]=\"!(isChanged$ | async)\"\n    class=\"btn btn-primary ml-auto mr-0 align-self-baseline mb-2\">Save</button>\n  <span dropdown class=\"d-flex position-relative px-2 mb-2\" [ngClass]=\"{'ml-auto': isReadOnly}\" placement=\"top left\">\n    <button dropdownToggle type=\"button\" class=\"btn py-0\">\n      <i class=\"fa fa-ellipsis-v\"></i>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu left-menu\" role=\"menu\">\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"exportToExcel()\">Export to Excel</a>\n      </li>\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"exportToCSV()\">Export to CSV</a>\n      </li>\n    </ul>\n  </span>\n</div>\n<div class=\"position-relative h-100\">\n  <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n    *ngIf=\"(loading$ | async) as loading\">\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    <h5 *ngFor=\"let message of loading.messages\">{{message}}</h5>\n  </div>\n  <wj-menu #ctxMenu\n    [isButton]=\"true\"\n    (itemClicked)=\"onCtxMenuClicked(ctxMenu)\" style=\"display:none;\">\n    <wj-menu-item value=\"edit-column\"><span class=\"px-2\"><i class=\"fa fa-columns mr-1 my-2\"></i>Format Column</span></wj-menu-item>\n    <wj-menu-item value=\"fill-all\"><span class=\"px-2\"><i class=\"fa fa-file-o mr-1 my-2\"></i>Fill all rows</span></wj-menu-item>\n    <wj-menu-item value=\"fill-empty\"><span class=\"px-2\"><i class=\"fa fa-files-o mr-1 my-2\"></i>Fill empty rows</span></wj-menu-item>\n  </wj-menu>\n  <wj-flex-grid #grid class=\"data-grid\" [wjContextMenu]=\"ctxMenu\" [(itemsSource)]=\"data\" [allowAddNew]=\"true\" [allowDelete]=\"true\"\n    (initialized)=\"initializedGrid(grid)\" [isReadOnly]=\"!!isReadOnly\">\n    <wj-flex-grid-column *ngFor=\"let field of fields\" [header]=\"field.headerText\" [binding]=\"field.bindingName\"\n      [dataType]=\"field.dataType\" [width]=\"field.width\" [format]=\"field.displayFormat\">\n      <ng-template wjFlexGridCellTemplate [cellType]=\"'ColumnHeader'\" let-cell=\"cell\">\n        <div class=\"text-normal\" [title]=\"field.headerText\">{{field.headerText}}</div>\n        <app-filter (apply)=\"onApply($event, field)\" [field]=\"field\" [icon]=\"true\" [dataObject]=\"dataObject\" [connection]=\"connection\" [currentFilters]=\"filters\"></app-filter>\n      </ng-template>\n    </wj-flex-grid-column>\n  </wj-flex-grid>\n  <div class=\"row m-0 align-items-center\">\n    <i class=\"fa fa-filter cursor-pointer px-1\" *ngIf=\"filters\" triggers=\"mouseenter:mouseleave\" [popover]=\"popTemplate\"></i>\n    <span class=\"ml-auto mr-1\">Rows: {{data ? data.length : 0 | number}}</span>\n    <ng-container *ngIf=\"limitRows\">\n      |<i class=\"fa fa-angle-double-left ml-1 cursor-pointer\" aria-hidden=\"true\" (click)=\"onNextPage(-1)\"></i>\n      Page: {{currentPage}}<i class=\"fa fa-angle-double-right cursor-pointer\" (click)=\"onNextPage(1)\" aria-hidden=\"true\"></i>\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #popTemplate>\n  <h6>Apply Filter</h6>\n  <ul class=\"applied-filters-list px-0\" *ngIf=\"filters\">\n    <li *ngFor=\"let f of filtersList\">\n      <b>{{f.fieldName}}</b>: {{f.value}}\n    </li>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/table-editor/table-editor.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/table-editor/table-editor.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"d-flex flex-column h-100\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"dataObject\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"stretch center\">\n    <h5 fxFlex class=\"col-sm-12 px-0\">Table Information</h5>\n    <div class=\"row mx-0\">\n      <button type=\"submit\" [disabled]=\"!(isChanged$ | async)\" class=\"btn btn-primary ml-auto mr-1\">Save</button>\n      <button type=\"button\" *ngIf=\"dataObject\" (click)=\"onTableDelete()\" class=\"btn btn-secondary\">Delete</button>\n    </div>\n  </div>\n  <div class=\"row mx-0\" style=\"max-width: 750px\">\n    <div class=\"form-group col-sm-3 px-0 mb-2\">\n      <label for=\"objectOwner\">Owner</label>\n      <input type=\"text\" class=\"form-control\" id=\"objectOwner\" #objectOwner=\"ngModel\" (input)=\"onUpdate()\" required\n        [(ngModel)]=\"dataObject.objectOwner\" name=\"objectOwner\">\n      <div *ngIf=\"objectOwner.invalid && (objectOwner.dirty || objectOwner.touched)\"\n        class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n        <div *ngIf=\"objectOwner.errors.required\">Owner Name is required.</div>\n      </div>\n    </div>\n    <div class=\"form-group col-sm-9 pr-0 pl-2 mb-2\">\n      <label for=\"name\">Table Name</label>\n      <input type=\"text\" class=\"form-control\" #objectName=\"ngModel\" id=\"objectName\" (input)=\"onUpdate()\" required\n        [(ngModel)]=\"dataObject.objectName\" name=\"objectName\">\n      <div *ngIf=\"objectName.invalid && (objectName.dirty || objectName.touched)\"\n        class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n        <div *ngIf=\"objectName.errors.required\">Table Name is required.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row flex-fill mx-0 flex-column h-100\" style=\"max-width: 750px\">\n    <h5 class=\"col-sm-12 table-title px-0\">Define Table Fields</h5>\n    <div class=\"col fields-container d-flex h-100 px-0 mb-2\">\n      <wj-flex-grid #grid class=\"h-100\" [itemsSource]=\"collection\" [allowDelete]=\"true\" [allowAddNew]=\"true\"\n        (initialized)=\"initializedGrid(grid)\" (deletedRow)=\"onFieldsUpdate()\" [itemFormatter]=\"formatItem\">\n        <wj-flex-grid-column header=\"IsKey\" binding=\"isKey\" [width]=\"50\" dataType=\"Boolean\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Field Name\" binding=\"fieldName\" [minWidth]=\"50\" [width]=\"'*'\">\n        </wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Field Data Type\" [dataMap]=\"dataTypes\" binding=\"dataType\"></wj-flex-grid-column>\n        <wj-flex-grid-column header=\"Size\" binding=\"size\" dataType=\"Number\" [width]=\"70\"></wj-flex-grid-column>\n      </wj-flex-grid>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/view-editor/view-editor.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/database-manager/components/view-editor/view-editor.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"d-flex flex-column h-100\" #form=\"ngForm\" *ngIf=\"dataObject\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"stretch center\">\n    <h5 fxFlex class=\"col-sm-12 px-0\">View Information</h5>\n    <div class=\"row mx-0\">\n      <button type=\"submit\" [disabled]=\"!isChanged\" (click)=\"onSubmit()\" class=\"btn btn-primary ml-auto mr-1\">Save</button>\n      <button type=\"button\" *ngIf=\"dataObject\" (click)=\"onViewDelete()\" class=\"btn btn-secondary\">Delete</button>\n    </div>\n  </div>\n  <div class=\"row mx-0\" style=\"max-width: 750px\">\n    <div class=\"form-group col-sm-3 px-0 mb-2\">\n      <label for=\"objectOwner\">Owner</label>\n      <input type=\"text\" class=\"form-control\" disabled=\"disabled\" id=\"objectOwner\" #objectOwner=\"ngModel\" required\n        [ngModel]=\"dataObject.objectOwner\" name=\"objectOwner\">\n    </div>\n    <div class=\"form-group col-sm-9 pr-0 pl-2 mb-2\" *ngIf=\"dataObject.objectName !== 'New'\">\n      <label for=\"name\">View Name</label>\n      <input type=\"text\" class=\"form-control\" disabled=\"disabled\" #objectName=\"ngModel\" id=\"objectName\" required\n        [ngModel]=\"dataObject.objectName\" name=\"objectName\">\n    </div>\n  </div>\n  <app-split-content class=\"h-100\">\n    <div #sqlEditor left class=\"h-100 p-2 w-100\"></div>\n    <ng-container #fields right class=\"w-100\">\n      <div class=\"col fields-container d-flex h-100 px-0 mb-2\">\n        <wj-flex-grid #grid class=\"h-100\" [isReadOnly]=\"true\" [itemsSource]=\"collection\" [allowDelete]=\"false\" [allowAddNew]=\"false\">\n          <wj-flex-grid-column header=\"IsKey\" binding=\"isKey\" [width]=\"50\" dataType=\"Boolean\"></wj-flex-grid-column>\n          <wj-flex-grid-column header=\"Field Name\" binding=\"fieldName\" [minWidth]=\"50\" [width]=\"'*'\">\n          </wj-flex-grid-column>\n          <wj-flex-grid-column header=\"Field Data Type\" [dataMap]=\"dataTypes\" binding=\"dataType\"></wj-flex-grid-column>\n          <wj-flex-grid-column header=\"Size\" binding=\"size\" dataType=\"Number\" [width]=\"70\"></wj-flex-grid-column>\n        </wj-flex-grid>\n      </div>\n    </ng-container>\n    <ng-container left-label>\n      <i class=\"fa fa-cogs fa-lg\"></i> SQL editor\n    </ng-container>\n    <ng-container right-label>\n      <i class=\"fa fa-table fa-lg\"></i> Fields\n    </ng-container>\n  </app-split-content>\n"

/***/ }),

/***/ "./src/app/database-manager/components/db-connections/db-connections.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/database-manager/components/db-connections/db-connections.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy9kYi1jb25uZWN0aW9ucy9kYi1jb25uZWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/database-manager/components/db-connections/db-connections.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/database-manager/components/db-connections/db-connections.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DbConnectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbConnectionsComponent", function() { return DbConnectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");





/**
 * @description Compoenents displays list of selectable connection.
 */
var DbConnectionsComponent = /** @class */ (function () {
    function DbConnectionsComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    DbConnectionsComponent.prototype.ngOnInit = function () {
        this.connections$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectConnectionsList"]);
        this.selectedConnection$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectRouterParam"], 'connectionName');
    };
    DbConnectionsComponent.prototype.onConnectionSelect = function (connection) {
        this.router.navigate(['/database', connection]);
    };
    DbConnectionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    DbConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-db-connections',
            template: __webpack_require__(/*! raw-loader!./db-connections.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/db-connections/db-connections.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./db-connections.component.scss */ "./src/app/database-manager/components/db-connections/db-connections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DbConnectionsComponent);
    return DbConnectionsComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/import-csv/import-csv.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/database-manager/components/import-csv/import-csv.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.fields-container {\n  height: calc(100% - 200px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvaW1wb3J0LWNzdi9pbXBvcnQtY3N2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvaW1wb3J0LWNzdi9pbXBvcnQtY3N2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGF0YWJhc2UtbWFuYWdlci9jb21wb25lbnRzL2ltcG9ydC1jc3YvaW1wb3J0LWNzdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZpZWxkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZpZWxkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/database-manager/components/import-csv/import-csv.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/database-manager/components/import-csv/import-csv.component.ts ***!
  \********************************************************************************/
/*! exports provided: ImportCsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportCsvComponent", function() { return ImportCsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/app/database-manager/utils.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var src_environments_environment_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment.extension */ "./src/environments/environment.extension.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models */ "./src/app/database-manager/models.ts");
/* harmony import */ var _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../preview-data/preview-data.component */ "./src/app/database-manager/components/preview-data/preview-data.component.ts");
/* harmony import */ var _preprocessor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../preprocessor */ "./src/app/database-manager/preprocessor.ts");



















var ProgressMessage;
(function (ProgressMessage) {
    ProgressMessage["Create"] = "Creating new table";
    ProgressMessage["Importing"] = "Importing data";
    ProgressMessage["Imported"] = "Data successfully imported";
})(ProgressMessage || (ProgressMessage = {}));
var ImportCsvComponent = /** @class */ (function () {
    function ImportCsvComponent(fileService, authService, sqlService, store, notificationService, router, dialogService) {
        this.fileService = fileService;
        this.authService = authService;
        this.sqlService = sqlService;
        this.store = store;
        this.notificationService = notificationService;
        this.router = router;
        this.dialogService = dialogService;
        this.dataTypes = Object.values(src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"]);
        this.createTable$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](true);
        this.loading = false;
        this.preprocessors = _models__WEBPACK_IMPORTED_MODULE_14__["Preprocessors"];
    }
    ImportCsvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaData = {
            objectId: 0,
            objectName: null,
            objectOwner: this.authService.user.userName,
            objectType: 'Table',
            fields: []
        };
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectConnectionName"]).subscribe(function (connection) {
            _this.connection = connection;
        });
        this.tables$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectsList"]);
        this.createTable$.subscribe(function (val) {
            if (val) {
                _this.createNewTableColumns();
            }
            else {
                _this.createSelectedTableColumns();
            }
        });
        this.grid.addEventListener(this.grid.hostElement, 'contextmenu', function (e) {
            var ht = _this.grid.hitTest(e);
            _this.rowIndex = ht.row;
        });
        this.grid.cellEditEnded.addHandler(function (g, e) {
            var dataItem = _this.grid.rows[e.row].dataItem;
            var binding = _this.grid.columns[e.col].binding;
            var newVal = dataItem[binding];
            if (e.panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_13__["CellType"].Cell) {
                switch (binding) {
                    case 'dataType': {
                        dataItem.size = src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SqlTypesSizes"][newVal] || null;
                        break;
                    }
                    case 'preprocessFunc': {
                        dataItem.dataType = _preprocessor__WEBPACK_IMPORTED_MODULE_18__["ProcessFuncToType"][newVal] || null;
                        if (dataItem.dataType) {
                            dataItem.size = src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SqlTypesSizes"][dataItem.dataType] || null;
                        }
                        break;
                    }
                }
                _this.grid.refreshCells(false);
            }
        });
    };
    Object.defineProperty(ImportCsvComponent.prototype, "isValid", {
        get: function () {
            return this.metaData.objectOwner && this.metaData.objectName && this.metaData.fields.length;
        },
        enumerable: true,
        configurable: true
    });
    ImportCsvComponent.prototype.onCtxMenuClicked = function () {
        this.grid.collectionView.sourceCollection = this.grid.collectionView.items.slice(0, this.rowIndex).concat([{ isKey: false, dataType: src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].NVARCHAR, size: src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SqlTypesSizes"][src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].NVARCHAR] }], this.grid.collectionView.items.slice(this.rowIndex));
    };
    ImportCsvComponent.prototype.onTableSelect = function (table) {
        var _this = this;
        this.loading = true;
        this.sqlService.getObject(this.sqlConnectionUrl, table.objectOwner, table.objectName).subscribe(function (metaData) {
            _this.selectedTable = metaData;
            _this.createSelectedTableColumns();
            _this.loading = false;
        });
    };
    ImportCsvComponent.prototype.import = function () {
        var _this = this;
        var createTable = this.createTable$.value;
        this.loading = true;
        this.progressMessage = createTable ? ProgressMessage.Create : ProgressMessage.Importing;
        var tableColumns = this.grid.collectionView.items;
        var metaData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (createTable ? this.metaData : this.selectedTable), { fields: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getFormattedFields"])(tableColumns), primaryKeys: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getPrimaryKeys"])(tableColumns) });
        (createTable ? this.sqlService.generateObject(this.sqlConnectionUrl, metaData) : Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (e) {
            var message = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_16__["getErrorMessage"])(e) || 'Failed to create new table';
            _this.notificationService.open({
                message: message,
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].DANGER
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["throwError"])(message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () { return _this.saveData(); })).subscribe(function (res) { return _this.importHandler(metaData, res); }, function (e) { return _this.importErrorHandler(e); });
    };
    ImportCsvComponent.prototype.previewData = function () {
        var previewDialog = this.dialogService.open(_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_17__["PreviewDataComponent"], { class: 'modal-w-90 full-height d-flex flex-column' });
        previewDialog.config = {
            data: _preprocessor__WEBPACK_IMPORTED_MODULE_18__["default"].run(this.data, this.grid.collectionView.items),
            fields: this.grid.collectionView.items
        };
    };
    Object.defineProperty(ImportCsvComponent.prototype, "sqlConnectionUrl", {
        get: function () {
            return src_environments_environment_extension__WEBPACK_IMPORTED_MODULE_9__["environment"].apiBaseUrl + "/sql/" + this.connection;
        },
        enumerable: true,
        configurable: true
    });
    ImportCsvComponent.prototype.loadCSV = function () {
        var _this = this;
        this.fileService.importCSVFile().subscribe(function (response) {
            _this.error = null;
            if (!response.result) {
                _this.loading = true;
                return;
            }
            var data = response.result.data, file = response.file;
            if (!_this.metaData.objectName) {
                _this.metaData.objectName = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["formatToValidSqlName"])(file.name.replace(/.txt|-|.csv$/g, ''));
            }
            _this.data = data.filter(function (r) { return r.join('') !== ''; });
            _this.rowsLoaded = _this.data.length;
            try {
                _this.typesDescriptor = _this.getTypes(_this.data);
                _this.sourceFields = _this.data[0].map(function (sf) { return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["formatToValidSqlName"])(sf); });
                _this.metaData.fields = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getFormattedFields"])(_this.sourceFields);
                if (_this.createTable$.value) {
                    _this.createNewTableColumns();
                }
                else {
                    _this.createSelectedTableColumns();
                }
            }
            catch (e) {
                _this.data = null;
                _this.sourceFields = null;
                _this.metaData.fields = null;
                _this.error = e.message;
            }
            finally {
                _this.loading = false;
            }
        });
    };
    ImportCsvComponent.prototype.getSelectedTableTitle = function () {
        return this.selectedTable ? this.selectedTable.objectOwner + "." + this.selectedTable.objectName : 'Select table';
    };
    ImportCsvComponent.prototype.importHandler = function (metaData, res) {
        var _this = this;
        if (res.savedItemsCount === res.itemsToSaveCount) {
            this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].SUCCESS,
                message: "Successfully inserted: " + res.inserted.toLocaleString() + "\n        , updated: " + res.updated.toLocaleString() + "\n        , deleted: " + res.deleted.toLocaleString()
            });
            this.progressMessage = ProgressMessage.Imported;
            if (this.createTable$.value) {
                this.store.dispatch(new _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_15__["LoadSqlObjectsAction"](this.connection));
            }
            setTimeout(function () {
                _this.router.navigate(['/database', _this.connection, metaData.objectOwner, metaData.objectName]);
                _this.modalRef.hide();
                _this.loading = false;
                _this.progressMessage = null;
            }, 1e3);
        }
        else {
            var mess = res.savedItemsCount ? 'So far ' : '';
            if (res.inserted) {
                mess += "Inserted: " + res.inserted.toLocaleString() + " ";
            }
            if (res.updated) {
                mess += "Updated: " + res.updated.toLocaleString() + " ";
            }
            if (res.deleted) {
                mess += "Deleted: " + res.deleted.toLocaleString();
            }
            this.progressMessage = ProgressMessage.Importing + " " + res.itemsToSaveCount.toLocaleString() + " rows. " + mess;
        }
    };
    ImportCsvComponent.prototype.importErrorHandler = function (e) {
        this.loading = false;
        this.progressMessage = null;
        console.error(e);
    };
    ImportCsvComponent.prototype.createSelectedTableColumns = function () {
        var _this = this;
        if (this.selectedTable) {
            var primaryKeys_1 = new Set(this.selectedTable.primaryKeys.map(function (p) { return p.fieldName; }));
            this.tableColumns = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["filterItems"])(this.selectedTable.fields).map(function (f, i) {
                var sourceField = _this.sourceFields ? _this.sourceFields.find(function (sf) { return sf === f.fieldName; }) : null;
                return {
                    fieldName: f.fieldName,
                    dataType: f.dataType || src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].NVARCHAR,
                    size: f.size,
                    sourceField: sourceField,
                    isKey: primaryKeys_1.has(f.fieldName),
                    preprocessFunc: null,
                    preprocessParams: null
                };
            });
        }
        else {
            this.tableColumns = [];
        }
    };
    ImportCsvComponent.prototype.createNewTableColumns = function () {
        var _this = this;
        if (this.sourceFields) {
            this.tableColumns = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["filterItems"])(this.sourceFields).map(function (f, i) {
                var typeDesc = _this.typesDescriptor["col" + i];
                return {
                    fieldName: f.fieldName,
                    dataType: f.dataType || typeDesc.type || src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].NVARCHAR,
                    size: f.size || typeDesc.size,
                    sourceField: f.fieldName,
                    isKey: f.isKey || Boolean(typeDesc.uniqueValues),
                    preprocessFunc: null,
                    preprocessParams: null
                };
            });
        }
    };
    // what type does it return?
    ImportCsvComponent.prototype.saveData = function () {
        var _this = this;
        this.progressMessage = ProgressMessage.Importing;
        var dataObject = this.createTable$.value ? this.metaData : this.selectedTable;
        return this.sqlService.saveSqlObjectDataWithStatus(this.sqlConnectionUrl, dataObject, this.sendData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (e) {
            var message = typeof e.error === 'string' ? e.error : 'Failed to Import';
            _this.notificationService.open({
                message: message,
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["NotificationType"].DANGER
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["throwError"])(message);
        }));
    };
    Object.defineProperty(ImportCsvComponent.prototype, "sendData", {
        // what type does it return?
        get: function () {
            var items = this.grid.collectionView.items;
            var fields = items.map(function (_a) {
                var fieldName = _a.fieldName;
                return fieldName;
            });
            var indexs = fields.map(function (f, i) { return f ? i : -1; }).filter(function (i) { return i !== -1; });
            return {
                tableData: {
                    fieldNames: fields.filter(function (f) { return f; }),
                    rows: _preprocessor__WEBPACK_IMPORTED_MODULE_18__["default"].run(this.data, items)
                        .map(function (arr) { return arr.filter(function (v, i) { return indexs.includes(i); }); })
                        .map(function (rr) { return rr.map(function (v) { return v instanceof Date ? Object(src_app_shared__WEBPACK_IMPORTED_MODULE_16__["dateToDtoString"])(v) : v; }); })
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    // what type does it return?
    ImportCsvComponent.prototype.getTypes = function (data) {
        var _this = this;
        var typesDescriptor = data[0].reduce(function (prev, fieldName, index) {
            prev["col" + index] = {
                fieldName: fieldName,
                index: index,
                type: null,
                size: null,
                uniqueValues: new Set()
            };
            return prev;
        }, {});
        for (var index = 1; index < data.length; index++) {
            var item = data[index];
            item.forEach(function (val, i) {
                typesDescriptor["col" + i] = _this.getType(typesDescriptor["col" + i], val);
            });
        }
        var isUniqueSet = false;
        Object.values(typesDescriptor).forEach(function (v) {
            v.uniqueValues = v.uniqueValues && !isUniqueSet;
            if (v.uniqueValues) {
                isUniqueSet = true;
            }
        });
        return typesDescriptor;
    };
    ImportCsvComponent.prototype.getType = function (typeInfo, val) {
        if (typeInfo.uniqueValues && typeInfo.uniqueValues.has(val)) {
            typeInfo.uniqueValues = false;
        }
        else if (typeInfo.uniqueValues) {
            typeInfo.uniqueValues.add(val);
        }
        // ignore empty values
        if (!val || !String(val).length) {
            return typeInfo;
        }
        var intOrBigIntFn = function (intNum) {
            return (intNum > 2147483647) ? src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].BIGINT : src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].INT;
        };
        var numFn = function (nn) {
            if (typeInfo.type === null || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].INT) {
                typeInfo.type = Number.isInteger(nn) ? intOrBigIntFn(nn) : src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].FLOAT;
            }
            else if ((typeInfo.type === null || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].BIGINT)
                && Number.isInteger(nn)) {
                typeInfo.type = src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].BIGINT;
            }
            else if (typeInfo.type === null || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].FLOAT) {
                typeInfo.type = src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].FLOAT;
            }
            return typeInfo;
        };
        switch (typeof val) {
            case 'number': {
                return numFn(val);
            }
            case 'string': {
                if ((typeInfo.type === null || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].DATE) && Object(src_app_shared__WEBPACK_IMPORTED_MODULE_16__["parseDatetimeOrNull"])(val)) {
                    typeInfo.type = src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].DATE;
                    return typeInfo;
                }
                // try to parse more advanced numbers
                if (typeInfo.type === null || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].FLOAT
                    || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].INT
                    || typeInfo.type === src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].BIGINT) {
                    var num = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_16__["parseNumberOrNull"])(val);
                    if (num !== null) {
                        return numFn(num);
                    }
                }
                typeInfo.type = src_app_shared_models__WEBPACK_IMPORTED_MODULE_4__["SQLDataTypes"].NVARCHAR;
                var size = Math.ceil(val.length / 100) * 100 || 100;
                if (typeInfo.size === null || typeInfo.size < size) {
                    typeInfo.size = size;
                }
                return typeInfo;
            }
        }
        return typeInfo;
    };
    ImportCsvComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["FileManagerService"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["SqlDbService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ImportCsvComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_13__["FlexGrid"])
    ], ImportCsvComponent.prototype, "grid", void 0);
    ImportCsvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-csv',
            template: __webpack_require__(/*! raw-loader!./import-csv.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/import-csv/import-csv.component.html"),
            styles: [__webpack_require__(/*! ./import-csv.component.scss */ "./src/app/database-manager/components/import-csv/import-csv.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["FileManagerService"],
            src_app_security__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["SqlDbService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], ImportCsvComponent);
    return ImportCsvComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/manager-layout/manager-layout.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/database-manager/components/manager-layout/manager-layout.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy9tYW5hZ2VyLWxheW91dC9tYW5hZ2VyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/database-manager/components/manager-layout/manager-layout.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/database-manager/components/manager-layout/manager-layout.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManagerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerLayoutComponent", function() { return ManagerLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./src/app/database-manager/utils.ts");









/**
 * @description Layout for database manager page.
 */
var ManagerLayoutComponent = /** @class */ (function () {
    function ManagerLayoutComponent(store) {
        this.store = store;
        this.layoutConfig = {
            icon: 'assets/img/rc-logo-64x64.png',
            smIcon: 'assets/img/rc-logo-36x36.png',
            appName: 'database-manager'
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ManagerLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectRouterParam"], 'connectionName').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (connection) { return Boolean(connection); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (connection) {
            _this.store.dispatch(new _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_7__["SelectConnection"](connection));
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUrl"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (url) {
            return _this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectRouterParams"], ['ownerName', 'objectName']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) { return JSON.stringify(x) === JSON.stringify(y); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return ({ params: params, url: url }); }));
        })).subscribe(function (_a) {
            var params = _a.params, url = _a.url;
            var ownerName = params.ownerName, objectName = params.objectName;
            if (ownerName && objectName) {
                _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_6__["LoadSqlObjectStructureAction"]({
                    objectOwner: ownerName,
                    objectName: objectName,
                    objectType: Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObjectTypeFromUrl"])(url)
                }));
                _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_6__["LoadSqlObjectDataAction"]({
                    objectOwner: ownerName,
                    objectName: objectName
                }));
            }
            else {
                _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_6__["LoadedSqlObjectDataAction"](null));
                _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_6__["LoadedSqlObjectStructureAction"](null));
            }
        });
    };
    ManagerLayoutComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ManagerLayoutComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    ManagerLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-layout',
            template: __webpack_require__(/*! raw-loader!./manager-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/manager-layout/manager-layout.component.html"),
            styles: [__webpack_require__(/*! ./manager-layout.component.scss */ "./src/app/database-manager/components/manager-layout/manager-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ManagerLayoutComponent);
    return ManagerLayoutComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/preview-data/preview-data.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/database-manager/components/preview-data/preview-data.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvcHJldmlldy1kYXRhL3ByZXZpZXctZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGF0YWJhc2UtbWFuYWdlci9jb21wb25lbnRzL3ByZXZpZXctZGF0YS9wcmV2aWV3LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy9wcmV2aWV3LWRhdGEvcHJldmlldy1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/database-manager/components/preview-data/preview-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/database-manager/components/preview-data/preview-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: PreviewDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewDataComponent", function() { return PreviewDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");





var PreviewDataComponent = /** @class */ (function () {
    function PreviewDataComponent() {
    }
    PreviewDataComponent.prototype.ngOnInit = function () {
        this.data = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["mapTableToValues"])({
            rows: this.config.data,
            fieldNames: this.config.fields.map(function (_a) {
                var fieldName = _a.fieldName;
                return fieldName;
            })
        });
    };
    PreviewDataComponent.prototype.getColumnType = function (type) {
        return src_app_shared_models__WEBPACK_IMPORTED_MODULE_3__["SqlTypesToWijmoMap"][type];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], PreviewDataComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewDataComponent.prototype, "config", void 0);
    PreviewDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-data',
            template: __webpack_require__(/*! raw-loader!./preview-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/preview-data/preview-data.component.html"),
            styles: [__webpack_require__(/*! ./preview-data.component.scss */ "./src/app/database-manager/components/preview-data/preview-data.component.scss")]
        })
    ], PreviewDataComponent);
    return PreviewDataComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/rows-count/rows-count.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/database-manager/components/rows-count/rows-count.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rows-count {\n  right: 0;\n  display: inline-block;\n  width: auto;\n  z-index: 11;\n}\n.rows-count select {\n  display: inline-block;\n  width: auto;\n  height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvcm93cy1jb3VudC9yb3dzLWNvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvcm93cy1jb3VudC9yb3dzLWNvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGF0YWJhc2UtbWFuYWdlci9jb21wb25lbnRzL3Jvd3MtY291bnQvcm93cy1jb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dzLWNvdW50IHtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHotaW5kZXg6IDExO1xuXG4gIHNlbGVjdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMS41cmVtO1xuICB9XG59XG4iLCIucm93cy1jb3VudCB7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICB6LWluZGV4OiAxMTtcbn1cbi5yb3dzLWNvdW50IHNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMS41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/database-manager/components/rows-count/rows-count.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/database-manager/components/rows-count/rows-count.component.ts ***!
  \********************************************************************************/
/*! exports provided: RowsCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowsCountComponent", function() { return RowsCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");








var RowsCountComponent = /** @class */ (function () {
    function RowsCountComponent(store, dbService) {
        this.store = store;
        this.dbService = dbService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RowsCountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rowsCount$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSqlObjectRowsCount"]);
        this.perPage$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSqlObjectLimitRows"]);
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSqlObjectStructure"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (obj) { return Boolean(obj.objectOwner); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (a, b) { return a.objectOwner === b.objectOwner && b.objectName === a.objectName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var obj = _a[0], current = _a[1].dbConnections.current;
            return _this.dbService.selectSqlObjectData(current, obj.objectOwner, obj.objectName, { fields: ['count|1'] });
        })).subscribe(function (res) {
            _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["SetSqlDataRowsCountAction"](res.rows[0][0]));
        });
    };
    RowsCountComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    RowsCountComponent.prototype.onRowsCountSelect = function (evt) {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["SetSqlDataFilterPropAction"]({ limitRowsCount: evt.target.value }));
    };
    RowsCountComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["SqlDbService"] }
    ]; };
    RowsCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rows-count',
            template: __webpack_require__(/*! raw-loader!./rows-count.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/rows-count/rows-count.component.html"),
            styles: [__webpack_require__(/*! ./rows-count.component.scss */ "./src/app/database-manager/components/rows-count/rows-count.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["SqlDbService"]])
    ], RowsCountComponent);
    return RowsCountComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/sql-object-content/sql-object-content.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-object-content/sql-object-content.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tabset.sql-object-tab > .tab-content {\n  position: relative;\n}\n\n.spinner {\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvc3FsLW9iamVjdC1jb250ZW50L3NxbC1vYmplY3QtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGF0YWJhc2UtbWFuYWdlci9jb21wb25lbnRzL3NxbC1vYmplY3QtY29udGVudC9zcWwtb2JqZWN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGF0YWJhc2UtbWFuYWdlci9jb21wb25lbnRzL3NxbC1vYmplY3QtY29udGVudC9zcWwtb2JqZWN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJzZXQuc3FsLW9iamVjdC10YWIgPiAudGFiLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGlubmVyIHtcbiAgbGVmdDogMDtcbn1cbiIsInRhYnNldC5zcWwtb2JqZWN0LXRhYiA+IC50YWItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNwaW5uZXIge1xuICBsZWZ0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/database-manager/components/sql-object-content/sql-object-content.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-object-content/sql-object-content.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SqlObjectContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlObjectContentComponent", function() { return SqlObjectContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");






var SqlObjectContentComponent = /** @class */ (function () {
    function SqlObjectContentComponent(store) {
        this.store = store;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SqlObjectContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isStructureChanged$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectIsChangedSqlObjectStructure"]);
        this.isDataChanged$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectIsChangedSqlObjectData"]);
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSqlObjectStructure"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (obj) {
            _this.dataObject = obj;
        });
        this.loading$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSqlObjectLoadingMessages"]);
    };
    SqlObjectContentComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    SqlObjectContentComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    SqlObjectContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sql-object-content',
            template: __webpack_require__(/*! raw-loader!./sql-object-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-object-content/sql-object-content.component.html"),
            styles: [__webpack_require__(/*! ./sql-object-content.component.scss */ "./src/app/database-manager/components/sql-object-content/sql-object-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SqlObjectContentComponent);
    return SqlObjectContentComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/sql-objects/sql-objects.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-objects/sql-objects.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy9zcWwtb2JqZWN0cy9zcWwtb2JqZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/database-manager/components/sql-objects/sql-objects.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-objects/sql-objects.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SqlObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlObjectsComponent", function() { return SqlObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _import_csv_import_csv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../import-csv/import-csv.component */ "./src/app/database-manager/components/import-csv/import-csv.component.ts");











/**
 * @description Component represents list of sql objects.
 */
var SqlObjectsComponent = /** @class */ (function () {
    function SqlObjectsComponent(store, dialogService) {
        this.store = store;
        this.dialogService = dialogService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    SqlObjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSqlObjectsList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$));
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectRouterParam"], 'connectionName').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (val) { return Boolean(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).
            subscribe(function (val) {
            _this.connectionName = val;
            _this.store.dispatch(new _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_3__["LoadSqlObjectsAction"](_this.connectionName));
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSqlObjectStructure"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).
            subscribe(function (sqlObject) {
            _this.listView.selectItem(sqlObject);
        });
    };
    SqlObjectsComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    SqlObjectsComponent.prototype.onSelect = function (obj) {
        var selectedItem = this.listView.selectedItem;
        if (selectedItem) {
            var objectOwner = selectedItem.objectOwner, objectName = selectedItem.objectName;
            if (objectName !== obj.objectName || objectOwner !== objectOwner) {
                this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_8__["SetLoadStateForSqlObject"]());
            }
        }
        else {
            this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_8__["SetLoadStateForSqlObject"]());
        }
    };
    SqlObjectsComponent.prototype.areObjectsEqual = function (x, y) {
        return x && y && x.objectName === y.objectName && x.objectOwner === y.objectOwner;
    };
    SqlObjectsComponent.prototype.refresh = function () {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_8__["RefreshSqlObject"]());
    };
    SqlObjectsComponent.prototype.import = function () {
        this.dialogService.open(_import_csv_import_csv_component__WEBPACK_IMPORTED_MODULE_10__["ImportCsvComponent"], { class: 'modal-xl full-height', keyboard: false });
    };
    SqlObjectsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listView', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared__WEBPACK_IMPORTED_MODULE_7__["ListViewComponent"])
    ], SqlObjectsComponent.prototype, "listView", void 0);
    SqlObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sql-objects',
            template: __webpack_require__(/*! raw-loader!./sql-objects.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-objects/sql-objects.component.html"),
            styles: [__webpack_require__(/*! ./sql-objects.component.scss */ "./src/app/database-manager/components/sql-objects/sql-objects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_9__["DialogService"]])
    ], SqlObjectsComponent);
    return SqlObjectsComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/sql-query/sql-query.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-query/sql-query.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy9zcWwtcXVlcnkvc3FsLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/database-manager/components/sql-query/sql-query.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-query/sql-query.component.ts ***!
  \******************************************************************************/
/*! exports provided: SqlQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlQueryComponent", function() { return SqlQueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");












var SqlQueryComponent = /** @class */ (function () {
    function SqlQueryComponent(http, store, authService) {
        this.http = http;
        this.store = store;
        this.authService = authService;
    }
    SqlQueryComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key === 'F5') {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.onRun();
        }
    };
    SqlQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_7__["selectConnectionName"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (connection) {
            _this.connection = connection;
        });
        this.sqlEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.sqlElement.nativeElement, {
            mode: 'ace/mode/sql',
            autoScrollEditorIntoView: true
        });
    };
    SqlQueryComponent.prototype.onRun = function () {
        var _this = this;
        this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].apiBaseUrl + "/sql/" + this.connection + "/execute", {
            sql: this.sqlEditor.getSelectedText() || this.sqlEditor.getValue()
        }, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            _this.error = typeof e.error === 'string' ? e.error : 'Failed to query data.';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        })).subscribe(function (res) {
            if (res) {
                _this.error = null;
                _this.fields = res.fields.map(function (f) {
                    return {
                        bindingName: f.fieldName,
                        dataType: src_app_shared_models__WEBPACK_IMPORTED_MODULE_10__["SqlTypesToWijmoMap"][f.dataType],
                        headerText: f.fieldName
                    };
                });
                _this.data = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_9__["mapTableToValues"])(res.table);
            }
            else {
                _this.fields = null;
                _this.data = null;
            }
        });
    };
    SqlQueryComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sqlElement', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SqlQueryComponent.prototype, "sqlElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SqlQueryComponent.prototype, "handleKeyboardEvent", null);
    SqlQueryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sql-query',
            template: __webpack_require__(/*! raw-loader!./sql-query.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-query/sql-query.component.html"),
            styles: [__webpack_require__(/*! ./sql-query.component.scss */ "./src/app/database-manager/components/sql-query/sql-query.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            src_app_security__WEBPACK_IMPORTED_MODULE_11__["AuthService"]])
    ], SqlQueryComponent);
    return SqlQueryComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/sql-view-object/sql-view-object.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-view-object/sql-view-object.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy9zcWwtdmlldy1vYmplY3Qvc3FsLXZpZXctb2JqZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/database-manager/components/sql-view-object/sql-view-object.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/database-manager/components/sql-view-object/sql-view-object.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SqlViewObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlViewObjectComponent", function() { return SqlViewObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var SqlViewObjectComponent = /** @class */ (function () {
    function SqlViewObjectComponent(store) {
        this.store = store;
    }
    SqlViewObjectComponent.prototype.ngOnInit = function () {
        this.dataObject$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSqlObjectStructure"]);
        this.loading$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSqlObjectLoadingMessages"]);
    };
    SqlViewObjectComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    SqlViewObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sql-view-object',
            template: __webpack_require__(/*! raw-loader!./sql-view-object.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/sql-view-object/sql-view-object.component.html"),
            styles: [__webpack_require__(/*! ./sql-view-object.component.scss */ "./src/app/database-manager/components/sql-view-object/sql-view-object.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SqlViewObjectComponent);
    return SqlViewObjectComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/table-data/table-data.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/database-manager/components/table-data/table-data.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.data-grid {\n  height: calc(100% - 25px);\n}\n\n.data-grid app-filter {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.data-grid ::ng-deep .wj-cell.wj-header > div {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  max-height: 50px;\n}\n\n.applied-filters-list {\n  list-style-type: none;\n}\n\n.text-normal {\n  white-space: normal;\n  word-break: break-word;\n  width: 100%;\n  padding-right: 5px;\n  max-height: 50px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvdGFibGUtZGF0YS90YWJsZS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvdGFibGUtZGF0YS90YWJsZS1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBRENFO0VBQ0UsNEJBQUE7VUFBQSxRQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUE7RUFDRSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9kYXRhYmFzZS1tYW5hZ2VyL2NvbXBvbmVudHMvdGFibGUtZGF0YS90YWJsZS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGF0YS1ncmlkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNXB4KTtcblxuICBhcHAtZmlsdGVyIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIDo6bmctZGVlcCAud2otY2VsbC53ai1oZWFkZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgfVxufVxuXG4uYXBwbGllZC1maWx0ZXJzLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50ZXh0LW5vcm1hbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4iLCI6aG9zdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kYXRhLWdyaWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI1cHgpO1xufVxuLmRhdGEtZ3JpZCBhcHAtZmlsdGVyIHtcbiAgb3JkZXI6IDE7XG59XG4uZGF0YS1ncmlkIDo6bmctZGVlcCAud2otY2VsbC53ai1oZWFkZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbi5hcHBsaWVkLWZpbHRlcnMtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnRleHQtbm9ybWFsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/database-manager/components/table-data/table-data.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/database-manager/components/table-data/table-data.component.ts ***!
  \********************************************************************************/
/*! exports provided: TableDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataComponent", function() { return TableDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var src_app_wijmo_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/wijmo/utils */ "./src/app/wijmo/utils/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_wijmo_components_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/wijmo/components/column-editor/column-editor.component */ "./src/app/wijmo/components/column-editor/column-editor.component.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_wijmo_components_grid_object_explorer_grid_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/wijmo/components/grid-object-explorer/grid-config */ "./src/app/wijmo/components/grid-object-explorer/grid-config.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! wijmo/wijmo.grid.xlsx */ "./node_modules/wijmo/wijmo.grid.xlsx.js");
/* harmony import */ var wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_16__);

















/**
 * @description Displays table data.
 */
var TableDataComponent = /** @class */ (function () {
    function TableDataComponent(store, actions$, dialogService, fileService) {
        this.store = store;
        this.actions$ = actions$;
        this.dialogService = dialogService;
        this.fileService = fileService;
        // ToDo: What type it is? it is bound to array
        this.filters = {};
        this.currentPage = 1;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    TableDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isChanged$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectIsChangedSqlObjectData"]);
        this.fields$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectFieldsState"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$));
        this.fields$.subscribe(function (fields) {
            _this.fields = fields.map(function (f) {
                return {
                    isKey: f.isKey,
                    bindingName: f.fieldName,
                    sqlDataType: f.dataType,
                    headerText: _this.getColumnHeader(f.fieldName),
                    width: _this.getColumnWidth(f.fieldName),
                    dataType: _this.getColumnType(f.fieldName, f.dataType),
                    displayFormat: _this.getColumnDisplayFormat(f.fieldName)
                };
            });
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectConnectionName"]).subscribe(function (connection) {
            _this.connection = connection;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.fields$, this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectData"])]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_a) {
            var fields = _a[0];
            return fields && fields.length !== 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (_a) {
            var fields = _a[0], data = _a[1];
            _this.refreshData(data);
        });
        this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["ActionTypes"].REFRESH_SQL_OBJECT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store)).subscribe(function (_a) {
            var action = _a[0], data = _a[1].sqlObject.data;
            _this.refreshData(data);
            _this.currentPage = 1;
        });
        this.loading$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectLoadingMessages"]);
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectLimitRows"]).subscribe(function (limit) {
            _this.limitRows = limit;
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectRowsCount"]).subscribe(function (rowsCount) {
            _this.rowsCount = rowsCount;
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectStructure"]).subscribe(function (obj) {
            _this.dataObject = obj;
            _this.filters = {};
            _this.currentPage = 1;
            _this.localGridConfig = new src_app_wijmo_components_grid_object_explorer_grid_config__WEBPACK_IMPORTED_MODULE_14__["GrigConfig"]("database-" + _this.connection, obj.objectOwner + "-" + obj.objectName);
            setTimeout(function () {
                _this.grid.autoSizeRow(0, true);
            });
        });
    };
    TableDataComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    TableDataComponent.prototype.saveData = function () {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["SaveSqlObjectDataAction"]());
    };
    TableDataComponent.prototype.getColumnWidth = function (binding, defaultWidth) {
        if (defaultWidth === void 0) { defaultWidth = 150; }
        return (this.localGridConfig && this.localGridConfig.getColumn(binding).width) || defaultWidth;
    };
    TableDataComponent.prototype.getColumnHeader = function (binding) {
        return (this.localGridConfig && this.localGridConfig.getColumn(binding).header);
    };
    TableDataComponent.prototype.getColumnType = function (binding, type) {
        return (this.localGridConfig && this.localGridConfig.getColumn(binding).dataType) || src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__["SqlTypesToWijmoMap"][type];
    };
    TableDataComponent.prototype.getColumnDisplayFormat = function (binding) {
        return (this.localGridConfig && this.localGridConfig.getColumn(binding).displayFormat) || 'dd/MM/yyyy';
    };
    TableDataComponent.prototype.initializedGrid = function (grid) {
        var _this = this;
        this.gridContext = Object(src_app_wijmo_utils__WEBPACK_IMPORTED_MODULE_10__["initChangesHighlight"])(grid);
        grid.cellEditEnded.addHandler(function () { return _this.changeHandler(); });
        grid.deletedRow.addHandler(function () { return _this.changeHandler(); });
        grid.addEventListener(grid.hostElement, 'contextmenu', function (e) {
            var ht = grid.hitTest(e);
            _this.columnToEdit = _this.fields.find(function (v, i) { return ht.col === i; });
            var val = _this.grid.collectionView.items[ht.row][_this.columnToEdit.bindingName];
            _this.contextMenuValue = val;
        });
        var sItemsFormatter = grid.itemFormatter;
        grid.itemFormatter = function (panel, r, c, cell) {
            sItemsFormatter(panel, r, c, cell);
            var binding = panel.columns[c].binding;
            if (panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_6__["CellType"].ColumnHeader && cell.firstChild instanceof HTMLElement) {
                var sortSpan = cell.firstChild.querySelector('#sort-icon');
                if (sortSpan) {
                    cell.firstChild.removeChild(sortSpan);
                }
                var sortState = grid.collectionView.sortDescriptions[0];
                if (sortState && sortState.property === binding) {
                    var span = document.createElement('SPAN');
                    span.id = 'sort-icon';
                    if (sortState.ascending) {
                        span.className = 'wj-glyph-up';
                    }
                    else {
                        span.className = 'wj-glyph-down';
                    }
                    cell.firstChild.appendChild(span);
                }
            }
        };
        grid.sortingColumn.addHandler(function (s, e) {
            if (e.data.target.classList.contains('fa-filter')) {
                e.cancel = true;
            }
        });
        grid.resizingColumn.addHandler(function (s, evt) {
            if (_this.localGridConfig) {
                _this.localGridConfig.saveColumn(grid.columns[evt.col].binding, {
                    width: grid.columns[evt.col].renderWidth
                });
            }
        });
    };
    TableDataComponent.prototype.exportToCSV = function () {
        this.fileService.exportToFile(this.grid.collectionView.sourceCollection, {
            fileType: src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__["FileType"].CSV,
            fileName: this.dataObject.objectOwner + "-" + this.dataObject.objectName
        });
    };
    TableDataComponent.prototype.exportToExcel = function () {
        wijmo_wijmo_grid_xlsx__WEBPACK_IMPORTED_MODULE_16__["FlexGridXlsxConverter"].saveAsync(this.grid, {
            includeColumnHeaders: true
        }, this.dataObject.objectOwner + "-" + this.dataObject.objectName);
    };
    TableDataComponent.prototype.onCtxMenuClicked = function (menu) {
        switch (menu.value) {
            case 'edit-column':
                this.editColumn();
                break;
            case 'fill-all':
                this.fillRows('all');
                break;
            case 'fill-empty':
                this.fillRows('empty');
                break;
        }
    };
    TableDataComponent.prototype.editColumn = function () {
        var _this = this;
        var columnEditDialog = this.dialogService.open(src_app_wijmo_components_column_editor_column_editor_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditorComponent"], { class: 'modal-lg' });
        var columnInfo = this.columnToEdit;
        columnEditDialog.config = [columnInfo];
        columnEditDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return columnEditDialog.component.save; })).subscribe(function (columns) {
            columns.forEach(function (c) {
                _this.localGridConfig.saveColumn(c.bindingName, c);
            });
            var column = columns[0];
            var index = _this.fields.findIndex(function (f) { return f.bindingName === column.bindingName; });
            _this.fields.splice(index, 1, column);
        });
    };
    TableDataComponent.prototype.fillRows = function (key) {
        var _this = this;
        var isUpdated = false;
        this.grid.collectionView.sourceCollection.forEach(function (item) {
            var binding = _this.columnToEdit.bindingName;
            var oldVal = item[binding];
            if (_this.updateCondition(oldVal, key)) {
                item[binding] = _this.contextMenuValue;
                _this.gridContext.setEditValue(item, binding, oldVal, _this.contextMenuValue);
                isUpdated = true;
            }
        });
        if (isUpdated) {
            this.grid.refresh(true);
            this.changeHandler();
        }
    };
    TableDataComponent.prototype.updateCondition = function (oldVal, key) {
        switch (key) {
            case 'all': return oldVal !== this.contextMenuValue;
            case 'empty': return [null, undefined, ''].includes(oldVal);
            default: return true;
        }
    };
    TableDataComponent.prototype.changeHandler = function () {
        var _a = this.gridContext.state, added = _a.added, edited = _a.edited;
        var data = [];
        if (edited) {
            data = data.concat(edited);
        }
        if (added) {
            data = data.concat(added);
        }
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["UpdateSqlObjectDataAction"](data));
    };
    TableDataComponent.prototype.onFiltersChange = function (filters) {
        this.filters = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, filters);
        this.applyFilters();
    };
    TableDataComponent.prototype.onApply = function (evt, field) {
        var _a;
        this.filters = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filters, (_a = {}, _a[field.bindingName] = evt, _a));
        this.applyFilters();
    };
    Object.defineProperty(TableDataComponent.prototype, "skipRows", {
        get: function () {
            return (this.currentPage - 1) * this.limitRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableDataComponent.prototype, "filtersList", {
        get: function () {
            var _this = this;
            return Object.entries(this.filters).filter(function (_a) {
                var fieldName = _a[0], value = _a[1];
                return Boolean(value);
            }).map(function (_a) {
                var fieldName = _a[0], value = _a[1];
                return {
                    fieldName: fieldName, value: value.map(function (v) {
                        var type = _this.localGridConfig.getColumn(fieldName).dataType;
                        if (type === wijmo_wijmo__WEBPACK_IMPORTED_MODULE_15__["DataType"].Date) {
                            var displayFormat = _this.localGridConfig.getColumn(fieldName).displayFormat;
                            return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_11__["formatWijmoDate"])(v, displayFormat);
                        }
                        if (v instanceof Date) {
                            return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_11__["dateToDtoString"])(v);
                        }
                        if (v === null) {
                            return '[NULL]';
                        }
                        return v;
                    }).join(', ')
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    TableDataComponent.prototype.onNextPage = function (val) {
        if (this.currentPage >= 1 && val > 0 && this.skipRows + this.limitRows < this.rowsCount) {
            this.currentPage++;
        }
        else if (this.currentPage >= 2 && val < 0) {
            this.currentPage--;
        }
        else {
            return;
        }
        if (this.limitRows) {
            this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["SetSqlDataFilterPropAction"]({ skipRowsCount: this.skipRows }));
        }
    };
    TableDataComponent.prototype.applyFilters = function () {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["SetSqlDataFiltersAction"]({ filters: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_11__["getFilters"])(this.filters) }));
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["LoadSqlObjectDataAction"](this.dataObject));
    };
    TableDataComponent.prototype.refreshData = function (data) {
        this.data = this.formatData(Object(src_app_shared__WEBPACK_IMPORTED_MODULE_11__["deepClone"])(data));
        if (this.gridContext) {
            this.gridContext.clear();
        }
    };
    TableDataComponent.prototype.formatData = function (data) {
        var _this = this;
        if (data && data.fieldNames) {
            data.dataTypes = data.fieldNames.map(function (field) {
                var fieldData = _this.fields.find(function (_a) {
                    var bindingName = _a.bindingName;
                    return bindingName === field;
                });
                return fieldData ? fieldData.sqlDataType : null;
            });
            return Object(src_app_shared__WEBPACK_IMPORTED_MODULE_11__["mapTableToValues"])(data);
        }
        return [];
    };
    TableDataComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_13__["DialogService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_13__["FileManagerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_6__["FlexGrid"])
    ], TableDataComponent.prototype, "grid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableDataComponent.prototype, "isReadOnly", void 0);
    TableDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-data',
            template: __webpack_require__(/*! raw-loader!./table-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/table-data/table-data.component.html"),
            styles: [__webpack_require__(/*! ./table-data.component.scss */ "./src/app/database-manager/components/table-data/table-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_13__["DialogService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_13__["FileManagerService"]])
    ], TableDataComponent);
    return TableDataComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/table-editor/table-editor.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/database-manager/components/table-editor/table-editor.component.ts ***!
  \************************************************************************************/
/*! exports provided: TableEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditorComponent", function() { return TableEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils */ "./src/app/database-manager/utils.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");















/**
 * @description Component represents editable table structure.
 */
var TableEditorComponent = /** @class */ (function () {
    function TableEditorComponent(store, authService, dialogService) {
        var _this = this;
        this.store = store;
        this.authService = authService;
        this.dialogService = dialogService;
        this.dataTypes = Object.values(_shared_models__WEBPACK_IMPORTED_MODULE_10__["SQLDataTypes"]);
        this.collection = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__["CollectionView"]();
        this.editCollectionMap = new Map();
        this.addCollectionSet = new Set();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formatItem = function (panel, r, c, cell) {
            var dataItem = panel.rows[r].dataItem;
            var binding = panel.columns[c].binding;
            var initData = _this.editCollectionMap.get(dataItem);
            if (panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7__["CellType"].Cell && dataItem) {
                if (_this.addCollectionSet.has(dataItem)) {
                    cell.classList.add('added-item');
                }
                else if (initData && initData.hasOwnProperty(binding)) {
                    cell.classList.add('edited-item');
                }
                else {
                    cell.classList.remove('added-item');
                    cell.classList.remove('edited-item');
                }
            }
        };
    }
    TableEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_9__["selectSqlObjectStructure"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (o) { return Boolean(o); })).subscribe(function (obj) {
            _this.editCollectionMap.clear();
            _this.addCollectionSet.clear();
            if (_this.grid) {
                _this.grid.refreshCells(false);
            }
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_9__["selectSqlObjectState"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (obj) {
            if (!Object(src_app_shared__WEBPACK_IMPORTED_MODULE_12__["compareSqlObjects"])(_this.dataObject, obj)) {
                _this.dataObject = obj;
                var items = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_12__["getTableColumns"])(obj);
                if (!Object(src_app_shared__WEBPACK_IMPORTED_MODULE_12__["verifyFields"])(Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getFormattedColumns"])(_this.collection.items), items)) {
                    _this.collection.sourceCollection = items;
                }
            }
            if (!_this.dataObject.objectOwner && _this.authService.user) {
                _this.dataObject.objectOwner = _this.authService.user.userName;
                _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_11__["UpdateSqlObjectAction"](_this.dataObject));
            }
        });
        this.isChanged$ = this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_9__["selectIsChangedSqlObjectStructure"]);
    };
    /**
     * TODO: use `initChangesHighlight` from 'src/app/wijmo/utils'.
     */
    TableEditorComponent.prototype.initializedGrid = function (grid) {
        var _this = this;
        this.collection.trackChanges = true;
        grid.rowAdded.addHandler(function (g, e) {
            _this.addCollectionSet.add(_this.collection.currentAddItem);
            grid.refreshCells(false);
        });
        grid.cellEditEnded.addHandler(function (g, e) {
            var item = _this.collection.currentEditItem;
            var dataType = item.dataType;
            var size = _shared_models__WEBPACK_IMPORTED_MODULE_10__["SqlTypesSizes"][dataType] || null;
            var sizeBinding = grid.columns[3].binding;
            var sizePrev = _this.collection.currentEditItem[sizeBinding];
            if (!_this.addCollectionSet.has(item)) {
                var binding = grid.columns[e.col].binding;
                var newVal = grid.rows[e.row].dataItem[binding];
                var initDataItem = _this.editCollectionMap.get(item) || {};
                if (!initDataItem.hasOwnProperty(binding)) {
                    initDataItem[binding] = e.data;
                }
                if (initDataItem[binding] === newVal) {
                    delete initDataItem[binding];
                }
                // Set default size.
                if (e.panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7__["CellType"].Cell && e.col === 2) {
                    if (!initDataItem.hasOwnProperty(sizeBinding)) {
                        initDataItem[sizeBinding] = sizePrev;
                    }
                    if (initDataItem[sizeBinding] === size) {
                        delete initDataItem[sizeBinding];
                    }
                }
                _this.editCollectionMap.set(item, initDataItem);
            }
            if (e.panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7__["CellType"].Cell && e.col === 2) {
                item[sizeBinding] = size;
            }
            grid.refreshCells(false);
            _this.onFieldsUpdate();
        });
    };
    TableEditorComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    TableEditorComponent.prototype.save = function () {
        this.form.ngSubmit.emit();
    };
    TableEditorComponent.prototype.onTableDelete = function () {
        var _this = this;
        if (this.dataObject) {
            var _a = this.dataObject, objectName = _a.objectName, objectOwner = _a.objectOwner;
            var message = "Delete table " + objectOwner + "." + objectName + ". Are you sure?";
            this.dialogService.confirmation(message).subscribe(function (val) {
                if (val) {
                    _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_11__["DeleteSqlObjectAction"](_this.dataObject));
                }
            });
        }
    };
    TableEditorComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_11__["SaveSqlObjectStructureAction"](this.getCurrentState()));
        }
    };
    TableEditorComponent.prototype.onUpdate = function () {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_11__["UpdateSqlObjectAction"](this.getCurrentState()));
    };
    TableEditorComponent.prototype.onFieldsUpdate = function () {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_11__["UpdateSqlObjectAction"](this.getCurrentState()));
    };
    TableEditorComponent.prototype.getCurrentState = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.dataObject, { fields: Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getFormattedFields"])(this.collection.items), primaryKeys: Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getPrimaryKeys"])(this.collection.items) });
    };
    TableEditorComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_14__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], TableEditorComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_7__["FlexGrid"])
    ], TableEditorComponent.prototype, "grid", void 0);
    TableEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-editor',
            template: __webpack_require__(/*! raw-loader!./table-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/table-editor/table-editor.component.html"),
            styles: ["\n    .table-title {\n      flex: 0;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            src_app_security__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_14__["DialogService"]])
    ], TableEditorComponent);
    return TableEditorComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/components/view-editor/view-editor.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/database-manager/components/view-editor/view-editor.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlLW1hbmFnZXIvY29tcG9uZW50cy92aWV3LWVkaXRvci92aWV3LWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/database-manager/components/view-editor/view-editor.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/database-manager/components/view-editor/view-editor.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEditorComponent", function() { return ViewEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models */ "./src/app/database-manager/models.ts");














var ViewEditorComponent = /** @class */ (function () {
    function ViewEditorComponent(store, authService, dialogService) {
        this.store = store;
        this.authService = authService;
        this.dialogService = dialogService;
        this.collection = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"]();
        this.isChanged = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ViewEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_8__["selectSqlObjectState"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (obj) {
            _this.dataObject = obj;
            _this.dataObject.objectType = _models__WEBPACK_IMPORTED_MODULE_13__["ObjectType"].View;
            _this.initialSql = obj.sqlText;
            if (obj.objectName === 'New') {
                _this.dataObject.sqlText = 'create view test1.testView1';
            }
            if (_this.sqlEditor && typeof obj.sqlText === 'string') {
                _this.sqlEditor.setValue(obj.sqlText, -1);
            }
            _this.collection.sourceCollection = Object(src_app_shared__WEBPACK_IMPORTED_MODULE_12__["getTableColumns"])(obj);
            if (!_this.dataObject.objectOwner) {
                _this.dataObject.objectOwner = _this.authService.user.userName;
                _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["UpdateSqlObjectAction"](_this.dataObject));
            }
        });
    };
    ViewEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sqlEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_6__["edit"])(this.sqlElement.nativeElement, {
            mode: 'ace/mode/sql',
            autoScrollEditorIntoView: true,
            value: this.dataObject.sqlText || '0'
        });
        this.sqlEditor.on('change', function () {
            var val = _this.sqlEditor.getValue();
            _this.isChanged = _this.initialSql !== val;
            _this.dataObject.sqlText = val;
        });
    };
    ViewEditorComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ViewEditorComponent.prototype.onViewDelete = function () {
        var _this = this;
        if (this.dataObject) {
            var _a = this.dataObject, objectName = _a.objectName, objectOwner = _a.objectOwner;
            var message = "Delete view " + objectOwner + "." + objectName + ". Are you sure?";
            this.dialogService.confirmation(message).subscribe(function (val) {
                if (val) {
                    _this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["DeleteSqlObjectAction"](_this.dataObject));
                }
            });
        }
    };
    ViewEditorComponent.prototype.onSubmit = function () {
        this.store.dispatch(new _store_actions_sql_object__WEBPACK_IMPORTED_MODULE_9__["SaveSqlObjectStructureAction"](this.dataObject));
    };
    ViewEditorComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewEditorComponent.prototype, "changed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ViewEditorComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sqlEditor', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ViewEditorComponent.prototype, "sqlElement", void 0);
    ViewEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-editor',
            template: __webpack_require__(/*! raw-loader!./view-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/database-manager/components/view-editor/view-editor.component.html"),
            styles: [__webpack_require__(/*! ./view-editor.component.scss */ "./src/app/database-manager/components/view-editor/view-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            src_app_security__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_11__["DialogService"]])
    ], ViewEditorComponent);
    return ViewEditorComponent;
}());



/***/ }),

/***/ "./src/app/database-manager/database-manager-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/database-manager/database-manager-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DatabaseManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManagerRoutingModule", function() { return DatabaseManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/manager-layout/manager-layout.component */ "./src/app/database-manager/components/manager-layout/manager-layout.component.ts");
/* harmony import */ var _guards_connection_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/connection.guard */ "./src/app/database-manager/guards/connection.guard.ts");
/* harmony import */ var _components_sql_view_object_sql_view_object_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sql-view-object/sql-view-object.component */ "./src/app/database-manager/components/sql-view-object/sql-view-object.component.ts");
/* harmony import */ var _components_sql_object_content_sql_object_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sql-object-content/sql-object-content.component */ "./src/app/database-manager/components/sql-object-content/sql-object-content.component.ts");
/* harmony import */ var _components_sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sql-query/sql-query.component */ "./src/app/database-manager/components/sql-query/sql-query.component.ts");








var routes = [{
        path: ':connectionName',
        component: _components_manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_3__["ManagerLayoutComponent"],
        canActivate: [_guards_connection_guard__WEBPACK_IMPORTED_MODULE_4__["ConnectionGuard"]],
        children: [{
                component: _components_sql_object_content_sql_object_content_component__WEBPACK_IMPORTED_MODULE_6__["SqlObjectContentComponent"],
                path: ''
            }, {
                component: _components_sql_object_content_sql_object_content_component__WEBPACK_IMPORTED_MODULE_6__["SqlObjectContentComponent"],
                path: ':ownerName/:objectName'
            }, {
                component: _components_sql_view_object_sql_view_object_component__WEBPACK_IMPORTED_MODULE_5__["SqlViewObjectComponent"],
                path: 'view'
            }, {
                component: _components_sql_view_object_sql_view_object_component__WEBPACK_IMPORTED_MODULE_5__["SqlViewObjectComponent"],
                path: 'view/:ownerName/:objectName'
            }, {
                component: _components_sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_7__["SqlQueryComponent"],
                path: 'sql-query'
            }]
    }];
var DatabaseManagerRoutingModule = /** @class */ (function () {
    function DatabaseManagerRoutingModule() {
    }
    DatabaseManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DatabaseManagerRoutingModule);
    return DatabaseManagerRoutingModule;
}());



/***/ }),

/***/ "./src/app/database-manager/database-manager.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/database-manager/database-manager.module.ts ***!
  \*************************************************************/
/*! exports provided: DatabaseManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManagerModule", function() { return DatabaseManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store */ "./src/app/database-manager/store/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/effects */ "./src/app/database-manager/store/effects/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/wijmo/wijmo.module */ "./src/app/wijmo/wijmo.module.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _database_manager_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./database-manager-routing.module */ "./src/app/database-manager/database-manager-routing.module.ts");
/* harmony import */ var _components_manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/manager-layout/manager-layout.component */ "./src/app/database-manager/components/manager-layout/manager-layout.component.ts");
/* harmony import */ var _components_sql_objects_sql_objects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sql-objects/sql-objects.component */ "./src/app/database-manager/components/sql-objects/sql-objects.component.ts");
/* harmony import */ var _components_db_connections_db_connections_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/db-connections/db-connections.component */ "./src/app/database-manager/components/db-connections/db-connections.component.ts");
/* harmony import */ var _components_table_editor_table_editor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/table-editor/table-editor.component */ "./src/app/database-manager/components/table-editor/table-editor.component.ts");
/* harmony import */ var _guards_connection_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/connection.guard */ "./src/app/database-manager/guards/connection.guard.ts");
/* harmony import */ var _components_table_data_table_data_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/table-data/table-data.component */ "./src/app/database-manager/components/table-data/table-data.component.ts");
/* harmony import */ var _components_sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sql-query/sql-query.component */ "./src/app/database-manager/components/sql-query/sql-query.component.ts");
/* harmony import */ var _components_import_csv_import_csv_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/import-csv/import-csv.component */ "./src/app/database-manager/components/import-csv/import-csv.component.ts");
/* harmony import */ var _components_sql_object_content_sql_object_content_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/sql-object-content/sql-object-content.component */ "./src/app/database-manager/components/sql-object-content/sql-object-content.component.ts");
/* harmony import */ var _components_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/preview-data/preview-data.component */ "./src/app/database-manager/components/preview-data/preview-data.component.ts");
/* harmony import */ var _components_sql_view_object_sql_view_object_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/sql-view-object/sql-view-object.component */ "./src/app/database-manager/components/sql-view-object/sql-view-object.component.ts");
/* harmony import */ var _components_rows_count_rows_count_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/rows-count/rows-count.component */ "./src/app/database-manager/components/rows-count/rows-count.component.ts");
/* harmony import */ var _components_view_editor_view_editor_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/view-editor/view-editor.component */ "./src/app/database-manager/components/view-editor/view-editor.component.ts");








// import ngx-bootstrap modules


























var DatabaseManagerModule = /** @class */ (function () {
    function DatabaseManagerModule() {
    }
    DatabaseManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_manager_layout_manager_layout_component__WEBPACK_IMPORTED_MODULE_21__["ManagerLayoutComponent"],
                _components_sql_objects_sql_objects_component__WEBPACK_IMPORTED_MODULE_22__["SqlObjectsComponent"],
                _components_db_connections_db_connections_component__WEBPACK_IMPORTED_MODULE_23__["DbConnectionsComponent"],
                _components_table_editor_table_editor_component__WEBPACK_IMPORTED_MODULE_24__["TableEditorComponent"],
                _components_table_data_table_data_component__WEBPACK_IMPORTED_MODULE_26__["TableDataComponent"],
                _components_sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_27__["SqlQueryComponent"],
                _components_import_csv_import_csv_component__WEBPACK_IMPORTED_MODULE_28__["ImportCsvComponent"],
                _components_sql_object_content_sql_object_content_component__WEBPACK_IMPORTED_MODULE_29__["SqlObjectContentComponent"],
                _components_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_30__["PreviewDataComponent"],
                _components_sql_view_object_sql_view_object_component__WEBPACK_IMPORTED_MODULE_31__["SqlViewObjectComponent"],
                _components_rows_count_rows_count_component__WEBPACK_IMPORTED_MODULE_32__["RowsCountComponent"],
                _components_view_editor_view_editor_component__WEBPACK_IMPORTED_MODULE_33__["ViewEditorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_15__["reducers"]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_16__["DBManagerEffects"], _store_effects__WEBPACK_IMPORTED_MODULE_16__["SqlObjectEffects"]]),
                _database_manager_routing_module__WEBPACK_IMPORTED_MODULE_20__["DatabaseManagerRoutingModule"],
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production,
                }),
                wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_13__["WjInputModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"].forRoot(),
                src_app_wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_18__["WijmoModule"]
            ],
            providers: [_guards_connection_guard__WEBPACK_IMPORTED_MODULE_25__["ConnectionGuard"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_19__["DialogService"]],
            entryComponents: [_components_import_csv_import_csv_component__WEBPACK_IMPORTED_MODULE_28__["ImportCsvComponent"], _components_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_30__["PreviewDataComponent"]]
        })
    ], DatabaseManagerModule);
    return DatabaseManagerModule;
}());



/***/ }),

/***/ "./src/app/database-manager/guards/connection.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/database-manager/guards/connection.guard.ts ***!
  \*************************************************************/
/*! exports provided: ConnectionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionGuard", function() { return ConnectionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors */ "./src/app/database-manager/store/selectors/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");









/**
 * @description Guard validates connection name.
 */
var ConnectionGuard = /** @class */ (function () {
    function ConnectionGuard(store, dbService, router) {
        this.store = store;
        this.dbService = dbService;
        this.router = router;
    }
    ConnectionGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["selectRouterParam"], 'connectionName').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (connection) {
            if (connection) {
                return _this.dbService.getMyDbConnections().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (connections) {
                    try {
                        _this.store.dispatch(new _store_actions_sql_objects__WEBPACK_IMPORTED_MODULE_8__["LoadedConnections"](connections));
                    }
                    catch (e) {
                        return false;
                    }
                    return connections.map(function (c) { return c.connectorName.toLowerCase(); }).includes(connection.toLowerCase());
                }));
            }
            _this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
        }));
    };
    ConnectionGuard.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["SqlDbService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ConnectionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["SqlDbService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConnectionGuard);
    return ConnectionGuard;
}());



/***/ }),

/***/ "./src/app/database-manager/preprocessor.ts":
/*!**************************************************!*\
  !*** ./src/app/database-manager/preprocessor.ts ***!
  \**************************************************/
/*! exports provided: ProcessFuncToType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessFuncToType", function() { return ProcessFuncToType; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/database-manager/utils.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");




var Proprocessor = /** @class */ (function () {
    function Proprocessor() {
    }
    Proprocessor.prototype.run = function (data, columns) {
        var _this = this;
        var columnIndexMap = data[0].reduce(function (prev, v, i) {
            prev[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatToValidSqlName"])(v)] = i;
            return prev;
        }, {});
        var res = data.map(function (row, i) {
            if (i === 0) {
                return row;
            }
            else {
                return columns.map(function (column, index) {
                    var val = null;
                    if (column.sourceField && typeof columnIndexMap[column.sourceField] === 'number') {
                        val = row[columnIndexMap[column.sourceField]];
                        if (column.dataType === _shared_models__WEBPACK_IMPORTED_MODULE_2__["SQLDataTypes"].DATE && !(val instanceof Date)) {
                            val = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["parseDatetimeOrNull"])(val);
                        }
                        else if ((column.dataType === _shared_models__WEBPACK_IMPORTED_MODULE_2__["SQLDataTypes"].INT
                            || column.dataType === _shared_models__WEBPACK_IMPORTED_MODULE_2__["SQLDataTypes"].BIGINT
                            || column.dataType === _shared_models__WEBPACK_IMPORTED_MODULE_2__["SQLDataTypes"].FLOAT) && typeof val !== 'number') {
                            val = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["parseNumberOrNull"])(val);
                        }
                    }
                    var _a = columns[index], preprocessFunc = _a.preprocessFunc, preprocessParams = _a.preprocessParams;
                    if (preprocessFunc && _this[preprocessFunc]) {
                        return _this[preprocessFunc](val, preprocessParams, i);
                    }
                    return val;
                });
            }
        }).slice(1);
        return res;
    };
    Proprocessor.prototype.text = function (val, param) {
        return param;
    };
    Proprocessor.prototype.parseNumber = function (val, param) {
        if (typeof val === 'number') {
            return val;
        }
        else if (typeof val === 'boolean') {
            return +val;
        }
        else if (typeof val === 'string') {
            val = val.replace(/,/g, '');
            if (param) {
                param.split('').forEach(function (v) {
                    val = val.replace(v, '');
                });
            }
            var koef = this.getKoef(val);
            try {
                val = parseFloat(val);
                return val * koef;
            }
            catch (e) {
                return null;
            }
        }
        return null;
    };
    Proprocessor.prototype.parseBoolean = function (val) {
        var trulyVals = ['1', 'yes', 'true', 'on'];
        var falsyVals = ['0', 'no', 'false', 'off'];
        var checkVal = val.toString().toLowerCase();
        if (trulyVals.includes(checkVal)) {
            return true;
        }
        if (falsyVals.includes(checkVal)) {
            return false;
        }
        return null;
    };
    Proprocessor.prototype.parseDate = function (val, params) {
        if (!val) {
            return null;
        }
        var date = params ? moment__WEBPACK_IMPORTED_MODULE_1__(val, params.split(',')) : moment__WEBPACK_IMPORTED_MODULE_1__(val);
        return date.isValid() ? date.toDate() : null;
    };
    /**
     * Generates id based on row index and initial value.
     * @param val Cell value.
     * @param param Initial id value.
     * @param index Row index.
     */
    Proprocessor.prototype.autoid = function (val, param, index) {
        var startIndex = 0;
        try {
            startIndex = parseInt(param, 10);
            if (isNaN(startIndex)) {
                startIndex = 0;
            }
        }
        catch (e) { }
        return startIndex + index;
    };
    Proprocessor.prototype.getKoef = function (str) {
        if (str.includes('k')) {
            return 1000;
        }
        if (str.includes('m')) {
            return 1000000;
        }
        if (str.includes('b')) {
            return 1000000000;
        }
        return 1;
    };
    return Proprocessor;
}());
var ProcessFuncToType;
(function (ProcessFuncToType) {
    ProcessFuncToType["autoid"] = "int";
    ProcessFuncToType["text"] = "nvarchar";
    ProcessFuncToType["parseDate"] = "datetime2";
    ProcessFuncToType["parseBoolean"] = "bit";
    ProcessFuncToType["parseNumber"] = "int";
})(ProcessFuncToType || (ProcessFuncToType = {}));
/* harmony default export */ __webpack_exports__["default"] = (new Proprocessor());


/***/ }),

/***/ "./src/app/database-manager/store/actions/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/database-manager/store/actions/index.ts ***!
  \*********************************************************/
/*! exports provided: ActionTypes, ErrorAction, SuccessAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorAction", function() { return ErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessAction", function() { return SuccessAction; });
/** @description Enum of common module actions. */
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ERROR"] = "[DB Manager] error";
    ActionTypes["SUCCESS"] = "[DB Manager] success";
})(ActionTypes || (ActionTypes = {}));
var ErrorAction = /** @class */ (function () {
    function ErrorAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ERROR;
    }
    ErrorAction.ctorParameters = function () { return [
        { type: String }
    ]; };
    return ErrorAction;
}());

var SuccessAction = /** @class */ (function () {
    function SuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SUCCESS;
    }
    SuccessAction.ctorParameters = function () { return [
        { type: String }
    ]; };
    return SuccessAction;
}());



/***/ }),

/***/ "./src/app/database-manager/store/actions/sql-object.ts":
/*!**************************************************************!*\
  !*** ./src/app/database-manager/store/actions/sql-object.ts ***!
  \**************************************************************/
/*! exports provided: ActionTypes, LoadSqlObjectDataAction, LoadedSqlObjectDataAction, LoadSqlObjectStructureAction, LoadedSqlObjectStructureAction, SaveSqlObjectStructureAction, SaveSqlObjectDataAction, UpdateSqlObjectDataAction, DeleteSqlObjectAction, UpdateSqlObjectAction, SavedSqlObjectStructure, RefreshSqlObject, SetLoadStateForSqlObject, SetSqlDataFiltersAction, SetSqlDataRowsCountAction, SetSqlDataFilterPropAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSqlObjectDataAction", function() { return LoadSqlObjectDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedSqlObjectDataAction", function() { return LoadedSqlObjectDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSqlObjectStructureAction", function() { return LoadSqlObjectStructureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedSqlObjectStructureAction", function() { return LoadedSqlObjectStructureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSqlObjectStructureAction", function() { return SaveSqlObjectStructureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSqlObjectDataAction", function() { return SaveSqlObjectDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSqlObjectDataAction", function() { return UpdateSqlObjectDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSqlObjectAction", function() { return DeleteSqlObjectAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSqlObjectAction", function() { return UpdateSqlObjectAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedSqlObjectStructure", function() { return SavedSqlObjectStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshSqlObject", function() { return RefreshSqlObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLoadStateForSqlObject", function() { return SetLoadStateForSqlObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSqlDataFiltersAction", function() { return SetSqlDataFiltersAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSqlDataRowsCountAction", function() { return SetSqlDataRowsCountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSqlDataFilterPropAction", function() { return SetSqlDataFilterPropAction; });
/**
 * @description Enum of actions related to selected sql object.
 */
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_SQL_OBJECT_DATA"] = "[DB Manager] load sql object data";
    ActionTypes["LOADED_SQL_OBJECT_DATA"] = "[DB Manager] loaded sql object data";
    ActionTypes["LOAD_SQL_OBJECT_STRUCTURE"] = "[DB Manager] load sql object structure";
    ActionTypes["LOADED_SQL_OBJECT_STRUCTURE"] = "[DB Manager] loaded sql object structure";
    ActionTypes["SAVE_SQL_OBJECT_STRUCTURE"] = "[DB Manager] save sql object structure";
    ActionTypes["SAVED_SQL_OBJECT_STRUCTURE"] = "[DB Manager] saved sql object structure";
    ActionTypes["SAVE_SQL_OBJECT_DATA"] = "[DB Manager] save sql object data";
    ActionTypes["UPDATE_SQL_OBJECT_DATA"] = "[DB Manager] update sql object data";
    ActionTypes["DELETE_SQL_OBJECT"] = "[DB Manager] delete sql object";
    ActionTypes["UPDATE_SQL_OBJECT"] = "[DB Manager] update state of sql object";
    ActionTypes["REFRESH_SQL_OBJECT"] = "[DB Manager] refresh sql object";
    ActionTypes["LOAD_STATE_SQL_OBJECT"] = "[DB Manager] load state";
    ActionTypes["SET_SQL_DATA_FILTERS"] = "[DB Manager] set sql data filters";
    ActionTypes["SET_SQL_DATA_ROWS_COUNT"] = "[DB Manager] set sql data rows count";
    ActionTypes["SET_SQL_DATA_FILTER_PROP"] = "[DB Manager] set sql data filter property";
})(ActionTypes || (ActionTypes = {}));
var LoadSqlObjectDataAction = /** @class */ (function () {
    function LoadSqlObjectDataAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SQL_OBJECT_DATA;
    }
    LoadSqlObjectDataAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadSqlObjectDataAction;
}());

var LoadedSqlObjectDataAction = /** @class */ (function () {
    function LoadedSqlObjectDataAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOADED_SQL_OBJECT_DATA;
    }
    LoadedSqlObjectDataAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadedSqlObjectDataAction;
}());

var LoadSqlObjectStructureAction = /** @class */ (function () {
    function LoadSqlObjectStructureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SQL_OBJECT_STRUCTURE;
    }
    LoadSqlObjectStructureAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadSqlObjectStructureAction;
}());

var LoadedSqlObjectStructureAction = /** @class */ (function () {
    function LoadedSqlObjectStructureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOADED_SQL_OBJECT_STRUCTURE;
    }
    LoadedSqlObjectStructureAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadedSqlObjectStructureAction;
}());

var SaveSqlObjectStructureAction = /** @class */ (function () {
    function SaveSqlObjectStructureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_SQL_OBJECT_STRUCTURE;
    }
    SaveSqlObjectStructureAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SaveSqlObjectStructureAction;
}());

var SaveSqlObjectDataAction = /** @class */ (function () {
    function SaveSqlObjectDataAction() {
        this.type = ActionTypes.SAVE_SQL_OBJECT_DATA;
    }
    return SaveSqlObjectDataAction;
}());

var UpdateSqlObjectDataAction = /** @class */ (function () {
    function UpdateSqlObjectDataAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_SQL_OBJECT_DATA;
    }
    UpdateSqlObjectDataAction.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return UpdateSqlObjectDataAction;
}());

var DeleteSqlObjectAction = /** @class */ (function () {
    function DeleteSqlObjectAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_SQL_OBJECT;
    }
    DeleteSqlObjectAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DeleteSqlObjectAction;
}());

var UpdateSqlObjectAction = /** @class */ (function () {
    function UpdateSqlObjectAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_SQL_OBJECT;
    }
    UpdateSqlObjectAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateSqlObjectAction;
}());

var SavedSqlObjectStructure = /** @class */ (function () {
    function SavedSqlObjectStructure() {
        this.type = ActionTypes.SAVED_SQL_OBJECT_STRUCTURE;
    }
    return SavedSqlObjectStructure;
}());

var RefreshSqlObject = /** @class */ (function () {
    function RefreshSqlObject() {
        this.type = ActionTypes.REFRESH_SQL_OBJECT;
    }
    return RefreshSqlObject;
}());

var SetLoadStateForSqlObject = /** @class */ (function () {
    function SetLoadStateForSqlObject() {
        this.type = ActionTypes.LOAD_STATE_SQL_OBJECT;
    }
    return SetLoadStateForSqlObject;
}());

var SetSqlDataFiltersAction = /** @class */ (function () {
    function SetSqlDataFiltersAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SQL_DATA_FILTERS;
    }
    SetSqlDataFiltersAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetSqlDataFiltersAction;
}());

var SetSqlDataRowsCountAction = /** @class */ (function () {
    function SetSqlDataRowsCountAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SQL_DATA_ROWS_COUNT;
    }
    SetSqlDataRowsCountAction.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return SetSqlDataRowsCountAction;
}());

var SetSqlDataFilterPropAction = /** @class */ (function () {
    function SetSqlDataFilterPropAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_SQL_DATA_FILTER_PROP;
    }
    SetSqlDataFilterPropAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetSqlDataFilterPropAction;
}());



/***/ }),

/***/ "./src/app/database-manager/store/actions/sql-objects.ts":
/*!***************************************************************!*\
  !*** ./src/app/database-manager/store/actions/sql-objects.ts ***!
  \***************************************************************/
/*! exports provided: ActionTypes, LoadSqlObjectsAction, LoadedSqlObjectsAction, SelectConnection, LoadedConnections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSqlObjectsAction", function() { return LoadSqlObjectsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedSqlObjectsAction", function() { return LoadedSqlObjectsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectConnection", function() { return SelectConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedConnections", function() { return LoadedConnections; });
/** @description Enum sql object list actions. */
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_SQL_OBJECTS"] = "[DB Manager] load sql objects";
    ActionTypes["LOADED_SQL_OBJECTS"] = "[DB Manager] loaded sql objects";
    ActionTypes["SELECT_CONNECTION"] = "[DB Manager] select connection";
    ActionTypes["LOADED_CONNECTIONS"] = "[DB Manager] loaded connections";
})(ActionTypes || (ActionTypes = {}));
var LoadSqlObjectsAction = /** @class */ (function () {
    function LoadSqlObjectsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SQL_OBJECTS;
    }
    LoadSqlObjectsAction.ctorParameters = function () { return [
        { type: String }
    ]; };
    return LoadSqlObjectsAction;
}());

var LoadedSqlObjectsAction = /** @class */ (function () {
    function LoadedSqlObjectsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOADED_SQL_OBJECTS;
    }
    LoadedSqlObjectsAction.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadedSqlObjectsAction;
}());

var SelectConnection = /** @class */ (function () {
    function SelectConnection(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT_CONNECTION;
    }
    SelectConnection.ctorParameters = function () { return [
        { type: String }
    ]; };
    return SelectConnection;
}());

var LoadedConnections = /** @class */ (function () {
    function LoadedConnections(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOADED_CONNECTIONS;
    }
    LoadedConnections.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadedConnections;
}());



/***/ }),

/***/ "./src/app/database-manager/store/effects/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/database-manager/store/effects/index.ts ***!
  \*********************************************************/
/*! exports provided: DBManagerEffects, SqlObjectEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBManagerEffects", function() { return DBManagerEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_sql_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/index */ "./src/app/database-manager/store/actions/index.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _sql_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sql-object */ "./src/app/database-manager/store/effects/sql-object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SqlObjectEffects", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_10__["SqlObjectEffects"]; });












var DBManagerEffects = /** @class */ (function () {
    function DBManagerEffects(actions$, notificationService, sqlDb) {
        var _this = this;
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.sqlDb = sqlDb;
        this.loadSqlObjects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_objects__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LOAD_SQL_OBJECTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return _this.sqlDb.getSqlObjects(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/sql/" + payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (objects) { return new _actions_sql_objects__WEBPACK_IMPORTED_MODULE_5__["LoadedSqlObjectsAction"](objects); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_8__["ErrorAction"](e.message)); }));
        this.errorHandler$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].ERROR), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var payload = _a.payload;
            _this.notificationService.open({
                message: payload,
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_9__["NotificationType"].DANGER
            });
            return { type: "[DB Manager] Shown Error: " + payload };
        }));
        this.successHandler$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var payload = _a.payload;
            _this.notificationService.open({
                message: payload,
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_9__["NotificationType"].SUCCESS
            });
            return { type: "[DB Manager] Shown Success: " + payload };
        }));
    }
    DBManagerEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["SqlDbService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DBManagerEffects.prototype, "loadSqlObjects$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DBManagerEffects.prototype, "errorHandler$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DBManagerEffects.prototype, "successHandler$", void 0);
    DBManagerEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["SqlDbService"]])
    ], DBManagerEffects);
    return DBManagerEffects;
}());



/***/ }),

/***/ "./src/app/database-manager/store/effects/sql-object.ts":
/*!**************************************************************!*\
  !*** ./src/app/database-manager/store/effects/sql-object.ts ***!
  \**************************************************************/
/*! exports provided: SqlObjectEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlObjectEffects", function() { return SqlObjectEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/index */ "./src/app/database-manager/store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _actions_sql_objects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models */ "./src/app/database-manager/models.ts");














var API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + "/sql";
var SqlObjectEffects = /** @class */ (function () {
    function SqlObjectEffects(actions$, sqlDb, store, router) {
        var _this = this;
        this.actions$ = actions$;
        this.sqlDb = sqlDb;
        this.store = store;
        this.router = router;
        this.loadSqlObjectStructure$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].LOAD_SQL_OBJECT_STRUCTURE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0].payload, current = _a[1].dbConnections.current;
            return _this.sqlDb.getObject(API_URL + "/" + current, payload.objectOwner, payload.objectName, payload.objectType).
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (metaData) { return new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectStructureAction"](metaData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_8__["ErrorAction"](e.message), new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectStructureAction"](null)); }));
        }));
        this.loadSqlObjectData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].LOAD_SQL_OBJECT_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0].payload, _b = _a[1], current = _b.dbConnections.current, filters = _b.sqlObject.filters;
            return _this.sqlDb.selectSqlObjectData(current, payload.objectOwner, payload.objectName, filters).
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectDataAction"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_8__["ErrorAction"](e), new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectDataAction"](null)); }));
        }));
        this.saveSqlObjectStructure$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].SAVE_SQL_OBJECT_STRUCTURE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0].payload, store = _a[1];
            if (!Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["compareSqlObjects"])(payload, store.sqlObject.structure)) {
                return _this.sqlDb.generateObject(API_URL + "/" + store.dbConnections.current, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (dataObject) { return [
                    new _actions_sql_objects__WEBPACK_IMPORTED_MODULE_11__["LoadSqlObjectsAction"](store.dbConnections.current),
                    new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectStructureAction"](dataObject),
                    new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["SavedSqlObjectStructure"](),
                    new _actions_index__WEBPACK_IMPORTED_MODULE_8__["SuccessAction"]('SQL Structure saved'),
                ]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_8__["ErrorAction"](Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["getErrorMessage"])(e)));
                }));
            }
            return [new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["SavedSqlObjectStructure"](), { type: 'Sql structure not changed' }];
        }));
        this.saveSqlObjectData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].SAVE_SQL_OBJECT_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var action = _a[0], _b = _a[1], dbConnections = _b.dbConnections, sqlObject = _b.sqlObject;
            return _this.sqlDb.saveSqlObjectData(dbConnections.current, sqlObject.structure, { tableData: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_10__["mapValuesToTable"])(sqlObject.changedData) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return [
                new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadSqlObjectDataAction"](sqlObject.structure),
                new _actions_index__WEBPACK_IMPORTED_MODULE_8__["SuccessAction"]('SQL Object data saved')
            ]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_8__["ErrorAction"](e.error || 'Server error'));
            }));
        }));
        this.deleteSqlObject$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].DELETE_SQL_OBJECT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0].payload, store = _a[1];
            return _this.sqlDb.deleteObject(API_URL + "/" + store.dbConnections.current, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                _this.router.navigate(['/database', store.dbConnections.current]);
                return [
                    new _actions_index__WEBPACK_IMPORTED_MODULE_8__["SuccessAction"]('SQL Object deleted'),
                    new _actions_sql_objects__WEBPACK_IMPORTED_MODULE_11__["LoadSqlObjectsAction"](store.dbConnections.current),
                    new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectDataAction"](null),
                    new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadedSqlObjectStructureAction"](null)
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                var errors = [e.error.title, Object.values(e.error.errors)];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_8__["ErrorAction"](errors.join('\n')));
            }));
        }));
        this.loadedSqlObject$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].LOADED_SQL_OBJECT_STRUCTURE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var payload = _a[0].payload, store = _a[1];
            var urlPath = ['/database', store.dbConnections.current];
            if (payload) {
                var _b = payload, objectOwner = _b.objectOwner, objectName = _b.objectName, objectType = _b.objectType;
                if (objectType === _models__WEBPACK_IMPORTED_MODULE_13__["ObjectType"].View) {
                    urlPath.push('view');
                }
                urlPath = urlPath.concat([objectOwner, objectName]);
                _this.router.navigate(urlPath);
            }
            return { type: 'Route checked after table structure update' };
        }));
        this.limitRowsCount$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].SET_SQL_DATA_FILTER_PROP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var prop = _a[0], structure = _a[1].sqlObject.structure;
            return new _actions_sql_object__WEBPACK_IMPORTED_MODULE_7__["LoadSqlObjectDataAction"](structure);
        }));
    }
    SqlObjectEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["SqlDbService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "loadSqlObjectStructure$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "loadSqlObjectData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "saveSqlObjectStructure$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "saveSqlObjectData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "deleteSqlObject$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "loadedSqlObject$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SqlObjectEffects.prototype, "limitRowsCount$", void 0);
    SqlObjectEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["SqlDbService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], SqlObjectEffects);
    return SqlObjectEffects;
}());



/***/ }),

/***/ "./src/app/database-manager/store/index.ts":
/*!*************************************************!*\
  !*** ./src/app/database-manager/store/index.ts ***!
  \*************************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/database-manager/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["metaReducers"]; });




/***/ }),

/***/ "./src/app/database-manager/store/reducers/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/database-manager/store/reducers/index.ts ***!
  \**********************************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _sql_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sql-objects */ "./src/app/database-manager/store/reducers/sql-objects.ts");
/* harmony import */ var _sql_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sql-object */ "./src/app/database-manager/store/reducers/sql-object.ts");




var reducers = {
    sqlObjects: _sql_objects__WEBPACK_IMPORTED_MODULE_2__["sqlObjectsReducer"],
    dbConnections: _sql_objects__WEBPACK_IMPORTED_MODULE_2__["connectonsReducer"],
    sqlObject: _sql_object__WEBPACK_IMPORTED_MODULE_3__["sqlObjectsReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};
var metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/database-manager/store/reducers/sql-object.ts":
/*!***************************************************************!*\
  !*** ./src/app/database-manager/store/reducers/sql-object.ts ***!
  \***************************************************************/
/*! exports provided: sqlObjectsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlObjectsReducer", function() { return sqlObjectsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/sql-object */ "./src/app/database-manager/store/actions/sql-object.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/database-manager/models.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");




var initStructure = {
    fields: [],
    details: {},
    objectId: 0,
    objectOwner: null,
    objectName: 'New',
    objectType: 'Table'
};
var initState = {
    structure: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initStructure),
    data: null,
    currentState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initStructure),
    changedData: null,
    filters: {
        limitRowsCount: 1000,
        skipRowsCount: 0
    },
    loading: [],
    rowsCount: 0
};
function sqlObjectsReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_SQL_OBJECT_STRUCTURE: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { filters: {
                    limitRowsCount: state.filters.limitRowsCount,
                    skipRowsCount: 0,
                }, structure: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initStructure, payload), currentState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initStructure, payload), loading: Array.from(new Set(state.loading.concat([_models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].STRUCTURE_LOAD]))) });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_SQL_OBJECT_DATA: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: null, loading: Array.from(new Set(state.loading.filter(function (l) { return l !== _models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].DATA_SAVE; }).concat([
                    _models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].DATA_LOAD
                ]))) });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SAVE_SQL_OBJECT_DATA: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: Array.from(new Set(state.loading.concat([_models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].DATA_SAVE]))) });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_STATE_SQL_OBJECT: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: [_models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].STRUCTURE_LOAD, _models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].DATA_LOAD] });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOADED_SQL_OBJECT_STRUCTURE: {
            var structure = action.payload || tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, initStructure);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { structure: structure, loading: state.loading.filter(function (l) { return l !== _models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].STRUCTURE_LOAD; }), currentState: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(structure) });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOADED_SQL_OBJECT_DATA: {
            var payload = action.payload;
            var data = payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: data, loading: state.loading.filter(function (l) { return l !== _models__WEBPACK_IMPORTED_MODULE_2__["LoadingStates"].DATA_LOAD; }), changedData: null });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_SQL_OBJECT: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentState: action.payload });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_SQL_OBJECT_DATA: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { changedData: action.payload });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REFRESH_SQL_OBJECT: {
            var structure = state.structure;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { changedData: null, currentState: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(structure) });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_SQL_DATA_FILTERS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { filters: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ limitRowsCount: state.filters.limitRowsCount }, action.payload) });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_SQL_DATA_ROWS_COUNT: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { rowsCount: action.payload });
        }
        case _actions_sql_object__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_SQL_DATA_FILTER_PROP: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { filters: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.filters, action.payload) });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/database-manager/store/reducers/sql-objects.ts":
/*!****************************************************************!*\
  !*** ./src/app/database-manager/store/reducers/sql-objects.ts ***!
  \****************************************************************/
/*! exports provided: sqlObjectsReducer, connectonsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlObjectsReducer", function() { return sqlObjectsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectonsReducer", function() { return connectonsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_sql_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/sql-objects */ "./src/app/database-manager/store/actions/sql-objects.ts");


var initState = {
    list: []
};
function sqlObjectsReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case _actions_sql_objects__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOADED_SQL_OBJECTS: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { list: payload });
        }
        default: {
            return state;
        }
    }
}
var initConnections = {
    list: [],
    current: null
};
function connectonsReducer(state, action) {
    if (state === void 0) { state = initConnections; }
    switch (action.type) {
        case _actions_sql_objects__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SELECT_CONNECTION: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { current: payload });
        }
        case _actions_sql_objects__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOADED_CONNECTIONS: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { list: payload });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/database-manager/store/selectors/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/database-manager/store/selectors/index.ts ***!
  \***********************************************************/
/*! exports provided: selectSqlObjects, selectConnections, selectSqlObjectsList, selectConnectionsList, selectConnectionName, selectRouter, selectQueryParams, selectQueryParam, selectRouteParams, selectRouteParam, selectRouteData, selectUrl, selectRouterParams, selectRouterParam, selectSqlObject, selectSqlObjectStructure, selectSqlObjectData, selectSqlObjectFieldsState, selectIsChangedSqlObjectStructure, selectSqlObjectState, selectSqlObjectLoading, selectIsChangedSqlObjectData, selectSqlObjectLoadingMessages, selectSqlObjectRowsCount, selectSqlObjectLimitRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjects", function() { return selectSqlObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConnections", function() { return selectConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectsList", function() { return selectSqlObjectsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConnectionsList", function() { return selectConnectionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConnectionName", function() { return selectConnectionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouter", function() { return selectRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParams", function() { return selectQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParam", function() { return selectQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParams", function() { return selectRouteParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParam", function() { return selectRouteParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteData", function() { return selectRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUrl", function() { return selectUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterParams", function() { return selectRouterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterParam", function() { return selectRouterParam; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _sql_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sql-object */ "./src/app/database-manager/store/selectors/sql-object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObject", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectStructure", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectStructure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectData", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectFieldsState", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectFieldsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsChangedSqlObjectStructure", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectIsChangedSqlObjectStructure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectState", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectLoading", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsChangedSqlObjectData", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectIsChangedSqlObjectData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectLoadingMessages", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectLoadingMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectRowsCount", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectRowsCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectLimitRows", function() { return _sql_object__WEBPACK_IMPORTED_MODULE_3__["selectSqlObjectLimitRows"]; });


var _a;



var selectSqlObjects = function (state) {
    return state.sqlObjects;
};
var selectConnections = function (state) {
    return state.dbConnections;
};
var selectSqlObjectsList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSqlObjects, function (state) { return state.list; });
var selectConnectionsList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectConnections, function (state) { return state.list; });
var selectConnectionName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectConnections, function (state) { return state.current; });
var selectRouter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');
var selectQueryParams = (_a = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["getSelectors"](selectRouter), _a.selectQueryParams), // select the current route query params
selectQueryParam = _a.selectQueryParam, // factory function to select a query param
selectRouteParams = _a.selectRouteParams, // select the current route params
selectRouteParam = _a.selectRouteParam, // factory function to select a route param
selectRouteData = _a.selectRouteData, // select the current route data
selectUrl = _a.selectUrl;
var selectRouterParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectRouter, function (state, props) {
    if (props === void 0) { props = null; }
    if (!state.state) {
        return {};
    }
    var route = state.state.root;
    var params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, route.params);
    while (route.firstChild) {
        route = route.firstChild;
        params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params, route.params);
    }
    if (!props) {
        return params;
    }
    return Object.entries(params).reduce(function (prev, _a) {
        var prop = _a[0], val = _a[1];
        if (props.includes(prop)) {
            prev[prop] = val;
        }
        return prev;
    }, {});
});
var selectRouterParam = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectRouterParams, function (params, param) { return params[param]; });


/***/ }),

/***/ "./src/app/database-manager/store/selectors/sql-object.ts":
/*!****************************************************************!*\
  !*** ./src/app/database-manager/store/selectors/sql-object.ts ***!
  \****************************************************************/
/*! exports provided: selectSqlObject, selectSqlObjectStructure, selectSqlObjectData, selectSqlObjectFieldsState, selectIsChangedSqlObjectStructure, selectSqlObjectState, selectSqlObjectLoading, selectIsChangedSqlObjectData, selectSqlObjectLoadingMessages, selectSqlObjectRowsCount, selectSqlObjectLimitRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObject", function() { return selectSqlObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectStructure", function() { return selectSqlObjectStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectData", function() { return selectSqlObjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectFieldsState", function() { return selectSqlObjectFieldsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsChangedSqlObjectStructure", function() { return selectIsChangedSqlObjectStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectState", function() { return selectSqlObjectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectLoading", function() { return selectSqlObjectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsChangedSqlObjectData", function() { return selectIsChangedSqlObjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectLoadingMessages", function() { return selectSqlObjectLoadingMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectRowsCount", function() { return selectSqlObjectRowsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSqlObjectLimitRows", function() { return selectSqlObjectLimitRows; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/database-manager/models.ts");



var selectSqlObject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('sqlObject');
var selectSqlObjectStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.structure; });
var selectSqlObjectData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.data; });
var selectSqlObjectFieldsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.currentState.fields; });
var selectIsChangedSqlObjectStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return !Object(src_app_shared__WEBPACK_IMPORTED_MODULE_1__["compareSqlObjects"])(state.structure, state.currentState); });
var selectSqlObjectState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.currentState; });
var selectSqlObjectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.loading; });
var selectIsChangedSqlObjectData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (_a) {
    var changedData = _a.changedData;
    return Boolean(changedData && changedData.length);
});
var selectSqlObjectLoadingMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObjectLoading, (function (loading) {
    if (loading.length) {
        return {
            messages: loading.map(function (item) { return _models__WEBPACK_IMPORTED_MODULE_2__["LoadingMessages"][item]; })
        };
    }
    return null;
}));
var selectSqlObjectRowsCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.rowsCount; });
var selectSqlObjectLimitRows = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSqlObject, function (state) { return state.filters.limitRowsCount; });


/***/ }),

/***/ "./src/app/database-manager/utils.ts":
/*!*******************************************!*\
  !*** ./src/app/database-manager/utils.ts ***!
  \*******************************************/
/*! exports provided: filterItems, getFormattedColumns, getFormattedFields, getPrimaryKeys, formatToValidSqlName, getObjectTypeFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterItems", function() { return filterItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedColumns", function() { return getFormattedColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedFields", function() { return getFormattedFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimaryKeys", function() { return getPrimaryKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToValidSqlName", function() { return formatToValidSqlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectTypeFromUrl", function() { return getObjectTypeFromUrl; });
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/database-manager/models.ts");


var filterItems = function (items) {
    return items.map(function (i) { return typeof i !== 'object' ? { fieldName: i } : i; }).filter(function (f) { return f.fieldName; });
};
function getFormattedColumns(items) {
    return filterItems(items).map(function (f) { return ({
        fieldName: f.fieldName,
        dataType: f.dataType || src_app_shared_models__WEBPACK_IMPORTED_MODULE_0__["SQLDataTypes"].NVARCHAR,
        size: getDefaultSize(f),
        isKey: f.isKey || false,
        isNullable: f.isNullable || true
    }); });
}
function getFormattedFields(items) {
    return filterItems(items).map(function (f) { return ({
        fieldName: f.fieldName,
        dataType: f.dataType || src_app_shared_models__WEBPACK_IMPORTED_MODULE_0__["SQLDataTypes"].NVARCHAR,
        size: getDefaultSize(f),
        isNullable: f.isNullable || true
    }); });
}
function getPrimaryKeys(items) {
    return items.filter(function (i) { return i.isKey; }).map(function (_a) {
        var fieldName = _a.fieldName;
        return ({ fieldName: fieldName });
    });
}
function getDefaultSize(f) {
    return (f.dataType === src_app_shared_models__WEBPACK_IMPORTED_MODULE_0__["SQLDataTypes"].NVARCHAR || !f.dataType) && !f.size ? src_app_shared_models__WEBPACK_IMPORTED_MODULE_0__["SqlTypesSizes"][src_app_shared_models__WEBPACK_IMPORTED_MODULE_0__["SQLDataTypes"].NVARCHAR] : f.size;
}
function formatToValidSqlName(str) {
    return str.replace(/&|\+|\)|\(|\/|@|\:|;|\?|\!|\*|\-/g, '').replace(/\s/g, '_');
}
function getObjectTypeFromUrl(url) {
    if (url === void 0) { url = ''; }
    var match = url.match(/\/database\/[\w-]+\/([\w-]+)\/*/);
    if (match && match[1].toLowerCase() === 'view') {
        return _models__WEBPACK_IMPORTED_MODULE_1__["ObjectType"].View;
    }
    return _models__WEBPACK_IMPORTED_MODULE_1__["ObjectType"].Table;
}


/***/ }),

/***/ "./src/environments/environment.extension.ts":
/*!***************************************************!*\
  !*** ./src/environments/environment.extension.ts ***!
  \***************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    useHash: true,
    // apiBaseUrl: 'https://localhost:44308/api'
    apiBaseUrl: 'https://worksheets-web-api-test.azurewebsites.net/api',
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    useHash: false,
    // apiBaseUrl: 'https://localhost:44308/api'
    apiBaseUrl: 'https://worksheets-web-api-test.azurewebsites.net/api',
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};


/***/ })

}]);
//# sourceMappingURL=database-manager-database-manager-module.js.map