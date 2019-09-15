import React, { Component } from "react";

class MachineLearning extends Component {
  render() {
    return (
      <div
        className="machinelearning flex flex-column w-100 tl pl6 items-start"
        id="machinelearning"
      >
        <div className="labtxt-container flex flex-column justify-center items-left">
          <div className="labnumber-hl mb4">19.10.27</div>
          <div className="labtxt-hl turqoise">
            Machine Learning as a creative tool
          </div>

          <p>
            <span className="turqoise">What:</span> Learn the very basics of
            Machine Learning – and how to use it as a creative tool. You will
            explore image, speech and face recognition, use audio input and the
            camera in your computer. You will learn how to create a simple game
            that you control with your body or voice. Bring your laptop. No
            prior knowledge or coding skills needed – and there will be fika!
          </p>

          <p>
            <span className="turqoise">When:</span> Sunday October 27th 2019, at
            13.00-18.00.
          </p>
          <p>
            <span className="turqoise">Where:</span>{" "}
            <a
              className="white"
              href="https://earthpeople.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Earth People, Snapperupsgatan 2B, Malmö
            </a>{" "}
          </p>

          <a
            className="button mt5 mb5 flex justify-center items-center"
            href="mailto:hello@newbietech.io?Subject=Sign me up for some machine learning!"
          >
            Sign me up!
          </a>
        </div>
      </div>
    );
  }
}

export default MachineLearning;
