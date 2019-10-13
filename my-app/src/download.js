import React, { Component } from "react";

import "./hyperisland.css";

class Download extends Component {
  render() {
    return (
      <div className="download-bg">
        <a
          className="download"
          href="https://www.dropbox.com/s/54aa79ltheyudyo/DOWNLOAD_ML_HyperIsland.zip?dl=0"
          target="blank"
        >
          <span className="download-span">Download</span>{" "}
        </a>
      </div>
    );
  }
}

export default Download;
