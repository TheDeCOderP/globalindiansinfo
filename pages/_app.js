// pages/_app.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/MainLayout';
import AdminLayout from './admin/AdminLayout';
import OtherPageLayout from './components/layout/OtherPagesLayout';
import CategoryLayout from './components/layout/CategoryPagesLayout';
import Head from 'next/head';

import 'typeface-raleway';
import 'typeface-league-spartan';


 


import './globals.css';
import './aanchal.css';
import './sai.css';
import './mobile_globals.css';

const MyApp = ({ Component, pageProps }) => {
  // Determine if the Component has a custom layout
  let CustomLayout = Layout;
  if (Component.layout === 'admin') {
    CustomLayout = AdminLayout;
  }
  else if (Component.layout === 'other') {
    CustomLayout = OtherPageLayout;
  }
  else if (Component.layout === 'category') {
    CustomLayout = CategoryLayout;
  }
  

  return (
    <>
    <Head>
       <title>Global Indians Info</title>
       <link rel="icon" href="/uploads/site-logo.png" />
    </Head>
    
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
    
    
    </>
  );
};

export default MyApp;
