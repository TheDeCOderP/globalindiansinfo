// pages/index.js
'use client'
import React from 'react';
import Carousel from '../components/pages/home/Carousel';
import Categories from '../components/categories/articles/Featured';
import Globes from '../components/pages/home/GlobeSection';
import FeaturedBlogs from '../components/categories/articles/Latest'
import Sponsors from '../components/pages/home/Sponsers'
import AdBanner from '../components/pages/home/AdBanners'
import FAQs from '../pages/faqs';

const HomePage = () => {
  return (
  
  <div className="home_page">
  <section className="carousel_section">
	  <Carousel />
    </section>
  <section className="section featured_blogs_section">
	  <FeaturedBlogs />
    </section>
    <section className="section categories_section">
    <h1 className="text-center"><span className="green">Important</span> Categories</h1>
    <Categories/>
    </section>
    <section className="section adbanner">
     <AdBanner/>
    </section>
    <section className="section globe_section">
     <Globes/>
    </section>
    <section className="section faq_section">
    <h1 className="text-center"><span className="green">Frequently</span> Asked Questions</h1>
     <FAQs/>
    </section>
    
    <section className="sponsors_section">
     <Sponsors/>
    </section>
   

    </div>
    
    
  );
};

HomePage.layout = 'construction';
export default HomePage;
