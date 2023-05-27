import React, { useState, useEffect } from 'react';
import { Routes,Route } from 'react-router-dom'
import './App.css'


import Navbar from './components/navbar/navbar.components'
import Footer from './components/footer/footer.component'


import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Information from './components/information/information.component';
import Home from './components/home/home.component';

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
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/information' element={<Information/>}/>
          </Routes>
          <Footer />
        </div>
      ) : (
        <div className='start-text'>
          <h1>FURKAN TOPAL PORTFOLİO</h1>
        </div>
      )}
    </div>
  );
}

export default App
