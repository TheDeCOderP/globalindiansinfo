// components/MainLayout.js
import React from 'react';
import Footer from './footer/Footer';
const BlankLayout = ({ children }) => {
  
  return (
    <div className="section">
   
      {children}
    
      </div>
  );
};

export default BlankLayout;
