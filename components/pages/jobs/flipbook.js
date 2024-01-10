// components/FlipbookLink.js
import React from 'react';
import Link from 'next/link';

const FlipbookLink = () => {
  return (
    <Link href="https://www.flipbookpdf.net/web/site/ff29b44daac8ef707d1deed36a9ad9f4101df5ef202401.pdf.html" passHref legacyBehavior>
       
      <a target="_blank" rel="noopener noreferrer" className='text-center'>
     
        <img src="/pdf/jobsflipbook.jpg" alt="Flipbook Link" />
        <div className='text-center m-2'>
        <button className='button rounded'>View Flipbook</button>
        </div>
       
      </a>
    </Link>
  );
};

export default FlipbookLink;
