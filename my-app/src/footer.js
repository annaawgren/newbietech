import React, {Component} from 'react'

import Insta from './images/icon-instagram.svg'
import Facebook from './images/icon-facebook.svg'

class Footer extends Component {

  render() {
    return (<div className="footer flex flex-column pl6 pr6 w-100 items-center" id="footer">

      <a className="button-black ftt flex justify-center items-center" href="#header">Back to top</a>


      <div className="flex flex-column h-100 justify-center items-center justify-center">

          <a className="email-us" href="mailto:hello@newbietech.se">hello@newbietech.se</a>


        <div className="footer-socialLinks flex flex-row items-center">
          <a href="https://www.instagram.com/newbietech.se/">
            <img src={Insta} alt="Follow us on Instagram"/>
          </a>
          <a href="https://www.facebook.com/pg/Vegogo-666861027033967/">
            <img src={Facebook} alt="Follow us on Facebook"/>
          </a>
        </div>
      </div>


    </div>)
  }

}

export default Footer
