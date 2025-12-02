import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does payment recovery work?',
      answer: 'Our platform identifies unsuccessful payments instantly and launches strategic retry sequences with optimized scheduling, gateway selection, and customer outreach. Everything runs automatically without requiring staff involvement.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'The majority of merchants go live in under 24 hours. Our turnkey integration connects effortlessly with top payment processors like Stripe, PayPal, Authorize.net, and Square. Limited technical effort needed.'
    },
    {
      question: 'What is your typical recovery rate?',
      answer: 'Most businesses see 15-30% recovery on declined payments. Actual performance varies based on your sector, transaction size, and decline causes. Comprehensive dashboards help you monitor results in real-time.'
    },
    {
      question: 'Is customer data secure?',
      answer: 'Without question. We maintain PCI DSS Level 1 certification and SOC 2 compliance. Payment information is protected with comprehensive encryption, and sensitive card details are never retained. Protecting your buyers is paramount.'
    },
    {
      question: 'What types of payment failures can you recover?',
      answer: 'We address multiple decline scenarios such as low balances, outdated cards, data entry mistakes, and brief banking disruptions. Our advanced logic determines which failures warrant recovery and deploys the best approach.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We use a success-based pricing structure—charges apply only when we successfully reclaim a declined payment. Zero upfront costs, zero monthly fees. Our revenue grows with yours, creating perfect alignment.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our payment recovery platform
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
