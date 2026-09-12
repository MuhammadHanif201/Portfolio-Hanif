import React from 'react'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Services } from '../../components'
  //<Achievement />
function Main() {
    return (
        <div>
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
