import React from 'react'
import Projects from '../projects/projects.component'
import LanguageSlider from '../language-slider/language-slider.component'
import Contact from '../contact/contact.component'

function Home() {
  return (
    <div>
        <Projects/>
        <LanguageSlider/>
        <Contact/>
    </div>

  )
}

export default Home