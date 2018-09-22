import React, {Component} from 'react'

class NewMenu extends Component {

  render() {
    return (<div className="menu flex flew-wrap flex-column pl6 pr6 vh-50 w-100">



      <div className="desktop-view-menu flex flex-row flex-wrap w-100">

        <div className="flex w-100">
          <div className="onedaylabs pa-container redishpink-bg pa3 w-40">
            <a href="#ourLabs">
              One day labs – now in Stockholm
            </a>
          </div>
        </div>


        <div className="menu-container flex flex-column w-100 justify-between">
          <div className="flex">
            <a href="#thisIsNewbie" className="pa-container pa3 w-30 border-right">
              Experience based & hands on
            </a>
            <a href="#ourLabs" className="pa-container pa3 w-30">
              Prelaunch Lab: Machine learning
            </a>
            <a href="#thisIsNewbie" className="pa-container pa3 w-20 pink-p border-left">
              Analogue & Digital
            </a>
            <a href="#ourLabs" className="pa-container pa3 w-10 border-left">
              About
            </a>
          </div>

          <div className="border-top flex tc">
            <a href="#thisIsNewbie" className="pa-container pa3 border-right w-20">
              Collaborative & Social
            </a>
            <a href="#ourLabs" className="pa-container pa3 w-20">
              Build interactive wearables
            </a>
            <a href="#thisIsNewbie" className="pa-container pa3 date border-left w-15">
              Facilitated & Curated
            </a>
            <a href="#ourLabs" className="pa-container pa3 border-left w-45">
              No previous coding skills needed!
            </a>
          </div>
        </div>

        <div className="flex w-100 flex-column items-end">
          <div className="signup-button pa-container redishpink-bg pa3 w-30">
            <a href="#newsletter">
              Keep me posted!
            </a>
          </div>
        </div>

      </div>



    </div>)
  }

}

export default NewMenu
