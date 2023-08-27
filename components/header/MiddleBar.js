import Container from 'react-bootstrap/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import SearchComponent from './SearchBar';
import GoogleTranslate from '../GoogleTranslate.js';
import Menuitems from '@/api/menus/menus.js';


function Header() {

  


 
  
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" variant="dark"  className="header_nav topbar hide_on_small ">
      <div className="container-fluid">
       <div className="row">
        <div className="logo_bar col col-sm-6 col-md-2 col-lg-2">
        <Link href="/"><img
          className="site-logo"
          src="/uploads/images/site-logo.png"
          alt="site_logo"
        /></Link>
        </div>
         <div className="col col-sm-6 col-md-5 col-lg-5 searchBar">
        <SearchComponent  />
        </div>

        <div className="col col-sm-6 col-md-2 col-lg-2 social-icons hide_on_mobile">
        <a href="https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in" target="blank"> <img src="/social/icons8-linkedin.svg" alt="linkedin" width="30" height="30"/></a>
              <a href="https://www.facebook.com/groups/globalindiansinfo/" target="blank"> <img src="/social/icons8-facebook.svg" alt="fb" width="30" height="30"/></a>
              <a href="https://www.instagram.com/global_indian_official/" target="blank"><img src="/social/icons8-instagram.svg" alt="insta" width="30" height="30"/></a>
              <a href="https://twitter.com/globalindian_in" target="blank"><img src="/social/icons8-twitter.svg" alt="twitter" width="30" height="30"/></a>
              
            
            
        </div>
       
        
       <div className="col col-sm-6 col-md-2 col-lg-2 google_translate hide_on_mobile">
        <GoogleTranslate/> 
      </div>
        </div>
      </div>
      
       
    </Navbar>


    <div className="container-fluid hide_on_big mt-5 p-2"><div className="row">
        <div className="col-sm-6 logo_bar ">
        <Link href="/"><img
          className="site-logo"
          src="/uploads/images/site-logo.png"
          alt="site_logo"
        /></Link>
        </div>
        <div className="col-sm-6 menu_bar ">
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="header_nav bottombar hide_on_big">
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav_menu">
          <Nav className="menu_links">
            {Menuitems.map((item) => (
              <Link key={item.id} href={`${item.slug}`}  id="responsive-navbar-nav">
                {item.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
        </div>
        </div></div>
     
     </>
  );
}

export default Header;