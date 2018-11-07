import React, {Component} from 'react'

class ExploreFacts extends Component {


  render() {
    return (<div className="exploreFacts pl6 pr6 pt5 w-100 tc flex flex-column justify-start" id="exploreFacts">

      <h1>Creative technologies
        <br/>
        we love to explore</h1>

      <div className="exploreFacts-container flex justify-start tl">

        <div id="f-interface" className="ef-box box1">
          <h2>Projection Mapping</h2>
          <p>With projection mapping complex and irregular objects can turn into canvases for displaying images and video with a projector. The relationship between the projector and the object is mapped out to fit the imagery, creating an interactive or pre-programmed virtual scene onto buildings or indoor objects. Projection mapping can, for instance, be used for installations, concerts, theatre or gaming.</p>
        </div>

        <div id="f-wearables" className="ef-box box2">
          <h2>Interactive wearables</h2>
          <p>Clothes, jewellery and gadgets can be made interactive and respond to stimuli like music, air humidity, sweat, touch, acceleration and what not. By embedding small sensors, using microcontrollers and a providing a little bit of code, everyday items or your party outfit can trigger sound, glow to the beat, shift colours or send messages and make the physical and the digital world blend together.</p>
        </div>

        <div id="f-conductive" className="ef-box box3">
          <h2>Generative art & Processing</h2>
          <p>In generative art, pieces of art are created by autonomous systems and decisions aren't made directly by humans. The computer can be programmed to create unique artworks each time a script is run or respond to some kind of interaction using sensors. One tool for creating this is "Processing" – a programming language and graphical library, created for non-programmers.</p>
        </div>

        <div id="f-arduino" className="ef-box box4">
          <h2>Arduino/
          Microcontrollers</h2>
          <p>These tiny devices are essentially small computers that run one program over and over again. Triggered by for instance motion, temperature, sound or even a Twitter message, they can be used to control physical and digital objects. Microcontrollers such as Arduino are easy-to-use and suitable for small electronics projects. For performing more complex tasks, single-board computers like Raspberry Pi is a better choice.</p>
        </div>

        <div id="f-machinelearning" className="ef-box box5">
          <h2>Machine Learning</h2>
          <p>Is a way to give computers the capacity to learn from data without programming. It is used for anything from recommending what video to watch next on Youtube, making medical diagnosis, to driving self-driving cars. Machine learning can also be used as a creative tool for building gestural controllers for music, visuals and games, using inputs and outputs related to sound, light, gestures, image recognition, voice or almost anything.</p>
        </div>
      </div>

      <a className="button-black btt flex justify-center items-center" href="#header">Back to top</a>

    </div>)
  }

}

export default ExploreFacts
