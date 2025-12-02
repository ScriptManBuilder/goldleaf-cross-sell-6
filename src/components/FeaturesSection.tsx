import React from 'react';
import {
  FeaturesContainer,
  FeaturesContent,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription
} from '../styles/FeaturesSection.styles';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>
      ),
      title: 'Real-Time Recovery',
      description: 'Immediate identification and automatic retry execution within moments of transaction failure. Secure revenue before cart abandonment occurs.',
      color: '#0066cc'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Smart Retry Logic',
      description: 'Machine learning algorithms study failure patterns to perfect retry schedules, payment routing, and communication strategies for optimal conversion.',
      color: '#3388dd'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Fraud Prevention',
      description: 'Intelligent fraud detection separates genuine payment problems from malicious activity, safeguarding earnings while upholding compliance requirements.',
      color: '#00d4aa'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Advanced Analytics',
      description: 'Live reporting dashboards delivering powerful metrics on success rates, financial gains, failure trends, and strategic improvement pathways.',
      color: '#ff6b6b'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
        </svg>
      ),
      title: 'Seamless Integration',
      description: 'Ready-to-deploy connectivity with leading payment gateways (Stripe, PayPal, Authorize.net) and commerce platforms. Operational within 24 hours.',
      color: '#a855f7'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: 'Customer Experience',
      description: 'Transparent recovery operations that preserve customer confidence and loyalty. Zero buyer friction, only smooth transaction fixes working silently in the background.',
      color: '#ec4899'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesContent>
        <SectionTitle>Powerful Payment Recovery Platform</SectionTitle>
        <SectionDescription>
          Industry-leading solutions designed to convert payment failures into captured revenue streams.
        </SectionDescription>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper $color={feature.color}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
