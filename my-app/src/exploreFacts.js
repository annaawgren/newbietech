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
          <p>Projection mapping, similar to video mapping and spatial augmented reality, is a projection technology used to turn objects, often irregularly shaped, into a display surface for video projection. These objects may be complex industrial landscapes, such as buildings, small indoor objects or theatrical stages.</p>
        </div>

        <div id="f-wearables" className="ef-box box2">
          <h2>Interactive wearables</h2>
          <p>Small sensors, microcontrollers and a little bit of code. That is what can make your body and the surrounding world into input sources that make clothes, jewellery and gadgets respond to the music played, the air humidity, touch, acceleration and … you name it. This way everyday items (or a party outfit) can trigger sound, glow to the beat, shift colours or in some other way communicate and make the physical and the digital world blend together.
          </p>
        </div>

        <div id="f-conductive" className="ef-box box3">
          <h2>Generative art & Processing</h2>
          <p>Generative art refers to art that in whole or in part has been created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist. In some cases the human creator may claim that the generative system represents their own artistic idea, and in others that the system takes on the role of the creator.
          </p>
        </div>

        <div id="f-arduino" className="ef-box box4">
          <h2>Arduino/
          Microcontrollers</h2>
          <p>Tiny and relatively cheap devices suitable for small electronics projects.
Microcontrollers, such as Arduino or Genuino, are small computers that run one program over and over. Through reading inputs – for example, motion, temperature and sound, or even a message on Twitter – they can be used to control physical and digital objects and for instance trigger light or sound, or control a motor or other devices.
</p>
        </div>

        <div id="f-machinelearning" className="ef-box box5">
          <h2>Machine Learning</h2>
          <p>Machine learning is a way to give computers the capacity to learn from data without programming. It is used for everything from recommending what movie to watch next on Netflix to self-driving cars. It can also be used as a creative tool for building gestural controllers for music, making visuals and creating games. Here are endless possibilities to create by using inputs and outputs related to sound, light, body movements, image recognition, voice or almost anything.
          </p>
        </div>
      </div>

      <a className="button-black btt flex justify-center items-center" href="#header">Back to top</a>

    </div>)
  }

}

export default ExploreFacts
