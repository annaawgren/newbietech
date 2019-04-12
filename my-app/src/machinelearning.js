import React, {Component} from 'react'

class MachineLearning extends Component {

  render() {
    return (<div className="machinelearning flex flex-column w-100 tl pl6 items-start" id="machinelearning">



      <div className="labtxt-container flex flex-column justify-center items-left">

        <div className="labnumber-hl mb4">#01</div>
        <div className="labtxt-hl">

          <span className="redishpink">Machine learning as a creative tool</span>
        </div>


          <p>
            Learn the basics of Machine Learning and sensor inputs for gesture recognition.
            You will begin to explore image and face recognition, audio input and the camera in your computer.
            Create games that you control with your body or voice. Bring your own laptop. No prior knowledge needed.
          </p>



        <a className="button mt5 mb5 flex justify-center items-center" href="#newsletter">Keep me posted</a>

      </div>

    </div>)
  }

}

export default MachineLearning
