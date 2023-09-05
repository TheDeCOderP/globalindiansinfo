import React from 'react';

const LimitedFAQs = () => {
  const faqs = [
    {
        title:  'What is Global Indians Info?',
        content:'Global Indians Info is an online platform dedicated to connecting and empowering people of Indian origin around the world. It provides information, resources, and a community for global Indians to stay connected and informed.',
    },
   
    {
        title: 'How can I join Global Indians Info?',
        content: 'Joining Global Indians Info is easy! Simply join our Whatsapp group',
      },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.title}</h3>
          <p>{faq.content}</p>
        </div>
      ))}
    </div>
  );
}

export default LimitedFAQs;
