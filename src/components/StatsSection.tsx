import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Average Member Savings',
      description: 'Members save hundreds annually through exclusive discounts on shopping, dining, travel, and entertainment experiences',
      value: '$850',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Partner Brands',
      description: 'Access exclusive deals from thousands of premium brands and retailers across all major lifestyle categories worldwide',
      value: '5,000+',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Our members consistently rate their experience as excellent, enjoying premium perks and personalized service daily',
      value: '96%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Exclusive Offers',
      description: 'New deals added weekly across dining, shopping, travel and entertainment ensuring fresh savings opportunities always',
      value: '200+',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Member Savings & Benefits</StatsSectionTitle>
        <StatsSectionDescription>
          Join thousands of satisfied members enjoying exclusive discounts and premium lifestyle perks every single day.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
