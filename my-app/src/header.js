import React, {Component} from 'react'
import Typing from 'react-typing-animation'

class Header extends Component {

  render() {
    return (<div className="header flex flex-wrap w-100 pa5">

      <ul className="nav flex flex-wrap flex-row justify-end w-100 mb5">
        <li class="nav-item">
          <a class="nav-link" href="#ourlabs">Labs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#thisIsNewbie">This is Newbie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#explore">Explorations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#register">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contact</a>
        </li>
      </ul>

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
