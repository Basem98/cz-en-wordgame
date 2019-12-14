var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/sign-in/sign-in.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/sign-in/sign-in.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-wrapper\">\n    <form [formGroup]=\"userData\" (ngSubmit)=\"login()\" class=\"signin-form\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Username</mat-label>\n            <input matInput type=\"username\" id=\"username\" formControlName=\"username\" required>\n            <mat-error *ngIf=\"userData.controls['username']['errors']?.required\">\n                * Please enter a username\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput type=\"password\" id=\"password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"userData.controls['password']['errors']?.required\">\n                * Please enter a password\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <button mat-raised-button color=\"accent\" type=\"submit\">Sign In</button>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/sign-up/sign-up.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/sign-up/sign-up.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-wrapper\">\n    <form [formGroup]=\"userData\" (ngSubmit)=\"register()\" class=\"signup-form\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Full Name</mat-label>\n            <input matInput type=\"text\" id=\"fullName\" formControlName=\"fullName\" required>\n            <mat-error *ngIf=\"userData.controls['fullName']['errors']?.required\">\n                <p>* Please enter your full name</p>\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\" style=\"margin-bottom: 8px;\">\n            <mat-label>Country</mat-label>\n            <mat-select formControlName=\"country\">\n                <mat-option *ngFor=\"let country of countriesList\" [value]=\"country\">\n                    {{ country }}\n                </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"userData.controls['country']['errors']\">\n                <p>* Please select your country from the list</p>\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\" style=\"height: 100px !important;\">\n            <mat-label>Email</mat-label>\n            <input matInput type=\"email\" id=\"email\" formControlName=\"email\" required>\n            <mat-error *ngIf=\"userData.controls['email']?.invalid\">\n                <p>* Please enter a valid email address</p>\n            </mat-error>\n            <mat-error *ngIf=\"userData.controls['email']['errors']?.required\">\n                <p>* Please enter your email address</p>\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <br>\n        <br>\n        <mat-form-field appearance=\"outline\" style=\"height: 150px !important; margin: 1px;\">\n            <mat-label>Username</mat-label>\n            <input matInput type=\"text\" id=\"username\" formControlName=\"username\" required>\n            <mat-error *ngIf=\"userData.controls['username']['errors']?.required\">\n                <p>* Please enter a username so that other users can interact with you</p>\n            </mat-error>\n            <mat-error *ngIf=\"userData.controls['username']['errors']?.invalid\">\n                <p>* Your username must be 6-12 characters long\n                    and it can only consist of alphanumeric characters</p>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" style=\"height: 150px !important; margin: 1px;\">\n            <mat-label>Password</mat-label>\n            <input matInput type=\"password\" id=\"password\" formControlName=\"password\" required>\n            <mat-error *ngIf=\"userData.controls['password']['errors']?.required\">\n                <p>* Please enter a password</p>\n            </mat-error>\n            <mat-error *ngIf=\"userData.controls['password']['errors']\">\n                <p>* Your password must be 8-20 characters long</p>\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <br>\n        <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!notClicked\">Sign Up</button>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/verify-email/verify-email.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/verify-email/verify-email.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"verification-form-wrapper\">\n    <form [formGroup]=\"verificationData\" (ngSubmit)=\"verify()\" class=\"verification-form\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput type=\"text\" id=\"email\" formControlName=\"email\" required>\n            <mat-error *ngIf=\"verificationData.controls['email']['errors']?.required\">\n                <p>* Please enter the email address you have signed up with</p>\n            </mat-error>\n            <mat-error *ngIf=\"verificationData.controls['email'].invalid\">\n                <p>* Please enter a valid email</p>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Verification Token</mat-label>\n            <input matInput type=\"password\" id=\"token\" formControlName=\"token\" required>\n            <mat-error *ngIf=\"verificationData.controls['token']['errors']?.required\">\n                <p>* Please enter the token that has been sent to your email</p>\n            </mat-error>\n        </mat-form-field>\n        <br>\n        <br>\n        <br>\n        <button mat-raised-button color=\"accent\" type=\"submit\">Verify</button>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/authentication/authentication-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/authentication/authentication-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: AuthenticationRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () { return AuthenticationRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/authentication/components/sign-in/sign-in.component.ts");
            /* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/authentication/components/sign-up/sign-up.component.ts");
            /* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/authentication/components/verify-email/verify-email.component.ts");
            var routes = [
                {
                    path: 'signup', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
                },
                {
                    path: 'signin', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
                },
                {
                    path: 'emailverification', component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailComponent"]
                }
            ];
            var AuthenticationRoutingModule = /** @class */ (function () {
                function AuthenticationRoutingModule() {
                }
                return AuthenticationRoutingModule;
            }());
            AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AuthenticationRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/authentication/authentication.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/authentication/authentication.module.ts ***!
          \*********************************************************/
        /*! exports provided: AuthenticationModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () { return AuthenticationModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
            /* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/authentication/components/sign-in/sign-in.component.ts");
            /* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/authentication/components/sign-up/sign-up.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/authentication/components/verify-email/verify-email.component.ts");
            var AuthenticationModule = /** @class */ (function () {
                function AuthenticationModule() {
                }
                return AuthenticationModule;
            }());
            AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
                        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                        _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"]
                    ]
                })
            ], AuthenticationModule);
            /***/ 
        }),
        /***/ "./src/app/authentication/components/sign-in/sign-in.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/authentication/components/sign-in/sign-in.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-wrapper{\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    \r\n}\r\n\r\n.signin-form{\r\n    display: inline-block;\r\n    padding: 30px;\r\n    width: 600px;\r\n    background-color: rgb(199, 198, 198);\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnNpZ25pbi1mb3Jte1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OCwgMTk4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/authentication/components/sign-in/sign-in.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/authentication/components/sign-in/sign-in.component.ts ***!
          \************************************************************************/
        /*! exports provided: SignInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function () { return SignInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignInComponent = /** @class */ (function () {
                function SignInComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.userData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                }
                SignInComponent.prototype.ngOnInit = function () {
                };
                SignInComponent.prototype.login = function () {
                    var _this = this;
                    this.user = this.userData.value;
                    this.authService.signIn(this.user).subscribe({
                        next: function (response) {
                            if (response && response.user && response.user.isVerified) {
                                _this.router.navigate(['/']).then(function () { return window.location.reload(); });
                            }
                            else if (response.user && !response.user.isVerified) {
                                _this.router.navigate(['/authentication/emailverification']);
                            }
                            else {
                                alert(response.msg);
                            }
                        }
                    });
                };
                return SignInComponent;
            }());
            SignInComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/sign-in/sign-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/app/authentication/components/sign-in/sign-in.component.css")).default]
                })
            ], SignInComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/components/sign-up/sign-up.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/authentication/components/sign-up/sign-up.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-wrapper{\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    \r\n}\r\n\r\n.signup-form{\r\n    display: inline-block;\r\n    padding: 30px;\r\n    width: 600px;\r\n    background-color: rgb(199, 198, 198);\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnNpZ251cC1mb3Jte1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OCwgMTk4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/authentication/components/sign-up/sign-up.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/authentication/components/sign-up/sign-up.component.ts ***!
          \************************************************************************/
        /*! exports provided: SignUpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _validators_validateUsername__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/validateUsername */ "./src/app/authentication/validators/validateUsername.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/country.service */ "./src/app/services/country.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignUpComponent = /** @class */ (function () {
                function SignUpComponent(authService, countryService, router) {
                    this.authService = authService;
                    this.countryService = countryService;
                    this.router = router;
                    this.userData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_validators_validateUsername__WEBPACK_IMPORTED_MODULE_3__["isValidUsername"])()]),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])
                    });
                    this.notClicked = true;
                }
                SignUpComponent.prototype.ngOnInit = function () {
                    this.getCountriesNames();
                };
                SignUpComponent.prototype.getCountriesNames = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.countryService.getCountriesList()];
                                case 1:
                                    _a.countriesList = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SignUpComponent.prototype.register = function () {
                    var _this = this;
                    this.notClicked = false;
                    this.newUser = this.userData.value;
                    this.authService.signUp(this.newUser).subscribe({
                        next: function (response) {
                            if (response && response.success) {
                                _this.router.navigate(['/authentication/signin']);
                                alert(JSON.stringify(response.msg));
                            }
                            else {
                                alert(response.msg);
                            }
                        }
                    });
                };
                return SignUpComponent;
            }());
            SignUpComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/sign-up/sign-up.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/authentication/components/sign-up/sign-up.component.css")).default]
                })
            ], SignUpComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/components/verify-email/verify-email.component.css": 
        /*!***********************************************************************************!*\
          !*** ./src/app/authentication/components/verify-email/verify-email.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".verification-form-wrapper {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n}\r\n\r\n.verification-form {\r\n    display: inline-block;\r\n    padding: 30px;\r\n    width: 600px;\r\n    background-color: rgb(199, 198, 198);\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcmlmaWNhdGlvbi1mb3JtLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi52ZXJpZmljYXRpb24tZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMTk4LCAxOTgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/authentication/components/verify-email/verify-email.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/authentication/components/verify-email/verify-email.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: VerifyEmailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () { return VerifyEmailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var VerifyEmailComponent = /** @class */ (function () {
                function VerifyEmailComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.verificationData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                        token: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                }
                VerifyEmailComponent.prototype.verify = function () {
                    var _this = this;
                    var verificationReqBody = this.verificationData.value;
                    if (verificationReqBody.token) {
                        this.authService.verifyUser(verificationReqBody).subscribe({
                            next: function (response) {
                                if (response && response.success) {
                                    alert('Congratulations! Your email has been verified! Now you can sign in and enjoy the game');
                                    _this.router.navigate(['/authentication/signin']);
                                }
                                else {
                                    _this.authService.reverifyUser(verificationReqBody.email).subscribe({
                                        next: function (response) {
                                            if (response && response.success) {
                                                alert("A verification email has been sent to " + verificationReqBody.email);
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    }
                    else {
                        alert('Please complete at least the email field to recieve another token');
                    }
                };
                return VerifyEmailComponent;
            }());
            VerifyEmailComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-verify-email',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/components/verify-email/verify-email.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-email.component.css */ "./src/app/authentication/components/verify-email/verify-email.component.css")).default]
                })
            ], VerifyEmailComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/validators/validateUsername.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/authentication/validators/validateUsername.ts ***!
          \***************************************************************/
        /*! exports provided: isValidUsername */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidUsername", function () { return isValidUsername; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            function isValidUsername() {
                return function (control) {
                    if (!control.value.match(/^\w{6,12}/g)) {
                        return { 'invalid': true };
                    }
                    ;
                    return null;
                };
            }
            /***/ 
        })
    }]);
//# sourceMappingURL=authentication-authentication-module-es2015.js.map
//# sourceMappingURL=authentication-authentication-module-es5.js.map
//# sourceMappingURL=authentication-authentication-module-es5.js.map