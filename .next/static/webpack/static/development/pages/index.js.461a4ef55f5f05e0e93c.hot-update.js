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
var _jsxFileName = "/Users/annaagren/www/newbietech/components/Shapes.js";


var Shapes = function Shapes(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var sectionTag = document.querySelector("section.shapes");
    console.log(sectionTag);
    var engine = Matter.Engine.create();
    var renderer = Matter.Render.create({
      element: sectionTag,
      engine: engine
    });
    Matter.Engine.run(engine);
    Matter.Render.run(renderer);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "shapes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Shapes");
};

/***/ })

})
//# sourceMappingURL=index.js.461a4ef55f5f05e0e93c.hot-update.js.map