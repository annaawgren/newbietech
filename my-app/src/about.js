import React, {Component} from 'react'

class About extends Component {

  render() {
    return (<div className="about flex flex-column w-100 pl6 pr6 pt6 pb6 tl" id="about">

      <div className="about-container flex flex-column pa4 w-40">

        <div className="team-img"></div>

        <div className="about-hl mb4">About</div>

        <p>
          Newbie tech was founded by art director/developer <a className="redishpink" href="https://www.linkedin.com/in/anna-%C3%A5gren-7abb445a/" target="blank">Anna Ågren</a>, digital designer <a className="redishpink" href="https://www.linkedin.com/in/lisaengwall/" target="blank">Lisa Engwall</a> and gamification expert <a className="redishpink" href="https://www.linkedin.com/in/frida-mons%C3%A9n-91ab0693/" target="blank">Frida Monsén</a>.
        </p>

      </div>

    </div>)
  }

}

export default About
