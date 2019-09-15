import React, { Component } from "react";

const Marquee = props => {
  const title = (
    <span>
      <span className="bomb" role="img" aria-label="Bomb">
        💥{" "}
      </span>
      MACHINE LEARNING AS A CREATIVE TOOL{" "}
      <span className="bomb" role="img" aria-label="Bomb">
        {" "}
        💥{" "}
      </span>
      Malmö October 27th 2019{" "}
      <span className="bomb" role="img" aria-label="Bomb">
        💥{" "}
      </span>{" "}
      Limited seats – sign up now!{" "}
    </span>
  );

  const marqueeText = new Array(100).fill(title);

  return <div>{marqueeText}</div>;
};

class HeaderBanner extends Component {
  render() {
    return (
      <div className="banner w-100 tc">
        <a href="#ourlabs" class="marquee mix-difference">
          <span className="marquee-animator">
            <Marquee />
          </span>
        </a>
      </div>
    );
  }
}

export default HeaderBanner;
