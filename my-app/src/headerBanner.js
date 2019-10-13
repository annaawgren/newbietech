import React, { Component } from "react";

const Marquee = props => {
  const title = (
    <span>
      <span className="bomb" role="img" aria-label="Bomb">
        💥{" "}
      </span>
      <span className="white"> FREE LAB: </span> MACHINE LEARNING AS A CREATIVE
      TOOL{" "}
      <span className="bomb" role="img" aria-label="Bomb">
        {" "}
        💥{" "}
      </span>
      Malmö October 27th 2019{" "}
      <span className="bomb" role="img" aria-label="Bomb">
        💥{" "}
      </span>{" "}
      Limited seats – <span className="fully-booked">FULLY BOOKED!</span>{" "}
    </span>
  );

  const marqueeText = new Array(100).fill(title);

  return <div>{marqueeText}</div>;
};

class HeaderBanner extends Component {
  render() {
    return (
      <div className="banner marquee w-100 tc">
        <a href="#ourlabs" class="">
          <span className="marquee-animator">
            <Marquee />
          </span>
        </a>
      </div>
    );
  }
}

export default HeaderBanner;
