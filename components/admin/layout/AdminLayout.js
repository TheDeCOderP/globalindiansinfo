// components/MainLayout.js
import Head from "next/head";
import React from "react";
import SideBar from '@/components/admin/sideBar';
import Link from "next/link";
const AdminLayout = ({ children }) => {
  return (
    <>
    <Head>
       <title> Admin Panel</title>
       <link rel="icon" href="/uploads/images/site-logo1.png" />
    </Head>
    <section className="">
      <div className="row admin_panel">
        
        <div className="col-sm-12 col-lg-12 col-md-12 dashboard">
          
          <header className="bg-primary text-light p-4">
            <div className="row admin_header">
              <div className="col-3"><SideBar/></div>
              <div className="col-9 menu_links">
                <Link href="/pcsadmin/blogs" >Blogs</Link>
       <Link href="/pcsadmin/articles" >Articles</Link></div>
            </div>
          </header>

          {children}
          <footer className="bg-success text-light p-4">Admin Footer</footer>
        </div>
      </div>
    </section>
    </>
  );
};

export default AdminLayout;
