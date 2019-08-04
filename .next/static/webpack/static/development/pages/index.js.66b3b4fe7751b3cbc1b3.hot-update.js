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
        World = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.World,
        Mouse = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Mouse,
        MouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.MouseConstraint,
        Composites = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Composites;
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
        background: "#f5e6e8",
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });

    var createShape = function createShape(x, y) {
      return Bodies.circle(x, y, 20, {
        // frictionAir: 0.1,
        render: {
          fillStyle: "red" // sprite: {
          //   texture: "../static/images/newbielogo.png"
          // }

        }
      });
    }; // const newbieLogo = Bodies.rectangle(50, 50, 300, 189, {
    //   render: {
    //     sprite: {
    //       texture: "../static/images/newbielogo.png"
    //     }
    //   }
    // });
    // const rectangleGreen = Bodies.rectangle(250, 50, 300, 80, {
    //   render: {
    //     fillStyle: "#69E0C2"
    //   },
    //   frictionAir: 0.05
    // });
    // const rectanglePink = Bodies.rectangle(250, 50, 300, 80, {
    //   render: {
    //     fillStyle: "#ffaabb"
    //   },
    //   frictionAir: 0.01
    // });


    var circle = Bodies.circle(150, 250, 100, {
      render: {
        fillStyle: "#FF5167"
      },
      frictionAir: 0.09
    });
    var wallOptions = {
      isStatic: true,
      render: {
        visible: false
      }
    };
    var ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions);
    var ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions);
    var leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions);
    var rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions);
    var mouseControl = MouseConstraint.create(engine, {
      element: sectionTag,
      constraint: {
        render: {
          visible: false
        }
      }
    });
    mouseControl.mouse.element.removeEventListener("mousewheel", mouseControl.mouse.mousewheel);
    mouseControl.mouse.element.removeEventListener("DOMMouseScroll", mouseControl.mouse.mousewheel);
    mouseControl.mouse.element.removeEventListener("touchmove", mouseControl.mouse.mousemove);
    mouseControl.mouse.element.removeEventListener("touchstart", mouseControl.mouse.mousedown);
    mouseControl.mouse.element.removeEventListener("touchend", mouseControl.mouse.mouseup);
    var initialShapes = Composites.stack(50, 50, 30, 20, 100, 50, function (x, y) {
      return createShape(x, y);
    });
    World.add(engine.world, [ground, ceiling, leftWall, rightWall, mouseControl, initialShapes, // rectangleGreen,
    // rectanglePink,
    circle]); // document.addEventListener("click", event => {
    //   const shape = createShape(event.pageX, event.pageY);
    //   World.add(engine.world, shape);
    // });

    Engine.run(engine);
    Render.run(renderer);
    window.addEventListener("deviceorientation", function (event) {
      engine.world.gravity.x = event.gamma / 30;
      engine.world.gravity.y = event.beta / 30;
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "shapes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  });
};

/***/ })

})
//# sourceMappingURL=index.js.66b3b4fe7751b3cbc1b3.hot-update.js.map