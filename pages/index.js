// pages/index.js
'use client'
import React from 'react';
/* import Carousel from './components/Carousel'; */
import Categories from './components/Categories';

const HomePage = () => {
  return (
  
  <div className="home_page">
 {/*  <section className="carousel_section">
	  <Carousel />
    </section> */}
  <section className="banner_section">
	  <h2>Global <br></br><span className="white">Indians</span> <span className="green">Info</span></h2>
    </section>
    <section className="categories_section pt-4 pb-4">
    <h1 className="text-center">Important Categories</h1>
    <Categories/>
    </section>

    </div>
    
    
  );
};

HomePage.layout = 'construction';
export default HomePage;
