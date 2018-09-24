import React, {Component} from 'react'

class About extends Component {

  render() {
    return (<div className="about flex flex-column w-100 pl6 pr6 tl" id="about">

      <div className="about-container flex flex-column pl6 pa4 w-100">

        <div className="team-img team flex self-end"></div>

        <div className="about-txt-container">
          <div className="about-hl mb4">About</div>

          <p>
            Newbie tech was founded by art director/developer <a className="redishpink" href="https://www.linkedin.com/in/anna-%C3%A5gren-7abb445a/" target="blank">Anna Ågren</a>, digital designer <a className="redishpink" href="https://www.linkedin.com/in/lisaengwall/" target="blank">Lisa Engwall</a> and gamification expert <a className="redishpink" href="https://www.linkedin.com/in/frida-mons%C3%A9n-91ab0693/" target="blank">Frida Monsén</a>.
            The seed for the exploration lab was planted at Hyper Island where the duo explored creative tech together.
            Anna and Lisa want to spread the joy and beauty of exploring and learning
            about new technologies together with other tech newbies through facilitated,
            high quality and curated exploration labs. Newbie tech work in the
            intersection of creative tech and design.
          </p>

        </div>


      </div>

    </div>)
  }

}

export default About
