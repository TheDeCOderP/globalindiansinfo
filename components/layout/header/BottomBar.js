import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Menuitems from '@/api/menus/menus.js'; 
import Banner from '@/components/Banner'

function Header() {
  const isExternalLink = (url) => url.startsWith('https');

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="header_nav bottombar hide_on_small">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav_menu">
          <Nav className="menu_links gap-30">
            {Menuitems.map((ele) =>
              ele.submenu ? (
                <Dropdown key={ele.id} className="links">
                  <Dropdown.Toggle id={`dropdown-${ele.id}`} className="">
                    <Link href={ele.slug} as={ele.slug} passHref legacyBehavior>
                      <a className="links">
                        {ele.icon} <span>{ele.name}</span>
                      </a>
                    </Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {ele.submenu.map((ele1) => (
                      <Dropdown.Item key={ele1.id}>
                        <Link href={ele1.slug} as={ele1.slug} passHref legacyBehavior>
                          <a
                            className="links"
                            target={isExternalLink(ele1.slug) ? "_blank" : "_self"}
                            rel={isExternalLink(ele1.slug) ? "noopener noreferrer" : undefined}
                          >
                            {ele1.icon} <span className="button-content">{ele1.name}</span>
                          </a>
                        </Link>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link href={ele.slug} as={ele.slug} passHref key={ele.id} legacyBehavior>
                  <a
                    className={['Apply For Jobs', 'Hire Talent', 'MagicA10'].includes(ele.name) ? 'navlinks' : 'links'}
                    target={isExternalLink(ele.slug) ? "_blank" : "_self"}
                    rel={isExternalLink(ele.slug) ? "noopener noreferrer" : undefined}
                  >
                    {ele.icon} <span className="button-content">{ele.name}</span>
                  </a>
                </Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
