import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
 


  return (
    <> 
      <Button variant="light" onClick={handleShow} className='admin_sidebar_button'>
    <img src='/menu-icon.png' style={{width:30}}></img>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Link href="/pcsadmin" onClick={handleClose}><img
          className="site-logo"
          src="/uploads/images/site-logo.png"
          alt="Third slide"
        /></Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-dark">
       <Link href="/pcsadmin/blogs" onClick={handleClose}>Blogs</Link>
       <Link href="/pcsadmin/articles" onClick={handleClose}>Articles</Link>
       <Link href="/pcsadmin/business/listings" onClick={handleClose}>Business List</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;