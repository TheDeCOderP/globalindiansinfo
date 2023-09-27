import React from "react";
import Image from "next/image";
import { FaGlobe, FaUsers, FaBullhorn, FaUserTie } from "react-icons/fa";

const Content = () => {
  return (
    <div className="home_content_section ">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="content-box box-shadow">
            <div className="icon">
              <FaGlobe />
            </div>
            <h2>Introducing <span className="green">GlobalIndiansInfo.com</span></h2>
            <p>
              Connecting the<span className="green"> Global Indian</span>  Diaspora across the globe! Are you a
              proud member of the Indian diaspora, living and thriving across
              the globe? Do you believe in the power of connection and
              collaboration? Then we've got some exciting news for you!
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="content-box box-shadow">
            <div className="icon">
              <FaBullhorn color={'orange'} />
            </div>
            <h2>Welcome to <span className="green">www.GlobalIndiansInfo.com</span></h2>
            <p>
              Your Gateway to Connect, Network, and Grow together! Our mission
              is clear: We want to bring together the vibrant and diverse
              Indian diaspora like never before. Whether you're a student,
              professional, entrepreneur, or just someone who's passionate about
              your Indian roots, this is YOUR platform.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="content-box2 box-shadow">
            <div className="icon">
              <FaUsers />
            </div>
            <h2>Connect with a <span className="green">Global Network</span></h2>
            <p>
              Join our WhatsApp community group and engage with like-minded
              individuals who share your background, interests, and goals. Share
              your stories, experiences, and ideas with fellow <span className="green"> Global Indians </span>
              from around the world. Let's foster a sense of belonging and unity
              like never before!
             
            </p>
            <div className="text-center pt-3">
            <a href="https://chat.whatsapp.com/IBD5TnnlJA5JPNy3JSylxT " className=" whatsapp_button" role="button" aria-pressed="true" target="_blank">Join Our Community</a>
            </div>
            
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="content-box2 box-shadow ">
            <div className="icon">
              <FaUserTie />
            </div>
            <h2>Become an<span className="green"> Ambassador</span></h2>
            <p>
              Are you passionate about representing the Indian diaspora in your
              corner of the world? We're looking for Ambassadors who will
              proudly carry the torch of our culture and heritage in their
              workplaces, universities, colleges, cities, and beyond. Fill in
              this form to join us as<span className="green"> Global Indian</span> Ambassador
            </p>
            <div className="text-center pt-3">
            <a href="https://forms.gle/3DRyhs1iTsJbHYdK7 " className=" whatsapp_button" role="button" aria-pressed="true" target="_blank">Apply Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center mt-4">
  <h1 className="text-center"><span className="green"> Why</span> Join Us?</h1>
  <div className="col-sm-12 col-md-6 col-lg-6 ">
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
<div className="col-sm-12 col-md-6 col-lg-6 ">
    <div className="image-content text-center ">
    <iframe width="100%" height="370" src="https://www.youtube.com/embed/niDNEeZYDMM?si=Rm0s8GNGNnP2hEY5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    
    </div>
   
  </div>
  
</div>


 </div>

  );
};

export default Content;
