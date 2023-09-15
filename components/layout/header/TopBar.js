import React from 'react'
import {FaEnvelope } from 'react-icons/fa';

function TopBar() {
  return (
    <>
    <div className='sociallinks1' >
      
       
        <span>Looking for Trusted Solutions for your IT, Digital Marketing, and Hiring needs? Visit <b><a href="https://www.prabisha.co.uk" target="_blank">Prabisha Consulting</a></b></span>
       
    
    </div>
    <div className='sociallinks' >
      
        <a  href="mailto:info@prabisha.com" target="blank" style={{color:"white"}}><FaEnvelope className="mr-4" color='white' size={24}  /><span className='wordlinks hide_on_mobile' style={{marginLeft:"5px"}}>info@prabisha.com</span></a>
        <div className="whatsapp-top-container wordlinks">
        <span>Need any Help?</span>
       
        <a href={`https://api.whatsapp.com/send?phone=+44-7867090363&text=I%20want%20to%20find%20out%20about%20your%20support%20and%20services`} target="_blank" rel="noopener noreferrer">
        <div className="whatsapp_icon">
      <img src="/social/icons8-whatsapp.svg" alt="WhatsApp Logo" width="30" height="30"/>
      <span className='whatsapp'>WhatsApp Us</span>
      </div>
    </a>
    </div>
   <a href="/list-your-business" className="bg-light text-dark p-2">List Your Business Now</a>
    </div>
   
    </>
  )
}

export default TopBar;