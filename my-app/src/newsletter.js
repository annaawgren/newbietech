import React, {Component} from 'react'
import anime from 'animejs'


class Newsletter extends Component {


  componentDidMount() {
    anime({
    targets: '#handemoji',
    rotate: '20deg',
    duration: 500,
    loop: true,
    delay: 500,
    direction: 'alternate',
    easing: 'easeInOutSine'
    })
    }


  render() {
    return (<div className="newsletter flex flex-column w-100 pl6 pr6 pt4 pb5 justify-center items-center tc" id="newsletter">

        <span role="img" aria-label="Peace" className="hand-emoji" id="handemoji">👋</span>
        <h1>Aloha</h1>

        <div className="newsletter-signup">
          <p>
            We are currently working on all the when, where and whats for our upcoming labs. <span className="redishpink">And some other nice things.</span> Sign up for our newsletter to be the first to know!
          </p>
        </div>

        <div className="signup-form" id="mc_embed_signup">


          <form
            action="https://newbietech.us19.list-manage.com/subscribe/post?u=c11245fbc3732c165acc5f4d2&amp;id=3eb4e53027"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div className="flex flex-column items-center" id="mc_embed_signup_scroll">
              <div className="signup-box">
                <input
                  type="email"
                  className="signup-field email-input"
                  placeholder="enter your email"
                  name="EMAIL"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"s
                  xstyle="display:none"
                />
                <div
                  className="response"
                  id="mce-success-response"
                  xstyle="display:none"
                />
              </div>
              <div
                xstyle="position: absolute; left: -5000px;"
                aria-hidden="true"
              />
              <div className="clear flex flex-row items-center justify-center">
                <input
                  type="submit"
                  value="Sign me up, pls!"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="submit"
                />
              </div>
            </div>
          </form>
        </div>



      </div>)
  }

}

export default Newsletter
