import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.goldleafvipperks.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Exclusive Benefits for Members</Tagline>
        <HeroTitle>
          Unlock Premium Perks.
          <Highlight>Save More Every Day.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Access exclusive discounts, VIP benefits, and lifestyle rewards with our premium membership program. 
          Enjoy savings on shopping, dining, travel, and entertainment while experiencing personalized service 
          designed to elevate your everyday lifestyle.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Launch App →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Talk to sales
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
