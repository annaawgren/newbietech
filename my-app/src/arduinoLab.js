import React, {Component} from 'react'


class ArduinoLab extends Component {


  render() {
    return (<div className="arduino flex flex-column w-100 vh-100 tl">


      <div className="labtxt-container-right flex flex-column justify-right items-right tl w-20">

        <div className="labnumber-hl-black mb4">#01</div>
        <div className="labtxt-hl-black">
          Build interactive
          <br/>
          with Arduino
        </div>

        <div className="labinfo-black">
          <p>
            Design, code, and build pieces of jewellery, pins or clothing items
            that reacts to touch, sound, moist or motion. An introduction to
            using micro-controllers and Arduino. Bring your own laptop.
            No prior knowledge of coding needed. 
            <br/>
            <br/>
            More info coming soon.
          </p>
        </div>


        <a className="button mt5 mb5 flex justify-center items-center" href="#newsletter" target="blank">Keep me posted!</a>

      </div>






      </div>)
  }

}

export default ArduinoLab
