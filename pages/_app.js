// pages/_app.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/MainLayout';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import OtherPageLayout from '../components/layout/OtherPagesLayout';
import BlankLayout from '../components/layout/BlankLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import CategoryLayout from '../components/layout/category/DefaultLayout';
import Head from 'next/head';
import 'typeface-raleway';
import 'typeface-league-spartan';
import '@/styles/globals.css';
import '@/styles/aanchal.css';
import '@/styles/sai.css';
import '@/styles/mobile_globals.css';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  // Determine if the Component has a custom layout
  let CustomLayout = Layout;
  if (Component.layout === 'admin') {
    CustomLayout = AdminLayout;
  } else if (Component.layout === 'other') {
    CustomLayout = OtherPageLayout;
  } else if (Component.layout === 'category') {
    CustomLayout = CategoryLayout;
  } else if (Component.layout === 'blank') {
    CustomLayout = BlankLayout;
  }

  return (
    <>
      <Head>
        <title>Global Indians Info - Connecting Indians Globally</title>
        <link rel="icon" href="/uploads/images/site-logo1.png" />
        {/* Google Analytics script */}
       
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-REYQHZLHVX');
          `,
        }}></script>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-REYQHZLHVX"></Script>

      <CustomLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </CustomLayout>
    </>
  );
};

export default MyApp;
