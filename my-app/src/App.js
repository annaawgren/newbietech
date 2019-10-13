import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StartPage from "./startpage.js";
import Download from "./download.js";
import "./hyperisland.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={StartPage} />
          <Route path="/download" component={Download} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
