import React, {Component} from 'react'
import Typing from 'react-typing-animation'

class Header extends Component {

  render() {
    return (<div className="header flex flex-column w-100 pt4 pl6 pr6 pb5 tr">

      <div className="mobile-menu flex flex-row item-end w-100 mb4"><span className="underlined">Menu</span></div>

      <div className="desktop-menu">
        <ul className="nav flex flex-wrap flex-row justify-end w-100 mb5">
          <li className="nav-item">
            <a href="#ourlabs">Labs</a>
          </li>
          <li className="nav-item">
            <a href="#thisIsNewbie">This is Newbie</a>
          </li>
          <li className="nav-item">
            <a href="#explore">Explorations</a>
          </li>
          <li className="nav-item">
            <a href="#register">About</a>
          </li>
          <li className="nav-item">
            <a href="#footer">Contact</a>
          </li>
        </ul>

      </div>


      <div>

        <div className="logo flex flex-column justify-between items-start mb4">
          NEWBIE TECH

          <Typing speed={100}>
            <span>
              EXPLORATION LAB</span>
          </Typing>
        </div>

      </div>

    </div>)
  }

}

export default Header
