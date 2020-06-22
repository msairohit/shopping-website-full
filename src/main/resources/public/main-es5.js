function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppHeaderAppHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Welcome to Online Shopping website </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"large\" color = \"#0e8fdf\" type = \"ball-climbing-dot\" fullScreen = \"true\">\n      <h3 style=\"color: #0e8fdf\" > Loading... </h3>\n  </ngx-spinner>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink = \"/home\">Home </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink = \"/signUp\">Sign Up</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink = \"/test\">Test</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink = \"/test\">Fruits</a>\n          </li>\n          <li class=\"nav-item\" *ngIf = \"isAccessable()\">\n            <a class=\"nav-link\" routerLink = \"/vegetables\">Vegetables</a>\n          </li>\n          <li class=\"nav-item\" *ngIf = \"isAccessable()\">\n            <a class=\"nav-link\" routerLink = \"/manage/vegetables\">Manage Vegetables</a>\n          </li>\n          <li class=\"nav-item\" *ngIf = \"isAccessable()\">\n            <a class=\"nav-link\" routerLink = \"/cart\">Cart</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink = \"/testLogin\">login / signup</a>\n          </li>\n          <li class=\"nav-item\" *ngIf = \"isAccessable()\">\n              <button class=\"btn btn-danger\" (click) = \"onLogOut()\"> Log out</button>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink = \"/step\">Step</a>\n          </li> -->\n        <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown link\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li> -->\n      </ul>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-app-header></app-app-header>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"card-group\">\r\n    <div class=\"card\">\r\n        <div>\r\n            <img class=\"card-img-top\" src=\"assets/images/image.png\" width=\"500\" height=\"600\" alt=\"Card image cap\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Card title</h5>\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional\r\n                content. This content is a little bit longer.</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n<!-- style=\"display: inline-block; margin-right: 20px; border: ridge;\" -->\r\n<!-- style=\"box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.35);border-radius: 2em;box-sizing: border-box;display: block;height: 381px;width: 340px;\" -->\r\n<div >\r\n    <ul style=\"list-style-type: none;\">\r\n        <li *ngFor=\"let data of parentData; index as i\"\r\n            \r\n            style=\"display: inline-block; margin-right: 20px; border-radius: 2em; box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.35);box-sizing: border-box; margin-bottom: 20px;\">\r\n            <div style=\"text-align: center;\">\r\n                <img class=\"card-img-top\" style=\"width: 200px;\" src=\"assets/images/image.png\" alt=\"Card image cap\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{data.name}}</h5>\r\n                <p class=\"card-text\">{{data.vegetableDescription}}</p>\r\n                <p class=\"card-text\"> Price : {{data.price || data.costOfEachItem | currency:'INR'}}</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                <app-counter id = \"app-counter-{{data.name}}\" [parentData] = \"data\" (messageEvent)=\"receiveMessage($event, data)\"></app-counter>\r\n                <!-- <div class=\"input-group\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-secondary\" type=\"button\" aria-label=\"\">Action</button>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"\" aria-label=\"\">\r\n        </div> -->\r\n                <div style=\"text-align: center;\">\r\n                    <button  *ngIf = \"data.price\" id = \"btn-{{data.name}}\" class=\"btn btn-primary\" (click)=\"addOrUpdateCart(data)\" [disabled] = \"data.buttonStatus\">{{data.buttonText}}</button>\r\n                    <label *ngIf = \"data.totalCost\">  Total cost : </label>\r\n                        <label *ngIf = \"data.totalCost\" id = \"totalCostLabel-{{data.name}}\">{{data.totalCost}}</label>\r\n                    <button id = \"btn-remove-{{data.name}}\" class=\"btn btn-danger\" (click)=\"removeItemFromCart(data)\" style=\"margin-left: 10px;\">\r\n                        <svg class=\"bi bi-trash-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\r\n                          </svg>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<div>\n    <p>\n       Number of Items in the cart : {{numberOfItemsInCart}}\n    </p>\n    <p>\n        Total cart value : {{totalCartValue}}\n    </p>\n</div>\n<div>\n    <app-card (totalCostFromChild)=\"getDataFromChild($event)\" [parentData]=\"allData\"></app-card>\n</div>\n\n<!-- <div class=\"card mb-3\" style=\"max-width: 540px;\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4\">\n        <img src=\"...\" class=\"card-img\" alt=\"...\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n        </div>\n      </div>\n    </div>\n  </div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"input-group\">\n    <span class=\"input-group-btn\">\n        <button type=\"button\" (click) = \"decrement()\" class=\"quantity-left-minus btn btn-danger btn-number\" data-type=\"minus\" data-field=\"\">-\n        </button>\n    </span>\n\n\n\n    <input type=\"number\" id=\"quantity\" name=\"quantity\" class=\"form-control input-number\" [(ngModel)] = 'count' value=\"count\"\n        min=\"0.25\" max=\"100\" step=\"0.25\"\n        (keypress)=\"keyPressed($event)\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">Kgs</span>\n    </div>\n    \n    \n    <!-- <div class=\"input-group\">\n        <input type=\"number\" id=\"quantity\" name=\"quantity\" class=\"form-control input-number\" [(ngModel)] = 'count' value=\"count\"\n        min='1' max='100'\n        onkeypress=\"return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            <div role=\"separator\" class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n          </div>\n        </div> -->\n    \n    <span class=\"input-group-btn\">\n        <button type=\"button\" (click) = \"increment($event)\" class=\"quantity-right-plus btn btn-success btn-number\" data-type=\"plus\" data-field=\"\">+\n        </button>\n    </span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>home works!</p>\n<p>details about the website</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-signup-test/login-signup-test.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-signup-test/login-signup-test.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginSignupTestLoginSignupTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p class=\"tip\">welcome to the website</p> -->\n<br>\n<div class=\"cont\">\n  <div class=\"form sign-in\">\n    <h2>Welcome back,</h2>\n    <!-- <label>\n      <span>Email</span>\n      <input type=\"email\" />\n    </label>\n    <label>\n      <span>Password</span>\n      <input type=\"password\" />\n    </label> -->\n    <app-sign-in></app-sign-in>\n    <!-- <p class=\"forgot-pass\">Forgot password?</p> -->\n    <!-- <button type=\"button\" class=\"submit\" (click) = \"onSignIn()\">Sign In</button> -->\n    <!-- <button type=\"button\" class=\"fb-btn\">Connect with <span>facebook</span></button> -->\n  </div>\n  <div class=\"sub-cont\">\n    <div class=\"img\">\n      <div class=\"img__text m--up\">\n        <h2>New here?</h2>\n        <p>Sign up and discover great amount of new opportunities!</p>\n      </div>\n      <div class=\"img__text m--in\">\n        <h2>One of us?</h2>\n        <p>If you already has an account, just sign in. We've missed you!</p>\n      </div>\n      <div class=\"img__btn\">\n        <span class=\"m--up\">Sign Up</span>\n        <span class=\"m--in\">Sign In</span>\n      </div>\n    </div>\n    <div class=\"form sign-up\" style=\"overflow: auto; padding-top: 0px;\">\n      <h2>Time to feel like home,</h2>\n      <!-- <label>\n        <span>Name</span>\n        <input type=\"text\" />\n      </label>\n      <label>\n        <span>Email</span>\n        <input type=\"email\" />\n      </label>\n      <label>\n        <span>Password</span>\n        <input type=\"password\" />\n      </label> -->\n      <!-- <app-sign-up></app-sign-up> -->\n      <app-step-test></app-step-test>\n      <!-- <button type=\"button\" class=\"submit\" (click) = \"onSignUp()\">Sign Up</button>\n      <button type=\"button\" class=\"fb-btn\">Join with <span>facebook</span></button> -->\n    </div>\n  </div>\n</div>\n<p>\n  template reference : https://codepen.io/suez/pen/RpNXOR\n</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-vegetables/manage-vegetables.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-vegetables/manage-vegetables.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManageVegetablesManageVegetablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>manage-vegetables works!</p>\n<div>\n    <form name=\"form\" [formGroup]=\"vegetablesForm\">\n        <div class=\"form-row\">\n            <div class=\"col-md-4 mb-3\">\n                <label for=\"Vegetable name\">Vegetable name</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">Vegetable Name</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"vegetableName\" placeholder=\"Vegetable name\"\n                        [ngClass]=\"{'is-invalid': isValid('vegetableName')}\">\n                    <div *ngIf=\"isValid('vegetableName')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"vegetablesForm.get('vegetableName').errors.required\">\n                            Vegetable Name is required.\n                        </div>\n                        <div *ngIf=\"vegetablesForm.get('vegetableName').errors.minlength\">\n                            Vegetable Name must be at least 3 characters long.\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n                <label for=\"price\">Price</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">₹</span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\"\n                        [ngClass]=\"{'is-invalid': isValid('price')}\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">per KG</span>\n                    </div>\n                    <div *ngIf=\"isValid('price')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"vegetablesForm.get('price').errors.required\">\n                            price is required.\n                        </div>\n                        <div *ngIf=\"vegetablesForm.get('price').errors.max || vegetablesForm.get('price').errors.min\">\n                            price is not valid.\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"form-row\">\n            <div class=\"col-md-2 mb-3\">\n            </div>\n            <div class=\"col-md-4 mb-3\" style=\"text-align: center;\">\n                <label for=\"Vegetable Description\">Vegetable Description</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">Vegetable Description</span>\n                    </div>\n                    <textarea class=\"form-control\" placeholder=\"Vegetable Description\"\n                        formControlName=\"vegetableDescription\"\n                        [ngClass]=\"{'is-invalid': isValid('vegetableDescription')}\"></textarea>\n                    <div *ngIf=\"isValid('vegetableDescription')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"vegetablesForm.get('vegetableDescription').errors.required\">\n                            Vegetable Description is required.\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"col-sm-3\" style=\"text-align: center;\">\n                <button class=\"btn btn-primary\" (click)=\"onSearch()\">Search</button>\n            </div>\n            <div class=\"col-sm-3\" style=\"text-align: center;\">\n                <button class=\"btn btn-success\" (click)=\"onCreate()\" [disabled] = \"!vegetablesForm.valid || !updateDisabled\">create</button>\n                <!-- <button class=\"btn btn-success\" [disabled]=\"!vegetablesForm.valid\">create new vegetable</button> -->\n            </div>\n            <div class=\"col-sm-3\" style=\"text-align: center;\">\n                <button class=\"btn btn-warning\" (click) = \"onUpdate()\" [disabled] = \"!vegetablesForm.valid || updateDisabled\">update</button>\n                <!-- <button class=\"btn btn-success\" [disabled]=\"!vegetablesForm.valid\">update vegetable</button> -->\n            </div>\n            <div class=\"col-sm-3\" style=\"text-align: center;\">\n                <button class=\"btn btn-danger\" (click) = \"onClear()\">reset</button>\n                <!-- <button class=\"btn btn-success\" [disabled]=\"!vegetablesForm.valid\">delete vegetable</button> -->\n            </div>\n\n        </div>\n    </form>\n\n    <div *ngIf=\"showTable\">\n        <div style=\"text-align: end;\">\n            toggle dark mode\n            <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"theCheckbox\">\n                <span class=\"slider round\"></span>\n              </label>\n        </div>\n        <table  [ngClass] = \"theCheckbox ? 'table table-striped table-dark' : 'table table-striped'\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">NAME</th>\n                    <th scope=\"col\">DESCRIPTION</th>\n                    <th scope=\"col\">PRICE</th>\n                    <th scope=\"col\"></th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let vegetable of vegetables; index as i\">\n                    <th>{{i}}</th>\n                    <td>{{vegetable.name}}</td>\n                    <td>{{vegetable.vegetableDescription}}</td>\n                    <td>{{vegetable.price}}</td>\n                    <td>\n                        \n                        <button (click) = \"onTableEditClicked(vegetable)\" style=\"margin-right: 20px;\">\n                            <svg class=\"bi bi-pencil-square\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\n                                <path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\n                              </svg>\n                        </button>\n                        <button (click) = \"onTableDeleteClicked(vegetable)\">\n                            <svg class=\"bi bi-trash-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\n                              </svg>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"form\" [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit(signIpForm)\" id=\"signInForm\">\n    <div class=\"main-div\">\n        <h4 >SIGN IN</h4>\n        <br>\n        <hr>\n        <br>\n        <!-- <h3 class=\"fs-subtitle\">This is step 1</h3> -->\n        <label for=\"user name\">User name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"userName\" placeholder=\"user name\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n        <div>\n            <a class=\"anchor\"  (click) = \"onForgetPassword()\">Forgot password?</a>\n        </div>\n        <button class=\"action-button\" type=\"submit\" [disabled]=\"!signInForm.valid\">Sign In</button>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <form [formGroup] = \"signUpForm\" (ngSubmit)=\"onSubmit(signUpForm)\">\r\n\r\n    <input type=\"text\" formControlName = \"userName\">\r\n    <input type=\"text\" formControlName = \"email\">\r\n    <input type=\"text\" formControlName = \"password\">\r\n\r\n    <button type=\"submit\" [disabled]=\"!signUpForm.valid\">Submit</button>\r\n\r\n</form> -->\r\n<div>\r\n    <form name=\"form\" [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit(signUpForm)\">\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-4 mb-3\">\r\n                <label for=\"first name\">First name</label>\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">First Name</span>\r\n                    </div>\r\n                    <!-- [ngClass]=\"signUpForm.controls['firstName'].invalid ? 'is-invalid' : ''\" -->\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First name\"\r\n                        [ngClass]=\"{'is-invalid': isValid('firstName')}\">\r\n                    <div *ngIf=\"isValid('firstName')\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"signUpForm.get('firstName').errors.required\">\r\n                            First Name is required.\r\n                        </div>\r\n                        <div *ngIf=\"signUpForm.get('firstName').errors.minlength\">\r\n                            First Name must be at least 3 characters long.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n                <label for=\"last name\">Last name</label>\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">Last Name</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastName\"\r\n                        [ngClass]=\"{'is-invalid': isValid('lastName')}\">\r\n                    <div *ngIf=\"isValid('lastName')\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"signUpForm.get('lastName').errors.required\">\r\n                            Last Name is required.\r\n                        </div>\r\n                        <div *ngIf=\"signUpForm.get('lastName').errors.minlength\">\r\n                            Last Name must be at least 3 characters long.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-4 mb-3\">\r\n                <label for=\"email\">Email</label>\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\r\n                    </div>\r\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\r\n                        [ngClass]=\"{'is-invalid': isValid('email')}\">\r\n                    <div *ngIf=\"isValid('email')\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"signUpForm.get('email').errors.required\">\r\n                            email is required.\r\n                        </div>\r\n                        <div *ngIf=\"signUpForm.get('email').errors.email\">\r\n                            enter valid email.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n                <label for=\"phoneNumber\">Phone Number</label>\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">#</span>\r\n                    </div>\r\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\"\r\n                        [ngClass]=\"{'is-invalid': isValid('phoneNumber')}\">\r\n                    <div *ngIf=\"isValid('phoneNumber')\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"signUpForm.get('phoneNumber').errors.required\">\r\n                            phoneNumber is required.\r\n                        </div>\r\n                        <div\r\n                            *ngIf=\"signUpForm.get('phoneNumber').errors.max || signUpForm.get('phoneNumber').errors.pattern || signUpForm.get('phoneNumber').errors.min\">\r\n                            phoneNumber is not valid.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" col-md-4 mb-3\">\r\n            <label for=\"user name\">will be displayed in your profile</label>\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend3\">User Name</span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"userName\"\r\n                    [ngClass]=\"{'is-invalid': isValid('userName')}\">\r\n                <div *ngIf=\"isValid('userName')\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"signUpForm.get('userName').errors.required\">\r\n                        User name is required.\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('userName').errors.pattern\">\r\n                        No space is allowed in username\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('userName').errors.minlength\">\r\n                        Username must be at least 5 characters long.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-4 mb-3\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\r\n                    [ngClass]=\"{'is-invalid': isValid('password')}\">\r\n                <div *ngIf=\"isValid('password')\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"signUpForm.get('password').errors.required\">\r\n                        password is required.\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('password').errors.minlength\">\r\n                        password must be at least 8 characters long.\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('password').errors.hasSpecialCharacters\">\r\n                        password shpuld contain atleast one special character.\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('password').errors.hasCapitalCase\">\r\n                        password must contain atleast one capital case letter.\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('password').errors.hasNumber\">\r\n                        password must contain atleast one number.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 mb-3\">\r\n                <label for=\"Confirm password\">Confirm Password</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"confirm Password\" formControlName=\"confirmPassword\"\r\n                    [ngClass]=\"{'is-invalid': isValid('confirmPassword')}\">\r\n                <div *ngIf=\"isValid('confirmPassword')\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"signUpForm.get('confirmPassword').errors.required\">\r\n                        confirm Password is required.\r\n                    </div>\r\n                    <div *ngIf=\"signUpForm.get('confirmPassword').errors.NoPassswordMatch\">\r\n                        Password and confirmPassword does not match.\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"form-row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n                <label for=\"validationServer03\">City</label>\r\n                <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\" placeholder=\"City\" required>\r\n                <div class=\"invalid-feedback\">\r\n                    Please provide a valid city.\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n                <label for=\"validationServer04\">State</label>\r\n                <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\" placeholder=\"State\" required>\r\n                <div class=\"invalid-feedback\">\r\n                    Please provide a valid state.\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n                <label for=\"validationServer05\">Zip</label>\r\n                <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\" placeholder=\"Zip\" required>\r\n                <div class=\"invalid-feedback\">\r\n                    Please provide a valid zip.\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group\">\r\n            <div class=\"form-check\">\r\n                <input class=\"form-check-input is-invalid\" type=\"checkbox\" value=\"\" id=\"invalidCheck3\" required>\r\n                <label class=\"form-check-label\" for=\"invalidCheck3\">\r\n                    Agree to terms and conditions\r\n                </label>\r\n                <div class=\"invalid-feedback\">\r\n                    You must agree before submitting.\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div style=\"text-align: center;\">\r\n            <!-- <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!signUpForm.valid\">Sign Up</button> -->\r\n            <button class=\"btn btn-success\" type=\"submit\">Sign Up</button>\r\n        </div>\r\n    </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/step-test/step-test.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/step-test/step-test.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStepTestStepTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <form name=\"form\" [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit(signUpForm)\" id=\"msform\">\n        <!-- progressbar -->\n    <ul id=\"progressbar\">\n        <li class=\"active\">Account Setup</li>\n        <li>Social Profiles</li>\n        <li>Personal Details</li>\n      </ul>\n      <!-- fieldsets -->\n      <fieldset>\n        <h2 class=\"fs-title\">Create your account</h2>\n        <h3 class=\"fs-subtitle\">This is step 1</h3>\n                <label for=\"first name\">First name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First name\"\n                        [ngClass]=\"{'is-invalid': isValid('firstName')}\">\n                    <div *ngIf=\"isValid('firstName')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"signUpForm.get('firstName').errors.required\">\n                            First Name is required.\n                        </div>\n                        <div *ngIf=\"signUpForm.get('firstName').errors.minlength\">\n                            First Name must be at least 3 characters long.\n                        </div>\n                    </div>\n                <label for=\"last name\">Last name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastName\"\n                        [ngClass]=\"{'is-invalid': isValid('lastName')}\">\n                    <div *ngIf=\"isValid('lastName')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"signUpForm.get('lastName').errors.required\">\n                            Last Name is required.\n                        </div>\n                        <div *ngIf=\"signUpForm.get('lastName').errors.minlength\">\n                            Last Name must be at least 3 characters long.\n                        </div>\n                    </div>\n        <input type=\"button\" name=\"next\" class=\"next action-button\" value=\"Next\"/>\n        <!-- <button name=\"next\" class=\"btn btn-success\" value=\"Next\" [disabled] = \"isValid('lastName') || isValid('firstName')\"> next</button> -->\n    </fieldset>\n    <fieldset>\n        <h2 class=\"fs-title\">Social Profiles</h2>\n        <h3 class=\"fs-subtitle\">Your presence on the social network</h3>\n                <label for=\"email\">Email</label>\n                <div class=\"input-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\n                        [ngClass]=\"{'is-invalid': isValid('email')}\">\n                    <div *ngIf=\"isValid('email')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"signUpForm.get('email').errors.required\">\n                            email is required.\n                        </div>\n                        <div *ngIf=\"signUpForm.get('email').errors.email\">\n                            enter valid email.\n                        </div>\n                    </div>\n                </div>\n                <label for=\"phoneNumber\">Phone Number</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\"\n                        [ngClass]=\"{'is-invalid': isValid('phoneNumber')}\">\n                    <div *ngIf=\"isValid('phoneNumber')\" class=\"invalid-feedback\">\n                        <div *ngIf=\"signUpForm.get('phoneNumber').errors.required\">\n                            phoneNumber is required.\n                        </div>\n                        <div\n                            *ngIf=\"signUpForm.get('phoneNumber').errors.max || signUpForm.get('phoneNumber').errors.pattern || signUpForm.get('phoneNumber').errors.min\">\n                            phoneNumber is not valid.\n                        </div>\n                    </div>\n        <input type=\"button\" name=\"previous\" class=\"previous action-button\" value=\"Previous\" />\n      <input type=\"button\" name=\"next\" class=\"next action-button\" value=\"Next\" />\n    </fieldset>\n    <fieldset>\n        <h2 class=\"fs-title\">Personal Details</h2>\n        <h3 class=\"fs-subtitle\">We will never sell it</h3>\n            <label for=\"user name\">user name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"userName\"\n                    [ngClass]=\"{'is-invalid': isValid('userName')}\">\n                <div *ngIf=\"isValid('userName')\" class=\"invalid-feedback\">\n                    <div *ngIf=\"signUpForm.get('userName').errors.required\">\n                        User name is required.\n                    </div>\n                    <div *ngIf=\"signUpForm.get('userName').errors.pattern\">\n                        No space is allowed in username\n                    </div>\n                    <div *ngIf=\"signUpForm.get('userName').errors.minlength\">\n                        Username must be at least 5 characters long.\n                    </div>\n                </div>\n\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                    [ngClass]=\"{'is-invalid': isValid('password')}\">\n                <div *ngIf=\"isValid('password')\" class=\"invalid-feedback\">\n                    <div *ngIf=\"signUpForm.get('password').errors.required\">\n                        password is required.\n                    </div>\n                    <div *ngIf=\"signUpForm.get('password').errors.minlength\">\n                        password must be at least 8 characters long.\n                    </div>\n                    <div *ngIf=\"signUpForm.get('password').errors.hasSpecialCharacters\">\n                        password shpuld contain atleast one special character.\n                    </div>\n                    <div *ngIf=\"signUpForm.get('password').errors.hasCapitalCase\">\n                        password must contain atleast one capital case letter.\n                    </div>\n                    <div *ngIf=\"signUpForm.get('password').errors.hasNumber\">\n                        password must contain atleast one number.\n                    </div>\n                </div>\n\n                <label for=\"Confirm password\">Confirm Password</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"confirm Password\" formControlName=\"confirmPassword\"\n                    [ngClass]=\"{'is-invalid': isValid('confirmPassword')}\">\n                <div *ngIf=\"isValid('confirmPassword')\" class=\"invalid-feedback\">\n                    <div *ngIf=\"signUpForm.get('confirmPassword').errors.required\">\n                        confirm Password is required.\n                    </div>\n                    <div *ngIf=\"signUpForm.get('confirmPassword').errors.NoPassswordMatch\">\n                        Password and confirmPassword does not match.\n                    </div>\n                </div>\n\n        <!-- <div style=\"text-align: center;\"> -->\n            <!-- <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!signUpForm.valid\">Sign Up</button> -->\n            <!-- <button class=\"btn btn-success\" type=\"submit\">Sign Up</button> -->\n        <!-- </div> -->\n        <input type=\"button\" name=\"previous\" class=\"previous action-button\" value=\"Previous\" />\n      <!-- <input type=\"submit\" name=\"submit\" class=\"submit action-button\" value=\"Submit\" /> -->\n      <button class=\"action-button\" type=\"submit\" [disabled]=\"!signUpForm.valid\">Sign Up</button>\n      <div *ngIf=\"isFormInValid()\" class=\"invalid-feedback d-block\">\n            Some form values are incorrect, please enter valid data and come back.\n    </div>\n    </fieldset>\n    </form>\n    <p>\n        template reference : https://codepen.io/bluestarstudios/details/ZEGamYP\n        <br>\n        inside validation and all by me  😋\n    </p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>test works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vegetables/vegetables.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vegetables/vegetables.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVegetablesVegetablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>vegetables works!</p>\n<div>\n<app-card [parentData]=\"allData\"></app-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-header/app-header.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/app-header/app-header.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppHeaderAppHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app-header/app-header.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/app-header/app-header.component.ts ***!
    \****************************************************/

  /*! exports provided: AppHeaderComponent */

  /***/
  function srcAppAppHeaderAppHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
      return AppHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../local-storage.service */
    "./src/app/local-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppHeaderComponent = /*#__PURE__*/function () {
      function AppHeaderComponent(localStorageService, router) {
        _classCallCheck(this, AppHeaderComponent);

        this.localStorageService = localStorageService;
        this.router = router;
      }

      _createClass(AppHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isAccessable",
        value: function isAccessable() {
          return this.localStorageService.isUserLoggedIn() == "true";
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          localStorage.setItem("isUserLoggedIn", "false");
          this.router.navigate(['testLogin']);
        }
      }]);

      return AppHeaderComponent;
    }();

    AppHeaderComponent.ctorParameters = function () {
      return [{
        type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-header.component.css */
      "./src/app/app-header/app-header.component.css"))["default"]]
    })], AppHeaderComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _vegetables_vegetables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vegetables/vegetables.component */
    "./src/app/vegetables/vegetables.component.ts");
    /* harmony import */


    var _manage_vegetables_manage_vegetables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./manage-vegetables/manage-vegetables.component */
    "./src/app/manage-vegetables/manage-vegetables.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _login_signup_test_login_signup_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login-signup-test/login-signup-test.component */
    "./src/app/login-signup-test/login-signup-test.component.ts");
    /* harmony import */


    var _step_test_step_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./step-test/step-test.component */
    "./src/app/step-test/step-test.component.ts");
    /* harmony import */


    var _user_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-logged-in-guard.service */
    "./src/app/user-logged-in-guard.service.ts");

    var routes = [{
      path: '',
      redirectTo: '/testLogin',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'test',
      component: _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]
    }, {
      path: 'signUp',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'vegetables',
      component: _vegetables_vegetables_component__WEBPACK_IMPORTED_MODULE_6__["VegetablesComponent"],
      canActivate: [_user_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_11__["UserLoggedInGuardService"]]
    }, {
      path: 'manage/vegetables',
      component: _manage_vegetables_manage_vegetables_component__WEBPACK_IMPORTED_MODULE_7__["ManageVegetablesComponent"],
      canActivate: [_user_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_11__["UserLoggedInGuardService"]]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
      canActivate: [_user_logged_in_guard_service__WEBPACK_IMPORTED_MODULE_11__["UserLoggedInGuardService"]]
    }, {
      path: 'testLogin',
      component: _login_signup_test_login_signup_test_component__WEBPACK_IMPORTED_MODULE_9__["LoginSignupTestComponent"]
    }, {
      path: 'step',
      component: _step_test_step_test_component__WEBPACK_IMPORTED_MODULE_10__["StepTestComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'shopping-website';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _vegetables_vegetables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./vegetables/vegetables.component */
    "./src/app/vegetables/vegetables.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _counter_counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./counter/counter.component */
    "./src/app/counter/counter.component.ts");
    /* harmony import */


    var _manage_vegetables_manage_vegetables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./manage-vegetables/manage-vegetables.component */
    "./src/app/manage-vegetables/manage-vegetables.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _login_signup_test_login_signup_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login-signup-test/login-signup-test.component */
    "./src/app/login-signup-test/login-signup-test.component.ts");
    /* harmony import */


    var _step_test_step_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./step-test/step-test.component */
    "./src/app/step-test/step-test.component.ts");
    /* harmony import */


    var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app-header/app-header.component */
    "./src/app/app-header/app-header.component.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/sign-in/sign-in.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _vegetables_vegetables_component__WEBPACK_IMPORTED_MODULE_9__["VegetablesComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _counter_counter_component__WEBPACK_IMPORTED_MODULE_11__["CounterComponent"], _manage_vegetables_manage_vegetables_component__WEBPACK_IMPORTED_MODULE_12__["ManageVegetablesComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"], _login_signup_test_login_signup_test_component__WEBPACK_IMPORTED_MODULE_17__["LoginSignupTestComponent"], _step_test_step_test_component__WEBPACK_IMPORTED_MODULE_18__["StepTestComponent"], _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_19__["AppHeaderComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__["SignInComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/card/card.component.css":
  /*!*****************************************!*\
    !*** ./src/app/card/card.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../local-storage.service */
    "./src/app/local-storage.service.ts");
    /* harmony import */


    var _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../counter/counter.component */
    "./src/app/counter/counter.component.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../cart */
    "./src/app/cart.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(localStorageService, restService, commonService) {
        _classCallCheck(this, CardComponent);

        this.localStorageService = localStorageService;
        this.restService = restService;
        this.commonService = commonService;
        this.buttonDisabled = false;
        this.addToCartString = "Add to cart";
        this.updateCartString = "Update cart";
        this.buttonName = this.addToCartString;
        this.totalCost = 0;
        this.totalCostFromChild = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commonService.showSpinner();
          setTimeout(function () {
            _this.myNgAfterViewInit();

            _this.commonService.hideSpinner();
          }, 2000);
        }
      }, {
        key: "myNgAfterViewInit",
        value: function myNgAfterViewInit() {
          var _this2 = this;

          this.commonService.showSpinner();
          var cartData;
          this.restService.get("http://localhost:8080/cart/" + this.localStorageService.getUserName()).subscribe(function (data) {
            cartData = data;
            console.log(cartData);

            _this2.parentData.forEach(function (parent) {
              var cart = [];
              cart = cartData.filter(function (cart) {
                return cart.name == parent.name;
              });

              if (cart.length > 0) {
                console.log("already exists", cart);
                parent.quantity = cart[0].quantity;
                parent.buttonStatus = true;
                parent.buttonText = _this2.updateCartString;
              } else {
                parent.quantity = 0;
                parent.buttonStatus = false;
                parent.buttonText = _this2.addToCartString;
              }
            });

            _this2.cartData = data;
          }, function (error) {
            console.error(error);

            _this2.commonService.hideSpinner();
          });
          this.commonService.hideSpinner();
        }
      }, {
        key: "updateCartDataInLocalVariable",
        value: function updateCartDataInLocalVariable() {
          var _this3 = this;

          this.restService.get("http://localhost:8080/cart/" + this.localStorageService.getUserName()).subscribe(function (data) {
            console.log(data);

            if (_this3.parentData[0].totalCost) {
              _this3.parentData = data;
              _this3.totalCost = 0;
              data.forEach(function (element) {
                _this3.totalCost += element.totalCost;
              });

              _this3.updateTotalCost();
            }

            _this3.cartData = data;
          }, function (error) {
            console.error("something wrong");
          });
        }
      }, {
        key: "removeItemFromCart",
        value: function removeItemFromCart(data) {
          var _this4 = this;

          //delete from db.
          console.log(data);
          var url = "http://localhost:8080/cart/";
          var uri = data.name;
          this.restService["delete"](url + uri).subscribe(function (data) {
            console.log("successfully deleted ", data);

            _this4.updateCartDataInLocalVariable();
          }, function (error) {
            console.error("something fishy, not deleted!! ", error);
          }); //change quantity to 0.

          var counter = this.counterComponentList.filter(function (item) {
            return item.id == data.id;
          });

          if (counter.length > 0) {
            counter[0].count = 0;
          } //enable button.
          //change text to add to cart.


          if (!data.customerName) {
            this.enableButton(data);
            document.getElementById("btn-" + data.name).innerHTML = this.addToCartString;
          }
        }
      }, {
        key: "addOrUpdateCart",
        value: function addOrUpdateCart(data) {
          var _this5 = this;

          //TODO : update store functionality to keep track of current situation.
          console.log({
            data: data
          });
          console.log("add to cart called, need to write rest call to save the data");
          var quantity = this.getQuantity(data);
          data.quantity = quantity;

          if (quantity == 0) {
            alert("Select a quantity, cant deliver empty basket!!");
            console.log("quantity not correct");
          } else {
            var cart = new _cart__WEBPACK_IMPORTED_MODULE_5__["Cart"]();

            if (data.customerName) {
              cart = data;
            } else {
              cart.quantity = quantity;
              cart.customerName = this.localStorageService.getUserName();
              cart.name = data.name;
              cart.costOfEachItem = data.price;
            }

            this.restService.put("http://localhost:8080/cart", cart).subscribe(function (data) {
              console.log(data);

              _this5.updateCartDataInLocalVariable();

              _this5.updateIndividualCost(data);
            }, function (error) {
              console.error(error);
            });

            if (!data.customerName) {
              this.disableButton(data);
              data.buttonStatus = this.getButtonStatus(data);
              data.buttonText = this.getButtonText(data);
            }
          }
        }
      }, {
        key: "updateCost",
        value: function updateCost(data) {
          if (this.parentData[0].totalCost) {
            this.updateIndividualCost(data);
            this.updateTotalCost();
          }
        }
      }, {
        key: "updateTotalCost",
        value: function updateTotalCost() {
          this.totalCostFromChild.emit(this.totalCost);
        }
      }, {
        key: "updateIndividualCost",
        value: function updateIndividualCost(data) {
          document.getElementById('totalCostLabel-' + data.name).innerHTML = data.totalCost;
        }
      }, {
        key: "toggleButtonName",
        value: function toggleButtonName(data) {
          document.getElementById("btn-" + data.name).innerHTML = document.getElementById("btn-" + data.name).innerHTML == this.addToCartString ? this.updateCartString : this.addToCartString;
        }
      }, {
        key: "disableButton",
        value: function disableButton(data) {
          document.getElementById("btn-" + data.name).disabled = true;
        }
      }, {
        key: "enableButton",
        value: function enableButton(data) {
          document.getElementById("btn-" + data.name).disabled = false;
        }
      }, {
        key: "getButtonStatus",
        value: function getButtonStatus(data) {
          return document.getElementById("btn-" + data.name).disabled;
        }
      }, {
        key: "getButtonText",
        value: function getButtonText(data) {
          return document.getElementById("btn-" + data.name).innerHTML;
        }
      }, {
        key: "getQuantity",
        value: function getQuantity(data) {
          console.log(this.counterComponent.count);
          console.log(this.counterComponentList.toArray());
          var counter = this.counterComponentList.filter(function (item) {
            return item.id == data.id;
          });

          if (counter.length > 0) {
            return counter[0].count;
          }

          return 0;
        }
      }, {
        key: "itemExistsInCart",
        value: function itemExistsInCart(data) {
          var alreadyExists = false;

          for (var index = 0; index < this.cartData.length; index++) {
            var element = this.cartData[index];

            if (element.name == data.name) {
              alreadyExists = true;
              break;
            }
          }

          return alreadyExists;
        }
      }, {
        key: "receiveMessage",
        value: function receiveMessage(event, data) {
          console.log(event);
          console.log({
            data: data
          });
          console.log(JSON.stringify(this.cartData));

          if (this.parentData[0].customerName) {
            //card is used in cart, so updating te quantity in the DB.
            this.addOrUpdateCart(data);
          } else if (this.itemExistsInCart(data)) {
            //card is not used in cart and it is already in the cart, so just changing the values.
            if (event == data.quantity) {
              //quantity is same as cart, so defaulting the values.
              this.disableButton(data);
              document.getElementById("btn-" + data.name).innerHTML = this.updateCartString;
            } else {
              //card quantity is not same as cart, so changing the button properties.
              if (document.getElementById("btn-" + data.name).innerHTML == this.addToCartString) {
                this.toggleButtonName(data);
                this.enableButton(data);
              }

              if (document.getElementById("btn-" + data.name).innerHTML == this.updateCartString) {
                this.enableButton(data);
              }
            }
          }
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ctorParameters = function () {
      return [{
        type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentData')], CardComponent.prototype, "parentData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardComponent.prototype, "totalCostFromChild", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_counter_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"], {
      "static": false
    })], CardComponent.prototype, "counterComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_counter_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"])], CardComponent.prototype, "counterComponentList", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.css */
      "./src/app/card/card.component.css"))["default"]]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/cart.ts":
  /*!*************************!*\
    !*** ./src/app/cart.ts ***!
    \*************************/

  /*! exports provided: Cart */

  /***/
  function srcAppCartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Cart = function Cart() {
      _classCallCheck(this, Cart);
    };
    /***/

  },

  /***/
  "./src/app/cart/cart.component.css":
  /*!*****************************************!*\
    !*** ./src/app/cart/cart.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../local-storage.service */
    "./src/app/local-storage.service.ts");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(restService, localStorageService) {
        _classCallCheck(this, CartComponent);

        this.restService = restService;
        this.localStorageService = localStorageService;
        this.totalCartValue = 0;
        this.numberOfItemsInCart = 0;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.allData = [];
          this.restService.get("http://localhost:8080/cart/" + this.localStorageService.getUserName()).subscribe(function (data) {
            console.log(data);
            _this6.allData = data;
            _this6.numberOfItemsInCart = data.length;
            data.forEach(function (element) {
              _this6.totalCartValue += element.totalCost;
            });
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "getDataFromChild",
        value: function getDataFromChild(data) {
          this.totalCartValue = data;
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/common.service.ts":
  /*!***********************************!*\
    !*** ./src/app/common.service.ts ***!
    \***********************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(spinner) {
        _classCallCheck(this, CommonService);

        this.spinner = spinner;
      }

      _createClass(CommonService, [{
        key: "showSpinner",
        value: function showSpinner() {
          this.spinner.show();
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner() {
          this.spinner.hide();
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/counter/counter.component.css":
  /*!***********************************************!*\
    !*** ./src/app/counter/counter.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCounterCounterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/counter/counter.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/counter/counter.component.ts ***!
    \**********************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);

        this.id = 0;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // console.log("count", this.count);
          // console.log("parent data quantity", this.parentData.quantity);
          if (this.count == undefined) {
            this.id = this.parentData.id; // console.log(this.parentData);

            this.count = this.parentData.quantity;
          }
          /* if(this.count != this.parentData.quantity) {
          } else {
            this.id = this.parentData.id;
            // console.log(this.parentData);
            this.count = this.parentData.quantity;
          } */

        }
      }, {
        key: "increment",
        value: function increment(data) {
          console.log({
            data: data
          });
          this.count += 0.25;
          console.log('increment called');
          this.messageEvent.emit(this.count);
        }
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.count > 0.26) {
            this.count -= 0.25;
            this.messageEvent.emit(this.count);
          }
        }
      }, {
        key: "keyPressed",
        value: function keyPressed(event) {
          var val = event.charCode == 8 || event.charCode == 0 ? null : event.charCode >= 48 && event.charCode <= 57;
          if (val) this.messageEvent.emit(this.count);
          return val;
        }
      }]);

      return CounterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentData')], CounterComponent.prototype, "parentData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CounterComponent.prototype, "messageEvent", void 0);
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-counter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./counter.component.css */
      "./src/app/counter/counter.component.css"))["default"]]
    })], CounterComponent);
    /***/
  },

  /***/
  "./src/app/custom-validator.ts":
  /*!*************************************!*\
    !*** ./src/app/custom-validator.ts ***!
    \*************************************/

  /*! exports provided: CustomValidator */

  /***/
  function srcAppCustomValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidator", function () {
      return CustomValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CustomValidator = /*#__PURE__*/function () {
      function CustomValidator() {
        _classCallCheck(this, CustomValidator);
      }

      _createClass(CustomValidator, null, [{
        key: "patternValidator",
        value: function patternValidator(regex, error) {
          return function (control) {
            if (!control.value) {
              // if control is empty return no error
              return null;
            } // test the value of the control against the regexp supplied


            var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

            return valid ? null : error;
          };
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(control) {
          var password = control.get('password').value; // get password from our password form control

          var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
          // compare is the password math

          if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({
              NoPassswordMatch: true
            });
          }
        }
      }]);

      return CustomValidator;
    }();
    /***/

  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/local-storage.service.ts":
  /*!******************************************!*\
    !*** ./src/app/local-storage.service.ts ***!
    \******************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocalStorageService = /*#__PURE__*/function () {
      //TODO: get login username and store in local storage.
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          return localStorage.getItem("isUserLoggedIn");
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          return localStorage.getItem("userName") || "DEFAULT";
        }
      }, {
        key: "addToLocalStorage",
        value: function addToLocalStorage(vegetable) {
          var cartItems = this.getFromLocalStorage() || [];

          if (!this.vegetableAlreadyExists(vegetable)) {
            cartItems.push(vegetable);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
          }
        }
      }, {
        key: "getFromLocalStorage",
        value: function getFromLocalStorage() {
          return JSON.parse(localStorage.getItem("cartItems")) || [];
        }
      }, {
        key: "printCartItems",
        value: function printCartItems() {
          if (this.getFromLocalStorage()) this.getFromLocalStorage().forEach(function (element) {
            console.log(element.name);
          });
        }
      }, {
        key: "vegetableAlreadyExists",
        value: function vegetableAlreadyExists(data) {
          var alreadyExists = false;
          var cartItems = this.getFromLocalStorage();

          for (var index = 0; index < cartItems.length; index++) {
            var element = cartItems[index];

            if (element.name == data.name) {
              alreadyExists = true;
              break;
            }
          }
          /* this.getFromLocalStorage().forEach(element => {
            if (element.name == data.name) {
              alreadyExists = true;
              break;
            }
          }); */


          return alreadyExists;
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalStorageService);
    /***/
  },

  /***/
  "./src/app/login-signup-test/login-signup-test.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/login-signup-test/login-signup-test.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginSignupTestLoginSignupTestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*, *:before, *:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  background: #ededed;\n}\n\ninput, button {\n  border: none;\n  outline: none;\n  background: none;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\n\n/*   .tip {\n    font-size: 20px;\n    margin: 40px auto 50px;\n    text-align: center;\n  } */\n\n.cont {\n  overflow: hidden;\n  position: relative;\n  width: 900px;\n  height: 550px;\n  margin: 0 auto 100px;\n  background: #fff;\n}\n\n.form {\n  position: relative;\n  width: 640px;\n  height: 100%;\n  transition: transform 1.2s ease-in-out;\n  padding: 50px 30px 0;\n}\n\n.sub-cont {\n  overflow: hidden;\n  position: absolute;\n  left: 640px;\n  top: 0;\n  width: 900px;\n  height: 100%;\n  padding-left: 260px;\n  background: #fff;\n  transition: transform 1.2s ease-in-out;\n}\n\n.cont.s--signup .sub-cont {\n  transform: translate3d(-640px, 0, 0);\n}\n\nbutton {\n  display: block;\n  margin: 0 auto;\n  width: 260px;\n  height: 36px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.img {\n  overflow: hidden;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 260px;\n  height: 100%;\n  padding-top: 360px;\n}\n\n.img:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 900px;\n  height: 100%;\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\n  background-size: cover;\n  transition: transform 1.2s ease-in-out;\n}\n\n.img:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.cont.s--signup .img:before {\n  transform: translate3d(640px, 0, 0);\n}\n\n.img__text {\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 50px;\n  width: 100%;\n  padding: 0 20px;\n  text-align: center;\n  color: #fff;\n  transition: transform 1.2s ease-in-out;\n}\n\n.img__text h2 {\n  margin-bottom: 10px;\n  font-weight: normal;\n}\n\n.img__text p {\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.cont.s--signup .img__text.m--up {\n  transform: translateX(520px);\n}\n\n.img__text.m--in {\n  transform: translateX(-520px);\n}\n\n.cont.s--signup .img__text.m--in {\n  transform: translateX(0);\n}\n\n.img__btn {\n  overflow: hidden;\n  z-index: 2;\n  position: relative;\n  width: 100px;\n  height: 36px;\n  margin: 0 auto;\n  background: transparent;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.img__btn:after {\n  content: \"\";\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 2px solid #fff;\n  border-radius: 30px;\n}\n\n.img__btn span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: transform 1.2s;\n}\n\n.img__btn span.m--in {\n  transform: translateY(-72px);\n}\n\n.cont.s--signup .img__btn span.m--in {\n  transform: translateY(0);\n}\n\n.cont.s--signup .img__btn span.m--up {\n  transform: translateY(72px);\n}\n\nh2 {\n  width: 100%;\n  font-size: 26px;\n  text-align: center;\n}\n\nlabel {\n  display: block;\n  width: 260px;\n  margin: 25px auto 0;\n  text-align: center;\n}\n\nlabel span {\n  font-size: 12px;\n  color: #cfcfcf;\n  text-transform: uppercase;\n}\n\ninput {\n  display: block;\n  width: 100%;\n  margin-top: 5px;\n  padding-bottom: 5px;\n  font-size: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  text-align: center;\n}\n\n.forgot-pass {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 12px;\n  color: #cfcfcf;\n}\n\n.submit {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  background: #d4af7a;\n  text-transform: uppercase;\n}\n\n.fb-btn {\n  border: 2px solid #d3dae9;\n  color: #8fa1c7;\n}\n\n.fb-btn span {\n  font-weight: bold;\n  color: #455a81;\n}\n\n.sign-in {\n  transition-timing-function: ease-out;\n}\n\n.cont.s--signup .sign-in {\n  transition-timing-function: ease-in-out;\n  transition-duration: 1.2s;\n  transform: translate3d(640px, 0, 0);\n}\n\n.sign-up {\n  transform: translate3d(-900px, 0, 0);\n}\n\n.cont.s--signup .sign-up {\n  transform: translate3d(0, 0, 0);\n}\n\n.icon-link {\n  position: absolute;\n  left: 5px;\n  bottom: 5px;\n  width: 32px;\n}\n\n.icon-link img {\n  width: 100%;\n  vertical-align: top;\n}\n\n.icon-link--twitter {\n  left: auto;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tc2lnbnVwLXRlc3QvRDpcXFdvcmtcXGNvbXBsZXRlIHdlYnNpdGVcXHNob3BwaW5nYXBwXFxzcmNcXG1haW5cXHJlc291cmNlc1xcZnJvbnRlbmRcXHNob3BwaW5nLXdlYnNpdGUvc3JjXFxhcHBcXGxvZ2luLXNpZ251cC10ZXN0XFxsb2dpbi1zaWdudXAtdGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4tc2lnbnVwLXRlc3QvbG9naW4tc2lnbnVwLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxzREFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUNDSjs7QURrQkE7Ozs7S0FBQTs7QUFNRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQXpCTTtFQTBCTixhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxrQkFBQTtFQUNBLFlBL0JNO0VBZ0NOLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0FDaEJKOztBRG1CRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQXhDTTtFQXlDTixNQUFBO0VBQ0EsWUE1Q007RUE2Q04sWUFBQTtFQUNBLG1CQTdDSztFQThDTCxnQkFBQTtFQUNBLHNDQUFBO0FDaEJKOztBRHJCSTtFQXdDRSxvQ0FBQTtBQ2hCTjs7QURvQkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBckRPO0VBc0RQLFlBckRLO0VBc0RMLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDakJKOztBRG9CRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQXZFSztFQXdFTCxZQUFBO0VBQ0Esa0JBQUE7QUNqQko7O0FEbUJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQWpGSTtFQWtGSixZQUFBO0VBQ0EsMkZBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDakJOOztBRG9CSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ2xCTjs7QURzQk07RUFDRSxtQ0FBQTtBQ3BCUjs7QUR3Qkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUN0Qk47O0FEd0JNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ3RCUjs7QUR5Qk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUN2QlI7O0FEeEZJO0VBcUhNLDRCQUFBO0FDMUJWOztBRDhCTTtFQUNFLDZCQUFBO0FDNUJSOztBRDlGSTtFQTZITSx3QkFBQTtBQzVCVjs7QURpQ0k7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQTVJRztFQTZJSCxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQy9CTjs7QURpQ007RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUMvQlI7O0FEa0NNO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ2hDUjs7QURrQ1E7RUFDRSw0QkFBQTtBQ2hDVjs7QUR2SUk7RUEwS1Esd0JBQUE7QUNoQ1o7O0FEMUlJO0VBZ0xRLDJCQUFBO0FDbkNaOztBRDBDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN2Q0o7O0FEMENFO0VBQ0UsY0FBQTtFQUNBLFlBck1PO0VBc01QLG1CQUFBO0VBQ0Esa0JBQUE7QUN2Q0o7O0FEeUNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3ZDTjs7QUQyQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDeENKOztBRDJDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3hDSjs7QUQyQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ3hDSjs7QUQyQ0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUN4Q0o7O0FEMENJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDeENOOztBRDRDRTtFQUNFLG9DQUFBO0FDekNKOztBRHBNSTtFQWdQRSx1Q0FBQTtFQUNBLHlCQXpQTztFQTBQUCxtQ0FBQTtBQ3pDTjs7QUQ2Q0U7RUFDRSxvQ0FBQTtBQzFDSjs7QUQ3TUk7RUEwUEUsK0JBQUE7QUMxQ047O0FEOENFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUMzQ0o7O0FENkNJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDM0NOOztBRDhDSTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDNUNOIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tc2lnbnVwLXRlc3QvbG9naW4tc2lnbnVwLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCwgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAkY29udFc6IDkwMHB4O1xyXG4gICRpbWdXOiAyNjBweDtcclxuICAkZm9ybVc6ICRjb250VyAtICRpbWdXO1xyXG4gICRzd2l0Y2hBVDogMS4ycztcclxuICBcclxuICAkaW5wdXRXOiAyNjBweDtcclxuICAkYnRuSDogMzZweDtcclxuICBcclxuICAkZGlmZlJhdGlvOiAoJGNvbnRXIC0gJGltZ1cpIC8gJGNvbnRXO1xyXG4gIFxyXG4gIEBtaXhpbiBzaWduVXBBY3RpdmUge1xyXG4gICAgLmNvbnQucy0tc2lnbnVwICYge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi8qICAgLnRpcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0byA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0gKi9cclxuICBcclxuICAuY29udCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6ICRjb250VztcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkZm9ybVc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHN3aXRjaEFUIGVhc2UtaW4tb3V0O1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWItY29udCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogJGZvcm1XO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6ICRjb250VztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogJGltZ1c7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRzd2l0Y2hBVCBlYXNlLWluLW91dDtcclxuICBcclxuICAgIEBpbmNsdWRlIHNpZ25VcEFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGZvcm1XICogLTEsMCwwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogJGlucHV0VztcclxuICAgIGhlaWdodDogJGJ0bkg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWcge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6ICRpbWdXO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDM2MHB4O1xyXG4gIFxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogJGNvbnRXO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQyOTk2L3NlY3Rpb25zLTMuanBnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkc3dpdGNoQVQgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAaW5jbHVkZSBzaWduVXBBY3RpdmUge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkZm9ybVcsMCwwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHN3aXRjaEFUIGVhc2UtaW4tb3V0O1xyXG4gIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYubS0tdXAge1xyXG4gIFxyXG4gICAgICAgIEBpbmNsdWRlIHNpZ25VcEFjdGl2ZSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJGltZ1cqMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYubS0taW4ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkaW1nVyAqIC0yKTtcclxuICBcclxuICAgICAgICBAaW5jbHVkZSBzaWduVXBBY3RpdmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fYnRuIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogJGJ0bkg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHN3aXRjaEFUO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYubS0taW4ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRidG5IKi0yKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgQGluY2x1ZGUgc2lnblVwQWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLm0tLXVwIHtcclxuICAgICAgICAgIEBpbmNsdWRlIHNpZ25VcEFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkYnRuSCoyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6ICRpbnB1dFc7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0byAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICNjZmNmY2Y7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC40KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdvdC1wYXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2NmY2ZjZjtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkNGFmN2E7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuZmItYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkM2RhZTk7XHJcbiAgICBjb2xvcjogZGFya2VuKCNkM2RhZTksIDIwJSk7XHJcbiAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBkYXJrZW4oIzc2OGNiNiwgMjAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNpZ24taW4ge1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgQGluY2x1ZGUgc2lnblVwQWN0aXZlIHtcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkc3dpdGNoQVQ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGZvcm1XLDAsMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWduLXVwIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGNvbnRXICogLTEsMCwwKTtcclxuICBcclxuICAgIEBpbmNsdWRlIHNpZ25VcEFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaWNvbi1saW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICBcclxuICAgICYtLXR3aXR0ZXIge1xyXG4gICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH0iLCIqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuXG5pbnB1dCwgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLyogICAudGlwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0gKi9cbi5jb250IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDY0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiA1MHB4IDMwcHggMDtcbn1cblxuLnN1Yi1jb250IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2NDBweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG59XG4uY29udC5zLS1zaWdudXAgLnN1Yi1jb250IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNjQwcHgsIDAsIDApO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzNjBweDtcbn1cbi5pbWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQyOTk2L3NlY3Rpb25zLTMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcbn1cbi5pbWc6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmNvbnQucy0tc2lnbnVwIC5pbWc6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2NDBweCwgMCwgMCk7XG59XG4uaW1nX190ZXh0IHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xufVxuLmltZ19fdGV4dCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uaW1nX190ZXh0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uY29udC5zLS1zaWdudXAgLmltZ19fdGV4dC5tLS11cCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MjBweCk7XG59XG4uaW1nX190ZXh0Lm0tLWluIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MjBweCk7XG59XG4uY29udC5zLS1zaWdudXAgLmltZ19fdGV4dC5tLS1pbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5pbWdfX2J0biB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltZ19fYnRuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4uaW1nX19idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnM7XG59XG4uaW1nX19idG4gc3Bhbi5tLS1pbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzJweCk7XG59XG4uY29udC5zLS1zaWdudXAgLmltZ19fYnRuIHNwYW4ubS0taW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4uY29udC5zLS1zaWdudXAgLmltZ19fYnRuIHNwYW4ubS0tdXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzJweCk7XG59XG5cbmgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjYwcHg7XG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmxhYmVsIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjY2ZjZmNmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcmdvdC1wYXNzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjY2ZjZmNmO1xufVxuXG4uc3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2Q0YWY3YTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZiLWJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2RhZTk7XG4gIGNvbG9yOiAjOGZhMWM3O1xufVxuLmZiLWJ0biBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDU1YTgxO1xufVxuXG4uc2lnbi1pbiB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbi5jb250LnMtLXNpZ251cCAuc2lnbi1pbiB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2NDBweCwgMCwgMCk7XG59XG5cbi5zaWduLXVwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOTAwcHgsIDAsIDApO1xufVxuLmNvbnQucy0tc2lnbnVwIC5zaWduLXVwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmljb24tbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDMycHg7XG59XG4uaWNvbi1saW5rIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmljb24tbGluay0tdHdpdHRlciB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login-signup-test/login-signup-test.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/login-signup-test/login-signup-test.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginSignupTestComponent */

  /***/
  function srcAppLoginSignupTestLoginSignupTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSignupTestComponent", function () {
      return LoginSignupTestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginSignupTestComponent = /*#__PURE__*/function () {
      function LoginSignupTestComponent() {
        _classCallCheck(this, LoginSignupTestComponent);
      }

      _createClass(LoginSignupTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSignUp",
        value: function onSignUp() {
          alert("signUp");
        }
      }, {
        key: "onSignIn",
        value: function onSignIn() {
          alert("signIn");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.querySelector('.img__btn').addEventListener('click', function () {
            document.querySelector('.cont').classList.toggle('s--signup');
          });
        }
      }]);

      return LoginSignupTestComponent;
    }();

    LoginSignupTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-signup-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-signup-test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-signup-test/login-signup-test.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-signup-test.component.scss */
      "./src/app/login-signup-test/login-signup-test.component.scss"))["default"]]
    })], LoginSignupTestComponent);
    /*
    Copyright (c) 2020 by Nikolay Talanov (https://codepen.io/suez/pen/RpNXOR)
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    */

    /***/
  },

  /***/
  "./src/app/manage-vegetables/manage-vegetables.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/manage-vegetables/manage-vegetables.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManageVegetablesManageVegetablesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The switch - the box around the slider */\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\ninput:checked + .slider {\r\n    background-color: rgb(0, 0, 0);\r\n  }\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px rgb(0, 0, 0);\r\n  }\r\ninput:checked + .slider:before {\r\n    transform: translateX(26px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXZlZ2V0YWJsZXMvbWFuYWdlLXZlZ2V0YWJsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQSwrQkFBK0I7QUFDL0I7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDtBQUVBLGVBQWU7QUFDZjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUV0QixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFFQTtJQUdFLDJCQUEyQjtFQUM3QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXZlZ2V0YWJsZXMvbWFuYWdlLXZlZ2V0YWJsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXHJcbiAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzbGlkZXIgKi9cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYigwLCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/manage-vegetables/manage-vegetables.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/manage-vegetables/manage-vegetables.component.ts ***!
    \******************************************************************/

  /*! exports provided: ManageVegetablesComponent */

  /***/
  function srcAppManageVegetablesManageVegetablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageVegetablesComponent", function () {
      return ManageVegetablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/common.service.ts");

    var ManageVegetablesComponent = /*#__PURE__*/function () {
      function ManageVegetablesComponent(formBuilder, httpClient, restService, commonService) {
        _classCallCheck(this, ManageVegetablesComponent);

        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.restService = restService;
        this.commonService = commonService;
        this.showTable = false;
        this.updateDisabled = true;
      }

      _createClass(ManageVegetablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vegetablesForm = this.formBuilder.group({
            vegetableName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(1000)]],
            vegetableDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "isValid",
        value: function isValid(formControlName) {
          return this.vegetablesForm.get(formControlName).invalid && (this.vegetablesForm.get(formControlName).touched || this.vegetablesForm.get(formControlName).dirty);
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var _this7 = this;

          console.log(!this.vegetables); // this.showSpinner = true;

          this.commonService.showSpinner();
          this.restService.get("http://localhost:8080/vegetables/getAll").subscribe(function (data) {
            console.log(data);

            if (data) {
              _this7.vegetables = data;
              _this7.showTable = true;

              _this7.commonService.hideSpinner();
            }
          }, function (error) {
            alert("error : " + error.statusText);
            console.error(error);
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this8 = this;

          //TODO : add no details found when no data is returned.
          //TODO : toggle dark mode for entire application if poosible or atleast for table.
          //TODO : keep autocomplete text view for name and implement caching at backend for that rest call.
          this.restService.post("http://localhost:8080/vegetables/create", this.vegetablesForm.value).subscribe(function (data) {
            console.log(data);

            _this8.onClear();
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this9 = this;

          this.vegetablesForm.controls['vegetableName'].enable();
          this.restService.put("http://localhost:8080/vegetables/update", this.vegetablesForm.value).subscribe(function (data) {
            console.log(data);

            _this9.onClear();
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "onTableEditClicked",
        value: function onTableEditClicked(data) {
          this.updateDisabled = false; // this.vegetablesForm.controls['vegetableName'].enabled;

          this.vegetablesForm.controls['vegetableName'].setValue(data.name);
          this.vegetablesForm.controls['vegetableName'].disable();
          this.vegetablesForm.controls['vegetableDescription'].setValue(data.vegetableDescription);
          this.vegetablesForm.controls['price'].setValue(data.price);
        }
      }, {
        key: "onTableDeleteClicked",
        value: function onTableDeleteClicked(data) {
          var _this10 = this;

          this.vegetablesForm.controls['vegetableName'].enable();
          this.restService.post("http://localhost:8080/vegetables/delete", data).subscribe(function (data) {
            console.log(data);

            _this10.onClear();
          }, function (error) {
            console.error(error);
          });
          this.vegetablesForm.controls['vegetableName'].disable();
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.vegetables = {};
          this.onSearch();
          this.vegetablesForm.controls['vegetableName'].enable();
          this.vegetablesForm.reset();
          this.updateDisabled = true;
        }
      }, {
        key: "onGetCartDetails",
        value: function onGetCartDetails() {
          this.restService.get("http://localhost:8080/cart/" + localStorage.getItem('userName')).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            console.error(error);
          });
        }
      }]);

      return ManageVegetablesComponent;
    }();

    ManageVegetablesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    ManageVegetablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-vegetables',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-vegetables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-vegetables/manage-vegetables.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-vegetables.component.css */
      "./src/app/manage-vegetables/manage-vegetables.component.css"))["default"]]
    })], ManageVegetablesComponent);
    /***/
  },

  /***/
  "./src/app/rest.service.ts":
  /*!*********************************!*\
    !*** ./src/app/rest.service.ts ***!
    \*********************************/

  /*! exports provided: RestService */

  /***/
  function srcAppRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var RestService = /*#__PURE__*/function () {
      function RestService(httpClient) {
        _classCallCheck(this, RestService);

        this.httpClient = httpClient;
      }

      _createClass(RestService, [{
        key: "get",
        value: function get(url) {
          return this.httpClient.get(url);
        }
      }, {
        key: "post",
        value: function post(url, body) {
          return this.httpClient.post(url, body);
        }
      }, {
        key: "put",
        value: function put(url, body) {
          return this.httpClient.put(url, body);
        }
      }, {
        key: "delete",
        value: function _delete(url) {
          console.log(url);
          return this.httpClient["delete"](url);
        }
      }]);

      return RestService;
    }();

    RestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RestService);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sign-in/sign-in.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/*custom font*/\n/*basic reset*/\n* {margin: 0; padding: 0;}\nhtml {\r\n\theight: 100%;\r\n\t/*Image only BG fallback*/\r\n\t\r\n\t/*background = gradient + image pattern combo*/\r\n\tbackground: \r\n\t\tlinear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));\r\n}\nbody {\r\n\tfont-family: montserrat, arial, verdana;\r\n}\n/*form styles*/\n#signInForm {\r\n\twidth: 400px;\r\n\tmargin: 50px auto;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\n#signInForm .main-div {\r\n\tbackground: white;\r\n\tborder: 0 none;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n\tpadding: 20px 30px;\r\n\tbox-sizing: border-box;\r\n\twidth: 80%;\r\n\tmargin: 0 10%;\r\n\t\r\n\t/*stacking fieldsets above each other*/\r\n\tposition: relative;\r\n}\n/*Hide all except first fieldset*/\n/* #signInForm fieldset:not(:first-of-type) {\r\n\tdisplay: none;\r\n} */\n/*inputs*/\n#signInForm input, #signInForm textarea {\r\n\tpadding: 15px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tfont-family: montserrat;\r\n\tcolor: #2C3E50;\r\n\tfont-size: 13px;\r\n}\n/*buttons*/\n#signInForm .action-button {\r\n\twidth: 100px;\r\n\tbackground: #27AE60;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n\tborder: 0 none;\r\n\tborder-radius: 1px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 5px;\r\n\tmargin: 10px 5px;\r\n}\n#signInForm .action-button:hover, #signInForm .action-button:focus {\r\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;\r\n}\n#signInForm .action-button:disabled {\r\n\t\tbackground: #dddddd;\r\n\t\tcursor: auto;\r\n}\n/*headings*/\n#signInForm .fs-title {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #2C3E50;\r\n\tmargin-bottom: 10px;\r\n}\n#signInForm .fs-subtitle {\r\n\tfont-weight: normal;\r\n\tfont-size: 13px;\r\n\tcolor: #666;\r\n\tmargin-bottom: 20px;\r\n}\n#signInForm .anchor:hover {\r\n\tcursor: pointer; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtEQUErRDtBQUQvRCxjQUFjO0FBR2QsY0FBYztBQUNkLEdBQUcsU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUV6QjtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7O0NBRXpCLDhDQUE4QztDQUM5QztrRUFDaUU7QUFDbEU7QUFFQTtDQUNDLHVDQUF1QztBQUN4QztBQUNBLGNBQWM7QUFDZDtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsMkNBQTJDO0NBQzNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWLGFBQWE7O0NBRWIsc0NBQXNDO0NBQ3RDLGtCQUFrQjtBQUNuQjtBQUNBLGlDQUFpQztBQUNqQzs7R0FFRztBQUNILFNBQVM7QUFDVDtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2QsZUFBZTtBQUNoQjtBQUNBLFVBQVU7QUFDVjtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyw4Q0FBOEM7QUFDL0M7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQSxXQUFXO0FBQ1g7Q0FDQyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypjdXN0b20gZm9udCovXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0KTtcclxuXHJcbi8qYmFzaWMgcmVzZXQqL1xyXG4qIHttYXJnaW46IDA7IHBhZGRpbmc6IDA7fVxyXG5cclxuaHRtbCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdC8qSW1hZ2Ugb25seSBCRyBmYWxsYmFjayovXHJcblx0XHJcblx0LypiYWNrZ3JvdW5kID0gZ3JhZGllbnQgKyBpbWFnZSBwYXR0ZXJuIGNvbWJvKi9cclxuXHRiYWNrZ3JvdW5kOiBcclxuXHRcdGxpbmVhci1ncmFkaWVudChyZ2JhKDE5NiwgMTAyLCAwLCAwLjYpLCByZ2JhKDE1NSwgODksIDE4MiwgMC42KSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBhcmlhbCwgdmVyZGFuYTtcclxufVxyXG4vKmZvcm0gc3R5bGVzKi9cclxuI3NpZ25JbkZvcm0ge1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDUwcHggYXV0bztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNzaWduSW5Gb3JtIC5tYWluLWRpdiB7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Ym9yZGVyOiAwIG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblx0cGFkZGluZzogMjBweCAzMHB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDAgMTAlO1xyXG5cdFxyXG5cdC8qc3RhY2tpbmcgZmllbGRzZXRzIGFib3ZlIGVhY2ggb3RoZXIqL1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vKkhpZGUgYWxsIGV4Y2VwdCBmaXJzdCBmaWVsZHNldCovXHJcbi8qICNzaWduSW5Gb3JtIGZpZWxkc2V0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyppbnB1dHMqL1xyXG4jc2lnbkluRm9ybSBpbnB1dCwgI3NpZ25JbkZvcm0gdGV4dGFyZWEge1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG5cdGNvbG9yOiAjMkMzRTUwO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4vKmJ1dHRvbnMqL1xyXG4jc2lnbkluRm9ybSAuYWN0aW9uLWJ1dHRvbiB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGJhY2tncm91bmQ6ICMyN0FFNjA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlcjogMCBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDFweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cGFkZGluZzogMTBweCA1cHg7XHJcblx0bWFyZ2luOiAxMHB4IDVweDtcclxufVxyXG4jc2lnbkluRm9ybSAuYWN0aW9uLWJ1dHRvbjpob3ZlciwgI3NpZ25JbkZvcm0gLmFjdGlvbi1idXR0b246Zm9jdXMge1xyXG5cdGJveC1zaGFkb3c6IDAgMCAwIDJweCB3aGl0ZSwgMCAwIDAgM3B4ICMyN0FFNjA7XHJcbn1cclxuXHJcbiNzaWduSW5Gb3JtIC5hY3Rpb24tYnV0dG9uOmRpc2FibGVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcblx0XHRjdXJzb3I6IGF1dG87XHJcbn1cclxuLypoZWFkaW5ncyovXHJcbiNzaWduSW5Gb3JtIC5mcy10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6ICMyQzNFNTA7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4jc2lnbkluRm9ybSAuZnMtc3VidGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOiAjNjY2O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNzaWduSW5Gb3JtIC5hbmNob3I6aG92ZXIge1xyXG5cdGN1cnNvcjogcG9pbnRlcjsgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-in/sign-in.component.ts ***!
    \**********************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(formBuilder, restService, router) {
        _classCallCheck(this, SignInComponent);

        this.formBuilder = formBuilder;
        this.restService = restService;
        this.router = router;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signInForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "isValid",
        value: function isValid(formControlName) {
          return this.signInForm.get(formControlName).invalid && (this.signInForm.get(formControlName).dirty || this.signInForm.get(formControlName).touched);
        }
      }, {
        key: "isFormInValid",
        value: function isFormInValid() {
          return !(this.signInForm.get('userName').dirty || this.signInForm.get('userName').touched) && !(this.signInForm.get('password').dirty || this.signInForm.get('password').touched); // return !this.signInForm.valid;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          console.log(this.signInForm);
          this.restService.get("http://localhost:8080/login/" + this.signInForm.value.userName + "/" + this.signInForm.value.password).subscribe(function (data) {
            console.log(data);

            if (data == true) {
              console.log("login success");
              localStorage.setItem("userName", _this11.signInForm.value.userName);
              localStorage.setItem("isUserLoggedIn", "true");

              _this11.router.navigate(['vegetables']);
            } else {
              alert("invalid userName/Password \n Try to remember harder!!!");
            }
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "onForgetPassword",
        value: function onForgetPassword() {
          alert("to be implemented \n forget password");
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/sign-in/sign-in.component.css"))["default"]]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../custom-validator */
    "./src/app/custom-validator.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(formBuilder, router, restService) {
        _classCallCheck(this, SignUpComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.restService = restService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // check whether the entered password has a number
            _custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].patternValidator(/\d/, {
              hasNumber: true
            }), // check whether the entered password has upper case letter
            _custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }), // check whether the entered password has a lower case letter
            _custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].patternValidator(/[a-z]/, {
              hasSmallCase: true
            }), // check whether the entered password has a special character
            _custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
              hasSpecialCharacters: true
            }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            // city: [''],
            // state: [''],
            // zip: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]]
          }, {
            // check whether our password and confirm password match
            validator: _custom_validator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].passwordMatchValidator
          });
        }
      }, {
        key: "isValid",
        value: function isValid(formControlName) {
          return this.signUpForm.get(formControlName).invalid && (this.signUpForm.get(formControlName).dirty || this.signUpForm.get(formControlName).touched);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          console.log(value);
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/sign-up/sign-up.component.css"))["default"]]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/step-test/step-test.component.css":
  /*!***************************************************!*\
    !*** ./src/app/step-test/step-test.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStepTestStepTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/*custom font*/\n/*basic reset*/\n* {margin: 0; padding: 0;}\nhtml {\r\n\theight: 100%;\r\n\t/*Image only BG fallback*/\r\n\t\r\n\t/*background = gradient + image pattern combo*/\r\n\tbackground: \r\n\t\tlinear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));\r\n}\nbody {\r\n\tfont-family: montserrat, arial, verdana;\r\n}\n/*form styles*/\n#msform {\r\n\twidth: 400px;\r\n\tmargin: 50px auto;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\n#msform fieldset {\r\n\tbackground: white;\r\n\tborder: 0 none;\r\n\tborder-radius: 3px;\r\n\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n\tpadding: 20px 30px;\r\n\tbox-sizing: border-box;\r\n\twidth: 80%;\r\n\tmargin: 0 10%;\r\n\t\r\n\t/*stacking fieldsets above each other*/\r\n\tposition: relative;\r\n}\n/*Hide all except first fieldset*/\n#msform fieldset:not(:first-of-type) {\r\n\tdisplay: none;\r\n}\n/*inputs*/\n#msform input, #msform textarea {\r\n\tpadding: 15px;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tfont-family: montserrat;\r\n\tcolor: #2C3E50;\r\n\tfont-size: 13px;\r\n}\n/*buttons*/\n#msform .action-button {\r\n\twidth: 100px;\r\n\tbackground: #27AE60;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n\tborder: 0 none;\r\n\tborder-radius: 1px;\r\n\tcursor: pointer;\r\n\tpadding: 10px 5px;\r\n\tmargin: 10px 5px;\r\n}\n#msform .action-button:hover, #msform .action-button:focus {\r\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;\r\n}\n#msform .action-button:disabled {\r\n\t\tbackground: #dddddd;\r\n\t\tcursor: auto;\r\n}\n/*headings*/\n.fs-title {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #2C3E50;\r\n\tmargin-bottom: 10px;\r\n}\n.fs-subtitle {\r\n\tfont-weight: normal;\r\n\tfont-size: 13px;\r\n\tcolor: #666;\r\n\tmargin-bottom: 20px;\r\n}\n/*progressbar*/\n#progressbar {\r\n\tmargin-bottom: 30px;\r\n\toverflow: hidden;\r\n\t/*CSS counters to number the steps*/\r\n\tcounter-reset: step;\r\n}\n#progressbar li {\r\n\tlist-style-type: none;\r\n\t/* color: white; */\r\n\ttext-transform: uppercase;\r\n\tfont-size: 9px;\r\n\twidth: 33.33%;\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\n#progressbar li:before {\r\n\tcontent: counter(step);\r\n\tcounter-increment: step;\r\n\twidth: 20px;\r\n\tline-height: 20px;\r\n\tdisplay: block;\r\n\tfont-size: 10px;\r\n\tcolor: #333;\r\n\tbackground: white;\r\n\tborder-radius: 3px;\r\n\tmargin: 0 auto 5px auto;\r\n}\n/*progressbar connectors*/\n#progressbar li:after {\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tleft: -50%;\r\n\ttop: 9px;\r\n\tz-index: -1; /*put it behind the numbers*/\r\n}\n#progressbar li:first-child:after {\r\n\t/*connector not needed before the first step*/\r\n\tcontent: none; \r\n}\n/*marking active/completed steps green*/\n/*The number of the step and the connector before it = green*/\n#progressbar li.active:before,  #progressbar li.active:after{\r\n\tbackground: #27AE60;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcC10ZXN0L3N0ZXAtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrREFBK0Q7QUFEL0QsY0FBYztBQUdkLGNBQWM7QUFDZCxHQUFHLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFFekI7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCOztDQUV6Qiw4Q0FBOEM7Q0FDOUM7a0VBQ2lFO0FBQ2xFO0FBRUE7Q0FDQyx1Q0FBdUM7QUFDeEM7QUFDQSxjQUFjO0FBQ2Q7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLDJDQUEyQztDQUMzQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixhQUFhOztDQUViLHNDQUFzQztDQUN0QyxrQkFBa0I7QUFDbkI7QUFDQSxpQ0FBaUM7QUFDakM7Q0FDQyxhQUFhO0FBQ2Q7QUFDQSxTQUFTO0FBQ1Q7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLGVBQWU7QUFDaEI7QUFDQSxVQUFVO0FBQ1Y7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osY0FBYztDQUNkLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsOENBQThDO0FBQy9DO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0EsV0FBVztBQUNYO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFDQSxjQUFjO0FBQ2Q7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG1DQUFtQztDQUNuQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCO0FBQ0EseUJBQXlCO0FBQ3pCO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFdBQVcsRUFBRSw0QkFBNEI7QUFDMUM7QUFDQTtDQUNDLDZDQUE2QztDQUM3QyxhQUFhO0FBQ2Q7QUFDQSx1Q0FBdUM7QUFDdkMsNkRBQTZEO0FBQzdEO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3N0ZXAtdGVzdC9zdGVwLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qY3VzdG9tIGZvbnQqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCk7XHJcblxyXG4vKmJhc2ljIHJlc2V0Ki9cclxuKiB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cclxuXHJcbmh0bWwge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHQvKkltYWdlIG9ubHkgQkcgZmFsbGJhY2sqL1xyXG5cdFxyXG5cdC8qYmFja2dyb3VuZCA9IGdyYWRpZW50ICsgaW1hZ2UgcGF0dGVybiBjb21ibyovXHJcblx0YmFja2dyb3VuZDogXHJcblx0XHRsaW5lYXItZ3JhZGllbnQocmdiYSgxOTYsIDEwMiwgMCwgMC42KSwgcmdiYSgxNTUsIDg5LCAxODIsIDAuNikpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRmb250LWZhbWlseTogbW9udHNlcnJhdCwgYXJpYWwsIHZlcmRhbmE7XHJcbn1cclxuLypmb3JtIHN0eWxlcyovXHJcbiNtc2Zvcm0ge1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDUwcHggYXV0bztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNtc2Zvcm0gZmllbGRzZXQge1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGJvcmRlcjogMCBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3gtc2hhZG93OiAwIDAgMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cdHBhZGRpbmc6IDIwcHggMzBweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHdpZHRoOiA4MCU7XHJcblx0bWFyZ2luOiAwIDEwJTtcclxuXHRcclxuXHQvKnN0YWNraW5nIGZpZWxkc2V0cyBhYm92ZSBlYWNoIG90aGVyKi9cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLypIaWRlIGFsbCBleGNlcHQgZmlyc3QgZmllbGRzZXQqL1xyXG4jbXNmb3JtIGZpZWxkc2V0Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyppbnB1dHMqL1xyXG4jbXNmb3JtIGlucHV0LCAjbXNmb3JtIHRleHRhcmVhIHtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuXHRjb2xvcjogIzJDM0U1MDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLypidXR0b25zKi9cclxuI21zZm9ybSAuYWN0aW9uLWJ1dHRvbiB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGJhY2tncm91bmQ6ICMyN0FFNjA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlcjogMCBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDFweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cGFkZGluZzogMTBweCA1cHg7XHJcblx0bWFyZ2luOiAxMHB4IDVweDtcclxufVxyXG4jbXNmb3JtIC5hY3Rpb24tYnV0dG9uOmhvdmVyLCAjbXNmb3JtIC5hY3Rpb24tYnV0dG9uOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiAwIDAgMCAycHggd2hpdGUsIDAgMCAwIDNweCAjMjdBRTYwO1xyXG59XHJcblxyXG4jbXNmb3JtIC5hY3Rpb24tYnV0dG9uOmRpc2FibGVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcblx0XHRjdXJzb3I6IGF1dG87XHJcbn1cclxuLypoZWFkaW5ncyovXHJcbi5mcy10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6ICMyQzNFNTA7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZnMtc3VidGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOiAjNjY2O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLypwcm9ncmVzc2JhciovXHJcbiNwcm9ncmVzc2JhciB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC8qQ1NTIGNvdW50ZXJzIHRvIG51bWJlciB0aGUgc3RlcHMqL1xyXG5cdGNvdW50ZXItcmVzZXQ6IHN0ZXA7XHJcbn1cclxuI3Byb2dyZXNzYmFyIGxpIHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0LyogY29sb3I6IHdoaXRlOyAqL1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiA5cHg7XHJcblx0d2lkdGg6IDMzLjMzJTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI3Byb2dyZXNzYmFyIGxpOmJlZm9yZSB7XHJcblx0Y29udGVudDogY291bnRlcihzdGVwKTtcclxuXHRjb3VudGVyLWluY3JlbWVudDogc3RlcDtcclxuXHR3aWR0aDogMjBweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbjogMCBhdXRvIDVweCBhdXRvO1xyXG59XHJcbi8qcHJvZ3Jlc3NiYXIgY29ubmVjdG9ycyovXHJcbiNwcm9ncmVzc2JhciBsaTphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IC01MCU7XHJcblx0dG9wOiA5cHg7XHJcblx0ei1pbmRleDogLTE7IC8qcHV0IGl0IGJlaGluZCB0aGUgbnVtYmVycyovXHJcbn1cclxuI3Byb2dyZXNzYmFyIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuXHQvKmNvbm5lY3RvciBub3QgbmVlZGVkIGJlZm9yZSB0aGUgZmlyc3Qgc3RlcCovXHJcblx0Y29udGVudDogbm9uZTsgXHJcbn1cclxuLyptYXJraW5nIGFjdGl2ZS9jb21wbGV0ZWQgc3RlcHMgZ3JlZW4qL1xyXG4vKlRoZSBudW1iZXIgb2YgdGhlIHN0ZXAgYW5kIHRoZSBjb25uZWN0b3IgYmVmb3JlIGl0ID0gZ3JlZW4qL1xyXG4jcHJvZ3Jlc3NiYXIgbGkuYWN0aXZlOmJlZm9yZSwgICNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YWZ0ZXJ7XHJcblx0YmFja2dyb3VuZDogIzI3QUU2MDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/step-test/step-test.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/step-test/step-test.component.ts ***!
    \**************************************************/

  /*! exports provided: StepTestComponent */

  /***/
  function srcAppStepTestStepTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepTestComponent", function () {
      return StepTestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../custom-validator */
    "./src/app/custom-validator.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");

    var StepTestComponent = /*#__PURE__*/function () {
      function StepTestComponent(formBuilder, router, restService) {
        _classCallCheck(this, StepTestComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.restService = restService;
      }

      _createClass(StepTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // check whether the entered password has a number
            _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/\d/, {
              hasNumber: true
            }), // check whether the entered password has upper case letter
            _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }), // check whether the entered password has a lower case letter
            _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/[a-z]/, {
              hasSmallCase: true
            }), // check whether the entered password has a special character
            _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
              hasSpecialCharacters: true
            }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            // city: [''],
            // state: [''],
            // zip: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]]
          }, {
            // check whether our password and confirm password match
            validator: _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].passwordMatchValidator
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // jQuery time
          var current_fs, next_fs, previous_fs; // fieldsets

          var left, opacity, scale; // fieldset properties which we will animate

          var animating; // flag to prevent quick multi-click glitches

          jQuery(".next").click(function () {
            if (animating) {
              return false;
            }

            animating = true;
            current_fs = jQuery(this).parent();
            next_fs = jQuery(this).parent().next(); // activate next step on progressbar using the index of next_fs

            jQuery("#progressbar li").eq(jQuery("fieldset").index(next_fs)).addClass("active"); // show the next fieldset

            next_fs.show(); // hide the current fieldset with style

            current_fs.animate({
              opacity: 0
            }, {
              step: function step(now, mx) {
                // as the opacity of current_fs reduces to 0 - stored in "now"
                // 1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2; // 2. bring next_fs from the right(50%)

                left = now * 50 + "%"; // 3. increase opacity of next_fs to 1 as it moves in

                opacity = 1 - now;
                current_fs.css({
                  'transform': 'scale(' + scale + ')',
                  'position': 'absolute'
                });
                next_fs.css({
                  'left': left,
                  'opacity': opacity
                });
              },
              duration: 800,
              complete: function complete() {
                current_fs.hide();
                current_fs.css({
                  'position': 'relative'
                });
                next_fs.css({
                  'position': 'relative'
                });
                animating = false;
              },
              // this comes from the custom easing plugin
              easing: 'easeInOutBack'
            });
          });
          jQuery(".previous").click(function () {
            if (animating) {
              return false;
            }

            animating = true;
            current_fs = jQuery(this).parent();
            previous_fs = jQuery(this).parent().prev(); // de-activate current step on progressbar

            jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active"); // show the previous fieldset

            previous_fs.show();
            previous_fs.css({
              'position': 'absolute'
            }); // hide the current fieldset with style

            current_fs.animate({
              opacity: 0
            }, {
              step: function step(now, mx) {
                // as the opacity of current_fs reduces to 0 - stored in "now"
                // 1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2; // 2. take current_fs to the right(50%) - from 0%

                left = (1 - now) * 50 + "%"; // 3. increase opacity of previous_fs to 1 as it moves in

                opacity = 1 - now;
                current_fs.css({
                  'left': left
                });
                previous_fs.css({
                  'transform': 'scale(' + scale + ')',
                  'opacity': opacity
                });
              },
              duration: 800,
              complete: function complete() {
                current_fs.hide();
                previous_fs.css({
                  'position': 'relative'
                });
                animating = false;
              },
              // this comes from the custom easing plugin
              easing: 'easeInOutBack'
            });
          });
          jQuery(".submit").click(function () {
            return false;
          });
        }
      }, {
        key: "isValid",
        value: function isValid(formControlName) {
          return this.signUpForm.get(formControlName).invalid && (this.signUpForm.get(formControlName).dirty || this.signUpForm.get(formControlName).touched);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(value) {
          console.log(value);
          this.restService.post("http://localhost:8080/user/save", this.signUpForm.value).subscribe(function (data) {
            console.log(data);
            alert('hurrey!!! \n proceed to login...'); //TODO : change to login automatically by passing to parent that signup is done so that it can move to sign in.
            // this.router.navigate(['vegetables']);
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "isFormInValid",
        value: function isFormInValid() {
          return !this.signUpForm.valid;
        }
      }]);

      return StepTestComponent;
    }();

    StepTestComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
      }];
    };

    StepTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-step-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./step-test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/step-test/step-test.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./step-test.component.css */
      "./src/app/step-test/step-test.component.css"))["default"]]
    })], StepTestComponent);
    /*
    Copyright (c) 2020 by David (https://codepen.io/bluestarstudios/pen/ZEGamYP)
    Fork of an original work Multi Step Form with Progress Bar using jQuery and CSS3 (https://codepen.io/atakan/pen/gqbIz
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    */

    /***/
  },

  /***/
  "./src/app/test/test.component.css":
  /*!*****************************************!*\
    !*** ./src/app/test/test.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestComponent;
    }();

    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.component.css */
      "./src/app/test/test.component.css"))["default"]]
    })], TestComponent);
    /***/
  },

  /***/
  "./src/app/user-logged-in-guard.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/user-logged-in-guard.service.ts ***!
    \*************************************************/

  /*! exports provided: UserLoggedInGuardService */

  /***/
  function srcAppUserLoggedInGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoggedInGuardService", function () {
      return UserLoggedInGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/app/local-storage.service.ts");

    var UserLoggedInGuardService = /*#__PURE__*/function () {
      function UserLoggedInGuardService(localStorageService, router) {
        _classCallCheck(this, UserLoggedInGuardService);

        this.localStorageService = localStorageService;
        this.router = router;
      }

      _createClass(UserLoggedInGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log("entering");
          console.log(this.localStorageService.isUserLoggedIn());

          if (this.localStorageService.isUserLoggedIn() == "true") {
            console.log("valid user");
            return true;
          } else {
            alert("You don't have permission to view this page");
            this.router.navigate(['testLogin']);
            return false;
          }
        }
      }]);

      return UserLoggedInGuardService;
    }();

    UserLoggedInGuardService.ctorParameters = function () {
      return [{
        type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserLoggedInGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserLoggedInGuardService);
    /***/
  },

  /***/
  "./src/app/vegetables/vegetables.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/vegetables/vegetables.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVegetablesVegetablesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlZ2V0YWJsZXMvdmVnZXRhYmxlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vegetables/vegetables.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/vegetables/vegetables.component.ts ***!
    \****************************************************/

  /*! exports provided: VegetablesComponent */

  /***/
  function srcAppVegetablesVegetablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VegetablesComponent", function () {
      return VegetablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    var VegetablesComponent = /*#__PURE__*/function () {
      function VegetablesComponent(restService) {
        _classCallCheck(this, VegetablesComponent);

        this.restService = restService;
      }

      _createClass(VegetablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.allData = [];
          this.restService.get("http://localhost:8080/vegetables/getAll").subscribe(function (data) {
            console.log(data);

            if (data) {
              _this12.allData = data;
            }
          }, function (error) {
            alert("error : " + error.statusText);
            console.error(error);
          });
        }
      }]);

      return VegetablesComponent;
    }();

    VegetablesComponent.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], {
      "static": false
    })], VegetablesComponent.prototype, "child", void 0);
    VegetablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vegetables',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vegetables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vegetables/vegetables.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vegetables.component.css */
      "./src/app/vegetables/vegetables.component.css"))["default"]]
    })], VegetablesComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Work\complete website\shoppingapp\src\main\resources\frontend\shopping-website\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map