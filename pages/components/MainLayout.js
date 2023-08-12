// components/MainLayout.js
import React from 'react';
import TopBar from './header/TopBar'
import BottomBar from './header/BottomBar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
     <header> <TopBar/>
     <BottomBar/>
     </header>
      {children}
      <footer><Footer/></footer>
      </>
  );
};

export default MainLayout;
