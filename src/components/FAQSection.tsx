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
      question: 'What benefits are included in the membership?',
      answer: 'Your membership includes exclusive discounts on shopping, dining, travel, and entertainment, VIP rewards points, priority customer service, extended warranties, price protection, travel benefits including hotel and flight discounts, personal concierge service, and access to member-only events and experiences.'
    },
    {
      question: 'How much does membership cost?',
      answer: 'We offer flexible membership plans starting at $9.99/month or save with an annual plan at $99/year. All plans include full access to our network of partner brands and exclusive perks. You can upgrade or cancel anytime with no hidden fees.'
    },
    {
      question: 'How quickly can I start using my benefits?',
      answer: 'Benefits are available immediately upon joining. You will receive instant access to your digital membership card, mobile app, and our complete network of partner discounts. Start saving on your very first purchase as a member.'
    },
    {
      question: 'What types of discounts are available?',
      answer: 'Members enjoy discounts across thousands of brands including retail shopping (10-40% off), dining at restaurants (15-30% off), travel bookings (up to 50% off hotels), entertainment tickets, wellness services, and more. New exclusive deals are added weekly.'
    },
    {
      question: 'Can I share my membership benefits?',
      answer: 'Premium and Family tier memberships include additional member cards for household members. Basic memberships are for individual use only. All membership tiers can gift benefits to friends and family through our referral program.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! We offer a 30-day money-back guarantee on all memberships. If you are not completely satisfied with your benefits and savings within the first 30 days, we will provide a full refund, no questions asked.'
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
          Everything you need to know about your VIP membership and exclusive benefits
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
