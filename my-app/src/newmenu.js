import React, {Component} from 'react'

class NewMenu extends Component {

  render() {
    return (<div className="menu flex flew-wrap flex-column pa5 vh-50 w100 ">

      <div className="box bg-pink pa3 pr3 pl3 w-25">
        <a href="#ourLabs">
          One day labs – now in Stockholm
        </a>
      </div>

      <div className="menu-container flex flex-column">

        <div className="labinfo-row">
          <h2 className="labinfo border-right pink">A one day hands-on experience with Arduino</h2>
          <h2 className="labinfo pink-p">Interactive wearables – analogue meets digital</h2>

          <h2 className="labinfo border-left">Stockholm</h2>

        </div>

        <div className="labinfo-row border-top">
          <h2 className="labinfo border-right">>></h2>
          <h2 className="labinfo">Let your body become a remote controller</h2>
          <h2 className="labinfo date border-left pink">Try out machine learning</h2>
        </div>

        <div className="labinfo-row border-top">
          <h2 className="labinfo border-right pink">Prototype a live interface</h2>
          <h2 className="labinfo">Interactive wearables – where analogue meets digital</h2>

          <h2 className="labinfo border-left">3 x labs in Stockholm</h2>
        </div>

      </div>

      <div className="signup-button">
        <a href="#newsletter" className="js-scroll">
          <h2>Keep me updated!</h2>
        </a>
      </div>

    </div>)
  }

}

export default NewMenu
