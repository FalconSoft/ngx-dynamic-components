"use strict";
(self["webpackChunkngx_dynamic_components"] = self["webpackChunkngx_dynamic_components"] || []).push([["main"],{

/***/ 4733:
/*!********************************************************!*\
  !*** ./projects/bootstrap/src/lib/bootstrap.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentsBootstrapModule": () => (/* binding */ DynamicComponentsBootstrapModule),
/* harmony export */   "tabsModuleForRoot": () => (/* binding */ tabsModuleForRoot)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/utils */ 8132);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ 406);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/select/select.component */ 4299);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 7852);
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register */ 9869);
/* harmony import */ var _components_input_typeahead_input_typeahead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input-typeahead/input-typeahead.component */ 7742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);














const tabsModuleForRoot = ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule.forRoot();
class DynamicComponentsBootstrapModule {
  constructor() {
    (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_6__.setTheme)('bs4');
    (0,_components_register__WEBPACK_IMPORTED_MODULE_3__.registerComponents)();
  }
}
DynamicComponentsBootstrapModule.ɵfac = function DynamicComponentsBootstrapModule_Factory(t) {
  return new (t || DynamicComponentsBootstrapModule)();
};
DynamicComponentsBootstrapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: DynamicComponentsBootstrapModule
});
DynamicComponentsBootstrapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsCoreModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__.TypeaheadModule, tabsModuleForRoot]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DynamicComponentsBootstrapModule, {
    declarations: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_1__.SelectComponent, _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent, _components_input_typeahead_input_typeahead_component__WEBPACK_IMPORTED_MODULE_4__.InputTypeaheadComponent],
    imports: [_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsCoreModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__.TypeaheadModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule]
  });
})();

/***/ }),

/***/ 8626:
/*!********************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _select_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent),
/* harmony export */   "TabsComponent": () => (/* reexport safe */ _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent)
/* harmony export */ });
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select/select.component */ 4299);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tabs.component */ 7852);



/***/ }),

/***/ 7742:
/*!********************************************************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/input-typeahead/input-typeahead.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTypeaheadComponent": () => (/* binding */ InputTypeaheadComponent),
/* harmony export */   "InputTypeaheadProperties": () => (/* binding */ InputTypeaheadProperties),
/* harmony export */   "inputTypeaheadDescriptor": () => (/* binding */ inputTypeaheadDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 9893);
/* harmony import */ var _input_typeahead_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-typeahead.examples */ 7866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ 406);









// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
class InputTypeaheadComponent extends _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.wrapperClass = null;
    this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.loading = false;
    this.suggestions$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  get debounceTime() {
    return this.properties.debounceTime ? parseInt(this.properties.debounceTime, 10) : 500;
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      this.isAsync = !!this.properties.typeahead;
      yield _super.ngOnInit.call(this);
      this.searchText$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.debounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(data => this.emitEvent(this.properties.typeahead, data, 'typeahead'));
      this.eventResults$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event === 'typeahead')).subscribe(() => this.suggestions$.next(this.eventResults.get('typeahead')));
      this.suggestions$.subscribe(val => this.suggestions = val);
      this.initSugesstions();
    });
  }
  initSugesstions() {
    let src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      src = (0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.queryValue)(this.dataModel, src);
    }
    if (Array.isArray(src)) {
      this.suggestions$.next(src);
    }
  }
  onSelect(evt) {
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.change, this.componentDataModel);
  }
  onInput(evt) {
    this.searchText$.next(this.componentDataModel);
  }
}
InputTypeaheadComponent.ɵfac = /*@__PURE__*/function () {
  let ɵInputTypeaheadComponent_BaseFactory;
  return function InputTypeaheadComponent_Factory(t) {
    return (ɵInputTypeaheadComponent_BaseFactory || (ɵInputTypeaheadComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](InputTypeaheadComponent)))(t || InputTypeaheadComponent);
  };
}();
InputTypeaheadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: InputTypeaheadComponent,
  selectors: [["dc-input-typeahead"]],
  hostVars: 1,
  hostBindings: function InputTypeaheadComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("class", ctx.wrapperClass);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 8,
  consts: [[3, "ngModel", "typeahead", "typeaheadAsync", "placeholder", "typeaheadOptionField", "typeaheadMultipleSearch", "ngModelChange", "input", "change"]],
  template: function InputTypeaheadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function InputTypeaheadComponent_Template_input_ngModelChange_0_listener($event) {
        return ctx.componentDataModel = $event;
      })("input", function InputTypeaheadComponent_Template_input_input_0_listener($event) {
        return ctx.onInput($event);
      })("change", function InputTypeaheadComponent_Template_input_change_0_listener($event) {
        return ctx.onSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.properties.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.componentDataModel)("typeahead", ctx.isAsync ? ctx.suggestions$ : ctx.suggestions)("typeaheadAsync", ctx.isAsync)("placeholder", (tmp_4_0 = ctx.properties.placeholder) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "")("typeaheadOptionField", (tmp_5_0 = ctx.properties.typeaheadOptionField) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "label")("typeaheadMultipleSearch", ctx.properties.multiple);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_10__.TypeaheadDirective],
  styles: ["[_nghost-%COMP%]     .input-typeahead.input-typeahead-single .input-typeahead-container {\n      height: inherit;\n      min-height: 30px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Jvb3RzdHJhcC9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtdHlwZWFoZWFkL2lucHV0LXR5cGVhaGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtJQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCAuaW5wdXQtdHlwZWFoZWFkLmlucHV0LXR5cGVhaGVhZC1zaW5nbGUgLmlucHV0LXR5cGVhaGVhZC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
class InputTypeaheadProperties extends _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Select suggestions or binding to dataModel.',
  example: '[{label: "One", value: 1}]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], InputTypeaheadProperties.prototype, "itemsSource", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Option field',
  defaultValue: 'label',
  example: '30px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], InputTypeaheadProperties.prototype, "typeaheadOptionField", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Placeholder',
  example: 'Name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], InputTypeaheadProperties.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Allows to select multiple items.',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], InputTypeaheadProperties.prototype, "multiple", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output change event handler.',
  example: 'onChange()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], InputTypeaheadProperties.prototype, "change", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'debounceTime in miliseconds. Used only with `typeahead` event handler. Default is 500 (miliseconds)',
  example: '500',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.PROPERTY
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], InputTypeaheadProperties.prototype, "debounceTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Typeahead event handler.',
  example: 'onTypeahead()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], InputTypeaheadProperties.prototype, "typeahead", void 0);
const inputTypeaheadDescriptor = {
  name: 'input-typeahead',
  label: 'Input typeahead',
  packageName: _constants__WEBPACK_IMPORTED_MODULE_1__.packageName,
  category: "Basic" /* Categories.Basic */,
  description: 'Input typeahead component',
  itemProperties: InputTypeaheadProperties,
  component: InputTypeaheadComponent,
  example: _input_typeahead_examples__WEBPACK_IMPORTED_MODULE_2__["default"],
  parseUIModel(xmlRes) {
    const itemProperties = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => ({
        label: r._,
        value: r.$ && r.$.hasOwnProperty('value') ? r.$.value : r._
      }));
      xmlRes.childNodes = null;
    }
    itemProperties.multiple = xmlRes.attrs.multiple === 'true';
    return {
      type: 'input-typeahead',
      itemProperties
    };
  },
  defaultModel: `<input-typeahead width="100px" itemsSource="$.list" binding="$.value"></input-typeahead>`,
  propertiesDescriptor: [['selectHeight', {
    name: 'selectHeight',
    label: 'Select Height',
    category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
  }]],
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Option value'
    }]
  }]
};

/***/ }),

/***/ 7866:
/*!*******************************************************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/input-typeahead/input-typeahead.examples.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "example1": () => (/* binding */ example1),
/* harmony export */   "example2": () => (/* binding */ example2),
/* harmony export */   "example3": () => (/* binding */ example3),
/* harmony export */   "example4": () => (/* binding */ example4)
/* harmony export */ });
const example2 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Type text</label>
        <input-typeahead class="form-control" width="300px" itemsSource="$.list" binding="$.selected"></input-typeahead>
      </div>
    </div>
  `,
  dataModel: {
    list: [{
      label: 'Data 1',
      value: 'd1'
    }, {
      label: 'Data 2',
      value: 'd2'
    }]
  },
  title: 'Dropdown options binded to dataModel'
};
const example3 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Type text</label>
        <input-typeahead width="300px" binding="$.selectedOption">
          <option value="o1">Option 1</option>
          <option value="o2">Option 2</option>
        </input-typeahead>
      </div>
    </div>
  `,
  dataModel: {},
  title: 'Static dropdown declaration'
};
const example1 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <input-typeahead onSelect="countryChanged" width="300px" binding="$.country">
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </input-typeahead>
      </div>
      <div class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <input-typeahead width="300px" itemsSource="$.cities" binding="$.city"></input-typeahead>
      </div>
    </div>
  `,
  dataModel: {},
  scripts: `
  # Evaluated with JSPython https://jspython.dev/

  def countryChanged():
    dataModel.city = null
    if dataModel.country == null:
      dataModel.cities = []
    if dataModel.country == "uk":
      dataModel.cities = [{label: "London", value: "lon"}, {label: "Liverpool", value: "liv"}]
    if dataModel.country == "ua":
      dataModel.cities = [{label: "Kyiv", value: "kyiv"}, {label: "Lviv", value: "lvi"}]
  `,
  title: 'Dependency between dropdowns',
  description: 'Handles change event from first dropdown and changes values in second.'
};
const example4 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Type text</label>
        <input-typeahead width="300px"
          typeahead="onTypeahead(searchTerm)"
          debounceTime="1000"
          binding="$.selected"
          change="onChange()">
        </input-typeahead>
      </div>

      <text binding="$.selected"></text>
    </div>
  `,
  dataModel: {},
  scripts: `
  async def onTypeahead():
    if searchTerm != null:
      # can be server-side call
      return [
        {label: searchTerm + ' 1', value: searchTerm + ' 1'},
        {label: searchTerm + ' 2', value: searchTerm + ' 2'}
      ]

  async def onChange():
    print('Selected value: ', dataModel.selected)
  `,
  title: 'drop-down with typeahead and debounceTime'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([example4, example1, example2]);

/***/ }),

/***/ 9869:
/*!***********************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/register.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS_LIST": () => (/* binding */ COMPONENTS_LIST),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "registerComponents": () => (/* binding */ registerComponents)
/* harmony export */ });
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select/select.component */ 4299);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs.component */ 7852);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 9893);
/* harmony import */ var _input_typeahead_input_typeahead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-typeahead/input-typeahead.component */ 7742);





const COMPONENTS_LIST = [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.tabsDescriptor, _select_select_component__WEBPACK_IMPORTED_MODULE_1__.selectDescriptor, _input_typeahead_input_typeahead_component__WEBPACK_IMPORTED_MODULE_4__.inputTypeaheadDescriptor];
// Register components.
function registerComponents() {
  COMPONENTS_LIST.forEach(component => _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.CoreService.registerComponent(component));
}
function getCategories() {
  const categories = COMPONENTS_LIST.reduce((map, desc) => {
    map[desc.category] = map[desc.category] || [];
    map[desc.category].push(desc);
    return map;
  }, {});
  return Object.entries(categories).map(([key, val]) => ({
    name: key,
    components: val,
    packageName: _constants__WEBPACK_IMPORTED_MODULE_3__.packageName
  }));
}

/***/ }),

/***/ 4299:
/*!**************************************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/select/select.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent),
/* harmony export */   "SelectProperties": () => (/* binding */ SelectProperties),
/* harmony export */   "selectDescriptor": () => (/* binding */ selectDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 9893);
/* harmony import */ var _select_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.examples */ 619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ 406);











// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
class SelectComponent extends _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.loading = false;
  }
  onSelect(evt) {
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.change, evt);
  }
  get debounceTime() {
    return this.properties.debounceTime ? parseInt(this.properties.debounceTime, 10) : 500;
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      this.searchText$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.debounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)()).subscribe(data => this.emitEvent(this.properties.typeahead, data, 'typeahead'));
    });
  }
  get selectStyles() {
    if (this.properties.selectHeight) {
      return {
        height: this.properties.selectHeight
      };
    }
    return null;
  }
  get options() {
    var _a;
    const src = (_a = this.eventResults.get('typeahead')) !== null && _a !== void 0 ? _a : this.properties.itemsSource;
    if (Array.isArray(src)) {
      return src;
    }
    if (typeof src === 'string' && src.startsWith('$.')) {
      return (0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.queryValue)(this.dataModel, src);
    }
  }
}
SelectComponent.ɵfac = /*@__PURE__*/function () {
  let ɵSelectComponent_BaseFactory;
  return function SelectComponent_Factory(t) {
    return (ɵSelectComponent_BaseFactory || (ɵSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](SelectComponent)))(t || SelectComponent);
  };
}();
SelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SelectComponent,
  selectors: [["dc-select"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 7,
  consts: [[3, "items", "ngStyle", "ngModel", "bindLabel", "typeahead", "bindValue", "placeholder", "ngModelChange", "add", "blur", "change", "close", "clear", "focus", "search", "open", "remove", "scroll", "scrollToEnd"]],
  template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_0_listener($event) {
        return ctx.componentDataModel = $event;
      })("add", function SelectComponent_Template_ng_select_add_0_listener($event) {
        return ctx.emitEvent(ctx.properties.add, $event);
      })("blur", function SelectComponent_Template_ng_select_blur_0_listener($event) {
        return ctx.emitEvent(ctx.properties.blur, $event);
      })("change", function SelectComponent_Template_ng_select_change_0_listener($event) {
        return ctx.onSelect($event);
      })("close", function SelectComponent_Template_ng_select_close_0_listener($event) {
        return ctx.emitEvent(ctx.properties.close, $event);
      })("clear", function SelectComponent_Template_ng_select_clear_0_listener($event) {
        return ctx.emitEvent(ctx.properties.clear, $event);
      })("focus", function SelectComponent_Template_ng_select_focus_0_listener($event) {
        return ctx.emitEvent(ctx.properties.focus, $event);
      })("search", function SelectComponent_Template_ng_select_search_0_listener($event) {
        return ctx.emitEvent(ctx.properties.search, $event);
      })("open", function SelectComponent_Template_ng_select_open_0_listener($event) {
        return ctx.emitEvent(ctx.properties.open, $event);
      })("remove", function SelectComponent_Template_ng_select_remove_0_listener($event) {
        return ctx.emitEvent(ctx.properties.remove, $event);
      })("scroll", function SelectComponent_Template_ng_select_scroll_0_listener($event) {
        return ctx.emitEvent(ctx.properties.scroll, $event);
      })("scrollToEnd", function SelectComponent_Template_ng_select_scrollToEnd_0_listener($event) {
        return ctx.emitEvent(ctx.properties.scrollToEnd, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.options)("ngStyle", ctx.selectStyles)("ngModel", ctx.componentDataModel)("bindLabel", ctx.properties.bindLabel)("typeahead", ctx.searchText$)("bindValue", ctx.properties.bindValue || "value")("placeholder", ctx.properties.placeholder);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__.TypeaheadDirective],
  styles: ["[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container {\n      height: inherit;\n      min-height: 30px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Jvb3RzdHJhcC9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtJQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
class SelectProperties extends _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Select options or binding to dataModel.',
  example: '[{label: "One", value: 1}]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], SelectProperties.prototype, "itemsSource", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Select height.',
  example: '30px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "selectHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Placeholder',
  example: 'Select name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Label property.',
  example: 'name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "bindLabel", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Value property.',
  example: 'id'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "bindValue", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Allows to select multiple items.',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], SelectProperties.prototype, "multiple", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output add event handler.',
  example: 'onAdd()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "add", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output blur event handler.',
  example: 'onBlur()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "blur", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output change event handler.',
  example: 'onChange()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "change", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'debounceTime in miliseconds. Used only with `typeahead` event handler. Default is 500 (miliseconds)',
  example: '500',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.PROPERTY
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "debounceTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Typeahead event handler.',
  example: 'onTypeahead()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "typeahead", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output close event handler.',
  example: 'onClose()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "close", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output clear event handler.',
  example: 'onClear()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "clear", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output focus event handler.',
  example: 'onFocus()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "focus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output search event handler.',
  example: 'onSearch()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "search", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output open event handler.',
  example: 'onOpen()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "open", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output remove event handler.',
  example: 'onRemove()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "remove", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output scroll event handler.',
  example: 'onScroll()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "scroll", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Output scrollToEnd event handler.',
  example: 'onScrollToEnd()',
  type: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], SelectProperties.prototype, "scrollToEnd", void 0);
const selectDescriptor = {
  name: 'ng-select',
  label: 'UI Select Input',
  packageName: _constants__WEBPACK_IMPORTED_MODULE_1__.packageName,
  category: "Basic" /* Categories.Basic */,
  description: 'NG Select component',
  itemProperties: SelectProperties,
  component: SelectComponent,
  example: _select_examples__WEBPACK_IMPORTED_MODULE_2__["default"],
  parseUIModel(xmlRes) {
    const itemProperties = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => ({
        label: r._,
        value: r.$ && r.$.hasOwnProperty('value') ? r.$.value : r._
      }));
      xmlRes.childNodes = null;
    }
    itemProperties.multiple = xmlRes.attrs.multiple === 'true';
    return {
      type: 'ng-select',
      itemProperties
    };
  },
  defaultModel: `<ng-select width="100px" itemsSource="$.list" binding="$.value"></ng-select>`,
  propertiesDescriptor: [['selectHeight', {
    name: 'selectHeight',
    label: 'Select Height',
    category: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
  }]],
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Option value'
    }]
  }]
};

/***/ }),

/***/ 619:
/*!*************************************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/select/select.examples.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "example1": () => (/* binding */ example1),
/* harmony export */   "example2": () => (/* binding */ example2),
/* harmony export */   "example3": () => (/* binding */ example3),
/* harmony export */   "example4": () => (/* binding */ example4)
/* harmony export */ });
const example1 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Select Option</label>
        <ng-select width="300px" binding="$.selectedOption">
          <option value="o1">Option 1</option>
          <option value="o2">Option 2</option>
        </ng-select>
      </div>
    </div>
  `,
  dataModel: {},
  title: 'Static dropdown declaration'
};
const example2 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Select</label>
        <ng-select width="300px" itemsSource="$.list" binding="$.selected"></ng-select>
      </div>
    </div>
  `,
  dataModel: {
    list: [{
      label: 'Data 1',
      value: 'd1'
    }, {
      label: 'Data 2',
      value: 'd2'
    }]
  },
  title: 'Dropdown options binded to dataModel'
};
const example3 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <ng-select onSelect="countryChanged" width="300px" binding="$.country">
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </ng-select>
      </div>
      <div class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <ng-select width="300px" itemsSource="$.cities" binding="$.city"></ng-select>
      </div>
    </div>
  `,
  dataModel: {},
  scripts: `
  # Evaluated with JSPython https://jspython.dev/

  def countryChanged():
    dataModel.city = null
    if dataModel.country == null:
      dataModel.cities = []
    if dataModel.country == "uk":
      dataModel.cities = [{label: "London", value: "lon"}, {label: "Liverpool", value: "liv"}]
    if dataModel.country == "ua":
      dataModel.cities = [{label: "Kyiv", value: "kyiv"}, {label: "Lviv", value: "lvi"}]
  `,
  title: 'Dependency between dropdowns',
  description: 'Handles change event from first dropdown and changes values in second.'
};
const example4 = {
  uiModel: `
    <div class="flex-column">
      <div class="form-group">
        <label class="col-form-label" width="60px">Select</label>
        <ng-select width="300px"
          typeahead="onTypeahead(searchTerm)"
          debounceTime="1000"
          binding="$.selected"
          change="onChange()">
        </ng-select>
      </div>

      <text binding="$.selected"></text>
    </div>
  `,
  dataModel: {},
  scripts: `
  async def onTypeahead():
    if searchTerm != null:
      # can be server-side call
      return [
        {label: searchTerm + ' 1', value: searchTerm + ' 1'},
        {label: searchTerm + ' 2', value: searchTerm + ' 2'}
      ]

  async def onChange():
    print('Selected value: ', dataModel.selected)
  `,
  title: 'drop-down with typeahead and debounceTime'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([example1, example2, example4]);

/***/ }),

/***/ 7852:
/*!**********************************************************************!*\
  !*** ./projects/bootstrap/src/lib/components/tabs/tabs.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent),
/* harmony export */   "TabsProperties": () => (/* binding */ TabsProperties),
/* harmony export */   "example": () => (/* binding */ example),
/* harmony export */   "tabsDescriptor": () => (/* binding */ tabsDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 9893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 82);







const _c0 = ["vc"];
function TabsComponent_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("heading", item_r1.itemProperties.header || "Tab " + (i_r2 + 1));
  }
}
class TabsComponent extends _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  ngOnInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {});
  }
  ngAfterViewInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      this.vContainers.forEach((vc, i) => (0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(this, this.uiModel.children[i], vc));
      this.setHostStyles();
      this.emitEvent(this.properties.onInit);
    });
  }
}
TabsComponent.ɵfac = /*@__PURE__*/function () {
  let ɵTabsComponent_BaseFactory;
  return function TabsComponent_Factory(t) {
    return (ɵTabsComponent_BaseFactory || (ɵTabsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TabsComponent)))(t || TabsComponent);
  };
}();
TabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TabsComponent,
  selectors: [["dc-tabs-ui"]],
  viewQuery: function TabsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.vContainers = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "tabset-fx", "w-100", "h-100", "nav-tabs-boxed"], [3, "heading", 4, "ngFor", "ngForOf"], [3, "heading"], ["vc", ""]],
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tabset", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TabsComponent_tab_1_Template, 3, 1, "tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.uiModel.children);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsetComponent],
  encapsulation: 2
});
class TabsProperties extends _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.StyleProperties {}
const example = {
  title: 'Tabs group example',
  uiModel: `
  <tab-container width="100%" height="100%" margin="8px">
		<tab header="Test tab" padding="0.5rem">
			<text text-style="h1">Tab 1 static text content</text>
		</tab>
    <tab header="Btn tab" class="align-items-start p-2 flex-column">
      <text text-style="h1">Button content</text>
      <button class="btn btn-primary mr-2" onClick="button1_Click">Click</button>
      <div>
        <h4>ClickCount:</h4>
        <text text-style="h4">$.clickCount</text>
      </div>
		</tab>
	</tab-container>
  `,
  scripts: `
  def button1_Click():
    print("button1_Click")
    if dataModel.clickCount == null:
      dataModel.clickCount = 0
    dataModel.clickCount = dataModel.clickCount + 1
  `,
  dataModel: {
    clickCount: 2
  }
};
const tabsDescriptor = {
  name: 'tab-container',
  label: 'Tabs container (Bootstrap)',
  packageName: _constants__WEBPACK_IMPORTED_MODULE_1__.packageName,
  category: "Containers" /* Categories.Containers */,
  description: 'Tabs component',
  itemProperties: TabsProperties,
  component: TabsComponent,
  example,
  parseUIModel(xmlData) {
    var _a;
    const children = (_a = xmlData.childNodes) === null || _a === void 0 ? void 0 : _a.map(child => {
      var _a;
      if (((_a = child.$$) === null || _a === void 0 ? void 0 : _a.length) === 1) {
        return _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.CoreService.getUIModel((0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.toXMLResult)(child.$$[0]));
      }
      const itemProperties = child.$;
      itemProperties.height = '100%';
      itemProperties.width = '100%';
      return {
        type: 'div',
        children: child.$$.map(r => _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.CoreService.getUIModel((0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.toXMLResult)(r))),
        itemProperties
      };
    });
    return {
      type: 'tab-container',
      children
    };
  },
  children: [{
    tag: 'tab',
    hasChildren: true,
    properties: [{
      name: 'header',
      label: 'Tab title'
    }]
  }],
  defaultModel: `<tab-container width="100%" height="100%" margin="8px">
  <tab header="Tab 1" padding="0.5rem">
    <text text-style="h1">Tab 1 static text content</text>
  </tab>
  <tab header="Tab 2" padding="0.5rem">
    <text text-style="h1">Tab 2 static text content</text>
  </tab>
</tab-container>`
};

/***/ }),

/***/ 9893:
/*!*************************************************!*\
  !*** ./projects/bootstrap/src/lib/constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packageName": () => (/* binding */ packageName)
/* harmony export */ });
const packageName = 'bootstrap';

/***/ }),

/***/ 8502:
/*!**********************************************!*\
  !*** ./projects/bootstrap/src/public_api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS_LIST": () => (/* reexport safe */ _lib_components_register__WEBPACK_IMPORTED_MODULE_2__.COMPONENTS_LIST),
/* harmony export */   "DynamicComponentsBootstrapModule": () => (/* reexport safe */ _lib_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsBootstrapModule),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.SelectComponent),
/* harmony export */   "TabsComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.TabsComponent),
/* harmony export */   "getCategories": () => (/* reexport safe */ _lib_components_register__WEBPACK_IMPORTED_MODULE_2__.getCategories),
/* harmony export */   "tabsModuleForRoot": () => (/* reexport safe */ _lib_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__.tabsModuleForRoot)
/* harmony export */ });
/* harmony import */ var _lib_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bootstrap.module */ 4733);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components */ 8626);
/* harmony import */ var _lib_components_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/register */ 9869);
/*
 * Public API Surface of bootstrap
 */




/***/ }),

/***/ 2583:
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/components/base-dynamic-component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDynamicComponent": () => (/* binding */ BaseDynamicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 9034);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties */ 6319);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/renderer.service */ 3477);








class BaseDynamicComponent {
  constructor(rendererService, injector) {
    this.rendererService = rendererService;
    this.injector = injector;
    this.uiModel = {
      type: undefined,
      itemProperties: {}
    };
    this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.eventResults = new Map();
    this.eventResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      this.setHostStyles();
      this.emitEvent((_a = this.properties) === null || _a === void 0 ? void 0 : _a.onInit);
    });
  }
  setEventHandlerResult(event, result) {
    if (event) {
      this.eventResults.set(event, result);
      this.eventResults$.next(event);
    }
  }
  get componentType() {
    return this.uiModel.type;
  }
  get properties() {
    return this.uiModel.itemProperties;
  }
  get attrs() {
    return this.uiModel.itemProperties;
  }
  show() {
    if (this.element) {
      this.element.classList.remove('hidden');
    }
  }
  hide() {
    if (this.element) {
      this.element.classList.add('hidden');
    }
  }
  emitEvent(funcSign, parameters = null, eventName) {
    var _a;
    if (funcSign) {
      const fParsed = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.parseArgFunction)(funcSign);
      const eventHandler = fParsed[0];
      let parameter = fParsed[1];
      if ((parameter === null || parameter === void 0 ? void 0 : parameter.startsWith('$')) && parameters === null) {
        parameters = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.queryValue)(this.dataModel, parameter);
        parameter = parameter.replace('\$.', '').replace(/\.\w/g, matched => matched.replace('.', '').toUpperCase());
      }
      const eventParameters = {
        uiModel: this.uiModel,
        argsKey: parameter,
        argsValue: (_a = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getStringEventArgs)(funcSign)) !== null && _a !== void 0 ? _a : parameters
      };
      if (parameter) {
        eventParameters[parameter] = eventParameters.argsValue;
      }
      this.eventHandlers.emit({
        eventHandler,
        eventName,
        parameters: eventParameters,
        sender: this
      });
    }
  }
  setHostStyles() {
    var _a;
    if (this.element && this.properties) {
      const props = this.properties;
      if (props.class) {
        this.element.className += ' ' + props.class;
      }
      (_a = props.style) === null || _a === void 0 ? void 0 : _a.split(';').forEach(s => {
        if (this.element) {
          const [key, val] = s.split(':').map(v => v.trim());
          this.element.style[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.kebabToCamelCase)(key)] = val;
        }
      });
      _properties__WEBPACK_IMPORTED_MODULE_1__.StylePropertiesList.forEach(b => {
        if (props && props.hasOwnProperty(b) && this.element) {
          const val = props[b];
          this.element.style[b] = val;
        }
      });
    }
  }
}
BaseDynamicComponent.ɵfac = function BaseDynamicComponent_Factory(t) {
  return new (t || BaseDynamicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_renderer_service__WEBPACK_IMPORTED_MODULE_2__.RendererService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
BaseDynamicComponent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: BaseDynamicComponent,
  outputs: {
    render: "render"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 5526:
/*!***************************************************************!*\
  !*** ./projects/core/src/lib/components/base-html-element.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseHTMLElement": () => (/* binding */ BaseHTMLElement),
/* harmony export */   "HTMLProperties": () => (/* binding */ HTMLProperties),
/* harmony export */   "parseHTMLUIModel": () => (/* binding */ parseHTMLUIModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properties */ 6319);
/* harmony import */ var _base_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-dynamic-component */ 2583);





class BaseHTMLElement extends _base_dynamic_component__WEBPACK_IMPORTED_MODULE_1__.BaseDynamicComponent {
  constructor() {
    super(...arguments);
    this.eventHandlers = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnDestroy() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      this.emitEvent(this.properties.onDestroy);
      if (this.element) {
        this.element.parentNode.removeChild(this.element);
      }
    });
  }
  ngOnChanges({
    dataModel,
    uiModel
  }) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      if (dataModel && !dataModel.firstChange && this.dataModel !== dataModel.currentValue) {
        this.dataModel = dataModel.currentValue;
      }
      if (uiModel && !uiModel.firstChange) {
        this.uiModel = uiModel.currentValue;
        this.setProperties();
      }
    });
  }
  create(selectorElement) {
    var _a;
    const created = Boolean(this.element);
    this.element = this.element || document.createElement(this.uiModel.type);
    this.element.innerHTML = '';
    this.parentNode = this.parentNode || selectorElement.parentNode;
    this.setProperties();
    if (!created && this.parentNode) {
      this.parentNode.insertBefore(this.element, selectorElement);
    }
    (_a = this.uiModel.children) === null || _a === void 0 ? void 0 : _a.forEach(uiModel => this.rendererService.createComponent(this, uiModel));
  }
  setProperties() {
    const htmlProps = this.properties;
    if (htmlProps.content) {
      this.element.textContent = htmlProps.content;
    }
    if (htmlProps.title) {
      this.element.title = htmlProps.title;
    }
    this.setHostStyles();
  }
  get properties() {
    return this.uiModel.itemProperties;
  }
  get attrs() {
    return this.uiModel.itemProperties;
  }
}
BaseHTMLElement.ɵfac = /*@__PURE__*/function () {
  let ɵBaseHTMLElement_BaseFactory;
  return function BaseHTMLElement_Factory(t) {
    return (ɵBaseHTMLElement_BaseFactory || (ɵBaseHTMLElement_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](BaseHTMLElement)))(t || BaseHTMLElement);
  };
}();
BaseHTMLElement.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: BaseHTMLElement,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});
class HTMLProperties extends _properties__WEBPACK_IMPORTED_MODULE_0__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'HTML element text content',
  example: 'Text'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], HTMLProperties.prototype, "content", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'HTML element html content',
  example: '<span>Text</span>'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], HTMLProperties.prototype, "htmlContent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'HTML element title',
  example: 'Description text'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], HTMLProperties.prototype, "title", void 0);
function parseHTMLUIModel(xmlRes) {
  const content = xmlRes.content;
  return {
    type: xmlRes.type,
    itemProperties: {
      content
    }
  };
}

/***/ }),

/***/ 8501:
/*!***************************************************************!*\
  !*** ./projects/core/src/lib/components/base-ui-component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseUIComponent": () => (/* binding */ BaseUIComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3456);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 9034);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../properties */ 6319);
/* harmony import */ var _base_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-dynamic-component */ 2583);







const _c0 = ["vc"];
// eslint-disable-next-line
class BaseUIComponent extends _base_dynamic_component__WEBPACK_IMPORTED_MODULE_3__.BaseDynamicComponent {
  constructor() {
    super(...arguments);
    this.uiModel = {
      type: undefined,
      itemProperties: {}
    };
    this.eventHandlers = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.hostBindings = ['width', 'height', 'padding', 'margin', 'background', 'display', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'visible'];
    this.borders = ['border-left', 'border-top', 'border-right', 'border-bottom'];
  }
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      this.children = this.rendererService.renderChildren(this);
      yield _super.ngOnInit.call(this);
    });
  }
  ngOnDestroy() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      this.emitEvent(this.properties.onDestroy);
    });
  }
  ngOnChanges({
    dataModel,
    uiModel
  }) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      if (dataModel && !dataModel.firstChange && this.dataModel !== dataModel.currentValue) {
        this.dataModel = dataModel.currentValue;
      }
      if (uiModel && !uiModel.firstChange) {
        this.uiModel = uiModel.currentValue;
        this.setHostStyles();
      }
    });
  }
  create(locationElement) {
    this.element = locationElement;
  }
  get componentDataModel() {
    if (this.properties.hasOwnProperty('dataSource')) {
      const value = this.properties.dataSource;
      if (typeof value === 'object') {
        return value;
      } else if (typeof value === 'string' && this.dataModel.hasOwnProperty(value)) {
        return this.dataModel[value];
      }
    }
    if (this.properties.hasOwnProperty('binding')) {
      const path = this.properties.binding;
      // TODO: Handle case for Array type.
      if (!Array.isArray(this.dataModel)) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.queryValue)(this.dataModel, path);
      }
    }
    if (this.properties.hasOwnProperty('value')) {
      return this.properties.value;
    }
  }
  set componentDataModel(val) {
    if (this.properties.hasOwnProperty('binding')) {
      const path = this.properties.binding;
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setValue)(this.dataModel, path, val);
    }
  }
  get itemStyles() {
    return this.getStyles(this.properties);
  }
  getStyles(properties = {}, stylesList = _properties__WEBPACK_IMPORTED_MODULE_2__.StylePropertiesList) {
    return stylesList.reduce((styles, prop) => {
      if (properties.hasOwnProperty(prop)) {
        styles[prop] = this.getPropValue(properties, prop);
      }
      return styles;
    }, {});
  }
  setHostStyles() {
    super.setHostStyles();
    if (this.properties) {
      this.setBorder(this.properties);
    }
  }
  getPropValue(properties, prop) {
    const val = properties[prop];
    if (prop === 'font-size') {
      if (!isNaN(properties[prop])) {
        return `${val}px`;
      }
    }
    return val;
  }
  setBorder(properties) {
    const border = properties.border;
    if (typeof border === 'string') {
      const [prop, value] = border.split('|');
      if (prop === 'border') {
        this.borders.forEach(b => {
          this[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.kebabStrToCamel)(b)] = value;
        });
      } else {
        this[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.kebabStrToCamel)(prop)] = value;
      }
    }
    this.hostBindings.forEach(prop => {
      if (properties.hasOwnProperty(prop) && properties[prop]) {
        this[prop] = properties[prop];
      }
    });
  }
}
BaseUIComponent.ɵfac = /*@__PURE__*/function () {
  let ɵBaseUIComponent_BaseFactory;
  return function BaseUIComponent_Factory(t) {
    return (ɵBaseUIComponent_BaseFactory || (ɵBaseUIComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](BaseUIComponent)))(t || BaseUIComponent);
  };
}();
BaseUIComponent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: BaseUIComponent,
  viewQuery: function BaseUIComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    }
  },
  hostVars: 30,
  hostBindings: function BaseUIComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.classAttr);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.width)("min-width", ctx.minWidth)("max-width", ctx.maxWidth)("height", ctx.height)("min-height", ctx.minHeight)("max-height", ctx.maxHeight)("padding", ctx.padding)("margin", ctx.margin)("display", ctx.display)("border-left", ctx.borderLeft)("border-top", ctx.borderTop)("border-right", ctx.borderRight)("border-bottom", ctx.borderBottom)("background", ctx.background);
    }
  },
  inputs: {
    dataModel: "dataModel",
    uiModel: "uiModel"
  },
  outputs: {
    eventHandlers: "eventHandlers",
    changedDataModel: "changedDataModel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 2897:
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/components/form-element-component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementComponent": () => (/* binding */ FormElementComponent),
/* harmony export */   "FormElementProperties": () => (/* binding */ FormElementProperties)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properties */ 6319);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base-ui-component */ 8501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class FormElementComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_1__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.value = null;
  }
  onBlur(input) {
    this.validate(input);
  }
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      const properties = this.properties;
      this.attrName = properties.name || this.name;
      this.id = properties.id || undefined;
      this.readonly = properties.readonly || undefined;
      this.placeholder = properties.placeholder || '';
      this.disabled = properties.disabled || undefined;
      this.autocomplete = properties.autocomplete || undefined;
      this.required = properties.required || undefined;
      this.pattern = properties.pattern || undefined;
      this.max = properties.max || undefined;
      this.min = properties.min || undefined;
      this.maxlength = properties.maxlength || undefined;
      this.minlength = properties.minlength || undefined;
    });
  }
  ngOnDestroy() {
    const _super = Object.create(null, {
      ngOnDestroy: {
        get: () => super.ngOnDestroy
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (this.error) {
        this.error.parentNode.removeChild(this.error);
        this.error = null;
      }
      return _super.ngOnDestroy.call(this);
    });
  }
  ngOnChanges(changes) {
    const _super = Object.create(null, {
      ngOnChanges: {
        get: () => super.ngOnChanges
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnChanges.call(this, changes);
    });
  }
  get name() {
    var _a;
    return (_a = this.properties.binding) === null || _a === void 0 ? void 0 : _a.replace(/[^A-Z]+/gi, '');
  }
  validate(input) {
    if (!input.validity.valid) {
      this.error = this.error || document.createElement('DIV');
      this.error.className = 'alert alert-danger py-0 px-1 m-0';
      this.error.textContent = input.validationMessage;
      input.parentNode.insertBefore(this.error, input.nextSibling);
    } else if (this.error) {
      input.parentNode.removeChild(this.error);
      this.error = null;
    }
  }
}
FormElementComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormElementComponent_BaseFactory;
  return function FormElementComponent_Factory(t) {
    return (ɵFormElementComponent_BaseFactory || (ɵFormElementComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FormElementComponent)))(t || FormElementComponent);
  };
}();
FormElementComponent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FormElementComponent,
  hostVars: 13,
  hostBindings: function FormElementComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function FormElementComponent_blur_HostBindingHandler($event) {
        return ctx.onBlur($event.target);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("value", ctx.value)("name", ctx.attrName)("readonly", ctx.readonly)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("id", ctx.id)("autocomplete", ctx.autocomplete)("required", ctx.required)("pattern", ctx.pattern)("maxlength", ctx.maxlength)("minlength", ctx.minlength)("max", ctx.max)("min", ctx.min);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});
class FormElementProperties extends _properties__WEBPACK_IMPORTED_MODULE_0__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Text shown when field is empty',
  example: 'Type your name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormElementProperties.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'It specifies that the input value.',
  example: 'option1'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormElementProperties.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Form element name.',
  example: 'username'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormElementProperties.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'It specifies that the input should be disabled.',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)], FormElementProperties.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'It specifies that the input should be read only.',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)], FormElementProperties.prototype, "readonly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Is visible',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)], FormElementProperties.prototype, "visible", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Is field required',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)], FormElementProperties.prototype, "required", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Min field value length',
  example: '5'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], FormElementProperties.prototype, "minlength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Max field value length',
  example: '10'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], FormElementProperties.prototype, "maxlength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Min input number value',
  example: '5'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], FormElementProperties.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Max input number value',
  example: '10'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], FormElementProperties.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'RegExp pattern',
  example: '[a-zA-Z ]*'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormElementProperties.prototype, "pattern", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Key for action that fires on input',
  example: 'onInput()'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormElementProperties.prototype, "onInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Specifies permission to provide automated form field values.',
  example: 'name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormElementProperties.prototype, "autocomplete", void 0);

/***/ }),

/***/ 9154:
/*!*******************************************************************!*\
  !*** ./projects/core/src/lib/components/ngx-dynamic-component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NGXDynamicComponent": () => (/* binding */ NGXDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8184);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/core.service */ 551);
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/renderer.service */ 3477);






const _c0 = ["vc"];
class NGXDynamicComponent {
  constructor(rendererService, injector) {
    this.rendererService = rendererService;
    this.injector = injector;
    this.root = true;
    this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.eventHandlers = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.initParsedModel(this.xmlUIModel);
  }
  ngOnChanges({
    xmlUIModel,
    dataModel
  }) {
    if (xmlUIModel && !xmlUIModel.firstChange && xmlUIModel.currentValue !== xmlUIModel.previousValue) {
      this.initParsedModel(this.xmlUIModel);
    }
  }
  initParsedModel(uiModel) {
    try {
      this.uiModel = _services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService.parseXMLModel(uiModel);
      if (this.uiModel) {
        this.rendererService.createComponent(this, this.uiModel);
        rxjs__WEBPACK_IMPORTED_MODULE_3__.animationFrameScheduler.schedule(() => this.render.emit(this.uiModel));
      }
    } catch (e) {
      this.uiModel = null;
      this.eventHandlers.emit({
        eventHandler: 'parseError',
        eventName: 'error',
        parameters: {
          uiModel: this.uiModel,
          error: e
        }
      });
    }
  }
}
NGXDynamicComponent.ɵfac = function NGXDynamicComponent_Factory(t) {
  return new (t || NGXDynamicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_renderer_service__WEBPACK_IMPORTED_MODULE_1__.RendererService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
};
NGXDynamicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NGXDynamicComponent,
  selectors: [["ngx-dynamic-component"]],
  viewQuery: function NGXDynamicComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    dataModel: "dataModel",
    xmlUIModel: "xmlUIModel"
  },
  outputs: {
    render: "render",
    changedDataModel: "changedDataModel",
    eventHandlers: "eventHandlers"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_renderer_service__WEBPACK_IMPORTED_MODULE_1__.RendererService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["vc", ""]],
  template: function NGXDynamicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, null, 0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 1332:
/*!**********************************************!*\
  !*** ./projects/core/src/lib/core.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentsCoreModule": () => (/* binding */ DynamicComponentsCoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 7422);
/* harmony import */ var _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ngx-dynamic-component */ 9154);
/* harmony import */ var _ui_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-components/container/container.component */ 7055);
/* harmony import */ var _ui_components_text_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-components/text/text.component */ 4556);
/* harmony import */ var _ui_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-components/button/button.component */ 2042);
/* harmony import */ var _ui_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-components/input/input.component */ 3460);
/* harmony import */ var _ui_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-components/icon/icon.component */ 6735);
/* harmony import */ var _ui_components_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-components/radio-group/radio-group.component */ 7234);
/* harmony import */ var _ui_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-components/textarea/textarea.component */ 6201);
/* harmony import */ var _ui_components_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-components/register */ 9578);
/* harmony import */ var _ui_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui-components/link/link.component */ 6204);
/* harmony import */ var _ui_components_label_label_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui-components/label/label.component */ 805);
/* harmony import */ var _ui_components_form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui-components/form/form.component */ 3833);
/* harmony import */ var _ui_components_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-components/select/select.component */ 5748);
/* harmony import */ var _ui_components_repeater_repeater_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui-components/repeater/repeater.component */ 3110);
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/renderer.service */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);





















class DynamicComponentsCoreModule {
  constructor() {
    (0,_ui_components_register__WEBPACK_IMPORTED_MODULE_8__.registerComponents)();
  }
}
DynamicComponentsCoreModule.ɵfac = function DynamicComponentsCoreModule_Factory(t) {
  return new (t || DynamicComponentsCoreModule)();
};
DynamicComponentsCoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: DynamicComponentsCoreModule
});
DynamicComponentsCoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_renderer_service__WEBPACK_IMPORTED_MODULE_14__.RendererService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__.AccordionModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DynamicComponentsCoreModule, {
    declarations: [_ui_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _ui_components_form_form_component__WEBPACK_IMPORTED_MODULE_11__.FormComponent, _ui_components_repeater_repeater_component__WEBPACK_IMPORTED_MODULE_13__.RepeaterComponent, _ui_components_text_text_component__WEBPACK_IMPORTED_MODULE_2__.TextComponent, _ui_components_label_label_component__WEBPACK_IMPORTED_MODULE_10__.LabelComponent, _ui_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _ui_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _ui_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _ui_components_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_6__.RadioGroupComponent, _ui_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__.TextareaComponent, _ui_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__.LinkComponent, _ui_components_select_select_component__WEBPACK_IMPORTED_MODULE_12__.SelectComponent, _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_0__.NGXDynamicComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_20__.AccordionModule],
    exports: [_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_0__.NGXDynamicComponent]
  });
})();

/***/ }),

/***/ 8196:
/*!*******************************************************************************************************************!*\
  !*** ./projects/core/src/lib/designer/components/designer/component-properties/component-properties.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentPropertiesComponent": () => (/* binding */ ComponentPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/core.service */ 551);
/* harmony import */ var _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/base-dynamic-component */ 2583);
/* harmony import */ var _ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ngx-dynamic-designer-component */ 9177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function ComponentPropertiesComponent_form_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComponentPropertiesComponent_form_0_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectParent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Select parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ComponentPropertiesComponent_form_0_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12)(1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prop_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prop_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", prop_r5.name);
  }
}
function ComponentPropertiesComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1)(1, "div", 2)(2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Edit selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ComponentPropertiesComponent_form_0_button_7_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ComponentPropertiesComponent_form_0_li_9_Template, 4, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComponentPropertiesComponent_form_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.saveComponent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComponentPropertiesComponent_form_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.cancel.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComponentPropertiesComponent_form_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.deleteComponent(ctx_r9.component));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.component.uiModel.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hasParent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.properties);
  }
}
class ComponentPropertiesComponent {
  constructor() {
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.selectComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.properties = [];
  }
  get hasParent() {
    var _a;
    return !((_a = this.component) === null || _a === void 0 ? void 0 : _a.parent) || !(this.component.parent instanceof _ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_2__.NGXDynamicDesignerComponent);
  }
  ngOnChanges({
    component
  }) {
    if (component && component.currentValue) {
      const properties = _services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService.getComponentDescriptor(this.component.componentType).itemProperties.prototype.properties;
      this.properties = properties;
      const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
      this.properties.forEach(p => form.addControl(p.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.component.properties[p.name])));
      this.form = form;
    }
  }
  deleteComponent(component) {
    this.delete.emit(component);
  }
  saveComponent() {
    this.save.emit({
      component: this.component,
      properties: this.form.value
    });
  }
  selectParent() {
    this.selectComponent.emit(this.component.parent);
  }
}
ComponentPropertiesComponent.ɵfac = function ComponentPropertiesComponent_Factory(t) {
  return new (t || ComponentPropertiesComponent)();
};
ComponentPropertiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ComponentPropertiesComponent,
  selectors: [["dc-component-properties"]],
  inputs: {
    component: "component"
  },
  outputs: {
    delete: "delete",
    save: "save",
    cancel: "cancel",
    selectComponent: "selectComponent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "selected-component-info border p-2", 3, "formGroup", 4, "ngIf"], [1, "selected-component-info", "border", "p-2", 3, "formGroup"], [1, "d-flex", "mb-2", "align-items-center"], [1, "mb-0"], ["class", "btn btn-sm btn-primary ms-auto", "type", "button", 3, "click", 4, "ngIf"], [1, "props-list", "list-unstyled"], ["class", "row property mb-1 me-0", 4, "ngFor", "ngForOf"], [1, "actions", "d-flex"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary-outline", "ms-1", "me-auto", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "ms-auto", 3, "click"], [1, "row", "property", "mb-1", "me-0"], [1, "col"], [1, "col", "form-control", "form-control-sm", 3, "formControlName"]],
  template: function ComponentPropertiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ComponentPropertiesComponent_form_0_Template, 17, 4, "form", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  encapsulation: 2
});

/***/ }),

/***/ 284:
/*!**********************************************************************************!*\
  !*** ./projects/core/src/lib/designer/components/designer/designer.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerComponent": () => (/* binding */ DesignerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/core.service */ 551);
/* harmony import */ var _ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngx-dynamic-designer-component */ 9177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 7422);
/* harmony import */ var _component_properties_component_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-properties/component-properties.component */ 8196);









function DesignerComponent_accordion_group_5_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const component_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDragData", ctx_r5.getUIModel(component_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", component_r6.name, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "fa-chevron-down": a0,
    "fa-chevron-right": a1
  };
};
function DesignerComponent_accordion_group_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "accordion-group", 9, 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DesignerComponent_accordion_group_5_li_7_Template, 2, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const first_r3 = ctx.first;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOpen", first_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, _r4.isOpen, !_r4.isOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](g_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", g_r2.components);
  }
}
function DesignerComponent_dc_component_properties_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dc-component-properties", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("delete", function DesignerComponent_dc_component_properties_9_Template_dc_component_properties_delete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.deleteComponent($event));
    })("save", function DesignerComponent_dc_component_properties_9_Template_dc_component_properties_save_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.saveComponent($event));
    })("cancel", function DesignerComponent_dc_component_properties_9_Template_dc_component_properties_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.cancelSelection());
    })("selectComponent", function DesignerComponent_dc_component_properties_9_Template_dc_component_properties_selectComponent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.selectComponent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const component_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("component", component_r7);
  }
}
const _c1 = function () {
  return {};
};
class DesignerComponent {
  constructor() {
    this.template = `
    <div>
      <div>
        <h1>Child11</h1>
        <text text-style="h1">Hello world1</text>
        <h1>Child12</h1>
        <button class="btn btn-primary">Click</button>
      </div>
      <h1>Parent</h1>
      <div>
        <h1>Child21</h1>
        <h1>Child22</h1>
        <text text-style="h1">Hello world2</text>
        <div>
          <h1>Child221</h1>
          <h1>Child222</h1>
          <text text-style="h1">Hello world22</text>
        </div>
      </div>
      <div>
        <h1>Child31</h1>
        <h1>Child32</h1>
        <text text-style="h1">Hello world3</text>
      </div>
    </div>`;
    this.components = [];
    this.groups = [];
  }
  get designerRendererService() {
    var _a;
    return (_a = this.dc) === null || _a === void 0 ? void 0 : _a.rendererService;
  }
  ngOnInit() {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      this.components = _services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService.getListOfComponents();
      this.groups = this.getCategories();
      this.connected$ = (_a = this.dc) === null || _a === void 0 ? void 0 : _a.dropList$;
      this.selectedContainer$ = this.designerRendererService.selectedContainer$;
      this.selectedComponent$ = this.designerRendererService.selectedComponent$;
    });
  }
  getUIModel(component) {
    var _a;
    const xmlModel = (_a = component.defaultModel) !== null && _a !== void 0 ? _a : this.getUIModelFromExample(component.example);
    if (!xmlModel) {
      return null;
    }
    if (typeof xmlModel === 'string') {
      return _services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService.parseXMLModel(xmlModel);
    }
    return xmlModel;
  }
  getUIModelFromExample(example) {
    if (Array.isArray(example)) {
      return example[0].uiModel;
    }
    return example.uiModel;
  }
  getCategories() {
    const map = new Map();
    this.components.forEach(c => {
      if (!map.has(c.category)) {
        map.set(c.category, {
          name: c.category,
          components: []
        });
      }
      const category = map.get(c.category);
      category.components.push(c);
    });
    return Array.from(map.values());
  }
  deleteComponent(component) {
    this.designerRendererService.deleteComponent(component);
  }
  saveComponent({
    component,
    properties
  }) {
    this.designerRendererService.updateComponent(component, properties);
  }
  cancelSelection() {
    this.designerRendererService.deselectComponent();
  }
  selectComponent(component) {
    this.designerRendererService.selectComponent(component);
  }
}
DesignerComponent.ɵfac = function DesignerComponent_Factory(t) {
  return new (t || DesignerComponent)();
};
DesignerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DesignerComponent,
  selectors: [["dc-designer"]],
  viewQuery: function DesignerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_1__.NGXDynamicDesignerComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dc = _t.first);
    }
  },
  inputs: {
    template: "template"
  },
  decls: 11,
  vars: 12,
  consts: [[1, "h-100"], [1, "row", "h-100", "m-0"], [1, "col-4", "col-lg-2", "h-100", "overflow-y-auto"], ["cdkDropList", "", "id", "ngx-components-list", "cdkDropListSortingDisabled", "", 1, "d-flex", "flex-fill", "flex-column", "p-0", "m-0", "w-100", 3, "isAnimated", "closeOthers", "cdkDropListConnectedTo"], ["class", "p-0", 3, "isOpen", 4, "ngFor", "ngForOf"], [1, "col-8", "col-lg-8"], ["id", "ngx-dynamic-designer", 1, "d-flex", "flex-column", "h-100", "overflow-hidden", 3, "xmlUIModel", "dataModel"], [1, "col-4", "col-lg-2"], [3, "component", "delete", "save", "cancel", "selectComponent", 4, "ngIf"], [1, "p-0", 3, "isOpen"], ["accordionGroupRef", ""], ["accordion-heading", "", 1, "header", "d-flex", "align-items-center"], [1, "fa", "text-center", "me-2", 3, "ngClass"], [1, "m-0"], [1, "d-flex", "flex-fill", "flex-column", "p-0", "m-0"], ["class", "d-flex align-items-baseline cursor-pointer border my-1 p-1", "cdkDrag", "", "cdkDragPreview", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragPreview", "", 1, "d-flex", "align-items-baseline", "cursor-pointer", "border", "my-1", "p-1", 3, "cdkDragData"], [3, "component", "delete", "save", "cancel", "selectComponent"]],
  template: function DesignerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "accordion", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DesignerComponent_accordion_group_5_Template, 8, 7, "accordion-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-dynamic-designer-component", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DesignerComponent_dc_component_properties_9_Template, 1, 1, "dc-component-properties", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isAnimated", true)("closeOthers", true)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, ctx.connected$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.groups);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("xmlUIModel", ctx.template)("dataModel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 9, ctx.selectedComponent$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDrag, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionPanelComponent, _ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_1__.NGXDynamicDesignerComponent, _component_properties_component_properties_component__WEBPACK_IMPORTED_MODULE_2__.ComponentPropertiesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["accordion-group[_ngcontent-%COMP%]     .panel-body.card-block.card-body {\n  padding: 0.5rem;\n}\n\n#ngx-components-list[_ngcontent-%COMP%]     .cdk-drag {\n  cursor: grab;\n}\n\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .cdk-drag:not(.cdk-drag-disabled) {\n  cursor: grab;\n}\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .cdk-drag, ngx-dynamic-designer-component[_ngcontent-%COMP%]     .cdk-drop-list {\n  border: 1px dashed transparent;\n  box-sizing: border-box;\n}\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .cdk-drop-list:hover {\n  border: 1px solid darkgrey;\n}\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .cdk-drop-list {\n  min-height: 50px;\n}\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .selected-container {\n  background-color: lightblue;\n}\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .selected-container > form > .cdk-drag, ngx-dynamic-designer-component[_ngcontent-%COMP%]     .selected-container > .cdk-drag {\n  border: 1px dashed darkblue;\n  box-sizing: border-box;\n}\nngx-dynamic-designer-component[_ngcontent-%COMP%]     .selected-component {\n  border: 1px solid darkblue !important;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9kZXNpZ25lci9jb21wb25lbnRzL2Rlc2lnbmVyL2Rlc2lnbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQXNCRTtFQUNFLFlBQUE7QUFuQko7QUFzQkU7O0VBRUUsOEJBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQTJCRTtFQUNFLDBCQUFBO0FBekJKO0FBNEJFO0VBQ0UsZ0JBQUE7QUExQko7QUE2QkU7RUFDRSwyQkFBQTtBQTNCSjtBQTZCSTs7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0FBM0JOO0FBK0JFO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtBQTdCSiIsInNvdXJjZXNDb250ZW50IjpbImFjY29yZGlvbi1ncm91cCA6Om5nLWRlZXAgLnBhbmVsLWJvZHkuY2FyZC1ibG9jay5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcblxyXG4jbmd4LWNvbXBvbmVudHMtbGlzdCA6Om5nLWRlZXAge1xyXG4gIC5jZGstZHJhZyB7XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgfVxyXG59XHJcblxyXG5uZ3gtZHluYW1pYy1kZXNpZ25lci1jb21wb25lbnQgOjpuZy1kZWVwIHtcclxuXHJcbiAgLy8gLnNlbGVjdGVkLWNvbnRhaW5lciA+IC5jZGstZHJhZyB7XHJcbiAgLy8gICBtYXJnaW46IDAuMjVyZW07XHJcbiAgLy8gfVxyXG5cclxuICAvLyAuY2RrLWRyb3AtbGlzdDpob3ZlciA+IC5jZGstZHJhZyB7XHJcbiAgLy8gICBtYXJnaW46IDAuMjVyZW07XHJcbiAgLy8gfVxyXG5cclxuICAvLyAuY2RrLWRyYWcge1xyXG4gIC8vICAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLmNkay1kcm9wLWxpc3Qge1xyXG4gIC8vICAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gIC8vIH1cclxuXHJcbiAgLmNkay1kcmFnOm5vdCguY2RrLWRyYWctZGlzYWJsZWQpIHtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICB9XHJcblxyXG4gIC5jZGstZHJhZyxcclxuICAuY2RrLWRyb3AtbGlzdCB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLy8gLmNkay1kcm9wLWxpc3Q6bm90KC5jZGstZHJvcC1saXN0LWRpc2FibGVkKSB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgLy8gfVxyXG5cclxuICAuY2RrLWRyb3AtbGlzdDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcclxuICB9XHJcblxyXG4gIC5jZGstZHJvcC1saXN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuXHJcbiAgICA+IGZvcm0gPiAuY2RrLWRyYWcsXHJcbiAgICA+IC5jZGstZHJhZyB7XHJcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBkYXJrYmx1ZTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZC1jb21wb25lbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6475:
/*!**************************************************************************!*\
  !*** ./projects/core/src/lib/designer/components/draggable-component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DraggableComponent": () => (/* binding */ DraggableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);



const _c0 = ["container"];
const _c1 = ["dc-draggable", ""];
class DraggableComponent {
  constructor() {}
}
DraggableComponent.ɵfac = function DraggableComponent_Factory(t) {
  return new (t || DraggableComponent)();
};
DraggableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DraggableComponent,
  selectors: [["", "dc-draggable", ""]],
  viewQuery: function DraggableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag])],
  attrs: _c1,
  decls: 2,
  vars: 0,
  consts: [["container", ""]],
  template: function DraggableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
    }
  },
  styles: ["[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9kZXNpZ25lci9jb21wb25lbnRzL2RyYWdnYWJsZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9177:
/*!*************************************************************************************!*\
  !*** ./projects/core/src/lib/designer/components/ngx-dynamic-designer-component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NGXDynamicDesignerComponent": () => (/* binding */ NGXDynamicDesignerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/renderer.service */ 3477);
/* harmony import */ var _designer_renderer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designer-renderer.service */ 1821);
/* harmony import */ var _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ngx-dynamic-component */ 9154);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/core.service */ 551);









const _c0 = ["vc"];
class NGXDynamicDesignerComponent extends _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_2__.NGXDynamicComponent {
  constructor(rendererService, injector) {
    super(rendererService, injector);
    this.rendererService = rendererService;
    this.injector = injector;
    this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.changedDataModel = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.eventHandlers = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.dropList$ = this.rendererService.selectedContainer$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(c => [c === null || c === void 0 ? void 0 : c.injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDropList)]));
  }
  clear() {
    this.containerRef.clear();
    this.xmlUIModel = '<div class="container"></div>';
    this.initParsedModel(this.xmlUIModel);
  }
  initParsedModel(uiModel) {
    try {
      this.uiModel = _services_core_service__WEBPACK_IMPORTED_MODULE_3__.CoreService.parseXMLModel(uiModel);
      if (this.uiModel) {
        const component = this.rendererService.createComponent(this, this.uiModel);
        const drag = component.injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDrag);
        if (drag) {
          drag.data = component;
        }
      }
    } catch (e) {
      this.uiModel = null;
      this.eventHandlers.emit({
        eventHandler: 'parseError',
        eventName: 'error',
        parameters: {
          uiModel: this.uiModel,
          error: e
        }
      });
    }
  }
}
NGXDynamicDesignerComponent.ɵfac = function NGXDynamicDesignerComponent_Factory(t) {
  return new (t || NGXDynamicDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_renderer_service__WEBPACK_IMPORTED_MODULE_0__.RendererService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
};
NGXDynamicDesignerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NGXDynamicDesignerComponent,
  selectors: [["ngx-dynamic-designer-component"]],
  viewQuery: function NGXDynamicDesignerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    dataModel: "dataModel",
    xmlUIModel: "xmlUIModel"
  },
  outputs: {
    render: "render",
    changedDataModel: "changedDataModel",
    eventHandlers: "eventHandlers"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _services_renderer_service__WEBPACK_IMPORTED_MODULE_0__.RendererService,
    useClass: _designer_renderer_service__WEBPACK_IMPORTED_MODULE_1__.DesignerRendererService
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["vc", ""]],
  template: function NGXDynamicDesignerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, null, 0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 5537:
/*!**********************************************************************!*\
  !*** ./projects/core/src/lib/designer/creators/component-creator.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentCreator": () => (/* binding */ ComponentCreator)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ngx-dynamic-designer-component */ 9177);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/core.service */ 551);



class ComponentCreator {
  constructor(parentComponent, uiModel) {
    this.parentComponent = parentComponent;
    this.uiModel = uiModel;
    this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.descriptor = _services_core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService.getComponentDescriptor(this.uiModel.type, 'designer');
  }
  initComponentProps() {
    const component = this.component;
    component.parent = this.parentComponent;
    component.element.classList.add('dc-element');
    component.uiModel.getComponent = () => component;
    component.changedDataModel.subscribe(evt => {
      this.parentComponent.changedDataModel.emit(evt);
    });
    component.eventHandlers.subscribe(evt => {
      if (this.parentComponent instanceof _components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_0__.NGXDynamicDesignerComponent) {
        evt.rootUIModel = this.parentComponent.uiModel;
      }
      this.parentComponent.eventHandlers.emit(evt);
    });
  }
}

/***/ }),

/***/ 6971:
/*!*************************************************************************!*\
  !*** ./projects/core/src/lib/designer/creators/dc-container-creator.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcContainerCreator": () => (/* binding */ DcContainerCreator)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _dc_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc-creator */ 7878);



class DcContainerCreator extends _dc_creator__WEBPACK_IMPORTED_MODULE_0__.DcCreator {
  constructor(parentComponent, uiModel, containerRef, dataModel, index) {
    super(parentComponent, uiModel, containerRef, dataModel, index);
    this.dropped$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.initDrop(this.component);
  }
  deselectComponent() {
    super.deselectComponent();
    this.drop.element.nativeElement.classList.remove('selected-container');
    // this.component.element.classList.remove('selected-container');
    this.drop.disabled = true;
  }
  selectComponent() {
    var _a;
    this.selected$.next(this.component);
    this.drop.disabled = false;
    this.drop.element.nativeElement.classList.add('selected-container');
    (_a = this.component.children) === null || _a === void 0 ? void 0 : _a.filter(child => child.injector).forEach(child => {
      child.injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag).disabled = false;
    });
  }
  get drop() {
    return this.component.injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, null, {
      self: true
    });
  }
  initDrop(component) {
    try {
      this.drop.element.nativeElement.onclick = evt => {
        evt.stopPropagation();
        this.selectComponent();
      };
      this.drop.dropped.subscribe(event => {
        if (event.previousContainer === event.container && event.previousIndex === event.currentIndex) {
          return;
        }
        this.dropped$.next(event);
      });
    } catch (e) {
      console.log(component.uiModel.type, e.message);
    }
  }
}

/***/ }),

/***/ 7878:
/*!***************************************************************!*\
  !*** ./projects/core/src/lib/designer/creators/dc-creator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcCreator": () => (/* binding */ DcCreator)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _component_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-creator */ 5537);


class DcCreator extends _component_creator__WEBPACK_IMPORTED_MODULE_0__.ComponentCreator {
  constructor(parentComponent, uiModel, containerRef, dataModel, index) {
    super(parentComponent, uiModel);
    const componentRef = containerRef.createComponent(this.descriptor.component, {
      index
    });
    const component = componentRef.instance;
    component.dataModel = dataModel;
    component.uiModel = uiModel;
    component.create(componentRef.location.nativeElement);
    this.component = component;
    this.initComponentProps();
    this.initDrag(component);
  }
  deselectComponent() {
    this.drag.element.nativeElement.classList.remove('selected-component');
  }
  selectComponent() {
    this.selected$.next(this.component);
    this.drag.element.nativeElement.classList.add('selected-component');
  }
  get drag() {
    return this.component.injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag);
  }
  initDrag(component) {
    if (!this.drag) {
      console.warn(`${component.uiModel.type} is not draggable`);
      return;
    }
    this.drag.disabled = true;
    this.drag.data = component.uiModel;
    this.drag.element.nativeElement.onclick = evt => {
      evt.stopPropagation();
      this.selectComponent();
    };
  }
}

/***/ }),

/***/ 2003:
/*!*****************************************************************!*\
  !*** ./projects/core/src/lib/designer/creators/html-creator.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLCreator": () => (/* binding */ HTMLCreator)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _components_draggable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/draggable-component */ 6475);
/* harmony import */ var _component_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-creator */ 5537);



class HTMLCreator extends _component_creator__WEBPACK_IMPORTED_MODULE_1__.ComponentCreator {
  constructor(parentComponent, uiModel, containerRef, dataModel, index) {
    super(parentComponent, uiModel);
    const baseHtml = this.descriptor.component;
    const component = new baseHtml(parentComponent.injector);
    component.dataModel = dataModel;
    component.uiModel = uiModel;
    this.draggableWrapper = containerRef.createComponent(_components_draggable_component__WEBPACK_IMPORTED_MODULE_0__.DraggableComponent, {
      index
    });
    component.create(this.draggableWrapper.instance.container.element.nativeElement);
    this.drag.data = component.uiModel;
    component.element.onclick = evt => {
      evt.stopImmediatePropagation();
      this.selectComponent();
    };
    this.component = component;
    this.initComponentProps();
  }
  deselectComponent() {
    this.component.element.classList.remove('selected-component');
  }
  selectComponent() {
    this.component.element.classList.add('selected-component');
    this.selected$.next(this.component);
  }
  get drag() {
    return this.draggableWrapper.injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag);
  }
}

/***/ }),

/***/ 1821:
/*!*********************************************************************!*\
  !*** ./projects/core/src/lib/designer/designer-renderer.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerRendererService": () => (/* binding */ DesignerRendererService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-dynamic-component */ 2583);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/core.service */ 551);
/* harmony import */ var _creators_html_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creators/html-creator */ 2003);
/* harmony import */ var _creators_dc_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creators/dc-creator */ 7878);
/* harmony import */ var _creators_dc_container_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creators/dc-container-creator */ 6971);
/* harmony import */ var _components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ngx-dynamic-designer-component */ 9177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);









class DesignerRendererService {
  constructor() {
    this.selectedCreator$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    this.selectedContainer$ = this.selectedCreator$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(creator => !creator || creator instanceof _creators_dc_container_creator__WEBPACK_IMPORTED_MODULE_4__.DcContainerCreator), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(creator => creator === null || creator === void 0 ? void 0 : creator.component));
    this.selectedComponent$ = this.selectedCreator$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(creator => !creator || creator instanceof _creators_dc_creator__WEBPACK_IMPORTED_MODULE_3__.DcCreator || creator instanceof _creators_html_creator__WEBPACK_IMPORTED_MODULE_2__.HTMLCreator), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(creator => creator === null || creator === void 0 ? void 0 : creator.component));
    this.selectedElement$ = this.selectedCreator$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(creator => !creator || creator instanceof _creators_html_creator__WEBPACK_IMPORTED_MODULE_2__.HTMLCreator), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(creator => creator === null || creator === void 0 ? void 0 : creator.component));
    this.componentCreatorMap = new Map();
  }
  renderChildren(parentComponent) {
    var _a, _b;
    if (!parentComponent.containerRef || !parentComponent.uiModel) {
      return;
    }
    parentComponent.containerRef.clear();
    return (_b = (_a = parentComponent.uiModel) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.map(m => this.createComponent(parentComponent, m));
  }
  createComponent(parentComponent, uiModel, containerRef = parentComponent.containerRef, dataModel = parentComponent.dataModel, index) {
    try {
      const descriptor = _services_core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService.getComponentDescriptor(uiModel.type, 'designer');
      const componentClass = descriptor.component;
      let componentCreator;
      if (descriptor.category === "HTML" /* Categories.HTML */) {
        componentCreator = new _creators_html_creator__WEBPACK_IMPORTED_MODULE_2__.HTMLCreator(parentComponent, uiModel, containerRef, dataModel, index);
      } else if (descriptor.category === "Containers" /* Categories.Containers */) {
        componentCreator = new _creators_dc_container_creator__WEBPACK_IMPORTED_MODULE_4__.DcContainerCreator(parentComponent, uiModel, containerRef, dataModel, index);
        componentCreator.drag.disabled = true;
        setTimeout(() => {
          if (componentCreator.drag.disabled === null) {
            componentCreator.drag.disabled = true;
          }
        });
        componentCreator.dropped$.subscribe(evt => {
          this.onDrop(evt);
        });
        ;
      } else if (componentClass.prototype instanceof _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_0__.BaseDynamicComponent) {
        componentCreator = new _creators_dc_creator__WEBPACK_IMPORTED_MODULE_3__.DcCreator(parentComponent, uiModel, containerRef, dataModel, index);
      }
      const component = componentCreator.component;
      if (component) {
        this.componentCreatorMap.set(component, componentCreator);
        componentCreator.selected$.subscribe(() => {
          var _a;
          ;
          (_a = this.selectedCreator) === null || _a === void 0 ? void 0 : _a.deselectComponent();
          this.selectedCreator$.next(componentCreator);
        });
        componentCreator.drag.disabled = false;
        return component;
      } else {
        throw new Error('Not able to create component');
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to create component ${uiModel.type}`);
    }
  }
  updateComponent(component, properties) {
    var _a, _b, _c, _d;
    const index = (_a = component.parent) === null || _a === void 0 ? void 0 : _a.children.indexOf(component);
    this.deleteComponent(component);
    const newComponent = this.createComponent(component.parent, Object.assign(Object.assign({}, component.uiModel), {
      itemProperties: Object.assign(Object.assign({}, component.uiModel.itemProperties), properties)
    }), (_b = component.parent) === null || _b === void 0 ? void 0 : _b.containerRef, (_c = component.parent) === null || _c === void 0 ? void 0 : _c.dataModel, index);
    (_d = component.parent) === null || _d === void 0 ? void 0 : _d.children.splice(index, 0, newComponent);
    const creator = this.componentCreatorMap.get(newComponent);
    creator === null || creator === void 0 ? void 0 : creator.selectComponent();
  }
  deselectComponent() {
    if (this.selectedCreator) {
      this.selectedCreator.deselectComponent();
      this.selectedCreator$.next(null);
    }
  }
  selectComponent(component) {
    const creator = this.componentCreatorMap.get(component);
    creator === null || creator === void 0 ? void 0 : creator.selectComponent();
  }
  get selectedContainer() {
    if (this.selectedCreator instanceof _creators_dc_container_creator__WEBPACK_IMPORTED_MODULE_4__.DcContainerCreator) {
      return this.selectedCreator.component;
    }
  }
  get selectedCreator() {
    return this.selectedCreator$.value;
  }
  onDrop(event) {
    var _a, _b, _c, _d;
    const container = this.selectedContainer;
    const item = event.item.data;
    try {
      if (event.previousContainer.id !== 'ngx-components-list') {
        (_a = this.selectedContainer) === null || _a === void 0 ? void 0 : _a.containerRef.remove(event.previousIndex);
        (_b = this.selectedContainer) === null || _b === void 0 ? void 0 : _b.children.splice(event.previousIndex, 1);
      }
      const newComponent = this.createComponent(container, item, container.containerRef, container.dataModel, event.currentIndex);
      if (!((_c = this.selectedContainer) === null || _c === void 0 ? void 0 : _c.children)) {
        this.selectedContainer.children = [newComponent];
      } else {
        (_d = this.selectedContainer) === null || _d === void 0 ? void 0 : _d.children.splice(event.currentIndex, 0, newComponent);
      }
    } catch (e) {
      console.log('failed to remove child', e);
    }
  }
  deleteComponent(component) {
    if (component.parent instanceof _components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_5__.NGXDynamicDesignerComponent) {
      component.parent.clear();
    } else {
      const index = component.parent.children.indexOf(component);
      if (index > -1) {
        component.parent.containerRef.remove(index);
        this.selectedCreator$.next(null);
      }
    }
  }
}
DesignerRendererService.ɵfac = function DesignerRendererService_Factory(t) {
  return new (t || DesignerRendererService)();
};
DesignerRendererService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: DesignerRendererService,
  factory: DesignerRendererService.ɵfac
});

/***/ }),

/***/ 7081:
/*!***********************************************************!*\
  !*** ./projects/core/src/lib/designer/designer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerModule": () => (/* binding */ DesignerModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 7422);
/* harmony import */ var _components_designer_designer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/designer/designer.component */ 284);
/* harmony import */ var _components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ngx-dynamic-designer-component */ 9177);
/* harmony import */ var _designer_renderer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designer-renderer.service */ 1821);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core.module */ 1332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_draggable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/draggable-component */ 6475);
/* harmony import */ var _components_designer_component_properties_component_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/designer/component-properties/component-properties.component */ 8196);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/core.service */ 551);
/* harmony import */ var _ui_components_designer_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-components/designer-form.component */ 4173);
/* harmony import */ var _ui_components_designer_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-components/designer-container.component */ 1863);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui-components */ 8108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);















class DesignerModule {
  constructor() {
    [_ui_components_designer_form_component__WEBPACK_IMPORTED_MODULE_7__.designerFormDescriptor, _ui_components_designer_container_component__WEBPACK_IMPORTED_MODULE_8__.designerContainerDescriptor, _ui_components_designer_container_component__WEBPACK_IMPORTED_MODULE_8__.designerDivDescriptor, _ui_components__WEBPACK_IMPORTED_MODULE_9__.designerButtonDescriptor, _ui_components__WEBPACK_IMPORTED_MODULE_9__.designerInputDescriptor, _ui_components__WEBPACK_IMPORTED_MODULE_9__.designerLabelDescriptor, _ui_components__WEBPACK_IMPORTED_MODULE_9__.designerTextAreaDescriptor].forEach(descriptor => _services_core_service__WEBPACK_IMPORTED_MODULE_6__.CoreService.registerComponent(descriptor, 'designer'));
  }
}
DesignerModule.ɵfac = function DesignerModule_Factory(t) {
  return new (t || DesignerModule)();
};
DesignerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: DesignerModule
});
DesignerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_designer_renderer_service__WEBPACK_IMPORTED_MODULE_2__.DesignerRendererService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__.AccordionModule, _core_module__WEBPACK_IMPORTED_MODULE_3__.DynamicComponentsCoreModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DesignerModule, {
    declarations: [_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_0__.DesignerComponent, _components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_1__.NGXDynamicDesignerComponent, _components_draggable_component__WEBPACK_IMPORTED_MODULE_4__.DraggableComponent, _components_designer_component_properties_component_properties_component__WEBPACK_IMPORTED_MODULE_5__.ComponentPropertiesComponent, _ui_components_designer_form_component__WEBPACK_IMPORTED_MODULE_7__.DesignerFormComponent, _ui_components_designer_container_component__WEBPACK_IMPORTED_MODULE_8__.DesignerContainerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__.AccordionModule, _core_module__WEBPACK_IMPORTED_MODULE_3__.DynamicComponentsCoreModule],
    exports: [_components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_1__.NGXDynamicDesignerComponent, _components_designer_designer_component__WEBPACK_IMPORTED_MODULE_0__.DesignerComponent]
  });
})();

/***/ }),

/***/ 1863:
/*!**************************************************************************************!*\
  !*** ./projects/core/src/lib/designer/ui-components/designer-container.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerContainerComponent": () => (/* binding */ DesignerContainerComponent),
/* harmony export */   "designerContainerDescriptor": () => (/* binding */ designerContainerDescriptor),
/* harmony export */   "designerDivDescriptor": () => (/* binding */ designerDivDescriptor)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/renderer.service */ 3477);
/* harmony import */ var _ui_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui-components/container/container.component */ 7055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class DesignerContainerComponent extends _ui_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent {
  constructor(rendererService, injector) {
    super(rendererService, injector);
    this.rendererService = rendererService;
    this.injector = injector;
    if (injector) {
      injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, null, {
        self: true
      }).disabled = true;
    }
  }
}
DesignerContainerComponent.ɵfac = function DesignerContainerComponent_Factory(t) {
  return new (t || DesignerContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_renderer_service__WEBPACK_IMPORTED_MODULE_0__.RendererService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
DesignerContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DesignerContainerComponent,
  selectors: [["dc-container"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag])],
  decls: 3,
  vars: 1,
  consts: [["vc", ""]],
  template: function DesignerContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.properties.text, " ");
    }
  },
  styles: ["[_nghost-%COMP%]:not(.row):not(.input-group) {\n        display: block;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9kZXNpZ25lci91aS1jb21wb25lbnRzL2Rlc2lnbmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsY0FBYztNQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Q6bm90KC5yb3cpOm5vdCguaW5wdXQtZ3JvdXApIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
const designerContainerDescriptor = Object.assign(Object.assign({}, _ui_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.containerDescriptor), {
  component: DesignerContainerComponent
});
const designerDivDescriptor = Object.assign(Object.assign({}, _ui_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.divDescriptor), {
  component: DesignerContainerComponent
});

/***/ }),

/***/ 4173:
/*!*********************************************************************************!*\
  !*** ./projects/core/src/lib/designer/ui-components/designer-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerFormComponent": () => (/* binding */ DesignerFormComponent),
/* harmony export */   "designerFormDescriptor": () => (/* binding */ designerFormDescriptor)
/* harmony export */ });
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/renderer.service */ 3477);
/* harmony import */ var _ui_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui-components/form/form.component */ 3833);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);









class DesignerFormComponent extends _ui_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent {
  constructor(rendererService, injector) {
    super(rendererService, injector);
    this.rendererService = rendererService;
    this.injector = injector;
    if (injector) {
      injector.get(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, null, {
        self: true
      }).disabled = true;
    }
  }
}
DesignerFormComponent.ɵfac = function DesignerFormComponent_Factory(t) {
  return new (t || DesignerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_renderer_service__WEBPACK_IMPORTED_MODULE_0__.RendererService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
};
DesignerFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DesignerFormComponent,
  selectors: [["dc-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag])],
  decls: 3,
  vars: 1,
  consts: [[3, "ngStyle"], ["vc", ""]],
  template: function DesignerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.itemStyles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  encapsulation: 2
});
const designerFormDescriptor = Object.assign(Object.assign({}, _ui_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__.formDescriptor), {
  component: DesignerFormComponent
});

/***/ }),

/***/ 8108:
/*!***************************************************************!*\
  !*** ./projects/core/src/lib/designer/ui-components/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerButtonComponent": () => (/* binding */ DesignerButtonComponent),
/* harmony export */   "DesignerContainerComponent": () => (/* reexport safe */ _designer_container_component__WEBPACK_IMPORTED_MODULE_4__.DesignerContainerComponent),
/* harmony export */   "DesignerFormComponent": () => (/* reexport safe */ _designer_form_component__WEBPACK_IMPORTED_MODULE_5__.DesignerFormComponent),
/* harmony export */   "DesignerInputComponent": () => (/* binding */ DesignerInputComponent),
/* harmony export */   "DesignerLabelComponent": () => (/* binding */ DesignerLabelComponent),
/* harmony export */   "DesignerTextareaComponent": () => (/* binding */ DesignerTextareaComponent),
/* harmony export */   "designerButtonDescriptor": () => (/* binding */ designerButtonDescriptor),
/* harmony export */   "designerContainerDescriptor": () => (/* reexport safe */ _designer_container_component__WEBPACK_IMPORTED_MODULE_4__.designerContainerDescriptor),
/* harmony export */   "designerDivDescriptor": () => (/* reexport safe */ _designer_container_component__WEBPACK_IMPORTED_MODULE_4__.designerDivDescriptor),
/* harmony export */   "designerFormDescriptor": () => (/* reexport safe */ _designer_form_component__WEBPACK_IMPORTED_MODULE_5__.designerFormDescriptor),
/* harmony export */   "designerInputDescriptor": () => (/* binding */ designerInputDescriptor),
/* harmony export */   "designerLabelDescriptor": () => (/* binding */ designerLabelDescriptor),
/* harmony export */   "designerTextAreaDescriptor": () => (/* binding */ designerTextAreaDescriptor)
/* harmony export */ });
/* harmony import */ var _ui_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui-components/input/input.component */ 3460);
/* harmony import */ var _ui_components_label_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui-components/label/label.component */ 805);
/* harmony import */ var _ui_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui-components/textarea/textarea.component */ 6201);
/* harmony import */ var _ui_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui-components/button/button.component */ 2042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _designer_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./designer-container.component */ 1863);
/* harmony import */ var _designer_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designer-form.component */ 4173);








class DesignerInputComponent extends _ui_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent {}
DesignerInputComponent.ɵfac = /*@__PURE__*/function () {
  let ɵDesignerInputComponent_BaseFactory;
  return function DesignerInputComponent_Factory(t) {
    return (ɵDesignerInputComponent_BaseFactory || (ɵDesignerInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](DesignerInputComponent)))(t || DesignerInputComponent);
  };
}();
DesignerInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DesignerInputComponent,
  selectors: [["input"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag])],
  decls: 0,
  vars: 0,
  template: function DesignerInputComponent_Template(rf, ctx) {},
  encapsulation: 2
});
const designerInputDescriptor = Object.assign(Object.assign({}, _ui_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__.inputDescriptor), {
  component: DesignerInputComponent
});
class DesignerLabelComponent extends _ui_components_label_label_component__WEBPACK_IMPORTED_MODULE_1__.LabelComponent {}
DesignerLabelComponent.ɵfac = /*@__PURE__*/function () {
  let ɵDesignerLabelComponent_BaseFactory;
  return function DesignerLabelComponent_Factory(t) {
    return (ɵDesignerLabelComponent_BaseFactory || (ɵDesignerLabelComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](DesignerLabelComponent)))(t || DesignerLabelComponent);
  };
}();
DesignerLabelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DesignerLabelComponent,
  selectors: [["label"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag])],
  decls: 1,
  vars: 1,
  template: function DesignerLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.text);
    }
  },
  styles: [".form-check-label[_nghost-%COMP%]    > label[_ngcontent-%COMP%] {\n      margin-bottom: 0;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9kZXNpZ25lci91aS1jb21wb25lbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtJQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0LmZvcm0tY2hlY2stbGFiZWwgPiBsYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
const designerLabelDescriptor = Object.assign(Object.assign({}, _ui_components_label_label_component__WEBPACK_IMPORTED_MODULE_1__.labelDescriptor), {
  component: DesignerLabelComponent
});
class DesignerTextareaComponent extends _ui_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_2__.TextareaComponent {}
DesignerTextareaComponent.ɵfac = /*@__PURE__*/function () {
  let ɵDesignerTextareaComponent_BaseFactory;
  return function DesignerTextareaComponent_Factory(t) {
    return (ɵDesignerTextareaComponent_BaseFactory || (ɵDesignerTextareaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](DesignerTextareaComponent)))(t || DesignerTextareaComponent);
  };
}();
DesignerTextareaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DesignerTextareaComponent,
  selectors: [["textarea"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag])],
  decls: 1,
  vars: 1,
  template: function DesignerTextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.value);
    }
  },
  encapsulation: 2
});
const designerTextAreaDescriptor = Object.assign(Object.assign({}, _ui_components_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_2__.textareaDescriptor), {
  component: DesignerTextareaComponent
});
class DesignerButtonComponent extends _ui_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent {}
DesignerButtonComponent.ɵfac = /*@__PURE__*/function () {
  let ɵDesignerButtonComponent_BaseFactory;
  return function DesignerButtonComponent_Factory(t) {
    return (ɵDesignerButtonComponent_BaseFactory || (ɵDesignerButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](DesignerButtonComponent)))(t || DesignerButtonComponent);
  };
}();
DesignerButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DesignerButtonComponent,
  selectors: [["button"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag])],
  decls: 3,
  vars: 1,
  consts: [["vc", ""]],
  template: function DesignerButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.properties.label, " ");
    }
  },
  encapsulation: 2
});
const designerButtonDescriptor = Object.assign(Object.assign({}, _ui_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.buttonDescriptor), {
  component: DesignerButtonComponent
});

/***/ }),

/***/ 3870:
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/html-elements/a/a.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AComponent": () => (/* binding */ AComponent),
/* harmony export */   "LinkProperties": () => (/* binding */ LinkProperties),
/* harmony export */   "aDescriptor": () => (/* binding */ aDescriptor),
/* harmony export */   "example": () => (/* binding */ example),
/* harmony export */   "example2": () => (/* binding */ example2)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _components_base_html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-html-element */ 5526);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ 9034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class AComponent extends _components_base_html_element__WEBPACK_IMPORTED_MODULE_1__.BaseHTMLElement {
  create(selectorElement) {
    super.create(selectorElement);
    if (this.properties.href) {
      this.element.setAttribute('href', this.properties.href);
    }
    if (this.properties.target) {
      this.element.setAttribute('target', this.properties.target);
    }
    if (this.properties.routerLink) {
      this.element.style.cursor = 'pointer';
      this.element.setAttribute('href', 'javascript:void(0);');
    }
    this.element.onclick = evt => {
      this.emitEvent(this.properties.onClick, evt);
      if (this.properties.routerLink) {
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
        const navigationExtras = {};
        const queryParams = this.getQueryParams();
        if (queryParams) {
          navigationExtras.queryParams = queryParams;
        }
        router.navigate([this.getPath()], navigationExtras);
        evt.preventDefault();
      }
    };
  }
  getQueryParams() {
    let queryParams = this.properties.queryString;
    if (!queryParams) {
      return null;
    }
    const matches = queryParams.match(/{\$\.[\w/]+}/g);
    if (matches) {
      matches.forEach(m => {
        const path = m.replace(/[{}]+/, '');
        const res = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.queryValue)(this.dataModel, path);
        queryParams = queryParams.replace(m, res);
      });
    }
    function parseQuery(queryString) {
      const query = {};
      const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
      for (const pairText of pairs) {
        const pair = pairText.split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    }
    return parseQuery(queryParams);
  }
  getPath() {
    let routerLink = this.properties.routerLink;
    const matches = routerLink.match(/{\$\.[\w/]+}/g);
    if (matches) {
      matches.forEach(m => {
        const path = m.replace(/[{}]+/, '');
        const res = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.queryValue)(this.dataModel, path);
        routerLink = routerLink.replace(m, res);
      });
    }
    return routerLink;
  }
}
AComponent.ɵfac = /*@__PURE__*/function () {
  let ɵAComponent_BaseFactory;
  return function AComponent_Factory(t) {
    return (ɵAComponent_BaseFactory || (ɵAComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](AComponent)))(t || AComponent);
  };
}();
AComponent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: AComponent,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
});
class LinkProperties extends _properties__WEBPACK_IMPORTED_MODULE_0__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Link label',
  example: 'Click me!'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], LinkProperties.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Link href used in case of type=link.',
  example: 'url/to/site'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], LinkProperties.prototype, "href", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'The target attribute specifies where to open the linked document.',
  example: '_blank'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], LinkProperties.prototype, "target", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Key for action that fires onclick',
  example: 'onLinkClick()',
  type: _properties__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], LinkProperties.prototype, "onClick", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Router link',
  example: 'path/page'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], LinkProperties.prototype, "routerLink", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Query String',
  example: 'id=12&another={$.dataModelProperty}'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], LinkProperties.prototype, "queryString", void 0);
const example = {
  title: 'Basic link example',
  uiModel: `
  <section class="row align-items-center m-1">
    <a title="Link to Google" class="btn btn-primary mr-2"
    href="https://falconsoft.github.io/ngx-dynamic-components/components/core/button">Button</a>
    <a target="_blank" href="https://www.google.com/">Google</a>
  </section>
  `,
  dataModel: {}
};
const example2 = {
  title: 'Basic router link',
  uiModel: `
  <section class="row align-items-center m-1">
    <a title="Examples link" class="btn btn-link mr-2"
    routerLink="/examples/contact-us">Examples: Contact us</a>
  </section>
  `,
  dataModel: {}
};
const aDescriptor = {
  name: 'a',
  label: 'Link',
  packageName: 'core',
  category: "HTML" /* Categories.HTML */,
  description: 'A component',
  itemProperties: LinkProperties,
  component: AComponent,
  example: [example, example2],
  parseUIModel: xmlRes => {
    const uiModel = (0,_components_base_html_element__WEBPACK_IMPORTED_MODULE_1__.parseHTMLUIModel)(xmlRes);
    if (xmlRes.attrs.routerLink) {
      uiModel.itemProperties.routerLink = xmlRes.attrs.routerLink;
    }
    if (xmlRes.attrs.queryParams) {
      uiModel.itemProperties.queryParams = xmlRes.attrs.queryParams;
    }
    return uiModel;
  },
  defaultModel: '<a target="_blank" href="https://www.google.com/">Google</a>'
};

/***/ }),

/***/ 7675:
/*!******************************************************!*\
  !*** ./projects/core/src/lib/html-elements/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlDescriptors": () => (/* binding */ htmlDescriptors)
/* harmony export */ });
/* harmony import */ var _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-html-element */ 5526);

const tags = ['span', 'p', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'small'];
const htmlElementDescriptor = {
  name: 'HTML_ELEMENT_TAG',
  label: 'HTML_ELEMENT_TAG Element',
  packageName: 'core',
  category: "HTML" /* Categories.HTML */,
  description: 'HTML HTML_ELEMENT_TAG element',
  itemProperties: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.HTMLProperties,
  component: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.BaseHTMLElement,
  example: {
    title: 'HTML <HTML_ELEMENT_TAG> example',
    uiModel: `
    <div>
    <HTML_ELEMENT_TAG>Text</HTML_ELEMENT_TAG>
    <HTML_ELEMENT_TAG><i class="fa fa-play"/></HTML_ELEMENT_TAG>
  </div>
    `,
    dataModel: {}
  },
  parseUIModel: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.parseHTMLUIModel,
  defaultModel: '<HTML_ELEMENT_TAG dc="element">Text</HTML_ELEMENT_TAG>'
};
const htmlDescriptors = tags.map(tag => replaceStringValues(htmlElementDescriptor, tag));
function replaceStringValues(target, tag) {
  const res = {};
  return Object.entries(target).reduce((obj, [key, value]) => {
    obj[key] = value;
    if (typeof value === 'string') {
      obj[key] = value.replace(/HTML_ELEMENT_TAG/g, tag);
    }
    if (key === 'example') {
      obj[key] = replaceStringValues(obj[key], tag);
    }
    return obj;
  }, res);
}

/***/ }),

/***/ 7389:
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/html-elements/li/li.element.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "liDescriptor": () => (/* binding */ liDescriptor)
/* harmony export */ });
/* harmony import */ var _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-html-element */ 5526);

const liDescriptor = {
  name: 'li',
  label: 'LI Element',
  packageName: 'core',
  category: "HTML" /* Categories.HTML */,
  description: 'HTML LI element',
  itemProperties: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.HTMLProperties,
  component: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.BaseHTMLElement,
  example: {
    title: 'HTML <li> example',
    uiModel: `<section>
    <li background="gray" color="red">Text</li>
    <li background="green" color="white"><span>Text in Span</span></li>
    <li background="blue" color="yellow"><a href="https://www.google.com">Google</a></li>
    <li><i class="fa fa-play"/></li>
  </section>`,
    dataModel: {}
  },
  parseUIModel: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.parseHTMLUIModel,
  defaultModel: '<li><i class="fa fa-play"/></li>'
};

/***/ }),

/***/ 3439:
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/html-elements/ol/ol.element.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "olDescriptor": () => (/* binding */ olDescriptor)
/* harmony export */ });
/* harmony import */ var _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-html-element */ 5526);

const olDescriptor = {
  name: 'ol',
  label: 'OL Element',
  packageName: 'core',
  category: "HTML" /* Categories.HTML */,
  description: 'HTML OL element',
  itemProperties: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.HTMLProperties,
  component: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.BaseHTMLElement,
  example: {
    title: 'HTML <ol> example',
    uiModel: `

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb px-0">
      <li class="breadcrumb-item"><a routerLink="app/{$.appInfo/ownerName}/{$.appInfo/appName}">Home</a></li>
      <li class="breadcrumb-item"><a routerLink="app/{$.appInfo/ownerName}/{$.appInfo/appName}/orders-list">Orders</a></li>
      <li class="breadcrumb-item active" aria-current="page">Details</li>
    </ol>
  </nav>

    `,
    dataModel: {
      appInfo: {
        ownerName: 'TestUser',
        appName: 'LongAppName'
      }
    }
  },
  parseUIModel: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.parseHTMLUIModel,
  defaultModel: '<ol><li>First</li><li>Second</li></ol>'
};

/***/ }),

/***/ 3876:
/*!**************************************************************!*\
  !*** ./projects/core/src/lib/html-elements/ul/ul.element.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ulDescriptor": () => (/* binding */ ulDescriptor)
/* harmony export */ });
/* harmony import */ var _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-html-element */ 5526);

const ulDescriptor = {
  name: 'ul',
  label: 'UL Element',
  packageName: 'core',
  category: "HTML" /* Categories.HTML */,
  description: 'HTML UL element',
  itemProperties: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.HTMLProperties,
  component: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.BaseHTMLElement,
  example: {
    title: 'HTML <ul> example',
    uiModel: `<div>
    <ul>
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
    </ul>
    </div>`,
    dataModel: {}
  },
  parseUIModel: _components_base_html_element__WEBPACK_IMPORTED_MODULE_0__.parseHTMLUIModel,
  defaultModel: '<ul><li>item-1</li><li>item-2</li></ul>'
};

/***/ }),

/***/ 3456:
/*!*****************************************!*\
  !*** ./projects/core/src/lib/models.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerVisibility": () => (/* binding */ DesignerVisibility),
/* harmony export */   "UIModel": () => (/* binding */ UIModel)
/* harmony export */ });
class UIModel {
  getComponent() {
    return null;
  }
}
// eslint-disable-next-line no-shadow
var DesignerVisibility;
(function (DesignerVisibility) {
  // eslint-disable-next-line
  DesignerVisibility[DesignerVisibility["UIModel"] = 1] = "UIModel";
  DesignerVisibility[DesignerVisibility["Scripts"] = 2] = "Scripts";
  DesignerVisibility[DesignerVisibility["All"] = 3] = "All";
})(DesignerVisibility || (DesignerVisibility = {}));

/***/ }),

/***/ 7781:
/*!********************************************************!*\
  !*** ./projects/core/src/lib/properties/descriptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "propDescription": () => (/* binding */ propDescription)
/* harmony export */ });
function propDescription(description) {
  function decorate(target, key) {
    let properties = target.hasOwnProperty('properties') ? target.properties : [];
    const newProp = Object.assign({
      name: key
    }, description);
    const existIndex = properties.findIndex(p => p.name === key);
    if (existIndex === -1) {
      properties.push(newProp);
    } else {
      properties.splice(existIndex, 1, newProp);
    }
    let proto = Object.getPrototypeOf(target);
    while (proto.hasOwnProperty('properties')) {
      // Filter overridden properties.
      const protoProps = proto.properties.filter(protoP => !properties.map(p => p.name).includes(protoP.name));
      properties = properties.concat(protoProps);
      proto = Object.getPrototypeOf(proto);
    }
    target.properties = properties.sort((a, b) => {
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

/***/ 6319:
/*!***************************************************!*\
  !*** ./projects/core/src/lib/properties/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseProperties": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.BaseProperties),
/* harmony export */   "BindingProperties": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.BindingProperties),
/* harmony export */   "ContainerProperties": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.ContainerProperties),
/* harmony export */   "DataModelProperties": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.DataModelProperties),
/* harmony export */   "PropTypes": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.PropTypes),
/* harmony export */   "PropertyCategories": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.PropertyCategories),
/* harmony export */   "StyleProperties": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.StyleProperties),
/* harmony export */   "StylePropertiesList": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.StylePropertiesList),
/* harmony export */   "controlProperties": () => (/* reexport safe */ _maps__WEBPACK_IMPORTED_MODULE_2__.controlProperties),
/* harmony export */   "propDescription": () => (/* reexport safe */ _descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)
/* harmony export */ });
/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor */ 7781);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 9378);
/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps */ 2551);




/***/ }),

/***/ 2551:
/*!**************************************************!*\
  !*** ./projects/core/src/lib/properties/maps.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlProperties": () => (/* binding */ controlProperties)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 9378);

// background, color, font
/**
 * Item properties can be used in any component.
 */
const controlProperties = new Map([
// General Component properties
['width', {
  name: 'width',
  label: 'Width',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}], ['height', {
  name: 'height',
  label: 'Height',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}], ['min-width', {
  name: 'min-width',
  label: 'Min width',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}], ['min-height', {
  name: 'min-height',
  label: 'Min height',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}], ['margin', {
  name: 'margin',
  label: 'Margin',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}], ['padding', {
  name: 'padding',
  label: 'Padding',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}],
// Field properties
['label', {
  name: 'label',
  label: 'Label',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Main
}], ['labelPosition', {
  name: 'labelPosition',
  label: 'Label Position',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Main,
  values: ['left', 'top', 'right', 'bottom']
}], ['labelWidth', {
  name: 'labelWidth',
  label: 'Label Width',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Layout
}],
// Appearence
['background', {
  name: 'background',
  label: 'Background',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Appearance
}], ['color', {
  name: 'color',
  label: 'Color',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Appearance
}], ['font-weight', {
  name: 'font-weight',
  label: 'Font weight',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Appearance,
  values: ['bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900]
}], ['font-size', {
  name: 'font-size',
  label: 'Font size',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Appearance,
  values: ['large', 'larger', 'medium', 'small', 'smaller', 'x-large', 'xx-large', 'x-small', 'xx-small']
}], ['font-style', {
  name: 'font-style',
  label: 'Font style',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Appearance,
  values: ['italic', 'oblique', 'normal']
}], ['border', {
  name: 'border',
  label: 'Border',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Appearance,
  combo: [[{
    label: 'all',
    value: 'border'
  }, {
    label: 'top',
    value: 'border-top'
  }, {
    label: 'left',
    value: 'border-left'
  }, {
    label: 'right',
    value: 'border-right'
  }, {
    label: 'bottom',
    value: 'border-bottom'
  }], 'border-value']
}],
// Validation properties
['required', {
  name: 'required',
  label: 'Required',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Validation,
  values: ['true', 'false']
}], ['minlength', {
  name: 'minlength',
  label: 'Min length',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Validation
}], ['maxlength', {
  name: 'maxlength',
  label: 'Max length',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Validation
}], ['pattern', {
  name: 'pattern',
  label: 'Pattern',
  category: _models__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Validation
}]]);

/***/ }),

/***/ 9378:
/*!****************************************************!*\
  !*** ./projects/core/src/lib/properties/models.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseProperties": () => (/* binding */ BaseProperties),
/* harmony export */   "BindingProperties": () => (/* binding */ BindingProperties),
/* harmony export */   "ContainerProperties": () => (/* binding */ ContainerProperties),
/* harmony export */   "DataModelProperties": () => (/* binding */ DataModelProperties),
/* harmony export */   "PropTypes": () => (/* binding */ PropTypes),
/* harmony export */   "PropertyCategories": () => (/* binding */ PropertyCategories),
/* harmony export */   "StyleProperties": () => (/* binding */ StyleProperties),
/* harmony export */   "StylePropertiesList": () => (/* binding */ StylePropertiesList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor */ 7781);


// eslint-disable-next-line no-shadow
var PropTypes;
(function (PropTypes) {
  PropTypes["EVENT"] = "event";
  PropTypes["PROPERTY"] = "property";
})(PropTypes || (PropTypes = {}));
// eslint-disable-next-line no-shadow
var PropertyCategories;
(function (PropertyCategories) {
  PropertyCategories["Layout"] = "Layout Properties";
  PropertyCategories["Container"] = "Container Properties";
  PropertyCategories["Main"] = "Main Properties";
  PropertyCategories["Appearance"] = "Appearance Properties";
  PropertyCategories["Validation"] = "Validation Properties";
})(PropertyCategories || (PropertyCategories = {}));
class BaseProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'On init event handler name.',
  example: 'OnComponentInit',
  type: PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], BaseProperties.prototype, "onInit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'On destroy event handler name.',
  example: 'OnComponentDestroy',
  type: PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], BaseProperties.prototype, "onDestroy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Component identifier',
  example: 'component1'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], BaseProperties.prototype, "id", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Is component visible',
  example: 'false'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Boolean)], BaseProperties.prototype, "visible", void 0);
class StyleProperties extends BaseProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s width.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "width", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s height.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "height", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s padding.',
  example: '10px 5px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "padding", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s margin.',
  example: '5px 3px 5px 10px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "margin", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s min width.',
  example: '10px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "min-width", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s min height.',
  example: '10px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "min-height", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s background.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "background", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s color.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "color", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s font weight.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "font-weight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s font size.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "font-size", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s font style.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "font-style", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Element\'s border.',
  example: '100%'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "border", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Css class.',
  example: 'btn-primary'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "class", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Css styles',
  example: 'overflow-x: hidden;'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], StyleProperties.prototype, "style", void 0);
class BindingProperties extends StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Path to data model property.',
  example: 'name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], BindingProperties.prototype, "binding", void 0);
class DataModelProperties extends BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Component Data Source.',
  example: '{{responseContext}}/dataset'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], DataModelProperties.prototype, "dataSource", void 0);
class ContainerProperties extends StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_descriptor__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Array of children ui Models',
  example: '[{type: \'text\', itemProperties: {}}]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)], ContainerProperties.prototype, "children", void 0);
const StylePropertiesList = ['width', 'height', 'padding', 'margin', 'min-height', 'min-width', 'background', 'color', 'font-size', 'font-weight', 'font-style', 'overflow'];

/***/ }),

/***/ 551:
/*!********************************************************!*\
  !*** ./projects/core/src/lib/services/core.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 9034);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class CoreService {
  static registerComponent(desc, version) {
    const {
      name,
      packageName,
      propertiesDescriptor
    } = desc;
    // @deprecated
    if (propertiesDescriptor) {
      propertiesDescriptor.forEach(prop => {
        _properties__WEBPACK_IMPORTED_MODULE_1__.controlProperties.set(`${name}:${prop[0]}`, prop[1]);
      });
    }
    const key = version ? `${name}:${version}` : name;
    CoreService.COMPONENTS_REGISTER.set(key, desc);
  }
  static getComponent(type) {
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      return CoreService.COMPONENTS_REGISTER.get(type).component;
    }
    throw new Error(`Component ${type} is not registered`);
  }
  static getComponentDescriptor(type, version) {
    if (version && CoreService.COMPONENTS_REGISTER.has(`${type}:${version}`)) {
      return CoreService.COMPONENTS_REGISTER.get(`${type}:${version}`);
    }
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      return CoreService.COMPONENTS_REGISTER.get(type);
    }
    throw new Error(`ComponentDescriptor ${type} is not registered`);
  }
  static getComponentProperties(type) {
    try {
      const desc = CoreService.getComponentDescriptor(type);
      return desc.itemProperties.prototype.properties;
    } catch (e) {
      throw e;
    }
  }
  static getListOfComponents() {
    return Array.from(CoreService.COMPONENTS_REGISTER.values());
  }
  static parseXMLModel(uiModelXml) {
    if (!uiModelXml) {
      return null;
    }
    const res = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.parseXmlString)(uiModelXml);
    if (res) {
      const type = Object.keys(res)[0];
      let xmlObj = res[type];
      if (typeof xmlObj === 'string' && xmlObj) {
        throw Error(`Invalid XML, please make sure file can't start with comment <!-- -->`);
      }
      if (!xmlObj) {
        xmlObj = {
          type
        };
      }
      if (typeof xmlObj === 'object') {
        xmlObj['#name'] = type;
        return CoreService.getUIModel((0,_utils__WEBPACK_IMPORTED_MODULE_0__.toXMLResult)(xmlObj));
      }
    }
  }
  static getUIModel(xmlRes) {
    const itemProperties = xmlRes.attrs;
    const type = xmlRes.type;
    if (itemProperties.disabled === 'true') {
      itemProperties.disabled = true;
    } else if (itemProperties.hasOwnProperty('disabled')) {
      itemProperties.disabled = null;
    }
    if (CoreService.COMPONENTS_REGISTER.has(type)) {
      const uiModel = {
        type,
        itemProperties
      };
      if (itemProperties.id) {
        uiModel.id = itemProperties.id;
      }
      try {
        const descr = CoreService.COMPONENTS_REGISTER.get(type);
        if (typeof descr.parseUIModel === 'function') {
          const typeUIModel = descr.parseUIModel(xmlRes);
          uiModel.itemProperties = Object.assign(Object.assign({}, itemProperties), typeUIModel.itemProperties);
          if (typeUIModel.children) {
            uiModel.children = typeUIModel.children;
          }
        }
      } catch (e) {
        console.error(e);
        throw new Error(`Error parsing <${type} ..> : ${e}`);
      }
      if (xmlRes.childNodes && !uiModel.children) {
        uiModel.children = xmlRes.childNodes.filter(n => n['#name'] !== '#comment').map(r => CoreService.getUIModel((0,_utils__WEBPACK_IMPORTED_MODULE_0__.toXMLResult)(r)));
      }
      return uiModel;
    } else {
      throw Error(`No component for tag ${type}`);
    }
  }
}
// eslint-disable-next-line @typescript-eslint/naming-convention
CoreService.COMPONENTS_REGISTER = new Map();
CoreService.ɵfac = function CoreService_Factory(t) {
  return new (t || CoreService)();
};
CoreService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreService,
  factory: CoreService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3477:
/*!************************************************************!*\
  !*** ./projects/core/src/lib/services/renderer.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RendererService": () => (/* binding */ RendererService)
/* harmony export */ });
/* harmony import */ var _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-dynamic-component */ 2583);
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.service */ 551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class RendererService {
  renderChildren(parentComponent) {
    var _a, _b;
    if (!parentComponent.containerRef || !parentComponent.uiModel) {
      return;
    }
    parentComponent.containerRef.clear();
    return (_b = (_a = parentComponent.uiModel) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.map(m => this.createComponent(parentComponent, m));
  }
  createComponent(parentComponent, uiModel, containerRef = parentComponent.containerRef, dataModel = parentComponent.dataModel) {
    try {
      const descriptor = _core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService.getComponentDescriptor(uiModel.type);
      const componentClass = descriptor.component;
      let component;
      if (descriptor.category === "HTML" /* Categories.HTML */) {
        const baseHtml = componentClass;
        component = new baseHtml(parentComponent.injector);
        component.dataModel = dataModel;
        component.uiModel = uiModel;
        component.create(containerRef.element.nativeElement);
      } else if (componentClass.prototype instanceof _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_0__.BaseDynamicComponent) {
        const componentRef = containerRef.createComponent(componentClass);
        component = componentRef.instance;
        component.dataModel = dataModel;
        component.uiModel = uiModel;
        component.create(componentRef.location.nativeElement);
        return component;
      }
      if (component) {
        component.element.classList.add('dc-element');
        uiModel.getComponent = () => component;
        component.changedDataModel.subscribe(evt => {
          parentComponent.changedDataModel.emit(evt);
        });
        component.eventHandlers.subscribe(evt => {
          if (parentComponent) {
            evt.rootUIModel = parentComponent.uiModel;
          }
          parentComponent.eventHandlers.emit(evt);
        });
        return component;
      } else {
        throw new Error('Not able to create component');
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to create component ${uiModel.type}`);
    }
  }
}
RendererService.ɵfac = function RendererService_Factory(t) {
  return new (t || RendererService)();
};
RendererService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: RendererService,
  factory: RendererService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2042:
/*!************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/button/button.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent),
/* harmony export */   "ButtonProperties": () => (/* binding */ ButtonProperties),
/* harmony export */   "buttonDescriptor": () => (/* binding */ buttonDescriptor),
/* harmony export */   "example": () => (/* binding */ example)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ButtonComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.type = 'button';
    this.disabled = null;
  }
  onClick(evt) {
    this.emitEvent(this.properties.onClick, evt);
    this.changedDataModel.emit(this.dataModel);
  }
  ngOnInit() {
    if (this.properties.type) {
      this.type = this.properties.type;
    }
    if (this.properties.disabled === true) {
      this.disabled = true;
    }
    return super.ngOnInit();
  }
}
ButtonComponent.ɵfac = /*@__PURE__*/function () {
  let ɵButtonComponent_BaseFactory;
  return function ButtonComponent_Factory(t) {
    return (ɵButtonComponent_BaseFactory || (ɵButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ButtonComponent)))(t || ButtonComponent);
  };
}();
ButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ButtonComponent,
  selectors: [["button"]],
  hostVars: 2,
  hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("type", ctx.type)("disabled", ctx.disabled);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 1,
  consts: [["vc", ""]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.properties.label, " ");
    }
  },
  encapsulation: 2
});
class ButtonProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Button label',
  example: 'Click me!'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], ButtonProperties.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Key for action that fires onclick',
  example: 'onBtnClick()',
  type: _properties__WEBPACK_IMPORTED_MODULE_1__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], ButtonProperties.prototype, "onClick", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Button type: button|submit|reset|link. Default: button',
  example: 'submit',
  defaultValue: 'button'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], ButtonProperties.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'It specifies that the button should be disabled.',
  example: 'true',
  defaultValue: 'false'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)], ButtonProperties.prototype, "disabled", void 0);
const example = {
  title: 'Basic button example',
  uiModel: `
  <section>
    <button class="btn btn-primary" type="button"><icon class="fa fa-search"></icon>Search</button>
    <button class="btn btn-primary" width="50%" margin="15px" padding="10px 5px 10px 0px" onClick="consoleLog()">Click</button>
    <button class="btn btn-secondary" disabled="true" onClick="consoleLog()" type="submit">Submit</button>
    <button class="btn btn-danger" display="none">Hidden</button>
  </section>
  `,
  scripts: `
  def consoleLog():
    print("test")
  `,
  dataModel: {}
};
const buttonDescriptor = {
  name: 'button',
  label: 'Button',
  packageName: 'core',
  category: "Basic" /* Categories.Basic */,
  description: 'Button component',
  itemProperties: ButtonProperties,
  component: ButtonComponent,
  example,
  parseUIModel(xmlRes) {
    const content = xmlRes.content;
    const itemProperties = {};
    if (typeof content === 'string') {
      itemProperties.label = content;
    }
    return {
      type: 'button',
      itemProperties
    };
  },
  defaultModel: `<button class="btn btn-primary">Click</button>`,
  propertiesDescriptor: [['type', {
    name: 'type',
    label: 'Type',
    category: _properties__WEBPACK_IMPORTED_MODULE_1__.PropertyCategories.Main,
    values: ['button', 'submit', 'reset']
  }]]
};

/***/ }),

/***/ 7055:
/*!******************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/container/container.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerComponent": () => (/* binding */ ContainerComponent),
/* harmony export */   "ContainerProperties": () => (/* binding */ ContainerProperties),
/* harmony export */   "containerDescriptor": () => (/* binding */ containerDescriptor),
/* harmony export */   "divDescriptor": () => (/* binding */ divDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ContainerComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {}
ContainerComponent.ɵfac = /*@__PURE__*/function () {
  let ɵContainerComponent_BaseFactory;
  return function ContainerComponent_Factory(t) {
    return (ɵContainerComponent_BaseFactory || (ɵContainerComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ContainerComponent)))(t || ContainerComponent);
  };
}();
ContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContainerComponent,
  selectors: [["dc-container"]],
  hostVars: 2,
  hostBindings: function ContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.display);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 1,
  consts: [["vc", ""]],
  template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\n", ctx.properties.text, "\n");
    }
  },
  styles: ["[_nghost-%COMP%]:not(.row):not(.input-group) {\n        display: block;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi91aS1jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7TUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0Om5vdCgucm93KTpub3QoLmlucHV0LWdyb3VwKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
class ContainerProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Text value',
  example: 'Information'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], ContainerProperties.prototype, "text", void 0);
const example = {
  title: 'Section example',
  uiModel: `
  <section>
    <section class="row align-items-center justify-content-between m-0" width="100%" height="100%" padding="8px">
      <text class="m-0" text-style="h1">Header 1</text>
      <text class="m-0" text-style="h2">Header 2</text>
      <button class="btn btn-secondary" onСlick="consoleLog" type="button">Click</button>
      <text class="m-0" background="red" text-style="h3">Header 3</text>
    </section>
    <section>Text</section>
  </section>
  `,
  dataModel: {}
};
function getParseFunction(tag) {
  return xmlRes => ({
    type: tag,
    itemProperties: {
      text: xmlRes.content
    }
  });
}
const containerDescriptor = {
  name: 'section',
  packageName: 'core',
  label: 'Container',
  category: "Containers" /* Categories.Containers */,
  description: 'layout component',
  itemProperties: ContainerProperties,
  component: ContainerComponent,
  example,
  parseUIModel: getParseFunction('section'),
  defaultModel: `<section class="d-flex"></section>`
};
const divDescriptor = {
  name: 'div',
  packageName: 'core',
  label: 'Container',
  category: "Containers" /* Categories.Containers */,
  description: 'layout component',
  itemProperties: ContainerProperties,
  component: ContainerComponent,
  parseUIModel: getParseFunction('div'),
  example: {
    title: 'Div container',
    uiModel: example.uiModel.replace(/<section/g, '<div').replace(/<\/section>/g, '</div>'),
    dataModel: {}
  },
  defaultModel: `<div class="col"></div>`
};

/***/ }),

/***/ 3833:
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/form/form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent),
/* harmony export */   "FormProperties": () => (/* binding */ FormProperties),
/* harmony export */   "formDescriptor": () => (/* binding */ formDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["form"];
class FormComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  onFormSubmit(evt) {
    const formData = new FormData(this.form.nativeElement);
    this.emitEvent(this.properties.onSubmit, {
      formData
    });
    // Trigger ui validation messages.
    this.form.nativeElement.querySelectorAll('input,textarea,select').forEach((el, i, list) => {
      el.focus();
      if (list.length - 1 === i) {
        el.blur();
      }
    });
  }
}
FormComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormComponent_BaseFactory;
  return function FormComponent_Factory(t) {
    return (ɵFormComponent_BaseFactory || (ɵFormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FormComponent)))(t || FormComponent);
  };
}();
FormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormComponent,
  selectors: [["dc-form"]],
  viewQuery: function FormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 1,
  consts: [[3, "ngStyle", "ngSubmit"], ["form", ""], ["vc", ""]],
  template: function FormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener($event) {
        return ctx.onFormSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](2, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.itemStyles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  encapsulation: 2
});
class FormProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Submit handler',
  example: 'onFormSubmit(form)',
  type: _properties__WEBPACK_IMPORTED_MODULE_1__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], FormProperties.prototype, "onSubmit", void 0);
const example = {
  title: 'Form example',
  uiModel: `
  <form class="flex-column w-50 mx-auto" onSubmit="onSave(form)">
    <label class="mb-0">User name</label><input name="username" class="form-control" required="true"/>
    <label class="mb-0">Email</label><input name="email" type="email" class="form-control" required="true"/>
    <button class="d-flex btn btn-secondary ml-auto my-1" type="submit">Save</button>
  </form>
  `,
  scripts: `
    def onSave(form):
      print(form)
  `,
  dataModel: {}
};
const formDescriptor = {
  name: 'form',
  packageName: 'core',
  label: 'Form',
  category: "Containers" /* Categories.Containers */,
  description: 'layout component',
  itemProperties: FormProperties,
  component: FormComponent,
  example,
  defaultModel: `<form class="d-flex"></form>`,
  propertiesDescriptor: [['method', {
    name: 'method',
    label: 'Method',
    category: _properties__WEBPACK_IMPORTED_MODULE_1__.PropertyCategories.Main,
    values: ['GET', 'POST', 'PUT', 'DELETE']
  }]]
};

/***/ }),

/***/ 6735:
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/icon/icon.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent),
/* harmony export */   "IconProperties": () => (/* binding */ IconProperties),
/* harmony export */   "iconDescriptor": () => (/* binding */ iconDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class IconComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.display = 'inline-block';
  }
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      this.fontSize = this.properties.size || '1rem';
    });
  }
  get iconClass() {
    return this.componentDataModel || this.properties.iconClass;
  }
}
IconComponent.ɵfac = /*@__PURE__*/function () {
  let ɵIconComponent_BaseFactory;
  return function IconComponent_Factory(t) {
    return (ɵIconComponent_BaseFactory || (ɵIconComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](IconComponent)))(t || IconComponent);
  };
}();
IconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: IconComponent,
  selectors: [["dc-icon-ui"]],
  hostVars: 4,
  hostBindings: function IconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.display)("font-size", ctx.fontSize);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function IconComponent_Template(rf, ctx) {},
  encapsulation: 2
});
class IconProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Icon size',
  example: '2rem'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], IconProperties.prototype, "size", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Icon class',
  example: 'fa fa-play'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], IconProperties.prototype, "iconClass", void 0);
const example = {
  title: 'Icon compoent example',
  uiModel: `
  <icon class="fa fa-play" padding="20px" size="2rem"/>
  `,
  dataModel: {}
};
const ICONS = ['fa fa-send', 'fa fa-play', 'fa fa-picture-o', 'fa fa-area-chart', 'fa fa-bank', 'fa fa-beer', 'fa fa-automobile', 'fa fa-bag', 'fa fa-book', 'fa fa-bell', 'fa fa-camera', 'fa fa-calendar', 'fa fa-user', 'fa fa-globe', 'fa fa-gift', 'fa fa-group', 'fa fa-gear', 'fa fa-info', 'fa fa-money', 'fa fa-print', 'fa fa-registered', 'fa fa-share', 'fa fa-shopping-card', 'fa fa-tags', 'fa fa-tasks', 'fa fa-star', 'fa fa-univarsity', 'fa fa-file', 'fa fa-ticket', 'fa fa-television', 'fa fa-suitcase', 'fa fa-server', 'fa fa-map', 'fa fa-leptop', 'fa fa-home', 'fa fa-hashtag', 'fa fa-clock-o'];
const iconDescriptor = {
  name: 'icon',
  packageName: 'core',
  label: 'Icon',
  category: "Basic" /* Categories.Basic */,
  description: 'Icon component',
  itemProperties: IconProperties,
  component: IconComponent,
  example,
  defaultModel: '<icon class="fa fa-play"/>',
  children: false
};

/***/ }),

/***/ 3460:
/*!**********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/input/input.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent),
/* harmony export */   "InputProperties": () => (/* binding */ InputProperties),
/* harmony export */   "inputDescriptor": () => (/* binding */ inputDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _components_form_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form-element-component */ 2897);
/* harmony import */ var _input_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.examples */ 5156);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _services_renderer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/renderer.service */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);










// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
class InputComponent extends _components_form_element_component__WEBPACK_IMPORTED_MODULE_1__.FormElementComponent {
  constructor(rendererService, injector, inputElement) {
    super(rendererService, injector);
    this.rendererService = rendererService;
    this.injector = injector;
    this.inputElement = inputElement;
    this.type = 'text';
    this.searchText$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  onInput(input) {
    if (!['radio', 'checkbox'].includes(this.type)) {
      this.setValue(input, this.properties.onInput);
      this.searchText$.next(input.value);
    }
  }
  onChange(input) {
    this.setValue(input, this.properties.onChange);
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      this.type = this.properties.type || 'text';
      this.multiple = this.properties.multiple || undefined;
      this.step = this.properties.step || undefined;
      this.updateValue();
      if (this.properties.autocomplete) {
        const input = this.inputElement.nativeElement;
        input.setAttribute('autocomplete', 'on');
        this.dataList = document.createElement('DATALIST');
        this.dataList.id = `list-${this.name}`;
        input.setAttribute('list', this.dataList.id);
        input.parentNode.insertBefore(this.dataList, input);
        this.setList(this.properties.list);
      }
      this.searchText$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.debounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)()).subscribe(data => this.emitEvent(this.properties.debouncedInput, data));
    });
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngDoCheck() {
    this.updateValue();
  }
  setList(list) {
    if (this.properties.autocomplete) {
      if (!list) {
        this.dataList.innerHTML = '';
      } else {
        this.dataList.innerHTML = list.map(v => `<option value="${v}">`).join('');
      }
      this.properties.list = list;
    }
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnDestroy() {
    const _super = Object.create(null, {
      ngOnDestroy: {
        get: () => super.ngOnDestroy
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      return _super.ngOnDestroy.call(this);
    });
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnChanges(changes) {
    const _super = Object.create(null, {
      ngOnChanges: {
        get: () => super.ngOnChanges
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnChanges.call(this, changes);
      if (changes.dataModel) {
        this.updateValue();
      }
    });
  }
  get debounceTime() {
    return this.properties.debounceTime ? parseInt(this.properties.debounceTime, 10) : 500;
  }
  updateValue() {
    const val = this.componentDataModel;
    if (val !== this.modelValue) {
      this.modelValue = val;
      if (this.type === 'date' && val instanceof Date) {
        this.value = val.toISOString().slice(0, 10);
        this.inputElement.nativeElement.value = this.value;
      } else if (this.type === 'radio') {
        this.value = this.properties.value;
        this.checked = (val && val.toString()) === this.value ? true : undefined;
      } else if (this.type === 'checkbox') {
        this.value = this.properties.value;
        this.checked = val ? true : undefined;
      } else {
        this.value = val;
        this.inputElement.nativeElement.value = val;
      }
    }
  }
  setValue(input, prop) {
    if (this.properties.type === 'checkbox') {
      this.componentDataModel = input.checked;
      this.emitEvent(prop, input.checked);
    } else if (this.properties.type === 'radio') {
      if (input.checked) {
        this.componentDataModel = input.value;
        this.emitEvent(prop, this.properties.value);
      }
    } else {
      this.componentDataModel = input.value;
      this.emitEvent(prop, input.value);
    }
    this.changedDataModel.emit(this.dataModel);
  }
}
InputComponent.ɵfac = function InputComponent_Factory(t) {
  return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_renderer_service__WEBPACK_IMPORTED_MODULE_3__.RendererService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};
InputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: InputComponent,
  selectors: [["input"]],
  hostVars: 4,
  hostBindings: function InputComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function InputComponent_input_HostBindingHandler($event) {
        return ctx.onInput($event.target);
      })("change", function InputComponent_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("type", ctx.type)("step", ctx.step)("checked", ctx.checked)("multiple", ctx.multiple);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function InputComponent_Template(rf, ctx) {},
  encapsulation: 2
});
class InputProperties extends _components_form_element_component__WEBPACK_IMPORTED_MODULE_1__.FormElementProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Input type',
  example: 'text'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], InputProperties.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Whether to allow multiple values.',
  example: 'true'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)], InputProperties.prototype, "multiple", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Specifies the granularity that the value must adhere to',
  example: '2'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)], InputProperties.prototype, "step", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'On change event handler name.',
  example: 'onChange',
  type: _properties__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], InputProperties.prototype, "onChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Datalist array',
  example: '["option1" ,"option2"]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Array)], InputProperties.prototype, "list", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'debounceTime in miliseconds. Used only with `typeahead` event handler. Default is 500 (miliseconds)',
  example: '500',
  type: _properties__WEBPACK_IMPORTED_MODULE_0__.PropTypes.PROPERTY
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], InputProperties.prototype, "debounceTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'debouncedInput event handler.',
  example: 'onDebouncedInput()',
  type: _properties__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], InputProperties.prototype, "debouncedInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Input initial value.',
  example: 'option-1',
  type: _properties__WEBPACK_IMPORTED_MODULE_0__.PropTypes.PROPERTY
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], InputProperties.prototype, "value", void 0);
const inputDescriptor = {
  name: 'input',
  label: 'Input field',
  packageName: 'core',
  category: "Basic" /* Categories.Basic */,
  description: 'Input component',
  itemProperties: InputProperties,
  component: InputComponent,
  example: _input_examples__WEBPACK_IMPORTED_MODULE_2__["default"],
  parseUIModel(xmlRes) {
    var _a;
    const itemProperties = Object.assign({
      readonly: xmlRes.attrs.readonly === 'true',
      list: (_a = xmlRes.attrs.list) === null || _a === void 0 ? void 0 : _a.split(',').map(o => o.trim())
    }, xmlRes.attrs);
    return {
      type: 'input',
      itemProperties
    };
  },
  defaultModel: `<input onInput="onInputHandler(name)" placeholder="Enter your name" binding="$.name"/>`,
  propertiesDescriptor: [['type', {
    name: 'type',
    label: 'Data Type',
    category: _properties__WEBPACK_IMPORTED_MODULE_0__.PropertyCategories.Main,
    values: ['text', 'number', 'email', 'file', 'url', 'date', 'time', 'datetime-local']
  }], ['required', {
    name: 'required',
    label: 'Required field',
    values: ['true']
  }]],
  children: false
};

/***/ }),

/***/ 5156:
/*!*********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/input/input.examples.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "example1": () => (/* binding */ example1),
/* harmony export */   "example2": () => (/* binding */ example2),
/* harmony export */   "example3": () => (/* binding */ example3)
/* harmony export */ });
const example1 = {
  title: 'Text input example',
  uiModel: `
  <div class="d-flex flex-column">

    <div class="form-group">
      <label class="col-form-label" width="80px">Name</label>
      <input onInput="onNameInput(name)" placeholder="Enter your name" binding="$.name"/>
    </div>

    <div class="form-group">
      <label class="col-form-label" width="80px">Last name</label>
      <input disabled="true" id="lastName" placeholder="Enter your last name" binding="$.lastName"/>
    </div>

    <div class="form-group">
      <label class="col-form-label" width="80px">Debounced Input</label>
      <input
        placeholder="Enter text here"
        binding="$.text"
        debouncedInput="onDebouncedInput(searchText)"
        debounceTime="2000"
        />
      <text binding="$.debouncedText" class="ml-2"></text>
    </div>

  </div>
  `,
  scripts: `
  def onNameInput(name):
    disabled = name == ""
    comp = getComponentById(rootUIModel, "lastName")
    comp.disabled = disabled or null # should set null not false

  async def onDebouncedInput():
    dataModel.debouncedText = searchText
  `,
  dataModel: {},
  description: 'Input "Last name" is disabled while input "Name" is empty.'
};
const example2 = {
  title: 'Checkbox example',
  uiModel: `
  <div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" binding="$.subscribed"/>
      <label class="form-check-label" for="subscribed" width="80px">Subscribe</label>
    </div>
  </div>
  `,
  dataModel: {},
  description: 'Checkbox value is binded to dataModel\'s <i>subscribed</i> property.'
};
const example3 = {
  title: 'Radio group example',
  uiModel: `
  <div class="d-flex flex-column">
    <div class="form-group form-check mt-5">
      <input id="opt1" type="radio" class="form-check-input" name="option" onChange="onSelect(val)" value="option-1"/>
      <label for="opt1" class="form-check-label" width="80px">Option 1</label>
    </div>
    <div class="form-group form-check">
      <input id="opt2" type="radio" class="form-check-input" name="option" onChange="onSelect(val)" value="option-2"/>
      <label for="opt2" class="form-check-label" width="80px">Option 2</label>
    </div>
    <div class="form-group form-check">
      <input id="opt3" type="radio" class="form-check-input" name="option" onChange="onSelect(val)" value="option-3"/>
      <label for="opt3" class="form-check-label" width="80px">Option 3</label>
    </div>
  </div>
  `,
  dataModel: {},
  scripts: `
  def onSelect():
    print(val)
    dataModel.selected = val
  `,
  description: 'You can choose one of 3 options.'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([example1, example2, example3]);

/***/ }),

/***/ 805:
/*!**********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/label/label.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelComponent": () => (/* binding */ LabelComponent),
/* harmony export */   "LabelProperties": () => (/* binding */ LabelProperties),
/* harmony export */   "labelDescriptor": () => (/* binding */ labelDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/text.component */ 4556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class LabelComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.display = 'inline-block';
  }
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      this.for = this.properties.for || undefined;
    });
  }
  get text() {
    return this.componentDataModel || this.properties.text;
  }
}
LabelComponent.ɵfac = /*@__PURE__*/function () {
  let ɵLabelComponent_BaseFactory;
  return function LabelComponent_Factory(t) {
    return (ɵLabelComponent_BaseFactory || (ɵLabelComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](LabelComponent)))(t || LabelComponent);
  };
}();
LabelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LabelComponent,
  selectors: [["label"]],
  hostVars: 3,
  hostBindings: function LabelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("for", ctx.for);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx.display);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  template: function LabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.text);
    }
  },
  styles: [".form-check-label[_nghost-%COMP%]    > label[_ngcontent-%COMP%] {\n      margin-bottom: 0;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi91aS1jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdC5mb3JtLWNoZWNrLWxhYmVsID4gbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
class LabelProperties extends _text_text_component__WEBPACK_IMPORTED_MODULE_2__.TextProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'The id of a labelable form-related element',
  example: 'checkboxId'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)], LabelProperties.prototype, "for", void 0);
const example = {
  title: 'Label compoent example',
  uiModel: `<label>Hello world</label>`,
  dataModel: {}
};
const labelDescriptor = {
  name: 'label',
  packageName: 'core',
  label: 'Label',
  category: "Basic" /* Categories.Basic */,
  description: 'Label component',
  itemProperties: LabelProperties,
  component: LabelComponent,
  example,
  parseUIModel(xmlRes) {
    const content = xmlRes.content;
    const itemProperties = {};
    if (typeof content === 'string') {
      if (content.startsWith('$.')) {
        itemProperties.binding = content;
      } else {
        itemProperties.text = content;
      }
    }
    return {
      type: 'label',
      itemProperties
    };
  },
  defaultModel: '<label class="label">Label</label>',
  children: false
};

/***/ }),

/***/ 6204:
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/link/link.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkComponent": () => (/* binding */ LinkComponent),
/* harmony export */   "LinkProperties": () => (/* binding */ LinkProperties),
/* harmony export */   "example": () => (/* binding */ example),
/* harmony export */   "linkDescriptor": () => (/* binding */ linkDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class LinkComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {}
LinkComponent.ɵfac = /*@__PURE__*/function () {
  let ɵLinkComponent_BaseFactory;
  return function LinkComponent_Factory(t) {
    return (ɵLinkComponent_BaseFactory || (ɵLinkComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LinkComponent)))(t || LinkComponent);
  };
}();
LinkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LinkComponent,
  selectors: [["dc-link"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 4,
  consts: [[3, "ngStyle", "href"]],
  template: function LinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.itemStyles)("href", ctx.properties.href, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx.properties.target || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.properties.label);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: ["a[_ngcontent-%COMP%] {\n      color: inherit;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi91aS1jb21wb25lbnRzL2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsY0FBYztJQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGEge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});
class LinkProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Link label',
  example: 'Click me!'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], LinkProperties.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Link href used in case of type=link.',
  example: 'url/to/site'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], LinkProperties.prototype, "href", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'The target attribute specifies where to open the linked document.',
  example: '_blank'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], LinkProperties.prototype, "target", void 0);
const example = {
  title: 'Basic link example',
  uiModel: `
  <div class="row align-items-center">
    <link class="btn btn-primary mr-2" href="https://falconsoft.github.io/ngx-dynamic-components/components/core/button">Button</link>
    <link target="_blank" disabled="true" href="https://www.google.com/">Google</link>
  </div>
  `,
  dataModel: {}
};
const linkDescriptor = {
  name: 'link',
  label: 'Link',
  packageName: 'core',
  category: "Basic" /* Categories.Basic */,
  description: 'Link component',
  itemProperties: LinkProperties,
  component: LinkComponent,
  example,
  parseUIModel(xmlRes) {
    const content = xmlRes.content;
    const itemProperties = {};
    if (typeof content === 'string') {
      itemProperties.label = content;
    }
    return {
      type: 'link',
      itemProperties: {
        label: content
      }
    };
  },
  defaultModel: '<link target="_blank" href="https://www.google.com/">Google</link>'
};

/***/ }),

/***/ 7234:
/*!**********************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/radio-group/radio-group.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroupComponent": () => (/* binding */ RadioGroupComponent),
/* harmony export */   "RadioGroupProperties": () => (/* binding */ RadioGroupProperties),
/* harmony export */   "example": () => (/* binding */ example),
/* harmony export */   "radioGroupDescriptor": () => (/* binding */ radioGroupDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ 9034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label/label.component */ 805);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/input.component */ 3460);








function RadioGroupComponent_ng_container_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r2.getId(option_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r1.label);
  }
}
function RadioGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RadioGroupComponent_ng_container_0_label_2_Template, 2, 2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RadioGroupComponent_ng_container_0_Template_input_change_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const option_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.onChange(option_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", option_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r0.properties.binding)("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", ctx_r0.getId(option_r1.value));
  }
}
class RadioGroupComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_1__.BaseUIComponent {
  onChange(option) {
    this.componentDataModel = option.value;
    this.changedDataModel.emit(this.dataModel);
    this.emitEvent(this.properties.onChange);
  }
  getId(val) {
    const selectKey = this.uiModel.id || this.properties.binding;
    return `select-${selectKey || ''}-option-${val}`;
  }
  get options() {
    const src = this.properties.itemsSource;
    if (Array.isArray(src)) {
      return src;
    }
    if (typeof src === 'string' && src.startsWith('$.')) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.queryValue)(this.dataModel, src);
    }
  }
}
RadioGroupComponent.ɵfac = /*@__PURE__*/function () {
  let ɵRadioGroupComponent_BaseFactory;
  return function RadioGroupComponent_Factory(t) {
    return (ɵRadioGroupComponent_BaseFactory || (ɵRadioGroupComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](RadioGroupComponent)))(t || RadioGroupComponent);
  };
}();
RadioGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RadioGroupComponent,
  selectors: [["dc-radio-group"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-between"], ["class", "my-0 mr-2", 3, "for", 4, "ngIf"], ["type", "radio", 3, "name", "value", "change"], [1, "my-0", "mr-2", 3, "for"]],
  template: function RadioGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RadioGroupComponent_ng_container_0_Template, 4, 4, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.options);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _label_label_component__WEBPACK_IMPORTED_MODULE_3__.LabelComponent, _input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent],
  styles: ["label.right[_ngcontent-%COMP%], label.bottom[_ngcontent-%COMP%] {\n  order: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9zdHlsZXMvbGFiZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsLnJpZ2h0LCBsYWJlbC5ib3R0b20ge1xyXG4gIG9yZGVyOiAxO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
class RadioGroupProperties extends _properties__WEBPACK_IMPORTED_MODULE_0__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Radio group options or binding to dataModel.',
  example: '[{label: "One", value: 1}]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:type", Object)], RadioGroupProperties.prototype, "itemsSource", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'On change event handler name.',
  example: 'onSelect',
  type: _properties__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:type", String)], RadioGroupProperties.prototype, "onChange", void 0);
const example = {
  title: 'Radio group example',
  uiModel: `
  <div>
    <radio-group class="d-flex flex-column mr-4" binding="$.color">
      <option value="white">White</option>
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </radio-group>
    <radio-group itemsSource="$.genderOptions" binding="$.gender"></radio-group>
  </div>
  `,
  dataModel: {
    genderOptions: [{
      label: 'Man',
      value: 'm'
    }, {
      label: 'Woman',
      value: 'w'
    }]
  }
};
const radioGroupDescriptor = {
  name: 'radio-group',
  label: 'Single choice boxes',
  packageName: 'core',
  category: "Basic" /* Categories.Basic */,
  description: 'Radio group component',
  itemProperties: RadioGroupProperties,
  component: RadioGroupComponent,
  example,
  parseUIModel(xmlRes) {
    const itemProperties = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => ({
        label: r._,
        value: r.$.value
      }));
      xmlRes.childNodes = null;
    }
    return {
      type: 'radio-group',
      itemProperties
    };
  },
  defaultModel: '<radio-group itemsSource="$.options" binding="$.radioValue"></radio-group>',
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Radio option value'
    }]
  }]
};

/***/ }),

/***/ 9578:
/*!*********************************************************!*\
  !*** ./projects/core/src/lib/ui-components/register.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS_LIST": () => (/* binding */ COMPONENTS_LIST),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "registerComponents": () => (/* binding */ registerComponents)
/* harmony export */ });
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/core.service */ 551);
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text/text.component */ 4556);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button.component */ 2042);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ 3460);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/icon.component */ 6735);
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textarea/textarea.component */ 6201);
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/container.component */ 7055);
/* harmony import */ var _link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/link.component */ 6204);
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./label/label.component */ 805);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ 3833);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select/select.component */ 5748);
/* harmony import */ var _html_elements_a_a_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../html-elements/a/a.component */ 3870);
/* harmony import */ var _html_elements_ul_ul_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../html-elements/ul/ul.element */ 3876);
/* harmony import */ var _html_elements_li_li_element__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../html-elements/li/li.element */ 7389);
/* harmony import */ var _html_elements_ol_ol_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../html-elements/ol/ol.element */ 3439);
/* harmony import */ var _html_elements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../html-elements */ 7675);
/* harmony import */ var _repeater_repeater_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./repeater/repeater.component */ 3110);

















const COMPONENTS_LIST = [_container_container_component__WEBPACK_IMPORTED_MODULE_6__.containerDescriptor, _container_container_component__WEBPACK_IMPORTED_MODULE_6__.divDescriptor, _form_form_component__WEBPACK_IMPORTED_MODULE_9__.formDescriptor, _repeater_repeater_component__WEBPACK_IMPORTED_MODULE_16__.repeaterDescriptor, _text_text_component__WEBPACK_IMPORTED_MODULE_1__.textDescriptor, _label_label_component__WEBPACK_IMPORTED_MODULE_8__.labelDescriptor, _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__.iconDescriptor, _input_input_component__WEBPACK_IMPORTED_MODULE_3__.inputDescriptor, _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__.textareaDescriptor, _button_button_component__WEBPACK_IMPORTED_MODULE_2__.buttonDescriptor, _link_link_component__WEBPACK_IMPORTED_MODULE_7__.linkDescriptor, _select_select_component__WEBPACK_IMPORTED_MODULE_10__.selectDescriptor, _html_elements_a_a_component__WEBPACK_IMPORTED_MODULE_11__.aDescriptor, _html_elements_ul_ul_element__WEBPACK_IMPORTED_MODULE_12__.ulDescriptor, _html_elements_ol_ol_element__WEBPACK_IMPORTED_MODULE_14__.olDescriptor, _html_elements_li_li_element__WEBPACK_IMPORTED_MODULE_13__.liDescriptor, ..._html_elements__WEBPACK_IMPORTED_MODULE_15__.htmlDescriptors];
// Register components.
function registerComponents() {
  COMPONENTS_LIST.forEach(component => _services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService.registerComponent(component));
}
function getCategories() {
  const categories = COMPONENTS_LIST.reduce((map, desc) => {
    map[desc.category] = map[desc.category] || [];
    map[desc.category].push(desc);
    return map;
  }, {});
  return Object.entries(categories).map(([key, val]) => ({
    name: key,
    components: val,
    packageName: 'core'
  }));
}

/***/ }),

/***/ 3110:
/*!****************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/repeater/repeater.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeaterComponent": () => (/* binding */ RepeaterComponent),
/* harmony export */   "RepeaterProperties": () => (/* binding */ RepeaterProperties),
/* harmony export */   "repeaterDescriptor": () => (/* binding */ repeaterDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/core.service */ 551);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ 9034);
/* harmony import */ var _repeater_examples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repeater.examples */ 1584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









const _c0 = ["vc"];
function RepeaterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0, null, 1);
  }
}
class RepeaterComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.display = undefined;
  }
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      this.childUIModel = _services_core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService.getUIModel((0,_utils__WEBPACK_IMPORTED_MODULE_3__.toXMLResult)(this.properties.childUIModel));
      const dataList = this.dataList;
      if (this.childUIModel) {
        this.vContainers.forEach((vc, i) => {
          this.rendererService.createComponent(this, this.childUIModel, vc, dataList[i]);
        });
      }
    });
  }
  get dataList() {
    const src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.queryValue)(this.dataModel, src);
    }
    return [];
  }
  getDataModel(item, index) {
    return Object.assign(Object.assign({}, this.dataModel), {
      _item: item,
      _index: index
    });
  }
  onDataModelChanged(evt, item) {
    const src = this.properties.itemsSource;
    if (typeof src === 'string' && src.startsWith('$.')) {
      const list = this.dataList;
      // eslint-disable-next-line no-underscore-dangle
      list.splice(list.indexOf(item), 1, evt._item);
    }
    this.changedDataModel.emit(this.dataModel);
  }
}
RepeaterComponent.ɵfac = /*@__PURE__*/function () {
  let ɵRepeaterComponent_BaseFactory;
  return function RepeaterComponent_Factory(t) {
    return (ɵRepeaterComponent_BaseFactory || (ɵRepeaterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](RepeaterComponent)))(t || RepeaterComponent);
  };
}();
RepeaterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RepeaterComponent,
  selectors: [["dc-repeater"]],
  viewQuery: function RepeaterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.vContainers = _t);
    }
  },
  hostVars: 2,
  hostBindings: function RepeaterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.display);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["vc", ""]],
  template: function RepeaterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RepeaterComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  styles: ["[_nghost-%COMP%]:not(.row):not(.input-group) {\n        display: block;\n      }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2NvcmUvc3JjL2xpYi91aS1jb21wb25lbnRzL3JlcGVhdGVyL3JlcGVhdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxjQUFjO01BQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdDpub3QoLnJvdyk6bm90KC5pbnB1dC1ncm91cCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});
class RepeaterProperties extends _properties__WEBPACK_IMPORTED_MODULE_2__.StyleProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_2__.propDescription)({
  description: 'Select options or binding to dataModel.',
  example: '$.dataList'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], RepeaterProperties.prototype, "itemsSource", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_2__.propDescription)({
  description: 'Child UI Model.',
  example: '$.dataList'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], RepeaterProperties.prototype, "childUIModel", void 0);
function repeaterParser(xmlRes) {
  var _a;
  const uiModel = {
    type: 'repeater',
    itemProperties: {
      itemsSource: xmlRes.attrs.itemsSource,
      childUIModel: (_a = xmlRes.childNodes) === null || _a === void 0 ? void 0 : _a[0]
    }
  };
  return uiModel;
}
const repeaterDescriptor = {
  name: 'repeater',
  packageName: 'core',
  label: 'Repeater',
  category: "Containers" /* Categories.Containers */,
  description: 'Repeater component',
  itemProperties: RepeaterProperties,
  component: RepeaterComponent,
  example: _repeater_examples__WEBPACK_IMPORTED_MODULE_4__["default"],
  parseUIModel: repeaterParser,
  defaultModel: `<repeater class="d-flex" itemsSource="$.dataList"></repeater>`
};

/***/ }),

/***/ 1584:
/*!***************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/repeater/repeater.examples.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const example = {
  title: 'Repeater example',
  uiModel: `
  <div class="p-2">
    <h3 class="row">Todo List</h3>
    <div class="row w-100 align-items-center mb-3">
      <input class="form-control col" placeholder="Enter todo" binding="$.item"/>
      <button class="btn btn-secondary col-auto mx-2" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto" onClick="removeLast()" type="button">Remove Last</button>
    </div>
    <repeater class="row" itemsSource="$.dataList">
      <div class="col-12 mb-2">
        <text class="col-9" text-style="h4">$._item.item</text>
        <button class="btn btn-danger col-auto" onClick="remove($._index)" type="button">x</button>
      </div>
    </repeater>
  </div>
  `,
  dataModel: {
    dataList: [{
      item: 'learn JS'
    }, {
      item: 'learn TS'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    "item": dataModel.item
  })

def removeLast():
  dataModel.dataList.pop()

def remove(_item):
  index = dataModel.dataList.indexOf(_item)
  dataModel.dataList.splice(index, 1)
  `
};
const inputExample = {
  title: 'Repeater input example',
  uiModel: `
  <div class="p-2">
    <h3 class="row">Names</h3>
    <div class="row w-100 align-items-center mb-3">
      <button class="btn btn-success col-auto" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto mx-2" onClick="removeLast()" type="button">Remove Last</button>
      <button class="btn btn-secondary col-auto" onClick="printDataModel()" type="button">Print DataModel</button>
    </div>
    <repeater class="row" itemsSource="$.dataList">
      <input class="form-control" binding="$.name"/>
    </repeater>
  </div>
  `,
  dataModel: {
    dataList: [{
      name: 'John'
    }, {
      name: 'Jane'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    name: ''
  })

def removeLast():
  dataModel.dataList.pop()

def printDataModel():
  print(dataModel)
  `
};
const selectExample = {
  title: 'Repeater select example',
  uiModel: `
  <div class="p-2">
    <h3 class="row">Countries</h3>
    <div class="row w-100 align-items-center mb-3">
      <button class="btn btn-success col-auto" onClick="addItem()" type="button">Add</button>
      <button class="btn btn-danger col-auto mx-2" onClick="removeLast()" type="button">Remove Last</button>
      <button class="btn btn-secondary col-auto" onClick="printDataModel()" type="button">Print DataModel</button>
    </div>
    <repeater class="row" itemsSource="$.dataList">
      <select class="form-control" width="300px" itemsSource="$.countries" binding="$._item.country"></select>
    </repeater>
  </div>
  `,
  dataModel: {
    countries: ['US', 'UK', 'France', 'Ukraine', 'Germany'],
    dataList: [{
      country: 'US'
    }, {
      country: 'UK'
    }]
  },
  scripts: `def addItem():
  dataModel.dataList.push({
    country: ''
  })

def removeLast():
  dataModel.dataList.pop()

def printDataModel():
  print(dataModel)
  `
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([example, inputExample, selectExample]);

/***/ }),

/***/ 5748:
/*!************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/select/select.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent),
/* harmony export */   "SelectProperties": () => (/* binding */ SelectProperties),
/* harmony export */   "example": () => (/* binding */ example),
/* harmony export */   "selectDescriptor": () => (/* binding */ selectDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ 9034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function SelectComponent_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", option_r1.value === ctx_r0.value)("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r1.label);
  }
}
class SelectComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  onSelect(select) {
    this.componentDataModel = select.value;
    this.emitEvent(this.properties.onSelect, this.optionsList.find(o => o.value === select.value));
    this.changedDataModel.emit(this.dataModel);
  }
  ngDoCheck() {
    if (this.componentDataModel !== this.value) {
      this.value = this.componentDataModel;
    }
  }
  get selectStyles() {
    if (this.properties.selectHeight) {
      return {
        height: this.properties.selectHeight
      };
    }
    return null;
  }
  get options() {
    const src = this.properties.itemsSource;
    if (this.optionsList && typeof src === 'object' && src === this.src) {
      return this.optionsList;
    }
    let list;
    if (Array.isArray(src)) {
      list = src;
    }
    if (typeof src === 'string' && src.startsWith('$.')) {
      list = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.queryValue)(this.dataModel, src);
    }
    if (list) {
      const labelProp = this.properties.labelProp || 'label';
      const valueProp = this.properties.valueProp || 'value';
      list = list.map(o => ({
        label: typeof o === 'string' ? o : o[labelProp],
        value: typeof o === 'string' ? o : o[valueProp],
        data: o
      }));
    } else {
      list = list || [];
    }
    this.src = src;
    if (JSON.stringify(list) !== JSON.stringify(this.optionsList)) {
      this.optionsList = list;
    }
    return this.optionsList;
  }
}
SelectComponent.ɵfac = /*@__PURE__*/function () {
  let ɵSelectComponent_BaseFactory;
  return function SelectComponent_Factory(t) {
    return (ɵSelectComponent_BaseFactory || (ɵSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SelectComponent)))(t || SelectComponent);
  };
}();
SelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SelectComponent,
  selectors: [["select"]],
  hostVars: 1,
  hostBindings: function SelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SelectComponent_change_HostBindingHandler($event) {
        return ctx.onSelect($event.target);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("value", ctx.value);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 1,
  consts: [[3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"]],
  template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SelectComponent_option_1_Template, 2, 3, "option", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.options);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
  encapsulation: 2
});
class SelectProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Select options or binding to dataModel.',
  example: '[{label: "One", value: 1}]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], SelectProperties.prototype, "itemsSource", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Select height.',
  example: '30px'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], SelectProperties.prototype, "selectHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'On Select handler name.',
  example: 'onCountrySelect',
  type: _properties__WEBPACK_IMPORTED_MODULE_1__.PropTypes.EVENT
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], SelectProperties.prototype, "onSelect", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Label property.',
  example: 'name'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], SelectProperties.prototype, "labelProp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Value property.',
  example: 'id'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], SelectProperties.prototype, "valueProp", void 0);
const example = {
  uiModel: `
    <section class="flex-column">
      <section class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <select class="form-control" onSelect="countryChanged(selectedItem)" width="300px" binding="$.country">
          <option>Select country</option>
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </select>
      </section>
      <section class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <select class="form-control" width="300px" itemsSource="$.cities" binding="$.city"></select>
      </section>
    </section>
  `,
  dataModel: {},
  scripts: `
  # Evaluated with JSPython https://jspython.dev/

  def countryChanged():
    dataModel.city = null

    if selectedItem?.value == "uk":
      dataModel.cities = [
        {label: "Select city", value: null},
        {label: "London", value: "lon"},
        {label: "Liverpool", value: "liv"}
      ]

    if selectedItem?.value == "ua":
      dataModel.cities = [
        {label: "Select city", value: null},
        {label: "Kyiv", value: "kyiv"},
        {label: "Lviv", value: "lviv"}
      ]

  `,
  title: 'Basic select example'
};
const selectDescriptor = {
  name: 'select',
  label: 'UI Select Input',
  packageName: 'core',
  category: "Basic" /* Categories.Basic */,
  description: 'Select component',
  itemProperties: SelectProperties,
  component: SelectComponent,
  example,
  parseUIModel(xmlRes) {
    const itemProperties = {};
    if (!xmlRes.attrs.itemsSource && xmlRes.childNodes) {
      itemProperties.itemsSource = xmlRes.childNodes.map(r => ({
        label: r._,
        value: r.$ && r.$.hasOwnProperty('value') ? r.$.value : r._
      }));
      xmlRes.childNodes = null;
    }
    return {
      type: 'select',
      itemProperties
    };
  },
  defaultModel: `<select width="100px" itemsSource="$.list" binding="$.value"></select>`,
  propertiesDescriptor: [['selectHeight', {
    name: 'selectHeight',
    label: 'Select Height',
    category: _properties__WEBPACK_IMPORTED_MODULE_1__.PropertyCategories.Layout
  }]],
  children: [{
    tag: 'option',
    properties: [{
      name: 'value',
      label: 'Option value'
    }]
  }]
};

/***/ }),

/***/ 4556:
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/text/text.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextComponent": () => (/* binding */ TextComponent),
/* harmony export */   "TextProperties": () => (/* binding */ TextProperties),
/* harmony export */   "textDescriptor": () => (/* binding */ textDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-ui-component */ 8501);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function TextComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.text);
  }
}
function TextComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.text);
  }
}
function TextComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.text);
  }
}
function TextComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r3.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r3.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.text);
  }
}
function TextComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r4.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r4.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.text);
  }
}
function TextComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r5.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r5.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.text);
  }
}
function TextComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r6.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.text);
  }
}
function TextComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r7.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.text);
  }
}
function TextComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r8.txtClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r8.itemStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.text);
  }
}
class TextComponent extends _components_base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUIComponent {
  constructor() {
    super(...arguments);
    this.display = 'inline-block';
  }
  get txtStyle() {
    return this.properties['text-style'];
  }
  get txtClass() {
    return this.properties['text-style'] + ' ' + (this.properties.class || '');
  }
  get text() {
    const val = this.componentDataModel;
    return typeof val === 'undefined' ? this.properties.text : val;
  }
}
TextComponent.ɵfac = /*@__PURE__*/function () {
  let ɵTextComponent_BaseFactory;
  return function TextComponent_Factory(t) {
    return (ɵTextComponent_BaseFactory || (ɵTextComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TextComponent)))(t || TextComponent);
  };
}();
TextComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TextComponent,
  selectors: [["dc-text"]],
  hostVars: 2,
  hostBindings: function TextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.display);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵHostDirectivesFeature"]([_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag])],
  decls: 10,
  vars: 9,
  consts: [[3, "ngSwitch"], [3, "class", "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "class", "ngStyle", 4, "ngSwitchDefault"], [3, "ngStyle"]],
  template: function TextComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TextComponent_h1_1_Template, 2, 4, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TextComponent_h2_2_Template, 2, 4, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TextComponent_h3_3_Template, 2, 4, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TextComponent_h4_4_Template, 2, 4, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TextComponent_h5_5_Template, 2, 4, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TextComponent_h6_6_Template, 2, 4, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TextComponent_p_7_Template, 2, 2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TextComponent_ng_container_8_Template, 2, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TextComponent_span_9_Template, 2, 4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.txtStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault],
  encapsulation: 2
});
class TextProperties extends _properties__WEBPACK_IMPORTED_MODULE_1__.BindingProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Displays text data.',
  example: 'Text information'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], TextProperties.prototype, "text", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_1__.propDescription)({
  description: 'Text style text data.',
  example: 'h2'
})
// eslint-disable-next-line @typescript-eslint/naming-convention
, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)], TextProperties.prototype, "text-style", void 0);
const example = {
  title: 'Text compoent example',
  uiModel: `<div>
  <text text-style="h1">Hello world</text>
  <text text-style="h1">$.title</text>
  <text text-style="h1" binding="$.title2"></text>
</div>`,
  dataModel: {
    title: 'Binded title',
    title2: 'Binded title2'
  }
};
const textDescriptor = {
  name: 'text',
  packageName: 'core',
  label: 'Text',
  category: "Basic" /* Categories.Basic */,
  description: 'Text component',
  itemProperties: TextProperties,
  component: TextComponent,
  example,
  parseUIModel(xmlRes) {
    const content = xmlRes.content;
    const itemProperties = {};
    if (typeof content === 'string') {
      if (content.startsWith('$.')) {
        itemProperties.binding = content;
      } else {
        itemProperties.text = content;
      }
    }
    return {
      type: 'text',
      itemProperties
    };
  },
  children: false,
  propertiesDescriptor: [['text-style', {
    name: 'text-style',
    label: 'Text style',
    category: _properties__WEBPACK_IMPORTED_MODULE_1__.PropertyCategories.Main,
    values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4']
  }]],
  defaultModel: '<text text-style="h2">Hello world</text>'
};

/***/ }),

/***/ 6201:
/*!****************************************************************************!*\
  !*** ./projects/core/src/lib/ui-components/textarea/textarea.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaComponent": () => (/* binding */ TextareaComponent),
/* harmony export */   "TextareaProperties": () => (/* binding */ TextareaProperties),
/* harmony export */   "example": () => (/* binding */ example),
/* harmony export */   "textareaDescriptor": () => (/* binding */ textareaDescriptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../properties */ 6319);
/* harmony import */ var _components_form_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form-element-component */ 2897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
class TextareaComponent extends _components_form_element_component__WEBPACK_IMPORTED_MODULE_1__.FormElementComponent {
  onInput(txtArea) {
    this.componentDataModel = txtArea.value;
    this.emitEvent(this.properties.onInput, txtArea.value);
    this.changedDataModel.emit(this.dataModel);
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnInit() {
    const _super = Object.create(null, {
      ngOnInit: {
        get: () => super.ngOnInit
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnInit.call(this);
      this.cols = this.properties.cols || undefined;
      this.rows = this.properties.rows || undefined;
      this.value = this.componentDataModel;
    });
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngOnChanges(changes) {
    const _super = Object.create(null, {
      ngOnChanges: {
        get: () => super.ngOnChanges
      }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      yield _super.ngOnChanges.call(this, changes);
      if (changes.dataModel) {
        this.value = this.componentDataModel;
      }
    });
  }
  // eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
  ngDoCheck() {
    this.value = this.componentDataModel;
  }
}
TextareaComponent.ɵfac = /*@__PURE__*/function () {
  let ɵTextareaComponent_BaseFactory;
  return function TextareaComponent_Factory(t) {
    return (ɵTextareaComponent_BaseFactory || (ɵTextareaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](TextareaComponent)))(t || TextareaComponent);
  };
}();
TextareaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TextareaComponent,
  selectors: [["textarea"]],
  hostVars: 2,
  hostBindings: function TextareaComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TextareaComponent_input_HostBindingHandler($event) {
        return ctx.onInput($event.target);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("cols", ctx.cols)("rows", ctx.rows);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  template: function TextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
    }
  },
  encapsulation: 2
});
class TextareaProperties extends _components_form_element_component__WEBPACK_IMPORTED_MODULE_1__.FormElementProperties {}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'Number of rows in textarea',
  example: '5'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], TextareaProperties.prototype, "rows", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_properties__WEBPACK_IMPORTED_MODULE_0__.propDescription)({
  description: 'The visible width of the text control',
  example: '20'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)], TextareaProperties.prototype, "cols", void 0);
const example = {
  title: 'Text area example',
  uiModel: `
  <textarea binding="$.info" placeholder="Type information about yourself" rows="10"></textarea>
  `,
  dataModel: {
    info: 'Data model textarea value'
  }
};
const textareaDescriptor = {
  name: 'textarea',
  label: 'Text Area',
  packageName: 'core',
  category: "Basic" /* Categories.Basic */,
  description: 'Text area component',
  itemProperties: TextareaProperties,
  component: TextareaComponent,
  example,
  parseUIModel(xmlRes) {
    const itemProperties = {
      readonly: xmlRes.attrs.readonly === 'true'
    };
    return {
      type: 'textarea',
      itemProperties
    };
  },
  defaultModel: '<textarea binding="$.info" rows="5"></textarea>',
  children: false
};

/***/ }),

/***/ 4938:
/*!************************************************!*\
  !*** ./projects/core/src/lib/utils/helpers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatObjToJsonStr": () => (/* binding */ formatObjToJsonStr),
/* harmony export */   "getCssPath": () => (/* binding */ getCssPath),
/* harmony export */   "getItemByIndex": () => (/* binding */ getItemByIndex),
/* harmony export */   "getStringEventArgs": () => (/* binding */ getStringEventArgs),
/* harmony export */   "kebabStrToCamel": () => (/* binding */ kebabStrToCamel),
/* harmony export */   "kebabToCamelCase": () => (/* binding */ kebabToCamelCase),
/* harmony export */   "mapToObj": () => (/* binding */ mapToObj),
/* harmony export */   "parseArgFunction": () => (/* binding */ parseArgFunction),
/* harmony export */   "setFields": () => (/* binding */ setFields),
/* harmony export */   "toXMLResult": () => (/* binding */ toXMLResult)
/* harmony export */ });
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
function mapToObj(map, excludeKeys = []) {
  const obj = {};
  map.forEach((value, key) => {
    if (!excludeKeys.includes(key)) {
      obj[key] = value;
    }
  });
  return obj;
}
/** TODO: check if still used */
function getCssPath(el, parent) {
  if (el instanceof Element) {
    const path = [];
    while (el !== parent) {
      let selector = el.nodeName.toLowerCase();
      let sib = el;
      let nth = 1;
      while (sib && sib !== parent) {
        sib = sib.previousSibling;
        if (sib instanceof Element) {
          nth++;
        }
      }
      selector += `:nth-child(${nth})`;
      path.unshift(selector);
      el = el.parentNode;
    }
    return path.join(' > ');
  }
}
const kebabStrToCamel = s => s.replace(/([-][a-z])/ig, $1 => $1.toUpperCase().replace('-', ''));
function setFields(fields, data) {
  if (!fields) {
    return data;
  }
  return fields.reduce((res, field) => {
    if (Array.isArray(field)) {
      res[field[1]] = data[field[0]];
    } else {
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
function toXMLResult(xmlObj) {
  return {
    type: xmlObj['#name'],
    attrs: xmlObj.$ || {},
    childNodes: xmlObj.$$,
    content: xmlObj._
  };
}
/**
 * Parses function signature to function name and parameter.
 * @param funcSignature Function signature.
 */
function parseArgFunction(funcSignature = '') {
  const match = funcSignature.match(/(.{1,})\((.{0,})\)/);
  if (!match) {
    return [funcSignature];
  }
  return [match[1], ...match[2].split(',')];
}
function getStringEventArgs(eventName) {
  const [fName, fParam] = parseArgFunction(eventName);
  if (fParam && fParam.startsWith('\'') && fParam.endsWith('\'')) {
    return fParam.replace(/'/g, '');
  } else if (/^\d+(\.{0,1}\d+)?$/.test(fParam)) {
    return Number(fParam);
  }
}
function kebabToCamelCase(str) {
  return str === null || str === void 0 ? void 0 : str.replace(/-([a-z])/g, (s, char) => char.toUpperCase());
}

/***/ }),

/***/ 9034:
/*!**********************************************!*\
  !*** ./projects/core/src/lib/utils/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatObjToJsonStr": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.formatObjToJsonStr),
/* harmony export */   "getComponentById": () => (/* reexport safe */ _parsers__WEBPACK_IMPORTED_MODULE_0__.getComponentById),
/* harmony export */   "getCssPath": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.getCssPath),
/* harmony export */   "getItemByIndex": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.getItemByIndex),
/* harmony export */   "getStringEventArgs": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.getStringEventArgs),
/* harmony export */   "kebabStrToCamel": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.kebabStrToCamel),
/* harmony export */   "kebabToCamelCase": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.kebabToCamelCase),
/* harmony export */   "mapToObj": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.mapToObj),
/* harmony export */   "parseArgFunction": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.parseArgFunction),
/* harmony export */   "parseXmlString": () => (/* reexport safe */ _parsers__WEBPACK_IMPORTED_MODULE_0__.parseXmlString),
/* harmony export */   "parseXmlStringPromise": () => (/* reexport safe */ _parsers__WEBPACK_IMPORTED_MODULE_0__.parseXmlStringPromise),
/* harmony export */   "queryValue": () => (/* reexport safe */ _parsers__WEBPACK_IMPORTED_MODULE_0__.queryValue),
/* harmony export */   "setFields": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.setFields),
/* harmony export */   "setValue": () => (/* reexport safe */ _parsers__WEBPACK_IMPORTED_MODULE_0__.setValue),
/* harmony export */   "toXMLResult": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.toXMLResult)
/* harmony export */ });
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers */ 7039);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ 4938);



/***/ }),

/***/ 7039:
/*!************************************************!*\
  !*** ./projects/core/src/lib/utils/parsers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComponentById": () => (/* binding */ getComponentById),
/* harmony export */   "parseXmlString": () => (/* binding */ parseXmlString),
/* harmony export */   "parseXmlStringPromise": () => (/* binding */ parseXmlStringPromise),
/* harmony export */   "queryValue": () => (/* binding */ queryValue),
/* harmony export */   "setValue": () => (/* binding */ setValue)
/* harmony export */ });
/* harmony import */ var isomorphic_xml2js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-xml2js */ 918);

/**
 * Gets component from uiModel by id
 * @param uiModel UIModel.
 * @param id Component identifier.
 */
function getComponentById(uiModel, id) {
  function traverseUiModel(uModel, predicate) {
    var _a;
    if (predicate(uModel)) {
      return uModel;
    }
    if ((_a = uModel.children) === null || _a === void 0 ? void 0 : _a.length) {
      for (const chileModel of uModel.children) {
        const res = traverseUiModel(chileModel, predicate);
        if (res) {
          return res;
        }
      }
    }
    return null;
  }
  const componentUIModel = traverseUiModel(uiModel, uim => uim.id === id);
  return componentUIModel === null || componentUIModel === void 0 ? void 0 : componentUIModel.getComponent();
}
/**
 * A helper method that sets value based on path.
 * e.g. setValue({}, 'obj.prop1.value', 22) will create a corresponding object and assign value = 22
 */
function setValue(objectValue, path, value) {
  if (!objectValue) {
    objectValue = {};
  }
  if (path === '$' || path === '') {
    Object.assign(objectValue, value);
    return;
  }
  if (path.startsWith('$.')) {
    path = path.substring(2);
  }
  const props = path.indexOf('/') > 0 ? path.split('/') : path.split('.');
  let res = objectValue;
  for (let i = 0; i < props.length - 1; i++) {
    if (typeof res[props[i]] !== 'object') {
      res[props[i]] = {};
    }
    res = res[props[i]];
  }
  res[props[props.length - 1]] = value;
}
/**
 * a helper methods that query JS Object for a value based on path. obj.subObject.value
 */
function queryValue(obj, path, defaultValue = null) {
  if (!path) {
    return defaultValue;
  }
  if (path === '$') {
    return obj;
  }
  if (path.startsWith('$.')) {
    path = path.substring(2);
  }
  path = path.replace('}', '');
  path = path.replace('{', '');
  const props = path.indexOf('/') > 0 ? path.split('/') : path.split('.');
  let res = obj;
  for (const p of props) {
    res = res[p];
    if (!res && res !== 0) {
      return res || defaultValue;
    }
  }
  return res;
}
function parseXmlString(xmlString) {
  let result = null;
  const ops = {
    explicitChildren: true,
    preserveChildrenOrder: true
  };
  isomorphic_xml2js__WEBPACK_IMPORTED_MODULE_0__.parseString(xmlString, ops, (err, res) => {
    if (res) {
      // need to clone result as it would mutate instance
      result = JSON.parse(JSON.stringify(res));
    }
    if (err) {
      // quite dirty way to get meaningful error message
      let msg = err.message.substring(err.message.indexOf('12px">') + 6);
      msg = msg.substring(0, msg.indexOf('</div>'));
      throw new Error(msg);
    }
  });
  return result;
}
function parseXmlStringPromise(xmlString) {
  return new Promise((s, e) => {
    const ops = {
      explicitChildren: true,
      preserveChildrenOrder: true
    };
    isomorphic_xml2js__WEBPACK_IMPORTED_MODULE_0__.parseString(xmlString, ops, (err, res) => {
      if (res) {
        // need to clone result as it would mutate instance
        const xmlObject = JSON.parse(JSON.stringify(res));
        return s(xmlObject);
      }
      if (err) {
        // quite dirty way to get meaningful error message
        let msg = err.message.substring(err.message.indexOf('12px">') + 6);
        msg = msg.substring(0, msg.indexOf('</div>'));
        return e(msg);
      }
      return null;
    });
  });
}

/***/ }),

/***/ 6870:
/*!*************************************************!*\
  !*** ./projects/core/src/lib/utils/renderer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "renderChildren": () => (/* binding */ renderChildren)
/* harmony export */ });
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/core.service */ 551);
/* harmony import */ var _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ngx-dynamic-component */ 9154);
/* harmony import */ var _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base-dynamic-component */ 2583);



function renderChildren(parentComponent) {
  var _a, _b;
  if (!parentComponent.containerRef || !parentComponent.uiModel) {
    return;
  }
  parentComponent.containerRef.clear();
  return (_b = (_a = parentComponent.uiModel) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.map(m => createComponent(parentComponent, m));
}
function createComponent(parentComponent, uiModel, containerRef = parentComponent.containerRef, dataModel = parentComponent.dataModel) {
  try {
    const descriptor = _services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService.getComponentDescriptor(uiModel.type);
    const componentClass = descriptor.component;
    let component;
    if (descriptor.category === "HTML" /* Categories.HTML */) {
      const baseHtml = componentClass;
      component = new baseHtml(parentComponent.injector);
      component.dataModel = dataModel;
      component.uiModel = uiModel;
      component.create(containerRef.element.nativeElement);
    } else if (componentClass.prototype instanceof _components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_2__.BaseDynamicComponent) {
      const componentRef = containerRef.createComponent(componentClass);
      component = componentRef.instance;
      component.dataModel = dataModel;
      component.uiModel = uiModel;
      component.create(componentRef.location.nativeElement);
      return component;
    }
    if (component) {
      component.element.classList.add('dc-element');
      uiModel.getComponent = () => component;
      component.changedDataModel.subscribe(evt => {
        parentComponent.changedDataModel.emit(evt);
      });
      component.eventHandlers.subscribe(evt => {
        if (parentComponent instanceof _components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_1__.NGXDynamicComponent) {
          evt.rootUIModel = parentComponent.uiModel;
        }
        parentComponent.eventHandlers.emit(evt);
      });
      return component;
    } else {
      throw new Error('Not able to create component');
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to create component ${uiModel.type}`);
  }
}

/***/ }),

/***/ 5887:
/*!*****************************************!*\
  !*** ./projects/core/src/public_api.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDynamicComponent": () => (/* reexport safe */ _lib_components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_1__.BaseDynamicComponent),
/* harmony export */   "BaseProperties": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.BaseProperties),
/* harmony export */   "BaseUIComponent": () => (/* reexport safe */ _lib_components_base_ui_component__WEBPACK_IMPORTED_MODULE_2__.BaseUIComponent),
/* harmony export */   "BindingProperties": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.BindingProperties),
/* harmony export */   "COMPONENTS_LIST": () => (/* reexport safe */ _lib_ui_components_register__WEBPACK_IMPORTED_MODULE_9__.COMPONENTS_LIST),
/* harmony export */   "ContainerProperties": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.ContainerProperties),
/* harmony export */   "CoreService": () => (/* reexport safe */ _lib_services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService),
/* harmony export */   "DataModelProperties": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.DataModelProperties),
/* harmony export */   "DesignerComponent": () => (/* reexport safe */ _lib_designer_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_12__.DesignerComponent),
/* harmony export */   "DesignerModule": () => (/* reexport safe */ _lib_designer_designer_module__WEBPACK_IMPORTED_MODULE_11__.DesignerModule),
/* harmony export */   "DesignerVisibility": () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_5__.DesignerVisibility),
/* harmony export */   "DynamicComponentsCoreModule": () => (/* reexport safe */ _lib_core_module__WEBPACK_IMPORTED_MODULE_4__.DynamicComponentsCoreModule),
/* harmony export */   "NGXDynamicComponent": () => (/* reexport safe */ _lib_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_3__.NGXDynamicComponent),
/* harmony export */   "NGXDynamicDesignerComponent": () => (/* reexport safe */ _lib_designer_components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_13__.NGXDynamicDesignerComponent),
/* harmony export */   "PropTypes": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.PropTypes),
/* harmony export */   "PropertyCategories": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.PropertyCategories),
/* harmony export */   "StyleProperties": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.StyleProperties),
/* harmony export */   "StylePropertiesList": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesList),
/* harmony export */   "TextComponent": () => (/* reexport safe */ _lib_ui_components_text_text_component__WEBPACK_IMPORTED_MODULE_10__.TextComponent),
/* harmony export */   "TextProperties": () => (/* reexport safe */ _lib_ui_components_text_text_component__WEBPACK_IMPORTED_MODULE_10__.TextProperties),
/* harmony export */   "UIModel": () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_5__.UIModel),
/* harmony export */   "controlProperties": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.controlProperties),
/* harmony export */   "createComponent": () => (/* reexport safe */ _lib_utils_renderer__WEBPACK_IMPORTED_MODULE_8__.createComponent),
/* harmony export */   "formatObjToJsonStr": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.formatObjToJsonStr),
/* harmony export */   "getCategories": () => (/* reexport safe */ _lib_ui_components_register__WEBPACK_IMPORTED_MODULE_9__.getCategories),
/* harmony export */   "getComponentById": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.getComponentById),
/* harmony export */   "getCssPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.getCssPath),
/* harmony export */   "getItemByIndex": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.getItemByIndex),
/* harmony export */   "getStringEventArgs": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.getStringEventArgs),
/* harmony export */   "kebabStrToCamel": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.kebabStrToCamel),
/* harmony export */   "kebabToCamelCase": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.kebabToCamelCase),
/* harmony export */   "mapToObj": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.mapToObj),
/* harmony export */   "parseArgFunction": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.parseArgFunction),
/* harmony export */   "parseXmlString": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.parseXmlString),
/* harmony export */   "parseXmlStringPromise": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.parseXmlStringPromise),
/* harmony export */   "propDescription": () => (/* reexport safe */ _lib_properties__WEBPACK_IMPORTED_MODULE_6__.propDescription),
/* harmony export */   "queryValue": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.queryValue),
/* harmony export */   "registerComponents": () => (/* reexport safe */ _lib_ui_components_register__WEBPACK_IMPORTED_MODULE_9__.registerComponents),
/* harmony export */   "renderChildren": () => (/* reexport safe */ _lib_utils_renderer__WEBPACK_IMPORTED_MODULE_8__.renderChildren),
/* harmony export */   "setFields": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.setFields),
/* harmony export */   "setValue": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.setValue),
/* harmony export */   "textDescriptor": () => (/* reexport safe */ _lib_ui_components_text_text_component__WEBPACK_IMPORTED_MODULE_10__.textDescriptor),
/* harmony export */   "toXMLResult": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_7__.toXMLResult)
/* harmony export */ });
/* harmony import */ var _lib_services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/services/core.service */ 551);
/* harmony import */ var _lib_components_base_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/base-dynamic-component */ 2583);
/* harmony import */ var _lib_components_base_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/base-ui-component */ 8501);
/* harmony import */ var _lib_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/ngx-dynamic-component */ 9154);
/* harmony import */ var _lib_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/core.module */ 1332);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models */ 3456);
/* harmony import */ var _lib_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/properties */ 6319);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/utils */ 9034);
/* harmony import */ var _lib_utils_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/utils/renderer */ 6870);
/* harmony import */ var _lib_ui_components_register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/ui-components/register */ 9578);
/* harmony import */ var _lib_ui_components_text_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/ui-components/text/text.component */ 4556);
/* harmony import */ var _lib_designer_designer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/designer/designer.module */ 7081);
/* harmony import */ var _lib_designer_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/designer/components/designer/designer.component */ 284);
/* harmony import */ var _lib_designer_components_ngx_dynamic_designer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/designer/components/ngx-dynamic-designer-component */ 9177);
/*
 * Public API Surface of core
 */















/***/ }),

/***/ 9429:
/*!******************************************************************************!*\
  !*** ./projects/tools/src/lib/components/add-dialog/add-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDialogComponent": () => (/* binding */ AddDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);





function AddDialogComponent_mat_list_0_mat_list_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDialogComponent_mat_list_0_mat_list_item_3_Template_mat_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.selectComponent(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.name, " - ", item_r3.description, " ");
  }
}
function AddDialogComponent_mat_list_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddDialogComponent_mat_list_0_mat_list_item_3_Template, 2, 2, "mat-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r1.components);
  }
}
class AddDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.categories = [];
  }
  ngOnInit() {
    this.categories = [];
  }
  selectComponent(item) {
    this.dialogRef.close(item.defaultModel || item.example.uiModel || {
      type: `${item.packageName}:${item.name}`,
      itemProperties: {},
      containerProperties: {}
    });
  }
}
AddDialogComponent.ɵfac = function AddDialogComponent_Factory(t) {
  return new (t || AddDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
AddDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AddDialogComponent,
  selectors: [["dc-add-dialog"]],
  decls: 1,
  vars: 1,
  consts: [["role", "list", "class", "components", 4, "ngFor", "ngForOf"], ["role", "list", 1, "components"], [1, "mat-h3"], ["role", "listitem", 3, "click", 4, "ngFor", "ngForOf"], ["role", "listitem", 3, "click"]],
  template: function AddDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddDialogComponent_mat_list_0_Template, 4, 2, "mat-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem],
  styles: ["[_nghost-%COMP%] {\n      min-width: 300px;\n      display: block;\n    }\n\n    mat-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      text-decoration: underline;\n    }\n\n    .components[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n      height: auto;\n      cursor: pointer;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Rvb2xzL3NyYy9saWIvY29tcG9uZW50cy9hZGQtZGlhbG9nL2FkZC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsU0FBUztNQUNULDBCQUEwQjtJQUM1Qjs7SUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO0lBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIG1hdC1saXN0IGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIC5jb21wb25lbnRzIG1hdC1saXN0LWl0ZW0ge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6527:
/*!**************************************************************************************!*\
  !*** ./projects/tools/src/lib/components/control-editor/control-editor.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlEditorComponent": () => (/* binding */ ControlEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-dialog/add-dialog.component */ 9429);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _properties_editor_properties_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties-editor/properties-editor.component */ 1214);









class ControlEditorComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.uiModelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.uiModelRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AddDialogComponent);
    dialogRef.afterClosed().subscribe(item => {
      this.uiModel.children.push(item);
      this.uiModelChanged.emit();
    });
  }
  onHover(evt) {
    const dragEl = this.getParentDrag(evt.target);
    dragEl.classList.add('drag-selected');
  }
  onMouseLeave(evt) {
    const dragEl = this.getParentDrag(evt.target);
    dragEl.classList.remove('drag-selected');
  }
  getDragTooltip() {
    return this.uiModel.type === 'material:flex-container' ? 'Drag container' : 'Drag component';
  }
  getParentDrag(el) {
    let dragEl = el;
    while (!['item', 'row', 'col-sm'].some(c => Array.from(dragEl.classList).includes(c))) {
      dragEl = dragEl.parentNode;
    }
    return dragEl;
  }
}
ControlEditorComponent.ɵfac = function ControlEditorComponent_Factory(t) {
  return new (t || ControlEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
};
ControlEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ControlEditorComponent,
  selectors: [["dc-control-editor"]],
  inputs: {
    uiModel: "uiModel"
  },
  outputs: {
    uiModelChanged: "uiModelChanged",
    uiModelRemoved: "uiModelRemoved"
  },
  decls: 11,
  vars: 2,
  consts: [[3, "uiModel", "updatedProperty"], ["mat-icon-button", "", 1, "handle", 3, "matTooltip", "mouseover", "mouseleave"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["mat-icon-button", "", "matTooltip", "Add component", 1, "add-component", 3, "click"], ["mat-icon-button", "", "matTooltip", "Remove", 3, "click"]],
  template: function ControlEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "dc-properties-editor", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updatedProperty", function ControlEditorComponent_Template_dc_properties_editor_updatedProperty_0_listener() {
        return ctx.uiModelChanged.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function ControlEditorComponent_Template_button_mouseover_1_listener($event) {
        return ctx.onHover($event);
      })("mouseleave", function ControlEditorComponent_Template_button_mouseleave_1_listener($event) {
        return ctx.onMouseLeave($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 3)(4, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlEditorComponent_Template_button_click_5_listener() {
        return ctx.openAddDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlEditorComponent_Template_button_click_8_listener() {
        return ctx.uiModelRemoved.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("uiModel", ctx.uiModel);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx.getDragTooltip());
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _properties_editor_properties_editor_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesEditorComponent],
  styles: [".preview dc-container dc-container-row.row {\n  min-height: 100px;\n  border: 1px dashed rgba(0, 0, 0, 0);\n}\n  .preview dc-container dc-container-row.row.active {\n  border-color: grey;\n}\n\n  .preview.edit-mode dc-container dc-container-row.row {\n  border-color: rgba(0, 0, 0, 0.25);\n}\n  .preview.edit-mode dc-container dc-container-row.row > dc-control-editor {\n  left: -50px;\n}\n  .preview.edit-mode dc-container dc-container-row.row > dc-control-editor .handle {\n  display: none;\n}\n  .preview.edit-mode dc-container dc-container-row.row > dc-control-editor .add-component {\n  display: inline-block;\n}\n  .preview.edit-mode dc-container dc-container-row.row .col-sm dc-ui-flex-container + dc-control-editor {\n  left: 60px;\n}\n\n  .preview dc-ui-flex-container .item,   .preview dc-container .item,   .preview dc-container dc-container-row.row,   .preview dc-container dc-container-row.row > div[class*=col-] {\n  position: relative;\n  border: 1px dashed rgba(0, 0, 0, 0);\n}\n  .preview dc-ui-flex-container .item:hover > dc-control-editor,   .preview dc-container .item:hover > dc-control-editor,   .preview dc-container dc-container-row.row:hover > dc-control-editor,   .preview dc-container dc-container-row.row > div[class*=col-]:hover > dc-control-editor {\n  display: block;\n}\n  .preview dc-ui-flex-container .item.drag-selected,   .preview dc-container .item.drag-selected,   .preview dc-container dc-container-row.row.drag-selected,   .preview dc-container dc-container-row.row > div[class*=col-].drag-selected {\n  border-color: grey;\n}\n  .preview dc-ui-flex-container .item.drag-selected dc-control-editor,   .preview dc-container .item.drag-selected dc-control-editor,   .preview dc-container dc-container-row.row.drag-selected dc-control-editor,   .preview dc-container dc-container-row.row > div[class*=col-].drag-selected dc-control-editor {\n  display: block !important;\n}\n  .preview dc-ui-flex-container .item dc-ui-flex-container + dc-control-editor > .handle,   .preview dc-container .item dc-ui-flex-container + dc-control-editor > .handle,   .preview dc-container dc-container-row.row dc-ui-flex-container + dc-control-editor > .handle,   .preview dc-container dc-container-row.row > div[class*=col-] dc-ui-flex-container + dc-control-editor > .handle {\n  color: rgba(0, 0, 0, 0.75);\n}\n  .preview dc-ui-flex-container .item:hover dc-ui-flex-container + dc-control-editor > .handle,   .preview dc-container .item:hover dc-ui-flex-container + dc-control-editor > .handle,   .preview dc-container dc-container-row.row:hover dc-ui-flex-container + dc-control-editor > .handle,   .preview dc-container dc-container-row.row > div[class*=col-]:hover dc-ui-flex-container + dc-control-editor > .handle {\n  color: rgba(0, 0, 0, 0.8);\n}\n  .preview dc-ui-flex-container .item dc-ui-flex-container + dc-control-editor,   .preview dc-container .item dc-ui-flex-container + dc-control-editor,   .preview dc-container dc-container-row.row dc-ui-flex-container + dc-control-editor,   .preview dc-container dc-container-row.row > div[class*=col-] dc-ui-flex-container + dc-control-editor {\n  left: -50px;\n}\n\n  .preview dc-container.container dc-container-row.row > dc-control-editor {\n  left: -50px;\n}\n\n  {\n  \n  \n  \n  \n}\n  .gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none;\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: #eeeeee;\n}\n  .gu-mirror > dc-control-editor {\n  display: block !important;\n}\n  .gu-mirror > dc-ui-flex-container + dc-control-editor {\n  left: -50px;\n}\n  .gu-hide {\n  left: -9999px !important;\n}\n  .gu-unselectable {\n  -webkit-user-select: none !important;\n  user-select: none !important;\n}\n  .gu-transit {\n  position: relative;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n  .gu-transit::after {\n  content: \" \";\n  top: 0;\n  display: block;\n  position: absolute;\n  background: #ccc;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n  .gu-transit dc-control-editor {\n  display: none !important;\n}\n\n[_nghost-%COMP%] {\n  position: absolute;\n  color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n  z-index: 2;\n  max-width: 105px;\n  display: none;\n  background: rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n}\n[_nghost-%COMP%]:hover {\n  cursor: move;\n  color: rgba(0, 0, 0, 0.75);\n}\n[_nghost-%COMP%]     button {\n  height: 35px;\n  line-height: 35px;\n  width: 35px;\n}\n[_nghost-%COMP%]   .add-component[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Rvb2xzL3NyYy9saWIvY29tcG9uZW50cy9jb250cm9sLWVkaXRvci9jb250cm9sLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUNBSk87QUFHVDtBQUVFO0VBQ0Usa0JBQUE7QUFBSjs7QUFLRTtFQUNFLGlDQUFBO0FBRko7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUVNO0VBQ0UsYUFBQTtBQUFSO0FBR007RUFDRSxxQkFBQTtBQURSO0FBSUk7RUFDRSxVQUFBO0FBRk47O0FBT0E7Ozs7RUFRRSxrQkFBQTtFQUNBLG1DQXRDTztBQThCVDtBQUdFOzs7O0VBQ0UsY0FBQTtBQUVKO0FBSUU7Ozs7RUFDRSxrQkFBQTtBQUNKO0FBQUk7Ozs7RUFDRSx5QkFBQTtBQUtOO0FBREU7Ozs7RUFDRSwwQkFBQTtBQU1KO0FBRkk7Ozs7RUFDRSx5QkFBQTtBQU9OO0FBSEU7Ozs7RUFDRSxXQUFBO0FBUUo7O0FBSkE7RUFDRSxXQUFBO0FBT0Y7O0FBSkE7RUFDRSxvQkFBQTtFQXdCQSwwQ0FBQTtFQUlBLDZEQUFBO0VBT0EsNERBQUE7QUF6QkY7QUFURTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQkFBQTtFQUNBLHFIQUFBO0VBR0EsbUJBQUE7QUFRSjtBQU5JO0VBQ0UseUJBQUE7QUFRTjtBQUxJO0VBQ0UsV0FBQTtBQU9OO0FBSEU7RUFDRSx3QkFBQTtBQUtKO0FBRkU7RUFDRSxvQ0FBQTtFQUdBLDRCQUFBO0FBSUo7QUFERTtFQUNFLGtCQUFBO0VBQ0Esc0RBQUE7QUFHSjtBQURJO0VBQ0UsWUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUdOO0FBQUk7RUFDRSx3QkFBQTtBQUVOOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUdFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cclxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyOiAkYm9yZGVyO1xyXG4gICYuYWN0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucHJldmlldy5lZGl0LW1vZGUge1xyXG4gIGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICAgID4gZGMtY29udHJvbC1lZGl0b3Ige1xyXG4gICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgLmhhbmRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkZC1jb21wb25lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC1zbSBkYy11aS1mbGV4LWNvbnRhaW5lciArIGRjLWNvbnRyb2wtZWRpdG9yIHtcclxuICAgICAgbGVmdDogNjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucHJldmlldyBkYy11aS1mbGV4LWNvbnRhaW5lciAuaXRlbSxcclxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciAuaXRlbSxcclxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyxcclxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lciBkYy1jb250YWluZXItcm93LnJvdyA+IGRpdltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICAmOmhvdmVyID4gZGMtY29udHJvbC1lZGl0b3Ige1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAkYm9yZGVyO1xyXG5cclxuICAmLmRyYWctc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgZGMtY29udHJvbC1lZGl0b3Ige1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGMtdWktZmxleC1jb250YWluZXIgKyBkYy1jb250cm9sLWVkaXRvciA+IC5oYW5kbGUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjc1KTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZGMtdWktZmxleC1jb250YWluZXIgKyBkYy1jb250cm9sLWVkaXRvciA+IC5oYW5kbGUge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkYy11aS1mbGV4LWNvbnRhaW5lciArIGRjLWNvbnRyb2wtZWRpdG9yIHtcclxuICAgIGxlZnQ6IC01MHB4O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5wcmV2aWV3IGRjLWNvbnRhaW5lci5jb250YWluZXIgZGMtY29udGFpbmVyLXJvdy5yb3cgPiBkYy1jb250cm9sLWVkaXRvciB7XHJcbiAgbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLyogaW4tZmxpZ2h0IGNsb25lICovXHJcbiAgLmd1LW1pcnJvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG5cclxuICAgID4gZGMtY29udHJvbC1lZGl0b3Ige1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgID4gZGMtdWktZmxleC1jb250YWluZXIgKyBkYy1jb250cm9sLWVkaXRvciB7XHJcbiAgICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiBoaWdoLXBlcmZvcm1hbmNlIGRpc3BsYXk6bm9uZTsgaGVscGVyICovXHJcbiAgLmd1LWhpZGUge1xyXG4gICAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBhZGRlZCB0byBtaXJyb3JDb250YWluZXIgKGRlZmF1bHQgPSBib2R5KSB3aGlsZSBkcmFnZ2luZyAqL1xyXG4gIC5ndS11bnNlbGVjdGFibGUge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBhZGRlZCB0byB0aGUgc291cmNlIGVsZW1lbnQgd2hpbGUgaXRzIG1pcnJvciBpcyBkcmFnZ2VkICovXHJcbiAgLmd1LXRyYW5zaXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZGMtY29udHJvbC1lZGl0b3Ige1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1heC13aWR0aDogMTA1cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjc1KTtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICB9XHJcblxyXG4gIC5hZGQtY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6406:
/*!**************************************************************************************!*\
  !*** ./projects/tools/src/lib/components/preview-editor/preview-editor.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewEditorComponent": () => (/* binding */ PreviewEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ace-builds */ 6701);
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspython_interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspython-interpreter */ 3920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_src_lib_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/src/lib/components/ngx-dynamic-component */ 9154);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-split */ 8828);















const _c0 = ["uiModelEl"];
const _c1 = ["uiModelJSONEl"];
const _c2 = ["scriptsEl"];
const _c3 = ["dataModelEl"];
const _c4 = ["dynamicComponent"];
function PreviewEditorComponent_mat_card_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PreviewEditorComponent_mat_card_0_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.toggleLayout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", (ctx_r1.isHorizontal ? "Vertical" : "Horizontal") + " layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.isHorizontal ? "vertical_split" : "horizontal_split");
  }
}
function PreviewEditorComponent_mat_card_0_ngx_dynamic_component_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-dynamic-component", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("render", function PreviewEditorComponent_mat_card_0_ngx_dynamic_component_30_Template_ngx_dynamic_component_render_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.onRendered($event));
    })("changedDataModel", function PreviewEditorComponent_mat_card_0_ngx_dynamic_component_30_Template_ngx_dynamic_component_changedDataModel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.onDataModelChange($event));
    })("eventHandlers", function PreviewEditorComponent_mat_card_0_ngx_dynamic_component_30_Template_ngx_dynamic_component_eventHandlers_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.eventHandlers($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("xmlUIModel", ctx_r8.uiModel)("dataModel", ctx_r8.dataModel);
  }
}
function PreviewEditorComponent_mat_card_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-header")(2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PreviewEditorComponent_mat_card_0_button_4_Template, 3, 2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PreviewEditorComponent_mat_card_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.toggleSourceCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-content", 5)(9, "as-split", 6)(10, "as-split-area", 7, 8)(12, "mat-tab-group", 9)(13, "mat-tab", 10)(14, "mat-tab-group", 11)(15, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 5, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 5, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "div", 5, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 5, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "as-split-area", 20, 21)(29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PreviewEditorComponent_mat_card_0_ngx_dynamic_component_30_Template, 2, 2, "ngx-dynamic-component", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.codeSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("useTransition", true)("direction", ctx_r0.direction)("gutterSize", ctx_r0.codeSize ? 11 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", ctx_r0.codeSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 100 - ctx_r0.codeSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.uiModel);
  }
}
// eslint-disable-next-line no-shadow
var Layout;
(function (Layout) {
  Layout["horizontal"] = "horizontal";
  Layout["vertical"] = "vertical";
})(Layout || (Layout = {}));
class PreviewEditorComponent {
  constructor() {
    this.flex = 'initial';
    this.editorOptions = {
      language: 'json',
      automaticLayout: true
    };
    this.direction = Layout.horizontal;
    this.codeSize = 50;
  }
  eventHandlers({
    eventName,
    rootUIModel,
    parameters = null,
    sender,
    eventHandler
  }) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      if (!this.interpreter) {
        return;
      }
      if (this.interpreter.hasFunction(this.scripts, eventHandler)) {
        try {
          if (parameters) {
            parameters[parameters.argsKey] = parameters.argsValue;
          }
          const res = yield this.interpreter.evaluate(this.scripts, Object.assign({
            rootUIModel,
            dataModel: this.dataModel
          }, parameters), eventHandler);
          sender === null || sender === void 0 ? void 0 : sender.setEventHandlerResult(eventName, res);
        } catch (e) {
          alert(`${e.message}`);
        }
      }
    });
  }
  ngOnInit() {
    this.interpreter = (0,jspython_interpreter__WEBPACK_IMPORTED_MODULE_2__.jsPython)();
    this.interpreter.addFunction('getComponentById', (uiModel, id) => (0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.getComponentById)(uiModel, id));
    this.interpreter.addFunction('alert', msg => alert(msg));
    this.interpreter.assignGlobalContext({});
    this.uiModel = this.initUiModel;
    this.dataModel = this.initDataModel;
  }
  ngAfterViewInit() {
    this.onDataModelChange(this.dynamicComponent.dataModel);
    this.initUIPreview();
  }
  toggleSourceCode() {
    this.codeSize = !this.codeSize ? 50 : 0;
  }
  toggleLayout() {
    this.direction = this.direction === Layout.horizontal ? Layout.vertical : Layout.horizontal;
  }
  get isHorizontal() {
    return this.direction === Layout.horizontal;
  }
  onRendered(data) {}
  onDataModelChange(data) {
    if (data && this.dataModelEditor) {
      this.dataModelEditor.setValue((0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.formatObjToJsonStr)(data));
    } else if (this.uiModelEditor) {
      this.uiModelEditor.setValue((0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.formatObjToJsonStr)(this.uiModel));
    }
  }
  resize() {
    this.scriptsEditor.resize();
    this.uiModelEditor.resize();
    this.uiModelJSONEditor.resize();
    this.dataModelEditor.resize();
  }
  initUIPreview() {
    if (this.uiModelEl) {
      this.uiModelJSONEditor = (0,ace_builds__WEBPACK_IMPORTED_MODULE_1__.edit)(this.uiModelJSONEl.nativeElement, {
        mode: 'ace/mode/json',
        autoScrollEditorIntoView: true,
        tabSize: 2,
        useSoftTabs: true,
        readOnly: true
      });
      this.setJSONEditor(this.initUiModel);
      this.initEditor('uiModel', this.uiModelEl, this.initUiModel, 'ace/mode/xml').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500)).subscribe(uiModel => {
        this.dynamicComponent.containerRef.clear();
        this.setJSONEditor(uiModel);
        this.refreshPreview(uiModel, this.dataModel);
      });
      this.initEditor('dataModel', this.dataModelEl, this.initDataModel).subscribe(dataModel => this.refreshPreview(this.uiModel, dataModel ? JSON.parse(dataModel) : dataModel));
      this.initEditor('scripts', this.scriptsEl, this.scripts, 'ace/mode/python').subscribe(sc => this.scripts = sc);
    }
  }
  setJSONEditor(uiModel) {
    const res = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.CoreService.parseXMLModel(uiModel);
    this.uiModelJSONEditor.setValue((0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.formatObjToJsonStr)(res), -1);
    this.uiModelJSONEditor.resize();
  }
  refreshPreview(uiModel, dataModel) {
    this.uiModel = uiModel;
    this.dataModelCopy = JSON.parse(JSON.stringify(dataModel));
  }
  // eslint-disable-next-line max-len
  initEditor(name, element, value, mode = 'ace/mode/json') {
    const editor = (0,ace_builds__WEBPACK_IMPORTED_MODULE_1__.edit)(element.nativeElement, {
      mode,
      autoScrollEditorIntoView: true,
      value: (0,_ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.formatObjToJsonStr)(value),
      tabSize: 2,
      useSoftTabs: true,
      indentedSoftWrap: true
    });
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    });
    this[`${name}Editor`] = editor;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(editor, 'change').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => editor.getValue()));
  }
}
PreviewEditorComponent.ɵfac = function PreviewEditorComponent_Factory(t) {
  return new (t || PreviewEditorComponent)();
};
PreviewEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PreviewEditorComponent,
  selectors: [["dc-preview-editor"]],
  viewQuery: function PreviewEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.uiModelEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.uiModelJSONEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scriptsEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dataModelEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dynamicComponent = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function PreviewEditorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("flex", ctx.flex);
    }
  },
  inputs: {
    scripts: "scripts",
    initUiModel: "initUiModel",
    initDataModel: "initDataModel",
    title: "title"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "h-100 preview-card d-flex flex-column", 4, "ngIf"], [1, "h-100", "preview-card", "d-flex", "flex-column"], [1, "flex-fill", "align-self-center"], ["mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Source code", 3, "click"], [1, "h-100"], ["unit", "percent", 3, "useTransition", "direction", "gutterSize"], [1, "d-flex", 3, "size"], ["area0", "asSplitArea"], [1, "w-100", "ui-model-tab"], ["label", "UI Model"], ["headerPosition", "below", 1, "w-100", "h-100"], ["label", "XML"], ["uiModelEl", ""], ["label", "JSON"], ["uiModelJSONEl", ""], ["label", "Scripts"], ["scriptsEl", ""], ["label", "Data Model"], ["dataModelEl", ""], [3, "size"], ["area1", "asSplitArea"], [1, "preview"], ["class", "d-block", 3, "xmlUIModel", "dataModel", "render", "changedDataModel", "eventHandlers", 4, "ngIf"], ["mat-icon-button", "", 3, "matTooltip", "click"], [1, "d-block", 3, "xmlUIModel", "dataModel", "render", "changedDataModel", "eventHandlers"], ["dynamicComponent", ""]],
  template: function PreviewEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PreviewEditorComponent_mat_card_0_Template, 31, 8, "mat-card", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initUiModel);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _core_src_lib_components_ngx_dynamic_component__WEBPACK_IMPORTED_MODULE_3__.NGXDynamicComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, angular_split__WEBPACK_IMPORTED_MODULE_15__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_15__.SplitAreaDirective],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n  mat-card .mat-card-header-text {\n  margin: 0;\n}\n  mat-card .mat-mdc-tab-body-wrapper,   mat-card .mat-tab-body-wrapper {\n  display: block;\n  overflow: visible;\n  height: 100%;\n  min-height: 200px;\n}\n  mat-card .mat-mdc-tab-body-wrapper mat-tab-body,   mat-card .mat-tab-body-wrapper mat-tab-body {\n  height: 100%;\n}\n\n.preview-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]     .as-init .as-split-gutter, .preview-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .as-split-area[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.ui-model-tab[_ngcontent-%COMP%]     .mat-tab-label {\n  height: 24px;\n  font-size: 0.85rem;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nmat-card[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: 1em 0;\n  position: static;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  background: #eeeeee;\n  padding: 8px 20px;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\nmat-card[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  background: #eeeeee;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Rvb2xzL3NyYy9saWIvY29tcG9uZW50cy9wcmV2aWV3LWVkaXRvci9wcmV2aWV3LWVkaXRvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtBQUhGOztBQU9FO0VBQ0UsU0FBQTtBQUpKO0FBT0U7O0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTEo7QUFNSTs7RUFDRSxZQUFBO0FBSE47O0FBU0U7RUFDRSxZQUFBO0FBTko7O0FBVUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBUEY7QUFRRTtFQUNFLFlBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVRTtFQUNFLHlCQS9DSTtFQWdESixtQkN0Q0c7RUR1Q0gsaUJBQUE7QUFSSjtBQVNJO0VBQ0UsZUFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0FBUE47QUFXRTtFQUNFLG1CQ2pERztFRGtESCxZQUFBO0FBVEoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zcmMvX3ZhcnMuc2Nzcyc7XHJcblxyXG4kY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBtYXQtY2FyZCB7XHJcbiAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIG1hcmdpbjogMFxyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtdGFiLWJvZHktd3JhcHBlcixcclxuICAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF0LXRhYi1ib2R5IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByZXZpZXctY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcclxuICA6Om5nLWRlZXAgLmFzLWluaXQgLmFzLXNwbGl0LWd1dHRlciwgLmFzLXNwbGl0LWFyZWEge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnVpLW1vZGVsLXRhYiA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xyXG4gIGhlaWdodDogMjRweDtcclxuICBmb250LXNpemU6IC44NXJlbTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWF0LWNhcmQtaGVhZGVyLCBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheTtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmV2aWV3IHtcclxuICAgIGJhY2tncm91bmQ6ICRncmF5O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuXHJcbiRhcHAtcHJpbWFyeTogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlKTtcclxuJGFwcC1hY2NlbnQ6ICBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRsaWdodC1ibHVlLXBhbGV0dGUpO1xyXG4kYXBwLXdhcm46ICAgIG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJHBpbmstcGFsZXR0ZSk7XHJcblxyXG4kcHJpbWFyeTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFwcC1wcmltYXJ5KTtcclxuJGFjY2VudDogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFwcC1hY2NlbnQpO1xyXG4kd2FybjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFwcC13YXJuKTtcclxuXHJcbiRhY3RpdmU6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGluZGlnby1wYWxldHRlKSk7XHJcblxyXG4kZ3JheTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlLCAyMDApKTtcclxuJGxpZ2h0R3JheTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlLCA1MCkpO1xyXG4kZGFya0dyYXk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSwgQTQwMCkpO1xyXG5cclxuJHRleHQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cclxuJHBhbmVsTWFyZ2luOiAyNXB4O1xyXG4kc3RhdGljU3BhY2U6IDI1cHg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1214:
/*!********************************************************************************************!*\
  !*** ./projects/tools/src/lib/components/properties-editor/properties-editor.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesEditorComponent": () => (/* binding */ PropertiesEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);









const _c0 = ["editorContainer"];
const _c1 = ["editBtn"];
function PropertiesEditorComponent_div_4_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function PropertiesEditorComponent_div_4_mat_form_field_2_Template_input_input_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const property_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.updateProperty($event, property_r4.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const property_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", property_r4.name)("value", property_r4.value);
  }
}
function PropertiesEditorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PropertiesEditorComponent_div_4_mat_form_field_2_Template, 2, 2, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.positionClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.properties);
  }
}
class PropertiesEditorComponent {
  constructor() {
    this.updatedProperty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.itemProperties = [];
    this.properties = [];
    this.showEditor = false;
  }
  get positionClass() {
    // eslint-disable-next-line no-underscore-dangle
    const btnPos = this.editBtn._elementRef.nativeElement.getBoundingClientRect().right;
    const docWidth = document.body.offsetWidth;
    return docWidth - btnPos < 200 ? 'left' : '';
  }
  onClick(targetElement) {
    if (this.editorContainer) {
      const clickedInside = this.editorContainer.nativeElement.contains(targetElement);
      // eslint-disable-next-line no-underscore-dangle
      if (!clickedInside && this.editBtn._elementRef.nativeElement.contains(targetElement)) {
        // Clicked on button.
        const itemProps = this.uiModel.itemProperties || {};
        this.properties = this.itemProperties.map(({
          name
        }) => {
          let value = itemProps[name];
          if (value === undefined) {
            value = '';
          } else if (typeof value === 'object') {
            value = JSON.stringify(value);
          }
          return {
            name,
            value
          };
        });
        this.showEditor = true;
      } else if (!clickedInside) {
        // Clicked outside.
        this.showEditor = false;
        this.updatedProperty.emit();
      }
    }
  }
  ngOnInit() {
    this.itemProperties = _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.CoreService.getComponentProperties(this.uiModel.type);
  }
  updateProperty(evt, prop) {
    try {
      // If property value is an object or an array.
      this.uiModel.itemProperties[prop] = JSON.parse(evt.target.value);
    } catch (_a) {
      this.uiModel.itemProperties[prop] = evt.target.value;
    }
  }
}
PropertiesEditorComponent.ɵfac = function PropertiesEditorComponent_Factory(t) {
  return new (t || PropertiesEditorComponent)();
};
PropertiesEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PropertiesEditorComponent,
  selectors: [["dc-properties-editor"]],
  viewQuery: function PropertiesEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editorContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editBtn = _t.first);
    }
  },
  hostBindings: function PropertiesEditorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PropertiesEditorComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    uiModel: "uiModel"
  },
  outputs: {
    updatedProperty: "updatedProperty"
  },
  decls: 5,
  vars: 1,
  consts: [["mat-icon-button", "", "matTooltip", "Edit properties", 3, "click"], ["editBtn", ""], ["class", "editor-container", "fxLayout", "column", 3, "ngClass", 4, "ngIf"], ["fxLayout", "column", 1, "editor-container", 3, "ngClass"], ["editorContainer", ""], [4, "ngFor", "ngForOf"], ["matInput", "", 3, "placeholder", "value", "input"]],
  template: function PropertiesEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PropertiesEditorComponent_Template_button_click_0_listener() {
        return ctx.showEditor = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PropertiesEditorComponent_div_4_Template, 3, 2, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showEditor);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField],
  styles: [".editor-container[_ngcontent-%COMP%] {\n      position: absolute;\n      background: white;\n      top: 0;\n      left: 40px;\n      z-index: 3;\n      padding: 10px;\n      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n\n    }\n    .editor-container.left[_ngcontent-%COMP%] {\n      left: -200px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Rvb2xzL3NyYy9saWIvY29tcG9uZW50cy9wcm9wZXJ0aWVzLWVkaXRvci9wcm9wZXJ0aWVzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixNQUFNO01BQ04sVUFBVTtNQUNWLFVBQVU7TUFDVixhQUFhO01BQ2I7O2dEQUUwQzs7SUFFNUM7SUFDQTtNQUNFLFlBQVk7SUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5lZGl0b3ItY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogNDBweDtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG4gICAgfVxuICAgIC5lZGl0b3ItY29udGFpbmVyLmxlZnQge1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1255:
/*!************************************************!*\
  !*** ./projects/tools/src/lib/tools.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsModule": () => (/* binding */ ToolsModule),
/* harmony export */   "angularSplitModuleForRoot": () => (/* binding */ angularSplitModuleForRoot)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-split */ 8828);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ 8502);
/* harmony import */ var _components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/preview-editor/preview-editor.component */ 6406);
/* harmony import */ var _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/control-editor/control-editor.component */ 6527);
/* harmony import */ var _components_properties_editor_properties_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/properties-editor/properties-editor.component */ 1214);
/* harmony import */ var _components_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-dialog/add-dialog.component */ 9429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
























const angularSplitModuleForRoot = angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule.forRoot();
class ToolsModule {}
ToolsModule.ɵfac = function ToolsModule_Factory(t) {
  return new (t || ToolsModule)();
};
ToolsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ToolsModule
});
ToolsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsCoreModule, _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_1__.DynamicComponentsBootstrapModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, angularSplitModuleForRoot]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ToolsModule, {
    declarations: [_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_2__.PreviewEditorComponent, _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__.ControlEditorComponent, _components_properties_editor_properties_editor_component__WEBPACK_IMPORTED_MODULE_4__.PropertiesEditorComponent, _components_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AddDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsCoreModule, _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_1__.DynamicComponentsBootstrapModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, angular_split__WEBPACK_IMPORTED_MODULE_6__.AngularSplitModule],
    exports: [_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_2__.PreviewEditorComponent]
  });
})();

/***/ }),

/***/ 6249:
/*!******************************************!*\
  !*** ./projects/tools/src/public_api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewEditorComponent": () => (/* reexport safe */ _lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_1__.PreviewEditorComponent),
/* harmony export */   "ToolsModule": () => (/* reexport safe */ _lib_tools_module__WEBPACK_IMPORTED_MODULE_0__.ToolsModule),
/* harmony export */   "angularSplitModuleForRoot": () => (/* reexport safe */ _lib_tools_module__WEBPACK_IMPORTED_MODULE_0__.angularSplitModuleForRoot)
/* harmony export */ });
/* harmony import */ var _lib_tools_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tools.module */ 1255);
/* harmony import */ var _lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/preview-editor/preview-editor.component */ 6406);
/*
 * Public API Surface of tools
 */



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home-page.component */ 1274);
/* harmony import */ var _components_editor_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/editor-page.component */ 8807);
/* harmony import */ var _components_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components-page.component */ 1128);
/* harmony import */ var _components_guides_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/guides-page.component */ 3937);
/* harmony import */ var _components_component_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/component-page.component */ 993);
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ 782);
/* harmony import */ var _components_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories.component */ 8027);
/* harmony import */ var _components_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/examples-page/examples-page.component */ 3213);
/* harmony import */ var _components_example_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/example-view.component */ 3748);
/* harmony import */ var _components_designer_page_designer_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/designer-page/designer-page.component */ 6025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);














const routes = [{
  path: '',
  component: _components_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}, {
  path: 'editor',
  component: _components_editor_page_component__WEBPACK_IMPORTED_MODULE_1__.EditorPageComponent
}, {
  path: 'designer',
  component: _components_designer_page_designer_page_component__WEBPACK_IMPORTED_MODULE_9__.DesignerPageComponent
}, {
  path: 'guides',
  component: _components_guides_page_component__WEBPACK_IMPORTED_MODULE_3__.GuidesPageComponent
}, {
  path: 'components',
  component: _components_components_page_component__WEBPACK_IMPORTED_MODULE_2__.ComponentsPageComponent,
  children: [{
    path: '',
    component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__.ComponentsComponent
  }, {
    path: 'categories',
    component: _components_categories_component__WEBPACK_IMPORTED_MODULE_6__.CategoriesComponent
  }, {
    path: 'categories/:packageName/:category',
    component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__.ComponentsComponent
  }, {
    path: ':packageName/:component',
    component: _components_component_page_component__WEBPACK_IMPORTED_MODULE_4__.ComponentPageComponent
  }]
}, {
  path: 'examples',
  component: _components_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_7__.ExamplesPageComponent,
  children: [{
    path: '',
    component: _components_example_view_component__WEBPACK_IMPORTED_MODULE_8__.ExampleViewComponent
  }, {
    path: ':example',
    component: _components_example_view_component__WEBPACK_IMPORTED_MODULE_8__.ExampleViewComponent
  }]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav.component */ 175);



class AppComponent {
  constructor() {
    this.title = 'ngx-dynamic-components';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["dc-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "app-content", "d-flex", "flex-column"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dc-nav")(2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent],
  styles: [".app-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n  router-outlet + * {\n  overflow: auto;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n\n  .page-drawer mat-drawer {\n  background: #fafafa;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkNDVTtFREFWLFNBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3ZhcnMnO1xyXG5cclxuLmFwcC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBhZ2UtZHJhd2VyIG1hdC1kcmF3ZXIge1xyXG4gIGJhY2tncm91bmQ6ICRsaWdodEdyYXk7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4kYXBwLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSk7XHJcbiRhcHAtYWNjZW50OiAgbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kbGlnaHQtYmx1ZS1wYWxldHRlKTtcclxuJGFwcC13YXJuOiAgICBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRwaW5rLXBhbGV0dGUpO1xyXG5cclxuJHByaW1hcnk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhcHAtcHJpbWFyeSk7XHJcbiRhY2NlbnQ6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhcHAtYWNjZW50KTtcclxuJHdhcm46IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhcHAtd2Fybik7XHJcblxyXG4kYWN0aXZlOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRpbmRpZ28tcGFsZXR0ZSkpO1xyXG5cclxuJGdyYXk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSwgMjAwKSk7XHJcbiRsaWdodEdyYXk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSwgNTApKTtcclxuJGRhcmtHcmF5OiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRncmV5LXBhbGV0dGUsIEE0MDApKTtcclxuXHJcbiR0ZXh0OiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHJcbiRwYW5lbE1hcmdpbjogMjVweDtcclxuJHN0YXRpY1NwYWNlOiAyNXB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular-resizable-element */ 4454);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-markdown */ 982);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _ngx_dynamic_components_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-dynamic-components/tools */ 6249);
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ 8502);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page.component */ 1274);
/* harmony import */ var _components_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav.component */ 175);
/* harmony import */ var _components_editor_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/editor-page.component */ 8807);
/* harmony import */ var _components_guides_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/guides-page.component */ 3937);
/* harmony import */ var _components_components_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components-page.component */ 1128);
/* harmony import */ var _components_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-header.component */ 1016);
/* harmony import */ var _components_component_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/component-page.component */ 993);
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cards/cards.component */ 8486);
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ 6832);
/* harmony import */ var _components_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/categories.component */ 8027);
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/components.component */ 782);
/* harmony import */ var _components_item_properties_item_properties_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/item-properties/item-properties.component */ 7951);
/* harmony import */ var _directives_json_formatter_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/json-formatter.directive */ 2597);
/* harmony import */ var _components_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/examples-page/examples-page.component */ 3213);
/* harmony import */ var _components_example_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/example-view.component */ 3748);
/* harmony import */ var _components_sidenav_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sidenav-layout.component */ 7066);
/* harmony import */ var _components_designer_page_designer_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/designer-page/designer-page.component */ 6025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);





































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsCoreModule, _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DesignerModule, _ngx_dynamic_components_tools__WEBPACK_IMPORTED_MODULE_1__.ToolsModule, _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_2__.DynamicComponentsBootstrapModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIconModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_34__.ResizableModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_35__.MarkdownModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _components_home_page_component__WEBPACK_IMPORTED_MODULE_5__.HomePageComponent, _components_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavComponent, _components_editor_page_component__WEBPACK_IMPORTED_MODULE_7__.EditorPageComponent, _components_guides_page_component__WEBPACK_IMPORTED_MODULE_8__.GuidesPageComponent, _components_components_page_component__WEBPACK_IMPORTED_MODULE_9__.ComponentsPageComponent, _components_page_header_component__WEBPACK_IMPORTED_MODULE_10__.PageHeaderComponent, _components_component_page_component__WEBPACK_IMPORTED_MODULE_11__.ComponentPageComponent, _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_12__.CardsComponent, _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__.SideBarComponent, _components_categories_component__WEBPACK_IMPORTED_MODULE_14__.CategoriesComponent, _components_components_component__WEBPACK_IMPORTED_MODULE_15__.ComponentsComponent, _components_item_properties_item_properties_component__WEBPACK_IMPORTED_MODULE_16__.ItemPropertiesComponent, _directives_json_formatter_directive__WEBPACK_IMPORTED_MODULE_17__.JsonFormatterDirective, _components_examples_page_examples_page_component__WEBPACK_IMPORTED_MODULE_18__.ExamplesPageComponent, _components_example_view_component__WEBPACK_IMPORTED_MODULE_19__.ExampleViewComponent, _components_sidenav_layout_component__WEBPACK_IMPORTED_MODULE_20__.SidenavLayoutComponent, _components_designer_page_designer_page_component__WEBPACK_IMPORTED_MODULE_21__.DesignerPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentsCoreModule, _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.DesignerModule, _ngx_dynamic_components_tools__WEBPACK_IMPORTED_MODULE_1__.ToolsModule, _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_2__.DynamicComponentsBootstrapModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIconModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_34__.ResizableModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_35__.MarkdownModule]
  });
})();

/***/ }),

/***/ 8486:
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);




function CardsComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2)(1, "mat-card")(2, "mat-card-header")(3, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", card_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.content, " ");
  }
}
class CardsComponent {}
CardsComponent.ɵfac = function CardsComponent_Factory(t) {
  return new (t || CardsComponent)();
};
CardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CardsComponent,
  selectors: [["dc-cards"]],
  inputs: {
    cards: "cards"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "cards-wrapper", "d-flex"], ["class", "d-flex", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "d-flex", 3, "routerLink"], [1, "mat-h2"]],
  template: function CardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsComponent_a_1_Template, 7, 3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader],
  styles: [".cards-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.cards-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin: 25px;\n}\n.cards-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.cards-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]     .mat-card-header-text {\n  margin: 0;\n}\n.cards-wrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQURGO0FBR0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtBQUZKO0FBR0k7RUFDRSxTQUFBO0FBRE47QUFJSTtFQUNFLHlCQ0RDO0FERFAiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL192YXJzLnNjc3NcIjtcclxuXHJcbi5jYXJkcy13cmFwcGVyIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWF0LWNhcmQtaGVhZGVyIDo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuXHJcbiRhcHAtcHJpbWFyeTogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlKTtcclxuJGFwcC1hY2NlbnQ6ICBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRsaWdodC1ibHVlLXBhbGV0dGUpO1xyXG4kYXBwLXdhcm46ICAgIG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJHBpbmstcGFsZXR0ZSk7XHJcblxyXG4kcHJpbWFyeTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFwcC1wcmltYXJ5KTtcclxuJGFjY2VudDogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFwcC1hY2NlbnQpO1xyXG4kd2FybjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFwcC13YXJuKTtcclxuXHJcbiRhY3RpdmU6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGluZGlnby1wYWxldHRlKSk7XHJcblxyXG4kZ3JheTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlLCAyMDApKTtcclxuJGxpZ2h0R3JheTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlLCA1MCkpO1xyXG4kZGFya0dyYXk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSwgQTQwMCkpO1xyXG5cclxuJHRleHQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cclxuJHBhbmVsTWFyZ2luOiAyNXB4O1xyXG4kc3RhdGljU3BhY2U6IDI1cHg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8027:
/*!****************************************************!*\
  !*** ./src/app/components/categories.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 7225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards/cards.component */ 8486);



class CategoriesComponent {
  constructor() {
    this.categories = [];
  }
  ngOnInit() {
    this.categories = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCategories)().map(c => ({
      header: `${c.packageName} ${c.name}`,
      content: this.getComponentsNames(c.components),
      link: [c.packageName, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getSlugFromStr)(c.name)]
    }));
  }
  getComponentsNames(components) {
    return components.map(c => c.name).join(', ');
  }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
  return new (t || CategoriesComponent)();
};
CategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CategoriesComponent,
  selectors: [["dc-categories"]],
  decls: 4,
  vars: 1,
  consts: [[1, "mat-h1"], ["fxLayout", "", "fxLayoutGap", "50px", 1, "cards-wrapper"], [3, "cards"]],
  template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "dc-cards", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cards", ctx.categories);
    }
  },
  dependencies: [_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent],
  styles: ["[_nghost-%COMP%] {\n      padding: 25px;\n      display: flex;\n      flex-direction: column;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxhQUFhO01BQ2IsYUFBYTtNQUNiLHNCQUFzQjtJQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 993:
/*!********************************************************!*\
  !*** ./src/app/components/component-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentPageComponent": () => (/* binding */ ComponentPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 7225);
/* harmony import */ var _ngx_dynamic_components_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-dynamic-components/tools */ 6249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_tools_src_lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/tools/src/lib/components/preview-editor/preview-editor.component */ 6406);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-resizable-element */ 4454);
/* harmony import */ var _item_properties_item_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-properties/item-properties.component */ 7951);











function ComponentPageComponent_div_0_ng_container_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 14);
  }
  if (rf & 2) {
    const ex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ex_r4.description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = function () {
  return {
    bottom: true
  };
};
function ComponentPageComponent_div_0_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resizeEnd", function ComponentPageComponent_div_0_ng_container_5_div_1_Template_div_resizeEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onResizeEnd($event, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "dc-preview-editor", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ComponentPageComponent_div_0_ng_container_5_div_1_div_6_Template, 1, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ex_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("enableGhostResize", true)("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("validateResize", ctx_r3.validateSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ex_r4.title)("scripts", ex_r4.scripts)("initUiModel", ex_r4.uiModel)("initDataModel", ex_r4.dataModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ex_r4.description);
  }
}
function ComponentPageComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComponentPageComponent_div_0_ng_container_5_div_1_Template, 7, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.examples);
  }
}
function ComponentPageComponent_div_0_dc_item_properties_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "dc-item-properties", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("component", ctx_r2.component);
  }
}
function ComponentPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ComponentPageComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ComponentPageComponent_div_0_dc_item_properties_6_Template, 1, 1, "dc-item-properties", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.component.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.component.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
  }
}
class ComponentPageComponent {
  constructor(route) {
    this.route = route;
    this.loading = false;
    this.examples = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
      if (this.component) {
        this.loading = true;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1)).subscribe(p => {
      this.component = _utils__WEBPACK_IMPORTED_MODULE_0__.COMPONENTS_LIST.find(c => c.name === p.component && c.packageName === p.packageName);
      this.examples = [];
      if (this.component.example) {
        this.examples = Array.isArray(this.component.example) ? this.component.example : [this.component.example];
      }
      this.loading = false;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  validateSize(event) {
    const height = event.rectangle.height;
    if (height < 345) {
      return false;
    }
    return true;
  }
  onResizeEnd(event, element) {
    const height = event.rectangle.height;
    element.style.height = `${height}px`;
    this.editor.resize();
  }
}
ComponentPageComponent.ɵfac = function ComponentPageComponent_Factory(t) {
  return new (t || ComponentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
ComponentPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ComponentPageComponent,
  selectors: [["dc-example"]],
  viewQuery: function ComponentPageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ngx_dynamic_components_tools__WEBPACK_IMPORTED_MODULE_1__.PreviewEditorComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    }
  },
  decls: 1,
  vars: 1,
  consts: [["class", "static-padding", 4, "ngIf"], [1, "static-padding"], [1, "mat-h1"], [1, "mat-h3"], [4, "ngIf"], [3, "component", 4, "ngIf"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], ["mwlResizable", "", 3, "enableGhostResize", "resizeEdges", "validateResize", "resizeEnd"], ["exWraper", ""], [3, "title", "scripts", "initUiModel", "initDataModel"], ["mwlResizeHandle", "", 1, "as-split-gutter", 3, "resizeEdges"], [1, "as-split-gutter-icon"], ["class", "py-2", 3, "innerHTML", 4, "ngIf"], [1, "py-2", 3, "innerHTML"], [3, "component"]],
  template: function ComponentPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ComponentPageComponent_div_0_Template, 7, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.component);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _projects_tools_src_lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_2__.PreviewEditorComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_11__.ResizableDirective, angular_resizable_element__WEBPACK_IMPORTED_MODULE_11__.ResizeHandleDirective, _item_properties_item_properties_component__WEBPACK_IMPORTED_MODULE_3__.ItemPropertiesComponent],
  styles: ["dc-item-properties[_ngcontent-%COMP%] {\n      margin-top: 1em;\n      display: block;\n    }\n    mwlResizable[_ngcontent-%COMP%] {\n      box-sizing: border-box; \n    }\n    .as-split-gutter[_ngcontent-%COMP%] {\n      height: 11px;\n      cursor: row-resize;\n      width: 100%;\n      background-color: var(--body-bg);\n      bottom: 0;\n    }\n\n    .as-split-gutter-icon[_ngcontent-%COMP%] {\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC);\n      width: 100%;\n      height: 100%;\n      background-position: center center;\n      background-repeat: no-repeat;\n    }\n\n    dc-preview-editor[_ngcontent-%COMP%] {\n      height: calc(100% - 11px);\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZUFBZTtNQUNmLGNBQWM7SUFDaEI7SUFDQTtNQUNFLHNCQUFzQixFQUFFLHNEQUFzRDtJQUNoRjtJQUNBO01BQ0UsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZ0NBQWdDO01BQ2hDLFNBQVM7SUFDWDs7SUFFQTtNQUNFLDZMQUE2TDtNQUM3TCxXQUFXO01BQ1gsWUFBWTtNQUNaLGtDQUFrQztNQUNsQyw0QkFBNEI7SUFDOUI7O0lBRUE7TUFDRSx5QkFBeUI7SUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBkYy1pdGVtLXByb3BlcnRpZXMge1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIG13bFJlc2l6YWJsZSB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiByZXF1aXJlZCBmb3IgdGhlIGVuYWJsZUdob3N0UmVzaXplIG9wdGlvbiB0byB3b3JrICovXG4gICAgfVxuICAgIC5hcy1zcGxpdC1ndXR0ZXIge1xuICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgY3Vyc29yOiByb3ctcmVzaXplO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnKTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuYXMtc3BsaXQtZ3V0dGVyLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBRkNBTUFBQUJsLzZ6SUFBQUFCbEJNVkVVQUFBRE16TXpJVDhBeUFBQUFBWFJTVGxNQVFPYllaZ0FBQUJSSlJFRlVlQUZqWUdSa3dJTUpTZU1IbEJrT0FCUDdBRUd6U3VQS0FBQUFBRWxGVGtTdVFtQ0MpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG5cbiAgICBkYy1wcmV2aWV3LWVkaXRvciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExcHgpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1128:
/*!*********************************************************!*\
  !*** ./src/app/components/components-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsPageComponent": () => (/* binding */ ComponentsPageComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 7225);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar/side-bar.component */ 6832);
/* harmony import */ var _sidenav_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav-layout.component */ 7066);









function ComponentsPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dc-side-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](section_r1.packageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("groups", section_r1.categories);
  }
}
class ComponentsPageComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.sections = [];
    this.isHandSet$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.matches));
    this.mode = this.isHandSet$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r ? 'over' : 'side'));
    this.opened = false;
  }
  ngOnInit() {
    const mapToGroup = ({
      name,
      components,
      packageName
    }) => ({
      name,
      list: components,
      url: [packageName]
    });
    this.sections = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPackageCategories)().map(({
      packageName,
      categories
    }) => ({
      packageName,
      categories: categories.map(mapToGroup)
    }));
  }
}
ComponentsPageComponent.ɵfac = function ComponentsPageComponent_Factory(t) {
  return new (t || ComponentsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver));
};
ComponentsPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ComponentsPageComponent,
  selectors: [["dc-components-page"]],
  decls: 3,
  vars: 1,
  consts: [["title", "Components", 1, "d-flex", "flex-column", "h-100"], ["sidenav", "", 4, "ngFor", "ngForOf"], ["content", ""], ["sidenav", ""], [1, "mat-h3"], [3, "groups"]],
  template: function ComponentsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dc-sidenav-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ComponentsPageComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sections);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__.SideBarComponent, _sidenav_layout_component__WEBPACK_IMPORTED_MODULE_2__.SidenavLayoutComponent],
  styles: ["h3[_ngcontent-%COMP%] {\n      margin-left: 25px;\n      margin-bottom: -25px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 782:
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsComponent": () => (/* binding */ ComponentsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 7225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards/cards.component */ 8486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







class ComponentsComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    const filterComponents = p => c => (!p.category || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getSlugFromStr)(c.category) === p.category) && c.packageName === p.packageName;
    this.components$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(p => _utils__WEBPACK_IMPORTED_MODULE_0__.COMPONENTS_LIST.filter(filterComponents(p)).map(c => ({
      header: `${c.packageName} ${c.name}`,
      content: c.description,
      link: ['/components', c.packageName, c.name]
    }))));
    this.category$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(p => p.category ? p.category.replace(/-/g, ' ') : 'all categories'));
  }
}
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) {
  return new (t || ComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
ComponentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ComponentsComponent,
  selectors: [["dc-components"]],
  decls: 5,
  vars: 6,
  consts: [[1, "mat-h1"], [3, "cards"]],
  template: function ComponentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dc-cards", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Available components for ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.category$), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cards", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.components$));
    }
  },
  dependencies: [_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n      padding: 25px;\n      display: flex;\n      flex-direction: column;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxhQUFhO01BQ2IsYUFBYTtNQUNiLHNCQUFzQjtJQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6025:
/*!*********************************************************************!*\
  !*** ./src/app/components/designer-page/designer-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerPageComponent": () => (/* binding */ DesignerPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_examples_contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/examples/contact-us.form.config */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_core_src_lib_designer_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/core/src/lib/designer/components/designer/designer.component */ 284);
/* harmony import */ var _sidenav_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav-layout.component */ 7066);




class DesignerPageComponent {
  constructor() {
    this.xmlUIModel = src_app_examples_contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.uIModel;
  }
  ngOnInit() {}
}
DesignerPageComponent.ɵfac = function DesignerPageComponent_Factory(t) {
  return new (t || DesignerPageComponent)();
};
DesignerPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DesignerPageComponent,
  selectors: [["dc-designer-page"]],
  decls: 2,
  vars: 1,
  consts: [[1, "d-flex", "flex-column"], ["content", "", 3, "template"]],
  template: function DesignerPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dc-sidenav-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dc-designer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx.xmlUIModel);
    }
  },
  dependencies: [_projects_core_src_lib_designer_components_designer_designer_component__WEBPACK_IMPORTED_MODULE_1__.DesignerComponent, _sidenav_layout_component__WEBPACK_IMPORTED_MODULE_2__.SidenavLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8807:
/*!*****************************************************!*\
  !*** ./src/app/components/editor-page.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorPageComponent": () => (/* binding */ EditorPageComponent)
/* harmony export */ });
/* harmony import */ var _examples_contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../examples/contact-us.form.config */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_tools_src_lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/tools/src/lib/components/preview-editor/preview-editor.component */ 6406);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-header.component */ 1016);




class EditorPageComponent {
  constructor() {
    this.defaultModel = _examples_contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.uIModel;
    this.defaultDataModel = _examples_contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.dataModel;
  }
  ngOnInit() {
    this.scripts = _examples_contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.scripts;
  }
}
EditorPageComponent.ɵfac = function EditorPageComponent_Factory(t) {
  return new (t || EditorPageComponent)();
};
EditorPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EditorPageComponent,
  selectors: [["dc-editor-page"]],
  decls: 2,
  vars: 3,
  consts: [["title", "Editor"], ["title", "Profile form example", 1, "d-flex", 3, "initUiModel", "initDataModel", "scripts"]],
  template: function EditorPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "dc-page-header", 0)(1, "dc-preview-editor", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initUiModel", ctx.defaultModel)("initDataModel", ctx.defaultDataModel)("scripts", ctx.scripts);
    }
  },
  dependencies: [_projects_tools_src_lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_1__.PreviewEditorComponent, _page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent],
  styles: ["dc-preview-editor[_ngcontent-%COMP%] {\n      margin: 25px;\n    }\n    [_nghost-%COMP%] {\n      flex-direction: column;\n    }\n    [_nghost-%COMP%]     .mat-tab-body-wrapper {\n      min-height: 400px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3ItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGRjLXByZXZpZXctZWRpdG9yIHtcbiAgICAgIG1hcmdpbjogMjVweDtcbiAgICB9XG4gICAgOmhvc3Qge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3748:
/*!******************************************************!*\
  !*** ./src/app/components/example-view.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleViewComponent": () => (/* binding */ ExampleViewComponent)
/* harmony export */ });
/* harmony import */ var _examples_examples_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../examples/examples.config */ 9102);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_tools_src_lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/tools/src/lib/components/preview-editor/preview-editor.component */ 6406);
/* harmony import */ var _directives_json_formatter_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/json-formatter.directive */ 2597);








function ExampleViewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dc-preview-editor", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Data Model: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ex_r1 = ctx.ngIf;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ex_r1.name)("scripts", ex_r1.scripts)("initUiModel", ex_r1.uiModel)("initDataModel", ex_r1.dataModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("json", _r2.dataModelCopy);
  }
}
class ExampleViewComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.example = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(p => p.example), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(p => {
      const config = _examples_examples_config__WEBPACK_IMPORTED_MODULE_0__.EXAMPLES_LIST.find(({
        name
      }) => p.example === name);
      return config;
    }));
    this.route.params.subscribe(({
      example
    }) => {
      if (!example) {
        // Redirect to first example if it is not selected.
        this.router.navigate(['examples', _examples_examples_config__WEBPACK_IMPORTED_MODULE_0__.EXAMPLES_LIST[0].name]);
      }
    });
  }
}
ExampleViewComponent.ɵfac = function ExampleViewComponent_Factory(t) {
  return new (t || ExampleViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
ExampleViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ExampleViewComponent,
  selectors: [["dc-example"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "pb-4", 3, "title", "scripts", "initUiModel", "initDataModel"], ["editor", ""], [1, ""], ["dcJsonFormatter", "", 3, "json"]],
  template: function ExampleViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ExampleViewComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.example));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _projects_tools_src_lib_components_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_1__.PreviewEditorComponent, _directives_json_formatter_directive__WEBPACK_IMPORTED_MODULE_2__.JsonFormatterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n      padding: 25px;\n      flex-grow: 1;\n      display: flex;\n    }\n    dc-preview-editor[_ngcontent-%COMP%]     .mat-tab-body-wrapper {\n      min-height: 400px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCB7XG4gICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgZGMtcHJldmlldy1lZGl0b3IgOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3213:
/*!*********************************************************************!*\
  !*** ./src/app/components/examples-page/examples-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplesPageComponent": () => (/* binding */ ExamplesPageComponent)
/* harmony export */ });
/* harmony import */ var _examples_examples_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../examples/examples.config */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-bar/side-bar.component */ 6832);
/* harmony import */ var _sidenav_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav-layout.component */ 7066);





class ExamplesPageComponent {
  constructor() {}
  ngOnInit() {
    this.examples = (0,_examples_examples_config__WEBPACK_IMPORTED_MODULE_0__.getGroupedExamples)().map(({
      name,
      examples
    }) => ({
      name,
      list: examples
    }));
  }
}
ExamplesPageComponent.ɵfac = function ExamplesPageComponent_Factory(t) {
  return new (t || ExamplesPageComponent)();
};
ExamplesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ExamplesPageComponent,
  selectors: [["dc-examples-page"]],
  decls: 3,
  vars: 1,
  consts: [[1, "d-flex", "flex-column"], ["sidenav", "", 3, "groups"], ["content", ""]],
  template: function ExamplesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dc-sidenav-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dc-side-bar", 1)(2, "router-outlet", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("groups", ctx.examples);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__.SideBarComponent, _sidenav_layout_component__WEBPACK_IMPORTED_MODULE_2__.SidenavLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3937:
/*!*****************************************************!*\
  !*** ./src/app/components/guides-page.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidesPageComponent": () => (/* binding */ GuidesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component */ 1016);


class GuidesPageComponent {}
GuidesPageComponent.ɵfac = function GuidesPageComponent_Factory(t) {
  return new (t || GuidesPageComponent)();
};
GuidesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GuidesPageComponent,
  selectors: [["dc-guides-page"]],
  decls: 1,
  vars: 0,
  consts: [["title", "Guides"]],
  template: function GuidesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dc-page-header", 0);
    }
  },
  dependencies: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1274:
/*!***************************************************!*\
  !*** ./src/app/components/home-page.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ 982);


const packageJson = __webpack_require__(/*! ../../../package.json */ 4147);
class HomePageComponent {
  constructor() {
    this.version = packageJson.version;
  }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)();
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["dc-home-page"]],
  decls: 9,
  vars: 2,
  consts: [[1, "mat-h1"], [1, "mat-h3"], [1, "version"], [1, "container", "pt-5"], ["src", "README.md", "lineNumbers", "", 3, "start"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NGX Dynamic Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configuration based dynamic components library for Angular.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "markdown", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current version ", ctx.version, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("start", 5);
    }
  },
  dependencies: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownComponent],
  styles: ["header[_ngcontent-%COMP%] {\n      padding: 60px 0;\n      background: #3f51b5;\n      text-align: center;\n      color: white;\n    }\n    h1[_ngcontent-%COMP%] {\n      line-height: 60px;\n      font-size: 60px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDtJQUNBO01BQ0UsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBoZWFkZXIge1xuICAgICAgcGFkZGluZzogNjBweCAwO1xuICAgICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaDEge1xuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7951:
/*!*************************************************************************!*\
  !*** ./src/app/components/item-properties/item-properties.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPropertiesComponent": () => (/* binding */ ItemPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);





function ItemPropertiesComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    properties: a0,
    hasDefault: true
  };
};
function ItemPropertiesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Component properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ItemPropertiesComponent_div_0_ng_container_3_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r0.properties));
  }
}
function ItemPropertiesComponent_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    properties: a0
  };
};
function ItemPropertiesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Component events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ItemPropertiesComponent_div_1_ng_container_3_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r1.events));
  }
}
function ItemPropertiesComponent_ng_template_2_mat_header_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ItemPropertiesComponent_ng_template_2_mat_cell_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r16.name, " ");
  }
}
function ItemPropertiesComponent_ng_template_2_mat_header_cell_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ItemPropertiesComponent_ng_template_2_mat_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" '", element_r17.example, "' ");
  }
}
function ItemPropertiesComponent_ng_template_2_mat_header_cell_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ItemPropertiesComponent_ng_template_2_mat_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.description, "");
  }
}
function ItemPropertiesComponent_ng_template_2_mat_header_row_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function ItemPropertiesComponent_ng_template_2_mat_row_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
function ItemPropertiesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemPropertiesComponent_ng_template_2_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ItemPropertiesComponent_ng_template_2_mat_cell_3_Template, 2, 1, "mat-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ItemPropertiesComponent_ng_template_2_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ItemPropertiesComponent_ng_template_2_mat_cell_6_Template, 2, 1, "mat-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ItemPropertiesComponent_ng_template_2_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItemPropertiesComponent_ng_template_2_mat_cell_9_Template, 2, 1, "mat-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ItemPropertiesComponent_ng_template_2_mat_header_row_10_Template, 1, 0, "mat-header-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ItemPropertiesComponent_ng_template_2_mat_row_11_Template, 1, 0, "mat-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const properties_r6 = ctx.properties;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", properties_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
  }
}
class ItemPropertiesComponent {
  constructor() {
    this.displayedColumns = ['name', 'example', 'description'];
  }
  ngOnInit() {
    this.setProperties();
  }
  ngOnChanges({
    component
  }) {
    if (component.firstChange === false) {
      this.setProperties();
    }
  }
  setProperties() {
    const properties = this.component.itemProperties.prototype.properties;
    this.properties = properties.filter(p => p.type !== _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT);
    this.events = properties.filter(p => p.type === _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_0__.PropTypes.EVENT);
  }
}
ItemPropertiesComponent.ɵfac = function ItemPropertiesComponent_Factory(t) {
  return new (t || ItemPropertiesComponent)();
};
ItemPropertiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ItemPropertiesComponent,
  selectors: [["dc-item-properties"]],
  inputs: {
    component: "component"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 2,
  consts: [["class", "mb-4", 4, "ngIf"], ["propsTable", ""], [1, "mb-4"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "dataSource"], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "example"], ["matColumnDef", "description"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]],
  template: function ItemPropertiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemPropertiesComponent_div_0_Template, 4, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemPropertiesComponent_div_1_Template, 4, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemPropertiesComponent_ng_template_2_Template, 12, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.properties == null ? null : ctx.properties.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.events == null ? null : ctx.events.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
  styles: ["mat-header-cell[_ngcontent-%COMP%] {\n  background: #eeeeee;\n  color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pdGVtLXByb3BlcnRpZXMvaXRlbS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkNTSztFRFJMLHlCQ1lLO0FEYlAiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvX3ZhcnMuc2Nzcyc7XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQ6ICRncmF5O1xyXG4gIGNvbG9yOiAkdGV4dDtcclxufVxyXG4iLCJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5cclxuJGFwcC1wcmltYXJ5OiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRncmV5LXBhbGV0dGUpO1xyXG4kYXBwLWFjY2VudDogIG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGxpZ2h0LWJsdWUtcGFsZXR0ZSk7XHJcbiRhcHAtd2FybjogICAgbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kcGluay1wYWxldHRlKTtcclxuXHJcbiRwcmltYXJ5OiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYXBwLXByaW1hcnkpO1xyXG4kYWNjZW50OiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYXBwLWFjY2VudCk7XHJcbiR3YXJuOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYXBwLXdhcm4pO1xyXG5cclxuJGFjdGl2ZTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWF0LmRlZmluZS1wYWxldHRlKG1hdC4kaW5kaWdvLXBhbGV0dGUpKTtcclxuXHJcbiRncmF5OiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRncmV5LXBhbGV0dGUsIDIwMCkpO1xyXG4kbGlnaHRHcmF5OiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRncmV5LXBhbGV0dGUsIDUwKSk7XHJcbiRkYXJrR3JheTogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWF0LmRlZmluZS1wYWxldHRlKG1hdC4kZ3JleS1wYWxldHRlLCBBNDAwKSk7XHJcblxyXG4kdGV4dDogcmdiYSgwLCAwLCAwLCAuNSk7XHJcblxyXG4kcGFuZWxNYXJnaW46IDI1cHg7XHJcbiRzdGF0aWNTcGFjZTogMjVweDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 175:
/*!*********************************************!*\
  !*** ./src/app/components/nav.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




class NavComponent {}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)();
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["dc-nav"]],
  decls: 14,
  vars: 0,
  consts: [["color", "primary"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/components/categories"], ["mat-button", "", "routerLink", "/editor"], ["mat-button", "", "routerLink", "/examples"], ["mat-button", "", "routerLink", "/designer"], ["mat-button", "", "href", "https://github.com/FalconSoft/ngx-dynamic-components", 2, "margin-left", "100px"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NGX Dynamic Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Examples");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Github");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
  styles: [".example-spacer[_ngcontent-%COMP%] {\n      flex: 1 1 auto;\n    }\n    mat-toolbar[_ngcontent-%COMP%] {\n      min-height: 56px;\n    }\n    mat-toolbar-row[_ngcontent-%COMP%] {\n      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n      min-height: 56px;\n      position: relative;\n      flex-wrap: wrap;\n      height: auto;\n      z-index: 2;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UscUdBQXFHO01BQ3JHLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFlBQVk7TUFDWixVQUFVO0lBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZXhhbXBsZS1zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuICAgIG1hdC10b29sYmFyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgfVxuICAgIG1hdC10b29sYmFyLXJvdyB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1016:
/*!*****************************************************!*\
  !*** ./src/app/components/page-header.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);



class PageHeaderComponent {
  constructor() {
    this.opened = false;
    // eslint-disable-next-line @angular-eslint/no-output-native
    this.openPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
  return new (t || PageHeaderComponent)();
};
PageHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageHeaderComponent,
  selectors: [["dc-page-header"]],
  inputs: {
    title: "title",
    toggle: "toggle"
  },
  outputs: {
    openPage: "openPage"
  },
  decls: 4,
  vars: 1,
  consts: [["color", "primary"]],
  template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarRow],
  styles: ["mat-toolbar-row[_ngcontent-%COMP%] {\n      height: 80px;\n    }\n\n    h1[_ngcontent-%COMP%] {\n      font-weight: 300;\n      margin: 0;\n      padding: 28px 8px;\n      font-size: 20px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIG1hdC10b29sYmFyLXJvdyB7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDI4cHggOHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6832:
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarComponent": () => (/* binding */ SideBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 7591);





function SideBarComponent_mat_expansion_panel_1_mat_list_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.getUrl(group_r1, item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
  }
}
function SideBarComponent_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 2)(1, "mat-expansion-panel-header", 3)(2, "mat-panel-title")(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideBarComponent_mat_expansion_panel_1_mat_list_item_6_Template, 3, 2, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.list);
  }
}
class SideBarComponent {
  getUrl(group, item) {
    if (group.url) {
      return [...group.url, item.name];
    }
    return [item.name];
  }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) {
  return new (t || SideBarComponent)();
};
SideBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SideBarComponent,
  selectors: [["dc-side-bar"]],
  inputs: {
    groups: "groups"
  },
  decls: 2,
  vars: 1,
  consts: [["multi", "true", 1, "side-bar", "scrollbar"], ["expanded", "true", 4, "ngFor", "ngForOf"], ["expanded", "true"], ["expandedHeight", "36px", "collapsedHeight", "36px"], [1, "title"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"], ["routerLinkActive", "active", 3, "routerLink"]],
  template: function SideBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideBarComponent_mat_expansion_panel_1_Template, 7, 2, "mat-expansion-panel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelTitle],
  styles: ["mat-accordion.side-bar[_ngcontent-%COMP%] {\n  display: block;\n  margin: 25px;\n  width: 240px;\n  max-height: 75vh;\n  overflow: auto;\n}\n@media only screen and (max-width: 400px) {\n  mat-accordion.side-bar[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  border-radius: 0;\n  border-bottom: solid 1px #bdbdbd;\n  box-shadow: none;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  text-decoration: none;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], mat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-family: Arial;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 0;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 5px 15px 5px 20px;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]     .mat-expansion-panel-body {\n  padding: 0;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]     .mat-expansion-panel-body .mat-list-item-content {\n  padding: 0;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]     .mat-expansion-indicator::after {\n  border-width: 0 1px 1px 0;\n  margin-bottom: 5px;\n}\nmat-accordion.side-bar[_ngcontent-%COMP%]     .mat-expansion-panel-spacing {\n  margin: 0;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFlDY1k7RURiWixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7QUFFRTtFQU5GO0lBT0ksU0FBQTtFQUNGO0FBQ0Y7QUFDRTtFQUNFLHlCQ0RHO0VERUgsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFFSTtFQUNFLHlCQ1BDO0VEUUQscUJBQUE7QUFBTjtBQUNNO0VBQ0UsY0NoQkM7QURpQlQ7QUFHSTtFQUNFLGVBQUE7QUFETjtBQUVNO0VBQ0UseUJDakJEO0VEa0JDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQVI7QUFJSTtFQUNFLFVBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUhOO0FBUUk7RUFDRSxVQUFBO0FBTk47QUFRTTtFQUNFLFVBQUE7QUFOUjtBQVVJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVJOO0FBV0k7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7QUFUTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvX3ZhcnMuc2Nzc1wiO1xyXG5cclxubWF0LWFjY29yZGlvbi5zaWRlLWJhciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAkcGFuZWxNYXJnaW47XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGRhcmtHcmF5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHRleHQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgJi5hY3RpdmUsJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY3RpdmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogJHRleHQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdC1saXN0IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtbGlzdC1pdGVtIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4kYXBwLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSk7XHJcbiRhcHAtYWNjZW50OiAgbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kbGlnaHQtYmx1ZS1wYWxldHRlKTtcclxuJGFwcC13YXJuOiAgICBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRwaW5rLXBhbGV0dGUpO1xyXG5cclxuJHByaW1hcnk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhcHAtcHJpbWFyeSk7XHJcbiRhY2NlbnQ6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhcHAtYWNjZW50KTtcclxuJHdhcm46IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhcHAtd2Fybik7XHJcblxyXG4kYWN0aXZlOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRpbmRpZ28tcGFsZXR0ZSkpO1xyXG5cclxuJGdyYXk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSwgMjAwKSk7XHJcbiRsaWdodEdyYXk6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZXktcGFsZXR0ZSwgNTApKTtcclxuJGRhcmtHcmF5OiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRncmV5LXBhbGV0dGUsIEE0MDApKTtcclxuXHJcbiR0ZXh0OiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHJcbiRwYW5lbE1hcmdpbjogMjVweDtcclxuJHN0YXRpY1NwYWNlOiAyNXB4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7066:
/*!********************************************************!*\
  !*** ./src/app/components/sidenav-layout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavLayoutComponent": () => (/* binding */ SidenavLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component */ 1016);







function SidenavLayoutComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
  }
}
function SidenavLayoutComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1);
  }
}
function SidenavLayoutComponent_mat_sidenav_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 4)(1, "mat-sidenav", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav-content")(5, "dc-page-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openPage", function SidenavLayoutComponent_mat_sidenav_container_4_Template_dc_page_header_openPage_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r7.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
function SidenavLayoutComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dc-page-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-drawer-container", 10)(2, "mat-drawer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-drawer-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
const _c0 = [[["", "sidenav", ""]], [["", "content", ""]]];
const _c1 = ["[sidenav]", "[content]"];
class SidenavLayoutComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isHandSet$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(r => r.matches));
  }
}
SidenavLayoutComponent.ɵfac = function SidenavLayoutComponent_Factory(t) {
  return new (t || SidenavLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver));
};
SidenavLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SidenavLayoutComponent,
  selectors: [["dc-sidenav-layout"]],
  inputs: {
    title: "title"
  },
  ngContentSelectors: _c1,
  decls: 8,
  vars: 4,
  consts: [["sidenav", ""], ["content", ""], ["fxFlex", "1 1 auto", 4, "ngIf", "ngIfElse"], ["desktopLayout", ""], ["fxFlex", "1 1 auto"], ["mode", "over", "opened", "false"], ["drawer", ""], [3, "ngTemplateOutlet"], ["toggle", "true", 3, "title", "openPage"], ["title", "Components"], [1, "page-drawer", "d-flex", "flex-fill"], ["mode", "side", "opened", "true"], [1, "flex-fill"]],
  template: function SidenavLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidenavLayoutComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidenavLayoutComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidenavLayoutComponent_mat_sidenav_container_4_Template, 7, 3, "mat-sidenav-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SidenavLayoutComponent_ng_template_6_Template, 6, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.isHandSet$))("ngIfElse", _r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2597:
/*!********************************************************!*\
  !*** ./src/app/directives/json-formatter.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonFormatterDirective": () => (/* binding */ JsonFormatterDirective)
/* harmony export */ });
/* harmony import */ var json_formatter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-formatter-js */ 8850);
/* harmony import */ var json_formatter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_formatter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class JsonFormatterDirective {
  constructor(elRef) {
    this.elRef = elRef;
  }
  ngOnChanges() {
    if (this.json) {
      const formatter = new (json_formatter_js__WEBPACK_IMPORTED_MODULE_0___default())(this.json);
      this.elRef.nativeElement.innerHTML = '';
      this.elRef.nativeElement.appendChild(formatter.render());
    }
  }
}
JsonFormatterDirective.ɵfac = function JsonFormatterDirective_Factory(t) {
  return new (t || JsonFormatterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};
JsonFormatterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: JsonFormatterDirective,
  selectors: [["", "dcJsonFormatter", ""]],
  inputs: {
    json: "json"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 9568:
/*!****************************************************!*\
  !*** ./src/app/examples/contact-us.form.config.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataModel": () => (/* binding */ dataModel),
/* harmony export */   "scripts": () => (/* binding */ scripts),
/* harmony export */   "uIModel": () => (/* binding */ uIModel)
/* harmony export */ });
const uIModel = `
  <form onSubmit="contactUs()">
    <h3>Contact us</h3>
    <div class="row">
      <div class="col-12 col-md-4 mb-2">
        <label>Full Name*</label>
        <input class="form-control" binding="$.fullName" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>E-mail Address*</label>
        <input class="form-control" binding="$.email" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>Phone</label>
        <input type="tel" class="form-control" binding="$.phone" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Message</label>
        <textarea class="form-control" rows="5" onInput="onChange()" binding="$.message" required="true" />
      </div>
    </div>
    <div class="row">
      <div class="col ml-auto">
        <button class="btn btn-primary" id="submitBtn" disabled="false" type="submit">SEND MESSAGE</button>
      </div>
    </div>
  </form>
`;
const dataModel = {};
const scripts = `
# Evaluated with JSPython https://jspython.dev/

def onChange():
  btn = getComponentById(rootUIModel, "submitBtn")

  if dataModel.fullName == null or dataModel.email == null or dataModel.message == null:
    btn.disabled = true
  else:
    btn.disabled = null

def contactUs():
  alert(JSON.stringify(dataModel))

`;

/***/ }),

/***/ 9102:
/*!*********************************************!*\
  !*** ./src/app/examples/examples.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXAMPLES_LIST": () => (/* binding */ EXAMPLES_LIST),
/* harmony export */   "getGroupedExamples": () => (/* binding */ getGroupedExamples)
/* harmony export */ });
/* harmony import */ var _contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.form.config */ 9568);

const EXAMPLES_LIST = [{
  type: 'contact-us',
  name: 'contact-us',
  uiModel: _contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.uIModel,
  dataModel: _contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.dataModel,
  scripts: _contact_us_form_config__WEBPACK_IMPORTED_MODULE_0__.scripts
}];
function getGroupedExamples() {
  const groups = EXAMPLES_LIST.reduce((map, ex) => {
    map[ex.type] = map[ex.type] || [];
    map[ex.type].push(ex);
    return map;
  }, {});
  return Object.entries(groups).map(([key, val]) => ({
    name: key,
    examples: val
  }));
}

/***/ }),

/***/ 7225:
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS_LIST": () => (/* binding */ COMPONENTS_LIST),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "getPackageCategories": () => (/* binding */ getPackageCategories),
/* harmony export */   "getSlugFromStr": () => (/* binding */ getSlugFromStr)
/* harmony export */ });
/* harmony import */ var _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-dynamic-components/bootstrap */ 8502);
/* harmony import */ var _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-dynamic-components/core */ 5887);


function getSlugFromStr(str) {
  return str.replace(/ /g, '-').toLocaleLowerCase();
}
const COMPONENTS_LIST = [..._ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_1__.COMPONENTS_LIST, ..._ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_0__.COMPONENTS_LIST];
function getCategories() {
  return [..._ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_1__.getCategories(), ..._ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_0__.getCategories()];
}
function getPackageCategories() {
  return [{
    packageName: 'Core',
    categories: _ngx_dynamic_components_core__WEBPACK_IMPORTED_MODULE_1__.getCategories()
  }, {
    packageName: 'Bootstrap',
    categories: _ngx_dynamic_components_bootstrap__WEBPACK_IMPORTED_MODULE_0__.getCategories()
  }
  // , {
  //   packageName: 'Material',
  //   categories: mat.getCategories()
  // }
  ];
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "installPatch": () => (/* binding */ installPatch)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
// A few lines of code used for debugging (saved to avoid having to re-write them)
// let reflistToString = (list: DropListRef[]) => JSON.stringify(list.map(ref => coerceElement(ref.element).id));
// console.log("Targets: " + reflistToString(targets));
function installPatch() {
  _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DropListRef.prototype._getSiblingContainerFromPosition = function (item, x, y) {
    // Possible targets include siblings and 'this'
    const targets = [this, ...this._siblings];
    // Only consider targets where the drag postition is within the client rect
    // (this avoids calling enterPredicate on each possible target)
    const matchingTargets = targets.filter(ref => ref._clientRect && isInsideClientRect(ref._clientRect, x, y));
    // Stop if no targets match the coordinates
    if (matchingTargets.length === 0) {
      return undefined;
    }
    // Order candidates by DOM hierarchy and z-index
    let orderedMatchingTargets = orderByHierarchy(matchingTargets);
    // The drop target is the last matching target in the list
    let matchingTarget = orderedMatchingTargets[orderedMatchingTargets.length - 1];
    // Only return matching target if it is a sibling
    if (matchingTarget === this) {
      return undefined;
    }
    // Can the matching target receive the item?
    if (!matchingTarget._canReceive(item, x, y)) {
      return undefined;
    }
    // Return matching target
    return matchingTarget;
  };
}
// Not possible to improt isInsideClientRect from @angular/cdk/drag-drop/client-rect
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
// Order a list of DropListRef so that for nested pairs, the outer DropListRef
// is preceding the inner DropListRef. Should probably be ammended to also
// sort by Z-level.
function orderByHierarchy(refs) {
  // Build a map from HTMLElement to DropListRef
  let refsByElement = new Map();
  refs.forEach(ref => {
    refsByElement.set((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceElement)(ref.element), ref);
  });
  // Function to identify the closest ancestor among th DropListRefs
  let findAncestor = ref => {
    let ancestor = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceElement)(ref.element).parentElement;
    while (ancestor) {
      if (refsByElement.has(ancestor)) {
        return refsByElement.get(ancestor);
      }
      ancestor = ancestor.parentElement;
    }
    return undefined;
  };
  // Add all refs as nodes to the tree
  let tree = new Map();
  refs.forEach(ref => {
    tree.set(ref, {
      ref,
      children: []
    });
  });
  // Build parent-child links in tree
  refs.forEach(ref => {
    let parent = findAncestor(ref);
    if (parent) {
      let node = tree.get(ref);
      let parentNode = tree.get(parent);
      node.parent = parentNode;
      parentNode.children.push(node);
    }
  });
  // Find tree roots
  let roots = Array.from(tree.values()).filter(node => !node.parent);
  // Function to recursively build ordered list from roots and down
  let buildOrderedList = (nodes, list) => {
    list.push(...nodes.map(node => node.ref));
    nodes.forEach(node => {
      buildOrderedList(node.children, list);
    });
  };
  // Build and return the ordered list
  let ordered = [];
  buildOrderedList(roots, ordered);
  return ordered;
}
installPatch();

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ngx-dynamic-components","version":"15.2.2","description":"NGX Dynamic Components is a configuration based dynamic components library for Angular. That allows you to rapidly create dynamic forms or any other mobile-friendly web layouts.","author":"FalconSoft Ltd","repository":{"type":"git","url":"https://github.com/FalconSoft/ngx-dynamic-components"},"homepage":"https://falconsoft.github.io/ngx-dynamic-components/","keywords":[],"license":"MIT","scripts":{"setup":"npm i && npm run build:libs","ng":"ng","start":"ng serve --configuration=development","build":"ng build","build:libs":"ng build core --configuration production && ng build bootstrap --configuration production && ng build tools --configuration production","public:publish":"cd dist/@ngx-dynamic-components/core && npm publish && cd ../bootstrap && npm publish && cd ../tools && npm publish && cd ../../../","build:publish":"npm run build:libs && npm run public:publish","build:gh":"ng build --configuration development --base-href=/ngx-dynamic-components/","deploy:gh":"npm run build:libs && npm run build:gh && npx ngh --dir=dist/ngx-dynamic-components/","test":"ng test","lint":"ng lint","e2e":"ng e2e","prepare":"husky install","postinstall":"ngcc","fix":"ng serve --configuration=fix"},"dependencies":{"@angular/animations":"^15.1.1","@angular/cdk":"^15.1.1","@angular/common":"^15.1.1","@angular/compiler":"^15.1.1","@angular/core":"^15.1.1","@angular/forms":"^15.1.1","@angular/material":"^15.1.0","@angular/platform-browser":"^15.1.1","@angular/platform-browser-dynamic":"^15.1.1","@angular/router":"^15.1.1","@ng-select/ng-select":"^10.0.3","ace-builds":"^1.14.0","angular-resizable-element":"^7.0.2","angular-split":"^14.1.0","bootstrap":"^5.2.3","core-js":"^3.19.3","font-awesome":"^4.7.0","isomorphic-xml2js":"0.1.3","json-formatter-js":"^2.3.4","jspython-interpreter":"^2.1.13","ngx-bootstrap":"^10.2.0","ngx-markdown":"^15.1.0","rxjs":"^7.6.0","tslib":"^2.4.1","zone.js":"~0.12.0"},"devDependencies":{"@angular-devkit/build-angular":"~15.1.2","@angular-eslint/builder":"^15.1.0","@angular-eslint/eslint-plugin":"^15.1.0","@angular-eslint/eslint-plugin-template":"^15.1.0","@angular-eslint/schematics":"15.1.0","@angular-eslint/template-parser":"^15.1.0","@angular/cli":"^15.1.2","@angular/compiler-cli":"^15.1.1","@angular/language-service":"^15.1.1","@types/eslint":"^8.2.1","@types/estree":"^1.0.1","@types/jasmine":"~3.7.7","@types/jasminewd2":"^2.0.9","@types/node":"^12.19.11","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","angular-cli-ghpages":"^1.0.0","codelyzer":"^6.0.0","eslint":"^8.31.0","eslint-plugin-import":"2.27.4","eslint-plugin-jsdoc":"39.6.4","eslint-plugin-prefer-arrow":"1.2.3","husky":"^8.0.3","jasmine-core":"~3.8.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.4","karma-chrome-launcher":"~3.1.0","karma-coverage-istanbul-reporter":"^3.0.3","karma-jasmine":"~4.0.1","karma-jasmine-html-reporter":"^1.6.0","ng-packagr":"^15.1.0","protractor":"~7.0.0","ts-node":"~7.0.0","tslint":"~6.1.3","typescript":"~4.8.4"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map