import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Map from './Map'
import TheStacks from './TheStacks'
import Features from './Features'
import UserFeedback from './UserFeedback'
import Playstore from './Playstore'
import Newsletter from './NewsLetter'
import Footer from './Footer'
// import Footer from 'components/cleanui/layout/Footer';
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom'  ;

const Index = () => {
  return (
    <div>
      <Helmet title="Home" />
        <Navbar/>  
            <Map/>
              <TheStacks/>
                <Features/>
                  <UserFeedback/>
                    <Playstore/>
                      <Newsletter/>
                        <Footer/>
    </div>
  )
}

export default Index
