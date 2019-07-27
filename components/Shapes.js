import { useEffect } from "react";
import Matter from "matter-js";

export const Shapes = function(props) {
  useEffect(() => {
    const {
      Engine,
      Render,
      Bodies,
      World,
      Mouse,
      MouseConstraint
      // Composites
    } = Matter;

    const sectionTag = document.querySelector("section.shapes");

    const w = window.innerWidth;
    const h = window.innerHeight;

    const engine = Engine.create();
    const renderer = Render.create({
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

    const createShape = (x, y) => {
      return Bodies.rectangle(x, y, 20, 20, {
        // frictionAir: 0.1,
        render: {
          // fillStyle: "red"
          sprite: {
            texture: "../static/images/newbielogo.png"
          }
        }
      });
    };

    const newbieLogo = Bodies.rectangle(50, 50, 300, 189, {
      render: {
        sprite: {
          texture: "../static/images/newbielogo.png"
        }
      }
    });

    const rectangleGreen = Bodies.rectangle(250, 50, 300, 80, {
      render: {
        fillStyle: "#69E0C2"
      },
      frictionAir: 0.05
    });

    const rectanglePink = Bodies.rectangle(250, 50, 300, 80, {
      render: {
        fillStyle: "#ffaabb"
      },
      frictionAir: 0.01
    });
    const circle = Bodies.circle(150, 250, 100, {
      render: {
        fillStyle: "#FF5167"
      },
      frictionAir: 0.09
    });

    const wallOptions = {
      isStatic: true,
      render: {
        visible: false
      }
    };

    const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions);
    const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions);
    const rightWall = Bodies.rectangle(
      w + 50,
      h / 2,
      100,
      h + 100,
      wallOptions
    );

    const mouseControl = MouseConstraint.create(engine, {
      element: sectionTag,
      constraint: {
        render: {
          visible: false
        }
      }
    });

    mouseControl.mouse.element.removeEventListener(
      "mousewheel",
      mouseControl.mouse.mousewheel
    );
    mouseControl.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseControl.mouse.mousewheel
    );

    mouseControl.mouse.element.removeEventListener(
      "touchmove",
      mouseControl.mouse.mousemove
    );
    mouseControl.mouse.element.removeEventListener(
      "touchstart",
      mouseControl.mouse.mousedown
    );
    mouseControl.mouse.element.removeEventListener(
      "touchend",
      mouseControl.mouse.mouseup
    );

    // const initialShapes = Composites.stack(50, 50, 15, 3, 100, 150, (x, y) => {
    //   return createShape(x, y);
    // });

    World.add(engine.world, [
      ground,
      ceiling,
      leftWall,
      rightWall,
      mouseControl,
      // initialShapes,
      rectangleGreen,
      rectanglePink,
      circle,
      newbieLogo
    ]);

    // document.addEventListener("click", event => {
    //   const shape = createShape(event.pageX, event.pageY);
    //   World.add(engine.world, shape);
    // });

    Engine.run(engine);
    Render.run(renderer);

    window.addEventListener("deviceorientation", event => {
      engine.world.gravity.x = event.gamma / 30;
      engine.world.gravity.y = event.beta / 30;
    });
  });

  return <section className="shapes" />;
};
