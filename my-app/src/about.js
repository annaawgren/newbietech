import React, {Component} from 'react'

class About extends Component {

  render() {
    return (<div className="about flex flex-column w-100 pl6 pr6 tl" id="about">

        <div className="team-img team flex self-end"></div>

        <div className="about-txt-container">
          <div className="about-hl mb4">About</div>
          <p>
            Newbie Tech is founded by <span className="underlined"><a className="redishpink" href="https://www.linkedin.com/in/anna-%C3%A5gren-7abb445a/" target="blank">Anna Ågren</a></span> and <span className="underlined"><a className="redishpink" href="https://www.linkedin.com/in/lisaengwall/" target="blank">Lisa Engwall</a></span>.
            Two digital creatives and designers with experience design at &lt;3.
            <br />
            <br />
            We are curious and passionate about exploring emerging technologies.
            <br />
            We run Newbie Tech because we want to lower the threshold and create
            opportunities for tech newbies to explore – and have fun!

            <br />
            <br />
            Say hello!
          </p>

        </div>

        <div className="contact-us">
          <p>
            <span className="underlined"><a className="redishpink" href="mailto:anna@newbietech.io" target="blank">anna@newbietech.io</a></span>
            <br />
            <span className="underlined"><a className="redishpink" href="mailto:lisa@newbietech.io" target="blank">lisa@newbietech.io</a></span>

          </p>


        </div>




    </div>)
  }

}

export default About
