import { useEffect } from "react";
import Matter from "matter-js";

export const Shapes = function(props) {
  useEffect(() => {
    const {
      Engine,
      Render,
      Bodies,
      World,
      MouseConstraint,
      Composites
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
      return Bodies.circle(x, y, 20 + 20 * Math.random(), {
        // frictionAir: 0.1,
        render: {
          fillStyle: "red"
        }
      });
    };

    // const bigBall = Bodies.circle(w / 2, h / 2, 200, {
    //   isStatic: true,
    //   render: {
    //     fillStyle: "#ffffff"
    //   }
    // });

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

    const initialShapes = Composites.stack(50, 50, 15, 5, 40, 40, (x, y) => {
      return createShape(x, y);
    });

    World.add(engine.world, [
      ground,
      ceiling,
      leftWall,
      rightWall,
      mouseControl,
      initialShapes
    ]);

    document.addEventListener("click", event => {
      const shape = createShape(event.pageX, event.pageY);
      World.add(engine.world, shape);
    });

    Engine.run(engine);
    Render.run(renderer);
  });

  return <section className="shapes" />;
};
