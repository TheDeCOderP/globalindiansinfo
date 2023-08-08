// components/MainLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
     <header> <Header/></header>
      {children}
      <footer><Footer/></footer>
      </>
  );
};

export default MainLayout;
