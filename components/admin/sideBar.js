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
      
    <Link href="/pcsadmin/dashboard" onClick={handleClose}><img
          className="admin_site-logo bg-light p-2"
          src="/uploads/images/site-logo.png"
          alt="Third slide"
        /></Link>
        <div className="row mt-4 text-center ">
          <div className="col text-light d-flex flex-column links">
            <Link href="/pcsadmin/dashboard" className=" fw-bold ">Dashboard</Link>
            <Link href="/pcsadmin/articles" className=" fw-bold ">Articles</Link>
            <Link href="/pcsadmin/blogs" className=" fw-bold ">Blogs</Link>
            <Link href="/pcsadmin/business/listings" className=" fw-bold ">Business</Link>
            <Link href="/pcsadmin/magazines" className=" fw-bold ">Magazines</Link>
            <Link href="/pcsadmin/community" className=" fw-bold ">Community</Link>
            <Link href="/pcsadmin/important-links" className=" fw-bold ">Important Links</Link>
          </div>
        </div>

    </div>
    
     
    </>
  );
}

export default SideBar;