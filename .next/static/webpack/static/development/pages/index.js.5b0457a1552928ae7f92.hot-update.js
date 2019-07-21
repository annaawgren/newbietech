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
    var Engine = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Engine,
        Render = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render,
        Bodies = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Bodies,
        World = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.World;
    var sectionTag = document.querySelector("section.shapes");
    var w = window.innerWidth;
    var h = window.innerHeight;
    var engine = Engine.create();
    var renderer = Render.create({
      element: sectionTag,
      engine: engine,
      options: {
        height: h,
        width: w,
        background: "#ffaabb",
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });

    var createShape = function createShape(x, y) {
      return Bodies.circle(x, y, 20 + 20 * Math.random(), {
        isStatic: true,
        render: {
          fillStyle: "red"
        }
      });
    };

    var bigBall = Bodies.circle(w / 2, h / 2);
    document.addEventListener("click", function (event) {
      var shape = createShape(event.pageX, event.pageY);
      World.add(engine.world, shape);
    });
    Engine.run(engine);
    Render.run(renderer);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "shapes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  });
};

/***/ })

})
//# sourceMappingURL=index.js.5b0457a1552928ae7f92.hot-update.js.map