import Container from 'react-bootstrap/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import SearchComponent from './SearchBar';
import GoogleTranslate from '../GoogleTranslate.js';



function Header() {
  
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark"  className="header_nav topbar ">
      <Container>
       <div className="row">
        <div className="logo_bar col col-sm-6 col-md-2 col-lg-2">
        <Link href="/"><img
          className="site-logo"
          src="/uploads/images/site-logo.png"
          alt="site_logo"
        /></Link>
        </div>
         <div className="col col-sm-6 col-md-6 col-lg-6 searchBar">
        <SearchComponent  />
        </div>

        <div className="col col-sm-6 col-md-2 col-lg-2 social-icons hide_on_mobile">
        
              <a href="https://www.facebook.com/groups/globalindiansinfo/" target="blank"><FaFacebook className="mr-2" /></a>
              <a href="https://twitter.com/globalindian_in" target="blank"><FaTwitter className="mr-2" /></a>
              <a href="https://www.instagram.com/global_indian_official/" target="blank"><FaInstagram className="mr-2" /></a>
             <a href="https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in" target="blank"> <FaLinkedin className="mr-2" /></a>
            
        </div>
       
        
       <div className="col col-sm-6 col-md-2 col-lg-2 google_translate hide_on_mobile">
        <GoogleTranslate/> 
        </div>
        </div>
      </Container>
      
       
    </Navbar>
     
     </>
  );
}

export default Header;