import { useState } from 'react'
import './portfoilo.scss'
import PortfolioList from '../portfoliolist/PortfolioList'



export default function Portfoilo() {
  const [list, setList] = useState('featured')

  const listItem = [
    {
      id: 'featured',
      title: 'Featured',
    },

    {
      id: 'web',
      title: 'Web App',
    },

    {
      id: 'mobile',
      title: 'Mobile App',

    },

    {
      id: 'designing',
      title: 'Designing',
    },

    {
      id: 'brand',
      title: 'Branding',
    }




  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>
        Portfolio
      </h1>
      <ul >
      {
        listItem.map((item)=>(
          <PortfolioList 
          title={ item.title} 
          active={list === item.id}
          setList={setList}
          id={item.id}
          />

        ))
      }
      </ul>

      <div className='container'>
        <div className="item">
          <img src="https://pixabay.com/illustrations/circuit-board-pattern-background-5907811/" alt='' />
          <h3>Work Space</h3>
        </div>

        <div className="item">
          <img src="Assets/set.png" alt='' />
          <h3>Work Space</h3>
        </div>

        <div className="item">
          <img src="Assets/rev.jpg" alt='' />
          <h3>Work Space</h3>
        </div>

        <div className="item">
          <img src="Assets/rev.jpg" alt='' />
          <h3>Work Space</h3>
        </div>

        <div className="item">
          <img src="Assets/rev.jpg" alt='' />
          <h3>Work Space</h3>
        </div>

        <div className="item">
          <img src="Assets/rev.jpg" alt='' />
          <h3>Work Space</h3>
        </div>

      </div>

    </div>
  )
}
