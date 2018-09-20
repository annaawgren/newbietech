import React, {Component} from 'react'


class ExploreFacts extends Component {


  constructor(props) {
    super(props)
    this.state = {
      interfacesVisible: false,
      machinelearningVisible: false,
      skillsVisible: false,
      educationVisible: false,
      arduinoVisible: false
    }
  }


  render() {
    return (<div className="facts-container pl6 pr6 pt3 w-100">

      <div className="facts-hl">
        <h1>Things we <br/> like to explore</h1>

      </div>

      <div className="info-box-container">

        <div className="info-box box1">
          <h1>Live interfaces</h1>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards can read inputs - light on a sensor, a finger on a button, or a Twitter message – and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>

        <div className="info-box box2">
          <h1>Interactive wearables</h1>
          <p>Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it.
          </p>
        </div>

        <div className="info-box box3">
          <h1>Conductive materials</h1>
          <p>Projection mapping and spatial augmented reality is a projection technology used to turn objects into a display surface for video projection. This technique can add extra dimensions, optical illusions, or notions of movement onto static objects such as buildings, vehicles or indoor objects. Through specialised software, a two- or three-dimensional object is spatially mapped on the virtual program which mimics the real environment it is to be projected on. The software can interact with a projector to fit any desired image onto the surface of that object.
          </p>
        </div>

        <div className="info-box box4">
          <h1>Arduino and other microcontrollers</h1>
          <p>Projection mapping and spatial augmented reality is a projection technology used to turn objects into a display surface for video projection. This technique can add extra dimensions, optical illusions, or notions of movement onto static objects such as buildings, vehicles or indoor objects. Through specialised software, a two- or three-dimensional object is spatially mapped on the virtual program which mimics the real environment it is to be projected on. The software can interact with a projector to fit any desired image onto the surface of that object.
          </p>
        </div>

        <div className="info-box box5">
          <h1>Machine Learning</h1>
          <p>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards can read inputs - light on a sensor, a finger on a button, or a Twitter message – and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
          </p>
        </div>

      </div>

      <a className="button-black btt flex justify-center items-center" href="#header" target="blank">Back to top</a>



    </div>)
  }

}

export default ExploreFacts
