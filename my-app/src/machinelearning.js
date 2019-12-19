import React, { Component } from "react";

class MachineLearning extends Component {
  render() {
    return (
      <div
        className="machinelearning flex flex-column w-100 tl pl6 items-start"
        id="machinelearning"
      >
        <div className="labtxt-container flex flex-column justify-center items-left">
          <div className="labnumber-hl mb4 ">
            Coming <br /> soon!
          </div>
          <div className="labtxt-hl turqoise">
            Machine Learning as a creative tool
          </div>

          <p>
            <span className="turqoise">What:</span> Learn the very basics of
            Machine Learning – and how to use it as a creative tool. You will
            explore image, speech and face recognition, use audio input and the
            camera in your computer. You will create a simple game that you
            control with your voice or body. Bring your laptop.
            <br />
            <span className="point" role="img" aria-label="Bomb">
              👉
            </span>{" "}
            <span className="turqoise">
              No prior knowledge or coding skills needed!
            </span>{" "}
            <span className="point" role="img" aria-label="Bomb">
              👈
            </span>
          </p>

          {/* <p>
            <span className="turqoise">When:</span> Sunday October 27th 2019, at
            13.00-18.00. <span className="turqoise">Where:</span>{" "}
            <a
              className="white"
              href="https://earthpeople.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="underlined-link">Earth People</span>, Malmö.
            </a>{" "}
            <span className="turqoise">Limited seats – sign up below!</span>
          </p> */}

          <a
            className="button mt5 mb5 flex justify-center items-center"
            href="mailto:hello@newbietech.io?subject=Yes!%20Sign%20me%20up%20for%20updates%20on%20the%20Machine%20Learning%20Lab%20pls&body="
          >
            Sign up & stay tuned!
          </a>
        </div>
      </div>
    );
  }
}

export default MachineLearning;
