import { useState } from 'react'
import './Contact.scss'

function Contact() {
 const[message,setMessage]=useState(false)
  const submitHandler = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
    <div className='left'>
     <img src='Assets/contact2.png' alt=''/>
    </div>
    <div className='right'>
    <h2>Contact</h2>
       <form onSubmit={submitHandler}>
        <input type="email" placeholder="Email"/>
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send</button>
        { message &&  <span>Thanks I'II  reply ASAP :)</span>}
       </form>
    </div>

      
    </div>
  )
}

export default Contact
