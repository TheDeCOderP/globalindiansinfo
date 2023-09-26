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
    <div className="sidebar_admin_panel mt-4 mb-4">
      
    <Link href="/pcsadmin" onClick={handleClose}><img
          className="admin_site-logo bg-light p-2"
          src="/uploads/images/site-logo.png"
          alt="Third slide"
        /></Link>
        <div className="row mt-4 text-center ">
          <div className="col text-light d-flex flex-column links">
            <Link href="/pcsadmin" className=" fw-bold ">Dashboard</Link>
            <Link href="/pcsadmin/articles" className=" fw-bold ">Articles</Link>
            <Link href="/pcsadmin/blogs" className=" fw-bold ">Blogs</Link>
            <Link href="/pcsadmin/business/listings" className=" fw-bold ">Business</Link>
          </div>
        </div>

    </div>
    
      {/* <Button variant="light" onClick={handleShow} className='admin_sidebar_button'>
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
      </Offcanvas> */}
    </>
  );
}

export default SideBar;