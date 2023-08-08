
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';



const OtherPageLayout = ({ children }) => {
  const router = useRouter();

    const { pathname } = router;
const pageName = pathname.substring(1); // Remove the leading slash if needed

  return (
    <>
     <header> <Header/></header>
     <div className="other_pages">
     <div className='other_pages_banner'>
    
        <h2 className="page_title">{pageName}</h2>
        </div>
     </div>
      {children}
      <footer><Footer/></footer>
      </>
  );
};

export default OtherPageLayout;
