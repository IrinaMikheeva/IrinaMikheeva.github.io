(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n\n<button type=\"button\" class=\"btn btn-success\">\n    Single Button\n  </button>\n\n\n  <div class=\"row\">\n      <div class=\"col-xs-12 col-12 col-md-2 form-group\">\n        <input type=\"text\"\n               placeholder=\"Daterangepicker\"\n               class=\"form-control\"\n               bsDaterangepicker>\n      </div>\n    </div>\n\n\n    <alert type=\"success\">\n        <strong>Well done!</strong> You successfully read this important alert message.\n    </alert>\n\n    <carousel>\n        <slide>\n          <img src=\"../../assets/images/1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"../../assets/images/2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n        </slide>\n        <slide>\n          <img src=\"../../assets/images/3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide>\n      </carousel>\n\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Toggle collapse\n</button>\n<hr>\n<div id=\"collapseBasic\" [collapse]=\"isCollapsed\" class=\"card card-block card-header\">\n<div class=\"well well-lg\">Some content</div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");






var routes = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'about', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
        this.isCollapsed = true;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_11__["ButtonsModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__["AlertModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_15__["CollapseModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact us</h1>\n<form [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit()\">\n<h5 *ngIf=\"success\">Your form is valid!</h5>\n<label>\n  Name: \n  <input type=\"text\" formControlName=\"name\">\n  <div *ngIf=\"submitted && messageForm.controls.name.errors\" class=\"error\">\n    <div *ngIf=\"messageForm.controls.name.errors.required\">Your name is required, bro</div>\n  </div>\n</label>\n\n<label>\n  Message: \n  <textarea formControlName=\"message\"> </textarea>\n  <div *ngIf=\"submitted && messageForm.controls.message.errors\" class=\"error\">\n    <div *ngIf=\"messageForm.controls.message.errors.required\">A message is required</div>\n  </div>\n</label>\n\n<input type=\"submit\" value=\"Send message\" class=\"cta\">\n\n</form>\n\n<div *ngIf=\"submitted\" class=\"results\">\n  <strong>Name:</strong>\n  <span>{{messageForm.controls.name.value}}</span>\n  <br/>\n  <strong >Message:</strong>\n  <span>{{messageForm.controls.message.value}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block; }\n  label input, label textarea {\n    display: block;\n    width: 50%;\n    margin-bottom: 20px;\n    padding: 1em; }\n  label .error {\n    margin-top: -20px;\n    background: yellow;\n    padding: .5em;\n    display: inline-block;\n    font-size: .9em;\n    margin-bottom: 20px; }\n  .cta {\n  background: #7700FF;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 4px;\n  padding: 1em;\n  cursor: pointer;\n  font-family: 'Montserrat'; }\n  .result {\n  margin-top: 50px; }\n  .result strong {\n    display: block; }\n  .result span {\n    margin-bottom: 20px;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcQW5ndWxhclxccmVwb3NcXG15YXBwL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYyxFQWlCZjtFQWxCRDtJQUlJLGVBQWM7SUFDZCxXQUFVO0lBQ1Ysb0JBQW1CO0lBQ25CLGFBQVksRUFDYjtFQVJIO0lBV0ksa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3BCO0VBR0g7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGFBQVk7RUFFWiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixnQkFBZTtFQUNmLDBCQUVGLEVBQUM7RUFFRDtFQUNFLGlCQUFnQixFQVFqQjtFQVREO0lBR0ksZUFBYyxFQUNmO0VBSkg7SUFNSSxvQkFBbUI7SUFDbkIsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICB9XHJcblxyXG4gIC5lcnJvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmN0YSB7XHJcbiAgYmFja2dyb3VuZDogIzc3MDBGRjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCdcclxuXHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.messageForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        this.success = true;
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.firstClick = function () {
        return console.log('clicked');
    };
    DataService.prototype.getUsers = function () {
        return this.http.get('https://reqres.in/api/users');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home</h1>\n\n<ul *ngIf=\"users\">\n  <li *ngFor=\"let user of users.data\">\n    <img [src]=\"user.avatar\">\n    <p>{{user.first_name}} {{user.last_name}}</p>\n  </li>\n\n</ul>\n\n<!-- <h1 [ngClass]=\"{'gray': h1Style, 'large': !h1Style}\">Home</h1> -->\n<!-- <h1 [class.gray]=\"h1Style\">Home</h1> -->\n<!-- <h1 [style.color]=\"h1Style ? 'gray' : 'black'\">Home</h1> -->\n\n<!-- <h1 [ngStyle]=\"{\n  'color': h1Style ? 'gray' : 'black, \n  'font-size' : h1Style ? '1em' : '4em'\n}\">Home</h1> -->\n\n<!-- <button (click)=\"firstClick()\">Click me</button> -->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  ul li {\n    background: #a7a7b4;\n    padding: 2em;\n    border-radius: 4px;\n    margin-bottom: 7px;\n    display: grid;\n    grid-template-columns: 60px auto; }\n  ul li p {\n      font-weight: bold;\n      margin-left: 20px; }\n  ul li img {\n      border-radius: 50%;\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcQW5ndWxhclxccmVwb3NcXG15YXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVM7RUFBRSxXQUFVLEVBb0J0QjtFQXRCRDtJQUtJLG9CQUFtQjtJQUNuQixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsaUNBQWdDLEVBV2pDO0VBckJIO01BYU0sa0JBQWlCO01BQ2pCLGtCQUFpQixFQUNsQjtFQWZMO01Ba0JNLG1CQUFrQjtNQUNsQixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDsgcGFkZGluZzogMDtcclxuXHJcbiAgbGkge1xyXG4gICAgYmFja2dyb3VuZDogI2E3YTdiNDtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0bztcclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
        this.h1Style = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <a class=\"navbar-brand\" href=\"#\">Irene Mikheeva</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isCollapsed = !isCollapsed\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [collapse]=\"isCollapsed\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Design <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Color rules</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\">Useful links</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\">Contact</a>\n            </li>\n        </ul>\n      </div>\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  width: 100%;\n  background: none !important; }\n  .navbar .navbar-toggler {\n    cursor: pointer;\n    outline: 0; }\n  @media (max-width: 20em) {\n      .navbar .navbar-toggler {\n        color: #fff !important; } }\n  .navbar .nav-link {\n    text-transform: uppercase;\n    font-weight: normal; }\n  .navbar .nav-item {\n    padding: 0 1rem; }\n  @media (max-width: 20em) {\n      .navbar .nav-item {\n        padding: 0; } }\n  @media (max-width: 20em) {\n      .navbar .nav-item .nav-link {\n        font-weight: normal;\n        color: #fff !important; } }\n  @media (max-width: 20em) {\n      .navbar .nav-item .navbar-brand {\n        font-weight: normal;\n        color: #fff !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxBbmd1bGFyXFxyZXBvc1xcbXlhcHAvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLDRCQUEyQixFQTBDNUI7RUE1Q0Q7SUFTSSxnQkFBZTtJQUNmLFdBQVUsRUFLWDtFQUpDO01BWEo7UUFhTSx1QkFBc0IsRUFFekIsRUFBQTtFQWZIO0lBa0JJLDBCQUF3QjtJQUN4QixvQkFBbUIsRUFDcEI7RUFwQkg7SUF3QkksZ0JBQWUsRUFrQmhCO0VBaEJDO01BMUJKO1FBMkJNLFdBQVUsRUFlYixFQUFBO0VBWEc7TUEvQk47UUFnQ1Esb0JBQW1CO1FBQ25CLHVCQUFzQixFQUV6QixFQUFBO0VBRUM7TUFyQ047UUFzQ1Esb0JBQW1CO1FBQ25CLHVCQUFzQixFQUV6QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDoyMGVtKSAge1xyXG4gICAgLy8gYmFja2dyb3VuZDogIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDIwZW0pIHtcclxuXHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMjBlbSkge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDIwZW0pIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMjBlbSkge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserModule } from '@angular/platform-browser';
var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'Irene Mikheeva';
        this.isCollapsed = true;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\repos\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map