import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/navbar/navbar.components'
import Footer from './components/footer/footer.component'

import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Information from './components/information/information.component';
import BlogPageOne from './components/blog-page/blog-page-1.component';
import BlogPageTwo from './components/blog-page/blog-page-2.component';
import BlogPageThree from './components/blog-page/blog-page-3.component';
import BlogSection from './components/blog/blog.component';
import LanguageSlider from './components/language-slider/language-slider.component';
import Slider from './components/slider/slider.component';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className='background-stars'>
        <div className='stars'></div>
      </div>
      {showContent ? (
        <div className='beginning'>
          
            <Navbar />
            <Routes>
              <Route path='/' element={
                <div>
                  <div id="projects">
                    <Projects />
                  </div>
                  <div id="slider">
                    <Slider />
                  </div>
                  <div id="LanguageSlider">
                    <LanguageSlider />
                  </div>
                  <div id="blog">
                    <BlogSection />
                  </div>
                  <div id="information">  
                    <Information />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                </div>
              }/>
              <Route path='/blog/1' element={<BlogPageOne/>}/>
              <Route path='/blog/2' element={<BlogPageTwo/>}/>
              <Route path='/blog/3' element={<BlogPageThree/>}/>
            </Routes>
            <Footer />
          
          
        </div>
      ) : (
        <div className='start-text'>
          <h1>FURKAN TOPAL PORTFOLIO</h1>
        </div>
      )}
    </div>
  );
}

export default App
