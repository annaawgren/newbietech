import React, {Component} from 'react'


class ArduinoLab extends Component {





  render() {
    return (<div className="arduino flex flex-column w-100 vh-100 tc items-center">



      <div className="labtxt-container-black flex flex-column justify-center items-center">

        <div className="labnumber-hl-black mb4">#01</div>
        <div className="labtxt-hl-black">
          Build interactive
        </div>
        <div className="labtxt-hl-black">
          wearables with Arduino
        </div>


          <p>
            Learn the basics of Machine Learning and sensor inputs
            for gesture recognition. You will begin to explore using
            the camera in your computer. Create games where you use
            your body as a remote control. Bring your own laptop.
            No prior knowledge needed.
          </p>



        <a className="button black-txt mt5 mb5 flex justify-center items-center" href="#newsletter">Keep me posted</a>

      </div>

    </div>)
  }

}

export default ArduinoLab
