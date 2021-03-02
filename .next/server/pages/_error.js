module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("D4/9");


/***/ }),

/***/ "D4/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LXvI");




function Error({
  statusCode,
  message = null
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_styles_mainPage__WEBPACK_IMPORTED_MODULE_1__[/* ErrorContainer */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: statusCode === 404 ? '/404.svg' : '/error.png'
    }), message ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: message
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: statusCode === 404 ? '페이지를 찾을 수 없어요' : '에러가 발생했어요!'
    })]
  });
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "LXvI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("syOo");


const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_default__WEBPACK_IMPORTED_MODULE_1__[/* DefaultBox */ "b"])`
	padding: 40px 0;

	& > p {
		font-size: 1rem;
		margin: 2rem 20px;
	}
`;
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	margin: 0 20px 1rem 20px;
	position: relative;
	height: 60px;
	border-radius: 30px;
	box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.16);
	overflow: hidden;

	img {
		position: absolute;
		left: 1rem;
		height: 60px;
		padding: 1rem 0;
	}

	input {
		font-size: 18px;
		color: #707070;
		height: 100%;
		width: 100%;
		padding: 20px 0 20px 4rem;

		&:focus {
			color: #212529;
		}
	}
`;
const ErrorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	width: 100%;
	min-height: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		margin-top: 2rem;
	}
`;

/***/ }),

/***/ "syOo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GlobalStyles; });
/* unused harmony export W100Div */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultBox; });
/* unused harmony export DisplayCenterDiv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateP; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
	body {
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif !important;
		-webkit-font-smoothing: antialiased;
		color: rgb(33, 37, 41);
		font-size: 14px;
		background: #fafafa;
		overflow-x: hidden;
	}
	ol, ul {
		padding-left: 1.5rem;
	}

	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		cursor: pointer;
		color: inherit;
		text-decoration: none;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		outline: none;
		word-break: break-word;
		border: none;
	}
	code, pre, code[class*="language-"], pre[class*="language-"] {
		font-family: inherit;
	}

	textarea {
		font-family: inherit;
		resize: none;
	}
`;
const W100Div = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	width: 100%;
	background: #fff;
`;
const DefaultBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	width: 100%;
	height: 100%;
	max-width: 1320px;
	margin: 0 auto;

	@media screen and (max-width: 1320px) {
		max-width: 1000px;
	}

	@media screen and (max-width: 700px) {
		max-width: 660px;
	}
`;
const DisplayCenterDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const DateP = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
	font-size: 12px;
	color: #495057;
	line-height: 1.5;
`;

/***/ })

/******/ });