import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Menuitems from '@/api/menus/menus.js';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="header_nav bottombar hide_on_small "  >
    <Container fluid>
      {/* fluid */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav_menu" >
        <Nav className="menu_links gap-30" >
          {Menuitems.map((ele) =>
            ele.submenu ? (
              <Dropdown key={ele.id} className="links"  >
                <Dropdown.Toggle id={`dropdown-${ele.id}`} className='' >
                 <Link     key={ele.id} className='links'  href={ele.slug} as={`${ele.slug}`} >{ele.icon} <span>{ele.name}</span></Link>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {ele.submenu.map((ele1) => (
                    <Dropdown.Item key={ele1.id}>
                      <Link  onClick={()=> ele1.name=='Upskill' && console.log(ele1.slug) }  className='links' href={ele1.slug} as={`${ele1.slug}`}  >{ele1.icon} <span className="button-content">{ele1.name}</span></Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link   key={ele.id} className={ele.name=="Apply For Jobs" || ele.name=="Hire Talent" || ele.name=="MagicA10"?'navlinks':'links'} href={ele.slug} as={`${ele.slug}`} >{ele.icon}<span className="button-content">{ele.name} </span></Link>
            )
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
