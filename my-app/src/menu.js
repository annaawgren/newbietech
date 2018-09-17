import React, {Component} from 'react'

class Menu extends Component {

  render() {
    return (<div className="menu pa4 vh-50 w100 flex flew-wrap flex-column">

      <div className="box bg-pink pa3 pr3 pl3 w-25">
        <a href="#ourLabs">
          One day labs – now in Stockholm
        </a>
      </div>

      <div className="border-box">
        {/* First row */}

        <div className="box flex flex-row justify-start w-100 pa3">

          <a className="labinfo border" href="#ourLabs">
            Experience based & hands on
          </a>

          <a className="labinfo border" href="#Machinelearning">
            Prelaunch Lab: Machine learning
          </a>

          <a className="labinfo border" href="#Explorations">
            Explorations
          </a>

        </div>

        {/* 2nd row */}
        <div className="box flex flex-row flex-wrap content-start w-100 pa3">

          <a className="labinfo border" href="#ourLabs">
            Analogue & Digital
          </a>

          <a className="labinfo border" href="#Machinelearning">
            Build interactive wearables
          </a>

          <a className="pl3 pr3 self-end" href="#Explorations">
            Facilitated & Curated
          </a>

        </div>

        {/* Third row */}
        <div className="box flex flex-row flex-wrap content-start w-100 pa3">

          <a className="pl3 pr3" href="#ourLabs">
            About
          </a>

          <a className="pl3 pr3" href="#Machinelearning">
            Collaborative & Social
          </a>

          <a className="pl3 pr3 self-end" href="#Explorations">
            No previous coding skills needed
          </a>

        </div>

      </div>

      <div className="box bg-pink pa3 pr3 pl3 w-25 self-end">
        Keep me updated!
      </div>

    </div>)
  }

}

export default Menu
