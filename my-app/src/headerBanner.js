import React, {Component} from 'react'

class HeaderBanner extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     bannerVisible: true
  //   }
  // }
  //
  // handleBannerClick = () => {
  //   console.log(this.state)
  //   this.setState({
  //     bannerVisible: !this.state.bannerVisible
  //   })
  // }

  render() {

    // let { bannerVisible } = this.state
    //
    // if (!bannerVisible) {
    //   return null
    // }

    return (<div className="header-banner">

      <div className="banner w-100 tc">
        <div><span role="img" aria-label="Bomb">💥 </span>
          <span className="underlined-ml">
            <a href="#machinelearning">Machine learning lab</a>
          </span>
           <span>
           &nbsp;– soon in Stockholm! Limited seats, hurry hurry don't miss <span role="img" aria-label="Bomb">💥</span>
           </span>
         </div>
        {/* <div onClick={this.handleBannerClick} className="close-tag self-end"/> */}
      </div>

    </div>)
  }

}

export default HeaderBanner
