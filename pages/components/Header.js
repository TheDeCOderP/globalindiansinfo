import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Menuitems from '../api/menus/menus.js';
import GoogleTranslate from './GoogleTranslate.js';



function Header() {
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="header_nav">
      <Container>
       
        <Link href="/"><img
          className="site-logo"
          src="/uploads/images/site-logo.png"
          alt="Third slide"
        /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav_menu">
          
          <Nav className="menu_links">
            {
             Menuitems.map((item) => (
              <Link href={item.slug}>{item.name}</Link>

             )
             
             
             )

            }
           
           
          </Nav>
        </Navbar.Collapse>
       <div className="google_translate">
        <GoogleTranslate/> 
        </div>
      </Container>
      
       
    </Navbar>
     
     </>
  );
}

export default Header;