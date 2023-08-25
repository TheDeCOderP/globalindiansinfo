// pages/faq.js
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: 'My parents are visiting from India for 3 months and I am thinking about taking insurance for them. Could anyone please suggest which one to take with their experience?',
      content: 'Care is the only insurance offering cover for pre-existing conditions. Another one to consider is the insurance policy from Tata AIG.',
    },
    {
      title: 'My parents are visiting from India for 3 months and I am thinking about taking insurance for them. Could anyone please suggest which one to take with their experience?',
      content: 'Care is the only insurance offering cover for pre-existing conditions. Another one to consider is the insurance policy from Tata AIG.',
    },
    
    
  ];

  return (
    <div className="container my-5">
     
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
FAQPage.layout = "other";

export default FAQPage;
