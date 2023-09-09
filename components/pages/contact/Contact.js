import { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { FaQuestionCircle, FaUsers, FaBullhorn, FaUserTie , FaHandshake, FaNewspaper, FaGlobe} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

import { FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';
import ContactForm from './Form';

const Contact =() => {
      

    return (
        <>
<div className="text-center">
   
<div className="row">
        <div className="col-md-12">
          <section className="mb-5">
            <h1 className="text-center">Connect with Us</h1>
            <p className="text-center">Thank you for visiting our website dedicated to the Indian diaspora. We value your interest and welcome your inquiries, feedback, and contributions. Connecting with our community is essential to us, and we look forward to hearing from you. Below, you'll find various ways to get in touch with us.</p>
          </section>
        </div>
      </div>
      
        
        <div className="">
            <div className="row mt-4 mb-4">
              
                <div className="col-sm-12 col-lg-6 col-md-6 box-shadow p-4 ">
                 <ContactForm className="box-shadow"/>  
                </div>
               
                <div className="col-sm-12 col-lg-6 col-md-6  p-4">
                    <Card className="contact_cards">

                        <Card.Body >
                            <FaEnvelope size={30} color={'var(--primary)'} />
                            <Card.Title>info@prabisha.com</Card.Title>


                            <Link href="mailto:info@prabisha.com"><Button className="global_buttons">Mail Now</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card className="contact_cards">

                        <Card.Body  >
                            <FaMobile size={30} color={'var(--primary)'} />
                            <Card.Title>+44-7867090363</Card.Title>

                            <Link href="tel:+44-7867090363">   <Button className="global_buttons">Call Now</Button></Link>
                        </Card.Body>
                    </Card>


                </div>
            </div>
        </div>
        <div className=" contact row">
        <div className="col-md-12">
          <section className=" mb-3">
            <h1 className="text-center mt-3">Contact Information</h1>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="box-shadow p-3">
                <div className="icon">
              <FaQuestionCircle color={'orange'} />
            </div>
                <h4 className="text-center">General <span className="green"> Inquiries</span></h4>
                <p className="text-center"> If you have any general questions, suggestions, or feedback, please feel free to reach out to our dedicated team at info@prabisha.com. We're here to assist you with any information you may need.</p>
                </div>
              </div>
              
              <div className="col-md-4">
              <div className="box-shadow p-3">
              <div className="icon">
              <FaUsers color={'orange'} />
            </div>
                <h4 className="text-center">WhatsApp <span className="green"> Community Group</span></h4>
                <p className="text-center">Join our lively WhatsApp community group to connect with fellow Global Indians from around the world. Share your stories, experiences, and insights.</p>
              </div>
              </div>
              <div className="col-md-4">
              <div className="box-shadow p-3">
              <div className="icon">
              <FaUserTie color={'orange'} />
            </div>
                <h4 className="text-center"> Ambassador<span className="green"> Program</span> </h4>
                <p className="text-center"> If you're interested in becoming an Ambassador for the Indian diaspora in your workplace, university, city, or any other community, please click here and provide some basic information</p>
              </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-12">
          <section className=" mb-5">
           
            <div className="row">
              <div className="col-md-4">
              <div className="box-shadow p-3">
              <div className="icon">
              <FaHandshake color={'orange'} />
            </div>
                <h4 className="text-center">Partner <span className="green"> with Us</span></h4>
                <p className="text-center"> If you are an organization, business, or entity interested in collaborating or partnering with us to support the Indian diaspora community, please reach out to us at info@prabisha.com
</p>
              </div>
              </div>

              <div className="col-md-4">
              <div className="box-shadow p-3">
              <div className="icon">
              <FaNewspaper color={'orange'} />
            </div>
                <h4 className="text-center">Media and <span className="green"> Press Inquiries</span> </h4>
                <p className="text-center">For media and press inquiries, interviews, or collaborations, please contact our media relations team at info@prabisha.com
We're happy to provide information, interviews, and resources related to the Indian diaspora.</p>
              </div>
              </div>
              <div className="col-md-4">
              <div className="box-shadow p-3">
              <div className="icon">
              <FaGlobe color={'orange'} />
            </div>
                <h4 className="text-center">  Social<span className="green"> Media</span> </h4>
                <p className="text-center"> Stay updated and engage with us on our social media platforms. Follow us on Facebook, Twitter, Instagram, and LinkedIn, where we share news, stories, and updates related to the Indian diaspora community.</p>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="">
        <p className="text-center">Connecting with the Indian diaspora is at the heart of our mission, and we are eager to hear from you. Whether you have questions, ideas, or simply want to say hello, we encourage you to reach out using one of the contact methods mentioned above. Your engagement is vital to building a strong and vibrant community, and we look forward to connecting with you. 
     Thank you for being a part of our journey at www.globalindiansinfo.com</p>
        
        <a href="https://chat.whatsapp.com/IBD5TnnlJA5JPNy3JSylxT " className=" whatsapp_button " role="button" aria-pressed="true" target="_blank">Join Group</a>
      </div>



        </div>
        </>
      
    );
}

export default Contact;
