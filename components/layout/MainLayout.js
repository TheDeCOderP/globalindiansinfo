// components/MainLayout.js
import React from 'react';
import MiddleBar from '../layout/header/MiddleBar'
import BottomBar from '../layout/header/BottomBar';
import TopBar from '../layout/header/TopBar';

import Footer from '../layout/footer/Footer';

const MainLayout = ({ children }) => {
  
  return (
    <>
     <header> 
      <TopBar/>
      <MiddleBar/>
     <BottomBar/>
     
     </header>
      {children}
      <footer><Footer/></footer>
      </>
  );
};

export default MainLayout;
