import React, {Component} from 'react'

class MachineLearning extends Component {

  render() {
    return (<div className="prelaunch flex flex-column w-100 vh-100 tc items-center" id="machinelearning">



      <div className="labtxt-container flex flex-column justify-center items-center">

        <div className="labnumber-hl mb4">#00</div>
        <div className="labtxt-hl">
          Free prelaunch mini-lab!
          <br/>
          <span className="redishpink">Machine learning afternoon</span>
          <br/>November 24, Stockholm
        </div>


          <p>
            Learn the basics of Machine Learning and sensor inputs
            for gesture recognition. You will begin to explore using
            the camera in your computer. Create games where you use
            your body as a remote control. Bring your own laptop.
            No prior knowledge needed.
          </p>



        <a className="button mt5 mb5 flex justify-center items-center" href="https://www.eventbrite.com/" target="blank">Sign me up!</a>

      </div>

    </div>)
  }

}

export default MachineLearning
