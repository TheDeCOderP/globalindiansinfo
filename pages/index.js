// pages/index.js
'use client'
import React from 'react';
import Carousel from '../components/pages/home/Carousel';
import RotatingTextBanner from '../components/pages/home/RotatingText';
import Categories from '../components/pages/home/Categories';
import Globes from '../components/pages/home/GlobeSection';
import FeaturedNews from '../components/pages/articles/latest3'
import Sponsors from '../components/pages/home/Sponsers'
import AdBanner from '../components/pages/home/AdBanners'
import Content from '../components/pages/home/Content'
import LimitedFAQs from '@/components/pages/faqs/LimitedFAQs';
import { useRouter } from 'next/router'; 


const HomePage = () => {


  return (
  
  <div className="home_page">
  <section className="carousel_section">
	  <Carousel />
    <RotatingTextBanner/>
    </section>
    <section className='section content_section'>
      <Content />
    </section>
  <section className="section featured_blogs_section">
  <h1 className="text-center"><span className="green">Featured</span> News</h1>
	  <FeaturedNews />
    </section>
    <section className="section categories_section">
    <h1 className="text-center pb-2"><span className="green">Important</span> Categories</h1>
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
      <LimitedFAQs />
   
    </section>
  
    <section className="sponsors_section">
     <Sponsors/>
    </section>
   

    </div>
    
    
  );
};

HomePage.layout = 'construction';
export default HomePage;
