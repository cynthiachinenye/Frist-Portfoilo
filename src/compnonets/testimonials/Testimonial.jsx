import './testimonial.scss'

function Testimonial() {
  return (
    <div className="test" id='test'>
    <h1>Testimonial</h1>
    <div className='container'>
     <div className='card'>
       <div className='top'>
         <img src='Assets/arrow-key.png' className='left' alt=''/>
         <img  className='user' src='https://images.pexels.com/photos/18125671/pexels-photo-18125671/free-photo-of-sexy-woman-posing-in-dark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
         <img className='right' src='Assets/youtube.png' alt=''/>
       </div>
       <div className='center'>
       Lorem ipsum dolor sit amet consectetur adipiscing elit Nunc vitae mi diam Vestibulum ante ipsum primis
       </div>
       <div className='bottom'>
       <h3>Alex</h3>
       <h4>CEO OF LAMA</h4>
       </div>
     </div>
    </div>
      
    </div>
  )
}

export default Testimonial
