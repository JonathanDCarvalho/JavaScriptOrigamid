/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js"
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
(module) {

function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js"
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js");
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js");
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var regenerator = __webpack_require__(/*! ./regenerator.js */ "./node_modules/@babel/runtime/helpers/regenerator.js");
var regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js");
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ "./node_modules/@babel/runtime/helpers/OverloadYield.js");
var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js");
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
(module) {

function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
(module) {

function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ "./node_modules/@babel/runtime/helpers/OverloadYield.js");
var regenerator = __webpack_require__(/*! ./regenerator.js */ "./node_modules/@babel/runtime/helpers/regenerator.js");
var regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js");
var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js");
var regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js");
var regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js");
var regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ "./node_modules/@babel/runtime/helpers/regeneratorValues.js");
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/typeof.js"
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ "./node_modules/@babel/runtime/regenerator/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ },

/***/ "./js/modules/accordion.js"
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Accordion List

function initAccordion() {
  var accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  var activeClass = "ativo";
  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach(function (item) {
      item.addEventListener("click", activeAccordion);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAccordion);

/***/ },

/***/ "./js/modules/anima-numeros.js"
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initAnimaNumeros() {
  function animaNumeros() {
    var numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach(function (numero) {
      var total = Number(numero.innerText);
      var incremento = Math.floor(total / 100);
      var start = 0;
      var timer = setInterval(function () {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  var observeTarget = document.querySelector(".numeros");
  var observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, {
    attributes: true
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimaNumeros);

/***/ },

/***/ "./js/modules/dropdown-menu.js"
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ "./js/modules/outsideClick.js");

function initDropDownMenu() {
  var dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach(function (menu) {
    ["touchstart", "click"].forEach(function (userEvent) {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  function handleClick(e) {
    var _this = this;
    e.preventDefault();
    this.classList.add("active");
    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ["touchstart", "click"], function () {
      _this.classList.remove("active");
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropDownMenu);

/***/ },

/***/ "./js/modules/fetch-animais.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ "./js/modules/anima-numeros.js");



function initFetchAnimais() {
  function fetchAnimais(_x) {
    return _fetchAnimais.apply(this, arguments);
  }
  function _fetchAnimais() {
    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(url) {
      var animaisResponse, numerosGrid, _t;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 1;
            return fetch(url);
          case 1:
            _context.next = 2;
            return _context.sent.json();
          case 2:
            animaisResponse = _context.sent;
            numerosGrid = document.querySelector(".numeros-grid");
            animaisResponse.forEach(function (animal) {
              var divAnimal = createAnimail(animal);
              numerosGrid.appendChild(divAnimal);
            });
            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            _context.next = 4;
            break;
          case 3:
            _context.prev = 3;
            _t = _context["catch"](0);
            console.log(Error(_t));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 3]]);
    }));
    return _fetchAnimais.apply(this, arguments);
  }
  function createAnimail(animal) {
    var div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = "<h3>".concat(animal.specie, "</h3><span data-numero>").concat(animal.total, "</span>");
    return div;
  }
  fetchAnimais("./animaisapi.json");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchAnimais);

/***/ },

/***/ "./js/modules/fetch-bitcoin.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initFetchBitcoin() {}
fetch("https://blockchain.info/ticker").then(function (response) {
  return response.json();
}).then(function (json) {
  var btcPreco = document.querySelector(".btc-preco");
  btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
})["catch"](function (error) {
  console.log(Error(error));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchBitcoin);

/***/ },

/***/ "./js/modules/funcionamento.js"
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initFuncionamento() {
  var funcionamento = document.querySelector("[data-semana]");
  var diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  var horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  var dataAgora = new Date();
  var diaAgora = dataAgora.getDay() + 1;
  var horarioAgora = dataAgora.getHours();
  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  var horarioAberto = horarioAgora >= horarioSemana[0] || horarioAgora < horarioSemana[1];
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFuncionamento);

// Object Date

// new Date()
// O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

// const now = new Date();
// console.log(now); // Semana Mês Dia Ano HH:MM:SS GMT

// console.log(now.getDate()); // Dia
// console.log(now.getDay()); // Dia da semana ex: 0 = Saturday
// console.log(now.getMonth()); // Número dia do mês ex: abril: 3
// console.log(now.getFullYear()); // Ano
// console.log(now.getHours()); // Hora
// console.log(now.getMinutes()); // Minutos
// console.log(now.getTime()); // ms desde 1970
// console.log(now.getUTCHours() - 3); // Brasilia

// const futuro = new Date("Dec 24 2026 23:59");
// console.log(futuro);

// // getTime()
// // O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

// // Dias até
// // Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

// function transformarDias(tempo) {
// 	return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(now.getTime());
// const diasFuturos = transformarDias(futuro.getTime());

// console.log(Math.floor(diasFuturos - diasAgora)); // faltam 242 pro natal

/***/ },

/***/ "./js/modules/menu-mobile.js"
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ "./js/modules/outsideClick.js");

function initMenuMobile() {
  var menuButton = document.querySelector('[data-menu="button"]');
  var menuList = document.querySelector('[data-menu="list"]');
  var eventos = ["click", "touchstart"];
  function openMenu(e) {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menuList, eventos, function () {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  if (menuButton) {
    eventos.forEach(function (userEvent) {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);

/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initModal() {
  var botaoAbrir = document.querySelector("[data-modal='abrir']");
  var botaoFechar = document.querySelector("[data-modal='fechar']");
  var containerModal = document.querySelector("[data-modal='container']");
  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function clickOutsideModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutsideModal);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);

/***/ },

/***/ "./js/modules/outsideClick.js"
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function outsideClick(element, events, callback) {
  var html = document.documentElement;
  var outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach(function (userEvent) {
      setTimeout(function () {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach(function (userEvent) {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);

/***/ },

/***/ "./js/modules/scroll-animacao.js"
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Animação ao Scroll

function initAnimacaoScroll() {
  var sections = document.querySelectorAll("[data-anime='scroll']");
  var windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach(function (section) {
      var sectionTop = section.getBoundingClientRect().top;
      var isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimacaoScroll);

/***/ },

/***/ "./js/modules/scroll-suave.js"
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


// Scroll Suave Link Interno
var ScrollSuave = /*#__PURE__*/function () {
  function ScrollSuave(links, options) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSuave);
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start"
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSuave, [{
    key: "scrollToSection",
    value: function scrollToSection(e) {
      e.preventDefault();
      var href = e.currentTarget.getAttribute("href");
      var section = document.querySelector(href);
      section.scrollIntoView(this.options);
    }
  }, {
    key: "addLinkEvent",
    value: function addLinkEvent() {
      var _this = this;
      this.linksInternos.forEach(function (link) {
        link.addEventListener("click", _this.scrollToSection);
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.linksInternos.length) {
        this.addLinkEvent();
      }
      return this;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSuave);

/***/ },

/***/ "./js/modules/tab-nav.js"
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Navegação por Tabs

function initTabNav() {
  var tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  var tabContent = document.querySelectorAll("[data-tab='content'] section");
  function activeTab(index) {
    tabContent.forEach(function (content) {
      content.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabMenu.forEach(function (itemMenu, index) {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTabNav);

/***/ },

/***/ "./js/modules/tooltip.js"
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initTooltip() {
  var tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach(function (item) {
    item.addEventListener("mouseover", onMouseOver);
  });
  function onMouseOver(e) {
    var tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = e.pageY + "px";
    tooltipBox.style.left = e.pageX + "px";
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  var onMouseLeave = {
    handleEvent: function handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    }
  };
  var onMouseMove = {
    handleEvent: function handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    }
  };
  function criarTooltipBox(element) {
    var tooltipBox = document.createElement("div");
    var text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ "./js/modules/scroll-suave.js");
/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ "./js/modules/scroll-animacao.js");
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ "./js/modules/accordion.js");
/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ "./js/modules/tab-nav.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");
/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ "./js/modules/tooltip.js");
/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ "./js/modules/dropdown-menu.js");
/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ "./js/modules/menu-mobile.js");
/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ "./js/modules/funcionamento.js");
/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ "./js/modules/fetch-animais.js");
/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ "./js/modules/fetch-bitcoin.js");











var options = {
  behavior: "smooth",
  block: "start"
};
var scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-menu="suave"] a[href^="#"]', options);
scrollSuave.init();
(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map