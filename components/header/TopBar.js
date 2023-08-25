import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMobileAlt,FaEnvelope,FaWhatsapp,FaPhone,FaFlag,FaGlobeAmericas  } from 'react-icons/fa';

function TopBar() {
  return (
    <>
    <div className='sociallinks' >
        <a  href="mailto:info@prabisha.com" target="blank" style={{color:"white"}}><FaEnvelope className="mr-2" color='white'  /><span className='wordlinks' style={{marginLeft:"5px"}}>info@prabisha.com</span></a>
        <div className="whatsapp-top-container wordlinks">
        <span>Need any Help?</span>
        <a href={`https://api.whatsapp.com/send?phone=+44-7867090363&text=I%20want%20to%20find%20out%20about%20your%20support%20and%20services`} target="_blank" rel="noopener noreferrer">
      <img src="/social/icons8-whatsapp.svg" alt="WhatsApp Logo" width="30" height="30"/>
      <span className='whatsapp'>Whatsapp Us</span>
    </a>
    </div>
    </div>
    </>
  )
}

export default TopBar;