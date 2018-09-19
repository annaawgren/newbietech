import React, {Component} from 'react'


class Newsletter extends Component {


  render() {
    return (<div className="newsletter flex flex-column w-100 vh-50 pl6 pr6 pt6 pb6 justify-center items-center">


        <h1>Newsletter <span className="hand-emoji">👋🏻</span></h1>

        <div className="newsletter-signup">
          <p>
            We are currently working on when, where and whats for our
            upcoming labs. <span className="redishpink">And some other nice things</span>.
            Sign up to be the first to know.
          </p>
        </div>

        <div className="signup-form" id="mc_embed_signup">


          <form
            action=""
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
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
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
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
