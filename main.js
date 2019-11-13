(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-dynamic-components/dist/@ngx-dynamic-components/bootstrap/fesm5/ngx-dynamic-components-bootstrap.js":
/*!******************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/dist/@ngx-dynamic-components/bootstrap/fesm5/ngx-dynamic-components-bootstrap.js ***!
  \******************************************************************************************************************/
/*! exports provided: BootstrapModule, COMPONENTS_LIST, getCategories, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return COMPONENTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BSContainerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return example$6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return textareaDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return ButtonUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return ButtonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return example$7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return buttonDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return CardProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return cardDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return TextUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return TextProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return textDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return packageName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return containerDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ContainerRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BSContainerRowProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return example$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return containerRowDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return InputUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return InputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return example$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return inputDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return SelectUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SelectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return example$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return selectDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return CheckboxUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CheckboxProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return example$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return checkboxDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return RadioGroupUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return RadioGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return example$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return radioGroupDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TextareaUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return TextareaProperties; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/utils */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "../ngx-dynamic-components/node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");









/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var packageName = 'bootstrap';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/container/container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(ContainerComponent, _super);
    function ContainerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContainer = true;
        _this.isFluidContainer = false;
        _this.height = 'auto';
        _this.dropContainer = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.ngOnInit.call(this)];
                    case 1:
                        _a.sent();
                        if (this.properties.fullWidth) {
                            this.isFluidContainer = true;
                            this.isContainer = false;
                        }
                        if (this.properties.height) {
                            this.height = this.properties.height;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-container',
                    template: "\n    <dc-container-row *ngFor=\"let item of uiModel.children\" [ngStyle]=\"getStyles(item.itemProperties)\"\n      (changedDataModel)=\"changedDataModel.emit($event)\"\n      [uiModel]='item'\n      [dataModel]='dataModel'\n      [interpreter]='interpreter'\n      [scripts]='scripts'\n    ></dc-container-row>\n  ",
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    ContainerComponent.propDecorators = {
        isContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.container',] }],
        isFluidContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.container-fluid',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
        dropContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.drop-container',] }]
    };
    return ContainerComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["BaseUIComponent"]));
if (false) {}
var BSContainerProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(BSContainerProperties, _super);
    function BSContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Is full width container, default false',
            example: 'true',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)
    ], BSContainerProperties.prototype, "fullWidth", void 0);
    return BSContainerProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["ContainerProperties"]));
if (false) {}
/** @type {?} */
var example = {
    title: 'Bootstrap container example',
    uiModel: {
        type: 'bootstrap:container',
        containerProperties: {},
        itemProperties: {},
        children: [{
                type: 'bootstrap:bs-row',
                children: [{
                        type: 'bootstrap:text-input',
                        containerProperties: {},
                        itemProperties: {
                            label: 'Input-1',
                            placeholder: 'Name first section',
                            dataModelPath: '$.first'
                        }
                    }, {
                        type: 'bootstrap:text-input',
                        containerProperties: {},
                        itemProperties: {
                            label: 'Input-2',
                            placeholder: 'Name second section',
                            dataModelPath: '$.second'
                        }
                    }]
            }, {
                type: 'bootstrap:bs-row',
                children: [{
                        type: 'bootstrap:text-input',
                        containerProperties: {},
                        itemProperties: {
                            label: 'Input-11',
                            placeholder: 'Name third section',
                            dataModelPath: '$.third'
                        }
                    }, {
                        type: 'bootstrap:text-input',
                        containerProperties: {},
                        itemProperties: {
                            label: 'Input-22',
                            placeholder: 'Name fourth section',
                            dataModelPath: '$.forth'
                        }
                    }]
            }]
    },
    dataModel: {}
};
/**
 * @record
 */
function ContainerComponentConstrutor() { }
/**
 * @record
 */
function ContainerPropertiesConstrutor() { }
/** @type {?} */
var containerDescriptor = {
    name: 'container',
    label: 'Container',
    packageName: packageName,
    category: "Containers" /* Containers */,
    description: 'Bootstrap container',
    itemProperties: BSContainerProperties,
    component: ContainerComponent,
    example: example,
    defaultModel: {
        type: 'bootstrap:container',
        containerProperties: {
            height: '100%',
            width: '100%'
        },
        itemProperties: {},
        children: []
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/container-row/container-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContainerRowComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(ContainerRowComponent, _super);
    function ContainerRowComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRow = true;
        _this.isColumn = false;
        _this.dropContainer = true;
        _this.display = 'flex';
        return _this;
    }
    /**
     * @return {?}
     */
    ContainerRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.ngOnInit.call(this)];
                    case 1:
                        _a.sent();
                        this.isColumn = this.properties && this.properties.direction === 'column';
                        return [2 /*return*/];
                }
            });
        });
    };
    ContainerRowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-container-row',
                    template: "\n    <div *ngFor=\"let item of uiModel.children\" class=\"col\" [ngStyle]=\"getStyles(item.containerProperties)\"\n      [ngClass]=\"item.containerProperties?.bsClasses\">\n      <dc-ui-selector\n          (changedDataModel)=\"changedDataModel.emit($event)\"\n          [uiModel]='item'\n          [dataModel]='dataModel'\n          [interpreter]='interpreter'\n          [scripts]='scripts'\n      ></dc-ui-selector>\n    </div>\n  "
                }] }
    ];
    ContainerRowComponent.propDecorators = {
        isRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.row',] }],
        isColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.flex-column',] }],
        dropContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.drop-container',] }],
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }]
    };
    return ContainerRowComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["BaseUIComponent"]));
if (false) {}
var BSContainerRowProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(BSContainerRowProperties, _super);
    function BSContainerRowProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Bootstrap row child classes',
            example: 'col-9'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Array)
    ], BSContainerRowProperties.prototype, "bsClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Flex direction',
            example: 'column'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], BSContainerRowProperties.prototype, "direction", void 0);
    return BSContainerRowProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["ContainerProperties"]));
if (false) {}
/** @type {?} */
var example$1 = {
    title: 'Bootstrap container row example',
    uiModel: {
        type: 'bootstrap:bs-row',
        containerProperties: {},
        itemProperties: {
            width: '50%',
            padding: '10px'
        },
        children: [{
                type: 'bootstrap:text-input',
                containerProperties: {},
                itemProperties: {
                    label: 'Input-1',
                    placeholder: 'Name first section',
                    dataModelPath: '$.first'
                }
            }, {
                type: 'bootstrap:text-input',
                containerProperties: {},
                itemProperties: {
                    label: 'Input2',
                    placeholder: 'Name second section',
                    dataModelPath: '$.second'
                }
            }]
    },
    dataModel: {}
};
/**
 * @record
 */
function ContainerRowComponentConstrutor() { }
/**
 * @record
 */
function ContainerPropertiesConstrutor$1() { }
/** @type {?} */
var containerRowDescriptor = {
    name: 'bs-row',
    label: 'Row',
    packageName: 'bootstrap',
    category: "Containers" /* Containers */,
    description: 'Bootstrap row container',
    itemProperties: BSContainerRowProperties,
    component: ContainerRowComponent,
    example: example$1,
    defaultModel: {
        type: 'bootstrap:bs-row',
        containerProperties: {},
        itemProperties: {
            height: '100px',
            width: '100%'
        },
        children: []
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-ui/input-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(InputUIComponent, _super);
    function InputUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputUIComponent.prototype, "cssClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                invisible: this.properties.visible === false,
                required: this.properties.required
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputUIComponent.prototype, "inputStyles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getStyles(this.uiModel.itemProperties, ['background', 'color']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputUIComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.properties.dataModelPath.replace(/[^A-Z]+/gi, '');
        },
        enumerable: true,
        configurable: true
    });
    InputUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-input-ui',
                    template: "\n  <div class=\"form-group align-items-baseline\" [fxLayout]=\"layout\" [ngClass]=\"cssClasses\" [ngStyle]=\"itemStyles\">\n    <label class=\"mr-1 {{properties.labelPosition}}\" [for]=\"id\" *ngIf=\"hasLabel\"\n      [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n    <div class=\"w-100 flex-column\">\n      <input [attr.id]=\"id\" #inputField=\"ngModel\" [type]=\"properties.type\" class=\"form-control\" [ngStyle]=\"inputStyles\"\n        [fxFlex]=\"properties.inputWidth\"\n        [placeholder]=\"properties.placeholder\"\n        [disabled]=\"properties.enabled === false\"\n        [required]=\"properties.required\"\n        [minlength]=\"properties.minlength\"\n        [maxlength]=\"properties.maxlength\"\n        [email]=\"properties.type === 'email'\"\n        [pattern]=\"properties.pattern\"\n        (input)=\"changedDataModel.emit(this.dataModel)\"\n        [attr.name]=\"name\"\n        [(ngModel)]=\"componentDataModel\">\n      <div *ngIf=\"inputField.invalid && (inputField.dirty || inputField.touched)\" class=\"alert alert-danger py-0 px-1 m-0\">\n        <div *ngIf=\"inputField.errors.required\">Field is required.</div>\n        <div *ngIf=\"inputField.errors.minlength\">Min length {{properties.minlength}} characters.</div>\n        <div *ngIf=\"inputField.errors.maxlength\">Max length {{properties.minlength}} characters.</div>\n        <div *ngIf=\"inputField.errors.email\">Email is invalid.</div>\n        <div *ngIf=\"inputField.errors.pattern\">Field should match required pattern.</div>\n      </div>\n    </div>\n  </div>\n  ",
                    styles: ["label.bottom,label.right{-webkit-box-ordinal-group:2;order:1}", "\n    :host {\n      display: inline-block;\n    }\n\n    .required label:after {\n      content: '*';\n    }\n  "]
                }] }
    ];
    return InputUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabeledComponent"]));
var InputProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(InputProperties, _super);
    function InputProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type your name',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], InputProperties.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Input type',
            example: 'text',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], InputProperties.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Is enabled',
            example: 'true',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)
    ], InputProperties.prototype, "enabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Is visible',
            example: 'true',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)
    ], InputProperties.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Input width',
            example: '200px',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], InputProperties.prototype, "inputWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Is field required',
            example: 'true'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)
    ], InputProperties.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Min field value length',
            example: '5'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)
    ], InputProperties.prototype, "minlength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Max field value length',
            example: '10'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)
    ], InputProperties.prototype, "maxlength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'RegExp pattern',
            example: '[a-zA-Z ]*'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], InputProperties.prototype, "pattern", void 0);
    return InputProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabelProperties"]));
if (false) {}
/** @type {?} */
var example$2 = {
    title: 'Text input example',
    uiModel: {
        type: packageName + ":text-input",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            placeholder: 'Enter your name',
            dataModelPath: '$.name'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function InputUIComponentConstrutor() { }
/**
 * @record
 */
function InputPropertiesConstrutor() { }
/** @type {?} */
var inputDescriptor = {
    name: 'text-input',
    label: 'Input field',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Input component',
    itemProperties: InputProperties,
    component: InputUIComponent,
    example: example$2,
    defaultModel: {
        type: packageName + ":text-input",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            placeholder: 'Enter your text',
            dataModelPath: '$.path',
            visible: true,
            enabled: true,
            inputWidth: '100%',
            labelWidth: '80px',
            width: '200px',
            margin: '0',
            type: 'text',
            labelPosition: ''
        }
    },
    propertiesDescriptor: [
        ['type', { name: 'type', label: 'Data Type', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Main,
                combo: [['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']]
            }],
        ['inputWidth', { name: 'inputWidth', label: 'Input Width', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Layout }],
        ['enabled', { name: 'enabled', label: 'Enabled', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Main,
                combo: [[{ label: 'Enable', value: true }, { label: 'Disable', value: false }]]
            }],
        ['visible', { name: 'visible', label: 'Visible', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Main,
                combo: [[{ label: 'Visible', value: true }, { label: 'Hidden', value: false }]]
            }]
    ]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/select-ui/select-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(SelectUIComponent, _super);
    function SelectUIComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = [];
        return _this;
    }
    /**
     * @return {?}
     */
    SelectUIComponent.prototype.onSelect = /**
     * @return {?}
     */
    function () {
        this.changedDataModel.emit(this.dataModel);
        this.triggerAction('_selectionChanged');
    };
    /**
     * @return {?}
     */
    SelectUIComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.dataModel) {
            /** @type {?} */
            var options = this.properties.options;
            if (Array.isArray(options)) {
                this.options = options;
            }
            else if (typeof options === 'string') {
                /** @type {?} */
                var val = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["JSONUtils"].find(this.dataModel, options);
                if (val !== this.options) {
                    this.options = val;
                }
            }
        }
    };
    Object.defineProperty(SelectUIComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var options = this.properties.options;
            return options && options.length ? null : 'disabled';
        },
        enumerable: true,
        configurable: true
    });
    SelectUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-select-ui',
                    template: "\n    <div class=\"form-group mb-0\" [fxLayout]=\"layout\" [ngStyle]=\"itemStyles\">\n      <label selected *ngIf=\"hasLabel\" [for]=\"id\" [class]=\"properties.labelPosition\"\n      [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n      <ng-select [items]=\"options\" (change)=\"onSelect()\"\n      [(ngModel)]=\"componentDataModel\" [attr.disabled]=\"disabled\"></ng-select>\n    </div>",
                    styles: ["label.bottom,label.right{-webkit-box-ordinal-group:2;order:1}"]
                }] }
    ];
    return SelectUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabeledComponent"]));
if (false) {}
var SelectProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(SelectProperties, _super);
    function SelectProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Select options.',
            example: '[{label: "One", value: 1}]',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Array)
    ], SelectProperties.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Label shown when no option is selected.',
            example: 'Please select an option',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], SelectProperties.prototype, "label", void 0);
    return SelectProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabelProperties"]));
if (false) {}
/**
 * @record
 */
function SelectUIComponentConstrutor() { }
/**
 * @record
 */
function SelectPropertiesConstrutor() { }
/** @type {?} */
var example$3 = {
    uiModel: {
        type: packageName + ":select",
        containerProperties: {},
        id: 'stateSelection',
        itemProperties: {
            options: [
                { label: 'United Kingdom', value: 'uk' },
                { label: 'Ukraine', value: 'ua' }
            ],
            label: 'Country',
            dataModelPath: '$.country'
        }
    },
    dataModel: {},
    title: 'Basic select example'
};
/** @type {?} */
var selectDescriptor = {
    name: 'select',
    label: 'UI Select Input',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Select component',
    itemProperties: SelectProperties,
    component: SelectUIComponent,
    example: example$3,
    defaultModel: {
        type: packageName + ":select",
        containerProperties: {},
        itemProperties: {
            options: [
                { label: 'First option', value: '1' },
                { label: 'Second option', value: '2' }
            ],
            width: '200px',
            label: 'Select option',
            dataModelPath: '$.option'
        }
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox-ui/checkbox-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(CheckboxUIComponent, _super);
    function CheckboxUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CheckboxUIComponent.prototype, "align", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layout === 'row' ? 'start center' : 'center start';
        },
        enumerable: true,
        configurable: true
    });
    CheckboxUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-checkbox-ui',
                    template: "\n    <div [fxLayout]=\"layout\" [fxLayoutAlign]=\"align\" [ngStyle]=\"itemStyles\">\n      <label *ngIf=\"hasLabel\" [for]=\"id\"  class=\"{{properties.labelPosition}} my-0\"\n      [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n      <input type=\"checkbox\" class=\"mx-0\" [attr.id]=\"id\"\n        (change)=\"changedDataModel.emit(this.dataModel)\"\n        [(ngModel)]=\"componentDataModel\">\n    </div>\n  ",
                    styles: ["label.bottom,label.right{-webkit-box-ordinal-group:2;order:1}", "\n    label.bottom, label.top {\n      margin: 0;\n    }\n\n    label.right {\n      margin-left: 5px;\n    }\n\n    label.left {\n      margin-right: 5px;\n    }\n  "]
                }] }
    ];
    return CheckboxUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabeledComponent"]));
var CheckboxProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(CheckboxProperties, _super);
    function CheckboxProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CheckboxProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabelProperties"]));
/** @type {?} */
var example$4 = {
    title: 'Checkbox example',
    uiModel: {
        type: packageName + ":checkbox",
        containerProperties: {},
        itemProperties: {
            label: 'Accept conditions',
            dataModelPath: '$.accept',
            labelPosition: 'right'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function CheckboxUIComponentConstrutor() { }
/**
 * @record
 */
function CheckboxPropertiesConstrutor() { }
/** @type {?} */
var checkboxDescriptor = {
    name: 'checkbox',
    packageName: packageName,
    label: 'Checkbox',
    category: "Basic" /* Basic */,
    description: 'Checkbox component',
    itemProperties: CheckboxProperties,
    component: CheckboxUIComponent,
    example: example$4,
    defaultModel: {
        type: packageName + ":checkbox",
        containerProperties: {},
        itemProperties: {
            label: 'Accept conditions',
            width: '200px',
            dataModelPath: '$.accept',
            labelPosition: 'left'
        }
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/radio-group-ui/radio-group-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioGroupUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(RadioGroupUIComponent, _super);
    function RadioGroupUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioGroupUIComponent.prototype, "align", {
        get: /**
         * @return {?}
         */
        function () {
            return this.layout === 'row' ? 'start center' : 'center start';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    RadioGroupUIComponent.prototype.onChange = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.componentDataModel = option.value;
        this.changedDataModel.emit(this.dataModel);
    };
    RadioGroupUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-radio-group-ui',
                    template: "\n    <div class=\"form-check\" *ngFor=\"let option of properties.options\"\n      [fxLayout]=\"layout\" [fxLayoutAlign]=\"align\" [ngStyle]=\"itemStyles\">\n      <label class=\"mb-0 {{properties.labelPosition}}\" [for]=\"id\" *ngIf=\"hasLabel\"\n        [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{option.label}}</label>\n      <input type=\"radio\"\n        (change)=\"onChange(option)\"\n        [name]=\"properties.dataModelPath\" [value]=\"option.value\">\n    </div>\n  ",
                    styles: ["label.bottom,label.right{-webkit-box-ordinal-group:2;order:1}"]
                }] }
    ];
    return RadioGroupUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabeledComponent"]));
var RadioGroupProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(RadioGroupProperties, _super);
    function RadioGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Radio group options',
            example: '[{label: "One", value: 1}]',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Array)
    ], RadioGroupProperties.prototype, "options", void 0);
    return RadioGroupProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabelProperties"]));
if (false) {}
/** @type {?} */
var example$5 = {
    title: 'Radio group example',
    uiModel: {
        type: packageName + ":radio-group",
        containerProperties: {},
        itemProperties: {
            label: 'Select color',
            dataModelPath: '$.color',
            options: [{ label: 'White', value: 'white' }, { label: 'Black', value: 'black' }],
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function RadioGroupUIComponentConstrutor() { }
/**
 * @record
 */
function RadioGroupPropertiesConstrutor() { }
/** @type {?} */
var radioGroupDescriptor = {
    name: 'radio-group',
    label: 'Single choice boxes',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Radio group component',
    itemProperties: RadioGroupProperties,
    component: RadioGroupUIComponent,
    example: example$5,
    defaultModel: {
        type: packageName + ":radio-group",
        containerProperties: {},
        itemProperties: {
            label: 'Select option',
            dataModelPath: '$.radioGroup',
            options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: 'black' }],
        }
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/textarea-ui/textarea-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(TextareaUIComponent, _super);
    function TextareaUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-textarea-ui',
                    template: "\n    <div class=\"form-group\" [ngStyle]=\"itemStyles\"  [fxLayout]=\"layout\">\n      <label *ngIf=\"hasLabel\" [class]=\"properties.labelPosition\" [for]=\"id\"\n        [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n      <div class=\"w-100 flex-column\">\n        <textarea #txtAreaField=\"ngModel\" [attr.id]=\"id\" class=\"form-control\"\n          [rows]=\"properties.rows\"\n          [placeholder]=\"properties.placeholder\"\n          [ngStyle]=\"itemStyles\"\n          [required]=\"properties.required\"\n          [minlength]=\"properties.minlength\"\n          [maxlength]=\"properties.maxlength\"\n          (input)=\"changedDataModel.emit(this.dataModel)\"\n          [(ngModel)]=\"componentDataModel\"></textarea>\n        <div *ngIf=\"txtAreaField.invalid && (txtAreaField.dirty || txtAreaField.touched)\" class=\"alert alert-danger py-0 px-1 m-0\">\n          <div *ngIf=\"txtAreaField.errors.required\">Field is required.</div>\n          <div *ngIf=\"txtAreaField.errors.minlength\">Min length {{properties.minlength}} characters.</div>\n          <div *ngIf=\"txtAreaField.errors.maxlength\">Max length {{properties.minlength}} characters.</div>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["label.bottom,label.right{-webkit-box-ordinal-group:2;order:1}"]
                }] }
    ];
    return TextareaUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabeledComponent"]));
var TextareaProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(TextareaProperties, _super);
    function TextareaProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Number of rows in textarea',
            example: '5',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)
    ], TextareaProperties.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type about yourself',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], TextareaProperties.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Is field required',
            example: 'true'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Boolean)
    ], TextareaProperties.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Min field value length',
            example: '5'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)
    ], TextareaProperties.prototype, "minlength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Max field value length',
            example: '10'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Number)
    ], TextareaProperties.prototype, "maxlength", void 0);
    return TextareaProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["LabelProperties"]));
if (false) {}
/** @type {?} */
var example$6 = {
    title: 'Text area example',
    uiModel: {
        type: packageName + ":textarea",
        containerProperties: {},
        itemProperties: {
            rows: 10,
            placeholder: 'Type information about yourself',
            dataModelPath: '$.info'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function TextareaUIComponentConstrutor() { }
/**
 * @record
 */
function TextareaPropertiesConstrutor() { }
/** @type {?} */
var textareaDescriptor = {
    name: 'textarea',
    label: 'Text Area',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Text area component',
    itemProperties: TextareaProperties,
    component: TextareaUIComponent,
    example: example$6,
    defaultModel: {
        type: packageName + ":textarea",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            rows: 5,
            placeholder: 'Placeholder text',
            dataModelPath: '$.textarea'
        }
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button-ui/button-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(ButtonUIComponent, _super);
    function ButtonUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ButtonUIComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.properties.clickActionKey) {
            this.interpreter.evaluate(this.scripts, { dataModel: this.dataModel, uiModel: this.uiModel }, this.properties.clickActionKey);
            this.changedDataModel.emit(this.dataModel);
        }
    };
    Object.defineProperty(ButtonUIComponent.prototype, "btnClass", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["btn " + this.properties.btnClass] = this.properties.btnClass,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    ButtonUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-button-ui',
                    template: "\n    <button [ngClass]=\"btnClass\"\n      [type]=\"properties.type\" [ngStyle]=\"itemStyles\"\n      (click)=\"onClick()\">{{properties.label}}</button>\n  "
                }] }
    ];
    return ButtonUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["BaseUIComponent"]));
var ButtonProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(ButtonProperties, _super);
    function ButtonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Button label',
            example: 'Click me!',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], ButtonProperties.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Key for action that fires onclick',
            example: 'submit',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], ButtonProperties.prototype, "clickActionKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Bootstrap predefined button class',
            example: 'btn-secondary',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], ButtonProperties.prototype, "btnClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Button type: button|submit|reset. Default: button',
            example: 'submit',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], ButtonProperties.prototype, "type", void 0);
    return ButtonProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["StyleProperties"]));
if (false) {}
/** @type {?} */
var example$7 = {
    title: 'Basic button example',
    uiModel: {
        type: packageName + ":button",
        containerProperties: {},
        itemProperties: {
            label: 'SUBMIT',
            width: '50%',
            margin: '15px',
            padding: '10px 5px 10px 0px',
            clickActionKey: 'consoleLog',
            type: 'button'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function ButtonUIComponentConstrutor() { }
/**
 * @record
 */
function ButtonPropertiesConstrutor() { }
/** @type {?} */
var buttonDescriptor = {
    name: 'button',
    label: 'Button',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Button component',
    itemProperties: ButtonProperties,
    component: ButtonUIComponent,
    example: example$7,
    defaultModel: {
        type: packageName + ":button",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            clickActionKey: 'consoleLog',
            btnClass: 'btn-primary',
            type: 'button'
        }
    },
    propertiesDescriptor: [
        ['type', { name: 'type', label: 'Type', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Main,
                combo: [['button', 'submit', 'reset']]
            }],
        ['btnClass', { name: 'btnClass', label: 'CSS Class', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Main,
                combo: [['btn-primary', 'btn-secondary', 'btn-light', 'btn-success', 'btn-danger',
                        'btn-warning', 'btn-info', 'btn-dark', 'btn-link']]
            }],
    ]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card/card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(CardComponent, _super);
    function CardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardComponent.prototype, "header", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getChildByIndex(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getChildByIndex(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "footer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getChildByIndex(2);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CardComponent.prototype.getChildByIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["getItemByIndex"])(this.uiModel.children, index);
    };
    CardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-card',
                    template: "\n  <div class=\"card\">\n    <div class=\"card-header\" *ngIf=\"header\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='header'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </div>\n    <div class=\"card-body\" *ngIf=\"content\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='content'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </div>\n    <div class=\"card-footer\" *ngIf=\"footer\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='footer'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </div>\n  </div>"
                }] }
    ];
    return CardComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["BaseUIComponent"]));
var CardProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(CardProperties, _super);
    function CardProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Card can have 3 children, 1 - header, 2 - content, 3 - footer.',
            example: "[null, {\n      type: 'material:text',\n      containerProperties: {},\n      itemProperties: {\n        text: 'Card content text',\n      }\n    }, null]",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", Array)
    ], CardProperties.prototype, "children", void 0);
    return CardProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["ContainerProperties"]));
if (false) {}
/** @type {?} */
var example$8 = {
    title: 'Card panel example',
    uiModel: {
        type: 'bootstrap:card',
        containerProperties: {},
        itemProperties: {
            padding: '10px',
            margin: '10px auto',
            width: '80%'
        },
        children: [{
                type: 'material:text',
                containerProperties: {},
                itemProperties: {
                    text: 'Card header text',
                    width: '100%'
                }
            }, {
                type: 'material:textarea',
                containerProperties: {
                    width: '100%',
                },
                itemProperties: {
                    rows: 4,
                    placeholder: 'Type card information',
                    dataModelPath: '$.card/info'
                }
            }, {
                type: 'bootstrap:button',
                containerProperties: {},
                itemProperties: {
                    label: 'Submit',
                    margin: '16px',
                    width: '50%',
                    clickActionKey: 'consoleLog'
                }
            }]
    },
    dataModel: {}
};
/**
 * @record
 */
function CardComponentConstrutor() { }
/**
 * @record
 */
function CardPropertiesConstrutor() { }
/** @type {?} */
var cardDescriptor = {
    name: 'card',
    label: 'Card',
    packageName: packageName,
    category: "Containers" /* Containers */,
    description: 'Card layout component',
    itemProperties: CardProperties,
    component: CardComponent,
    example: example$8
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/text-ui/text-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(TextUIComponent, _super);
    function TextUIComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.display = 'inline-block';
        return _this;
    }
    Object.defineProperty(TextUIComponent.prototype, "txtStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.properties['text-style'];
        },
        enumerable: true,
        configurable: true
    });
    TextUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-text',
                    template: "\n    <div [ngSwitch]=\"txtStyle\">\n      <h1 *ngSwitchCase=\"'h1'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h1>\n      <h2 *ngSwitchCase=\"'h2'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h2>\n      <h3 *ngSwitchCase=\"'h3'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h3>\n      <h4 *ngSwitchCase=\"'h4'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h4>\n      <h5 *ngSwitchCase=\"'h5'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h5>\n      <h6 *ngSwitchCase=\"'h6'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h6>\n      <p *ngSwitchCase=\"''\" [ngStyle]=\"itemStyles\">{{properties.text}}</p>\n      <p *ngSwitchCase=\"undefined\" [ngStyle]=\"itemStyles\">{{properties.text}}</p>\n      <span *ngSwitchDefault [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</span>\n    </div>\n    "
                }] }
    ];
    TextUIComponent.propDecorators = {
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }]
    };
    return TextUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["BaseUIComponent"]));
if (false) {}
var TextProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(TextProperties, _super);
    function TextProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Displays text data.',
            example: 'Text information',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], TextProperties.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["propDescription"])({
            description: 'Text style text data.',
            example: 'h2',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__metadata"])("design:type", String)
    ], TextProperties.prototype, "text-style", void 0);
    return TextProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["StyleProperties"]));
if (false) {}
/**
 * @record
 */
function TextUIComponentConstrutor() { }
/**
 * @record
 */
function TextPropertiesConstrutor() { }
/** @type {?} */
var example$9 = {
    title: 'Text compoent example',
    uiModel: {
        type: packageName + ":text",
        containerProperties: {},
        itemProperties: {
            text: "",
            width: '50%',
            padding: '20px'
        }
    },
    dataModel: {}
};
/** @type {?} */
var textDescriptor = {
    name: 'text',
    packageName: packageName,
    label: 'Text',
    category: "Basic" /* Basic */,
    description: 'Text component',
    itemProperties: TextProperties,
    component: TextUIComponent,
    example: example$9,
    defaultModel: {
        type: packageName + ":text",
        itemProperties: {
            text: 'Text',
            width: '100%'
        },
        containerProperties: {}
    },
    propertiesDescriptor: [
        ['text-style', {
                name: 'text-style', label: 'Text style', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["PropertyCategories"].Main,
                combo: [['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4']]
            }]
    ]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS_LIST = [
    containerDescriptor,
    containerRowDescriptor,
    inputDescriptor,
    selectDescriptor,
    checkboxDescriptor,
    radioGroupDescriptor,
    textareaDescriptor,
    buttonDescriptor,
    cardDescriptor,
    textDescriptor
];
// Register components.
/**
 * @return {?}
 */
function registerComponents() {
    COMPONENTS_LIST.forEach((/**
     * @param {?} component
     * @return {?}
     */
    function (component) { return _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["CoreService"].registerComponent(component); }));
}
/**
 * @return {?}
 */
function getCategories() {
    /** @type {?} */
    var categories = COMPONENTS_LIST.reduce((/**
     * @param {?} map
     * @param {?} desc
     * @return {?}
     */
    function (map, desc) {
        map[desc.category] = map[desc.category] || [];
        map[desc.category].push(desc);
        return map;
    }), {});
    return Object.entries(categories).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__read"])(_a, 2), key = _b[0], val = _b[1];
        return {
            name: key,
            components: val,
            packageName: packageName
        };
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/bootstrap.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["setTheme"])('bs4');
        registerComponents();
    }
    BootstrapModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [ContainerComponent, ContainerRowComponent, InputUIComponent, SelectUIComponent,
                        CheckboxUIComponent, RadioGroupUIComponent, TextareaUIComponent, ButtonUIComponent, CardComponent, TextUIComponent],
                    imports: [
                        _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"]
                    ],
                    exports: [ContainerComponent, ContainerRowComponent, InputUIComponent],
                    entryComponents: [ContainerComponent, ContainerRowComponent, InputUIComponent, SelectUIComponent,
                        CheckboxUIComponent, RadioGroupUIComponent, TextareaUIComponent, ButtonUIComponent, CardComponent, TextUIComponent]
                },] }
    ];
    /** @nocollapse */
    BootstrapModule.ctorParameters = function () { return []; };
    return BootstrapModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-dynamic-components-bootstrap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-dynamic-components-bootstrap.js.map


/***/ }),

/***/ "../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js":
/*!********************************************************************************************************!*\
  !*** ../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js ***!
  \********************************************************************************************************/
/*! exports provided: ActionStatus, BaseUIComponent, BindingProperties, ContainerControlProperties, ContainerProperties, ControlProperties, CoreModule, CoreService, DataModelProperties, DesignerComponent, ExecutionContext, JSONUtils, LabelProperties, LabeledComponent, NGXDynamicComponent, PropertyCategories, StyleProperties, StylePropertiesList, UIModel, UISelectorComponent, WorkflowEditorComponent, WorkflowEngine, WorkflowLogger, actionDescriptor, commonActionsMap, formatObjToJsonStr, getCssPath, getItemByIndex, kebabStrToCamel, mapToObj, propDescription, registerAction, resolvePath, resolveValue, resolveVariable, resolveWorkflowPath, setFields, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStatus", function() { return ActionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUIComponent", function() { return BaseUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingProperties", function() { return BindingProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerControlProperties", function() { return ContainerControlProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerProperties", function() { return ContainerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlProperties", function() { return ControlProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModelProperties", function() { return DataModelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerComponent", function() { return DesignerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionContext", function() { return ExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONUtils", function() { return JSONUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelProperties", function() { return LabelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledComponent", function() { return LabeledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXDynamicComponent", function() { return NGXDynamicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCategories", function() { return PropertyCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleProperties", function() { return StyleProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylePropertiesList", function() { return StylePropertiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModel", function() { return UIModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UISelectorComponent", function() { return UISelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowEditorComponent", function() { return WorkflowEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowEngine", function() { return WorkflowEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowLogger", function() { return WorkflowLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionDescriptor", function() { return actionDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonActionsMap", function() { return commonActionsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatObjToJsonStr", function() { return formatObjToJsonStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssPath", function() { return getCssPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemByIndex", function() { return getItemByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabStrToCamel", function() { return kebabStrToCamel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToObj", function() { return mapToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propDescription", function() { return propDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return registerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValue", function() { return resolveValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVariable", function() { return resolveVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveWorkflowPath", function() { return resolveWorkflowPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFields", function() { return setFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DragDropService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ControlEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return PropertiesEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ControlsPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ComboPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var pscript_interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pscript-interpreter */ "../ngx-dynamic-components/node_modules/pscript-interpreter/dist/pscript-interpreter.esm.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../ngx-dynamic-components/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../ngx-dynamic-components/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds */ "../ngx-dynamic-components/node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-dragula */ "../ngx-dynamic-components/node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/popover */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-split */ "../ngx-dynamic-components/node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "../ngx-dynamic-components/node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



















/**
 * @fileoverview added by tsickle
 * Generated from: lib/properties/descriptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} description
 * @return {?}
 */
function propDescription(description) {
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function decorate(target, key) {
        /** @type {?} */
        var properties = target.hasOwnProperty('properties') ? target.properties : [];
        /** @type {?} */
        var newProp = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ name: key }, description);
        /** @type {?} */
        var existIndex = properties.findIndex((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.name === key; }));
        if (existIndex === -1) {
            properties.push(newProp);
        }
        else {
            properties.splice(existIndex, 1, newProp);
        }
        /** @type {?} */
        var proto = Object.getPrototypeOf(target);
        while (proto.hasOwnProperty('properties')) {
            // Filter overridden properties.
            /** @type {?} */
            var protoProps = proto.properties.filter((/**
             * @param {?} protoP
             * @return {?}
             */
            function (protoP) { return !properties.map((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.name; })).includes(protoP.name); }));
            properties = properties.concat(protoProps);
            proto = Object.getPrototypeOf(proto);
        }
        target.properties = properties.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }));
    }
    return decorate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/properties/models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PropDescriptor() { }
if (false) {}
/**
 * @record
 */
function UIModelProperty() { }
if (false) {}
/** @enum {string} */
var PropertyCategories = {
    Layout: "Layout Properties",
    Container: "Container Properties",
    Main: "Main Properties",
    Appearance: "Appearance Properties",
    Validation: "Validation Properties",
};
/**
 * @record
 */
function ComponentProperty() { }
if (false) {}
/**
 * @record
 */
function ComponentPropertyValue() { }
if (false) {}
/**
 * @abstract
 */
var StyleProperties = /** @class */ (function () {
    function StyleProperties() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s width.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s height.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s padding.',
            example: '10px 5px'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "padding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s margin.',
            example: '5px 3px 5px 10px'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "margin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s min width.',
            example: '10px'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "min-width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s min height.',
            example: '10px'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "min-height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s background.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s color.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s font weight.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "font-weight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s font size.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "font-size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s font style.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "font-style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Element\'s border.',
            example: '100%'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], StyleProperties.prototype, "border", void 0);
    return StyleProperties;
}());
if (false) {}
/**
 * @abstract
 */
var BindingProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BindingProperties, _super);
    function BindingProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Path to id in data model.',
            example: 'name'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], BindingProperties.prototype, "dataModelPath", void 0);
    return BindingProperties;
}(StyleProperties));
if (false) {}
/**
 * @abstract
 */
var DataModelProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DataModelProperties, _super);
    function DataModelProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Component Data Source.',
            example: '{{responseContext}}/dataset'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], DataModelProperties.prototype, "dataSource", void 0);
    return DataModelProperties;
}(BindingProperties));
if (false) {}
/**
 * @abstract
 */
var LabelProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(LabelProperties, _super);
    function LabelProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Label orientation',
            example: 'bottom',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], LabelProperties.prototype, "labelPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Label',
            example: 'Username',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], LabelProperties.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Label width',
            example: '80px',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], LabelProperties.prototype, "labelWidth", void 0);
    return LabelProperties;
}(BindingProperties));
if (false) {}
/**
 * @abstract
 */
var ContainerProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ContainerProperties, _super);
    function ContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        propDescription({
            description: 'Array of children ui Models',
            example: '[{type: \'text\', itemProperties: {}, containerProperties: {}}]',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Array)
    ], ContainerProperties.prototype, "children", void 0);
    return ContainerProperties;
}(StyleProperties));
if (false) {}
/** @type {?} */
var StylePropertiesList = ['width', 'height', 'padding', 'margin', 'min-height', 'min-width', 'background', 'color',
    'font-size', 'font-weight', 'font-style'];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/properties/maps.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Container properties related to each component.
 * @type {?}
 */
var ContainerControlProperties = new Map([
    ['fxFlex', { name: 'fxFlex', label: 'Flex Resizing', category: PropertyCategories.Container }],
    ['fxFlexOrder', { name: 'fxFlexOrder', label: 'Flex Order', category: PropertyCategories.Container }],
    ['fxFlexOffset', { name: 'fxFlexOffset', label: 'Flex Offset', category: PropertyCategories.Container }],
    ['fxFlexAlign', {
            name: 'fxFlexAlign', label: 'Flex Align', category: PropertyCategories.Container,
            combo: [['start', 'baseline', 'center', 'end']]
        }],
    ['fxFlexFill', { name: 'fxFlexFill', label: 'Flex Fill', category: PropertyCategories.Container }]
]);
// background, color, font
/**
 * Item properties can be used in any component.
 * @type {?}
 */
var ControlProperties = new Map([
    // General Component properties
    ['width', { name: 'width', label: 'Width', category: PropertyCategories.Layout }],
    ['height', { name: 'height', label: 'Height', category: PropertyCategories.Layout }],
    ['min-width', { name: 'min-width', label: 'Min width', category: PropertyCategories.Layout }],
    ['min-height', { name: 'min-height', label: 'Min height', category: PropertyCategories.Layout }],
    ['margin', { name: 'margin', label: 'Margin', category: PropertyCategories.Layout }],
    ['padding', { name: 'padding', label: 'Padding', category: PropertyCategories.Layout }],
    // Flex Container properties
    ['fxLayout', {
            name: 'fxLayout', label: 'Flex Direction', category: PropertyCategories.Main,
            combo: [[{ label: 'Row', value: 'row' }, { label: 'Column', value: 'column' }]]
        }],
    ['fxLayoutAlign', {
            name: 'fxLayoutAlign', label: 'Children Align', category: PropertyCategories.Main,
            combo: [['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
                ['start', 'center', 'end', 'space-around', 'space-between', 'stretch', 'baseline']]
        }],
    ['fxLayoutGap', { name: 'fxLayoutGap', label: 'Children Gap', category: PropertyCategories.Main }],
    // Field properties
    ['label', { name: 'label', label: 'Label', category: PropertyCategories.Main }],
    ['labelPosition', {
            name: 'labelPosition', label: 'Label Position', category: PropertyCategories.Main,
            combo: [['left', 'top', 'right', 'bottom']]
        }],
    ['labelWidth', { name: 'labelWidth', label: 'Label Width', category: PropertyCategories.Layout }],
    ['dataModelPath', { name: 'dataModelPath', label: 'Binding', category: PropertyCategories.Main }],
    // Appearence
    ['background', { name: 'background', label: 'Background', category: PropertyCategories.Appearance }],
    ['color', { name: 'color', label: 'Color', category: PropertyCategories.Appearance }],
    ['font-weight', {
            name: 'font-weight', label: 'Font weight', category: PropertyCategories.Appearance,
            combo: [['bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900]]
        }],
    ['font-size', {
            name: 'font-size', label: 'Font size', category: PropertyCategories.Appearance,
            combo: [['large', 'larger', 'medium', 'small', 'smaller', 'x-large', 'xx-large', 'x-small', 'xx-small']]
        }],
    ['font-style', {
            name: 'font-style', label: 'Font style', category: PropertyCategories.Appearance,
            combo: [['italic', 'oblique', 'normal']]
        }],
    ['border', {
            name: 'border', label: 'Border', category: PropertyCategories.Appearance,
            combo: [[{ label: 'all', value: 'border' }, { label: 'top', value: 'border-top' }, { label: 'left', value: 'border-left' },
                    { label: 'right', value: 'border-right' }, { label: 'bottom', value: 'border-bottom' }], 'border-value']
        }],
    // Validation properties
    ['required', { name: 'required', label: 'Required', category: PropertyCategories.Validation,
            combo: [[{ label: 'true', value: true }, { label: 'false', value: false }]] }],
    ['minlength', { name: 'minlength', label: 'Min length', category: PropertyCategories.Validation }],
    ['maxlength', { name: 'maxlength', label: 'Max length', category: PropertyCategories.Validation }],
    ['pattern', { name: 'pattern', label: 'Pattern', category: PropertyCategories.Validation }]
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/properties/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/core.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    /**
     * @param {?} desc
     * @return {?}
     */
    CoreService.registerComponent = /**
     * @param {?} desc
     * @return {?}
     */
    function (desc) {
        var name = desc.name, packageName = desc.packageName, propertiesDescriptor = desc.propertiesDescriptor;
        if (propertiesDescriptor) {
            propertiesDescriptor.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            function (prop) {
                ControlProperties.set(packageName + ":" + name + ":" + prop[0], prop[1]);
            }));
        }
        CoreService.COMPONENTS_REGISTER.set(packageName + ":" + name, desc);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CoreService.getComponent = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (CoreService.COMPONENTS_REGISTER.has(type)) {
            return CoreService.COMPONENTS_REGISTER.get(type).component;
        }
        throw new Error("Component " + type + " is not registered");
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CoreService.getComponentDescriptor = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (CoreService.COMPONENTS_REGISTER.has(type)) {
            return CoreService.COMPONENTS_REGISTER.get(type);
        }
        throw new Error("ComponentDescriptor " + type + " is not registered");
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CoreService.getComponentProperties = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        try {
            /** @type {?} */
            var desc = CoreService.getComponentDescriptor(type);
            return desc.itemProperties.prototype.properties;
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * @return {?}
     */
    CoreService.getListOfComponents = /**
     * @return {?}
     */
    function () {
        return Array.from(CoreService.COMPONENTS_REGISTER.values());
    };
    CoreService.COMPONENTS_REGISTER = new Map();
    CoreService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ CoreService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
    return CoreService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AttributesMap() { }
if (false) {}
/**
 * @record
 * @template T
 */
function ComponentExample() { }
if (false) {}
/**
 * @record
 */
function AttributesMapConstructor() { }
/**
 * @record
 * @template ComponentType, PropertiesType
 */
function ComponentDescriptor() { }
if (false) {}
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
UIModel = /** @class */ (function () {
    function UIModel() {
    }
    return UIModel;
}());
if (false) {}
/**
 * @record
 */
function ComponentConfiguration() { }
if (false) {}
/**
 * @record
 */
function IVariableResolver() { }
if (false) {}
/**
 * @record
 */
function SelectedComponent() { }
if (false) {}
/**
 * @record
 */
function OptionValue() { }
if (false) {}
/** @enum {string} */
var Categories = {
    Basic: "Basic",
    Containers: "Containers",
    Data: "Data",
    CustomControls: "Custom Controls",
    DataTable: "Data table",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BaseUIComponentConstructor() { }
/**
 * @param {?} descriptor
 * @return {?}
 */
function actionDescriptor(descriptor) {
    return (/**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        target.descriptor = descriptor;
    });
}
/**
 * Safe get item by index from array.
 * @param {?} arr - array.
 * @param {?} idx - index.
 * @return {?}
 */
function getItemByIndex(arr, idx) {
    if (arr && arr.length > idx) {
        return arr[idx];
    }
}
/**
 * Convering Javascript string Map to object
 * @param {?} map - map to convert.
 * @param {?=} excludeKeys - array of keys to exclude from result.
 * @return {?}
 */
function mapToObj(map, excludeKeys) {
    if (excludeKeys === void 0) { excludeKeys = []; }
    /** @type {?} */
    var obj = {};
    map.forEach((/**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    function (value, key) {
        if (!excludeKeys.includes(key)) {
            obj[key] = value;
        }
    }));
    return obj;
}
/**
 * @param {?} el
 * @param {?} parent
 * @return {?}
 */
function getCssPath(el, parent) {
    if (el instanceof Element) {
        /** @type {?} */
        var path = [];
        while (el !== parent) {
            /** @type {?} */
            var selector = el.nodeName.toLowerCase();
            /** @type {?} */
            var sib = el;
            /** @type {?} */
            var nth = 1;
            while (sib && sib !== parent) {
                sib = sib.previousSibling;
                if (sib instanceof Element) {
                    nth++;
                }
            }
            selector += ":nth-child(" + nth + ")";
            path.unshift(selector);
            el = el.parentNode;
        }
        return path.join(' > ');
    }
}
/** @type {?} */
var kebabStrToCamel = (/**
 * @param {?} s
 * @return {?}
 */
function (s) {
    return s.replace(/([-][a-z])/ig, (/**
     * @param {?} $1
     * @return {?}
     */
    function ($1) {
        return $1.toUpperCase().replace('-', '');
    }));
});
/**
 * @param {?} fields
 * @param {?} data
 * @return {?}
 */
function setFields(fields, data) {
    if (!fields) {
        return data;
    }
    return fields.reduce((/**
     * @param {?} res
     * @param {?} field
     * @return {?}
     */
    function (res, field) {
        if (Array.isArray(field)) {
            res[field[1]] = data[field[0]];
        }
        else {
            res[field] = data[field];
        }
        return res;
    }), {});
}
/**
 * @param {?} obj
 * @return {?}
 */
function formatObjToJsonStr(obj) {
    if (obj === null || obj === undefined) {
        return '';
    }
    if (typeof obj === 'string') {
        return obj;
    }
    return JSON.stringify(obj, null, '\t');
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/json.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides utility classes to traverse JSON objects.
 *
 */
var JSONUtils = /** @class */ (function () {
    function JSONUtils() {
    }
    /**
     * A utility method to find values in the JSON tree.
     * It is similar as JSONPath (or XML Path). But it
     *  - supports recursive search
     *  - can create object structure if missing.
     * @param value - a simple Javascript object
     * @param path  - path (check out json.utils.spec.ts for syntax)
     * @param defaultValue - if present and @param path is syntactically correct. It will create an object structure accordignly.
     *  If NULL, then it will return null.
     * @example
     * const newObject = { someObject: 11 };
     * const result = JSONUtils.find(testObject, '$.parent/newProperty', newObject);
     */
    /**
     * A utility method to find values in the JSON tree.
     * It is similar as JSONPath (or XML Path). But it
     *  - supports recursive search
     *  - can create object structure if missing.
     * \@example
     * const newObject = { someObject: 11 };
     * const result = JSONUtils.find(testObject, '$.parent/newProperty', newObject);
     * @param {?} objectValue
     * @param {?} path  - path (check out json.utils.spec.ts for syntax)
     * @param {?=} defaultValue - if present and \@param path is syntactically correct. It will create an object structure accordignly.
     *  If NULL, then it will return null.
     * @return {?}
     */
    JSONUtils.find = /**
     * A utility method to find values in the JSON tree.
     * It is similar as JSONPath (or XML Path). But it
     *  - supports recursive search
     *  - can create object structure if missing.
     * \@example
     * const newObject = { someObject: 11 };
     * const result = JSONUtils.find(testObject, '$.parent/newProperty', newObject);
     * @param {?} objectValue
     * @param {?} path  - path (check out json.utils.spec.ts for syntax)
     * @param {?=} defaultValue - if present and \@param path is syntactically correct. It will create an object structure accordignly.
     *  If NULL, then it will return null.
     * @return {?}
     */
    function (objectValue, path, defaultValue) {
        if (path === '$') {
            return objectValue;
        }
        /** @type {?} */
        var pMatch = JSONUtils.getParentPathMatch(path);
        if (pMatch) {
            return JSONUtils.getDataPathProps(objectValue, pMatch.groups.dataPath, defaultValue);
        }
        /** @type {?} */
        var fMatch = JSONUtils.getFlatternPathMatch(path);
        if (fMatch) {
            return JSONUtils.getFlatternMatch(objectValue, (/** @type {?} */ (fMatch.groups)), defaultValue);
        }
        return null;
    };
    /**
     * Get patern path match.
     * @param path - property path.
     */
    /**
     * Get patern path match.
     * @private
     * @param {?} path - property path.
     * @return {?}
     */
    JSONUtils.getParentPathMatch = /**
     * Get patern path match.
     * @private
     * @param {?} path - property path.
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var pMatch = path.match(new RegExp(JSONUtils.parentPathReg));
        if (pMatch) {
            pMatch.groups = { dataPath: pMatch[1] };
        }
        return pMatch;
    };
    /**
     * Gets flattern path match.
     * @param path - property path.
     */
    /**
     * Gets flattern path match.
     * @private
     * @param {?} path - property path.
     * @return {?}
     */
    JSONUtils.getFlatternPathMatch = /**
     * Gets flattern path match.
     * @private
     * @param {?} path - property path.
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var fMatch = path.match(new RegExp(JSONUtils.flatternPathReg));
        if (fMatch) {
            fMatch.groups = {
                flattern: getItemByIndex(fMatch, 2),
                filter: getItemByIndex(fMatch, 4),
                dataPath: getItemByIndex(fMatch, 6)
            };
        }
        return fMatch;
    };
    /**
     * An utility method to set value in JSON tree.
     * @param objectValue - Javascript object.
     * @param path - path.
     * @param value - value to be set.
     * @example
     * const inObject: any = {};
     * JSONUtils.setValue(inObject, '$.parent/someValue', 55);
     */
    /**
     * An utility method to set value in JSON tree.
     * \@example
     * const inObject: any = {};
     * JSONUtils.setValue(inObject, '$.parent/someValue', 55);
     * @param {?} objectValue - Javascript object.
     * @param {?} path - path.
     * @param {?} value - value to be set.
     * @return {?}
     */
    JSONUtils.setValue = /**
     * An utility method to set value in JSON tree.
     * \@example
     * const inObject: any = {};
     * JSONUtils.setValue(inObject, '$.parent/someValue', 55);
     * @param {?} objectValue - Javascript object.
     * @param {?} path - path.
     * @param {?} value - value to be set.
     * @return {?}
     */
    function (objectValue, path, value) {
        if (path === '$') {
            return Object.assign(objectValue, value);
        }
        /** @type {?} */
        var pMatch = JSONUtils.getParentPathMatch(path);
        if (pMatch) {
            return JSONUtils.setDataPathProp(objectValue, pMatch.groups.dataPath, value);
        }
        /** @type {?} */
        var fMatch = JSONUtils.getFlatternPathMatch(path);
        if (fMatch) {
            return JSONUtils.setFlatternProps(objectValue, (/** @type {?} */ (fMatch.groups)), value);
        }
    };
    /**
     * Gets properties that matches flattern path and filter.
     * @param objectValue - Javascript object.
     * @param groups - matched flattern reqexp groups.
     * @param groups.flattern - flattern property name.
     * @param groups.filter - flattern filter string.
     * @param groups.dataPath - property path.
     * @param defaultValue - default value if property does not exist.
     */
    /**
     * Gets properties that matches flattern path and filter.
     * @private
     * @param {?} objectValue - Javascript object.
     * @param {?} __1
     * @param {?} defaultValue - default value if property does not exist.
     * @return {?}
     */
    JSONUtils.getFlatternMatch = /**
     * Gets properties that matches flattern path and filter.
     * @private
     * @param {?} objectValue - Javascript object.
     * @param {?} __1
     * @param {?} defaultValue - default value if property does not exist.
     * @return {?}
     */
    function (objectValue, _a, defaultValue) {
        var flattern = _a.flattern, filter = _a.filter, dataPath = _a.dataPath;
        /** @type {?} */
        var flatternProps = JSONUtils.getFlatternProps(objectValue, flattern);
        flatternProps = flatternProps.filter((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) { return JSONUtils.filterObj(prop, filter); }));
        if (dataPath) {
            flatternProps = JSONUtils.getDataPathProps(flatternProps, dataPath, defaultValue);
        }
        if (flatternProps.length === 1) {
            return flatternProps[0];
        }
        return flatternProps;
    };
    /**
     * Gets properties satisfying flattern path.
     * @param obj - Javascript object or array.
     * @param flattern - flattern property name.
     */
    /**
     * Gets properties satisfying flattern path.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} flattern - flattern property name.
     * @return {?}
     */
    JSONUtils.getFlatternProps = /**
     * Gets properties satisfying flattern path.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} flattern - flattern property name.
     * @return {?}
     */
    function (obj, flattern) {
        /** @type {?} */
        var props = [];
        /** @type {?} */
        var entries = Array.isArray(obj) ? obj : [obj];
        entries.forEach((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            Object.entries(o).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), key = _b[0], val = _b[1];
                if (key === flattern) {
                    if (Array.isArray(val)) {
                        props = props.concat.apply(props, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(val));
                    }
                    else {
                        props.push(val);
                    }
                }
                if (typeof val === 'object') {
                    props = props.concat.apply(props, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(JSONUtils.getFlatternProps(val, flattern)));
                }
            }));
        }));
        return props;
    };
    /**
     * Creates Javascript object from path filter.
     * @param str - path filter string.
     */
    /**
     * Creates Javascript object from path filter.
     * @private
     * @param {?} str - path filter string.
     * @return {?}
     */
    JSONUtils.filterToMap = /**
     * Creates Javascript object from path filter.
     * @private
     * @param {?} str - path filter string.
     * @return {?}
     */
    function (str) {
        var _a;
        if (!str) {
            return null;
        }
        /** @type {?} */
        var match = str.match(/(\w+)=(\w+)/);
        if (match) {
            return _a = {}, _a[match[1]] = match[2], _a;
        }
    };
    /**
     * Checks if object has property that matches filter.
     * @param obj - Javascript object.
     * @param filter - flattern path filter string.
     */
    /**
     * Checks if object has property that matches filter.
     * @private
     * @param {?} obj - Javascript object.
     * @param {?} filter - flattern path filter string.
     * @return {?}
     */
    JSONUtils.filterObj = /**
     * Checks if object has property that matches filter.
     * @private
     * @param {?} obj - Javascript object.
     * @param {?} filter - flattern path filter string.
     * @return {?}
     */
    function (obj, filter) {
        if (!obj) {
            return false;
        }
        if (!filter) {
            return true;
        }
        /** @type {?} */
        var filterObj = JSONUtils.filterToMap(filter);
        return Object.entries(obj).some((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), k = _b[0], v = _b[1];
            return filterObj.hasOwnProperty(k) && v === filterObj[k];
        }));
    };
    /**
     * Get obj properties satisfying data path.
     * @param obj - Javascript object or array.
     * @param dataPath - data path.
     * @param defaultValue - default value for property.
     */
    /**
     * Get obj properties satisfying data path.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} dataPath - data path.
     * @param {?} defaultValue - default value for property.
     * @return {?}
     */
    JSONUtils.getDataPathProps = /**
     * Get obj properties satisfying data path.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} dataPath - data path.
     * @param {?} defaultValue - default value for property.
     * @return {?}
     */
    function (obj, dataPath, defaultValue) {
        /** @type {?} */
        var props = dataPath.split('/');
        if (Array.isArray(obj)) {
            return obj.map((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return JSONUtils.getPropsValue(o, props, defaultValue); }));
        }
        else {
            return JSONUtils.getPropsValue(obj, props, defaultValue);
        }
    };
    /**
     * Gets property value of obj
     * @param obj - Javascript object.
     * @param props - path string array to requested property.
     * @param defaultValue - default value for requested property.
     */
    /**
     * Gets property value of obj
     * @private
     * @param {?} obj - Javascript object.
     * @param {?} props - path string array to requested property.
     * @param {?} defaultValue - default value for requested property.
     * @return {?}
     */
    JSONUtils.getPropsValue = /**
     * Gets property value of obj
     * @private
     * @param {?} obj - Javascript object.
     * @param {?} props - path string array to requested property.
     * @param {?} defaultValue - default value for requested property.
     * @return {?}
     */
    function (obj, props, defaultValue) {
        if (defaultValue !== undefined) {
            return createObjProperties(obj, props, defaultValue);
        }
        return getObjPropertyVal(obj, props);
    };
    /**
     * Set vaue to data path property.
     * @param obj - Javascript object or array.
     * @param dataPath - data path string.
     * @param val - value to set.
     */
    /**
     * Set vaue to data path property.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} dataPath - data path string.
     * @param {?} val - value to set.
     * @return {?}
     */
    JSONUtils.setDataPathProp = /**
     * Set vaue to data path property.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} dataPath - data path string.
     * @param {?} val - value to set.
     * @return {?}
     */
    function (obj, dataPath, val) {
        if (!dataPath) {
            obj = val;
        }
        else {
            /** @type {?} */
            var props_1 = dataPath.split('/');
            if (Array.isArray(obj)) {
                obj.forEach((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return JSONUtils.setPropsValue(o, props_1, val); }));
            }
            else {
                JSONUtils.setPropsValue(obj, props_1, val);
            }
        }
    };
    /**
     * Set value to property in obj.
     * @param obj - Javascript object.
     * @param props - path string array to requested property.
     * @param val - value to set.
     */
    /**
     * Set value to property in obj.
     * @private
     * @param {?} obj - Javascript object.
     * @param {?} props - path string array to requested property.
     * @param {?} val - value to set.
     * @return {?}
     */
    JSONUtils.setPropsValue = /**
     * Set value to property in obj.
     * @private
     * @param {?} obj - Javascript object.
     * @param {?} props - path string array to requested property.
     * @param {?} val - value to set.
     * @return {?}
     */
    function (obj, props, val) {
        /**
         * @param {?} o
         * @param {?} prop
         * @param {?} index
         * @return {?}
         */
        function reducer(o, prop, index) {
            if (index === props.length - 1) {
                o[prop] = val;
            }
            else if (!o.hasOwnProperty(prop)) {
                o[prop] = {};
            }
            return o[prop];
        }
        return props.reduce(reducer, obj);
    };
    /**
     * Set value to flattern properties in obj.
     * @param obj - Javascript object or array.
     * @param groups - flattern match groups.
     * @param value - value to set.
     */
    /**
     * Set value to flattern properties in obj.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} groups - flattern match groups.
     * @param {?} value - value to set.
     * @return {?}
     */
    JSONUtils.setFlatternProps = /**
     * Set value to flattern properties in obj.
     * @private
     * @param {?} obj - Javascript object or array.
     * @param {?} groups - flattern match groups.
     * @param {?} value - value to set.
     * @return {?}
     */
    function (obj, groups, value) {
        /** @type {?} */
        var entries = Array.isArray(obj) ? obj : [obj];
        var flattern = groups.flattern, filter = groups.filter, dataPath = groups.dataPath;
        entries.filter((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return o !== null; })).forEach((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            Object.entries(o).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), key = _b[0], val = _b[1];
                if (key === flattern) {
                    if (Array.isArray(val)) {
                        val.forEach((/**
                         * @param {?} prop
                         * @return {?}
                         */
                        function (prop) {
                            if (JSONUtils.filterObj(prop, filter)) {
                                JSONUtils.setDataPathProp(prop, dataPath, value);
                            }
                        }));
                    }
                    else if (JSONUtils.filterObj(o, filter)) {
                        JSONUtils.setDataPathProp(val, dataPath, value);
                    }
                }
                if (typeof val === 'object') {
                    JSONUtils.setFlatternProps(val, groups, value);
                }
            }));
        }));
    };
    /**
     * RegExp /\$\.(?<dataPath>\w+(\/\w+)*)/
     */
    JSONUtils.parentPathReg = '\\$\\.([\\w\\-]+(\\/[\\w\\-]+)*)';
    /**
     * RegExp /\$\(((?<flattern>\w+)(\:(?<filter>\w+=\w+))?)\)\/?(?<dataPath>(\w+\/?\w+)*)?/
     */
    JSONUtils.flatternPathReg = "\\$\\((([\\w\\-]+)(\\:([\\w\\-]+=[\\w\\-]+))?)\\)\\/?(([\\w\\-]+\\/?[\\w\\-]+)*)?";
    return JSONUtils;
}());
if (false) {}
/**
 * Creates Javascript object properties tree.
 * @param {?} obj - Javascript object.
 * @param {?} props - list of tree properties to be created.
 * @param {?=} val - value for last property.
 * @return {?}
 */
function createObjProperties(obj, props, val) {
    if (val === void 0) { val = null; }
    /**
     * @param {?} o
     * @param {?} prop
     * @param {?} index
     * @return {?}
     */
    function reducer(o, prop, index) {
        if (index === props.length - 1 && !o.hasOwnProperty(prop)) {
            o[prop] = val;
        }
        else if (!o.hasOwnProperty(prop)) {
            o[prop] = {};
        }
        return o[prop];
    }
    return props.reduce(reducer, obj);
}
/**
 * Get Javascript object property value.
 * @param {?} obj - Javascript object.
 * @param {?} props - list of tree properties to be created.
 * @return {?}
 */
function getObjPropertyVal(obj, props) {
    var e_1, _a;
    /** @type {?} */
    var value = obj;
    try {
        for (var props_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
            var prop = props_2_1.value;
            if (value && value.hasOwnProperty(prop)) {
                value = value[prop];
            }
            else {
                return null;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/base-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var BaseUIComponent = /** @class */ (function () {
    function BaseUIComponent() {
        this.display = 'inherit';
        this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hostBindings = ['width', 'height', 'padding', 'margin'];
        this.borders = ['border-left', 'border-top', 'border-right', 'border-bottom'];
    }
    /**
     * @return {?}
     */
    BaseUIComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setHostStyles();
                        return [4 /*yield*/, this.triggerAction('_OnInit')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    BaseUIComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerAction('_OnDestroy')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseUIComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (changes.dataModel && !changes.dataModel.firstChange && this.dataModel !== changes.dataModel.currentValue) {
                    this.dataModel = changes.dataModel.currentValue;
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BaseUIComponent.prototype, "componentDataModel", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.properties.hasOwnProperty('dataSource')) {
                /** @type {?} */
                var value = ((/** @type {?} */ (this.properties))).dataSource;
                if (typeof value === 'object') {
                    return value;
                }
                else if (typeof value === 'string' && this.dataModel.hasOwnProperty(value)) {
                    return this.dataModel[value];
                }
            }
            if (!this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
                return null;
            }
            /** @type {?} */
            var dataModelPath = ((/** @type {?} */ (this.uiModel.itemProperties))).dataModelPath;
            // TODO: Handle case for Array type.
            if (!Array.isArray(this.dataModel)) {
                return JSONUtils.find(this.dataModel, dataModelPath);
            }
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
                /** @type {?} */
                var dataModelPath = ((/** @type {?} */ (this.uiModel.itemProperties))).dataModelPath;
                JSONUtils.setValue(this.dataModel, dataModelPath, val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUIComponent.prototype, "properties", {
        get: /**
         * @return {?}
         */
        function () {
            return this.uiModel.itemProperties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} action
     * @return {?}
     */
    BaseUIComponent.prototype.triggerAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var functionName, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.interpreter || !this.uiModel.id) {
                            return [2 /*return*/];
                        }
                        functionName = this.uiModel.id + action;
                        if (!this.interpreter.hasFunction(this.scripts, functionName)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.interpreter.evaluate(this.scripts, {
                                uiModel: this.uiModel,
                                dataModel: this.dataModel
                            }, functionName)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.interpreter.evaluate("alert(\"" + e_1.message + "\")");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(BaseUIComponent.prototype, "itemStyles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getStyles(this.uiModel.itemProperties);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} properties
     * @param {?=} stylesList
     * @return {?}
     */
    BaseUIComponent.prototype.getStyles = /**
     * @param {?=} properties
     * @param {?=} stylesList
     * @return {?}
     */
    function (properties, stylesList) {
        var _this = this;
        if (properties === void 0) { properties = {}; }
        if (stylesList === void 0) { stylesList = StylePropertiesList; }
        return stylesList.reduce((/**
         * @param {?} styles
         * @param {?} prop
         * @return {?}
         */
        function (styles, prop) {
            if (properties.hasOwnProperty(prop)) {
                styles[prop] = _this.getPropValue(properties, prop);
            }
            return styles;
        }), {});
    };
    /**
     * @private
     * @return {?}
     */
    BaseUIComponent.prototype.setHostStyles = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var props = (/** @type {?} */ (this.properties));
        if (props) {
            this.hostBindings.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (props && props.hasOwnProperty(b)) {
                    _this[b] = props[b];
                }
            }));
            this.setBorder(props);
        }
    };
    /**
     * @private
     * @param {?} properties
     * @param {?} prop
     * @return {?}
     */
    BaseUIComponent.prototype.getPropValue = /**
     * @private
     * @param {?} properties
     * @param {?} prop
     * @return {?}
     */
    function (properties, prop) {
        /** @type {?} */
        var val = properties[prop];
        if (prop === 'font-size') {
            if (!isNaN(properties[prop])) {
                return val + "px";
            }
        }
        return val;
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    BaseUIComponent.prototype.setBorder = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        var _this = this;
        /** @type {?} */
        var border = properties.border;
        if (typeof border === 'string') {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(border.split('|'), 2), prop = _a[0], value_1 = _a[1];
            if (prop === 'border') {
                this.borders.forEach((/**
                 * @param {?} b
                 * @return {?}
                 */
                function (b) {
                    _this[kebabStrToCamel(b)] = value_1;
                }));
            }
            else {
                this[kebabStrToCamel(prop)] = value_1;
            }
        }
    };
    BaseUIComponent.propDecorators = {
        dataModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uiModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        interpreter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scripts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
        padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.padding',] }],
        margin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.margin',] }],
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }],
        borderLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.border-left',] }],
        borderTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.border-top',] }],
        borderRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.border-right',] }],
        borderBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.border-bottom',] }],
        changedDataModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return BaseUIComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ui-selector-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UISelectorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UISelectorComponent, _super);
    function UISelectorComponent(containerRef, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.containerRef = containerRef;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    /**
     * @return {?}
     */
    UISelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                this.createComponent();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UISelectorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var shouldInit, changed, prop, change;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (changes.firstChange) {
                            return [2 /*return*/];
                        }
                        if (!(!this.component || this.component.uiModel.type !== this.uiModel.type)) return [3 /*break*/, 3];
                        shouldInit = !this.component || this.component.uiModel.id !== this.uiModel.id;
                        // Recreate component with new type.
                        this.createComponent();
                        if (!(shouldInit && Object.values(changes).some((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return c.firstChange === false; })))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.triggerAction('_OnInit')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        // Update component properties.
                        changed = false;
                        for (prop in changes) {
                            if (changes.hasOwnProperty(prop)) {
                                change = changes[prop];
                                if (!change.firstChange && change.currentValue !== change.previousValue) {
                                    this.component[prop] = change.currentValue;
                                    changed = true;
                                }
                            }
                        }
                        if (changed) {
                            this.component.ngOnChanges(changes);
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    UISelectorComponent.prototype.createComponent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(CoreService.getComponent(this.uiModel.type));
            this.containerRef.clear();
            /** @type {?} */
            var componentRef = this.containerRef.createComponent(componentFactory);
            this.component = (/** @type {?} */ (componentRef.instance));
            this.component.interpreter = this.interpreter;
            this.component.dataModel = this.dataModel;
            this.component.uiModel = this.uiModel;
            this.component.scripts = this.scripts;
            this.component.changedDataModel.subscribe((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) {
                _this.changedDataModel.emit(evt);
            }));
            this.render.emit({ success: true });
        }
        catch (error) {
            this.render.emit({ error: error });
            console.error(error);
        }
    };
    UISelectorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-selector',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    UISelectorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    UISelectorComponent.propDecorators = {
        render: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return UISelectorComponent;
}(BaseUIComponent));
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/ngx-dynamic-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NGXDynamicComponent = /** @class */ (function () {
    function NGXDynamicComponent() {
        this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    NGXDynamicComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                this.initInterpreter();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NGXDynamicComponent.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var scripts = _a.scripts, dataModel = _a.dataModel;
        if (scripts && !scripts.firstChange && scripts.currentValue !== scripts.previousValue) {
            this.initInterpreter();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NGXDynamicComponent.prototype.initInterpreter = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.interpreter) {
            this.interpreter = pscript_interpreter__WEBPACK_IMPORTED_MODULE_2__["Interpreter"].create();
        }
    };
    NGXDynamicComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-dynamic-component',
                    // tslint:disable-line
                    template: "\n    <dc-ui-selector\n        [uiModel]='uiModel'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'\n        (changedDataModel)=\"changedDataModel.emit($event)\"\n        (render)=\"render.emit($event)\">\n    </dc-ui-selector>"
                }] }
    ];
    NGXDynamicComponent.propDecorators = {
        scripts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        interpreter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dataModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uiModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        render: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        changedDataModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NGXDynamicComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/control-editor/control-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlEditorComponent = /** @class */ (function () {
    function ControlEditorComponent() {
        this.uiModelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uiModelRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    ControlEditorComponent.prototype.onRemove = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
        this.uiModelRemoved.emit();
    };
    ControlEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-control-editor',
                    template: "\n    <button class=\"btn btn-light btn-sm handle px-1 py-0 mr-1\">\n      <svg width=\"14px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\">\n        </path>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      </svg>\n    </button>\n    <button class=\"btn btn-light btn-sm px-1 py-0\" tooltip=\"Remove\" (click)=\"onRemove($event)\">\n      <i class=\"fa fa-remove\"></i>\n    </button>\n  ",
                    styles: ["::ng-deep .preview dc-container dc-container-row.row{border:1px dashed transparent}::ng-deep .preview dc-container dc-container-row.row.active{border-color:grey}::ng-deep .preview.edit-mode dc-container dc-container-row.row.active-component{border-color:rgba(0,0,0,.25)}::ng-deep .preview.edit-mode dc-container dc-container-row.row.active-component>dc-control-editor{display:block}::ng-deep .preview.edit-mode dc-container dc-container-row.row.active-component>dc-control-editor .handle{display:none}::ng-deep .preview.edit-mode dc-container{border:1px dashed rgba(0,0,0,.25)}::ng-deep .preview.edit-mode dc-container.active-component>dc-control-editor{display:block}::ng-deep .preview dc-container .item,::ng-deep .preview dc-container dc-container-row.row,::ng-deep .preview dc-container dc-container-row.row>div[class*=col],::ng-deep .preview dc-ui-flex-container .item{position:relative;border:1px dashed transparent}::ng-deep .preview dc-container .item .active-component+dc-control-editor,::ng-deep .preview dc-container dc-container-row.row .active-component+dc-control-editor,::ng-deep .preview dc-container dc-container-row.row>div[class*=col] .active-component+dc-control-editor,::ng-deep .preview dc-ui-flex-container .item .active-component+dc-control-editor{display:block}::ng-deep .preview dc-container .item.drag-selected,::ng-deep .preview dc-container dc-container-row.row.drag-selected,::ng-deep .preview dc-container dc-container-row.row>div[class*=col].drag-selected,::ng-deep .preview dc-ui-flex-container .item.drag-selected{border-color:grey}::ng-deep .preview dc-container .item.drag-selected dc-control-editor,::ng-deep .preview dc-container dc-container-row.row.drag-selected dc-control-editor,::ng-deep .preview dc-container dc-container-row.row>div[class*=col].drag-selected dc-control-editor,::ng-deep .preview dc-ui-flex-container .item.drag-selected dc-control-editor{display:block!important}::ng-deep .gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;pointer-events:none;box-sizing:border-box;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#eee}::ng-deep .gu-mirror>dc-control-editor{display:block!important}::ng-deep .gu-mirror>dc-ui-flex-container+dc-control-editor{left:-30px}::ng-deep .gu-hide{left:-9999px!important}::ng-deep .gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}::ng-deep .gu-transit{position:relative;-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep .gu-transit::after{content:\" \";top:0;display:block;position:absolute;background:#ccc;width:100%;height:100%;z-index:1}::ng-deep .gu-transit dc-control-editor{display:none}:host{position:absolute;color:rgba(0,0,0,.5);top:-23px;right:0;z-index:2;max-width:105px;display:none;background:rgba(0,0,0,.25);border-radius:4px;padding:.25em}:host:hover{cursor:move;color:rgba(0,0,0,.75)}"]
                }] }
    ];
    ControlEditorComponent.propDecorators = {
        uiModelChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        uiModelRemoved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ControlEditorComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/drag-drop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ACTIVE_CLASS = 'active-component';
var DragDropService = /** @class */ (function () {
    function DragDropService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.dragIndex = 0;
        this.dropIndex = 0;
        this.uiModelUpdates$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.componentRemoved$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.controls = [];
        this.containerUIModelMap = new Map();
    }
    /**
     * @param {?} container
     * @param {?} uiModel
     * @return {?}
     */
    DragDropService.prototype.init = /**
     * @param {?} container
     * @param {?} uiModel
     * @return {?}
     */
    function (container, uiModel) {
        this.cleanUpEditor();
        this.container = container;
        this.uiModel = uiModel;
        if (!this.drake) {
            this.initDrake(this.elements);
        }
        else {
            this.drake.containers = this.elements;
            this.selectCurrentComponent();
        }
        this.initEditor();
    };
    /**
     * @return {?}
     */
    DragDropService.prototype.cleanUpEditor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.controls.forEach((/**
         * @param {?} componentRef
         * @return {?}
         */
        function (componentRef) {
            _this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }));
        this.controls = [];
    };
    Object.defineProperty(DragDropService.prototype, "elements", {
        /**
         * Gets containers for drag&drop functionality.
         */
        get: /**
         * Gets containers for drag&drop functionality.
         * @return {?}
         */
        function () {
            var _this = this;
            this.containerUIModelMap.clear();
            CoreService.getListOfComponents().forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                _this.containerUIModelMap.set(c.packageName + ":" + c.name, c.defaultModel || c.example.uiModel);
            }));
            /** @type {?} */
            var elements = this.container.nativeElement.querySelectorAll("\n      #empty-container,\n      ngx-dynamic-component>[drop-container],\n      ngx-dynamic-component>dc-ui-flex-container>[drop-container]\n    ");
            /** @type {?} */
            var arrElements = (/** @type {?} */ (Array.from(elements)));
            // .filter(e => !e.id)
            if (this.uiModel) {
                arrElements.forEach(((/**
                 * @param {?} container
                 * @param {?} index
                 * @return {?}
                 */
                function (container, index) {
                    /** @type {?} */
                    var childrenUIModel = _this.getChildrenByIndex(_this.uiModel.children, index);
                    container.id = "container-" + index;
                    _this.containerUIModelMap.set(container.id, childrenUIModel);
                    _this.appendControlEditor(container, [_this.uiModel], index, true);
                    arrElements = arrElements.concat(_this.mapChildren(container, childrenUIModel));
                })));
            }
            /** @type {?} */
            var controlPanelGroups = (/** @type {?} */ (Array.from(this.container.nativeElement.querySelectorAll('.preview .components-list'))));
            arrElements = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(arrElements, controlPanelGroups);
            return (/** @type {?} */ (arrElements));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} container
     * @param {?} childrenUIModel
     * @return {?}
     */
    DragDropService.prototype.mapChildren = /**
     * @private
     * @param {?} container
     * @param {?} childrenUIModel
     * @return {?}
     */
    function (container, childrenUIModel) {
        var _this = this;
        /** @type {?} */
        var children = (/** @type {?} */ (Array.from(container.querySelectorAll("\n        :scope>div>[drop-container],\n        :scope>[drop-container],\n        :scope>div>dc-ui-flex-container>[drop-container]\n    "))));
        children.forEach((/**
         * @param {?} childContainer
         * @param {?} i
         * @return {?}
         */
        function (childContainer, i) {
            /** @type {?} */
            var uiModelChildren = _this.getChildrenByIndex(childrenUIModel, i + 1);
            childContainer.id = container.id + "-child-" + i;
            _this.containerUIModelMap.set(childContainer.id, uiModelChildren);
            children = children.concat(_this.mapChildren(childContainer, uiModelChildren));
        }));
        return children;
    };
    /**
     * @private
     * @return {?}
     */
    DragDropService.prototype.initEditor = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.drake.containers.forEach((/**
         * @param {?} container
         * @param {?} index
         * @return {?}
         */
        function (container, index) {
            _this.getContainerItems(container).forEach((/**
             * @param {?} element
             * @param {?} i
             * @return {?}
             */
            function (element, i) {
                /** @type {?} */
                var childrenUIModels = _this.containerUIModelMap.get(container.id);
                if (childrenUIModels) {
                    _this.appendControlEditor((/** @type {?} */ (element)), childrenUIModels, i);
                }
            }));
        }));
        this.selectedComponent$.subscribe((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return _this.selectedComponent = c; }));
    };
    /**
     * @private
     * @param {?} container
     * @return {?}
     */
    DragDropService.prototype.getContainerItems = /**
     * @private
     * @param {?} container
     * @return {?}
     */
    function (container) {
        return Array.from(container.children).filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.tagName !== 'DC-CONTROL-EDITOR'; }));
    };
    /**
     * @return {?}
     */
    DragDropService.prototype.selectParent = /**
     * @return {?}
     */
    function () {
        if (this.selectCurrentComponent) {
            this.container.nativeElement.querySelector(this.selectedComponent.cssPath).parentNode.click();
        }
    };
    /**
     * @return {?}
     */
    DragDropService.prototype.cloneSelected = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.selectedComponent) {
            /** @type {?} */
            var el = (/** @type {?} */ (this.container.nativeElement.querySelector(this.selectedComponent.cssPath)));
            el = el.parentElement;
            while (!el.hasAttribute('drop-container')) {
                if (el.tagName.toLowerCase() === 'ngx-dynamic-component') {
                    return;
                }
                el = el.parentElement;
            }
            /** @type {?} */
            var targetModel = this.containerUIModelMap.get(el.id);
            /** @type {?} */
            var item = JSON.parse(JSON.stringify(this.selectedComponent.uiModel));
            targetModel.push(item);
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.uiModelUpdates$.next(_this.uiModel); }));
        }
    };
    /**
     * @param {?} element
     * @param {?} children
     * @param {?} i
     * @param {?=} isRoot
     * @return {?}
     */
    DragDropService.prototype.appendControlEditor = /**
     * @param {?} element
     * @param {?} children
     * @param {?} i
     * @param {?=} isRoot
     * @return {?}
     */
    function (element, children, i, isRoot) {
        var _this = this;
        if (isRoot === void 0) { isRoot = false; }
        /** @type {?} */
        var uiModel = children[i];
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(ControlEditorComponent)
            .create(this.injector);
        componentRef.instance.uiModelChanged.subscribe((/**
         * @return {?}
         */
        function () {
            _this.uiModelUpdates$.next(_this.uiModel);
        }));
        componentRef.instance.uiModelRemoved.subscribe((/**
         * @return {?}
         */
        function () {
            if (isRoot) {
                _this.componentRemoved$.next(null);
                _this.uiModel = null;
            }
            else {
                _this.componentRemoved$.next(children[i]);
                children.splice(i, 1);
            }
            _this.uiModelUpdates$.next(_this.uiModel);
        }));
        /** @type {?} */
        var el = element.attributes.hasOwnProperty('drop-container') ? element : element.querySelector('dc-ui-selector + *');
        if (!el) {
            // Case of an empty ui model.
            return;
        }
        el.addEventListener('click', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            evt.stopImmediatePropagation();
            evt.preventDefault();
            _this.selectedComponent$.next({ uiModel: uiModel, cssPath: getCssPath(el, _this.container.nativeElement) });
            _this.selectCurrentComponent();
        }));
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
        el.appendChild(domElem);
        this.controls.push(componentRef);
    };
    /**
     * @return {?}
     */
    DragDropService.prototype.deselect = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var active = this.container.nativeElement.querySelector("." + ACTIVE_CLASS);
        if (active) {
            active.classList.remove(ACTIVE_CLASS);
        }
    };
    /**
     * Adds selected active class to current component.
     * setTimout is used to handle component rerender case. after uiModel update.
     */
    /**
     * Adds selected active class to current component.
     * setTimout is used to handle component rerender case. after uiModel update.
     * @param {?=} i
     * @return {?}
     */
    DragDropService.prototype.selectCurrentComponent = /**
     * Adds selected active class to current component.
     * setTimout is used to handle component rerender case. after uiModel update.
     * @param {?=} i
     * @return {?}
     */
    function (i) {
        var _this = this;
        if (i === void 0) { i = 0; }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.selectedComponent) {
                _this.deselect();
                /** @type {?} */
                var el = _this.container.nativeElement.querySelector(_this.selectedComponent.cssPath);
                if (el) {
                    el.classList.add(ACTIVE_CLASS);
                    resolve(el);
                }
                else if (i < 20) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        return _this.selectCurrentComponent(i + 1);
                    }), 2e1);
                }
            }
        }));
    };
    /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    DragDropService.prototype.initDrake = /**
     * @private
     * @param {?} elements
     * @return {?}
     */
    function (elements) {
        var _this = this;
        this.selectedComponent = null;
        this.drake = Object(ng2_dragula__WEBPACK_IMPORTED_MODULE_7__["dragula"])(elements, {
            moves: (/**
             * @param {?} el
             * @param {?} container
             * @param {?} handle
             * @return {?}
             */
            function (el, container, handle) {
                return _this.isMoveElement(handle);
            }),
            direction: 'horizontal',
        });
        // TODO: Clean up callback.
        this.drake.on('drop', (/**
         * @param {?} el
         * @param {?} target
         * @param {?} source
         * @return {?}
         */
        function (el, target, source) {
            /** @type {?} */
            var item;
            if (target.id === 'empty-container') {
                _this.uiModel = JSON.parse(JSON.stringify(_this.containerUIModelMap.get(el.id)));
            }
            else {
                /** @type {?} */
                var targetModel = _this.containerUIModelMap.get(target.id);
                if (!targetModel) {
                    return null;
                }
                _this.dropIndex = _this.domIndexOf(el, target);
                if (el.id) {
                    item = JSON.parse(JSON.stringify(_this.containerUIModelMap.get(el.id)));
                    targetModel.splice(_this.dropIndex, 0, item);
                    /** @type {?} */
                    var targetPath = getCssPath(target, _this.container.nativeElement);
                    /** @type {?} */
                    var itemPath = targetPath + ">*:nth-child(" + (_this.dropIndex + 1) + ") > dc-ui-selector + *";
                    _this.selectedComponent$.next({ uiModel: item, cssPath: itemPath });
                    // Select component after being rerendered.
                    _this.selectCurrentComponent();
                }
                else {
                    /** @type {?} */
                    var sourceModel = _this.containerUIModelMap.get(source.id);
                    if (target === source) {
                        // Same containers. Replace item position.
                        item = sourceModel.splice(_this.dragIndex, 1)[0];
                        sourceModel.splice(_this.dropIndex, 0, item);
                    }
                    else {
                        // Different containers.
                        // Remove item from previous container.
                        item = sourceModel.splice(_this.dragIndex, 1)[0];
                        // Add item into next container.
                        targetModel.splice(_this.dropIndex, 0, item);
                    }
                }
            }
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.uiModelUpdates$.next(_this.uiModel); }));
        }));
        this.drake.on('drag', (/**
         * @param {?} el
         * @param {?} source
         * @return {?}
         */
        function (el, source) {
            _this.dragIndex = _this.domIndexOf(el, source);
        }));
        this.drake.on('over', (/**
         * @param {?} el
         * @param {?} container
         * @return {?}
         */
        function (el, container) {
            container.classList.add('active');
        }));
        this.drake.on('out', (/**
         * @param {?} el
         * @param {?} container
         * @return {?}
         */
        function (el, container) {
            container.classList.remove('active');
        }));
    };
    /**
     * Get UIModel children by drag&drop index.
     * @param children UI Model children.
     * @param index index to find.
     * @param currentIndex current loop index.
     */
    /**
     * Get UIModel children by drag&drop index.
     * @private
     * @param {?=} children UI Model children.
     * @param {?=} index index to find.
     * @param {?=} currentIndex current loop index.
     * @return {?}
     */
    DragDropService.prototype.getChildrenByIndex = /**
     * Get UIModel children by drag&drop index.
     * @private
     * @param {?=} children UI Model children.
     * @param {?=} index index to find.
     * @param {?=} currentIndex current loop index.
     * @return {?}
     */
    function (children, index, currentIndex) {
        var e_1, _a, e_2, _b;
        if (children === void 0) { children = []; }
        if (index === void 0) { index = 0; }
        if (currentIndex === void 0) { currentIndex = 0; }
        if (index === 0 || currentIndex === index) {
            return children;
        }
        try {
            for (var children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var m = children_1_1.value;
                if (m.children && this.isDraggableContainer(m)) {
                    if (index === ++currentIndex) {
                        return m.children;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var children_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                var m = children_2_1.value;
                if (m.children && m.children.length) {
                    return this.getChildrenByIndex(m.children, index, currentIndex);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (children_2_1 && !children_2_1.done && (_b = children_2.return)) _b.call(children_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    DragDropService.prototype.domIndexOf = /**
     * @private
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    function (child, parent) {
        return Array.from(parent.children).filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.tagName !== 'DC-CONTROL-EDITOR'; })).indexOf(child);
    };
    /**
     * TODO: implement logic to define draggable containers,
     * or make all containers (components with children property) draggable.
     * @param m UIModel
     */
    /**
     * TODO: implement logic to define draggable containers,
     * or make all containers (components with children property) draggable.
     * @private
     * @param {?} m UIModel
     * @return {?}
     */
    DragDropService.prototype.isDraggableContainer = /**
     * TODO: implement logic to define draggable containers,
     * or make all containers (components with children property) draggable.
     * @private
     * @param {?} m UIModel
     * @return {?}
     */
    function (m) {
        return m.type !== 'material:card';
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    DragDropService.prototype.isMoveElement = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var dragEl = el;
        /** @type {?} */
        var isMoveEl = dragEl.classList && dragEl.classList.contains('handle');
        while (!isMoveEl && dragEl.parentNode) {
            dragEl = (/** @type {?} */ (dragEl.parentNode));
            isMoveEl = dragEl.classList && dragEl.classList.contains('handle');
        }
        return isMoveEl;
    };
    DragDropService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DragDropService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    /** @nocollapse */ DragDropService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDropService_Factory() { return new DragDropService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"])); }, token: DragDropService, providedIn: "root" });
    return DragDropService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/controls-panel/controls-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlsPanelComponent = /** @class */ (function () {
    function ControlsPanelComponent() {
        this.groups = [];
        this.components = [];
        this.COMPONENTS_LIST = [
            'bootstrap:button', 'bootstrap:text-input', 'bootstrap:textarea', 'bootstrap:radio-group',
            'material:flex-container', 'bootstrap:text', 'bootstrap:checkbox', 'bootstrap:select',
            'wijmo:grid', 'rest-client:grid-object-explorer', 'wijmo:chart'
        ];
    }
    /**
     * @return {?}
     */
    ControlsPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.components = CoreService.getListOfComponents().filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return _this.COMPONENTS_LIST.includes(c.packageName + ":" + c.name); }));
        this.initGroups();
    };
    /**
     * @return {?}
     */
    ControlsPanelComponent.prototype.initGroups = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var groups = {};
        this.components.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var groupValue = item.category;
            if (groupValue) {
                groups[groupValue] = groups[groupValue] || { value: groupValue, list: [] };
                groups[groupValue].list.push(item);
            }
        }));
        this.groups = Object.values(groups);
    };
    ControlsPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-controls-panel',
                    template: "<accordion class=\"d-flex flex-fill flex-column p-0 m-0 w-100\">\n  <accordion-group *ngFor=\"let g of groups\" isOpen=\"true\">\n    <div class=\"header\" accordion-heading>\n      <i class=\"fa text-center fa-chevron-down\"></i>\n      <i class=\"fa text-center fa-chevron-right\"></i>\n      {{g.value}}\n    </div>\n    <ul class=\"d-flex flex-fill flex-column p-0 m-0 components-list\">\n      <li class=\"component p-2 m-1 handle d-flex align-items-baseline cursor-pointer\" *ngFor=\"let item of g.list\" id=\"{{item.packageName}}:{{item.name}}\">\n        {{item.label}}\n      </li>\n    </ul>\n  </accordion-group>\n</accordion>\n",
                    styles: [":host{border:1px solid #e4e7ea;border-radius:4px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}ul li{list-style:none}.component{border:1px dashed rgba(0,0,0,.25);cursor:pointer}", "accordion-group ::ng-deep .panel.card{border:none;margin-bottom:0}accordion-group ::ng-deep .panel-heading{padding:.25rem;cursor:pointer}accordion-group ::ng-deep .panel-body.card-block.card-body{padding:0}accordion-group ::ng-deep [aria-expanded=false] .fa-chevron-down{display:none}accordion-group ::ng-deep [aria-expanded=true] .fa-chevron-right{display:none}.fa-chevron-right{width:14px}"]
                }] }
    ];
    return ControlsPanelComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/designer/designer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DesignerComponent = /** @class */ (function () {
    function DesignerComponent(container, dragDropService) {
        this.container = container;
        this.dragDropService = dragDropService;
        this.uiModelUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scriptUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formatted = true;
        this.modeState = {
            script: false,
            designer: true
        };
        this.scriptConfigSize = 0;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(DesignerComponent.prototype, "fullMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.scriptConfigSize === 0 || this.scriptConfigSize === 100;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DesignerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uiModelVal = this.uiModel;
        this.dragDropService.uiModelUpdates$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy)).subscribe((/**
         * @param {?} uiModel
         * @return {?}
         */
        function (uiModel) {
            _this.updateUIModel(uiModel);
        }));
        this.dragDropService.selectedComponent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var uiModel = _a.uiModel;
            _this.uiModelToEdit = uiModel;
            _this.tabSelect(1);
        }));
        this.dragDropService.componentRemoved$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.tabSelect(0);
        }));
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uiModelEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_6__["edit"])(this.uiModelEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: formatObjToJsonStr(this.uiModelVal)
        });
        this.scriptEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_6__["edit"])(this.scriptEl.nativeElement, {
            mode: 'ace/mode/python',
            autoScrollEditorIntoView: true,
            value: this.scripts,
            tabSize: 2,
            useSoftTabs: true,
            indentedSoftWrap: true
        });
        this.scriptEditor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: false,
            enableLiveAutocompletion: true
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.uiModelEditor, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @return {?}
         */
        function () {
            return _this.getUIModelObject();
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return Boolean(v); }))).subscribe((/**
         * @param {?} uiModel
         * @return {?}
         */
        function (uiModel) { return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(_this, void 0, void 0, function () {
            var el;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uiModelVal = uiModel;
                        return [4 /*yield*/, this.initDrag()];
                    case 1:
                        _a.sent();
                        if (!this.uiModelToEdit) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dragDropService.selectCurrentComponent()];
                    case 2:
                        el = _a.sent();
                        el.click();
                        _a.label = 3;
                    case 3:
                        this.uiModelUpdated.emit(uiModel);
                        return [2 /*return*/];
                }
            });
        }); }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.scriptEditor, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.scriptUpdate.emit(_this.scriptEditor.getValue());
        }));
        this.initDrag();
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy.next();
        this.destroy.complete();
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.onSizeChange = /**
     * @return {?}
     */
    function () {
        this.uiModelEditor.resize();
        this.scriptEditor.resize();
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    DesignerComponent.prototype.onModeState = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        this.modeState[prop] = !this.modeState[prop];
        if (this.modeState.script && !this.modeState.designer) {
            this.scriptConfigSize = 100;
        }
        else if (this.modeState.script && this.modeState.designer) {
            this.scriptConfigSize = 50;
        }
        else {
            this.scriptConfigSize = 0;
        }
    };
    /**
     * @private
     * @return {?}
     */
    DesignerComponent.prototype.getUIModelObject = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            return JSON.parse(this.uiModelEditor.getValue());
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    DesignerComponent.prototype.initDrag = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dragDropService.init(_this.container, _this.uiModelVal);
                resolve();
            }));
        }));
    };
    /**
     * @private
     * @param {?} uiModel
     * @return {?}
     */
    DesignerComponent.prototype.updateUIModel = /**
     * @private
     * @param {?} uiModel
     * @return {?}
     */
    function (uiModel) {
        var _this = this;
        this.uiModelVal = null;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.uiModelVal = uiModel;
            _this.uiModelEditor.setValue(formatObjToJsonStr(_this.uiModelVal), -1);
            _this.uiModelUpdated.emit(uiModel);
            _this.controlsPanel.initGroups();
            _this.initDrag();
        }));
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.onComponentsTabSelect = /**
     * @return {?}
     */
    function () {
        this.uiModelToEdit = null;
        this.dragDropService.deselect();
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.onPropertyChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var model = this.uiModelVal;
        this.uiModelVal = null;
        window.requestAnimationFrame((/**
         * @return {?}
         */
        function () {
            _this.uiModelVal = model;
            _this.uiModelUpdated.emit(model);
            _this.uiModelEditor.setValue(formatObjToJsonStr(_this.uiModelVal), -1);
            _this.initDrag();
        }));
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.onParentSelect = /**
     * @return {?}
     */
    function () {
        this.dragDropService.selectParent();
    };
    /**
     * @return {?}
     */
    DesignerComponent.prototype.onClone = /**
     * @return {?}
     */
    function () {
        this.dragDropService.cloneSelected();
    };
    /**
     * @param {?=} format
     * @return {?}
     */
    DesignerComponent.prototype.formatJSON = /**
     * @param {?=} format
     * @return {?}
     */
    function (format) {
        if (format === void 0) { format = true; }
        try {
            /** @type {?} */
            var uiModel = JSON.parse(this.uiModelEditor.getValue());
            if (format) {
                this.uiModelEditor.setValue(formatObjToJsonStr(uiModel), -1);
            }
            else {
                this.uiModelEditor.setValue(JSON.stringify(uiModel), -1);
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
    /**
     * @private
     * @param {?} i
     * @return {?}
     */
    DesignerComponent.prototype.tabSelect = /**
     * @private
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _this = this;
        window.requestAnimationFrame((/**
         * @return {?}
         */
        function () {
            try {
                _this.tabset.tabs[i].active = true;
            }
            catch (e) {
                console.error(e);
            }
        }));
    };
    DesignerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-designer-component',
                    // tslint:disable-line
                    template: "<as-split unit=\"pixel\" #split=\"asSplit\" class=\"row h-100 preview edit-mode m-0 w-100\" direction=\"horizontal\"\n  [useTransition]=\"true\">\n  <as-split-area class=\"d-flex flex-column\">\n    <as-split [useTransition]=\"true\" [ngClass]=\"{'full-mode': fullMode}\" (onDragEnd)=\"onSizeChange()\" (transitionEnd)=\"onSizeChange()\">\n        <as-split-area #area0=\"asSplitArea\" class=\"d-flex mb-0 position-relative\" [size]=\"scriptConfigSize\">\n            <div class=\"tabs-actions position-absolute\">\n              <button type=\"button\" class=\"btn btn-light btn-sm px-1 py-0\" (click)=\"formatJSON()\"\n                    [ngClass]=\"{active: formatted}\" title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n                    <i class=\"fa fa-indent\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\"\n                    [ngClass]=\"{active: !formatted}\" title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n                    <i class=\"fa fa-align-justify\"></i>\n              </button>\n            </div>\n            <tabset class=\"tabset-fx w-100\">\n              <tab heading=\"UI Model\">\n                <div #uiModelEl class=\"h-100 ace-editor\"></div>\n              </tab>\n              <tab heading=\"Script\">\n                <div #script class=\"h-100 ace-editor\"></div>\n              </tab>\n            </tabset>\n          </as-split-area>\n          <as-split-area [size]=\"100 - scriptConfigSize\" #area1=\"asSplitArea\" class=\"d-flex overflow-auto flex-column\">\n            <ngx-dynamic-component class=\"flex-fill pt-4 h-100\" *ngIf=\"uiModelVal\"\n              [uiModel]='uiModelVal' [interpreter]=\"interpreter\" [dataModel]='{}' [scripts]='scripts'></ngx-dynamic-component>\n            <div id=\"empty-container\" class=\"w-100 h-100\" *ngIf=\"!uiModelVal\"></div>\n          </as-split-area>\n    </as-split>\n    <div class=\"btn-group d-block mode\">\n      <label class=\"btn btn-light btn-sm cursor-pointer\" ngDefaultControl [(ngModel)]=\"modeState.script\" [class.active]=\"modeState.script\"\n        btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-script\" (click)=\"onModeState('script')\" title=\"UIModel & Script code\">\n        <i class=\"fa fa-code fa-lg\"></i> Configuration\n      </label>\n      <label class=\"btn btn-light btn-sm cursor-pointer\" ngDefaultControl [(ngModel)]=\"modeState.designer\" [class.active]=\"modeState.designer\"\n        btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-designer\" (click)=\"onModeState('designer')\" title=\"Designer\">\n        <i class=\"fa fa-cubes fa-lg\"></i> Designer\n      </label>\n    </div>\n  </as-split-area>\n  <as-split-area #area2=\"asSplitArea\" class=\"d-flex mb-0\" [size]=\"350\" [maxSize]=\"600\">\n    <tabset #tabset class=\"tabset-fx w-100\">\n      <tab heading=\"Components\" (selectTab)=\"onComponentsTabSelect()\">\n        <dc-controls-panel #controlsPanel class=\"h-100 overflow-auto\"></dc-controls-panel>\n      </tab>\n      <tab heading=\"Properties\" [disabled]=\"!uiModelToEdit\">\n        <dc-properties-editor class=\"h-100 overflow-auto\" *ngIf=\"uiModelToEdit\"\n          (updatedProperty)=\"onPropertyChange()\" (selectParent)=\"onParentSelect()\" (clone)=\"onClone()\" [uiModel]=\"uiModelToEdit\"></dc-properties-editor>\n      </tab>\n    </tabset>\n  </as-split-area>\n</as-split>\n",
                    styles: ["#empty-container,ngx-dynamic-component{position:relative}.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector+:not(dc-ui-flex-container),.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector+dc-ui-flex-container>[drop-container]{cursor:pointer;border:1px dashed gray;box-sizing:initial}.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector+*{position:relative}.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector+dc-ui-flex-container.active-component>[drop-container],.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector+dc-ui-flex-container>.active-component[drop-container]{border-style:solid;position:relative}.preview.edit-mode ngx-dynamic-component ::ng-deep .active-component:not(dc-ui-flex-container){border-style:solid}.preview.edit-mode ngx-dynamic-component ::ng-deep .active-component:not(dc-ui-flex-container)>dc-control-editor{display:block}.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector+dc-ui-flex-container.active-component>[drop-container]+dc-control-editor{display:block}.mode.btn-group{border-top:1px solid gray}.edit-mode ::ng-deep .full-mode>.as-split-gutter{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DesignerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: DragDropService }
    ]; };
    DesignerComponent.propDecorators = {
        uiModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scripts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        interpreter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        uiModelUpdated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scriptUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        tabset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabset', { static: false },] }],
        controlsPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['controlsPanel', { static: false },] }],
        uiModelEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['uiModelEl', { static: false },] }],
        scriptEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['script', { static: false },] }]
    };
    return DesignerComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/labeled.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
LabeledComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(LabeledComponent, _super);
    function LabeledComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LabeledComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.hasLabel) {
                return 'component-id-' + ((/** @type {?} */ (this.properties))).label.replace(/ /g, '-').toLowerCase();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledComponent.prototype, "hasLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return Boolean(((/** @type {?} */ (this.properties))).labelPosition);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledComponent.prototype, "layout", {
        get: /**
         * @return {?}
         */
        function () {
            return ['left', 'right'].includes(((/** @type {?} */ (this.properties))).labelPosition) ? 'row' : 'column';
        },
        enumerable: true,
        configurable: true
    });
    return LabeledComponent;
}(BaseUIComponent));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/models/action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ActionStatus = {
    SUCCESS: "success",
    FAILED: "failed",
    STOP_EXECUTION: "stop execution",
};
/**
 * @record
 */
function ActionResult() { }
if (false) {}
/**
 * @record
 */
function ActionDescriptor() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/models/configs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ActionConfig() { }
if (false) {}
/**
 * @record
 */
function SetVariableConfig() { }
if (false) {}
/**
 * @record
 */
function SetValueConfig() { }
if (false) {}
/**
 * @record
 */
function SetValuesConfig() { }
if (false) {}
/**
 * @record
 */
function GetValueConfig() { }
if (false) {}
/**
 * @record
 */
function SwitchActionConfig() { }
if (false) {}
/**
 * @record
 */
function AddItemConfig() { }
if (false) {}
/**
 * @record
 */
function PushItemConfig() { }
if (false) {}
/**
 * @record
 */
function TransferDataConfig() { }
if (false) {}
/**
 * @record
 */
function MergeInDataModelConfig() { }
if (false) {}
/**
 * @record
 */
function JoinConfig() { }
if (false) {}
/**
 * @record
 */
function MapConfig() { }
if (false) {}
/**
 * @record
 */
function HttpCallConfig() { }
if (false) {}
/**
 * @record
 */
function TransposeDataConfig() { }
if (false) {}
/**
 * @record
 */
function IfStatementConfig() { }
if (false) {}
/**
 * @record
 */
function CreateObjectConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/actions-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves expression({{ expression }}) in key if contains.
 * @param {?} context - Execution context.
 * @param {?} key - string with posible expression
 * @return {?}
 */
function resolveExpression(context, key) {
    // Remove spaces in expressions.
    key = key.replace(/\{\{\s*/g, '{{').replace(/\s*\}\}/g, '}}');
    /** @type {?} */
    var expressions = getExpressions(key);
    expressions.forEach((/**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var value = resolveValue(context, e);
        if (value && typeof value === 'object') {
            /** @type {?} */
            var propertyPath = e.substring(e.indexOf('/') + 1);
            value = JSONUtils.find(value, "$." + propertyPath, null);
        }
        key = key.replace("{{" + e + "}}", value);
    }));
    return key;
}
/**
 * Get expression keys in key string.
 * @param {?} key - path with possibles expressions.
 * @return {?}
 */
function getExpressions(key) {
    /** @type {?} */
    var expressions = [];
    /** @type {?} */
    var re = /.*\{\{(.*)\}\}/;
    /** @type {?} */
    var match = key.match(re);
    if (match) {
        /** @type {?} */
        var expression = match[1];
        if (expression) {
            expressions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([expression], getExpressions(key.replace("{{" + expression + "}}", '')));
        }
    }
    return expressions;
}
// todo: this function should not be here. it has to be moved out to utils and then exported from there
/**
 * this has to be more advanced method and has to resolve more complex grammar.
 *  - $ prefix means it takes values from variable
 *  - {{ expression }} like format in a string
 * @param {?} context - Execution context.
 * @param {?} object - payload object.
 * @return {?}
 */
function resolveValue(context, object) {
    if (!object) {
        return null;
    }
    if (typeof object === 'object') {
        return object;
    }
    if (typeof object === 'string') {
        /** @type {?} */
        var key = String(object);
        key = resolveExpression(context, key);
        // if starts with $property but not if $.property.
        if (/^\$\w/.test(key)) {
            // get root property path.
            key = key.substring(1).replace(/\/.*/, '');
        }
        else {
            return key;
        }
        if (context.variables.has(key)) {
            return context.variables.get(key);
        }
        else {
            throw new Error("Can't resolve Object by string " + key);
        }
        return;
    }
    throw new Error("Can't resolve Object " + object);
}
/**
 * @param {?} context
 * @param {?} object
 * @return {?}
 */
function resolveVariable(context, object) {
    if (!object) {
        return null;
    }
    if (typeof object === 'object') {
        return object;
    }
    if (typeof object === 'string') {
        var _a = object.startsWith('{{') ? resolvePath(object) : resolveWorkflowPath(object), name_1 = _a.name, key = _a.key;
        if (context.variables.has(key)) {
            /** @type {?} */
            var value = context.variables.get(key);
            return { value: value, name: name_1 };
        }
        else {
            throw new Error("Can't resolve Object by string " + name_1);
        }
        return;
    }
    throw new Error("Can't resolve Object " + object);
}
/**
 * @param {?} key
 * @return {?}
 */
function resolvePath(key) {
    /** @type {?} */
    var res = key.match(/^{{([\w-]+)}}.*/);
    if (res && res[1]) {
        /** @type {?} */
        var prop = res[1];
        if (key.indexOf('}}/') !== -1) {
            return {
                name: key.replace("{{" + prop + "}}/", '$.'),
                key: prop
            };
        }
        else {
            return {
                name: key.replace("{{" + prop + "}}", '$'),
                key: prop
            };
        }
    }
}
/**
 * @param {?} key
 * @return {?}
 */
function resolveWorkflowPath(key) {
    /** @type {?} */
    var res = key.match(/^\$([\w-]+)*/);
    if (res && res[1]) {
        /** @type {?} */
        var prop = res[1];
        if (key.indexOf('/') !== -1) {
            return {
                name: key.replace("$" + prop + "/", '$.'),
                key: prop
            };
        }
        else {
            return {
                name: '$',
                key: prop
            };
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/actions-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var setValueAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    /** @type {?} */
    var value = resolveValue(context, config.propertyValue);
    return JSONUtils.setValue(objValue, config.propertyName, value);
});
var ɵ0 = setValueAction;
/** @type {?} */
var setValuesAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    var e_1, _a;
    /** @type {?} */
    var propertyNames = Object.keys(config.valuesList).filter((/**
     * @param {?} f
     * @return {?}
     */
    function (f) { return !f.startsWith('_'); }));
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    try {
        for (var propertyNames_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(propertyNames), propertyNames_1_1 = propertyNames_1.next(); !propertyNames_1_1.done; propertyNames_1_1 = propertyNames_1.next()) {
            var propertyName = propertyNames_1_1.value;
            /** @type {?} */
            var value = resolveValue(context, config.valuesList[propertyName]);
            JSONUtils.setValue(objValue, propertyName, value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertyNames_1_1 && !propertyNames_1_1.done && (_a = propertyNames_1.return)) _a.call(propertyNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
var ɵ1 = setValuesAction;
/** @type {?} */
var switchAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
});
var ɵ2 = switchAction;
/** @type {?} */
var getValueAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    /** @type {?} */
    var propertyName = resolveValue(context, config.propertyName);
    return JSONUtils.find(objValue, propertyName);
});
var ɵ3 = getValueAction;
/** @type {?} */
var getListFromContext = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    /** @type {?} */
    var propertyName = config.propertyName;
    /** @type {?} */
    var list = JSONUtils.find(objValue, propertyName);
    if (Array.isArray(list)) {
        return list;
    }
    if (list === null) {
        JSONUtils.setValue(objValue, propertyName, []);
        return JSONUtils.find(objValue, propertyName);
    }
    throw new Error("Property " + propertyName + " in " + config.object + " is not an array.");
});
var ɵ4 = getListFromContext;
/** @type {?} */
var addItemToArrayAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    var _a;
    /** @type {?} */
    var list = getListFromContext(context, config);
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    /** @type {?} */
    var item = JSONUtils.find(objValue, config.itemPropertyName);
    return JSONUtils.setValue(objValue, config.propertyName, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(list, [(_a = {}, _a[config.wrapName] = item, _a)]));
});
var ɵ5 = addItemToArrayAction;
/** @type {?} */
var pushItemToArrayAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    var _a;
    /** @type {?} */
    var list = getListFromContext(context, config);
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    /** @type {?} */
    var targetValue = resolveValue(context, config.target);
    return JSONUtils.setValue(objValue, config.propertyName, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(list, [(_a = {}, _a[config.wrapName] = targetValue, _a)]));
});
var ɵ6 = pushItemToArrayAction;
/** @type {?} */
var popArrayAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var list = getListFromContext(context, config);
    /** @type {?} */
    var objValue = resolveValue(context, config.object);
    return JSONUtils.setValue(objValue, config.propertyName, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(list.slice(0, list.length - 1)));
});
var ɵ7 = popArrayAction;
/** @type {?} */
var setLocalVariableAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    try {
        /** @type {?} */
        var resolved = resolveVariable(context, config.sourceValue);
        if (!resolved) {
            throw new Error("Local variable " + config.sourceValue + " is not resolved");
        }
        /** @type {?} */
        var value = JSONUtils.find((/** @type {?} */ (resolved.value)), resolved.name);
        context.variables.set(config.variableName, value);
        return value;
    }
    catch (e) {
        console.error(e);
        return null;
    }
});
var ɵ8 = setLocalVariableAction;
/**
 * \@example
 * {
 *  "actionType": "transferData",
 *  "from": "$step1-returnValue",
 *  "fromPropertyName": "$",
 *  "to": "$dataModel",
 *  "toPropertyName": "$.transfered"
 * }
 * @type {?}
 */
var transferDataAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var fromObj = resolveValue(context, config.from);
    /** @type {?} */
    var value = JSONUtils.find(fromObj, config.fromPropertyName || '$');
    /** @type {?} */
    var toObj = resolveValue(context, config.to);
    return JSONUtils.setValue(toObj, config.toPropertyName, value);
});
var ɵ9 = transferDataAction;
/** @type {?} */
var mergeInDataModelAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var value = config.data;
    /** @type {?} */
    var dataModel = resolveValue(context, '$dataModel');
    Object.assign(dataModel, value);
    return dataModel;
});
var ɵ10 = mergeInDataModelAction;
/** @type {?} */
var getValueDescriptor = {
    name: 'getValueAction',
    method: getValueAction,
    category: 'Common',
    config: {
        actionType: 'getValueAction',
        actionName: 'get-value-1',
        object: '$data',
        propertyName: 'propName'
    },
    description: 'Gets value from object by propertyName path',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Get value from var:" + config.object + " prop: " + config.propertyName;
    }
};
/** @type {?} */
var setValueDescriptor = {
    name: 'setValueAction',
    method: setValueAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'setValueAction',
        actionName: 'set-value-1',
        object: '$data',
        propertyName: 'propName',
        propertyValue: 'value-1'
    })),
    description: 'Sets value to propertyName in objet',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Set value to " + config.object + " prop " + config.propertyName;
    }
};
/** @type {?} */
var setValuesDescriptor = {
    name: 'setValuesAction',
    method: setValuesAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'setValuesAction',
        actionName: 'set-values-1',
        object: '$data',
        valuesList: { prop: 'value-1' }
    })),
    description: 'Sets properties values in object',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Set value list to " + config.object;
    }
};
/** @type {?} */
var addItemToArrayDescriptor = {
    name: 'addItemToArrayAction',
    method: addItemToArrayAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'addItemToArrayAction',
        actionName: 'add-item-1',
        object: '$data',
        propertyName: 'arrayProp',
        itemPropertyName: 'dataProp',
        wrapName: 'item'
    })),
    description: 'Push item from current object into array property',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Pushed item to array: " + config.object + " prop: " + config.propertyName;
    }
};
/** @type {?} */
var pushItemToArrayDescriptor = {
    name: 'pushItemToArrayAction',
    method: pushItemToArrayAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'pushItemToArrayAction',
        actionName: 'push-item-1',
        object: '$fromVar',
        target: '$toVar',
        propertyName: 'prop1',
        targetPropertyName: 'prop2',
        wrapName: 'item'
    })),
    description: 'Push item from custom object into array property',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Pushed item from: " + config.object + " prop: " + config.propertyName + " to " + config.target + " prop: " + config.targetPropertyName;
    }
};
/** @type {?} */
var popArrayDescriptor = {
    name: 'popArrayAction',
    method: popArrayAction,
    category: 'Common',
    config: {
        actionType: 'popArrayAction',
        actionName: 'pop-item-1',
        object: '$dataVar',
        propertyName: 'prop1',
    },
    description: 'Pop item from object array property',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Pop item from array " + config.object + " prop " + config.propertyName;
    }
};
/** @type {?} */
var transferDataDescriptor = {
    name: 'transferDataAction',
    method: transferDataAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'transferDataAction',
        actionName: 'data-transfer-1',
        from: 'object1',
        fromPropertyName: 'prop1',
        to: 'object2',
        toPropertyName: 'prop2'
    })),
    description: 'Transfer data from object1 to object2',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Transfer data from " + config.from + " prop: " + config.fromPropertyName + " to " + config.to + " prop " + config.toPropertyName;
    }
};
/** @type {?} */
var setLocalVariableDescriptor = {
    name: 'setLocalVariable',
    method: setLocalVariableAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'setLocalVariable',
        actionName: 'set-local-1',
        sourceValue: '{{responseContent}}/user/userName',
        variableName: 'userName',
    })),
    description: 'Set value to local context',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Set value to local variable " + config.variableName;
    }
};
/** @type {?} */
var mergeInDataModelDescriptor = {
    name: 'mergeInDataModel',
    method: mergeInDataModelAction,
    category: 'Common',
    config: (/** @type {?} */ ({
        actionType: 'mergeInDataModel',
        actionName: 'merge-data-1',
        data: '{prop: 2}',
    })),
    description: 'Merge data into DataModel',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Merged data in data model";
    }
};
/** @type {?} */
var clearDataModelDescriptor = {
    name: 'clearDataModel',
    method: /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        /** @type {?} */
        var dataModel = resolveValue(context, '$dataModel');
        Object.keys(dataModel).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            dataModel[key] = null;
        }));
    },
    category: 'Common',
    config: {
        actionType: 'clearDataModel'
    },
    description: 'Clears all data model properties',
    getMessage: /**
     * @return {?}
     */
    function () {
        return "Clear data model";
    }
};
/**
 * @param {?} context
 * @return {?}
 */
function dataModelValidationAction(context) {
    try {
        /** @type {?} */
        var valid_1 = true;
        /** @type {?} */
        var uiModel = (/** @type {?} */ (resolveValue(context, '$uiModel')));
        /** @type {?} */
        var fields = JSONUtils.find(uiModel, '$(children)/itemProperties');
        /** @type {?} */
        var requiredFields = fields.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.required; }));
        if (requiredFields.length) {
            /** @type {?} */
            var dataModel_1 = resolveValue(context, '$dataModel');
            requiredFields.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                /** @type {?} */
                var value = JSONUtils.find(dataModel_1, f.dataModelPath);
                valid_1 = !(value === undefined || value === null);
            }));
        }
        return {
            result: valid_1,
            status: ActionStatus.SUCCESS
        };
    }
    catch (e) {
        throw e;
    }
}
/** @type {?} */
var dataModelValidationDescriptor = {
    name: 'dataModelValidation',
    method: dataModelValidationAction,
    category: 'Common',
    config: {
        actionType: 'dataModelValidation'
    },
    description: 'Validates dataModel based on uiModel',
    getMessage: /**
     * @return {?}
     */
    function () {
        return "Data model validation";
    }
};
/** @type {?} */
var ifSttatementAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    try {
        /** @type {?} */
        var resolved = resolveVariable(context, config.value);
        if (!resolved) {
            throw new Error("Variable " + config.value + " is not resolved");
        }
        /** @type {?} */
        var value = JSONUtils.find((/** @type {?} */ (resolved.value)), resolved.name);
        /** @type {?} */
        var state = config.compareTo ? value === config.compareTo : Boolean(value);
        return {
            result: state,
            steps: state ? config.trueActions : config.falseActions,
            status: ActionStatus.SUCCESS
        };
    }
    catch (e) {
        console.error(e);
        return {
            result: null,
            status: ActionStatus.STOP_EXECUTION
        };
    }
});
var ɵ11 = ifSttatementAction;
/** @type {?} */
var ifSttatementDescriptor = {
    name: 'if',
    method: ifSttatementAction,
    category: 'Conditional',
    config: (/** @type {?} */ ({
        value: true,
        trueActions: []
    })),
    description: 'Executes actions based on value',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "If statement for value " + config.value;
    }
};
/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function mapAction(context, config) {
    /** @type {?} */
    var propertyName = config.propertyName || '$';
    /** @type {?} */
    var obj = resolveValue(context, config.object);
    /** @type {?} */
    var list = JSONUtils.find(obj, propertyName);
    if (Array.isArray(list)) {
        return list.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return setFields(config.fields, item); }));
    }
    if (typeof list === 'object') {
        return Object.entries(list).reduce((/**
         * @param {?} prev
         * @param {?} entry
         * @return {?}
         */
        function (prev, entry) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(entry, 2), field = _a[0], val = _a[1];
            /** @type {?} */
            var mapField = config.fields.find((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f[0] === field; }));
            if (mapField) {
                prev[mapField[1]] = val;
            }
            else {
                prev[field] = val;
            }
            return prev;
        }), {});
    }
    return list;
}
/** @type {?} */
var mapDescriptor = {
    name: 'map',
    method: mapAction,
    category: 'Common',
    config: {
        actionType: 'map',
        actionName: 'map-1',
        object: '$step0-returnValue',
        propertyName: '$.body',
        fields: [[
                'field1',
                'label'
            ], [
                'field2',
                'value'
            ]]
    },
    description: 'Map array item properties',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Map array " + config.object + " prop: " + config.propertyName + ", fields: " + config.fields;
    }
};
/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function joinAction(context, config) {
    /** @type {?} */
    var primaryPropertyName = config.primaryPropertyName || '$';
    /** @type {?} */
    var primaryObj = resolveValue(context, config.primaryTable);
    /** @type {?} */
    var primaryTable = JSONUtils.find(primaryObj, primaryPropertyName);
    /** @type {?} */
    var foreignObj = resolveValue(context, config.foreignTable);
    /** @type {?} */
    var foreignTable = JSONUtils.find(foreignObj, config.foreignPropertyName || '$');
    /** @type {?} */
    var foreignKey = config.foreignKey || config.primaryKey;
    try {
        /** @type {?} */
        var joinTable = foreignTable.map((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var primaryData = primaryTable.find((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d[config.primaryKey] === row[foreignKey]; }));
            row = setFields(config.foreignFields, row);
            primaryData = setFields(config.primaryFields, primaryData);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, row, primaryData);
        }));
        return joinTable;
    }
    catch (e) {
        throw e;
    }
}
/** @type {?} */
var joinDescriptor = {
    name: 'join',
    method: joinAction,
    category: 'Common',
    config: {
        actionType: 'join',
        primaryKey: 'table1ID',
        primaryTable: '$tableData1',
        primaryFields: [['field1', 'Fild Title'], 'ID'],
        foreignKey: 'table2ID',
        foreignTable: '$tableData2',
        foreignFields: ['ID', ['fieldTable2', 'Title']],
        returnValue: 'resultTableData'
    },
    description: 'Joins data from two sources',
    getMessage: /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return "Join table " + config.primaryTable + " (primary key " + config.primaryKey + ")\n      with " + config.foreignTable + " (foreign key " + config.foreignKey + ")";
    }
};
/** @type {?} */
var createObjectAction = (/**
 * @param {?} context
 * @param {?} config
 * @return {?}
 */
function (context, config) {
    /** @type {?} */
    var obj = config.object;
    if (typeof obj === 'object') {
        obj = JSON.stringify(obj);
    }
    /** @type {?} */
    var res = obj.match(/\$([\w-]+)*/);
    while (res) {
        /** @type {?} */
        var variable = "$" + res[1];
        /** @type {?} */
        var value = resolveValue(context, variable);
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        else if (typeof value === 'string') {
            value = "\"" + value + "\"";
        }
        obj = obj.replace("\"" + variable + "\"", value);
        res = obj.match(/\$([\w-]+)*/);
    }
    return JSON.parse(obj);
});
var ɵ12 = createObjectAction;
/** @type {?} */
var createObjectDescriptor = {
    name: 'createObject',
    method: createObjectAction,
    category: 'Data Formatter',
    config: {
        actionType: 'createObject',
        actionName: 'result',
        object: {
            items: ['$sendData-returnValue']
        }
    },
    description: 'Creates custom object',
    getMessage: /**
     * @return {?}
     */
    function () {
        return 'Creates object';
    }
};
/** @type {?} */
var commonActionsMap = new Map([
    ['getValue', getValueDescriptor],
    ['setValue', setValueDescriptor],
    ['setValues', setValuesDescriptor],
    ['addItemToArray', addItemToArrayDescriptor],
    ['popArray', popArrayDescriptor],
    ['pushItemToArray', pushItemToArrayDescriptor],
    ['transferData', transferDataDescriptor],
    ['setLocalVariable', setLocalVariableDescriptor],
    ['mergeInDataModel', mergeInDataModelDescriptor],
    ['clearDataModel', clearDataModelDescriptor],
    ['dataModelValidation', dataModelValidationDescriptor],
    ['if', ifSttatementDescriptor],
    ['join', joinDescriptor],
    ['map', mapDescriptor],
    ['createObject', createObjectDescriptor]
]);
/**
 * @param {?} name
 * @param {?} val
 * @return {?}
 */
function registerAction(name, val) {
    if (typeof val === 'function') {
        val = {
            name: name,
            method: val,
            category: 'Common',
            config: 'Not described',
        };
    }
    if (!val.hasOwnProperty('getMessage')) {
        val.getMessage = (/**
         * @return {?}
         */
        function () { return "Action " + name + " executed."; });
    }
    commonActionsMap.set(name, val);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/workflow-editor/workflow-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WorkflowEditorComponent = /** @class */ (function () {
    function WorkflowEditorComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = '';
    }
    /**
     * @return {?}
     */
    WorkflowEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.actions = Array.from(commonActionsMap).filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), name = _b[0], action = _b[1];
            return typeof action !== 'function';
        })).map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), name = _b[0], action = _b[1];
            return (/** @type {?} */ (action));
        }));
        this.setFilteredActions();
        this.mapArray = Object.keys(this.config);
        this.selectedAction = this.actions[0];
    };
    /**
     * @return {?}
     */
    WorkflowEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.configEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_6__["edit"])(this.configEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: formatObjToJsonStr(this.selectedAction.config)
        });
    };
    /**
     * @param {?} action
     * @return {?}
     */
    WorkflowEditorComponent.prototype.onSelect = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.selectedAction = action;
        this.configEditor.setValue(formatObjToJsonStr(action.config));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    WorkflowEditorComponent.prototype.appendTo = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        try {
            this.config[key].push(JSON.parse(this.configEditor.getValue()));
            this.change.emit();
            this.modal.hide();
        }
        catch (e) {
            console.error(e);
        }
    };
    /**
     * @return {?}
     */
    WorkflowEditorComponent.prototype.setFilteredActions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.search) {
            this.filteredActions = this.actions;
        }
        else {
            this.filteredActions = this.actions.filter((/**
             * @param {?} a
             * @return {?}
             */
            function (a) {
                return a.name.includes(_this.search);
            }));
        }
    };
    /**
     * @return {?}
     */
    WorkflowEditorComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.modal.show();
    };
    WorkflowEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-workflow-editor',
                    template: "<div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Workflow Step</h4>\n        <button type=\"button\" class=\"close\" (click)=\"modal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body px-4\">\n        <div class=\"form-group my-1\">\n          <label for=\"action-search-id\" title=\"Search for actions\" class=\"col-form-label px-0 py-1\">Search for actions</label>\n            <div class=\"flex-fill\">\n              <input type=\"text\" (input)=\"setFilteredActions()\" class=\"form-control\" placeholder=\"Type action name\" name=\"search\" id=\"action-search-id\" [(ngModel)]=\"search\">\n            </div>\n          </div>\n        <label class=\"mt-2 mb-0 h-5 pb-1\">Select action step</label>\n        <div class=\"actions-list\">\n            <div *ngFor=\"let action of filteredActions\" class=\"p-1 action\" [ngClass]=\"{active: selectedAction === action}\"\n            (click)=\"onSelect(action)\"><h5 class=\"mb-0\">{{action.name}}</h5><em>{{action.description}}</em></div>\n            <h5 class=\"my-2\" *ngIf=\"!filteredActions.length\">No actions found</h5>\n        </div>\n        <label class=\"mt-2 mb-0 h-5 pb-1\">Sample Configuration</label>\n        <div class=\"ace-editor\" #configEl></div>\n      </div>\n      <div class=\"modal-footer flex-column\">\n        <div class=\"row w-100 mx-0 px-0\">\n          <div class=\"btn-group ml-auto\" dropdown>\n            <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n              aria-controls=\"dropdown-basic\">\n              Append to <span class=\"caret\"></span>\n            </button>\n            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n              <li role=\"menuitem\" *ngFor=\"let item of mapArray\"><a class=\"dropdown-item cursor-pointer\" (click)=\"appendTo(item)\">{{item}}</a></li>\n            </ul>\n          </div>\n          <button type=\"button\" class=\"btn btn-light ml-1\" (click)=\"modal.hide()\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".ace-editor{min-height:200px}.action{cursor:pointer}.action.active{background:#d3d3d3}.actions-list{max-height:400px;overflow:auto;padding:.5rem}.ace-editor,.actions-list{border:1px solid gray;border-radius:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    WorkflowEditorComponent.ctorParameters = function () { return []; };
    WorkflowEditorComponent.propDecorators = {
        modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['modal', { static: true },] }],
        configEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['configEl', { static: false },] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return WorkflowEditorComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/properties-editor/properties-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@classdesc Widget displayes editable, grouped by category list of component properties based on UIModel.
 */
var PropertiesEditorComponent = /** @class */ (function () {
    function PropertiesEditorComponent() {
        this.updatedProperty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.groups = [];
        this.containerProperties = {};
        this.itemProperties = {};
    }
    /**
     * @return {?}
     */
    PropertiesEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProperties();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PropertiesEditorComponent.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var uiModel = _a.uiModel;
        if (!uiModel.firstChange) {
            this.updateProperties();
        }
    };
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    PropertiesEditorComponent.prototype.updateProperty = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        var name = item.name, isContainerProperty = item.isContainerProperty;
        /** @type {?} */
        var updatedProperties = isContainerProperty ? this.containerProperties : this.itemProperties;
        if (value === 'none') {
            value = undefined;
        }
        try {
            // If property value is an object or an array.
            updatedProperties[name] = JSON.parse(value);
        }
        catch (_a) {
            updatedProperties[name] = value;
        }
    };
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    PropertiesEditorComponent.prototype.onSelect = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        this.updateProperty(value, item);
        this.onSave();
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    PropertiesEditorComponent.prototype.initPropertyGroups = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        /** @type {?} */
        var groups = {};
        properties.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var groupValue = item.category;
            if (groupValue) {
                groups[groupValue] = groups[groupValue] || { value: groupValue, list: [] };
                groups[groupValue].list.push(item);
            }
        }));
        this.groups = Object.values(groups);
    };
    /**
     * @return {?}
     */
    PropertiesEditorComponent.prototype.onSave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.entries(this.itemProperties).forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), key = _b[0], val = _b[1];
            _this.uiModel.itemProperties[key] = val;
        }));
        Object.entries(this.containerProperties).forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), key = _b[0], val = _b[1];
            _this.uiModel.containerProperties[key] = val;
        }));
        this.updatedProperty.emit();
    };
    /**
     * @param {?} str
     * @return {?}
     */
    PropertiesEditorComponent.prototype.strToKebabCase = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.toLowerCase().replace(/\s{1,}/g, '-');
    };
    /**
     * @private
     * @return {?}
     */
    PropertiesEditorComponent.prototype.updateProperties = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.containerProperties = {};
        this.itemProperties = {};
        this.label = CoreService.getListOfComponents().find((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.packageName + ":" + c.name === _this.uiModel.type; })).label;
        /** @type {?} */
        var props = CoreService.getComponentProperties(this.uiModel.type);
        /** @type {?} */
        var itemProps = this.uiModel.itemProperties || {};
        /** @type {?} */
        var iProps = props.map((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            /** @type {?} */
            var name = prop.name;
            /** @type {?} */
            var controlProp = _this.getProperty(name);
            controlProp.descriptor = prop;
            /** @type {?} */
            var value = itemProps[name];
            if (value === undefined) {
                value = '';
            }
            else if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, controlProp, { value: value });
        }));
        /** @type {?} */
        var containerProps = this.uiModel.containerProperties || {};
        /** @type {?} */
        var cProps = Array.from(ContainerControlProperties.values()).map((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            /** @type {?} */
            var val = containerProps[prop.name];
            /** @type {?} */
            var value = val === undefined ? '' : val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, prop, { value: value, isContainerProperty: true });
        }));
        this.initPropertyGroups(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(cProps, iProps));
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    PropertiesEditorComponent.prototype.getProperty = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return ControlProperties.get(this.uiModel.type + ":" + name) || ControlProperties.get(name) ||
            { name: name, label: name, category: PropertyCategories.Main };
    };
    PropertiesEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-properties-editor',
                    template: "<div class=\"editor-container\" fxLayout=\"column\" (keyup.enter)=\"onSave()\">\n  <div class=\"d-flex align-items-baseline justify-content-between\">\n    <h5>{{label}}</h5>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-light\" (click)=\"selectParent.emit()\" title=\"Select parent\">\n        <i class=\"fa fa-arrow-up fa-lg\"></i>\n      </button>\n      <button class=\"btn btn-light\" (click)=\"clone.emit()\" title=\"Clone component\">\n        <i class=\"fa fa-clone fa-lg\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"form-group d-flex pl-1 my-1\">\n    <label for=\"container-prop-id\" title=\"Component ID\" class=\"col-form-label px-0 py-1\">ID</label>\n    <div class=\"flex-fill\">\n      <input type=\"text\" class=\"form-control\" name=\"id\" id=\"container-prop-id\" [(ngModel)]=\"uiModel.id\">\n    </div>\n  </div>\n  <accordion class=\"d-flex flex-fill flex-column p-0 m-0 w-100\">\n    <accordion-group *ngFor=\"let g of groups\" isOpen=\"true\" class=\"{{strToKebabCase(g.value)}}\">\n      <div class=\"header\" accordion-heading>\n        <i class=\"fa text-center fa-chevron-down\"></i>\n        <i class=\"fa text-center fa-chevron-right\"></i>\n        {{g.value}}\n      </div>\n      <ul class=\"d-flex flex-fill flex-column p-0 m-0\">\n        <li class=\"pl-1 mt-1 d-flex cursor-pointer prop-{{item.name}}\" *ngFor=\"let item of g.list\">\n          <label for=\"container-prop-{{item.name}}\" class=\"col-form-label px-0 py-1\">{{item.label}}</label>\n          <div class=\"flex-fill\">\n            <dc-combo-property [properties]=\"item.combo\" [value]=\"item.value\" *ngIf=\"item.combo\"\n              (change)=\"onSelect($event, item)\"></dc-combo-property>\n            <input *ngIf=\"!item.combo\" type=\"text\" class=\"form-control\" [value]=\"item.value\"\n              [name]=\"item.name\" id=\"container-prop-{{item.name}}\" (blur)=\"onSave()\"\n              (input)=\"updateProperty($event.target.value, item)\">\n          </div>\n          <button class=\"btn px-1 py-0\" title=\"Help\" [popover]=\"popTemplate\" [outsideClick]=\"true\">\n            <i class=\"fa fa-question-circle-o\"></i>\n          </button>\n          <ng-template #popTemplate>\n            <div [innerHtml]=\"item.descriptor.description\"></div>\n            <a *ngIf=\"item.descriptor.link\" [href]=\"item.descriptor.link\" target=\"blank\">Details</a>\n          </ng-template>\n        </li>\n      </ul>\n    </accordion-group>\n  </accordion>\n</div>\n",
                    styles: ["label{-webkit-box-flex:0;flex:0 0 110px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}::ng-deep .ng-select.property{min-height:28px}::ng-deep .ng-select.property .ng-select-container{min-height:28px;height:28px}::ng-deep .ng-select.property .ng-select-container .ng-value-container .ng-input{top:2px}::ng-deep .ng-select.property .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{padding:4px 10px}.editor-container::ng-deep .form-control,.form-control{height:calc(1em + .75rem + 2px)}.main-properties{-webkit-box-ordinal-group:1;order:0}.layout-properties{-webkit-box-ordinal-group:2;order:1}.appearance-properties{-webkit-box-ordinal-group:3;order:2}.container-properties{-webkit-box-ordinal-group:4;order:3}ul .prop-height,ul .prop-width{-webkit-box-ordinal-group:1;order:0}ul .prop-clickActionKey,ul .prop-min-height,ul .prop-min-width{-webkit-box-ordinal-group:2;order:1}ul .prop-btnClass,ul .prop-margin,ul .prop-padding{-webkit-box-ordinal-group:3;order:2}ul .prop-inputWidth,ul .prop-labelWidth{-webkit-box-ordinal-group:4;order:3}", "accordion-group ::ng-deep .panel.card{border:none;margin-bottom:0}accordion-group ::ng-deep .panel-heading{padding:.25rem;cursor:pointer}accordion-group ::ng-deep .panel-body.card-block.card-body{padding:0}accordion-group ::ng-deep [aria-expanded=false] .fa-chevron-down{display:none}accordion-group ::ng-deep [aria-expanded=true] .fa-chevron-right{display:none}.fa-chevron-right{width:14px}"]
                }] }
    ];
    PropertiesEditorComponent.propDecorators = {
        uiModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        updatedProperty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectParent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        clone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return PropertiesEditorComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/combo-property/combo-property.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComboPropertyComponent = /** @class */ (function () {
    function ComboPropertyComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ComboPropertyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var values = [this.value];
        if (typeof this.value === 'string' || this.value === undefined) {
            values = (((/** @type {?} */ (this.value))) || '').split('|');
        }
        this.result = this.properties.map((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) { return values[i] === undefined ? '' : values[i]; }));
        this.props = this.properties.map((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return Array.isArray(options) ? options.map((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                if (typeof o === 'object') {
                    return o;
                }
                return { label: o, value: o };
            })) : options;
        }));
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    ComboPropertyComponent.prototype.onSelect = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        this.setValue(option ? option.value : '', index);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    ComboPropertyComponent.prototype.selectedOption = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _this = this;
        return this.props[i].find((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return o.value === _this.result[i]; }));
    };
    /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    ComboPropertyComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    function (value, index) {
        this.result[index] = value;
        this.emitChange();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ComboPropertyComponent.prototype.onEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.emitChange();
    };
    /**
     * @return {?}
     */
    ComboPropertyComponent.prototype.emitChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var res = this.result.length > 1 ? this.result.join('|') : this.result[0];
        this.change.emit(res);
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    ComboPropertyComponent.prototype.isInput = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return typeof prop === 'string';
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    ComboPropertyComponent.prototype.isSelect = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return Array.isArray(prop);
    };
    ComboPropertyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-combo-property',
                    template: "<div class=\"d-flex combo-list\" (keyup.enter)=\"onEnter($event)\">\n  <ng-container *ngFor=\"let prop of props; let i = index\">\n    <input *ngIf=\"isInput(prop)\" type=\"text\" class=\"form-control\" [ngModel]=\"result[i]\"\n      [name]=\"prop\" (blur)=\"setValue($event.target.value, i)\"\n      (input)=\"result[i] = $event.target.value\">\n    <ng-select *ngIf=\"isSelect(prop)\" [items]=\"prop\" class=\"property\"\n      (change)=\"onSelect($event, i)\" [ngModel]=\"selectedOption(i)\"></ng-select>\n  </ng-container>\n</div>\n",
                    styles: ["ng-select:not(:last-child){margin-right:5px}.combo-list>*{-webkit-box-flex:1;flex:1 1 50%}"]
                }] }
    ];
    /** @nocollapse */
    ComboPropertyComponent.ctorParameters = function () { return []; };
    ComboPropertyComponent.propDecorators = {
        properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ComboPropertyComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [UISelectorComponent, NGXDynamicComponent, DesignerComponent, ControlEditorComponent, PropertiesEditorComponent,
                        ControlsPanelComponent,
                        ComboPropertyComponent,
                        WorkflowEditorComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        ng2_dragula__WEBPACK_IMPORTED_MODULE_7__["DragulaModule"],
                        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(),
                        ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"].forRoot(),
                        ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                        ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"].forRoot(),
                        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                        angular_split__WEBPACK_IMPORTED_MODULE_15__["AngularSplitModule"],
                        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
                    ],
                    exports: [UISelectorComponent, NGXDynamicComponent, DesignerComponent, WorkflowEditorComponent, angular_split__WEBPACK_IMPORTED_MODULE_15__["AngularSplitModule"]],
                    entryComponents: [ControlEditorComponent, WorkflowEditorComponent]
                },] }
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/logger/models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function WorkflowLog() { }
if (false) {}
/**
 * @record
 */
function StepLog() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/logger/workflow.logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WorkflowLogger = /** @class */ (function () {
    function WorkflowLogger() {
        this.logsMap = new Map();
        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @param {?} workflowName
     * @param {?=} step
     * @return {?}
     */
    WorkflowLogger.prototype.log = /**
     * @param {?} workflowName
     * @param {?=} step
     * @return {?}
     */
    function (workflowName, step) {
        if (this.logsMap.has(workflowName) && step) {
            /** @type {?} */
            var workflowLog = this.logsMap.get(workflowName);
            workflowLog.steps.push(step);
        }
        else {
            this.logsMap.set(workflowName, {
                workflowName: workflowName, steps: step ? [step] : []
            });
        }
    };
    Object.defineProperty(WorkflowLogger.prototype, "logs", {
        get: /**
         * @return {?}
         */
        function () {
            return Array.from(this.logsMap.values());
        },
        enumerable: true,
        configurable: true
    });
    return WorkflowLogger;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/logger/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/workflow/workflow.processor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function WorkflowConfig() { }
if (false) {}
var ExecutionContext = /** @class */ (function () {
    function ExecutionContext() {
        this.failOnError = false;
        this.variables = new Map();
        this.actions = new Map();
        this.workflows = new Map();
        this.constants = new Map();
    }
    return ExecutionContext;
}());
if (false) {}
var WorkflowEngine = /** @class */ (function () {
    function WorkflowEngine(workflowConfig) {
        this.workflowConfig = workflowConfig;
        this.context = null;
        this.isInitialized = false;
        this.logger = new WorkflowLogger();
        this.context = new ExecutionContext();
        workflowConfig.vars = workflowConfig.vars || {};
        workflowConfig.consts = workflowConfig.consts || {};
        workflowConfig.workflowsMap = workflowConfig.workflowsMap || {};
        this.variableResolver = workflowConfig.variableResolver;
    }
    Object.defineProperty(WorkflowEngine.prototype, "configuration", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isInitialized) {
                return {
                    vars: mapToObj(this.context.variables, ['uiModel', 'dataModel']),
                    consts: mapToObj(this.context.constants),
                    workflowsMap: mapToObj(this.context.workflows)
                };
            }
            var _a = this.workflowConfig, vars = _a.vars, consts = _a.consts, workflowsMap = _a.workflowsMap;
            return { vars: vars, consts: consts, workflowsMap: workflowsMap };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    WorkflowEngine.prototype.loadContext = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var context, _a, _b, name_1, _c, _d, name_2, _e, _f, name_3, _g, _h, name_4;
            var e_1, _j, e_2, _k, e_3, _l, e_4, _m;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_o) {
                context = this.context;
                context.failOnError = !!config.failOnError;
                try {
                    for (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(config.vars).filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return !p.startsWith('_'); }))), _b = _a.next(); !_b.done; _b = _a.next()) {
                        name_1 = _b.value;
                        context.variables.set(name_1, config.vars[name_1]);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_j = _a.return)) _j.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                try {
                    for (_c = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(config.consts).filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return !p.startsWith('_'); }))), _d = _c.next(); !_d.done; _d = _c.next()) {
                        name_2 = _d.value;
                        context.constants.set(name_2, config.consts[name_2]);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_k = _c.return)) _k.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                try {
                    for (_e = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(config.workflowsMap).filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return !p.startsWith('_'); }))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        name_3 = _f.value;
                        context.workflows.set(name_3, config.workflowsMap[name_3]);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_l = _e.return)) _l.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                try {
                    for (_g = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(config.workflowsMap).filter((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return p.startsWith('_var'); }))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        name_4 = _h.value;
                        context.variables.set(name_4, config.workflowsMap[name_4]);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_m = _g.return)) _m.call(_g);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @param {?} context
     * @param {?} includes
     * @return {?}
     */
    WorkflowEngine.prototype.loadExternals = /**
     * @private
     * @param {?} context
     * @param {?} includes
     * @return {?}
     */
    function (context, includes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var includes_1, includes_1_1, include;
            var e_5, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
                try {
                    for (includes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(includes), includes_1_1 = includes_1.next(); !includes_1_1.done; includes_1_1 = includes_1.next()) {
                        include = includes_1_1.value;
                        if (include === '@common') {
                            commonActionsMap.forEach((/**
                             * @param {?} func
                             * @param {?} key
                             * @return {?}
                             */
                            function (func, key) { return context.actions.set(key, func); }));
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (includes_1_1 && !includes_1_1.done && (_a = includes_1.return)) _a.call(includes_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @param {?} context
     * @param {?} step
     * @return {?}
     */
    WorkflowEngine.prototype.resolveProperties = /**
     * @private
     * @param {?} context
     * @param {?} step
     * @return {?}
     */
    function (context, step) {
        /** @type {?} */
        var payload = Object.assign({}, step);
        delete payload.actionType;
        return payload;
    };
    /**
     * @private
     * @param {?=} steps
     * @param {?=} workflowName
     * @return {?}
     */
    WorkflowEngine.prototype.executeFlow = /**
     * @private
     * @param {?=} steps
     * @param {?=} workflowName
     * @return {?}
     */
    function (steps, workflowName) {
        if (steps === void 0) { steps = []; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var context, importVars, vars, steps_1, steps_1_1, step, payload, action, returnValue, message, name_5, e_6, e_7_1;
            var e_7, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        context = this.context;
                        if (this.variableResolver) {
                            importVars = context.variables.get('_var_import_overrides') || {};
                            vars = this.variableResolver.resolve(context.variables.get('_var') || {}, importVars);
                            steps = (/** @type {?} */ (this.variableResolver.resolve(steps, vars)));
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, 11, 12]);
                        steps_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(steps), steps_1_1 = steps_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!steps_1_1.done) return [3 /*break*/, 9];
                        step = steps_1_1.value;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 7, , 8]);
                        if (!context.actions.has(step.actionType)) {
                            if (context.failOnError) {
                                throw new Error("Can't find action " + step.actionType);
                            }
                            else {
                                console.warn("Can't find action " + step.actionType + ". Step " + step.actionType + " " + step.actionName + " skipped.");
                                return [3 /*break*/, 8];
                            }
                        }
                        payload = this.resolveProperties(context, step);
                        console.log("Execute " + step.actionType + " with config:", payload);
                        action = context.actions.get(step.actionType);
                        if (typeof action === 'function') {
                            throw Error("No ActionDescriptor for " + step.actionType);
                        }
                        returnValue = void 0;
                        message = action.getMessage(payload);
                        this.logger.status$.next("Workflow: " + workflowName + ". " + message);
                        return [4 /*yield*/, action.method(context, payload)];
                    case 4:
                        returnValue = _b.sent();
                        // set return value if step has a name
                        if (step.actionName) {
                            name_5 = step.actionName + "-returnValue";
                            context.variables.set(name_5, returnValue);
                        }
                        if (step.returnValue) {
                            context.variables.set(step.returnValue, returnValue);
                        }
                        this.logger.log(workflowName, {
                            actionType: step.actionType,
                            message: returnValue.message ? returnValue.message : message,
                            success: returnValue.status ? returnValue.status === ActionStatus.SUCCESS : true,
                        });
                        if (!returnValue.steps) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.executeFlow(returnValue.steps, workflowName)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        e_6 = _b.sent();
                        this.logger.log(workflowName, {
                            actionType: step.actionType,
                            message: e_6.message,
                            success: false,
                        });
                        this.logger.error$.next("Failed action " + step.actionType + ": " + e_6.message);
                        return [3 /*break*/, 9];
                    case 8:
                        steps_1_1 = steps_1.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_7_1 = _b.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (steps_1_1 && !steps_1_1.done && (_a = steps_1.return)) _a.call(steps_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} variableName
     * @return {?}
     */
    WorkflowEngine.prototype.getVariable = /**
     * @param {?} variableName
     * @return {?}
     */
    function (variableName) {
        return this.context.variables.get(variableName);
    };
    /**
     * @param {?} variableName
     * @param {?} value
     * @return {?}
     */
    WorkflowEngine.prototype.setVariable = /**
     * @param {?} variableName
     * @param {?} value
     * @return {?}
     */
    function (variableName, value) {
        this.context.variables.set(variableName, value);
    };
    /**
     * @return {?}
     */
    WorkflowEngine.prototype.initialize = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isInitialized) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loadExternals(this.context, this.workflowConfig.include)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadContext(this.workflowConfig)];
                    case 2:
                        _a.sent();
                        this.isInitialized = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} workflowName
     * @return {?}
     */
    WorkflowEngine.prototype.hasWorkflow = /**
     * @param {?} workflowName
     * @return {?}
     */
    function (workflowName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isInitialized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        this.isInitialized = true;
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.context.workflows.has(workflowName)];
                }
            });
        });
    };
    /**
     * @param {?} workflowName
     * @param {?=} payload
     * @return {?}
     */
    WorkflowEngine.prototype.run = /**
     * @param {?} workflowName
     * @param {?=} payload
     * @return {?}
     */
    function (workflowName, payload) {
        if (payload === void 0) { payload = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isInitialized) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        this.isInitialized = true;
                        _a.label = 2;
                    case 2:
                        if (!this.context.workflows.has(workflowName)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.executeFlow(this.context.workflows.get(workflowName), workflowName)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (this.context.failOnError) {
                            throw new Error("Can't find workflow " + workflowName);
                        }
                        else {
                            console.warn("Can't find workflow " + workflowName);
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return WorkflowEngine;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-dynamic-components-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-dynamic-components-core.js.map


/***/ }),

/***/ "../ngx-dynamic-components/dist/@ngx-dynamic-components/material/fesm5/ngx-dynamic-components-material.js":
/*!****************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/dist/@ngx-dynamic-components/material/fesm5/ngx-dynamic-components-material.js ***!
  \****************************************************************************************************************/
/*! exports provided: COMPONENTS_LIST, MaterialModule, getCategories, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return COMPONENTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ButtonUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ButtonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return example$8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return radioGroupDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return TabsUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return TabsProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return example$9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return tabsDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return DatableUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return DatableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return example$a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return datableDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return packageName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return buttonDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FlexContainerUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return FlexContainerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return flexContainerDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CardUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CardProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return cardDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return CheckboxUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return CheckboxProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return checkboxDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return InputUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return InputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return inputDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SelectUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return SelectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return selectDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return TextUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return TextProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return textDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return TextareaUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return TextareaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return textareaDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return RadioGroupUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return RadioGroupProperties; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");








/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var packageName = 'material';
/** @enum {string} */
var Categories = {
    Buttons: "Buttons",
    Layout: "Layout",
    FormControl: "Form control",
    Text: "Text",
    DataTable: "Data table",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(InputUIComponent, _super);
    function InputUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-input',
                    template: "\n        <mat-form-field>\n          <input matInput\n            [ngStyle]=\"itemStyles\"\n            [placeholder]=\"uiModel.itemProperties?.placeholder\"\n            (input)=\"changedDataModel.emit(this.dataModel)\"\n            [(ngModel)]=\"componentDataModel\"\n            />\n        </mat-form-field>\n    "
                }] }
    ];
    return InputUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var InputProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(InputProperties, _super);
    function InputProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type your name',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], InputProperties.prototype, "placeholder", void 0);
    return InputProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["DataModelProperties"]));
if (false) {}
/** @type {?} */
var example = {
    title: 'Text input example',
    uiModel: {
        type: 'material:text-input',
        containerProperties: {},
        itemProperties: {
            isNumeric: false,
            isDate: false,
            format: '',
            placeholder: 'Enter your name',
            dataModelPath: '$.name'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function InputUIComponentConstrutor() { }
/**
 * @record
 */
function InputPropertiesConstrutor() { }
/** @type {?} */
var inputDescriptor = {
    name: 'text-input',
    label: 'Text Input (Material)',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Input component',
    itemProperties: InputProperties,
    component: InputUIComponent,
    example: example
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/text-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TextUIComponent, _super);
    function TextUIComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.display = 'inline-block';
        return _this;
    }
    Object.defineProperty(TextUIComponent.prototype, "txtBoxStyles", {
        get: /**
         * @return {?}
         */
        function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__assign"])({}, this.itemStyles, { 'border-bottom': this.properties.border ? '2px solid black' : 'none' });
        },
        enumerable: true,
        configurable: true
    });
    TextUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-text',
                    template: "\n    <span [ngStyle]=\"txtBoxStyles\">{{uiModel.itemProperties?.text}}</span>\n    "
                }] }
    ];
    TextUIComponent.propDecorators = {
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }]
    };
    return TextUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
if (false) {}
var TextProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TextProperties, _super);
    function TextProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Displays text data.',
            example: 'Text information',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], TextProperties.prototype, "text", void 0);
    return TextProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["StyleProperties"]));
if (false) {}
/**
 * @record
 */
function TextUIComponentConstrutor() { }
/**
 * @record
 */
function TextPropertiesConstrutor() { }
/** @type {?} */
var example$1 = {
    title: 'Text compoent example',
    uiModel: {
        type: 'material:text',
        containerProperties: {},
        itemProperties: {
            text: "",
            width: '50%',
            padding: '20px'
        }
    },
    dataModel: {}
};
/** @type {?} */
var textDescriptor = {
    name: 'text',
    packageName: packageName,
    label: 'Text',
    category: "Basic" /* Basic */,
    description: 'Text component',
    itemProperties: TextProperties,
    component: TextUIComponent,
    example: example$1,
    defaultModel: {
        type: packageName + ":text",
        itemProperties: {
            text: 'Enter text here',
            width: '100%'
        },
        containerProperties: {}
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(ButtonUIComponent, _super);
    function ButtonUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ButtonUIComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.interpreter.evaluate(this.scripts, {
            dataModel: this.dataModel,
            uiModel: this.uiModel
        }, this.properties.clickActionKey);
    };
    ButtonUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-button',
                    template: "\n    <button mat-flat-button color=\"primary\"\n      [ngStyle]=\"itemStyles\"\n      (click)=\"onClick()\">\n    {{uiModel.itemProperties?.label}}\n    </button>\n    "
                }] }
    ];
    return ButtonUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var ButtonProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(ButtonProperties, _super);
    function ButtonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Button label',
            example: 'Click me!',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], ButtonProperties.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Key for action that fires onclick',
            example: 'submit',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], ButtonProperties.prototype, "clickActionKey", void 0);
    return ButtonProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["StyleProperties"]));
if (false) {}
/** @type {?} */
var example$2 = {
    title: 'Basic button example',
    uiModel: {
        type: 'material:button',
        containerProperties: {},
        itemProperties: {
            label: 'SUBMIT',
            width: '50%',
            margin: '15px',
            padding: '10px 5px 10px 0px',
            clickActionKey: 'consoleLog'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function ButtonUIComponentConstrutor() { }
/**
 * @record
 */
function ButtonPropertiesConstrutor() { }
/** @type {?} */
var buttonDescriptor = {
    name: 'button',
    label: 'Button (Material)',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Button component',
    itemProperties: ButtonProperties,
    component: ButtonUIComponent,
    example: example$2,
    defaultModel: {
        type: packageName + ":button",
        itemProperties: {
            label: 'Button'
        },
        containerProperties: {}
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/flex-container-ui/flex-container-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlexContainerUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(FlexContainerUIComponent, _super);
    function FlexContainerUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FlexContainerUIComponent.prototype.getStrValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            return value.split('|').join(' ');
        }
        return '';
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    FlexContainerUIComponent.prototype.onFormSubmit = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this.triggerAction('_OnSubmit');
        // Trigger ui validation messages.
        this.form.nativeElement.querySelectorAll('input,textarea,select').forEach((/**
         * @param {?} el
         * @param {?} i
         * @param {?} list
         * @return {?}
         */
        function (el, i, list) {
            el.focus();
            if (list.length - 1 === i) {
                el.blur();
            }
        }));
    };
    FlexContainerUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-flex-container',
                    template: "<form *ngIf=\"properties.isForm\" drop-container (ngSubmit)=\"onFormSubmit($event)\" #form\n  [fxLayout]=\"properties.fxLayout || 'row'\"\n  [fxLayoutGap]=\"properties.fxLayoutGap || '0'\"\n  [fxLayoutAlign]=\"getStrValue(properties.fxLayoutAlign)\"\n  [ngStyle]=\"itemStyles\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</form>\n<div *ngIf=\"!properties.isForm\" drop-container\n  [fxLayout]=\"properties.fxLayout || 'row'\"\n  [fxLayoutGap]=\"properties.fxLayoutGap || '0'\"\n  [fxLayoutAlign]=\"getStrValue(properties.fxLayoutAlign)\"\n  [ngStyle]=\"itemStyles\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n<ng-template #content>\n  <div *ngFor=\"let item of uiModel.children\" class=\"item\"\n    [fxFlex]=\"item.containerProperties?.fxFlex || 'initial'\"\n    [fxFlexOrder]=\"item.containerProperties?.fxFlexOrder || 0\"\n    [fxFlexOffset]=\"item.containerProperties?.fxFlexOffset || '0%'\"\n    [fxFlexAlign]=\"item.containerProperties?.fxFlexAlign || 'unset'\"\n    [attr.fxFlexFill]=\"item.containerProperties?.fxFill || false\">\n\n    <dc-ui-selector (changedDataModel)=\"changedDataModel.emit($event)\"\n      [uiModel]='item'\n      [dataModel]='dataModel'\n      [interpreter]='interpreter'\n      [scripts]='scripts'></dc-ui-selector>\n  </div>\n</ng-template>\n"
                }] }
    ];
    FlexContainerUIComponent.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['form', { static: false },] }]
    };
    return FlexContainerUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
if (false) {}
var FlexContainerProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(FlexContainerProperties, _super);
    function FlexContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'fxLayout (Angular Flex-Layout property)',
            example: 'column',
            link: 'https://github.com/angular/flex-layout/wiki/fxLayout-API'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], FlexContainerProperties.prototype, "fxLayout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'fxLayoutGap (Angular Flex-Layout property)',
            example: '10px',
            link: 'https://github.com/angular/flex-layout/wiki/fxLayoutGap-API'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], FlexContainerProperties.prototype, "fxLayoutGap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'fxLayoutAlign (Angular Flex-Layout property)',
            example: 'stretch center',
            link: 'https://github.com/angular/flex-layout/wiki/fxLayoutAlign-API0'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], FlexContainerProperties.prototype, "fxLayoutAlign", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'If panel is form',
            example: 'true'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], FlexContainerProperties.prototype, "isForm", void 0);
    return FlexContainerProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["StyleProperties"]));
if (false) {}
/** @type {?} */
var example$3 = {
    title: 'Flex example',
    uiModel: {
        type: 'material:flex-container',
        containerProperties: {},
        itemProperties: {
            fxLayout: 'row',
            fxLayoutGap: '10px',
            width: '100%',
            padding: '10px'
        },
        children: [{
                type: 'material:text',
                containerProperties: {
                    fxFlex: '1 1 auto'
                },
                itemProperties: {
                    text: 'Text line 1',
                }
            }, {
                type: 'material:text',
                containerProperties: {
                    fxFlex: '1 1 auto'
                },
                itemProperties: {
                    text: 'Text line 2',
                }
            }]
    },
    dataModel: {}
};
/**
 * @record
 */
function FlexContainerUIComponentConstrutor() { }
/**
 * @record
 */
function FlexContainerPropertiesConstrutor() { }
/** @type {?} */
var flexContainerDescriptor = {
    name: 'flex-container',
    packageName: packageName,
    label: 'Flex Panel',
    category: "Containers" /* Containers */,
    description: 'Flex layout component',
    itemProperties: FlexContainerProperties,
    component: FlexContainerUIComponent,
    example: example$3,
    defaultModel: {
        type: packageName + ":flex-container",
        containerProperties: {},
        itemProperties: {
            fxLayout: 'row',
            fxLayoutGap: '8px',
            width: '100%',
            height: '100%',
            'min-height': '50px',
            'min-width': '50px',
            isForm: false,
            id: 'form'
        },
        children: []
    },
    propertiesDescriptor: [['isForm', {
                name: 'isForm', label: 'Form', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["PropertyCategories"].Main,
                combo: [[{ label: 'false', value: false }, { label: 'true', value: true }]]
            }]]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/select-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(SelectUIComponent, _super);
    function SelectUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SelectUIComponent.prototype.onSelect = /**
     * @return {?}
     */
    function () {
        this.changedDataModel.emit(this.dataModel);
        this.triggerAction('_selectionChanged');
    };
    SelectUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-select',
                    template: "\n    <mat-form-field>\n      <mat-select [ngStyle]=\"itemStyles\"\n        [placeholder]=\"uiModel.itemProperties?.placeholder\"\n        (selectionChange)=\"onSelect()\"\n        [(ngModel)]=\"componentDataModel\">\n        <mat-option *ngFor=\"let option of uiModel.itemProperties?.options\" [value]=\"option.value\">\n          {{option.label}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  "
                }] }
    ];
    return SelectUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var SelectProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(SelectProperties, _super);
    function SelectProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Select options.',
            example: '[{label: "One", value: 1}]',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Array)
    ], SelectProperties.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Label shown when no option is selected.',
            example: 'Please select an option',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], SelectProperties.prototype, "placeholder", void 0);
    return SelectProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["DataModelProperties"]));
if (false) {}
/**
 * @record
 */
function SelectUIComponentConstrutor() { }
/**
 * @record
 */
function SelectPropertiesConstrutor() { }
/** @type {?} */
var example$4 = {
    uiModel: {
        type: 'material:select',
        containerProperties: {},
        id: 'stateSelection',
        itemProperties: {
            options: [
                { label: 'United Kingdom', value: 'uk' },
                { label: 'Ukraine', value: 'ua' }
            ],
            placeholder: 'Country',
            dataModelPath: '$.country'
        }
    },
    dataModel: {},
    title: 'Basic select example'
};
/** @type {?} */
var selectDescriptor = {
    name: 'select',
    packageName: packageName,
    label: 'Dropdown (Material)',
    category: "Basic" /* Basic */,
    description: 'Select component',
    itemProperties: SelectProperties,
    component: SelectUIComponent,
    example: example$4
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CheckboxUIComponent, _super);
    function CheckboxUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-checkbox',
                    template: "\n    <mat-checkbox [ngStyle]=\"itemStyles\"\n      (input)=\"changedDataModel.emit(this.dataModel)\"\n      [(ngModel)]=\"componentDataModel\">{{uiModel.itemProperties.label}}\n    </mat-checkbox>"
                }] }
    ];
    return CheckboxUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var CheckboxProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CheckboxProperties, _super);
    function CheckboxProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Label',
            example: 'Accept conditions.',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], CheckboxProperties.prototype, "label", void 0);
    return CheckboxProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["DataModelProperties"]));
if (false) {}
/** @type {?} */
var example$5 = {
    title: 'Checkbox example',
    uiModel: {
        type: 'material:checkbox',
        containerProperties: {},
        itemProperties: {
            label: 'Accept conditions',
            dataModelPath: '$.accept'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function CheckboxUIComponentConstrutor() { }
/**
 * @record
 */
function CheckboxPropertiesConstrutor() { }
/** @type {?} */
var checkboxDescriptor = {
    name: 'checkbox',
    label: 'Multi-choice boxes (Material)',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Checkbox component',
    itemProperties: CheckboxProperties,
    component: CheckboxUIComponent,
    example: example$5
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/textarea-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TextareaUIComponent, _super);
    function TextareaUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-textarea',
                    template: "\n        <mat-form-field>\n            <textarea matInput [placeholder]=\"uiModel?.itemProperties?.placeholder\"\n                [rows]=\"uiModel?.itemProperties?.rows\"\n                [ngStyle]=\"itemStyles\"\n                (input)=\"changedDataModel.emit(this.dataModel)\"\n                [(ngModel)]=\"componentDataModel\"></textarea>\n        </mat-form-field>\n    "
                }] }
    ];
    return TextareaUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var TextareaProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TextareaProperties, _super);
    function TextareaProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Number of rows in textarea',
            example: '5',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
    ], TextareaProperties.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type about yourself',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], TextareaProperties.prototype, "placeholder", void 0);
    return TextareaProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["DataModelProperties"]));
if (false) {}
/** @type {?} */
var example$6 = {
    title: 'Text area example',
    uiModel: {
        type: 'material:textarea',
        containerProperties: {
            fxFlex: '1 1 auto'
        },
        itemProperties: {
            rows: 10,
            placeholder: 'Type information about yourself',
            dataModelPath: '$.info'
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function TextareaUIComponentConstrutor() { }
/**
 * @record
 */
function TextareaPropertiesConstrutor() { }
/** @type {?} */
var textareaDescriptor = {
    name: 'textarea',
    label: 'Text Area',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Text area component',
    itemProperties: TextareaProperties,
    component: TextareaUIComponent,
    example: example$6
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-ui-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CardUIComponent, _super);
    function CardUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardUIComponent.prototype, "header", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getChildByIndex(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardUIComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getChildByIndex(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardUIComponent.prototype, "footer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getChildByIndex(2);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CardUIComponent.prototype.getChildByIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["getItemByIndex"])(this.uiModel.children, index);
    };
    CardUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-ui-card',
                    template: "\n  <mat-card [ngStyle]=\"itemStyles\">\n    <mat-card-header>\n      <dc-ui-selector *ngIf=\"header\"\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='header'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n        <ng-container *ngTemplateOutlet=\"headerTitle\"></ng-container>\n    </mat-card-header>\n    <ng-template #headerTitle>\n      <mat-card-title *ngIf=\"properties.title\">{{properties.title}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"properties.subTitle\">{{properties.subTitle}}</mat-card-subtitle>\n    </ng-template>\n\n    <img *ngIf=\"properties.img as img\" [src]=\"img\" mat-card-image/>\n    <mat-card-content *ngIf=\"content\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='content'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </mat-card-content>\n    <mat-card-footer *ngIf=\"footer\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='footer'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </mat-card-footer>\n  </mat-card>",
                    styles: ["\n      mat-card-header ::ng-deep .mat-card-header-text {\n        margin: 0;\n      }\n  "]
                }] }
    ];
    return CardUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var CardProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CardProperties, _super);
    function CardProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Card image url',
            example: 'logo.png',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], CardProperties.prototype, "img", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Card can have 3 children, 1 - header, 2 - content, 3 - footer.',
            example: "[null, {\n      type: 'material:text',\n      containerProperties: {},\n      itemProperties: {\n        text: 'Card content text',\n      }\n    }, null]",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Array)
    ], CardProperties.prototype, "children", void 0);
    return CardProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["ContainerProperties"]));
if (false) {}
/** @type {?} */
var example$7 = {
    title: 'Card panel example',
    uiModel: {
        type: 'material:card',
        containerProperties: {},
        itemProperties: {
            padding: '10px',
            margin: '10px auto',
            width: '80%'
        },
        children: [{
                type: 'material:text',
                containerProperties: {},
                itemProperties: {
                    text: 'Card header text',
                    width: '100%'
                }
            }, {
                type: 'material:textarea',
                containerProperties: {},
                itemProperties: {
                    rows: 4,
                    placeholder: 'Type card information',
                    dataModelPath: '$.card/info',
                    width: '100%',
                }
            }, {
                type: 'material:button',
                containerProperties: {},
                itemProperties: {
                    label: 'Submit',
                    margin: '16px',
                    width: '50%',
                    clickActionKey: 'consoleLog'
                }
            }]
    },
    dataModel: {}
};
/**
 * @record
 */
function CardUIComponentConstrutor() { }
/**
 * @record
 */
function CardPropertiesConstrutor() { }
/** @type {?} */
var cardDescriptor = {
    name: 'card',
    label: 'Card (Material)',
    packageName: packageName,
    category: "Containers" /* Containers */,
    description: 'Card layout component',
    itemProperties: CardProperties,
    component: CardUIComponent,
    example: example$7
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/radio-group-ui/radio-group-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioGroupUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(RadioGroupUIComponent, _super);
    function RadioGroupUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioGroupUIComponent.prototype, "orientation", {
        get: /**
         * @return {?}
         */
        function () {
            return this.properties.orientation === 'vertical' ? 'column' : 'row';
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-radio-group-ui',
                    template: "\n    <label *ngIf=\"uiModel.itemProperties.label\">{{uiModel.itemProperties.label}}</label>\n    <mat-radio-group [ngStyle]=\"itemStyles\"\n      [fxLayout]=\"orientation\"\n      (change)=\"changedDataModel.emit(this.dataModel)\"\n      [(ngModel)]=\"componentDataModel\">\n      <mat-radio-button *ngFor=\"let option of uiModel.itemProperties.options\" [value]=\"option.value\"\n        [ngStyle]=\"getStyles(uiModel.itemProperties.optionStyles)\">\n        {{option.label}}\n      </mat-radio-button>\n    </mat-radio-group>\n  "
                }] }
    ];
    return RadioGroupUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var RadioGroupProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(RadioGroupProperties, _super);
    function RadioGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Label',
            example: 'Select color',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], RadioGroupProperties.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Radio group options',
            example: '[{label: "One", value: 1}]',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Array)
    ], RadioGroupProperties.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Radio option styles',
            example: '{ padding: \'10px\' }',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
    ], RadioGroupProperties.prototype, "optionStyles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Radio options orientation (horizontal|vertical). Default - horizontal',
            example: 'verical',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
    ], RadioGroupProperties.prototype, "orientation", void 0);
    return RadioGroupProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["DataModelProperties"]));
if (false) {}
/** @type {?} */
var example$8 = {
    title: 'Radio group example',
    uiModel: {
        type: 'material:radio-group',
        containerProperties: {
            padding: '5px 0',
            margin: '10px 0',
        },
        itemProperties: {
            label: 'Select color',
            dataModelPath: '$.color',
            orientation: 'vertical',
            options: [{ label: 'White', value: 'white' }, { label: 'Black', value: 'black' }],
            optionStyles: {
                padding: '10px'
            }
        }
    },
    dataModel: {}
};
/**
 * @record
 */
function RadioGroupUIComponentConstrutor() { }
/**
 * @record
 */
function RadioGroupPropertiesConstrutor() { }
/** @type {?} */
var radioGroupDescriptor = {
    name: 'radio-group',
    label: 'Single choice boxes',
    packageName: packageName,
    category: "Basic" /* Basic */,
    description: 'Radio group component',
    itemProperties: RadioGroupProperties,
    component: RadioGroupUIComponent,
    example: example$8
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs-ui/tabs-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TabsUIComponent, _super);
    function TabsUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-tabs-ui',
                    template: "\n    <mat-tab-group >\n      <mat-tab *ngFor=\"let item of uiModel.children; let i = index\" [label]=\"item.containerProperties.label || 'Tab ' + (i + 1)\">\n        <dc-ui-selector\n          (changedDataModel)=\"changedDataModel.emit(dataModel)\"\n          [uiModel]='item'\n          [dataModel]='dataModel'\n          [interpreter]='interpreter'\n          [scripts]='scripts'></dc-ui-selector>\n      </mat-tab>\n    </mat-tab-group>\n  "
                }] }
    ];
    return TabsUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var TabsProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(TabsProperties, _super);
    function TabsProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TabsProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["ContainerProperties"]));
/** @type {?} */
var example$9 = {
    title: 'Tabs group example',
    uiModel: {
        type: 'material:tabs-group',
        containerProperties: {},
        itemProperties: {},
        children: [{
                type: 'material:text-input',
                containerProperties: {
                    width: '100%',
                    label: 'Input tab',
                },
                itemProperties: {
                    isNumeric: false,
                    isDate: false,
                    format: '',
                    placeholder: 'Inout text component',
                    dataModelPath: '$.tabOne/inputValue'
                }
            }, {
                type: 'material:text',
                containerProperties: {
                    label: 'Text tab',
                },
                itemProperties: {
                    text: 'Text information',
                }
            }, {
                type: 'material:select',
                containerProperties: {
                    label: 'Country select',
                },
                itemProperties: {
                    options: [
                        { label: 'United Kingdom', value: 'uk' },
                        { label: 'Ukraine', value: 'ua' }
                    ],
                    placeholder: 'Country',
                    dataModelPath: '$.country'
                }
            }]
    },
    dataModel: {}
};
/**
 * @record
 */
function TabsUIComponentConstrutor() { }
/**
 * @record
 */
function TabsPropertiesConstrutor() { }
/** @type {?} */
var tabsDescriptor = {
    name: 'tabs-group',
    label: 'Tabs container (Material)',
    packageName: packageName,
    category: "Containers" /* Containers */,
    description: 'Tabs group component',
    itemProperties: TabsProperties,
    component: TabsUIComponent,
    example: example$9
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datable-ui/datable-ui.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatableUIComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(DatableUIComponent, _super);
    function DatableUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DatableUIComponent.prototype, "displayedColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this.uiModel.itemProperties.displayedProperties.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var dataProperty = _a.dataProperty;
                return dataProperty;
            }));
        },
        enumerable: true,
        configurable: true
    });
    DatableUIComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dc-datable-ui',
                    template: "\n    <mat-table [dataSource]=\"componentDataModel\" [ngStyle]=\"itemStyles\">\n      <!-- Column -->\n      <ng-container *ngFor=\"let item of uiModel.itemProperties.displayedProperties\" [matColumnDef]=\"item.dataProperty\">\n        <mat-header-cell *matHeaderCellDef> {{item.title}} </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element[item.dataProperty]}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  "
                }] }
    ];
    return DatableUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["BaseUIComponent"]));
var DatableProperties = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(DatableProperties, _super);
    function DatableProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["propDescription"])({
            description: 'Displayed properties',
            example: "[{title: 'No.', dataProperty: 'position'}, {title: 'Name', dataProperty: 'name'}]",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Array)
    ], DatableProperties.prototype, "displayedProperties", void 0);
    return DatableProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["DataModelProperties"]));
if (false) {}
/**
 * @record
 */
function DisplayedProperty() { }
if (false) {}
/** @type {?} */
var example$a = {
    title: 'Datable example',
    uiModel: {
        type: 'material:datable',
        containerProperties: {},
        itemProperties: {
            displayedProperties: [
                { title: 'No.', dataProperty: 'position' },
                { title: 'Name', dataProperty: 'name' },
                { title: 'Weight', dataProperty: 'weight' },
                { title: 'Symbol', dataProperty: 'symbol' },
            ],
            dataModelPath: '$.tableData',
            width: '90%',
            margin: '15px auto',
            padding: '20px 5px',
        }
    },
    dataModel: {
        tableData: [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        ]
    }
};
/**
 * @record
 */
function DatableUIComponentConstrutor() { }
/**
 * @record
 */
function DatablePropertiesConstrutor() { }
/** @type {?} */
var datableDescriptor = {
    name: 'datable',
    label: 'Material Table',
    packageName: packageName,
    category: "Data" /* Data */,
    description: 'Datable component',
    itemProperties: DatableProperties,
    component: DatableUIComponent,
    example: example$a
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS_LIST = [
    selectDescriptor,
    inputDescriptor,
    buttonDescriptor,
    cardDescriptor,
    checkboxDescriptor,
    flexContainerDescriptor,
    textDescriptor,
    textareaDescriptor,
    radioGroupDescriptor,
    tabsDescriptor,
    datableDescriptor
];
// Register components.
/**
 * @return {?}
 */
function registerComponents() {
    COMPONENTS_LIST.forEach((/**
     * @param {?} component
     * @return {?}
     */
    function (component) { return _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["CoreService"].registerComponent(component); }));
}
/**
 * @return {?}
 */
function getCategories() {
    /** @type {?} */
    var categories = COMPONENTS_LIST.reduce((/**
     * @param {?} map
     * @param {?} desc
     * @return {?}
     */
    function (map, desc) {
        map[desc.category] = map[desc.category] || [];
        map[desc.category].push(desc);
        return map;
    }), {});
    return Object.entries(categories).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__read"])(_a, 2), key = _b[0], val = _b[1];
        return {
            name: key,
            components: val,
            packageName: packageName
        };
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/material.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
        registerComponents();
    }
    MaterialModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ButtonUIComponent,
                        FlexContainerUIComponent,
                        CardUIComponent,
                        CheckboxUIComponent,
                        InputUIComponent,
                        SelectUIComponent,
                        TextUIComponent,
                        TextareaUIComponent,
                        RadioGroupUIComponent,
                        TabsUIComponent,
                        DatableUIComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
                    ],
                    exports: [
                        ButtonUIComponent,
                        CardUIComponent,
                        CheckboxUIComponent,
                        FlexContainerUIComponent,
                        InputUIComponent,
                        SelectUIComponent,
                        TextareaUIComponent,
                        TextUIComponent
                    ],
                    entryComponents: [
                        InputUIComponent,
                        TextUIComponent,
                        ButtonUIComponent,
                        FlexContainerUIComponent,
                        CheckboxUIComponent,
                        SelectUIComponent,
                        TextareaUIComponent,
                        CardUIComponent,
                        RadioGroupUIComponent,
                        TabsUIComponent,
                        DatableUIComponent
                    ],
                },] }
    ];
    /** @nocollapse */
    MaterialModule.ctorParameters = function () { return []; };
    return MaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-dynamic-components-material.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-dynamic-components-material.js.map


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/security/components/login-form/login-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/security/components/login-form/login-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group\">\n  <div class=\"card p-4\">\n    <div class=\"card-body\">\n      <form (ngSubmit)=\"onSubmit()\">\n        <h1>Login</h1>\n        <p class=\"text-muted\">Sign In to your account</p>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"credentials.email\" name=\"email\">\n        </div>\n        <div class=\"input-group mb-4\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n          </div>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" name=\"password\" required>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\n          </div>\n          <div class=\"col-6 text-right\">\n            <button type=\"button\" class=\"btn btn-link px-0\" (click)=\"action.emit(DialogState.RESET_REQUEST)\">Forgot password?</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n    <div class=\"card-body text-center\">\n      <div>\n        <h2>Sign up</h2>\n        <p>Welcome to Worksheet System's REST Client. Your free account will allow you to unlock new features and enable you to explore your REST Apis like never before.</p>\n        <button type=\"button\" class=\"btn btn-primary active mt-3\" (click)=\"action.emit(DialogState.REGISTRATION)\">Register Now!</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/security/components/login-page/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/security/components/login-page/login.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <app-login-form></app-login-form>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/security/components/register-form/register-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/security/components/register-form/register-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-0\">\n  <div class=\"card-body mx-4 mt-4 mb-0\">\n    <form #regForm=\"ngForm\">\n      <h1>Register</h1>\n      <p class=\"text-muted d-inline-block mr-2\">Create your account.</p>\n      <p class=\"text-muted d-inline-block\">If already have account <a class=\"cursor-pointer\" tabindex=\"1\" (click)=\"login.emit()\">Login</a>.</p>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n        </div>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.userName\" #userName=\"ngModel\" name=\"userName\" placeholder=\"Username\" autocomplete=\"username\" required>\n        <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n          <div *ngIf=\"userName.errors.required\">Username is required.</div>\n        </div>\n      </div>\n      <div class=\"row my-1 mx-0 mb-3\">\n        <div class=\"pr-2 pl-0 flex-fill\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"form.firstName\" name=\"firstName\">\n        </div>\n        <div class=\"px-0 flex-fill\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" name=\"lastName\"\n            [(ngModel)]=\"form.lastName\">\n        </div>\n    </div>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">@</span>\n        </div>\n        <input type=\"email\" email class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"form.email\" placeholder=\"Email\" autocomplete=\"email\" required>\n        <div *ngIf=\"email.invalid && email.touched\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n          <div *ngIf=\"email.errors.required\">Email is required.</div>\n          <div *ngIf=\"email.errors.email\">Email is not valid.</div>\n        </div>\n      </div>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n        </div>\n        <input type=\"password\" minlength=\"6\" #password=\"ngModel\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" placeholder=\"Password\" autocomplete=\"new-password\" required>\n        <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n          <div *ngIf=\"password.errors.required\">Password is required.</div>\n          <div *ngIf=\"password.errors.minlength\">Password should be not less than 6 characters.</div>\n        </div>\n      </div>\n      <div class=\"input-group mb-4\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n        </div>\n        <input type=\"password\" #repeatPassword=\"ngModel\" class=\"form-control\" name=\"repeatPassword\" [(ngModel)]=\"form.repeatPassword\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\n        <div *ngIf=\"repeatPassword.touched && repeatPassword.value !== password.value\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n          <div>Repeat password doesn't match.</div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"card-footer p-4\">\n    <div class=\"row m-0 px-4\">\n      <button type=\"button\" (click)=\"onSubmit()\" [disabled]=\"!regForm.valid || repeatPassword.value !== password.value\" class=\"btn btn-block btn-success\">Create Account</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/security/components/reset-password-page/reset-password-page.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/security/components/reset-password-page/reset-password-page.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card mb-0\">\n            <div class=\"card-body mx-4 mt-4 mb-0\">\n              <form #resetForm=\"ngForm\">\n                <h1>Reset password</h1>\n                <div class=\"form-group row mt-4 mb-0\">\n                    <label for=\"request-name\" class=\"col-form-label px-0 col-sm-3\">UserName or e-mail</label>\n                    <div class=\"col-sm-9 px-0\">\n                      <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                        </div>\n                        <input type=\"text\" #loginOrEMail=\"ngModel\" class=\"form-control\" name=\"loginOrEMail\"\n                          [(ngModel)]=\"form.loginOrEMail\" placeholder=\"Enter UserName or e-mail\" required>\n                        <div *ngIf=\"loginOrEMail.invalid && loginOrEMail.touched\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n                          <div *ngIf=\"loginOrEMail.errors.required\">Field is required.</div>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"form-group row my-0\">\n                  <label for=\"request-name\" class=\"col-form-label px-0 col-sm-3\">Enter new password</label>\n                  <div class=\"col-sm-9 px-0\">\n                    <div class=\"input-group mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                      </div>\n                      <input type=\"password\" minlength=\"6\" #password=\"ngModel\" class=\"form-control\" name=\"password\"\n                        [(ngModel)]=\"form.password\" placeholder=\"Password\" autocomplete=\"new-password\" required>\n                      <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n                        <div *ngIf=\"password.errors.required\">Password is required.</div>\n                        <div *ngIf=\"password.errors.minlength\">Password should be not less than 6 characters.</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row my-0\">\n                  <label for=\"request-name\" class=\"col-form-label px-0 col-sm-3\">Repeat password</label>\n                  <div class=\"col-sm-9 px-0\">\n                    <div class=\"input-group mb-4\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                      </div>\n                      <input type=\"password\" #repeatPassword=\"ngModel\" class=\"form-control\" name=\"repeatPassword\"\n                        [(ngModel)]=\"form.repeatPassword\" placeholder=\"Repeat password\" autocomplete=\"new-password\"\n                        required>\n                      <div *ngIf=\"repeatPassword.touched && repeatPassword.value !== password.value\"\n                        class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n                        <div>Repeat password doesn't match.</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"card-footer p-4\">\n              <div class=\"row m-0 px-4\">\n                <button type=\"button\" (click)=\"onSubmit()\"\n                  [disabled]=\"!resetForm.valid || repeatPassword.value !== password.value\"\n                  class=\"btn btn-primary ml-auto\">Reset</button>\n                <a [routerLink]=\"['/']\" class=\"btn ml-2\" routerLinkActive=\"router-link-active\">Cancel</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/confirmation/confirmation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/confirmation/confirmation.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Confirmation</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"confirmHandle(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column h-100\">\n  {{config.message}}\n</div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" (click)=\"confirmHandle(true)\" class=\"btn btn-primary ml-auto mr-2\">Yes</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"confirmHandle(false)\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/content-explorer/content-explorer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/content-explorer/content-explorer.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split unit=\"pixel\" #split=\"asSplit\" class=\"row h-100 preview edit-mode m-0 w-100\" direction=\"horizontal\"\n  [useTransition]=\"true\">\n  <as-split-area class=\"d-flex flex-column\">\n    <as-split [useTransition]=\"true\" (onDragEnd)=\"resize()\" (transitionEnd)=\"resize()\">\n        <as-split-area #area0=\"asSplitArea\" class=\"d-flex mb-0 position-relative h-100\" [size]=\"jsonContentSize\">\n            <div class=\"tabs-actions position-absolute\" *ngIf=\"formatter\">\n              <button type=\"button\" class=\"btn btn-light btn-sm px-1 py-0\" (click)=\"formatJSON()\"\n                    [ngClass]=\"{active: formatted}\" title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n                    <i class=\"fa fa-indent\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\"\n                    [ngClass]=\"{active: !formatted}\" title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n                    <i class=\"fa fa-align-justify\"></i>\n              </button>\n            </div>\n            <div #contentJSON class=\"h-100 w-100 ace-editor\"></div>\n          </as-split-area>\n          <as-split-area [size]=\"100 - jsonContentSize\" #area1=\"asSplitArea\" class=\"d-flex overflow-auto flex-column explorer-section\">\n            <ngx-dynamic-component class=\"flex-fill px-2 h-100\" [uiModel]=\"explorerUIModel\" [dataModel]=\"dataModel\"\n              *ngIf=\"showGrid\" (changedDataModel)=\"onDataModelChanged($event)\"></ngx-dynamic-component>\n          </as-split-area>\n    </as-split>\n    <div class=\"btn-group d-block mode\">\n      <label class=\"btn btn-light btn-sm cursor-pointer mb-0\" ngDefaultControl [(ngModel)]=\"modeState.json\" [class.active]=\"modeState.json\"\n        btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-json\" (click)=\"onModeState('json')\" title=\"JSON Configuration\">\n        <i class=\"fa fa-code fa-lg\"></i> JSON\n      </label>\n      <label class=\"btn btn-light btn-sm cursor-pointer mb-0\" ngDefaultControl [(ngModel)]=\"modeState.designer\" [class.active]=\"modeState.designer\"\n        btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-designer\" (click)=\"onModeState('designer')\" title=\"Designer\">\n        <i class=\"fa fa-table fa-lg\"></i> Explorer\n      </label>\n    </div>\n  </as-split-area>\n</as-split>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/filter/filter.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/filter/filter.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex border border-secondary rounded\" *ngIf=\"!icon; else iconTemplate\">\n  <div class=\"d-flex\" (onHidden)=\"onHidden()\" (onShown)=\"onShown()\" containerClass=\"filter-component\" [popover]=\"popTemplate\" placement=\"bottom\"\n    [outsideClick]=\"true\" #pop=\"bs-popover\">\n    <label class=\"col-form-label px-1 cursor-pointer\" [title]=\"title\">{{label}}\n      <i class=\"fa fa-angle-down\"></i>\n    </label>\n  </div>\n</div>\n<ng-template #iconTemplate>\n  <i class=\"fa fa-filter cursor-pointer\" [ngClass]=\"{selected: selected && selected.length}\" (onHidden)=\"onHidden()\" containerClass=\"filter-component\"\n  [popover]=\"popTemplate\" placement=\"bottom\" (onShown)=\"onShown()\" [outsideClick]=\"true\" #pop=\"bs-popover\" container=\"body\"></i>\n</ng-template>\n\n<ng-template #popTemplate>\n  <div class=\"container p-0 h-100 d-flex flex-column\">\n    <div class=\"d-flex justify-content-center position-absolute align-items-center w-100 h-100 spinner bg-white flex-column\"\n      *ngIf=\"loading\">\n      <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <div class=\"input-group-prepend\">\n        <div class=\"input-group-text\"><i class=\"fa fa-search\"></i></div>\n      </div>\n      <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Search\"\n        (input)=\"onSearch($event.target.value)\">\n    </div>\n    <wj-flex-grid #grid class=\"h-100 flex-fill\" [allowDelete]=\"false\" [allowAddNew]=\"false\" headersVisibility=\"Column\"\n      [selectionMode]=\"3\" (sortingColumn)=\"sortingHandler(grid, $event)\" [itemsSource]=\"collectionView\" (initialized)=\"onGridInit(grid)\">\n      <wj-flex-grid-column header=\"?\" [isReadOnly]=\"false\" binding=\"selected\" [width]=\"50\" dataType=\"Boolean\">\n      </wj-flex-grid-column>\n      <wj-flex-grid-column header=\"Value\" [isReadOnly]=\"true\" binding=\"value\" width=\"*\" [dataType]=\"field.dataType\" [format]=\"field.displayFormat\">\n      </wj-flex-grid-column>\n      <wj-flex-grid-column header=\"Count\" [isReadOnly]=\"true\" binding=\"count\" [width]=\"80\" dataType=\"Number\">\n      </wj-flex-grid-column>\n    </wj-flex-grid>\n    <div class=\"row flex-column m-0 my-2\">\n      <div class=\"d-flex justify-content-between mb-2\">\n        <span>Used Filter</span><span>Rows: {{collectionView.items.length}}</span>\n      </div>\n      <input type=\"text\" class=\"form-control form-control-sm\" disabled=\"disabled\" [value]=\"usedFilters\">\n    </div>\n    <div class=\"d-flex\">\n      <button type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"onClear()\">Clear</button>\n      <button type=\"button\" class=\"btn btn-primary btn-sm ml-auto mr-2\" (click)=\"onApply()\">Apply</button>\n      <button type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"pop.hide()\">Close</button>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/filters/filters.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/filters/filters.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0\" *ngIf=\"fields && fields.length\">\n  <div class=\"btn-group mr-2 mb-2 border\" dropdown>\n    <button id=\"button-basic\" dropdownToggle type=\"button\"[disabled]=\"!(fields$ | async).length\" class=\"btn btn-primary dropdown-toggle align-self-baseline\"\n      aria-controls=\"dropdown-basic\" triggers=\"mouseenter:mouseleave\" containerClass=\"applied-popover\">\n      <i class=\"fa fa-filter\"></i>\n    </button>\n    <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu overflow-auto\" role=\"menu\" aria-labelledby=\"button-basic\">\n      <li role=\"menuitem\"><a class=\"dropdown-item cursor-pointer\"\n        (click)=\"manageFilter()\"><i class=\"fa fa-cogs\"></i> Manage Filter</a></li>\n      <li class=\"divider dropdown-divider\"></li>\n      <li role=\"menuitem\" *ngFor=\"let field of fields$ | async\"><a class=\"dropdown-item cursor-pointer\"\n        (click)=\"addFilter(field)\">{{field.bindingName}}</a></li>\n    </ul>\n  </div>\n  <div *ngFor=\"let field of columnInfo$ | async; index as i\" class=\"pr-2 mb-2\">\n    <app-filter [field]=\"field\" [currentFilters]=\"currentFilters\" [connection]=\"connection\" [dataObject]=\"dataObject\" [defaultFilters]=\"defaultFilters\"\n      (apply)=\"onFilterChange(i, $event, field)\" (delete)=\"removeFilter(i)\"></app-filter>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"navbar-toggler\" (click)=\"onToggleClick()\"  type=\"button\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>\n<a class=\"navbar-brand\">\n  <img class=\"navbar-brand-full\" [src]=\"icon\" width=\"53\">\n  <img class=\"navbar-brand-minimized\" [src]=\"smIcon\" width=\"30\" height=\"30\">\n</a>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/json-preview/json-preview.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/json-preview/json-preview.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100\" #json></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/layout/layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/layout/layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"app-header navbar\" (toggleSidebar)=\"onToggleSidebar()\" [icon]=\"config.icon\" [smIcon]=\"config.smIcon\">\n  <ng-content select=\"[title]\"></ng-content>\n  <app-nav class=\"d-flex flex-fill h-100\" [logoutRedirect]=\"config.logoutRedirect\">\n    <ng-content select=\"[header]\"></ng-content>\n    <ng-content settings select=\"[settings]\"></ng-content>\n  </app-nav>\n</app-header>\n\n<as-split [unit]=\"unit\" #split=\"asSplit\" [direction]=\"'horizontal'\" class=\"app-body pl-2\" [useTransition]=\"true\" [ngClass]=\"{collapsed: collapsed}\">\n  <as-split-area [size]=\"sidebarSize\" [maxSize]=\"600\" #area1=\"asSplitArea\" class=\"d-flex h-auto\">\n    <ng-content select=\"[sidebar]\" class=\"h-100 w-100 py-2\"></ng-content>\n  </as-split-area>\n  <as-split-area #area2=\"asSplitArea\" class=\"d-flex h-auto content\" [size]=\"contentSize\">\n    <main class=\"main\">\n      <div class=\"container-fluid h-100 py-2 pr-2 pl-0 position-relative\">\n        <ng-content select=\"[content]\"></ng-content>\n      </div>\n    </main>\n  </as-split-area>\n</as-split>\n\n<footer class=\"d-flex px-2\">\n  <div class=\"ml-auto\">Copyright &copy; FalconSoft Ltd</div><div class=\"ml-auto\">v{{version}}</div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/list-view/list-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/list-view/list-view.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"d-flex flex-fill flex-column  p-0 m-0\" *ngIf=\"!group\">\n  <li class=\"d-flex align-items-baseline cursor-pointer\" *ngFor=\"let item of list\" (click)=\"onSelect(item)\"\n    [ngClass]=\"{active: isActive(item)}\">\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n  </li>\n</ul>\n\n<ul class=\"d-flex flex-column p-0 m-0 no-group-list\" *ngIf=\"noGroupList && noGroupList.length\">\n  <li class=\"d-flex align-items-baseline cursor-pointer\" *ngFor=\"let item of noGroupList\" (click)=\"onSelect(item)\"\n    [ngClass]=\"{active: isActive(item)}\">\n    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n  </li>\n</ul>\n\n<accordion class=\"d-flex flex-fill flex-column p-0 m-0 w-100\" *ngIf=\"group\">\n  <accordion-group *ngFor=\"let g of groups\" isOpen=\"true\">\n    <div class=\"header d-flex align-items-center\" accordion-heading>\n      <i class=\"fa text-center fa-chevron-down mr-1\"></i>\n      <i class=\"fa text-center fa-chevron-right mr-1\"></i>\n      <ng-container *ngTemplateOutlet=\"iconTemplate; context: {$implicit: g}\"></ng-container>\n      {{g.value}}\n      <input class=\"form-control form-control-sm ml-auto w-auto search-input\" *ngIf=\"searchState[g.value] || activeSearch === g.value\" (blur)=\"activeSearch = null\"\n        type=\"text\" placeholder=\"Search\" (input)=\"onSearch(g.value, $event)\" (click)=\"$event.stopPropagation()\">\n      <i *ngIf=\"!(searchState[g.value] || activeSearch === g.value)\" class=\"fa fa-search ml-auto\" (click)=\"onSearchState(g.value, $event)\"></i>\n    </div>\n    <ul class=\"d-flex flex-fill flex-column p-0 m-0\">\n      <li class=\"d-flex align-items-baseline cursor-pointer\" *ngFor=\"let item of g.filteredList\" (click)=\"onSelect(item)\"\n        [ngClass]=\"{active: isActive(item)}\">\n        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n      </li>\n    </ul>\n  </accordion-group>\n</accordion>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/manage-filters/manage-filters.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/manage-filters/manage-filters.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Manage Filters</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body px-4 d-flex flex-column h-100\">\n    <ul class=\"container\" dragula=\"filters\" [(dragulaModel)]=\"filters\">\n      <li *ngFor=\"let field of filters; index as i\" class=\"row py-1 my-1 pl-2 border rounded align-items-baseline\">\n        {{field.bindingName}} <i class=\"fa fa-arrows ml-auto handle\"></i> <i class=\"fa fa-remove mx-2 cursor-pointer\" (click)=\"removeFilter(i)\"></i>\n      </li>\n    </ul>\n    <div class=\"btn-group mr-2 mb-2 align-self-baseline\" dropdown>\n        <button id=\"button-basic\" dropdownToggle type=\"button\" [disabled]=\"!fields.length\" class=\"btn btn-primary dropdown-toggle align-self-baseline btn-sm\"\n          aria-controls=\"dropdown-basic\">Add filter\n        </button>\n        <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu overflow-auto\" role=\"menu\" aria-labelledby=\"button-basic\">\n          <li role=\"menuitem\" *ngFor=\"let field of fields\"><a class=\"dropdown-item cursor-pointer\"\n            (click)=\"addFilter(field)\">{{field.bindingName}}</a></li>\n        </ul>\n      </div>\n  </div>\n  <div class=\"modal-footer flex-column\">\n    <div class=\"row w-100 mx-0 px-0\">\n      <button type=\"button\" (click)=\"onApply()\" class=\"btn btn-primary ml-auto mr-2\">Apply</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-config/page-config.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-config/page-config.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{config.pageName}} configuration</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column\">\n  <alert type=\"danger\" *ngIf=\"error\">\n    <strong>Error:</strong> {{error}}\n  </alert>\n  <div class=\"position-relative h-100\">\n    <div class=\"tabs-actions position-absolute\">\n      <button type=\"button\" class=\"btn btn-light btn-sm px-1 py-0\" (click)=\"formatJSON()\" [ngClass]=\"{active: formatted}\"\n        title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n        <i class=\"fa fa-indent\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\" [ngClass]=\"{active: !formatted}\"\n        title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n        <i class=\"fa fa-align-justify\"></i>\n      </button>\n    </div>\n    <tabset class=\"tabset-fx\">\n      <tab heading=\"Page Info\">\n        <form #pageInfoForm=\"ngForm\">\n          <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n            <label for=\"page-title\" class=\"col-form-label px-0\">Page title</label>\n            <div class=\"flex-fill ml-2\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pageInfo.title\" placeholder=\"Enter page title\"\n                name=\"title\" #title=\"ngModel\" required id=\"page-title\">\n              <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n                <div *ngIf=\"title.errors.required\">Page title is required.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n            <label for=\"page-name\" class=\"col-form-label px-0\">Page name</label>\n            <div class=\"flex-fill ml-2\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pageInfo.pageName\" placeholder=\"Enter page name\"\n                name=\"name\" #pageName=\"ngModel\" required id=\"page-name\">\n              <div *ngIf=\"pageName.invalid && (pageName.dirty || pageName.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n                <div *ngIf=\"pageName.errors.required\">Page name is required.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mx-0 mb-1 flex-nowrap\">\n            <label for=\"page-description\" class=\"col-form-label px-0\">Description</label>\n            <div class=\"flex-fill ml-2\">\n              <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"pageInfo.description\"\n                placeholder=\"Enter page description\" id=\"page-description\" name=\"description\"></textarea>\n            </div>\n          </div>\n        </form>\n      </tab>\n      <tab heading=\"UI Model\">\n        <div #uiModelEl class=\"h-100 ace-editor\"></div>\n      </tab>\n      <tab heading=\"Scripts\">\n        <div #scriptsEl class=\"h-100 ace-editor\"></div>\n      </tab>\n    </tabset>\n  </div>\n  </div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" (click)=\"savePage()\" [disabled]=\"!pageInfoForm.valid\"\n      class=\"btn btn-primary ml-auto mr-2\">Save</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-info/page-info.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-info/page-info.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{config.pageName}} configuration</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column\">\n  <div class=\"position-relative h-100\">\n    <form #pageInfoForm=\"ngForm\">\n      <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n        <label for=\"page-title\" class=\"col-form-label px-0\">Page title</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pageInfo.title\" placeholder=\"Enter page title\"\n            name=\"title\" #title=\"ngModel\" required id=\"page-title\">\n          <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n            <div *ngIf=\"title.errors.required\">Page title is required.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n        <label for=\"page-name\" class=\"col-form-label px-0\">Page name</label>\n        <div class=\"flex-fill ml-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pageInfo.pageName\" placeholder=\"Enter page name\"\n            name=\"name\" #pageName=\"ngModel\" required id=\"page-name\">\n          <div *ngIf=\"pageName.invalid && (pageName.dirty || pageName.touched)\"\n            class=\"alert alert-danger py-1 px-2 m-0\">\n            <div *ngIf=\"pageName.errors.required\">Page name is required.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row mx-0 mb-1 flex-nowrap\">\n        <label for=\"page-description\" class=\"col-form-label px-0\">Description</label>\n        <div class=\"flex-fill ml-2\">\n          <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"pageInfo.description\"\n            placeholder=\"Enter page description\" id=\"page-description\" name=\"description\"></textarea>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" (click)=\"savePage()\" [disabled]=\"!pageInfoForm.valid\"\n      class=\"btn btn-primary ml-auto mr-2\">Save</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/split-content/split-content.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/split-content/split-content.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card overflow-hidden mb-0 w-100 h-100\">\n  <div class=\"card-header d-flex pl-0 py-2 pr-2\" #header>\n    <div class=\"btn-group d-block ml-3\">\n      <label class=\"btn btn-secondary cursor-pointer mb-0\" ngDefaultControl [(ngModel)]=\"modeState.left\"\n        [class.active]=\"modeState.left\" btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-left\"\n        (click)=\"onModeState('left')\">\n        <ng-content select=\"[left-label]\"></ng-content>\n      </label>\n      <label class=\"btn btn-secondary cursor-pointer mb-0\" ngDefaultControl [(ngModel)]=\"modeState.right\"\n        [class.active]=\"modeState.right\" btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-right\"\n        (click)=\"onModeState('right')\">\n        <ng-content select=\"[right-label]\"></ng-content>\n      </label>\n    </div>\n    <ng-content select=\"[actions]\"></ng-content>\n  </div>\n  <div class=\"card-body d-flex p-0 flex-column h-100\">\n    <as-split unit=\"pixel\" #split=\"asSplit\" class=\"row h-100 preview edit-mode m-0 w-100\" direction=\"horizontal\"\n      [useTransition]=\"true\">\n      <as-split-area class=\"d-flex flex-column\">\n        <as-split [useTransition]=\"true\" (onDragEnd)=\"resize()\" (transitionEnd)=\"resize()\">\n          <as-split-area #area0=\"asSplitArea\" class=\"d-flex mb-0 position-relative\" [size]=\"leftContentSize\">\n            <ng-content select=\"[left]\"></ng-content>\n          </as-split-area>\n          <as-split-area [size]=\"100 - leftContentSize\" #area1=\"asSplitArea\"\n            class=\"d-flex overflow-auto flex-column explorer-section\">\n            <ng-content select=\"[right]\"></ng-content>\n          </as-split-area>\n        </as-split>\n      </as-split-area>\n    </as-split>\n  </div>\n</div>\n"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, main, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"worksheets2-app","version":"0.1.27","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","build:prod":"ng build --prod","build:gh":"ng build --base-href='/ngx-dynamic-components/'","build:electron":"npm run electron:tsc && ng build --prod --base-href ./","deploy:gh":"npm run build:gh && npx ngh --dir=dist/worksheets2-app/ --repo=https://github.com/FalconSoft/ngx-dynamic-components.git","build:extension":"ng build --configuration=extension --prod","electron:tsc":"tsc -p electron/tsconfig.json","electron:start":"npm run build:electron && electron .","electron:run":"npm run electron:tsc && electron .","electron:linux":"npm run build:electron && electron-builder build --config=electron/electron-builder.json --linux","electron:windows":"npm run build:electron && electron-builder build --config=electron/electron-builder.json --windows","electron:mac":"npm run build:electron && electron-builder build --config=electron/electron-builder.json --mac"},"main":"dist/electron/main.js","private":true,"dependencies":{"@angular/animations":"~8.1.2","@angular/cdk":"~8.1.1","@angular/common":"~8.1.2","@angular/compiler":"~8.1.2","@angular/core":"~8.1.2","@angular/flex-layout":"~8.0.0-beta.26","@angular/forms":"~8.1.2","@angular/material":"~8.1.1","@angular/platform-browser":"~8.1.2","@angular/platform-browser-dynamic":"~8.1.2","@angular/router":"~8.1.2","@ng-select/ng-select":"^3.0.7","@ngrx/effects":"^8.3.0","@ngrx/router-store":"^8.3.0","@ngrx/store":"^8.3.0","@ngrx/store-devtools":"^8.3.0","@ngx-dynamic-components/bootstrap":">=0.0.32","@ngx-dynamic-components/core":">=0.0.32","@ngx-dynamic-components/material":">=0.0.32","@types/json5":"0.0.30","@types/papaparse":"^5.0.1","ace-builds":"^1.4.7","angular-split":"^3.0.2","bootstrap-scss":"^4.3.1","core-js":"^3.1.4","file-saver":"^2.0.2","flag-icon-css":"^3.3.0","font-awesome":"^4.7.0","hammerjs":"^2.0.8","json5":"^2.1.1","moment":"^2.24.0","ng2-dragula":"^2.1.1","ngx-bootstrap":"^5.1.0","ngx-device-detector":"^1.3.6","ngx-perfect-scrollbar":"^8.0.0","p-utils":"file:../p-utils/p-utils-0.0.1.tgz","papaparse":"4.3.7","parse-curl":"^0.2.6","pscript-interpreter":"file:../pscript-interpreter/pscript-interpreter-0.0.1.tgz","rxjs":"~6.5.2","simple-line-icons":"^2.4.1","stream":"0.0.2","tslib":"^1.9.0","wijmo":"5.20191.615","zone.js":"~0.9.1"},"devDependencies":{"@angular-devkit/build-angular":"~0.801.2","@angular/cli":"~8.1.2","@angular/compiler-cli":"~8.1.2","@angular/language-service":"~8.1.2","@types/node":"~8.9.4","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","codelyzer":"^5.0.1","electron":"^5.0.3","electron-builder":"^20.43.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"~3.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"~3.4.5"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var src_app_security_components_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security/components/reset-password-page/reset-password-page.component */ "./src/app/security/components/reset-password-page/reset-password-page.component.ts");




// Import Containers


var routes = [
    { path: '', redirectTo: 'rest-client', pathMatch: 'full' },
    {
        path: 'login',
        component: src_app_security__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'rest-client',
        loadChildren: function () { return Promise.all(/*! import() | rest-client-rest-client-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("default~database-manager-database-manager-module~rest-client-rest-client-module"), __webpack_require__.e("rest-client-rest-client-module")]).then(__webpack_require__.bind(null, /*! ./rest-client/rest-client.module */ "./src/app/rest-client/rest-client.module.ts")).then(function (m) { return m.RestClientModule; }); },
        data: {
            title: 'Rest client'
        },
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() | forms-builder-forms-builder-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("forms-builder-forms-builder-module")]).then(__webpack_require__.bind(null, /*! ./forms-builder/forms-builder.module */ "./src/app/forms-builder/forms-builder.module.ts")).then(function (m) { return m.FormsBuilderModule; }); },
        data: {
            title: 'Forms builder'
        },
    },
    {
        path: 'reset/:id',
        component: src_app_security_components_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageComponent"]
    },
    {
        path: 'json-editor',
        loadChildren: function () { return Promise.all(/*! import() | json-editor-json-editor-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("json-editor-json-editor-module")]).then(__webpack_require__.bind(null, /*! ./json-editor/json-editor.module */ "./src/app/json-editor/json-editor.module.ts")).then(function (m) { return m.JsonEditorModule; }); },
        data: {
            title: 'Json editor'
        },
    },
    {
        path: 'app/:owner',
        loadChildren: function () { return Promise.all(/*! import() | custom-app-custom-app-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("custom-app-custom-app-module")]).then(__webpack_require__.bind(null, /*! ./custom-app/custom-app.module */ "./src/app/custom-app/custom-app.module.ts")).then(function (m) { return m.CustomAppModule; }); },
        canActivate: [src_app_security__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: {
            title: 'Applications'
        },
    },
    {
        path: 'database',
        loadChildren: function () { return Promise.all(/*! import() | database-manager-database-manager-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("default~database-manager-database-manager-module~rest-client-rest-client-module"), __webpack_require__.e("database-manager-database-manager-module")]).then(__webpack_require__.bind(null, /*! ./database-manager/database-manager.module */ "./src/app/database-manager/database-manager.module.ts")).then(function (m) { return m.DatabaseManagerModule; }); },
        canActivate: [src_app_security__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: {
            title: 'Database manager'
        },
    },
    { path: '**', redirectTo: 'rest-client', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useHash })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__);







// Import routing module

// apply Wijmo license key

// tslint:disable-next-line: max-line-length
Object(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__["setLicenseKey"])('falconsoft,691134373725158#B0VbsNmLkRHbtQnZvNnbvNGbhZGQht6chBHciojIh94QiwiI8UTM5IzNzczM4MTMxkjNiojIklkIs4nIxYHOxAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zdnxmeIpHTBlzVLhWOCN5YJNmbIdjcPhjRwIHcPdzc7E7c5F7M5xmSQVzY8QkRWJ7LNFDV7tyTLt4Qp9Gex8mZVRFbYFnYMxGZVJnWzsyQIVkcG9EeoJ7cVRkeaFlMntGWLpUOxEGVmR6TqJzbhdnZRpFcVJ6KvU4TENUQQRzMMxUO9lTbYFTeLZkaYBndvgFR6MmMv4GNUNzaLxEO8J5Q5J6KSFDdplkVtJne9czcwUVZohGRY5kYPNUOUdHONlXZmhXVMRlNxtmSrs6T4MVZvl6dKJFVxVTYDpWamR7a4V6RXFWR6YmUHZkdNNFMzlXbWZnTNZzcmJTcRJTZDZXauJlei56MFVkYHpET73WVy5mdDRUaXJ5U98kcyVmbvBFTOV5cvYzLCVUQLVFewFkWjl5MstkbOVmSqJTUpZTbjR6Y7ITb9JUWwM4MMJUY5smS7VzNWZkI0IyUiwiI9MURGZjMyQjI0ICSiwSO7IDOzIDN4cTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsISNzUjMzADIyETMxkTMwIjI0ICdyNkIsISbvNmLwBXY5t6byVGauAHch5iMzRXZlh6crJ7b7xCdl9mLzVGdpNnYldXZyVneh9CcwFWLyMHdlVGaztmcvdHLz5WZ4NXez9CdlVGaztmcvdnLuVncs2WauIWdoRXan9Cdm36cu36YsFmZsQmYrJWbw96bktGZo5majFmZjl6Zr3mYtRmZmZWahpmYs46bj9iY5hGdpdmL4Z6bz96bjxWYmxCdz3GasF6YvxmI0IyctRSIKI');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                src_app_security__WEBPACK_IMPORTED_MODULE_5__["SecurityModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/database-manager/models.ts":
/*!********************************************!*\
  !*** ./src/app/database-manager/models.ts ***!
  \********************************************/
/*! exports provided: LoadingStates, LoadingMessages, PreprocessorType, Preprocessors, ObjectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStates", function() { return LoadingStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMessages", function() { return LoadingMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreprocessorType", function() { return PreprocessorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preprocessors", function() { return Preprocessors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectType", function() { return ObjectType; });
var _a;
var LoadingStates;
(function (LoadingStates) {
    LoadingStates["DATA_SAVE"] = "data-save";
    LoadingStates["DATA_LOAD"] = "data-load";
    LoadingStates["STRUCTURE_LOAD"] = "structure-load";
})(LoadingStates || (LoadingStates = {}));
var LoadingMessages = (_a = {},
    _a[LoadingStates.DATA_LOAD] = 'Table data is loading',
    _a[LoadingStates.STRUCTURE_LOAD] = 'Table structure is loading',
    _a[LoadingStates.DATA_SAVE] = 'Table data is saving',
    _a);
var PreprocessorType;
(function (PreprocessorType) {
    PreprocessorType["Text"] = "text";
    PreprocessorType["ParseNumber"] = "parseNumber";
    PreprocessorType["ParseDate"] = "parseDate";
    PreprocessorType["ParseBoolean"] = "parseBoolean";
    PreprocessorType["Autoid"] = "autoid";
})(PreprocessorType || (PreprocessorType = {}));
var Preprocessors = [
    PreprocessorType.Text, PreprocessorType.ParseNumber,
    PreprocessorType.ParseDate, PreprocessorType.ParseBoolean, PreprocessorType.Autoid
];
var ObjectType;
(function (ObjectType) {
    ObjectType["Table"] = "Table";
    ObjectType["View"] = "View";
})(ObjectType || (ObjectType = {}));


/***/ }),

/***/ "./src/app/security/components/login-dialog/login-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/security/components/login-dialog/login-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/security/models.ts");




var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent() {
        this.state = _models__WEBPACK_IMPORTED_MODULE_3__["DialogState"].LOGIN;
        this.DialogState = _models__WEBPACK_IMPORTED_MODULE_3__["DialogState"];
    }
    LoginDialogComponent.prototype.openModal = function () {
        this.modal.show();
    };
    LoginDialogComponent.prototype.onLogin = function (evt) {
        if (evt) {
            this.modal.hide();
        }
    };
    LoginDialogComponent.prototype.onRegister = function () {
        this.state = _models__WEBPACK_IMPORTED_MODULE_3__["DialogState"].LOGIN;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], LoginDialogComponent.prototype, "modal", void 0);
    LoginDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-dialog',
            template: "\n  <div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content shadow\" [ngSwitch]=\"state\">\n        <app-login-form *ngSwitchCase=\"DialogState.LOGIN\"\n          [redirect]=\"false\" (login)=\"onLogin($event)\" (action)=\"state = $event\"></app-login-form>\n        <app-register-form (register)=\"onRegister()\" *ngSwitchCase=\"DialogState.REGISTRATION\"\n          (login)=\"state = DialogState.LOGIN\"></app-register-form>\n        <app-reset-password-request-form *ngSwitchCase=\"DialogState.RESET_REQUEST\"\n          (action)=\"state = $event\" (requested)=\"onLogin(true)\"></app-reset-password-request-form>\n      </div>\n    </div>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/security/components/login-form/login-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/security/components/login-form/login-form.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/security/models.ts");





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.credentials = {
            email: '',
            password: ''
        };
        this.DialogState = _models__WEBPACK_IMPORTED_MODULE_4__["DialogState"];
    }
    LoginFormComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, returnUrl, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.login(this.credentials).toPromise()];
                    case 1:
                        res = _a.sent();
                        returnUrl = this.route.snapshot.queryParams['returnUrl'];
                        if (returnUrl) {
                            this.router.navigateByUrl(returnUrl);
                        }
                        else if (this.redirect !== false && res) {
                            this.router.navigate([this.redirect ? this.redirect : res.user.userName]);
                        }
                        this.login.emit(true);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "redirect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "login", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "action", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/security/components/login-form/login-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/security/components/login-page/auth.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/security/components/login-page/auth.guard.ts ***!
  \**************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (!user) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Not authenticated');
            }
            return Boolean(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/security/components/login-page/login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/security/components/login-page/login.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/security/components/login-page/login.component.html")
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/security/components/register-form/register-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/security/components/register-form/register-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/registration.service */ "./src/app/security/services/registration.service.ts");



var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(registrationService) {
        this.registrationService = registrationService;
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.register = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = {
            userName: null,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            repeatPassword: null
        };
    }
    RegisterFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registrationService.register(this.form).subscribe(function (res) {
            _this.register.emit();
        });
    };
    RegisterFormComponent.ctorParameters = function () { return [
        { type: _services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterFormComponent.prototype, "login", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterFormComponent.prototype, "register", void 0);
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/security/components/register-form/register-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/security/components/reset-password-page/reset-password-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/security/components/reset-password-page/reset-password-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ResetPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageComponent", function() { return ResetPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/registration.service */ "./src/app/security/services/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ResetPasswordPageComponent = /** @class */ (function () {
    function ResetPasswordPageComponent(registrationService, route, router) {
        this.registrationService = registrationService;
        this.route = route;
        this.router = router;
        this.form = {
            password: null,
            repeatPassword: null,
            loginOrEMail: null
        };
    }
    ResetPasswordPageComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registrationService.resetPassword(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form, { RequestCode: this.route.snapshot.params.id })).subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    ResetPasswordPageComponent.ctorParameters = function () { return [
        { type: _services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ResetPasswordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password-page',
            template: __webpack_require__(/*! raw-loader!./reset-password-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/security/components/reset-password-page/reset-password-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordPageComponent);
    return ResetPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/security/components/reset-password-request-form/reset-password-request-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/security/components/reset-password-request-form/reset-password-request-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ResetPasswordRequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRequestFormComponent", function() { return ResetPasswordRequestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/registration.service */ "./src/app/security/services/registration.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/security/models.ts");




var ResetPasswordRequestFormComponent = /** @class */ (function () {
    function ResetPasswordRequestFormComponent(registrationService) {
        this.registrationService = registrationService;
        this.DialogState = _models__WEBPACK_IMPORTED_MODULE_3__["DialogState"];
        this.requested = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ResetPasswordRequestFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registrationService.resetRequest(this.userName).subscribe(function (res) {
            _this.requested.emit();
        });
    };
    ResetPasswordRequestFormComponent.ctorParameters = function () { return [
        { type: _services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResetPasswordRequestFormComponent.prototype, "requested", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResetPasswordRequestFormComponent.prototype, "action", void 0);
    ResetPasswordRequestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password-request-form',
            template: "\n  <div class=\"card mb-0\">\n    <div class=\"card-body mx-4 mt-4 mb-0\">\n      <form #resetForm=\"ngForm\">\n        <h1>Request password reset</h1>\n        <div class=\"form-group row my-4 mx-0\">\n          <label for=\"request-name\" class=\"col-form-label px-0 col-sm-3\">Enter UserName or e-mail</label>\n          <div class=\"flex-fill\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\"\n              #user=\"ngModel\" name=\"userName\" placeholder=\"Username\" autocomplete=\"username\" required>\n            <div *ngIf=\"user.invalid && (user.dirty || user.touched)\" class=\"alert alert-danger py-1 px-2 m-0 w-100\">\n              <div *ngIf=\"user.errors.required\">UserName or e-mail is required.</div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-footer p-4\">\n      <div class=\"row m-0 px-4\">\n        <button type=\"button\" (click)=\"onSubmit()\" [disabled]=\"!resetForm.valid\" class=\"btn btn-primary\">Reset</button>\n        <button type=\"button\" (click)=\"action.emit(DialogState.LOGIN)\" class=\"btn btn-light ml-2\">Cancel</button>\n      </div>\n    </div>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]])
    ], ResetPasswordRequestFormComponent);
    return ResetPasswordRequestFormComponent;
}());



/***/ }),

/***/ "./src/app/security/index.ts":
/*!***********************************!*\
  !*** ./src/app/security/index.ts ***!
  \***********************************/
/*! exports provided: SecurityModule, LoginComponent, AuthGuard, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.module */ "./src/app/security/security.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return _security_module__WEBPACK_IMPORTED_MODULE_0__["SecurityModule"]; });

/* harmony import */ var _components_login_page_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-page/login.component */ "./src/app/security/components/login-page/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _components_login_page_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });

/* harmony import */ var _components_login_page_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-page/auth.guard */ "./src/app/security/components/login-page/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _components_login_page_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]; });







/***/ }),

/***/ "./src/app/security/models.ts":
/*!************************************!*\
  !*** ./src/app/security/models.ts ***!
  \************************************/
/*! exports provided: DialogState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogState", function() { return DialogState; });
var DialogState;
(function (DialogState) {
    DialogState["LOGIN"] = "login";
    DialogState["REGISTRATION"] = "registration";
    DialogState["RESET_REQUEST"] = "reset request";
    DialogState["RESET"] = "reset";
})(DialogState || (DialogState = {}));


/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _components_login_page_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-page/login.component */ "./src/app/security/components/login-page/login.component.ts");
/* harmony import */ var _components_login_page_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-page/auth.guard */ "./src/app/security/components/login-page/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/login.service */ "./src/app/security/services/login.service.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/security/components/login-form/login-form.component.ts");
/* harmony import */ var _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-dialog/login-dialog.component */ "./src/app/security/components/login-dialog/login-dialog.component.ts");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "./src/app/security/components/register-form/register-form.component.ts");
/* harmony import */ var _components_reset_password_request_form_reset_password_request_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reset-password-request-form/reset-password-request-form.component */ "./src/app/security/components/reset-password-request-form/reset-password-request-form.component.ts");
/* harmony import */ var _components_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reset-password-page/reset-password-page.component */ "./src/app/security/components/reset-password-page/reset-password-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");















var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule_1 = SecurityModule;
    SecurityModule.forRoot = function () {
        return {
            ngModule: SecurityModule_1,
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _components_login_page_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]]
        };
    };
    var SecurityModule_1;
    SecurityModule = SecurityModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_login_page_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_10__["LoginDialogComponent"], _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__["RegisterFormComponent"],
                _components_reset_password_request_form_reset_password_request_form_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordRequestFormComponent"], _components_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordPageComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            entryComponents: [_components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_10__["LoginDialogComponent"]]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/app/security/services/auth.service.ts":
/*!***************************************************!*\
  !*** ./src/app/security/services/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/app-variables */ "./src/app/shared/app-variables.ts");









var AuthService = /** @class */ (function () {
    function AuthService(httpClient, notificationService) {
        this.httpClient = httpClient;
        this.notificationService = notificationService;
        this._isAuth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isAuthenticated$ = this._isAuth.asObservable();
        this.getCurrentUser().subscribe();
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            if (!this._token) {
                this._token = JSON.parse(localStorage.getItem('token'));
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Authenticate user.
     * @param credentials User auth credentials.
     */
    AuthService.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/security/authenticate", { username: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) { return _this.authHandler(r); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            _this.logout();
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_7__["NotificationType"].DANGER,
                message: res.error.message || 'Connection error.',
                backdrop: false
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res);
        }));
    };
    AuthService.prototype.authorize = function (token, saveAs) {
        var _this = this;
        if (token) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/security/authenticate-with-access-token/" + token;
            return this.httpClient.post(url, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                if (saveAs) {
                    src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__["Variables"].setContextVariable({
                        name: saveAs,
                        value: res.token
                    });
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e); }));
        }
        return this.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return ({ user: user, token: _this.token }); }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__["Variables"].removeContextVariable('userInfo');
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__["Variables"].removeContextVariable('authentication_token');
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__["Variables"].setVariable('authentication_token', null);
        this._user = null;
        this._token = null;
        this._isAuth.next(false);
    };
    /**
     * Is user authenticated.
     * @deprecated
     */
    AuthService.prototype.isAuthenticated = function () {
        return this.isAuthenticated$;
    };
    /**
     * Get current user from session, if exists.
     */
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        if (this._user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._user);
        }
        if (this.token) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/security/user", this.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.authHandler({ user: user, token: _this.token }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                _this.logout();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Not authenticated');
            }));
        }
        this.logout();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Not authenticated');
    };
    AuthService.prototype.getHttpHeaders = function () {
        var token = "Bearer " + this.token;
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
    };
    AuthService.prototype.authHandler = function (_a) {
        var user = _a.user, token = _a.token;
        this._user = user;
        this._token = token;
        src_app_shared_app_variables__WEBPACK_IMPORTED_MODULE_8__["Variables"].setContextVariable({ name: 'userInfo', value: this._user });
        localStorage.setItem('token', JSON.stringify(token));
        this._isAuth.next(true);
        return { user: user, token: token };
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/security/services/index.ts":
/*!********************************************!*\
  !*** ./src/app/security/services/index.ts ***!
  \********************************************/
/*! exports provided: AuthService, LoginService, RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/security/services/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]; });

/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.service */ "./src/app/security/services/registration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]; });






/***/ }),

/***/ "./src/app/security/services/login.service.ts":
/*!****************************************************!*\
  !*** ./src/app/security/services/login.service.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login-dialog/login-dialog.component */ "./src/app/security/components/login-dialog/login-dialog.component.ts");




var LoginService = /** @class */ (function () {
    function LoginService(_document, componentFactoryResolver, appRef, injector) {
        this._document = _document;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    LoginService.prototype.openDialog = function () {
        this.appendModal();
    };
    LoginService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.modal.hide();
        }
    };
    LoginService.prototype.appendModal = function () {
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(_components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDialogComponent"]).create(this.injector);
        this.dialog = componentRef.instance;
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
    LoginService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/security/services/registration.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/security/services/registration.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var RegistrationService = /** @class */ (function () {
    function RegistrationService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
    }
    RegistrationService.prototype.register = function (data) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/security/register", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].SUCCESS,
                message: 'Successfully registered!'
            });
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].DANGER,
                message: res.error.message || res.message
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res);
        }));
    };
    RegistrationService.prototype.resetRequest = function (userName) {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/security/reset-password-request/" + userName, {
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].SUCCESS,
                message: res
            });
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].DANGER,
                message: res.error || res.message
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res);
        }));
    };
    RegistrationService.prototype.resetPassword = function (data) {
        var _this = this;
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiBaseUrl + "/security/reset-password", data, {
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].SUCCESS,
                message: res || 'Password reset successfully'
            });
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            _this.notificationService.open({
                type: src_app_shared_models__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].DANGER,
                message: res.error || res.message
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res);
        }));
    };
    RegistrationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/shared/app-variables.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/app-variables.ts ***!
  \*****************************************/
/*! exports provided: Variables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variables", function() { return Variables; });
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js");

/**
 * AppVariables implements container for global and context variables and variable resolver.
 */
var AppVariables = /** @class */ (function () {
    function AppVariables() {
        this.STORAGE_KEY = 'app-variables';
        /** Application context variables */
        this._contextVariables = {};
        try {
            this._variables = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
        }
        catch (e) {
            this._variables = {};
            console.error(e);
        }
    }
    Object.defineProperty(AppVariables.prototype, "variables", {
        get: function () {
            return this._variables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppVariables.prototype, "contextVariables", {
        get: function () {
            return this._contextVariables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppVariables.prototype, "currentEnv", {
        get: function () {
            return localStorage.getItem('env');
        },
        set: function (val) {
            if (val) {
                localStorage.setItem('env', val);
            }
            else {
                localStorage.removeItem('env');
            }
        },
        enumerable: true,
        configurable: true
    });
    AppVariables.prototype.setVariable = function (key, value) {
        this._variables[key] = value;
        this.syncAppVariables();
    };
    AppVariables.prototype.syncAppVariables = function () {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.variables));
    };
    AppVariables.prototype.setVariables = function (vars) {
        this._variables = vars.filter(function (v) { return v.name; }).reduce(function (variables, v) {
            variables[v.name] = v.value;
            return variables;
        }, {});
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.variables));
    };
    AppVariables.prototype.setContextVariable = function (_a) {
        var name = _a.name, value = _a.value;
        this._contextVariables[name] = value;
    };
    AppVariables.prototype.removeContextVariable = function (name) {
        delete this._contextVariables[name];
    };
    AppVariables.prototype.getContextVar = function (key) {
        return this.contextVariables[key];
    };
    AppVariables.prototype.addVariables = function (vars) {
        this._variables = vars.filter(function (v) { return v.name; }).reduce(function (variables, v) {
            variables[v.name] = v.value;
            return variables;
        }, this._variables);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.variables));
    };
    /**
     * Resolves object property values.
     * @param obj Object to resolve property values.
     */
    AppVariables.prototype.resolve = function (obj, vars) {
        var _this = this;
        if (Array.isArray(obj)) {
            return obj.map(function (o) { return (_this.resolve(o, vars)); });
        }
        if (typeof obj === 'string') {
            return this.resolveString(obj, vars);
        }
        var resolved = Object.keys(obj).reduce(function (prev, key) {
            var val = obj[key];
            if (typeof val === 'string') {
                prev[key] = _this.resolveString(val, vars);
            }
            else if (Array.isArray(val)) {
                prev[key] = val.map(function (o) { return _this.resolve(o, vars); });
            }
            else if (typeof val === 'object') {
                prev[key] = _this.resolve(obj[key], vars);
            }
            else {
                prev[key] = val;
            }
            return prev;
        }, {});
        return resolved;
    };
    /**
     * Resolves variables in string.
     * @param str String to resolve.
     * @param vars Object containing variables.
     * @example
     * resolveString('{{objectVariable}}/subProp/subProp2') => 'subProp2Value'; (value of subProp2);
     * resolveString('{{stringVariable}}/subProp/subProp2') => 'stringVariableValue/subProp/subProp2'; (resolved string);
     */
    AppVariables.prototype.resolveString = function (str, vars) {
        var _this = this;
        if (typeof str !== 'string') {
            return str;
        }
        vars = vars || {};
        if (vars instanceof Map) {
            vars = Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["mapToObj"])(vars);
        }
        var pathConstructions = str.match(/{{[\w-]*}}+[\w\/]*/g);
        if (pathConstructions) {
            var result_1 = str;
            pathConstructions.forEach(function (v) {
                var _a = v.split('}}/'), variable = _a[0], path = _a[1];
                var key = variable.replace('{{', '').replace('}}', '');
                var val = vars[key] || _this.variables[key] || _this.contextVariables[key]; // || v;
                if (typeof val === 'string') {
                    result_1 = result_1.replace("{{" + key + "}}", val);
                }
                else if (typeof val === 'object') {
                    result_1 = path ? _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["JSONUtils"].find(val, "$." + path) : val;
                }
            });
            return result_1;
        }
        else {
            var resolved = Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["resolveWorkflowPath"])(str);
            if (resolved) {
                var val = vars[resolved.key] || this.variables[resolved.key] || this.contextVariables[resolved.key];
                var res = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["JSONUtils"].find(val, "$." + resolved.name);
                if (res) {
                    return res;
                }
            }
        }
        return str;
    };
    AppVariables.prototype.isVariable = function (str) {
        return typeof str === 'string' && Boolean(str.match(/^{{[\w-]*}}+[\w\/]*/g));
    };
    return AppVariables;
}());
var Variables = new AppVariables();


/***/ }),

/***/ "./src/app/shared/components/confirmation/confirmation.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirmation/confirmation.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/confirmation/confirmation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/confirmation/confirmation.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ConfirmationComponent.prototype.confirmHandle = function (val) {
        this.confirm.emit(val);
        this.modalRef.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ConfirmationComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmationComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmationComponent.prototype, "confirm", void 0);
    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/shared/components/confirmation/confirmation.component.scss")]
        })
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/content-explorer/content-explorer.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/content-explorer/content-explorer.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-actions {\n  z-index: 7;\n}\n\n.explorer-section {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250ZW50LWV4cGxvcmVyL2NvbnRlbnQtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRlbnQtZXhwbG9yZXIvY29udGVudC1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250ZW50LWV4cGxvcmVyL2NvbnRlbnQtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1hY3Rpb25zIHtcbiAgei1pbmRleDogNztcbn1cblxuLmV4cGxvcmVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiIsIi50YWJzLWFjdGlvbnMge1xuICB6LWluZGV4OiA3O1xufVxuXG4uZXhwbG9yZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/content-explorer/content-explorer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/content-explorer/content-explorer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ContentExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExplorerComponent", function() { return ContentExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-variables */ "./src/app/shared/app-variables.ts");







var ContentExplorerComponent = /** @class */ (function () {
    function ContentExplorerComponent() {
        this.jsonContentSize = 50;
        this.formatted = true;
        this.modeState = {
            json: true,
            designer: true
        };
        this.isReadonly = false;
        this.isVariable = false;
        this.explorerUIModel = {
            type: 'rest-client:grid-object-explorer',
            containerProperties: {},
            itemProperties: {
                dataSource: null,
                isReadOnly: false,
                allowDelete: true,
                allowAddNew: true,
                host: 'json-editor-object-explorer',
                selectionMode: 4
            }
        };
        this.workflow = {
            failOnError: true,
            include: ['@common'],
            vars: {},
            workflowsMap: {
                init: []
            },
            consts: {}
        };
    }
    ContentExplorerComponent.prototype.ngOnInit = function () {
        if (this.formatter === undefined) {
            this.formatter = true;
        }
        if (this.uiModel) {
            this.explorerUIModel = this.uiModel;
        }
        this.dataModel = this.data;
        if (this.dataModel) {
            this.explorerUIModel.itemProperties.dataSource = this.dataModel;
        }
        this.initContentEditor();
    };
    ContentExplorerComponent.prototype.initContentEditor = function () {
        var _this = this;
        this.contentEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.contentEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(this.data),
            readOnly: this.isReadonly
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.contentEditor, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return _this.getDataObject();
        })).subscribe(function (_a) {
            var value = _a.value, parsedValue = _a.parsedValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    this.dataModel = this.isVariable ? value : parsedValue;
                    this.explorerUIModel.itemProperties.dataSource = parsedValue;
                    return [2 /*return*/];
                });
            });
        });
    };
    ContentExplorerComponent.prototype.ngOnChanges = function (_a) {
        var data = _a.data;
        if (!data.firstChange && data.currentValue !== this.dataModel) {
            var _b = this.getDataObject(data.currentValue || null), parsedValue = _b.parsedValue, value = _b.value;
            this.dataModel = this.isVariable ? value : (parsedValue || value);
            this.explorerUIModel.itemProperties.dataSource = parsedValue;
            this.onDataModelChanged(this.dataModel);
        }
    };
    Object.defineProperty(ContentExplorerComponent.prototype, "showGrid", {
        get: function () {
            return this.dataModel && typeof this.dataModel === 'object';
        },
        enumerable: true,
        configurable: true
    });
    ContentExplorerComponent.prototype.resize = function () {
        this.contentEditor.resize();
    };
    ContentExplorerComponent.prototype.onDataModelChanged = function (dataModel) {
        this.contentEditor.setValue(this.formatted ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(dataModel) : JSON.stringify(dataModel), -1);
    };
    ContentExplorerComponent.prototype.setReadOnly = function (state) {
        if (this.isReadonly !== state) {
            this.explorerUIModel.itemProperties.isReadOnly = state;
            this.isReadonly = state;
            if (this.contentEditor) {
                this.contentEditor.setReadOnly(state);
            }
        }
    };
    ContentExplorerComponent.prototype.onModeState = function (prop) {
        this.modeState[prop] = !this.modeState[prop];
        if (this.modeState.json && !this.modeState.designer) {
            this.jsonContentSize = 100;
        }
        else if (this.modeState.json && this.modeState.designer) {
            this.jsonContentSize = 50;
        }
        else {
            this.jsonContentSize = 0;
        }
    };
    ContentExplorerComponent.prototype.formatJSON = function (format) {
        if (format === void 0) { format = true; }
        try {
            var value = JSON.parse(this.contentEditor.getValue());
            if (format) {
                this.contentEditor.setValue(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(value), -1);
            }
            else {
                this.contentEditor.setValue(JSON.stringify(value), -1);
            }
            this.formatted = format;
        }
        catch (e) {
            console.error(e);
            this.formatted = false;
        }
    };
    ContentExplorerComponent.prototype.isValid = function () {
        return true; // this.isVariable || JSON.parse(this.dataModel);
    };
    ContentExplorerComponent.prototype.getDataObject = function (value) {
        if (value === void 0) { value = this.contentEditor.getValue(); }
        return this.isTextAvailable ? this.getAnyObject(value) : this.getJsonObject(value);
    };
    ContentExplorerComponent.prototype.getJsonObject = function (value) {
        var parsedValue = null;
        try {
            parsedValue = JSON.parse(value);
        }
        catch (e) { }
        return { value: value, parsedValue: parsedValue };
    };
    ContentExplorerComponent.prototype.getAnyObject = function (value) {
        var parsedValue;
        this.isVariable = _app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].isVariable(value);
        if (this.isVariable) {
            this.contentEditor.session.setMode('ace/mode/text');
            var resolved = _app_variables__WEBPACK_IMPORTED_MODULE_6__["Variables"].resolve(value);
            if (typeof resolved === 'string') {
                try {
                    parsedValue = JSON.parse(resolved);
                }
                catch (e) { }
            }
            else if (typeof resolved === 'object') {
                parsedValue = resolved;
            }
        }
        else {
            this.contentEditor.session.setMode('ace/mode/json');
            if (typeof value === 'object') {
                parsedValue = value;
            }
            else {
                try {
                    parsedValue = JSON.parse(value);
                }
                catch (e) {
                    this.contentEditor.session.setMode('ace/mode/text');
                }
            }
        }
        return { value: value, parsedValue: parsedValue };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContentExplorerComponent.prototype, "isTextAvailable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContentExplorerComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContentExplorerComponent.prototype, "uiModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ContentExplorerComponent.prototype, "formatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentJSON', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentExplorerComponent.prototype, "contentEl", void 0);
    ContentExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-explorer',
            template: __webpack_require__(/*! raw-loader!./content-explorer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/content-explorer/content-explorer.component.html"),
            styles: [__webpack_require__(/*! ./content-explorer.component.scss */ "./src/app/shared/components/content-explorer/content-explorer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentExplorerComponent);
    return ContentExplorerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dynamic-dialog/dynamic-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-dialog/dynamic-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: DynamicDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function() { return DynamicDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var DynamicDialogComponent = /** @class */ (function () {
    function DynamicDialogComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(DynamicDialogComponent.prototype, "component", {
        get: function () {
            if (this.componentRef) {
                return this.componentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.loadChildComponent(_this.childComponentType);
            _this.init.emit();
        });
    };
    DynamicDialogComponent.prototype.loadChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.insertionPoint.clear();
        this.componentRef = this.insertionPoint.createComponent(componentFactory);
        this.componentRef.instance.config = this.config;
        this.modal.config = this.options;
        this.componentRef.instance.modalRef = this.modal;
    };
    DynamicDialogComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialogContent', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], DynamicDialogComponent.prototype, "insertionPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], DynamicDialogComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicDialogComponent.prototype, "init", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicDialogComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicDialogComponent.prototype, "options", void 0);
    DynamicDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-dialog',
            template: "\n    <div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n      aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" [ngClass]=\"[options.class || '']\" role=\"document\">\n        <div class=\"modal-content shadow h-100\">\n\t\t\t\t  <ng-template #dialogContent></ng-template>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .modal-content > ::ng-deep * {\n      height: 100%;\n    }\n\n    .modal-dialog.full-height {\n      height: calc(100% - 56px);\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], DynamicDialogComponent);
    return DynamicDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dynamic-modal/dynamic-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/dynamic-modal/dynamic-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicModalComponent", function() { return DynamicModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var DynamicModalComponent = /** @class */ (function () {
    function DynamicModalComponent() {
    }
    DynamicModalComponent.prototype.openModal = function () {
        this.modal.show();
    };
    DynamicModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], DynamicModalComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicModalComponent.prototype, "viewConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DynamicModalComponent.prototype, "title", void 0);
    DynamicModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-modal',
            template: "\n  <div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{title}}</h4>\n          <button type=\"button\" class=\"close\" (click)=\"modal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        <ngx-dynamic-component *ngIf=\"viewConfig\"\n          [uiModel]='viewConfig.uiModel'\n          [dataModel]='viewConfig.dataModel'></ngx-dynamic-component>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicModalComponent);
    return DynamicModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .filter-component {\n  height: 450px;\n  min-width: 450px;\n}\n::ng-deep .filter-component .popover-content.popover-body {\n  height: 100%;\n  padding: 0.5rem;\n}\n.fa-filter {\n  color: #73818f;\n}\n.fa-filter.selected {\n  color: #2f353a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9zcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDREo7QURLQTtFQUNFLGNFSFU7QURDWjtBREdFO0VBQ0UsY0VIUTtBREVaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzXCI7XG5cbjo6bmctZGVlcCAuZmlsdGVyLWNvbXBvbmVudCB7XG4gIGhlaWdodDogNDUwcHg7XG4gIG1pbi13aWR0aDogNDUwcHg7XG5cbiAgLnBvcG92ZXItY29udGVudC5wb3BvdmVyLWJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgfVxufVxuXG4uZmEtZmlsdGVyIHtcbiAgY29sb3I6ICRncmF5LTYwMDtcbiAgJi5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICRncmF5LTgwMDtcbiAgfVxufVxuIiwiOjpuZy1kZWVwIC5maWx0ZXItY29tcG9uZW50IHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cbjo6bmctZGVlcCAuZmlsdGVyLWNvbXBvbmVudCAucG9wb3Zlci1jb250ZW50LnBvcG92ZXItYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZmEtZmlsdGVyIHtcbiAgY29sb3I6ICM3MzgxOGY7XG59XG4uZmEtZmlsdGVyLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMyZjM1M2E7XG59IiwiLy8gQ29sb3Igc3lzdGVtXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcblxyXG4kd2hpdGU6ICAgICAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMTgxYjFlICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAjZjBmM2Y1ICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDg1JSk7XHJcbiRncmF5LTIwMDogICNlNGU3ZWEgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODAlKTtcclxuJGdyYXktMzAwOiAgI2M4Y2VkMyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA3MCUpO1xyXG4kZ3JheS00MDA6ICAjYWNiNGJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDYwJSk7XHJcbiRncmF5LTUwMDogICM4ZjliYTYgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNTAlKTtcclxuJGdyYXktNjAwOiAgIzczODE4ZiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA0MCUpO1xyXG4kZ3JheS03MDA6ICAjNWM2ODczICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDMwJSk7XHJcbiRncmF5LTgwMDogICMyZjM1M2EgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTAlKTtcclxuJGdyYXktOTAwOiAgIzIzMjgyYyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1JSk7XHJcbiRibGFjazogICAgICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICAgICAgICMyMGE4ZDggIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAgICAjNjYxMGYyICFkZWZhdWx0O1xyXG4kcHVycGxlOiAgICAgIzZmNDJjMSAhZGVmYXVsdDtcclxuJHBpbms6ICAgICAgICNlODNlOGMgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAjZjg2YzZiICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAgICAgI2Y4Y2IwMCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICNmZmMxMDcgIWRlZmF1bHQ7XHJcbiRncmVlbjogICAgICAjNGRiZDc0ICFkZWZhdWx0O1xyXG4kdGVhbDogICAgICAgIzIwYzk5NyAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICMxN2EyYjggIWRlZmF1bHQ7XHJcbiRsaWdodC1ibHVlOiAjNjNjMmRlICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXHJcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcclxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxyXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxyXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXHJcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcclxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcclxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcclxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcclxuICAgIFwibGlnaHQtYmx1ZVwiOiAkbGlnaHQtYmx1ZSxcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxyXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgJGxpZ2h0LWJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIEJyYW5kIENvbG9yc1xyXG5cclxuJGZhY2Vib29rOiAgICAgICAjM2I1OTk4ICFkZWZhdWx0O1xyXG4kdHdpdHRlcjogICAgICAgICMwMGFjZWQgIWRlZmF1bHQ7XHJcbiRsaW5rZWRpbjogICAgICAgIzQ4NzViNCAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjZDM0ODM2ICFkZWZhdWx0O1xyXG4kZmxpY2tyOiAgICAgICAgICNmZjAwODQgIWRlZmF1bHQ7XHJcbiR0dW1ibHI6ICAgICAgICAgIzMyNTA2ZCAhZGVmYXVsdDtcclxuJHhpbmc6ICAgICAgICAgICAjMDI2NDY2ICFkZWZhdWx0O1xyXG4kZ2l0aHViOiAgICAgICAgICM0MTgzYzQgIWRlZmF1bHQ7XHJcbiRodG1sNTogICAgICAgICAgI2UzNGYyNiAhZGVmYXVsdDtcclxuJG9wZW5pZDogICAgICAgICAjZjc4YzQwICFkZWZhdWx0O1xyXG4kc3RhY2stb3ZlcmZsb3c6ICNmZTdhMTUgIWRlZmF1bHQ7XHJcbiR5b3V0dWJlOiAgICAgICAgI2IwMCAhZGVmYXVsdDtcclxuJGNzczM6ICAgICAgICAgICAjMDE3MGJhICFkZWZhdWx0O1xyXG4kZHJpYmJibGU6ICAgICAgICNlYTRjODkgIWRlZmF1bHQ7XHJcbiRnb29nbGUtcGx1czogICAgI2JiNGIzOSAhZGVmYXVsdDtcclxuJGluc3RhZ3JhbTogICAgICAjNTE3ZmE0ICFkZWZhdWx0O1xyXG4kcGludGVyZXN0OiAgICAgICNjYjIwMjcgIWRlZmF1bHQ7XHJcbiR2azogICAgICAgICAgICAgIzQ1NjY4ZSAhZGVmYXVsdDtcclxuJHlhaG9vOiAgICAgICAgICAjNDAwMTkxICFkZWZhdWx0O1xyXG4kYmVoYW5jZTogICAgICAgICMxNzY5ZmYgIWRlZmF1bHQ7XHJcbiRkcm9wYm94OiAgICAgICAgIzAwN2VlNSAhZGVmYXVsdDtcclxuJHJlZGRpdDogICAgICAgICAjZmY0NTAwICFkZWZhdWx0O1xyXG4kc3BvdGlmeTogICAgICAgICM3YWI4MDAgIWRlZmF1bHQ7XHJcbiR2aW5lOiAgICAgICAgICAgIzAwYmY4ZiAhZGVmYXVsdDtcclxuJGZvdXJzcXVhcmU6ICAgICAjMTA3M2FmICFkZWZhdWx0O1xyXG4kdmltZW86ICAgICAgICAgICNhYWQ0NTAgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmRzLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRicmFuZHMtY29sb3JzOiBtYXAtbWVyZ2UoKFxyXG4gIFwiZmFjZWJvb2tcIjogICAgICAgJGZhY2Vib29rLFxyXG4gIFwidHdpdHRlclwiOiAgICAgICAgJHR3aXR0ZXIsXHJcbiAgXCJsaW5rZWRpblwiOiAgICAgICAkbGlua2VkaW4sXHJcbiAgXCJnb29nbGUtcGx1c1wiOiAgICAkZ29vZ2xlLXBsdXMsXHJcbiAgXCJmbGlja3JcIjogICAgICAgICAkZmxpY2tyLFxyXG4gIFwidHVtYmxyXCI6ICAgICAgICAgJHR1bWJscixcclxuICBcInhpbmdcIjogICAgICAgICAgICR4aW5nLFxyXG4gIFwiZ2l0aHViXCI6ICAgICAgICAgJGdpdGh1YixcclxuICBcImh0bWw1XCI6ICAgICAgICAgICRodG1sNSxcclxuICBcIm9wZW5pZFwiOiAgICAgICAgICRvcGVuaWQsXHJcbiAgXCJzdGFjay1vdmVyZmxvd1wiOiAkc3RhY2stb3ZlcmZsb3csXHJcbiAgXCJ5b3V0dWJlXCI6ICAgICAgICAkeW91dHViZSxcclxuICBcImNzczNcIjogICAgICAgICAgICRjc3MzLFxyXG4gIFwiZHJpYmJibGVcIjogICAgICAgJGRyaWJiYmxlLFxyXG4gIFwiaW5zdGFncmFtXCI6ICAgICAgJGluc3RhZ3JhbSxcclxuICBcInBpbnRlcmVzdFwiOiAgICAgICRwaW50ZXJlc3QsXHJcbiAgXCJ2a1wiOiAgICAgICAgICAgICAkdmssXHJcbiAgXCJ5YWhvb1wiOiAgICAgICAgICAkeWFob28sXHJcbiAgXCJiZWhhbmNlXCI6ICAgICAgICAkYmVoYW5jZSxcclxuICBcImRyb3Bib3hcIjogICAgICAgICRkcm9wYm94LFxyXG4gIFwicmVkZGl0XCI6ICAgICAgICAgJHJlZGRpdCxcclxuICBcInNwb3RpZnlcIjogICAgICAgICRzcG90aWZ5LFxyXG4gIFwidmluZVwiOiAgICAgICAgICAgJHZpbmUsXHJcbiAgXCJmb3Vyc3F1YXJlXCI6ICAgICAkZm91cnNxdWFyZSxcclxuICBcInZpbWVvXCI6ICAgICAgICAgICR2aW1lb1xyXG4pLCAkYnJhbmRzLWNvbG9ycyk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.grid */ "./node_modules/wijmo/wijmo.grid.js");
/* harmony import */ var wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils.ts");








var FilterComponent = /** @class */ (function () {
    function FilterComponent(sql) {
        this.sql = sql;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.collectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["CollectionView"]();
        this.loading = true;
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collectionView.sourceCollection = [];
        this.collectionView.filter = (function (item) {
            return !_this.search || item.value.toLowerCase().indexOf(_this.search.trim().toLowerCase()) !== -1;
        });
        this.setSelected(this.currentFilters);
        var groupDesc = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["PropertyGroupDescription"]('applied', function (item, prop) {
            return _this.isSelected(item.value) ? 'Applied items' : 'Select items';
        });
        this.collectionView.groupDescriptions.push(groupDesc);
        this.collectionView.sortConverter = function (sd, item, value) {
            if (sd.property === 'applied' && _this.selected) {
                return _this.isSelected(item.value);
            }
            return value;
        };
        this.setLabel();
    };
    /** @description Handles filter popup show.*/
    FilterComponent.prototype.onShown = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.getItems()];
                    case 2:
                        items = _a.sent();
                        this.collectionView.sourceCollection = items;
                        this.setFooter(this.grid);
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FilterComponent.prototype.getItems = function () {
        var _this = this;
        var filters = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getFilters"])(this.currentFilters, this.field.bindingName) || [];
        if (this.defaultFilters) {
            filters = filters.concat(this.defaultFilters);
        }
        return this.sql.selectSqlObjectData(this.connection, this.dataObject.objectOwner, this.dataObject.objectName, {
            fields: [
                this.field.bindingName,
                "Count|1"
            ],
            filters: filters
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            _this.usedFilters = _this.getUsedFiltersStr();
            return res.rows && res.rows.map(function (_a) {
                var value = _a[0], count = _a[1];
                if (_this.field.dataType === wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["DataType"].Date) {
                    value = new Date(Date.parse(value));
                }
                return { selected: _this.isSelected(value), value: value, count: count };
            });
        })).toPromise();
    };
    FilterComponent.prototype.setSelected = function (currentFilters) {
        if (currentFilters) {
            var selected = currentFilters[this.field.bindingName];
            this.selected = selected;
        }
    };
    FilterComponent.prototype.ngOnChanges = function (_a) {
        var currentFilters = _a.currentFilters;
        if (currentFilters && !currentFilters.firstChange) {
            this.setSelected(currentFilters.currentValue);
            this.setLabel();
        }
    };
    FilterComponent.prototype.sortingHandler = function (s, e) {
        var col = s.columns[e.col];
        var asc = col.currentSort !== '+';
        var sorts = this.collectionView.sortDescriptions;
        var sd = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["SortDescription"](col.binding, asc);
        this.collectionView.deferUpdate(function () {
            sorts.clear();
            sorts.push(new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["SortDescription"]('applied', false));
            sorts.push(sd);
        });
        e.cancel = true;
    };
    FilterComponent.prototype.onGridInit = function (grid) {
        grid.columnFooters.rows.push(new wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_4__["Row"]({ count: 0 }));
        grid.groupHeaderFormat = "<b>{value}</b>";
        grid.formatItem.addHandler(function (g, r) {
            var panel = r.panel;
            var dataItem = panel.rows[r.row].dataItem;
            var binding = panel.columns[r.col].binding;
            if (panel.cellType === wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_4__["CellType"].Cell && dataItem && binding === 'value') {
                if (dataItem[binding] === null) {
                    r.cell.innerHTML = '[NULL]';
                }
            }
        });
        if (this.selected) {
            this.collectionView.sortDescriptions.push(new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["SortDescription"]('applied', false));
        }
    };
    FilterComponent.prototype.onSearch = function (str) {
        this.search = str;
        this.collectionView.refresh();
    };
    FilterComponent.prototype.onHidden = function () {
        if (this.currentFilters) {
            this.collectionView.sourceCollection = [];
        }
    };
    FilterComponent.prototype.onApply = function () {
        this.selected = this.collectionView.items
            .filter(function (_a) {
            var selected = _a.selected;
            return selected;
        })
            .map(function (_a) {
            var value = _a.value;
            return value;
        });
        if (!this.selected.length) {
            this.selected = null;
        }
        this.pop.hide();
        this.apply.emit(this.selected);
        this.setLabel();
    };
    FilterComponent.prototype.onClear = function () {
        this.selected = null;
        this.onHidden();
        this.pop.hide();
        this.apply.emit(this.selected);
        this.setLabel();
    };
    FilterComponent.prototype.onDelete = function () {
        this.selected = null;
        this.delete.emit();
        this.setLabel();
    };
    /** @description Set footer with total count. */
    FilterComponent.prototype.setFooter = function (grid) {
        if (grid) {
            grid.columnFooters.setCellData(0, 2, this.collectionView.sourceCollection.reduce(function (prev, item) {
                prev += item.count;
                return prev;
            }, 0));
        }
    };
    /** @description Set label and title */
    FilterComponent.prototype.setLabel = function () {
        var _this = this;
        var label = this.field.bindingName;
        var title = label;
        if (this.selected && this.selected.length) {
            title = label + ": " + this.selected.map(function (v) {
                if (_this.field.dataType === wijmo_wijmo__WEBPACK_IMPORTED_MODULE_2__["DataType"].Date) {
                    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["formatWijmoDate"])(v, _this.field.displayFormat);
                }
                return v;
            }).join(', ');
            if (title.length > 50) {
                label = title.substring(0, 47) + "...";
            }
            else {
                label = title;
            }
        }
        this.label = label;
        this.title = title;
    };
    /** @description Is value selected */
    FilterComponent.prototype.isSelected = function (value) {
        if (!this.selected) {
            return false;
        }
        if (value instanceof Date) {
            return this.selected.some(function (s) { return s.getTime() === value.getTime(); });
        }
        return this.selected.includes(value);
    };
    FilterComponent.prototype.getUsedFiltersStr = function () {
        var filters = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getFilters"])(this.currentFilters, this.field.bindingName);
        return filters &&
            filters.map(function (f) { return f.fieldName + " IN (" + f.value.map(function (v) { return v instanceof Date ? Object(_utils__WEBPACK_IMPORTED_MODULE_7__["dateToDtoString"])(v) : v; }).join(',') + "})"; }).join(' AND ');
    };
    FilterComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["SqlDbService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FilterComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "currentFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "dataObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FilterComponent.prototype, "connection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FilterComponent.prototype, "defaultFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "apply", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", wijmo_wijmo_grid__WEBPACK_IMPORTED_MODULE_4__["FlexGrid"])
    ], FilterComponent.prototype, "grid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pop', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"])
    ], FilterComponent.prototype, "pop", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/shared/components/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["SqlDbService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/filters/filters.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/filters/filters.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border[dropdown] {\n  border-color: transparent;\n}\n\n.dropdown-menu {\n  max-height: 500px;\n}\n\n.fa.fa-cogs {\n  color: #2f353a;\n}\n\n::ng-deep .applied-popover {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0VDVTtBREZaOztBRElBO0VBQ0UsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzXCI7XG5cbi5ib3JkZXJbZHJvcGRvd25dIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmZhLmZhLWNvZ3Mge1xuICBjb2xvcjogJGdyYXktODAwO1xufVxuXG46Om5nLWRlZXAgLmFwcGxpZWQtcG9wb3ZlciB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4iLCIuYm9yZGVyW2Ryb3Bkb3duXSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5mYS5mYS1jb2dzIHtcbiAgY29sb3I6ICMyZjM1M2E7XG59XG5cbjo6bmctZGVlcCAuYXBwbGllZC1wb3BvdmVyIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn0iLCIvLyBDb2xvciBzeXN0ZW1cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuXHJcbiR3aGl0ZTogICAgICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LWJhc2U6ICMxODFiMWUgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICNmMGYzZjUgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODUlKTtcclxuJGdyYXktMjAwOiAgI2U0ZTdlYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA4MCUpO1xyXG4kZ3JheS0zMDA6ICAjYzhjZWQzICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDcwJSk7XHJcbiRncmF5LTQwMDogICNhY2I0YmMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNjAlKTtcclxuJGdyYXktNTAwOiAgIzhmOWJhNiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1MCUpO1xyXG4kZ3JheS02MDA6ICAjNzM4MThmICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDQwJSk7XHJcbiRncmF5LTcwMDogICM1YzY4NzMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzAlKTtcclxuJGdyYXktODAwOiAgIzJmMzUzYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCAxMCUpO1xyXG4kZ3JheS05MDA6ICAjMjMyODJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDUlKTtcclxuJGJsYWNrOiAgICAgIzAwMCAhZGVmYXVsdDtcclxuXHJcbiRncmF5czogKCkgIWRlZmF1bHQ7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcclxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcclxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcclxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcclxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogICAgICAgIzIwYThkOCAhZGVmYXVsdDtcclxuJGluZGlnbzogICAgICM2NjEwZjIgIWRlZmF1bHQ7XHJcbiRwdXJwbGU6ICAgICAjNmY0MmMxICFkZWZhdWx0O1xyXG4kcGluazogICAgICAgI2U4M2U4YyAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICNmODZjNmIgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAgICAjZjhjYjAwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgI2ZmYzEwNyAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICAgICM0ZGJkNzQgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAgICAjMjBjOTk3ICFkZWZhdWx0O1xyXG4kY3lhbjogICAgICAgIzE3YTJiOCAhZGVmYXVsdDtcclxuJGxpZ2h0LWJsdWU6ICM2M2MyZGUgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcclxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxyXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXHJcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXHJcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcclxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxyXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXHJcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxyXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxyXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxyXG4gICAgXCJsaWdodC1ibHVlXCI6ICRsaWdodC1ibHVlLFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcclxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXHJcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAgICAkbGlnaHQtYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gQnJhbmQgQ29sb3JzXHJcblxyXG4kZmFjZWJvb2s6ICAgICAgICMzYjU5OTggIWRlZmF1bHQ7XHJcbiR0d2l0dGVyOiAgICAgICAgIzAwYWNlZCAhZGVmYXVsdDtcclxuJGxpbmtlZGluOiAgICAgICAjNDg3NWI0ICFkZWZhdWx0O1xyXG4kZ29vZ2xlLXBsdXM6ICAgICNkMzQ4MzYgIWRlZmF1bHQ7XHJcbiRmbGlja3I6ICAgICAgICAgI2ZmMDA4NCAhZGVmYXVsdDtcclxuJHR1bWJscjogICAgICAgICAjMzI1MDZkICFkZWZhdWx0O1xyXG4keGluZzogICAgICAgICAgICMwMjY0NjYgIWRlZmF1bHQ7XHJcbiRnaXRodWI6ICAgICAgICAgIzQxODNjNCAhZGVmYXVsdDtcclxuJGh0bWw1OiAgICAgICAgICAjZTM0ZjI2ICFkZWZhdWx0O1xyXG4kb3BlbmlkOiAgICAgICAgICNmNzhjNDAgIWRlZmF1bHQ7XHJcbiRzdGFjay1vdmVyZmxvdzogI2ZlN2ExNSAhZGVmYXVsdDtcclxuJHlvdXR1YmU6ICAgICAgICAjYjAwICFkZWZhdWx0O1xyXG4kY3NzMzogICAgICAgICAgICMwMTcwYmEgIWRlZmF1bHQ7XHJcbiRkcmliYmJsZTogICAgICAgI2VhNGM4OSAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjYmI0YjM5ICFkZWZhdWx0O1xyXG4kaW5zdGFncmFtOiAgICAgICM1MTdmYTQgIWRlZmF1bHQ7XHJcbiRwaW50ZXJlc3Q6ICAgICAgI2NiMjAyNyAhZGVmYXVsdDtcclxuJHZrOiAgICAgICAgICAgICAjNDU2NjhlICFkZWZhdWx0O1xyXG4keWFob286ICAgICAgICAgICM0MDAxOTEgIWRlZmF1bHQ7XHJcbiRiZWhhbmNlOiAgICAgICAgIzE3NjlmZiAhZGVmYXVsdDtcclxuJGRyb3Bib3g6ICAgICAgICAjMDA3ZWU1ICFkZWZhdWx0O1xyXG4kcmVkZGl0OiAgICAgICAgICNmZjQ1MDAgIWRlZmF1bHQ7XHJcbiRzcG90aWZ5OiAgICAgICAgIzdhYjgwMCAhZGVmYXVsdDtcclxuJHZpbmU6ICAgICAgICAgICAjMDBiZjhmICFkZWZhdWx0O1xyXG4kZm91cnNxdWFyZTogICAgICMxMDczYWYgIWRlZmF1bHQ7XHJcbiR2aW1lbzogICAgICAgICAgI2FhZDQ1MCAhZGVmYXVsdDtcclxuXHJcbiRicmFuZHMtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGJyYW5kcy1jb2xvcnM6IG1hcC1tZXJnZSgoXHJcbiAgXCJmYWNlYm9va1wiOiAgICAgICAkZmFjZWJvb2ssXHJcbiAgXCJ0d2l0dGVyXCI6ICAgICAgICAkdHdpdHRlcixcclxuICBcImxpbmtlZGluXCI6ICAgICAgICRsaW5rZWRpbixcclxuICBcImdvb2dsZS1wbHVzXCI6ICAgICRnb29nbGUtcGx1cyxcclxuICBcImZsaWNrclwiOiAgICAgICAgICRmbGlja3IsXHJcbiAgXCJ0dW1ibHJcIjogICAgICAgICAkdHVtYmxyLFxyXG4gIFwieGluZ1wiOiAgICAgICAgICAgJHhpbmcsXHJcbiAgXCJnaXRodWJcIjogICAgICAgICAkZ2l0aHViLFxyXG4gIFwiaHRtbDVcIjogICAgICAgICAgJGh0bWw1LFxyXG4gIFwib3BlbmlkXCI6ICAgICAgICAgJG9wZW5pZCxcclxuICBcInN0YWNrLW92ZXJmbG93XCI6ICRzdGFjay1vdmVyZmxvdyxcclxuICBcInlvdXR1YmVcIjogICAgICAgICR5b3V0dWJlLFxyXG4gIFwiY3NzM1wiOiAgICAgICAgICAgJGNzczMsXHJcbiAgXCJkcmliYmJsZVwiOiAgICAgICAkZHJpYmJibGUsXHJcbiAgXCJpbnN0YWdyYW1cIjogICAgICAkaW5zdGFncmFtLFxyXG4gIFwicGludGVyZXN0XCI6ICAgICAgJHBpbnRlcmVzdCxcclxuICBcInZrXCI6ICAgICAgICAgICAgICR2ayxcclxuICBcInlhaG9vXCI6ICAgICAgICAgICR5YWhvbyxcclxuICBcImJlaGFuY2VcIjogICAgICAgICRiZWhhbmNlLFxyXG4gIFwiZHJvcGJveFwiOiAgICAgICAgJGRyb3Bib3gsXHJcbiAgXCJyZWRkaXRcIjogICAgICAgICAkcmVkZGl0LFxyXG4gIFwic3BvdGlmeVwiOiAgICAgICAgJHNwb3RpZnksXHJcbiAgXCJ2aW5lXCI6ICAgICAgICAgICAkdmluZSxcclxuICBcImZvdXJzcXVhcmVcIjogICAgICRmb3Vyc3F1YXJlLFxyXG4gIFwidmltZW9cIjogICAgICAgICAgJHZpbWVvXHJcbiksICRicmFuZHMtY29sb3JzKTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/filters/filters.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filters/filters.component.ts ***!
  \****************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components */ "./src/app/shared/components/index.ts");






/** @description Filters for Table data. */
var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(dialogService) {
        this.dialogService = dialogService;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.filtersState = null;
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fields$ = this.filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (filters) {
            var selected = filters.map(function (f) { return f.bindingName; });
            return _this.fields.filter(function (f) { return !selected.includes(f.bindingName); });
        }));
        this.columnInfo$ = this.filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (filters) { return filters.map(function (f) { return _this.fields.find(function (_a) {
            var bindingName = _a.bindingName;
            return f.bindingName === bindingName;
        }); }); }));
        this.selectedFilters$ = this.filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (f) { return f.filter(function (i) { return i.selected && i.selected.length; }); }));
    };
    FiltersComponent.prototype.ngOnChanges = function (_a) {
        var fields = _a.fields;
        if (fields && !fields.firstChange) {
            this.filters$.next(this.getSavedFilters());
        }
    };
    FiltersComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    FiltersComponent.prototype.addFilter = function (field) {
        var filter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, field, { selected: null, items: [] });
        this.filters$.next(this.filters$.value.concat([filter]));
        this.saveFilters();
    };
    /**
     * Reloads all filters that goes after current.
     * @param index Index of changed filter.
     * @param selected New filter value.
     */
    FiltersComponent.prototype.onFilterChange = function (index, selected, field) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.currentFilters[field.bindingName] = selected;
                this.changed.emit(this.currentFilters);
                return [2 /*return*/];
            });
        });
    };
    FiltersComponent.prototype.removeFilter = function (index, field) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onFilterChange(index, null, field)];
                    case 1:
                        _a.sent();
                        this.currentFilters[field.bindingName] = null;
                        this.filters$.value.splice(index, 1);
                        this.filters$.next(this.filters$.value.slice());
                        this.saveFilters();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** @description Shows dialog for managing filters. */
    FiltersComponent.prototype.manageFilter = function () {
        var _this = this;
        var manageFiltersDialog = this.dialogService.open(src_app_shared_components__WEBPACK_IMPORTED_MODULE_5__["ManageFiltersComponent"]);
        manageFiltersDialog.config = {
            filters: this.filters$.value,
            fields: this.fields
        };
        manageFiltersDialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return manageFiltersDialog.component.change; })).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var filters, index;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                filters = res;
                this.filters$.value.filter(function (f) { return !filters.map(function (_a) {
                    var bindingName = _a.bindingName;
                    return bindingName;
                }).includes(f.bindingName); }).forEach(function (_a) {
                    var bindingName = _a.bindingName;
                    _this.currentFilters[bindingName] = null;
                });
                index = this.filters$.value.findIndex(function (f, i) { return !filters[i] || f.bindingName !== filters[i].bindingName; });
                if (index !== -1 || filters.length !== this.filters$.value.length) {
                    this.changed.emit(this.currentFilters);
                }
                this.filters$.next(filters);
                this.saveFilters();
                return [2 /*return*/];
            });
        }); });
    };
    Object.defineProperty(FiltersComponent.prototype, "filtersKey", {
        get: function () {
            return "db-table-filters-" + this.dataObject.objectOwner + "-" + this.dataObject.objectName;
        },
        enumerable: true,
        configurable: true
    });
    FiltersComponent.prototype.saveFilters = function () {
        var filters = this.filters$.value.map(function (f) { return f.bindingName; });
        if (filters.length) {
            localStorage.setItem(this.filtersKey, JSON.stringify(filters));
        }
        else {
            localStorage.removeItem(this.filtersKey);
        }
    };
    FiltersComponent.prototype.getSavedFilters = function () {
        var _this = this;
        try {
            var filters = localStorage.getItem(this.filtersKey);
            if (filters) {
                var bindings = JSON.parse(filters);
                return bindings.map(function (binding) {
                    var field = _this.fields.find(function (f) { return f.bindingName === binding; });
                    if (field) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, field, { selected: null, items: [] });
                    }
                }).filter(function (f) { return f; });
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    FiltersComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FiltersComponent.prototype, "fields", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "currentFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FiltersComponent.prototype, "connection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "dataObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FiltersComponent.prototype, "defaultFilters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "changed", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/shared/components/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebar = true;
    }
    HeaderComponent.prototype.onToggleClick = function () {
        this.sidebar = !this.sidebar;
        this.toggleSidebar.emit(this.sidebar);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "smIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidebar", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: ContentExplorerComponent, DynamicModalComponent, ListViewComponent, PageInfoComponent, ManageFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-explorer/content-explorer.component */ "./src/app/shared/components/content-explorer/content-explorer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentExplorerComponent", function() { return _content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_0__["ContentExplorerComponent"]; });

/* harmony import */ var _dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-modal/dynamic-modal.component */ "./src/app/shared/components/dynamic-modal/dynamic-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicModalComponent", function() { return _dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_1__["DynamicModalComponent"]; });

/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/shared/components/list-view/list-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_2__["ListViewComponent"]; });

/* harmony import */ var _page_info_page_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-info/page-info.component */ "./src/app/shared/components/page-info/page-info.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageInfoComponent", function() { return _page_info_page_info_component__WEBPACK_IMPORTED_MODULE_3__["PageInfoComponent"]; });

/* harmony import */ var _manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-filters/manage-filters.component */ "./src/app/shared/components/manage-filters/manage-filters.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageFiltersComponent", function() { return _manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_4__["ManageFiltersComponent"]; });








/***/ }),

/***/ "./src/app/shared/components/json-preview/json-preview.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/json-preview/json-preview.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2pzb24tcHJldmlldy9qc29uLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/json-preview/json-preview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/json-preview/json-preview.component.ts ***!
  \**************************************************************************/
/*! exports provided: JsonPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPreviewComponent", function() { return JsonPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils.ts");




var JsonPreviewComponent = /** @class */ (function () {
    function JsonPreviewComponent() {
    }
    JsonPreviewComponent.prototype.ngOnInit = function () {
        this.jsonEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.jsonEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(this.data),
            readOnly: true
        });
    };
    JsonPreviewComponent.prototype.ngOnChanges = function (_a) {
        var data = _a.data;
        if (!data.firstChange && data.currentValue) {
            this.jsonEditor.setValue(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(this.data));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JsonPreviewComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('json', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], JsonPreviewComponent.prototype, "jsonEl", void 0);
    JsonPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-json-preview',
            template: __webpack_require__(/*! raw-loader!./json-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/json-preview/json-preview.component.html"),
            styles: [__webpack_require__(/*! ./json-preview.component.scss */ "./src/app/shared/components/json-preview/json-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JsonPreviewComponent);
    return JsonPreviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n  max-height: 100%;\n}\n\napp-sidebar a {\n  cursor: pointer;\n}\n\napp-environment {\n  -webkit-box-flex: 0;\n          flex: 0;\n  width: 100%;\n}\n\napp-header > ::ng-deep .top-sub-header {\n  font-size: 19px;\n  color: #2f353a;\n  font-weight: 600;\n  font-family: \"Calibri\";\n}\n\napp-header > ::ng-deep h2 span {\n  color: #386b99;\n  font-weight: 900;\n}\n\n.app-body.collapsed > ::ng-deep .as-split-gutter {\n  display: none;\n}\n\n.app-body.as-horizontal.as-init > ::ng-deep .as-split-gutter {\n  height: auto;\n}\n\nfooter {\n  -webkit-box-flex: 0;\n          flex: 0 0 25px;\n  color: #23282c;\n  background: #f0f3f5;\n  border-top: 1px solid #c8ced3;\n}\n\n@media (max-width: 991.98px) {\n  app-header > ::ng-deep .top-sub-header {\n    font-size: 15px;\n    width: 40%;\n  }\n\n  app-nav {\n    width: 25%;\n  }\n\n  .app-body.collapsed > .content {\n    -webkit-box-flex: 0 !important;\n            flex: 0 0 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9zcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNjc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRElFO0VBQ0UsZUFBQTtFQUNBLGNFUlE7RUZTUixnQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGNFNUJVO0VGNkJWLG1CRXJDVTtFRnNDViw2QkFBQTtBQ0hGOztBRWlDSTtFSDFCRjtJQUNFLGVBQUE7SUFDQSxVQUFBO0VDSEY7O0VETUE7SUFDRSxVQUFBO0VDSEY7O0VETUE7SUFDRSw4QkFBQTtZQUFBLHlCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy9jb3JldWkvdmFyaWFibGVzL19jb2xvcnMuc2Nzc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvbWVkaWFcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5hcHAtc2lkZWJhciBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hcHAtZW52aXJvbm1lbnQge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYXBwLWhlYWRlciA+IDo6bmctZGVlcCB7XG4gIC50b3Atc3ViLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogXCJDYWxpYnJpXCI7XG4gIH1cblxuICBoMiBzcGFuIHtcbiAgICBjb2xvcjogIzM4NmI5OTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICB9XG59XG5cbi5hcHAtYm9keS5jb2xsYXBzZWQgPiA6Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcHAtYm9keS5hcy1ob3Jpem9udGFsLmFzLWluaXQgPiA6Om5nLWRlZXAgLmFzLXNwbGl0LWd1dHRlciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuZm9vdGVyIHtcbiAgZmxleDogMCAwIDI1cHg7XG4gIGNvbG9yOiAkZ3JheS05MDA7XG4gIGJhY2tncm91bmQ6ICRncmF5LTEwMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmF5LTMwMDtcbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gIGFwcC1oZWFkZXIgPiA6Om5nLWRlZXAgLnRvcC1zdWItaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIGFwcC1uYXYge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuYXBwLWJvZHkuY29sbGFwc2VkID4gLmNvbnRlbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbmFwcC1zaWRlYmFyIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFwcC1lbnZpcm9ubWVudCB7XG4gIGZsZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtaGVhZGVyID4gOjpuZy1kZWVwIC50b3Atc3ViLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICMyZjM1M2E7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmlcIjtcbn1cbmFwcC1oZWFkZXIgPiA6Om5nLWRlZXAgaDIgc3BhbiB7XG4gIGNvbG9yOiAjMzg2Yjk5O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uYXBwLWJvZHkuY29sbGFwc2VkID4gOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXBwLWJvZHkuYXMtaG9yaXpvbnRhbC5hcy1pbml0ID4gOjpuZy1kZWVwIC5hcy1zcGxpdC1ndXR0ZXIge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmZvb3RlciB7XG4gIGZsZXg6IDAgMCAyNXB4O1xuICBjb2xvcjogIzIzMjgyYztcbiAgYmFja2dyb3VuZDogI2YwZjNmNTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjOGNlZDM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICBhcHAtaGVhZGVyID4gOjpuZy1kZWVwIC50b3Atc3ViLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cblxuICBhcHAtbmF2IHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLmFwcC1ib2R5LmNvbGxhcHNlZCA+IC5jb250ZW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gQ29sb3Igc3lzdGVtXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcblxyXG4kd2hpdGU6ICAgICAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS1iYXNlOiAjMTgxYjFlICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAjZjBmM2Y1ICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDg1JSk7XHJcbiRncmF5LTIwMDogICNlNGU3ZWEgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODAlKTtcclxuJGdyYXktMzAwOiAgI2M4Y2VkMyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA3MCUpO1xyXG4kZ3JheS00MDA6ICAjYWNiNGJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDYwJSk7XHJcbiRncmF5LTUwMDogICM4ZjliYTYgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNTAlKTtcclxuJGdyYXktNjAwOiAgIzczODE4ZiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA0MCUpO1xyXG4kZ3JheS03MDA6ICAjNWM2ODczICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDMwJSk7XHJcbiRncmF5LTgwMDogICMyZjM1M2EgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTAlKTtcclxuJGdyYXktOTAwOiAgIzIzMjgyYyAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1JSk7XHJcbiRibGFjazogICAgICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICAgICAgICMyMGE4ZDggIWRlZmF1bHQ7XHJcbiRpbmRpZ286ICAgICAjNjYxMGYyICFkZWZhdWx0O1xyXG4kcHVycGxlOiAgICAgIzZmNDJjMSAhZGVmYXVsdDtcclxuJHBpbms6ICAgICAgICNlODNlOGMgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAjZjg2YzZiICFkZWZhdWx0O1xyXG4kb3JhbmdlOiAgICAgI2Y4Y2IwMCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICNmZmMxMDcgIWRlZmF1bHQ7XHJcbiRncmVlbjogICAgICAjNGRiZDc0ICFkZWZhdWx0O1xyXG4kdGVhbDogICAgICAgIzIwYzk5NyAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICMxN2EyYjggIWRlZmF1bHQ7XHJcbiRsaWdodC1ibHVlOiAjNjNjMmRlICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRjb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXHJcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcclxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxyXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxyXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXHJcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcclxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcclxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcclxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcclxuICAgIFwibGlnaHQtYmx1ZVwiOiAkbGlnaHQtYmx1ZSxcclxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXHJcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxyXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxyXG4gICksXHJcbiAgJGNvbG9yc1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgJGxpZ2h0LWJsdWUgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcclxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIEJyYW5kIENvbG9yc1xyXG5cclxuJGZhY2Vib29rOiAgICAgICAjM2I1OTk4ICFkZWZhdWx0O1xyXG4kdHdpdHRlcjogICAgICAgICMwMGFjZWQgIWRlZmF1bHQ7XHJcbiRsaW5rZWRpbjogICAgICAgIzQ4NzViNCAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjZDM0ODM2ICFkZWZhdWx0O1xyXG4kZmxpY2tyOiAgICAgICAgICNmZjAwODQgIWRlZmF1bHQ7XHJcbiR0dW1ibHI6ICAgICAgICAgIzMyNTA2ZCAhZGVmYXVsdDtcclxuJHhpbmc6ICAgICAgICAgICAjMDI2NDY2ICFkZWZhdWx0O1xyXG4kZ2l0aHViOiAgICAgICAgICM0MTgzYzQgIWRlZmF1bHQ7XHJcbiRodG1sNTogICAgICAgICAgI2UzNGYyNiAhZGVmYXVsdDtcclxuJG9wZW5pZDogICAgICAgICAjZjc4YzQwICFkZWZhdWx0O1xyXG4kc3RhY2stb3ZlcmZsb3c6ICNmZTdhMTUgIWRlZmF1bHQ7XHJcbiR5b3V0dWJlOiAgICAgICAgI2IwMCAhZGVmYXVsdDtcclxuJGNzczM6ICAgICAgICAgICAjMDE3MGJhICFkZWZhdWx0O1xyXG4kZHJpYmJibGU6ICAgICAgICNlYTRjODkgIWRlZmF1bHQ7XHJcbiRnb29nbGUtcGx1czogICAgI2JiNGIzOSAhZGVmYXVsdDtcclxuJGluc3RhZ3JhbTogICAgICAjNTE3ZmE0ICFkZWZhdWx0O1xyXG4kcGludGVyZXN0OiAgICAgICNjYjIwMjcgIWRlZmF1bHQ7XHJcbiR2azogICAgICAgICAgICAgIzQ1NjY4ZSAhZGVmYXVsdDtcclxuJHlhaG9vOiAgICAgICAgICAjNDAwMTkxICFkZWZhdWx0O1xyXG4kYmVoYW5jZTogICAgICAgICMxNzY5ZmYgIWRlZmF1bHQ7XHJcbiRkcm9wYm94OiAgICAgICAgIzAwN2VlNSAhZGVmYXVsdDtcclxuJHJlZGRpdDogICAgICAgICAjZmY0NTAwICFkZWZhdWx0O1xyXG4kc3BvdGlmeTogICAgICAgICM3YWI4MDAgIWRlZmF1bHQ7XHJcbiR2aW5lOiAgICAgICAgICAgIzAwYmY4ZiAhZGVmYXVsdDtcclxuJGZvdXJzcXVhcmU6ICAgICAjMTA3M2FmICFkZWZhdWx0O1xyXG4kdmltZW86ICAgICAgICAgICNhYWQ0NTAgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmRzLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiRicmFuZHMtY29sb3JzOiBtYXAtbWVyZ2UoKFxyXG4gIFwiZmFjZWJvb2tcIjogICAgICAgJGZhY2Vib29rLFxyXG4gIFwidHdpdHRlclwiOiAgICAgICAgJHR3aXR0ZXIsXHJcbiAgXCJsaW5rZWRpblwiOiAgICAgICAkbGlua2VkaW4sXHJcbiAgXCJnb29nbGUtcGx1c1wiOiAgICAkZ29vZ2xlLXBsdXMsXHJcbiAgXCJmbGlja3JcIjogICAgICAgICAkZmxpY2tyLFxyXG4gIFwidHVtYmxyXCI6ICAgICAgICAgJHR1bWJscixcclxuICBcInhpbmdcIjogICAgICAgICAgICR4aW5nLFxyXG4gIFwiZ2l0aHViXCI6ICAgICAgICAgJGdpdGh1YixcclxuICBcImh0bWw1XCI6ICAgICAgICAgICRodG1sNSxcclxuICBcIm9wZW5pZFwiOiAgICAgICAgICRvcGVuaWQsXHJcbiAgXCJzdGFjay1vdmVyZmxvd1wiOiAkc3RhY2stb3ZlcmZsb3csXHJcbiAgXCJ5b3V0dWJlXCI6ICAgICAgICAkeW91dHViZSxcclxuICBcImNzczNcIjogICAgICAgICAgICRjc3MzLFxyXG4gIFwiZHJpYmJibGVcIjogICAgICAgJGRyaWJiYmxlLFxyXG4gIFwiaW5zdGFncmFtXCI6ICAgICAgJGluc3RhZ3JhbSxcclxuICBcInBpbnRlcmVzdFwiOiAgICAgICRwaW50ZXJlc3QsXHJcbiAgXCJ2a1wiOiAgICAgICAgICAgICAkdmssXHJcbiAgXCJ5YWhvb1wiOiAgICAgICAgICAkeWFob28sXHJcbiAgXCJiZWhhbmNlXCI6ICAgICAgICAkYmVoYW5jZSxcclxuICBcImRyb3Bib3hcIjogICAgICAgICRkcm9wYm94LFxyXG4gIFwicmVkZGl0XCI6ICAgICAgICAgJHJlZGRpdCxcclxuICBcInNwb3RpZnlcIjogICAgICAgICRzcG90aWZ5LFxyXG4gIFwidmluZVwiOiAgICAgICAgICAgJHZpbmUsXHJcbiAgXCJmb3Vyc3F1YXJlXCI6ICAgICAkZm91cnNxdWFyZSxcclxuICBcInZpbWVvXCI6ICAgICAgICAgICR2aW1lb1xyXG4pLCAkYnJhbmRzLWNvbG9ycyk7XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_local_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-settings.service */ "./src/app/shared/services/local-settings.service.ts");





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(deviceService, localSettings) {
        this.deviceService = deviceService;
        this.localSettings = localSettings;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
        this.collapsed = false;
        this.unit = 'pixel';
        this.contentSize = '*';
        this.size = 350;
    }
    Object.defineProperty(LayoutComponent.prototype, "sidebarSize", {
        get: function () {
            return this.collapsed ? 0 : this.size;
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.prototype.ngOnInit = function () {
        if (this.config.hasOwnProperty('collapsed')) {
            this.collapsed = this.config.collapsed;
        }
        var openedSidebar = this.localSettings.getSidebar(this.config.appName);
        if (typeof openedSidebar === 'boolean') {
            this.collapsed = !openedSidebar;
        }
        this.initMobile();
    };
    LayoutComponent.prototype.onToggleSidebar = function () {
        this.collapsed = !this.collapsed;
        this.handleToggleMobile();
        this.localSettings.setSidebar(this.config.appName, !this.collapsed);
    };
    LayoutComponent.prototype.initMobile = function () {
        if (this.deviceService.isMobile()) {
            this.collapsed = true;
            this.size = 100;
            this.contentSize = 100;
            this.unit = 'percent';
        }
    };
    LayoutComponent.prototype.handleToggleMobile = function () {
        if (this.deviceService.isMobile()) {
            this.contentSize = this.collapsed ? 100 : 0;
        }
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"] },
        { type: _services_local_settings_service__WEBPACK_IMPORTED_MODULE_4__["LocalSettingsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayoutComponent.prototype, "config", void 0);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/shared/components/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"], _services_local_settings_service__WEBPACK_IMPORTED_MODULE_4__["LocalSettingsService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/list-view/list-view.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/list-view/list-view.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #e4e7ea;\n  border-radius: 4px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nul li {\n  list-style: none;\n}\n\nul li.active {\n  background: #c8ced3;\n  color: #23282c;\n}\n\n.no-group-list {\n  background: #fff;\n}\n\naccordion-group ::ng-deep .panel.card {\n  border: none;\n  margin-bottom: 0;\n}\n\naccordion-group ::ng-deep .panel-heading {\n  padding: 0.25rem;\n  cursor: pointer;\n}\n\naccordion-group ::ng-deep .panel-body.card-block.card-body {\n  padding: 0;\n}\n\naccordion-group ::ng-deep [aria-expanded=false] .fa-chevron-down {\n  display: none;\n}\n\naccordion-group ::ng-deep [aria-expanded=true] .fa-chevron-right {\n  display: none;\n}\n\n.fa-chevron-right {\n  width: 14px;\n}\n\n.search-input {\n  height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmt1a3VyYmEvRGV2ZWxvcG1lbnQvUHJvamVjdHMvdXB3b3JrL3dvcmtzaGVldHMyLWFwcC9zcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0RGOztBREtFO0VBQ0UsZ0JBQUE7QUNGSjs7QURJSTtFQUNFLG1CRU5NO0VGT04sY0VETTtBRERaOztBRE9BO0VBQ0UsZ0JFakJVO0FEYVo7O0FEUUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ05KOztBRFNFO0VBQ0UsVUFBQTtBQ1BKOztBRFVFO0VBQ0UsYUFBQTtBQ1JKOztBRFdFO0VBQ0UsYUFBQTtBQ1RKOztBRGFBO0VBQ0UsV0FBQTtBQ1ZGOztBRGFBO0VBQ0UsWUFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2NvcmV1aS92YXJpYWJsZXMvX2NvbG9ycy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktMjAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnVsIHtcbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0zMDA7XG4gICAgICBjb2xvcjogJGdyYXktOTAwO1xuICAgIH1cbiAgfVxufVxuXG4ubm8tZ3JvdXAtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbn1cblxuYWNjb3JkaW9uLWdyb3VwIDo6bmctZGVlcCB7XG4gIC5wYW5lbC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAuMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnBhbmVsLWJvZHkuY2FyZC1ibG9jay5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdIC5mYS1jaGV2cm9uLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBbYXJpYS1leHBhbmRlZD1cInRydWVcIl0gLmZhLWNoZXZyb24tcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmZhLWNoZXZyb24tcmlnaHQge1xuICB3aWR0aDogMTRweDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGhlaWdodDogMjFweDtcbn1cbiIsIjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzhjZWQzO1xuICBjb2xvcjogIzIzMjgyYztcbn1cblxuLm5vLWdyb3VwLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hY2NvcmRpb24tZ3JvdXAgOjpuZy1kZWVwIC5wYW5lbC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuYWNjb3JkaW9uLWdyb3VwIDo6bmctZGVlcCAucGFuZWwtaGVhZGluZyB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmFjY29yZGlvbi1ncm91cCA6Om5nLWRlZXAgLnBhbmVsLWJvZHkuY2FyZC1ibG9jay5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuYWNjb3JkaW9uLWdyb3VwIDo6bmctZGVlcCBbYXJpYS1leHBhbmRlZD1mYWxzZV0gLmZhLWNoZXZyb24tZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hY2NvcmRpb24tZ3JvdXAgOjpuZy1kZWVwIFthcmlhLWV4cGFuZGVkPXRydWVdIC5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZhLWNoZXZyb24tcmlnaHQge1xuICB3aWR0aDogMTRweDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGhlaWdodDogMjFweDtcbn0iLCIvLyBDb2xvciBzeXN0ZW1cclxuLy8gc3R5bGVsaW50LWRpc2FibGVcclxuXHJcbiR3aGl0ZTogICAgICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LWJhc2U6ICMxODFiMWUgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICNmMGYzZjUgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgODUlKTtcclxuJGdyYXktMjAwOiAgI2U0ZTdlYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA4MCUpO1xyXG4kZ3JheS0zMDA6ICAjYzhjZWQzICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDcwJSk7XHJcbiRncmF5LTQwMDogICNhY2I0YmMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNjAlKTtcclxuJGdyYXktNTAwOiAgIzhmOWJhNiAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCA1MCUpO1xyXG4kZ3JheS02MDA6ICAjNzM4MThmICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDQwJSk7XHJcbiRncmF5LTcwMDogICM1YzY4NzMgIWRlZmF1bHQ7IC8vIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzAlKTtcclxuJGdyYXktODAwOiAgIzJmMzUzYSAhZGVmYXVsdDsgLy8gbGlnaHRlbigkZ3JheS1iYXNlLCAxMCUpO1xyXG4kZ3JheS05MDA6ICAjMjMyODJjICFkZWZhdWx0OyAvLyBsaWdodGVuKCRncmF5LWJhc2UsIDUlKTtcclxuJGJsYWNrOiAgICAgIzAwMCAhZGVmYXVsdDtcclxuXHJcbiRncmF5czogKCkgIWRlZmF1bHQ7XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcclxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcclxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcclxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcclxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogICAgICAgIzIwYThkOCAhZGVmYXVsdDtcclxuJGluZGlnbzogICAgICM2NjEwZjIgIWRlZmF1bHQ7XHJcbiRwdXJwbGU6ICAgICAjNmY0MmMxICFkZWZhdWx0O1xyXG4kcGluazogICAgICAgI2U4M2U4YyAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICNmODZjNmIgIWRlZmF1bHQ7XHJcbiRvcmFuZ2U6ICAgICAjZjhjYjAwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgI2ZmYzEwNyAhZGVmYXVsdDtcclxuJGdyZWVuOiAgICAgICM0ZGJkNzQgIWRlZmF1bHQ7XHJcbiR0ZWFsOiAgICAgICAjMjBjOTk3ICFkZWZhdWx0O1xyXG4kY3lhbjogICAgICAgIzE3YTJiOCAhZGVmYXVsdDtcclxuJGxpZ2h0LWJsdWU6ICM2M2MyZGUgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcclxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxyXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXHJcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXHJcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcclxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxyXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXHJcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxyXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxyXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxyXG4gICAgXCJsaWdodC1ibHVlXCI6ICRsaWdodC1ibHVlLFxyXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcclxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXHJcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAgICAkbGlnaHQtYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXHJcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxyXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xyXG4gICksXHJcbiAgJHRoZW1lLWNvbG9yc1xyXG4pO1xyXG5cclxuLy8gQnJhbmQgQ29sb3JzXHJcblxyXG4kZmFjZWJvb2s6ICAgICAgICMzYjU5OTggIWRlZmF1bHQ7XHJcbiR0d2l0dGVyOiAgICAgICAgIzAwYWNlZCAhZGVmYXVsdDtcclxuJGxpbmtlZGluOiAgICAgICAjNDg3NWI0ICFkZWZhdWx0O1xyXG4kZ29vZ2xlLXBsdXM6ICAgICNkMzQ4MzYgIWRlZmF1bHQ7XHJcbiRmbGlja3I6ICAgICAgICAgI2ZmMDA4NCAhZGVmYXVsdDtcclxuJHR1bWJscjogICAgICAgICAjMzI1MDZkICFkZWZhdWx0O1xyXG4keGluZzogICAgICAgICAgICMwMjY0NjYgIWRlZmF1bHQ7XHJcbiRnaXRodWI6ICAgICAgICAgIzQxODNjNCAhZGVmYXVsdDtcclxuJGh0bWw1OiAgICAgICAgICAjZTM0ZjI2ICFkZWZhdWx0O1xyXG4kb3BlbmlkOiAgICAgICAgICNmNzhjNDAgIWRlZmF1bHQ7XHJcbiRzdGFjay1vdmVyZmxvdzogI2ZlN2ExNSAhZGVmYXVsdDtcclxuJHlvdXR1YmU6ICAgICAgICAjYjAwICFkZWZhdWx0O1xyXG4kY3NzMzogICAgICAgICAgICMwMTcwYmEgIWRlZmF1bHQ7XHJcbiRkcmliYmJsZTogICAgICAgI2VhNGM4OSAhZGVmYXVsdDtcclxuJGdvb2dsZS1wbHVzOiAgICAjYmI0YjM5ICFkZWZhdWx0O1xyXG4kaW5zdGFncmFtOiAgICAgICM1MTdmYTQgIWRlZmF1bHQ7XHJcbiRwaW50ZXJlc3Q6ICAgICAgI2NiMjAyNyAhZGVmYXVsdDtcclxuJHZrOiAgICAgICAgICAgICAjNDU2NjhlICFkZWZhdWx0O1xyXG4keWFob286ICAgICAgICAgICM0MDAxOTEgIWRlZmF1bHQ7XHJcbiRiZWhhbmNlOiAgICAgICAgIzE3NjlmZiAhZGVmYXVsdDtcclxuJGRyb3Bib3g6ICAgICAgICAjMDA3ZWU1ICFkZWZhdWx0O1xyXG4kcmVkZGl0OiAgICAgICAgICNmZjQ1MDAgIWRlZmF1bHQ7XHJcbiRzcG90aWZ5OiAgICAgICAgIzdhYjgwMCAhZGVmYXVsdDtcclxuJHZpbmU6ICAgICAgICAgICAjMDBiZjhmICFkZWZhdWx0O1xyXG4kZm91cnNxdWFyZTogICAgICMxMDczYWYgIWRlZmF1bHQ7XHJcbiR2aW1lbzogICAgICAgICAgI2FhZDQ1MCAhZGVmYXVsdDtcclxuXHJcbiRicmFuZHMtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuJGJyYW5kcy1jb2xvcnM6IG1hcC1tZXJnZSgoXHJcbiAgXCJmYWNlYm9va1wiOiAgICAgICAkZmFjZWJvb2ssXHJcbiAgXCJ0d2l0dGVyXCI6ICAgICAgICAkdHdpdHRlcixcclxuICBcImxpbmtlZGluXCI6ICAgICAgICRsaW5rZWRpbixcclxuICBcImdvb2dsZS1wbHVzXCI6ICAgICRnb29nbGUtcGx1cyxcclxuICBcImZsaWNrclwiOiAgICAgICAgICRmbGlja3IsXHJcbiAgXCJ0dW1ibHJcIjogICAgICAgICAkdHVtYmxyLFxyXG4gIFwieGluZ1wiOiAgICAgICAgICAgJHhpbmcsXHJcbiAgXCJnaXRodWJcIjogICAgICAgICAkZ2l0aHViLFxyXG4gIFwiaHRtbDVcIjogICAgICAgICAgJGh0bWw1LFxyXG4gIFwib3BlbmlkXCI6ICAgICAgICAgJG9wZW5pZCxcclxuICBcInN0YWNrLW92ZXJmbG93XCI6ICRzdGFjay1vdmVyZmxvdyxcclxuICBcInlvdXR1YmVcIjogICAgICAgICR5b3V0dWJlLFxyXG4gIFwiY3NzM1wiOiAgICAgICAgICAgJGNzczMsXHJcbiAgXCJkcmliYmJsZVwiOiAgICAgICAkZHJpYmJibGUsXHJcbiAgXCJpbnN0YWdyYW1cIjogICAgICAkaW5zdGFncmFtLFxyXG4gIFwicGludGVyZXN0XCI6ICAgICAgJHBpbnRlcmVzdCxcclxuICBcInZrXCI6ICAgICAgICAgICAgICR2ayxcclxuICBcInlhaG9vXCI6ICAgICAgICAgICR5YWhvbyxcclxuICBcImJlaGFuY2VcIjogICAgICAgICRiZWhhbmNlLFxyXG4gIFwiZHJvcGJveFwiOiAgICAgICAgJGRyb3Bib3gsXHJcbiAgXCJyZWRkaXRcIjogICAgICAgICAkcmVkZGl0LFxyXG4gIFwic3BvdGlmeVwiOiAgICAgICAgJHNwb3RpZnksXHJcbiAgXCJ2aW5lXCI6ICAgICAgICAgICAkdmluZSxcclxuICBcImZvdXJzcXVhcmVcIjogICAgICRmb3Vyc3F1YXJlLFxyXG4gIFwidmltZW9cIjogICAgICAgICAgJHZpbWVvXHJcbiksICRicmFuZHMtY29sb3JzKTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/list-view/list-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/list-view/list-view.component.ts ***!
  \********************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListViewComponent = /** @class */ (function () {
    function ListViewComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groups = [];
        this.noGroupList = [];
        this.searchState = {};
    }
    ListViewComponent.prototype.ngOnInit = function () {
        this.selectedItem = this.selected;
        this.orderList();
        this.groups = this.getGroups();
    };
    ListViewComponent.prototype.ngOnChanges = function (_a) {
        var group = _a.group, list = _a.list;
        if (group && group.previousValue !== group.currentValue && group.currentValue) {
            this.groups = this.getGroups();
        }
        if (list && list.previousValue !== list.currentValue && !list.firstChange) {
            this.orderList();
            this.groups = this.getGroups();
        }
    };
    ListViewComponent.prototype.isActive = function (item) {
        if (this.comparator) {
            return this.comparator(this.selectedItem, item);
        }
        if (this.selectedItem && this.selectedItem.id) {
            return item.id === this.selectedItem.id;
        }
        return item === this.selectedItem;
    };
    ListViewComponent.prototype.onSearch = function (groupValue, evt) {
        var _this = this;
        var searchStr = evt.target.value.toLowerCase();
        this.searchState[groupValue] = searchStr;
        evt.stopPropagation();
        var group = this.groups.find(function (g) { return g.value === groupValue; });
        group.filteredList = group.list.filter(function (i) {
            if (typeof _this.searchFn === 'function') {
                return _this.searchFn(searchStr, i);
            }
            return Object.values(i).join('').toLowerCase().includes(searchStr);
        });
    };
    ListViewComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
    };
    ListViewComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        this.select.emit(item);
    };
    ListViewComponent.prototype.onSearchState = function (prop, evt) {
        this.activeSearch = prop;
        evt.stopPropagation();
    };
    ListViewComponent.prototype.orderList = function () {
        var _this = this;
        if (this.orderBy && this.list) {
            this.list.sort(function (a, b) {
                if (typeof _this.orderBy === 'string') {
                    return _this.getValue(_this.orderBy, b) - _this.getValue(_this.orderBy, a);
                }
                if (_this.orderBy.type === 'date') {
                    return new Date(_this.getValue(_this.orderBy.key, b)).getTime() -
                        new Date(_this.getValue(_this.orderBy.key, a)).getTime();
                }
            });
        }
    };
    ListViewComponent.prototype.getGroups = function () {
        var _this = this;
        if (this.group && this.list) {
            var groups_1 = {};
            this.noGroupList = [];
            this.list.forEach(function (item) {
                var groupValue = _this.getValue(_this.group, item);
                if (groupValue) {
                    if (!groups_1[groupValue]) {
                        groups_1[groupValue] = { value: groupValue, list: [] };
                        groups_1[groupValue].filteredList = groups_1[groupValue].list;
                    }
                    groups_1[groupValue].list.push(item);
                }
                else {
                    _this.noGroupList.push(item);
                }
            });
            return Object.values(groups_1);
        }
        return [];
    };
    ListViewComponent.prototype.getValue = function (prop, item) {
        if (typeof prop === 'function') {
            return prop(item);
        }
        var subProps = prop.split('.');
        return subProps.reduce(function (prev, k) {
            return prev[k];
        }, item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListViewComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListViewComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListViewComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListViewComponent.prototype, "orderBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ListViewComponent.prototype, "comparator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ListViewComponent.prototype, "searchFn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ListViewComponent.prototype, "itemTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('icon', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ListViewComponent.prototype, "iconTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListViewComponent.prototype, "select", void 0);
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/list-view/list-view.component.html"),
            styles: [__webpack_require__(/*! ./list-view.component.scss */ "./src/app/shared/components/list-view/list-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/manage-filters/manage-filters.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/manage-filters/manage-filters.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-arrows {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n/* in-flight clone */\n\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none;\n}\n\n/* high-performance display:none; helper */\n\n.gu-hide {\n  left: -9999px !important;\n}\n\n/* added to mirrorContainer (default = body) while dragging */\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n\n/* added to the source element while its mirror is dragged */\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYW5hZ2UtZmlsdGVycy9tYW5hZ2UtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFuYWdlLWZpbHRlcnMvbWFuYWdlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLFlBQUE7QUNDRjs7QURFQSxvQkFBQTs7QUFDQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQSwwQ0FBQTs7QUFDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQUEsNkRBQUE7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQ0dGOztBRERBLDREQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGlFQUFBO0VBQ0EseUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21hbmFnZS1maWx0ZXJzL21hbmFnZS1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWFycm93cyB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLyogaW4tZmxpZ2h0IGNsb25lICovXG4uZ3UtbWlycm9yIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuODtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4vKiBoaWdoLXBlcmZvcm1hbmNlIGRpc3BsYXk6bm9uZTsgaGVscGVyICovXG4uZ3UtaGlkZSB7XG4gIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcbn1cbi8qIGFkZGVkIHRvIG1pcnJvckNvbnRhaW5lciAoZGVmYXVsdCA9IGJvZHkpIHdoaWxlIGRyYWdnaW5nICovXG4uZ3UtdW5zZWxlY3RhYmxlIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xuLmd1LXRyYW5zaXQge1xuICBvcGFjaXR5OiAwLjI7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XG59XG4iLCIuZmEtYXJyb3dzIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4vKiBpbi1mbGlnaHQgY2xvbmUgKi9cbi5ndS1taXJyb3Ige1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC44O1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVwiO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xuLmd1LWhpZGUge1xuICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIGFkZGVkIHRvIG1pcnJvckNvbnRhaW5lciAoZGVmYXVsdCA9IGJvZHkpIHdoaWxlIGRyYWdnaW5nICovXG4uZ3UtdW5zZWxlY3RhYmxlIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBhZGRlZCB0byB0aGUgc291cmNlIGVsZW1lbnQgd2hpbGUgaXRzIG1pcnJvciBpcyBkcmFnZ2VkICovXG4uZ3UtdHJhbnNpdCB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcIjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/manage-filters/manage-filters.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/manage-filters/manage-filters.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFiltersComponent", function() { return ManageFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");




var ManageFiltersComponent = /** @class */ (function () {
    function ManageFiltersComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        dragulaService.createGroup('filters', {
            moves: function (el, container, handle) {
                return handle.classList.contains('handle');
            }
        });
    }
    ManageFiltersComponent.prototype.ngOnInit = function () {
        this.filters = this.config.filters.slice();
        this.setFields();
    };
    ManageFiltersComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('filters');
    };
    ManageFiltersComponent.prototype.onApply = function () {
        this.change.emit(this.filters);
        this.modalRef.hide();
    };
    ManageFiltersComponent.prototype.addFilter = function (field) {
        this.filters.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, field, { selected: null, items: [] }));
        this.setFields();
    };
    ManageFiltersComponent.prototype.removeFilter = function (index) {
        this.filters.splice(index, 1);
    };
    ManageFiltersComponent.prototype.setFields = function () {
        var selected = this.filters.map(function (f) { return f.bindingName; });
        this.fields = this.config.fields.filter(function (f) {
            return !selected.includes(f.bindingName);
        });
    };
    ManageFiltersComponent.ctorParameters = function () { return [
        { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ManageFiltersComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageFiltersComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageFiltersComponent.prototype, "change", void 0);
    ManageFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-filters',
            template: __webpack_require__(/*! raw-loader!./manage-filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/manage-filters/manage-filters.component.html"),
            styles: [__webpack_require__(/*! ./manage-filters.component.scss */ "./src/app/shared/components/manage-filters/manage-filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaService"]])
    ], ManageFiltersComponent);
    return ManageFiltersComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/services/auth.service */ "./src/app/security/services/auth.service.ts");
/* harmony import */ var src_app_security_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security/services/login.service */ "./src/app/security/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, loginService) {
        this.authService = authService;
        this.router = router;
        this.loginService = loginService;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy)).subscribe(function (val) {
            _this.isAuthenticated = val;
        });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
    };
    NavComponent.prototype.onLogin = function () {
        this.loginService.openDialog();
    };
    NavComponent.prototype.onLogout = function () {
        this.authService.logout();
        if (this.logoutRedirect !== false) {
            this.router.navigate([this.logoutRedirect ? this.logoutRedirect : '/']);
        }
    };
    NavComponent.ctorParameters = function () { return [
        { type: src_app_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_security_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "logoutRedirect", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: "\n    <ng-content></ng-content>\n    <ul class=\"nav navbar-nav mr-2\">\n      <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\" *ngIf=\"isAuthenticated\">\n        <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n           aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n          <img *ngIf=\"authService.user.avatar; else userEmail;\" [src]=\"authService.user.avatar\" class=\"img-avatar\"/>\n          <ng-template #userEmail>{{authService.user.firstName}} {{authService.user.lastName}}</ng-template>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n          <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n          <a class=\"dropdown-item disabled\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n          <a class=\"dropdown-item disabled\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n          <div class=\"divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"onLogout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </div>\n      </li>\n      <li *ngIf=\"!isAuthenticated\">\n        <a class=\"cursor-pointer\" (click)=\"onLogin()\">Login</a>\n      </li>\n    </ul>\n    <ng-content select=\"[settings]\"></ng-content>\n  ",
            styles: ["\n    .dropdown-item {\n      cursor: pointer;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_security_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/notification/notification.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/shared/models/index.ts");




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.openModal = function () {
        var useBackdrop = this.config.hasOwnProperty('backdrop') ? this.config.backdrop : this.config.type !== _models__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS;
        this.modal.config.backdrop = useBackdrop;
        this.modal.config.ignoreBackdropClick = useBackdrop;
        this.modal.show();
    };
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config.type === _models__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS) {
            this.timer = window.setTimeout(function () {
                _this.modal.hide();
            }, 3e3);
        }
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], NotificationComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationComponent.prototype, "config", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: "\n  <div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n   aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n      <div class=\"modal-content shadow\" *ngIf=\"config\">\n        <alert [type]=\"config.type\" class=\"m-0\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"modal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          {{config.message}}\n        </alert>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n  alert ::ng-deep .alert {\n      margin-bottom: 0;\n      text-align: center;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-config/page-config.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-config/page-config.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-content {\n  height: 50%;\n}\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.form-group > label {\n  -webkit-box-flex: 0;\n          flex: 0 0 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWNvbmZpZy9wYWdlLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1jb25maWcvcGFnZS1jb25maWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1jb25maWcvcGFnZS1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufVxuIiwiOjpuZy1kZWVwIC50YWItY29udGVudCB7XG4gIGhlaWdodDogNTAlO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICBmbGV4OiAwIDAgODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/page-config/page-config.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-config/page-config.component.ts ***!
  \************************************************************************/
/*! exports provided: PageConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageConfigComponent", function() { return PageConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var PageConfigComponent = /** @class */ (function () {
    function PageConfigComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatted = true;
        this.pageInfo = {
            title: null,
            description: null,
            pageId: null,
            pageName: null,
            scripts: null
        };
    }
    PageConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(this.pageInfo).forEach(function (key) {
            _this.pageInfo[key] = _this.config[key];
        });
        this.error = null;
    };
    PageConfigComponent.prototype.ngAfterViewInit = function () {
        this.uiModelEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.uiModelEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(this.config.uiModel)
        });
        this.scriptEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.scriptsEl.nativeElement, {
            mode: 'ace/mode/python',
            autoScrollEditorIntoView: true,
            value: this.pageInfo.scripts,
            tabSize: 2,
            useSoftTabs: true,
            indentedSoftWrap: true
        });
        this.scriptEditor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: false,
            enableLiveAutocompletion: true
        });
    };
    PageConfigComponent.prototype.savePage = function () {
        try {
            var uiModel = JSON.parse(this.uiModelEditor.getValue());
            var scripts = this.scriptEditor.getValue();
            this.save.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.pageInfo, { uiModel: uiModel,
                scripts: scripts }));
            this.modalRef.hide();
        }
        catch (e) {
            this.error = e.message;
        }
    };
    PageConfigComponent.prototype.formatJSON = function (format) {
        if (format === void 0) { format = true; }
        try {
            var uiModel = JSON.parse(this.uiModelEditor.getValue());
            if (format) {
                this.uiModelEditor.setValue(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(uiModel), -1);
            }
            else {
                this.uiModelEditor.setValue(JSON.stringify(uiModel), -1);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageConfigComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageConfigComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], PageConfigComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uiModelEl', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PageConfigComponent.prototype, "uiModelEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scriptsEl', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PageConfigComponent.prototype, "scriptsEl", void 0);
    PageConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-config',
            template: __webpack_require__(/*! raw-loader!./page-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-config/page-config.component.html"),
            styles: [__webpack_require__(/*! ./page-config.component.scss */ "./src/app/shared/components/page-config/page-config.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageConfigComponent);
    return PageConfigComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    Object.defineProperty(PageHeaderComponent.prototype, "iconCssClass", {
        get: function () {
            return this.icon || 'icon-picture icons font-2xl';
        },
        enumerable: true,
        configurable: true
    });
    PageHeaderComponent.prototype.onCommandClick = function (cmd) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cmd.command(cmd)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PageHeaderComponent.prototype, "headerCommands", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: "\n    <div class=\"container\">\n      <div class='page-header'>\n          <div class='btn-toolbar pull-right'>\n              <div class='btn-group'>\n                <button *ngFor=\"let cmd of headerCommands\"\n                  type=\"button\" class=\"btn pull-right btn-secondary\"\n                  [title]=\"cmd.title || ''\"\n                  (click)=\"onCommandClick(cmd)\">{{cmd.label}}</button>\n              </div>\n          </div>\n          <h2 class=\"h2\"><i class=\"mr-2\" [ngClass]=\"iconCssClass\"></i>{{title}}</h2>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      padding: 0.75rem 1rem;\n      list-style: none;\n      background-color: #fff;\n      border-bottom: 1px solid #c8ced3;\n      display: block;\n      margin: 0 -30px 24px -30px;\n    }\n\n    h2 {\n      margin: 0;\n    }\n  "]
        })
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-info/page-info.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/page-info/page-info.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group > label {\n  -webkit-box-flex: 0;\n          flex: 0 0 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay93b3Jrc2hlZXRzMi1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWluZm8vcGFnZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWluZm8vcGFnZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWluZm8vcGFnZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufVxuIiwiLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/page-info/page-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/page-info/page-info.component.ts ***!
  \********************************************************************/
/*! exports provided: PageInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfoComponent", function() { return PageInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var PageInfoComponent = /** @class */ (function () {
    function PageInfoComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageInfo = {
            title: null,
            description: null,
            pageId: null,
            pageName: null
        };
    }
    PageInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(this.pageInfo).forEach(function (key) {
            _this.pageInfo[key] = _this.config[key];
        });
    };
    PageInfoComponent.prototype.savePage = function () {
        this.save.emit(this.pageInfo);
        this.modalRef.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageInfoComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], PageInfoComponent.prototype, "modalRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageInfoComponent.prototype, "save", void 0);
    PageInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-info',
            template: __webpack_require__(/*! raw-loader!./page-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-info/page-info.component.html"),
            styles: [__webpack_require__(/*! ./page-info.component.scss */ "./src/app/shared/components/page-info/page-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageInfoComponent);
    return PageInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/split-content/split-content.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/split-content/split-content.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwbGl0LWNvbnRlbnQvc3BsaXQtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/split-content/split-content.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/split-content/split-content.component.ts ***!
  \****************************************************************************/
/*! exports provided: SplitContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitContentComponent", function() { return SplitContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplitContentComponent = /** @class */ (function () {
    function SplitContentComponent() {
        this.leftContentSize = 50;
        this.modeState = {
            left: true,
            right: true
        };
    }
    SplitContentComponent.prototype.ngOnInit = function () {
    };
    SplitContentComponent.prototype.onModeState = function (prop) {
        this.modeState[prop] = !this.modeState[prop];
        if (this.modeState.left && !this.modeState.right) {
            this.leftContentSize = 100;
        }
        else if (this.modeState.left && this.modeState.right) {
            this.leftContentSize = 50;
        }
        else {
            this.leftContentSize = 0;
        }
    };
    SplitContentComponent.prototype.resize = function () {
    };
    SplitContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-split-content',
            template: __webpack_require__(/*! raw-loader!./split-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/split-content/split-content.component.html"),
            styles: [__webpack_require__(/*! ./split-content.component.scss */ "./src/app/shared/components/split-content/split-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SplitContentComponent);
    return SplitContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/forbidden-values.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/forbidden-values.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ForbiddenValidatorDirective, forbiddenValuesValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenValidatorDirective", function() { return ForbiddenValidatorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenValuesValidator", function() { return forbiddenValuesValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ForbiddenValidatorDirective = /** @class */ (function () {
    function ForbiddenValidatorDirective() {
    }
    ForbiddenValidatorDirective_1 = ForbiddenValidatorDirective;
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.forbiddenValues ? forbiddenValuesValidator(this.forbiddenValues)(control)
            : null;
    };
    var ForbiddenValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appForbiddenValues'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ForbiddenValidatorDirective.prototype, "forbiddenValues", void 0);
    ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appForbiddenValues]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ForbiddenValidatorDirective_1, multi: true }]
        })
    ], ForbiddenValidatorDirective);
    return ForbiddenValidatorDirective;
}());

function forbiddenValuesValidator(values) {
    return function (control) {
        var forbidden = values.includes(control.value);
        return forbidden ? { 'forbiddenValues': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, formatCamelStr, mapTableToValues, dateToDtoString, parseDatetimeOrNull, parseNumberOrNull, replaceAll, parseBooleanOrNull, mapValuesToTable, formatObjToJsonStr, transposeData, getDomain, verifyFields, compareFields, compareSqlObjects, compareColumns, generateFields, getTableColumns, getErrorMessage, deepClone, getFilters, hasValue, formatToPrimitive, formatWijmoDate, Empty, ClubMembershipRegistrationForm, PageBS, Page, Chart, Form, ContentExplorerComponent, DynamicModalComponent, ListViewComponent, PageInfoComponent, ManageFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/shared/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCamelStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["formatCamelStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapTableToValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["mapTableToValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateToDtoString", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["dateToDtoString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDatetimeOrNull", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseDatetimeOrNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseNumberOrNull", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseNumberOrNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["replaceAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseBooleanOrNull", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseBooleanOrNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapValuesToTable", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["mapValuesToTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatObjToJsonStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["formatObjToJsonStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transposeData", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["transposeData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDomain", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getDomain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verifyFields", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["verifyFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareFields", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["compareFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareSqlObjects", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["compareSqlObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareColumns", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["compareColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFields", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["generateFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTableColumns", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getTableColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["deepClone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilters", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["hasValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatToPrimitive", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["formatToPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatWijmoDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["formatWijmoDate"]; });

/* harmony import */ var _page_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-templates */ "./src/app/shared/page-templates/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return _page_templates__WEBPACK_IMPORTED_MODULE_2__["Empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubMembershipRegistrationForm", function() { return _page_templates__WEBPACK_IMPORTED_MODULE_2__["ClubMembershipRegistrationForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageBS", function() { return _page_templates__WEBPACK_IMPORTED_MODULE_2__["PageBS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _page_templates__WEBPACK_IMPORTED_MODULE_2__["Page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _page_templates__WEBPACK_IMPORTED_MODULE_2__["Chart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _page_templates__WEBPACK_IMPORTED_MODULE_2__["Form"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentExplorerComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ContentExplorerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicModalComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DynamicModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ListViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageInfoComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PageInfoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageFiltersComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ManageFiltersComponent"]; });







/***/ }),

/***/ "./src/app/shared/interpreter.ts":
/*!***************************************!*\
  !*** ./src/app/shared/interpreter.ts ***!
  \***************************************/
/*! exports provided: mapFunction, registerFunction, getInterpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFunction", function() { return mapFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFunction", function() { return registerFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterpreter", function() { return getInterpreter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds */ "./node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pscript_interpreter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pscript-interpreter */ "./node_modules/pscript-interpreter/dist/pscript-interpreter.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _app_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-variables */ "./src/app/shared/app-variables.ts");










var httpClient = getHttpClient();
var mapFunction = new Map([
    ['mapTableToValues', mapTableDto],
    ['httpGet', function (url, headers) { return httpClient.get(url, getHttpOptions(headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(e); })).toPromise(); }],
    ['httpPost', function (url, body, headers) { return httpClient.post(url, body, getHttpOptions(headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(e); })).toPromise(); }],
    ['httpPut', function (url, body, headers) { return httpClient.put(url, body, getHttpOptions(headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(e); })).toPromise(); }],
    ['httpDelete', function (url, headers) { return httpClient.delete(url, getHttpOptions(headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(e); })).toPromise(); }],
    ['dateTime', function (str) { return (str && str.length) ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseDatetimeOrNull"])(str) || new Date() : new Date(); }],
    ['format', function (value, displayFormat) {
            if (displayFormat === void 0) { displayFormat = null; }
            return format(value, displayFormat);
        }],
    ['getUrlQueryParams', function () {
            try {
                var search = location.search.slice(1);
                return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            }
            catch (e) {
                return {};
            }
        }]
]);
function registerFunction(name, func) {
    if (name && typeof func === 'function') {
        mapFunction.set(name, func);
    }
    else {
        throw Error("registerFunction: incorrect parameters: " + name + ", " + func);
    }
}
function getInterpreter() {
    var interpreter = pscript_interpreter__WEBPACK_IMPORTED_MODULE_7__["Interpreter"].create();
    interpreter.assignGlobalContext({
        app: _app_variables__WEBPACK_IMPORTED_MODULE_9__["Variables"].variables,
        session: _app_variables__WEBPACK_IMPORTED_MODULE_9__["Variables"].contextVariables
    });
    return addFunctions(interpreter);
}
function addFunctions(interpreter) {
    mapFunction.forEach(function (func, name) {
        interpreter.addFunction(name, func);
    });
    interpreter.assignGlobalContext({
        ArrayUtils: {
            map: function (data, props) {
                if (!data || !props) {
                    return data;
                }
                return data.map(function (item) {
                    return props.reduce(function (prev, _a) {
                        var oldKey = _a[0], newKey = _a[1];
                        prev[newKey] = item[oldKey];
                        return prev;
                    }, {});
                });
            },
            toArray: function (val) {
                if (val && !(val instanceof Array)) {
                    return [val];
                }
            },
            join: function (arr1, arr2, key1, key2) {
                if (!key2) {
                    key2 = key1;
                }
                return arr1.map(function (item1) {
                    var i2 = arr2.find(function (item2) { return item2[key2] === item1[key1]; });
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item1, i2);
                });
            }
        }
    });
    initEditorMode(interpreter);
    return interpreter;
}
var initializedMode = false;
function initEditorMode(interpreter) {
    if (initializedMode) {
        return;
    }
    var tools = ace_builds__WEBPACK_IMPORTED_MODULE_6__["require"]('ace/ext/language_tools');
    var interpreterCompleter = {
        getCompletions: function (editor, session, pos, prefix, callback) {
            var line = editor.session.getLine(pos.row);
            var regexp = "([\\w.]+)." + prefix;
            var res = line.match(new RegExp(regexp));
            var wordList = interpreter.getAutocompletionList(res ? res[1] : null);
            callback(null, wordList);
        }
    };
    tools.addCompleter(interpreterCompleter);
    initializedMode = true;
}
function getHttpOptions(headers) {
    if (headers && typeof headers === 'object') {
        return { headers: getHeaders(headers) };
    }
}
function getHeaders(headers) {
    if (headers && typeof headers === 'object') {
        var httpHeader_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        Object.entries(headers).forEach(function (_a) {
            var name = _a[0], value = _a[1];
            httpHeader_1 = httpHeader_1.set(name, value);
        });
        return httpHeader_1;
    }
}
function format(value, displayFormat) {
    if (displayFormat === void 0) { displayFormat = null; }
    if (!value) {
        return '';
    }
    if (typeof value === 'string') {
        return displayFormat ? templateString(String(value), displayFormat) : value;
    }
    if (value instanceof Date) {
        var dt = value;
        return (!displayFormat) ? Object(_utils__WEBPACK_IMPORTED_MODULE_8__["dateToDtoString"])(dt) : wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["Globalize"].format(dt, String(displayFormat));
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    if (typeof value === 'number') {
        var num = +value;
        return (!displayFormat) ? num.toLocaleString() : wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["Globalize"].formatNumber(num, String(displayFormat));
    }
    return String(value);
}
function templateString(formatTemplate, values) {
    var keys = Object.keys(values);
    var result = formatTemplate;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key && !key.startsWith('_')) {
            result = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["replaceAll"])(key, values[key]);
        }
    }
    return result;
}
function mapTableDto(table, fields) {
    if (fields) {
        table.dataTypes = table.fieldNames.map(function (fieldName) {
            var field = fields.find(function (f) { return f.fieldName === fieldName; });
            if (field) {
                return field.dataType;
            }
        });
    }
    return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["mapTableToValues"])(table);
}
function getHttpClient() {
    var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"]] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"], useValue: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest; } }) },
        ],
    });
    return injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
}


/***/ }),

/***/ "./src/app/shared/models/common.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/common.ts ***!
  \*****************************************/
/*! exports provided: NotificationType, FileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
var NotificationType;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["INFO"] = "info";
    NotificationType["WARNING"] = "warning";
    NotificationType["DANGER"] = "danger";
})(NotificationType || (NotificationType = {}));
var FileType;
(function (FileType) {
    FileType["JSON"] = "text/json";
    FileType["CSV"] = "text/csv";
})(FileType || (FileType = {}));


/***/ }),

/***/ "./src/app/shared/models/dto.ts":
/*!**************************************!*\
  !*** ./src/app/shared/models/dto.ts ***!
  \**************************************/
/*! exports provided: DATA_TYPES, SQLDataTypes, SqlTypesToWijmoMap, WijmoMapToSqlTypes, SqlTypesSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPES", function() { return DATA_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLDataTypes", function() { return SQLDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlTypesToWijmoMap", function() { return SqlTypesToWijmoMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WijmoMapToSqlTypes", function() { return WijmoMapToSqlTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlTypesSizes", function() { return SqlTypesSizes; });
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__);
var _a, _b;

var DATA_TYPES = ['Text', 'Short Text', 'Long Text', 'Whole Number', 'Float Number', 'True/False', 'Date Time', 'Text MAX'];
var SQLDataTypes;
(function (SQLDataTypes) {
    SQLDataTypes["TEXT"] = "text";
    SQLDataTypes["CHAR"] = "char";
    SQLDataTypes["VARCHAR"] = "varchar";
    SQLDataTypes["NVARCHAR"] = "nvarchar";
    SQLDataTypes["BINARY"] = "binary";
    SQLDataTypes["VARBINARY"] = "varbinary";
    SQLDataTypes["BIT"] = "bit";
    SQLDataTypes["TINYINT"] = "tinyint";
    SQLDataTypes["SMALLINT"] = "smallint";
    SQLDataTypes["INT"] = "int";
    SQLDataTypes["BIGINT"] = "bigint";
    SQLDataTypes["DECIMAL"] = "decimal";
    SQLDataTypes["REAL"] = "real";
    SQLDataTypes["NUMERIC"] = "numeric";
    SQLDataTypes["FLOAT"] = "float";
    SQLDataTypes["DATE"] = "datetime2";
})(SQLDataTypes || (SQLDataTypes = {}));
var SqlTypesToWijmoMap = (_a = {},
    _a[SQLDataTypes.TEXT] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].String,
    _a[SQLDataTypes.CHAR] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].String,
    _a[SQLDataTypes.VARCHAR] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].String,
    _a[SQLDataTypes.NVARCHAR] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].String,
    _a[SQLDataTypes.BINARY] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].String,
    _a[SQLDataTypes.VARBINARY] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].String,
    _a[SQLDataTypes.DATE] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Date,
    _a[SQLDataTypes.DECIMAL] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.FLOAT] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.NUMERIC] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.REAL] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.SMALLINT] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.BIGINT] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.INT] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Number,
    _a[SQLDataTypes.BIT] = wijmo_wijmo__WEBPACK_IMPORTED_MODULE_0__["DataType"].Boolean,
    _a);
var WijmoMapToSqlTypes = {
    Date: SQLDataTypes.DATE,
    String: SQLDataTypes.NVARCHAR,
    Number: SQLDataTypes.NUMERIC,
    Boolean: SQLDataTypes.BIT
};
var SqlTypesSizes = (_b = {},
    _b[SQLDataTypes.TEXT] = 8000,
    _b[SQLDataTypes.CHAR] = 8000,
    _b[SQLDataTypes.VARCHAR] = 8000,
    _b[SQLDataTypes.NVARCHAR] = 50,
    _b);


/***/ }),

/***/ "./src/app/shared/models/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/*! exports provided: Operation, NotificationType, FileType, DATA_TYPES, SQLDataTypes, SqlTypesToWijmoMap, WijmoMapToSqlTypes, SqlTypesSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql-data */ "./src/app/shared/models/sql-data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return _sql_data__WEBPACK_IMPORTED_MODULE_0__["Operation"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/app/shared/models/common.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["NotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return _common__WEBPACK_IMPORTED_MODULE_1__["FileType"]; });

/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dto */ "./src/app/shared/models/dto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPES", function() { return _dto__WEBPACK_IMPORTED_MODULE_2__["DATA_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SQLDataTypes", function() { return _dto__WEBPACK_IMPORTED_MODULE_2__["SQLDataTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SqlTypesToWijmoMap", function() { return _dto__WEBPACK_IMPORTED_MODULE_2__["SqlTypesToWijmoMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WijmoMapToSqlTypes", function() { return _dto__WEBPACK_IMPORTED_MODULE_2__["WijmoMapToSqlTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SqlTypesSizes", function() { return _dto__WEBPACK_IMPORTED_MODULE_2__["SqlTypesSizes"]; });






/***/ }),

/***/ "./src/app/shared/models/sql-data.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/sql-data.ts ***!
  \*******************************************/
/*! exports provided: Operation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
var Operation;
(function (Operation) {
    Operation["In"] = "IN";
    Operation["NotIn"] = "NotIn";
    Operation["Equal"] = "Equal";
    Operation["NotEqual"] = "NotEqual";
    Operation["GreaterThan"] = "GreaterThan";
    Operation["GreaterOrEqual"] = "GreaterThanOrEqual";
    Operation["LessThan"] = "LessThan";
    Operation["LessOrEqual"] = "LessThanOrEqual";
    Operation["Like"] = "Like";
    Operation["NotLike"] = "NotLike";
})(Operation || (Operation = {}));


/***/ }),

/***/ "./src/app/shared/page-templates/chart.ts":
/*!************************************************!*\
  !*** ./src/app/shared/page-templates/chart.ts ***!
  \************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
var WORKFLOW = {
    chart_OnInit: [{
            actionType: 'mergeInDataModel',
            data: {
                chartData: [
                    {
                        '2014': 17348075,
                        '2015': 18036650,
                        '2016': 18624450,
                        'country': 'United States'
                    },
                    {
                        '2014': 10356508,
                        '2015': 11181556,
                        '2016': 11232110,
                        'country': 'China'
                    },
                    {
                        '2014': 4602367,
                        '2015': 4124211,
                        '2016': 4936540,
                        'country': 'Japan'
                    },
                    {
                        '2014': 3874437,
                        '2015': 3365293,
                        '2016': 3479230,
                        'country': 'Germany'
                    },
                    {
                        '2014': 2950039,
                        '2015': 2858482,
                        '2016': 2629190,
                        'country': 'United Kingdom'
                    },
                    {
                        '2014': 2833687,
                        '2015': 2420163,
                        '2016': 2466470,
                        'country': 'France'
                    },
                    {
                        '2014': 2051228,
                        '2015': 2073002,
                        '2016': 2263790,
                        'country': 'India'
                    },
                    {
                        '2014': 2147744,
                        '2015': 1815759,
                        '2016': 1850740,
                        'country': 'Italy'
                    }
                ]
            }
        }]
};
var UI_MODEL = {
    id: 'chart',
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
        width: '100%',
        height: '100%',
        padding: '16px',
        margin: '0',
        fxLayoutAlign: 'start stretch',
        fxLayout: 'column',
        fxLayoutGap: '8px'
    },
    children: [{
            type: 'wijmo:chart',
            containerProperties: {},
            itemProperties: {
                dataModelPath: '$.chartData',
                header: 'Countries',
                bindingX: 'country',
                selectionMode: 'Point',
                legendPosition: 'Bottom',
                series: [{ name: '2014', binding: '2014' }, { name: '2015', binding: '2015' }, { name: '2016', binding: '2016' }],
                chartType: 0
            }
        }]
};
var Chart = {
    uiModel: UI_MODEL,
    workflowsMap: WORKFLOW
};


/***/ }),

/***/ "./src/app/shared/page-templates/empty.ts":
/*!************************************************!*\
  !*** ./src/app/shared/page-templates/empty.ts ***!
  \************************************************/
/*! exports provided: Empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return Empty; });
var UI_MODEL = {
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
        width: '100%',
        height: '100%',
        padding: '16px',
        margin: '0',
        fxLayoutAlign: 'start|stretch',
        fxLayout: 'column',
        fxLayoutGap: '8px',
    },
    children: []
};
var Empty = {
    uiModel: UI_MODEL,
    workflowsMap: {}
};


/***/ }),

/***/ "./src/app/shared/page-templates/form.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/page-templates/form.ts ***!
  \***********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
var UI_MODEL = {
    id: 'form',
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
        width: '100%',
        height: '100%',
        padding: '16px',
        margin: '0',
        fxLayoutAlign: 'start|stretch',
        fxLayout: 'column',
        fxLayoutGap: '8px',
        isForm: true
    },
    children: []
};
var Form = {
    uiModel: UI_MODEL,
    workflowsMap: {
        _var_import_overrides: {
            ownerName: '',
            base_api_url: 'https://worksheets-web-api-test.azurewebsites.net',
            userPublicAccessCode: '12000020PP',
            tableName: ''
        },
        _var: {
            sql_api_url: '{{base_api_url}}/api/sql/sql-shared',
            public_access_code: '{{userPublicAccessCode}}',
            ownerName: '{{ownerName}}',
            tableName: '{{tableName}}'
        },
        design_time: [
            {
                actionType: 'ensureTableWithFields',
                actionName: 'ensure',
                sqlConnectionUrl: '{{sql_api_url}}',
                ownerName: '{{ownerName}}',
                tableName: '{{tableName}}',
                generateFields: 'fromDataModel'
            },
            {
                actionType: 'if',
                value: '$ensure-returnValue/status',
                compareTo: 'success',
                trueActions: [],
                falseActions: [
                    {
                        actionType: 'notification',
                        message: '$ensure-returnValue/result/error',
                        type: 'danger'
                    }
                ]
            }
        ],
        form_OnInit: [
            {
                actionType: 'ws-login',
                actionName: 'login',
                publicAccessCode: '{{public_access_code}}',
                saveAs: 'bearer_token'
            },
            {
                actionType: 'if',
                value: '$login-returnValue/user/userName',
                compareTo: 'Public',
                trueActions: [],
                falseActions: [
                    {
                        actionType: 'notification',
                        message: 'Failed to login.',
                        type: 'danger'
                    }
                ]
            }
        ],
        form_OnSubmit: [
            {
                actionType: 'dataModelValidation',
                actionName: 'validation'
            },
            {
                actionType: 'if',
                value: '$validation-returnValue/result',
                trueActions: [
                    {
                        actionType: 'createObject',
                        actionName: 'result',
                        object: {
                            'items': [
                                '$dataModel'
                            ]
                        }
                    },
                    {
                        actionType: 'httpCall',
                        actionName: 'request',
                        url: '{{sql_api_url}}/save/{{ownerName}}/{{tableName}}',
                        method: 'POST',
                        body: '$result-returnValue',
                        headers: {
                            'Authorization': 'Bearer {{bearer_token}}'
                        }
                    },
                    {
                        actionType: 'if',
                        value: '$request-returnValue/status',
                        compareTo: 'success',
                        trueActions: [
                            {
                                actionType: 'notification',
                                message: 'Successfully sent.',
                                type: 'success'
                            }
                        ],
                        falseActions: [
                            {
                                actionType: 'notification',
                                message: 'Failed to send. Please try again.',
                                type: 'danger'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};


/***/ }),

/***/ "./src/app/shared/page-templates/index.ts":
/*!************************************************!*\
  !*** ./src/app/shared/page-templates/index.ts ***!
  \************************************************/
/*! exports provided: Empty, ClubMembershipRegistrationForm, PageBS, Page, Chart, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ "./src/app/shared/page-templates/empty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return _empty__WEBPACK_IMPORTED_MODULE_0__["Empty"]; });

/* harmony import */ var _reg_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg-form */ "./src/app/shared/page-templates/reg-form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubMembershipRegistrationForm", function() { return _reg_form__WEBPACK_IMPORTED_MODULE_1__["ClubMembershipRegistrationForm"]; });

/* harmony import */ var _rc_page_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rc-page-bs */ "./src/app/shared/page-templates/rc-page-bs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageBS", function() { return _rc_page_bs__WEBPACK_IMPORTED_MODULE_2__["PageBS"]; });

/* harmony import */ var _rc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rc-page */ "./src/app/shared/page-templates/rc-page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _rc_page__WEBPACK_IMPORTED_MODULE_3__["Page"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart */ "./src/app/shared/page-templates/chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form */ "./src/app/shared/page-templates/form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_5__["Form"]; });









/***/ }),

/***/ "./src/app/shared/page-templates/rc-page-bs.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/page-templates/rc-page-bs.ts ***!
  \*****************************************************/
/*! exports provided: PageBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBS", function() { return PageBS; });
var UI_MODEL = {
    type: 'bootstrap:container',
    itemProperties: {
        height: '100%'
    },
    children: [{
            type: 'bootstrap:bs-row',
            itemProperties: {
                height: '100%'
            },
            children: [{
                    type: 'rest-client:grid-object-explorer',
                    containerProperties: {
                        height: '100%'
                    },
                    itemProperties: {
                        dataSource: '{{responseContent}}',
                        host: '{{requestMethod}}-{{requestUrl}}'
                    }
                }]
        }]
};
var PageBS = {
    uiModel: UI_MODEL
};


/***/ }),

/***/ "./src/app/shared/page-templates/rc-page.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/page-templates/rc-page.ts ***!
  \**************************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var UI_MODEL = {
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
        fxLayout: 'row',
        fxLayoutGap: '8px',
        width: '100%',
        height: '100%',
        'min-height': '50px',
        'min-width': '50px'
    },
    children: [{
            type: 'rest-client:grid-object-explorer',
            containerProperties: {
                fxFlex: '1 1 100%'
            },
            itemProperties: {
                dataSource: '{{responseContent}}',
                host: '{{requestMethod}}-{{requestUrl}}',
            }
        }]
};
var Page = {
    uiModel: UI_MODEL
};


/***/ }),

/***/ "./src/app/shared/page-templates/reg-form.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/page-templates/reg-form.ts ***!
  \***************************************************/
/*! exports provided: ClubMembershipRegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubMembershipRegistrationForm", function() { return ClubMembershipRegistrationForm; });
var WORKFLOW_MAP = {
    'top-form_OnInit': [
        {
            'actionType': 'mergeInDataModel',
            'data': {
                'countries': [
                    {
                        'value': 'ua',
                        'label': 'Ukraine'
                    },
                    {
                        'value': 'uk',
                        'label': 'United Kingdom'
                    }
                ]
            }
        },
        {
            'actionType': 'httpCall',
            'actionName': 'restcountries',
            'url': 'https://restcountries.eu/rest/v2/all',
            'method': 'GET'
        },
        {
            'actionType': 'map',
            'actionName': 'mapCountries',
            'object': '$restcountries-returnValue',
            'propertyName': '$.body',
            'fields': [
                [
                    'name',
                    'label'
                ],
                [
                    'alpha3Code',
                    'value'
                ]
            ]
        },
        {
            'actionType': 'transferData',
            'from': '$mapCountries-returnValue',
            'to': '$dataModel',
            'toPropertyName': '$.countries'
        }
    ]
};
var UI_MODEL = {
    id: 'top-form',
    type: 'material:flex-container',
    containerProperties: {},
    itemProperties: {
        width: '100%',
        height: '100%',
        padding: '16px',
        margin: '0',
        fxLayoutAlign: 'start stretch',
        fxLayout: 'column',
        fxLayoutGap: '8px'
    },
    children: [
        {
            id: 'control-container',
            type: 'material:flex-container',
            containerProperties: {},
            itemProperties: {
                fxLayout: 'column',
                fxLayoutGap: '15px',
                width: '800px',
                height: '100%',
                'min-height': '50px',
                'min-width': '50px',
                margin: 'auto'
            },
            children: [
                {
                    type: 'material:flex-container',
                    containerProperties: {},
                    itemProperties: {
                        fxLayout: 'column',
                        fxLayoutGap: '2px',
                        width: '100%',
                        height: '100%',
                        'min-height': '50px',
                        'min-width': '50px'
                    },
                    children: [
                        {
                            type: 'bootstrap:text',
                            itemProperties: {
                                text: 'Club Membership Registration',
                                padding: '',
                                width: '100%',
                                'text-style': 'h2',
                                border: 'border-bottom|1px solid grey'
                            },
                            containerProperties: {},
                            id: 'title'
                        },
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'Complete the form below to sign up for our membership service',
                                'padding': '',
                                'text-style': '',
                                'font-size': 'medium',
                                'width': '100%'
                            },
                            'containerProperties': {}
                        }
                    ],
                    'id': 'header-panel'
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'Name',
                                'padding': '',
                                'width': '100%',
                                'text-style': 'h6',
                                'border': 'border-left|'
                            },
                            'containerProperties': {
                                'fxFlex': '180px',
                                'fxFlexAlign': 'start'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%'
                            },
                            'itemProperties': {
                                'label': 'First Name',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%'
                            },
                            'itemProperties': {
                                'label': 'Last Name',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'E-mail',
                                'padding': '',
                                'width': '100%',
                                'text-style': 'h6'
                            },
                            'containerProperties': {
                                'fxFlex': '180px',
                                'fxFlexAlign': 'center'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%'
                            },
                            'itemProperties': {
                                'label': 'First Name',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'Phone Number',
                                'padding': '',
                                'width': '100%',
                                'text-style': 'h6'
                            },
                            'containerProperties': {
                                'fxFlex': '180px',
                                'fxFlexAlign': 'start'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {},
                            'itemProperties': {
                                'label': 'Area Code',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100px',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        },
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': '-',
                                'padding': '.5rem 0'
                            },
                            'containerProperties': {}
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {},
                            'itemProperties': {
                                'label': 'Phone Number',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '200px',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'Address',
                                'padding': '',
                                'width': '100%',
                                'text-style': 'h6'
                            },
                            'containerProperties': {
                                'fxFlex': '180px',
                                'fxFlexAlign': 'start'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%'
                            },
                            'itemProperties': {
                                'label': 'Street Address',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'material:flex-container',
                            'containerProperties': {},
                            'itemProperties': {
                                'fxLayout': 'row',
                                'fxLayoutGap': '8px',
                                'width': '100%',
                                'height': '100%',
                                'min-height': '50px',
                                'min-width': '178px'
                            },
                            'children': []
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%',
                                'fxFlexOffset': ''
                            },
                            'itemProperties': {
                                'label': 'Street Address Line 2',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'material:flex-container',
                            'containerProperties': {},
                            'itemProperties': {
                                'fxLayout': 'row',
                                'fxLayoutGap': '8px',
                                'width': '100%',
                                'height': '100%',
                                'min-height': '50px',
                                'min-width': '178px'
                            },
                            'children': []
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%',
                                'fxFlexOffset': ''
                            },
                            'itemProperties': {
                                'label': 'City',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%',
                                'fxFlexOffset': ''
                            },
                            'itemProperties': {
                                'label': 'State / Province',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '100%',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'material:flex-container',
                            'containerProperties': {},
                            'itemProperties': {
                                'fxLayout': 'row',
                                'fxLayoutGap': '8px',
                                'width': '100%',
                                'height': '100%',
                                'min-height': '50px',
                                'min-width': '178px'
                            },
                            'children': []
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%',
                                'fxFlexOffset': ''
                            },
                            'itemProperties': {
                                'label': 'Postal / Zip Code',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '200px',
                                'margin': '0',
                                'type': 'text',
                                'labelPosition': 'bottom'
                            }
                        },
                        {
                            'type': 'bootstrap:select',
                            'containerProperties': {},
                            'itemProperties': {
                                'options': '$.countries',
                                'label': 'Country',
                                'dataModelPath': '$.option',
                                'width': '200px',
                                'labelPosition': 'bottom'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'Birth Date:',
                                'padding': '.5rem 0',
                                'width': '100%',
                                'text-style': 'h6'
                            },
                            'containerProperties': {
                                'fxFlex': '180px'
                            }
                        },
                        {
                            'type': 'bootstrap:text-input',
                            'containerProperties': {
                                'fxFlex': '100%'
                            },
                            'itemProperties': {
                                'label': 'First Name',
                                'placeholder': '',
                                'dataModelPath': '$.path',
                                'visible': true,
                                'enabled': true,
                                'inputWidth': '100%',
                                'labelWidth': '80px',
                                'width': '150px',
                                'margin': '0',
                                'type': 'date'
                            }
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '50px',
                        'min-width': '50px',
                        'fxLayoutAlign': 'start center'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:text',
                            'itemProperties': {
                                'text': 'Where did you hear about us?',
                                'padding': '',
                                'width': '100%',
                                'text-style': 'h6'
                            },
                            'containerProperties': {
                                'fxFlex': '180px',
                                'fxFlexAlign': 'start'
                            }
                        },
                        {
                            'type': 'material:flex-container',
                            'containerProperties': {
                                'fxFlex': '100%'
                            },
                            'itemProperties': {
                                'fxLayout': 'column',
                                'fxLayoutGap': '8px',
                                'width': '100%',
                                'height': '100%',
                                'min-height': '50px',
                                'min-width': '50px'
                            },
                            'children': [
                                {
                                    'type': 'bootstrap:checkbox',
                                    'containerProperties': {},
                                    'itemProperties': {
                                        'label': 'A friend or colleague',
                                        'dataModelPath': '',
                                        'labelPosition': 'right'
                                    }
                                },
                                {
                                    'type': 'bootstrap:checkbox',
                                    'containerProperties': {},
                                    'itemProperties': {
                                        'label': 'Google',
                                        'dataModelPath': '',
                                        'labelPosition': 'right'
                                    }
                                },
                                {
                                    'type': 'bootstrap:checkbox',
                                    'containerProperties': {},
                                    'itemProperties': {
                                        'label': 'Blog Post',
                                        'dataModelPath': '',
                                        'labelPosition': 'right'
                                    }
                                },
                                {
                                    'type': 'bootstrap:checkbox',
                                    'containerProperties': {},
                                    'itemProperties': {
                                        'label': 'News Article',
                                        'dataModelPath': '',
                                        'labelPosition': 'right'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    'type': 'material:flex-container',
                    'containerProperties': {},
                    'itemProperties': {
                        'fxLayout': 'row',
                        'fxLayoutGap': '8px',
                        'width': '100%',
                        'height': '100%',
                        'min-height': '',
                        'min-width': '',
                        'fxLayoutAlign': 'center|',
                        'margin': '0px 0px 0px 0px',
                        'padding': '10px 0px 0px 0px',
                        'border': 'border-top|1px solid grey'
                    },
                    'children': [
                        {
                            'type': 'bootstrap:button',
                            'containerProperties': {},
                            'itemProperties': {
                                'label': 'Submit',
                                'clickActionKey': 'consoleLog',
                                'btnClass': 'btn-primary',
                                'type': 'button',
                                'width': '200px'
                            }
                        }
                    ],
                    'id': 'footer-container'
                }
            ]
        }
    ]
};
var ClubMembershipRegistrationForm = {
    uiModel: UI_MODEL,
    workflowsMap: WORKFLOW_MAP
};


/***/ }),

/***/ "./src/app/shared/services/actions.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/actions.service.ts ***!
  \****************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js");
/* harmony import */ var _sql_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sql-db.service */ "./src/app/shared/services/sql-db.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-variables */ "./src/app/shared/app-variables.ts");










var ActionsService = /** @class */ (function () {
    function ActionsService(notificationService, authService, sqlDb) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.sqlDb = sqlDb;
        function notificationAction(context, _a) {
            var type = _a.type, message = _a.message;
            message = _app_variables__WEBPACK_IMPORTED_MODULE_9__["Variables"].resolveString(message, context.variables);
            notificationService.open({ type: type, message: message });
            return { message: message };
        }
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["registerAction"])('notification', {
            name: 'notification',
            method: notificationAction,
            category: 'Common',
            config: {
                type: 'success',
                message: 'Error message'
            },
            description: 'Shows notification',
        });
        function authorizeAction(context, config) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, authService.authorize(config.publicAccessCode, config.saveAs).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["registerAction"])('ws-login', {
            name: 'ws-login',
            method: authorizeAction,
            category: 'Auth',
            config: {
                publicAccessCode: 'TEST_TOKEN',
                saveAs: 'bearer_token'
            },
            description: 'Authorize user role by public token'
        });
        function ensureTable(context, config) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var tableName, ownerName, sqlConnectionUrl, fields;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tableName = config.tableName, ownerName = config.ownerName, sqlConnectionUrl = config.sqlConnectionUrl;
                            fields = [];
                            return [4 /*yield*/, sqlDb.getObject(sqlConnectionUrl, ownerName, tableName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (tableData) {
                                    var objectId = tableData ? tableData.objectId : 0;
                                    var uiModel = context.variables.get('uiModel');
                                    var fieldsProperties = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["JSONUtils"].find(uiModel, '$(children)/itemProperties');
                                    if (!Array.isArray(fieldsProperties)) {
                                        fieldsProperties = [fieldsProperties];
                                    }
                                    var dataModelPaths = fieldsProperties.filter(function (f) { return f.dataModelPath; }).map(function (f) { return f.dataModelPath.replace('$.', ''); });
                                    fields = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["generateFields"])(dataModelPaths);
                                    if (tableData && Object(_utils__WEBPACK_IMPORTED_MODULE_7__["verifyFields"])(tableData.fields, fields)) {
                                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])({
                                            result: tableData,
                                            status: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ActionStatus"].SUCCESS
                                        });
                                    }
                                    var dataObject = {
                                        fields: fields,
                                        objectId: objectId,
                                        objectOwner: ownerName,
                                        objectName: tableName,
                                        objectType: 'Table',
                                        folder: 'forms-folder'
                                    };
                                    return sqlDb.generateObject(sqlConnectionUrl, dataObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return ({
                                        result: res,
                                        status: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ActionStatus"].SUCCESS
                                    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])({
                                        result: e,
                                        status: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ActionStatus"].FAILED
                                    }); }));
                                })).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["registerAction"])('ensureTableWithFields', {
            name: 'ensureTableWithFields',
            method: ensureTable,
            category: 'DesignTime',
            config: {
                actionType: 'ensureTableWithFields',
                sqlConnectionUrl: '{{sql_api_url}}',
                ownerName: '{{ownerName}}',
                tableName: '{{tableName}}',
                generateFields: 'fromDataModel'
            },
            description: 'Ensures table structure fits data model'
        });
        var tableDtoToArray = function (context, config) {
            try {
                var rows = _app_variables__WEBPACK_IMPORTED_MODULE_9__["Variables"].resolveString(config.rows, context.variables);
                if (!Array.isArray(rows)) {
                    rows = [];
                }
                console.log('Resolved rows', rows);
                var fieldNames = _app_variables__WEBPACK_IMPORTED_MODULE_9__["Variables"].resolveString(config.fieldNames, context.variables);
                if (!Array.isArray(fieldNames)) {
                    fieldNames = [];
                }
                console.log('Resolved fieldNames', fieldNames);
                var dataTypes = null;
                if (config.dataTypes) {
                    dataTypes = _app_variables__WEBPACK_IMPORTED_MODULE_9__["Variables"].resolveString(config.dataTypes, context.variables);
                    if (!Array.isArray(dataTypes)) {
                        dataTypes = [];
                    }
                }
                var res = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["mapTableToValues"])({ rows: rows, fieldNames: fieldNames, dataTypes: dataTypes });
                console.log('Action tableDtoToArray result', res);
                return res;
            }
            catch (e) {
                console.error(e);
                return null;
            }
        };
        /**
         * Action converts Data Transfer Object to Array.
         * @param ExecutionContext context
         * @param TableToArrayConfig config
         * @example
         * {
          *  "actionName": "step1"
          *  "actionType": "tableDtoToArray",
          *  "fieldNames": "{{responseContent}}/dataset/column_names",
          *  "rows": "{{responseContent}}/dataset/data"
          * }
          */
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["registerAction"])('tableDtoToArray', {
            name: 'tableDtoToArray',
            category: 'Rest Client',
            method: tableDtoToArray,
            config: {
                actionName: 'table-dto',
                actionType: 'tableDtoToArray',
                fieldNames: '{{responseContent}}/dataset/column_names',
                rows: '{{responseContent}}/dataset/data',
                dataTypes: '{{responseContent}}/dataset/dataTypes'
            },
            description: 'Formats table data to array',
            getMessage: function () {
                return "Formatted table data";
            }
        });
    }
    ActionsService.ctorParameters = function () { return [
        { type: _notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _sql_db_service__WEBPACK_IMPORTED_MODULE_3__["SqlDbService"] }
    ]; };
    ActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            src_app_security__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _sql_db_service__WEBPACK_IMPORTED_MODULE_3__["SqlDbService"]])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "./src/app/shared/services/dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/dialog.service.ts ***!
  \***************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/dynamic-dialog/dynamic-dialog.component */ "./src/app/shared/components/dynamic-dialog/dynamic-dialog.component.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/confirmation/confirmation.component */ "./src/app/shared/components/confirmation/confirmation.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var DialogService = /** @class */ (function () {
    function DialogService(_document, componentFactoryResolver, appRef, injector) {
        this._document = _document;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogService.prototype.open = function (componentType, options) {
        this.appendModal();
        this.dialogComponentRef.instance.childComponentType = componentType;
        this.dialogComponentRef.instance.options = options || {};
        return this.dialogComponentRef.instance;
    };
    DialogService.prototype.close = function () {
        if (this.dialogComponentRef) {
            this.dialogComponentRef.instance.modal.hide();
        }
    };
    DialogService.prototype.confirmation = function (message) {
        var dialog = this.open(_components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationComponent"]);
        dialog.config = { message: message };
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            dialog.init.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return dialog.component.confirm; })).subscribe(function (val) {
                subscriber.next(val);
                subscriber.complete();
            });
        });
    };
    DialogService.prototype.appendModal = function () {
        var _this = this;
        this.dialogComponentRef = this.componentFactoryResolver.resolveComponentFactory(src_app_shared_components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogComponent"]).create(this.injector);
        this.dialogComponentRef.instance.modal.onHide.subscribe(function () {
            _this.dialogComponentRef.destroy();
        });
        this.appRef.attachView(this.dialogComponentRef.hostView);
        var domElem = this.dialogComponentRef.hostView.rootNodes[0];
        this._document.body.appendChild(domElem);
        setTimeout(function () {
            _this.dialogComponentRef.instance.modal.show();
        });
    };
    DialogService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/shared/services/file-manager.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/file-manager.service.ts ***!
  \*********************************************************/
/*! exports provided: FileManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return FileManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/shared/models/index.ts");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);







var FileManagerService = /** @class */ (function () {
    function FileManagerService() {
        this.defaultExportConfig = {
            fileType: _models__WEBPACK_IMPORTED_MODULE_4__["FileType"].JSON,
            fileName: 'rest-client'
        };
        this.reader = new FileReader();
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.anchor = document.createElement('a');
    }
    FileManagerService.prototype.importFromFile = function (type) {
        var _this = this;
        if (type === void 0) { type = _models__WEBPACK_IMPORTED_MODULE_4__["FileType"].JSON; }
        var input = document.createElement('input');
        input.type = 'file';
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            input.onchange = function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                var files = evt.target.files;
                if (files.length) {
                    var file_1 = files[0];
                    _this.reader.onloadend = function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var result;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (e.target.readyState === FileReader.DONE) {
                                try {
                                    result = this.parseData(type, e.target.result);
                                    observer.next({ result: result, file: file_1 });
                                    observer.complete();
                                }
                                catch (e) {
                                    observer.error(e);
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); };
                    _this.reader.readAsBinaryString(file_1);
                }
            };
            input.click();
        });
    };
    FileManagerService.prototype.importCSVFile = function () {
        var input = document.createElement('input');
        input.type = 'file';
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            input.onchange = function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                var files = evt.target.files;
                if (files.length) {
                    var file_2 = files[0];
                    observer.next({ file: file_2 });
                    Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"])(file_2, {
                        dynamicTyping: true,
                        skipEmptyLines: true,
                        encoding: 'ISO-8859-1',
                        complete: function (result) {
                            observer.next({ result: result, file: file_2 });
                            observer.complete();
                        },
                        error: function (e) {
                            observer.error(e);
                        }
                    });
                }
            };
            input.click();
        });
    };
    FileManagerService.prototype.exportToFile = function (sendData, config) {
        config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.defaultExportConfig, config);
        var data = this.formatData(sendData, config.fileType);
        var fileName = config.fileName, fileType = config.fileType;
        var fileExtension = fileType.split('/')[1];
        var blob = new Blob([data], { type: fileType });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, fileName + "." + fileExtension);
    };
    FileManagerService.prototype.parseData = function (type, value) {
        switch (type) {
            case _models__WEBPACK_IMPORTED_MODULE_4__["FileType"].JSON: return JSON.parse(value);
            case _models__WEBPACK_IMPORTED_MODULE_4__["FileType"].CSV: return Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"])(value, {
                worker: true,
                dynamicTyping: true
            });
            default: return null;
        }
    };
    FileManagerService.prototype.formatData = function (data, type) {
        switch (type) {
            case _models__WEBPACK_IMPORTED_MODULE_4__["FileType"].JSON: return encodeURIComponent(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatObjToJsonStr"])(data));
            case _models__WEBPACK_IMPORTED_MODULE_4__["FileType"].CSV: {
                if (Array.isArray(data)) {
                    return Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["unparse"])(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatToPrimitive"])(data));
                }
            }
            // @deprecated
            // case FileType.CSV: {
            //   if (Array.isArray(data) && data.length) {
            //     const header = Object.keys(data[0]).join(',') + '\r\n';
            //     return header + data.map((row) => {
            //       return Object.values(row).map(v => {
            //         if (typeof v === 'object') {
            //           return JSON.stringify(v);
            //         }
            //         return v;
            //       }).join(',');
            //     }).join('\r\n');
            //   }
            //   return '';
            // }
        }
    };
    FileManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileManagerService);
    return FileManagerService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: DialogService, LocalSettingsService, NotificationService, FileManagerService, ActionsService, SqlDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_0__["DialogService"]; });

/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-manager.service */ "./src/app/shared/services/file-manager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return _file_manager_service__WEBPACK_IMPORTED_MODULE_1__["FileManagerService"]; });

/* harmony import */ var _local_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-settings.service */ "./src/app/shared/services/local-settings.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalSettingsService", function() { return _local_settings_service__WEBPACK_IMPORTED_MODULE_2__["LocalSettingsService"]; });

/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]; });

/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.service */ "./src/app/shared/services/actions.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return _actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"]; });

/* harmony import */ var _sql_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sql-db.service */ "./src/app/shared/services/sql-db.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SqlDbService", function() { return _sql_db_service__WEBPACK_IMPORTED_MODULE_5__["SqlDbService"]; });









/***/ }),

/***/ "./src/app/shared/services/interpreter.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/interpreter.service.ts ***!
  \********************************************************/
/*! exports provided: InterpreterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpreterService", function() { return InterpreterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/security */ "./src/app/security/index.ts");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interpreter */ "./src/app/shared/interpreter.ts");






var InterpreterService = /** @class */ (function () {
    function InterpreterService(notificationService, authService) {
        var _this = this;
        this.notificationService = notificationService;
        this.authService = authService;
        Object(_interpreter__WEBPACK_IMPORTED_MODULE_5__["registerFunction"])('notify', function (message, type) {
            if (type === void 0) { type = _models__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].SUCCESS; }
            notificationService.open({ type: type, message: message });
        });
        Object(_interpreter__WEBPACK_IMPORTED_MODULE_5__["registerFunction"])('alert', function (message) {
            notificationService.open({ type: _models__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].DANGER, message: message });
        });
        Object(_interpreter__WEBPACK_IMPORTED_MODULE_5__["registerFunction"])('authorizeWithAccessCode', function (publicAccessCode, saveAs) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, authService.authorize(publicAccessCode, saveAs).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    }
    InterpreterService.ctorParameters = function () { return [
        { type: _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: src_app_security__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    InterpreterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            src_app_security__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], InterpreterService);
    return InterpreterService;
}());



/***/ }),

/***/ "./src/app/shared/services/local-settings.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/local-settings.service.ts ***!
  \***********************************************************/
/*! exports provided: LocalSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalSettingsService", function() { return LocalSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalSettingsService = /** @class */ (function () {
    function LocalSettingsService() {
        this.initialSettings = {
            requests: {},
            sidebar: {}
        };
    }
    LocalSettingsService.prototype.getRequestPanelSize = function (request) {
        var settings = this.getLocalSettings();
        return settings.requests[request.method + "-" + request.url];
    };
    LocalSettingsService.prototype.setRequestPanelSize = function (request, sizes) {
        if (request.url && sizes.length) {
            var settings = this.getLocalSettings();
            settings.requests[request.method + "-" + request.url] = sizes;
            localStorage.setItem('localSettings', JSON.stringify(settings));
        }
    };
    LocalSettingsService.prototype.setSidebar = function (appName, sidebar) {
        var settings = this.getLocalSettings();
        settings.sidebar[appName] = sidebar;
        localStorage.setItem('localSettings', JSON.stringify(settings));
    };
    LocalSettingsService.prototype.getSidebar = function (appName) {
        var settings = this.getLocalSettings();
        return settings.sidebar[appName];
    };
    LocalSettingsService.prototype.getLocalSettings = function () {
        try {
            var localSettings = localStorage.getItem('localSettings') || JSON.stringify(this.initialSettings);
            var settings = JSON.parse(localSettings);
            return settings;
        }
        catch (e) {
            console.error(e);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.initialSettings);
        }
    };
    LocalSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], LocalSettingsService);
    return LocalSettingsService;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/notification/notification.component */ "./src/app/shared/components/notification/notification.component.ts");




var NotificationService = /** @class */ (function () {
    function NotificationService(_document, componentFactoryResolver, appRef, injector) {
        this._document = _document;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    NotificationService.prototype.open = function (config) {
        this.appendModal(config);
    };
    NotificationService.prototype.close = function () {
        if (this.dialog) {
            this.dialog.modal.hide();
        }
    };
    NotificationService.prototype.appendModal = function (config) {
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]).create(this.injector);
        this.dialog = componentRef.instance;
        componentRef.instance.config = config;
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
    NotificationService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/sql-db.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/sql-db.service.ts ***!
  \***************************************************/
/*! exports provided: SqlDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlDbService", function() { return SqlDbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_security_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/security/services */ "./src/app/security/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var src_app_database_manager_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/database-manager/models */ "./src/app/database-manager/models.ts");









var API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + "/sql";
var SqlDbService = /** @class */ (function () {
    function SqlDbService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SqlDbService.prototype.getMyDbConnections = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + "/sql/my-db-connections";
        return this.http.get(url, this.authService.getHttpHeaders());
    };
    SqlDbService.prototype.getObject = function (sqlConnectionUrl, objectOwner, objectName, objectType) {
        if (objectType === void 0) { objectType = src_app_database_manager_models__WEBPACK_IMPORTED_MODULE_8__["ObjectType"].Table; }
        var url = sqlConnectionUrl + "/db-object/" + objectOwner + "/" + objectName + "/Fields,PrimaryKeys";
        if (objectType === src_app_database_manager_models__WEBPACK_IMPORTED_MODULE_8__["ObjectType"].View) {
            url += ',SqlText';
        }
        return this.http.get(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
        }));
    };
    SqlDbService.prototype.generateObject = function (sqlConnectionUrl, dataObject) {
        var _this = this;
        var objectOwner = dataObject.objectOwner, objectName = dataObject.objectName, objectId = dataObject.objectId;
        var url = sqlConnectionUrl + "/db-object/" + objectOwner + "/" + objectName;
        if (objectId !== 0) {
            return this.http.post(url, dataObject, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (id) {
                dataObject.objectId = id;
                return dataObject;
            }));
        }
        return this.getSqlObjects(sqlConnectionUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (objects) {
            if (objects.map(function (o) { return "" + o.objectOwner + o.objectName; }).includes("" + objectOwner.toLowerCase() + objectName)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Table name already exist.');
            }
            else {
                return _this.http.post(url, dataObject, _this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (id) {
                    dataObject.objectId = id;
                    return dataObject;
                }));
            }
        }));
    };
    SqlDbService.prototype.deleteObject = function (sqlConnectionUrl, object) {
        var objectOwner = object.objectOwner, objectName = object.objectName;
        var url = sqlConnectionUrl + "/db-object/" + objectOwner + "/" + objectName;
        return this.http.delete(url, this.authService.getHttpHeaders());
    };
    SqlDbService.prototype.getSqlObjects = function (sqlConnectionUrl) {
        return this.http.get(sqlConnectionUrl + "/db-objects", this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e); }));
    };
    /** @deprecated */
    SqlDbService.prototype.getSqlObjectData = function (sqlConnectionUrl, objectOwner, objectName) {
        var url = sqlConnectionUrl + "/select-all/from/" + objectOwner + "/" + objectName;
        return this.http.get(url, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.table; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(typeof e.error === 'string' ? e.error : 'Not found'); }));
    };
    SqlDbService.prototype.selectSqlObjectData = function (connection, objectOwner, objectName, selectBody) {
        var url = API_URL + "/" + connection + "/select/from/" + objectOwner + "/" + objectName;
        var correctValueFn = function (filterValue) { return filterValue instanceof Date
            ? Object(_utils__WEBPACK_IMPORTED_MODULE_7__["dateToDtoString"])(filterValue) : filterValue; };
        // clone filters and convert dates
        selectBody = Object.assign({}, selectBody);
        if (selectBody.filters) {
            var filters = [];
            for (var _i = 0, _a = selectBody.filters; _i < _a.length; _i++) {
                var filter = _a[_i];
                var newFilter = Object.assign({}, filter);
                newFilter.value = Array.isArray(filter.value) ?
                    filter.value.map(function (v) { return correctValueFn(v); }) : correctValueFn(filter.value);
                filters.push(newFilter);
            }
            selectBody.filters = filters;
        }
        return this.http.post(url, selectBody, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.table; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getErrorMessage"])(e, 'Not found')); }));
    };
    SqlDbService.prototype.saveSqlObjectDataWithStatus = function (sqlConnectionUrl, dataObject, data) {
        var url = sqlConnectionUrl + "/save/" + dataObject.objectOwner + "/" + dataObject.objectName;
        var s = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            inserted: 0, deleted: 0, updated: 0, savedItemsCount: 0, itemsToSaveCount: data.tableData.rows.length
        });
        this.saveSqlObjectBatchData(url, data, s).subscribe(function () { return s.complete(); }, function (e) { return s.error(e); });
        return s;
    };
    SqlDbService.prototype.saveSqlObjectData = function (connection, dataObject, data) {
        var url = API_URL + "/" + connection + "/save/" + dataObject.objectOwner + "/" + dataObject.objectName;
        return this.saveSqlObjectBatchData(url, data, null);
    };
    SqlDbService.prototype.saveSqlObjectBatchData = function (url, data, s, index, res) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (res === void 0) { res = {
            inserted: 0, updated: 0, deleted: 0, itemsToSaveCount: 0, savedItemsCount: 0
        }; }
        var rows = [];
        var allRows = data.tableData.rows;
        var currentIndex = index;
        var currentSize = 0;
        var maxTableSize = 1500000;
        var maxRowsCount = 10000 + index;
        while (currentIndex < maxRowsCount && currentSize < maxTableSize && currentIndex < allRows.length) {
            rows.push(allRows[currentIndex]);
            currentSize += JSON.stringify(allRows[currentIndex]).length;
            currentIndex++;
        }
        return this.http.post(url, { tableData: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data.tableData, { rows: rows }) }, this.authService.getHttpHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) {
            res.inserted += response.inserted;
            res.updated += response.updated;
            res.deleted += response.deleted;
            res.savedItemsCount = currentIndex;
            res.itemsToSaveCount = allRows.length;
            if (s) {
                s.next(res);
            }
            if (currentIndex < allRows.length) {
                return _this.saveSqlObjectBatchData(url, data, s, currentIndex, res);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(res);
            }
        }));
    };
    SqlDbService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_security_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    SqlDbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_security_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SqlDbService);
    return SqlDbService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid.filter */ "./node_modules/wijmo/wijmo.angular2.grid.filter.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/core/fesm5/ngx-dynamic-components-core.js");
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/bootstrap/fesm5/ngx-dynamic-components-bootstrap.js");
/* harmony import */ var _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-dynamic-components/material */ "../ngx-dynamic-components/dist/@ngx-dynamic-components/material/fesm5/ngx-dynamic-components-material.js");
/* harmony import */ var _components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dynamic-modal/dynamic-modal.component */ "./src/app/shared/components/dynamic-modal/dynamic-modal.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/shared/components/notification/notification.component.ts");
/* harmony import */ var _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dynamic-dialog/dynamic-dialog.component */ "./src/app/shared/components/dynamic-dialog/dynamic-dialog.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _directives_forbidden_values_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/forbidden-values.directive */ "./src/app/shared/directives/forbidden-values.directive.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/shared/components/layout/layout.component.ts");
/* harmony import */ var _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/page-config/page-config.component */ "./src/app/shared/components/page-config/page-config.component.ts");
/* harmony import */ var _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/list-view/list-view.component */ "./src/app/shared/components/list-view/list-view.component.ts");
/* harmony import */ var _components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/page-info/page-info.component */ "./src/app/shared/components/page-info/page-info.component.ts");
/* harmony import */ var _components_content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/content-explorer/content-explorer.component */ "./src/app/shared/components/content-explorer/content-explorer.component.ts");
/* harmony import */ var _components_split_content_split_content_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/split-content/split-content.component */ "./src/app/shared/components/split-content/split-content.component.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/shared/components/confirmation/confirmation.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/shared/components/filter/filter.component.ts");
/* harmony import */ var _components_manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/manage-filters/manage-filters.component */ "./src/app/shared/components/manage-filters/manage-filters.component.ts");
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/filters/filters.component */ "./src/app/shared/components/filters/filters.component.ts");
/* harmony import */ var _components_json_preview_json_preview_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/json-preview/json-preview.component */ "./src/app/shared/components/json-preview/json-preview.component.ts");
/* harmony import */ var _services_interpreter_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/interpreter.service */ "./src/app/shared/services/interpreter.service.ts");







































var SharedModule = /** @class */ (function () {
    function SharedModule(interpreterService) {
        this.interpreterService = interpreterService;
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_26__["NotificationService"]]
        };
    };
    var SharedModule_1;
    SharedModule.ctorParameters = function () { return [
        { type: _services_interpreter_service__WEBPACK_IMPORTED_MODULE_38__["InterpreterService"] }
    ]; };
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_19__["DynamicModalComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_20__["PageHeaderComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_21__["NavComponent"], _directives_forbidden_values_directive__WEBPACK_IMPORTED_MODULE_25__["ForbiddenValidatorDirective"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"], _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DynamicDialogComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_27__["LayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"], _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_28__["PageConfigComponent"],
                _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_29__["ListViewComponent"], _components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_30__["PageInfoComponent"], _components_content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_31__["ContentExplorerComponent"], _components_split_content_split_content_component__WEBPACK_IMPORTED_MODULE_32__["SplitContentComponent"],
                _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmationComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_34__["FilterComponent"], _components_manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_35__["ManageFiltersComponent"], _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_36__["FiltersComponent"], _components_json_preview_json_preview_component__WEBPACK_IMPORTED_MODULE_37__["JsonPreviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(),
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_14__["DeviceDetectorModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjGridModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7__["WjGridFilterModule"],
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_16__["CoreModule"],
                _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BootstrapModule"],
                _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_15__["DragulaModule"].forRoot()
            ],
            exports: [_components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_19__["DynamicModalComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_20__["PageHeaderComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_21__["NavComponent"],
                wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjGridModule"], wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7__["WjGridFilterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _directives_forbidden_values_directive__WEBPACK_IMPORTED_MODULE_25__["ForbiddenValidatorDirective"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"], _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DynamicDialogComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_27__["LayoutComponent"], _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_28__["PageConfigComponent"],
                _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_29__["ListViewComponent"], _components_content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_31__["ContentExplorerComponent"], _components_split_content_split_content_component__WEBPACK_IMPORTED_MODULE_32__["SplitContentComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_34__["FilterComponent"],
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_36__["FiltersComponent"], _components_json_preview_json_preview_component__WEBPACK_IMPORTED_MODULE_37__["JsonPreviewComponent"]],
            entryComponents: [_components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_19__["DynamicModalComponent"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"], _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DynamicDialogComponent"],
                _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_28__["PageConfigComponent"], _components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_30__["PageInfoComponent"], _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmationComponent"], _components_manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_35__["ManageFiltersComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_interpreter_service__WEBPACK_IMPORTED_MODULE_38__["InterpreterService"]])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: formatCamelStr, mapTableToValues, dateToDtoString, parseDatetimeOrNull, parseNumberOrNull, replaceAll, parseBooleanOrNull, mapValuesToTable, formatObjToJsonStr, transposeData, getDomain, verifyFields, compareFields, compareSqlObjects, compareColumns, generateFields, getTableColumns, getErrorMessage, deepClone, getFilters, hasValue, formatToPrimitive, formatWijmoDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCamelStr", function() { return formatCamelStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTableToValues", function() { return mapTableToValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToDtoString", function() { return dateToDtoString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDatetimeOrNull", function() { return parseDatetimeOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNumberOrNull", function() { return parseNumberOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBooleanOrNull", function() { return parseBooleanOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValuesToTable", function() { return mapValuesToTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatObjToJsonStr", function() { return formatObjToJsonStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeData", function() { return transposeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomain", function() { return getDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyFields", function() { return verifyFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareFields", function() { return compareFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareSqlObjects", function() { return compareSqlObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareColumns", function() { return compareColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFields", function() { return generateFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableColumns", function() { return getTableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilters", function() { return getFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToPrimitive", function() { return formatToPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWijmoDate", function() { return formatWijmoDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _database_manager_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database-manager/models */ "./src/app/database-manager/models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




function formatCamelStr(str) {
    if (str === void 0) { str = ''; }
    return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
}
function mapTableToValues(table) {
    var values = [];
    var hasDataTypes = Boolean(table.dataTypes);
    for (var _i = 0, _a = table.rows || []; _i < _a.length; _i++) {
        var row = _a[_i];
        var value = {};
        for (var i = 0; i < table.fieldNames.length; i++) {
            var fieldName = table.fieldNames[i];
            var dataType = hasDataTypes ? table.dataTypes[i] : null;
            if (dataType === _models__WEBPACK_IMPORTED_MODULE_1__["SQLDataTypes"].DATE && row[i]) {
                value[fieldName] = new Date(row[i]);
            }
            else {
                value[fieldName] = row[i];
            }
        }
        values.push(value);
    }
    return values;
}
function dateToDtoString(d) {
    var date = new Date(d.getTime());
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().replace('T00:00:00.000Z', '');
}
function parseDatetimeOrNull(value) {
    if (!value)
        return null;
    if (value instanceof Date && !isNaN(value.valueOf()))
        return value;
    // only string values can be converted to Date
    if (typeof value !== "string")
        return null;
    var strValue = String(value);
    if (!strValue.length)
        return null;
    var parseMonth = function (mm) {
        if (!mm || !mm.length) {
            return NaN;
        }
        var m = parseInt(mm);
        if (!isNaN(m)) {
            return m - 1;
        }
        // make sure english months are coming through
        if (mm.startsWith('jan'))
            return 0;
        if (mm.startsWith('feb'))
            return 1;
        if (mm.startsWith('mar'))
            return 2;
        if (mm.startsWith('apr'))
            return 3;
        if (mm.startsWith('may'))
            return 4;
        if (mm.startsWith('jun'))
            return 5;
        if (mm.startsWith('jul'))
            return 6;
        if (mm.startsWith('aug'))
            return 7;
        if (mm.startsWith('sep'))
            return 8;
        if (mm.startsWith('oct'))
            return 9;
        if (mm.startsWith('nov'))
            return 10;
        if (mm.startsWith('dec'))
            return 11;
        return NaN;
    };
    var correctYear = function (yy) {
        if (yy < 100) {
            return yy < 68 ? yy + 2000 : yy + 1900;
        }
        else {
            return yy;
        }
    };
    var validDateOrNull = function (yyyy, month, day, hours, mins, ss) {
        if (month > 11 || day > 31 || hours >= 60 || mins >= 60 || ss >= 60)
            return null;
        var d = new Date(yyyy, month, day, hours, mins, ss, 0);
        return !isNaN(d.valueOf()) ? d : null;
    };
    var strTokens = strValue.replace('T', ' ').toLowerCase().split(/[: /-]/);
    var dt = strTokens.map(parseFloat);
    // try ISO first
    var d = validDateOrNull(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0);
    if (d)
        return d;
    // then UK
    d = validDateOrNull(correctYear(dt[2]), parseMonth(strTokens[1]), dt[0], dt[3] || 0, dt[4] || 0, dt[5] || 0);
    if (d)
        return d;
    // then US
    d = validDateOrNull(correctYear(dt[2]), parseMonth(strTokens[0]), correctYear(dt[1]), dt[3] || 0, dt[4] || 0, dt[5] || 0);
    if (d)
        return d;
    return null;
}
function parseNumberOrNull(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (!value || typeof value !== 'string') {
        return null;
    }
    var res = parseFloat(value.replace(/,/g, ''));
    return !isNaN(res) ? res : null;
}
function replaceAll(text, searchValue, replaceValue) {
    if (replaceValue === void 0) { replaceValue = ''; }
    return text.replace(new RegExp(searchValue, 'g'), replaceValue || '');
}
function parseBooleanOrNull(val) {
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
}
// what type parameter 'values' is ????
function mapValuesToTable(values) {
    var tableDto = {
        fieldNames: [],
        rows: []
    };
    if (!values.length) {
        return tableDto;
    }
    tableDto.fieldNames = Object.keys(values[0]);
    tableDto.rows = values
        .map(function (rowValues) { return Object.values(rowValues)
        .map(function (v) { return v instanceof Date ? dateToDtoString(v) : v; }); });
    return tableDto;
}
function formatObjToJsonStr(obj) {
    if (obj === null || obj === undefined) {
        return '';
    }
    if (typeof obj === 'string') {
        return obj;
    }
    return JSON.stringify(obj, null, '\t');
}
function transposeData(data) {
    if (!data) {
        return null;
    }
    return Object.keys(data[0]).map(function (key) {
        var res = {};
        data.forEach(function (item, i) {
            if (i === 0) {
                res.fieldName = key;
            }
            res['row' + i] = item[key];
        });
        return res;
    });
}
function getDomain(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    match = url.match(/^{{\w+}}/i);
    if (match && match.length) {
        return match[0];
    }
    return null;
}
function verifyFields(fields, comparedFields) {
    return fields.length === comparedFields.length && fields.every(function (f) {
        var comparedField = comparedFields.find(function (cf) { return cf.fieldName === f.fieldName; });
        if (!comparedField) {
            return false;
        }
        return compareColumns(comparedField, f);
    });
}
function compareFields(a, b) {
    return ['dataType', 'fieldName', 'isNullable', 'size'].every(function (prop) { return a[prop] === b[prop]; });
}
function compareSqlObjects(a, b) {
    if (!(a && b && a.objectName === b.objectName && a.objectOwner === b.objectOwner)) {
        return false;
    }
    if (a.objectType === _database_manager_models__WEBPACK_IMPORTED_MODULE_2__["ObjectType"].View) {
        return a.sqlText === b.sqlText;
    }
    return verifyFields(getTableColumns(a), getTableColumns(b));
}
function compareColumns(a, b) {
    return ['dataType', 'fieldName', 'isKey', 'size'].every(function (prop) { return a[prop] === b[prop]; });
}
function generateFields(arr) {
    if (!Array.isArray(arr)) {
        arr = Object.keys(arr);
    }
    return arr.map(function (prop) { return ({
        fieldName: prop,
        dataType: _models__WEBPACK_IMPORTED_MODULE_1__["SQLDataTypes"].TEXT,
        size: 100,
        isNullable: false
    }); });
}
function getTableColumns(obj) {
    var primaryKeys = (obj.primaryKeys || []).map(function (o) { return o.fieldName; });
    return obj.fields.map(function (f) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, f, { isKey: primaryKeys.includes(f.fieldName) })); });
}
function getErrorMessage(e, msg) {
    if (typeof e === 'string') {
        return e;
    }
    var error = e.error;
    if (typeof e.error === 'object' && e.error !== null) {
        error = [e.error.title, Object.values(e.error.errors)].join('\n');
        return error;
    }
    else if (typeof error === 'string') {
        return error;
    }
    else {
        return e.message || msg;
    }
}
function deepClone(obj) {
    if (obj == null || obj == undefined) {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (Array.isArray(obj)) {
        return obj.map(function (v) { return deepClone(v); });
    }
    if (typeof obj === 'object') {
        var clone = {};
        for (var propName in obj) {
            var propValue = obj[propName];
            if (propValue == null || propValue == undefined) {
                clone[propName] = propValue;
            }
            else if (propValue instanceof Date) {
                clone[propName] = new Date(propValue.getTime());
            }
            else if (Array.isArray(propValue)) {
                clone[propName] = propValue.map(function (v) { return deepClone(v); });
            }
            else if (typeof (propValue) == "object") {
                clone[propName] = deepClone(propValue);
            }
            else {
                clone[propName] = propValue;
            }
        }
        return clone;
    }
    return obj;
}
function getFilters(currentFilters, currentFildName) {
    if (currentFildName === void 0) { currentFildName = null; }
    if (!currentFilters) {
        return null;
    }
    var filters = Object.entries(currentFilters).
        filter(function (_a) {
        var fieldName = _a[0], value = _a[1];
        return hasValue(value) && fieldName !== currentFildName;
    }).
        map(function (_a) {
        var fieldName = _a[0], value = _a[1];
        return ({
            AndOr: 'And',
            fieldName: fieldName,
            operation: _models__WEBPACK_IMPORTED_MODULE_1__["Operation"].In,
            value: value
        });
    });
    return hasValue(filters) ? filters : null;
}
function hasValue(value) {
    return Array.isArray(value) && value.length || !Array.isArray(value) && value;
}
/**
 * Formats data to array/object with primitive values.
 */
function formatToPrimitive(data) {
    if (Array.isArray(data)) {
        return data.map(function (item) {
            return formatToPrimitiveObject(item);
        });
    }
    if (data instanceof Date) {
        return dateToDtoString(data);
    }
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return data;
}
/**
 * Formats object values to primitives.
 */
function formatToPrimitiveObject(obj) {
    var res = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj);
    Object.entries(res).forEach(function (_a) {
        var key = _a[0], val = _a[1];
        if (val instanceof Date) {
            res[key] = dateToDtoString(val);
        }
        else if (typeof val === 'object') {
            res[key] = JSON.stringify(val);
        }
    });
    return res;
}
function formatWijmoDate(v, displayFormat) {
    if (!displayFormat) {
        displayFormat = 'dd/MM/yyyy';
    }
    return moment__WEBPACK_IMPORTED_MODULE_3__(v).format(displayFormat.replace('yyyy', 'YYYY').replace('dd', 'DD'));
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    useHash: false,
    // apiBaseUrl: 'https://localhost:44308/api'
    apiBaseUrl: 'https://worksheets-web-api-test.azurewebsites.net/api',
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vkukurba/Development/Projects/upwork/worksheets2-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map