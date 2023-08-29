// components/MainLayout.js
import React from 'react';
import MiddleBar from '../header/MiddleBar'
import BottomBar from '../header/BottomBar';
import TopBar from '../header/TopBar';

import Footer from '../Footer';

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
