import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMobileAlt, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { FiHome, FiInfo, FiBriefcase, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className="mx-2">
    <footer className="bg-light text-dark">
      <div className="">
        <div className="row">
          <div className="col-md-2">
          <Link href="/"><img
          className="site-footer-logo"
          src="/uploads/images/site-logo3.png"
          alt="site_logo"
        /></Link>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><FiHome className="mr-2" /><Link href="/">Home</Link></li>
              <li><FiInfo className="mr-2" /><Link href="/about">About Us</Link></li>
              <li><FiBriefcase className="mr-2" /><Link href="/blogs">Blogs</Link></li>
              <li><FiMail className="mr-2" /><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-md-2">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><FaFacebook className="mr-2" /><a href="https://www.facebook.com/groups/globalindiansinfo/" target="blank">Facebook</a></li>
              <li><FaTwitter className="mr-2" /><a href="https://twitter.com/globalindian_in" target="blank">Twitter</a></li>
              <li><FaInstagram className="mr-2" /><a href="https://www.instagram.com/p/C30FvUPMMdv/?igsh=MTc5bzdxaTZrdWw3dg==" target="blank">Instagram</a></li>
              <li><FaLinkedin className="mr-2" /><a href="https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in" target="blank">Linkedin</a></li>
            </ul>
          </div>
          <div className="col-md-2">
          <h5 style={{ whiteSpace: 'nowrap' }}>Our Associates</h5>
            <ul className="list-unstyled">
              <li><FaGlobe className="mr-2" /><a href="https://www.prabisha.co.uk" target="_blank">Prabisha UK</a></li>
              <li><FaGlobe className="mr-2" /><a href="https://www.prabisha.com/" target="_blank">Prabisha India</a></li>
              <li><FaGlobe className="mr-2" /><a href="https://bidisharay.com/" target="_blank">Bidisha Ray</a></li>
              <li><FaGlobe className="mr-2" /><a href="https://www.prishatheexplorer.com/" target="_blank">Prisha The Explorer</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
             <li><FaMobileAlt className="mr-2" /> <a href="tel:+44-7867090363">+44-7867090363</a></li> 
            <li>  <FiMail className="mr-2" /> <a href="mailto:info@prabisha.com">info@prabisha.com</a></li>
            <li> <FaMapMarkerAlt className="mr-2 " /> <a href="https://www.google.com/maps?q=71-75+Shelton+St.,+Covent+Garden,+London,+UK+-+WC2H9JQ" target="_blank" className="p-0">Harrow On The Hill, London, UK - HA1 1EL
                </a></li>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights">
       <h4>Global Indians Info © 2023 . All Rights Reserved . || Powered by <a href="https://prabisha.co.uk/" target='blank'  style={{ color: 'orange' }}> Prabisha Consulting Limited UK</a></h4>
      </div>
      <div className="whatsapp-container">
    <a href={`https://api.whatsapp.com/send?phone=+44-7867090363&text=I%20want%20to%20find%20out%20about%20your%20support%20and%20services`} target="_blank" rel="noopener noreferrer">
      <img src="/social/icons8-whatsapp.svg" alt="WhatsApp Logo" width="30" height="30"/>
    </a>
  </div>
    </footer>
    </section>
  );
};

export default Footer;
