// pages/faq.js
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AllFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: 'What is Global Indians Info?',
      content:'Global Indians Info is an online platform dedicated to connecting and empowering people of Indian origin around the world. It provides information, resources, and a community for global Indians to stay connected and informed.',
    },
    {
      title: 'How can I join Global Indians Info?',
      content: 'Joining Global Indians Info is easy! Simply join our Whatsapp group',
    },
    {
      title: 'Is Global Indians Info only for Indians living abroad?',
      content: 'No, Global Indians Info is for anyone of Indian origin, regardless of where they live. We welcome Indians living in India and abroad, as well as those who have an interest in Indian culture and heritage.',
    },
    {
      title: 'What kind of content can I find on Global Indians Info?',
      content: 'Global Indians Info offers a wide range of content, including articles, news, events, and discussions related to Indian culture, business, education, and more. You can also connect with other members and participate in forums and groups.',
    },
    {
      title: ' Can I promote my business or events on Global Indians Info?',
      content: 'Yes, you can promote your business or events on Global Indians Info. We have a dedicated section for business listings and event promotions. Just create an account and follow the guidelines to submit your listings.',
    },
    {
      title: 'How can I connect with other members on the platform?',
      content: 'You can connect with other members by joining Whatsapp groups, and participating in discussions. Global Indians Info is designed to facilitate networking and connections among members.',
    },
    {
      title: ' Is my personal information safe on Global Indians Info?',
      content: 'We take privacy and security seriously. Your personal information is protected, and we have strict privacy policies in place. You can control the visibility of your information in your account settings.',
    },
    {
      title: ' How can I get involved in the Global Indians Info community?',
      content: 'To get involved, you can start by creating a profile, participating in discussions, attending events, and connecting with other members. You can also consider volunteering or contributing content to the platform. ',
    },
    {
      title: ' I have a question or issue with the website. How can I get help?',
      content: 'If you have any questions or encounter issues, you can reach out to our support team through the "Contact Us" page on our website.We will be happy to assist you',
    },
    {
      title: ' How can I stay updated with the latest news and events on Global Indians Info?',
      content: 'To stay updated, make sure to follow our social media channels and subscribe to our newsletter. You can also regularly check the website for the latest articles, news, and event listings.',
    },
    
    {
      title: 'My parents are visiting from India for 3 months and I am thinking about taking insurance for them. Could anyone please suggest which one to take with their experience?',
      content: 'Care is the only insurance offering cover for pre-existing conditions. Another one to consider is the insurance policy from Tata AIG.',
    },
    {
      title: 'My mother-in-law has run out of a prescription and she can only get it on Monday.It is for blood pressure medicine Amilodapine 5mg. The pharmacy isn’t issuing it without a prescription.',
      content: 'Call 111 and on her NHS number they will send a prescription to the pharmacy.',
    },
    
  ];

  return (
    <div className="section">
     
      {faqData.map((item, index) => (
        <div className={`accordion ${activeIndex === index ? 'active' : ''}`} key={index}>
          <div
            className="accordion-item"
            onClick={() => handleAccordionToggle(index)}
          >
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeIndex === index ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                <span className={`ml-auto rounded-circle bg-success p-2 m-2 ${activeIndex === index ? 'bg-white text-dark' : ''}`}>
                  {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
                
                {item.title}
                
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
            >
              <div className="accordion-body m-2">{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
AllFAQs.layout = "other";

export default AllFAQs;
