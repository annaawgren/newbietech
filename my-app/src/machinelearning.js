import React, {Component} from 'react'

class MachineLearning extends Component {

  render() {
    return (<div className="machinelearning flex flex-column w-100 tl pl6 items-start" id="machinelearning">



      <div className="labtxt-container flex flex-column justify-center items-left">

        <div className="labnumber-hl mb4">#00</div>
        <div className="labtxt-hl">
          Free prelaunch <br /> mini-lab!
          <br/>
          <span className="redishpink">Machine learning afternoon</span>
        </div>


          <p>
            Learn the basics of Machine Learning and sensor inputs
            for gesture recognition. You will begin to explore using
            the camera in your computer. Create games where you use
            your body as a remote control. Bring your own laptop.
            No prior knowledge needed.
          </p>



        <a className="button mt5 mb5 flex justify-center items-center" href="#newsletter">Stay tuned</a>

      </div>

    </div>)
  }

}

export default MachineLearning
