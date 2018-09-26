import React, {Component} from 'react'
import anime from 'animejs'

class ThisIsNewbie extends Component {

  componentDidMount() {
    anime({
    targets: '#icon',
    rotate: '20deg',
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
    })
    }



  render() {
    return (<div className="this-is-newbie flex flex-column pl6 pr6 w-100 pb6 pt4" id="thisIsNewbie">


        <div className="this-is-hl">This is Newbie tech</div>

        <div className="icons flex flex-row flex-wrap justify-center justify-around w-100">

          <div className="icons-box w-25 tl pr4">
            <div className="icon hands-on-img" />

            <h2 className="text-bg"> Experience based</h2>
            <h2 className="text-bg">& Hands-on </h2>
            <p>We believe in learning by doing.
              We focus on hands-on creativity and in our labs
              we build along with experienced industry professionals
              from the tech, art and design industry.
            </p>
          </div>

          <div className="icons-box w-25 tl pr4">
            <div id="icon" className="icon collab-img" />

            <h2 className="text-bg"> Collaborative</h2>
            <h2 className="text-bg">& Social </h2>
            <p>We believe in learning together.
              We explore in small groups and
              co-create to maximise learnings collaboratively.
            </p>
          </div>

          <div className="icons-box w-25 tl pr4">
            <div className="icon analogue-img" />

            <h2 className="text-bg"> Analogue</h2>
            <h2 className="text-bg">& Digital </h2>
            <p>We believe in making emerging technologies tangible.
              We work with analogue materials and provide digital skills
              to make the physical world interactive.
            </p>
          </div>

          <div className="icons-box w-25 tl pr4">
            <div className="icon curated-img" />

            <h2 className="text-bg"> Facilitated</h2>
            <h2 className="text-bg">& Curated </h2>
            <p>We believe in kickstarting the learning process.
              We build experiences powered by industry professionals
              to make exploring emerging technologies fun and accessible.
            </p>
          </div>

        </div>


      </div>)
  }

}

export default ThisIsNewbie
