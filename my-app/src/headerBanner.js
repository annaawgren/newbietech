import React, {Component} from 'react'

class HeaderBanner extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bannerVisible: true
    }
  }

  handleBannerClick = () => {
    console.log(this.state)
    this.setState({
      bannerVisible: !this.state.bannerVisible
    })
  }

  render() {

    let { bannerVisible } = this.state

    if (!bannerVisible) {
      return null
    }

    return (<div className="header-banner">

      <div className="banner flex flex-wrap bg-green w-100 pl6 pr6 items-center justify-between">
        <div>💥
          <span>
            <a href="#prelaunch">Machine learning lab</a>
          </span>
          – out now. Limited seats, hurry hurry don't miss!💥
        </div>
        <div onClick={this.handleBannerClick} className="close-tag self-end"/>
      </div>

    </div>)
  }

}

export default HeaderBanner
