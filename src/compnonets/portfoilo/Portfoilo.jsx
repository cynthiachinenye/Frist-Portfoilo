import { useState } from 'react'
import './portfoilo.scss'
import PortfolioList from '../portfoliolist/PortfolioList'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,brandingPortfolio}from '../../data'


export default function Portfoilo() {
  const [list, setList] = useState('featured')
  const [data, setDate] = useState([])

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
          <img src="https://cdn.pixabay.com/photo/2021/01/11/10/20/circuit-board-5907811_1280.jpg" alt='' />
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
          <img src="https://cdn.dribbble.com/users/428659/screenshots/3804768/dribbblecover.jpg?resize=800x600&vertical=center" alt='' />
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
