import React, {Component} from 'react'

import Insta from './images/insta.jpg'
import Facebook from './images/facebook.jpg'
import LinkedIn from './images/ln.jpg'

class Footer extends Component {

  render() {
    return (<div className="footer flex flex-column pl6 pr6 w-100 items-center" id="footer">

      <a className="button-black ftt flex justify-center items-center" href="#header">Back to top</a>


      <div className="flex flex-column h-100 justify-center items-center justify-center">

          <a className="email-us" href="mailto:hello@newbietech.se">hello@newbietech.io</a>


        <div className="footer-socialLinks flex flex-row items-center">
          <a href="https://www.instagram.com/newbietech_explorationlab/" target="blank">
            <img src={Insta} alt="Follow us on Instagram"/>
          </a>
          <a href="https://www.facebook.com/Newbie-Tech-Exploration-Lab-278923373020551/" target="blank">
            <img src={Facebook} alt="Follow us on Facebook"/>
          </a>
          <a href="https://www.linkedin.com/company/newbie-tech/" target="blank">
            <img src={LinkedIn} alt="Follow us on Linkedin"/>
          </a>
        </div>
      </div>


    </div>)
  }

}

export default Footer
