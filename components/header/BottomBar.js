import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Menuitems from '@/api/menus/menus.js';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="header_nav bottombar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav_menu">
          <Nav className="menu_links">
            {Menuitems.map((item) => (
              <Link key={item.id} href={`${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
