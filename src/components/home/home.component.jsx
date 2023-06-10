import React from 'react'
import Projects from '../projects/projects.component'
import LanguageSlider from '../language-slider/language-slider.component'
import Contact from '../contact/contact.component'
import Blog from '../blog/blog.component'
import Information from '../information/information.component'
import Slider from '../slider/slider.component'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
    <Helmet>
      <title>
        Front end developer
      </title>
      <meta name='description' content='Web site yapımı'/>
      <link rel="canonical" href="https://furkantopalportfolio.netlify.app/" />
    </Helmet>
    
    <div>
        <Projects/>
        <LanguageSlider/>
        <Slider/>
        <Blog/>
        <Information/>
        <Contact/>
    </div>
    </>

  )
}

export default Home