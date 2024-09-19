
import React from 'react';
import MiddleBar from '../layout/header/MiddleBar'
import BottomBar from '../layout/header/BottomBar';
import TopBar from '../layout/header/TopBar';

import Footer from '../layout/footer/Footer';
import { useRouter } from 'next/router';
import AdminRouter from '../../cookies/UserRouter'


const OtherPageLayout = ({ children }) => {
  const router = useRouter();

    const { pathname } = router;
const pageName = pathname.substring(1); // Remove the leading slash if needed

  return (
    <>
    <AdminRouter>
     <header>
      <TopBar/>
       <MiddleBar/>
     <BottomBar/>
     </header>
     <div className="other_pages">
     <div className='other_pages_banner'>
    
        <h2 className="page_title text-light">{pageName}</h2>
        </div>
     </div>
      {children}
      <footer><Footer/></footer>
      </AdminRouter>
      </>
  );
};

export default OtherPageLayout;
