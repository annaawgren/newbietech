import React, {Component} from 'react'
import anime from 'animejs'


class Hero extends Component {

  componentDidMount() {
    anime({
    targets: '#arduino-img',
    rotate: '1turn',
    duration: 100000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
    })
    anime({
    targets: '#chip-img',
    rotate: '1turn',
    duration: 100000,
    loop: true,
    delay: 500,
    direction: 'alternate',
    easing: 'easeInOutSine'
    })
    }


  render() {
    return (<div className="hero flex flex-column w-100 pl6 pr6 pt5">


        <div className="hero-quote pt4">
          Facilitated and <br />curated
          creative tech explorations.
          <br />For beginners.
        </div>

        <div id="arduino-img" className="arduino-img" />
        <div id="chip-img" className="chip-img" />

      </div>)
  }

}

export default Hero
