(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/node_modules/raw-loader!../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex combo-list\" (keyup.enter)=\"onEnter($event)\">\n  <ng-container *ngFor=\"let prop of props; let i = index\">\n    <input *ngIf=\"isInput(prop)\" type=\"text\" class=\"form-control\" [ngModel]=\"result[i]\"\n      [name]=\"prop\" (blur)=\"setValue($event.target.value, i)\"\n      (input)=\"result[i] = $event.target.value\">\n    <ng-select *ngIf=\"isSelect(prop)\" [items]=\"prop\" class=\"property\"\n      (change)=\"onSelect($event, i)\" [ngModel]=\"selectedOption(i)\"></ng-select>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/node_modules/raw-loader!../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<accordion class=\"d-flex flex-fill flex-column p-0 m-0 w-100\">\n  <accordion-group *ngFor=\"let g of groups\" isOpen=\"true\">\n    <div class=\"header\" accordion-heading>\n      <i class=\"fa text-center fa-chevron-down\"></i>\n      <i class=\"fa text-center fa-chevron-right\"></i>\n      {{g.value}}\n    </div>\n    <ul class=\"d-flex flex-fill flex-column p-0 m-0 components-list\">\n      <li class=\"component p-2 m-1 handle d-flex align-items-baseline cursor-pointer\" *ngFor=\"let item of g.list\" id=\"{{item.packageName}}:{{item.name}}\">\n        {{item.label}}\n      </li>\n    </ul>\n  </accordion-group>\n</accordion>\n"

/***/ }),

/***/ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/node_modules/raw-loader!../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split unit=\"pixel\" #split=\"asSplit\" class=\"row h-100 preview edit-mode m-0 w-100\" direction=\"horizontal\"\n  [useTransition]=\"true\">\n  <as-split-area class=\"d-flex flex-column\">\n    <as-split [useTransition]=\"true\" [ngClass]=\"{'full-mode': fullMode}\" (onDragEnd)=\"onSizeChange()\" (transitionEnd)=\"onSizeChange()\">\n        <as-split-area #area0=\"asSplitArea\" class=\"d-flex mb-0 position-relative\" [size]=\"scriptConfigSize\">\n            <div class=\"tabs-actions position-absolute\">\n              <button type=\"button\" class=\"btn btn-light btn-sm px-1 py-0\" (click)=\"formatJSON()\"\n                    [ngClass]=\"{active: formatted}\" title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n                    <i class=\"fa fa-indent\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\"\n                    [ngClass]=\"{active: !formatted}\" title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n                    <i class=\"fa fa-align-justify\"></i>\n              </button>\n            </div>\n            <tabset class=\"tabset-fx w-100\">\n              <tab heading=\"UI Model\">\n                <div #uiModelEl class=\"h-100 ace-editor\"></div>\n              </tab>\n              <tab heading=\"Script\">\n                <div #script class=\"h-100 ace-editor\"></div>\n              </tab>\n            </tabset>\n          </as-split-area>\n          <as-split-area [size]=\"100 - scriptConfigSize\" #area1=\"asSplitArea\" class=\"d-flex overflow-auto flex-column\">\n            <ngx-dynamic-component class=\"flex-fill pt-4 h-100\" *ngIf=\"uiModelVal\"\n              [uiModel]='uiModelVal' [interpreter]=\"interpreter\" [dataModel]='{}' [scripts]='scripts'></ngx-dynamic-component>\n            <div id=\"empty-container\" class=\"w-100 h-100\" *ngIf=\"!uiModelVal\"></div>\n          </as-split-area>\n    </as-split>\n    <div class=\"btn-group d-block mode\">\n      <label class=\"btn btn-light btn-sm cursor-pointer\" ngDefaultControl [(ngModel)]=\"modeState.script\" [class.active]=\"modeState.script\"\n        btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-script\" (click)=\"onModeState('script')\" title=\"UIModel & Script code\">\n        <i class=\"fa fa-code fa-lg\"></i> Configuration\n      </label>\n      <label class=\"btn btn-light btn-sm cursor-pointer\" ngDefaultControl [(ngModel)]=\"modeState.designer\" [class.active]=\"modeState.designer\"\n        btnCheckbox tabindex=\"0\" role=\"button\" name=\"mode-designer\" (click)=\"onModeState('designer')\" title=\"Designer\">\n        <i class=\"fa fa-cubes fa-lg\"></i> Designer\n      </label>\n    </div>\n  </as-split-area>\n  <as-split-area #area2=\"asSplitArea\" class=\"d-flex mb-0\" [size]=\"350\" [maxSize]=\"600\">\n    <tabset #tabset class=\"tabset-fx w-100\">\n      <tab heading=\"Components\" (selectTab)=\"onComponentsTabSelect()\">\n        <dc-controls-panel #controlsPanel class=\"h-100 overflow-auto\"></dc-controls-panel>\n      </tab>\n      <tab heading=\"Properties\" [disabled]=\"!uiModelToEdit\">\n        <dc-properties-editor class=\"h-100 overflow-auto\" *ngIf=\"uiModelToEdit\"\n          (updatedProperty)=\"onPropertyChange()\" (selectParent)=\"onParentSelect()\" (clone)=\"onClone()\" [uiModel]=\"uiModelToEdit\"></dc-properties-editor>\n      </tab>\n    </tabset>\n  </as-split-area>\n</as-split>\n"

/***/ }),

/***/ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/node_modules/raw-loader!../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-container\" fxLayout=\"column\" (keyup.enter)=\"onSave()\">\n  <div class=\"d-flex align-items-baseline justify-content-between\">\n    <h5>{{label}}</h5>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-light\" (click)=\"selectParent.emit()\" title=\"Select parent\">\n        <i class=\"fa fa-arrow-up fa-lg\"></i>\n      </button>\n      <button class=\"btn btn-light\" (click)=\"clone.emit()\" title=\"Clone component\">\n        <i class=\"fa fa-clone fa-lg\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"form-group d-flex pl-1 my-1\">\n    <label for=\"container-prop-id\" title=\"Component ID\" class=\"col-form-label px-0 py-1\">ID</label>\n    <div class=\"flex-fill\">\n      <input type=\"text\" class=\"form-control\" name=\"id\" id=\"container-prop-id\" [(ngModel)]=\"uiModel.id\">\n    </div>\n  </div>\n  <accordion class=\"d-flex flex-fill flex-column p-0 m-0 w-100\">\n    <accordion-group *ngFor=\"let g of groups\" isOpen=\"true\" class=\"{{strToKebabCase(g.value)}}\">\n      <div class=\"header\" accordion-heading>\n        <i class=\"fa text-center fa-chevron-down\"></i>\n        <i class=\"fa text-center fa-chevron-right\"></i>\n        {{g.value}}\n      </div>\n      <ul class=\"d-flex flex-fill flex-column p-0 m-0\">\n        <li class=\"pl-1 mt-1 d-flex cursor-pointer prop-{{item.name}}\" *ngFor=\"let item of g.list\">\n          <label for=\"container-prop-{{item.name}}\" class=\"col-form-label px-0 py-1\">{{item.label}}</label>\n          <div class=\"flex-fill\">\n            <dc-combo-property [properties]=\"item.combo\" [value]=\"item.value\" *ngIf=\"item.combo\"\n              (change)=\"onSelect($event, item)\"></dc-combo-property>\n            <input *ngIf=\"!item.combo\" type=\"text\" class=\"form-control\" [value]=\"item.value\"\n              [name]=\"item.name\" id=\"container-prop-{{item.name}}\" (blur)=\"onSave()\"\n              (input)=\"updateProperty($event.target.value, item)\">\n          </div>\n          <button class=\"btn px-1 py-0\" title=\"Help\" [popover]=\"popTemplate\" [outsideClick]=\"true\">\n            <i class=\"fa fa-question-circle-o\"></i>\n          </button>\n          <ng-template #popTemplate>\n            <div [innerHtml]=\"item.descriptor.description\"></div>\n            <a *ngIf=\"item.descriptor.link\" [href]=\"item.descriptor.link\" target=\"blank\">Details</a>\n          </ng-template>\n        </li>\n      </ul>\n    </accordion-group>\n  </accordion>\n</div>\n"

/***/ }),

/***/ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/node_modules/raw-loader!../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Workflow Step</h4>\n        <button type=\"button\" class=\"close\" (click)=\"modal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body px-4\">\n        <div class=\"form-group my-1\">\n          <label for=\"action-search-id\" title=\"Search for actions\" class=\"col-form-label px-0 py-1\">Search for actions</label>\n            <div class=\"flex-fill\">\n              <input type=\"text\" (input)=\"setFilteredActions()\" class=\"form-control\" placeholder=\"Type action name\" name=\"search\" id=\"action-search-id\" [(ngModel)]=\"search\">\n            </div>\n          </div>\n        <label class=\"mt-2 mb-0 h-5 pb-1\">Select action step</label>\n        <div class=\"actions-list\">\n            <div *ngFor=\"let action of filteredActions\" class=\"p-1 action\" [ngClass]=\"{active: selectedAction === action}\"\n            (click)=\"onSelect(action)\"><h5 class=\"mb-0\">{{action.name}}</h5><em>{{action.description}}</em></div>\n            <h5 class=\"my-2\" *ngIf=\"!filteredActions.length\">No actions found</h5>\n        </div>\n        <label class=\"mt-2 mb-0 h-5 pb-1\">Sample Configuration</label>\n        <div class=\"ace-editor\" #configEl></div>\n      </div>\n      <div class=\"modal-footer flex-column\">\n        <div class=\"row w-100 mx-0 px-0\">\n          <div class=\"btn-group ml-auto\" dropdown>\n            <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n              aria-controls=\"dropdown-basic\">\n              Append to <span class=\"caret\"></span>\n            </button>\n            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n              <li role=\"menuitem\" *ngFor=\"let item of mapArray\"><a class=\"dropdown-item cursor-pointer\" (click)=\"appendTo(item)\">{{item}}</a></li>\n            </ul>\n          </div>\n          <button type=\"button\" class=\"btn btn-light ml-1\" (click)=\"modal.hide()\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/node_modules/raw-loader!../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"properties.isForm\" drop-container (ngSubmit)=\"onFormSubmit($event)\" #form\n  [fxLayout]=\"properties.fxLayout || 'row'\"\n  [fxLayoutGap]=\"properties.fxLayoutGap || '0'\"\n  [fxLayoutAlign]=\"getStrValue(properties.fxLayoutAlign)\"\n  [ngStyle]=\"itemStyles\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</form>\n<div *ngIf=\"!properties.isForm\" drop-container\n  [fxLayout]=\"properties.fxLayout || 'row'\"\n  [fxLayoutGap]=\"properties.fxLayoutGap || '0'\"\n  [fxLayoutAlign]=\"getStrValue(properties.fxLayoutAlign)\"\n  [ngStyle]=\"itemStyles\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n<ng-template #content>\n  <div *ngFor=\"let item of uiModel.children\" class=\"item\"\n    [fxFlex]=\"item.containerProperties?.fxFlex || 'initial'\"\n    [fxFlexOrder]=\"item.containerProperties?.fxFlexOrder || 0\"\n    [fxFlexOffset]=\"item.containerProperties?.fxFlexOffset || '0%'\"\n    [fxFlexAlign]=\"item.containerProperties?.fxFlexAlign || 'unset'\"\n    [attr.fxFlexFill]=\"item.containerProperties?.fxFill || false\">\n\n    <dc-ui-selector (changedDataModel)=\"changedDataModel.emit($event)\"\n      [uiModel]='item'\n      [dataModel]='dataModel'\n      [interpreter]='interpreter'\n      [scripts]='scripts'></dc-ui-selector>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/bootstrap.module.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/bootstrap.module.ts ***!
  \********************************************************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/utils */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "../ngx-dynamic-components/node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/container/container.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/container/container.component.ts");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/register.ts");
/* harmony import */ var _components_container_row_container_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/container-row/container-row.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/container-row/container-row.component.ts");
/* harmony import */ var _components_input_ui_input_ui_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/input-ui/input-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/input-ui/input-ui.component.ts");
/* harmony import */ var _components_select_ui_select_ui_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/select-ui/select-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/select-ui/select-ui.component.ts");
/* harmony import */ var _components_checkbox_ui_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/checkbox-ui/checkbox-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/checkbox-ui/checkbox-ui.component.ts");
/* harmony import */ var _components_radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/radio-group-ui/radio-group-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/radio-group-ui/radio-group-ui.component.ts");
/* harmony import */ var _components_textarea_ui_textarea_ui_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/textarea-ui/textarea-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/textarea-ui/textarea-ui.component.ts");
/* harmony import */ var _components_button_ui_button_ui_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/button-ui/button-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/button-ui/button-ui.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/card/card.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/card/card.component.ts");
/* harmony import */ var _components_text_ui_text_ui_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/text-ui/text-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/text-ui/text-ui.component.ts");



















var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__["setTheme"])('bs4');
        Object(_components_register__WEBPACK_IMPORTED_MODULE_9__["registerComponents"])();
    }
    BootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"], _components_container_row_container_row_component__WEBPACK_IMPORTED_MODULE_10__["ContainerRowComponent"], _components_input_ui_input_ui_component__WEBPACK_IMPORTED_MODULE_11__["InputUIComponent"], _components_select_ui_select_ui_component__WEBPACK_IMPORTED_MODULE_12__["SelectUIComponent"],
                _components_checkbox_ui_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxUIComponent"], _components_radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_14__["RadioGroupUIComponent"], _components_textarea_ui_textarea_ui_component__WEBPACK_IMPORTED_MODULE_15__["TextareaUIComponent"], _components_button_ui_button_ui_component__WEBPACK_IMPORTED_MODULE_16__["ButtonUIComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"], _components_text_ui_text_ui_component__WEBPACK_IMPORTED_MODULE_18__["TextUIComponent"]],
            imports: [
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]
            ],
            exports: [_components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"], _components_container_row_container_row_component__WEBPACK_IMPORTED_MODULE_10__["ContainerRowComponent"], _components_input_ui_input_ui_component__WEBPACK_IMPORTED_MODULE_11__["InputUIComponent"]],
            entryComponents: [_components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"], _components_container_row_container_row_component__WEBPACK_IMPORTED_MODULE_10__["ContainerRowComponent"], _components_input_ui_input_ui_component__WEBPACK_IMPORTED_MODULE_11__["InputUIComponent"], _components_select_ui_select_ui_component__WEBPACK_IMPORTED_MODULE_12__["SelectUIComponent"],
                _components_checkbox_ui_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxUIComponent"], _components_radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_14__["RadioGroupUIComponent"], _components_textarea_ui_textarea_ui_component__WEBPACK_IMPORTED_MODULE_15__["TextareaUIComponent"], _components_button_ui_button_ui_component__WEBPACK_IMPORTED_MODULE_16__["ButtonUIComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"], _components_text_ui_text_ui_component__WEBPACK_IMPORTED_MODULE_18__["TextUIComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BootstrapModule);
    return BootstrapModule;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/button-ui/button-ui.component.ts":
/*!********************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/button-ui/button-ui.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ButtonUIComponent, ButtonProperties, example, buttonDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonUIComponent", function() { return ButtonUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonProperties", function() { return ButtonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonDescriptor", function() { return buttonDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var ButtonUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonUIComponent, _super);
    function ButtonUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonUIComponent.prototype.onClick = function () {
        if (this.properties.clickActionKey) {
            this.interpreter.evaluate(this.scripts, { dataModel: this.dataModel, uiModel: this.uiModel }, this.properties.clickActionKey);
            this.changedDataModel.emit(this.dataModel);
        }
    };
    Object.defineProperty(ButtonUIComponent.prototype, "btnClass", {
        get: function () {
            var _a;
            return _a = {},
                _a["btn " + this.properties.btnClass] = this.properties.btnClass,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    ButtonUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-button-ui',
            template: "\n    <button [ngClass]=\"btnClass\"\n      [type]=\"properties.type\" [ngStyle]=\"itemStyles\"\n      (click)=\"onClick()\">{{properties.label}}</button>\n  "
        })
    ], ButtonUIComponent);
    return ButtonUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var ButtonProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonProperties, _super);
    function ButtonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Button label',
            example: 'Click me!',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonProperties.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Key for action that fires onclick',
            example: 'submit',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonProperties.prototype, "clickActionKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Bootstrap predefined button class',
            example: 'btn-secondary',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonProperties.prototype, "btnClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Button type: button|submit|reset. Default: button',
            example: 'submit',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonProperties.prototype, "type", void 0);
    return ButtonProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["StyleProperties"]));

var example = {
    title: 'Basic button example',
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":button",
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
var buttonDescriptor = {
    name: 'button',
    label: 'Button',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Button component',
    itemProperties: ButtonProperties,
    component: ButtonUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":button",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            clickActionKey: 'consoleLog',
            btnClass: 'btn-primary',
            type: 'button'
        }
    },
    propertiesDescriptor: [
        ['type', { name: 'type', label: 'Type', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [['button', 'submit', 'reset']]
            }],
        ['btnClass', { name: 'btnClass', label: 'CSS Class', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [['btn-primary', 'btn-secondary', 'btn-light', 'btn-success', 'btn-danger',
                        'btn-warning', 'btn-info', 'btn-dark', 'btn-link']]
            }],
    ]
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/card/card.component.ts":
/*!**********************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/card/card.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CardComponent, CardProperties, cardDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProperties", function() { return CardProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardDescriptor", function() { return cardDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var CardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CardComponent, _super);
    function CardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardComponent.prototype, "header", {
        get: function () {
            return this.getChildByIndex(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "content", {
        get: function () {
            return this.getChildByIndex(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "footer", {
        get: function () {
            return this.getChildByIndex(2);
        },
        enumerable: true,
        configurable: true
    });
    CardComponent.prototype.getChildByIndex = function (index) {
        return Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["getItemByIndex"])(this.uiModel.children, index);
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-card',
            template: "\n  <div class=\"card\">\n    <div class=\"card-header\" *ngIf=\"header\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='header'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </div>\n    <div class=\"card-body\" *ngIf=\"content\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='content'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </div>\n    <div class=\"card-footer\" *ngIf=\"footer\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='footer'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </div>\n  </div>",
        })
    ], CardComponent);
    return CardComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var CardProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CardProperties, _super);
    function CardProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Card can have 3 children, 1 - header, 2 - content, 3 - footer.',
            example: "[null, {\n      type: 'material:text',\n      containerProperties: {},\n      itemProperties: {\n        text: 'Card content text',\n      }\n    }, null]",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardProperties.prototype, "children", void 0);
    return CardProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ContainerProperties"]));

var example = {
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
var cardDescriptor = {
    name: 'card',
    label: 'Card',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Containers" /* Containers */,
    description: 'Card layout component',
    itemProperties: CardProperties,
    component: CardComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/checkbox-ui/checkbox-ui.component.ts":
/*!************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/checkbox-ui/checkbox-ui.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CheckboxUIComponent, CheckboxProperties, example, checkboxDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxUIComponent", function() { return CheckboxUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxProperties", function() { return CheckboxProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxDescriptor", function() { return checkboxDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var CheckboxUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxUIComponent, _super);
    function CheckboxUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CheckboxUIComponent.prototype, "align", {
        get: function () {
            return this.layout === 'row' ? 'start center' : 'center start';
        },
        enumerable: true,
        configurable: true
    });
    CheckboxUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-checkbox-ui',
            template: "\n    <div [fxLayout]=\"layout\" [fxLayoutAlign]=\"align\" [ngStyle]=\"itemStyles\">\n      <label *ngIf=\"hasLabel\" [for]=\"id\"  class=\"{{properties.labelPosition}} my-0\"\n      [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n      <input type=\"checkbox\" class=\"mx-0\" [attr.id]=\"id\"\n        (change)=\"changedDataModel.emit(this.dataModel)\"\n        [(ngModel)]=\"componentDataModel\">\n    </div>\n  ",
            styles: ["\n    label.bottom, label.top {\n      margin: 0;\n    }\n\n    label.right {\n      margin-left: 5px;\n    }\n\n    label.left {\n      margin-right: 5px;\n    }\n  ", __webpack_require__(/*! ../../styles/label.scss */ "../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss")]
        })
    ], CheckboxUIComponent);
    return CheckboxUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabeledComponent"]));

var CheckboxProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxProperties, _super);
    function CheckboxProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CheckboxProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabelProperties"]));

var example = {
    title: 'Checkbox example',
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":checkbox",
        containerProperties: {},
        itemProperties: {
            label: 'Accept conditions',
            dataModelPath: '$.accept',
            labelPosition: 'right'
        }
    },
    dataModel: {}
};
var checkboxDescriptor = {
    name: 'checkbox',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    label: 'Checkbox',
    category: "Basic" /* Basic */,
    description: 'Checkbox component',
    itemProperties: CheckboxProperties,
    component: CheckboxUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":checkbox",
        containerProperties: {},
        itemProperties: {
            label: 'Accept conditions',
            width: '200px',
            dataModelPath: '$.accept',
            labelPosition: 'left'
        }
    }
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/container-row/container-row.component.ts":
/*!****************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/container-row/container-row.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ContainerRowComponent, BSContainerRowProperties, example, containerRowDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRowComponent", function() { return ContainerRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSContainerRowProperties", function() { return BSContainerRowProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerRowDescriptor", function() { return containerRowDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");



var ContainerRowComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContainerRowComponent, _super);
    function ContainerRowComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRow = true;
        _this.isColumn = false;
        _this.dropContainer = true;
        _this.display = 'flex';
        return _this;
    }
    ContainerRowComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.row'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerRowComponent.prototype, "isRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.flex-column'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerRowComponent.prototype, "isColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.drop-container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerRowComponent.prototype, "dropContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerRowComponent.prototype, "display", void 0);
    ContainerRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-container-row',
            template: "\n    <div *ngFor=\"let item of uiModel.children\" class=\"col\" [ngStyle]=\"getStyles(item.containerProperties)\"\n      [ngClass]=\"item.containerProperties?.bsClasses\">\n      <dc-ui-selector\n          (changedDataModel)=\"changedDataModel.emit($event)\"\n          [uiModel]='item'\n          [dataModel]='dataModel'\n          [interpreter]='interpreter'\n          [scripts]='scripts'\n      ></dc-ui-selector>\n    </div>\n  "
        })
    ], ContainerRowComponent);
    return ContainerRowComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var BSContainerRowProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BSContainerRowProperties, _super);
    function BSContainerRowProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Bootstrap row child classes',
            example: 'col-9'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BSContainerRowProperties.prototype, "bsClasses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Flex direction',
            example: 'column'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BSContainerRowProperties.prototype, "direction", void 0);
    return BSContainerRowProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ContainerProperties"]));

var example = {
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
var containerRowDescriptor = {
    name: 'bs-row',
    label: 'Row',
    packageName: 'bootstrap',
    category: "Containers" /* Containers */,
    description: 'Bootstrap row container',
    itemProperties: BSContainerRowProperties,
    component: ContainerRowComponent,
    example: example,
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


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/container/container.component.ts":
/*!********************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/container/container.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ContainerComponent, BSContainerProperties, example, containerDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSContainerProperties", function() { return BSContainerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerDescriptor", function() { return containerDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var ContainerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContainerComponent, _super);
    function ContainerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContainer = true;
        _this.isFluidContainer = false;
        _this.height = 'auto';
        _this.dropContainer = true;
        return _this;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerComponent.prototype, "isContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.container-fluid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerComponent.prototype, "isFluidContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.drop-container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContainerComponent.prototype, "dropContainer", void 0);
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-container',
            template: "\n    <dc-container-row *ngFor=\"let item of uiModel.children\" [ngStyle]=\"getStyles(item.itemProperties)\"\n      (changedDataModel)=\"changedDataModel.emit($event)\"\n      [uiModel]='item'\n      [dataModel]='dataModel'\n      [interpreter]='interpreter'\n      [scripts]='scripts'\n    ></dc-container-row>\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n  "]
        })
    ], ContainerComponent);
    return ContainerComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var BSContainerProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BSContainerProperties, _super);
    function BSContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Is full width container, default false',
            example: 'true',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BSContainerProperties.prototype, "fullWidth", void 0);
    return BSContainerProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ContainerProperties"]));

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
var containerDescriptor = {
    name: 'container',
    label: 'Container',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
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


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/input-ui/input-ui.component.ts":
/*!******************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/input-ui/input-ui.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InputUIComponent, InputProperties, example, inputDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputUIComponent", function() { return InputUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputProperties", function() { return InputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDescriptor", function() { return inputDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var InputUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InputUIComponent, _super);
    function InputUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputUIComponent.prototype, "cssClasses", {
        get: function () {
            return {
                invisible: this.properties.visible === false,
                required: this.properties.required
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputUIComponent.prototype, "inputStyles", {
        get: function () {
            return this.getStyles(this.uiModel.itemProperties, ['background', 'color']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputUIComponent.prototype, "name", {
        get: function () {
            return this.properties.dataModelPath.replace(/[^A-Z]+/gi, '');
        },
        enumerable: true,
        configurable: true
    });
    InputUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-input-ui',
            template: "\n  <div class=\"form-group align-items-baseline\" [fxLayout]=\"layout\" [ngClass]=\"cssClasses\" [ngStyle]=\"itemStyles\">\n    <label class=\"mr-1 {{properties.labelPosition}}\" [for]=\"id\" *ngIf=\"hasLabel\"\n      [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n    <div class=\"w-100 flex-column\">\n      <input [attr.id]=\"id\" #inputField=\"ngModel\" [type]=\"properties.type\" class=\"form-control\" [ngStyle]=\"inputStyles\"\n        [fxFlex]=\"properties.inputWidth\"\n        [placeholder]=\"properties.placeholder\"\n        [disabled]=\"properties.enabled === false\"\n        [required]=\"properties.required\"\n        [minlength]=\"properties.minlength\"\n        [maxlength]=\"properties.maxlength\"\n        [email]=\"properties.type === 'email'\"\n        [pattern]=\"properties.pattern\"\n        (input)=\"changedDataModel.emit(this.dataModel)\"\n        [attr.name]=\"name\"\n        [(ngModel)]=\"componentDataModel\">\n      <div *ngIf=\"inputField.invalid && (inputField.dirty || inputField.touched)\" class=\"alert alert-danger py-0 px-1 m-0\">\n        <div *ngIf=\"inputField.errors.required\">Field is required.</div>\n        <div *ngIf=\"inputField.errors.minlength\">Min length {{properties.minlength}} characters.</div>\n        <div *ngIf=\"inputField.errors.maxlength\">Max length {{properties.minlength}} characters.</div>\n        <div *ngIf=\"inputField.errors.email\">Email is invalid.</div>\n        <div *ngIf=\"inputField.errors.pattern\">Field should match required pattern.</div>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    :host {\n      display: inline-block;\n    }\n\n    .required label:after {\n      content: '*';\n    }\n  ", __webpack_require__(/*! ../../styles/label.scss */ "../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss")]
        })
    ], InputUIComponent);
    return InputUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabeledComponent"]));

var InputProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InputProperties, _super);
    function InputProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type your name',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputProperties.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Input type',
            example: 'text',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputProperties.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Is enabled',
            example: 'true',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputProperties.prototype, "enabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Is visible',
            example: 'true',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputProperties.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Input width',
            example: '200px',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputProperties.prototype, "inputWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Is field required',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputProperties.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Min field value length',
            example: '5'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputProperties.prototype, "minlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Max field value length',
            example: '10'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputProperties.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'RegExp pattern',
            example: '[a-zA-Z ]*'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputProperties.prototype, "pattern", void 0);
    return InputProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabelProperties"]));

var example = {
    title: 'Text input example',
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":text-input",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            placeholder: 'Enter your name',
            dataModelPath: '$.name'
        }
    },
    dataModel: {}
};
var inputDescriptor = {
    name: 'text-input',
    label: 'Input field',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Input component',
    itemProperties: InputProperties,
    component: InputUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":text-input",
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
        ['type', { name: 'type', label: 'Data Type', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']]
            }],
        ['inputWidth', { name: 'inputWidth', label: 'Input Width', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Layout }],
        ['enabled', { name: 'enabled', label: 'Enabled', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [[{ label: 'Enable', value: true }, { label: 'Disable', value: false }]]
            }],
        ['visible', { name: 'visible', label: 'Visible', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [[{ label: 'Visible', value: true }, { label: 'Hidden', value: false }]]
            }]
    ]
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/radio-group-ui/radio-group-ui.component.ts":
/*!******************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/radio-group-ui/radio-group-ui.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: RadioGroupUIComponent, RadioGroupProperties, example, radioGroupDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupUIComponent", function() { return RadioGroupUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupProperties", function() { return RadioGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioGroupDescriptor", function() { return radioGroupDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var RadioGroupUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioGroupUIComponent, _super);
    function RadioGroupUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioGroupUIComponent.prototype, "align", {
        get: function () {
            return this.layout === 'row' ? 'start center' : 'center start';
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupUIComponent.prototype.onChange = function (option) {
        this.componentDataModel = option.value;
        this.changedDataModel.emit(this.dataModel);
    };
    RadioGroupUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-radio-group-ui',
            template: "\n    <div class=\"form-check\" *ngFor=\"let option of properties.options\"\n      [fxLayout]=\"layout\" [fxLayoutAlign]=\"align\" [ngStyle]=\"itemStyles\">\n      <label class=\"mb-0 {{properties.labelPosition}}\" [for]=\"id\" *ngIf=\"hasLabel\"\n        [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{option.label}}</label>\n      <input type=\"radio\"\n        (change)=\"onChange(option)\"\n        [name]=\"properties.dataModelPath\" [value]=\"option.value\">\n    </div>\n  ",
            styles: [__webpack_require__(/*! ../../styles/label.scss */ "../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss")]
        })
    ], RadioGroupUIComponent);
    return RadioGroupUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabeledComponent"]));

var RadioGroupProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioGroupProperties, _super);
    function RadioGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Radio group options',
            example: '[{label: "One", value: 1}]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RadioGroupProperties.prototype, "options", void 0);
    return RadioGroupProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabelProperties"]));

var example = {
    title: 'Radio group example',
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":radio-group",
        containerProperties: {},
        itemProperties: {
            label: 'Select color',
            dataModelPath: '$.color',
            options: [{ label: 'White', value: 'white' }, { label: 'Black', value: 'black' }],
        }
    },
    dataModel: {}
};
var radioGroupDescriptor = {
    name: 'radio-group',
    label: 'Single choice boxes',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Radio group component',
    itemProperties: RadioGroupProperties,
    component: RadioGroupUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":radio-group",
        containerProperties: {},
        itemProperties: {
            label: 'Select option',
            dataModelPath: '$.radioGroup',
            options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: 'black' }],
        }
    }
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/register.ts":
/*!***********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/register.ts ***!
  \***********************************************************************************/
/*! exports provided: COMPONENTS_LIST, registerComponents, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return COMPONENTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerComponents", function() { return registerComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/container/container.component.ts");
/* harmony import */ var _container_row_container_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container-row/container-row.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/container-row/container-row.component.ts");
/* harmony import */ var _input_ui_input_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-ui/input-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/input-ui/input-ui.component.ts");
/* harmony import */ var _select_ui_select_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-ui/select-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/select-ui/select-ui.component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");
/* harmony import */ var _checkbox_ui_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-ui/checkbox-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/checkbox-ui/checkbox-ui.component.ts");
/* harmony import */ var _radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio-group-ui/radio-group-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/radio-group-ui/radio-group-ui.component.ts");
/* harmony import */ var _textarea_ui_textarea_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textarea-ui/textarea-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/textarea-ui/textarea-ui.component.ts");
/* harmony import */ var _button_ui_button_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-ui/button-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/button-ui/button-ui.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/card.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/card/card.component.ts");
/* harmony import */ var _text_ui_text_ui_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-ui/text-ui.component */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/text-ui/text-ui.component.ts");












var COMPONENTS_LIST = [
    _container_container_component__WEBPACK_IMPORTED_MODULE_1__["containerDescriptor"],
    _container_row_container_row_component__WEBPACK_IMPORTED_MODULE_2__["containerRowDescriptor"],
    _input_ui_input_ui_component__WEBPACK_IMPORTED_MODULE_3__["inputDescriptor"],
    _select_ui_select_ui_component__WEBPACK_IMPORTED_MODULE_4__["selectDescriptor"],
    _checkbox_ui_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_6__["checkboxDescriptor"],
    _radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_7__["radioGroupDescriptor"],
    _textarea_ui_textarea_ui_component__WEBPACK_IMPORTED_MODULE_8__["textareaDescriptor"],
    _button_ui_button_ui_component__WEBPACK_IMPORTED_MODULE_9__["buttonDescriptor"],
    _card_card_component__WEBPACK_IMPORTED_MODULE_10__["cardDescriptor"],
    _text_ui_text_ui_component__WEBPACK_IMPORTED_MODULE_11__["textDescriptor"]
];
// Register components.
function registerComponents() {
    COMPONENTS_LIST.forEach(function (component) { return _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["CoreService"].registerComponent(component); });
}
function getCategories() {
    var categories = COMPONENTS_LIST.reduce(function (map, desc) {
        map[desc.category] = map[desc.category] || [];
        map[desc.category].push(desc);
        return map;
    }, {});
    return Object.entries(categories).map(function (_a) {
        var key = _a[0], val = _a[1];
        return {
            name: key,
            components: val,
            packageName: _constants__WEBPACK_IMPORTED_MODULE_5__["packageName"]
        };
    });
}


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/select-ui/select-ui.component.ts":
/*!********************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/select-ui/select-ui.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SelectUIComponent, SelectProperties, example, selectDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUIComponent", function() { return SelectUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProperties", function() { return SelectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDescriptor", function() { return selectDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var SelectUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectUIComponent, _super);
    function SelectUIComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = [];
        return _this;
    }
    SelectUIComponent.prototype.onSelect = function () {
        this.changedDataModel.emit(this.dataModel);
        this.triggerAction('_selectionChanged');
    };
    SelectUIComponent.prototype.ngDoCheck = function () {
        if (this.dataModel) {
            var options = this.properties.options;
            if (Array.isArray(options)) {
                this.options = options;
            }
            else if (typeof options === 'string') {
                var val = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["JSONUtils"].find(this.dataModel, options);
                if (val !== this.options) {
                    this.options = val;
                }
            }
        }
    };
    Object.defineProperty(SelectUIComponent.prototype, "disabled", {
        get: function () {
            var options = this.properties.options;
            return options && options.length ? null : 'disabled';
        },
        enumerable: true,
        configurable: true
    });
    SelectUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-select-ui',
            template: "\n    <div class=\"form-group mb-0\" [fxLayout]=\"layout\" [ngStyle]=\"itemStyles\">\n      <label selected *ngIf=\"hasLabel\" [for]=\"id\" [class]=\"properties.labelPosition\"\n      [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n      <ng-select [items]=\"options\" (change)=\"onSelect()\"\n      [(ngModel)]=\"componentDataModel\" [attr.disabled]=\"disabled\"></ng-select>\n    </div>",
            styles: [__webpack_require__(/*! ../../styles/label.scss */ "../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss")]
        })
    ], SelectUIComponent);
    return SelectUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabeledComponent"]));

var SelectProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectProperties, _super);
    function SelectProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Select options.',
            example: '[{label: "One", value: 1}]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectProperties.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Label shown when no option is selected.',
            example: 'Please select an option',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectProperties.prototype, "label", void 0);
    return SelectProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabelProperties"]));

var example = {
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":select",
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
var selectDescriptor = {
    name: 'select',
    label: 'UI Select Input',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Select component',
    itemProperties: SelectProperties,
    component: SelectUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":select",
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


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/text-ui/text-ui.component.ts":
/*!****************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/text-ui/text-ui.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TextUIComponent, TextProperties, textDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextUIComponent", function() { return TextUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProperties", function() { return TextProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textDescriptor", function() { return textDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var TextUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextUIComponent, _super);
    function TextUIComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.display = 'inline-block';
        return _this;
    }
    Object.defineProperty(TextUIComponent.prototype, "txtStyle", {
        get: function () {
            return this.properties['text-style'];
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextUIComponent.prototype, "display", void 0);
    TextUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-text',
            template: "\n    <div [ngSwitch]=\"txtStyle\">\n      <h1 *ngSwitchCase=\"'h1'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h1>\n      <h2 *ngSwitchCase=\"'h2'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h2>\n      <h3 *ngSwitchCase=\"'h3'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h3>\n      <h4 *ngSwitchCase=\"'h4'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h4>\n      <h5 *ngSwitchCase=\"'h5'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h5>\n      <h6 *ngSwitchCase=\"'h6'\" [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</h6>\n      <p *ngSwitchCase=\"''\" [ngStyle]=\"itemStyles\">{{properties.text}}</p>\n      <p *ngSwitchCase=\"undefined\" [ngStyle]=\"itemStyles\">{{properties.text}}</p>\n      <span *ngSwitchDefault [class]=\"txtStyle\" [ngStyle]=\"itemStyles\">{{properties.text}}</span>\n    </div>\n    "
        })
    ], TextUIComponent);
    return TextUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var TextProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextProperties, _super);
    function TextProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Displays text data.',
            example: 'Text information',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextProperties.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Text style text data.',
            example: 'h2',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextProperties.prototype, "text-style", void 0);
    return TextProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["StyleProperties"]));

var example = {
    title: 'Text compoent example',
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":text",
        containerProperties: {},
        itemProperties: {
            text: "",
            width: '50%',
            padding: '20px'
        }
    },
    dataModel: {}
};
var textDescriptor = {
    name: 'text',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    label: 'Text',
    category: "Basic" /* Basic */,
    description: 'Text component',
    itemProperties: TextProperties,
    component: TextUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":text",
        itemProperties: {
            text: 'Text',
            width: '100%'
        },
        containerProperties: {}
    },
    propertiesDescriptor: [
        ['text-style', {
                name: 'text-style', label: 'Text style', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4']]
            }]
    ]
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/textarea-ui/textarea-ui.component.ts":
/*!************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/components/textarea-ui/textarea-ui.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: TextareaUIComponent, TextareaProperties, example, textareaDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaUIComponent", function() { return TextareaUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaProperties", function() { return TextareaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textareaDescriptor", function() { return textareaDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts");




var TextareaUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaUIComponent, _super);
    function TextareaUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-textarea-ui',
            template: "\n    <div class=\"form-group\" [ngStyle]=\"itemStyles\"  [fxLayout]=\"layout\">\n      <label *ngIf=\"hasLabel\" [class]=\"properties.labelPosition\" [for]=\"id\"\n        [fxFlex]=\"layout === 'row' ? properties.labelWidth : false\">{{properties.label}}</label>\n      <div class=\"w-100 flex-column\">\n        <textarea #txtAreaField=\"ngModel\" [attr.id]=\"id\" class=\"form-control\"\n          [rows]=\"properties.rows\"\n          [placeholder]=\"properties.placeholder\"\n          [ngStyle]=\"itemStyles\"\n          [required]=\"properties.required\"\n          [minlength]=\"properties.minlength\"\n          [maxlength]=\"properties.maxlength\"\n          (input)=\"changedDataModel.emit(this.dataModel)\"\n          [(ngModel)]=\"componentDataModel\"></textarea>\n        <div *ngIf=\"txtAreaField.invalid && (txtAreaField.dirty || txtAreaField.touched)\" class=\"alert alert-danger py-0 px-1 m-0\">\n          <div *ngIf=\"txtAreaField.errors.required\">Field is required.</div>\n          <div *ngIf=\"txtAreaField.errors.minlength\">Min length {{properties.minlength}} characters.</div>\n          <div *ngIf=\"txtAreaField.errors.maxlength\">Max length {{properties.minlength}} characters.</div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ../../styles/label.scss */ "../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss")]
        })
    ], TextareaUIComponent);
    return TextareaUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabeledComponent"]));

var TextareaProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaProperties, _super);
    function TextareaProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Number of rows in textarea',
            example: '5',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaProperties.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type about yourself',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextareaProperties.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Is field required',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TextareaProperties.prototype, "required", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Min field value length',
            example: '5'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaProperties.prototype, "minlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Max field value length',
            example: '10'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaProperties.prototype, "maxlength", void 0);
    return TextareaProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["LabelProperties"]));

var example = {
    title: 'Text area example',
    uiModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":textarea",
        containerProperties: {},
        itemProperties: {
            rows: 10,
            placeholder: 'Type information about yourself',
            dataModelPath: '$.info'
        }
    },
    dataModel: {}
};
var textareaDescriptor = {
    name: 'textarea',
    label: 'Text Area',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Text area component',
    itemProperties: TextareaProperties,
    component: TextareaUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":textarea",
        containerProperties: {},
        itemProperties: {
            label: 'Label',
            rows: 5,
            placeholder: 'Placeholder text',
            dataModelPath: '$.textarea'
        }
    }
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts":
/*!*************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/constants.ts ***!
  \*************************************************************************/
/*! exports provided: packageName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageName", function() { return packageName; });
var packageName = 'bootstrap';


/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss":
/*!******************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/lib/styles/label.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label.right, label.bottom {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2Jvb3RzdHJhcC9zcmMvbGliL3N0eWxlcy9sYWJlbC5zY3NzIiwiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9ib290c3RyYXAvc3JjL2xpYi9zdHlsZXMvbGFiZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO1VBQUEsUUFBQTtBQ0NGIiwiZmlsZSI6Ii4uL25neC1keW5hbWljLWNvbXBvbmVudHMvcHJvamVjdHMvYm9vdHN0cmFwL3NyYy9saWIvc3R5bGVzL2xhYmVsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbC5yaWdodCwgbGFiZWwuYm90dG9tIHtcbiAgb3JkZXI6IDE7XG59XG4iLCJsYWJlbC5yaWdodCwgbGFiZWwuYm90dG9tIHtcbiAgb3JkZXI6IDE7XG59Il19 */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/bootstrap/src/public-api.ts":
/*!**********************************************************************!*\
  !*** ../ngx-dynamic-components/projects/bootstrap/src/public-api.ts ***!
  \**********************************************************************/
/*! exports provided: COMPONENTS_LIST, getCategories, BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bootstrap.module */ "../ngx-dynamic-components/projects/bootstrap/src/lib/bootstrap.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return _lib_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]; });

/* harmony import */ var _lib_components_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/register */ "../ngx-dynamic-components/projects/bootstrap/src/lib/components/register.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return _lib_components_register__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _lib_components_register__WEBPACK_IMPORTED_MODULE_1__["getCategories"]; });

/*
 * Public API Surface of bootstrap
 */




/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/base-ui-component.ts":
/*!***************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/base-ui-component.ts ***!
  \***************************************************************************************/
/*! exports provided: BaseUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUIComponent", function() { return BaseUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../ngx-dynamic-components/projects/core/src/lib/models.ts");
/* harmony import */ var _workflow_json_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/json.utils */ "../ngx-dynamic-components/projects/core/src/lib/workflow/json.utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties */ "../ngx-dynamic-components/projects/core/src/lib/properties/index.ts");
/* harmony import */ var _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interpreter/interpreter */ "../ngx-dynamic-components/projects/core/src/lib/interpreter/interpreter.ts");







var BaseUIComponent = /** @class */ (function () {
    function BaseUIComponent() {
        this.display = 'inherit';
        this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hostBindings = ['width', 'height', 'padding', 'margin'];
        this.borders = ['border-left', 'border-top', 'border-right', 'border-bottom'];
    }
    BaseUIComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    BaseUIComponent.prototype.ngOnDestroy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.triggerAction('_OnDestroy')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseUIComponent.prototype.ngOnChanges = function (changes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (changes.dataModel && !changes.dataModel.firstChange && this.dataModel !== changes.dataModel.currentValue) {
                    this.dataModel = changes.dataModel.currentValue;
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BaseUIComponent.prototype, "componentDataModel", {
        get: function () {
            if (this.properties.hasOwnProperty('dataSource')) {
                var value = this.properties.dataSource;
                if (typeof value === 'object') {
                    return value;
                }
                else if (typeof value === 'string' && this.dataModel.hasOwnProperty(value)) {
                    return this.dataModel[value];
                }
            }
            // if (!this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
            //   return null;
            // }
            // const dataModelPath = (this.uiModel.itemProperties as DataModelProperties).dataModelPath;
            // TODO: Handle case for Array type.
            // if (!Array.isArray(this.dataModel)) {
            //   return JSONUtils.find(this.dataModel, dataModelPath);
            // }
        },
        set: function (val) {
            if (this.uiModel.itemProperties.hasOwnProperty('dataModelPath')) {
                var dataModelPath = this.uiModel.itemProperties.dataModelPath;
                _workflow_json_utils__WEBPACK_IMPORTED_MODULE_3__["JSONUtils"].setValue(this.dataModel, dataModelPath, val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUIComponent.prototype, "properties", {
        get: function () {
            return this.uiModel.itemProperties;
        },
        enumerable: true,
        configurable: true
    });
    BaseUIComponent.prototype.triggerAction = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var functionName;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.interpreter || !this.uiModel.id) {
                    return [2 /*return*/];
                }
                functionName = this.uiModel.id + action;
                this.interpreter.evaluate(this.scripts, {
                    uiModel: this.uiModel,
                    dataModel: this.dataModel
                }, functionName);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BaseUIComponent.prototype, "itemStyles", {
        get: function () {
            return this.getStyles(this.uiModel.itemProperties);
        },
        enumerable: true,
        configurable: true
    });
    BaseUIComponent.prototype.getStyles = function (properties, stylesList) {
        var _this = this;
        if (properties === void 0) { properties = {}; }
        if (stylesList === void 0) { stylesList = _properties__WEBPACK_IMPORTED_MODULE_5__["StylePropertiesList"]; }
        return stylesList.reduce(function (styles, prop) {
            if (properties.hasOwnProperty(prop)) {
                styles[prop] = _this.getPropValue(properties, prop);
            }
            return styles;
        }, {});
    };
    BaseUIComponent.prototype.setHostStyles = function () {
        var _this = this;
        var props = this.properties;
        if (props) {
            this.hostBindings.forEach(function (b) {
                if (props && props.hasOwnProperty(b)) {
                    _this[b] = props[b];
                }
            });
            this.setBorder(props);
        }
    };
    BaseUIComponent.prototype.getPropValue = function (properties, prop) {
        var val = properties[prop];
        if (prop === 'font-size') {
            if (!isNaN(properties[prop])) {
                return val + "px";
            }
        }
        return val;
    };
    BaseUIComponent.prototype.setBorder = function (properties) {
        var _this = this;
        var border = properties.border;
        if (typeof border === 'string') {
            var _a = border.split('|'), prop = _a[0], value_1 = _a[1];
            if (prop === 'border') {
                this.borders.forEach(function (b) {
                    _this[Object(_utils__WEBPACK_IMPORTED_MODULE_4__["kebabStrToCamel"])(b)] = value_1;
                });
            }
            else {
                this[Object(_utils__WEBPACK_IMPORTED_MODULE_4__["kebabStrToCamel"])(prop)] = value_1;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaseUIComponent.prototype, "dataModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["UIModel"])
    ], BaseUIComponent.prototype, "uiModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_6__["Interpreter"])
    ], BaseUIComponent.prototype, "interpreter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "scripts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.padding'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "padding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.margin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "margin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaseUIComponent.prototype, "display", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-left'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "borderLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-top'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "borderTop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-right'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "borderRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-bottom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaseUIComponent.prototype, "borderBottom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaseUIComponent.prototype, "changedDataModel", void 0);
    return BaseUIComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.css":
/*!**************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ng-select:not(:last-child) {\n  margin-right: 5px;\n}\n\n.combo-list>* {\n  -webkit-box-flex: 1;\n          flex: 1 1 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25neC1keW5hbWljLWNvbXBvbmVudHMvcHJvamVjdHMvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY29tYm8tcHJvcGVydHkvY29tYm8tcHJvcGVydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmIiwiZmlsZSI6Ii4uL25neC1keW5hbWljLWNvbXBvbmVudHMvcHJvamVjdHMvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY29tYm8tcHJvcGVydHkvY29tYm8tcHJvcGVydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nLXNlbGVjdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb21iby1saXN0Pioge1xuICBmbGV4OiAxIDEgNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.ts":
/*!*************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComboPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboPropertyComponent", function() { return ComboPropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComboPropertyComponent = /** @class */ (function () {
    function ComboPropertyComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ComboPropertyComponent.prototype.ngOnInit = function () {
        var values = [this.value];
        if (typeof this.value === 'string' || this.value === undefined) {
            values = (this.value || '').split('|');
        }
        this.result = this.properties.map(function (v, i) { return values[i] === undefined ? '' : values[i]; });
        this.props = this.properties.map(function (options) {
            return Array.isArray(options) ? options.map(function (o) {
                if (typeof o === 'object') {
                    return o;
                }
                return { label: o, value: o };
            }) : options;
        });
    };
    ComboPropertyComponent.prototype.onSelect = function (option, index) {
        this.setValue(option ? option.value : '', index);
    };
    ComboPropertyComponent.prototype.selectedOption = function (i) {
        var _this = this;
        return this.props[i].find(function (o) { return o.value === _this.result[i]; });
    };
    ComboPropertyComponent.prototype.setValue = function (value, index) {
        this.result[index] = value;
        this.emitChange();
    };
    ComboPropertyComponent.prototype.onEnter = function (e) {
        e.stopPropagation();
        this.emitChange();
    };
    ComboPropertyComponent.prototype.emitChange = function () {
        var res = this.result.length > 1 ? this.result.join('|') : this.result[0];
        this.change.emit(res);
    };
    ComboPropertyComponent.prototype.isInput = function (prop) {
        return typeof prop === 'string';
    };
    ComboPropertyComponent.prototype.isSelect = function (prop) {
        return Array.isArray(prop);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ComboPropertyComponent.prototype, "properties", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComboPropertyComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComboPropertyComponent.prototype, "change", void 0);
    ComboPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-combo-property',
            template: __webpack_require__(/*! raw-loader!./combo-property.component.html */ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.html"),
            styles: [__webpack_require__(/*! ./combo-property.component.css */ "../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComboPropertyComponent);
    return ComboPropertyComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.scss":
/*!***************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .preview dc-container dc-container-row.row {\n  border: 1px dashed rgba(0, 0, 0, 0);\n}\n::ng-deep .preview dc-container dc-container-row.row.active {\n  border-color: grey;\n}\n::ng-deep .preview.edit-mode dc-container dc-container-row.row.active-component {\n  border-color: rgba(0, 0, 0, 0.25);\n}\n::ng-deep .preview.edit-mode dc-container dc-container-row.row.active-component > dc-control-editor {\n  display: block;\n}\n::ng-deep .preview.edit-mode dc-container dc-container-row.row.active-component > dc-control-editor .handle {\n  display: none;\n}\n::ng-deep .preview.edit-mode dc-container {\n  border: 1px dashed rgba(0, 0, 0, 0);\n  border-color: rgba(0, 0, 0, 0.25);\n}\n::ng-deep .preview.edit-mode dc-container.active-component > dc-control-editor {\n  display: block;\n}\n::ng-deep .preview dc-ui-flex-container .item,\n::ng-deep .preview dc-container .item,\n::ng-deep .preview dc-container dc-container-row.row,\n::ng-deep .preview dc-container dc-container-row.row > div[class*=col] {\n  position: relative;\n  border: 1px dashed rgba(0, 0, 0, 0);\n}\n::ng-deep .preview dc-ui-flex-container .item .active-component + dc-control-editor,\n::ng-deep .preview dc-container .item .active-component + dc-control-editor,\n::ng-deep .preview dc-container dc-container-row.row .active-component + dc-control-editor,\n::ng-deep .preview dc-container dc-container-row.row > div[class*=col] .active-component + dc-control-editor {\n  display: block;\n}\n::ng-deep .preview dc-ui-flex-container .item.drag-selected,\n::ng-deep .preview dc-container .item.drag-selected,\n::ng-deep .preview dc-container dc-container-row.row.drag-selected,\n::ng-deep .preview dc-container dc-container-row.row > div[class*=col].drag-selected {\n  border-color: grey;\n}\n::ng-deep .preview dc-ui-flex-container .item.drag-selected dc-control-editor,\n::ng-deep .preview dc-container .item.drag-selected dc-control-editor,\n::ng-deep .preview dc-container dc-container-row.row.drag-selected dc-control-editor,\n::ng-deep .preview dc-container dc-container-row.row > div[class*=col].drag-selected dc-control-editor {\n  display: block !important;\n}\n::ng-deep {\n  /* in-flight clone */\n  /* high-performance display:none; helper */\n  /* added to mirrorContainer (default = body) while dragging */\n  /* added to the source element while its mirror is dragged */\n}\n::ng-deep .gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none;\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: #eeeeee;\n}\n::ng-deep .gu-mirror > dc-control-editor {\n  display: block !important;\n}\n::ng-deep .gu-mirror > dc-ui-flex-container + dc-control-editor {\n  left: -30px;\n}\n::ng-deep .gu-hide {\n  left: -9999px !important;\n}\n::ng-deep .gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n::ng-deep .gu-transit {\n  position: relative;\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n::ng-deep .gu-transit::after {\n  content: \" \";\n  top: 0;\n  display: block;\n  position: absolute;\n  background: #ccc;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n::ng-deep .gu-transit dc-control-editor {\n  display: none;\n}\n:host {\n  position: absolute;\n  color: rgba(0, 0, 0, 0.5);\n  top: -23px;\n  right: 0;\n  z-index: 2;\n  max-width: 105px;\n  display: none;\n  background: rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  padding: 0.25em;\n}\n:host:hover {\n  cursor: move;\n  color: rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2NvbnRyb2wtZWRpdG9yL2NvbnRyb2wtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jb250cm9sLWVkaXRvci9jb250cm9sLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG1DQUxPO0FDRVQ7QURJRTtFQUNFLGtCQUFBO0FDRko7QURPRTtFQUNFLGlDQUFBO0FDSko7QURLSTtFQUNFLGNBQUE7QUNITjtBRElNO0VBQ0UsYUFBQTtBQ0ZSO0FETUU7RUFDRSxtQ0F0Qks7RUF1QkwsaUNBQUE7QUNKSjtBREtJO0VBQ0UsY0FBQTtBQ0hOO0FEUUE7Ozs7RUFRRSxrQkFBQTtFQUNBLG1DQXZDTztBQzhCVDtBRElFOzs7O0VBQ0UsY0FBQTtBQ0NKO0FES0U7Ozs7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7Ozs7RUFDRSx5QkFBQTtBQ0lOO0FEQ0E7RUFDRSxvQkFBQTtFQXdCQSwwQ0FBQTtFQUlBLDZEQUFBO0VBT0EsNERBQUE7QUM5QkY7QURKRTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQkFBQTtFQUNBLHFIQUFBO0VBR0EsbUJBQUE7QUNHSjtBRERJO0VBQ0UseUJBQUE7QUNHTjtBREFJO0VBQ0UsV0FBQTtBQ0VOO0FERUU7RUFDRSx3QkFBQTtBQ0FKO0FER0U7RUFDRSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLHNFQUFBO0VBQUEsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FDRko7QURJSTtFQUNFLFlBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNGTjtBREtJO0VBQ0UsYUFBQTtBQ0hOO0FEUUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMRjtBRE1FO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDSkoiLCJmaWxlIjoiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jb250cm9sLWVkaXRvci9jb250cm9sLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwKTtcblxuLy8gVE9ETzogQ2xlYW4gdXAgc3R5bGVzLiBtb3ZlIHRvIGRlc2lnbmVyLmNvbXBvbmVudC5zY3NzXG5cbjo6bmctZGVlcCAucHJldmlldyBkYy1jb250YWluZXIgZGMtY29udGFpbmVyLXJvdy5yb3cge1xuICBib3JkZXI6ICRib3JkZXI7XG4gICYuYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5wcmV2aWV3LmVkaXQtbW9kZSB7XG4gIGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdy5hY3RpdmUtY29tcG9uZW50IHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICA+IGRjLWNvbnRyb2wtZWRpdG9yIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLmhhbmRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRjLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICYuYWN0aXZlLWNvbXBvbmVudCA+IGRjLWNvbnRyb2wtZWRpdG9yIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtdWktZmxleC1jb250YWluZXIgLml0ZW0sXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIC5pdGVtLFxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyxcbjo6bmctZGVlcCAucHJldmlldyBkYy1jb250YWluZXIgZGMtY29udGFpbmVyLXJvdy5yb3cgPiBkaXZbY2xhc3MqPVwiY29sXCJdIHtcbiAgLmFjdGl2ZS1jb21wb25lbnQgKyBkYy1jb250cm9sLWVkaXRvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogJGJvcmRlcjtcblxuICAmLmRyYWctc2VsZWN0ZWQge1xuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICBkYy1jb250cm9sLWVkaXRvciB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAvKiBpbi1mbGlnaHQgY2xvbmUgKi9cbiAgLmd1LW1pcnJvciB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVwiO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcblxuICAgID4gZGMtY29udHJvbC1lZGl0b3Ige1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICA+IGRjLXVpLWZsZXgtY29udGFpbmVyICsgZGMtY29udHJvbC1lZGl0b3Ige1xuICAgICAgbGVmdDogLTMwcHg7XG4gICAgfVxuICB9XG4gIC8qIGhpZ2gtcGVyZm9ybWFuY2UgZGlzcGxheTpub25lOyBoZWxwZXIgKi9cbiAgLmd1LWhpZGUge1xuICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcbiAgfVxuICAvKiBhZGRlZCB0byBtaXJyb3JDb250YWluZXIgKGRlZmF1bHQgPSBib2R5KSB3aGlsZSBkcmFnZ2luZyAqL1xuICAuZ3UtdW5zZWxlY3RhYmxlIHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xuICAuZ3UtdHJhbnNpdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHRvcDogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBkYy1jb250cm9sLWVkaXRvciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICB0b3A6IC0yM3B4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgbWF4LXdpZHRoOiAxMDVweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IC4yNWVtO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjc1KTtcbiAgfVxufVxuIiwiOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDApO1xufVxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdy5hY3RpdmUge1xuICBib3JkZXItY29sb3I6IGdyZXk7XG59XG5cbjo6bmctZGVlcCAucHJldmlldy5lZGl0LW1vZGUgZGMtY29udGFpbmVyIGRjLWNvbnRhaW5lci1yb3cucm93LmFjdGl2ZS1jb21wb25lbnQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG46Om5nLWRlZXAgLnByZXZpZXcuZWRpdC1tb2RlIGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdy5hY3RpdmUtY29tcG9uZW50ID4gZGMtY29udHJvbC1lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAucHJldmlldy5lZGl0LW1vZGUgZGMtY29udGFpbmVyIGRjLWNvbnRhaW5lci1yb3cucm93LmFjdGl2ZS1jb21wb25lbnQgPiBkYy1jb250cm9sLWVkaXRvciAuaGFuZGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCAucHJldmlldy5lZGl0LW1vZGUgZGMtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbjo6bmctZGVlcCAucHJldmlldy5lZGl0LW1vZGUgZGMtY29udGFpbmVyLmFjdGl2ZS1jb21wb25lbnQgPiBkYy1jb250cm9sLWVkaXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtdWktZmxleC1jb250YWluZXIgLml0ZW0sXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIC5pdGVtLFxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyxcbjo6bmctZGVlcCAucHJldmlldyBkYy1jb250YWluZXIgZGMtY29udGFpbmVyLXJvdy5yb3cgPiBkaXZbY2xhc3MqPWNvbF0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDApO1xufVxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLXVpLWZsZXgtY29udGFpbmVyIC5pdGVtIC5hY3RpdmUtY29tcG9uZW50ICsgZGMtY29udHJvbC1lZGl0b3IsXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIC5pdGVtIC5hY3RpdmUtY29tcG9uZW50ICsgZGMtY29udHJvbC1lZGl0b3IsXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIGRjLWNvbnRhaW5lci1yb3cucm93IC5hY3RpdmUtY29tcG9uZW50ICsgZGMtY29udHJvbC1lZGl0b3IsXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIGRjLWNvbnRhaW5lci1yb3cucm93ID4gZGl2W2NsYXNzKj1jb2xdIC5hY3RpdmUtY29tcG9uZW50ICsgZGMtY29udHJvbC1lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAucHJldmlldyBkYy11aS1mbGV4LWNvbnRhaW5lciAuaXRlbS5kcmFnLXNlbGVjdGVkLFxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciAuaXRlbS5kcmFnLXNlbGVjdGVkLFxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdy5kcmFnLXNlbGVjdGVkLFxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyA+IGRpdltjbGFzcyo9Y29sXS5kcmFnLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xufVxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLXVpLWZsZXgtY29udGFpbmVyIC5pdGVtLmRyYWctc2VsZWN0ZWQgZGMtY29udHJvbC1lZGl0b3IsXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIC5pdGVtLmRyYWctc2VsZWN0ZWQgZGMtY29udHJvbC1lZGl0b3IsXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIGRjLWNvbnRhaW5lci1yb3cucm93LmRyYWctc2VsZWN0ZWQgZGMtY29udHJvbC1lZGl0b3IsXG46Om5nLWRlZXAgLnByZXZpZXcgZGMtY29udGFpbmVyIGRjLWNvbnRhaW5lci1yb3cucm93ID4gZGl2W2NsYXNzKj1jb2xdLmRyYWctc2VsZWN0ZWQgZGMtY29udHJvbC1lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAge1xuICAvKiBpbi1mbGlnaHQgY2xvbmUgKi9cbiAgLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xuICAvKiBhZGRlZCB0byBtaXJyb3JDb250YWluZXIgKGRlZmF1bHQgPSBib2R5KSB3aGlsZSBkcmFnZ2luZyAqL1xuICAvKiBhZGRlZCB0byB0aGUgc291cmNlIGVsZW1lbnQgd2hpbGUgaXRzIG1pcnJvciBpcyBkcmFnZ2VkICovXG59XG46Om5nLWRlZXAgLmd1LW1pcnJvciB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG59XG46Om5nLWRlZXAgLmd1LW1pcnJvciA+IGRjLWNvbnRyb2wtZWRpdG9yIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZ3UtbWlycm9yID4gZGMtdWktZmxleC1jb250YWluZXIgKyBkYy1jb250cm9sLWVkaXRvciB7XG4gIGxlZnQ6IC0zMHB4O1xufVxuOjpuZy1kZWVwIC5ndS1oaWRlIHtcbiAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5ndS11bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmd1LXRyYW5zaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbjo6bmctZGVlcCAuZ3UtdHJhbnNpdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuOjpuZy1kZWVwIC5ndS10cmFuc2l0IGRjLWNvbnRyb2wtZWRpdG9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRvcDogLTIzcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBtYXgtd2lkdGg6IDEwNXB4O1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cbjpob3N0OmhvdmVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn0iXX0= */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.ts":
/*!*************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ControlEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlEditorComponent", function() { return ControlEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ControlEditorComponent = /** @class */ (function () {
    function ControlEditorComponent() {
        this.uiModelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uiModelRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ControlEditorComponent.prototype.onRemove = function (evt) {
        evt.stopPropagation();
        this.uiModelRemoved.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlEditorComponent.prototype, "uiModelChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlEditorComponent.prototype, "uiModelRemoved", void 0);
    ControlEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-control-editor',
            template: "\n    <button class=\"btn btn-light btn-sm handle px-1 py-0 mr-1\">\n      <svg width=\"14px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\">\n        </path>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      </svg>\n    </button>\n    <button class=\"btn btn-light btn-sm px-1 py-0\" tooltip=\"Remove\" (click)=\"onRemove($event)\">\n      <i class=\"fa fa-remove\"></i>\n    </button>\n  ",
            styles: [__webpack_require__(/*! ./control-editor.component.scss */ "../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.scss")]
        })
    ], ControlEditorComponent);
    return ControlEditorComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.scss":
/*!***************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #e4e7ea;\n  border-radius: 4px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nul li {\n  list-style: none;\n}\n\n.component {\n  border: 1px dashed rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2NvbnRyb2xzLXBhbmVsL2NvbnRyb2xzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jb250cm9scy1wYW5lbC9jb250cm9scy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FESUE7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiIuLi9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2NvbnRyb2xzLXBhbmVsL2NvbnRyb2xzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnVsIHtcbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbn1cblxuLmNvbXBvbmVudCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb21wb25lbnQge1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.ts":
/*!*************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ControlsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsPanelComponent", function() { return ControlsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/core.service */ "../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts");



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
    ControlsPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.components = _services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"].getListOfComponents().filter(function (c) { return _this.COMPONENTS_LIST.includes(c.packageName + ":" + c.name); });
        this.initGroups();
    };
    ControlsPanelComponent.prototype.initGroups = function () {
        var groups = {};
        this.components.forEach(function (item) {
            var groupValue = item.category;
            if (groupValue) {
                groups[groupValue] = groups[groupValue] || { value: groupValue, list: [] };
                groups[groupValue].list.push(item);
            }
        });
        this.groups = Object.values(groups);
    };
    ControlsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-controls-panel',
            template: __webpack_require__(/*! raw-loader!./controls-panel.component.html */ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.html"),
            styles: [__webpack_require__(/*! ./controls-panel.component.scss */ "../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.scss"), __webpack_require__(/*! ../../styles/accordion.scss */ "../ngx-dynamic-components/projects/core/src/lib/styles/accordion.scss")]
        })
    ], ControlsPanelComponent);
    return ControlsPanelComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.scss":
/*!***************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngx-dynamic-component, #empty-container {\n  position: relative;\n}\n\n.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector + dc-ui-flex-container > [drop-container],\n.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector + *:not(dc-ui-flex-container) {\n  cursor: pointer;\n  border: 1px dashed gray;\n  box-sizing: initial;\n}\n\n.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector + * {\n  position: relative;\n}\n\n.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector + dc-ui-flex-container.active-component > [drop-container],\n.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector + dc-ui-flex-container > .active-component[drop-container] {\n  border-style: solid;\n  position: relative;\n}\n\n.preview.edit-mode ngx-dynamic-component ::ng-deep .active-component:not(dc-ui-flex-container) {\n  border-style: solid;\n}\n\n.preview.edit-mode ngx-dynamic-component ::ng-deep .active-component:not(dc-ui-flex-container) > dc-control-editor {\n  display: block;\n}\n\n.preview.edit-mode ngx-dynamic-component ::ng-deep dc-ui-selector + dc-ui-flex-container.active-component > [drop-container] + dc-control-editor {\n  display: block;\n}\n\n.mode.btn-group {\n  border-top: 1px solid gray;\n}\n\n.edit-mode ::ng-deep .full-mode > .as-split-gutter {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2Rlc2lnbmVyL2Rlc2lnbmVyLmNvbXBvbmVudC5zY3NzIiwiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9kZXNpZ25lci9kZXNpZ25lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FER0U7O0VBRUUsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0FDREo7O0FESUU7O0VBRUUsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0UsbUJBQUE7QUNISjs7QURJSTtFQUNFLGNBQUE7QUNGTjs7QURLRTtFQUNFLGNBQUE7QUNISjs7QURPQTtFQUNFLDBCQUFBO0FDSkY7O0FEUUU7RUFDRSxhQUFBO0FDTEoiLCJmaWxlIjoiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9kZXNpZ25lci9kZXNpZ25lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5neC1keW5hbWljLWNvbXBvbmVudCwgI2VtcHR5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByZXZpZXcuZWRpdC1tb2RlIG5neC1keW5hbWljLWNvbXBvbmVudCA6Om5nLWRlZXAge1xuICBkYy11aS1zZWxlY3RvciArIGRjLXVpLWZsZXgtY29udGFpbmVyID4gW2Ryb3AtY29udGFpbmVyXSxcbiAgZGMtdWktc2VsZWN0b3IgKyAqOm5vdChkYy11aS1mbGV4LWNvbnRhaW5lcikge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcbiAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xuICB9XG5cbiAgZGMtdWktc2VsZWN0b3IgKyAqIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBkYy11aS1zZWxlY3RvciArIGRjLXVpLWZsZXgtY29udGFpbmVyLmFjdGl2ZS1jb21wb25lbnQgPiBbZHJvcC1jb250YWluZXJdLFxuICBkYy11aS1zZWxlY3RvciArIGRjLXVpLWZsZXgtY29udGFpbmVyID4gLmFjdGl2ZS1jb21wb25lbnRbZHJvcC1jb250YWluZXJdIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5hY3RpdmUtY29tcG9uZW50Om5vdChkYy11aS1mbGV4LWNvbnRhaW5lcikge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgPiBkYy1jb250cm9sLWVkaXRvciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgZGMtdWktc2VsZWN0b3IgKyBkYy11aS1mbGV4LWNvbnRhaW5lci5hY3RpdmUtY29tcG9uZW50ID4gW2Ryb3AtY29udGFpbmVyXSArIGRjLWNvbnRyb2wtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ubW9kZS5idG4tZ3JvdXAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmVkaXQtbW9kZSA6Om5nLWRlZXAgLmZ1bGwtbW9kZSB7XG4gID4gLmFzLXNwbGl0LWd1dHRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwibmd4LWR5bmFtaWMtY29tcG9uZW50LCAjZW1wdHktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJldmlldy5lZGl0LW1vZGUgbmd4LWR5bmFtaWMtY29tcG9uZW50IDo6bmctZGVlcCBkYy11aS1zZWxlY3RvciArIGRjLXVpLWZsZXgtY29udGFpbmVyID4gW2Ryb3AtY29udGFpbmVyXSxcbi5wcmV2aWV3LmVkaXQtbW9kZSBuZ3gtZHluYW1pYy1jb21wb25lbnQgOjpuZy1kZWVwIGRjLXVpLXNlbGVjdG9yICsgKjpub3QoZGMtdWktZmxleC1jb250YWluZXIpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcbiAgYm94LXNpemluZzogaW5pdGlhbDtcbn1cbi5wcmV2aWV3LmVkaXQtbW9kZSBuZ3gtZHluYW1pYy1jb21wb25lbnQgOjpuZy1kZWVwIGRjLXVpLXNlbGVjdG9yICsgKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcmV2aWV3LmVkaXQtbW9kZSBuZ3gtZHluYW1pYy1jb21wb25lbnQgOjpuZy1kZWVwIGRjLXVpLXNlbGVjdG9yICsgZGMtdWktZmxleC1jb250YWluZXIuYWN0aXZlLWNvbXBvbmVudCA+IFtkcm9wLWNvbnRhaW5lcl0sXG4ucHJldmlldy5lZGl0LW1vZGUgbmd4LWR5bmFtaWMtY29tcG9uZW50IDo6bmctZGVlcCBkYy11aS1zZWxlY3RvciArIGRjLXVpLWZsZXgtY29udGFpbmVyID4gLmFjdGl2ZS1jb21wb25lbnRbZHJvcC1jb250YWluZXJdIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByZXZpZXcuZWRpdC1tb2RlIG5neC1keW5hbWljLWNvbXBvbmVudCA6Om5nLWRlZXAgLmFjdGl2ZS1jb21wb25lbnQ6bm90KGRjLXVpLWZsZXgtY29udGFpbmVyKSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4ucHJldmlldy5lZGl0LW1vZGUgbmd4LWR5bmFtaWMtY29tcG9uZW50IDo6bmctZGVlcCAuYWN0aXZlLWNvbXBvbmVudDpub3QoZGMtdWktZmxleC1jb250YWluZXIpID4gZGMtY29udHJvbC1lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcmV2aWV3LmVkaXQtbW9kZSBuZ3gtZHluYW1pYy1jb21wb25lbnQgOjpuZy1kZWVwIGRjLXVpLXNlbGVjdG9yICsgZGMtdWktZmxleC1jb250YWluZXIuYWN0aXZlLWNvbXBvbmVudCA+IFtkcm9wLWNvbnRhaW5lcl0gKyBkYy1jb250cm9sLWVkaXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubW9kZS5idG4tZ3JvdXAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cblxuLmVkaXQtbW9kZSA6Om5nLWRlZXAgLmZ1bGwtbW9kZSA+IC5hcy1zcGxpdC1ndXR0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.ts":
/*!*************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerComponent", function() { return DesignerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../ngx-dynamic-components/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../ngx-dynamic-components/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ace-builds */ "../ngx-dynamic-components/node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "../ngx-dynamic-components/projects/core/src/lib/models.ts");
/* harmony import */ var _services_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/drag-drop.service */ "../ngx-dynamic-components/projects/core/src/lib/services/drag-drop.service.ts");
/* harmony import */ var _controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controls-panel/controls-panel.component */ "../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");
/* harmony import */ var _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interpreter/interpreter */ "../ngx-dynamic-components/projects/core/src/lib/interpreter/interpreter.ts");











var DesignerComponent = /** @class */ (function () {
    function DesignerComponent(container, dragDropService) {
        this.container = container;
        this.dragDropService = dragDropService;
        this.uiModelUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scriptUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formatted = true;
        this.modeState = {
            script: false,
            designer: true
        };
        this.scriptConfigSize = 0;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(DesignerComponent.prototype, "fullMode", {
        get: function () {
            return this.scriptConfigSize === 0 || this.scriptConfigSize === 100;
        },
        enumerable: true,
        configurable: true
    });
    DesignerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiModelVal = this.uiModel;
        this.dragDropService.uiModelUpdates$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy)).subscribe(function (uiModel) {
            _this.updateUIModel(uiModel);
        });
        this.dragDropService.selectedComponent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy)).subscribe(function (_a) {
            var uiModel = _a.uiModel;
            _this.uiModelToEdit = uiModel;
            _this.tabSelect(1);
        });
        this.dragDropService.componentRemoved$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy)).subscribe(function () {
            _this.tabSelect(0);
        });
    };
    DesignerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.uiModelEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_5__["edit"])(this.uiModelEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatObjToJsonStr"])(this.uiModelVal)
        });
        this.scriptEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_5__["edit"])(this.scriptEl.nativeElement, {
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.uiModelEditor, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return _this.getUIModelObject();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (v) { return Boolean(v); })).subscribe(function (uiModel) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var el;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        }); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.scriptEditor, 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function () {
            _this.scriptUpdate.emit(_this.scriptEditor.getValue());
        });
        this.initDrag();
    };
    DesignerComponent.prototype.ngOnDestroy = function () {
        this.destroy.next();
        this.destroy.complete();
    };
    DesignerComponent.prototype.onSizeChange = function () {
        this.uiModelEditor.resize();
        this.scriptEditor.resize();
    };
    DesignerComponent.prototype.onModeState = function (prop) {
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
    DesignerComponent.prototype.getUIModelObject = function () {
        try {
            return JSON.parse(this.uiModelEditor.getValue());
        }
        catch (e) {
            return false;
        }
    };
    DesignerComponent.prototype.initDrag = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.dragDropService.init(_this.container, _this.uiModelVal);
                resolve();
            });
        });
    };
    DesignerComponent.prototype.updateUIModel = function (uiModel) {
        var _this = this;
        this.uiModelVal = null;
        setTimeout(function () {
            _this.uiModelVal = uiModel;
            _this.uiModelEditor.setValue(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatObjToJsonStr"])(_this.uiModelVal), -1);
            _this.uiModelUpdated.emit(uiModel);
            _this.controlsPanel.initGroups();
            _this.initDrag();
        });
    };
    DesignerComponent.prototype.onComponentsTabSelect = function () {
        this.uiModelToEdit = null;
        this.dragDropService.deselect();
    };
    DesignerComponent.prototype.onPropertyChange = function () {
        var _this = this;
        var model = this.uiModelVal;
        this.uiModelVal = null;
        window.requestAnimationFrame(function () {
            _this.uiModelVal = model;
            _this.uiModelUpdated.emit(model);
            _this.uiModelEditor.setValue(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatObjToJsonStr"])(_this.uiModelVal), -1);
            _this.initDrag();
        });
    };
    DesignerComponent.prototype.onParentSelect = function () {
        this.dragDropService.selectParent();
    };
    DesignerComponent.prototype.onClone = function () {
        this.dragDropService.cloneSelected();
    };
    DesignerComponent.prototype.formatJSON = function (format) {
        if (format === void 0) { format = true; }
        try {
            var uiModel = JSON.parse(this.uiModelEditor.getValue());
            if (format) {
                this.uiModelEditor.setValue(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["formatObjToJsonStr"])(uiModel), -1);
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
    DesignerComponent.prototype.tabSelect = function (i) {
        var _this = this;
        window.requestAnimationFrame(function () {
            try {
                _this.tabset.tabs[i].active = true;
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    DesignerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__["DragDropService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_6__["UIModel"])
    ], DesignerComponent.prototype, "uiModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DesignerComponent.prototype, "scripts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_10__["Interpreter"])
    ], DesignerComponent.prototype, "interpreter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DesignerComponent.prototype, "uiModelUpdated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DesignerComponent.prototype, "scriptUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabset', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"])
    ], DesignerComponent.prototype, "tabset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('controlsPanel', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_8__["ControlsPanelComponent"])
    ], DesignerComponent.prototype, "controlsPanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uiModelEl', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DesignerComponent.prototype, "uiModelEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DesignerComponent.prototype, "scriptEl", void 0);
    DesignerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-designer-component',
            template: __webpack_require__(/*! raw-loader!./designer.component.html */ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.html"),
            styles: [__webpack_require__(/*! ./designer.component.scss */ "../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_drag_drop_service__WEBPACK_IMPORTED_MODULE_7__["DragDropService"]])
    ], DesignerComponent);
    return DesignerComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/labeled.component.ts":
/*!***************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/labeled.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LabeledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledComponent", function() { return LabeledComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-ui-component */ "../ngx-dynamic-components/projects/core/src/lib/components/base-ui-component.ts");


var LabeledComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LabeledComponent, _super);
    function LabeledComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LabeledComponent.prototype, "id", {
        get: function () {
            if (this.hasLabel) {
                return 'component-id-' + this.properties.label.replace(/ /g, '-').toLowerCase();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledComponent.prototype, "hasLabel", {
        get: function () {
            return Boolean(this.properties.labelPosition);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledComponent.prototype, "layout", {
        get: function () {
            return ['left', 'right'].includes(this.properties.labelPosition) ? 'row' : 'column';
        },
        enumerable: true,
        configurable: true
    });
    return LabeledComponent;
}(_base_ui_component__WEBPACK_IMPORTED_MODULE_1__["BaseUIComponent"]));



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/ngx-dynamic-component.ts":
/*!*******************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/ngx-dynamic-component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NGXDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXDynamicComponent", function() { return NGXDynamicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../ngx-dynamic-components/projects/core/src/lib/models.ts");
/* harmony import */ var _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interpreter/interpreter */ "../ngx-dynamic-components/projects/core/src/lib/interpreter/interpreter.ts");




var NGXDynamicComponent = /** @class */ (function () {
    function NGXDynamicComponent() {
        this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NGXDynamicComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.initInterpreter();
                return [2 /*return*/];
            });
        });
    };
    NGXDynamicComponent.prototype.ngOnChanges = function (_a) {
        var scripts = _a.scripts, dataModel = _a.dataModel;
        if (scripts && !scripts.firstChange && scripts.currentValue !== scripts.previousValue) {
            this.initInterpreter();
        }
    };
    NGXDynamicComponent.prototype.initInterpreter = function () {
        if (!this.interpreter) {
            this.interpreter = _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_3__["Interpreter"].create();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NGXDynamicComponent.prototype, "scripts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _interpreter_interpreter__WEBPACK_IMPORTED_MODULE_3__["Interpreter"])
    ], NGXDynamicComponent.prototype, "interpreter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NGXDynamicComponent.prototype, "dataModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["UIModel"])
    ], NGXDynamicComponent.prototype, "uiModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NGXDynamicComponent.prototype, "render", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NGXDynamicComponent.prototype, "changedDataModel", void 0);
    NGXDynamicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-dynamic-component',
            template: "\n    <dc-ui-selector\n        [uiModel]='uiModel'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'\n        (changedDataModel)=\"changedDataModel.emit($event)\"\n        (render)=\"render.emit($event)\">\n    </dc-ui-selector>"
        })
    ], NGXDynamicComponent);
    return NGXDynamicComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  -webkit-box-flex: 0;\n          flex: 0 0 110px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n::ng-deep .ng-select.property {\n  min-height: 28px;\n}\n\n::ng-deep .ng-select.property .ng-select-container {\n  min-height: 28px;\n  height: 28px;\n}\n\n::ng-deep .ng-select.property .ng-select-container .ng-value-container .ng-input {\n  top: 2px;\n}\n\n::ng-deep .ng-select.property .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  padding: 4px 10px;\n}\n\n.form-control,\n.editor-container::ng-deep .form-control {\n  height: calc(1em + 0.75rem + 2px);\n}\n\n.main-properties {\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n}\n\n.layout-properties {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.appearance-properties {\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n}\n\n.container-properties {\n  -webkit-box-ordinal-group: 4;\n          order: 3;\n}\n\nul .prop-height, ul .prop-width {\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n}\n\nul .prop-min-height, ul .prop-min-width, ul .prop-clickActionKey {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\nul .prop-padding, ul .prop-margin, ul .prop-btnClass {\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n}\n\nul .prop-inputWidth, ul .prop-labelWidth {\n  -webkit-box-ordinal-group: 4;\n          order: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3Byb3BlcnRpZXMtZWRpdG9yL3Byb3BlcnRpZXMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwiLi4vbmd4LWR5bmFtaWMtY29tcG9uZW50cy9wcm9qZWN0cy9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9wcm9wZXJ0aWVzLWVkaXRvci9wcm9wZXJ0aWVzLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO1VBQUEsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRERJO0VBQ0UsUUFBQTtBQ0dOOztBRENFO0VBQ0UsaUJBQUE7QUNDSjs7QURHQTs7RUFFRSxpQ0FBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7VUFBQSxRQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtVQUFBLFFBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO1VBQUEsUUFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7VUFBQSxRQUFBO0FDQUY7O0FESUU7RUFDRSw0QkFBQTtVQUFBLFFBQUE7QUNESjs7QURHRTtFQUNFLDRCQUFBO1VBQUEsUUFBQTtBQ0RKOztBREdFO0VBQ0UsNEJBQUE7VUFBQSxRQUFBO0FDREo7O0FESUU7RUFDRSw0QkFBQTtVQUFBLFFBQUE7QUNGSiIsImZpbGUiOiIuLi9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3Byb3BlcnRpZXMtZWRpdG9yL3Byb3BlcnRpZXMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBmbGV4OiAwIDAgMTEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwXG59XG5cbjo6bmctZGVlcCAubmctc2VsZWN0LnByb3BlcnR5IHtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIgIHtcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dCB7XG4gICAgICB0b3A6IDJweDtcbiAgICB9XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wsXG4uZWRpdG9yLWNvbnRhaW5lcjo6bmctZGVlcCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDAuNzVyZW0gKyAycHgpO1xufVxuXG4ubWFpbi1wcm9wZXJ0aWVzIHtcbiAgb3JkZXI6IDA7XG59XG5cbi5sYXlvdXQtcHJvcGVydGllcyB7XG4gIG9yZGVyOiAxO1xufVxuXG4uYXBwZWFyYW5jZS1wcm9wZXJ0aWVzIHtcbiAgb3JkZXI6IDI7XG59XG5cbi5jb250YWluZXItcHJvcGVydGllcyB7XG4gIG9yZGVyOiAzO1xufVxuXG51bCB7XG4gIC5wcm9wLWhlaWdodCwgLnByb3Atd2lkdGgge1xuICAgIG9yZGVyOiAwO1xuICB9XG4gIC5wcm9wLW1pbi1oZWlnaHQsIC5wcm9wLW1pbi13aWR0aCwgLnByb3AtY2xpY2tBY3Rpb25LZXkge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5wcm9wLXBhZGRpbmcsIC5wcm9wLW1hcmdpbiwgLnByb3AtYnRuQ2xhc3Mge1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLnByb3AtaW5wdXRXaWR0aCwgLnByb3AtbGFiZWxXaWR0aCB7XG4gICAgb3JkZXI6IDM7XG4gIH1cbn1cbiIsImxhYmVsIHtcbiAgZmxleDogMCAwIDExMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuOjpuZy1kZWVwIC5uZy1zZWxlY3QucHJvcGVydHkge1xuICBtaW4taGVpZ2h0OiAyOHB4O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3QucHJvcGVydHkgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdC5wcm9wZXJ0eSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dCB7XG4gIHRvcDogMnB4O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3QucHJvcGVydHkgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIHtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wsXG4uZWRpdG9yLWNvbnRhaW5lcjo6bmctZGVlcCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDAuNzVyZW0gKyAycHgpO1xufVxuXG4ubWFpbi1wcm9wZXJ0aWVzIHtcbiAgb3JkZXI6IDA7XG59XG5cbi5sYXlvdXQtcHJvcGVydGllcyB7XG4gIG9yZGVyOiAxO1xufVxuXG4uYXBwZWFyYW5jZS1wcm9wZXJ0aWVzIHtcbiAgb3JkZXI6IDI7XG59XG5cbi5jb250YWluZXItcHJvcGVydGllcyB7XG4gIG9yZGVyOiAzO1xufVxuXG51bCAucHJvcC1oZWlnaHQsIHVsIC5wcm9wLXdpZHRoIHtcbiAgb3JkZXI6IDA7XG59XG51bCAucHJvcC1taW4taGVpZ2h0LCB1bCAucHJvcC1taW4td2lkdGgsIHVsIC5wcm9wLWNsaWNrQWN0aW9uS2V5IHtcbiAgb3JkZXI6IDE7XG59XG51bCAucHJvcC1wYWRkaW5nLCB1bCAucHJvcC1tYXJnaW4sIHVsIC5wcm9wLWJ0bkNsYXNzIHtcbiAgb3JkZXI6IDI7XG59XG51bCAucHJvcC1pbnB1dFdpZHRoLCB1bCAucHJvcC1sYWJlbFdpZHRoIHtcbiAgb3JkZXI6IDM7XG59Il19 */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PropertiesEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesEditorComponent", function() { return PropertiesEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "../ngx-dynamic-components/projects/core/src/lib/models.ts");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../properties */ "../ngx-dynamic-components/projects/core/src/lib/properties/index.ts");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/core.service */ "../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts");





/**
 * @classdesc Widget displayes editable, grouped by category list of component properties based on UIModel.
 */
var PropertiesEditorComponent = /** @class */ (function () {
    function PropertiesEditorComponent() {
        this.updatedProperty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groups = [];
        this.containerProperties = {};
        this.itemProperties = {};
    }
    PropertiesEditorComponent.prototype.ngOnInit = function () {
        this.updateProperties();
    };
    PropertiesEditorComponent.prototype.ngOnChanges = function (_a) {
        var uiModel = _a.uiModel;
        if (!uiModel.firstChange) {
            this.updateProperties();
        }
    };
    PropertiesEditorComponent.prototype.updateProperty = function (value, item) {
        var name = item.name, isContainerProperty = item.isContainerProperty;
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
    PropertiesEditorComponent.prototype.onSelect = function (value, item) {
        this.updateProperty(value, item);
        this.onSave();
    };
    PropertiesEditorComponent.prototype.initPropertyGroups = function (properties) {
        var groups = {};
        properties.forEach(function (item) {
            var groupValue = item.category;
            if (groupValue) {
                groups[groupValue] = groups[groupValue] || { value: groupValue, list: [] };
                groups[groupValue].list.push(item);
            }
        });
        this.groups = Object.values(groups);
    };
    PropertiesEditorComponent.prototype.onSave = function () {
        var _this = this;
        Object.entries(this.itemProperties).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            _this.uiModel.itemProperties[key] = val;
        });
        Object.entries(this.containerProperties).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            _this.uiModel.containerProperties[key] = val;
        });
        this.updatedProperty.emit();
    };
    PropertiesEditorComponent.prototype.strToKebabCase = function (str) {
        return str.toLowerCase().replace(/\s{1,}/g, '-');
    };
    PropertiesEditorComponent.prototype.updateProperties = function () {
        var _this = this;
        this.containerProperties = {};
        this.itemProperties = {};
        this.label = _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"].getListOfComponents().find(function (c) { return c.packageName + ":" + c.name === _this.uiModel.type; }).label;
        var props = _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"].getComponentProperties(this.uiModel.type);
        var itemProps = this.uiModel.itemProperties || {};
        var iProps = props.map(function (prop) {
            var name = prop.name;
            var controlProp = _this.getProperty(name);
            controlProp.descriptor = prop;
            var value = itemProps[name];
            if (value === undefined) {
                value = '';
            }
            else if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, controlProp, { value: value });
        });
        var containerProps = this.uiModel.containerProperties || {};
        var cProps = Array.from(_properties__WEBPACK_IMPORTED_MODULE_3__["ContainerControlProperties"].values()).map(function (prop) {
            var val = containerProps[prop.name];
            var value = val === undefined ? '' : val;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prop, { value: value, isContainerProperty: true });
        });
        this.initPropertyGroups(cProps.concat(iProps));
    };
    PropertiesEditorComponent.prototype.getProperty = function (name) {
        return _properties__WEBPACK_IMPORTED_MODULE_3__["ControlProperties"].get(this.uiModel.type + ":" + name) || _properties__WEBPACK_IMPORTED_MODULE_3__["ControlProperties"].get(name) ||
            { name: name, label: name, category: _properties__WEBPACK_IMPORTED_MODULE_3__["PropertyCategories"].Main };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["UIModel"])
    ], PropertiesEditorComponent.prototype, "uiModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PropertiesEditorComponent.prototype, "updatedProperty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PropertiesEditorComponent.prototype, "selectParent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PropertiesEditorComponent.prototype, "clone", void 0);
    PropertiesEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-properties-editor',
            template: __webpack_require__(/*! raw-loader!./properties-editor.component.html */ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.html"),
            styles: [__webpack_require__(/*! ./properties-editor.component.scss */ "../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.scss"), __webpack_require__(/*! ../../styles/accordion.scss */ "../ngx-dynamic-components/projects/core/src/lib/styles/accordion.scss")]
        })
    ], PropertiesEditorComponent);
    return PropertiesEditorComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/ui-selector-component.ts":
/*!*******************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/ui-selector-component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UISelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UISelectorComponent", function() { return UISelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-ui-component */ "../ngx-dynamic-components/projects/core/src/lib/components/base-ui-component.ts");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/core.service */ "../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts");




var UISelectorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UISelectorComponent, _super);
    function UISelectorComponent(containerRef, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.containerRef = containerRef;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    UISelectorComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.createComponent();
                return [2 /*return*/];
            });
        });
    };
    UISelectorComponent.prototype.ngOnChanges = function (changes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var shouldInit, changed, prop, change;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (changes.firstChange) {
                            return [2 /*return*/];
                        }
                        if (!(!this.component || this.component.uiModel.type !== this.uiModel.type)) return [3 /*break*/, 3];
                        shouldInit = !this.component || this.component.uiModel.id !== this.uiModel.id;
                        // Recreate component with new type.
                        this.createComponent();
                        if (!(shouldInit && Object.values(changes).some(function (c) { return c.firstChange === false; }))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.triggerAction('_OnInit')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
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
    UISelectorComponent.prototype.createComponent = function () {
        var _this = this;
        try {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"].getComponent(this.uiModel.type));
            this.containerRef.clear();
            var componentRef = this.containerRef.createComponent(componentFactory);
            this.component = componentRef.instance;
            this.component.interpreter = this.interpreter;
            this.component.dataModel = this.dataModel;
            this.component.uiModel = this.uiModel;
            this.component.scripts = this.scripts;
            this.component.changedDataModel.subscribe(function (evt) {
                _this.changedDataModel.emit(evt);
            });
            this.render.emit({ success: true });
        }
        catch (error) {
            this.render.emit({ error: error });
            console.error(error);
        }
    };
    UISelectorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UISelectorComponent.prototype, "render", void 0);
    UISelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-selector',
            template: ''
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], UISelectorComponent);
    return UISelectorComponent;
}(_base_ui_component__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ace-editor {\n  min-height: 200px;\n}\n\n.action {\n  cursor: pointer;\n}\n\n.action.active {\n  background: lightgray;\n}\n\n.actions-list {\n  max-height: 400px;\n  overflow: auto;\n  padding: 0.5rem;\n}\n\n.ace-editor, .actions-list {\n  border: solid 1px gray;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3dvcmtmbG93LWVkaXRvci93b3JrZmxvdy1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCIuLi9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3dvcmtmbG93LWVkaXRvci93b3JrZmxvdy1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREFFO0VBQ0UscUJBQUE7QUNFSjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiIuLi9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3dvcmtmbG93LWVkaXRvci93b3JrZmxvdy1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNlLWVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICB9XG59XG5cbi5hY3Rpb25zLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IC41cmVtO1xufVxuXG4uYWNlLWVkaXRvciwgLmFjdGlvbnMtbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4iLCIuYWNlLWVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjdGlvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5hY3Rpb25zLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmFjZS1lZGl0b3IsIC5hY3Rpb25zLWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.ts":
/*!***************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: WorkflowEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowEditorComponent", function() { return WorkflowEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _workflow_actions_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../workflow/actions-store */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-store.ts");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ace-builds */ "../ngx-dynamic-components/node_modules/ace-builds/src-noconflict/ace.js");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");






var WorkflowEditorComponent = /** @class */ (function () {
    function WorkflowEditorComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.search = '';
    }
    WorkflowEditorComponent.prototype.ngOnInit = function () {
        this.actions = Array.from(_workflow_actions_store__WEBPACK_IMPORTED_MODULE_3__["commonActionsMap"]).filter(function (_a) {
            var name = _a[0], action = _a[1];
            return typeof action !== 'function';
        }).map(function (_a) {
            var name = _a[0], action = _a[1];
            return action;
        });
        this.setFilteredActions();
        this.mapArray = Object.keys(this.config);
        this.selectedAction = this.actions[0];
    };
    WorkflowEditorComponent.prototype.ngAfterViewInit = function () {
        this.configEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_4__["edit"])(this.configEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatObjToJsonStr"])(this.selectedAction.config)
        });
    };
    WorkflowEditorComponent.prototype.onSelect = function (action) {
        this.selectedAction = action;
        this.configEditor.setValue(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatObjToJsonStr"])(action.config));
    };
    WorkflowEditorComponent.prototype.appendTo = function (key) {
        try {
            this.config[key].push(JSON.parse(this.configEditor.getValue()));
            this.change.emit();
            this.modal.hide();
        }
        catch (e) {
            console.error(e);
        }
    };
    WorkflowEditorComponent.prototype.setFilteredActions = function () {
        var _this = this;
        if (!this.search) {
            this.filteredActions = this.actions;
        }
        else {
            this.filteredActions = this.actions.filter(function (a) {
                return a.name.includes(_this.search);
            });
        }
    };
    WorkflowEditorComponent.prototype.openModal = function () {
        this.modal.show();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], WorkflowEditorComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('configEl', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WorkflowEditorComponent.prototype, "configEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkflowEditorComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkflowEditorComponent.prototype, "change", void 0);
    WorkflowEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-workflow-editor',
            template: __webpack_require__(/*! raw-loader!./workflow-editor.component.html */ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.html"),
            styles: [__webpack_require__(/*! ./workflow-editor.component.scss */ "../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkflowEditorComponent);
    return WorkflowEditorComponent;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/core.module.ts":
/*!**********************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/core.module.ts ***!
  \**********************************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "../ngx-dynamic-components/node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/popover */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "../ngx-dynamic-components/node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-split */ "../ngx-dynamic-components/node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "../ngx-dynamic-components/node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _components_ui_selector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ui-selector-component */ "../ngx-dynamic-components/projects/core/src/lib/components/ui-selector-component.ts");
/* harmony import */ var _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ngx-dynamic-component */ "../ngx-dynamic-components/projects/core/src/lib/components/ngx-dynamic-component.ts");
/* harmony import */ var _components_designer_designer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/designer/designer.component */ "../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.ts");
/* harmony import */ var _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/control-editor/control-editor.component */ "../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.ts");
/* harmony import */ var _components_properties_editor_properties_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/properties-editor/properties-editor.component */ "../ngx-dynamic-components/projects/core/src/lib/components/properties-editor/properties-editor.component.ts");
/* harmony import */ var _components_controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/controls-panel/controls-panel.component */ "../ngx-dynamic-components/projects/core/src/lib/components/controls-panel/controls-panel.component.ts");
/* harmony import */ var _components_combo_property_combo_property_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/combo-property/combo-property.component */ "../ngx-dynamic-components/projects/core/src/lib/components/combo-property/combo-property.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_actions_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/actions.service */ "../ngx-dynamic-components/projects/core/src/lib/services/actions.service.ts");
/* harmony import */ var _components_workflow_editor_workflow_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/workflow-editor/workflow-editor.component */ "../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.ts");























var CoreModule = /** @class */ (function () {
    function CoreModule(actionsService) {
        this.actionsService = actionsService;
    }
    CoreModule.ctorParameters = function () { return [
        { type: _services_actions_service__WEBPACK_IMPORTED_MODULE_21__["ActionsService"] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_ui_selector_component__WEBPACK_IMPORTED_MODULE_13__["UISelectorComponent"], _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_14__["NGXDynamicComponent"], _components_designer_designer_component__WEBPACK_IMPORTED_MODULE_15__["DesignerComponent"], _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_16__["ControlEditorComponent"], _components_properties_editor_properties_editor_component__WEBPACK_IMPORTED_MODULE_17__["PropertiesEditorComponent"],
                _components_controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_18__["ControlsPanelComponent"],
                _components_combo_property_combo_property_component__WEBPACK_IMPORTED_MODULE_19__["ComboPropertyComponent"],
                _components_workflow_editor_workflow_editor_component__WEBPACK_IMPORTED_MODULE_22__["WorkflowEditorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownModule"].forRoot(),
                angular_split__WEBPACK_IMPORTED_MODULE_11__["AngularSplitModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            exports: [_components_ui_selector_component__WEBPACK_IMPORTED_MODULE_13__["UISelectorComponent"], _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_14__["NGXDynamicComponent"], _components_designer_designer_component__WEBPACK_IMPORTED_MODULE_15__["DesignerComponent"], _components_workflow_editor_workflow_editor_component__WEBPACK_IMPORTED_MODULE_22__["WorkflowEditorComponent"]],
            entryComponents: [_components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_16__["ControlEditorComponent"], _components_workflow_editor_workflow_editor_component__WEBPACK_IMPORTED_MODULE_22__["WorkflowEditorComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_actions_service__WEBPACK_IMPORTED_MODULE_21__["ActionsService"]])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/interpreter/interpreter.ts":
/*!**********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/interpreter/interpreter.ts ***!
  \**********************************************************************************/
/*! exports provided: Interpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenizer */ "../ngx-dynamic-components/projects/core/src/lib/interpreter/tokenizer.ts");
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json5 */ "../ngx-dynamic-components/node_modules/json5/dist/index.js");
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json5__WEBPACK_IMPORTED_MODULE_2__);



var INDENT_SIZE = 2;
var Interpreter = /** @class */ (function () {
    function Interpreter() {
        this.ops = {
            '+': function (a, b) { return a + b; },
            '-': function (a, b) { return a - b; },
            '*': function (a, b) { return a * b; },
            '/': function (a, b) { return a / b; },
            '==': function (a, b) { return a === b; },
            '!=': function (a, b) { return a !== b; },
            '<>': function (a, b) { return a !== b; },
            '>': function (a, b) { return a > b; },
            '<': function (a, b) { return a < b; },
            '>=': function (a, b) { return a >= b; },
            '<=': function (a, b) { return a <= b; },
        };
        this.funcs = {
            dateTime: function (d) {
                if (d === void 0) { d = null; }
                return d ? new Date(d) : new Date();
            },
            print: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log.apply(console, args);
                return args.length > 0 ? args[0] : null;
            },
            isNull: function (v, defValue) {
                if (defValue === void 0) { defValue = null; }
                return defValue === null ? v === null : v || defValue;
            }
        };
        this.globalVars = {
            math: Math
        };
        this.vars = {};
        this.entryFunctionName = null;
    }
    Interpreter.create = function () {
        return new Interpreter();
    };
    Interpreter.prototype.isValue = function (token) {
        var lowerToken = token.toLowerCase();
        return (token[0] === '"' && token[token.length - 1] === '"')
            || lowerToken === 'true' || lowerToken === 'false'
            || lowerToken === 'null'
            || !isNaN(parseFloat(token))
            || (token[0] === '[' && token[token.length - 1] === ']')
            || (token[0] === '{' && token[token.length - 1] === '}');
    };
    Interpreter.prototype.isFunctionCall = function (token) {
        return token[token.length - 1] === ')';
    };
    Interpreter.prototype.resolveValue = function (token) {
        var lowerToken = token.toLowerCase();
        if (token[0] === '"' && token[token.length - 1] === '"') {
            return token.substring(1, token.length - 1);
        }
        else if ((token[0] === '[' && token[token.length - 1] === ']') || (token[0] === '{' && token[token.length - 1] === '}')) {
            return json5__WEBPACK_IMPORTED_MODULE_2__["parse"](token);
        }
        else if (lowerToken === 'true' || lowerToken === 'false') {
            return lowerToken === 'true';
        }
        else if (lowerToken === 'null') {
            return null;
        }
        else {
            var num = Number(token);
            if (isNaN(num)) {
                throw Error("Can't resolve a number value token '" + token + "' ");
            }
            return num;
        }
    };
    Interpreter.prototype.resolveVariable = function (token, parentObject) {
        if (parentObject === void 0) { parentObject = null; }
        function getValue(obj, propName) {
            if (propName[propName.length - 1] !== ']') {
                var value = obj[propName];
                if (value === undefined) {
                    throw Error("Undefined property '" + propName + "'");
                }
                return value;
            }
            else {
                var openInd = propName.indexOf('[');
                if (openInd <= 0) {
                    throw Error("Missing '[' for " + propName);
                }
                // ToDo: resolve two dimentional arrays
                // ToDo: allow indexes notations e.g. t["myprop"]
                obj = obj[propName.substring(0, openInd)]; // array
                var arrIndex = parseInt(propName.substring(openInd + 1, propName.indexOf(']', openInd)), 10);
                return obj[arrIndex];
            }
        }
        return parentObject ? getValue(parentObject, token) : getValue(this.vars, token);
    };
    Interpreter.prototype.resolveToken = function (token, parentObject) {
        if (parentObject === void 0) { parentObject = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var num, tokenParts, result, i, subToken;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        num = parseFloat(token);
                        if (!isNaN(num)) {
                            return [2 /*return*/, num];
                        }
                        tokenParts = _tokenizer__WEBPACK_IMPORTED_MODULE_1__["Tokenizer"].splitAll(token, ['.']);
                        result = null;
                        if (!(tokenParts.length === 1)) return [3 /*break*/, 5];
                        if (!this.isValue(token)) return [3 /*break*/, 1];
                        result = this.resolveValue(token);
                        return [3 /*break*/, 4];
                    case 1:
                        if (!this.isFunctionCall(token)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.evalFunction(token, parentObject)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        result = this.resolveVariable(token, parentObject);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 10];
                    case 5: return [4 /*yield*/, this.resolveToken(tokenParts[0])];
                    case 6:
                        result = _a.sent();
                        i = 1;
                        _a.label = 7;
                    case 7:
                        if (!(i < tokenParts.length)) return [3 /*break*/, 10];
                        subToken = tokenParts[i];
                        return [4 /*yield*/, this.resolveToken(subToken, result)];
                    case 8:
                        result = _a.sent();
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 7];
                    case 10: return [2 /*return*/, result];
                }
            });
        });
    };
    Interpreter.prototype.findFunction = function (name, parentObject) {
        if (parentObject === void 0) { parentObject = null; }
        if (name.indexOf('.') < 0) {
            if (!parentObject) {
                var fn = this.funcs[name] || this.vars[name];
                if (typeof fn !== 'function') {
                    throw Error("Token '" + name + "' is not a valid function (1)");
                }
                return fn; // all functions should be here and no 'bind' required
            }
            else {
                var f = parentObject[name];
                if (typeof f !== 'function') {
                    throw Error("Token '" + name + "' is not a valid function (2)");
                }
                return f.bind(parentObject);
            }
        }
        var lastDot = name.lastIndexOf('.');
        var callingObject = this.resolveVariable(name.substring(0, lastDot), parentObject);
        var funcName = name.substring(lastDot + 1);
        var func = callingObject[funcName];
        if (typeof func !== 'function') {
            throw Error("Token '" + name + "' is not a valid function (3)");
        }
        return func.bind(callingObject);
    };
    Interpreter.prototype.invokeFunction = function (func, fps) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (fps.length === 0) {
                    return [2 /*return*/, func()];
                }
                if (fps.length === 1) {
                    return [2 /*return*/, func(fps[0])];
                }
                if (fps.length === 2) {
                    return [2 /*return*/, func(fps[0], fps[1])];
                }
                if (fps.length === 3) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2])];
                }
                if (fps.length === 4) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3])];
                }
                if (fps.length === 5) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3], fps[4])];
                }
                if (fps.length === 6) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5])];
                }
                if (fps.length === 7) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6])];
                }
                if (fps.length === 8) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6], fps[7])];
                }
                if (fps.length === 9) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6], fps[7], fps[8])];
                }
                if (fps.length === 10) {
                    return [2 /*return*/, func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6], fps[7], fps[8], fps[9])];
                }
                if (fps.length > 10) {
                    throw Error('Function has too many parameters');
                }
                return [2 /*return*/];
            });
        });
    };
    Interpreter.prototype.evalFunction = function (token, parentObject) {
        if (parentObject === void 0) { parentObject = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pStart, pEnd, funcName, paramsStr, funcParamTokens, fps, _i, funcParamTokens_1, paramToken, _a, _b, func;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        pStart = token.indexOf('(');
                        pEnd = token.lastIndexOf(')');
                        if (pStart < 0 || pEnd < 0) {
                            throw Error("Token '" + token + "' is not a valid function. (4)");
                        }
                        funcName = token.substring(0, pStart);
                        paramsStr = token.substring(pStart + 1, pEnd);
                        funcParamTokens = (paramsStr) ? _tokenizer__WEBPACK_IMPORTED_MODULE_1__["Tokenizer"].splitAll(paramsStr, [',']) : [];
                        fps = [];
                        _i = 0, funcParamTokens_1 = funcParamTokens;
                        _c.label = 1;
                    case 1:
                        if (!(_i < funcParamTokens_1.length)) return [3 /*break*/, 4];
                        paramToken = funcParamTokens_1[_i];
                        _b = (_a = fps).push;
                        return [4 /*yield*/, this.evalInstruction(paramToken)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        func = this.findFunction(funcName, parentObject);
                        if (!func || typeof func !== 'function') {
                            throw Error("Unknown function " + funcName);
                        }
                        return [2 /*return*/, this.invokeFunction(func, fps)];
                }
            });
        });
    };
    Interpreter.prototype.evalExpression = function (tokens) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ind, result, value, opFn, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ind = 0;
                        _a.label = 1;
                    case 1:
                        if (!(ind < tokens.length)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.resolveToken(tokens[ind])];
                    case 2:
                        value = _a.sent();
                        if (ind === 0) {
                            result = value;
                        }
                        else {
                            opFn = this.ops[tokens[ind - 1]];
                            if (opFn && typeof opFn === 'function') {
                                res = opFn(result, value);
                                result = res;
                            }
                            else {
                                throw Error("Unknown operation '" + tokens[ind - 1] + "'");
                            }
                        }
                        ind += 2;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    Interpreter.prototype.setVarValue = function (targetPath, value) {
        var pathParts = targetPath.split('.');
        var obj = this.vars;
        for (var i = 0; i < pathParts.length - 1; i++) {
            // create new object if missing
            if (Object.keys(obj).indexOf(pathParts[i]) < 0) {
                obj[pathParts[i]] = {};
            }
            obj = obj[pathParts[i]];
        }
        obj[pathParts[pathParts.length - 1]] = value;
    };
    Interpreter.prototype.evalInstruction = function (instruction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tokens, expValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instruction = (instruction.indexOf('#') < 0) ? instruction.trim() : instruction.substring(0, instruction.indexOf('#')).trim();
                        tokens = _tokenizer__WEBPACK_IMPORTED_MODULE_1__["Tokenizer"].splitAll(instruction);
                        if (!tokens || !tokens.length) {
                            return [2 /*return*/, null];
                        }
                        if (tokens.length === 2) {
                            throw Error("Incorrect expression " + tokens.join(' '));
                        }
                        if (!(tokens.length > 2 && tokens[1] === '=')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.evalExpression(tokens.slice(2))];
                    case 1:
                        expValue = _a.sent();
                        this.setVarValue(tokens[0], expValue);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.evalExpression(tokens)];
                    case 3: 
                    // expression
                    return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Interpreter.prototype.isIfStatement = function (instruction) {
        return instruction.trim().startsWith('if ') && instruction[instruction.length - 1] === ':';
    };
    Interpreter.prototype.getLineIndent = function (line) {
        var cc = 0;
        while (line[cc] === ' ') {
            cc++;
        }
        return cc;
    };
    Interpreter.prototype.runBlock = function (instuctionLines, blockIndent, ignoreLine, context) {
        if (blockIndent === void 0) { blockIndent = 0; }
        if (ignoreLine === void 0) { ignoreLine = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lastResult, instruction, ifCondition, returnInstruction, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        lastResult = null;
                        _b.label = 1;
                    case 1:
                        if (!(context.index < instuctionLines.length)) return [3 /*break*/, 10];
                        if (context.returnCalled) {
                            return [2 /*return*/, context.returnObject];
                        }
                        instruction = instuctionLines[context.index++].line;
                        // ignore empty lines and comment lines
                        if (instruction.trim() === ''
                            || instruction.trim()[0] === '#') {
                            return [3 /*break*/, 1];
                        }
                        if (this.getLineIndent(instruction) < blockIndent) {
                            context.index--; // needs to be reevaluated
                            return [2 /*return*/]; // return block value here, if relevant;
                        }
                        if (ignoreLine) {
                            return [3 /*break*/, 1];
                        }
                        if (!this.isIfStatement(instruction)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.evalInstruction(instruction.replace('if ', '').replace(':', ''))];
                    case 2:
                        ifCondition = _b.sent();
                        blockIndent += INDENT_SIZE;
                        return [4 /*yield*/, this.runBlock(instuctionLines, blockIndent, !ifCondition, context)];
                    case 3:
                        _b.sent();
                        blockIndent -= INDENT_SIZE;
                        return [3 /*break*/, 9];
                    case 4:
                        if (!instruction.trim().startsWith('return')) return [3 /*break*/, 7];
                        context.returnCalled = true;
                        returnInstruction = instruction.replace('return', '').trim();
                        if (!returnInstruction.length) return [3 /*break*/, 6];
                        _a = context;
                        return [4 /*yield*/, this.evalInstruction(returnInstruction)];
                    case 5:
                        lastResult = _a.returnObject = _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.evalInstruction(instruction)];
                    case 8:
                        lastResult = _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 1];
                    case 10: return [2 /*return*/, lastResult];
                }
            });
        });
    };
    Interpreter.prototype.addFunction = function (funcName, fn) {
        this.funcs[funcName] = fn;
        return this;
    };
    Interpreter.prototype.assignGlobalContext = function (obj) {
        Object.assign(this.globalVars, obj);
        return this;
    };
    Interpreter.prototype.evaluate = function (script, context, entryFunctionName) {
        if (context === void 0) { context = null; }
        if (entryFunctionName === void 0) { entryFunctionName = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var linesContext, instuctionLines, error_1, cl, ln;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // replace all tabs with 2 spaces
                        script = script.replace(new RegExp('\t', 'g'), '  ');
                        this.entryFunctionName = entryFunctionName;
                        this.vars = (context && typeof context === 'object') ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.globalVars, context) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.globalVars);
                        linesContext = { index: 0, returnCalled: false };
                        instuctionLines = _tokenizer__WEBPACK_IMPORTED_MODULE_1__["Tokenizer"].splitCodeLines(script);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        if (!(!this.entryFunctionName || !this.entryFunctionName.length)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.runBlock(instuctionLines, 0, false, linesContext)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        linesContext.index = instuctionLines
                            .findIndex(function (i) { return i.line.startsWith("def " + _this.entryFunctionName + "(") && i.line[i.line.length - 1] === ':'; });
                        if (!(linesContext.index >= 0)) return [3 /*break*/, 5];
                        linesContext.index++;
                        return [4 /*yield*/, this.runBlock(instuctionLines, INDENT_SIZE, false, linesContext)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/, null];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        cl = instuctionLines[linesContext.index - 1];
                        ln = String(cl.start);
                        if (cl.start !== cl.end) {
                            ln += ":" + cl.end;
                        }
                        throw Error("Line (" + ln + "): " + error_1);
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Interpreter;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/interpreter/tokenizer.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/interpreter/tokenizer.ts ***!
  \********************************************************************************/
/*! exports provided: Tokenizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tokenizer", function() { return Tokenizer; });
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
    }
    Tokenizer.splitCodeLines = function (text) {
        var lines = [];
        var startLineNum = 1;
        var endLineNum = 1;
        this.splitAll(text, ['\n'], function (newToken) {
            endLineNum = endLineNum + newToken.split('\n').length - 1;
            if (newToken.length) {
                lines.push({
                    line: newToken,
                    start: startLineNum,
                    end: endLineNum
                });
            }
            endLineNum++;
            startLineNum = endLineNum;
        });
        return lines;
    };
    Tokenizer.splitAll = function (text, separators, tokenCreatedCallback) {
        if (separators === void 0) { separators = [' ']; }
        if (tokenCreatedCallback === void 0) { tokenCreatedCallback = null; }
        var result = [];
        var stringChar = '"';
        var index = 0;
        var token = '';
        function nextChar() {
            return text[index++];
        }
        function appendToken(chr) {
            token += chr;
        }
        function completeToken() {
            if (tokenCreatedCallback && typeof tokenCreatedCallback === 'function') {
                tokenCreatedCallback(token);
            }
            if (token.length) {
                result.push(token);
                token = '';
            }
        }
        function iterateString(chr) {
            do {
                appendToken(chr);
                chr = nextChar();
                if (chr === stringChar) {
                    break;
                }
            } while (index < text.length);
            appendToken(chr);
        }
        function iterateBlock(chr, openBlock, closeBlock) {
            var cc = 1;
            do {
                appendToken(chr);
                chr = nextChar();
                if (chr === stringChar) {
                    iterateString(chr);
                    chr = nextChar();
                }
                if (chr === closeBlock) {
                    cc--;
                }
                if (chr === openBlock) {
                    cc++;
                }
                if (cc === 0) {
                    break;
                }
            } while (index < text.length);
            appendToken(chr);
        }
        while (index < text.length) {
            var chr = nextChar();
            // iterate through a string
            if (chr === stringChar) {
                iterateString(chr);
                continue;
            }
            if (chr === '(') {
                iterateBlock(chr, '(', ')');
                continue;
            }
            if (chr === '{') {
                iterateBlock(chr, '{', '}');
                continue;
            }
            if (chr === '[') {
                iterateBlock(chr, '[', ']');
                continue;
            }
            if (separators.indexOf(chr) < 0) {
                appendToken(chr);
            }
            else {
                completeToken();
            }
        }
        // last token
        if (token.length) {
            completeToken();
        }
        return result;
    };
    return Tokenizer;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/models.ts":
/*!*****************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/models.ts ***!
  \*****************************************************************/
/*! exports provided: UIModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModel", function() { return UIModel; });
var UIModel = /** @class */ (function () {
    function UIModel() {
    }
    return UIModel;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/properties/descriptor.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/properties/descriptor.ts ***!
  \********************************************************************************/
/*! exports provided: propDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propDescription", function() { return propDescription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");

function propDescription(description) {
    function decorate(target, key) {
        var properties = target.hasOwnProperty('properties') ? target.properties : [];
        var newProp = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: key }, description);
        var existIndex = properties.findIndex(function (p) { return p.name === key; });
        if (existIndex === -1) {
            properties.push(newProp);
        }
        else {
            properties.splice(existIndex, 1, newProp);
        }
        var proto = Object.getPrototypeOf(target);
        while (proto.hasOwnProperty('properties')) {
            // Filter overridden properties.
            var protoProps = proto.properties.filter(function (protoP) { return !properties.map(function (p) { return p.name; }).includes(protoP.name); });
            properties = properties.concat(protoProps);
            proto = Object.getPrototypeOf(proto);
        }
        target.properties = properties.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }
    return decorate;
}


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/properties/index.ts":
/*!***************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/properties/index.ts ***!
  \***************************************************************************/
/*! exports provided: propDescription, PropertyCategories, StyleProperties, BindingProperties, DataModelProperties, LabelProperties, ContainerProperties, StylePropertiesList, ContainerControlProperties, ControlProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor */ "../ngx-dynamic-components/projects/core/src/lib/properties/descriptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propDescription", function() { return _descriptor__WEBPACK_IMPORTED_MODULE_0__["propDescription"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "../ngx-dynamic-components/projects/core/src/lib/properties/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCategories", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["PropertyCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleProperties", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["StyleProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingProperties", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["BindingProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataModelProperties", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["DataModelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelProperties", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["LabelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerProperties", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["ContainerProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylePropertiesList", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["StylePropertiesList"]; });

/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps */ "../ngx-dynamic-components/projects/core/src/lib/properties/maps.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerControlProperties", function() { return _maps__WEBPACK_IMPORTED_MODULE_2__["ContainerControlProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlProperties", function() { return _maps__WEBPACK_IMPORTED_MODULE_2__["ControlProperties"]; });






/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/properties/maps.ts":
/*!**************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/properties/maps.ts ***!
  \**************************************************************************/
/*! exports provided: ContainerControlProperties, ControlProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerControlProperties", function() { return ContainerControlProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlProperties", function() { return ControlProperties; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "../ngx-dynamic-components/projects/core/src/lib/properties/models.ts");

/**
 * Container properties related to each component.
 */
var ContainerControlProperties = new Map([
    ['fxFlex', { name: 'fxFlex', label: 'Flex Resizing', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Container }],
    ['fxFlexOrder', { name: 'fxFlexOrder', label: 'Flex Order', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Container }],
    ['fxFlexOffset', { name: 'fxFlexOffset', label: 'Flex Offset', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Container }],
    ['fxFlexAlign', {
            name: 'fxFlexAlign', label: 'Flex Align', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Container,
            combo: [['start', 'baseline', 'center', 'end']]
        }],
    ['fxFlexFill', { name: 'fxFlexFill', label: 'Flex Fill', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Container }]
]);
// background, color, font
/**
 * Item properties can be used in any component.
 */
var ControlProperties = new Map([
    // General Component properties
    ['width', { name: 'width', label: 'Width', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    ['height', { name: 'height', label: 'Height', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    ['min-width', { name: 'min-width', label: 'Min width', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    ['min-height', { name: 'min-height', label: 'Min height', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    ['margin', { name: 'margin', label: 'Margin', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    ['padding', { name: 'padding', label: 'Padding', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    // Flex Container properties
    ['fxLayout', {
            name: 'fxLayout', label: 'Flex Direction', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Main,
            combo: [[{ label: 'Row', value: 'row' }, { label: 'Column', value: 'column' }]]
        }],
    ['fxLayoutAlign', {
            name: 'fxLayoutAlign', label: 'Children Align', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Main,
            combo: [['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
                ['start', 'center', 'end', 'space-around', 'space-between', 'stretch', 'baseline']]
        }],
    ['fxLayoutGap', { name: 'fxLayoutGap', label: 'Children Gap', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Main }],
    // Field properties
    ['label', { name: 'label', label: 'Label', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Main }],
    ['labelPosition', {
            name: 'labelPosition', label: 'Label Position', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Main,
            combo: [['left', 'top', 'right', 'bottom']]
        }],
    ['labelWidth', { name: 'labelWidth', label: 'Label Width', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Layout }],
    ['dataModelPath', { name: 'dataModelPath', label: 'Binding', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Main }],
    // Appearence
    ['background', { name: 'background', label: 'Background', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Appearance }],
    ['color', { name: 'color', label: 'Color', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Appearance }],
    ['font-weight', {
            name: 'font-weight', label: 'Font weight', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Appearance,
            combo: [['bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900]]
        }],
    ['font-size', {
            name: 'font-size', label: 'Font size', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Appearance,
            combo: [['large', 'larger', 'medium', 'small', 'smaller', 'x-large', 'xx-large', 'x-small', 'xx-small']]
        }],
    ['font-style', {
            name: 'font-style', label: 'Font style', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Appearance,
            combo: [['italic', 'oblique', 'normal']]
        }],
    ['border', {
            name: 'border', label: 'Border', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Appearance,
            combo: [[{ label: 'all', value: 'border' }, { label: 'top', value: 'border-top' }, { label: 'left', value: 'border-left' },
                    { label: 'right', value: 'border-right' }, { label: 'bottom', value: 'border-bottom' }], 'border-value']
        }],
    // Validation properties
    ['required', { name: 'required', label: 'Required', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Validation,
            combo: [[{ label: 'true', value: true }, { label: 'false', value: false }]] }],
    ['minlength', { name: 'minlength', label: 'Min length', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Validation }],
    ['maxlength', { name: 'maxlength', label: 'Max length', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Validation }],
    ['pattern', { name: 'pattern', label: 'Pattern', category: _models__WEBPACK_IMPORTED_MODULE_0__["PropertyCategories"].Validation }]
]);


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/properties/models.ts":
/*!****************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/properties/models.ts ***!
  \****************************************************************************/
/*! exports provided: PropertyCategories, StyleProperties, BindingProperties, DataModelProperties, LabelProperties, ContainerProperties, StylePropertiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCategories", function() { return PropertyCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleProperties", function() { return StyleProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingProperties", function() { return BindingProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModelProperties", function() { return DataModelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelProperties", function() { return LabelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerProperties", function() { return ContainerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylePropertiesList", function() { return StylePropertiesList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptor */ "../ngx-dynamic-components/projects/core/src/lib/properties/descriptor.ts");


var PropertyCategories;
(function (PropertyCategories) {
    PropertyCategories["Layout"] = "Layout Properties";
    PropertyCategories["Container"] = "Container Properties";
    PropertyCategories["Main"] = "Main Properties";
    PropertyCategories["Appearance"] = "Appearance Properties";
    PropertyCategories["Validation"] = "Validation Properties";
})(PropertyCategories || (PropertyCategories = {}));
var StyleProperties = /** @class */ (function () {
    function StyleProperties() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s width.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s height.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s padding.',
            example: '10px 5px'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "padding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s margin.',
            example: '5px 3px 5px 10px'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "margin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s min width.',
            example: '10px'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "min-width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s min height.',
            example: '10px'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "min-height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s background.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s color.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s font weight.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "font-weight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s font size.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "font-size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s font style.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "font-style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Element\'s border.',
            example: '100%'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StyleProperties.prototype, "border", void 0);
    return StyleProperties;
}());

var BindingProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BindingProperties, _super);
    function BindingProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Path to id in data model.',
            example: 'name'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BindingProperties.prototype, "dataModelPath", void 0);
    return BindingProperties;
}(StyleProperties));

var DataModelProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataModelProperties, _super);
    function DataModelProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Component Data Source.',
            example: '{{responseContext}}/dataset'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataModelProperties.prototype, "dataSource", void 0);
    return DataModelProperties;
}(BindingProperties));

var LabelProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LabelProperties, _super);
    function LabelProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Label orientation',
            example: 'bottom',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LabelProperties.prototype, "labelPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Label',
            example: 'Username',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LabelProperties.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Label width',
            example: '80px',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LabelProperties.prototype, "labelWidth", void 0);
    return LabelProperties;
}(BindingProperties));

var ContainerProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContainerProperties, _super);
    function ContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_descriptor__WEBPACK_IMPORTED_MODULE_1__["propDescription"])({
            description: 'Array of children ui Models',
            example: '[{type: \'text\', itemProperties: {}, containerProperties: {}}]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContainerProperties.prototype, "children", void 0);
    return ContainerProperties;
}(StyleProperties));

var StylePropertiesList = ['width', 'height', 'padding', 'margin', 'min-height', 'min-width', 'background', 'color',
    'font-size', 'font-weight', 'font-style'];


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/services/actions.service.ts":
/*!***********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/services/actions.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _workflow_actions_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/actions-store */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-store.ts");
/* harmony import */ var _workflow_actions_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/actions-core */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-core.ts");
/* harmony import */ var _workflow_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workflow/models */ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/index.ts");






var ActionsService = /** @class */ (function () {
    function ActionsService(http) {
        this.http = http;
        function httpCall(context, config) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var body, url, init, httpHeader_1, req, value, e_1;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = config.body ? Object(_workflow_actions_core__WEBPACK_IMPORTED_MODULE_4__["resolveValue"])(context, config.body) : undefined;
                            url = config.url.replace(/\/+/g, '/').replace(':/', '://') + (config.queryParams ? "?" + config.queryParams : '');
                            init = {
                                responseType: (config.responseType || 'json'),
                            };
                            if (config.headers) {
                                httpHeader_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                                Object.entries(config.headers).forEach(function (_a) {
                                    var key = _a[0], value = _a[1];
                                    httpHeader_1 = httpHeader_1.set(key, value);
                                });
                                init.headers = httpHeader_1;
                            }
                            req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](config.method, url, body, init);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, http.request(req).toPromise()];
                        case 2:
                            value = _a.sent();
                            return [2 /*return*/, {
                                    result: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, value),
                                    status: _workflow_models__WEBPACK_IMPORTED_MODULE_5__["ActionStatus"].SUCCESS
                                }];
                        case 3:
                            e_1 = _a.sent();
                            console.error(e_1);
                            return [2 /*return*/, {
                                    result: e_1,
                                    status: _workflow_models__WEBPACK_IMPORTED_MODULE_5__["ActionStatus"].FAILED
                                }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        _workflow_actions_store__WEBPACK_IMPORTED_MODULE_3__["commonActionsMap"].set('httpCall', {
            name: 'httpCall',
            method: httpCall,
            category: 'Common',
            config: {
                actionType: 'httpCall',
                actionName: 'xhr-1',
                url: 'request/url',
                method: 'GET'
            },
            description: 'Create http request',
            getMessage: function (config) {
                return "Send request " + config.method + " " + config.url;
            }
        });
    }
    ActionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts ***!
  \********************************************************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../properties */ "../ngx-dynamic-components/projects/core/src/lib/properties/index.ts");



var CoreService = /** @class */ (function () {
    function CoreService() {
    }
    CoreService_1 = CoreService;
    CoreService.registerComponent = function (desc) {
        var name = desc.name, packageName = desc.packageName, propertiesDescriptor = desc.propertiesDescriptor;
        if (propertiesDescriptor) {
            propertiesDescriptor.forEach(function (prop) {
                _properties__WEBPACK_IMPORTED_MODULE_2__["ControlProperties"].set(packageName + ":" + name + ":" + prop[0], prop[1]);
            });
        }
        CoreService_1.COMPONENTS_REGISTER.set(packageName + ":" + name, desc);
    };
    CoreService.getComponent = function (type) {
        if (CoreService_1.COMPONENTS_REGISTER.has(type)) {
            return CoreService_1.COMPONENTS_REGISTER.get(type).component;
        }
        throw new Error("Component " + type + " is not registered");
    };
    CoreService.getComponentDescriptor = function (type) {
        if (CoreService_1.COMPONENTS_REGISTER.has(type)) {
            return CoreService_1.COMPONENTS_REGISTER.get(type);
        }
        throw new Error("ComponentDescriptor " + type + " is not registered");
    };
    CoreService.getComponentProperties = function (type) {
        try {
            var desc = CoreService_1.getComponentDescriptor(type);
            return desc.itemProperties.prototype.properties;
        }
        catch (e) {
            throw e;
        }
    };
    CoreService.getListOfComponents = function () {
        return Array.from(CoreService_1.COMPONENTS_REGISTER.values());
    };
    var CoreService_1;
    CoreService.COMPONENTS_REGISTER = new Map();
    CoreService = CoreService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/services/drag-drop.service.ts":
/*!*************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/services/drag-drop.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return DragDropService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "../ngx-dynamic-components/node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../ngx-dynamic-components/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/control-editor/control-editor.component */ "../ngx-dynamic-components/projects/core/src/lib/components/control-editor/control-editor.component.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.service */ "../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");







var ACTIVE_CLASS = 'active-component';
var DragDropService = /** @class */ (function () {
    function DragDropService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.dragIndex = 0;
        this.dropIndex = 0;
        this.uiModelUpdates$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.componentRemoved$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.controls = [];
        this.containerUIModelMap = new Map();
    }
    DragDropService.prototype.init = function (container, uiModel) {
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
    DragDropService.prototype.cleanUpEditor = function () {
        var _this = this;
        this.controls.forEach(function (componentRef) {
            _this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        this.controls = [];
    };
    Object.defineProperty(DragDropService.prototype, "elements", {
        /**
         * Gets containers for drag&drop functionality.
         */
        get: function () {
            var _this = this;
            this.containerUIModelMap.clear();
            _core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"].getListOfComponents().forEach(function (c) {
                _this.containerUIModelMap.set(c.packageName + ":" + c.name, c.defaultModel || c.example.uiModel);
            });
            var elements = this.container.nativeElement.querySelectorAll("\n      #empty-container,\n      ngx-dynamic-component>[drop-container],\n      ngx-dynamic-component>dc-ui-flex-container>[drop-container]\n    ");
            var arrElements = Array.from(elements);
            // .filter(e => !e.id)
            if (this.uiModel) {
                arrElements.forEach((function (container, index) {
                    var childrenUIModel = _this.getChildrenByIndex(_this.uiModel.children, index);
                    container.id = "container-" + index;
                    _this.containerUIModelMap.set(container.id, childrenUIModel);
                    _this.appendControlEditor(container, [_this.uiModel], index, true);
                    arrElements = arrElements.concat(_this.mapChildren(container, childrenUIModel));
                }));
            }
            var controlPanelGroups = Array.from(this.container.nativeElement.querySelectorAll('.preview .components-list'));
            arrElements = arrElements.concat(controlPanelGroups);
            return arrElements;
        },
        enumerable: true,
        configurable: true
    });
    DragDropService.prototype.mapChildren = function (container, childrenUIModel) {
        var _this = this;
        var children = Array.from(container.querySelectorAll("\n        :scope>div>[drop-container],\n        :scope>[drop-container],\n        :scope>div>dc-ui-flex-container>[drop-container]\n    "));
        children.forEach(function (childContainer, i) {
            var uiModelChildren = _this.getChildrenByIndex(childrenUIModel, i + 1);
            childContainer.id = container.id + "-child-" + i;
            _this.containerUIModelMap.set(childContainer.id, uiModelChildren);
            children = children.concat(_this.mapChildren(childContainer, uiModelChildren));
        });
        return children;
    };
    DragDropService.prototype.initEditor = function () {
        var _this = this;
        this.drake.containers.forEach(function (container, index) {
            _this.getContainerItems(container).forEach(function (element, i) {
                var childrenUIModels = _this.containerUIModelMap.get(container.id);
                if (childrenUIModels) {
                    _this.appendControlEditor(element, childrenUIModels, i);
                }
            });
        });
        this.selectedComponent$.subscribe(function (c) { return _this.selectedComponent = c; });
    };
    DragDropService.prototype.getContainerItems = function (container) {
        return Array.from(container.children).filter(function (item) { return item.tagName !== 'DC-CONTROL-EDITOR'; });
    };
    DragDropService.prototype.selectParent = function () {
        if (this.selectCurrentComponent) {
            this.container.nativeElement.querySelector(this.selectedComponent.cssPath).parentNode.click();
        }
    };
    DragDropService.prototype.cloneSelected = function () {
        var _this = this;
        if (this.selectedComponent) {
            var el = this.container.nativeElement.querySelector(this.selectedComponent.cssPath);
            el = el.parentElement;
            while (!el.hasAttribute('drop-container')) {
                if (el.tagName.toLowerCase() === 'ngx-dynamic-component') {
                    return;
                }
                el = el.parentElement;
            }
            var targetModel = this.containerUIModelMap.get(el.id);
            var item = JSON.parse(JSON.stringify(this.selectedComponent.uiModel));
            targetModel.push(item);
            setTimeout(function () { return _this.uiModelUpdates$.next(_this.uiModel); });
        }
    };
    DragDropService.prototype.appendControlEditor = function (element, children, i, isRoot) {
        var _this = this;
        if (isRoot === void 0) { isRoot = false; }
        var uiModel = children[i];
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(_components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_4__["ControlEditorComponent"])
            .create(this.injector);
        componentRef.instance.uiModelChanged.subscribe(function () {
            _this.uiModelUpdates$.next(_this.uiModel);
        });
        componentRef.instance.uiModelRemoved.subscribe(function () {
            if (isRoot) {
                _this.componentRemoved$.next(null);
                _this.uiModel = null;
            }
            else {
                _this.componentRemoved$.next(children[i]);
                children.splice(i, 1);
            }
            _this.uiModelUpdates$.next(_this.uiModel);
        });
        var el = element.attributes.hasOwnProperty('drop-container') ? element : element.querySelector('dc-ui-selector + *');
        if (!el) {
            // Case of an empty ui model.
            return;
        }
        el.addEventListener('click', function (evt) {
            evt.stopImmediatePropagation();
            evt.preventDefault();
            _this.selectedComponent$.next({ uiModel: uiModel, cssPath: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getCssPath"])(el, _this.container.nativeElement) });
            _this.selectCurrentComponent();
        });
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        el.appendChild(domElem);
        this.controls.push(componentRef);
    };
    DragDropService.prototype.deselect = function () {
        var active = this.container.nativeElement.querySelector("." + ACTIVE_CLASS);
        if (active) {
            active.classList.remove(ACTIVE_CLASS);
        }
    };
    /**
     * Adds selected active class to current component.
     * setTimout is used to handle component rerender case. after uiModel update.
     */
    DragDropService.prototype.selectCurrentComponent = function (i) {
        var _this = this;
        if (i === void 0) { i = 0; }
        return new Promise(function (resolve) {
            if (_this.selectedComponent) {
                _this.deselect();
                var el = _this.container.nativeElement.querySelector(_this.selectedComponent.cssPath);
                if (el) {
                    el.classList.add(ACTIVE_CLASS);
                    resolve(el);
                }
                else if (i < 20) {
                    setTimeout(function () {
                        return _this.selectCurrentComponent(i + 1);
                    }, 2e1);
                }
            }
        });
    };
    DragDropService.prototype.initDrake = function (elements) {
        var _this = this;
        this.selectedComponent = null;
        this.drake = Object(ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["dragula"])(elements, {
            moves: function (el, container, handle) {
                return _this.isMoveElement(handle);
            },
            direction: 'horizontal',
        });
        // TODO: Clean up callback.
        this.drake.on('drop', function (el, target, source) {
            var item;
            if (target.id === 'empty-container') {
                _this.uiModel = JSON.parse(JSON.stringify(_this.containerUIModelMap.get(el.id)));
            }
            else {
                var targetModel = _this.containerUIModelMap.get(target.id);
                if (!targetModel) {
                    return null;
                }
                _this.dropIndex = _this.domIndexOf(el, target);
                if (el.id) {
                    item = JSON.parse(JSON.stringify(_this.containerUIModelMap.get(el.id)));
                    targetModel.splice(_this.dropIndex, 0, item);
                    var targetPath = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getCssPath"])(target, _this.container.nativeElement);
                    var itemPath = targetPath + ">*:nth-child(" + (_this.dropIndex + 1) + ") > dc-ui-selector + *";
                    _this.selectedComponent$.next({ uiModel: item, cssPath: itemPath });
                    // Select component after being rerendered.
                    _this.selectCurrentComponent();
                }
                else {
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
            setTimeout(function () { return _this.uiModelUpdates$.next(_this.uiModel); });
        });
        this.drake.on('drag', function (el, source) {
            _this.dragIndex = _this.domIndexOf(el, source);
        });
        this.drake.on('over', function (el, container) {
            container.classList.add('active');
        });
        this.drake.on('out', function (el, container) {
            container.classList.remove('active');
        });
    };
    /**
     * Get UIModel children by drag&drop index.
     * @param children UI Model children.
     * @param index index to find.
     * @param currentIndex current loop index.
     */
    DragDropService.prototype.getChildrenByIndex = function (children, index, currentIndex) {
        if (children === void 0) { children = []; }
        if (index === void 0) { index = 0; }
        if (currentIndex === void 0) { currentIndex = 0; }
        if (index === 0 || currentIndex === index) {
            return children;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var m = children_1[_i];
            if (m.children && this.isDraggableContainer(m)) {
                if (index === ++currentIndex) {
                    return m.children;
                }
            }
        }
        for (var _a = 0, children_2 = children; _a < children_2.length; _a++) {
            var m = children_2[_a];
            if (m.children && m.children.length) {
                return this.getChildrenByIndex(m.children, index, currentIndex);
            }
        }
    };
    DragDropService.prototype.domIndexOf = function (child, parent) {
        return Array.from(parent.children).filter(function (c) { return c.tagName !== 'DC-CONTROL-EDITOR'; }).indexOf(child);
    };
    /**
     * TODO: implement logic to define draggable containers,
     * or make all containers (components with children property) draggable.
     * @param m UIModel
     */
    DragDropService.prototype.isDraggableContainer = function (m) {
        return m.type !== 'material:card';
    };
    DragDropService.prototype.isMoveElement = function (el) {
        var dragEl = el;
        var isMoveEl = dragEl.classList && dragEl.classList.contains('handle');
        while (!isMoveEl && dragEl.parentNode) {
            dragEl = dragEl.parentNode;
            isMoveEl = dragEl.classList && dragEl.classList.contains('handle');
        }
        return isMoveEl;
    };
    DragDropService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    DragDropService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DragDropService);
    return DragDropService;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/styles/accordion.scss":
/*!*****************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/styles/accordion.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "accordion-group ::ng-deep .panel.card {\n  border: none;\n  margin-bottom: 0;\n}\naccordion-group ::ng-deep .panel-heading {\n  padding: 0.25rem;\n  cursor: pointer;\n}\naccordion-group ::ng-deep .panel-body.card-block.card-body {\n  padding: 0;\n}\naccordion-group ::ng-deep [aria-expanded=false] .fa-chevron-down {\n  display: none;\n}\naccordion-group ::ng-deep [aria-expanded=true] .fa-chevron-right {\n  display: none;\n}\n.fa-chevron-right {\n  width: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZrdWt1cmJhL0RldmVsb3BtZW50L1Byb2plY3RzL3Vwd29yay9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9zdHlsZXMvYWNjb3JkaW9uLnNjc3MiLCIuLi9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9zdHlsZXMvYWNjb3JkaW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDREo7QURJRTtFQUNFLFVBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0FDSko7QURRQTtFQUNFLFdBQUE7QUNMRiIsImZpbGUiOiIuLi9uZ3gtZHluYW1pYy1jb21wb25lbnRzL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9zdHlsZXMvYWNjb3JkaW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhY2NvcmRpb24tZ3JvdXAgOjpuZy1kZWVwIHtcbiAgLnBhbmVsLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAucGFuZWwtYm9keS5jYXJkLWJsb2NrLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFthcmlhLWV4cGFuZGVkPVwiZmFsc2VcIl0gLmZhLWNoZXZyb24tZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIFthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAuZmEtY2hldnJvbi1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uZmEtY2hldnJvbi1yaWdodCB7XG4gIHdpZHRoOiAxNHB4O1xufVxuIiwiYWNjb3JkaW9uLWdyb3VwIDo6bmctZGVlcCAucGFuZWwuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmFjY29yZGlvbi1ncm91cCA6Om5nLWRlZXAgLnBhbmVsLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hY2NvcmRpb24tZ3JvdXAgOjpuZy1kZWVwIC5wYW5lbC1ib2R5LmNhcmQtYmxvY2suY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbmFjY29yZGlvbi1ncm91cCA6Om5nLWRlZXAgW2FyaWEtZXhwYW5kZWQ9ZmFsc2VdIC5mYS1jaGV2cm9uLWRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYWNjb3JkaW9uLWdyb3VwIDo6bmctZGVlcCBbYXJpYS1leHBhbmRlZD10cnVlXSAuZmEtY2hldnJvbi1yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgd2lkdGg6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/utils.ts":
/*!****************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/utils.ts ***!
  \****************************************************************/
/*! exports provided: actionDescriptor, getItemByIndex, mapToObj, getCssPath, kebabStrToCamel, setFields, formatObjToJsonStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionDescriptor", function() { return actionDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemByIndex", function() { return getItemByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToObj", function() { return mapToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssPath", function() { return getCssPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabStrToCamel", function() { return kebabStrToCamel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFields", function() { return setFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatObjToJsonStr", function() { return formatObjToJsonStr; });
function actionDescriptor(descriptor) {
    return function (target) {
        target.descriptor = descriptor;
    };
}
/**
 * Safe get item by index from array.
 * @param arr - array.
 * @param idx - index.
 */
function getItemByIndex(arr, idx) {
    if (arr && arr.length > idx) {
        return arr[idx];
    }
}
/**
 * Convering Javascript string Map to object
 * @param map - map to convert.
 * @param excludeKeys - array of keys to exclude from result.
 */
function mapToObj(map, excludeKeys) {
    if (excludeKeys === void 0) { excludeKeys = []; }
    var obj = {};
    map.forEach(function (value, key) {
        if (!excludeKeys.includes(key)) {
            obj[key] = value;
        }
    });
    return obj;
}
function getCssPath(el, parent) {
    if (el instanceof Element) {
        var path = [];
        while (el !== parent) {
            var selector = el.nodeName.toLowerCase();
            var sib = el;
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
var kebabStrToCamel = function (s) {
    return s.replace(/([-][a-z])/ig, function ($1) {
        return $1.toUpperCase().replace('-', '');
    });
};
function setFields(fields, data) {
    if (!fields) {
        return data;
    }
    return fields.reduce(function (res, field) {
        if (Array.isArray(field)) {
            res[field[1]] = data[field[0]];
        }
        else {
            res[field] = data[field];
        }
        return res;
    }, {});
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


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-core.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/actions-core.ts ***!
  \********************************************************************************/
/*! exports provided: resolveValue, resolveVariable, resolvePath, resolveWorkflowPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValue", function() { return resolveValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVariable", function() { return resolveVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveWorkflowPath", function() { return resolveWorkflowPath; });
/* harmony import */ var _json_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.utils */ "../ngx-dynamic-components/projects/core/src/lib/workflow/json.utils.ts");

/**
 * Resolves expression({{ expression }}) in key if contains.
 * @param context - Execution context.
 * @param key - string with posible expression
 */
function resolveExpression(context, key) {
    // Remove spaces in expressions.
    key = key.replace(/\{\{\s*/g, '{{').replace(/\s*\}\}/g, '}}');
    var expressions = getExpressions(key);
    expressions.forEach(function (e) {
        var value = resolveValue(context, e);
        if (value && typeof value === 'object') {
            var propertyPath = e.substring(e.indexOf('/') + 1);
            value = _json_utils__WEBPACK_IMPORTED_MODULE_0__["JSONUtils"].find(value, "$." + propertyPath, null);
        }
        key = key.replace("{{" + e + "}}", value);
    });
    return key;
}
/**
 * Get expression keys in key string.
 * @param key - path with possibles expressions.
 */
function getExpressions(key) {
    var expressions = [];
    var re = /.*\{\{(.*)\}\}/;
    var match = key.match(re);
    if (match) {
        var expression = match[1];
        if (expression) {
            expressions = [expression].concat(getExpressions(key.replace("{{" + expression + "}}", '')));
        }
    }
    return expressions;
}
// todo: this function should not be here. it has to be moved out to utils and then exported from there
/**
 * this has to be more advanced method and has to resolve more complex grammar.
 *  - $ prefix means it takes values from variable
 *  - {{ expression }} like format in a string
 * @param context - Execution context.
 * @param object - payload object.
 */
function resolveValue(context, object) {
    if (!object) {
        return null;
    }
    if (typeof object === 'object') {
        return object;
    }
    if (typeof object === 'string') {
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
function resolvePath(key) {
    var res = key.match(/^{{([\w-]+)}}.*/);
    if (res && res[1]) {
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
function resolveWorkflowPath(key) {
    var res = key.match(/^\$([\w-]+)*/);
    if (res && res[1]) {
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


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-store.ts":
/*!*********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/actions-store.ts ***!
  \*********************************************************************************/
/*! exports provided: commonActionsMap, registerAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonActionsMap", function() { return commonActionsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return registerAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _json_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json.utils */ "../ngx-dynamic-components/projects/core/src/lib/workflow/json.utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/index.ts");
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions-core */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-core.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");





var setValueAction = function (context, config) {
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    var value = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.propertyValue);
    return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(objValue, config.propertyName, value);
};
var setValuesAction = function (context, config) {
    var propertyNames = Object.keys(config.valuesList).filter(function (f) { return !f.startsWith('_'); });
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    for (var _i = 0, propertyNames_1 = propertyNames; _i < propertyNames_1.length; _i++) {
        var propertyName = propertyNames_1[_i];
        var value = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.valuesList[propertyName]);
        _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(objValue, propertyName, value);
    }
};
var switchAction = function (context, config) {
};
var getValueAction = function (context, config) {
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    var propertyName = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.propertyName);
    return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(objValue, propertyName);
};
var getListFromContext = function (context, config) {
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    var propertyName = config.propertyName;
    var list = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(objValue, propertyName);
    if (Array.isArray(list)) {
        return list;
    }
    if (list === null) {
        _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(objValue, propertyName, []);
        return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(objValue, propertyName);
    }
    throw new Error("Property " + propertyName + " in " + config.object + " is not an array.");
};
var addItemToArrayAction = function (context, config) {
    var _a;
    var list = getListFromContext(context, config);
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    var item = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(objValue, config.itemPropertyName);
    return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(objValue, config.propertyName, list.concat([(_a = {}, _a[config.wrapName] = item, _a)]));
};
var pushItemToArrayAction = function (context, config) {
    var _a;
    var list = getListFromContext(context, config);
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    var targetValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.target);
    return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(objValue, config.propertyName, list.concat([(_a = {}, _a[config.wrapName] = targetValue, _a)]));
};
var popArrayAction = function (context, config) {
    var list = getListFromContext(context, config);
    var objValue = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(objValue, config.propertyName, list.slice(0, list.length - 1).slice());
};
var setLocalVariableAction = function (context, config) {
    try {
        var resolved = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveVariable"])(context, config.sourceValue);
        if (!resolved) {
            throw new Error("Local variable " + config.sourceValue + " is not resolved");
        }
        var value = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(resolved.value, resolved.name);
        context.variables.set(config.variableName, value);
        return value;
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
/**
 * @example
 * {
 *  "actionType": "transferData",
 *  "from": "$step1-returnValue",
 *  "fromPropertyName": "$",
 *  "to": "$dataModel",
 *  "toPropertyName": "$.transfered"
 * }
 */
var transferDataAction = function (context, config) {
    var fromObj = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.from);
    var value = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(fromObj, config.fromPropertyName || '$');
    var toObj = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.to);
    return _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].setValue(toObj, config.toPropertyName, value);
};
var mergeInDataModelAction = function (context, config) {
    var value = config.data;
    var dataModel = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, '$dataModel');
    Object.assign(dataModel, value);
    return dataModel;
};
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
    getMessage: function (config) {
        return "Get value from var:" + config.object + " prop: " + config.propertyName;
    }
};
var setValueDescriptor = {
    name: 'setValueAction',
    method: setValueAction,
    category: 'Common',
    config: {
        actionType: 'setValueAction',
        actionName: 'set-value-1',
        object: '$data',
        propertyName: 'propName',
        propertyValue: 'value-1'
    },
    description: 'Sets value to propertyName in objet',
    getMessage: function (config) {
        return "Set value to " + config.object + " prop " + config.propertyName;
    }
};
var setValuesDescriptor = {
    name: 'setValuesAction',
    method: setValuesAction,
    category: 'Common',
    config: {
        actionType: 'setValuesAction',
        actionName: 'set-values-1',
        object: '$data',
        valuesList: { prop: 'value-1' }
    },
    description: 'Sets properties values in object',
    getMessage: function (config) {
        return "Set value list to " + config.object;
    }
};
var addItemToArrayDescriptor = {
    name: 'addItemToArrayAction',
    method: addItemToArrayAction,
    category: 'Common',
    config: {
        actionType: 'addItemToArrayAction',
        actionName: 'add-item-1',
        object: '$data',
        propertyName: 'arrayProp',
        itemPropertyName: 'dataProp',
        wrapName: 'item'
    },
    description: 'Push item from current object into array property',
    getMessage: function (config) {
        return "Pushed item to array: " + config.object + " prop: " + config.propertyName;
    }
};
var pushItemToArrayDescriptor = {
    name: 'pushItemToArrayAction',
    method: pushItemToArrayAction,
    category: 'Common',
    config: {
        actionType: 'pushItemToArrayAction',
        actionName: 'push-item-1',
        object: '$fromVar',
        target: '$toVar',
        propertyName: 'prop1',
        targetPropertyName: 'prop2',
        wrapName: 'item'
    },
    description: 'Push item from custom object into array property',
    getMessage: function (config) {
        return "Pushed item from: " + config.object + " prop: " + config.propertyName + " to " + config.target + " prop: " + config.targetPropertyName;
    }
};
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
    getMessage: function (config) {
        return "Pop item from array " + config.object + " prop " + config.propertyName;
    }
};
var transferDataDescriptor = {
    name: 'transferDataAction',
    method: transferDataAction,
    category: 'Common',
    config: {
        actionType: 'transferDataAction',
        actionName: 'data-transfer-1',
        from: 'object1',
        fromPropertyName: 'prop1',
        to: 'object2',
        toPropertyName: 'prop2'
    },
    description: 'Transfer data from object1 to object2',
    getMessage: function (config) {
        return "Transfer data from " + config.from + " prop: " + config.fromPropertyName + " to " + config.to + " prop " + config.toPropertyName;
    }
};
var setLocalVariableDescriptor = {
    name: 'setLocalVariable',
    method: setLocalVariableAction,
    category: 'Common',
    config: {
        actionType: 'setLocalVariable',
        actionName: 'set-local-1',
        sourceValue: '{{responseContent}}/user/userName',
        variableName: 'userName',
    },
    description: 'Set value to local context',
    getMessage: function (config) {
        return "Set value to local variable " + config.variableName;
    }
};
var mergeInDataModelDescriptor = {
    name: 'mergeInDataModel',
    method: mergeInDataModelAction,
    category: 'Common',
    config: {
        actionType: 'mergeInDataModel',
        actionName: 'merge-data-1',
        data: '{prop: 2}',
    },
    description: 'Merge data into DataModel',
    getMessage: function (config) {
        return "Merged data in data model";
    }
};
var clearDataModelDescriptor = {
    name: 'clearDataModel',
    method: function (context) {
        var dataModel = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, '$dataModel');
        Object.keys(dataModel).forEach(function (key) {
            dataModel[key] = null;
        });
    },
    category: 'Common',
    config: {
        actionType: 'clearDataModel'
    },
    description: 'Clears all data model properties',
    getMessage: function () {
        return "Clear data model";
    }
};
function dataModelValidationAction(context) {
    try {
        var valid_1 = true;
        var uiModel = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, '$uiModel');
        var fields = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(uiModel, '$(children)/itemProperties');
        var requiredFields = fields.filter(function (f) { return f.required; });
        if (requiredFields.length) {
            var dataModel_1 = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, '$dataModel');
            requiredFields.forEach(function (f) {
                var value = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(dataModel_1, f.dataModelPath);
                valid_1 = !(value === undefined || value === null);
            });
        }
        return {
            result: valid_1,
            status: _models__WEBPACK_IMPORTED_MODULE_2__["ActionStatus"].SUCCESS
        };
    }
    catch (e) {
        throw e;
    }
}
var dataModelValidationDescriptor = {
    name: 'dataModelValidation',
    method: dataModelValidationAction,
    category: 'Common',
    config: {
        actionType: 'dataModelValidation'
    },
    description: 'Validates dataModel based on uiModel',
    getMessage: function () {
        return "Data model validation";
    }
};
var ifSttatementAction = function (context, config) {
    try {
        var resolved = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveVariable"])(context, config.value);
        if (!resolved) {
            throw new Error("Variable " + config.value + " is not resolved");
        }
        var value = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(resolved.value, resolved.name);
        var state = config.compareTo ? value === config.compareTo : Boolean(value);
        return {
            result: state,
            steps: state ? config.trueActions : config.falseActions,
            status: _models__WEBPACK_IMPORTED_MODULE_2__["ActionStatus"].SUCCESS
        };
    }
    catch (e) {
        console.error(e);
        return {
            result: null,
            status: _models__WEBPACK_IMPORTED_MODULE_2__["ActionStatus"].STOP_EXECUTION
        };
    }
};
var ifSttatementDescriptor = {
    name: 'if',
    method: ifSttatementAction,
    category: 'Conditional',
    config: {
        value: true,
        trueActions: []
    },
    description: 'Executes actions based on value',
    getMessage: function (config) {
        return "If statement for value " + config.value;
    }
};
function mapAction(context, config) {
    var propertyName = config.propertyName || '$';
    var obj = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.object);
    var list = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(obj, propertyName);
    if (Array.isArray(list)) {
        return list.map(function (item) { return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["setFields"])(config.fields, item); });
    }
    if (typeof list === 'object') {
        return Object.entries(list).reduce(function (prev, entry) {
            var field = entry[0], val = entry[1];
            var mapField = config.fields.find(function (f) { return f[0] === field; });
            if (mapField) {
                prev[mapField[1]] = val;
            }
            else {
                prev[field] = val;
            }
            return prev;
        }, {});
    }
    return list;
}
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
    getMessage: function (config) {
        return "Map array " + config.object + " prop: " + config.propertyName + ", fields: " + config.fields;
    }
};
function joinAction(context, config) {
    var primaryPropertyName = config.primaryPropertyName || '$';
    var primaryObj = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.primaryTable);
    var primaryTable = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(primaryObj, primaryPropertyName);
    var foreignObj = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, config.foreignTable);
    var foreignTable = _json_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].find(foreignObj, config.foreignPropertyName || '$');
    var foreignKey = config.foreignKey || config.primaryKey;
    try {
        var joinTable = foreignTable.map(function (row) {
            var primaryData = primaryTable.find(function (d) { return d[config.primaryKey] === row[foreignKey]; });
            row = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["setFields"])(config.foreignFields, row);
            primaryData = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["setFields"])(config.primaryFields, primaryData);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, row, primaryData);
        });
        return joinTable;
    }
    catch (e) {
        throw e;
    }
}
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
    getMessage: function (config) {
        return "Join table " + config.primaryTable + " (primary key " + config.primaryKey + ")\n      with " + config.foreignTable + " (foreign key " + config.foreignKey + ")";
    }
};
var createObjectAction = function (context, config) {
    var obj = config.object;
    if (typeof obj === 'object') {
        obj = JSON.stringify(obj);
    }
    var res = obj.match(/\$([\w-]+)*/);
    while (res) {
        var variable = "$" + res[1];
        var value = Object(_actions_core__WEBPACK_IMPORTED_MODULE_3__["resolveValue"])(context, variable);
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
};
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
    getMessage: function () {
        return 'Creates object';
    }
};
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
        val.getMessage = function () { return "Action " + name + " executed."; };
    }
    commonActionsMap.set(name, val);
}


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/json.utils.ts":
/*!******************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/json.utils.ts ***!
  \******************************************************************************/
/*! exports provided: JSONUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONUtils", function() { return JSONUtils; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");

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
    JSONUtils.find = function (objectValue, path, defaultValue) {
        if (path === '$') {
            return objectValue;
        }
        var pMatch = JSONUtils.getParentPathMatch(path);
        if (pMatch) {
            return JSONUtils.getDataPathProps(objectValue, pMatch.groups.dataPath, defaultValue);
        }
        var fMatch = JSONUtils.getFlatternPathMatch(path);
        if (fMatch) {
            return JSONUtils.getFlatternMatch(objectValue, fMatch.groups, defaultValue);
        }
        return null;
    };
    /**
     * Get patern path match.
     * @param path - property path.
     */
    JSONUtils.getParentPathMatch = function (path) {
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
    JSONUtils.getFlatternPathMatch = function (path) {
        var fMatch = path.match(new RegExp(JSONUtils.flatternPathReg));
        if (fMatch) {
            fMatch.groups = {
                flattern: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getItemByIndex"])(fMatch, 2),
                filter: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getItemByIndex"])(fMatch, 4),
                dataPath: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getItemByIndex"])(fMatch, 6)
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
    JSONUtils.setValue = function (objectValue, path, value) {
        if (path === '$') {
            return Object.assign(objectValue, value);
        }
        var pMatch = JSONUtils.getParentPathMatch(path);
        if (pMatch) {
            return JSONUtils.setDataPathProp(objectValue, pMatch.groups.dataPath, value);
        }
        var fMatch = JSONUtils.getFlatternPathMatch(path);
        if (fMatch) {
            return JSONUtils.setFlatternProps(objectValue, fMatch.groups, value);
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
    JSONUtils.getFlatternMatch = function (objectValue, _a, defaultValue) {
        var flattern = _a.flattern, filter = _a.filter, dataPath = _a.dataPath;
        var flatternProps = JSONUtils.getFlatternProps(objectValue, flattern);
        flatternProps = flatternProps.filter(function (prop) { return JSONUtils.filterObj(prop, filter); });
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
    JSONUtils.getFlatternProps = function (obj, flattern) {
        var props = [];
        var entries = Array.isArray(obj) ? obj : [obj];
        entries.forEach(function (o) {
            Object.entries(o).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                if (key === flattern) {
                    if (Array.isArray(val)) {
                        props = props.concat.apply(props, val);
                    }
                    else {
                        props.push(val);
                    }
                }
                if (typeof val === 'object') {
                    props = props.concat.apply(props, JSONUtils.getFlatternProps(val, flattern));
                }
            });
        });
        return props;
    };
    /**
     * Creates Javascript object from path filter.
     * @param str - path filter string.
     */
    JSONUtils.filterToMap = function (str) {
        var _a;
        if (!str) {
            return null;
        }
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
    JSONUtils.filterObj = function (obj, filter) {
        if (!obj) {
            return false;
        }
        if (!filter) {
            return true;
        }
        var filterObj = JSONUtils.filterToMap(filter);
        return Object.entries(obj).some(function (_a) {
            var k = _a[0], v = _a[1];
            return filterObj.hasOwnProperty(k) && v === filterObj[k];
        });
    };
    /**
     * Get obj properties satisfying data path.
     * @param obj - Javascript object or array.
     * @param dataPath - data path.
     * @param defaultValue - default value for property.
     */
    JSONUtils.getDataPathProps = function (obj, dataPath, defaultValue) {
        var props = dataPath.split('/');
        if (Array.isArray(obj)) {
            return obj.map(function (o) { return JSONUtils.getPropsValue(o, props, defaultValue); });
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
    JSONUtils.getPropsValue = function (obj, props, defaultValue) {
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
    JSONUtils.setDataPathProp = function (obj, dataPath, val) {
        if (!dataPath) {
            obj = val;
        }
        else {
            var props_1 = dataPath.split('/');
            if (Array.isArray(obj)) {
                obj.forEach(function (o) { return JSONUtils.setPropsValue(o, props_1, val); });
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
    JSONUtils.setPropsValue = function (obj, props, val) {
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
    JSONUtils.setFlatternProps = function (obj, groups, value) {
        var entries = Array.isArray(obj) ? obj : [obj];
        var flattern = groups.flattern, filter = groups.filter, dataPath = groups.dataPath;
        entries.filter(function (o) { return o !== null; }).forEach(function (o) {
            Object.entries(o).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                if (key === flattern) {
                    if (Array.isArray(val)) {
                        val.forEach(function (prop) {
                            if (JSONUtils.filterObj(prop, filter)) {
                                JSONUtils.setDataPathProp(prop, dataPath, value);
                            }
                        });
                    }
                    else if (JSONUtils.filterObj(o, filter)) {
                        JSONUtils.setDataPathProp(val, dataPath, value);
                    }
                }
                if (typeof val === 'object') {
                    JSONUtils.setFlatternProps(val, groups, value);
                }
            });
        });
    };
    /** RegExp /\$\.(?<dataPath>\w+(\/\w+)*)/ */
    JSONUtils.parentPathReg = '\\$\\.([\\w\\-]+(\\/[\\w\\-]+)*)';
    /** RegExp /\$\(((?<flattern>\w+)(\:(?<filter>\w+=\w+))?)\)\/?(?<dataPath>(\w+\/?\w+)*)?/ */
    JSONUtils.flatternPathReg = "\\$\\((([\\w\\-]+)(\\:([\\w\\-]+=[\\w\\-]+))?)\\)\\/?(([\\w\\-]+\\/?[\\w\\-]+)*)?";
    return JSONUtils;
}());

/**
 * Creates Javascript object properties tree.
 * @param obj - Javascript object.
 * @param props - list of tree properties to be created.
 * @param val - value for last property.
 */
function createObjProperties(obj, props, val) {
    if (val === void 0) { val = null; }
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
 * @param obj - Javascript object.
 * @param props - list of tree properties to be created.
 */
function getObjPropertyVal(obj, props) {
    var value = obj;
    for (var _i = 0, props_2 = props; _i < props_2.length; _i++) {
        var prop = props_2[_i];
        if (value && value.hasOwnProperty(prop)) {
            value = value[prop];
        }
        else {
            return null;
        }
    }
    return value;
}


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/logger/index.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/logger/index.ts ***!
  \********************************************************************************/
/*! exports provided: WorkflowLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _workflow_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workflow.logger */ "../ngx-dynamic-components/projects/core/src/lib/workflow/logger/workflow.logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkflowLogger", function() { return _workflow_logger__WEBPACK_IMPORTED_MODULE_0__["WorkflowLogger"]; });




/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/logger/workflow.logger.ts":
/*!******************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/logger/workflow.logger.ts ***!
  \******************************************************************************************/
/*! exports provided: WorkflowLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowLogger", function() { return WorkflowLogger; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../ngx-dynamic-components/node_modules/rxjs/_esm5/index.js");

var WorkflowLogger = /** @class */ (function () {
    function WorkflowLogger() {
        this.logsMap = new Map();
        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    WorkflowLogger.prototype.log = function (workflowName, step) {
        if (this.logsMap.has(workflowName) && step) {
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
        get: function () {
            return Array.from(this.logsMap.values());
        },
        enumerable: true,
        configurable: true
    });
    return WorkflowLogger;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/action.ts":
/*!*********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/models/action.ts ***!
  \*********************************************************************************/
/*! exports provided: ActionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStatus", function() { return ActionStatus; });
var ActionStatus;
(function (ActionStatus) {
    ActionStatus["SUCCESS"] = "success";
    ActionStatus["FAILED"] = "failed";
    ActionStatus["STOP_EXECUTION"] = "stop execution";
})(ActionStatus || (ActionStatus = {}));


/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/index.ts":
/*!********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/models/index.ts ***!
  \********************************************************************************/
/*! exports provided: ActionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionStatus", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["ActionStatus"]; });




/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/lib/workflow/workflow.processor.ts":
/*!**************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/lib/workflow/workflow.processor.ts ***!
  \**************************************************************************************/
/*! exports provided: ExecutionContext, WorkflowEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionContext", function() { return ExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowEngine", function() { return WorkflowEngine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-store */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-store.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "../ngx-dynamic-components/projects/core/src/lib/workflow/logger/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/index.ts");





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

var WorkflowEngine = /** @class */ (function () {
    function WorkflowEngine(workflowConfig) {
        this.workflowConfig = workflowConfig;
        this.context = null;
        this.isInitialized = false;
        this.logger = new _logger__WEBPACK_IMPORTED_MODULE_3__["WorkflowLogger"]();
        this.context = new ExecutionContext();
        workflowConfig.vars = workflowConfig.vars || {};
        workflowConfig.consts = workflowConfig.consts || {};
        workflowConfig.workflowsMap = workflowConfig.workflowsMap || {};
        this.variableResolver = workflowConfig.variableResolver;
    }
    Object.defineProperty(WorkflowEngine.prototype, "configuration", {
        get: function () {
            if (this.isInitialized) {
                return {
                    vars: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapToObj"])(this.context.variables, ['uiModel', 'dataModel']),
                    consts: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapToObj"])(this.context.constants),
                    workflowsMap: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapToObj"])(this.context.workflows)
                };
            }
            var _a = this.workflowConfig, vars = _a.vars, consts = _a.consts, workflowsMap = _a.workflowsMap;
            return { vars: vars, consts: consts, workflowsMap: workflowsMap };
        },
        enumerable: true,
        configurable: true
    });
    WorkflowEngine.prototype.loadContext = function (config) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, _i, _a, name_1, _b, _c, name_2, _d, _e, name_3, _f, _g, name_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_h) {
                context = this.context;
                context.failOnError = !!config.failOnError;
                for (_i = 0, _a = Object.keys(config.vars).filter(function (p) { return !p.startsWith('_'); }); _i < _a.length; _i++) {
                    name_1 = _a[_i];
                    context.variables.set(name_1, config.vars[name_1]);
                }
                for (_b = 0, _c = Object.keys(config.consts).filter(function (p) { return !p.startsWith('_'); }); _b < _c.length; _b++) {
                    name_2 = _c[_b];
                    context.constants.set(name_2, config.consts[name_2]);
                }
                for (_d = 0, _e = Object.keys(config.workflowsMap).filter(function (p) { return !p.startsWith('_'); }); _d < _e.length; _d++) {
                    name_3 = _e[_d];
                    context.workflows.set(name_3, config.workflowsMap[name_3]);
                }
                for (_f = 0, _g = Object.keys(config.workflowsMap).filter(function (p) { return p.startsWith('_var'); }); _f < _g.length; _f++) {
                    name_4 = _g[_f];
                    context.variables.set(name_4, config.workflowsMap[name_4]);
                }
                return [2 /*return*/];
            });
        });
    };
    WorkflowEngine.prototype.loadExternals = function (context, includes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, includes_1, include;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (_i = 0, includes_1 = includes; _i < includes_1.length; _i++) {
                    include = includes_1[_i];
                    if (include === '@common') {
                        _actions_store__WEBPACK_IMPORTED_MODULE_1__["commonActionsMap"].forEach(function (func, key) { return context.actions.set(key, func); });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    WorkflowEngine.prototype.resolveProperties = function (context, step) {
        var payload = Object.assign({}, step);
        delete payload.actionType;
        return payload;
    };
    WorkflowEngine.prototype.executeFlow = function (steps, workflowName) {
        if (steps === void 0) { steps = []; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, importVars, vars, _i, steps_1, step, payload, action, returnValue, message, name_5, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = this.context;
                        if (this.variableResolver) {
                            importVars = context.variables.get('_var_import_overrides') || {};
                            vars = this.variableResolver.resolve(context.variables.get('_var') || {}, importVars);
                            steps = this.variableResolver.resolve(steps, vars);
                        }
                        _i = 0, steps_1 = steps;
                        _a.label = 1;
                    case 1:
                        if (!(_i < steps_1.length)) return [3 /*break*/, 8];
                        step = steps_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        if (!context.actions.has(step.actionType)) {
                            if (context.failOnError) {
                                throw new Error("Can't find action " + step.actionType);
                            }
                            else {
                                console.warn("Can't find action " + step.actionType + ". Step " + step.actionType + " " + step.actionName + " skipped.");
                                return [3 /*break*/, 7];
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
                    case 3:
                        returnValue = _a.sent();
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
                            success: returnValue.status ? returnValue.status === _models__WEBPACK_IMPORTED_MODULE_4__["ActionStatus"].SUCCESS : true,
                        });
                        if (!returnValue.steps) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.executeFlow(returnValue.steps, workflowName)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        this.logger.log(workflowName, {
                            actionType: step.actionType,
                            message: e_1.message,
                            success: false,
                        });
                        this.logger.error$.next("Failed action " + step.actionType + ": " + e_1.message);
                        return [3 /*break*/, 8];
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    WorkflowEngine.prototype.getVariable = function (variableName) {
        return this.context.variables.get(variableName);
    };
    WorkflowEngine.prototype.setVariable = function (variableName, value) {
        this.context.variables.set(variableName, value);
    };
    WorkflowEngine.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    WorkflowEngine.prototype.hasWorkflow = function (workflowName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    WorkflowEngine.prototype.run = function (workflowName, payload) {
        if (payload === void 0) { payload = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    WorkflowEngine.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return WorkflowEngine;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/core/src/public_api.ts":
/*!*****************************************************************!*\
  !*** ../ngx-dynamic-components/projects/core/src/public_api.ts ***!
  \*****************************************************************/
/*! exports provided: CoreService, BaseUIComponent, UISelectorComponent, NGXDynamicComponent, DesignerComponent, LabeledComponent, WorkflowEditorComponent, CoreModule, UIModel, ExecutionContext, WorkflowEngine, commonActionsMap, registerAction, resolveValue, resolveVariable, resolvePath, resolveWorkflowPath, JSONUtils, actionDescriptor, getItemByIndex, mapToObj, getCssPath, kebabStrToCamel, setFields, formatObjToJsonStr, propDescription, PropertyCategories, StyleProperties, BindingProperties, DataModelProperties, LabelProperties, ContainerProperties, StylePropertiesList, ContainerControlProperties, ControlProperties, ActionStatus, WorkflowLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/services/core.service */ "../ngx-dynamic-components/projects/core/src/lib/services/core.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return _lib_services_core_service__WEBPACK_IMPORTED_MODULE_0__["CoreService"]; });

/* harmony import */ var _lib_components_base_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/base-ui-component */ "../ngx-dynamic-components/projects/core/src/lib/components/base-ui-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUIComponent", function() { return _lib_components_base_ui_component__WEBPACK_IMPORTED_MODULE_1__["BaseUIComponent"]; });

/* harmony import */ var _lib_components_ui_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/ui-selector-component */ "../ngx-dynamic-components/projects/core/src/lib/components/ui-selector-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UISelectorComponent", function() { return _lib_components_ui_selector_component__WEBPACK_IMPORTED_MODULE_2__["UISelectorComponent"]; });

/* harmony import */ var _lib_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/ngx-dynamic-component */ "../ngx-dynamic-components/projects/core/src/lib/components/ngx-dynamic-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGXDynamicComponent", function() { return _lib_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["NGXDynamicComponent"]; });

/* harmony import */ var _lib_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/designer/designer.component */ "../ngx-dynamic-components/projects/core/src/lib/components/designer/designer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesignerComponent", function() { return _lib_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_4__["DesignerComponent"]; });

/* harmony import */ var _lib_components_labeled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/labeled.component */ "../ngx-dynamic-components/projects/core/src/lib/components/labeled.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledComponent", function() { return _lib_components_labeled_component__WEBPACK_IMPORTED_MODULE_5__["LabeledComponent"]; });

/* harmony import */ var _lib_components_workflow_editor_workflow_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/workflow-editor/workflow-editor.component */ "../ngx-dynamic-components/projects/core/src/lib/components/workflow-editor/workflow-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkflowEditorComponent", function() { return _lib_components_workflow_editor_workflow_editor_component__WEBPACK_IMPORTED_MODULE_6__["WorkflowEditorComponent"]; });

/* harmony import */ var _lib_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/core.module */ "../ngx-dynamic-components/projects/core/src/lib/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _lib_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]; });

/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/models */ "../ngx-dynamic-components/projects/core/src/lib/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIModel", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_8__["UIModel"]; });

/* harmony import */ var _lib_properties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/properties */ "../ngx-dynamic-components/projects/core/src/lib/properties/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propDescription", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["propDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCategories", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["PropertyCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["StyleProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["BindingProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataModelProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["DataModelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["LabelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["ContainerProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylePropertiesList", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["StylePropertiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerControlProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["ContainerControlProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlProperties", function() { return _lib_properties__WEBPACK_IMPORTED_MODULE_9__["ControlProperties"]; });

/* harmony import */ var _lib_workflow_workflow_processor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/workflow/workflow.processor */ "../ngx-dynamic-components/projects/core/src/lib/workflow/workflow.processor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContext", function() { return _lib_workflow_workflow_processor__WEBPACK_IMPORTED_MODULE_10__["ExecutionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkflowEngine", function() { return _lib_workflow_workflow_processor__WEBPACK_IMPORTED_MODULE_10__["WorkflowEngine"]; });

/* harmony import */ var _lib_workflow_actions_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/workflow/actions-store */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonActionsMap", function() { return _lib_workflow_actions_store__WEBPACK_IMPORTED_MODULE_11__["commonActionsMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return _lib_workflow_actions_store__WEBPACK_IMPORTED_MODULE_11__["registerAction"]; });

/* harmony import */ var _lib_workflow_actions_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/workflow/actions-core */ "../ngx-dynamic-components/projects/core/src/lib/workflow/actions-core.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveValue", function() { return _lib_workflow_actions_core__WEBPACK_IMPORTED_MODULE_12__["resolveValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveVariable", function() { return _lib_workflow_actions_core__WEBPACK_IMPORTED_MODULE_12__["resolveVariable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return _lib_workflow_actions_core__WEBPACK_IMPORTED_MODULE_12__["resolvePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveWorkflowPath", function() { return _lib_workflow_actions_core__WEBPACK_IMPORTED_MODULE_12__["resolveWorkflowPath"]; });

/* harmony import */ var _lib_workflow_json_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/workflow/json.utils */ "../ngx-dynamic-components/projects/core/src/lib/workflow/json.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONUtils", function() { return _lib_workflow_json_utils__WEBPACK_IMPORTED_MODULE_13__["JSONUtils"]; });

/* harmony import */ var _lib_workflow_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/workflow/models */ "../ngx-dynamic-components/projects/core/src/lib/workflow/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionStatus", function() { return _lib_workflow_models__WEBPACK_IMPORTED_MODULE_14__["ActionStatus"]; });

/* harmony import */ var _lib_workflow_logger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/workflow/logger */ "../ngx-dynamic-components/projects/core/src/lib/workflow/logger/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkflowLogger", function() { return _lib_workflow_logger__WEBPACK_IMPORTED_MODULE_15__["WorkflowLogger"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/utils */ "../ngx-dynamic-components/projects/core/src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionDescriptor", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["actionDescriptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemByIndex", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["getItemByIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapToObj", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["mapToObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCssPath", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["getCssPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kebabStrToCamel", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["kebabStrToCamel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFields", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["setFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatObjToJsonStr", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_16__["formatObjToJsonStr"]; });

/*
 * Public API Surface of core
 */



















/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/button-ui-component.ts":
/*!*********************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/button-ui-component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ButtonUIComponent, ButtonProperties, buttonDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonUIComponent", function() { return ButtonUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonProperties", function() { return ButtonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonDescriptor", function() { return buttonDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var ButtonUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonUIComponent, _super);
    function ButtonUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-button',
            template: "\n    <button mat-flat-button color=\"primary\"\n      [ngStyle]=\"itemStyles\"\n      (click)=\"interpreter.evaluate(scripts, uiModel.itemProperties?.clickActionKey)\">\n    {{uiModel.itemProperties?.label}}\n    </button>\n    "
        })
    ], ButtonUIComponent);
    return ButtonUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var ButtonProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ButtonProperties, _super);
    function ButtonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Button label',
            example: 'Click me!',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonProperties.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Key for action that fires onclick',
            example: 'submit',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonProperties.prototype, "clickActionKey", void 0);
    return ButtonProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["StyleProperties"]));

var example = {
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
var buttonDescriptor = {
    name: 'button',
    label: 'Button (Material)',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Button component',
    itemProperties: ButtonProperties,
    component: ButtonUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":button",
        itemProperties: {
            label: 'Button'
        },
        containerProperties: {}
    }
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/card-ui-component.ts":
/*!*******************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/card-ui-component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CardUIComponent, CardProperties, cardDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardUIComponent", function() { return CardUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProperties", function() { return CardProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardDescriptor", function() { return cardDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var CardUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CardUIComponent, _super);
    function CardUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardUIComponent.prototype, "header", {
        get: function () {
            return this.getChildByIndex(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardUIComponent.prototype, "content", {
        get: function () {
            return this.getChildByIndex(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardUIComponent.prototype, "footer", {
        get: function () {
            return this.getChildByIndex(2);
        },
        enumerable: true,
        configurable: true
    });
    CardUIComponent.prototype.getChildByIndex = function (index) {
        return Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["getItemByIndex"])(this.uiModel.children, index);
    };
    CardUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-card',
            template: "\n  <mat-card [ngStyle]=\"itemStyles\">\n    <mat-card-header>\n      <dc-ui-selector *ngIf=\"header\"\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='header'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n        <ng-container *ngTemplateOutlet=\"headerTitle\"></ng-container>\n    </mat-card-header>\n    <ng-template #headerTitle>\n      <mat-card-title *ngIf=\"properties.title\">{{properties.title}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"properties.subTitle\">{{properties.subTitle}}</mat-card-subtitle>\n    </ng-template>\n\n    <img *ngIf=\"properties.img as img\" [src]=\"img\" mat-card-image/>\n    <mat-card-content *ngIf=\"content\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='content'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </mat-card-content>\n    <mat-card-footer *ngIf=\"footer\">\n      <dc-ui-selector\n        (changedDataModel)=\"changedDataModel.emit(this.dataModel)\"\n        [uiModel]='footer'\n        [dataModel]='dataModel'\n        [interpreter]='interpreter'\n        [scripts]='scripts'></dc-ui-selector>\n    </mat-card-footer>\n  </mat-card>",
            styles: ["\n      mat-card-header ::ng-deep .mat-card-header-text {\n        margin: 0;\n      }\n  "]
        })
    ], CardUIComponent);
    return CardUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var CardProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CardProperties, _super);
    function CardProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Card image url',
            example: 'logo.png',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardProperties.prototype, "img", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Card can have 3 children, 1 - header, 2 - content, 3 - footer.',
            example: "[null, {\n      type: 'material:text',\n      containerProperties: {},\n      itemProperties: {\n        text: 'Card content text',\n      }\n    }, null]",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardProperties.prototype, "children", void 0);
    return CardProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ContainerProperties"]));

var example = {
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
var cardDescriptor = {
    name: 'card',
    label: 'Card (Material)',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Containers" /* Containers */,
    description: 'Card layout component',
    itemProperties: CardProperties,
    component: CardUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/checkbox-ui-component.ts":
/*!***********************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/checkbox-ui-component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CheckboxUIComponent, CheckboxProperties, checkboxDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxUIComponent", function() { return CheckboxUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxProperties", function() { return CheckboxProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxDescriptor", function() { return checkboxDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var CheckboxUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxUIComponent, _super);
    function CheckboxUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-checkbox',
            template: "\n    <mat-checkbox [ngStyle]=\"itemStyles\"\n      (input)=\"changedDataModel.emit(this.dataModel)\"\n      [(ngModel)]=\"componentDataModel\">{{uiModel.itemProperties.label}}\n    </mat-checkbox>",
        })
    ], CheckboxUIComponent);
    return CheckboxUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var CheckboxProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxProperties, _super);
    function CheckboxProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Label',
            example: 'Accept conditions.',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxProperties.prototype, "label", void 0);
    return CheckboxProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
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
var checkboxDescriptor = {
    name: 'checkbox',
    label: 'Multi-choice boxes (Material)',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Checkbox component',
    itemProperties: CheckboxProperties,
    component: CheckboxUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/datable-ui/datable-ui.component.ts":
/*!*********************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/datable-ui/datable-ui.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DatableUIComponent, DatableProperties, example, datableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatableUIComponent", function() { return DatableUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatableProperties", function() { return DatableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datableDescriptor", function() { return datableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var DatableUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DatableUIComponent, _super);
    function DatableUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DatableUIComponent.prototype, "displayedColumns", {
        get: function () {
            return this.uiModel.itemProperties.displayedProperties.map(function (_a) {
                var dataProperty = _a.dataProperty;
                return dataProperty;
            });
        },
        enumerable: true,
        configurable: true
    });
    DatableUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-datable-ui',
            template: "\n    <mat-table [dataSource]=\"componentDataModel\" [ngStyle]=\"itemStyles\">\n      <!-- Column -->\n      <ng-container *ngFor=\"let item of uiModel.itemProperties.displayedProperties\" [matColumnDef]=\"item.dataProperty\">\n        <mat-header-cell *matHeaderCellDef> {{item.title}} </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element[item.dataProperty]}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  "
        })
    ], DatableUIComponent);
    return DatableUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var DatableProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DatableProperties, _super);
    function DatableProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Displayed properties',
            example: "[{title: 'No.', dataProperty: 'position'}, {title: 'Name', dataProperty: 'name'}]",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DatableProperties.prototype, "displayedProperties", void 0);
    return DatableProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
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
var datableDescriptor = {
    name: 'datable',
    label: 'Material Table',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Data" /* Data */,
    description: 'Datable component',
    itemProperties: DatableProperties,
    component: DatableUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.ts":
/*!***********************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: FlexContainerUIComponent, FlexContainerProperties, flexContainerDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainerUIComponent", function() { return FlexContainerUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainerProperties", function() { return FlexContainerProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexContainerDescriptor", function() { return flexContainerDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var FlexContainerUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FlexContainerUIComponent, _super);
    function FlexContainerUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexContainerUIComponent.prototype.getStrValue = function (value) {
        if (value) {
            return value.split('|').join(' ');
        }
        return '';
    };
    FlexContainerUIComponent.prototype.onFormSubmit = function (evt) {
        this.triggerAction('_OnSubmit');
        // Trigger ui validation messages.
        this.form.nativeElement.querySelectorAll('input,textarea,select').forEach(function (el, i, list) {
            el.focus();
            if (list.length - 1 === i) {
                el.blur();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FlexContainerUIComponent.prototype, "form", void 0);
    FlexContainerUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-flex-container',
            template: __webpack_require__(/*! raw-loader!./flex-container-ui-component.html */ "../ngx-dynamic-components/node_modules/raw-loader/index.js!../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.html")
        })
    ], FlexContainerUIComponent);
    return FlexContainerUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var FlexContainerProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FlexContainerProperties, _super);
    function FlexContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'fxLayout (Angular Flex-Layout property)',
            example: 'column',
            link: 'https://github.com/angular/flex-layout/wiki/fxLayout-API'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FlexContainerProperties.prototype, "fxLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'fxLayoutGap (Angular Flex-Layout property)',
            example: '10px',
            link: 'https://github.com/angular/flex-layout/wiki/fxLayoutGap-API'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FlexContainerProperties.prototype, "fxLayoutGap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'fxLayoutAlign (Angular Flex-Layout property)',
            example: 'stretch center',
            link: 'https://github.com/angular/flex-layout/wiki/fxLayoutAlign-API0'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FlexContainerProperties.prototype, "fxLayoutAlign", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'If panel is form',
            example: 'true'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FlexContainerProperties.prototype, "isForm", void 0);
    return FlexContainerProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["StyleProperties"]));

var example = {
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
var flexContainerDescriptor = {
    name: 'flex-container',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    label: 'Flex Panel',
    category: "Containers" /* Containers */,
    description: 'Flex layout component',
    itemProperties: FlexContainerProperties,
    component: FlexContainerUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":flex-container",
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
                name: 'isForm', label: 'Form', category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["PropertyCategories"].Main,
                combo: [[{ label: 'false', value: false }, { label: 'true', value: true }]]
            }]]
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/input-ui-component.ts":
/*!********************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/input-ui-component.ts ***!
  \********************************************************************************************/
/*! exports provided: InputUIComponent, InputProperties, inputDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputUIComponent", function() { return InputUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputProperties", function() { return InputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDescriptor", function() { return inputDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var InputUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InputUIComponent, _super);
    function InputUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-input',
            template: "\n        <mat-form-field>\n          <input matInput\n            [ngStyle]=\"itemStyles\"\n            [placeholder]=\"uiModel.itemProperties?.placeholder\"\n            (input)=\"changedDataModel.emit(this.dataModel)\"\n            [(ngModel)]=\"componentDataModel\"\n            />\n        </mat-form-field>\n    "
        })
    ], InputUIComponent);
    return InputUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var InputProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InputProperties, _super);
    function InputProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type your name',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputProperties.prototype, "placeholder", void 0);
    return InputProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

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
var inputDescriptor = {
    name: 'text-input',
    label: 'Text Input (Material)',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Input component',
    itemProperties: InputProperties,
    component: InputUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/radio-group-ui/radio-group-ui.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/radio-group-ui/radio-group-ui.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RadioGroupUIComponent, RadioGroupProperties, example, radioGroupDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupUIComponent", function() { return RadioGroupUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupProperties", function() { return RadioGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioGroupDescriptor", function() { return radioGroupDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var RadioGroupUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioGroupUIComponent, _super);
    function RadioGroupUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioGroupUIComponent.prototype, "orientation", {
        get: function () {
            return this.properties.orientation === 'vertical' ? 'column' : 'row';
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-radio-group-ui',
            template: "\n    <label *ngIf=\"uiModel.itemProperties.label\">{{uiModel.itemProperties.label}}</label>\n    <mat-radio-group [ngStyle]=\"itemStyles\"\n      [fxLayout]=\"orientation\"\n      (change)=\"changedDataModel.emit(this.dataModel)\"\n      [(ngModel)]=\"componentDataModel\">\n      <mat-radio-button *ngFor=\"let option of uiModel.itemProperties.options\" [value]=\"option.value\"\n        [ngStyle]=\"getStyles(uiModel.itemProperties.optionStyles)\">\n        {{option.label}}\n      </mat-radio-button>\n    </mat-radio-group>\n  "
        })
    ], RadioGroupUIComponent);
    return RadioGroupUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var RadioGroupProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioGroupProperties, _super);
    function RadioGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Label',
            example: 'Select color',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadioGroupProperties.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Radio group options',
            example: '[{label: "One", value: 1}]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RadioGroupProperties.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Radio option styles',
            example: '{ padding: \'10px\' }',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioGroupProperties.prototype, "optionStyles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Radio options orientation (horizontal|vertical). Default - horizontal',
            example: 'verical',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadioGroupProperties.prototype, "orientation", void 0);
    return RadioGroupProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
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
var radioGroupDescriptor = {
    name: 'radio-group',
    label: 'Single choice boxes',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Radio group component',
    itemProperties: RadioGroupProperties,
    component: RadioGroupUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/register.ts":
/*!**********************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/register.ts ***!
  \**********************************************************************************/
/*! exports provided: COMPONENTS_LIST, registerComponents, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return COMPONENTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerComponents", function() { return registerComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _input_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/input-ui-component.ts");
/* harmony import */ var _select_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/select-ui-component.ts");
/* harmony import */ var _button_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/button-ui-component.ts");
/* harmony import */ var _card_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/card-ui-component.ts");
/* harmony import */ var _checkbox_ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/checkbox-ui-component.ts");
/* harmony import */ var _flex_container_ui_flex_container_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flex-container-ui/flex-container-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.ts");
/* harmony import */ var _text_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/text-ui-component.ts");
/* harmony import */ var _textarea_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textarea-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/textarea-ui-component.ts");
/* harmony import */ var _radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radio-group-ui/radio-group-ui.component */ "../ngx-dynamic-components/projects/material/src/lib/components/radio-group-ui/radio-group-ui.component.ts");
/* harmony import */ var _tabs_ui_tabs_ui_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs-ui/tabs-ui.component */ "../ngx-dynamic-components/projects/material/src/lib/components/tabs-ui/tabs-ui.component.ts");
/* harmony import */ var _datable_ui_datable_ui_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datable-ui/datable-ui.component */ "../ngx-dynamic-components/projects/material/src/lib/components/datable-ui/datable-ui.component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");













var COMPONENTS_LIST = [
    _select_ui_component__WEBPACK_IMPORTED_MODULE_2__["selectDescriptor"],
    _input_ui_component__WEBPACK_IMPORTED_MODULE_1__["inputDescriptor"],
    _button_ui_component__WEBPACK_IMPORTED_MODULE_3__["buttonDescriptor"],
    _card_ui_component__WEBPACK_IMPORTED_MODULE_4__["cardDescriptor"],
    _checkbox_ui_component__WEBPACK_IMPORTED_MODULE_5__["checkboxDescriptor"],
    _flex_container_ui_flex_container_ui_component__WEBPACK_IMPORTED_MODULE_6__["flexContainerDescriptor"],
    _text_ui_component__WEBPACK_IMPORTED_MODULE_7__["textDescriptor"],
    _textarea_ui_component__WEBPACK_IMPORTED_MODULE_8__["textareaDescriptor"],
    _radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_9__["radioGroupDescriptor"],
    _tabs_ui_tabs_ui_component__WEBPACK_IMPORTED_MODULE_10__["tabsDescriptor"],
    _datable_ui_datable_ui_component__WEBPACK_IMPORTED_MODULE_11__["datableDescriptor"]
];
// Register components.
function registerComponents() {
    COMPONENTS_LIST.forEach(function (component) { return _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__["CoreService"].registerComponent(component); });
}
function getCategories() {
    var categories = COMPONENTS_LIST.reduce(function (map, desc) {
        map[desc.category] = map[desc.category] || [];
        map[desc.category].push(desc);
        return map;
    }, {});
    return Object.entries(categories).map(function (_a) {
        var key = _a[0], val = _a[1];
        return {
            name: key,
            components: val,
            packageName: _constants__WEBPACK_IMPORTED_MODULE_12__["packageName"]
        };
    });
}


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/select-ui-component.ts":
/*!*********************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/select-ui-component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectUIComponent, SelectProperties, selectDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUIComponent", function() { return SelectUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProperties", function() { return SelectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDescriptor", function() { return selectDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var SelectUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectUIComponent, _super);
    function SelectUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectUIComponent.prototype.onSelect = function () {
        this.changedDataModel.emit(this.dataModel);
        this.triggerAction('_selectionChanged');
    };
    SelectUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-select',
            template: "\n    <mat-form-field>\n      <mat-select [ngStyle]=\"itemStyles\"\n        [placeholder]=\"uiModel.itemProperties?.placeholder\"\n        (selectionChange)=\"onSelect()\"\n        [(ngModel)]=\"componentDataModel\">\n        <mat-option *ngFor=\"let option of uiModel.itemProperties?.options\" [value]=\"option.value\">\n          {{option.label}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  "
        })
    ], SelectUIComponent);
    return SelectUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var SelectProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectProperties, _super);
    function SelectProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Select options.',
            example: '[{label: "One", value: 1}]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectProperties.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Label shown when no option is selected.',
            example: 'Please select an option',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectProperties.prototype, "placeholder", void 0);
    return SelectProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
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
var selectDescriptor = {
    name: 'select',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    label: 'Dropdown (Material)',
    category: "Basic" /* Basic */,
    description: 'Select component',
    itemProperties: SelectProperties,
    component: SelectUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/tabs-ui/tabs-ui.component.ts":
/*!***************************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/tabs-ui/tabs-ui.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TabsUIComponent, TabsProperties, example, tabsDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsUIComponent", function() { return TabsUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsProperties", function() { return TabsProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "example", function() { return example; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabsDescriptor", function() { return tabsDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var TabsUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TabsUIComponent, _super);
    function TabsUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-tabs-ui',
            template: "\n    <mat-tab-group >\n      <mat-tab *ngFor=\"let item of uiModel.children; let i = index\" [label]=\"item.containerProperties.label || 'Tab ' + (i + 1)\">\n        <dc-ui-selector\n          (changedDataModel)=\"changedDataModel.emit(dataModel)\"\n          [uiModel]='item'\n          [dataModel]='dataModel'\n          [interpreter]='interpreter'\n          [scripts]='scripts'></dc-ui-selector>\n      </mat-tab>\n    </mat-tab-group>\n  "
        })
    ], TabsUIComponent);
    return TabsUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var TabsProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TabsProperties, _super);
    function TabsProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TabsProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["ContainerProperties"]));

var example = {
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
var tabsDescriptor = {
    name: 'tabs-group',
    label: 'Tabs container (Material)',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Containers" /* Containers */,
    description: 'Tabs group component',
    itemProperties: TabsProperties,
    component: TabsUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/text-ui-component.ts":
/*!*******************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/text-ui-component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TextUIComponent, TextProperties, textDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextUIComponent", function() { return TextUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProperties", function() { return TextProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textDescriptor", function() { return textDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var TextUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextUIComponent, _super);
    function TextUIComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.display = 'inline-block';
        return _this;
    }
    Object.defineProperty(TextUIComponent.prototype, "txtBoxStyles", {
        get: function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.itemStyles, { 'border-bottom': this.properties.border ? '2px solid black' : 'none' });
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextUIComponent.prototype, "display", void 0);
    TextUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-text',
            template: "\n    <span [ngStyle]=\"txtBoxStyles\">{{uiModel.itemProperties?.text}}</span>\n    "
        })
    ], TextUIComponent);
    return TextUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var TextProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextProperties, _super);
    function TextProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Displays text data.',
            example: 'Text information',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextProperties.prototype, "text", void 0);
    return TextProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["StyleProperties"]));

var example = {
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
var textDescriptor = {
    name: 'text',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    label: 'Text',
    category: "Basic" /* Basic */,
    description: 'Text component',
    itemProperties: TextProperties,
    component: TextUIComponent,
    example: example,
    defaultModel: {
        type: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"] + ":text",
        itemProperties: {
            text: 'Enter text here',
            width: '100%'
        },
        containerProperties: {}
    }
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/components/textarea-ui-component.ts":
/*!***********************************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/components/textarea-ui-component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TextareaUIComponent, TextareaProperties, textareaDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaUIComponent", function() { return TextareaUIComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaProperties", function() { return TextareaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textareaDescriptor", function() { return textareaDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../ngx-dynamic-components/projects/material/src/lib/constants.ts");




var TextareaUIComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaUIComponent, _super);
    function TextareaUIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dc-ui-textarea',
            template: "\n        <mat-form-field>\n            <textarea matInput [placeholder]=\"uiModel?.itemProperties?.placeholder\"\n                [rows]=\"uiModel?.itemProperties?.rows\"\n                [ngStyle]=\"itemStyles\"\n                (input)=\"changedDataModel.emit(this.dataModel)\"\n                [(ngModel)]=\"componentDataModel\"></textarea>\n        </mat-form-field>\n    "
        })
    ], TextareaUIComponent);
    return TextareaUIComponent;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["BaseUIComponent"]));

var TextareaProperties = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaProperties, _super);
    function TextareaProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Number of rows in textarea',
            example: '5',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaProperties.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["propDescription"])({
            description: 'Text shown when field is empty',
            example: 'Type about yourself',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextareaProperties.prototype, "placeholder", void 0);
    return TextareaProperties;
}(_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__["DataModelProperties"]));

var example = {
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
var textareaDescriptor = {
    name: 'textarea',
    label: 'Text Area',
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__["packageName"],
    category: "Basic" /* Basic */,
    description: 'Text area component',
    itemProperties: TextareaProperties,
    component: TextareaUIComponent,
    example: example
};


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/constants.ts":
/*!************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/constants.ts ***!
  \************************************************************************/
/*! exports provided: packageName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageName", function() { return packageName; });
var packageName = 'material';


/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/lib/material.module.ts":
/*!******************************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/lib/material.module.ts ***!
  \******************************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../ngx-dynamic-components/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _components_input_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/input-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/input-ui-component.ts");
/* harmony import */ var _components_text_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/text-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/text-ui-component.ts");
/* harmony import */ var _components_button_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/button-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/button-ui-component.ts");
/* harmony import */ var _components_flex_container_ui_flex_container_ui_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/flex-container-ui/flex-container-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/flex-container-ui/flex-container-ui-component.ts");
/* harmony import */ var _components_select_ui_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/select-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/select-ui-component.ts");
/* harmony import */ var _components_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/checkbox-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/checkbox-ui-component.ts");
/* harmony import */ var _components_textarea_ui_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/textarea-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/textarea-ui-component.ts");
/* harmony import */ var _components_card_ui_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/card-ui-component */ "../ngx-dynamic-components/projects/material/src/lib/components/card-ui-component.ts");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register */ "../ngx-dynamic-components/projects/material/src/lib/components/register.ts");
/* harmony import */ var _components_radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/radio-group-ui/radio-group-ui.component */ "../ngx-dynamic-components/projects/material/src/lib/components/radio-group-ui/radio-group-ui.component.ts");
/* harmony import */ var _components_tabs_ui_tabs_ui_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tabs-ui/tabs-ui.component */ "../ngx-dynamic-components/projects/material/src/lib/components/tabs-ui/tabs-ui.component.ts");
/* harmony import */ var _components_datable_ui_datable_ui_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/datable-ui/datable-ui.component */ "../ngx-dynamic-components/projects/material/src/lib/components/datable-ui/datable-ui.component.ts");



















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
        Object(_components_register__WEBPACK_IMPORTED_MODULE_15__["registerComponents"])();
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_button_ui_component__WEBPACK_IMPORTED_MODULE_9__["ButtonUIComponent"],
                _components_flex_container_ui_flex_container_ui_component__WEBPACK_IMPORTED_MODULE_10__["FlexContainerUIComponent"],
                _components_card_ui_component__WEBPACK_IMPORTED_MODULE_14__["CardUIComponent"],
                _components_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxUIComponent"],
                _components_input_ui_component__WEBPACK_IMPORTED_MODULE_7__["InputUIComponent"],
                _components_select_ui_component__WEBPACK_IMPORTED_MODULE_11__["SelectUIComponent"],
                _components_text_ui_component__WEBPACK_IMPORTED_MODULE_8__["TextUIComponent"],
                _components_textarea_ui_component__WEBPACK_IMPORTED_MODULE_13__["TextareaUIComponent"],
                _components_radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_16__["RadioGroupUIComponent"],
                _components_tabs_ui_tabs_ui_component__WEBPACK_IMPORTED_MODULE_17__["TabsUIComponent"],
                _components_datable_ui_datable_ui_component__WEBPACK_IMPORTED_MODULE_18__["DatableUIComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            exports: [
                _components_button_ui_component__WEBPACK_IMPORTED_MODULE_9__["ButtonUIComponent"],
                _components_card_ui_component__WEBPACK_IMPORTED_MODULE_14__["CardUIComponent"],
                _components_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxUIComponent"],
                _components_flex_container_ui_flex_container_ui_component__WEBPACK_IMPORTED_MODULE_10__["FlexContainerUIComponent"],
                _components_input_ui_component__WEBPACK_IMPORTED_MODULE_7__["InputUIComponent"],
                _components_select_ui_component__WEBPACK_IMPORTED_MODULE_11__["SelectUIComponent"],
                _components_textarea_ui_component__WEBPACK_IMPORTED_MODULE_13__["TextareaUIComponent"],
                _components_text_ui_component__WEBPACK_IMPORTED_MODULE_8__["TextUIComponent"]
            ],
            entryComponents: [
                _components_input_ui_component__WEBPACK_IMPORTED_MODULE_7__["InputUIComponent"],
                _components_text_ui_component__WEBPACK_IMPORTED_MODULE_8__["TextUIComponent"],
                _components_button_ui_component__WEBPACK_IMPORTED_MODULE_9__["ButtonUIComponent"],
                _components_flex_container_ui_flex_container_ui_component__WEBPACK_IMPORTED_MODULE_10__["FlexContainerUIComponent"],
                _components_checkbox_ui_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxUIComponent"],
                _components_select_ui_component__WEBPACK_IMPORTED_MODULE_11__["SelectUIComponent"],
                _components_textarea_ui_component__WEBPACK_IMPORTED_MODULE_13__["TextareaUIComponent"],
                _components_card_ui_component__WEBPACK_IMPORTED_MODULE_14__["CardUIComponent"],
                _components_radio_group_ui_radio_group_ui_component__WEBPACK_IMPORTED_MODULE_16__["RadioGroupUIComponent"],
                _components_tabs_ui_tabs_ui_component__WEBPACK_IMPORTED_MODULE_17__["TabsUIComponent"],
                _components_datable_ui_datable_ui_component__WEBPACK_IMPORTED_MODULE_18__["DatableUIComponent"]
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../ngx-dynamic-components/projects/material/src/public_api.ts":
/*!*********************************************************************!*\
  !*** ../ngx-dynamic-components/projects/material/src/public_api.ts ***!
  \*********************************************************************/
/*! exports provided: COMPONENTS_LIST, getCategories, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/material.module */ "../ngx-dynamic-components/projects/material/src/lib/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _lib_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });

/* harmony import */ var _lib_components_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/register */ "../ngx-dynamic-components/projects/material/src/lib/components/register.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS_LIST", function() { return _lib_components_register__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _lib_components_register__WEBPACK_IMPORTED_MODULE_1__["getCategories"]; });

/*
 * Public API Surface of material
 */




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

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{config.pageName}} configuration</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body px-4 d-flex flex-column\">\n  <alert type=\"danger\" *ngIf=\"error\">\n    <strong>Error:</strong> {{error}}\n  </alert>\n  <div class=\"position-relative h-100\">\n    <div class=\"tabs-actions position-absolute\">\n      <button type=\"button\" class=\"btn btn-light btn-sm px-1 py-0\" (click)=\"formatJSON()\" [ngClass]=\"{active: formatted}\"\n        title=\"Format JSON data, with proper indentation and line feeds (Ctrl+\\)\">\n        <i class=\"fa fa-indent\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-light btn-sm ml-1 px-1 py-0\" (click)=\"formatJSON(false)\" [ngClass]=\"{active: !formatted}\"\n        title=\"Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)\">\n        <i class=\"fa fa-align-justify\"></i>\n      </button>\n    </div>\n    <tabset class=\"tabset-fx\">\n      <tab heading=\"Page Info\">\n        <form #pageInfoForm=\"ngForm\">\n          <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n            <label for=\"page-title\" class=\"col-form-label px-0\">Page title</label>\n            <div class=\"flex-fill ml-2\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pageInfo.title\" placeholder=\"Enter page title\"\n                name=\"title\" #title=\"ngModel\" required id=\"page-title\">\n              <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n                <div *ngIf=\"title.errors.required\">Page title is required.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mx-0 mb-2 flex-nowrap\">\n            <label for=\"page-name\" class=\"col-form-label px-0\">Page name</label>\n            <div class=\"flex-fill ml-2\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pageInfo.pageName\" placeholder=\"Enter page name\"\n                name=\"name\" #pageName=\"ngModel\" required id=\"page-name\">\n              <div *ngIf=\"pageName.invalid && (pageName.dirty || pageName.touched)\" class=\"alert alert-danger py-1 px-2 m-0\">\n                <div *ngIf=\"pageName.errors.required\">Page name is required.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row mx-0 mb-1 flex-nowrap\">\n            <label for=\"page-description\" class=\"col-form-label px-0\">Description</label>\n            <div class=\"flex-fill ml-2\">\n              <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"pageInfo.description\"\n                placeholder=\"Enter page description\" id=\"page-description\" name=\"description\"></textarea>\n            </div>\n          </div>\n        </form>\n      </tab>\n      <tab heading=\"UI Model\">\n        <div #uiModelEl class=\"h-100 ace-editor\"></div>\n      </tab>\n      <tab heading=\"Workflow Config\">\n        <div #workflowEl class=\"h-100 ace-editor\"></div>\n      </tab>\n    </tabset>\n  </div>\n  </div>\n<div class=\"modal-footer flex-column\">\n  <div class=\"row w-100 mx-0 px-0\">\n    <button type=\"button\" (click)=\"savePage()\" [disabled]=\"!pageInfoForm.valid\"\n      class=\"btn btn-primary ml-auto mr-2\">Save</button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modalRef.hide()\">Cancel</button>\n  </div>\n</div>\n"

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

module.exports = {"name":"worksheets2-app","version":"0.1.26","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","build:prod":"ng build --prod","build:gh":"ng build --base-href='/ngx-dynamic-components/'","build:electron":"npm run electron:tsc && ng build --prod --base-href ./","deploy:gh":"npm run build:gh && npx ngh --dir=dist/worksheets2-app/ --repo=https://github.com/FalconSoft/ngx-dynamic-components.git","build:extension":"ng build --configuration=extension --prod","electron:tsc":"tsc -p electron/tsconfig.json","electron:start":"npm run build:electron && electron .","electron:run":"npm run electron:tsc && electron .","electron:linux":"npm run build:electron && electron-builder build --config=electron/electron-builder.json --linux","electron:windows":"npm run build:electron && electron-builder build --config=electron/electron-builder.json --windows","electron:mac":"npm run build:electron && electron-builder build --config=electron/electron-builder.json --mac"},"main":"dist/electron/main.js","private":true,"dependencies":{"@angular/animations":"~8.1.2","@angular/cdk":"~8.1.1","@angular/common":"~8.1.2","@angular/compiler":"~8.1.2","@angular/core":"~8.1.2","@angular/flex-layout":"~8.0.0-beta.26","@angular/forms":"~8.1.2","@angular/material":"~8.1.1","@angular/platform-browser":"~8.1.2","@angular/platform-browser-dynamic":"~8.1.2","@angular/router":"~8.1.2","@ng-select/ng-select":"^3.0.7","@ngrx/effects":"^8.3.0","@ngrx/router-store":"^8.3.0","@ngrx/store":"^8.3.0","@ngrx/store-devtools":"^8.3.0","@ngx-dynamic-components/bootstrap":">=0.0.30","@ngx-dynamic-components/core":">=0.0.30","@ngx-dynamic-components/material":">=0.0.30","@types/json5":"0.0.30","@types/papaparse":"^5.0.1","ace-builds":"^1.4.7","angular-split":"^3.0.2","bootstrap-scss":"^4.3.1","core-js":"^3.1.4","file-saver":"^2.0.2","flag-icon-css":"^3.3.0","font-awesome":"^4.7.0","hammerjs":"^2.0.8","json5":"^2.1.1","moment":"^2.24.0","ng2-dragula":"^2.1.1","ngx-bootstrap":"^5.1.0","ngx-device-detector":"^1.3.6","ngx-perfect-scrollbar":"^8.0.0","papaparse":"4.3.7","parse-curl":"^0.2.6","rxjs":"~6.5.2","simple-line-icons":"^2.4.1","stream":"0.0.2","tslib":"^1.9.0","wijmo":"5.20191.615","zone.js":"~0.9.1"},"devDependencies":{"@angular-devkit/build-angular":"~0.801.2","@angular/cli":"~8.1.2","@angular/compiler-cli":"~8.1.2","@angular/language-service":"~8.1.2","@types/node":"~8.9.4","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","codelyzer":"^5.0.1","electron":"^5.0.3","electron-builder":"^20.43.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"~3.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.4.0","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"~3.4.5"}};

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
        loadChildren: function () { return Promise.all(/*! import() | rest-client-rest-client-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("default~database-manager-database-manager-module~rest-client-rest-client-module"), __webpack_require__.e("default~forms-builder-forms-builder-module~rest-client-rest-client-module"), __webpack_require__.e("rest-client-rest-client-module")]).then(__webpack_require__.bind(null, /*! ./rest-client/rest-client.module */ "./src/app/rest-client/rest-client.module.ts")).then(function (m) { return m.RestClientModule; }); },
        data: {
            title: 'Rest client'
        },
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() | forms-builder-forms-builder-module */[__webpack_require__.e("default~custom-app-custom-app-module~database-manager-database-manager-module~forms-builder-forms-bu~b460a332"), __webpack_require__.e("default~forms-builder-forms-builder-module~rest-client-rest-client-module"), __webpack_require__.e("forms-builder-forms-builder-module")]).then(__webpack_require__.bind(null, /*! ./forms-builder/forms-builder.module */ "./src/app/forms-builder/forms-builder.module.ts")).then(function (m) { return m.FormsBuilderModule; }); },
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
Object(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_8__["setLicenseKey"])('ppaska@falconsoft-ltd.com,localhost|falconsoft.github.com|falconsoft.github.io|run.worksheet.systems|worksheets2-app.azurewebsites.net|bjaifffdmbokgicfacjmhdkdonpmbkbd,691134373725158#B0HbgZGQht6chBHciojIh94QiwiI8UTM5IzNzczM4MTMxkjNiojIklkIs4nIxYHOxAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TQnFFR5IWQhxGVCVjQrIkezVTRXJnQ4oEZpRzQK9GW7FHWNNEbjJlRWdlanlkQah6SM5mVDV4NrU4QWRXZqtyTCpWaaFEUEl4c4tGSTBlYvF7MihVUHlENFZ5KiR5U4w6K6dmYQpGejlHWhV5NtlTRGB7Q4lGTzYjTVlHNzRnevlHcLdke0lDOzhkU8M6KiRkV6R7U8ElalJWSQVWcBh5bGtmT7ljNzknThNVUkJGMz3yZpdTavUUMRlFb5RWS9c4bJNDUpZWMitWajl4SrQ5YrcENEZTV5MmS8s6S8BncDlGZjh4aw4GTxY5b5AXcktUY0FnZZtUY5QjRhVEdwUWW6kFMjllNyUlc5V5NvJjQWpkdB9GWxlkSyIXWhpVTvMHOQV7SipmbyZkRSNURoRFWIVHawQzKlxUbOBTbO3kbItmSvZ4bVpUbzsGS5A5LkhTeiZnbYxmI0IyUiwiI7ATO6UzNENjI0ICSiwyMxcDN6gjM5kTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyNygzM6ADI4IjNwkTMwIjI0ICdyNkIsICZitmYtBnbvR6akhWbqNWYmNWant6bi5GZmZmZpFmaixCdl9mLzVGdpNnYldXZyVneh9CcwFWLyMHdlVGaztmcvdHLz5WZ4NXez9CdlVGaztmcvdnLuVncs2WauIWdoRXan9Cdm36cu36YsFmZs46bj9iY5hGdpdmL4Z6bz96bjxWYmxCdz3GasF6YvxmI0IyctRkIsISbvNmLkRHbtQnZvNVbNN');
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
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");

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
            pageName: null
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
        this.workflowEditor = Object(ace_builds__WEBPACK_IMPORTED_MODULE_2__["edit"])(this.workflowEl.nativeElement, {
            mode: 'ace/mode/json',
            autoScrollEditorIntoView: true,
            value: Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(this.config.workflowsMap)
        });
    };
    PageConfigComponent.prototype.savePage = function () {
        try {
            var uiModel = JSON.parse(this.uiModelEditor.getValue());
            var workflowsMap = JSON.parse(this.workflowEditor.getValue());
            this.save.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ uiModel: uiModel,
                workflowsMap: workflowsMap }, this.pageInfo));
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
            var workflowsMap = JSON.parse(this.workflowEditor.getValue());
            if (format) {
                this.uiModelEditor.setValue(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(uiModel), -1);
                this.workflowEditor.setValue(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["formatObjToJsonStr"])(workflowsMap), -1);
            }
            else {
                this.uiModelEditor.setValue(JSON.stringify(uiModel), -1);
                this.workflowEditor.setValue(JSON.stringify(workflowsMap), -1);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('workflowEl', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PageConfigComponent.prototype, "workflowEl", void 0);
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
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
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
/*! exports provided: NotificationService, DialogService, FileManagerService, LocalSettingsService, ActionsService, SqlDbService */
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
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-dynamic-components/core */ "../ngx-dynamic-components/projects/core/src/public_api.ts");
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ "../ngx-dynamic-components/projects/bootstrap/src/public-api.ts");
/* harmony import */ var _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-dynamic-components/material */ "../ngx-dynamic-components/projects/material/src/public_api.ts");
/* harmony import */ var _components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dynamic-modal/dynamic-modal.component */ "./src/app/shared/components/dynamic-modal/dynamic-modal.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/shared/components/notification/notification.component.ts");
/* harmony import */ var _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dynamic-dialog/dynamic-dialog.component */ "./src/app/shared/components/dynamic-dialog/dynamic-dialog.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _directives_forbidden_values_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/forbidden-values.directive */ "./src/app/shared/directives/forbidden-values.directive.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/shared/components/layout/layout.component.ts");
/* harmony import */ var _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/page-config/page-config.component */ "./src/app/shared/components/page-config/page-config.component.ts");
/* harmony import */ var _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/list-view/list-view.component */ "./src/app/shared/components/list-view/list-view.component.ts");
/* harmony import */ var _components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/page-info/page-info.component */ "./src/app/shared/components/page-info/page-info.component.ts");
/* harmony import */ var _components_content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/content-explorer/content-explorer.component */ "./src/app/shared/components/content-explorer/content-explorer.component.ts");
/* harmony import */ var _components_split_content_split_content_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/split-content/split-content.component */ "./src/app/shared/components/split-content/split-content.component.ts");
/* harmony import */ var _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/confirmation/confirmation.component */ "./src/app/shared/components/confirmation/confirmation.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/shared/components/filter/filter.component.ts");
/* harmony import */ var _components_manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/manage-filters/manage-filters.component */ "./src/app/shared/components/manage-filters/manage-filters.component.ts");
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/filters/filters.component */ "./src/app/shared/components/filters/filters.component.ts");
/* harmony import */ var _components_json_preview_json_preview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/json-preview/json-preview.component */ "./src/app/shared/components/json-preview/json-preview.component.ts");







































var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_27__["NotificationService"]]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_20__["DynamicModalComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_21__["PageHeaderComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_22__["NavComponent"], _directives_forbidden_values_directive__WEBPACK_IMPORTED_MODULE_26__["ForbiddenValidatorDirective"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"], _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_28__["LayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"], _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_29__["PageConfigComponent"],
                _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_30__["ListViewComponent"], _components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_31__["PageInfoComponent"], _components_content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_32__["ContentExplorerComponent"], _components_split_content_split_content_component__WEBPACK_IMPORTED_MODULE_33__["SplitContentComponent"],
                _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmationComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_35__["FilterComponent"], _components_manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_36__["ManageFiltersComponent"], _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_37__["FiltersComponent"], _components_json_preview_json_preview_component__WEBPACK_IMPORTED_MODULE_38__["JsonPreviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(),
                angular_split__WEBPACK_IMPORTED_MODULE_14__["AngularSplitModule"].forRoot(),
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_15__["DeviceDetectorModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjGridModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7__["WjGridFilterModule"],
                _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_17__["CoreModule"],
                _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BootstrapModule"],
                _ngx_dynamic_components_material__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"].forRoot()
            ],
            exports: [_components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_20__["DynamicModalComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_21__["PageHeaderComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_22__["NavComponent"],
                wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjGridModule"], wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_7__["WjGridFilterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _directives_forbidden_values_directive__WEBPACK_IMPORTED_MODULE_26__["ForbiddenValidatorDirective"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"], _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_28__["LayoutComponent"], _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_29__["PageConfigComponent"],
                _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_30__["ListViewComponent"], _components_content_explorer_content_explorer_component__WEBPACK_IMPORTED_MODULE_32__["ContentExplorerComponent"], _components_split_content_split_content_component__WEBPACK_IMPORTED_MODULE_33__["SplitContentComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_35__["FilterComponent"],
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_37__["FiltersComponent"], _components_json_preview_json_preview_component__WEBPACK_IMPORTED_MODULE_38__["JsonPreviewComponent"]],
            entryComponents: [_components_dynamic_modal_dynamic_modal_component__WEBPACK_IMPORTED_MODULE_20__["DynamicModalComponent"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"], _components_dynamic_dialog_dynamic_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DynamicDialogComponent"],
                _components_page_config_page_config_component__WEBPACK_IMPORTED_MODULE_29__["PageConfigComponent"], _components_page_info_page_info_component__WEBPACK_IMPORTED_MODULE_31__["PageInfoComponent"], _components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmationComponent"], _components_manage_filters_manage_filters_component__WEBPACK_IMPORTED_MODULE_36__["ManageFiltersComponent"]]
        })
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