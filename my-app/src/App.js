import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"


import StartPage from './startpage.js'
import HyperIsland from './hyperisland.js'
import './hyperisland.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={StartPage} />
          <Route path="/hyperisland" component={HyperIsland} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
