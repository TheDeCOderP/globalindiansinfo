import React from "react";
import Image from "next/image";
import { FaGlobe, FaUsers, FaBullhorn, FaUserTie } from "react-icons/fa";
import TopSearches from '@/components/pages/home/SearchedItems';
import Link from "next/link";

const Content = () => {
  return (
    <div className="home_content_section ">
    <div className="row">
  <div className="col-md-4">
    <div className="content-box2 box-shadow">
      <div className="icon">
        <FaGlobe />
      </div>
      <h2>Introducing <span className="green">GlobalIndiansInfo.com</span></h2>
      <p>
        Connecting the<span className="green"> Global Indian</span>  Diaspora across the globe! Are you a
        proud member of the Indian diaspora, living and thriving across
        the globe?
      </p>
      <div className="text-center pt-3">
        <Link href="/about" className="whatsapp_button" role="button" aria-pressed="true" >More About Us</Link>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="content-box2 box-shadow">
      <div className="icon">
        <FaUsers />
      </div>
      <h2>Connect with a <span className="green">Global Network</span></h2>
      <p>
        Join our WhatsApp community group and engage with like-minded
        individuals who share your background, interests, and goals.
      </p>
      <div className="text-center pt-3">
        <a href="https://chat.whatsapp.com/IBD5TnnlJA5JPNy3JSylxT " className="whatsapp_button" role="button" aria-pressed="true" target="_blank">Join Our Community</a>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="content-box2 box-shadow ">
      <div className="icon">
        <FaUserTie />
      </div>
      <h2>Become an<span className="green"> Ambassador</span></h2>
      <p>
        Are you passionate about representing the Indian diaspora in your
        corner of the world? We're looking for Ambassadors who will
        proudly carry the torch of our culture and heritage in their
        workplaces.
      </p>
      <div className="text-center pt-3">
        <a href="mailto:info@prabisha.com" className="whatsapp_button" role="button" aria-pressed="true" target="_blank">Apply Now</a>
      </div>
    </div>
  </div>
</div>


      <div className="row align-items-center mt-4">
  <h1 className="text-center"><span className="green"> Why</span> Join Us?</h1>
  <div className="col-sm-12 col-md-5 col-lg-5 ">
    <div className="p-4 box-shadow">
    <p className="main">
        Ready to make a difference and connect with Global Indians worldwide? Join us at <a href="www.globalindiansinfo.com">www.globalindiansinfo.com</a> today! Let's unite, inspire, and empower each other aswe proudly represent the Indian diaspora  on the global stage. Together, we'll create a brighter future and celebrate our incredible journey.
        Tag your friends, share this post, and  let's build a global community like no other! 
      </p>
      <ul>
        <li>Network with a diverse, global community.</li>
        <li>Stay updated on diaspora events and news.</li>
        <li>Showcase your talents and achievements.</li>
        <li>Make a positive impact on your community.</li>
        <li>Discover exciting opportunities for growth.</li>
      </ul>
     
    </div>
  </div>
<div className="col-sm-12 col-md-4 col-lg-4 ">
    <div className="image-content text-center ">
    <iframe width="100%" height="370" src="https://www.youtube.com/embed/niDNEeZYDMM?si=Rm0s8GNGNnP2hEY5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    
    </div>
   
  </div>
  <div className="col-sm-12 col-md-3 col-lg-3 box-shadow p-4">
          <h2 className="text-center">Top Searches</h2>
           <TopSearches/>
        </div>
  
</div>


 </div>

  );
};

export default Content;
