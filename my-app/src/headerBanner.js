import React, {Component} from 'react'


class HeaderBanner extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       bannerVisible: true
//     }
//   }
//
//   handleBannerClick = () => {
//   this.setState({
//     bannerVisible: !this.state.backgroundVisible
//   })
// }


  render() {
    return (<div className="header-banner">


        <div className="banner flex flex-wrap bg-green w-100 pl5 pr5 items-center justify-between">
          <div>💥 <span><a href="#prelaunch">Machine learning lab</a> </span> – out now. Limited seats, hurry hurry don't miss!💥
          </div>
          <div className="close-tag self-end" />
        </div>


      </div>)
  }

}

export default HeaderBanner
