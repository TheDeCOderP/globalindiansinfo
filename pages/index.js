// pages/index.js
'use client'
import React from 'react';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Globes from './components/GlobeSection';

const HomePage = () => {
  return (
  
  <div className="home_page">
  <section className="carousel_section">
	  <Carousel />
    </section>
  {/* <section className="banner_section">
	  <h2>Global <br></br><span className="white">Indians</span> <span className="green">Info</span></h2>
    </section> */}
    <section className="categories_section">
    <h1 className="text-center"><span className="green">Important</span> Categories</h1>
    <Categories/>
    </section>
    <section className="globe_section">
     <Globes/>
    </section>
   

    </div>
    
    
  );
};

HomePage.layout = 'construction';
export default HomePage;
