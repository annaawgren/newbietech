import React, {Component} from 'react'


class ExploreFactsNew extends Component {

  constructor(props){
    super(props)
    this.state = {
      interfacesVisible: false,
      wearablesVisible: false,
      conductiveVisible: false,
      arduinoVisible: false,
      machinelearningVisible: false
    }
  }

  handleInterfaceClick = () => {
    this.setState({
      interfaceVisible: !this.state.interfaceVisible
    })
  }

  handleWearablesClick = () => {
    this.setState({
      wearablesVisible: !this.state.wearablesVisible
    })
  }

  handleConductiveClick = () => {
    this.setState({
      conductiveVisible: !this.state.conductiveVisible
    })
  }

  handleArduinoClick = () => {
    this.setState({
      arduinoVisible: !this.state.arduinoVisible
    })
  }

  handleMachineLearningClick = () => {
    this.setState({
      machinelearningVisible: !this.state.machinelearningVisible
    })
  }





  render() {
    return (<div className="exploreFacts">

      <div className="exploreFacts-hl">
        <h1>Things we <br/> like to explore</h1>
      </div>

      <div className="bg-box nr1">
        <h1>Live interfaces</h1>
        <div className="plus" />
      </div>

      <div className="bg-box nr2">
        <h1>Interactive wearables</h1>
        <div className="plus" />
      </div>

      <div className="bg-box nr3">
        <h1>Conductive materials</h1>
        <div className="plus" />
      </div>

      <div className="bg-box nr4">
        <h1>Arduino and other microcontrollers</h1>
        <div className="plus" />
      </div>

      <div className="bg-box nr5">
        <h1>Machine learning</h1>
        <div className="plus" />
      </div>



    </div>)
  }

}

export default ExploreFactsNew
