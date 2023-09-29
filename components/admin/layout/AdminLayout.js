// components/MainLayout.js
import Head from "next/head";
import React from "react";
import SideBar from '@/components/admin/sideBar';
import Link from "next/link";
import PrivateRouter from "@/components/PrivateRouter";
const AdminLayout = ({ children }) => {
  return (
    <>
    <PrivateRouter>
      <Head>
        <title> Admin Panel</title>
        <link rel="icon" href="/uploads/images/site-logo1.png" />
      </Head>
      <section className="">
        <div className="row admin_panel">

          <div className="col-sm-12 col-lg-2 col-md-2 sidebar">



            <SideBar />

</div>
          <div className="col-sm-12 col-lg-10 col-md-10 dashboard"> 
          <div className="row">
            <div className="col bg-light">
            <header className="bg-light text-dark p-4">
              <h2 className="text-center">Global Indians Info - Admin Panel</h2>
            </header>
            </div>
          </div>
          <div className="row">
            <div className="col sidebar_panel">
           {children}
           </div></div>

           <div className="row">
            <div className="col bg-light ">
            <footer className="bg-light text-dark p-2 text-center">
              <b className="text-center"><Link href="https://www.prabisha.co.uk" target = "_blank">Prabisha Consulting</Link> - All Rights Reserved</b>
            </footer>
            </div>
          </div>
           </div>
         
        </div>
      </section>
      </PrivateRouter>
    </>
  );
};

export default AdminLayout;
