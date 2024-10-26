// /pages/magazines/[monthYear].js
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head'

const Flipbook = () => {
  const router = useRouter();
  const { monthYear } = router.query;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this code only runs on the client side
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (router.isReady && monthYear) {
      const flipbook = document.getElementById('df_manual_book');
      if (flipbook) {
        flipbook.setAttribute('source', `/magazines/magazines/${monthYear.toLowerCase()}.pdf`);
      }
    }
  }, [router.isReady, monthYear]);

  if (!isClient) return null; // Avoids rendering on the server

  return (
    <div>
      <Head>
      <Head>
      <link rel="stylesheet" href="/magazines/dflip/css/dflip.min.css" />
      <link rel="stylesheet" href="/magazines/dflip/css/themify-icons.min.css" />
      <link rel="stylesheet" href="/magazines/dflip/css/styles.css" />
    </Head>
      </Head>
      <div className="row">
        <div className="col-xs-12">
          {/* Flipbook */}
          <div
            className="_df_book flipbook-background"
            height="100vh"
            webgl="true"
            source=""
            id="df_manual_book"
          ></div>
          <a href="/magazines" className="return_to_magazines">View More Magazines</a>
        </div>
      </div>

      {/* jQuery */}
      <Script src="/magazines/dflip/js/libs/jquery.min.js" strategy="beforeInteractive" />
      {/* Flipbook main Js file */}
      <Script src="/magazines/dflip/js/dflip.min.js" strategy="beforeInteractive" />
    </div>
  );
};

Flipbook.layout = "blank"

export default Flipbook;
