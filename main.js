"use strict";
(self["webpackChunkyoutube_client"] = self["webpackChunkyoutube_client"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/pages/page-not-found/page-not-found.component */ 1477);
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/authentication.guard */ 9073);
/* harmony import */ var _core_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/login.guard */ 8042);
/* harmony import */ var _core_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/pages/admin/admin.component */ 9491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
}, {
  path: 'main',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_youtube_youtube_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./youtube/youtube.module */ 3756)).then(m => m.default),
  canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__["default"]]
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.default),
  canActivate: [_core_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["default"]]
}, {
  path: 'admin',
  component: _core_pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["default"],
  canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__["default"]]
}, {
  path: '404',
  component: _core_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '**',
  redirectTo: '404',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
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
/* harmony export */   "default": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/header/header.component */ 5123);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor() {
    this.title = 'youtube-client';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    }
  },
  dependencies: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["default"], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/authentication.guard */ 9073);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/reducers */ 8832);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["default"]]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["default"]],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__["default"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["default"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot({
    youtube: _redux_reducers__WEBPACK_IMPORTED_MODULE_4__.reducer
  }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.isDevMode)()
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__["default"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["default"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__.StoreDevtoolsModule]
  });
})();

/***/ }),

/***/ 9790:
/*!************************************************!*\
  !*** ./src/app/auth/services/login.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 4617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class LoginService {
  constructor(router, localStorageService) {
    this.router = router;
    this.localStorageService = localStorageService;
    this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
    const authToken = this.localStorageService.getItem('authToken');
    if (authToken) {
      this.isUserLoggedIn.next(true);
    }
  }
  userLogin(name, password) {
    this.isUserLoggedIn.next(true);
    this.router.navigate(['/']);
    this.localStorageService.setItem('authToken', `${name}-${password}`);
  }
  userLogout() {
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
    this.localStorageService.removeItem('authToken');
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["default"]));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5123:
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_filter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/filter.service */ 1375);
/* harmony import */ var src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/search.service */ 3095);
/* harmony import */ var src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/sort.service */ 5993);
/* harmony import */ var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/services/login.service */ 9790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);










function HeaderComponent_header_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_header_0_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 2)(1, "div", 3)(2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.toMainPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 5)(4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HeaderComponent_header_0_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.searchText = $event);
    })("keyup", function HeaderComponent_header_0_Template_input_keyup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.showFilteringBlock = !ctx_r9.showFilteringBlock);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8)(7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "To admin page \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.toAdminPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HeaderComponent_header_0_button_10_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.toCustomCards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "To custom cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isUserLoggedIn);
  }
}
function HeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sorting by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.changeSortKey("date"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.changeSortKey("views"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "count of views");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "by word or sentence");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_1_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.filterText = $event);
    })("input", function HeaderComponent_div_1_Template_input_input_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sort-asc", ctx_r1.sortKey === "dateAsc")("sort-desc", ctx_r1.sortKey === "dateDesc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sort-asc", ctx_r1.sortKey === "viewsAsc")("sort-desc", ctx_r1.sortKey === "viewsDesc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("filter-active", ctx_r1.filterText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.filterText);
  }
}
class HeaderComponent {
  constructor(sortService, searchService, filterService, loginService, router) {
    this.sortService = sortService;
    this.searchService = searchService;
    this.filterService = filterService;
    this.loginService = loginService;
    this.router = router;
    this.showFilteringBlock = false;
    this.sortKey = '';
    this.filterText = '';
    this.searchText = '';
    this.isUserLoggedIn = false;
  }
  ngOnInit() {
    this.loginService.isUserLoggedIn$.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }
  search() {
    if (this.router.url !== 'main') {
      this.router.navigate(['main']);
    }
    this.searchService.setSearchText(this.searchText);
  }
  changeSortKey(key) {
    switch (key) {
      case 'date':
        if (this.sortKey === 'dateAsc') {
          this.sortKey = 'dateDesc';
        } else if (this.sortKey === 'dateDesc') {
          this.sortKey = '';
        } else {
          this.sortKey = 'dateAsc';
        }
        break;
      case 'views':
        if (this.sortKey === 'viewsAsc') {
          this.sortKey = 'viewsDesc';
        } else if (this.sortKey === 'viewsDesc') {
          this.sortKey = '';
        } else {
          this.sortKey = 'viewsAsc';
        }
        break;
      default:
        this.sortKey = '';
    }
    this.setSortKey(this.sortKey);
  }
  setSortKey(sortKey) {
    this.sortService.setSortKey(sortKey);
  }
  setFilter() {
    this.filterService.setFilter(this.filterText);
  }
  logout() {
    this.loginService.userLogout();
  }
  toLoginPage() {
    this.router.navigate(['/login']);
  }
  toMainPage() {
    this.router.navigate(['/']);
  }
  toAdminPage() {
    this.router.navigate(['/admin']);
  }
  toCustomCards() {
    this.router.navigate(['main/custom-cards']);
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_2__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_filter_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 2,
  vars: 2,
  consts: [["class", "header", 4, "ngIf"], ["class", "search-wrapper", 4, "ngIf"], [1, "header"], [1, "search-block"], ["src", "./assets/img/logo.png", "alt", "", 1, "search-block__logo-image", 3, "click"], ["appearance", "fill", 1, "search-block__mat-input"], ["matInput", "", "type", "text", "placeholder", "What do you want to find out?", 1, "search-block__input", 3, "ngModel", "ngModelChange", "keyup"], ["src", "./assets/img/search_settings.png", "alt", "", 1, "search-block__settings-image", 3, "click"], [1, "login-information"], [1, "login-information__username"], ["src", "./assets/img/login.png", "alt", "", 1, "login-information__image", 3, "click"], ["class", "card__button", "title", "logout", 3, "click", 4, "ngIf"], ["title", "customCards", 1, "card__button", 3, "click"], ["title", "logout", 1, "card__button", 3, "click"], [1, "search-wrapper"], [1, "search-wrapper__search-filter"], [1, "search-filter__label"], [1, "search-filter__sort-by-date", 3, "click"], [1, "search-filter__sort-by-views", 3, "click"], [1, "search-filter__sort-by-text-label"], ["type", "text", 1, "search-filter__sort-by-text-input", 3, "ngModel", "ngModelChange", "input"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 13, 2, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 11, 11, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showFilteringBlock);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: ["@charset \"UTF-8\";\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  width: 100vw;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.75rem;\n  background-color: #e5e5e5;\n}\n\n.search-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 572px;\n}\n\n.search-block__logo-image[_ngcontent-%COMP%] {\n  transition: 0.3s ease;\n}\n.search-block__logo-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.search-block__logo-image[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  transition: 0.3s ease;\n}\n\n.search-block__mat-input[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 476px;\n  padding: 0;\n}\n.search-block__mat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n  .mdc-line-ripple {\n  display: none;\n}\n\n  .mat-mdc-form-field-flex {\n  background-color: #efefef;\n}\n\n  .mat-mdc-form-field-infix {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.search-block__button[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 24px;\n  margin-left: 10px;\n  color: #ffffff;\n  background-color: #2F80ED;\n  border: none;\n  box-shadow: 3px 0 5px 2px rgba(47, 129, 237, 0.5137254902);\n  border-radius: 0px 4px 4px 0px;\n  transition: 0.3s ease;\n}\n.search-block__button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.search-block__button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n\n.search-block__settings-image[_ngcontent-%COMP%] {\n  transition: 0.3s ease;\n}\n.search-block__settings-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.search-block__settings-image[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  transition: 0.3s ease;\n}\n\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-bottom: none;\n}\n\n.login-information[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 134px;\n  display: flex;\n  align-items: center;\n}\n\n.login-information__image[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  transition: 0.3s ease;\n}\n.login-information__image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.login-information__image[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  transition: 0.3s ease;\n}\n\n.search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.75rem;\n  background-color: #e5e5e5;\n}\n\n.search-wrapper__search-filter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 479px;\n  margin-right: 81px;\n  color: #2F80ED;\n}\n\n.search-filter__label[_ngcontent-%COMP%] {\n  color: #929292;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.search-filter__sort-by-date[_ngcontent-%COMP%], .search-filter__sort-by-views[_ngcontent-%COMP%], .search-filter__sort-by-text-label[_ngcontent-%COMP%] {\n  color: #2F80ED;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.search-filter__sort-by-date[_ngcontent-%COMP%]:hover, .search-filter__sort-by-views[_ngcontent-%COMP%]:hover, .search-filter__sort-by-text-label[_ngcontent-%COMP%]:hover {\n  color: #5EA2FF;\n}\n\n.search-filter__sort-by-text-input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 149px;\n  height: 13px;\n  margin: 0;\n  padding: 0 0 0 5px;\n  font: inherit;\n  border: none;\n}\n\n.search-filter_ascending[_ngcontent-%COMP%] {\n  border-bottom: #2F80ED solid 1px;\n}\n\n.search-filter_descending[_ngcontent-%COMP%] {\n  border-top: #2F80ED solid 1px;\n}\n\n.sort-asc[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sort-asc[_ngcontent-%COMP%]::after {\n  content: \"\u2197\";\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  width: 15px;\n  height: 15px;\n}\n\n.sort-desc[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sort-desc[_ngcontent-%COMP%]::after {\n  content: \"\u2198\";\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  width: 15px;\n  height: 15px;\n}\n\n.filter-active[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filter-active[_ngcontent-%COMP%]::after {\n  content: \"\u2713\";\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  width: 15px;\n  height: 15px;\n}\n\n.logout-image[_ngcontent-%COMP%] {\n  width: 25px;\n  margin-left: 10px;\n}\n.logout-image[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n.logout-image[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.card__button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 32px;\n  margin-left: 20px;\n  color: #ffffff;\n  background-color: #2F80ED;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 0 5px 2px rgba(47, 129, 237, 0.5137254902);\n}\n.card__button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.card__button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGlDQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtBQURKO0FBSUU7RUFDRSxzQkFBQTtFQUVBLHFCQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSkY7QUFNRTtFQUNFLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBEQUFBO0VBQ0EsOEJBQUE7RUFFQSxxQkFBQTtBQVBGO0FBU0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtBQVJKO0FBV0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtBQVZKOztBQWNBO0VBQ0UscUJBQUE7QUFYRjtBQWFFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7QUFaSjtBQWVFO0VBQ0Usc0JBQUE7RUFFQSxxQkFBQTtBQWRKOztBQWtCQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtFQUVBLHFCQUFBO0FBaEJGO0FBa0JFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7QUFqQko7QUFvQkU7RUFDRSxzQkFBQTtFQUVBLHFCQUFBO0FBbkJKOztBQXVCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGlDQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUF2QkY7O0FBMEJBOzs7RUFHRSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUF2QkY7QUF5QkU7OztFQUNFLGNBQUE7QUFyQko7O0FBeUJBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLGdDQUFBO0FBeEJGOztBQTJCQTtFQUNFLDZCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGtCQUFBO0FBeEJGO0FBMEJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXhCSjs7QUE0QkE7RUFDRSxrQkFBQTtBQXpCRjtBQTJCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF6Qko7O0FBNkJBO0VBQ0Usa0JBQUE7QUExQkY7QUE0QkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBMUJKOztBQThCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQTNCRjtBQTZCRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQTNCSjtBQThCRTtFQUNFLHNCQUFBO0FBNUJKOztBQWdDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtBQTlCRjtBQWdDRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0FBL0JKO0FBa0NFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUFqQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG59XHJcblxyXG4uc2VhcmNoLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1NzJweDtcclxufVxyXG5cclxuLnNlYXJjaC1ibG9ja19fbG9nby1pbWFnZSB7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJsb2NrX19tYXQtaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgd2lkdGg6IDQ3NnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tZGMtbGluZS1yaXBwbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJsb2NrX19idXR0b24ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGODBFRDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgNXB4IDJweCAjMmY4MWVkODM7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xyXG5cclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFQTJGRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFiMWIxO1xyXG4gICAgY29sb3I6ICNkY2RjZGM7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1ibG9ja19fc2V0dGluZ3MtaW1hZ2Uge1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4taW5mb3JtYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTM0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4taW5mb3JtYXRpb25fX2ltYWdlIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG5cclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG59XHJcblxyXG4uc2VhcmNoLXdyYXBwZXJfX3NlYXJjaC1maWx0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ3OXB4O1xyXG4gIG1hcmdpbi1yaWdodDogODFweDtcclxuXHJcbiAgY29sb3I6ICMyRjgwRUQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmlsdGVyX19sYWJlbCB7XHJcbiAgY29sb3I6ICM5MjkyOTI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmlsdGVyX19zb3J0LWJ5LWRhdGUsXHJcbi5zZWFyY2gtZmlsdGVyX19zb3J0LWJ5LXZpZXdzLFxyXG4uc2VhcmNoLWZpbHRlcl9fc29ydC1ieS10ZXh0LWxhYmVsIHtcclxuICBjb2xvcjogIzJGODBFRDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICM1RUEyRkY7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWZpbHRlcl9fc29ydC1ieS10ZXh0LWlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxNDlweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuXHJcbiAgZm9udDogaW5oZXJpdDtcclxuXHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWZpbHRlcl9hc2NlbmRpbmcge1xyXG4gIGJvcmRlci1ib3R0b206ICMyRjgwRUQgc29saWQgMXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZpbHRlcl9kZXNjZW5kaW5nIHtcclxuICBib3JkZXItdG9wOiAjMkY4MEVEIHNvbGlkIDFweDtcclxufVxyXG5cclxuLnNvcnQtYXNjIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMTk3XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc29ydC1kZXNjIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMTk4XCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMjcxM1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvdXQtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRfX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGODBFRDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAwIDVweCAycHggIzJmODFlZDgzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RUEyRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcclxuICAgIGNvbG9yOiAjZGNkY2RjO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 5123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class CoreModule {}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["default"]]
  });
})();

/***/ }),

/***/ 9073:
/*!*****************************************************!*\
  !*** ./src/app/core/guards/authentication.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local-storage.service */ 4617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthenticationGuard {
  constructor(localStorageService, router) {
    this.localStorageService = localStorageService;
    this.router = router;
  }
  canActivate() {
    const authToken = this.localStorageService.getItem('authToken');
    if (authToken) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) {
  return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthenticationGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthenticationGuard,
  factory: AuthenticationGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8042:
/*!********************************************!*\
  !*** ./src/app/core/guards/login.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local-storage.service */ 4617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class LoginGuard {
  constructor(localStorageService, router) {
    this.localStorageService = localStorageService;
    this.router = router;
  }
  canActivate() {
    const authToken = this.localStorageService.getItem('authToken');
    if (!authToken) {
      return true;
    }
    this.router.navigate(['/main']);
    return false;
  }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) {
  return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoginGuard,
  factory: LoginGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9491:
/*!*****************************************************!*\
  !*** ./src/app/core/pages/admin/admin.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/actions */ 5905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);








function AdminComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The title is too short. Minimum length is 3. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The title is too long. Maximum length is 20. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The description is too long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a link to the image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The image link is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a link to the video ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The video link is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a creation date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The date is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Entered date: ", ctx_r10.createDate(ctx_r10.creationDate == null ? null : ctx_r10.creationDate.value), "");
  }
}
const _c0 = function (a0, a1) {
  return {
    "has-error": a0,
    "validated": a1
  };
};
class AdminComponent {
  constructor(fb, store, router) {
    this.fb = fb;
    this.store = store;
    this.router = router;
    this.adminForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(20)]],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(255)],
      imageLink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(http(s?):\/\/).+(\.(jpeg|jpg|png|gif))$/)]],
      videoLink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(http(s?):\/\/).+(\.(mp4|mpeg|avi|mov))$/)]],
      creationDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, this.dateValidator]]
    });
  }
  dateValidator(control) {
    const date = new Date(control.value);
    return date < new Date() ? null : {
      futureDate: true
    };
  }
  get title() {
    return this.adminForm.get('title');
  }
  get description() {
    return this.adminForm.get('description');
  }
  get imageLink() {
    return this.adminForm.get('imageLink');
  }
  get videoLink() {
    return this.adminForm.get('videoLink');
  }
  get creationDate() {
    return this.adminForm.get('creationDate');
  }
  createDate(value) {
    if (!value) return null;
    return new Date(value).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }
  onSubmit() {
    const customCard = {
      title: this.adminForm.value.title,
      description: this.adminForm.value.description || '',
      imageLink: this.adminForm.value.imageLink,
      videoLink: this.adminForm.value.videoLink,
      creationDate: this.createDate(`${this.adminForm.value.creationDate}`)
    };
    this.store.dispatch((0,src_app_redux_actions__WEBPACK_IMPORTED_MODULE_0__.addCustomCard)({
      customCard: customCard
    }));
    this.router.navigate(['main/custom-cards']);
  }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) {
  return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AdminComponent,
  selectors: [["app-admin"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 36,
  vars: 33,
  consts: [[1, "auth-wrapper", 3, "formGroup", "ngSubmit"], [1, "auth-header"], [1, "auth_input-header"], ["name", "title", "type", "text", "formControlName", "title", "required", "", 1, "auth_input", 3, "ngClass"], [4, "ngIf"], ["name", "description", "type", "text", "formControlName", "description", 1, "auth_input", 3, "ngClass"], ["name", "imageLink", "type", "text", "formControlName", "imageLink", "required", "", 1, "auth_input", 3, "ngClass"], ["name", "videoLink", "type", "text", "formControlName", "videoLink", "required", "", 1, "auth_input", 3, "ngClass"], ["name", "creationDate", "type", "text", "formControlName", "creationDate", "required", "", 1, "auth_input", 3, "ngClass"], ["type", "submit", 1, "auth_login-button", 3, "disabled"]],
  template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create new card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label")(4, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminComponent_div_7_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminComponent_div_8_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminComponent_div_9_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label")(11, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminComponent_div_14_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label")(16, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Link image");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminComponent_div_19_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AdminComponent_div_20_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label")(22, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Link video");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminComponent_div_25_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminComponent_div_26_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label")(28, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Creation date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AdminComponent_div_31_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AdminComponent_div_32_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AdminComponent_div_33_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Create card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.adminForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c0, (ctx.title == null ? null : ctx.title.errors) && (ctx.title == null ? null : ctx.title.dirty), !(ctx.title == null ? null : ctx.title.errors) && (ctx.title == null ? null : ctx.title.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.title == null ? null : ctx.title.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.title == null ? null : ctx.title.dirty) && (ctx.title == null ? null : ctx.title.errors == null ? null : ctx.title.errors["minlength"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.title == null ? null : ctx.title.dirty) && (ctx.title == null ? null : ctx.title.errors == null ? null : ctx.title.errors["maxlength"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](21, _c0, (ctx.description == null ? null : ctx.description.errors) && (ctx.description == null ? null : ctx.description.dirty), !(ctx.description == null ? null : ctx.description.errors) && (ctx.description == null ? null : ctx.description.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.description == null ? null : ctx.description.dirty) && (ctx.description == null ? null : ctx.description.errors == null ? null : ctx.description.errors["maxlength"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](24, _c0, (ctx.imageLink == null ? null : ctx.imageLink.errors) && (ctx.imageLink == null ? null : ctx.imageLink.dirty), !(ctx.imageLink == null ? null : ctx.imageLink.errors) && (ctx.imageLink == null ? null : ctx.imageLink.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.imageLink == null ? null : ctx.imageLink.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.imageLink == null ? null : ctx.imageLink.errors) && (ctx.imageLink == null ? null : ctx.imageLink.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](27, _c0, (ctx.videoLink == null ? null : ctx.videoLink.errors) && (ctx.videoLink == null ? null : ctx.videoLink.dirty), !(ctx.videoLink == null ? null : ctx.videoLink.errors) && (ctx.videoLink == null ? null : ctx.videoLink.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.videoLink == null ? null : ctx.videoLink.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.videoLink == null ? null : ctx.videoLink.errors) && (ctx.videoLink == null ? null : ctx.videoLink.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](30, _c0, (ctx.creationDate == null ? null : ctx.creationDate.errors) && (ctx.creationDate == null ? null : ctx.creationDate.dirty), !(ctx.creationDate == null ? null : ctx.creationDate.errors) && (ctx.creationDate == null ? null : ctx.creationDate.dirty)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.creationDate == null ? null : ctx.creationDate.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.creationDate == null ? null : ctx.creationDate.errors) && (ctx.creationDate == null ? null : ctx.creationDate.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.creationDate == null ? null : ctx.creationDate.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.adminForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 125px;\n  left: calc(50vw - 175px);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 28px 20px 24px 20px;\n  width: 344px;\n  height: 248px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  margin: 0;\n  align-self: flex-start;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.auth_input-header[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  margin: 2px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  color: #828282;\n}\n\n.auth_input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 304px;\n  height: 37px;\n  padding-left: 8px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  border: none;\n  background-color: #e0e0e0;\n}\n\n.auth_login-button[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 30px;\n  color: #ffffff;\n  background-color: #2F80ED;\n  border: none;\n  border-radius: 6px;\n  transition: 0.3s ease;\n}\n.auth_login-button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.auth_login-button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n.auth_login-button[_ngcontent-%COMP%]:disabled {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  cursor: default;\n  transition: 0.3s ease;\n}\n\n.has-error[_ngcontent-%COMP%] {\n  outline: 1px solid #ff0000;\n}\n\n.validated[_ngcontent-%COMP%] {\n  outline: 1px solid #0dff00;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9wYWdlcy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtFQUVBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FBUkY7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0FBVEo7QUFZRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtBQWJKOztBQWlCQTtFQUNFLDBCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsMEJBQUE7QUFkRiIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyNXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDE3NXB4KTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjhweCAyMHB4IDI0cHggMjBweDtcclxuICB3aWR0aDogMzQ0cHg7XHJcbiAgaGVpZ2h0OiAyNDhweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hdXRoLWhlYWRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYXV0aF9pbnB1dC1oZWFkZXIge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG5cclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5hdXRoX2lucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAzMDRweDtcclxuICBoZWlnaHQ6IDM3cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLmF1dGhfbG9naW4tYnV0dG9uIHtcclxuICB3aWR0aDogMTI0cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY4MEVEO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUVBMkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XHJcbiAgICBjb2xvcjogI2RjZGNkYztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XHJcbiAgICBjb2xvcjogI2RjZGNkYztcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFzLWVycm9yIHtcclxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmMDAwMDtcclxufVxyXG5cclxuLnZhbGlkYXRlZCB7XHJcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwZGZmMDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1477:
/*!***********************************************************************!*\
  !*** ./src/app/core/pages/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/services/login.service */ 9790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





function PageNotFoundComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageNotFoundComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toLoginPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class PageNotFoundComponent {
  constructor(loginService, router) {
    this.loginService = loginService;
    this.router = router;
    this.isUserLoggedIn = false;
  }
  ngOnInit() {
    this.loginService.isUserLoggedIn$.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }
  toLoginPage() {
    this.router.navigate(['/login']);
  }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 1,
  consts: [[1, "wrapper"], ["src", "./assets/img/sad-logo.png", "alt", ""], ["class", "card__button", "title", "login", 3, "click", 4, "ngIf"], ["title", "login", 1, "card__button", 3, "click"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sorry, smth went wrong\u2768\u2768");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PageNotFoundComponent_button_4_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: calc(50vh - 50px);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 360px;\n  height: 100px;\n  margin: 0 auto;\n}\n.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 233px;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  color: #828282;\n}\n\n.card__button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 32px;\n  margin-left: 20px;\n  color: #ffffff;\n  background-color: #2F80ED;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 0 5px 2px rgba(47, 129, 237, 0.5137254902);\n}\n.card__button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.card__button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBRUEsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FBSEo7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7QUFMRjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7QUFOSjtBQVNFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUFSSiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiBjYWxjKDUwdmggLSA1MHB4KTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgJiBwIHtcclxuICAgIHdpZHRoOiAyMzNweDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRfX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGODBFRDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAwIDVweCAycHggIzJmODFlZDgzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RUEyRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcclxuICAgIGNvbG9yOiAjZGNkY2RjO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1375:
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FilterService {
  constructor() {
    this.filterValue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.filter$ = this.filterValue.asObservable();
  }
  setFilter(filter) {
    this.filterValue.next(filter);
  }
}
FilterService.ɵfac = function FilterService_Factory(t) {
  return new (t || FilterService)();
};
FilterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FilterService,
  factory: FilterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4617:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

// eslint-disable-next-line no-console
class LocalStorageService {
  getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
  return new (t || LocalStorageService)();
};
LocalStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalStorageService,
  factory: LocalStorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3095:
/*!*************************************************!*\
  !*** ./src/app/core/services/search.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var src_app_redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/actions */ 5905);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);







class SearchService {
  constructor(http, store) {
    this.http = http;
    this.store = store;
    this.searchUrl = 'https://www.googleapis.com/youtube/v3/search';
    this.statisticsUrl = 'https://www.googleapis.com/youtube/v3/videos';
    this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.youtubeApiKey;
    this.searchText = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.searchText$ = this.searchText.asObservable();
    this.videoItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.videoItems$ = this.searchText$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(text => text.length > 2), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(text => {
      if (!this.apiKey) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      }
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams().set('q', text).set('part', 'snippet').set('type', 'video').set('key', this.apiKey).set('maxResults', '10');
      return this.http.get(this.searchUrl, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(data => data.items));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(videos => {
      if (!videos.length || !this.apiKey) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
      }
      const videoIds = videos.map(video => video.id.videoId);
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams().set('id', videoIds.join(',')).set('part', 'statistics').set('key', this.apiKey);
      return this.http.get(this.statisticsUrl, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(data => {
        const stats = data.items.reduce((acc, item) => {
          acc[item.id] = item.statistics;
          return acc;
        }, {});
        return videos.map(video => ({
          ...video,
          statistics: stats[video.id.videoId]
        }));
      }));
    }));
    if (!this.apiKey) {
      console.warn('YouTube API key is empty. Use local configuration (npm run start:local) or set CI secret YOUTUBE_API_KEY.');
    }
    this.videoItems$.subscribe(videos => {
      this.addVideos(videos);
    });
  }
  setSearchText(text) {
    this.searchText.next(text);
  }
  addVideos(videos) {
    this.store.dispatch((0,src_app_redux_actions__WEBPACK_IMPORTED_MODULE_0__.loadVideoItems)({
      videoItems: videos
    }));
  }
}
SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store));
};
SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5993:
/*!***********************************************!*\
  !*** ./src/app/core/services/sort.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SortService {
  constructor() {
    this.sortKeyValue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.sortKey$ = this.sortKeyValue.asObservable();
  }
  setSortKey(sortKey) {
    this.sortKeyValue.next(sortKey);
  }
}
SortService.ɵfac = function SortService_Factory(t) {
  return new (t || SortService)();
};
SortService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SortService,
  factory: SortService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5905:
/*!**********************************!*\
  !*** ./src/app/redux/actions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCustomCard": () => (/* binding */ addCustomCard),
/* harmony export */   "loadVideoItems": () => (/* binding */ loadVideoItems)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const loadVideoItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Search] Load Video Items', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addCustomCard = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin Page] Add Custom Card', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 8832:
/*!***********************************!*\
  !*** ./src/app/redux/reducers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 5905);


const initialState = {
  videoItems: [],
  customItems: []
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadVideoItems, (state, {
  videoItems
}) => ({
  ...state,
  videoItems: [...state.videoItems, ...videoItems]
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.addCustomCard, (state, {
  customCard
}) => ({
  ...state,
  customItems: [...state.customItems, customCard]
})));

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
const environment = {
  youtubeApiKey: 'AIzaSyAyf2ejS73dbZF_VavsY5TEFydTIhzgM7w'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["default"])
// eslint-disable-next-line no-console
.catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map