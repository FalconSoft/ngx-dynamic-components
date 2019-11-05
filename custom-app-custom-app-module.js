(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-app-custom-app-module"],{

/***/ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js ***!
  \******************************************************************************/
/*! exports provided: Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function() { return PERFECT_SCROLLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function() { return PerfectScrollbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function() { return PerfectScrollbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function() { return PerfectScrollbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function() { return PerfectScrollbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
/** @type {?} */
var PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[(/** @type {?} */ (key))] = config[(/** @type {?} */ (key))];
        }
    };
    return PerfectScrollbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            /** @type {?} */
            var config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](_this.elementRef.nativeElement, config_1);
            }));
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__["default"]((/**
                 * @return {?}
                 */
                function () {
                    _this.update();
                }));
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            }));
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                PerfectScrollbarEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                function (eventName) {
                    /** @type {?} */
                    var eventType = eventName.replace(/([A-Z])/g, (/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return "-" + c.toLowerCase(); }));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(_this.elementRef.nativeElement, eventType)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["auditTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        _this[eventName].emit(event);
                    }));
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                if (_this.instance) {
                    _this.instance.destroy();
                }
            }));
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            /** @type {?} */
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular((/**
                         * @return {?}
                         */
                        function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        }));
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }), 0);
        }
    };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
    function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
    function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
    function (direction) {
        if (direction === void 0) { direction = 'any'; }
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        /** @type {?} */
        var left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        /** @type {?} */
        var top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (qs, offset, speed) {
        /** @type {?} */
        var element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            /** @type {?} */
            var elementPos = element.getBoundingClientRect();
            /** @type {?} */
            var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                /** @type {?} */
                var currentPos = this.elementRef.nativeElement['scrollLeft'];
                /** @type {?} */
                var position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                /** @type {?} */
                var currentPos = this.elementRef.nativeElement['scrollTop'];
                /** @type {?} */
                var position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    /**
     * @private
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @private
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    function (target, value, speed) {
        var _this = this;
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            /** @type {?} */
            var newValue_1 = 0;
            /** @type {?} */
            var scrollCount_1 = 0;
            /** @type {?} */
            var oldTimestamp_1 = performance.now();
            /** @type {?} */
            var oldValue_1 = this.elementRef.nativeElement[target];
            /** @type {?} */
            var cosParameter_1 = (oldValue_1 - value) / 2;
            /** @type {?} */
            var step_1 = (/**
             * @param {?} newTimestamp
             * @return {?}
             */
            function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this.animation = window.requestAnimationFrame(step_1);
                    }
                }
            });
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] }
    ];
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [PERFECT_SCROLLBAR_CONFIG,] }] }
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['perfectScrollbar',] }],
        psScrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psYReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psYReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psXReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psXReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return PerfectScrollbarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a === b && !_this.stateTimeout); })))
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }), 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            }));
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                if (_this.directiveRef) {
                    /** @type {?} */
                    var element = _this.directiveRef.elementRef.nativeElement;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'wheel')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            /** @type {?} */
                            var scrollDeltaX = event.deltaX;
                            /** @type {?} */
                            var scrollDeltaY = event.deltaY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    }));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'touchmove')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            /** @type {?} */
                            var scrollPositionX = event.touches[0].clientX;
                            /** @type {?} */
                            var scrollPositionY = event.touches[0].clientY;
                            /** @type {?} */
                            var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                            /** @type {?} */
                            var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            _this.scrollPositionX = scrollPositionX;
                            _this.scrollPositionY = scrollPositionY;
                        }
                    }));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-scroll-x')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-scroll-y')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-x-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-y-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-x-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-y-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('top')))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy))
                        .subscribe((/**
                     * @param {?} state
                     * @return {?}
                     */
                    function (state) {
                        if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                            _this.stateUpdate.next(state);
                        }
                    }));
                }
            }));
            window.setTimeout((/**
             * @return {?}
             */
            function () {
                PerfectScrollbarEvents.forEach((/**
                 * @param {?} eventName
                 * @return {?}
                 */
                function (eventName) {
                    if (_this.directiveRef) {
                        _this.directiveRef[eventName] = _this[eventName];
                    }
                }));
            }), 0);
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                /** @type {?} */
                var element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @private
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (event, deltaX, deltaY) {
        this.interaction = true;
        /** @type {?} */
        var scrollDirectionX = (deltaX < 0) ? -1 : 1;
        /** @type {?} */
        var scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    PerfectScrollbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'perfect-scrollbar',
                    exportAs: 'ngxPerfectScrollbar',
                    template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    styles: ["/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\n\nperfect-scrollbar {\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nperfect-scrollbar[hidden] {\n  display: none;\n}\n\nperfect-scrollbar[fxflex] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nperfect-scrollbar[fxflex] > .ps {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nperfect-scrollbar[fxlayout] > .ps,\nperfect-scrollbar[fxlayout] > .ps > .ps-content {\n  display: flex;\n\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n  width: 100%;\n  height: 100%;\n\n  -webkit-box-align: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-box-flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-pack: inherit;\n}\n\nperfect-scrollbar[fxlayout='row'] > .ps,\nperfect-scrollbar[fxlayout='row'] > .ps > .ps-content, {\n  flex-direction: row !important;\n\n  -webkit-box-direction: row !important;\n  -webkit-box-orient: row !important;\n}\n\nperfect-scrollbar[fxlayout='column'] > .ps,\nperfect-scrollbar[fxlayout='column'] > .ps > .ps-content {\n  flex-direction: column !important;\n\n  -webkit-box-direction: column !important;\n  -webkit-box-orient: column !important;\n}\n\nperfect-scrollbar > .ps {\n  position: static;\n\n  display: block;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\nperfect-scrollbar > .ps textarea {\n  -ms-overflow-style: scrollbar;\n}\n\nperfect-scrollbar > .ps > .ps-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n  overflow: hidden;\n\n  pointer-events: none;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  position: absolute;\n\n  opacity: 0;\n\n  transition: opacity 300ms ease-in-out;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  left: 0;\n\n  min-width: 100%;\n  min-height: 24px;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  top: 0;\n\n  min-width: 24px;\n  min-height: 100%;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n  top: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n  left: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  right: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  bottom: 0;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n  top: 0 !important;\n  right: 0 !important;\n  left: auto !important;\n\n  width: 10px;\n\n  cursor: default;\n\n  transition:\n    width 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover,\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y.ps--clicking {\n  width: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n  top: auto !important;\n  bottom: 0 !important;\n  left: 0 !important;\n\n  height: 10px;\n\n  cursor: default;\n\n  transition:\n    height 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover,\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x.ps--clicking {\n  height: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n  margin: 0 0 10px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n  margin: 0 10px 0 0;\n}\n\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y,\nperfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n  opacity: 0.9;\n\n  background-color: #eee;\n}\n\nperfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y,\nperfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n  opacity: 0.6;\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n  opacity: 1;\n\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n  opacity: 1;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n  opacity: 1;\n\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n  opacity: 1;\n\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n  background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n  background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n  background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n  background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n  opacity: 1;\n}\n", "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"]
                }] }
    ];
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        usePSClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autoPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.ps-show-limits',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        scrollIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.ps-show-active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        psScrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psScrollRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psYReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psYReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psXReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        psXReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [PerfectScrollbarDirective, { static: true },] }]
    };
    return PerfectScrollbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PerfectScrollbarModule = /** @class */ (function () {
    function PerfectScrollbarModule() {
    }
    PerfectScrollbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
                },] }
    ];
    return PerfectScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-perfect-scrollbar.es5.js.map


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/app-config/app-config.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-app/components/app-config/app-config.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{config.appName}} configuration</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body px-4 d-flex flex-column\">\n    <alert type=\"danger\" *ngIf=\"error\">\n      <strong>Error:</strong> {{error}}\n    </alert>\n    <div #appConfigElement class=\"h-100\"></div>\n  </div>\n  <div class=\"modal-footer flex-column\">\n    <div class=\"row w-100 mx-0 px-0\">\n      <button type=\"button\" (click)=\"saveApp()\" class=\"btn btn-primary ml-auto mr-2\">Save</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/aside-content/aside-content.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-app/components/aside-content/aside-content.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list-view *ngIf=\"list\" class=\"d-flex h-100 overflow-auto mt-2\" [list]=\"list\" group=\"groupName\"\n  (select)=\"onSelect($event)\">\n  <ng-template let-item>\n    <div class=\"m-1\">\n      {{item.name}}\n    </div>\n  </ng-template>\n</app-list-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/available-apps/apps.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-app/components/available-apps/apps.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <h1>Select an Application</h1>\n                <div class=\"row\">\n                  <div class=\"col col-sm-6\">\n                    <p class=\"text-muted\">Available apps.</p>\n                    <div class=\"row\">\n                      <div class=\"col-12\" *ngFor=\"let app of apps$ | async\">\n                        <a [routerLink]=\"[app.appName]\">{{app.title}}</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col col-sm-6\">\n                    <p class=\"text-muted\">Datasource managers.</p>\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <a [routerLink]=\"['datasource']\">Datasource</a>\n                      </div>\n                      <div class=\"col-12\">\n                        <a [routerLink]=\"['/', 'rest-client']\">Rest client</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout [config]=\"layoutConfig\">\n  <h2 title class=\"mb-0 ml-0 top-sub-header w-md-down-50\">{{layoutConfig.appName}}</h2>\n  <app-menu class=\"d-md-down-none mr-auto d-flex\" [appInfo]=\"appInfo\" [navItems]=\"menuItems\" header></app-menu>\n\n  <div class=\"btn-group align-self-center\" dropdown placement=\"left\" settings>\n    <button class=\"btn btn-light btn-sm mr-2\" data-toggle=\"dropdown\" dropdownToggle\n      title=\"Application settings\" aria-controls=\"dropdown-basic\" tabindex=\"0\" role=\"button\">\n      <i class=\"fa fa-cog\"></i>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu left-menu\" role=\"menu\">\n      <li role=\"menuitem\">\n        <a class=\"dropdown-item cursor-pointer\" (click)=\"onEditApp()\">Edit Application</a>\n      </li>\n    </ul>\n  </div>\n\n  <app-aside-content sidebar [list]=\"sidebarItems\" [appInfo]=\"appInfo\" class=\"d-flex flex-column w-100\"></app-aside-content>\n  <main class=\"main\" content>\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</app-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/menu/menu.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-app/components/menu/menu.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav info-links\" *ngIf=\"navItems\">\n  <li class=\"nav-item dropdown px-3\" dropdown placement=\"bottom right\" *ngFor=\"let item of navItems\">\n    <a *ngIf=\"!item.children; else list;\" class=\"nav-link\" (click)=\"handleAction(item.attributes)\">{{item.name}}</a>\n    <ng-template #list>\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        {{item.name}} <i class=\"fa fa-chevron-down\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <a class=\"dropdown-item\" (click)=\"handleAction(child.attributes)\" *ngFor=\"let child of item.children\">{{child.name}}</a>\n      </div>\n    </ng-template>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./src/app/custom-app/_temp-configs/wijmo.config.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-app/_temp-configs/wijmo.config.ts ***!
  \**********************************************************/
/*! exports provided: gridPageUIModel, customersPageUIModel, app, customersWorkflowsMap, workflowsMap, mainPage, customersPage, pages, tableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridPageUIModel", function() { return gridPageUIModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersPageUIModel", function() { return customersPageUIModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersWorkflowsMap", function() { return customersWorkflowsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workflowsMap", function() { return workflowsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPage", function() { return mainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersPage", function() { return customersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableData", function() { return tableData; });
/* harmony import */ var _wijmo_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wijmo/components/grid/grid.component */ "./src/app/wijmo/components/grid/grid.component.ts");

var gridPageUIModel = {
    type: 'bootstrap:container',
    itemProperties: {},
    children: [{
            type: 'bootstrap:bs-row',
            containerProperties: {
                width: '100%'
            },
            children: [{
                    type: 'wijmo:grid',
                    id: 'chemical-elements-table',
                    containerProperties: {
                        width: '100%'
                    },
                    itemProperties: {
                        width: '100%',
                        dataModelPath: '$.tableData'
                    }
                }]
        }],
};
var customersPageUIModel = {
    type: 'bootstrap:container',
    itemProperties: {},
    children: [{
            type: 'bootstrap:bs-row',
            containerProperties: {
                width: '100%'
            },
            children: [{
                    type: 'wijmo:grid',
                    id: 'customers-table',
                    containerProperties: {
                        width: '100%'
                    },
                    itemProperties: {
                        width: '100%',
                        dataModelPath: '$.customers'
                    }
                }]
        }],
};
var app = {
    appId: 3,
    appName: 'WijmoApp',
    ownerName: 'Test1',
    title: 'Wijmo Test App',
    logo: 'assets/img/logo.png',
    description: 'App for displaying wijmo components',
    menuItems: [
        {
            name: 'MainPage',
            groupName: 'Admin',
            actionName: 'showPage',
            actionParameter: {}
        },
        {
            name: 'CustomersPage',
            groupName: 'Admin',
            actionName: 'showPage',
            actionParameter: {}
        }
    ],
    sideBarItems: []
};
var customersWorkflowsMap = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: {
        'customers-table_OnInit': [{
                id: 'loadCustomers',
                actionType: 'getSqlData',
                objectOwner: 'Test1',
                objectName: 'NorthwindCustomers',
                uiModelId: 'customers-table',
                returnValue: 'loadedCustomersData'
            }, {
                actionType: 'transferData',
                from: '$loadedCustomersData',
                fromPropertyName: '$.Customers',
                to: '$dataModel',
                toPropertyName: '$.customers'
            }]
    }
};
var workflowsMap = {
    failOnError: true,
    include: ['@common'],
    vars: {},
    workflowsMap: {
        'chemical-elements-table_OnInit': [{
                id: 'loadData',
                actionType: 'getJsonValue',
                jsonKey: 'chemical-elements',
                returnValue: 'loadedTableData'
            }, {
                actionType: 'transferData',
                from: '$loadedTableData',
                fromPropertyName: '$',
                to: '$dataModel',
                toPropertyName: '$.tableData'
            }]
    }
};
var mainPage = {
    pageId: 7,
    pageName: 'MainPage',
    description: 'List of wijmo components',
    title: 'Main wijmo Page',
    uiModel: gridPageUIModel,
    workflowsMap: workflowsMap.workflowsMap,
};
var customersPage = {
    pageId: 8,
    pageName: 'CustomersPage',
    description: 'Table displays customers',
    title: 'Customers Page',
    uiModel: customersPageUIModel,
    workflowsMap: customersWorkflowsMap.workflowsMap,
};
var pages = [mainPage, customersPage];
var tableData = _wijmo_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["example"].dataModel.tableData;


/***/ }),

/***/ "./src/app/custom-app/components/app-config/app-config.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-app/components/app-config/app-config.component.ts ***!
  \**************************************************************************/
/*! exports provided: AppConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function() { return AppConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var AppConfigComponent = /** @class */ (function () {
    function AppConfigComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AppConfigComponent.prototype.ngAfterViewInit = function () {
        this.appEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.appConfigElement.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(this.config)
        });
    };
    AppConfigComponent.prototype.saveApp = function () {
        try {
            var appInfo = JSON.parse(this.appEditor.getValue());
            this.save.emit(appInfo);
            this.modalRef.hide();
        }
        catch (e) {
            this.error = e.message;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppConfigComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appConfigElement', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppConfigComponent.prototype, "appConfigElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppConfigComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], AppConfigComponent.prototype, "modalRef", void 0);
    AppConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-config',
            template: __webpack_require__(/*! raw-loader!./app-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/app-config/app-config.component.html"),
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfigComponent);
    return AppConfigComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/components/aside-content/aside-content.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/custom-app/components/aside-content/aside-content.component.ts ***!
  \********************************************************************************/
/*! exports provided: AsideContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideContentComponent", function() { return AsideContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/actions.service */ "./src/app/custom-app/services/actions.service.ts");



var AsideContentComponent = /** @class */ (function () {
    function AsideContentComponent(actionsService) {
        this.actionsService = actionsService;
    }
    AsideContentComponent.prototype.ngOnInit = function () {
    };
    AsideContentComponent.prototype.onSelect = function (evt) {
        this.actionsService.handleAction(this.appInfo, evt);
    };
    AsideContentComponent.ctorParameters = function () { return [
        { type: _services_actions_service__WEBPACK_IMPORTED_MODULE_2__["ActionsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AsideContentComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AsideContentComponent.prototype, "appInfo", void 0);
    AsideContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aside-content',
            template: __webpack_require__(/*! raw-loader!./aside-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/aside-content/aside-content.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_actions_service__WEBPACK_IMPORTED_MODULE_2__["ActionsService"]])
    ], AsideContentComponent);
    return AsideContentComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/components/available-apps/app-config.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-app/components/available-apps/app-config.guard.ts ***!
  \**************************************************************************/
/*! exports provided: AppConfigGuard, AppConfigResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigGuard", function() { return AppConfigGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigResolver", function() { return AppConfigResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/custom-app/services/app.service.ts");






var AppConfigGuard = /** @class */ (function () {
    function AppConfigGuard(authService, router, appService) {
        this.authService = authService;
        this.router = router;
        this.appService = appService;
    }
    AppConfigGuard.prototype.canActivate = function (next) {
        var _this = this;
        return this.appService.getMyApps().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (apps) {
            var user = _this.authService.user;
            var isValid = user && user.userName === next.params.owner && apps.map(function (a) { return a.appName; }).includes(next.params.appName);
            if (!isValid) {
                _this.router.navigate(['/login']);
            }
            return isValid;
        }));
    };
    AppConfigGuard.ctorParameters = function () { return [
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
    ]; };
    AppConfigGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_security_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], AppConfigGuard);
    return AppConfigGuard;
}());

var AppConfigResolver = /** @class */ (function () {
    function AppConfigResolver(appService) {
        this.appService = appService;
    }
    AppConfigResolver.prototype.resolve = function (_a, state) {
        var params = _a.params;
        return this.appService.getAppInfo(params.owner, params.appName);
    };
    AppConfigResolver.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
    ]; };
    AppConfigResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], AppConfigResolver);
    return AppConfigResolver;
}());



/***/ }),

/***/ "./src/app/custom-app/components/available-apps/apps.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/custom-app/components/available-apps/apps.component.ts ***!
  \************************************************************************/
/*! exports provided: AppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsComponent", function() { return AppsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/custom-app/services/app.service.ts");



var AppsComponent = /** @class */ (function () {
    function AppsComponent(appService) {
        this.appService = appService;
    }
    AppsComponent.prototype.ngOnInit = function () {
        this.apps$ = this.appService.getMyApps();
    };
    AppsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    AppsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apps',
            template: __webpack_require__(/*! raw-loader!./apps.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/available-apps/apps.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppsComponent);
    return AppsComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CustomAppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAppLayoutComponent", function() { return CustomAppLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/custom-app/services/app.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/custom-app/utils.ts");
/* harmony import */ var src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_app_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-config/app-config.component */ "./src/app/custom-app/components/app-config/app-config.component.ts");








var CustomAppLayoutComponent = /** @class */ (function () {
    function CustomAppLayoutComponent(route, dialogService, appService) {
        this.route = route;
        this.dialogService = dialogService;
        this.appService = appService;
        this.layoutConfig = {
            icon: 'assets/img/ca-logo-80x80.png',
            smIcon: 'assets/img/ca-logo.png',
            collapsed: true,
            appName: null
        };
        this.asideMenu = false;
        this.brandRouterLink = [];
    }
    Object.defineProperty(CustomAppLayoutComponent.prototype, "sidebar", {
        get: function () {
            return this.sidebarItems && this.sidebarItems.length;
        },
        enumerable: true,
        configurable: true
    });
    CustomAppLayoutComponent.prototype.ngOnInit = function () {
        this.loadAppInfo();
    };
    CustomAppLayoutComponent.prototype.onEditApp = function () {
        var _this = this;
        var appEditDialog = this.dialogService.open(_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_7__["AppConfigComponent"], { class: 'modal-xl full-height' });
        appEditDialog.config = this.appInfo;
        appEditDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return appEditDialog.component.save; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (app) { return _this.appService.saveAppInfo(app); })).subscribe(function (app) {
            _this.loadAppInfo();
        });
    };
    CustomAppLayoutComponent.prototype.loadAppInfo = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        this.appInfo$ = this.appService.getAppInfo(params.owner, params.appName);
        this.appInfo$.subscribe((function (appInfo) {
            _this.appInfo = appInfo;
            _this.appName = appInfo.appName;
            _this.layoutConfig.appName = appInfo.appName;
            _this.menuItems = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["groupLinkInfos"])(appInfo.menuItems);
            _this.sidebarItems = appInfo.sideBarItems;
        }));
    };
    CustomAppLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    CustomAppLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-app-layout',
            template: __webpack_require__(/*! raw-loader!./custom-app-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.html"),
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n      min-height: 100vh;\n      max-height: 100%;\n    }\n\n    .left-menu {\n      left: auto !important;\n      right: 0px !important;\n    }\n\n    .left-menu ::ng-deep .dropdown-item {\n      min-width: 100px;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], CustomAppLayoutComponent);
    return CustomAppLayoutComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/components/default-page/default-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/custom-app/components/default-page/default-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: DefaultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return DefaultPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/custom-app/services/app.service.ts");



var DefaultPageComponent = /** @class */ (function () {
    function DefaultPageComponent(appService) {
        this.appService = appService;
        this.page = {
            title: 'Home',
            icon: 'icon-home icons font-2xl'
        };
    }
    DefaultPageComponent.prototype.ngOnInit = function () {
        this.appInfo$ = this.appService.currentApp$;
    };
    DefaultPageComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    DefaultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-page',
            template: "\n  <app-page-header [icon]=\"page.icon\" [title]=\"page.title\"></app-page-header>\n  <div class=\"d-flex flex-column text-center\" *ngIf=\"appInfo$ | async as appInfo\">\n    <div *ngIf=\"appInfo.logo\"><img [src]=\"appInfo.logo\"></div>\n    <h1>{{appInfo.title}}</h1>\n    <h4>{{appInfo.description}}</h4>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], DefaultPageComponent);
    return DefaultPageComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/components/detail-view/detail-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/custom-app/components/detail-view/detail-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailViewComponent, DetailViewProperties, detailViewDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewProperties", function() { return DetailViewProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailViewDescriptor", function() { return detailViewDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");




var DetailViewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DetailViewComponent, _super);
    function DetailViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formatLabel = src_app_shared__WEBPACK_IMPORTED_MODULE_3__["formatCamelStr"];
        return _this;
    }
    DetailViewComponent.prototype.getValue = function (prop) {
        if (Array.isArray(this.componentDataModel) && this.componentDataModel.length) {
            return this.componentDataModel[0][prop];
        }
        if (this.componentDataModel) {
            return this.componentDataModel[prop];
        }
    };
    DetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-detail-view',
            template: "\n    <div [ngStyle]=\"itemStyles\">\n      <div class=\"row\" *ngFor=\"let prop of properties.props\">\n        <label class=\"col-lg-3\">{{formatLabel(prop)}}</label>\n        <div class=\"col-lg-9\">{{getValue(prop)}}</div>\n      <div>\n    </div>\n    ",
            styles: ["\n      label {\n        text-align: right;\n        font-weight: bold;\n      }\n    "]
        })
    ], DetailViewComponent);
    return DetailViewComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var DetailViewProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DetailViewProperties, _super);
    function DetailViewProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Displays properties data.',
            example: "['propA', 'propB']",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DetailViewProperties.prototype, "props", void 0);
    return DetailViewProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
    title: 'Text compoent example',
    uiModel: {
        type: 'worksheet:detail-view',
        containerProperties: {},
        itemProperties: {
            props: ['propA', 'propB']
        }
    },
    dataModel: {}
};
var detailViewDescriptor = {
    name: 'detail-view',
    label: 'Detail veiw',
    packageName: 'worksheet',
    category: "Custom Controls" /* CustomControls */,
    description: 'Data representation component',
    itemProperties: DetailViewProperties,
    component: DetailViewComponent,
    example: example
};


/***/ }),

/***/ "./src/app/custom-app/components/dynamic-page/dynamic-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/custom-app/components/dynamic-page/dynamic-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: DynamicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPageComponent", function() { return DynamicPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var src_app_shared_components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/page-config/page-config.component */ "./src/app/shared/components/page-config/page-config.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/custom-app/services/app.service.ts");
/* harmony import */ var _services_actions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/actions.service */ "./src/app/custom-app/services/actions.service.ts");








var DynamicPageComponent = /** @class */ (function () {
    function DynamicPageComponent(actionsService, route, appService, dialogService, router) {
        this.actionsService = actionsService;
        this.route = route;
        this.appService = appService;
        this.dialogService = dialogService;
        this.router = router;
    }
    DynamicPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this.route.snapshot.parent.params, owner = _a.owner, appName = _a.appName;
        this.page$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.pageId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (pageId) { return _this.appService.getPageInfo(owner, appName, pageId); }));
        this.page$.subscribe(function (p) {
            if (!p) {
                _this.router.navigate([owner, appName]);
            }
            else {
                _this.pageInfo = null;
                _this.page = null;
                setTimeout(function () {
                    _this.pageInfo = p;
                    _this.page = _this.getPage(p);
                });
            }
        });
        this.headerCommands = [{
                label: 'Edit',
                icon: 'fa-edit',
                command: this.editPage.bind(this)
            }];
    };
    DynamicPageComponent.prototype.editPage = function () {
        var _this = this;
        var pageEditDialog = this.dialogService.open(src_app_shared_components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_5__["PageConfigComponent"], { class: 'modal-xl full-height' });
        pageEditDialog.config = this.pageInfo;
        pageEditDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return pageEditDialog.component.save; })).subscribe(function (p) {
            var page = p;
            var _a = _this.route.snapshot.parent.params, owner = _a.owner, appName = _a.appName;
            _this.appService.savePageInfo(page, owner, appName).subscribe(function () {
                _this.pageInfo = page;
                _this.page = _this.getPage(page);
            });
        });
    };
    DynamicPageComponent.prototype.getPage = function (_a) {
        var uiModel = _a.uiModel, workflowsMap = _a.workflowsMap;
        return {
            uiModel: uiModel,
            workflowConfig: {
                failOnError: true,
                include: ['@common'],
                vars: {},
                workflowsMap: workflowsMap,
                consts: {}
            }
        };
    };
    DynamicPageComponent.ctorParameters = function () { return [
        { type: _services_actions_service__WEBPACK_IMPORTED_MODULE_7__["ActionsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
        { type: src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DynamicPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-page',
            template: "\n    <ng-container *ngIf=\"page\">\n      <app-page-header [icon]=\"pageInfo.icon\" [title]=\"pageInfo.title\" [headerCommands]=\"headerCommands\"></app-page-header>\n      <ngx-dynamic-component\n        [uiModel]='page.uiModel'\n        [dataModel]='{}'></ngx-dynamic-component>\n    </ng-container>\n  ",
            styles: ["\n    :host {\n      height: calc(100vh - 200px);\n      display: block;\n    }\n    ngx-dynamic-component {\n      height: 100%;\n      display: block;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_actions_service__WEBPACK_IMPORTED_MODULE_7__["ActionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            src_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DynamicPageComponent);
    return DynamicPageComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/components/dynamic-page/dynamic-page.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-app/components/dynamic-page/dynamic-page.guard.ts ***!
  \**************************************************************************/
/*! exports provided: PageTitleResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleResolver", function() { return PageTitleResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/custom-app/services/app.service.ts");




var PageTitleResolver = /** @class */ (function () {
    function PageTitleResolver(appService) {
        this.appService = appService;
    }
    PageTitleResolver.prototype.resolve = function (_a) {
        var params = _a.params, parent = _a.parent;
        return this.appService.getPageInfo(parent.params.owner, parent.params.appName, params.pageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (p) { return Boolean(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (p) { return p.title; }));
    };
    PageTitleResolver.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    PageTitleResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], PageTitleResolver);
    return PageTitleResolver;
}());



/***/ }),

/***/ "./src/app/custom-app/components/menu/menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/custom-app/components/menu/menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.nav-link {\n  cursor: pointer;\n}\n\n.navbar-nav.info-links .dropdown-item, .navbar-nav.info-links .dropdown-menu {\n  min-width: 100px;\n}\n\n.navbar-nav.info-links a {\n  cursor: pointer;\n}\n\n@media (max-width: 991.98px) {\n  .navbar-nav.info-links a,\n.navbar-nav.info-links .dropdown-menu {\n    margin: 0;\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9jdXN0b20tYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNjc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQ0RGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QUMrREk7RUYzREY7O0lBRUUsU0FBQTtJQUNBLFlBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tLWFwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL21lZGlhXCI7XG5cbmEubmF2LWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyLW5hdi5pbmZvLWxpbmtzIC5kcm9wZG93bi1pdGVtLCAubmF2YmFyLW5hdi5pbmZvLWxpbmtzIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLm5hdmJhci1uYXYuaW5mby1saW5rcyBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcbiAgLm5hdmJhci1uYXYuaW5mby1saW5rcyBhLFxuICAubmF2YmFyLW5hdi5pbmZvLWxpbmtzIC5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG4iLCJhLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyLW5hdi5pbmZvLWxpbmtzIC5kcm9wZG93bi1pdGVtLCAubmF2YmFyLW5hdi5pbmZvLWxpbmtzIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLm5hdmJhci1uYXYuaW5mby1saW5rcyBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLm5hdmJhci1uYXYuaW5mby1saW5rcyBhLFxuLm5hdmJhci1uYXYuaW5mby1saW5rcyAuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/custom-app/components/menu/menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/custom-app/components/menu/menu.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/services/auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony import */ var _services_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/actions.service */ "./src/app/custom-app/services/actions.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(actionService, authService) {
        this.actionService = actionService;
        this.authService = authService;
    }
    MenuComponent.prototype.handleAction = function (item) {
        this.actionService.handleAction(this.appInfo, item);
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"] },
        { type: src_app_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "appInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuComponent.prototype, "navItems", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/custom-app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/custom-app/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"],
            src_app_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/custom-app/custom-app-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/custom-app/custom-app-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CustomAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAppRoutingModule", function() { return CustomAppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_available_apps_apps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/available-apps/apps.component */ "./src/app/custom-app/components/available-apps/apps.component.ts");
/* harmony import */ var _components_custom_app_layout_custom_app_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-app-layout/custom-app-layout.component */ "./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.ts");
/* harmony import */ var _components_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dynamic-page/dynamic-page.component */ "./src/app/custom-app/components/dynamic-page/dynamic-page.component.ts");
/* harmony import */ var _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/default-page/default-page.component */ "./src/app/custom-app/components/default-page/default-page.component.ts");
/* harmony import */ var _components_dynamic_page_dynamic_page_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dynamic-page/dynamic-page.guard */ "./src/app/custom-app/components/dynamic-page/dynamic-page.guard.ts");
/* harmony import */ var _components_available_apps_app_config_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/available-apps/app-config.guard */ "./src/app/custom-app/components/available-apps/app-config.guard.ts");



// Import Containers






var routes = [
    {
        path: '',
        component: _components_available_apps_apps_component__WEBPACK_IMPORTED_MODULE_3__["AppsComponent"]
    },
    {
        path: ':appName',
        component: _components_custom_app_layout_custom_app_layout_component__WEBPACK_IMPORTED_MODULE_4__["CustomAppLayoutComponent"],
        data: {
            title: 'Home'
        },
        canActivate: [_components_available_apps_app_config_guard__WEBPACK_IMPORTED_MODULE_8__["AppConfigGuard"]],
        children: [
            {
                path: '',
                component: _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_6__["DefaultPageComponent"],
            },
            {
                path: ':pageId',
                component: _components_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_5__["DynamicPageComponent"],
                resolve: {
                    title: _components_dynamic_page_dynamic_page_guard__WEBPACK_IMPORTED_MODULE_7__["PageTitleResolver"]
                }
            }
        ]
    }
];
var CustomAppRoutingModule = /** @class */ (function () {
    function CustomAppRoutingModule() {
    }
    CustomAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomAppRoutingModule);
    return CustomAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/custom-app/custom-app.module.ts":
/*!*************************************************!*\
  !*** ./src/app/custom-app/custom-app.module.ts ***!
  \*************************************************/
/*! exports provided: CustomAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAppModule", function() { return CustomAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ "../ngx-dynamic-components/projects/bootstrap/src/public-api.ts");
/* harmony import */ var _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-dynamic-components/material */ "../ngx-dynamic-components/projects/material/src/public_api.ts");
/* harmony import */ var _wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wijmo/wijmo.module */ "./src/app/wijmo/wijmo.module.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _components_custom_app_layout_custom_app_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/custom-app-layout/custom-app-layout.component */ "./src/app/custom-app/components/custom-app-layout/custom-app-layout.component.ts");
/* harmony import */ var _components_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dynamic-page/dynamic-page.component */ "./src/app/custom-app/components/dynamic-page/dynamic-page.component.ts");
/* harmony import */ var _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/default-page/default-page.component */ "./src/app/custom-app/components/default-page/default-page.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/custom-app/components/menu/menu.component.ts");
/* harmony import */ var _components_aside_content_aside_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/aside-content/aside-content.component */ "./src/app/custom-app/components/aside-content/aside-content.component.ts");
/* harmony import */ var _components_available_apps_apps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/available-apps/apps.component */ "./src/app/custom-app/components/available-apps/apps.component.ts");
/* harmony import */ var _custom_app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-app-routing.module */ "./src/app/custom-app/custom-app-routing.module.ts");
/* harmony import */ var _components_dynamic_page_dynamic_page_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dynamic-page/dynamic-page.guard */ "./src/app/custom-app/components/dynamic-page/dynamic-page.guard.ts");
/* harmony import */ var _components_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/detail-view/detail-view.component */ "./src/app/custom-app/components/detail-view/detail-view.component.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _components_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/app-config/app-config.component */ "./src/app/custom-app/components/app-config/app-config.component.ts");













// Import components











var CustomAppModule = /** @class */ (function () {
    function CustomAppModule(actionsService) {
        this.actionsService = actionsService;
        _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_7__["CoreService"].registerComponent(_components_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_21__["detailViewDescriptor"]);
    }
    CustomAppModule.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_12__["ActionsService"] }
    ]; };
    CustomAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_available_apps_apps_component__WEBPACK_IMPORTED_MODULE_18__["AppsComponent"],
                _components_aside_content_aside_content_component__WEBPACK_IMPORTED_MODULE_17__["AsideContentComponent"],
                _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_15__["DefaultPageComponent"],
                _components_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_14__["DynamicPageComponent"],
                _components_custom_app_layout_custom_app_layout_component__WEBPACK_IMPORTED_MODULE_13__["CustomAppLayoutComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _components_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_21__["DetailViewComponent"],
                _components_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_23__["AppConfigComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custom_app_routing_module__WEBPACK_IMPORTED_MODULE_19__["CustomAppRoutingModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(),
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BootstrapModule"],
                _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _wijmo_wijmo_module__WEBPACK_IMPORTED_MODULE_10__["WijmoModule"]
            ],
            providers: [_components_dynamic_page_dynamic_page_guard__WEBPACK_IMPORTED_MODULE_20__["PageTitleResolver"], _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_22__["DialogService"]],
            entryComponents: [_components_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_21__["DetailViewComponent"], _components_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_23__["AppConfigComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_12__["ActionsService"]])
    ], CustomAppModule);
    return CustomAppModule;
}());



/***/ }),

/***/ "./src/app/custom-app/services/actions.service.ts":
/*!********************************************************!*\
  !*** ./src/app/custom-app/services/actions.service.ts ***!
  \********************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.service */ "./src/app/custom-app/services/modal.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/custom-app/services/app.service.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");









var ActionsService = /** @class */ (function () {
    function ActionsService(router, route, modalService, httpClient, sqlDbService, appService) {
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.httpClient = httpClient;
        this.sqlDbService = sqlDbService;
        this.appService = appService;
        this._appContext = {};
        this.addAppServices();
        this.addCommonActions();
        this.addHttpActions();
    }
    Object.defineProperty(ActionsService.prototype, "appContext", {
        get: function () {
            return this._appContext;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles action.
     * @param payload Action payload.
     */
    ActionsService.prototype.handleAction = function (appInfo, payload) {
        if (payload.actionName === 'showPage') {
            this.showPage(appInfo, payload.name);
        }
        else {
            console.warn("Unregistered action " + payload.actionName, payload);
        }
    };
    ActionsService.prototype.showPage = function (appInfo, pageName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var page, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.appService.getPageInfo(appInfo.ownerName, appInfo.appName, pageName).toPromise()];
                    case 1:
                        page = _a.sent();
                        if (page.showInDialog) {
                            this.modalService.open(page, this.appContext);
                        }
                        else {
                            return [2 /*return*/, this.router.navigate(['app', appInfo.ownerName, appInfo.appName, page.pageName])];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ActionsService.prototype.addAppServices = function () {
        var _this = this;
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('showPage', function (context, config) {
            _this.showPage(_this.appService.currentApp, config.pageName);
        });
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('getJsonValue', function (context, config) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.appService.getJsonValue(config.jsonKey).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('setJsonValue', function (context, config) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var objValue, value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objValue = Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["resolveValue"])(context, config.object);
                        value = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["JSONUtils"].find(objValue, config.propertyName);
                        return [4 /*yield*/, this.appService.setJsonValue(config.jsonKey, value).toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, value];
                }
            });
        }); });
    };
    ActionsService.prototype.addCommonActions = function () {
        var _this = this;
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('appContext', function (context, config) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var targetWorkflow;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetWorkflow = this.appContext[config.componentId];
                        targetWorkflow.setVariable(config.propertyValue, context.variables.get(config.propertyValue));
                        return [4 /*yield*/, targetWorkflow.run(config.appContextAction)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('closeDialog', function () {
            return _this.modalService.close();
        });
    };
    ActionsService.prototype.addHttpActions = function () {
        var _this = this;
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('httpGet', function (context, config) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(config.url).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('getSqlData', function (context, config) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sqlDbService.selectSqlObjectData('sql-shared', config.objectOwner, config.objectName, {
                                filters: this.getFilters(context, config)
                            }).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, {
                                status: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["ActionStatus"].FAILED,
                                message: Object(src_app_shared__WEBPACK_IMPORTED_MODULE_8__["getErrorMessage"])(e_2)
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["registerAction"])('getUniqueValues', function (context, config) {
            var fromObj = Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["resolveValue"])(context, config.object);
            var table = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["JSONUtils"].find(fromObj, config.propertyName || '$');
            var values = table.map(function (row) { return row[config.key]; });
            return Array.from(new Set(values));
        });
    };
    ActionsService.prototype.getFilters = function (context, config) {
        var _this = this;
        if (!config.filters) {
            return [];
        }
        return config.filters.map(function (filter) {
            var value;
            if (filter.value === '$QUERY') {
                value = _this.route.snapshot.queryParams[filter.fieldName];
            }
            else {
                value = Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["resolveValue"])(context, filter.value);
                // TODO: Remove.
                if (value.length) {
                    value = value.join(',');
                }
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, filter, { value: value });
        });
    };
    ActionsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["SqlDbService"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }
    ]; };
    ActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__["SqlDbService"],
            _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "./src/app/custom-app/services/app.service.ts":
/*!****************************************************!*\
  !*** ./src/app/custom-app/services/app.service.ts ***!
  \****************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _temp_configs_wijmo_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_temp-configs/wijmo.config */ "./src/app/custom-app/_temp-configs/wijmo.config.ts");








var AppService = /** @class */ (function () {
    function AppService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this._currentApp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._pages = {};
        this.currentApp$ = this._currentApp.asObservable();
        // this.__reCreateData(northwind);
        // this.__setTableData();
        // this.__setCountries();
    }
    Object.defineProperty(AppService.prototype, "currentApp", {
        get: function () {
            return this._currentApp.getValue();
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.getMyApps = function () {
        var _this = this;
        if (this._myApps) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._myApps);
        }
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/app-definitions/apps", this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (apps) {
            _this._myApps = apps;
            return apps;
        }));
    };
    AppService.prototype.getAppInfo = function (ownerName, appName) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/app-definitions/app/" + ownerName + "/" + appName;
        if (this._currentAppURL !== url) {
            this._currentAppURL = url;
            this._currentAppXHR = this.httpClient.get(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (appInfo) {
                _this._currentApp.next(appInfo);
                return appInfo;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        }
        return this._currentAppXHR;
    };
    AppService.prototype.saveAppInfo = function (appInfo) {
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/app-definitions/save-app", appInfo, this.authService.getHttpHeaders());
    };
    AppService.prototype.savePageInfo = function (pageInfo, ownerName, appName) {
        var dto = {
            appOwnerName: ownerName,
            appName: appName,
            pageInfo: pageInfo
        };
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/app-definitions/save-page", dto, this.authService.getHttpHeaders());
    };
    AppService.prototype.getPageInfo = function (ownerName, appName, pageName) {
        var _this = this;
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/app-definitions/page/" + ownerName + "/" + appName + "/" + pageName;
        if (this._pages[url]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._pages[url]);
        }
        return this.httpClient.get(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (page) {
            _this._pages[url] = page;
            return page;
        }));
    };
    AppService.prototype.getJsonValue = function (key) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/json-data/get-value/" + key, this.authService.getHttpHeaders());
    };
    AppService.prototype.setJsonValue = function (key, value) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/json-data/set-value", { key: key, value: value }, this.authService.getHttpHeaders());
    };
    /**
     * For development usage.
     */
    AppService.prototype.__reCreateData = function (appToCreate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var appId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveAppInfo(appToCreate.app).toPromise()];
                    case 1:
                        appId = _a.sent();
                        console.log(' appId ', appId);
                        appToCreate.pages.forEach(function (page) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var pageId;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.savePageInfo(page, appToCreate.app.ownerName, appToCreate.app.appName).toPromise()];
                                    case 1:
                                        pageId = _a.sent();
                                        console.log(' pageId ', pageId);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppService.prototype.__setCountries = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countries;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setJsonValue('countries', {
                            uk: [{ label: 'London', value: 'london' },
                                { label: 'Liverpool', value: 'liverpool' },
                                { label: 'Manchester', value: 'manchester' }],
                            ua: [{ label: 'Lviv', value: 'lviv' }, { label: 'Kyiv', value: 'kyiv' }]
                        }).toPromise()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getJsonValue('countries').toPromise()];
                    case 2:
                        countries = _a.sent();
                        console.log('++>', countries);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppService.prototype.__setTableData = function () {
        this.setJsonValue('chemical-elements', _temp_configs_wijmo_config__WEBPACK_IMPORTED_MODULE_7__["tableData"]).toPromise();
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_security__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/custom-app/services/modal.service.ts":
/*!******************************************************!*\
  !*** ./src/app/custom-app/services/modal.service.ts ***!
  \******************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");




var ModalService = /** @class */ (function () {
    function ModalService(_document, componentFactoryResolver, appRef, injector) {
        this._document = _document;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    ModalService.prototype.open = function (item, appContext) {
        this.appendModal(item, appContext);
    };
    ModalService.prototype.close = function () {
        if (this.dialog) {
            this.dialog.modal.hide();
        }
    };
    ModalService.prototype.appendModal = function (item, appContext) {
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["DynamicModalComponent"]).create(this.injector);
        this.dialog = componentRef.instance;
        componentRef.instance.viewConfig = {
            uiModel: item.uiModel,
            workflowConfig: {
                failOnError: true,
                include: ['@common'],
                vars: {},
                consts: {},
                workflowsMap: item.workflowsMap
            },
            dataModel: {},
            appContext: appContext
        };
        componentRef.instance.title = item.title;
        componentRef.instance.modal.onHide.subscribe(function () {
            componentRef.destroy();
        });
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        this._document.body.appendChild(domElem);
        setTimeout(function () {
            componentRef.instance.openModal();
        });
    };
    ModalService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/custom-app/utils.ts":
/*!*************************************!*\
  !*** ./src/app/custom-app/utils.ts ***!
  \*************************************/
/*! exports provided: groupLinkInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupLinkInfos", function() { return groupLinkInfos; });
function groupLinkInfos(items) {
    var groups = {};
    var sItems = [];
    items.forEach(function (item) {
        if (item.groupName) {
            var isFirst = !groups[item.groupName];
            groups[item.groupName] = groups[item.groupName] || createSidebarItem(item, true);
            if (isFirst) {
                sItems.push(groups[item.groupName]);
            }
            groups[item.groupName].children.push(createSidebarItem(item));
        }
        else {
            sItems.push(createSidebarItem(item));
        }
    });
    return sItems;
}
function createSidebarItem(item, group) {
    if (group === void 0) { group = false; }
    var name = group ? item.groupName : item.name;
    var sItem = {
        url: 'http',
        name: name,
        icon: group ? 'icon-cursor' : item.icon,
        attributes: {
            name: name,
            actionName: group ? null : item.actionName
        }
    };
    if (group) {
        sItem.children = [];
    }
    return sItem;
}


/***/ })

}]);
//# sourceMappingURL=custom-app-custom-app-module.js.map