webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Shapes.js":
/*!******************************!*\
  !*** ./components/Shapes.js ***!
  \******************************/
/*! exports provided: Shapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shapes", function() { return Shapes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Shapes.js";



var Shapes = function Shapes(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var sectionTag = document.querySelector("section.shapes");
    console.log(sectionTag);
    var w = window.innerWidth;
    var h = window.innerHeight;
    var engine = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Engine.create();
    var renderer = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.create({
      element: sectionTag,
      engine: engine,
      options: {
        height: h,
        width: w,
        background: "white"
      }
    });
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Engine.run(engine);
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.run(renderer);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "shapes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
};

/***/ })

})
//# sourceMappingURL=index.js.af680cb4366d01612c31.hot-update.js.map