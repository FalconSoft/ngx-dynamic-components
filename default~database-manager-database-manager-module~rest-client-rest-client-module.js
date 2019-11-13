(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~database-manager-database-manager-module~rest-client-rest-client-module"],{

/***/ "./node_modules/@ngrx/effects/fesm5/effects.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ngrx/effects/fesm5/effects.js ***!
  \*****************************************************/
/*! exports provided: ɵngrx_modules_effects_effects_c, ɵngrx_modules_effects_effects_a, ɵngrx_modules_effects_effects_b, ɵngrx_modules_effects_effects_f, ɵngrx_modules_effects_effects_e, ɵngrx_modules_effects_effects_d, createEffect, Effect, getEffectsMetadata, mergeEffects, Actions, ofType, EffectsModule, EffectSources, ROOT_EFFECTS_INIT, act */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_c", function() { return EffectsFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_a", function() { return createSourceInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_b", function() { return EffectsRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_f", function() { return EffectsRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_e", function() { return FEATURE_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_d", function() { return ROOT_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffect", function() { return createEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return Effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectsMetadata", function() { return getEffectsMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeEffects", function() { return mergeEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return ofType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsModule", function() { return EffectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectSources", function() { return EffectSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_EFFECTS_INIT", function() { return ROOT_EFFECTS_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "act", function() { return act; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 8.3.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */






var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';
/**
 * @description
 * Creates an effect from an `Observable` and an `EffectConfig`.
 *
 * @param source A function which returns an `Observable`.
 * @param config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `resubscribeOnError` is true.
 * @returns If `EffectConfig`#`dispatch` is true, returns `Observable<Action>`.  Else, returns `Observable<unknown>`.
 *
 * @usageNotes
 *
 * ** Mapping to a different action **
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(FeatureActions.actionOne),
 *     map(() => FeatureActions.actionTwo())
 *   )
 * );
 * ```
 *
 *  ** Non-dispatching effects **
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(FeatureActions.actionOne),
 *     tap(() => console.log('Action One Dispatched'))
 *   ),
 *   { dispatch: false }
 *   // FeatureActions.actionOne is not dispatched
 * );
 * ```
 */
function createEffect(source, config) {
    var effect = source();
    // Right now both createEffect and @Effect decorator set default values.
    // Ideally that should only be done in one place that aggregates that info,
    // for example in mergeEffects().
    var value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ dispatch: true, resubscribeOnError: true }, config);
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value: value,
    });
    return effect;
}
function getCreateEffectMetadata(instance) {
    var propertyNames = Object.getOwnPropertyNames(instance);
    var metadata = propertyNames
        .filter(function (propertyName) {
        return instance[propertyName] &&
            instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY);
    })
        .map(function (propertyName) {
        var metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ propertyName: propertyName }, metaData);
    });
    return metadata;
}

function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}

var METADATA_KEY = '__@ngrx/effects__';
function Effect(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.dispatch, dispatch = _c === void 0 ? true : _c, _d = _b.resubscribeOnError, resubscribeOnError = _d === void 0 ? true : _d;
    return function (target, propertyName) {
        // Right now both createEffect and @Effect decorator set default values.
        // Ideally that should only be done in one place that aggregates that info,
        // for example in mergeEffects().
        var metadata = {
            propertyName: propertyName,
            dispatch: dispatch,
            resubscribeOnError: resubscribeOnError,
        };
        setEffectMetadataEntries(target, [metadata]);
    };
}
function getEffectDecoratorMetadata(instance) {
    var effectsDecorators = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["compose"])(getEffectMetadataEntries, getSourceForInstance)(instance);
    return effectsDecorators;
}
function setEffectMetadataEntries(sourceProto, entries) {
    var constructor = sourceProto.constructor;
    var meta = constructor.hasOwnProperty(METADATA_KEY)
        ? constructor[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}

function getEffectsMetadata(instance) {
    var e_1, _a;
    var metadata = {};
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(getSourceMetadata(instance)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = _c.value, propertyName = _d.propertyName, dispatch = _d.dispatch, resubscribeOnError = _d.resubscribeOnError;
            metadata[propertyName] = { dispatch: dispatch, resubscribeOnError: resubscribeOnError };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return metadata;
}
function getSourceMetadata(instance) {
    var effects = [
        getEffectDecoratorMetadata,
        getCreateEffectMetadata,
    ];
    return effects.reduce(function (sources, source) { return sources.concat(source(instance)); }, []);
}

function mergeEffects(sourceInstance, errorHandler) {
    var sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var observables$ = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch, resubscribeOnError = _a.resubscribeOnError;
        var observable$ = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        var resubscribable$ = resubscribeOnError
            ? observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                if (errorHandler)
                    errorHandler.handleError(error);
                // Return observable that produces this particular effect
                return observable$;
            }))
            : observable$;
        if (dispatch === false) {
            return resubscribable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["ignoreElements"])());
        }
        var materialized$ = resubscribable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])());
        return materialized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); }));
    });
    return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(observables$));
}

var Actions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Actions, _super);
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    Actions_1 = Actions;
    Actions.prototype.lift = function (operator) {
        var observable = new Actions_1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    var Actions_1;
    Actions = Actions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ScannedActionsSubject"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], Actions);
    return Actions;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) {
        return allowedTypes.some(function (typeOrActionCreator) {
            if (typeof typeOrActionCreator === 'string') {
                // Comparing the string to type
                return typeOrActionCreator === action.type;
            }
            // We are filtering by ActionCreator
            return typeOrActionCreator.type === action.type;
        });
    });
}

function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        var action = output.notification.value;
        var isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
        }
    }
}
function isAction(action) {
    return (typeof action !== 'function' &&
        action &&
        action.type &&
        typeof action.type === 'string');
}
function getEffectName(_a) {
    var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
    var isMethod = typeof sourceInstance[propertyName] === 'function';
    return "\"" + sourceName + "." + propertyName + (isMethod ? '()' : '') + "\"";
}
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch (_a) {
        return action;
    }
}

var onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
var onRunEffectsKey = 'ngrxOnRunEffects';
var onInitEffects = 'ngrxOnInitEffects';

var EffectSources = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EffectSources, _super);
    function EffectSources(errorHandler, store) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        _this.store = store;
        return _this;
    }
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
        if (onInitEffects in effectSourceInstance &&
            typeof effectSourceInstance[onInitEffects] === 'function') {
            this.store.dispatch(effectSourceInstance[onInitEffects]());
        }
    };
    /**
     * @internal
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return this.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(getSourceForInstance), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (source$) { return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(effectsInstance)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (source$) {
            return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(resolveEffectSource(_this.errorHandler)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (output) {
                reportInvalidActions(output, _this.errorHandler);
                return output.notification;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (notification) {
                return notification.kind === 'N';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        }));
    };
    EffectSources = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], EffectSources);
    return EffectSources;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]));
function effectsInstance(sourceInstance) {
    if (onIdentifyEffectsKey in sourceInstance &&
        typeof sourceInstance[onIdentifyEffectsKey] === 'function') {
        return sourceInstance[onIdentifyEffectsKey]();
    }
    return '';
}
function resolveEffectSource(errorHandler) {
    return function (sourceInstance) {
        var mergedEffects$ = mergeEffects(sourceInstance, errorHandler);
        if (isOnRunEffects(sourceInstance)) {
            return sourceInstance.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    };
}
function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}

var IMMEDIATE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngrx/effects: Immediate Effects');
var ROOT_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngrx/effects: Root Effects');
var FEATURE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngrx/effects: Feature Effects');

var EffectsRunner = /** @class */ (function () {
    function EffectsRunner(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    EffectsRunner.prototype.start = function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    EffectsRunner.prototype.ngOnDestroy = function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    EffectsRunner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [EffectSources,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], EffectsRunner);
    return EffectsRunner;
}());

var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach(function (effectSourceInstance) {
            return sources.addEffects(effectSourceInstance);
        });
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    EffectsRootModule.prototype.addEffects = function (effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    };
    EffectsRootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(ROOT_EFFECTS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [EffectSources,
            EffectsRunner,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], Array, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"]])
    ], EffectsRootModule);
    return EffectsRootModule;
}());

var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach(function (group) {
            return group.forEach(function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            });
        });
    }
    EffectsFeatureModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(FEATURE_EFFECTS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [EffectsRootModule, Array, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"]])
    ], EffectsFeatureModule);
    return EffectsFeatureModule;
}());

var EffectsModule = /** @class */ (function () {
    function EffectsModule() {
    }
    EffectsModule.forFeature = function (featureEffects) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    deps: featureEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule.forRoot = function (rootEffects) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                EffectsRunner,
                EffectSources,
                Actions,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({})
    ], EffectsModule);
    return EffectsModule;
}());
function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
    return instances;
}

function act(
/** Allow to take either config object or project/error functions */
configOrProject, errorFn) {
    var _a = typeof configOrProject === 'function'
        ? {
            project: configOrProject,
            error: errorFn,
            operator: rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"],
            complete: undefined,
            unsubscribe: undefined,
        }
        : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, configOrProject, { operator: configOrProject.operator || rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"] }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
    return function (source) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(source.pipe(operator(function (input, index) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
                    var completed = false;
                    var errored = false;
                    var projectedCount = 0;
                    return project(input, index).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (notification) {
                        switch (notification.kind) {
                            case 'E':
                                errored = true;
                                return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Notification"](
                                // TODO: remove any in RxJS 6.5
                                'N', error(notification.error, input));
                            case 'C':
                                completed = true;
                                return complete
                                    ? new rxjs__WEBPACK_IMPORTED_MODULE_2__["Notification"](
                                    // TODO: remove any in RxJS 6.5
                                    'N', complete(projectedCount, input))
                                    : undefined;
                            default:
                                ++projectedCount;
                                return notification;
                        }
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (n) { return n != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                        if (!completed && !errored && unsubscribe) {
                            subject.next(unsubscribe(projectedCount, input));
                        }
                    }));
                });
            })), subject);
        });
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


//# sourceMappingURL=effects.js.map


/***/ }),

/***/ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js ***!
  \*******************************************************************/
/*! exports provided: ɵngrx_modules_store_devtools_store_devtools_f, ɵngrx_modules_store_devtools_store_devtools_e, ɵngrx_modules_store_devtools_store_devtools_h, ɵngrx_modules_store_devtools_store_devtools_g, ɵngrx_modules_store_devtools_store_devtools_k, ɵngrx_modules_store_devtools_store_devtools_j, ɵngrx_modules_store_devtools_store_devtools_i, ɵngrx_modules_store_devtools_store_devtools_a, ɵngrx_modules_store_devtools_store_devtools_b, ɵngrx_modules_store_devtools_store_devtools_c, ɵngrx_modules_store_devtools_store_devtools_d, StoreDevtoolsModule, RECOMPUTE, StoreDevtools, StoreDevtoolsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_f", function() { return INITIAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_e", function() { return STORE_DEVTOOLS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_h", function() { return createConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_g", function() { return noMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_k", function() { return DevtoolsDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_j", function() { return DevtoolsExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_i", function() { return REDUX_DEVTOOLS_EXTENSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_a", function() { return IS_EXTENSION_OR_MONITOR_PRESENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_b", function() { return createIsExtensionOrMonitorPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_c", function() { return createReduxDevtoolsExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_d", function() { return createStateObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDevtoolsModule", function() { return StoreDevtoolsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECOMPUTE", function() { return RECOMPUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDevtools", function() { return StoreDevtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDevtoolsConfig", function() { return StoreDevtoolsConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license NgRx 8.3.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */






var StoreDevtoolsConfig = /** @class */ (function () {
    function StoreDevtoolsConfig() {
    }
    return StoreDevtoolsConfig;
}());
var STORE_DEVTOOLS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/devtools Options');
var INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/devtools Initial Config');
function noMonitor() {
    return null;
}
var DEFAULT_NAME = 'NgRx Store DevTools';
function createConfig(_options) {
    var DEFAULT_OPTIONS = {
        maxAge: false,
        monitor: noMonitor,
        actionSanitizer: undefined,
        stateSanitizer: undefined,
        name: DEFAULT_NAME,
        serialize: false,
        logOnly: false,
        // Add all features explicitely. This prevent buggy behavior for
        // options like "lock" which might otherwise not show up.
        features: {
            pause: true,
            lock: true,
            persist: true,
            export: true,
            import: 'custom',
            jump: true,
            skip: true,
            reorder: true,
            dispatch: true,
            test: true,
        },
    };
    var options = typeof _options === 'function' ? _options() : _options;
    var logOnly = options.logOnly
        ? { pause: true, export: true, test: true }
        : false;
    var features = options.features || logOnly || DEFAULT_OPTIONS.features;
    var config = Object.assign({}, DEFAULT_OPTIONS, { features: features }, options);
    if (config.maxAge && config.maxAge < 2) {
        throw new Error("Devtools 'maxAge' cannot be less than 2, got " + config.maxAge);
    }
    return config;
}

var PERFORM_ACTION = 'PERFORM_ACTION';
var REFRESH = 'REFRESH';
var RESET = 'RESET';
var ROLLBACK = 'ROLLBACK';
var COMMIT = 'COMMIT';
var SWEEP = 'SWEEP';
var TOGGLE_ACTION = 'TOGGLE_ACTION';
var SET_ACTIONS_ACTIVE = 'SET_ACTIONS_ACTIVE';
var JUMP_TO_STATE = 'JUMP_TO_STATE';
var JUMP_TO_ACTION = 'JUMP_TO_ACTION';
var IMPORT_STATE = 'IMPORT_STATE';
var LOCK_CHANGES = 'LOCK_CHANGES';
var PAUSE_RECORDING = 'PAUSE_RECORDING';
var PerformAction = /** @class */ (function () {
    function PerformAction(action, timestamp) {
        this.action = action;
        this.timestamp = timestamp;
        this.type = PERFORM_ACTION;
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' +
                'Have you misspelled a constant?');
        }
    }
    return PerformAction;
}());
var Refresh = /** @class */ (function () {
    function Refresh() {
        this.type = REFRESH;
    }
    return Refresh;
}());
var Reset = /** @class */ (function () {
    function Reset(timestamp) {
        this.timestamp = timestamp;
        this.type = RESET;
    }
    return Reset;
}());
var Rollback = /** @class */ (function () {
    function Rollback(timestamp) {
        this.timestamp = timestamp;
        this.type = ROLLBACK;
    }
    return Rollback;
}());
var Commit = /** @class */ (function () {
    function Commit(timestamp) {
        this.timestamp = timestamp;
        this.type = COMMIT;
    }
    return Commit;
}());
var Sweep = /** @class */ (function () {
    function Sweep() {
        this.type = SWEEP;
    }
    return Sweep;
}());
var ToggleAction = /** @class */ (function () {
    function ToggleAction(id) {
        this.id = id;
        this.type = TOGGLE_ACTION;
    }
    return ToggleAction;
}());
var JumpToState = /** @class */ (function () {
    function JumpToState(index) {
        this.index = index;
        this.type = JUMP_TO_STATE;
    }
    return JumpToState;
}());
var JumpToAction = /** @class */ (function () {
    function JumpToAction(actionId) {
        this.actionId = actionId;
        this.type = JUMP_TO_ACTION;
    }
    return JumpToAction;
}());
var ImportState = /** @class */ (function () {
    function ImportState(nextLiftedState) {
        this.nextLiftedState = nextLiftedState;
        this.type = IMPORT_STATE;
    }
    return ImportState;
}());
var LockChanges = /** @class */ (function () {
    function LockChanges(status) {
        this.status = status;
        this.type = LOCK_CHANGES;
    }
    return LockChanges;
}());
var PauseRecording = /** @class */ (function () {
    function PauseRecording(status) {
        this.status = status;
        this.type = PAUSE_RECORDING;
    }
    return PauseRecording;
}());

function difference(first, second) {
    return first.filter(function (item) { return second.indexOf(item) < 0; });
}
/**
 * Provides an app's view into the state of the lifted store.
 */
function unliftState(liftedState) {
    var computedStates = liftedState.computedStates, currentStateIndex = liftedState.currentStateIndex;
    // At start up NgRx dispatches init actions,
    // When these init actions are being filtered out by the predicate or safe/block list options
    // we don't have a complete computed states yet.
    // At this point it could happen that we're out of bounds, when this happens we fall back to the last known state
    if (currentStateIndex >= computedStates.length) {
        var state_1 = computedStates[computedStates.length - 1].state;
        return state_1;
    }
    var state = computedStates[currentStateIndex].state;
    return state;
}
/**
 * Lifts an app's action into an action on the lifted store.
 */
function liftAction(action) {
    return new PerformAction(action, +Date.now());
}
/**
 * Sanitizes given actions with given function.
 */
function sanitizeActions(actionSanitizer, actions) {
    return Object.keys(actions).reduce(function (sanitizedActions, actionIdx) {
        var idx = Number(actionIdx);
        sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
        return sanitizedActions;
    }, {});
}
/**
 * Sanitizes given action with given function.
 */
function sanitizeAction(actionSanitizer, action, actionIdx) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action, { action: actionSanitizer(action.action, actionIdx) });
}
/**
 * Sanitizes given states with given function.
 */
function sanitizeStates(stateSanitizer, states) {
    return states.map(function (computedState, idx) { return ({
        state: sanitizeState(stateSanitizer, computedState.state, idx),
        error: computedState.error,
    }); });
}
/**
 * Sanitizes given state with given function.
 */
function sanitizeState(stateSanitizer, state, stateIdx) {
    return stateSanitizer(state, stateIdx);
}
/**
 * Read the config and tell if actions should be filtered
 */
function shouldFilterActions(config) {
    return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
/**
 * Return a full filtered lifted state
 */
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
    var filteredStagedActionIds = [];
    var filteredActionsById = {};
    var filteredComputedStates = [];
    liftedState.stagedActionIds.forEach(function (id, idx) {
        var liftedAction = liftedState.actionsById[id];
        if (!liftedAction)
            return;
        if (idx &&
            isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
            return;
        }
        filteredActionsById[id] = liftedAction;
        filteredStagedActionIds.push(id);
        filteredComputedStates.push(liftedState.computedStates[idx]);
    });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, liftedState, { stagedActionIds: filteredStagedActionIds, actionsById: filteredActionsById, computedStates: filteredComputedStates });
}
/**
 * Return true is the action should be ignored
 */
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
    var predicateMatch = predicate && !predicate(state, action.action);
    var safelistMatch = safelist && !action.action.type.match(safelist.join('|'));
    var blocklistMatch = blockedlist && action.action.type.match(blockedlist.join('|'));
    return predicateMatch || safelistMatch || blocklistMatch;
}

var DevtoolsDispatcher = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevtoolsDispatcher, _super);
    function DevtoolsDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevtoolsDispatcher = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DevtoolsDispatcher);
    return DevtoolsDispatcher;
}(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ActionsSubject"]));

var ExtensionActionTypes = {
    START: 'START',
    DISPATCH: 'DISPATCH',
    STOP: 'STOP',
    ACTION: 'ACTION',
};
var REDUX_DEVTOOLS_EXTENSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Redux Devtools Extension');
var DevtoolsExtension = /** @class */ (function () {
    function DevtoolsExtension(devtoolsExtension, config, dispatcher) {
        this.config = config;
        this.dispatcher = dispatcher;
        this.devtoolsExtension = devtoolsExtension;
        this.createActionStreams();
    }
    DevtoolsExtension.prototype.notify = function (action, state) {
        var _this = this;
        if (!this.devtoolsExtension) {
            return;
        }
        // Check to see if the action requires a full update of the liftedState.
        // If it is a simple action generated by the user's app and the recording
        // is not locked/paused, only send the action and the current state (fast).
        //
        // A full liftedState update (slow: serializes the entire liftedState) is
        // only required when:
        //   a) redux-devtools-extension fires the @@Init action (ignored by
        //      @ngrx/store-devtools)
        //   b) an action is generated by an @ngrx module (e.g. @ngrx/effects/init
        //      or @ngrx/store/update-reducers)
        //   c) the state has been recomputed due to time-traveling
        //   d) any action that is not a PerformAction to err on the side of
        //      caution.
        if (action.type === PERFORM_ACTION) {
            if (state.isLocked || state.isPaused) {
                return;
            }
            var currentState = unliftState(state);
            if (shouldFilterActions(this.config) &&
                isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
                return;
            }
            var sanitizedState_1 = this.config.stateSanitizer
                ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex)
                : currentState;
            var sanitizedAction_1 = this.config.actionSanitizer
                ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId)
                : action;
            this.sendToReduxDevtools(function () {
                return _this.extensionConnection.send(sanitizedAction_1, sanitizedState_1);
            });
        }
        else {
            // Requires full state update
            var sanitizedLiftedState_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state, { stagedActionIds: state.stagedActionIds, actionsById: this.config.actionSanitizer
                    ? sanitizeActions(this.config.actionSanitizer, state.actionsById)
                    : state.actionsById, computedStates: this.config.stateSanitizer
                    ? sanitizeStates(this.config.stateSanitizer, state.computedStates)
                    : state.computedStates });
            this.sendToReduxDevtools(function () {
                return _this.devtoolsExtension.send(null, sanitizedLiftedState_1, _this.getExtensionConfig(_this.config));
            });
        }
    };
    DevtoolsExtension.prototype.createChangesObservable = function () {
        var _this = this;
        if (!this.devtoolsExtension) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
            var connection = _this.devtoolsExtension.connect(_this.getExtensionConfig(_this.config));
            _this.extensionConnection = connection;
            connection.init();
            connection.subscribe(function (change) { return subscriber.next(change); });
            return connection.unsubscribe;
        });
    };
    DevtoolsExtension.prototype.createActionStreams = function () {
        var _this = this;
        // Listens to all changes
        var changes$ = this.createChangesObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        // Listen for the start action
        var start$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (change) { return change.type === ExtensionActionTypes.START; }));
        // Listen for the stop action
        var stop$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (change) { return change.type === ExtensionActionTypes.STOP; }));
        // Listen for lifted actions
        var liftedActions$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (change) { return change.type === ExtensionActionTypes.DISPATCH; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (change) { return _this.unwrapAction(change.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (action) {
            if (action.type === IMPORT_STATE) {
                // State imports may happen in two situations:
                // 1. Explicitly by user
                // 2. User activated the "persist state accross reloads" option
                //    and now the state is imported during reload.
                // Because of option 2, we need to give possible
                // lazy loaded reducers time to instantiate.
                // As soon as there is no UPDATE action within 1 second,
                // it is assumed that all reducers are loaded.
                return _this.dispatcher.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (action) { return action.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(action); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(action);
            }
        }));
        // Listen for unlifted actions
        var actions$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (change) { return change.type === ExtensionActionTypes.ACTION; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (change) { return _this.unwrapAction(change.payload); }));
        var actionsUntilStop$ = actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stop$));
        var liftedUntilStop$ = liftedActions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stop$));
        this.start$ = start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stop$));
        // Only take the action sources between the start/stop events
        this.actions$ = this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return actionsUntilStop$; }));
        this.liftedActions$ = this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return liftedUntilStop$; }));
    };
    DevtoolsExtension.prototype.unwrapAction = function (action) {
        return typeof action === 'string' ? eval("(" + action + ")") : action;
    };
    DevtoolsExtension.prototype.getExtensionConfig = function (config) {
        var extensionOptions = {
            name: config.name,
            features: config.features,
            serialize: config.serialize,
        };
        if (config.maxAge !== false /* support === 0 */) {
            extensionOptions.maxAge = config.maxAge;
        }
        return extensionOptions;
    };
    DevtoolsExtension.prototype.sendToReduxDevtools = function (send) {
        try {
            send();
        }
        catch (err) {
            console.warn('@ngrx/store-devtools: something went wrong inside the redux devtools', err);
        }
    };
    DevtoolsExtension = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REDUX_DEVTOOLS_EXTENSION)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(STORE_DEVTOOLS_CONFIG)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, StoreDevtoolsConfig,
            DevtoolsDispatcher])
    ], DevtoolsExtension);
    return DevtoolsExtension;
}());

var INIT_ACTION = { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["INIT"] };
var RECOMPUTE = '@ngrx/store-devtools/recompute';
var RECOMPUTE_ACTION = { type: RECOMPUTE };
/**
 * Computes the next entry in the log by applying an action.
 */
function computeNextEntry(reducer, action, state, error, errorHandler) {
    if (error) {
        return {
            state: state,
            error: 'Interrupted by an error up the chain',
        };
    }
    var nextState = state;
    var nextError;
    try {
        nextState = reducer(state, action);
    }
    catch (err) {
        nextError = err.toString();
        errorHandler.handleError(err.stack || err);
    }
    return {
        state: nextState,
        error: nextError,
    };
}
/**
 * Runs the reducer on invalidated actions to get a fresh computation log.
 */
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
    // Optimization: exit early and return the same reference
    // if we know nothing could have changed.
    if (minInvalidatedStateIndex >= computedStates.length &&
        computedStates.length === stagedActionIds.length) {
        return computedStates;
    }
    var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
    // If the recording is paused, recompute all states up until the pause state,
    // else recompute all states.
    var lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
    for (var i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
        var actionId = stagedActionIds[i];
        var action = actionsById[actionId].action;
        var previousEntry = nextComputedStates[i - 1];
        var previousState = previousEntry ? previousEntry.state : committedState;
        var previousError = previousEntry ? previousEntry.error : undefined;
        var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
        var entry = shouldSkip
            ? previousEntry
            : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
        nextComputedStates.push(entry);
    }
    // If the recording is paused, the last state will not be recomputed,
    // because it's essentially not part of the state history.
    if (isPaused) {
        nextComputedStates.push(computedStates[computedStates.length - 1]);
    }
    return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
    return {
        monitorState: monitorReducer(undefined, {}),
        nextActionId: 1,
        actionsById: { 0: liftAction(INIT_ACTION) },
        stagedActionIds: [0],
        skippedActionIds: [],
        committedState: initialCommittedState,
        currentStateIndex: 0,
        computedStates: [],
        isLocked: false,
        isPaused: false,
    };
}
/**
 * Creates a history state reducer from an app's reducer.
 */
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options) {
    if (options === void 0) { options = {}; }
    /**
     * Manages how the history actions modify the history state.
     */
    return function (reducer) { return function (liftedState, liftedAction) {
        var _a;
        var _b = liftedState || initialLiftedState, monitorState = _b.monitorState, actionsById = _b.actionsById, nextActionId = _b.nextActionId, stagedActionIds = _b.stagedActionIds, skippedActionIds = _b.skippedActionIds, committedState = _b.committedState, currentStateIndex = _b.currentStateIndex, computedStates = _b.computedStates, isLocked = _b.isLocked, isPaused = _b.isPaused;
        if (!liftedState) {
            // Prevent mutating initialLiftedState
            actionsById = Object.create(actionsById);
        }
        function commitExcessActions(n) {
            // Auto-commits n-number of excess actions.
            var excess = n;
            var idsToDelete = stagedActionIds.slice(1, excess + 1);
            for (var i = 0; i < idsToDelete.length; i++) {
                if (computedStates[i + 1].error) {
                    // Stop if error is found. Commit actions up to error.
                    excess = i;
                    idsToDelete = stagedActionIds.slice(1, excess + 1);
                    break;
                }
                else {
                    delete actionsById[idsToDelete[i]];
                }
            }
            skippedActionIds = skippedActionIds.filter(function (id) { return idsToDelete.indexOf(id) === -1; });
            stagedActionIds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([0], stagedActionIds.slice(excess + 1));
            committedState = computedStates[excess].state;
            computedStates = computedStates.slice(excess);
            currentStateIndex =
                currentStateIndex > excess ? currentStateIndex - excess : 0;
        }
        function commitChanges() {
            // Consider the last committed state the new starting point.
            // Squash any staged actions into a single committed state.
            actionsById = { 0: liftAction(INIT_ACTION) };
            nextActionId = 1;
            stagedActionIds = [0];
            skippedActionIds = [];
            committedState = computedStates[currentStateIndex].state;
            currentStateIndex = 0;
            computedStates = [];
        }
        // By default, aggressively recompute every state whatever happens.
        // This has O(n) performance, so we'll override this to a sensible
        // value whenever we feel like we don't have to recompute the states.
        var minInvalidatedStateIndex = 0;
        switch (liftedAction.type) {
            case LOCK_CHANGES: {
                isLocked = liftedAction.status;
                minInvalidatedStateIndex = Infinity;
                break;
            }
            case PAUSE_RECORDING: {
                isPaused = liftedAction.status;
                if (isPaused) {
                    // Add a pause action to signal the devtools-user the recording is paused.
                    // The corresponding state will be overwritten on each update to always contain
                    // the latest state (see Actions.PERFORM_ACTION).
                    stagedActionIds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stagedActionIds, [nextActionId]);
                    actionsById[nextActionId] = new PerformAction({
                        type: '@ngrx/devtools/pause',
                    }, +Date.now());
                    nextActionId++;
                    minInvalidatedStateIndex = stagedActionIds.length - 1;
                    computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
                    if (currentStateIndex === stagedActionIds.length - 2) {
                        currentStateIndex++;
                    }
                    minInvalidatedStateIndex = Infinity;
                }
                else {
                    commitChanges();
                }
                break;
            }
            case RESET: {
                // Get back to the state the store was created with.
                actionsById = { 0: liftAction(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                committedState = initialCommittedState;
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case COMMIT: {
                commitChanges();
                break;
            }
            case ROLLBACK: {
                // Forget about any staged actions.
                // Start again from the last committed state.
                actionsById = { 0: liftAction(INIT_ACTION) };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                currentStateIndex = 0;
                computedStates = [];
                break;
            }
            case TOGGLE_ACTION: {
                // Toggle whether an action with given ID is skipped.
                // Being skipped means it is a no-op during the computation.
                var actionId_1 = liftedAction.id;
                var index = skippedActionIds.indexOf(actionId_1);
                if (index === -1) {
                    skippedActionIds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([actionId_1], skippedActionIds);
                }
                else {
                    skippedActionIds = skippedActionIds.filter(function (id) { return id !== actionId_1; });
                }
                // Optimization: we know history before this action hasn't changed
                minInvalidatedStateIndex = stagedActionIds.indexOf(actionId_1);
                break;
            }
            case SET_ACTIONS_ACTIVE: {
                // Toggle whether an action with given ID is skipped.
                // Being skipped means it is a no-op during the computation.
                var start = liftedAction.start, end = liftedAction.end, active = liftedAction.active;
                var actionIds = [];
                for (var i = start; i < end; i++)
                    actionIds.push(i);
                if (active) {
                    skippedActionIds = difference(skippedActionIds, actionIds);
                }
                else {
                    skippedActionIds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(skippedActionIds, actionIds);
                }
                // Optimization: we know history before this action hasn't changed
                minInvalidatedStateIndex = stagedActionIds.indexOf(start);
                break;
            }
            case JUMP_TO_STATE: {
                // Without recomputing anything, move the pointer that tell us
                // which state is considered the current one. Useful for sliders.
                currentStateIndex = liftedAction.index;
                // Optimization: we know the history has not changed.
                minInvalidatedStateIndex = Infinity;
                break;
            }
            case JUMP_TO_ACTION: {
                // Jumps to a corresponding state to a specific action.
                // Useful when filtering actions.
                var index = stagedActionIds.indexOf(liftedAction.actionId);
                if (index !== -1)
                    currentStateIndex = index;
                minInvalidatedStateIndex = Infinity;
                break;
            }
            case SWEEP: {
                // Forget any actions that are currently being skipped.
                stagedActionIds = difference(stagedActionIds, skippedActionIds);
                skippedActionIds = [];
                currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
                break;
            }
            case PERFORM_ACTION: {
                // Ignore action and return state as is if recording is locked
                if (isLocked) {
                    return liftedState || initialLiftedState;
                }
                if (isPaused ||
                    (liftedState &&
                        isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist))) {
                    // If recording is paused or if the action should be ignored, overwrite the last state
                    // (corresponds to the pause action) and keep everything else as is.
                    // This way, the app gets the new current state while the devtools
                    // do not record another action.
                    var lastState = computedStates[computedStates.length - 1];
                    computedStates = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(computedStates.slice(0, -1), [
                        computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler),
                    ]);
                    minInvalidatedStateIndex = Infinity;
                    break;
                }
                // Auto-commit as new actions come in.
                if (options.maxAge && stagedActionIds.length === options.maxAge) {
                    commitExcessActions(1);
                }
                if (currentStateIndex === stagedActionIds.length - 1) {
                    currentStateIndex++;
                }
                var actionId = nextActionId++;
                // Mutation! This is the hottest path, and we optimize on purpose.
                // It is safe because we set a new key in a cache dictionary.
                actionsById[actionId] = liftedAction;
                stagedActionIds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stagedActionIds, [actionId]);
                // Optimization: we know that only the new action needs computing.
                minInvalidatedStateIndex = stagedActionIds.length - 1;
                break;
            }
            case IMPORT_STATE: {
                // Completely replace everything.
                (_a = liftedAction.nextLiftedState, monitorState = _a.monitorState, actionsById = _a.actionsById, nextActionId = _a.nextActionId, stagedActionIds = _a.stagedActionIds, skippedActionIds = _a.skippedActionIds, committedState = _a.committedState, currentStateIndex = _a.currentStateIndex, computedStates = _a.computedStates, isLocked = _a.isLocked, 
                // prettier-ignore
                isPaused = _a.isPaused);
                break;
            }
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["INIT"]: {
                // Always recompute states on hot reload and init.
                minInvalidatedStateIndex = 0;
                if (options.maxAge && stagedActionIds.length > options.maxAge) {
                    // States must be recomputed before committing excess.
                    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
                    commitExcessActions(stagedActionIds.length - options.maxAge);
                    // Avoid double computation.
                    minInvalidatedStateIndex = Infinity;
                }
                break;
            }
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]: {
                var stateHasErrors = computedStates.filter(function (state) { return state.error; }).length > 0;
                if (stateHasErrors) {
                    // Recompute all states
                    minInvalidatedStateIndex = 0;
                    if (options.maxAge && stagedActionIds.length > options.maxAge) {
                        // States must be recomputed before committing excess.
                        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
                        commitExcessActions(stagedActionIds.length - options.maxAge);
                        // Avoid double computation.
                        minInvalidatedStateIndex = Infinity;
                    }
                }
                else {
                    // If not paused/locked, add a new action to signal devtools-user
                    // that there was a reducer update.
                    if (!isPaused && !isLocked) {
                        if (currentStateIndex === stagedActionIds.length - 1) {
                            currentStateIndex++;
                        }
                        // Add a new action to only recompute state
                        var actionId = nextActionId++;
                        actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
                        stagedActionIds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stagedActionIds, [actionId]);
                        minInvalidatedStateIndex = stagedActionIds.length - 1;
                        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
                    }
                    // Recompute state history with latest reducer and update action
                    computedStates = computedStates.map(function (cmp) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cmp, { state: reducer(cmp.state, RECOMPUTE_ACTION) })); });
                    currentStateIndex = stagedActionIds.length - 1;
                    if (options.maxAge && stagedActionIds.length > options.maxAge) {
                        commitExcessActions(stagedActionIds.length - options.maxAge);
                    }
                    // Avoid double computation.
                    minInvalidatedStateIndex = Infinity;
                }
                break;
            }
            default: {
                // If the action is not recognized, it's a monitor action.
                // Optimization: a monitor action can't change history.
                minInvalidatedStateIndex = Infinity;
                break;
            }
        }
        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
        monitorState = monitorReducer(monitorState, liftedAction);
        return {
            monitorState: monitorState,
            actionsById: actionsById,
            nextActionId: nextActionId,
            stagedActionIds: stagedActionIds,
            skippedActionIds: skippedActionIds,
            committedState: committedState,
            currentStateIndex: currentStateIndex,
            computedStates: computedStates,
            isLocked: isLocked,
            isPaused: isPaused,
        };
    }; };
}

var StoreDevtools = /** @class */ (function () {
    function StoreDevtools(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState, config) {
        var _this = this;
        var liftedInitialState = liftInitialState(initialState, config.monitor);
        var liftReducer = liftReducerWith(initialState, liftedInitialState, errorHandler, config.monitor, config);
        var liftedAction$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(actions$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(1)), extension.actions$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(liftAction)), dispatcher, extension.liftedActions$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_3__["queueScheduler"]));
        var liftedReducer$ = reducers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(liftReducer));
        var liftedStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        var liftedStateSubscription = liftedAction$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(liftedReducer$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (_a, _b) {
            var liftedState = _a.state;
            var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b, 2), action = _c[0], reducer = _c[1];
            var reducedLiftedState = reducer(liftedState, action);
            // On full state update
            // If we have actions filters, we must filter completly our lifted state to be sync with the extension
            if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
                reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
            }
            // Extension should be sent the sanitized lifted state
            extension.notify(action, reducedLiftedState);
            return { state: reducedLiftedState, action: action };
        }, { state: liftedInitialState, action: null }))
            .subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            liftedStateSubject.next(state);
            if (action.type === PERFORM_ACTION) {
                var unliftedAction = action.action;
                scannedActions.next(unliftedAction);
            }
        });
        var extensionStartSubscription = extension.start$.subscribe(function () {
            _this.refresh();
        });
        var liftedState$ = liftedStateSubject.asObservable();
        var state$ = liftedState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(unliftState));
        this.extensionStartSubscription = extensionStartSubscription;
        this.stateSubscription = liftedStateSubscription;
        this.dispatcher = dispatcher;
        this.liftedState = liftedState$;
        this.state = state$;
    }
    StoreDevtools.prototype.dispatch = function (action) {
        this.dispatcher.next(action);
    };
    StoreDevtools.prototype.next = function (action) {
        this.dispatcher.next(action);
    };
    StoreDevtools.prototype.error = function (error) { };
    StoreDevtools.prototype.complete = function () { };
    StoreDevtools.prototype.performAction = function (action) {
        this.dispatch(new PerformAction(action, +Date.now()));
    };
    StoreDevtools.prototype.refresh = function () {
        this.dispatch(new Refresh());
    };
    StoreDevtools.prototype.reset = function () {
        this.dispatch(new Reset(+Date.now()));
    };
    StoreDevtools.prototype.rollback = function () {
        this.dispatch(new Rollback(+Date.now()));
    };
    StoreDevtools.prototype.commit = function () {
        this.dispatch(new Commit(+Date.now()));
    };
    StoreDevtools.prototype.sweep = function () {
        this.dispatch(new Sweep());
    };
    StoreDevtools.prototype.toggleAction = function (id) {
        this.dispatch(new ToggleAction(id));
    };
    StoreDevtools.prototype.jumpToAction = function (actionId) {
        this.dispatch(new JumpToAction(actionId));
    };
    StoreDevtools.prototype.jumpToState = function (index) {
        this.dispatch(new JumpToState(index));
    };
    StoreDevtools.prototype.importState = function (nextLiftedState) {
        this.dispatch(new ImportState(nextLiftedState));
    };
    StoreDevtools.prototype.lockChanges = function (status) {
        this.dispatch(new LockChanges(status));
    };
    StoreDevtools.prototype.pauseRecording = function (status) {
        this.dispatch(new PauseRecording(status));
    };
    StoreDevtools = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["INITIAL_STATE"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(STORE_DEVTOOLS_CONFIG)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DevtoolsDispatcher,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ActionsSubject"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ReducerObservable"],
            DevtoolsExtension,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ScannedActionsSubject"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], Object, StoreDevtoolsConfig])
    ], StoreDevtools);
    return StoreDevtools;
}());

var IS_EXTENSION_OR_MONITOR_PRESENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Is Devtools Extension or Monitor Present');
function createIsExtensionOrMonitorPresent(extension, config) {
    return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
    var extensionKey = '__REDUX_DEVTOOLS_EXTENSION__';
    if (typeof window === 'object' &&
        typeof window[extensionKey] !== 'undefined') {
        return window[extensionKey];
    }
    else {
        return null;
    }
}
function createStateObservable(devtools) {
    return devtools.state;
}
var StoreDevtoolsModule = /** @class */ (function () {
    function StoreDevtoolsModule() {
    }
    StoreDevtoolsModule_1 = StoreDevtoolsModule;
    StoreDevtoolsModule.instrument = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: StoreDevtoolsModule_1,
            providers: [
                DevtoolsExtension,
                DevtoolsDispatcher,
                StoreDevtools,
                {
                    provide: INITIAL_OPTIONS,
                    useValue: options,
                },
                {
                    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
                    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
                    useFactory: createIsExtensionOrMonitorPresent,
                },
                {
                    provide: REDUX_DEVTOOLS_EXTENSION,
                    useFactory: createReduxDevtoolsExtension,
                },
                {
                    provide: STORE_DEVTOOLS_CONFIG,
                    deps: [INITIAL_OPTIONS],
                    useFactory: createConfig,
                },
                {
                    provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StateObservable"],
                    deps: [StoreDevtools],
                    useFactory: createStateObservable,
                },
                {
                    provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ReducerManagerDispatcher"],
                    useExisting: DevtoolsDispatcher,
                },
            ],
        };
    };
    var StoreDevtoolsModule_1;
    StoreDevtoolsModule = StoreDevtoolsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
    ], StoreDevtoolsModule);
    return StoreDevtoolsModule;
}());

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=store-devtools.js.map


/***/ }),

/***/ "./node_modules/@ngrx/store/fesm5/store.js":
/*!*************************************************!*\
  !*** ./node_modules/@ngrx/store/fesm5/store.js ***!
  \*************************************************/
/*! exports provided: ɵngrx_modules_store_store_c, ɵngrx_modules_store_store_d, ɵngrx_modules_store_store_bb, ɵngrx_modules_store_store_x, ɵngrx_modules_store_store_z, ɵngrx_modules_store_store_y, ɵngrx_modules_store_store_ba, ɵngrx_modules_store_store_e, ɵngrx_modules_store_store_f, ɵngrx_modules_store_store_g, ɵngrx_modules_store_store_b, ɵngrx_modules_store_store_w, ɵngrx_modules_store_store_u, ɵngrx_modules_store_store_t, ɵngrx_modules_store_store_s, ɵngrx_modules_store_store_v, ɵngrx_modules_store_store_r, ɵngrx_modules_store_store_m, ɵngrx_modules_store_store_l, ɵngrx_modules_store_store_o, ɵngrx_modules_store_store_j, ɵngrx_modules_store_store_h, ɵngrx_modules_store_store_i, ɵngrx_modules_store_store_p, ɵngrx_modules_store_store_n, ɵngrx_modules_store_store_k, ɵngrx_modules_store_store_q, createAction, props, union, Store, select, combineReducers, compose, createReducerFactory, ActionsSubject, INIT, ReducerManager, ReducerObservable, ReducerManagerDispatcher, UPDATE, ScannedActionsSubject, createSelector, createSelectorFactory, createFeatureSelector, defaultMemoize, defaultStateFn, resultMemoize, State, StateObservable, reduceState, INITIAL_STATE, REDUCER_FACTORY, INITIAL_REDUCERS, STORE_FEATURES, META_REDUCERS, FEATURE_REDUCERS, USER_PROVIDED_META_REDUCERS, USER_RUNTIME_CHECKS, StoreModule, StoreRootModule, StoreFeatureModule, on, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_c", function() { return ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_d", function() { return REDUCER_MANAGER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_bb", function() { return _runtimeChecksFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_x", function() { return createActiveRuntimeChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_z", function() { return createImmutabilityCheckMetaReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_y", function() { return createSerializationCheckMetaReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_ba", function() { return provideRuntimeChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_e", function() { return SCANNED_ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_f", function() { return isEqualCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_g", function() { return STATE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_b", function() { return STORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_w", function() { return _concatMetaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_u", function() { return _createFeatureReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_t", function() { return _createFeatureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_s", function() { return _createStoreReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_v", function() { return _initialStateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_r", function() { return _ACTIVE_RUNTIME_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_m", function() { return _FEATURE_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_l", function() { return _FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_o", function() { return _FEATURE_REDUCERS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_j", function() { return _INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_h", function() { return _INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_i", function() { return _REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_p", function() { return _RESOLVED_META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_n", function() { return _STORE_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_k", function() { return _STORE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_q", function() { return _USER_RUNTIME_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducerFactory", function() { return createReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsSubject", function() { return ActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManager", function() { return ReducerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerObservable", function() { return ReducerObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManagerDispatcher", function() { return ReducerManagerDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannedActionsSubject", function() { return ScannedActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorFactory", function() { return createSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureSelector", function() { return createFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStateFn", function() { return defaultStateFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultMemoize", function() { return resultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateObservable", function() { return StateObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceState", function() { return reduceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_FACTORY", function() { return REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_REDUCERS", function() { return INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FEATURES", function() { return STORE_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_REDUCERS", function() { return META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_REDUCERS", function() { return FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROVIDED_META_REDUCERS", function() { return USER_PROVIDED_META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_RUNTIME_CHECKS", function() { return USER_RUNTIME_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRootModule", function() { return StoreRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFeatureModule", function() { return StoreFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license NgRx 8.3.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */





/**
 * @description
 * Creates a configured `Creator` function that, when called, returns an object in the shape of the `Action` interface.
 *
 * Action creators reduce the explicitness of class-based action creators.
 *
 * @param type Describes the action that will be dispatched
 * @param config Additional metadata needed for the handling of the action.  See {@link createAction#usage-notes Usage Notes}.
 *
 * @usageNotes
 *
 * **Declaring an action creator**
 *
 * Without additional metadata:
 * ```ts
 * export const increment = createAction('[Counter] Increment');
 * ```
 * With additional metadata:
 * ```ts
 * export const loginSuccess = createAction(
 *   '[Auth/API] Login Success',
 *   props<{ user: User }>()
 * );
 * ```
 * With a function:
 * ```ts
 * export const loginSuccess = createAction(
 *   '[Auth/API] Login Success',
 *   (response: Response) => response.user
 * );
 * ```
 *
 * **Dispatching an action**
 *
 * Without additional metadata:
 * ```ts
 * store.dispatch(increment());
 * ```
 * With additional metadata:
 * ```ts
 * store.dispatch(loginSuccess({ user: newUser }));
 * ```
 *
 * **Referencing an action in a reducer**
 *
 * Using a switch statement:
 * ```ts
 * switch (action.type) {
 *   // ...
 *   case AuthApiActions.loginSuccess.type: {
 *     return {
 *       ...state,
 *       user: action.user
 *     };
 *   }
 * }
 * ```
 * Using a reducer creator:
 * ```ts
 * on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
 * ```
 *
 *  **Referencing an action in an effect**
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(AuthApiActions.loginSuccess),
 *     // ...
 *   )
 * );
 * ```
 */
function createAction(type, config) {
    if (typeof config === 'function') {
        return defineType(type, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args)), { type: type }));
        });
    }
    var as = config ? config._as : 'empty';
    switch (as) {
        case 'empty':
            return defineType(type, function () { return ({ type: type }); });
        case 'props':
            return defineType(type, function (props) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { type: type })); });
        default:
            throw new Error('Unexpected config.');
    }
}
function props() {
    // the return type does not match TypePropertyIsNotAllowed, so double casting
    // is used.
    return { _as: 'props', _p: undefined };
}
function union(creators) {
    return undefined;
}
function defineType(type, creator) {
    return Object.defineProperty(creator, 'type', {
        value: type,
        writable: false,
    });
}

var INIT = '@ngrx/store/init';
var ActionsSubject = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ActionsSubject, _super);
    function ActionsSubject() {
        return _super.call(this, { type: INIT }) || this;
    }
    ActionsSubject.prototype.next = function (action) {
        if (typeof action === 'function') {
            throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");
        }
        else if (typeof action === 'undefined') {
            throw new TypeError("Actions must be objects");
        }
        else if (typeof action.type === 'undefined') {
            throw new TypeError("Actions must have a type property");
        }
        _super.prototype.next.call(this, action);
    };
    ActionsSubject.prototype.complete = function () {
        /* noop */
    };
    ActionsSubject.prototype.ngOnDestroy = function () {
        _super.prototype.complete.call(this);
    };
    ActionsSubject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ActionsSubject);
    return ActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];

var _INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Initial State');
var INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Initial State');
var REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Reducer Factory');
var _REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Reducer Factory Provider');
var INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Initial Reducers');
var _INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Initial Reducers');
var STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Store Features');
var _STORE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Store Reducers');
var _FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Feature Reducers');
var _FEATURE_CONFIGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Feature Configs');
var _STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Store Features');
var _FEATURE_REDUCERS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Feature Reducers Token');
var FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Feature Reducers');
/**
 * User-defined meta reducers from StoreModule.forRoot()
 */
var USER_PROVIDED_META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store User Provided Meta Reducers');
/**
 * Meta reducers defined either internally by @ngrx/store or by library authors
 */
var META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Meta Reducers');
/**
 * Concats the user provided meta reducers and the meta reducers provided on the multi
 * injection token
 */
var _RESOLVED_META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Resolved Meta Reducers');
/**
 * Runtime checks defined by the user via an InjectionToken
 * Defaults to `_USER_RUNTIME_CHECKS`
 */
var USER_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store User Runtime Checks Config');
/**
 * Runtime checks defined by the user via forRoot()
 */
var _USER_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal User Runtime Checks Config');
/**
 * Runtime checks currently in use
 */
var _ACTIVE_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Runtime Checks');

function combineReducers(reducers, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state === undefined ? initialState : state;
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (result, key) {
        var _a;
        return Object.assign(result, (_a = {}, _a[key] = object[key], _a));
    }, {});
}
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
}
function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        reducerFactory = compose.apply(null, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(metaReducers, [
            reducerFactory,
        ]));
    }
    return function (reducers, initialState) {
        var reducer = reducerFactory(reducers);
        return function (state, action) {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}
function createFeatureReducerFactory(metaReducers) {
    var reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0
        ? compose.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(metaReducers)) : function (r) { return r; };
    return function (reducer, initialState) {
        reducer = reducerFactory(reducer);
        return function (state, action) {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}

var ReducerObservable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReducerObservable, _super);
    function ReducerObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
var ReducerManagerDispatcher = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReducerManagerDispatcher, _super);
    function ReducerManagerDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerManagerDispatcher;
}(ActionsSubject));
var UPDATE = '@ngrx/store/update-reducers';
var ReducerManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReducerManager, _super);
    function ReducerManager(dispatcher, initialState, reducers, reducerFactory) {
        var _this = _super.call(this, reducerFactory(reducers, initialState)) || this;
        _this.dispatcher = dispatcher;
        _this.initialState = initialState;
        _this.reducers = reducers;
        _this.reducerFactory = reducerFactory;
        return _this;
    }
    ReducerManager.prototype.addFeature = function (feature) {
        this.addFeatures([feature]);
    };
    ReducerManager.prototype.addFeatures = function (features) {
        var reducers = features.reduce(function (reducerDict, _a) {
            var reducers = _a.reducers, reducerFactory = _a.reducerFactory, metaReducers = _a.metaReducers, initialState = _a.initialState, key = _a.key;
            var reducer = typeof reducers === 'function'
                ? createFeatureReducerFactory(metaReducers)(reducers, initialState)
                : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
            reducerDict[key] = reducer;
            return reducerDict;
        }, {});
        this.addReducers(reducers);
    };
    ReducerManager.prototype.removeFeature = function (feature) {
        this.removeFeatures([feature]);
    };
    ReducerManager.prototype.removeFeatures = function (features) {
        this.removeReducers(features.map(function (p) { return p.key; }));
    };
    ReducerManager.prototype.addReducer = function (key, reducer) {
        var _a;
        this.addReducers((_a = {}, _a[key] = reducer, _a));
    };
    ReducerManager.prototype.addReducers = function (reducers) {
        this.reducers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.reducers, reducers);
        this.updateReducers(Object.keys(reducers));
    };
    ReducerManager.prototype.removeReducer = function (featureKey) {
        this.removeReducers([featureKey]);
    };
    ReducerManager.prototype.removeReducers = function (featureKeys) {
        var _this = this;
        featureKeys.forEach(function (key) {
            _this.reducers = omit(_this.reducers, key) /*TODO(#823)*/;
        });
        this.updateReducers(featureKeys);
    };
    ReducerManager.prototype.updateReducers = function (featureKeys) {
        this.next(this.reducerFactory(this.reducers, this.initialState));
        this.dispatcher.next({
            type: UPDATE,
            features: featureKeys,
        });
    };
    ReducerManager.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ReducerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INITIAL_STATE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INITIAL_REDUCERS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REDUCER_FACTORY)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ReducerManagerDispatcher, Object, Object, Function])
    ], ReducerManager);
    return ReducerManager;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));
var REDUCER_MANAGER_PROVIDERS = [
    ReducerManager,
    { provide: ReducerObservable, useExisting: ReducerManager },
    { provide: ReducerManagerDispatcher, useExisting: ActionsSubject },
];

var ScannedActionsSubject = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ScannedActionsSubject, _super);
    function ScannedActionsSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScannedActionsSubject.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ScannedActionsSubject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ScannedActionsSubject);
    return ScannedActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]));
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [
    ScannedActionsSubject,
];

var StateObservable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateObservable, _super);
    function StateObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
var State = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(State, _super);
    function State(actions$, reducer$, scannedActions, initialState) {
        var _this = _super.call(this, initialState) || this;
        var actionsOnQueue$ = actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["queueScheduler"]));
        var withLatestReducer$ = actionsOnQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(reducer$));
        var seed = { state: initialState };
        var stateAndAction$ = withLatestReducer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(reduceState, seed));
        _this.stateSubscription = stateAndAction$.subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            _this.next(state);
            scannedActions.next(action);
        });
        return _this;
    }
    State.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.complete();
    };
    State.INIT = INIT;
    State = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INITIAL_STATE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ActionsSubject,
            ReducerObservable,
            ScannedActionsSubject, Object])
    ], State);
    return State;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));
function reduceState(stateActionPair, _a) {
    if (stateActionPair === void 0) { stateActionPair = { state: undefined }; }
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), action = _b[0], reducer = _b[1];
    var state = stateActionPair.state;
    return { state: reducer(state, action), action: action };
}
var STATE_PROVIDERS = [
    State,
    { provide: StateObservable, useExisting: State },
];

var Store = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Store, _super);
    function Store(state$, actionsObserver, reducerManager) {
        var _this = _super.call(this) || this;
        _this.actionsObserver = actionsObserver;
        _this.reducerManager = reducerManager;
        _this.source = state$;
        return _this;
    }
    Store_1 = Store;
    Store.prototype.select = function (pathOrMapFn) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return select.call.apply(select, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([null, pathOrMapFn], paths))(this);
    };
    Store.prototype.lift = function (operator) {
        var store = new Store_1(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    };
    Store.prototype.dispatch = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.next = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.error = function (err) {
        this.actionsObserver.error(err);
    };
    Store.prototype.complete = function () {
        this.actionsObserver.complete();
    };
    Store.prototype.addReducer = function (key, reducer) {
        this.reducerManager.addReducer(key, reducer);
    };
    Store.prototype.removeReducer = function (key) {
        this.reducerManager.removeReducer(key);
    };
    var Store_1;
    Store = Store_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [StateObservable,
            ActionsSubject,
            ReducerManager])
    ], Store);
    return Store;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath) {
    var paths = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        paths[_i - 2] = arguments[_i];
    }
    return function selectOperator(source$) {
        var mapped$;
        if (typeof pathOrMapFn === 'string') {
            var pathSlices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([propsOrPath], paths).filter(Boolean);
            mapped$ = source$.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([pathOrMapFn], pathSlices)));
        }
        else if (typeof pathOrMapFn === 'function') {
            mapped$ = source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (source) { return pathOrMapFn(source, propsOrPath); }));
        }
        else {
            throw new TypeError("Unexpected type '" + typeof pathOrMapFn + "' in select operator," +
                " expected 'string' or 'function'");
        }
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    };
}

function isEqualCheck(a, b) {
    return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
    for (var i = 0; i < args.length; i++) {
        if (!comparator(args[i], lastArguments[i])) {
            return true;
        }
    }
    return false;
}
function resultMemoize(projectionFn, isResultEqual) {
    return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual, isResultEqual) {
    if (isArgumentsEqual === void 0) { isArgumentsEqual = isEqualCheck; }
    if (isResultEqual === void 0) { isResultEqual = isEqualCheck; }
    var lastArguments = null;
    // tslint:disable-next-line:no-any anything could be the result.
    var lastResult = null;
    var overrideResult;
    function reset() {
        lastArguments = null;
        lastResult = null;
    }
    function setResult(result) {
        if (result === void 0) { result = undefined; }
        overrideResult = result;
    }
    // tslint:disable-next-line:no-any anything could be the result.
    function memoized() {
        if (overrideResult !== undefined) {
            return overrideResult;
        }
        if (!lastArguments) {
            lastResult = projectionFn.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
            return lastResult;
        }
        lastArguments = arguments;
        var newResult = projectionFn.apply(null, arguments);
        if (isResultEqual(lastResult, newResult)) {
            return lastResult;
        }
        lastResult = newResult;
        return newResult;
    }
    return { memoized: memoized, reset: reset, setResult: setResult };
}
function createSelector() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    return createSelectorFactory(defaultMemoize).apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input));
}
function defaultStateFn(state, selectors, props, memoizedProjector) {
    if (props === undefined) {
        var args_1 = selectors.map(function (fn) { return fn(state); });
        return memoizedProjector.memoized.apply(null, args_1);
    }
    var args = selectors.map(function (fn) {
        return fn(state, props);
    });
    return memoizedProjector.memoized.apply(null, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args, [props]));
}
function createSelectorFactory(memoize, options) {
    if (options === void 0) { options = {
        stateFn: defaultStateFn,
    }; }
    return function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var args = input;
        if (Array.isArray(args[0])) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), head = _a[0], tail = _a.slice(1);
            args = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(head, tail);
        }
        var selectors = args.slice(0, args.length - 1);
        var projector = args[args.length - 1];
        var memoizedSelectors = selectors.filter(function (selector) {
            return selector.release && typeof selector.release === 'function';
        });
        var memoizedProjector = memoize(function () {
            var selectors = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selectors[_i] = arguments[_i];
            }
            return projector.apply(null, selectors);
        });
        var memoizedState = defaultMemoize(function (state, props) {
            return options.stateFn.apply(null, [
                state,
                selectors,
                props,
                memoizedProjector,
            ]);
        });
        function release() {
            memoizedState.reset();
            memoizedProjector.reset();
            memoizedSelectors.forEach(function (selector) { return selector.release(); });
        }
        return Object.assign(memoizedState.memoized, {
            release: release,
            projector: memoizedProjector.memoized,
            setResult: memoizedState.setResult,
        });
    };
}
function createFeatureSelector(featureName) {
    return createSelector(function (state) {
        var featureState = state[featureName];
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && featureState === undefined) {
            console.warn("The feature name \"" + featureName + "\" does " +
                'not exist in the state, therefore createFeatureSelector ' +
                'cannot access it.  Be sure it is imported in a loaded module ' +
                ("using StoreModule.forRoot('" + featureName + "', ...) or ") +
                ("StoreModule.forFeature('" + featureName + "', ...).  If the default ") +
                'state is intended to be undefined, as is the case with router ' +
                'state, this development-only warning message can be ignored.');
        }
        return featureState;
    }, function (featureState) { return featureState; });
}

function isUndefined(target) {
    return target === undefined;
}
function isNull(target) {
    return target === null;
}
function isArray(target) {
    return Array.isArray(target);
}
function isString(target) {
    return typeof target === 'string';
}
function isBoolean(target) {
    return typeof target === 'boolean';
}
function isNumber(target) {
    return typeof target === 'number';
}
function isObjectLike(target) {
    return typeof target === 'object' && target !== null;
}
function isObject(target) {
    return isObjectLike(target) && !isArray(target);
}
function isPlainObject(target) {
    if (!isObject(target)) {
        return false;
    }
    var targetPrototype = Object.getPrototypeOf(target);
    return targetPrototype === Object.prototype || targetPrototype === null;
}
function isFunction(target) {
    return typeof target === 'function';
}
function hasOwnProperty(target, propertyName) {
    return Object.prototype.hasOwnProperty.call(target, propertyName);
}

function immutabilityCheckMetaReducer(reducer, checks) {
    return function (state, action) {
        var act = checks.action ? freeze(action) : action;
        var nextState = reducer(state, act);
        return checks.state ? freeze(nextState) : nextState;
    };
}
function freeze(target) {
    Object.freeze(target);
    var targetIsFunction = isFunction(target);
    Object.getOwnPropertyNames(target).forEach(function (prop) {
        if (hasOwnProperty(target, prop) &&
            (targetIsFunction
                ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
                : true)) {
            var propValue = target[prop];
            if ((isObjectLike(propValue) || isFunction(propValue)) &&
                !Object.isFrozen(propValue)) {
                freeze(propValue);
            }
        }
    });
    return target;
}

function serializationCheckMetaReducer(reducer, checks) {
    return function (state, action) {
        if (checks.action) {
            var unserializableAction = getUnserializable(action);
            throwIfUnserializable(unserializableAction, 'action');
        }
        var nextState = reducer(state, action);
        if (checks.state) {
            var unserializableState = getUnserializable(nextState);
            throwIfUnserializable(unserializableState, 'state');
        }
        return nextState;
    };
}
function getUnserializable(target, path) {
    if (path === void 0) { path = []; }
    // Guard against undefined and null, e.g. a reducer that returns undefined
    if ((isUndefined(target) || isNull(target)) && path.length === 0) {
        return {
            path: ['root'],
            value: target,
        };
    }
    var keys = Object.keys(target);
    return keys.reduce(function (result, key) {
        if (result) {
            return result;
        }
        var value = target[key];
        if (isUndefined(value) ||
            isNull(value) ||
            isNumber(value) ||
            isBoolean(value) ||
            isString(value) ||
            isArray(value)) {
            return false;
        }
        if (isPlainObject(value)) {
            return getUnserializable(value, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(path, [key]));
        }
        return {
            path: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(path, [key]),
            value: value,
        };
    }, false);
}
function throwIfUnserializable(unserializable, context) {
    if (unserializable === false) {
        return;
    }
    var unserializablePath = unserializable.path.join('.');
    var error = new Error("Detected unserializable " + context + " at \"" + unserializablePath + "\"");
    error.value = unserializable.value;
    error.unserializablePath = unserializablePath;
    throw error;
}

function createActiveRuntimeChecks(runtimeChecks) {
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
        if (runtimeChecks === undefined) {
            console.warn('@ngrx/store: runtime checks are currently opt-in but will be the default in the next major version with the possibility to opt-out, see https://ngrx.io/guide/migration/v8 for more information.');
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ strictStateSerializability: false, strictActionSerializability: false, strictStateImmutability: false, strictActionImmutability: false }, runtimeChecks);
    }
    return {
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictStateImmutability: false,
        strictActionImmutability: false,
    };
}
function createSerializationCheckMetaReducer(_a) {
    var strictActionSerializability = _a.strictActionSerializability, strictStateSerializability = _a.strictStateSerializability;
    return function (reducer) {
        return strictActionSerializability || strictStateSerializability
            ? serializationCheckMetaReducer(reducer, {
                action: strictActionSerializability,
                state: strictStateSerializability,
            })
            : reducer;
    };
}
function createImmutabilityCheckMetaReducer(_a) {
    var strictActionImmutability = _a.strictActionImmutability, strictStateImmutability = _a.strictStateImmutability;
    return function (reducer) {
        return strictActionImmutability || strictStateImmutability
            ? immutabilityCheckMetaReducer(reducer, {
                action: strictActionImmutability,
                state: strictStateImmutability,
            })
            : reducer;
    };
}
function provideRuntimeChecks(runtimeChecks) {
    return [
        {
            provide: _USER_RUNTIME_CHECKS,
            useValue: runtimeChecks,
        },
        {
            provide: USER_RUNTIME_CHECKS,
            useFactory: _runtimeChecksFactory,
            deps: [_USER_RUNTIME_CHECKS],
        },
        {
            provide: _ACTIVE_RUNTIME_CHECKS,
            deps: [USER_RUNTIME_CHECKS],
            useFactory: createActiveRuntimeChecks,
        },
        {
            provide: META_REDUCERS,
            multi: true,
            deps: [_ACTIVE_RUNTIME_CHECKS],
            useFactory: createImmutabilityCheckMetaReducer,
        },
        {
            provide: META_REDUCERS,
            multi: true,
            deps: [_ACTIVE_RUNTIME_CHECKS],
            useFactory: createSerializationCheckMetaReducer,
        },
    ];
}
function _runtimeChecksFactory(runtimeChecks) {
    return runtimeChecks;
}

var StoreRootModule = /** @class */ (function () {
    function StoreRootModule(actions$, reducer$, scannedActions$, store) {
    }
    StoreRootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ActionsSubject,
            ReducerObservable,
            ScannedActionsSubject,
            Store])
    ], StoreRootModule);
    return StoreRootModule;
}());
var StoreFeatureModule = /** @class */ (function () {
    function StoreFeatureModule(features, featureReducers, reducerManager, root) {
        this.features = features;
        this.featureReducers = featureReducers;
        this.reducerManager = reducerManager;
        var feats = features.map(function (feature, index) {
            var featureReducerCollection = featureReducers.shift();
            var reducers = featureReducerCollection /*TODO(#823)*/[index];
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, feature, { reducers: reducers, initialState: _initialStateFactory(feature.initialState) });
        });
        reducerManager.addFeatures(feats);
    }
    StoreFeatureModule.prototype.ngOnDestroy = function () {
        this.reducerManager.removeFeatures(this.features);
    };
    StoreFeatureModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_STORE_FEATURES)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(FEATURE_REDUCERS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array, ReducerManager,
            StoreRootModule])
    ], StoreFeatureModule);
    return StoreFeatureModule;
}());
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule.forRoot = function (reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRootModule,
            providers: [
                { provide: _INITIAL_STATE, useValue: config.initialState },
                {
                    provide: INITIAL_STATE,
                    useFactory: _initialStateFactory,
                    deps: [_INITIAL_STATE],
                },
                { provide: _INITIAL_REDUCERS, useValue: reducers },
                {
                    provide: _STORE_REDUCERS,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? reducers : _INITIAL_REDUCERS,
                },
                {
                    provide: INITIAL_REDUCERS,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _INITIAL_REDUCERS, [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](_STORE_REDUCERS)]],
                    useFactory: _createStoreReducers,
                },
                {
                    provide: USER_PROVIDED_META_REDUCERS,
                    useValue: config.metaReducers ? config.metaReducers : [],
                },
                {
                    provide: _RESOLVED_META_REDUCERS,
                    deps: [META_REDUCERS, USER_PROVIDED_META_REDUCERS],
                    useFactory: _concatMetaReducers,
                },
                {
                    provide: _REDUCER_FACTORY,
                    useValue: config.reducerFactory
                        ? config.reducerFactory
                        : combineReducers,
                },
                {
                    provide: REDUCER_FACTORY,
                    deps: [_REDUCER_FACTORY, _RESOLVED_META_REDUCERS],
                    useFactory: createReducerFactory,
                },
                ACTIONS_SUBJECT_PROVIDERS,
                REDUCER_MANAGER_PROVIDERS,
                SCANNED_ACTIONS_SUBJECT_PROVIDERS,
                STATE_PROVIDERS,
                STORE_PROVIDERS,
                provideRuntimeChecks(config.runtimeChecks),
            ],
        };
    };
    StoreModule.forFeature = function (featureName, reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreFeatureModule,
            providers: [
                {
                    provide: _FEATURE_CONFIGS,
                    multi: true,
                    useValue: config,
                },
                {
                    provide: STORE_FEATURES,
                    multi: true,
                    useValue: {
                        key: featureName,
                        reducerFactory: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) && config.reducerFactory
                            ? config.reducerFactory
                            : combineReducers,
                        metaReducers: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) && config.metaReducers
                            ? config.metaReducers
                            : [],
                        initialState: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) && config.initialState
                            ? config.initialState
                            : undefined,
                    },
                },
                {
                    provide: _STORE_FEATURES,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _FEATURE_CONFIGS, STORE_FEATURES],
                    useFactory: _createFeatureStore,
                },
                { provide: _FEATURE_REDUCERS, multi: true, useValue: reducers },
                {
                    provide: _FEATURE_REDUCERS_TOKEN,
                    multi: true,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? reducers : _FEATURE_REDUCERS,
                },
                {
                    provide: FEATURE_REDUCERS,
                    multi: true,
                    deps: [
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
                        _FEATURE_REDUCERS,
                        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](_FEATURE_REDUCERS_TOKEN)],
                    ],
                    useFactory: _createFeatureReducers,
                },
            ],
        };
    };
    StoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
    ], StoreModule);
    return StoreModule;
}());
function _createStoreReducers(injector, reducers) {
    return reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? injector.get(reducers) : reducers;
}
function _createFeatureStore(injector, configs, featureStores) {
    return featureStores.map(function (feat, index) {
        if (configs[index] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) {
            var conf = injector.get(configs[index]);
            return {
                key: feat.key,
                reducerFactory: conf.reducerFactory
                    ? conf.reducerFactory
                    : combineReducers,
                metaReducers: conf.metaReducers ? conf.metaReducers : [],
                initialState: conf.initialState,
            };
        }
        return feat;
    });
}
function _createFeatureReducers(injector, reducerCollection) {
    var reducers = reducerCollection.map(function (reducer) {
        return reducer instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? injector.get(reducer) : reducer;
    });
    return reducers;
}
function _initialStateFactory(initialState) {
    if (typeof initialState === 'function') {
        return initialState();
    }
    return initialState;
}
function _concatMetaReducers(metaReducers, userProvidedMetaReducers) {
    return metaReducers.concat(userProvidedMetaReducers);
}

/**
 * @description
 * Associates actions with a given state change function.
 * A state change function must be provided as the last parameter.
 *
 * @param args `ActionCreator`'s followed by a state change function.
 *
 * **To maintain type-safety**: pass 10 or less `ActionCreator`'s.
 * @returns an association of action types with a state change function.
 */
function on() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var reducer = args.pop();
    var types = args.reduce(function (result, creator) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result, [creator.type]); }, []);
    return { reducer: reducer, types: types };
}
/**
 * @description
 * Creates a reducer function to handle state transitions.
 *
 * Reducer creators reduce the explicitness of reducer functions with switch statements.
 *
 * @param initialState Provides a state value if the current state is `undefined`, as it is initially.
 * @param ons Associations between actions and state changes.
 * @returns A reducer function.
 *
 * @usageNotes
 *
 * - Must be used with `ActionCreator`'s (returned by `createAction`).  Cannot be used with class-based action creators.
 * - An action type should only be associated with at most one state change function, similar to switch statements.
 *   - In the case this is violated, the latest defined associated will be used (the latest `on` function passed).
 * - The returned `ActionReducer` should additionally be returned from an exported `reducer` function.
 * This is because [function calls are not supported](https://angular.io/guide/aot-compiler#function-calls-are-not-supported) by the AOT compiler.
 *
 * **Declaring a reducer creator with an exported reducer function**
 *
 * ```ts
 * const featureReducer = createReducer(
 *   initialState,
 *   on(
 *     featureActions.actionOne,
 *     featureActions.actionTwo,
 *     (state, { updatedValue }) => ({ ...state, prop: updatedValue })
 *   ),
 *   on(featureActions.actionThree, () => initialState);
 * );
 *
 * export function reducer(state: State | undefined, action: Action) {
 *   return featureReducer(state, action);
 * }
 * ```
 */
function createReducer(initialState) {
    var e_1, _a, e_2, _b;
    var ons = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ons[_i - 1] = arguments[_i];
    }
    var map = new Map();
    try {
        for (var ons_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(ons), ons_1_1 = ons_1.next(); !ons_1_1.done; ons_1_1 = ons_1.next()) {
            var on_1 = ons_1_1.value;
            try {
                for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(on_1.types), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var type = _d.value;
                    map.set(type, on_1.reducer);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (ons_1_1 && !ons_1_1.done && (_a = ons_1.return)) _a.call(ons_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        var reducer = map.get(action.type);
        return reducer ? reducer(state, action) : state;
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


//# sourceMappingURL=store.js.map


/***/ })

}]);
//# sourceMappingURL=default~database-manager-database-manager-module~rest-client-rest-client-module.js.map