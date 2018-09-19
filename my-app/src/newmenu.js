import React, {Component} from 'react'

class NewMenu extends Component {

  render() {
    return (<div className="menu flex flew-wrap flex-column pl6 pr6 vh-50 w100 ">


      <div className="mobile-view-menu flex flew-row flex-wrap w-100 tl">


          <a className="box-mobile redishpink-bg" href="#ourLabs">
            One day labs – now in Stockholm
          </a>

          <a className="box-mobile" href="#ourLabs">
            Experience based & Hands-on
          </a>

          <a className="box-mobile" href="#ourLabs">
            Prelaunch Lab: Machine learning
          </a>

          <a className="box-mobile" href="#ourLabs">
            Explorations
          </a>

          <a className="box-mobile" href="#ourLabs">
            Analogue & Digital
          </a>

          <a className="box-mobile" href="#ourLabs">
            Build interactive wearables
          </a>

          <a className="box-mobile" href="#ourLabs">
            Facilitated & Curated
          </a>

          <a className="box-mobile" href="#ourLabs">
            About
          </a>

          <a className="box-mobile" href="#ourLabs">
            Collaborative & Social
          </a>

          <a className="box-mobile" href="#ourLabs">
            No previous coding skills needed
          </a>

          <a className="box-mobile redishpink-bg content-end" href="#ourLabs">
            Keep me updated!
          </a>


      </div>







      <div className="desktop-view-menu">

        <div className="box pa3 pr3 pl3 w-25">
          <a href="#ourLabs">
            One day labs – now in Stockholm
          </a>
        </div>

        <div className="menu-container flex flex-column">

          <div className="labinfo-row">
            <h2 className="labinfo border-right pink">Experience based & hands on</h2>
            <h2 className="labinfo pink-p">Prelaunch Lab: Machine learning</h2>

            <h2 className="labinfo border-left">Explorations</h2>

          </div>

          <div className="labinfo-row border-top">
            <h2 className="labinfo border-right">Analogue & Digital</h2>
            <h2 className="labinfo">Build interactive wearables</h2>
            <h2 className="labinfo date border-left pink">Facilitated & Curated</h2>
          </div>

          <div className="labinfo-row border-top">
            <h2 className="labinfo border-right pink">About</h2>
            <h2 className="labinfo">Collaborative & Social</h2>
            <h2 className="labinfo border-left">No previous coding skills needed</h2>
          </div>

        </div>

        <div className="signup-button">
          <a href="#newsletter">
            <h2>Keep me updated!</h2>
          </a>
        </div>

      </div>



    </div>)
  }

}

export default NewMenu
