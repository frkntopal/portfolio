import React from 'react'
import Projects from '../projects/projects.component'
import LanguageSlider from '../language-slider/language-slider.component'
import Contact from '../contact/contact.component'
import Blog from '../blog/blog.component'
import Information from '../information/information.component'
import Slider from '../slider/slider.component'

function Home() {
  return (
    <div>
        <Projects/>
        <LanguageSlider/>
        <Slider/>
        <Blog/>
        <Information/>
        <Contact/>
    </div>

  )
}

export default Home