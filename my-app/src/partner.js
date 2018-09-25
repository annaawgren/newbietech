import React, {Component} from 'react'

class Partner extends Component {

  render() {
    return (<div className="partner flex flex-column w-100 tl justify-center items-center">

      <div className="partner-container flex flex-column justify-center items-center tc">

        <div className="partner-hl">
          Yes, BECOME A
          <br/>
          PARTNER
        </div>

        <div className="partnerinfo">
          <p>
            Let’s join forces! We are looking for partners who share our mission to make tech fun and accessible for everyone. Do not hesitate to contact us if you see an opportunity to collaborate and shape Newbie tech togheter with us!
            <br/>
            <br/>
            contact <a className="redishpink" href="mailto:frida@newbietech.se">frida@newbietech.se</a>
          </p>
        </div>

      </div>

    </div>)
  }

}

export default Partner
