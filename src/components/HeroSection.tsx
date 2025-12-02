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
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.goldleafrevenuerecovery.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    // window.open(`https://${appSubdomain}`, '_blank');
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
        <Tagline>Trusted by Leading Brands</Tagline>
        <HeroTitle>
          Recover Failed Payments.
          <Highlight>Rescue Lost Revenue.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Turn payment failures into revenue wins with our cutting-edge recovery automation. 
          Powered by intelligent retry strategies, predictive analytics, and behavioral insights, we enable online 
          merchants to recapture up to 30% of declined transactions without disrupting the customer journey.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Launch App →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Schedule a Call
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
