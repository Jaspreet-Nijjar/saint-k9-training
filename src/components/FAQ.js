import { useState } from 'react';
import { Faqdata } from '../data/Faqdata';
import '../styles/faq.css';

export const FAQs = () => {
  const [answer, setAnswer] = useState(false);

  const toggle = (index) => {
    if (answer === index) {
      return setAnswer(null);
    }

    setAnswer(index);
  };

  return (
    <>
      <section id="faq">
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <div className="faq-container">
          {Faqdata.map((item, index) => (
            <div
              className="item-container"
              key={index}
              onClick={() => toggle(index)}
            >
              <h3 className="item-card">{item.question}</h3>
              <span className="symbol">{answer === index ? '-' : '+'}</span>
              {answer === index && (
                <p className="item-answer active">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
