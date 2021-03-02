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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y1zR");


/***/ }),

/***/ "7Q4T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__("N4Zu");
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/write/PostBody/style.tsx

const BodyDiv = external_styled_components_default.a.div`
	padding: 2rem;
	white-space: pre-wrap;
	overflow: auto;
	width: 100%;

	.toolbar {
		display: none;
	}

	* {
		max-width: 100%;
	}

	& > h1 {
		margin-bottom: 1rem;
		font-size: 2.5rem;
		font-weight: 700;
	}

	& > div {
		& > * {
			width: 100%;
		}

		p,
		table {
			line-height: 1.8;
		}

		ol,
		ul {
			line-height: 1.8;
			white-space: normal;
		}

		h1 {
			font-size: 2.5rem;
			font-weight: 700;
		}

		blockquote {
			background: #f6f6f6;
			line-height: 1;
			padding: 0 2rem;
			border-left: 4px solid #662d91;
		}

		hr {
			height: 2px;
			background: #ededed;
		}

		a {
			font-weight: 500;
			color: #222d91;
		}

		table {
			width: 100%;
			background: #f3f3f3;

			th,
			tr,
			td {
				text-align: center;
			}

			th,
			td {
				border-right: 1px solid #efefef;

				&:nth-child(1) {
					border-left: 1px solid #efefef;
				}
			}

			tbody > tr:nth-child(odd) {
				background: #fafafa;
			}
		}
		img {
			width: 100%;
		}

		& > pre {
			line-height: 1.5;
			background: #f3f3f3;
			padding: 1rem;
			border-radius: 0.3rem;
		}

		& > p > code {
			background: #f3f3f3;
			padding: 0.3rem 0.6rem;
			margin: 0 0.3rem;
			font-size: 12px;
			border-radius: 0.3rem;
		}
	}

	&.preview {
		@media screen and (max-width: 700px) {
			display: none;
		}
	}
`;
// CONCATENATED MODULE: ./components/write/PostBody/index.tsx







const PostBody = ({
  className = '',
  title = '',
  body,
  setTitle = true
}) => {
  const markedDivRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (markedDivRef) {
      markedDivRef.current.innerHTML = external_marked_default()(body);
    }

    external_prismjs_default.a.highlightAll();
  }, [body]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(BodyDiv, {
    className: className,
    children: [setTitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      ref: markedDivRef,
      children: body
    })]
  });
};

/* harmony default export */ var write_PostBody = __webpack_exports__["a"] = (PostBody);

/***/ }),

/***/ "8a56":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_POSTS_REQUEST; });
/* unused harmony export LOAD_POSTS_SUCCESS */
/* unused harmony export LOAD_POSTS_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_CATEGORIES_REQUEST; });
/* unused harmony export LOAD_CATEGORIES_SUCCESS */
/* unused harmony export LOAD_CATEGORIES_FAILURE */
/* unused harmony export LOAD_SEARCH_REQUEST */
/* unused harmony export LOAD_SEARCH_SUCCESS */
/* unused harmony export LOAD_SEARCH_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadPostsAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadCategoriesAsync; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i0Yl");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  Category: [],
  posts: [],
  numberOfPosts: 0,
  isLoaddingPosts: false,
  loadPostsErrorReason: null,
  EndOfPosts: false
};
const LOAD_POSTS_REQUEST = 'posts/LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'posts/LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'posts/LOAD_POSTS_FAILURE';
const LOAD_CATEGORIES_REQUEST = 'posts/LOAD_CATEGORIES_REQUEST';
const LOAD_CATEGORIES_SUCCESS = 'posts/LOAD_CATEGORIES_SUCCESS';
const LOAD_CATEGORIES_FAILURE = 'posts/LOAD_CATEGORIES_FAILURE';
const LOAD_SEARCH_REQUEST = 'posts/LOAD_SEARCH_REQUEST';
const LOAD_SEARCH_SUCCESS = 'posts/LOAD_SEARCH_SUCCESS';
const LOAD_SEARCH_FAILURE = 'posts/LOAD_SEARCH_FAILURE';
const loadPostsAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE)();
const loadCategoriesAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAILURE)();
const actions = {
  loadPostsAsync,
  loadCategoriesAsync
};
const postsReducer = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, {
  [LOAD_POSTS_REQUEST]: state => _objectSpread(_objectSpread({}, state), {}, {
    isLoaddingPosts: true
  }),
  [LOAD_POSTS_SUCCESS]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    isLoaddingPosts: false,
    posts: state.posts.concat(payload.data),
    EndOfPosts: payload.data.length !== 8
  }),
  [LOAD_POSTS_FAILURE]: (state, {
    payload: error
  }) => _objectSpread(_objectSpread({}, state), {}, {
    isLoaddingPosts: false,
    loadPostsErrorReason: error.response ? error.response.data : 'Error!'
  }),
  [LOAD_CATEGORIES_REQUEST]: state => _objectSpread({}, state),
  [LOAD_CATEGORIES_SUCCESS]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    Category: payload.data.categories,
    numberOfPosts: payload.data.numberOfPosts
  }),
  [LOAD_CATEGORIES_FAILURE]: (state, {
    payload: error
  }) => _objectSpread({}, state)
});
/* harmony default export */ __webpack_exports__["c"] = (postsReducer);

/***/ }),

/***/ "AkTQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPEN_CONFIRM_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_CONFIRM_POST; });
/* unused harmony export openPosting */
/* unused harmony export closePosting */
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i0Yl");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isEditingId: 0,
  body: '',
  categories: [],
  isOpen: false
};
const OPEN_CONFIRM_POST = 'posting/OPEN_CONFIRM_POST';
const CLOSE_CONFIRM_POST = 'posting/CLOSE_CONFIRM_POST';
const openPosting = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(OPEN_CONFIRM_POST)();
const closePosting = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLOSE_CONFIRM_POST)();
const actions = {
  openPosting,
  closePosting
};
const postingReducer = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, {
  [OPEN_CONFIRM_POST]: (state, {
    payload: data
  }) => ({
    isEditingId: data.isEditingId,
    isOpen: true,
    body: data.body,
    categories: data.categories
  }),
  [CLOSE_CONFIRM_POST]: state => ({
    isEditingId: 0,
    isOpen: false,
    body: '',
    categories: []
  })
});
/* harmony default export */ __webpack_exports__["c"] = (postingReducer);

/***/ }),

/***/ "Btfs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/layout/LoadingFilter/style.tsx

const bounce = external_styled_components_["keyframes"]`
	0% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(23px);
	}
	60% {
		transform: translateY(-25px);
	}
	80%{
		transform: translateY(0);
	}
`;
const LoadingBalls = external_styled_components_default.a.div`
	position: relative;
	width: 80px;
	height: 200px;
	margin-top: 50px;

	& > div {
		height: 200px;
		margin-top: 50px;

		.circle {
			display: inline-block;
			background: rgb(95, 58, 154);
			height: 15px;
			width: 15px;
			border-radius: 25px;
			margin: 0 2px;
		}

		.ball-1 {
			animation: ${bounce} 1s ease-in-out infinite;
		}
		.ball-2 {
			animation: ${bounce} 1s ease-in-out 0.1s infinite;
		}
		.ball-3 {
			animation: ${bounce} 1s ease-in-out 0.2s infinite;
		}
	}
`;
const Background = external_styled_components_default.a.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.35);
	z-index: 999;
`;
// CONCATENATED MODULE: ./components/layout/LoadingFilter/index.tsx





const LoadingFilter = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Background, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoadingBalls, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "circle ball-1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "circle ball-2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "circle ball-3"
        })]
      })
    })
  });
};

/* harmony default export */ var layout_LoadingFilter = __webpack_exports__["a"] = (LoadingFilter);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "N4Zu":
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "QivM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

/* harmony default export */ __webpack_exports__["a"] = (useInput);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SeNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_USER_REQUSET; });
/* unused harmony export LOAD_USER_SUCCESS */
/* unused harmony export LOAD_USER_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_REQUEST; });
/* unused harmony export LOGIN_SUCCESS */
/* unused harmony export LOGIN_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadUserAsync; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i0Yl");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  user: null,
  loginErrorReason: ''
};
const LOAD_USER_REQUSET = 'LOAD_USER_REQUSET';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE)();
const loadUserAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(LOAD_USER_REQUSET, LOAD_USER_SUCCESS, LOAD_USER_FAILURE)();
const actions = {
  loginAsync,
  loadUserAsync
};
const userReducer = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, {
  [LOGIN_REQUEST]: state => _objectSpread({}, state),
  [LOGIN_SUCCESS]: (state, {
    payload: user
  }) => _objectSpread(_objectSpread({}, state), {}, {
    user: user
  }),
  [LOGIN_FAILURE]: (state, {
    payload: error
  }) => {
    var _error$response;

    return _objectSpread(_objectSpread({}, state), {}, {
      user: null,
      loginErrorReason: (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data.reason
    });
  },
  [LOAD_USER_REQUSET]: state => _objectSpread({}, state),
  [LOAD_USER_SUCCESS]: (state, {
    payload: user
  }) => _objectSpread(_objectSpread({}, state), {}, {
    user: user
  }),
  [LOAD_USER_FAILURE]: (state, {
    payload: error
  }) => {
    var _error$response2;

    return _objectSpread(_objectSpread({}, state), {}, {
      loginErrorReason: (_error$response2 = error.response) !== null && _error$response2 !== void 0 && _error$response2.data ? error.response.data : 'Error!',
      user: null
    });
  }
});
/* harmony default export */ __webpack_exports__["c"] = (userReducer);

/***/ }),

/***/ "Y1zR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "PostingContainer", function() { return /* binding */ PostingContainer; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/write/PostingForm/style.tsx

const FormContainer = external_styled_components_default.a.div`
	position: relative;
	background: #fff;
	box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.16);
	padding: 2rem;

	& > textarea {
		margin-top: 10px;
		width: 100%;
		height: calc(100% - 10rem);
	}

	& > input {
		width: 100%;
		color: #707070;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;

		&:focus {
			color: #212529;
		}
	}
`;
const ButtonBox = external_styled_components_default.a.div`
	position: absolute;
	display: flex;
	justify-content: flex-end;
	bottom: 2rem;
	right: 2rem;
	font-size: 12px;

	& > div {
		padding: 0.5rem 1rem;
		border-radius: 5px;
		background: #ededed;
		color: #707070;
		cursor: pointer;
		margin-left: 10px;

		&.submit {
			color: #fff;
			background: rgba(95, 58, 154, 0.63);
		}
	}
`;
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__("QivM");

// CONCATENATED MODULE: ./components/write/CategoryInput/index.tsx





const CategoryInputBox = external_styled_components_default.a.form`
	width: 100%;
	display: flex;
	flex-flow: row wrap;

	& > input,
	& > div {
		margin: 0 10px 10px 0;
		padding: 0.5rem 1rem;
		background: #ededed;
		color: #707070;
		border-radius: 5px;
		font-size: 12px;
		line-height: 1.2;
	}

	& > input:focus {
		color: #212529;
	}
`;

const CategoryInput = ({
  categories,
  setCategories
}) => {
  const [newCategory, onChangeNC, setNC] = Object(useInput["a" /* default */])('');

  const addNewCategory = name => {
    if (name.length < 2 || name === 'undefined' || categories.find(category => category.name === newCategory)) return;
    setCategories([...categories, {
      name: newCategory
    }]);
    setNC('');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CategoryInputBox, {
    children: [categories.map((c, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: c.name
    }, i)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      value: newCategory,
      onChange: onChangeNC,
      onKeyPress: e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addNewCategory(newCategory);
        }
      },
      onKeyDown: e => {
        if (e.key == 'Backspace' && newCategory.length === 0) {
          e.preventDefault();
          setNC(categories[categories.length - 1].name);
          setCategories(categories.slice(0, categories.length - 1));
        }
      },
      type: "text",
      placeholder: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
    })]
  });
};

/* harmony default export */ var write_CategoryInput = (CategoryInput);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./reducers/posting.tsx
var posting = __webpack_require__("AkTQ");

// CONCATENATED MODULE: ./components/write/InputImage/style.tsx

const ImageButton = external_styled_components_default.a.div`
	padding: 0.25rem 0.5rem !important;
`;
// CONCATENATED MODULE: ./components/write/InputImage/index.tsx





const InputImage = ({
  onUploadImage
}) => {
  const imageInput = Object(external_react_["useRef"])();
  const onClickImageButton = Object(external_react_["useCallback"])(() => {
    imageInput.current.click();
  }, []);
  const onChangeImg = Object(external_react_["useCallback"])(e => {
    onUploadImage(e.target.files[0]);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ImageButton, {
    onClick: onClickImageButton,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/image.svg"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "file",
      accept: ".gif, .jpg, .png",
      ref: imageInput,
      onChange: onChangeImg,
      style: {
        width: 0,
        height: 0
      }
    })]
  });
};

/* harmony default export */ var write_InputImage = (InputImage);
// CONCATENATED MODULE: ./components/write/PostingForm/index.tsx









const PostingForm = ({
  category = [],
  isEditingId = 0,
  title,
  onChangeTitle,
  body,
  onChangeBody,
  uploadImage
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [categories, setCategories] = external_react_default.a.useState(category);
  const submitToConfirm = Object(external_react_["useCallback"])((title, isEditingId, body, categories) => {
    if (!(title && body)) {
      alert('포스트 제목과 내용을 입력해주셔야합니다.');
      return;
    } else {
      dispatch({
        type: posting["b" /* OPEN_CONFIRM_POST */],
        payload: {
          isEditingId: isEditingId,
          body: body,
          categories
        }
      });
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FormContainer, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "text",
      value: title,
      onChange: onChangeTitle,
      placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(write_CategoryInput, {
      categories: categories,
      setCategories: setCategories
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
      value: body,
      onChange: onChangeBody,
      name: "body",
      placeholder: "\uC774\uACF3\uC5D0 \uAE00\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonBox, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(write_InputImage, {
        onUploadImage: uploadImage
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "submit",
        onClick: () => {
          submitToConfirm(title, isEditingId, body, categories);
        },
        children: "\uC81C\uCD9C\uD558\uAE30"
      })]
    })]
  });
};

/* harmony default export */ var write_PostingForm = (PostingForm);
// CONCATENATED MODULE: ./containers/write/ConfirmPost/style.tsx

const ConfirmPage = external_styled_components_default.a.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	bottom: 0;
	right: 0;
	background: #fafafa;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s;
	overflow: hidden;

	& > div {
		width: 400px;
		padding: 1rem;

		h3 {
			margin: 1rem 0 0.5rem 0;

			span {
				font-size: 10px;
				color: #707070;
				font-weight: 400;
			}

			&:nth-child(1) {
				margin-top: 0;
			}
		}
		& > textarea {
			font-size: 12px;
			color: #495057;
			width: 100%;
			background: #fff;
			padding: 1rem;
			line-height: 1.6;
			word-break: break-all;
		}
	}
`;
const SubmitButtonBox = external_styled_components_default.a.div`
	width: 100%;
	display: flex;
	margin-top: 1.5rem;

	& > div {
		width: 100%;
		padding: 0.7rem 1rem;
		background: #fff;
		border-radius: 5px;
		text-align: center;
		cursor: pointer;
		font-size: 1.125rem;
		font-weight: 600;
		color: #707070;
		border: 2px solid #ededed;
		margin-left: 10px;

		&.selected {
			border: 2px solid rgba(95, 58, 154, 0.63);
			color: rgba(95, 58, 154, 0.8);
		}

		&.submit {
			color: #fff;
			border: 2px solid rgba(95, 58, 154, 0.63);
			background: rgba(95, 58, 154, 0.8);
		}

		&:nth-child(1) {
			margin-left: 0;
		}
	}
`;
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: ./reducers/post.tsx
var reducers_post = __webpack_require__("vPmt");

// CONCATENATED MODULE: ./components/write/SetThumbnail/style.tsx

const ThumbnailBox = external_styled_components_default.a.div`
	width: 100%;
	background: #ededed;
	position: relative;
	overflow: hidden;

	& > div.imageBox {
		min-width: 100%;
		display: flex;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: 0.3s;

		img {
			width: 100%;
			display: block;
			object-fit: cover;
			margin: 0 auto;
		}
	}

	& > div.paddingBox {
		height: 0;
		width: 100%;
		padding-top: 70%;
	}

	& > div.buttonBox {
		z-index: 2;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;

		& > div {
			padding: 0.7rem 1rem;
			background: #fff;
			border-radius: 5px;
			text-align: center;
			cursor: pointer;
			font-weight: 600;
			color: #707070;

			&:nth-child(1) {
				color: rgba(95, 58, 154, 0.8);
				margin-right: 10px;
			}
		}
	}

	button {
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
		background: none;

		&.left {
			left: 0;
			transform: translateY(-50%) rotate(180deg);
		}
		&.right {
			right: 0;
		}
	}
`;
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/write/SetThumbnail/index.tsx






const SetThumbnail = ({
  thumbnails,
  tnIndex,
  removeThumbnail,
  setTnIndex,
  addThumbnail
}) => {
  const imageInput = Object(external_react_["useRef"])();
  const onClickImageButton = Object(external_react_["useCallback"])(() => {
    imageInput.current.click();
  }, []);
  const onChangeImg = Object(external_react_["useCallback"])(async e => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024 * 10) return;
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) return;
    const formData = new FormData();
    await formData.append('image', file);
    await external_axios_default.a.post(`/post/uploadImage`, formData).then(res => {
      addThumbnail(res.data);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ThumbnailBox, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "paddingBox"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "buttonBox",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        onClick: onClickImageButton,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "file",
          accept: ".gif, .jpg, .png",
          ref: imageInput,
          onChange: onChangeImg,
          style: {
            display: 'none'
          }
        }), "\uD30C\uC77C\uCC3E\uAE30"]
      }), thumbnails.length > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        onClick: removeThumbnail,
        children: "\uC81C\uAC70\uD558\uAE30"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "imageBox",
      style: {
        transform: `translateX(-${100 * tnIndex}%)`
      },
      children: thumbnails && thumbnails.map((img, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: img
      }, i))
    }), tnIndex > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "left",
      onClick: () => {
        setTnIndex(tnIndex - 1);
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/arrow.svg",
        alt: ""
      })
    }), tnIndex < thumbnails.length - 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "right",
      onClick: () => {
        setTnIndex(tnIndex + 1);
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/arrow.svg",
        alt: ""
      })
    })]
  });
};

/* harmony default export */ var write_SetThumbnail = (SetThumbnail);
// CONCATENATED MODULE: ./containers/write/ConfirmPost/index.tsx










const ConfirmPost = ({
  title,
  post
}) => {
  const {
    body,
    isOpen,
    categories,
    isEditingId
  } = Object(external_react_redux_["useSelector"])(state => state.posting);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: des,
    1: setDes
  } = Object(external_react_["useState"])(post ? post.description : '');
  const {
    0: isVisible,
    1: setVisible
  } = Object(external_react_["useState"])(post ? post.is_visible : true);
  const {
    0: thumbnails,
    1: setThumbnails
  } = Object(external_react_["useState"])(post !== null && post !== void 0 && post.thumbnail ? [post.thumbnail] : []);
  const {
    0: tnIndex,
    1: setTnIndex
  } = Object(external_react_["useState"])(0);
  const onChangeDes = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    if (e.target.value.length > 160) return;
    setDes(e.target.value.replace('\n', ''));
  }, []);
  const removeThumbnail = Object(external_react_["useCallback"])(() => {
    setThumbnails(thumbnails.filter((img, i) => i !== tnIndex));
    setTnIndex(tnIndex > 0 ? tnIndex - 1 : 0);
  }, [tnIndex, thumbnails]);
  const addThumbnail = Object(external_react_["useCallback"])(newImage => {
    setThumbnails([newImage, ...thumbnails]);
    setTnIndex(0);
  }, [categories]);
  const onSubmitPost = Object(external_react_["useCallback"])(() => {
    if (!(body && title && des)) {
      alert('description은 필수 입력 항목입니다.');
      return;
    }

    dispatch({
      type: reducers_post["c" /* WRITE_POST_REQUEST */],
      payload: {
        isEditingId: isEditingId,
        post: {
          title: title,
          description: des,
          thumbnail: thumbnails[tnIndex],
          is_visible: isVisible,
          body: body
        },
        category: categories
      }
    });
  }, [body, des, isVisible, thumbnails, tnIndex]);
  Object(external_react_["useEffect"])(() => {
    var _body$match;

    if (!isOpen || !body) return;
    const parseDesList = external_marked_default()(body).match(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g);
    const parseDes = parseDesList === null || parseDesList === void 0 ? void 0 : parseDesList.join(' ').replace(/(<([^>]+)>)/gi, '');
    if (parseDes) setDes(parseDes.length ? parseDes.slice(0, 160) : parseDes);
    const thumb_imgs = (_body$match = body.match(/!\[[^\]]*?\]\([^)]+\)/g)) === null || _body$match === void 0 ? void 0 : _body$match.map(imgString => imgString.replace(/!\[[^\]]*?\]\(/g, '').replace(')', ''));
    setThumbnails(thumb_imgs ? [...thumbnails, ...thumb_imgs] : thumbnails);
  }, [isOpen]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ConfirmPage, {
    style: {
      left: isOpen ? 0 : '100%'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "\uC378\uB124\uC77C \uBBF8\uB9AC\uBCF4\uAE30"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(write_SetThumbnail, {
        thumbnails: thumbnails,
        tnIndex: tnIndex,
        removeThumbnail: removeThumbnail,
        setTnIndex: setTnIndex,
        addThumbnail: addThumbnail
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        children: ["Description \uBBF8\uB9AC\uBCF4\uAE30 ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [des.length, "/160"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
        rows: 4,
        value: des,
        onChange: onChangeDes
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SubmitButtonBox, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          onClick: () => {
            dispatch({
              type: posting["a" /* CLOSE_CONFIRM_POST */]
            });
          },
          children: "\uCDE8\uC18C\uD558\uAE30"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: isVisible ? 'selected' : '',
          onClick: () => {
            setVisible(!isVisible);
          },
          children: isVisible ? '공개' : '비공개'
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "submit",
          onClick: onSubmitPost,
          children: "\uC791\uC131\uD558\uAE30"
        })]
      })]
    })
  });
};

/* harmony default export */ var write_ConfirmPost = (ConfirmPost);
// EXTERNAL MODULE: ./components/write/PostBody/index.tsx + 1 modules
var PostBody = __webpack_require__("7Q4T");

// EXTERNAL MODULE: ./store/configureStore.tsx + 6 modules
var configureStore = __webpack_require__("sogr");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");

// EXTERNAL MODULE: ./reducers/user.tsx
var reducers_user = __webpack_require__("SeNx");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/write/DropImage/index.tsx



const DropImage = ({
  onPasteImage
}) => {
  Object(external_react_["useEffect"])(() => {
    const onPaste = e => {
      const {
        items
      } = e.clipboardData || e.originalEvent.clipboardData;
      if (items.length === 0) return;
      const fileItem = [...items].filter(item => item.kind === 'file')[0];
      if (!fileItem || !fileItem.getAsFile) return;
      const file = fileItem.getAsFile();
      onPasteImage(file);
      e.preventDefault();
    };

    if (document && document.body) {
      document.body.addEventListener('paste', onPaste);
    }

    return () => {
      if (document && document.body) document.body.removeEventListener('paste', onPaste);
    };
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      width: 0,
      height: 0
    }
  });
};

/* harmony default export */ var write_DropImage = (DropImage);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/layout/LoadingFilter/index.tsx + 1 modules
var LoadingFilter = __webpack_require__("Btfs");

// CONCATENATED MODULE: ./pages/posting/index.tsx



















const Posting = ({
  post = null
}) => {
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    writeSuccess
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const loading = Object(external_react_redux_["useSelector"])(state => state.loading);
  const router = Object(router_["useRouter"])();
  const [title, onChangeTitle] = Object(useInput["a" /* default */])(post ? post.title : '');
  const [body, onChangeBody, setBody] = Object(useInput["a" /* default */])(post ? post.body : '');
  const {
    0: newImage,
    1: setNewImage
  } = Object(external_react_["useState"])('');

  const uploadImage = async file => {
    if (!file) return;
    if (file.size > 1024 * 1024 * 10) return;
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) return;
    const formData = new FormData();
    await formData.append('image', file);
    await external_axios_default.a.post(`/post/uploadImage`, formData).then(res => {
      setNewImage(`![](${res.data})`);
    });
  };

  const onPasteImage = file => {
    if (!file) return;
    uploadImage(file);
  };

  Object(external_react_["useEffect"])(() => {
    if (!user) {
      router.back();
    }

    if (writeSuccess > -1) {
      router.push(`/post/${writeSuccess}`);
    }
  }, [writeSuccess]);
  Object(external_react_["useEffect"])(() => {
    if (newImage && body.indexOf(newImage) === -1) setBody(body + newImage);
    return () => {
      setNewImage('');
    };
  }, [body, newImage]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: post ? '글 수정' : '새 글'
      })
    }), loading.WRITE_POST_REQUEST && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoadingFilter["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PostingContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(write_PostingForm, {
          isEditingId: post ? post.id : 0,
          category: post === null || post === void 0 ? void 0 : post.categoryPosts,
          title: title,
          onChangeTitle: onChangeTitle,
          body: body,
          onChangeBody: onChangeBody,
          uploadImage: uploadImage
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(write_DropImage, {
          onPasteImage: onPasteImage
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostBody["a" /* default */], {
        className: "preview",
        title: title,
        body: body
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(write_ConfirmPost, {
      title: title,
      post: post
    })]
  });
};

const getServerSideProps = configureStore["a" /* default */].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  external_axios_default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: reducers_user["a" /* LOAD_USER_REQUSET */]
  });
  context.store.dispatch(external_redux_saga_["END"]);
  await context.store.sagaTask.toPromise();
  return {
    props: {
      category: context.query.category ? context.query.category : ''
    }
  };
});
/* harmony default export */ var pages_posting = __webpack_exports__["default"] = (Posting);
const PostingContainer = external_styled_components_default.a.div`
	width: 100%;
	max-width: 1320px;
	padding: 40px 20px;
	display: flex;

	& > div {
		width: 50%;
		height: calc(100vh - 120px);
	}

	@media screen and (max-width: 1000px) {
		& > div {
			width: 100%;

			&:nth-child(2) {
				display: none;
			}
		}
	}

	@media screen and (max-width: 700px) {
		padding: 0;
		height: calc(100vh - 40px);

		& > div {
			height: 100%;
			box-shadow: none;
		}
	}
`;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i0Yl":
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sogr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "typesafe-actions"
var external_typesafe_actions_ = __webpack_require__("i0Yl");

// CONCATENATED MODULE: ./reducers/loading.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const LOADING_START = 'loading/LOADING_START';
const LOADING_END = 'loading/LOADING_END';
const loadingStart = Object(external_typesafe_actions_["createAction"])(LOADING_START)();
const loadingEnd = Object(external_typesafe_actions_["createAction"])(LOADING_END)();
const actions = {
  loadingStart,
  loadingEnd
};
const initialState = {};
const loadingReducer = Object(external_typesafe_actions_["createReducer"])(initialState, {
  [LOADING_START]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    [payload]: true
  }),
  [LOADING_END]: (state, {
    payload
  }) => _objectSpread(_objectSpread({}, state), {}, {
    [payload]: false
  })
});
/* harmony default export */ var loading = (loadingReducer);
// EXTERNAL MODULE: ./reducers/posts.tsx
var posts = __webpack_require__("8a56");

// EXTERNAL MODULE: ./reducers/post.tsx
var post = __webpack_require__("vPmt");

// EXTERNAL MODULE: ./reducers/user.tsx
var reducers_user = __webpack_require__("SeNx");

// EXTERNAL MODULE: ./reducers/posting.tsx
var posting = __webpack_require__("AkTQ");

// CONCATENATED MODULE: ./reducers/index.tsx








const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          loading: loading,
          posts: posts["c" /* default */],
          post: post["d" /* default */],
          user: reducers_user["c" /* default */],
          posting: posting["c" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./sagas/post.tsx






async function removePostAPI(id) {
  return await external_axios_default.a.delete(`/post/${id}`);
}

function* removePost(action) {
  yield Object(effects_["put"])(loadingStart(action.type));

  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.payload);
    yield Object(effects_["put"])(post["f" /* removePostAsync */].success(result.data));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])(post["f" /* removePostAsync */].failure(error));
  }

  yield Object(effects_["put"])(loadingEnd(action.type));
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["f" /* removePostAsync */].request, removePost);
}

async function writePostAPI(postData) {
  if (postData.isEditingId) {
    return await external_axios_default.a.patch(`/post/${postData.isEditingId}`, postData);
  } else {
    return await external_axios_default.a.post(`/post`, postData);
  }
}

function* writePost(action) {
  yield Object(effects_["put"])(loadingStart(action.type));

  try {
    const result = yield Object(effects_["call"])(writePostAPI, action.payload);
    result.data.isEdited = true;
    yield Object(effects_["put"])(post["g" /* writePostAsync */].success(result.data));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: posting["a" /* CLOSE_CONFIRM_POST */]
    });
    yield Object(effects_["put"])(post["g" /* writePostAsync */].failure(error));
  }

  yield Object(effects_["put"])(loadingEnd(action.type));
}

function* watchWritePost() {
  yield Object(effects_["takeLatest"])(post["g" /* writePostAsync */].request, writePost);
}

async function loadPostAPI(id) {
  return await external_axios_default.a.get(`/post/${id}`);
}

function* loadPost(action) {
  yield Object(effects_["put"])(loadingStart(action.type));

  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.payload);
    yield Object(effects_["put"])(post["e" /* loadPostAsync */].success(result.data));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])(post["e" /* loadPostAsync */].failure(error));
  }

  yield Object(effects_["put"])(loadingEnd(action.type));
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["e" /* loadPostAsync */].request, loadPost);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchWritePost), Object(effects_["fork"])(watchRemovePost)]);
}
// CONCATENATED MODULE: ./sagas/posts.tsx




async function loadCategoriesAPI(postData) {
  return await external_axios_default.a.get(`/category`, postData);
}

function* loadCategories(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategoriesAPI, action.payload);
    yield Object(effects_["put"])(posts["d" /* loadCategoriesAsync */].success(result));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])(posts["d" /* loadCategoriesAsync */].failure(error));
  }
}

function* watchloadCategories() {
  yield Object(effects_["takeLatest"])(posts["d" /* loadCategoriesAsync */].request, loadCategories);
}

async function loadAllPostsAPI(query) {
  if (query.search) return await external_axios_default.a.get(`/post/search?lastId=${query.lastId || 0}&search=${encodeURIComponent(query.search)}`);
  return await external_axios_default.a.get(`/post?lastId=${query.lastId || 0}&category=${query.category ? encodeURIComponent(query.category) : '0'}`);
}

function* loadAllPosts(action) {
  try {
    const {
      user
    } = yield Object(effects_["select"])();
    if (action.payload) action.payload['user'] = user;
    const result = yield Object(effects_["call"])(loadAllPostsAPI, action.payload);
    yield Object(effects_["put"])(posts["e" /* loadPostsAsync */].success(result));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])(posts["e" /* loadPostsAsync */].failure(error));
  }
}

function* watchLoadAllPosts() {
  yield Object(effects_["takeLatest"])(posts["e" /* loadPostsAsync */].request, loadAllPosts);
}

function* postsSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchloadCategories), Object(effects_["fork"])(watchLoadAllPosts)]);
}
// CONCATENATED MODULE: ./sagas/user.tsx





async function loadUserAPI() {
  return await external_axios_default.a.get('/user');
}

function* loadUser() {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI);
    yield Object(effects_["put"])(reducers_user["d" /* loadUserAsync */].success(result.data));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])(reducers_user["d" /* loadUserAsync */].failure(error));
  }
}

function* watchLoadUser() {
  yield Object(effects_["takeEvery"])(reducers_user["a" /* LOAD_USER_REQUSET */], loadUser);
}

async function loginAPI(loginData) {
  return await external_axios_default.a.post(`/user`, loginData);
}

function* login(action) {
  yield Object(effects_["put"])(loadingStart(action.type));

  try {
    const result = yield Object(effects_["call"])(loginAPI, action.payload);
    yield Object(effects_["put"])(reducers_user["e" /* loginAsync */].success(result.data));
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])(reducers_user["e" /* loginAsync */].failure(error));
  }

  yield Object(effects_["put"])(loadingEnd(action.type));
}

function* watchLogin() {
  yield Object(effects_["takeLatest"])(reducers_user["b" /* LOGIN_REQUEST */], login);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLoadUser)]);
}
// CONCATENATED MODULE: ./sagas/index.tsx





external_axios_default.a.defaults.baseURL = "https://gitseob-new-blog-server.herokuapp.com/";
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(userSaga), Object(effects_["call"])(postSaga), Object(effects_["call"])(postsSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.tsx







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vPmt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOGGLE_CONFIRM_POST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_POST_REQUEST; });
/* unused harmony export LOAD_POST_SUCCESS */
/* unused harmony export LOAD_POST_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WRITE_POST_REQUEST; });
/* unused harmony export WRITE_POST_SUCCESS */
/* unused harmony export WRITE_POST_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_POST_REQUEST; });
/* unused harmony export REMOVE_POST_SUCCESS */
/* unused harmony export REMOVE_POST_FAILURE */
/* unused harmony export UPLOAD_IMAGE_REQUEST */
/* unused harmony export UPLOAD_IMAGE_SUCCESS */
/* unused harmony export UPLOAD_IMAGE_FAILURE */
/* unused harmony export toggleConfirmPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadPostAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return writePostAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removePostAsync; });
/* unused harmony export uploadImageAsync */
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i0Yl");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  post: null,
  writeSuccess: -1,
  isEditedPost: false,
  isRemovedPost: false,
  loadErrorReason: null,
  writeErrorReason: null,
  removeErrorReason: null
};
const TOGGLE_CONFIRM_POST = 'post/TOGGLE_CONFIRM_POST';
const LOAD_POST_REQUEST = 'post/LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'post/LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'post/LOAD_POST_FAILURE';
const WRITE_POST_REQUEST = 'post/WRITE_POST_REQUEST';
const WRITE_POST_SUCCESS = 'post/WRITE_POST_SUCCESS';
const WRITE_POST_FAILURE = 'post/WRITE_POST_FAILURE';
const REMOVE_POST_REQUEST = 'post/REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'post/REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'post/REMOVE_POST_FAILURE';
const UPLOAD_IMAGE_REQUEST = 'post/UPLOAD_IMAGE_REQUEST';
const UPLOAD_IMAGE_SUCCESS = 'post/UPLOAD_IMAGE_SUCCESS';
const UPLOAD_IMAGE_FAILURE = 'post/UPLOAD_IMAGE_FAILURE';
const toggleConfirmPost = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TOGGLE_CONFIRM_POST)();
const loadPostAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE)();
const writePostAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(WRITE_POST_REQUEST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE)();
const removePostAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE)();
const uploadImageAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])(UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE)();
const actions = {
  toggleConfirmPost,
  loadPostAsync,
  writePostAsync,
  uploadImageAsync,
  removePostAsync
};
const postReducer = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, {
  [LOAD_POST_REQUEST]: state => _objectSpread({}, state),
  [LOAD_POST_SUCCESS]: (state, {
    payload: post
  }) => _objectSpread(_objectSpread({}, state), {}, {
    post: post
  }),
  [LOAD_POST_FAILURE]: (state, {
    payload: error
  }) => _objectSpread(_objectSpread({}, state), {}, {
    loadErrorReason: error.response ? error.response.data : 'Error!'
  }),
  [WRITE_POST_REQUEST]: state => _objectSpread({}, state),
  [WRITE_POST_SUCCESS]: (state, {
    payload: post
  }) => _objectSpread(_objectSpread({}, state), {}, {
    post: post,
    isEditedPost: post.isEdited ? true : false,
    writeSuccess: post.id
  }),
  [WRITE_POST_FAILURE]: (state, {
    payload: error
  }) => _objectSpread(_objectSpread({}, state), {}, {
    writeErrorReason: error.response ? error.response.data : 'Error!'
  }),
  [REMOVE_POST_REQUEST]: state => _objectSpread({}, state),
  [REMOVE_POST_SUCCESS]: state => _objectSpread(_objectSpread({}, state), {}, {
    isRemovedPost: true
  }),
  [REMOVE_POST_FAILURE]: (state, {
    payload: error
  }) => _objectSpread(_objectSpread({}, state), {}, {
    removeErrorReason: error.response ? error.response.data : 'Error!'
  })
});
/* harmony default export */ __webpack_exports__["d"] = (postReducer);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });