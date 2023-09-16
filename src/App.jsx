
import Navbar from './compnonets/navbar/Navbar';
import Intro from './compnonets/intro/Intro'
import Portfoilo from './compnonets/portfoilo/Portfoilo'
import Works from './compnonets/works/Works'
import Testimonial from './compnonets/testimonials/Testimonial'
import Contact from './compnonets/contact/Contact'
import './app.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      
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
