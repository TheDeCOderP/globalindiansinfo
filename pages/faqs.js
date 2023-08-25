import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "My parents are visiting from India for 3 months and I am thinking about taking insurance for them. Could anyone please suggest which one to take with their experience?",
      answer: "Care is the only insurance offering cover for pre-existing conditions. Another one to consider is the insurance policy from Tata AIG."
    },
    // Add more FAQ entries as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
     
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

FAQ.layout = "other";
export default FAQ;
