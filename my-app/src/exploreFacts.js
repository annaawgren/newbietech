import React, {Component} from 'react'
import anime from 'animejs'

class ExploreFacts extends Component {


  render() {
    return (<div className="exploreFacts pl6 pr6 pt5 w-100 tc flex flex-column justify-start">

      <h1>Cool technologies
        <br/>
        we like to explore</h1>

      <div className="exploreFacts-container flex justify-start tl">

        <div id="f-interface" className="ef-box box1">
          <h2>Live interfaces</h2>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Blafl öalfjaoierg You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>

        <div id="f-wearables" className="ef-box box2">
          <h2>Interactive wearables</h2>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Blafl öalfjaoierg You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>

        <div id="f-conductive" className="ef-box box3">
          <h2>Conductive materials</h2>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Blafl öalfjaoierg You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>

        <div id="f-arduino" className="ef-box box4">
          <h2>Arduino and other microcontrollers</h2>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Blafl öalfjaoierg You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>

        <div id="f-machinelearning" className="ef-box box5">
          <h2>Machine Learning</h2>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Blafl öalfjaoierg You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>
      </div>

      <a className="button-black btt flex justify-center items-center" href="#header">Back to top</a>

    </div>)
  }

}

export default ExploreFacts
