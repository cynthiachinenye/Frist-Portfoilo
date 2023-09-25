import { useEffect, useState } from 'react'
import './portfoilo.scss'
import PortfolioList from '../portfoliolist/PortfolioList'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio}from '../../data'


export default function Portfoilo() {
  const [list, setList] = useState('featured')
  const [data, setData] = useState([])

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
      id: 'design',
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
      setData(featuredPortfolio);
      break;

      case 'web':
      setData(webPortfolio);
      break;

      case 'mobile':
      setData(mobilePortfolio);
      break;

      case 'design':
      setData(designPortfolio);
      break;

      case 'content':
      setData(contentPortfolio);
      break;

    default:

      setData(featuredPortfolio);
    
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
