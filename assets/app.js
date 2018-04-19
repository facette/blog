/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./assets/favicon.png */ "./assets/favicon.png");

__webpack_require__(/*! ./assets/logo.png */ "./assets/logo.png");

__webpack_require__(/*! ./assets/logo-single.png */ "./assets/logo-single.png");

var _smoothscrollPolyfill = __webpack_require__(/*! smoothscroll-polyfill */ "../node_modules/smoothscroll-polyfill/dist/smoothscroll.js");

var _smoothscrollPolyfill2 = _interopRequireDefault(_smoothscrollPolyfill);

var _fontawesome = __webpack_require__(/*! @fortawesome/fontawesome */ "../node_modules/@fortawesome/fontawesome/index.es.js");

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _faAngleDoubleRight = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faAngleDoubleRight */ "../node_modules/@fortawesome/fontawesome-free-solid/faAngleDoubleRight.js");

var _faAngleDoubleRight2 = _interopRequireDefault(_faAngleDoubleRight);

var _faCalendar = __webpack_require__(/*! @fortawesome/fontawesome-free-regular/faCalendar */ "../node_modules/@fortawesome/fontawesome-free-regular/faCalendar.js");

var _faCalendar2 = _interopRequireDefault(_faCalendar);

var _faChevronDown = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faChevronDown */ "../node_modules/@fortawesome/fontawesome-free-solid/faChevronDown.js");

var _faChevronDown2 = _interopRequireDefault(_faChevronDown);

var _faChevronLeft = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faChevronLeft */ "../node_modules/@fortawesome/fontawesome-free-solid/faChevronLeft.js");

var _faChevronLeft2 = _interopRequireDefault(_faChevronLeft);

var _faChevronRight = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faChevronRight */ "../node_modules/@fortawesome/fontawesome-free-solid/faChevronRight.js");

var _faChevronRight2 = _interopRequireDefault(_faChevronRight);

var _faClock = __webpack_require__(/*! @fortawesome/fontawesome-free-regular/faClock */ "../node_modules/@fortawesome/fontawesome-free-regular/faClock.js");

var _faClock2 = _interopRequireDefault(_faClock);

var _faFacebookSquare = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faFacebookSquare */ "../node_modules/@fortawesome/fontawesome-free-brands/faFacebookSquare.js");

var _faFacebookSquare2 = _interopRequireDefault(_faFacebookSquare);

var _faGithub = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faGithub */ "../node_modules/@fortawesome/fontawesome-free-brands/faGithub.js");

var _faGithub2 = _interopRequireDefault(_faGithub);

var _faGooglePlusSquare = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faGooglePlusSquare */ "../node_modules/@fortawesome/fontawesome-free-brands/faGooglePlusSquare.js");

var _faGooglePlusSquare2 = _interopRequireDefault(_faGooglePlusSquare);

var _faLink = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faLink */ "../node_modules/@fortawesome/fontawesome-free-solid/faLink.js");

var _faLink2 = _interopRequireDefault(_faLink);

var _faMapMarkerAlt = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faMapMarkerAlt */ "../node_modules/@fortawesome/fontawesome-free-solid/faMapMarkerAlt.js");

var _faMapMarkerAlt2 = _interopRequireDefault(_faMapMarkerAlt);

var _faRSS = __webpack_require__(/*! @fortawesome/fontawesome-free-solid/faRSS */ "../node_modules/@fortawesome/fontawesome-free-solid/faRSS.js");

var _faRSS2 = _interopRequireDefault(_faRSS);

var _faTwitter = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faTwitter */ "../node_modules/@fortawesome/fontawesome-free-brands/faTwitter.js");

var _faTwitter2 = _interopRequireDefault(_faTwitter);

var _faTwitterSquare = __webpack_require__(/*! @fortawesome/fontawesome-free-brands/faTwitterSquare */ "../node_modules/@fortawesome/fontawesome-free-brands/faTwitterSquare.js");

var _faTwitterSquare2 = _interopRequireDefault(_faTwitterSquare);

__webpack_require__(/*! ./style */ "./style/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_smoothscrollPolyfill2.default.polyfill();

// Load icons


_fontawesome2.default.library.add(_faAngleDoubleRight2.default, _faCalendar2.default, _faChevronDown2.default, _faChevronLeft2.default, _faChevronRight2.default, _faClock2.default, _faFacebookSquare2.default, _faGithub2.default, _faGooglePlusSquare2.default, _faLink2.default, _faMapMarkerAlt2.default, _faRSS2.default, _faTwitter2.default, _faTwitterSquare2.default);

// Attach scroll event
var scroll = document.body.querySelector("header .scroll");

if (scroll) {
    scroll.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

/***/ }),

/***/ "./assets/favicon.png":
/*!****************************!*\
  !*** ./assets/favicon.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/favicon.png";

/***/ }),

/***/ "./assets/logo-single.png":
/*!********************************!*\
  !*** ./assets/logo-single.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/logo-single.png";

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/logo.png";

/***/ }),

/***/ "./style/animation.scss":
/*!******************************!*\
  !*** ./style/animation.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/article.scss":
/*!****************************!*\
  !*** ./style/article.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/body.scss":
/*!*************************!*\
  !*** ./style/body.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/font.scss":
/*!*************************!*\
  !*** ./style/font.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/footer.scss":
/*!***************************!*\
  !*** ./style/footer.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/header.scss":
/*!***************************!*\
  !*** ./style/header.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/index.js":
/*!************************!*\
  !*** ./style/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./reset.scss */ "./style/reset.scss");

__webpack_require__(/*! ./font.scss */ "./style/font.scss");

__webpack_require__(/*! ./animation.scss */ "./style/animation.scss");

__webpack_require__(/*! ./body.scss */ "./style/body.scss");

__webpack_require__(/*! ./header.scss */ "./style/header.scss");

__webpack_require__(/*! ./main.scss */ "./style/main.scss");

__webpack_require__(/*! ./article.scss */ "./style/article.scss");

__webpack_require__(/*! ./nav.scss */ "./style/nav.scss");

__webpack_require__(/*! ./footer.scss */ "./style/footer.scss");

/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/nav.scss":
/*!************************!*\
  !*** ./style/nav.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./style/reset.scss":
/*!**************************!*\
  !*** ./style/reset.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map