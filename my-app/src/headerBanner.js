import React, {Component} from 'react'

class HeaderBanner extends Component {

  render() {

    return (<div className="header-banner">

      <div className="banner w-100 tc">
        <div><span role="img" aria-label="Bomb">💥 </span>
           <span>
          Yay! Stay tuned for our {" "}
           <span className="underlined-ml">
            <a href="#ourlabs">upcoming labs</a>
           </span>{" "}in Stockholm and Malmö! <span role="img" aria-label="Bomb">💥</span>
           </span>
         </div>
        
      </div>

    </div>)
  }

}

export default HeaderBanner
