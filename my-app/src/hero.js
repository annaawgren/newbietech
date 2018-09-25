import React, {Component} from 'react'


class Hero extends Component {


  render() {
    return (<div className="hero flex flex-column w-100 vh-100 pl6 pr6 pt5">


        <div className="hero-quote">
          Facilitated and <br />curated
          creative tech experiences.
          <br />For beginners.
        </div>

        <div className="arduino-img" />
        <div className="chip-img" />

      </div>)
  }

}

export default Hero
