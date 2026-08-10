import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Services } from '../../components'
import { headerData } from '../../data/headerData'
  //<Achievement />
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Experience />
            <Projects />            
            <Services />
            {/* <Testimonials /> */}
            <Education />
          
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
