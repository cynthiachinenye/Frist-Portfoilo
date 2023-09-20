import './testimonial.scss'

function Testimonial() {
  return (
    <div className="test" id='test'>
    <h1>Testimonial</h1>
    <div className='container'>
     <div className='card'>
       <div className='top'>
         <img src='Assets/arrow-key.png' className='left' alt=''/>
         <img src='https://cdn.dribbble.com/users/194964/screenshots/11666447/hrki_mobile.png?resize=450x338&vertical=center' alt=''/>
         <img src='Assets/youtube.png' alt=''/>
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
