
import Navbar from './compnonets/navbar/Navbar';
import Intro from './compnonets/intro/Intro'
import Portfoilo from './compnonets/portfoilo/Portfoilo'
import Works from './compnonets/works/Works'
import Testimonial from './compnonets/testimonials/Testimonial'
import Contact from './compnonets/contact/Contact'
import './app.scss'
import React, { useState } from 'react';   
import Menu from './compnonets/menu/Menu';


function App() {
const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro />
        <Portfoilo />
        <Works />
        <Testimonial />
        <Contact />

      </div>


    </div>
  );
}

export default App;
