/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const InputView = __webpack_require__(/*! ./views/input_views */ \"./src/views/input_views.js\");\nconst WordCounter = __webpack_require__(/*! ./models/word_counter */ \"./src/models/word_counter.js\");\nconst ResultView = __webpack_require__(/*! ./views/result_views */ \"./src/views/result_views.js\");\n\ndocument.addEventListener('DOMContentLoaded', ()=>{\n  console.log('loaded');\n\n  const inputView = new InputView();\n  inputView.bindEvents();\n\n  const wordCounter = new WordCounter();\n  wordCounter.bindEvents();\n\n  const resultView = new ResultView();\n  resultView.bindEvents();\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helper/pub_sub.js":
/*!*******************************!*\
  !*** ./src/helper/pub_sub.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n\n  publish: function(channel,payload){\n    const event = new CustomEvent(channel,{detail: payload})\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function(channel, callback){\n    document.addEventListener(channel,callback);\n  }\n\n};\nmodule.exports = PubSub ;\n\n\n//# sourceURL=webpack:///./src/helper/pub_sub.js?");

/***/ }),

/***/ "./src/models/word_counter.js":
/*!************************************!*\
  !*** ./src/models/word_counter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helper/pub_sub */ \"./src/helper/pub_sub.js\");\n\nconst WordCounter = function(){\n\n}\n\nWordCounter.prototype.bindEvents = function () {\n  PubSub.subscribe('InputView:inputWord', (event) => {\n    const inputedWords = event.detail;\n    PubSub.publish('WordCounter:inputedWords', this.countWord(inputedWords));\n  });\n};\n\n\nWordCounter.prototype.countWord = function (words) {\n\n  let wordsArray = words.split(' ').filter(word => word !== '');\n  return wordsArray.length;\n\n};\n\nmodule.exports = WordCounter;\n\n\n//# sourceURL=webpack:///./src/models/word_counter.js?");

/***/ }),

/***/ "./src/views/input_views.js":
/*!**********************************!*\
  !*** ./src/views/input_views.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helper/pub_sub */ \"./src/helper/pub_sub.js\");\n\nconst InputView = function(){\n\n}\nInputView.prototype.bindEvents = function () {\n\n  const input = document.querySelector('#text');\n\n  input.addEventListener('input', (event) => {\n    const inputWord = event.target.value;\n    PubSub.publish('InputView:inputWord', inputWord);\n  })\n\n};\n\nmodule.exports = InputView;\n\n\n//# sourceURL=webpack:///./src/views/input_views.js?");

/***/ }),

/***/ "./src/views/result_views.js":
/*!***********************************!*\
  !*** ./src/views/result_views.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helper/pub_sub */ \"./src/helper/pub_sub.js\")\n\nconst ResultView = function(){\n\n}\n\nResultView.prototype.bindEvents = function(){\n  PubSub.subscribe('WordCounter:inputedWords',(event) => {\n    const result = event.detail;\n    this.displayResult(result);\n  })\n}\n\nResultView.prototype.displayResult = function (result) {\n  const resultfield = document.querySelector('#result');\n  resultfield.textContent = result;\n};\n\nmodule.exports = ResultView;\n\n\n//# sourceURL=webpack:///./src/views/result_views.js?");

/***/ })

/******/ });