import React, {Component} from 'react'
import Typing from 'react-typing-animation'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mobileMenuVisible: false
    }
  }

  handleMenuClick = () => {
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible })
  }



  render() {
    return (<div className="header flex flex-column w-100 pt4 pl6 pr6 pb5 tr" id="header">

      <div className="mobileMenu-container">

        <div onClick={this.handleMenuClick} className="mobile-menu flex flex-row item-end w-100 mb5"><span className="underlined">Menu</span></div>
        <div className={`contact-info ${this.state.mobileMenuVisible ? "visible" : "hidden"}`}>

          <div onClick={this.handleMenuClick} className="close-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19">
              <g fill="none" stroke="#000" stroke-linecap="square" stroke-width="3" transform="translate(3 3)">
                <path d="M0,0 L15,13"/>
                <path d="M0,0 L15,13" transform="matrix(1 0 0 -1 0 13)"/>
              </g>
            </svg>
          </div>

          <ul className="nav flex flex-wrap flex-column justify-end items-end w-100 mb5">
            <li className="nav-item-mobil pt5">
              <a href="#ourlabs">Labs</a>
            </li>
            <li className="nav-item-mobil pt2">
              <a href="#thisIsNewbie">Newbie tech</a>
            </li>
            <li className="nav-item-mobil pt2">
              <a href="#partner">Partner up</a>
            </li>

            <li className="nav-item-mobil pt5">
              <a href="#about">About</a>
            </li>
            <li className="nav-item-mobil pt2">
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="desktop-menu">
        <ul className="nav flex flex-wrap flex-row justify-end w-100 mb5">
          <li className="nav-item nav-underlined">
            <a href="#ourlabs">Labs</a>
          </li>
          <li className="nav-item nav-underlined">
            <a href="#thisIsNewbie">This is Newbie</a>
          </li>
          <li className="nav-item nav-underlined">
            <a href="#exploreFacts">Explorations</a>
          </li>
          <li className="nav-item nav-underlined">
            <a href="#about">About</a>
          </li>
          <li className="nav-item nav-underlined">
            <a href="#footer">Contact</a>
          </li>
        </ul>

      </div>




        <div className="logo flex flex-column justify-between items-start mb4">
          NEWBIE TECH
          {/* <br />
          EXPLORATION LAB */}

          <Typing speed={100}>
            <span>
              EXPLORATION LAB</span>
          </Typing>
        </div>



    </div>)
  }

}

export default Header
