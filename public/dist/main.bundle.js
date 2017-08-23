webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
        this.user = {
            name: "cqanda"
        };
    }
    ApiService.prototype.login = function (user) {
        this.user = user;
    };
    ApiService.prototype.getUser = function () {
        return this.user;
    };
    ApiService.prototype.getAllQuestions = function () {
        return this._http.get('/questions')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.createQuestion = function (question) {
        this._http.post('/questions', question)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.getQuestion = function (id) {
        return this._http.get('/questions/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.createAnswer = function (answer, id) {
        this._http.post('/answers/' + id, answer)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.getAllAnswers = function (question_id) {
        return this._http.get('/answers/' + question_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.addLike = function (answer_id) {
        this._http.get('/answerslike/' + answer_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_question_show_question_component__ = __webpack_require__("../../../../../src/app/show-question/show-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__["a" /* NewQuestionComponent */] },
    { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_5__show_question_show_question_component__["a" /* ShowQuestionComponent */] },
    { path: 'question/:id/new_answer', component: __WEBPACK_IMPORTED_MODULE_6__new_answer_new_answer_component__["a" /* NewAnswerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_question_show_question_component__ = __webpack_require__("../../../../../src/app/show-question/show-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_answer_new_answer_component__ = __webpack_require__("../../../../../src/app/new-answer/new-answer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__show_question_show_question_component__["a" /* ShowQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__new_answer_new_answer_component__["a" /* NewAnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav *{\n\tdisplay: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav>\n\t\t<h1>Hi {{user.name}}!</h1>\n\t\t<a [routerLink]=\"['']\">Logout</a>\n\t</nav>\n\t<a [routerLink]=\"['/new_question']\">Add a Question</a>\n\t<table>\n\t\t<tr>\n\t\t\t<th>Question</th>\n\t\t\t<th>Answers</th>\n\t\t\t<th>Action</th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let question of questions\">\n\t\t\t<td>{{question.q_text}}</td>\n\t\t\t<td>{{question._answers.length}}</td>\n\t\t\t<td><a [routerLink]=\"['/question', question._id ]\">Show</a> <a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer</a></td>\n\t\t</tr>\n\t</table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_api) {
        this._api = _api;
        this.user = {};
        this.questions = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this._api.getUser();
        this.getAll();
    };
    DashboardComponent.prototype.getAll = function () {
        var _this = this;
        this._api.getAllQuestions()
            .then(function (data) { return _this.questions = data; })
            .catch(function (errors) { console.log(errors); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1>Q&A</h1>\n\t<form #form='ngForm'>\n\t\t<p>Name: <input \n\t\ttype=\"text\" \n\t\tname=\"name\"\n\t\trequired\n\t\tminlength=\"2\"\n\t\t[(ngModel)]=\"user.name\"\n\t\t#name='ngModel'>\n\t\t{{name.errors | json}}</p>\n\t\t<p><input [routerLink]=\"['/dashboard']\" [disabled]=\"!form.valid\" (click)=\"onClick()\" type=\"submit\" value=\"Enter\"></p>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_api) {
        this._api = _api;
        this.user = {
            name: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClick = function () {
        this._api.login(this.user);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav>\n\t\t<a routerLink='/dashboard'>Home</a> | \n\t\t<a [routerLink]=\"['/question', question._id]\">Go Back to Question</a>\n\t\t<a [routerLink]=\"['']\">Logout</a>\n\t</nav>\n\t<h1>{{question.q_text}}</h1>\n\t<p>{{question.desc}}</p>\n\t<form #form=\"ngForm\">\n\t\t<p>\n\t\t\tYour Answer:\n\t\t\t<textarea \n\t\t\tname=\"a_text\"\n\t\t\trequired\n\t\t\tminlength=\"5\"\n\t\t\t[(ngModel)]=\"answer.a_text\"\n\t\t\t#a_text=\"ngModel\" \n\t\t\t></textarea>\n\t\t\t<span *ngIf=\"a_text.errors\">Needs to be 5 characters long</span>\n\t\t</p>\n\t\t<p>\n\t\t\tSupporting Details\n\t\t\t<br>\n\t\t\tfor your answer\n\t\t\t<br>\n\t\t\t(optional)\n\t\t\t<textarea \n\t\t\tname=\"details\"\n\t\t\t[(ngModel)]=\"answer.details\"\n\t\t\t#details=\"ngModel\" \n\t\t\t></textarea>\n\t\t</p>\n\t\t<p>\n\t\t\t<input [routerLink]=\"['/dashboard']\" type=\"submit\" value=\"Cancel\">\n\t\t\t<input [routerLink]=\"['/dashboard']\" (click)=\"onSubmit()\" [disabled]=\"!form.valid\" type=\"submit\" value=\"Submit\">\n\t\t</p>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-answer/new-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAnswerComponent = (function () {
    function NewAnswerComponent(_api, _route) {
        this._api = _api;
        this._route = _route;
        this.question = {
            _id: 0,
            q_text: "",
            desc: ""
        };
        this.answer = {
            user: "",
            likes: 0
        };
    }
    NewAnswerComponent.prototype.ngOnInit = function () {
        this.getQuestion();
        this.getUser();
    };
    NewAnswerComponent.prototype.getQuestion = function () {
        var _this = this;
        this._route.paramMap
            .switchMap(function (params) {
            return _this._api.getQuestion(params.get('id'));
        })
            .subscribe(function (data) { return _this.question = data; });
    };
    NewAnswerComponent.prototype.getUser = function () {
        this.answer.user = this._api.getUser().name;
    };
    NewAnswerComponent.prototype.onSubmit = function () {
        this._api.createAnswer(this.answer, this.question._id);
    };
    return NewAnswerComponent;
}());
NewAnswerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-answer',
        template: __webpack_require__("../../../../../src/app/new-answer/new-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-answer/new-answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], NewAnswerComponent);

var _a, _b;
//# sourceMappingURL=new-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav>\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a> \n\t\t<a [routerLink]=\"['']\">Logout</a>\n\t</nav>\n\t<h1>New Question</h1>\n\t<form #form='ngForm'>\n\t\t<p>\n\t\t\tQuestion: \n\t\t\t<textarea \n\t\t\tname=\"q_text\"\n\t\t\trequired\n\t\t\tminlength=\"10\"\n\t\t\t[(ngModel)]=\"question.q_text\"\n\t\t\t#q_text='ngModel' \n\t\t\t></textarea>\n\t\t\t<span *ngIf=\"q_text.errors\">Needs to be 10 characters long</span>\n\t\t</p>\n\t\t<p>\n\t\t\tDescription: <br> (optional)\n\t\t\t<textarea \n\t\t\tname=\"desc\"\n\t\t\t[(ngModel)]=\"question.desc\"\n\t\t\t#desc='ngModel' \n\t\t\t></textarea>\n\t\t</p>\n\t\t<p>\n\t\t\t<input [routerLink]=\"['/dashboard']\" type=\"submit\" value=\"Cancel\">\n\t\t\t<input [routerLink]=\"['/dashboard']\" (click)=\"onSubmit()\" [disabled]=\"!form.valid\" type=\"submit\" value=\"Submit\">\n\t\t</p>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewQuestionComponent = (function () {
    function NewQuestionComponent(_api) {
        this._api = _api;
        this.question = {};
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
    };
    NewQuestionComponent.prototype.onSubmit = function () {
        this._api.createQuestion(this.question);
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NewQuestionComponent);

var _a;
//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/show-question/show-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".answers {\n\tborder: 1px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-question/show-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav>\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a> | \n\t\t<a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer this Question</a>\n\t\t<a [routerLink]=\"['']\">Logout</a>\n\t</nav>\n\t<h1>{{question.q_text}}</h1>\n\t<p>{{question.desc}}</p>\n\t<div *ngFor=\"let answer of question._answers\" class=\"answers\">\n\t\t<p>{{answer.user}}</p>\n\t\t<p>{{answer.a_text}}___________________________________________{{answer.likes}}Likes \n\t\t<input \n\t\ttype=\"submit\" \n\t\tvalue=\"Like!\"\n\t\t(click)=\"addLike(answer._id)\"\n\t\t>\n\n\t\t</p>\n\t\t<p>{{answer.details}}</p>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/show-question/show-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowQuestionComponent = (function () {
    function ShowQuestionComponent(_api, _route, route) {
        this._api = _api;
        this._route = _route;
        this.route = route;
        this.question = {
            _id: 0,
            q_text: "",
            desc: "",
            _answers: []
        };
    }
    ShowQuestionComponent.prototype.ngOnInit = function () {
        this.getQuestion();
        // this.getAllAnswers();
    };
    ShowQuestionComponent.prototype.getQuestion = function () {
        var _this = this;
        this._route.paramMap
            .switchMap(function (params) {
            return _this._api.getAllAnswers(params.get('id'));
        })
            .subscribe(function (data) { return _this.question = data; });
    };
    ShowQuestionComponent.prototype.addLike = function (answer_id) {
        this._api.addLike(answer_id);
        this.getQuestion();
    };
    return ShowQuestionComponent;
}());
ShowQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-show-question',
        template: __webpack_require__("../../../../../src/app/show-question/show-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show-question/show-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ShowQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=show-question.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map