import './testimonial.scss'
import { testimonials} from '../../Tests'

function Testimonial() {
  return (
    <div className="test" id='test'>
      <h1>Testimonial</h1>
      <div className='container'>
        {
          testimonials.map((t) => (

            <div className={t.featured ? 'card featured': "card"}>
              <div className='top'>
                <img src='Assets/arrow-key.png' className='left' alt='' />
                <img className='user' src={t.img} alt='' />
                <img className='right' src={t.icon} alt='' />
              </div>
              <div className='center'>
               {
                t.desc
               }</div>
              <div className='bottom'>
                <h3>{t.name}</h3>
                <h4>{t.title}</h4>
              </div>
            </div>
            ))
          }
    </div>

    </div>
  )
}

export default Testimonial
