import React, {Component} from 'react'

class About extends Component {

  render() {
    return (<div className="about flex flex-column w-100 pl6 pr6 tl" id="about">

        <div className="team-img team flex self-end"></div>

        <div className="about-txt-container">
          <div className="about-hl mb4">About</div>
          <p>
            Newbie tech is founded by <span className="underlined"><a className="redishpink" href="https://www.linkedin.com/in/anna-%C3%A5gren-7abb445a/" target="blank">Anna Ågren</a></span> and <span className="underlined"><a className="redishpink" href="https://www.linkedin.com/in/lisaengwall/" target="blank">Lisa Engwall</a></span>.
            Two digital creatives and designers with experience design at &lt;3.
            <br />
            <br />
            We are curious and passionate about exploring emerging technologies!
            We run Newbie Tech because we want to inspire and give opportunities
            for others to discover the joy for tech that we feel.

            <br />
            <br />
            Say hello
          </p>

        </div>

        <div className="contact-us">
          <p>
            <span className="underlined"><a className="redishpink" href="mailto:anna@newbietech.se" target="blank">anna@newbietech.se</a></span>
            <br />
            <span className="underlined"><a className="redishpink" href="mailto:lisa@newbietech.se" target="blank">lisa@newbietech.se</a></span>

          </p>


        </div>




    </div>)
  }

}

export default About
