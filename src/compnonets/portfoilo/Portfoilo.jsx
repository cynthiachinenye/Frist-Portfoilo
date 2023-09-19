import { useEffect, useState } from 'react'
import './portfoilo.scss'
import PortfolioList from '../portfoliolist/PortfolioList'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio}from '../../data'


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
      title: 'Design',
    },

    {
      id: 'content',
      title: 'content',
    }

  ]

 useEffect(()=>{
  switch (list) {
    case 'featured':
      setDate(featuredPortfolio);
      break;

      case 'web':
      setDate(webPortfolio);
      break;

      case 'mobile':
      setDate(mobilePortfolio);
      break;

      case 'design':
      setDate(designPortfolio);
      break;

      case 'content':
      setDate(contentPortfolio);
      break;

    default:

      setDate(featuredPortfolio);
    
      break;
  }

 },[list])

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
      {
        data.map((d)=>(

          <div className="item">
          <img src={d.img} alt='' />
          <h3>{d.title}</h3>
        </div>
          
        ))
      }
       

        
      </div>

    </div>
  )
}
