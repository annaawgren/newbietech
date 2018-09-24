import React, { Component } from 'react'


import About from './about.js'
import ArduinoLab from './arduinoLab.js'
import ExploreFactsNew from './exploreFactsNew.js'
import ExploreFacts from './exploreFacts.js'
import Footer from './footer.js'
import Header from './header.js'
import HeaderBanner from './headerBanner.js'
import Hero from './hero.js'
import Menu from './menu.js'
import NewMenu from './newmenu.js'
import Newsletter from './newsletter.js'
import NewbieIsFor from './newbieIsFor.js'
import OurLabs from './ourLabs.js'
import Partner from './partner.js'
import PrelaunchLab from './preLaunchLab.js'
import ThisIsNewbie from './thisIsNewbie.js'


import './App.css'
import './about.css'
import './arduinoLab.css'
import './exploreFactsNew.css'
import './exploreFacts.css'
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
import './preLaunchLab.css'
import './thisIsNewbie.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBanner />

        <Header />

        {/* <NewMenu /> */}

        <Hero />

        <ThisIsNewbie />

        <OurLabs />

        <PrelaunchLab />

        <ArduinoLab />

        <NewbieIsFor />

        {/* <ExploreFactsNew />

        <ExploreFacts /> */}

        <Newsletter />

        <Partner />

        <About />

        <Footer />

      </div>
    )
  }
}

export default App
