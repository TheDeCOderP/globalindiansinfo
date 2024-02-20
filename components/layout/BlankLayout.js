// components/MainLayout.js
import React from 'react';
import Footer from './footer/Footer';
const BlankLayout = ({ children }) => {
  
  return (
    <div className="">
   
      {children}
    
      </div>
  );
};

export default BlankLayout;
