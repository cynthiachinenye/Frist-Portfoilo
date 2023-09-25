import './work.scss'
import {dataSlide} from '../../Slides'
import { useState } from 'react'


export default function Works() {
  const [slide,setSlide] = useState([])

 const handleClick =(next)=>{
   
   next === "left" ? setSlide (slide > 0 ? slide -1 :2) : 
   setSlide(slide< dataSlide.length-1 ? slide + 1: 0)
 }
  return (
    <div className='works' id='works'>
      <div className='slider' style={{transform:`translate(-${slide * 100}vw)`}}>
      {
        dataSlide.map((d)=>(
       
        <div className='container'>
      <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={d.icon} alt='' />
                  
                </div>
                <h2>{d.title}</h2>
                  <p>{d.desc}
                  
                  
                    </p>
                    <span>Projects</span>
              </div>
            </div>
            <div className='right'>
               <img src={d.img}/>
            </div>
          </div>
        </div>
        ))
      }
      </div>
      
      <img src='Assets/arrows2.png' alt='' className='arrow left' onClick={()=>handleClick('left')}/>
      <img src='Assets/arrows2.png' alt='' className='arrow right' onClick={()=>handleClick('')}/>

    </div>
  )
}
