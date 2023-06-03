import React from 'react'
import Projects from '../projects/projects.component'
import LanguageSlider from '../language-slider/language-slider.component'
import Contact from '../contact/contact.component'
import Blog from '../blog/blog.component'

function Home() {
  return (
    <div>
        <Projects/>
        <LanguageSlider/>
        <Blog/>
        <Contact/>
    </div>

  )
}

export default Home