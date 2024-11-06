// pages/index.js
'use client'
import React from 'react';
import Carousel from '../components/pages/home/Carousel';
import RotatingTextBanner from '../components/pages/home/RotatingText';
import Categories from '../components/pages/home/Categories';
import FeaturedNews from '../components/pages/articles/latest3'
import Sponsors from '../components/pages/home/Sponsers'
import AdBanner from '../components/pages/home/AdBanners'
import Content from '../components/pages/home/Content'
import WhatsappCommunity from '../components/pages/home/Our-Whatsapp-Community'
import LimitedFAQs from '@/components/pages/faqs/LimitedFAQs';
import HomePageBlogs from '../components/pages/blogs/home-blogs'
import BusinessListings from '../components/pages/business/HomePage'
import MonthlyMagazine from '../components/pages/home/MonthlyMagazine'
import SuccessStories from '@/components/pages/home/SuccesStories';
import CommunitySection from '@/components/GIICommunity'

const HomePage = () => {


  return (
  
  <div className="home_page">
  <section className="carousel_section">
	  <Carousel />
    <RotatingTextBanner/>
    </section>
    <section className="container section featured_blogs_section">
  <h1 className="text-center"><span className="green">Featured</span> News</h1>
	  <FeaturedNews />
    </section>
   <section className='container'>
    <CommunitySection/>
   </section>
    <section className='container section content_section'>
      <Content />
    </section>
    <section className='section featured_business_section'>
      <WhatsappCommunity />
    </section>
 
    <section className="container section featured_business_section">
  <h1 className="text-center"><span className="green">Listed</span> Businesses</h1>
	  <BusinessListings />
    </section>
  
    <section className="container section categories_section">
    <h1 className="text-center pb-2"><span className="green">Important</span> Categories</h1>
    <Categories/>
    </section>
    
    <section className="section adbanner">
     <AdBanner/>
    </section>

    <section className="container section magazine_section">
    <MonthlyMagazine/>
    </section>
    <section className="container section successstories_section bg-fafafa">
    <SuccessStories/>
    </section>
    <section className="container section faq_section">
      <h1 className="text-center"><span className="green">Frequently</span> Asked Questions</h1>
      <LimitedFAQs />
    </section>
    <section className="container section blogs_section">
    <h1 className="text-center"><span className="green">Recent</span> Blogs</h1>
      <HomePageBlogs />
    </section>
  
    <section className="sponsors_section">
     <Sponsors/>
    </section>
   

    </div>
    
    
  );
};

HomePage.layout = 'construction';
export default HomePage;
