import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const contacts = [
  {
    icon: FaWhatsapp,
    heading: 'UK Jobs Group',
    link: 'https://chat.whatsapp.com/H2kjm74Dao9FNT0xWn6P9s'
  },
  {
    icon: FaWhatsapp,
    heading: 'India Jobs Group',
    link: 'https://chat.whatsapp.com/KGbEPtFJF76D8yQkN2iGC2'
  },
  {
    icon: FaWhatsapp,
    heading: 'Recycle UK Group',
    link: 'https://chat.whatsapp.com/EJcrwn2WfuFK51UjazLlNp'
  },
];

const WhatsappCommunity = () => {
  return (
    <div className="container mt-2">
      <h1 className="text-center mb-5">Our Whatsapp Community</h1>
      <div className="row">
        {contacts.map((contact, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-4 text-center">
            <div className="box-shadow p-3">
              <a href={contact.link} className="text-decoration-none text-dark">
                <contact.icon className="text-center mx-auto mb-2" style={{ fontSize: '3rem', color: '#25D366' }} target='_blank'/>
                <h4 className="text-center mt-2">{contact.heading}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsappCommunity;
