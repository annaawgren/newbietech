module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/About.js";

var About = function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "About!");
};

/***/ }),

/***/ "./components/ExploreAndLearn.js":
/*!***************************************!*\
  !*** ./components/ExploreAndLearn.js ***!
  \***************************************/
/*! exports provided: ExploreAndLearn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreAndLearn", function() { return ExploreAndLearn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/ExploreAndLearn.js";

var ExploreAndLearn = function ExploreAndLearn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Explore and learn with the curiosity and fearlessness of a newbie.");
};

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Footer.js";

var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Footer");
};

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Header.js";


var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-1906103565" + " " + "fixed w-full bg-lightpink p-20 relative z-10 flex flex-row justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "53",
    height: "65",
    viewBox: "0 0 53 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-1906103565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M42.015 53.5229C42.015 53.8049 41.827 54.0869 41.357 54.0869H35.247C34.871 54.0869 34.683 53.8049 34.683 53.5229V47.9769H29.137C28.761 47.9769 28.573 47.7889 28.573 47.3189V41.8669H23.027C22.651 41.8669 22.463 41.6789 22.463 41.2089V29.5529H16.917C16.541 29.5529 16.259 29.3649 16.259 28.9889V17.3328H11.371V53.5229C11.371 53.8049 11.183 54.0869 10.807 54.0869H4.697C4.227 54.0869 4.039 53.8049 4.039 53.5229V4.45485C4.039 4.07885 4.227 3.89085 4.697 3.89085H10.807C11.183 3.89085 11.371 4.07885 11.371 4.45485V10.0009H16.917C17.387 10.0009 17.575 10.2829 17.575 10.6589V16.1109H23.027C23.497 16.1109 23.591 16.3929 23.591 16.7689V28.4249H29.137C29.513 28.4249 29.795 28.5189 29.795 28.9889V40.6449H34.683V4.45485C34.683 4.07885 34.871 3.89085 35.247 3.89085H41.357C41.827 3.89085 42.015 4.07885 42.015 4.45485V53.5229ZM48.783 64.8969C51.603 64.8969 52.825 63.3929 52.825 60.8549V11.7869C52.825 10.4709 52.449 9.43685 51.885 8.77885L45.305 2.29285C43.801 0.976853 42.109 0.224852 40.135 0.224852H35.247C32.145 0.224852 31.017 1.35285 31.017 4.45485V18.8369L14.661 2.29285C13.345 0.882849 11.747 0.224852 9.491 0.224852H4.697C1.595 0.224852 0.467 1.35285 0.467 4.45485V52.1129C0.467 54.1809 1.125 55.9669 2.629 57.4709L9.021 63.8629C9.773 64.6149 10.713 64.8969 12.029 64.8969H18.233C20.959 64.8969 22.181 63.3929 22.181 60.8549V46.2849L39.571 63.8629C40.417 64.6149 41.263 64.8969 42.579 64.8969H48.783Z",
    fill: "#4B0A40",
    className: "jsx-1906103565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-1906103565" + " " + "ham flex flex-col h-6 justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "64",
    height: "31",
    viewBox: "0 0 64 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-1906103565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    x1: "3.48413",
    y1: "2.82001",
    x2: "60.992",
    y2: "2.82",
    stroke: "#4B0A40",
    "stroke-width": "5",
    "stroke-linecap": "round",
    className: "jsx-1906103565" + " " + " w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    x1: "3.48413",
    y1: "15.32",
    x2: "60.992",
    y2: "15.32",
    stroke: "#4B0A40",
    "stroke-width": "5",
    "stroke-linecap": "round",
    className: "jsx-1906103565" + " " + "hamlineMiddle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    x1: "3.48413",
    y1: "27.82",
    x2: "60.992",
    y2: "27.82",
    stroke: "#4B0A40",
    "stroke-width": "5",
    "stroke-linecap": "round",
    className: "jsx-1906103565" + " " + "hamlineBtm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1906103565",
    __self: this
  }, "button.jsx-1906103565{pointer-events:all;margin-left:20;}button.jsx-1906103565:hover line.jsx-1906103565{-webkit-transform:translateX(2px);-ms-transform:translateX(2px);transform:translateX(2px);-webkit-transition:300ms ease;transition:300ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hYWdyZW4vd3d3L25ld2JpZXRlY2gvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUc4QixBQUlPLG1CQUhYLGVBQ2pCLHdEQUd3QixvREFDeEIiLCJmaWxlIjoiL1VzZXJzL2FubmFhZ3Jlbi93d3cvbmV3YmlldGVjaC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBIZWFkZXIgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgdy1mdWxsIGJnLWxpZ2h0cGluayBwLTIwIHJlbGF0aXZlIHotMTAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxzdmdcbiAgICAgICAgd2lkdGg9XCI1M1wiXG4gICAgICAgIGhlaWdodD1cIjY1XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA1MyA2NVwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk00Mi4wMTUgNTMuNTIyOUM0Mi4wMTUgNTMuODA0OSA0MS44MjcgNTQuMDg2OSA0MS4zNTcgNTQuMDg2OUgzNS4yNDdDMzQuODcxIDU0LjA4NjkgMzQuNjgzIDUzLjgwNDkgMzQuNjgzIDUzLjUyMjlWNDcuOTc2OUgyOS4xMzdDMjguNzYxIDQ3Ljk3NjkgMjguNTczIDQ3Ljc4ODkgMjguNTczIDQ3LjMxODlWNDEuODY2OUgyMy4wMjdDMjIuNjUxIDQxLjg2NjkgMjIuNDYzIDQxLjY3ODkgMjIuNDYzIDQxLjIwODlWMjkuNTUyOUgxNi45MTdDMTYuNTQxIDI5LjU1MjkgMTYuMjU5IDI5LjM2NDkgMTYuMjU5IDI4Ljk4ODlWMTcuMzMyOEgxMS4zNzFWNTMuNTIyOUMxMS4zNzEgNTMuODA0OSAxMS4xODMgNTQuMDg2OSAxMC44MDcgNTQuMDg2OUg0LjY5N0M0LjIyNyA1NC4wODY5IDQuMDM5IDUzLjgwNDkgNC4wMzkgNTMuNTIyOVY0LjQ1NDg1QzQuMDM5IDQuMDc4ODUgNC4yMjcgMy44OTA4NSA0LjY5NyAzLjg5MDg1SDEwLjgwN0MxMS4xODMgMy44OTA4NSAxMS4zNzEgNC4wNzg4NSAxMS4zNzEgNC40NTQ4NVYxMC4wMDA5SDE2LjkxN0MxNy4zODcgMTAuMDAwOSAxNy41NzUgMTAuMjgyOSAxNy41NzUgMTAuNjU4OVYxNi4xMTA5SDIzLjAyN0MyMy40OTcgMTYuMTEwOSAyMy41OTEgMTYuMzkyOSAyMy41OTEgMTYuNzY4OVYyOC40MjQ5SDI5LjEzN0MyOS41MTMgMjguNDI0OSAyOS43OTUgMjguNTE4OSAyOS43OTUgMjguOTg4OVY0MC42NDQ5SDM0LjY4M1Y0LjQ1NDg1QzM0LjY4MyA0LjA3ODg1IDM0Ljg3MSAzLjg5MDg1IDM1LjI0NyAzLjg5MDg1SDQxLjM1N0M0MS44MjcgMy44OTA4NSA0Mi4wMTUgNC4wNzg4NSA0Mi4wMTUgNC40NTQ4NVY1My41MjI5Wk00OC43ODMgNjQuODk2OUM1MS42MDMgNjQuODk2OSA1Mi44MjUgNjMuMzkyOSA1Mi44MjUgNjAuODU0OVYxMS43ODY5QzUyLjgyNSAxMC40NzA5IDUyLjQ0OSA5LjQzNjg1IDUxLjg4NSA4Ljc3ODg1TDQ1LjMwNSAyLjI5Mjg1QzQzLjgwMSAwLjk3Njg1MyA0Mi4xMDkgMC4yMjQ4NTIgNDAuMTM1IDAuMjI0ODUySDM1LjI0N0MzMi4xNDUgMC4yMjQ4NTIgMzEuMDE3IDEuMzUyODUgMzEuMDE3IDQuNDU0ODVWMTguODM2OUwxNC42NjEgMi4yOTI4NUMxMy4zNDUgMC44ODI4NDkgMTEuNzQ3IDAuMjI0ODUyIDkuNDkxIDAuMjI0ODUySDQuNjk3QzEuNTk1IDAuMjI0ODUyIDAuNDY3IDEuMzUyODUgMC40NjcgNC40NTQ4NVY1Mi4xMTI5QzAuNDY3IDU0LjE4MDkgMS4xMjUgNTUuOTY2OSAyLjYyOSA1Ny40NzA5TDkuMDIxIDYzLjg2MjlDOS43NzMgNjQuNjE0OSAxMC43MTMgNjQuODk2OSAxMi4wMjkgNjQuODk2OUgxOC4yMzNDMjAuOTU5IDY0Ljg5NjkgMjIuMTgxIDYzLjM5MjkgMjIuMTgxIDYwLjg1NDlWNDYuMjg0OUwzOS41NzEgNjMuODYyOUM0MC40MTcgNjQuNjE0OSA0MS4yNjMgNjQuODk2OSA0Mi41NzkgNjQuODk2OUg0OC43ODNaXCJcbiAgICAgICAgICBmaWxsPVwiIzRCMEE0MFwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGFtIGZsZXggZmxleC1jb2wgaC02IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCI2NFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzFcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQgMzFcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0zLzRcIlxuICAgICAgICAgICAgeDE9XCIzLjQ4NDEzXCJcbiAgICAgICAgICAgIHkxPVwiMi44MjAwMVwiXG4gICAgICAgICAgICB4Mj1cIjYwLjk5MlwiXG4gICAgICAgICAgICB5Mj1cIjIuODJcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiIzRCMEE0MFwiXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI1XCJcbiAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhbWxpbmVNaWRkbGVcIlxuICAgICAgICAgICAgeDE9XCIzLjQ4NDEzXCJcbiAgICAgICAgICAgIHkxPVwiMTUuMzJcIlxuICAgICAgICAgICAgeDI9XCI2MC45OTJcIlxuICAgICAgICAgICAgeTI9XCIxNS4zMlwiXG4gICAgICAgICAgICBzdHJva2U9XCIjNEIwQTQwXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIlxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFtbGluZUJ0bVwiXG4gICAgICAgICAgICB4MT1cIjMuNDg0MTNcIlxuICAgICAgICAgICAgeTE9XCIyNy44MlwiXG4gICAgICAgICAgICB4Mj1cIjYwLjk5MlwiXG4gICAgICAgICAgICB5Mj1cIjI3LjgyXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiM0QjBBNDBcIlxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNVwiXG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIGxpbmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/annaagren/www/newbietech/components/Header.js */"));
};

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Hero.js";

var Hero = function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "fixed w-full h-full bg-lightpink p-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Hero");
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Layout.js";




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), props.description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: props.description,
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:type",
    content: "business.business",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: "NewbieTech",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://newbietech.io",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: "https://newbietech.io/static/favicons/favicon-196x196.png/",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image:width",
    content: "196",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image:height",
    content: "196",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: "Facilitated and hands on creative tech explorations. For beginners.",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "../static/favicons/apple-touch-icon.png",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "../static/favicons/favicon-32x32.png",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "../static/favicons/favicon-16x16.png",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#2b5797",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffffff",
    className: "jsx-1205660664",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1205660664" + " " + "antialiased",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1205660664",
    __self: this
  }, "body,html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hYWdyZW4vd3d3L25ld2JpZXRlY2gvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBSW9DLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvYW5uYWFncmVuL3d3dy9uZXdiaWV0ZWNoL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3RhY2h5b25zQDQuMTAuMC9jc3MvdGFjaHlvbnMubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICl9XG4gICAgICAgXG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImJ1c2luZXNzLmJ1c2luZXNzXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJOZXdiaWVUZWNoXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9uZXdiaWV0ZWNoLmlvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9uZXdiaWV0ZWNoLmlvL3N0YXRpYy9mYXZpY29ucy9mYXZpY29uLTE5NngxOTYucG5nL1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTk2XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMTk2XCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiRmFjaWxpdGF0ZWQgYW5kIGhhbmRzIG9uIGNyZWF0aXZlIHRlY2ggZXhwbG9yYXRpb25zLlxuICAgICAgICAgIEZvciBiZWdpbm5lcnMuXCJcbiAgICAgICAgLz5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIvPlxuPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiLz5cbjxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIi8+XG48bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiLz5cbjxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIvPlxuPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMyYjU3OTdcIi8+XG48bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50aWFsaWFzZWRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/annaagren/www/newbietech/components/Layout.js */"));
};

/***/ }),

/***/ "./components/LoveToExplore.js":
/*!*************************************!*\
  !*** ./components/LoveToExplore.js ***!
  \*************************************/
/*! exports provided: LoveToExplore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoveToExplore", function() { return LoveToExplore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/LoveToExplore.js";

var LoveToExplore = function LoveToExplore(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Creative technologies we love to explore");
};

/***/ }),

/***/ "./components/MachineLearning.js":
/*!***************************************!*\
  !*** ./components/MachineLearning.js ***!
  \***************************************/
/*! exports provided: MachineLearning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineLearning", function() { return MachineLearning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/MachineLearning.js";

var MachineLearning = function MachineLearning(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "MachineLearning Gif goes in here");
};

/***/ }),

/***/ "./components/Partner.js":
/*!*******************************!*\
  !*** ./components/Partner.js ***!
  \*******************************/
/*! exports provided: Partner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partner", function() { return Partner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Partner.js";

var Partner = function Partner(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Partner up!");
};

/***/ }),

/***/ "./components/Spinner.js":
/*!*******************************!*\
  !*** ./components/Spinner.js ***!
  \*******************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Spinner.js";

var Spinner = function Spinner(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Spinner!");
};

/***/ }),

/***/ "./components/StayTuned.js":
/*!*********************************!*\
  !*** ./components/StayTuned.js ***!
  \*********************************/
/*! exports provided: StayTuned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StayTuned", function() { return StayTuned; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/StayTuned.js";

var StayTuned = function StayTuned() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Stay tuned and sign up!");
};

/***/ }),

/***/ "./components/ThisIsNewbie.js":
/*!************************************!*\
  !*** ./components/ThisIsNewbie.js ***!
  \************************************/
/*! exports provided: ThisIsNewbie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThisIsNewbie", function() { return ThisIsNewbie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/ThisIsNewbie.js";

var ThisIsNewbie = function ThisIsNewbie(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "This is Newbie Tech");
};

/***/ }),

/***/ "./components/WhatWeDo.js":
/*!********************************!*\
  !*** ./components/WhatWeDo.js ***!
  \********************************/
/*! exports provided: WhatWeDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatWeDo", function() { return WhatWeDo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/WhatWeDo.js";

var WhatWeDo = function WhatWeDo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "This is what we do");
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_ExploreAndLearn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExploreAndLearn */ "./components/ExploreAndLearn.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_LoveToExplore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoveToExplore */ "./components/LoveToExplore.js");
/* harmony import */ var _components_MachineLearning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MachineLearning */ "./components/MachineLearning.js");
/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Partner */ "./components/Partner.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.js");
/* harmony import */ var _components_StayTuned__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/StayTuned */ "./components/StayTuned.js");
/* harmony import */ var _components_ThisIsNewbie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ThisIsNewbie */ "./components/ThisIsNewbie.js");
/* harmony import */ var _components_WhatWeDo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/WhatWeDo */ "./components/WhatWeDo.js");
var _jsxFileName = "/Users/annaagren/www/newbietech/pages/index.js";















var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    title: "NewbieTech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_6__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ThisIsNewbie__WEBPACK_IMPORTED_MODULE_12__["ThisIsNewbie"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WhatWeDo__WEBPACK_IMPORTED_MODULE_13__["WhatWeDo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_2__["About"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExploreAndLearn__WEBPACK_IMPORTED_MODULE_3__["ExploreAndLearn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoveToExplore__WEBPACK_IMPORTED_MODULE_7__["LoveToExplore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MachineLearning__WEBPACK_IMPORTED_MODULE_8__["MachineLearning"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Partner__WEBPACK_IMPORTED_MODULE_9__["Partner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StayTuned__WEBPACK_IMPORTED_MODULE_11__["StayTuned"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/annaagren/www/newbietech/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map