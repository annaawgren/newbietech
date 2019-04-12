import React, { Component } from 'react'


import About from './about.js'
import ArduinoLab from './arduinoLab.js'
import ExploreFacts from './exploreFacts.js'
import Footer from './footer.js'
import FooterExtra from './footerExtra.js'
import Header from './header.js'
import HeaderBanner from './headerBanner.js'
import Hero from './hero.js'
import Menu from './menu.js'
import Newsletter from './newsletter.js'
import NewbieIsFor from './newbieIsFor.js'
import OurLabs from './ourLabs.js'
import Partner from './partner.js'
import MachineLearning from './machinelearning.js'
import ThisIsNewbie from './thisIsNewbie.js'


import './App.css'
import './about.css'
import './arduinoLab.css'
import './exploreFacts.css'
import './footerExtra.css'
import './footer.css'
import './fonts.css'
import './header.css'
import './hero.css'
import './headerBanner.css'
import './menu.css'
import './newbieIsFor.css'
import './newsletter.css'
import './ourLabs.css'
import './partner.css'
import './machinelearning.css'
import './thisIsNewbie.css'


class StartPage extends Component {
  render() {
    return (
      <div className="startpage">

        <HeaderBanner />

        <Header />

        <Menu />

        <Hero />

        <ThisIsNewbie />

        <OurLabs />

        <MachineLearning />

        <ArduinoLab />

        <ExploreFacts />

        <Newsletter />

        <NewbieIsFor />

        <Partner />

        <About />

        <Footer />

        <FooterExtra />

      </div>
    )
  }
}

export default StartPage
