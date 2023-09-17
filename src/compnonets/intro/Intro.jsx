import { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

  

export default function Intro() {
  const element = useRef()

  useEffect(()=>{
    init(element.current, { showCursor: false, strings: ['Designer','Developer', 'Content Creator', 'UIUX Designer' ] })

  
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="img-container">
          <img src='../Assets/cynthia-removebg-preview.png' alt="" />
        </div>
      </div>
      <div className="right">
        <div className='wrapper'>
           <h2>Hi There, I'm</h2>
           <h1>Cynthia Agu</h1>
           <h3>Freelance   <span ref={element}></span></h3>

        </div>
     <a href="#portfolio">
     
     <img src='../Assets/arrow-down-removebg-preview.png' alt=""/>

     </a>

        </div>


    </div>
  )
}
