import React, {Component} from 'react'


class ArduinoLab extends Component {





  render() {
    return (<div className="arduino flex flex-row w-100 pr6 pl6 tl justify-end" id="arduino">



      <div className="labtxt-container-black flex flex-column">

        <div className="labnumber-hl-black mb4">#02</div>
        <div className="labtxt-hl-black">
          Build interactive
        </div>
        <div className="labtxt-hl-black">
          wearables with Arduino
        </div>


          <p>
            Design, code, and build pieces of jewellery, pins or clothing items
            that reacts to touch, sound, moist or motion. An introduction to
            using micro-controllers and Arduino. Bring your own laptop.
            No prior knowledge of coding needed. 
          </p>



        <a className="button mt5 mb5 flex justify-center items-center" href="#newsletter">Keep me posted</a>

      </div>

    </div>)
  }

}

export default ArduinoLab
