// pages/index.js
'use client'
import React from 'react';
import Carousel from '../components/pages/home/Carousel';
import RotatingTextBanner from '../components/pages/home/RotatingText';
import Categories from '../components/pages/home/Categories';
import Globes from '../components/pages/home/GlobeSection';
import FeaturedNews from '../components/pages/articles/articles'
import Sponsors from '../components/pages/home/Sponsers'
import AdBanner from '../components/pages/home/AdBanners'
import LimitedFAQs from '@/components/LimitedFAQs';
import { useRouter } from 'next/router'; 


const HomePage = () => {
  const router = useRouter(); 

  const handleClick = () => {
   
    router.push('/faqs');
  };
  return (
  
  <div className="home_page">
  <section className="carousel_section">
	  <Carousel />
    <RotatingTextBanner/>
    </section>
  <section className="section featured_blogs_section">
  <h1 className="text-center"><span className="green">Featured</span> News</h1>
	  <FeaturedNews />
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
      <LimitedFAQs />
      <button onClick={handleClick}>Show All FAQs</button>
    </section>
    {/* <section className="section faq_section">
    <h1 className="text-center"><span className="green">Frequently</span> Asked Questions</h1>
     <FAQs/>
    </section>
     */}
    <section className="sponsors_section">
     <Sponsors/>
    </section>
   

    </div>
    
    
  );
};

HomePage.layout = 'construction';
export default HomePage;
