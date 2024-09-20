"use strict";
(self["webpackChunkcookies"] = self["webpackChunkcookies"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function AppComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51)(4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54)(9, "div", 55)(10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_37_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.scrollTo(_r3, product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r4.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r4.price, " ", ctx_r1.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.weight);
  }
}
const _c0 = function (a0) {
  return {
    "error": a0
  };
};
class AppComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.currency = "$";
    this.form = this.fb.group({
      product: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  ngOnInit() {
    this.http.get("http://testologia.ru/cookies").subscribe(data => this.productsData = data);
  }
  scrollTo(target, product) {
    target.scrollIntoView({
      behavior: "smooth"
    });
    if (product) {
      this.form.patchValue({
        product: product.title + ' (' + product.price + ' ' + this.currency + ')'
      });
    }
  }
  changeCurrency() {
    let newCurrency = "$";
    let coefficient = 1;
    if (this.currency === "$") {
      newCurrency = "₽";
      coefficient = 90;
    } else if (this.currency === "₽") {
      newCurrency = "BYN";
      coefficient = 3;
    } else if (this.currency === "BYN") {
      newCurrency = "€";
      coefficient = 0.9;
    } else if (this.currency === "€") {
      newCurrency = "¥";
      coefficient = 6.9;
    }
    this.currency = newCurrency;
    this.productsData.forEach(item => {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    });
  }
  confirmOrder() {
    if (this.form.valid) {
      this.http.post("http://testologia.ru/cookies-order", this.form.value).subscribe({
        next: response => {
          alert(response.message);
          this.form.reset();
        },
        error: response => {
          alert(response.error.message);
        }
      });
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 75,
    vars: 16,
    consts: [[1, "main"], ["title", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0430\u043B\u044E\u0442\u0443", "id", "change-currency", 1, "currency", 3, "click"], [1, "header"], [1, "container"], [1, "logo"], ["src", "./assets/images/logo.png", "alt", "logo"], [1, "menu"], [1, "menu-list"], [1, "menu-item"], [3, "click"], [1, "main-content"], ["src", "./assets/images/line1.png", "alt", "line", 1, "line1"], [1, "main-info"], [1, "main-title"], [1, "main-text"], [1, "main-action"], ["id", "main-action-button", 1, "button", 3, "click"], ["src", "./assets/images/cookie.png", "alt", "cookie", 1, "main-image"], ["id", "products", 1, "products"], ["products", ""], ["src", "./assets/images/line2.png", "alt", "line", 1, "line2"], [1, "common-title"], [1, "products-items"], ["class", "products-item", 4, "ngFor", "ngForOf"], ["id", "love", 1, "love"], ["love", ""], [1, "love-items"], [1, "love-item", "love-item-white"], [1, "love-item-title"], [1, "love-item-text"], [1, "love-item", "love-item-image"], ["src", "./assets/images/love.png", "alt", "Cookies image"], ["id", "order", 1, "order"], ["order", ""], ["src", "./assets/images/line3.png", "alt", "line", 1, "line3"], ["src", "./assets/images/breadcrumbs.png", "alt", "breadcrumbs", 1, "order-bg-image"], [1, "order-block"], [1, "order-form"], [1, "order-form-text"], [1, "order-form-inputs", 3, "formGroup"], ["type", "text", "placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u0435", "id", "product", "formControlName", "product", "readonly", ""], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", "id", "name", "formControlName", "name"], ["type", "text", "placeholder", "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", "id", "phone", "formControlName", "phone"], ["id", "order-action", 1, "button", "violet-button", 3, "disabled", "click"], [1, "order-block-image"], ["src", "./assets/images/order.png", "alt", "Cookies", 1, "order-image"], [1, "footer"], [1, "rights"], [1, "products-item"], [1, "products-item-image"], ["alt", "Product", 3, "src"], [1, "product-item-details"], [1, "product-item-title"], [1, "product-item-text"], [1, "products-item-extra"], [1, "products-item-info"], [1, "products-item-price"], [1, "products-item-weight"], [1, "button", "violet-button", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() {
          return ctx.changeCurrency();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041C\u0430\u0433\u0438\u044F \u0432\u043A\u0443\u0441\u0430 \u0432\u00A0\u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u0440\u043E\u0448\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u041D\u0430\u0448\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u0432\u0434\u044B\u0445\u0430\u044E\u0442 \u0436\u0438\u0437\u043D\u044C \u0432 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u043E\u0432: \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E, \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u043B\u0438\u0432\u043A\u0438, \u0447\u0438\u0441\u0442\u044B\u0439 \u043C\u0451\u0434 \u0438 \u043E\u0442\u0431\u043E\u0440\u043D\u0430\u044F \u043C\u0443\u043A\u0430. \u041C\u044B \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0435\u0447\u0435\u043D\u044C\u044F, \u0441\u0442\u0440\u0435\u043C\u044F\u0441\u044C \u043F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0432\u0430\u043C \u0438\u0441\u0442\u0438\u043D\u043D\u043E\u0435 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u043E\u0435 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15)(27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollTo(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 18, 19)(32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_div_37_Template, 16, 6, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 24, 25)(40, "div", 3)(41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041F\u0435\u043A\u0430\u0440\u043D\u044F \u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26)(44, "div", 27)(45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043E \u0441\u00A0\u0437\u0430\u0431\u043E\u0442\u043E\u0439, \u0447\u0442\u043E\u0431\u044B\u00A0\u0440\u0430\u0434\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0441\u00A0\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u041C\u044B\u00A0\u0441\u00A0\u0433\u043E\u0440\u0434\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043D\u0430\u0448\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043C\u044B\u00A0\u0432\u044B\u043F\u0435\u043A\u0430\u0435\u043C \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0441\u00A01995\u00A0\u0433\u043E\u0434\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0435 \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B. \u041F\u043E\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044C \u0432\u00A0\u043C\u0438\u0440\u00A0\u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0445 \u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432, \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u00A0\u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439, \u0438\u00A0\u043D\u0430\u0441\u043B\u0430\u0434\u0438\u0442\u0435\u0441\u044C \u0438\u0445\u00A0\u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u043C \u0432\u043A\u0443\u0441\u043E\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3)(55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0435\u0447\u0435\u043D\u044C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36)(59, "div", 37)(60, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u043B\u044F\u00A0\u0441\u0435\u0431\u044F \u0432\u043E\u043B\u0448\u0435\u0431\u0441\u0442\u0432\u043E \u0432\u043A\u0443\u0441\u0430 \u0441\u00A0\u043D\u0430\u0448\u0438\u043C \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0435\u0447\u0435\u043D\u044C\u0435\u043C! \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u00A0\u043E\u043A\u0443\u043D\u0438\u0442\u0435\u0441\u044C \u0432\u00A0\u043C\u0438\u0440\u00A0\u0441\u043B\u0430\u0434\u043A\u0438\u0445 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 40)(64, "input", 41)(65, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_66_listener() {
          return ctx.confirmOrder();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "footer", 46)(71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00AB\u0412\u0441\u0435\u00A0\u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ((tmp_3_0 = ctx.form.get("product")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.form.get("product")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.form.get("product")) == null ? null : tmp_3_0.touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ((tmp_5_0 = ctx.form.get("phone")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.form.get("phone")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.form.get("phone")) == null ? null : tmp_5_0.touched))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.currency[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 50px;\n  bottom: 50px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  height: 25px;\n  min-width: 25px;\n  border-radius: 50px;\n  text-align: center;\n  cursor: pointer;\n  line-height: 28px;\n  z-index: 1;\n  -webkit-user-select: none;\n          user-select: none;\n  transform: scale(1);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%{\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n  }\n\n  70%{\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);\n  }\n\n  100%{\n    transform: scale(0.9);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n  }\n\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n\n.menu[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 50px;\n}\n\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 130%;\n  text-decoration: none;\n  cursor: pointer;\n  color: white;\n}\n\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid white;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding-top: 161px;\n  padding-bottom: 200px;\n}\n\n.main-info[_ngcontent-%COMP%] {\n  max-width: 811px;\n}\n\n.main-title[_ngcontent-%COMP%] {\n  font-family: 'Steppe-ExtraBold', sans-serif;\n  font-size: 90px;\n  line-height: 100%;\n  margin-bottom: 20px;\n}\n\n.main-text[_ngcontent-%COMP%] {\n  max-width: 697px;\n  font-size: 18px;\n  line-height: 130%;\n  margin-bottom: 40px;\n}\n\n.main-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: -1;\n}\n\n.products[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  position: relative;\n}\n\n.products-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 384px);\n  gap: 90px 24px;\n  margin-top: 110px;\n}\n\n.products-item[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #5D3427;\n}\n\n.products-item-image[_ngcontent-%COMP%] {\n  height: 202px;\n  text-align: center;\n}\n\n.products-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 272px;\n  top: -70px;\n  position: relative;\n  max-width: 100%;\n}\n\n.product-item-details[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.product-item-title[_ngcontent-%COMP%] {\n  font-family: 'Steppe-ExtraBold', sans-serif;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n\n.product-item-text[_ngcontent-%COMP%] {\n  height: 110px;\n  font-size: 14px;\n  line-height: 120%;\n  margin-bottom: 20px;\n}\n\n.products-item-extra[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.products-item-price[_ngcontent-%COMP%] {\n  font-family: 'Steppe-ExtraBold', sans-serif;\n  color: #5243F4;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.products-item-weight[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.love[_ngcontent-%COMP%] {\n  padding: 64px 0 150px 0;\n}\n\n.love-items[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  gap: 20px;\n}\n\n.love-item[_ngcontent-%COMP%] {\n  width: 590px;\n  height: 453px;\n}\n\n.love-item-white[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 110px 80px;\n  box-sizing: border-box;\n  color: #5D3427;\n}\n\n.love-item-title[_ngcontent-%COMP%] {\n  font-family: 'Steppe-ExtraBold', sans-serif;\n  font-size: 24px;\n  line-height: 110%;\n  margin-bottom: 20px;\n}\n\n.love-item-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 130%;\n}\n\n.order[_ngcontent-%COMP%] {\n  padding-bottom: 102px;\n  position: relative;\n}\n\n.order[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.order-block[_ngcontent-%COMP%] {\n  margin-top: 103px;\n  background-color: rgb(255 255 255 / 30%);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  display: flex;\n}\n\n.order-form[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  max-width: 387px;\n  padding: 40px 0 44px 0;\n  box-sizing: border-box;\n}\n\n.order-form-text[_ngcontent-%COMP%] {\n  font-family: 'Steppe-ExtraBold', sans-serif;\n  font-size: 18px;\n  line-height: 130%;\n}\n\n.order-form-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n\n.order-form-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 60px;\n  margin-bottom: 16px;\n  padding: 24px 22px;\n  font-size: 18px;\n  width: 385px;\n  height: 68px;\n  background: transparent;\n  box-sizing: border-box;\n  outline: none;\n  color: white;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.order-form-inputs[_ngcontent-%COMP%]   .button.violet-button[_ngcontent-%COMP%] {\n  width: 387px;\n  height: 71px;\n}\n\n.order-block-image[_ngcontent-%COMP%] {\n  height: 501px;\n  margin-left: 109px;\n}\n\n.order-image[_ngcontent-%COMP%] {\n  height: 559px;\n  top: -58px;\n  position: relative;\n}\n\n.order-bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: calc(100% - 810px);\n  z-index: -1;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 126px 0 50px 0;\n  text-align: center;\n}\n\n.rights[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 18px;\n  line-height: 130%;\n}\n\n.line1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: calc(100% - 960px);\n}\n\n.line2[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: -40px;\n  left: 0;\n}\n\n.line3[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: -920px;\n  left: 0;\n}\n\n.order-form-inputs[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%]{\n  border-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsMENBQTBDO0VBQzVDOztBQUVGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3VycmVuY3kge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogNTBweDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1pbi13aWR0aDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgei1pbmRleDogMTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgfVxyXG5cclxuICA3MCV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbn1cclxuXHJcbi5tZW51LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDUwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0gYSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIGE6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDE2MXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxufVxyXG5cclxuLm1haW4taW5mbyB7XHJcbiAgbWF4LXdpZHRoOiA4MTFweDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnU3RlcHBlLUV4dHJhQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLXRleHQge1xyXG4gIG1heC13aWR0aDogNjk3cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ucHJvZHVjdHMge1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZHVjdHMtaXRlbXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzg0cHgpO1xyXG4gIGdhcDogOTBweCAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDExMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdHMtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM1RDM0Mjc7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1pdGVtLWltYWdlIHtcclxuICBoZWlnaHQ6IDIwMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0taW1hZ2UgaW1nIHtcclxuICBoZWlnaHQ6IDI3MnB4O1xyXG4gIHRvcDogLTcwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3QtaXRlbS1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pdGVtLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1N0ZXBwZS1FeHRyYUJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pdGVtLXRleHQge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1pdGVtLWV4dHJhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdHMtaXRlbS1wcmljZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdTdGVwcGUtRXh0cmFCb2xkJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzUyNDNGNDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0td2VpZ2h0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5sb3ZlIHtcclxuICBwYWRkaW5nOiA2NHB4IDAgMTUwcHggMDtcclxufVxyXG5cclxuLmxvdmUtaXRlbXMge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5sb3ZlLWl0ZW0ge1xyXG4gIHdpZHRoOiA1OTBweDtcclxuICBoZWlnaHQ6IDQ1M3B4O1xyXG59XHJcblxyXG4ubG92ZS1pdGVtLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMTBweCA4MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICM1RDM0Mjc7XHJcbn1cclxuXHJcbi5sb3ZlLWl0ZW0tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnU3RlcHBlLUV4dHJhQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5sb3ZlLWl0ZW0tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG59XHJcblxyXG4ub3JkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vcmRlciAuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vcmRlci1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMTAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMzAlKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm9yZGVyLWZvcm0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDM4N3B4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCA0NHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm9yZGVyLWZvcm0tdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdTdGVwcGUtRXh0cmFCb2xkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbn1cclxuXHJcbi5vcmRlci1mb3JtLWlucHV0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5vcmRlci1mb3JtLWlucHV0cyBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDI0cHggMjJweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDM4NXB4O1xyXG4gIGhlaWdodDogNjhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4ub3JkZXItZm9ybS1pbnB1dHMgLmJ1dHRvbi52aW9sZXQtYnV0dG9uIHtcclxuICB3aWR0aDogMzg3cHg7XHJcbiAgaGVpZ2h0OiA3MXB4O1xyXG59XHJcblxyXG4ub3JkZXItYmxvY2staW1hZ2Uge1xyXG4gIGhlaWdodDogNTAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwOXB4O1xyXG59XHJcblxyXG4ub3JkZXItaW1hZ2Uge1xyXG4gIGhlaWdodDogNTU5cHg7XHJcbiAgdG9wOiAtNThweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vcmRlci1iZy1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogY2FsYygxMDAlIC0gODEwcHgpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMjZweCAwIDUwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodHMge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG59XHJcblxyXG4ubGluZTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gOTYwcHgpO1xyXG59XHJcblxyXG4ubGluZTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IC00MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5saW5lMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogLTkyMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5vcmRlci1mb3JtLWlucHV0cyBpbnB1dC5lcnJvcntcclxuICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map