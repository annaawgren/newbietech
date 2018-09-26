import React, {Component} from 'react'

class Menu extends Component {

  render() {
    return (<div className="hero-menu flex flew-wrap flex-column pl6 pr6 vh-30 w-100">

      <div className="hero-menu-container desktop-view flex flex-column w-100">
        <div className="flex flex-row flex-wrap items-stretch w-100">
          <a href="#ourLabs" className="hero-menu-item item1 fab-bg pa3 w-20">
            One day labs
          </a>
          <a href="#machinelearning" className="hero-menu-item item2 pa3 w-50">
            Free prelaunch: Explore Machine learning
          </a>
          <a href="#ourLabs" className="hero-menu-item item3 fab-bg pa3 w-30">
            Now in Stockholm
          </a>
        </div>

        <div className="flex flex-row flex-wrap items-stretch w-100">
          <a href="#ourLabs" className="hero-menu-item item4 pa3 w-50">
            Upcoming: Build interactive wearables
          </a>
          <a href="#ourLabs" className="hero-menu-item item5 pa3 w-50">
            No previous coding skills needed!
          </a>
        </div>
      </div>

      <div className="flex w-100 flex-column items-end">
        <div className="signup-button pa-container redishpink-bg pa3">
          <a href="#newsletter">
            Keep me posted >>>
          </a>
        </div>
      </div>

    </div>)
  }

}

export default Menu
