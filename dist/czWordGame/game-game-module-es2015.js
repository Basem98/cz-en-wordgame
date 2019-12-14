(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/changed-title/changed-title.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/changed-title/changed-title.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h5 mat-dialog-title>\n        Good news, {{ currentUser.username }}! You have ranked up!\n    </h5>\n    <h6 mat-dialog-content>\n        Your new title is {{ currentUser.title }}\n    </h6>\n    <div mat-dialog-actions>\n        <button mat-raised-button color=\"accent\" (click)=\"onCheckNewTitle()\">Check New Title</button>\n        <button mat-raised-button color=\"accent\" (click)=\"onContinuePlaying()\">Continue Playing</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/failure/failure.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/failure/failure.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h6 mat-dialog-title>\n        Unfortunately, either 10 seconds has passed before you submit your answer or your answer is wrong\n    </h6>\n    <div mat-dialog-actions>\n        <button mat-raised-button color=\"accent\" (click)=\"onGetRightAnswer()\">Get The Right Answer</button>\n        <button mat-raised-button color=\"accent\" (click)=\"onContinuePlaying()\">Continue Playing</button>\n        <button mat-raised-button color=\"accent\" (click)=\"onCheckGameHistory()\">Check My Game History</button>\n        <button mat-raised-button color=\"accent\" (click)=\"onStopPlaying()\">Stop Playing</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/game-box/game-box.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/game-box/game-box.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-progress-bar [color]=\"progressBarColor\" [value]=\"progressBarValue\"></mat-progress-bar>\n    <br>\n    <h5 mat-dialog-title style=\"text-align: center;\">{{ chosenWord.meaning }}</h5>\n    <div mat-dialog-content>\n        <mat-checkbox [(ngModel)]=\"answer0\">\n            {{ words[0].word }}\n        </mat-checkbox>\n        <br>\n        <mat-checkbox [(ngModel)]=\"answer1\">\n            {{ words[1].word }}\n        </mat-checkbox>\n        <br>\n        <mat-checkbox [(ngModel)]=\"answer2\">\n            {{ words[2].word }}\n        </mat-checkbox>\n    </div>\n    <div mat-dialog-actions>\n        <button mat-raised-button color=\"accent\" (click)=\"onSubmit()\">Submit Answer</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/game-history/game-history.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/game-history/game-history.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"words-table-container\">\n    <div class=\"words-table-div\">\n        <input type=\"text\" class=\"filter-input\" placeholder=\"Filter by word\" #specificWord (keyup)=\"filterByWordOrLanguage(specificWord.value.toLowerCase(), null)\"/>\n        <select #specificLang (mouseup)=\"filterByWordOrLanguage(null, specificLang.value.toLowerCase())\" class=\"languages-list\">\n            <option value=\"'undefined'\">All Words</option>\n            <option value=\"cz\">Czech</option>\n            <option value=\"en\">English</option>\n        </select>\n        <table class=\"words-table\">\n            <thead>\n                <th>Word</th>\n                <th>Language</th>\n                <th>Meaning</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let word of filteredWordsList\" class=\"table-rows\">\n                    <td>{{ word.word }}</td>\n                    <td>{{ word.lang }}</td>\n                    <td>{{ word.meaning }}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/right-answer/right-answer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/right-answer/right-answer.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 mat-dialog-title>{{ chosenWord.word }}</h1>\n    <p mat-dialog-content>{{ chosenWord.meaning }}</p>\n    <br>\n    <br>\n    <div mat-dialog-actions>\n        <button mat-raised-button color=\"accent\" (click)=\"onContinuePlaying()\">Continue Playing</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/start-game/start-game.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/start-game/start-game.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"start-game-div\">\n    <button mat-raised-button color=\"accent\" class=\"start-game-button\" (click)=\"onStartCzechGame()\">Play (Czech Version)</button>\n    <button mat-raised-button color=\"accent\" class=\"start-game-button\" (click)=\"onStartEnglishGame()\">Play (English Version)</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/success/success.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/success/success.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h4 mat-dialog-title>\n        Good Job, {{ username }}! You got the word right!\n    </h4>\n    <h6 mat-dialog-content>\n        Your score is now {{ updatedScore }} points!\n    </h6>\n    <div mat-dialog-actions>\n        <button mat-raised-button color='accent' (click)=\"onContinuePlaying()\">Continue Playing</button>\n        <button mat-raised-button color='accent' (click)=\"onCheckGameHistory()\">Check My Game History</button>\n        <button mat-raised-button color='accent' (click)=\"onStopPlaying()\">Stop Playing</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/top-players/top-players.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/top-players/top-players.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div *ngFor=\"let user of topPlayers\" class=\"players-list\">\n        <div class=\"top-player-info\">\n            <h5>{{ user?.username }}</h5>\n            <p>{{ user?.title }}</p>\n            <p>{{ user?.score }}</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/game/components/changed-title/changed-title.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/game/components/changed-title/changed-title.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9jaGFuZ2VkLXRpdGxlL2NoYW5nZWQtdGl0bGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/game/components/changed-title/changed-title.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/game/components/changed-title/changed-title.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChangedTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangedTitleComponent", function() { return ChangedTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChangedTitleComponent = class ChangedTitleComponent {
    constructor(dialog, router, allDialogs) {
        this.dialog = dialog;
        this.router = router;
        this.allDialogs = allDialogs;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        setTimeout(() => {
            this.dialog.close();
        }, 10000);
    }
    onCheckNewTitle() {
        this.allDialogs.closeAll();
        this.router.navigate(['profile']);
    }
    onContinuePlaying() {
        this.allDialogs.closeAll();
        this.router.navigate(['/game/start']);
    }
};
ChangedTitleComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ChangedTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changed-title',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changed-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/changed-title/changed-title.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changed-title.component.css */ "./src/app/game/components/changed-title/changed-title.component.css")).default]
    })
], ChangedTitleComponent);



/***/ }),

/***/ "./src/app/game/components/failure/failure.component.css":
/*!***************************************************************!*\
  !*** ./src/app/game/components/failure/failure.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9mYWlsdXJlL2ZhaWx1cmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/game/components/failure/failure.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/game/components/failure/failure.component.ts ***!
  \**************************************************************/
/*! exports provided: FailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureComponent", function() { return FailureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../right-answer/right-answer.component */ "./src/app/game/components/right-answer/right-answer.component.ts");





let FailureComponent = class FailureComponent {
    constructor(dialogRef, data, newDialog, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newDialog = newDialog;
        this.router = router;
        this.currentUsername = this.data.username;
        this.chosenWord = this.data.rightAnswer;
    }
    onGetRightAnswer() {
        this.dialogRef.close();
        this.newDialog.open(_right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_4__["RightAnswerComponent"], {
            width: '700px',
            disableClose: true,
            data: {
                chosenWord: this.chosenWord
            }
        });
    }
    onContinuePlaying() {
        this.dialogRef.close();
        this.router.navigate(['/game/start']);
    }
    onStopPlaying() {
        this.dialogRef.close();
        this.router.navigate(['profile']);
    }
    onCheckGameHistory() {
        this.dialogRef.close();
        this.router.navigate(['/game/history']);
    }
};
FailureComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FailureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-failure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./failure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/failure/failure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./failure.component.css */ "./src/app/game/components/failure/failure.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], FailureComponent);



/***/ }),

/***/ "./src/app/game/components/game-box/game-box.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/game/components/game-box/game-box.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9nYW1lLWJveC9nYW1lLWJveC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/game/components/game-box/game-box.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/game/components/game-box/game-box.component.ts ***!
  \****************************************************************/
/*! exports provided: GameBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoxComponent", function() { return GameBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../success/success.component */ "./src/app/game/components/success/success.component.ts");
/* harmony import */ var _failure_failure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../failure/failure.component */ "./src/app/game/components/failure/failure.component.ts");





let GameBoxComponent = class GameBoxComponent {
    constructor(dialogRef, data, newDialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newDialog = newDialog;
        this.words = this.data;
        this.chosenWord = this.words[Math.floor(Math.random() * 2)];
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.progressBarColor = 'accent';
    }
    ngOnInit() {
        this.progressBarValue = 0;
        setTimeout(() => {
            if (!this.finalAnswer) {
                this.dialogRef.close();
                this.newDialog.open(_failure_failure_component__WEBPACK_IMPORTED_MODULE_4__["FailureComponent"], {
                    width: '700px',
                    disableClose: true,
                    data: {
                        username: this.currentUser.username,
                        rightAnswer: this.chosenWord
                    }
                });
            }
        }, 10000);
        setInterval(() => {
            this.progressBarValue += 1;
        }, 100);
    }
    onSubmit() {
        if (this.answer0) {
            this.finalAnswer = this.words[0].word;
        }
        else if (this.answer1) {
            this.finalAnswer = this.words[1].word;
        }
        else if (this.answer2) {
            this.finalAnswer = this.words[2].word;
        }
        if (this.finalAnswer == this.chosenWord.word) {
            const newScore = this.currentUser.score + 20;
            this.dialogRef.close();
            this.newDialog.open(_success_success_component__WEBPACK_IMPORTED_MODULE_3__["SuccessComponent"], {
                width: '700px',
                disableClose: true,
                data: [
                    {
                        id: this.currentUser._id,
                        score: newScore
                    },
                    {
                        id: this.currentUser._id,
                        newWord: this.chosenWord
                    }
                ]
            });
        }
        else {
            this.dialogRef.close();
            this.newDialog.open(_failure_failure_component__WEBPACK_IMPORTED_MODULE_4__["FailureComponent"], {
                width: '700px',
                disableClose: true,
                data: {
                    username: this.currentUser.username,
                    rightAnswer: this.chosenWord
                }
            });
        }
    }
};
GameBoxComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
GameBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/game-box/game-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-box.component.css */ "./src/app/game/components/game-box/game-box.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], GameBoxComponent);



/***/ }),

/***/ "./src/app/game/components/game-history/game-history.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/game/components/game-history/game-history.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".words-table-container {\r\n    text-align: center;\r\n}\r\n\r\n.words-table-div {\r\n    display: inline-block;\r\n    margin-top: 30px;\r\n}\r\n\r\n.words-table {\r\n    border: 5px solid #343a40;\r\n    border-radius: 10px 10px 10px 10px;\r\n    border-collapse: separate;\r\n    margin-top: 20px;\r\n    color: #e3e4e6;\r\n}\r\n\r\n.filter-input {\r\n}\r\n\r\n.languages-list {\r\n    margin: 1px;\r\n    height: 30.5px;\r\n    width: 100px;\r\n}\r\n\r\ntd {\r\n    border: thin solid #343a40 !important;\r\n    border-radius: 10px 10px 10px 10px;\r\n    padding: 10px;\r\n}\r\n\r\nthead th {\r\n    border: thin solid #343a40 !important;\r\n    border-radius: 10px 10px 10px 10px;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2dhbWUtaGlzdG9yeS9nYW1lLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL2dhbWUtaGlzdG9yeS9nYW1lLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3Jkcy10YWJsZS1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud29yZHMtdGFibGUtZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi53b3Jkcy10YWJsZSB7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzQzYTQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICNlM2U0ZTY7XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXQge1xyXG59XHJcblxyXG4ubGFuZ3VhZ2VzLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDMwLjVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICMzNDNhNDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG50aGVhZCB0aCB7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgIzM0M2E0MCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/components/game-history/game-history.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/game/components/game-history/game-history.component.ts ***!
  \************************************************************************/
/*! exports provided: GameHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameHistoryComponent", function() { return GameHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameHistoryComponent = class GameHistoryComponent {
    constructor() {
        this.wordsList = JSON.parse(sessionStorage.getItem('currentUser'))['gameHistory'];
        this.filteredWordsList = this.wordsList;
    }
    filterByWordOrLanguage(specificWord, specificLang) {
        if (specificLang == 'cz' || specificLang == 'en') {
            this.filteredWordsList = this.wordsList.filter(wordObject => { return wordObject.lang.includes(specificLang); });
        }
        else {
            this.filteredWordsList = this.wordsList;
        }
        if (specificWord) {
            this.filteredWordsList = this.wordsList.filter(wordObject => { return wordObject.word.includes(specificWord); });
        }
    }
};
GameHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/game-history/game-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-history.component.css */ "./src/app/game/components/game-history/game-history.component.css")).default]
    })
], GameHistoryComponent);



/***/ }),

/***/ "./src/app/game/components/right-answer/right-answer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/game/components/right-answer/right-answer.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9yaWdodC1hbnN3ZXIvcmlnaHQtYW5zd2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/game/components/right-answer/right-answer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/game/components/right-answer/right-answer.component.ts ***!
  \************************************************************************/
/*! exports provided: RightAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightAnswerComponent", function() { return RightAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RightAnswerComponent = class RightAnswerComponent {
    constructor(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.chosenWord = this.data.chosenWord;
    }
    onContinuePlaying() {
        this.dialogRef.close();
        this.router.navigate(['/game/start']);
    }
};
RightAnswerComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RightAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-right-answer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./right-answer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/right-answer/right-answer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./right-answer.component.css */ "./src/app/game/components/right-answer/right-answer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], RightAnswerComponent);



/***/ }),

/***/ "./src/app/game/components/start-game/start-game.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/game/components/start-game/start-game.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".start-game-div {\r\n    text-align: center;\r\n}\r\n\r\n.start-game-button {\r\n    margin-top: 200px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    padding-right: 50px !important;\r\n    padding-left: 50px !important;\r\n    padding-top: 30px !important;\r\n    padding-bottom: 30px !important;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL3N0YXJ0LWdhbWUvc3RhcnQtZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsK0JBQStCOztBQUVuQyIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9zdGFydC1nYW1lL3N0YXJ0LWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1nYW1lLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC1nYW1lLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/components/start-game/start-game.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/game/components/start-game/start-game.component.ts ***!
  \********************************************************************/
/*! exports provided: StartGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameComponent", function() { return StartGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _game_box_game_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-box/game-box.component */ "./src/app/game/components/game-box/game-box.component.ts");





let StartGameComponent = class StartGameComponent {
    constructor(gameService, dialog) {
        this.gameService = gameService;
        this.dialog = dialog;
    }
    onStartCzechGame() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.randomWords = yield this.gameService.getWordsForGame('cz');
            if (this.randomWords) {
                this.dialog.open(_game_box_game_box_component__WEBPACK_IMPORTED_MODULE_4__["GameBoxComponent"], {
                    width: '700px',
                    disableClose: true,
                    data: this.randomWords
                });
            }
        });
    }
    onStartEnglishGame() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.randomWords = yield this.gameService.getWordsForGame('en');
            if (this.randomWords) {
                this.dialog.open(_game_box_game_box_component__WEBPACK_IMPORTED_MODULE_4__["GameBoxComponent"], {
                    width: '700px',
                    disableClose: true,
                    data: this.randomWords
                });
            }
        });
    }
};
StartGameComponent.ctorParameters = () => [
    { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
StartGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/start-game/start-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start-game.component.css */ "./src/app/game/components/start-game/start-game.component.css")).default]
    })
], StartGameComponent);



/***/ }),

/***/ "./src/app/game/components/success/success.component.css":
/*!***************************************************************!*\
  !*** ./src/app/game/components/success/success.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY29tcG9uZW50cy9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/game/components/success/success.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/game/components/success/success.component.ts ***!
  \**************************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SuccessComponent = class SuccessComponent {
    constructor(dialogRef, data, gameService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.gameService = gameService;
        this.router = router;
        this.username = JSON.parse(sessionStorage.getItem('currentUser'))['username'];
    }
    ngOnInit() {
        // call the services that will send a put request to 
        // the updategameinfo and the updategamehistory endpoints
        this.updateGameData();
    }
    updateGameData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.updatedScore = yield this.gameService.updateGameInfo(this.data[0]);
            this.updatedGameHistory = yield this.gameService.updateGameHistory(this.data[1]);
        });
    }
    onContinuePlaying() {
        this.dialogRef.close();
        this.router.navigate(['/game/start']);
    }
    onStopPlaying() {
        this.dialogRef.close();
        this.router.navigate(['profile']);
    }
    onCheckGameHistory() {
        this.dialogRef.close();
        this.router.navigate(['/game/history']);
    }
};
SuccessComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/success/success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./success.component.css */ "./src/app/game/components/success/success.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], SuccessComponent);



/***/ }),

/***/ "./src/app/game/components/top-players/top-players.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/game/components/top-players/top-players.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".players-list {\r\n    text-align: center;\r\n    height: 150px;\r\n    background-color: #212529;\r\n    color: #ff4081;\r\n    border: solid #343a40;\r\n}\r\n\r\n.top-player-info {\r\n    padding-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL3RvcC1wbGF5ZXJzL3RvcC1wbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9jb21wb25lbnRzL3RvcC1wbGF5ZXJzL3RvcC1wbGF5ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVycy1saXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgY29sb3I6ICNmZjQwODE7XHJcbiAgICBib3JkZXI6IHNvbGlkICMzNDNhNDA7XHJcbn1cclxuXHJcbi50b3AtcGxheWVyLWluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/components/top-players/top-players.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/game/components/top-players/top-players.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopPlayersComponent", function() { return TopPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/game.service */ "./src/app/services/game.service.ts");



let TopPlayersComponent = class TopPlayersComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.getTopPlayers();
    }
    getTopPlayers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.topPlayers = yield this.gameService.getTopTen();
        });
    }
};
TopPlayersComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
TopPlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-players',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-players.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/components/top-players/top-players.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-players.component.css */ "./src/app/game/components/top-players/top-players.component.css")).default]
    })
], TopPlayersComponent);



/***/ }),

/***/ "./src/app/game/game-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/game/game-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRoutingModule", function() { return GameRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start-game/start-game.component */ "./src/app/game/components/start-game/start-game.component.ts");
/* harmony import */ var _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/failure/failure.component */ "./src/app/game/components/failure/failure.component.ts");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/success/success.component */ "./src/app/game/components/success/success.component.ts");
/* harmony import */ var _components_game_history_game_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game-history/game-history.component */ "./src/app/game/components/game-history/game-history.component.ts");
/* harmony import */ var _components_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/top-players/top-players.component */ "./src/app/game/components/top-players/top-players.component.ts");
/* harmony import */ var _components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/changed-title/changed-title.component */ "./src/app/game/components/changed-title/changed-title.component.ts");
/* harmony import */ var _components_right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/right-answer/right-answer.component */ "./src/app/game/components/right-answer/right-answer.component.ts");










const routes = [
    {
        path: 'start',
        component: _components_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_3__["StartGameComponent"]
    },
    {
        path: 'lost',
        component: _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_4__["FailureComponent"]
    },
    {
        path: 'won',
        component: _components_success_success_component__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"]
    },
    {
        path: 'history',
        component: _components_game_history_game_history_component__WEBPACK_IMPORTED_MODULE_6__["GameHistoryComponent"]
    },
    {
        path: 'topten',
        component: _components_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_7__["TopPlayersComponent"]
    },
    {
        path: 'newtitle',
        component: _components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_8__["ChangedTitleComponent"]
    },
    {
        path: 'rightanswer',
        component: _components_right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_9__["RightAnswerComponent"]
    }
];
let GameRoutingModule = class GameRoutingModule {
};
GameRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GameRoutingModule);



/***/ }),

/***/ "./src/app/game/game.module.ts":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/game/game-routing.module.ts");
/* harmony import */ var _components_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/start-game/start-game.component */ "./src/app/game/components/start-game/start-game.component.ts");
/* harmony import */ var _components_game_box_game_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game-box/game-box.component */ "./src/app/game/components/game-box/game-box.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/failure/failure.component */ "./src/app/game/components/failure/failure.component.ts");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/success/success.component */ "./src/app/game/components/success/success.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_game_history_game_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/game-history/game-history.component */ "./src/app/game/components/game-history/game-history.component.ts");
/* harmony import */ var _components_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/top-players/top-players.component */ "./src/app/game/components/top-players/top-players.component.ts");
/* harmony import */ var _components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/changed-title/changed-title.component */ "./src/app/game/components/changed-title/changed-title.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _components_right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/right-answer/right-answer.component */ "./src/app/game/components/right-answer/right-answer.component.ts");





















let GameModule = class GameModule {
};
GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_5__["StartGameComponent"],
            _components_game_box_game_box_component__WEBPACK_IMPORTED_MODULE_6__["GameBoxComponent"],
            _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_8__["FailureComponent"],
            _components_success_success_component__WEBPACK_IMPORTED_MODULE_9__["SuccessComponent"],
            _components_game_history_game_history_component__WEBPACK_IMPORTED_MODULE_13__["GameHistoryComponent"],
            _components_top_players_top_players_component__WEBPACK_IMPORTED_MODULE_14__["TopPlayersComponent"],
            _components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_15__["ChangedTitleComponent"],
            _components_right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_18__["RightAnswerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _game_routing_module__WEBPACK_IMPORTED_MODULE_4__["GameRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
        entryComponents: [
            _components_game_box_game_box_component__WEBPACK_IMPORTED_MODULE_6__["GameBoxComponent"],
            _components_success_success_component__WEBPACK_IMPORTED_MODULE_9__["SuccessComponent"],
            _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_8__["FailureComponent"],
            _components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_15__["ChangedTitleComponent"],
            _components_right_answer_right_answer_component__WEBPACK_IMPORTED_MODULE_18__["RightAnswerComponent"]
        ],
        providers: [
            _services_game_service__WEBPACK_IMPORTED_MODULE_16__["GameService"]
        ]
    })
], GameModule);



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _game_components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/components/changed-title/changed-title.component */ "./src/app/game/components/changed-title/changed-title.component.ts");






let GameService = class GameService {
    constructor(http, newDialog) {
        this.http = http;
        this.newDialog = newDialog;
        // url: string = 'http://localhost:5000';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Authorization", `Bearer ${sessionStorage.getItem("JWT")}`);
    }
    getWordsForGame(lang) {
        return this.http.post(`/getrandomwords/${lang}`, { userId: JSON.parse(sessionStorage.getItem('currentUser'))['_id'] }, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const randomWords = response.chosenWords.map(word => {
                return { word: word.word, meaning: word.meaning, lang: word.lang };
            });
            return randomWords;
        })).toPromise();
    }
    updateGameInfo(newGameInfo) {
        return this.http.put('/updategameinfo', newGameInfo, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            if (response.success) {
                const oldTitle = JSON.parse(sessionStorage.getItem('currentUser'))['title'];
                const newTitle = response.currentUser.title;
                sessionStorage.removeItem('currentUser');
                sessionStorage.setItem('currentUser', JSON.stringify(response.currentUser));
                if (oldTitle !== newTitle) {
                    this.newDialog.open(_game_components_changed_title_changed_title_component__WEBPACK_IMPORTED_MODULE_5__["ChangedTitleComponent"], {
                        width: '700px',
                        disableClose: true
                    });
                }
                return response.currentUser.score;
            }
            ;
        })).toPromise();
    }
    updateGameHistory(newGameHistory) {
        return this.http.put('/updategamehistory', newGameHistory, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            if (response.success) {
                sessionStorage.removeItem('currentUser');
                sessionStorage.setItem('currentUser', JSON.stringify(response.currentUser));
                return response.currentUser.gameHistory;
            }
        })).toPromise();
    }
    getTopTen() {
        return this.http.get('/gettopten', { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            if (response && response.success) {
                return response.topTenUsers;
            }
        })).toPromise();
    }
};
GameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ })

}]);
//# sourceMappingURL=game-game-module-es2015.js.map